const e = require("express");
const g = e();
this.c = [];
g.get("/get",(q,s)=>{
    s.status(200);
    s.send({
        message:"Success",
        network:true
    })
})
g.post("/post",(q,s)=>{
    s.status(200);
    console.log(q);
})