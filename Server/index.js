const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const port = 3000;

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const UserRouter = require('./Routers/UserRouter');
app.use(UserRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
