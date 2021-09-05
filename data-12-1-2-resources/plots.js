Plotly.newPlot("plotArea", [{x: [1, 2, 3, 4, 5], y: [100, 250, 110, 200, 300]}]);

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Responses"}
};

Plotly.newPlot("plotArea2", trace, layout);


var drinks = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
    "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", 
    "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [drinks];

var drinklayout = {
    title: "Drinks Ordered",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};

Plotly.newPlot("plotArea3", data, drinklayout);

var pieDrinks = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", 
    "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", 
    "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
};

var data2 = [pieDrinks];

var layout2 = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea4", data2, layout2);

var trace1 = {
    x: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6, 22.8, 30.1, 10, 5.2, 7.1, 5.0, 6.6, 22.6],
    mode: 'markers',
    type: 'scatter'
  };

var data3 = [trace1];

var layout3 = {
  title: 'Scatter Plot'
};
  
Plotly.newPlot("plotArea5", data3, layout3);

var numbers = [0, 2, 4, 6, 8];
var addFive = numbers.map(function(num){
    return num + 5;
});
console.log(addFive);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

var cityPop = cities.map(function(city){
    return city.population;
});
console.log(cityPop);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.filter(function(word) {
  let fstLetter = word.charAt(0).toLowerCase();
  if (fstLetter=='s') {
    return word;
  }
  return false;
});
console.log(startsWithS);

// Sort numbers in ascending order  b-a would be descending
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

// Use slice() to show first 3 words
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var slice2 = words.slice(0, 3)
console.log(slice2)

// slice to the end of an array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words.slice(3, ));
