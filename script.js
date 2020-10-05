$(document).ready(function () {
  console.log("Hello World");
  var currentDay = moment().format("dddd, MMMM Do");
  var currentTime = moment().format("HH");
  console.log(currentTime);
  var timeValues = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  var timeValuesObj = [
    {
      display: "2AM",
      value: "02",
    },
    {
      display: "9AM",
      value: "09",
    },
    {
      display: "10AM",
      value: "10",
    },
    {
      display: "11AM",
      value: "11",
    },
    {
      display: "12PM",
      value: "12",
    },
    {
      display: "1PM",
      value: "13",
    },
    {
      display: "2PM",
      value: "14",
    },
    {
      display: "3PM",
      value: "15",
    },
    {
      display: "4PM",
      value: "16",
    },
    {
      display: "5PM",
      value: "17",
    },
  ];

  for (var i = 0; i < timeValuesObj.length; i++) {
    var hour = $("<div>");
    hour.addClass("hour");
    hour.attr("timeAttribute", timeValuesObj[i].value);
    hour.text(timeValuesObj[i].display);
    $("#hour").append(hour);

    if (currentTime === timeValuesObj[i].value) {
      console.log(timeValuesObj[i].display);
    }
  }

  $("#currentDay").append(currentDay);
});
