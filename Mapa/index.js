let marker, map;

function initMap() {
const playa = {
        lat:9.488600 , 
        lng: -84.295097
}
const volcan = {
    lat:10.19993123326647,
    lng:-84.2305557711149 
}

const hogar = {
    lat:9.637099820161941, 
    lng:-84.2937129555877
}



    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: playa
    })

    marker = new google.maps.Marker({
        position: playa,
        map,
        title: "playa"
    })

    secondMarker = new google.maps.Marker({
        position: volcan,
        map,
        title:"volcan"
    })

    thirdmarker = new google.maps.Marker({
        position:hogar,
        map,
        title:"hogar"
    })

    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}