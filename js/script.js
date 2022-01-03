let array = [];


function getStateData(event) {
  event.preventDefault();
  console.log("event", event);
  console.log(":CALLING .....");
  const url = "https://data.covid19india.org/state_district_wise.json";

  fetch(url)
    .then((response) => {
      // console.log("url",response);
      if (response.ok) return response.json();
    })
    .then((actuldata) =>{
      console.log(actuldata)
    })
    .catch((error) => {
      console.log("error", error);
    });
}


function filterStateData(stateName) {
  array.filter((state) => {
    return state === stateName
   
    
  });

}
let Goa = filterStateData("Goa");
console.log(Goa);
