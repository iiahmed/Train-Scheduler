
  firebase.initializeApp(config);
  var trainData = firebase.database();
  $("#add-train-btn").on("click", function() {
    var trainName = $("#train-name-input").val().trim();
