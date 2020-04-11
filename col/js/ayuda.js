$.getJSON("data/municipios.geojson", function (muns) {
    var locations = L.geoJson(muns);

    locations.bindTooltip(function (layer) {
        return '<span class="bd">' + layer.feature.properties.province + '</span> - ' + layer.feature.properties.municipality;
    }, {'sticky': true});

    locations.bindPopup(function (layer) {
        let mun = layer.feature.properties.municipality;

        return '<div class="small-pname"><span class="bd">' + mun + '</span></div>' +
            '<div class="small-content"><span class="bd">Info extra</span></div>' +
            '<div class="small-plink">&nbsp;</div>';
    });

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

