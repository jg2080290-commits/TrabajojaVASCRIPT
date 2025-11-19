let map = L.map('map').setView([40.4506, -3.698603], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Mi OpenStreetMap'
}).addTo(map);

let greenIcon = L.icon({
    iconUrl: '../imagenes/leaf-green.png',
    shadowUrl: '../imagenes/leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 95],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
});

let marker = L.marker([40.4506, -3.698603], { icon: greenIcon })
    .bindPopup('<a href="http://www.google.es">Estoy aquí</a>')
    .openPopup()
    .addTo(map);
