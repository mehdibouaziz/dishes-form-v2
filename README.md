# Dish form assignment

## How to setup

If runnning the project shared by email, it does not include the node_modules folder to save space.
To recreate it navigate to the project folder and run :
### `npm install`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you can start a live preview by navigating to the project directory and running :
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Notes

Here is the recorded time needed to achieve the functionnalities requested in the assignement.
My goal was to quickly produce a v1 to fullfil the core requirements, and then work on a v2 to complete the bonus tasks.

### v1 - core functions : ~ 3hrs
[v1 GitHub repository](https://github.com/mehdibouaziz/dishes-form-v1)
[v1 GitHub Pages preview](https://mehdibouaziz.github.io/dishes-form-v1/)
* project setup and form structure: 45mn
* form interactivity: 1h (managing the fields with the state, handler functions)
* POST request with fetch() + testing: 30mn
* Learning how to catch 4xx/5xx errors : 1h

### v2 - retrofit with redux-form and UI work: ~7hrs
[v2 GitHub repository](https://github.com/mehdibouaziz/dishes-form-v2)
[v2 GitHub Pages preview](https://mehdibouaziz.github.io/dishes-form-v2/)

* redux-form learning and retrofit to achieve core functions: 3hrs
* UI base: 1h
* redux-form validation and effects on UI: 2hrs
* UI finishing touches: 1h
* Error fixing : 30mn

### component structure
DishesForm > DishesPage > App > index > render

### Additional notes
the redux-form documentation was imo generally easy to follow to achieve basic functions but the advanced functionalities were sometimes difficult to find/understand
There are still 2 error left in the console in live preview, I suppose that's because redux-form is using older lifecycle methods ?
Overall redux-form is a neat library and I’m pleased to have learned it :)