define({ "api": [
  {
    "type": "get",
    "url": "/foo",
    "title": "Testing Foo",
    "name": "GetFoo",
    "group": "HW1",
    "description": "<p>Function to test work-flow</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bar",
            "description": "<p>Input string to check</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isBaz",
            "description": "<p>Boolean that determines if the string is baz or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/hw2/hw1.js",
    "groupTitle": "HW1"
  },
  {
    "type": "get",
    "url": "/example",
    "title": "Split the time inputted by the user",
    "name": "GetTime",
    "group": "HW2",
    "description": "<p>helper method to split the input string into an array of the desired format. If the input boolean is true, then we assume that the input time will include seconds, and will be in the form HH:MM:SS. Else, it will be in the form HH:MM</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "strInputTime",
            "description": "<p>Input string to parse</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "boolInputSeconds",
            "description": "<p>Check if we include seconds or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "timeArray",
            "description": "<p>Array containing time in string</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectFormat",
            "description": "<p>The inputted format is incorrect</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/hw2/hw2.js",
    "groupTitle": "HW2"
  },
  {
    "type": "get",
    "url": "/example2",
    "title": "Check if the format is correct based on user settings",
    "name": "GetValidTime",
    "group": "HW2",
    "description": "<p>checks if input string is in the correct time form. If the input boolean is true, then we expect that the input time will include seconds, and will be in the form HH:MM:SS. Else, it will be in the form HH:MM.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "strInputTime",
            "description": "<p>Input string to parse</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "boolInputSeconds",
            "description": "<p>Check if we include seconds or not</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isValid",
            "description": "<p>Boolean that determines if the time is valid or not</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectFormat",
            "description": "<p>The inputted format is incorrect</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "views/hw2/hw2.js",
    "groupTitle": "HW2"
  }
] });
