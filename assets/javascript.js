// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDJDI6wRd65VbQZvUYoAZd08vou9Y4-Z2g",
    authDomain: "train-scheduler-faab7.firebaseapp.com",
    databaseURL: "https://train-scheduler-faab7.firebaseio.com",
    projectId: "train-scheduler-faab7",
    storageBucket: "",
    messagingSenderId: "351144785017"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

$("#addTrainBtn").on("click", function(event) {
  event.preventDefault();

   trainName = $("#trainNameInput").val().trim();
   destination = $("#destinationInput").val().trim();
   firstTrain = $("#firstTrainInput").val().trim();
   frequency = $("#frequencyInput").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };


  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainInput").val("");
  $("#frequencyInput").val("");

  	return false;
});


var tName = "";
var tdestination = "";
var tFirstTrain = "";
var tfrequency = 0;

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());
  
	tName = childSnapshot.val().name;
  	tdestination = childSnapshot.val().destination;
  	tFirstTrain = childSnapshot.val().firstTrain;
  	tfrequency = childSnapshot.val().frequency;

  	var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
	var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency ;
	var tMinutes = tFrequency - tRemainder;

  	var tArrival = moment().add(tMinutes, "m").format("hh:mm A"); 
	console.log(tMinutes);
	console.log(tArrival);

	console.log(moment().format("hh:mm A"));
	console.log(tArrival);
	console.log(moment().format("X"));

	$("#trainSchedule > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
});












