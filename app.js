const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const tshirtRoute = require('./routes/tshirtsRoute');

mongoose.connect('mongodb://localhost:27017/tshirtDB', {
    useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database Connected');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/shirt', tshirtRoute);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('Server is live');
});