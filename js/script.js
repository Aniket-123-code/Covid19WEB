let array = []
function getStateData(event) {
	
  event.preventDefault();
  console.log("event",event)
  console.log(":CALLING .....");
  const url = "https://data.covid19india.org/state_district_wise.json";

  fetch(url)
    .then((response) => {
      // console.log("url",response);
      if (response.ok) return response.json();
    })
    .then((data) => {
      array = data;

      console.log("array", array);
    })
    .catch((error) => {
      console.log("error", error);
    });
}


