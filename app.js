const express = require("express")
const app = express()
const PORT = 3000
const path = require ("path")


const forecast = require("./weatherFunction/forecast")
const geocode = require("./weatherFunction/geocode.js")


const staticPath =  path.join(__dirname , './views')
app.use (express.static (staticPath))


app.set('view engine', 'hbs');
app.get("/",(req , res)=>{
    res.render("index")
})
app.get("/weather" , (req , res)=>{
    if(!req.query.address){  
       return res.send( "enter your country")
    }
    geocode(req.query.address , (error,data)=>{
        if(error){
            return res.send({error})
        }
    forecast(data.longtitude,data.latitude,(error,Wdata)=>{
        if(error){
            return res.send({error})
        }
        else{
            return res.send({
                country : "Country Is " + req.query.address,
                latitude : "latitude Is " + data.latitude,
                longtitude : "longtitude Is " + data.longtitude,
                forecast : "Forecast Is " + Wdata

            })
        }
        })
    })
    
})





app.get('*' , (req , res)=> {
    res.send('404 Page Not Founded')
 })

app.listen(PORT , ()=>{
    console.log("http://localhost:3000")
})