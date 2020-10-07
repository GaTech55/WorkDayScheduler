$(document).ready(function () {
  //   console.log("Hello World");
  //   Bringing in the time in the needed format
  var currentDay = moment().format("dddd, MMMM Do");
  // Variable created to capture 24 hour time.  This was achieved by using HH.
  var currentTime = moment().format("HH");
  var testTime = "14";
  console.log(currentTime);
  // Array created to store objects that contain time information
  var timeValuesObj = [
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

    // Adding classes into the recently created elements
    row.addClass("row time-block");
    hour.addClass("hour col-sm-1");
    description.addClass("description col-sm-10");
    saveBtn.addClass("saveBtn col-sm-1 fas fa-save");

    hour.attr("timeAttribute", timeValuesObj[i].display);
    hour.attr("id", "timeAttr-" + timeValuesObj[i].value);
    description.attr("descriptionAttribute", timeValuesObj[i].value);
    description.attr("id", "textArea-" + timeValuesObj[i].value);
    saveBtn.attr("id", "saveBtn-" + timeValuesObj[i].value);
    console.log(saveBtn.attr("id"));

    hour.text(timeValuesObj[i].display);
    // description.text(timeValuesObj[i].display);
    description.text("");
    // saveBtn.text(timeValuesObj[i].display);

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
    // Do a get item to bring it back into the webpage
  }

  $("#currentDay").append(currentDay);

  $("#saveBtn-09").on("click", function () {
    var timeValue = $("#timeAttr-09").attr("timeAttribute");
    var textValue = $("#textArea-09").val().trim();

    localStorage.setItem(timeValue, textValue);
  });
});
