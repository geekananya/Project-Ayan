const getloc = document.querySelector("#getloc");
const message = document.querySelector(".recorded-msg");

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}     //works

function successCallback(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    console.log("accuracy", accuracy);
    const success = updateLocation(2, latitude, longitude);
    if(success)
      message.classList.add("makevisible");
}

function errorCallback(error) {
    console.error("Error getting location:", error.message);
    return {};
}

getloc.addEventListener("click", getLocation);

// function showError(error) {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         alert("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         alert("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         alert("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         alert("An unknown error occurred.");
//         break;
//     }
//   }


function updateLocation(user_id, latitude, longitude) {
    fetch('http://localhost:3000/update-location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id, latitude, longitude }),
    })
    .then(resp => {
      if(!resp.ok){
        alert("Unable to update location!");
        return false;
      }
    })
    .catch(error => {
      console.error('Error updating location:', error)
      return false;
    });
    return true;
  }
  
  //  Update location every 2 hours.
//   setInterval(() => {
//     const user_id = 1; // Replace with the actual user ID
//     const latitude = /* get latitude */;
//     const longitude = /* get longitude */;
  
//     updateLocation(user_id, latitude, longitude);
// //   }, 2*1000);
//   }, 2*60*60*1000);