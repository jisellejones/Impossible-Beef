
// Holds the spaceX URL as url variable
const url = "https://api.spacexdata.com/v2/launchpads";

// Call the API from the spaceX site
d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude,));

// Call the API and print name, latitude, and longitude to the console
d3.json(url).then(data => data.map(station => 
    console.log(station.location.name, station.location.latitude, station.location.longitude)));