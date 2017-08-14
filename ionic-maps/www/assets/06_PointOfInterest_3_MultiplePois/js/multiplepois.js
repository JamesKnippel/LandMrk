// implementation of AR-Experience (aka "World")
var World = {
	// true once data was fetched
	initiallyLoadedData: false,

	// different POI-Marker assets
	markerDrawable_idle: null,
	markerDrawable_selected: null,

	// list of AR.GeoObjects that are currently shown in the scene / World
	markerList: [],

	// The last selected marker
	currentMarker: null,

	// called to inject new POI data
	loadPoisFromJsonData: function loadPoisFromJsonDataFn(poiData) {
		// empty list of visible markers
		World.markerList = [];

		// start loading marker assets
		World.markerDrawable_idle = new AR.ImageResource("assets/marker_idle.png");
		World.markerDrawable_selected = new AR.ImageResource("assets/marker_selected.png");

		// loop through POI-information and create an AR.GeoObject (=Marker) per POI
		for (var currentPlaceNr = 0; currentPlaceNr < poiData.length; currentPlaceNr++) {
			var singlePoi = {
				"id": poiData[currentPlaceNr].id,
				"latitude": parseFloat(poiData[currentPlaceNr].latitude),
				"longitude": parseFloat(poiData[currentPlaceNr].longitude),
				"altitude": parseFloat(poiData[currentPlaceNr].altitude),
				"title": poiData[currentPlaceNr].name,
				"description": poiData[currentPlaceNr].description
			};

			/*
				To be able to deselect a marker while the user taps on the empty screen, 
				the World object holds an array that contains each marker.
			*/
			World.markerList.push(new Marker(singlePoi));
		}

		World.updateStatusMessage(currentPlaceNr + ' places loaded');
	},

	// updates status message shon in small "i"-button aligned bottom center
	updateStatusMessage: function updateStatusMessageFn(message, isWarning) {

		var themeToUse = isWarning ? "e" : "c";
		var iconToUse = isWarning ? "alert" : "info";

		$("#status-message").html(message);
		$("#popupInfoButton").buttonMarkup({
			theme: themeToUse
		});
		$("#popupInfoButton").buttonMarkup({
			icon: iconToUse
		});
	},

	// location updates, fired every time you call architectView.setLocation() in native environment
	locationChanged: function locationChangedFn(lat, lon, alt, acc) {

		/*
			The custom function World.onLocationChanged checks with the flag World.initiallyLoadedData if the function was already called. With the first call of World.onLocationChanged an object that contains geo information will be created which will be later used to create a marker using the World.loadPoisFromJsonData function.
		*/
		if (!World.initiallyLoadedData) {
			/* 
				requestDataFromLocal with the geo information as parameters (latitude, longitude) creates different poi data to a random location in the user's vicinity.
			*/
			World.requestDataFromLocal(lat, lon);
			World.initiallyLoadedData = true;
		}
	},

	// fired when user pressed maker in cam
	onMarkerSelected: function onMarkerSelectedFn(marker) {

		World.currentMarker = marker;

		/*
			In this sample a POI detail panel appears when pressing a cam-marker (the blue box with title & description), 
			compare index.html in the sample's directory.
		*/
		// update panel values
		$("#poi-detail-title").html(marker.poiData.title);
		$("#poi-detail-description").html(marker.poiData.description);

		/* It's ok for AR.Location subclass objects to return a distance of `undefined`. In case such a distance was calculated when all distances were queried in `updateDistanceToUserValues`, we recalcualte this specific distance before we update the UI. */
		if (undefined == marker.distanceToUser) {
			marker.distanceToUser = marker.markerObject.locations[0].distanceToUser();
		}

		// distance and altitude are measured in meters by the SDK. You may convert them to miles / feet if required.
		var distanceToUserValue = (marker.distanceToUser > 999) ? ((marker.distanceToUser / 1000).toFixed(2) + " km") : (Math.round(marker.distanceToUser) + " m");

		$("#poi-detail-distance").html(distanceToUserValue);

		// show panel
		$("#panel-poidetail").panel("open", 123);

		$(".ui-panel-dismiss").unbind("mousedown");

		// deselect AR-marker when user exits detail screen div.
		$("#panel-poidetail").on("panelbeforeclose", function (event, ui) {
			World.currentMarker.setDeselected(World.currentMarker);
		});
	},

	// request POI data
	requestDataFromLocal: function requestDataFromLocalFn(centerPointLatitude, centerPointLongitude) {
		var poiData = [];

		var dbArray = []

		// poiData.push({
		// 	"id": (1),
		// 	"longitude": (-118.42955628421011),
		// 	"latitude": (33.96196404009495),
		// 	"description": ("That's just like your opinion" + (1)),
		// 	"altitude": "50.0",
		// 	"name": ("POI#" + (1))
		// });


		poiData.push({
			id: 1,
			longitude: -118.39209600000001,
			latitude: 33.9773233,
			description: "If you visit Pepperdine University's West LA Campus Library, the study room of 108E may still contain a puddle of James Knippel's tears which resulted from many failed attempts at debugging the Demonic Church of Los Angeles' popular software plugin: 'Wikitude' ",
			altitude: '15.0',
			name: 'Pepperdine West LA'
		},
			{
				id: 2,
				longitude: -118.391006,
				latitude: 33.976005,
				description: 'Nerds...everywhere...',
				altitude: '15.0',
				name: 'Hack Reactor'
			},
			{
				id: 3,
				longitude: 83.820324,
				latitude: 28.596116,
				description: "HIR Justin Kang's first place that came to mind when asked where he would go if given the chance to escape. More importantly, Annapurna marks a camp residing at the base of a famous Nepalis mountain trek: the Annapurna Circuit ",
				altitude: '15.0',
				name: 'Annapurna, Nepal'
			},
			{
				id: 4,
				longitude: -118.391137,
				latitude: 33.975671,
				description: "Upon its initial construction, the Howard Hughes center did not imagine it would become a hot tourist attraction for puffing the fattest clouds. Catch some of HRLA and Media Temple's brightest minds go face to face in cloud-puffing, fire-breathing and lung-busting vape battles.",
				altitude: '15.0',
				name: 'Vape Nation'
			},
			{
				id: 5,
				longitude: -84.324042,
				latitude: 30.449904,
				description: "Residing at the 'Lit House', this marker represents James' longing for the taste of Guthries chicken fingers, sailing, and Spanish Moss",
				altitude: '15.0',
				name: "Tallahassee, Florida"
			},
			{
				id: 6,
				longitude: 100.497551,
				latitude: 13.758962,
				description: "Named after the milled rice once sold upon its streets over a century ago, this road now exists as Thailand's quintessential night-time mercantile and street-food destination.",
				altitude: '15.0',
				name: "Khao San Road Night Market, Thailand"
			});
			World.loadPoisFromJsonData(poiData);
	}
}

/* 
	Set a custom function where location changes are forwarded to. There is also a possibility to set AR.context.onLocationChanged to null. In this case the function will not be called anymore and no further location updates will be received. 
*/
AR.context.onLocationChanged = World.locationChanged;

/*
	To detect clicks where no drawable was hit set a custom function on AR.context.onScreenClick where the currently selected marker is deselected.
*/
AR.context.onScreenClick = World.onScreenClick;