let input = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let resultDiv = document.getElementById("resultDiv");

const apiKey = "00b2d99aadf54e5fa0625208242504";
const weatherApiUrl = "http://api.weatherapi.com/v1/current.json";

searchBtn.addEventListener("click", function(){
    // clear previous search results
    resultDiv.innerHTML = "";
    let q = input.value;
    getWeather(q);
});

async function getWeather(keyword){
    //make sure the user isn't sending empty keywords.
    if(!keyword){
        return;
    }
    let response = await fetch(`${weatherApiUrl}?key=${apiKey}&q=${encodeURIComponent(keyword)}&aqi=no`);
    let data = await response.json()
    
    let imgElem = document.createElement("img");
    imgElem.src = data.current.condition.icon;
    let pElem = document.createElement("p");
    pElem.innerText = `City: ${data.location.name} \nWeather: ${data.current.condition.text} \nTemperature: ${data.current.temp_c}`

    resultDiv.appendChild(imgElem);
    resultDiv.appendChild(pElem);
}

