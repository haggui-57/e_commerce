const express = require('express');
const app = express();
require('express-async-errors');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user123:user123@mini-mern.b3imf.mongodb.net/shop1?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => console.log(err));


app.use(require('cors')());
app.use(express.json());

require('./routes')(app);


app.use(express.static('client/build'));
app.get('*', (req, res) => res.sendFile(`${__dirname}/client/build/index.html`));

app.use(require('./middlewares/error'));

app.listen(process.env.PORT || 5000);