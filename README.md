# MAO
CSE 112 Project


Usage for formatTime() and isValidTime():

Go to maoproj.herokuapp.com.
Choose the sliders for whether you wish to input a time with seconds or 
not and whether you want to input a military time (24 hours) or a regular
AM/PM (12 hours) time. Sliders in the left position means no seconds are 
allowed and 24 hour format , while sliders in the right position means 
seconds must be inputted and 12 hour format. 

A valid time input with seconds is in the format XX:XX:XX where X must be 
a valid number, and the two hours digits on the left must be > 0 and < 
24, and the two minutes digits in the middle as well as the two seconds
digits on the right must be > 0 and < 60.

A valid time input without seconds is in the format XX:XX, with the same
rules for hours and minutes as above.

A valid time input in the 12 hour format must not have hours digits
XX > 12, and must specify AM/PM after the XX:XX(:XX) separated by a space
between the numbers and the AM/PM.

After selecting the slider and inputting a time string to be checked,
click the "Validate" button, which will call the function formatTime() 
with the boolean value of whether seconds are included and whether
the 24 hour or 12 hour format is used. After the format is set, formatTime() 
will call isValidTime() with the string user input as the parameter.

After pressing the "Validate" button, whether the input string is a valid
time according to the formats specified above will appear in a string
notification just below the button.
 
 
 
 
 
To get this working on your local machine, do the following steps:

1. Clone this repo
2. In the root directory of your repo, run "npm install"


STYLE GUIDELINE::

- TABS ARE 2 SPACES
- 100 CHARACTERS PER LINE
- BEGINNING CURLY BRACE IS SAME LINE E.G IF(...){
- END CURLY BRACE IS ON DIFFERENT LINE
- CAMELCASE FOR VARIABLE NAMES
- CONSTANTS ALL CAPS
- TYPE OF VARIABLE SHOULD BE FIRST WORD IN THE VARIABLE NAME e.g String asdf = def strAsdf
- FUNCTION HEADERS ON EVERY FUNCTION - INCLUDE PARAMETERS, USE, AND RETURN 
- FILE HEADERS ON EVERY FILE - SHORT PARAGRAPH EXPLAINING UTILITY OF FILE



Function Header Example (Please follow this as closely as you can)

/**
* Function Name:
* Function Path (example... user/id or document/testing):
* Function Description (short sentence or two):
* Function Type (GET, POST, etc): 
* Group (who is calling this function? the user? the dev? admin?):
* 
* Function Paramter:
*	Type (boolean/number/etc) - Name (name of param) : Description (short description on what the param is)
*	Type .... (continue here if there are more params)
*
* Return (I'm assuming we are returning information back in a JSON format, so Name is the field name for the returned json):
*	OnSuccess [Optional, put what the status code is, for example 200](What is returned on success? List all):
*		Type (string/object/array/etc) - Name (id of returned value) : Description (short description on what the valued returned is)
*		Type ... (continue here if there are more ids returned)
*
*   OnFailure [Optional, put what the status code is, for example 404](What is returned on failure? List all):
*		Type (string/object/array/etc) - Name (id of returned value) : Description (short description on what the valued returned is) == [if id is meant to be an error string, put what the error message is here]
*		Type ... (continue here if there are more ids returned)
*
* Example Usage:
*	Provide a simple example on how to use this function
*
* Example Response:
*	Provide a sample of a response, either success or failure
*/

Example using the above format

/**
* Function Name: getUser
* Function Path: /user/:id
* Function Description: Read user's data
* Function Type: GET
* Group: admin
* 
* Function Paramter:
*	String - id : user's id to read
*
* Return:
*	OnSuccess 200:
*		String - name : name of the user
*		Number - age : age of the user
*		Object - profile : object containing information about the user's profile
*			String - image : image of of user's profile (this is a field of profile)
*		String[] - nicknames : list of nicknames the user goes by
*
*   OnFailure 401:
*		String - error: Only admins can access this data == NoAccessRight
*
* Example Usage:
*	curl -i http://localhost/user/4711
*
* Example Response:
*	HTTP/1.1 401 Not Authenticated
*    {
*      "error": "NoAccessRight"
*    }
*/

If you have more information to add inside your method header, please add them in a way so that just by reading it, the user would know what it is and how to use it and what is the significance of it.
