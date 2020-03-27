const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express();

// app.use(cors({
//     origin : 'host'
// }));

const corsOptions = {
    exposedHeaders: 'X-Total-Count',
};

app.use(cors(corsOptions));

/**
 * Transforma automaticamente as infos em JSON
 */
app.use(express.json());

app.use(routes);

app.use(errors());

module.exports = app;