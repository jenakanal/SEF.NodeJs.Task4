
const request = require("request")



const forecast = ( latitude , longtitude ,callback)=>{
    const weatherURL = "https://api.weatherapi.com/v1/current.json?key=ec63568f47b24ac995a113736241807&q="+latitude+","+longtitude

    request({url : weatherURL , json : true} , (error , response)=>{
        if(error){
        callback("can not reatch the side",undefinde)
        }
        else if (response.body.error){
            callback(response.body.error.message , undefined)
        }
        else {
            callback(undefined , "forecast is " + response.body.current.temp_c + " "+response.body.current.temp_f +" "+ response.body.current.condition.text )
        }
    })
}

module.exports = forecast