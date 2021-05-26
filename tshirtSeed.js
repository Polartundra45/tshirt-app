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
        image: 'https://images.unsplash.com/photo-1616317038822-55eb03a3bc2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80',
        name: 'rose', 
        price : 15, 
        size : 'sm', 
    },
    {
        image: 'https://images.unsplash.com/photo-1621627107348-85f0ecd3f633?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80',
        name: 'mutant', 
        price : 20, 
        size : 'xL', 
    },
    {
        image: 'https://images.unsplash.com/photo-1621123073224-c10821c4224e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
        name: 'angry', 
        price : 10, 
        size : 'xxL', 
    },
    {
        image: 'https://images.unsplash.com/photo-1620935325184-f23de84c5bdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1875&q=80',
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