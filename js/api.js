//API

{/* <script>
        fetch('http://api.carmd.com/v3.0/image?year=<2019>&make=<CHEVROLET>&model=<EQUINOX>&engine=<L4, 2.4L; DOHC; 16V; DI; FFV>')
        .then((respuesta) => {
            return respuesta.json();
        }).then((respuesta) => {
            document.getElementById('anho').value = respuesta.year;
            document.getElementById('marca').value = respuesta.make;
            document.getElementById('modelo').value = respuesta.model;
            document.getElementById('motor').value = respuesta.engine;

        })
</script> */}

let apiUrl = `https://apis.digital.gob.cl/fl/feriados/2013`;

fetch(apiUrl).then((resp) => resp.json()).then(dato => {
    console.log(dato);
});