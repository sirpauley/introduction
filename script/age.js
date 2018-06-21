var div = document.getElementById('age');

var today = new Date();
var currentYear = today.getFullYear();
var age = currentYear - 1991;

div.innerHTML += age;
