let countury = document.getElementById('countury')
let latitude = document.getElementById('latitude')
let longtitude = document.getElementById('longtitude')
let forecast = document.getElementById('forecast')
let error = document.getElementById('error')
let pragraph = document.querySelectorAll("p")


pragraph.forEach((ele , index) => {
    console.log(ele)
    console.log(index)
});



let form = document.getElementById('form1')
form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    pragraph[0].classList.replace("unhiden" , "hiden");
    console.log( pragraph[0])
    weather()
    form.reset()
})


let weather = async()=> {
    try{
        let input = document.getElementById("input").value
        const res = await fetch('http://localhost:3000/weather?address='+input)
        const data = await res.json()
        if(data.error){
            error.innerHTML = data.error 
            pragraph[5].classList.replace("hiden" ,"unhiden")
            for (let index = 1; index < pragraph.length-1; index++) {
                pragraph[index].classList.replace("unhiden" , "hiden")
           }
        }
        else{
           for (let index = 1; index < pragraph.length-1; index++) {
                setTimeout(() => {
                    pragraph[index].classList.replace("hiden" ,"unhiden")
                }, index * 1000);

           }
            countury.innerHTML=data.country
            latitude.innerHTML= data.latitude
            longtitude.innerHTML=data.longtitude
            forecast.innerHTML= data.forecast
            pragraph[5].classList.replace("unhiden" , "hiden")
        }
    }
    catch(e) {
        console.log(e)
    }
}
