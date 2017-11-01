Oide Japan Frontend (React)
============

Front-end UI test for Oide Japan based on `react-rocket` (ReactJS, React Router, RefluxJS) and Foundation.

![oidejapan-frontend-react](https://user-images.githubusercontent.com/9514732/32268388-39424ee2-bf32-11e7-80e9-a3ade121451b.gif)

A demo React app for the business-facing UI of the Oide Japan platform, designed so that UI/UX logic is handled on the client-side initial load, and subsequent content is fed to the client through a REST API with no need for page reloading or redirecting. View the app source in `app/js`.

React components (header, footer, and sidebar components) are defined in `app/js/components`. Sample menu data is loaded from `app/data.js` which is just a JSON object that defines menu items according to the React component structure, and also defines each item's properties (route, action, font-awesome icon, and text label). Routing is programmatically fed to the app from the JSON data in `app/Routes.js` by similarly following the JSON structure in the test data.

The sample menu data in `app/data.js` is intended to be replaced by an API endpoint (JSON served over Rails, Laravel, etc) allowing the UI to be easily managed on the backend, ie: menu items can easily be added/replaced/modified/disabled/etc by simply altering the JSON data on the backend and the UI would be updated with no need to recompile/deploy the frontend React app.

Views are defined in `app/js/pages` and represent traditional content views. These are loaded programmatically through React Router as defined in `app/Routes.js`. For testing, all views default to `EmptyPage`, but would be modified to load views according to the route/action definitions in the sample menu data, and ultimately consumed by an API endpoint that serves JSON or even raw HTML that would be loaded by the React component.

Build toolchain is handled by Gulp for building and bundling the JS app (`gulp browserify`), compiling Foundation Sass (`gulp sass`), monitoring source files for recompiling/browser sync (`gulp watch`), etc.

---

### Running

1. Clone this repo
2. `npm install`
3. `npm install -g gulp` if you don't have Gulp installed
3. `gulp dev`
4. Browser should automatically launch. If not, point your browser to `http://localhost:3001/`
