function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m;
  var days = ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "];
  var months = [" January", " February", " March", " April", " May", " June",
  " July", " August", " September", " October", " November", " December"
  ];
  document.getElementById("date").innerHTML = days[today.getDay()] + today.getDate() + months[today.getMonth()];
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }