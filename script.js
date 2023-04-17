const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1bd5c64a9amsh16fd49575569468p1ec99cjsn5cbbbb8c631d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let getweather = (city)=>{  
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp2.innerHTML = response.temp
		document.getElementById('temp').innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		 
		

		
	})
	.catch(err => console.error(err));
}


submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getweather(city.value)
})