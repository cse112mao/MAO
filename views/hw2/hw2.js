
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

/**
 *	@api {get} /example Split the time inputted by the user
 *	@apiName GetTime
 *	@apiGroup HW2
 *	
 *	@apiDescription helper method to split the input string into an array of the desired
 *  format. If the input boolean is true, then we assume that the input time will include seconds,
 *  and will be in the form HH:MM:SS. Else, it will be in the form HH:MM
 *
 *	@apiParam {String} strInputTime Input string to parse
 *  @apiParam {Boolean} boolInputSeconds Check if we include seconds or not
 *
 *	@apiSuccess {String[]} timeArray Array containing time in string
 *
 * 	@apiError IncorrectFormat The inputted format is incorrect
 */
 var formatTime = function formatTime(strInputTime, boolInputSeconds, boolInput24Hour) {
  var strTempInputTime = strInputTime;

  if(!boolInput24Hour){
    //extract AMPM
    var arrAmPm = strInputTime.split(/ +/);
    if(arrAmPm.length != 2 && arrAmPm.length != 3){
      return null;
    }
    if(arrAmPm.length == 3 && arrAmPm[2] != ""){
      return null;
    }

    if(!arrAmPm[1].match(/am/i) && !arrAmPm[1].match(/pm/i)){
      return null;
    } 
    strTempInputTime = arrAmPm[0];

  }
  // split the string by hours, minute, seconds
  var arrTime = strTempInputTime.split(":");

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

/**
 *	@api {get} /example2 Check if the format is correct based on user settings
 *	@apiName GetValidTime
 * 	@apiGroup HW2
 *
 *	@apiDescription checks if input string is in the correct time form. If the input boolean
 *  is true, then we expect that the input time will include seconds, and will be in the form
 *  HH:MM:SS. Else, it will be in the form HH:MM.
 *
 *	@apiParam {String} strInputTime Input string to parse
 *	@apiParam {Boolean} boolInputSeconds Check if we include seconds or not
 *
 *	@apiSuccess {Boolean} isValid Boolean that determines if the time is valid or not
 *
 *	@apiError IncorrectFormat The inputted format is incorrect
 */
 var isValidTime = function isValidTime(strInputTime, boolInputSeconds, boolInput24Hour) {

  // store the formatted input
  var arrTime = formatTime(strInputTime, boolInputSeconds, boolInput24Hour);

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

  //12 hour time
  if(!boolInput24Hour){
    // check if the hours are between [0, 12]
    if (arrTime[0] < 0 || arrTime[0] > 12) {
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

  }

  //24 hour time
  else{
    // check if the hours are between [0, 23]
    if (arrTime[0] < 0 || arrTime[0] >= 24) {
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

if (typeof exports !== 'undefined') {
  exports.formatTime = formatTime;
  exports.isValidTime = isValidTime;
}
