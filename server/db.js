const mysql=require('mysql');

const db=mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"",
    database:"earnest"
})

db.connect((err)=>{
    if(err){
        console.error('Error connecting to MySQL', err);
    }
    else{
        console.log('Connected to MySQL');
    }

})


module.exports =db;


