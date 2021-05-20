const mongoose = require('mongoose');
const Tshirt = require('./models/tshirts');

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

const tshirtSeeds = [
    {
        image: 'abc',
        name: 'rose', 
        price : 15, 
        size : 'sm', 
    },
    {
        image: 'abc',
        name: 'mutant', 
        price : 20, 
        size : 'xL', 
    },
    {
        image: 'abc',
        name: 'angry', 
        price : 10, 
        size : 'xxL', 
    },
    {
        image: 'abc',
        name: 'dagger', 
        price : 15, 
        size : 'L', 
    },
];

Tshirt.insertMany(tshirtSeeds)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });