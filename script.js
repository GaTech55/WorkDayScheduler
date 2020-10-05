$(document).ready(function () {
  console.log("Hello World");
  var currentDay = moment().format("dddd, MMMM Do");
  $("#currentDay").append(currentDay);
});
