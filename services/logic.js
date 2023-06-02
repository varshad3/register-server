// import db.js
const db=require('./db')
// register

     // define the logic to resolve register
const register=( firstname,
    lastname,
    address,
    mobile,
    dob,
    email,
    gender,
    course)=>{
    console.log('indise register logic');

    // check dats if present in db -promise
    return db.Student.findOne({
        email
    }).then((response)=>{
      
    if(response){
        // firstname already exost
        return{
            statusCode:401,
            message:"Account already Registered..."
        }
    }
    else{
    // if not present insert to db
        const newStudent = new db.Student({
            firstname,
            lastname,
            address,
            mobile,
            dob,
            email,
            gender,
            course
        })

        // to srote new student in mongo db 
        newStudent.save()
        // response to register success
        return{
            statusCode:200,
            message:"successfully registered"
        }
    }

    })
}
const getData=()=>{  
    return db.Student.find()

    .then((result)=>{
        console.log(result);
        if (result){
            return{
                statusCode:200,
                result:result
                
            }
        }
    })
}
module.exports={
    register,
    getData
}