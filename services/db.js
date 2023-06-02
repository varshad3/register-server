const mongoose=require('mongoose')

// using mangoose define connection between mongodb and express
mongoose.connect('mongodb://localhost:27017/studentServer')

// create a model/schema/collection data in db

const Student = mongoose.model('Student',{
    firstname:String,
    lastname:String,
    address:String,
    mobile:Number,
    dob:String,
    email:String,
    gender:String,
    course:String
})

// export the collection/model/schema

module.exports={
    Student
}