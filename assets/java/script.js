var saveButton = document.getElementById("save");
var time1 = document.getElementById("1")




var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

var moment = document.querySelector(".moment")
function savetime() {
    var eventTime1 = {
      time1: time1.value.trim()
    };
    localStorage.setItem("eventTime 1", JSON.stringify(eventTime1));
  }

function renderLasttime() {
    var lasttime1 = JSON.parse(localStorage.getItem("eventTime 1"));
    if (lasttime1 !== null) {
    document.getElementById("10").innerHTML = time1.value;
    } else {
      return;
    }
  }
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    savetime();
    renderLasttime();
    });
    function init() {
        renderLasttime();
      }
      init();