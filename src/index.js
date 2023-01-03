require('dotenv').config();
const e = require("express");
const g = e();
const { decycle, encycle } = require('json-cyclic');
g.use(e.json());
this.c = [];
const n = require("../data/index.json");
g.use(e.static('docs'));
g.get("/get",(q,s)=>{
    s.status(200);
    s.send({
        message:"Success",
        network:true
    })
})
g.post("/post",(q,s)=>{
    s.status(200);
    this.z = JSON.stringify(decycle(q))
    //console.log(this.z);
    console.log(q.body);
    this.c.push(q.body);
    console.log(this.c);
    s.send(q.body);
})
g.get("/api",(q,s)=>{
    s.status(200);
    var best = {
        score:0,
        body:"Noname",
        date:'2023-01-01 00:00:00'
    }
    for(var i=0;i<this.c.length;i++){
        if(this.c[i].score>best.score){
            best.score = this.c[i].score;
            best.body = this.c[i].body;
            best.date = this.c[i].date;
        }
    }
    s.send(best);
})
g.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})