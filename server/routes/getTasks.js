const express = require('express');
const app = express();
const db=require('../db.js')
const router = express.Router();

////////////////////////////////////////////////////////////////////////////////
router.get('/getTasks', (req, res)=>{
     const sql='Select * from tasks';

     db.query(sql, (err, results)=>{
        if(err){
            console.log('Error fetch tasks from Mysql: ', err);
            res.status(500).json({error: 'Internal server error'});
        }
        else{
            console.log('tasks fetched from MySQL:', results);
            res.status(200).json(results);
        }
     })
})


module.exports = router;
