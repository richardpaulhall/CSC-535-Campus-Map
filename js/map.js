<!-- Display the Map -->
// function parameter names end in "_in" to differentiate them from function
// variables

/*
* Facility Object
* ---------------
* Display Name: string
* Location:{ lat: real, lng: real }
*/
/*
Icons o ass to the marker, car-dealer ia good carto use a a paring Icons
bus or bus stops
https://stackoverflow.com/questions/3440137/google-maps-api-adding-letters-to-my-markers-on-my-google-map


 */

  /////////
 // Map //
/////////
// Google Map API map
  var map; // initialized and put in the page by function initMap()

 // These are the parameters for the inital dispalay of the map.
 // Declaring them separately makes it easy to re-center the map.
//  var origMapCenter = new google.maps.LatLng( {lat: 41.3326, lng: -72.9475} );
 var origMapCenter;
 var origZoom = 16;

  /////////////
 // Markers //
/////////////
// holds the three makers that can be placed on the map
var marker = new Array( 3 );
/*  var marker = []; */

// marker indicies
var buildingIndex = 0;
var personIndex   = 1;
var carIndex      = 2;

    /////////////////
   // Geolocation //
  /////////////////
  var infoWindow_g; // probably temporary

    /////////////
   // Compass //
  /////////////
/*
has to be hosted online
  lots of free hosting
get a compass heading [0..359]
Compass icon to display::  (heading +1) div 3
https://www.google.com/intl/en_ALL/mapfiles/dir_0.png


 */
/*****************************************************************************/
/*****************************************************************************/

/**********************
 * Map                *
 **********************/
// runs once after the html page loads
//   initializes the map
//   puts the map in the DOM, ref. "document.getElementById( 'map' )"
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ),
                             { center: { lat: 41.3326, lng: -72.9475 },
                               zoom: origZoom,
                               styles: [ { "featureType": "poi", "stylers": [ { "visibility": "off" } ] } ]
                             }
            );
  // origMapCenter = new google.maps.LatLng( 41.3326, -72.9475 );
  origMapCenter = map.getCenter();
} /* function initMap */
/* can also take as a 4th parameter:  mapTypeId: 'roadmap' | 'satellite' | 'hybrid' | 'terrain' */
<!-- Google gave this position {41.3326° N, 72.9475° W} -->
<!-- using { center: {lat: 41.3326, lng: 72.9475}, showed Europe, so make it -72.9475, 'West' is negative -->


function reSetMap() {
// restore the map to its initial state
  reCenterMap();
  reZoomMap();
} // reSetMap())
//   (should not be called except by the routine above)
    function reCenterMap() {
      //  map.setCenter({ lat: yourLat, lng: yourLng })
      map.setCenter( origMapCenter );
    } // reCenterMap()
    function reZoomMap() {
      map.setZoom( origZoom );
    } //reZoomMap()

/*****************************************************************************/
/**********************
 * Markers            *
 **********************/
// marker loading?
   /*
     marker[ buildingLoc ] = new Object();
     marker[ personLoc ]   = new Object();
     marker[ carLoc ]      = new Object();
    */
     // sample location
     var Morril_Hall = { lat: 41.333704, lng: -72.945826 };


// ASSUMED: 1 Bulding marker, 1 Person marker, 1 Car marker
// highest level routine, makes a particlar building
// written to use in the demonstation, a more general routine is called for
function display_MorrilHall() {
  // specifically display Morril Hall
  hideBuilding();                 // hide the displayed Building related marker
  createBuilding( Morril_Hall );  // create the Building related marker of Morril Hall
  showBuilding();                 // show the displayed Building related marker
}

function displayFacilityMarker( facilityIndex_in ) {
// displays Building and Parking Lots
// ----------------------------------
// facilityIndex_in is the index for facility[] for Facility to diaplay
// ----------------------------------

  // get the ma coordinates for the bilding
// var location = { lat: 41.333704, lng: -72.945826 };
  var location = { lat: facility[ facilityIndex_in ].latitude,
                   lng: facility[ facilityIndex_in ].longitude };

  // display a building or a parking lot?
  var typeIndex = buildingIndex; // assume it is a building
  if ( ( facilityIndex_in >= parkingIndexRange.min ) &&
       ( facilityIndex_in <= parkingIndexRange.max ) ) {
    // all the parking lots are contiguous
    typeIndex = carIndex;
  }

  hideMarker( typeIndex );       // hide the displayed marker for that facility type


  // was /// createBuilding( location );
  // mow
  createMarker( location, typeIndex );  // create the marker at location of type typeIndex

  ///was showBuilding();
  showMarker( typeIndex );              // show the marker at of type typeIndex
}

// Create Marker Routines
//   Create and Initialize Marker objects
//   Marker objects show the position of Facilities, People, or Cars
// higher level routines to make specifickinds of markers
function createBuilding( location_in ) {
  createMarker( location_in, buildingIndex );
}
function createPerson( location_in ) {
  // locationIn = Get_Actual_Location();
  createMarker( location_in, personIndex );
}
function createCar( location_in ) {
  // locationIn = Get_Actual_Location();
  createMarker( location_in, carIndex );
}
//   (should not be called except by the 3 routines above)
    function createMarker( location_in, index_in ) {
      var mark = new google.maps.Marker( { position: location_in, map: map } );
      marker[ index_in ] = mark;
    }

// Show Marker Routines
//   Display a Marker on the map
function showBuilding() {
  showMarker( buildingIndex );
}
function showPerson() {
  showMarker( personIndex );
}
function showCar() {
  showMarker( carIndex );
}
//   (should not be called except by the 3 routines above)
function showMarker( index_in ) {
  marker[ index_in ].setMap( map );
}

// Hide Facility Routines
//   Remove Facilites on the map
function hideBuilding() {
  hideMarker( buildingIndex );
}
function hidePerson() {
  hideMarker( personIndex );
}
function hideCar() {
  hideMarker( carIndex );
}
//   (should not be called except by the 3 routines above)
  function hideMarker( index_in ) {
    if ( marker[ index_in ] != null ) {
      marker[ index_in ].setMap( null );
    }
  }

/*****************************************************************************/
/**********************
 * Geolocation        *
 **********************/
// Try HTML5 geolocation.
var Geoloc_Failed       = 0;
var Geoloc_NotSupported = 1;
var Geoloc_NotOnMap     = 2;

function doGeolocation(){
  infoWindow_g = new google.maps.InfoWindow( { content: 'empty' } );
  if ( navigator.geolocation ) {
      navigator.geolocation.getCurrentPosition( function( position ) {
        var pos = { lat: position.coords.latitude, lng: position.coords.longitude };

        // if the user is not ON the SCSU map, tell hir
        // check if on campus
        initInfoWindow( infoWindow_g, pos, 'Location found.' );
        showInfoWindow( infoWindow_g );
        //  infoWindow.setPosition( pos );
        //  infoWindow.setContent( 'Location found.' );
        //  infoWindow.open( map ); // opens infoWindow
        // if pos not on map {
        //   handleLocationError( Geoloc_NotOnMap, infoWindow, map.getCenter() );
        // }
        /* map.setCenter(pos);  // we do not want to center the map */
      },
      function() { // checkback function to handle error
        handleLocationError( Geoloc_Failed, infoWindow, map.getCenter() );
      }
    ); // navigator.geolocation.getCurrentPosition()
  } else {
      // Browser does not support Geolocation
      handleLocationError( Geoloc_NotSupported, infoWindow, map.getCenter() );
  } // if (navigator.geolocation)
} // function doGeolocation


  // Set routines apply a value to an object field
  // Get routines return the value in an object field
  // Init routines are higher level

// Display an error messagei in an infowindow
function handleLocationError( geoLocError_in, infoWindow_in, pos_in ) {
  var errorMessage = "";

  switch( geoLocError_in ) {
    case Geoloc_Failed:
      errorMessage = 'Error: The Geolocation service failed.';
      break;
    case Geoloc_NotSupported:
      errorMessage = 'Error: Your browser does not support geolocation.';
      break;
    case Geoloc_NotOnMap:
      errorMessage = 'Notice: You are curently off campus.';
      break;
    default:
      errorMessage = 'Error: Impossible Geolocation Error >' + geoLocError_in + '<';
  }

  initInfoWindow( infoWindow_in, pos_in, errorMessage );
  showInfoWindow( infoWindow_in );
} // function handleLocationError(

////////////////////////
// InfoWindow Rouines //
////////////////////////
function initInfoWindow( infoWindow_in, pos_in, message_in ){
  infoWindow_in.setPosition( pos_in );
  infoWindow_in.setContent( message_in );
}
function showInfoWindow( infoWindow_in ){
  infoWindow_in.open( map );
}

/*
run getBounds() to getlimits of map
get user's location
*/
/*****************************************************************************/
/*****************************************************************************/
