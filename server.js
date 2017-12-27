// ******************************************
// INITIALIZATION
// ******************************************
// Server specific version of Zone.js for SSR
require('zone.js/dist/zone-node');

// Dependencies
const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Express and Port
const app = express();
const port = process.env.PORT || 3000;

// Server Bundle
const appServer = require('./dist-server/main.bundle');

// Connect to database via mongoose
const config = require('./config/database');
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { useMongoClient: true, promiseLibrary: require('bluebird') })
    .then(() => console.log(`Connected to database ${config.database}`))
    .catch((err) => console.log(`Database error: ${err}`));

// Routes
const angular = require('./routes/angular');
const api = require('./routes/api');

// ******************************************
// MIDDLEWARE
// ******************************************
// Logger
app.use(morgan('dev'));

// Body-Parser
app.use(bodyParser.json());

// Cross-Origin Resource Sharing (CORS) - Uncomment to Enable
// app.use(cors());

// ******************************************
// ROUTES
// ******************************************
// Server side-rendering of root route
app.get('/', angular.serverRouter);

// API calls go here
app.use('/api', api);

// Serve static files
app.use(express.static(`${__dirname}/dist`));

// Configure Angular Express engine
app.engine('html', ngUniversal.ngExpressEngine({
    bootstrap: appServer.AppServerModuleNgFactory
}));
app.set('view engine', 'html');
app.set('views', 'dist');

// Direct all other routes to index.html
app.get('*', angular.serverRouter);

// ******************************************
// API ERROR HANDLER
// ******************************************
// Error handler for 404 - Page Not Found
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    res.status(404).json({
        status: 404,
        message: err.message,
        name: err.name
    });
});

// Error handler for all other errors
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).json({
        status: 500,
        message: err.message,
        name: err.name
    });
});

// ******************************************
// SERVER START
// ******************************************
app.listen(port, () => console.log(`Server started on port ${port}`));
