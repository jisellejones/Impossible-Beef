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