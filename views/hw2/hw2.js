
/*
  Function Name: formatTime
  Group: dev

  Function Description: helper method to split the input string into an array of the desired
  format. If the input boolean is true, then we assume that the input time will include seconds,
  and will be in the form HH:MM:SS. Else, it will be in the form HH:MM

  Function Paramter:
  String - strInputTime: input string to parse
  bool - boolInputSeconds: boolean to see if we include seconds or not.

  Return:
  OnSuccess: returns the parsed array to be used
  OnFailure: returns null
*/
var formatTime = function formatTime(strInputTime, boolInputSeconds) {
  // split the string by hours, minute, seconds
  var arrTime = strInputTime.split(":");

  // check if there are hours, minutes, and seconds
  if ( (boolInputSeconds && arrTime.length === 3) || (!boolInputSeconds && arrTime.length === 2) )
  {
    return arrTime;
  }

  return null;
}

/*
  Function Name: isValidTime
  Group: dev

  Function Description: checks if input string is in the correct time form. If the input boolean
  is true, then we expect that the input time will include seconds, and will be in the form
  HH:MM:SS. Else, it will be in the form HH:MM.

  Function Paramter:
  String - strInputTime: input string to parse
  bool - boolInputSeconds: boolean to see if we include seconds or not.

  Return:
  OnSuccess: returns true
  OnFailure: returns false
  OnError: returns false
*/
var isValidTime = function isValidTime(strInputTime, boolInputSeconds) {
  // store the formatted input
  var arrTime = formatTime(strInputTime);

  // check to see if input was incorrect
  if (arrTime === null)
  {
    return false;
  }

  var numHours = arrTime[0];
  // verify input is a number
  if (isNaN(numHours)) {
    return false;
  }
  // check if the hours are between [0, 23]
  if (arrTime[0] < 0 || arrTime[0] > 24) {
    return false;
  }

  var numMinutes = arrTime[1];
  // verify input is a number
  if (isNaN(numMinutes)) {
    return false;
  }
  // check if the minutes are between [0, 59]
  if (numMinutes < 0 || numMinutes > 59) {
    return false;
  }

  // array size should be 3 if boolInputSeconds == true
  if (boolInputSeconds) {
    var numSeconds = arrTime[2];
    if (isNaN(numSeconds)) {
      return false;
    }
    // check if the seconds are between [0, 59]
    if (numSeconds < 0 ||numSeconds > 59) {
      return false;
    }
  }

  return true;
}

exports.formatTime = formatTime;
exports.isValidTime = isValidTime;
