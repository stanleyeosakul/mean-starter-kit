<p align="center">
    <img width="400" height="185" src="./src/assets/pics/mean.png">
</p>

# MEAN Starter Kit w/ Angular Universal
This MEAN Starter Kit is a template for Angular 5 MEAN projects and is integrated with Angular Universal.  MEAN is a full-stack development toolkit using the Javascript-based technologies MongoDB, Express, Angular, and Node.js.  It uses JavaScript for client-side and server-side web application development.

<p align="center">
    <img width="768" height="310" src="./src/assets/pics/mean_cycle.jpg">
</p>

## Versions
* MongoDB v3.6.0 (Mongoose v4.13.8)
* Express v4.16.2
* Angular v5.1.2
* Node.js v9.3.0

## Installation
1. Clone this repo: `git clone https://github.com/Stanza987/mean-starter-kit.git`
1. `cd` into the folder of the cloned repo
1. Run `npm install` to install dependencies
1. Start your local MongoDB instance
1. Choose to run the development or production server
    * Development
        * Front End (Angular)
            * Run `ng serve`, and navigate to `http://localhost:4200/`. 
        * Back End (MongoDB, Express, Node.js)
            * Run `npm run dev`, and navigate to `http://localhost:3000/`.
    * Production
        * Run `npm start`, and navigate to `http://localhost:3000/`.

## Built-in scripts
* `npm run dev`
    * Builds the Angular project into the `dist/` folder without build optimization
    * Builds the Angular Universal server into the `dist-server/` folder without build optimization
    * Runs the `server.js` node app
* `npm run build`
    * Builds the Angular project into the `dist/` folder
    * Builds the Angular Universal server into the `dist-server/` folder
* `npm start`
    * Runs `npm run build` as above
    * Runs the `server.js` node app

## Installed Packages
### Front-end
* Angular 5
* Angular Universal
* [Bulma CSS Framework](https://bulma.io/)
* [Font-Awesome 5](https://fontawesome.com/)

### Back-end
* Express
* Mongoose
* Body-Parser
* Bluebird Promise library

### Development and Testing
* Angular CLI v1.6.3
* Morgan Logging library
* Typescript
* Karma
* Protractor
* Jasmine
