var map; // Holds API map object

// Initialize the map with the users coordinates
function initMap(coords) {
    localStorage.setItem("lat", coords.lat);
    localStorage.setItem('lng', coords.long);
    map = new google.maps.Map(document.getElementById('map-area'), {
        center: {
            lat: coords.lat,
            lng: coords.long
        },
        zoom: 12
    });
}

// Use html5 geolocation to try and get user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(formatJsonObj, geolocationError); // These params are callback functions
    } else {
        handleLocationError("Geolocation is not supported by this browser.");
    }
}
// Handle errors thrown by the geocode API
function geolocationError(error) {
    var suff = "Please enter a location manually.";
    var message;
    switch (error.code) {
        case error.PERMISSION_DENIED:
            message = "You denied the request for Geolocation. " + suff;
            break;
        case error.POSITION_UNAVAILABLE:
            message = "Location information is unavailable. " + suff;
            break;
        case error.TIMEOUT:
            message = "The request to get user location timed out. " + suff;
            break;
        case error.UNKNOWN_ERROR:
            message = "An unknown error occurred. " + suff;
            break;
    }
    handleLocationError(message);
}
// Format the obj returned by geolocation
function formatJsonObj(obj) {
    var lat = obj.coords.latitude;
    var lng = obj.coords.longitude;
    var latLngObj = {
        lat: lat,
        long: lng
    };
    initMap(latLngObj);
}
// Show an overlay over the map area prompting user to enter location manually
function handleLocationError(message) {
    var div = $("<div>").attr("id", "location-error");
    var mess = $("<p>");
    mess.html(message);
    div.append(mess);
    var input = $("<input>").attr("type", "text").attr("pattern", "[0-9]{5}").attr("title", "Five digit zip code").attr("id", "user-location").addClass('text-dark');
    var button = $("<button>").attr("type", "button").addClass("btn").html("Go!");
    $("#map-area").append(mess).append(input).append(button);
    $(button).on("click", function () {
        var val = $("#user-location").val();
        getLocationByZipCity(val, initMap);
    });
}

// Use Geocode API to get a location lat long by zip code or city
function getLocationByZipCity(param, callback) {
    var jsonObj = {};
    $.get({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address={" + param + "}"
    }).then(function (data) {
        if (data.status === "ZERO_RESULTS") {
            // Ephemeral modal saying no results, try again.
            showModal("general_message", "Location not found, please try again.");
            hideModal("general_message", 3000);
        }
        var lat = data.results[0].geometry.location.lat;
        var long = data.results[0].geometry.location.lng;
        jsonObj = {
            lat: lat,
            long: long
        };
        callback(jsonObj);
    });
}

// Functions to trigger / deal with modals

function showModal(target, content) {
    $("#" + target + "_content").html(content);
    $("#" + target).modal("show");
}

function hideModal(target, time) {
    var wait;
    if (time) {
        wait = time;
    }
    else {
        wait = 0;
    }
    setTimeout(function () {
        $("#" + target).modal("hide");
    }, wait);
}

// On page load show modal if first time user
$(function () {
    if (!localStorage.getItem('visited')) {
        localStorage.setItem("visited", true);
        $("#intro").modal("show");
    }
});

// End MODAL functions
