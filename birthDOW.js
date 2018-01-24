// variable references the ids in our calculator div
var userMonth = document.getElementById('user_month');
var userDay = document.getElementById('user_day');
var userYear = document.getElementById('user_year');

var submitButton = document.getElementById('submit_date');
// event handler - listening for a click
submitButton.addEventListener("click", function(evt) {
	var message = document.getElementById('message');
	// variables to grab the users date input and store it
	// -1 is for an array that will ref. 12 months
	// The parseInt() function analyzes a string and returns an integer. 
	var parsedMonth = (parseInt(userMonth.value) -1);
	var parsedDay = parseInt(userDay.value);
	var parsedYear = parseInt(userYear.value);

	//create an array to store all the months of the year
	// remember that it will be indexed beginning with 0
	var months = ["January","February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
	var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
	// create a date object with users input
	var dateIs = new Date(parsedYear, parsedMonth, parsedDay);
	// get access to each day of the week using a built in function
	// getDay returns the day od the week+
	var weekdayIs = weekday[dateIs.getDay()];
	var monthIs = months[parsedMonth];

	// error handling
	if (weekdayIs === undefined || monthIs === undefined) {
		message.innerText = "";
		// timeout for 500 milliseconds
		setTimeout(function() {
		message.innerText = "Please enter a valid date.";}, 500);	

		}
		else {
			message.innerText = weekdayIs + ", " +monthIs + " " + parsedDay + ", " +parsedYear;
		}


	})



