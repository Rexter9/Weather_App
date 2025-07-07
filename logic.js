const temperatureField = document.querySelector(".weather1")
const cityField = document.querySelector(".weather2 p")
const dateField = document.querySelector(".weather2 span")
const emojiField = document.querySelector(".weather3 img")
const WeatherField = document.querySelector(".weather3 span")

const search = document.querySelector(".search")
const form = document.querySelector("form");
let target ="delhi"

const fetchData = async()=>{
try{
        const url = `https://api.weatherapi.com/v1/current.json?key=5b27a6ef3547402582e62007222306&q=${target}`

   const response = await fetch(url);
   const data = await response.json();

//    console.log(data);

    const {
        current:{temp_c,condition:{text,icon}},
        location:{name,localtime},
         
      } = data;

   updateDom(temp_c,name,localtime,icon,text);
}
catch(error){
    alert("Location Not Found");
};
};

function updateDom(temp,city,time,emoji,text){
    temperatureField.innerText=temp;
    cityField.innerText= city;
    const exactTime = time.split(" ")[1]
     const exactDate = time.split(" ")[0]
     const exactDay = new Date(exactDate).getDate();
     
     console.log(exactDate);
    console.log(exactTime);
    console.log(getDay(4));
    
    dateField.innerText=`${exactTime} - ${getDay(exactDay)}  ${exactDate}`
    emojiField.src=emoji;
    WeatherField.innerText=text;
}   

fetchData();

function getDay(num){

    switch (num) {
        case 0:
            return "Sunday"
            break;
    
        case 1:
            return "Monday"

        case 2:
            return "Tuesday"

        case 3:
            return "Wednesday"

        case 4:
            return "Thursday"

        case 5:
            return "Friday"

        case 6:
            return "Saturday"

        case 7:
            return "Sunday"
        default:
            return "Don't Know"
            break;
    }
}
const searching =(e)=>{
    e.preventDefault();

    target = search.value;
    fetchData();

}

form.addEventListener("submit",searching)