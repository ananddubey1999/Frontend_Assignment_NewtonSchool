const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const  con  = require('./connector');
//const refreshAll = require('./createdatabase');

app.get('/api/events',(req,res)=>{
    con.query('select * from events',(err,result)=>{
        res.status(200);
        res.send(result)
        //console.log(result)
    })
})

app.get('/api/events/:date',(req,res)=>{
    const d=req.params.date;
    const sql=`select * from events where date="${d}"`
    con.query(sql,(err,result)=>{
        res.status(200);
        res.send(result)
        //console.log(result)
    })
})

app.post('/api/events/:date',(req,res)=>{
    const d=req.params.date;
    const body=req.body.slots;
    let flag=0;
    let sql;
    con.query(`select id from events where date="${d}"`,(err,result)=>{
        if(err)res.send(err)
        else if(result.length>0){
            console.log('updating');
            sql=`update events set slot1=${body[0]}, slot2=${body[1]}, slot3=${body[2]}, slot4=${body[3]}, slot5=${body[4]}, slot6=${body[5]}, slot7=${body[6]}, slot8=${body[7]}, slot9=${body[8]}, slot10=${body[9]}, slot11=${body[10]}, slot12=${body[11]}, slot13=${body[12]}, slot14=${body[13]} where id=${result[0].id} `
            con.query(sql,(err,result)=>{
                if(err) res.send(err);
                res.status(200).json({ msg: "Slot Added"});
                //console.log((sql))
            })
            flag=1;
        }
        else{
            
                console.log('adding');
                sql=`insert into events(date,slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot8,slot9,slot10,slot11,slot12,slot13,slot14) values ("${d}",${body[0]},${body[1]},${body[2]},${body[3]},${body[4]},${body[5]},${body[6]},${body[7]},${body[8]},${body[9]},${body[10]},${body[11]},${body[12]},${body[13]}) `
                con.query(sql,(err,result)=>{
                    if(err) res.send(err);
                    res.status(200).json( {msg: "Slot Added"});
                   // console.log((sql))
                })
        }
    })
    
    
    

    // const sql=`update events set slot1=${body[0]} slot2=${body[1]} slot3=${body[2]} slot4=${body[3]} slot5=${body[4]} slot6=${body[5]} slot7=${body[6]} slot8=${body[7]} slot9=${body[8]} slot10=${body[9]} slot11=${body[10]} slot12=${body[11]} slot13=${body[12]} slot14=${body[13]} where date="${d}" `
    
    // console.log(sql)
})

app.get('/api/names',(req,res)=>{
    con.query('select * from user',(err,result)=>{
        res.status(200)
        res.send(result)
        //console.log(result)
    })
})

app.post('/api/names',(req,res)=>{
    
    const body=req.body.name;
    let flag=0;
   
    const sql=`insert into user(name) values ("${body}") `
    con.query(sql,(err,result)=>{
        
        res.status(200).json({msg: "Name Added"});
        //console.log((sql))
    })
    // console.log(sql)
})

app.listen(port, () =>{ 
    
    console.log(`App listening on port ${port}!`)})

module.exports = app;
