require('dotenv').config();
const express = require ("express");
const app = express ();


app.get ('/',(req,res)=>{
    console.log('prueba home')  
    res.send('Prueba exitosa')
})

app.listen(process.env.PORT , ()=>{
  
    console.log('Se levanta API ' + process.env.PORT)
})