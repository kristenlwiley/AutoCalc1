function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
function callPayment() {
	var x = document.getElementsByName("ratePerPeriod")[0].value *.01;
	var y = document.getElementsByName("presentValue")[0].value;
	var z = document.getElementsByName("numberOfPeriods")[0].value;
	var pay = payment(x, y, z);
	document.getElementById("result").innerHTML = pay;
}
function payment(ratePerPeriod, presentValue, numberOfPeriods) {
  let roundedAnswer = Math.round((ratePerPeriod * presentValue) / (1 - (Math.pow(1 + ratePerPeriod, -numberOfPeriods)))) / 12;
  return = roundedAnswer.toFixed(0);
}
