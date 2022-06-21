import React from "react";
import { useState } from "react";
import "../styles/DishesForm.css";

const DishesForm = () => {
  const defaultDishData = {
    //default data object to initiate and reset the form
    name: "",
    preparation_time: "00:00:00",
    type: "",
    no_of_slices: 0,
    diameter: 0,
    spiciness_scale: 1,
    slices_of_bread: 1,
  };

  const [dishData, setDishData] = useState({ ...defaultDishData });

  const handleChange = (event) => {
    let value = event.target.value;
    if (
      [
        "no_of_slices",
        "diameter",
        "spiciness_scale",
        "slices_of_bread",
      ].includes(event.target.name)
    ) {
      value = +value;
    } //convert strings to numbers

    setDishData({
      ...dishData,
      [event.target.name]: value,
    });
    return;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //prevent automatic refresh, reset and rerooting of the page

    let data = { ...dishData };

    // trim the irrelevant properties for the chosen dish:
    switch (data.type) {
      case "pizza":
        delete data.spiciness_scale;
        delete data.slices_of_bread;
        break;
      case "soup":
        delete data.no_of_slices;
        delete data.diameter;
        delete data.slices_of_bread;
        break;
      case "sandwich":
        delete data.no_of_slices;
        delete data.diameter;
        delete data.spiciness_scale;
        break;
      default:
        break;
    }

    // send POST
    postData(data);

    //clear form, back to default
    setDishData({ ...defaultDishData });
  };

  const postData = async (data) => {
    const response = await fetch(
      "https://frosty-wood-6558.getsandbox.com:443/dishes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.status >= 200 && response.status <= 299) {
      //separate true 200 success from 4xx/5xx errors
      const jsonResponse = await response.json();
      console.log("Success:", jsonResponse);
    } else if (response.status >= 400 && response.status <= 599) {
      //correctly logging 4xx and 5xx as errors with reason
      const jsonResponse = await response.json();
      console.error("Error:", jsonResponse);
    } else {
      //general error handler
      console.log(response.status, response.statusText);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input_div">
          <label>
            Dish name:
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name of your dish"
              required
              value={dishData.name}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div className="input_div">
          <label>
            Prep time:
            <br />
            <input
              type="text"
              id="preparation_time"
              name="preparation_time"
              pattern="[0-9][0-9]:[0-5][0-9]:[0-5][0-9]"
              placeholder="00:00:00"
              required
              value={dishData.preparation_time}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div className="input_div">
          <label>
            Dish type:
            <br />
            <select
              name="type"
              id="type"
              value={dishData.type}
              onChange={handleChange}
              required
            >
              <option value="" disabled></option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="sandwich">Sandwich</option>
            </select>
          </label>
        </div>


        {/* The following fields are rendered only if relevant to the chosen dish
            Since irrelevant fields are not rendered, they are not required */}
        {dishData.type === "pizza" &&
          <>
            <div className="input_div">
              <label>
                Number of slices ?<br />
                <input
                  type="number"
                  id="no_of_slices"
                  name="no_of_slices"
                  min="0"
                  step="1"
                  required
                  value={dishData.no_of_slices}
                  onChange={handleChange}
                ></input>
              </label>
            </div>

            <div className="input_div">
              <label>
                Diameter ?<br />
                <input
                  type="number"
                  id="diameter"
                  name="diameter"
                  min="0"
                  step="0.01"
                  required
                  value={dishData.diameter}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
          </>
        }

        {dishData.type === "soup" &&
          <>
            <div className="input_div">
              <label>
                Spiciness scale (1-10):
                <br />
                <input
                  type="range"
                  id="spiciness_scale"
                  name="spiciness_scale"
                  min="1"
                  max="10"
                  step="1"
                  required
                  value={dishData.spiciness_scale}
                  onChange={handleChange}
                ></input>{" "}
              </label>
              {dishData.spiciness_scale}
            </div>
          </>
        }

        {dishData.type === "sandwich" &&
          <>
            <div className="input_div">
              <label>
                How many slices of bread?
                <br />
                <input
                  type="number"
                  id="slices_of_bread"
                  name="slices_of_bread"
                  min="1"
                  step="1"
                  required
                  value={dishData.slices_of_bread}
                  onChange={handleChange}
                ></input>
              </label>
            </div>
          </>
        }

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default DishesForm;
