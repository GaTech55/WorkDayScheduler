$(document).ready(function () {
  console.log("Hello World");
  var currentDay = moment().format("dddd, MMMM Do");
  var currentTime = moment().format("HH");
  var testTime = "13";
  console.log(currentTime);
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
    var row = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $("<button>");
    hour.addClass("hour col-sm-1");
    description.addClass("description col-sm-10");
    saveBtn.addClass("saveBtn col-sm-1");
    row.addClass("row time-block");
    hour.attr("timeAttribute", timeValuesObj[i].value);
    description.attr("descriptionAttribute", timeValuesObj[i].value);
    saveBtn.attr("buttonAttribute", timeValuesObj[i].value);
    hour.text(timeValuesObj[i].display);
    description.text(timeValuesObj[i].display);
    saveBtn.text(timeValuesObj[i].display);
    row.append(hour);
    row.append(description);
    row.append(saveBtn);
    $(".container").append(row);
    // add in icon for the save button.  look for a class from font awesome website.  Will be an I tag (icon).  Will

    //Adding a test block of code for time
    if (parseInt(testTime) === parseInt(timeValuesObj[i].value)) {
      console.log(timeValuesObj[i].display);
      description.addClass("present");
    } else if (parseInt(testTime) > parseInt(timeValuesObj[i].value)) {
      description.addClass("past");
    } else {
      description.addClass("future");
    }
    //Below will be the final block of code
    // if (parseInt(currentTime) === parseInt(timeValuesObj[i].value)) {
    //   console.log(timeValuesObj[i].display);
    //   description.addClass("present");
    // } else if (parseInt(currentTime) < parseInt(timeValuesObj[i].value)) {
    //   description.addClass("past");
    // } else {
    //   description.addClass("future");
    // }
  }

  $("#currentDay").append(currentDay);
});
