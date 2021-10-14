let computerChoice = ''
let button = document.querySelectorAll('.button')
button.forEach((allButton) => {
  allButton.addEventListener("click", (e) => {

    let choice = e.target.innerHTML.toLowerCase()
    fetch(`/api?choice=${choice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent =  "You Selected : "+choice+" Computer selected  : "+data.computerChoiceName+" Result  : " +data.result
      
     
    });

    
  });
});

// var result = compare(computerChoice).toUpperCase();

// 		$(".result").html("<h1>Result:</h1><p>User: " + userChoice.toUpperCase() + "<br>" +
// 											"Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>");
	







// const btns = document.querySelectorAll("button");
// btns.forEach((allButten) => {
//   allButten.addEventListener("click", (event) => {
//     console.log(event.target.innerHTML);
//   });
// });

// let = document.querySelectorall('#clickMe').addEventListener('click', button)
// // document.querySelector('#clickMe').addEventListener('click', makeReq)
// // document.querySelector('#clickMe').addEventListener('click', makeReq)
// // document.querySelector('#clickMe').addEventListener('click', makeReq)
// // document.querySelector('#clickMe').addEventListener('click', makeReq)


// function makeReq(){

//   // const userName = document.querySelector("#userName").value;

  

// }

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
