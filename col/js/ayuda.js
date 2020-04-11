$.getJSON("data/municipios.geojson", function (muns) {
    var locations = L.geoJson(muns);

    var map_mun = L.map('mapa', {
        center: [21.5, -79.371124],
        zoom: 15,
        layers: [locations],
        keyboard: false,
        dragging: true,
        zoomControl: true,
        boxZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        tap: true,
        touchZoom: true,
        zoomSnap: 0.05,
        maxBounds: locations.getBounds()
    });
    map_mun.zoomControl.setPosition('topright');
    map_mun.fitBounds(locations.getBounds());
});

