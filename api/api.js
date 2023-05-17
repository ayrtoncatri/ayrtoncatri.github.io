
function climaActual(){
    window.addEventListener('load', () =>{
        let lon;
        let lat;

        let temperaturaValor = document.getElementById('temperatura-valor');
        let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

        let ubicación = document.getElementById('ubicacion');
        let iconoAnimado = document.getElementById('icono-animado');

        let vientoVelocidad = document.getElementById('viento-velocidad');

        let mensaje = document.getElementById('mensaje');

        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
                //console.log(posicion);  
                
                lon = posicion.coords.longitude;
                lat = posicion.coords.latitude;  
                //Ubicacion actual

                const url = `https://api.openweathermap.org/data/2.5/weather?&lang=es&lat=${lat}&lon=${lon}&appid=92692ddcc9bc05bd8890fba122f9f07f`;
                
                //Ubicacion por ciudad

                //const url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};
                //console.log(url);

                fetch(url)
                .then(response => {return response.json() })
                .then( data => {
                    let temp = Math.round(data.main.temp);
                    temperaturaValor.textContent = `${Math.round(temp - 273.15)} ° C`;
                    // console.log(data);
                    let desc = data.weather[0].description;
                    temperaturaDescripcion.textContent = desc.toUpperCase();

                    ubicación.textContent = `${data.name}`;

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`;

                //para iconos estaticos
                //let iconCode = data.weather[0].icon;

                //const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`;

                //console.log(urlIcon);

                //para iconos animados

                switch(data.weather[0].main){
                    case 'Thunderstorm':
                        iconoAnimado.src='animated/thunder.svg';
                        mensaje.textContent = 'No es un buen día para llevar tu auto a nuestro taller';
                        break;
                    case 'Clear':
                        iconoAnimado.src = 'animated/day.svg';
                        mensaje.textContent = 'Es un día perfecto para llevar tu auto a nuestro taller';
                        break;
                    case 'Drizzle':
                        iconoAnimado.src = 'animated/rainy-4.svg';
                        mensaje.textContent = 'Es un día para llevar tu auto a nuestro taller';
                        break;
                    case 'Clouds':
                        iconoAnimado.src = 'animated/cloudy-day-1.svg';
                        mensaje.textContent = 'Lleva tu auto a nuestro taller';
                        break;
                    case 'Rain':
                        iconoAnimado.src='animated/rainy-7.svg';
                        mensaje.textContent = 'Al llevar tu auto a nuestro taller, maneja con precaución';
                        break;
                    case 'Atmosphere':
                        iconoAnimado.src='animated/weather.svg';
                        mensaje.textContent = 'Lleva tu auto a nuestro taller';
                        break;
                    case 'Snow':
                        iconoAnimado.src='animated/snowy-6.svg';
                        mensaje.textContent = 'Abrigate al llevar tu auto a nuestro taller';
                        break;
                    default:
                        iconoAnimado.src='animated/cloudy-day-1.svg';
                        mensaje.textContent = 'Trae tu auto a nuestro taller sin preocupacion';
                }

                // if(data.weather[0].main == 'Thunderstorm'){
                //     mensaje.textContent = 'No es un buen día para llevar tu auto a nuestro taller';
                // }
                // if(data.weather[0].main == 'Clear'){
                //     mensaje.textContent = 'Es un día perfecto para llevar tu auto a nuestro taller';
                // }
                // if(data.weather[0].main == 'Drizzle'){
                //     mensaje.textContent = 'Es un día para llevar tu auto a nuestro taller';
                // }
                // if(data.weather[0].main == 'Clouds'){
                //     mensaje.textContent = 'Lleva tu auto a nuestro taller';
                // }
                // if(data.weather[0].main == 'Rain'){
                //     mensaje.textContent = 'Al llevar tu auto a nuestro taller, maneja con precaución';
                // }
                // if(data.weather[0].main == 'Atmosphere'){
                //     mensaje.textContent = 'Lleva tu auto a nuestro taller';
                // }
                // if(data.weather[0].main == 'Snow'){
                //     mensaje.textContent = 'Abrigate al llevar tu auto a nuestro taller';
                // }
                // else{
                //     mensaje.textContent = 'Trae tu auto a nuestro taller sin preocupacion';
                // }
                
                console.log(data);
                })
                .catch( error => {
                    console.log(error)
                });
            });
        };

    });
};

climaActual();





// // Obtener el clima actual basado en la ubicación
// function obtenerClimaActual() {
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1236faf23dmshbaf23c7532c27bfp1a5f71jsn978586bd5da4',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	    }   
//     };

//     fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-33.507129%2C-70.769332", options)
//         .then(res => res.json())
//         .then(resp =>{
//             let datos = `<h1>${resp.location.country}</h1>` + `<h1>${resp.location.name}</h1>` + `<h1>${resp.current.temp_c}</h1>`;
//             document.getElementById('container').innerHTML = datos;
//         });
//   }
  
//   // Ejemplo de uso
//   obtenerClimaActual();


//   function obtenerAutos(){
//         const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '1236faf23dmshbaf23c7532c27bfp1a5f71jsn978586bd5da4',
//             'X-RapidAPI-Host': 'cars-image-background-removal.p.rapidapi.com'
//         }
//     };
//     fetch("https://cars-image-background-removal.p.rapidapi.com/v1/modes",options)
//     .then(res => res.json())
//     .then(resp =>{
//         let datos = 
//         `
//         <div class = auto>
//             <img class="img-auto" src="${resp.fg-image}">;
//         </div>`
//         document.getElementById('container-autos').innerHTML = datos;
//     });
//   }
//   obtenerAutos();
  


// const cargaTemp = async()=>{
   
//     try{
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '1236faf23dmshbaf23c7532c27bfp1a5f71jsn978586bd5da4',
//                 'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//             }
//         }
//         const respuesta = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=-33.507129%2C-70.769332",options);
//         console.log(respuesta);
        
//         const datos = await respuesta.json();
//         console.log(datos.country);

//     }catch(error){
//         console.log(error);

//     }
// } 