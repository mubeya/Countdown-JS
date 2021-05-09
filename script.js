
setInterval(function() {
  
  const countdown = document.querySelector('input[type="datetime-local"]').value;
  const countdownDate = new Date(countdown);  
  const currentDate = new Date();
  const totalseconds = (countdownDate - currentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);
  const hour = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("seconds").innerHTML = seconds;

  if(countdown !== ""){
    document.querySelector(".countdown-container").classList.add("show");
    document.querySelector(".countdown-container").classList.remove("hide");
  }
  
}, 1000); 





// const countdown = "1 Jan 2022";
// function countdownApp() {
  
//   const countdownDate = new Date(countdown);  // convert starting time in Date() format
//   const currentDate = new Date();

//   const totalseconds = (countdownDate - currentDate) / 1000;

//   const days = Math.floor(totalseconds / 3600 / 24);
//   const hour = Math.floor(totalseconds / 3600) % 24;
//   const mins = Math.floor(totalseconds / 60) % 60;
//   const seconds = Math.floor(totalseconds) % 60;

//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hour").innerHTML = hour;
//   document.getElementById("mins").innerHTML = mins;
//   document.getElementById("seconds").innerHTML = seconds;
// }

// countdownApp();

// setInterval(countdownApp, 1000);
