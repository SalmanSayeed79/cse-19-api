const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send("hello world response")
})



app.listen(3000,()=>{
    console.log("hello world")
})