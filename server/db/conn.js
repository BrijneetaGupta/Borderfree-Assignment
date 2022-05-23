const mongoose = require('mongoose');
// connecting to mongodb atlas
const DB = process.env.DATABASE;


mongoose.connect(DB).then(() =>{
    console.log('Connection successful');
}).catch((err) => console.log('no connection'));
