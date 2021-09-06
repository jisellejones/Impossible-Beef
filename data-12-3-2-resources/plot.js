
// Retrieves the data and prints to console
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Retrieve data, pull wfreq information, sort in descending order, and filter out null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a, b) => b - a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Practice using Object.entries to see first person data as key, value list
d3.json("samples.json").then(function(data){
    first = data.metadata[0];
    console.log(Object.entries(first));
});

// Practice using Object.entries() and forEach() to see first person data as key, value pairs
d3.json("samples.json").then(function(data){
    var firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([first, second]) => {
        console.log(first + ": " + second);
    });
});

//console.log(firstPerson);
//console.log(Object.entries(firstPerson));

// // Practice object
// researcher1 = {
//     name: 'Roza',
//     age: 34,
//     hobby: 'Hiking'
// };

// // Practice printing key, value pairs as array
// researcher2 = (Object.entries(researcher1));

// // Practice using forEach to print each key value pair to console
// researcher2.forEach(([first, second]) =>
// console.log(first + ": " + second));