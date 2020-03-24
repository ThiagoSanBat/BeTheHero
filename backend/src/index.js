const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express();

// app.use(cors({
//     origin : 'host'
// }));

app.use(cors());

/**
 * Transforma automaticamente as infos em JSON
 */
app.use(express.json());

app.use(routes);

app.listen(3333);