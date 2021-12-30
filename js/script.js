// This Code call function name performSearch()
// on clicking submit button of form
$(document).ready(function () {

	// Add an event listener (performSearch)
	// to the form
	$("#query-form").submit(function (event)
		{ performSearch(event);
		console.log("event",event); });
});

var pat, flag = 0;
function formatSearchResults(jsonResults) {

	// Storing Json Data in jsonobject variable
	var jsonObject = jsonResults;

	$("#search-results-heading").text("Search Results");
	var formatedText = "";

	jsonObject.States.forEach(function (item, index) {

		// Matching user search data with api data
		if (item.State.toLowerCase() == pat.toLowerCase()) {
			var thumbnail = item.NewConfirmed;
			// Printing the result
			formatedText +=
"<div class='dish-ingredients-div'><h3>TotalConfirmed: " +
				item.TotalConfirmed + "<h3></div>";

			formatedText +=
"<div class='dish-ingredients-div'><h3>NewDeaths: " +
				item.NewDeaths + "<h3></div>";

			formatedText +=
"<div class='dish-ingredients-div'><h3>NewConfirmed: " +
				item.NewConfirmed + "<h3></div>";

			formatedText +=
"<div class='dish-ingredients-div'><h3>NewRecovered: " +
				item.NewRecovered + "<h3></div>";

			flag = 1;
			return;
		}
	});

	$("#results").html(formatedText);

	// If result not found
	if (!flag) {
		$("#search-results-heading")
			.text("Dont Fun With it.Please Enter"
				+ " Correct Country Name e.g-India");
		$("#results").text("");
	}
}

function performSearch(event) {

	// Variable to hold request
	var request;

	// Prevent default posting of form -
	// put here to work in case of errors
	event.preventDefault();

	// Abort any pending request
	if (request) {
		request.abort();
	}

	// Setup some local variables
	var $form = $(this);

	// Disable the inputs and buttons
	// for the duration of the request.
	// setFormDisabledProps(true);

	// It will show heading searching
	// during the request
	$("#search-results-heading")
			.text("Searching ...");
	$("#results").text("");

	// Send the request to API for data
	request = $.ajax({
		url: "https://www.covid19india.org/",
		type: "GET",
		// data: { i:, q: $("#contains").val() }
	});

	// Taking country name from input
	// box that we created
	pat = $("#ingredients").val();

	// Callback handler for success
	request.done(function (response,
		textStatus, jqXHR) {
			console.log("Api response",response)

		formatSearchResults(response);
		
	});

	// Callback handler for failure
	request.fail(function (jqXHR,
			textStatus, errorThrown) {

		// Calling formal search after
		// getting data from api
		$("#search-results-heading").text(
"Sorry We Unable to fetch Covid Data.Try again.");
		$("#results").text("");
	});

	// Callback handler that will be
	// called in any case
	request.always(function () {

		// Reenable the inputs
		setFormDisabledProps(false);
	});
}

// This function clears the search results
// and the heading "Search Results"
function resetResults() {
	$("#search-results-heading").text("");
	$("#results").text("");
	flag = 0;
}

// This function checks the user input
// fields for any unacceptable characters
// and removes them if found
function sanitizeInputs() {
	var str = $("#ingredients").val();
	str = str.replace(/[^a-zA-Z 0-9, ]/gim, "");
	str = str.trim();
	$("#ingredients").val(str);
}
