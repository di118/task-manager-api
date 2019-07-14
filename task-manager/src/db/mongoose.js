// mongod --dbpath ../../mongodb-data/
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
})




// me.save().then((result) =>{
//     console.log("me was saved" , me);
// }).catch((error) =>{
//     console.log("Error", error);
// })

// const task1 = new Task({
//     description:"    Take break!"
// })

// task1.save().then((result) =>{
//     console.log("Saved !! " , result);
// }).catch((error) =>{
//     console.log("Not saved!!", error);
// })