<form onSubmit={handleSubmit}>
        <div className="input_div">
            <label htmlFor="name">Dish name: </label>
            <Field name="name" component="input" type="text" placeholder="Dish name"></Field>
        </div>
        <div className="input_div">
            <label htmlFor="preparation_time">Prep time: </label>
            <Field name="preparation_time" component="input" type="text" placeholder="00:00:00"></Field>
        </div>
        <div className="input_div">
            <label htmlFor="type">Dish type: </label>
            <Field name="type" component="select">
                <option />
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
            </Field>
        </div>

        {typeValue === "pizza" && (
            <div>
                <div className="input_div">
                    <label htmlFor="no_of_slices">How many slices? </label>
                    <Field name="no_of_slices" component="input" type="number" min="0" step="1"></Field>
                </div>
                <div className="input_div">
                    <label htmlFor="diameter">What diameter? </label>
                    <Field name="diameter" component="input" type="number" min="0" step="0.1"></Field>
                </div>
            </div>
        )}

        {typeValue === "soup" && (
            <div className="input_div">
                <label htmlFor="spiciness_scale">Spiciness (1-10): </label>
                <Field name="spiciness_scale" component="input" type="range" min="1" max="10" step="1"></Field>
            </div>
        )}

        {typeValue === "sandwich" && (
            <div className="input_div">
                <label htmlFor="slices_of_bread">How many slices of bread? </label>
                <Field name="slices_of_bread" component="input" type="number" min="1" step="1"></Field>
            </div>
        )}
        



        <button type="submit">
            Submit
        </button>

    </form>