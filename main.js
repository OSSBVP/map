let directionsService, directionsDisplay;
let origin_latitude, origin_longitude;
let dest_latitude = 28.676216,
    dest_longitude = 77.113671;

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: { lat: 28.675592899999998, lng: 77.1128999 }
    });
    directionsDisplay.setMap(map);
    getLocation();
}

function getLocation(ele) {
    if (ele !== undefined) {
        switch (ele.id) {
            case 'cr_yl':
                navigator.geolocation.getCurrentPosition(showPosition);
                break;
            case 'cr_mg':
                origin_latitude = 28.676216;
                origin_longitude = 77.113671;
                break;
            case 'cr_con':
                origin_latitude = 28.67613;
                origin_longitude = 77.113283;
                break;
            case 'cr_c3':
                origin_latitude = 28.6756676;
                origin_longitude = 77.1130431;
                break;
            case 'cr_c5':
                origin_latitude = 28.6756742;
                origin_longitude = 77.1130449;
                break;
            case 'cr_hm':
                origin_latitude = 28.6755776;
                origin_longitude = 77.1131961;
                break;
            case 'cr_a7':
                origin_latitude = 28.676103;
                origin_longitude = 77.113272;
                break;
            case 'cr_ch':
                origin_latitude = 28.67613;
                origin_longitude = 77.113283;
                break;
            case 'cr_cl':
                origin_latitude = 28.675851;
                origin_longitude = 77.11303;
                break;
            case 'cr_au':
                origin_latitude = 28.676745;
                origin_longitude = 77.112626;
                break;

            case 'dt_mg':
                dest_latitude = 28.676216;
                dest_longitude = 77.113671;
                break;
            case 'dt_con':
                dest_latitude = 28.67613;
                dest_longitude = 77.113283;
                break;
            case 'dt_c3':
                dest_latitude = 28.6756676;
                dest_longitude = 77.1130431;
                break;
            case 'dt_c5':
                dest_latitude = 28.6756742;
                dest_longitude = 77.1130449;
                break;
            case 'dt_hm':
                dest_latitude = 28.6755776;
                dest_longitude = 77.1131961;
                break;
            case 'dt_a7':
                dest_latitude = 28.676103;
                dest_longitude = 77.113272;
                break;
            case 'dt_ch':
                dest_latitude = 28.67613;
                dest_longitude = 77.113283;
                break;
            case 'dt_cl':
                dest_latitude = 28.675851;
                dest_longitude = 77.11303;
                break;
            case 'dt_au':
                dest_latitude = 28.676745;
                dest_longitude = 77.112626;
                break;
        }
        if(ele.id[0]==='c')
        document.getElementById('startButton').innerHTML =`${$("#"+ele.id).text()} (A)`;
        else if(ele.id[0]==='d')
        document.getElementById('destButton').innerHTML =`${$("#"+ele.id).text()} (B)`;

        showPosition();
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) {
    console.log('Hurray', position);
    if (position !== undefined) {
        origin_latitude = position.coords.latitude;
        origin_longitude = position.coords.longitude;
        dest_latitude = 28.676216;
        dest_longitude = 77.113671;
        console.log(
            'Latitude: ' +
                position.coords.latitude +
                ' Longitude: ' +
                position.coords.longitude
        );
    }
    calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
    directionsService.route(
        {
            origin: {
                lat: origin_latitude,
                lng: origin_longitude
            },
            destination: {
                lat: dest_latitude,
                lng: dest_longitude
            },
            travelMode: 'WALKING'
        },
        function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        }
    );
}
let openNavigation = () => {
    window.open(
        `http://maps.google.com/maps?saddr=${origin_latitude},${origin_longitude}&daddr=${dest_latitude},${dest_longitude} &travelmode=walking&dir_action=navigate`,
        '_blank'
    );
};
