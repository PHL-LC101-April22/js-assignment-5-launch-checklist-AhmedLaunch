// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput == "") {
        return "Empty"
    }
    if (typeof Number(testInput) == "Number") {
        return "is a Number"
    }
    return "is not a Number"
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    //do i need to define document or list in this function??

    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let feulStatus = document.getElementById('feulStatus');
    let cargoStatus = document.getElementById('cargoStatus');
   

    // create the list then update the list <li> using else statements 
    // should i use list.getElementById or 
    if (validateInput(pilot.value) == "is not a Number") {
        pilotStatus.innerHTMl += <li id="copilotStatus" data-testid="copilotStatus">Pilot ${pilot} Ready</li>
    }

    if (validateInput(copilot.value) == "is  not a Number") {
        copilotStatus.innerHTMl += <li id="copilotStatus" data-testid="copilotStatus">Co-pilot ${copilot} Ready</li>
    }

    if (validateInput(fuelLevel.value) == "is a Number" && feulLevel.value < 10,000) {
        let newFaultyItems = document.getElementById("faultyItems");
        
        console.log("paragraph contents:", paragraph.innerHTML.trim());
        paragraph.style.color = "blue";

        feulStatus.innerHTML += <li id="fuelStatus" data-testid="fuelStatus">Not enough feul for the journey</li>
    }
    if (validateInput(cargoMass.value) == "is a Number" && cargoMass.value > 10,000) {
        
        cargoStatus.innerHTML.trim() += <li id="cargoStatus" data-testid="fuelStatus">Not enough feul for the journey</li>
    }
    event.preventDefault();
    return

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
