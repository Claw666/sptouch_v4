/*Bus departure times in minutes (e.g. 17:15 -> 17*60+15) */
  var timeSotSot = [545, 590, 675, 735, 795, 855, 940, 1000, 1030, 1060];
  var timeSotChil = [546, 591, 676, 736, 796, 856, 941, 1005, 1035, 1065];
  var timeRomSot = [476, 530, 602, 662, 727, 787, 873];
  var timeRomChil = [474, 528, 600, 660, 725, 785, 871, 996, 1056];
  window.setInterval("refreshDiv()", 200);
  function refreshDiv(){
    var date = new Date();
    var currentHours = date.getHours();
    var currentMins = date.getMinutes();
    var currentSecs = date.getSeconds();
    var currentTimeInMin = date.getHours()*60 + date.getMinutes();
    function getHourSotChil(hours)
    {
      for(var i = 0; i< timeSotChil.length; i++)
      {
        if(timeSotChil[i]> hours)
        {
          return timeSotChil[i];
        }
      }
    }
    function getHourSotSot(hours)
    {
      for(var i = 0; i< timeSotSot.length; i++)
      {
        if(timeSotSot[i]> hours)
        {
          return timeSotSot[i];
        }
      }
    }
    function getHourRomChil(hours)
    {
      for(var i = 0; i< timeRomChil.length; i++)
      {
        if(timeRomChil[i]> hours)
        {
          return timeRomChil[i];
        }
      }
    }
    function getHourRomSot(hours)
    {
      for(var i = 0; i< timeRomSot.length; i++)
      {
        if(timeRomSot[i]> hours)
        {
          return timeRomSot[i];
        }
      }
    }
    var timeToSotChil = getHourSotChil(currentTimeInMin);
    var timeToSotSot = getHourSotSot (currentTimeInMin);
    var timeToRomChil = getHourRomChil(currentTimeInMin);
    var timeToRomSot = getHourRomSot (currentTimeInMin);
    var leavingTimeSotChil = (timeToSotChil-currentTimeInMin);
    var leavingTimeSotSot = (timeToSotSot-currentTimeInMin);
    var leavingTimeRomChil = (timeToRomChil-currentTimeInMin);
    var leavingTimeRomSot = (timeToRomSot-currentTimeInMin);
    if ((document.getElementById("soton_soton") !== null) && (document.getElementById("rom_soton")!== null)){

    if (currentTimeInMin < 525 || currentTimeInMin >= 1075){
      document.getElementById("soton_soton").innerHTML = "No buses";
    }
    else {
      document.getElementById("soton_soton").innerHTML = "In " + leavingTimeSotSot + " mins";
    }
    if (currentTimeInMin < 420 || currentTimeInMin >= 530){
      document.getElementById("rom_soton").innerHTML = "No buses";
    }
    else {
      document.getElementById("rom_soton").innerHTML = "In " + leavingTimeRomSot + " mins";
    }
    }
  }