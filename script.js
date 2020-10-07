$(document).ready(function () {
  //   Bringing in the time in the needed format
  var currentDay = moment().format("dddd, MMMM Do");
  // Variable created to capture 24 hour time which was achieved by using HH
  var currentTime = moment().format("HH");
  // Test variable for time to ensure that color is working properly
  var testTime = "13";
  console.log("Current Time: " + currentTime);
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

  //   FOR LOOP
  for (var i = 0; i < timeValuesObj.length; i++) {
    var row = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $("<button>");

    // Adding classes into the recently created elements
    row.addClass("row time-block");
    hour.addClass("hour col-sm-1");
    description.addClass("description col-sm-10");
    saveBtn.addClass("saveBtn col-sm-1 fas fa-save fa-lg");

    hour.attr("timeAttribute", timeValuesObj[i].display);
    hour.attr("id", "timeAttr-" + timeValuesObj[i].value);
    description.attr("descriptionAttribute", timeValuesObj[i].value);
    description.attr("id", "textArea-" + timeValuesObj[i].value);
    saveBtn.attr("id", "saveBtn-" + timeValuesObj[i].value);
    console.log(saveBtn.attr("id"));
    console.log("Description ID is: " + description.attr("id"));

    hour.text(timeValuesObj[i].display);

    row.append(hour);
    row.append(description);
    row.append(saveBtn);
    $(".container").append(row);

    //Adding a test block of code for time
    // if (parseInt(testTime) === parseInt(timeValuesObj[i].value)) {
    //   console.log(timeValuesObj[i].display);
    //   description.addClass("present");
    // } else if (parseInt(testTime) > parseInt(timeValuesObj[i].value)) {
    //   description.addClass("past");
    // } else {
    //   description.addClass("future");
    // }

    //Below will be the final block of code
    if (parseInt(currentTime) === parseInt(timeValuesObj[i].value)) {
      console.log(timeValuesObj[i].display);
      description.addClass("present");
    } else if (parseInt(currentTime) < parseInt(timeValuesObj[i].value)) {
      description.addClass("past");
    } else {
      description.addClass("future");
    }
  }

  //   FUNCTIONS

  //   Provide the date at the top of the page
  $("#currentDay").append(currentDay);

  // On click functions to store the values
  $("#saveBtn-09").on("click", function () {
    // When clicked the time and text are stored in local storage.
    var timeValue = $("#timeAttr-09").attr("timeAttribute");
    var textValue = $("#textArea-09").val().trim();
    // update the DOM
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-10").on("click", function () {
    var timeValue = $("#timeAttr-10").attr("timeAttribute");
    var textValue = $("#textArea-10").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-11").on("click", function () {
    var timeValue = $("#timeAttr-11").attr("timeAttribute");
    var textValue = $("#textArea-11").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-12").on("click", function () {
    var timeValue = $("#timeAttr-12").attr("timeAttribute");
    var textValue = $("#textArea-12").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-13").on("click", function () {
    var timeValue = $("#timeAttr-13").attr("timeAttribute");
    var textValue = $("#textArea-13").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-14").on("click", function () {
    var timeValue = $("#timeAttr-14").attr("timeAttribute");
    var textValue = $("#textArea-14").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-15").on("click", function () {
    var timeValue = $("#timeAttr-15").attr("timeAttribute");
    var textValue = $("#textArea-15").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-16").on("click", function () {
    var timeValue = $("#timeAttr-16").attr("timeAttribute");
    var textValue = $("#textArea-16").val().trim();
    localStorage.setItem(timeValue, textValue);
  });
  $("#saveBtn-17").on("click", function () {
    var timeValue = $("#timeAttr-17").attr("timeAttribute");
    var textValue = $("#textArea-17").val().trim();
    localStorage.setItem(timeValue, textValue);
  });

  // jQuery to pull the stored values back into the page
  $("#textArea-09").val(localStorage.getItem("9AM"));
  $("#textArea-10").val(localStorage.getItem("10AM"));
  $("#textArea-11").val(localStorage.getItem("11AM"));
  $("#textArea-12").val(localStorage.getItem("12PM"));
  $("#textArea-13").val(localStorage.getItem("1PM"));
  $("#textArea-14").val(localStorage.getItem("2PM"));
  $("#textArea-15").val(localStorage.getItem("3PM"));
  $("#textArea-16").val(localStorage.getItem("4PM"));
  $("#textArea-17").val(localStorage.getItem("5PM"));
});
