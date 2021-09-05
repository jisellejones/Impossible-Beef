console.log(cityGrowths);

const cityData = cityGrowths;

var sortedCities = cityData.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

console.log(sortedCities);

var topFiveCities = sortedCities.slice(0, 5);
console.log(topFiveCities);

var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

var trace  = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Citites",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// Sort cities by population - descending
var sortedCitiesByPop = cityData.sort((a,b) =>
a.population - b.population).reverse();

// Create object of top seven cities by population
topSevenCitiesByPop = sortedCitiesByPop.slice(0,7);

// Get names of top Seven Cities
var topSevenPopNames = topSevenCitiesByPop.map(city => city.City);

// Get population of top Seven Cities
var topSevenPopulation = topSevenCitiesByPop.map(city => parseInt(city.population));

var traceTwo = {
    x: topSevenPopNames,
    y: topSevenPopulation,
    type: "bar"
};

var dataTwo = [traceTwo];

var layoutTwo = {
    title: "Top Seven Cities by Population in 2017",
    xaxis: {title: "City"},
    yaxis: {title: "Population 2017"}
};

Plotly.newPlot("bar-plot2", dataTwo, layoutTwo);

