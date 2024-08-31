// Class 2
const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

// Concept: addEventListerner
/*
addEventListener is a method in JavaScript used to attach an event listener to an HTML element. 
It takes two arguments: the type of event to listen for (e.g. “click”, “scroll”, “keydown”), 
and the function to be executed when the event is triggered.
*/
// Concept: in js, functions can be passed as arguments to other funcs
clcBtn.addEventListener("click", calcWakeUpTimes);
refreshBtn.addEventListener("click", calcWakeUpTimes);
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden");
  imageContainer.classList.remove("hidden");
  resultSection.classList.add("hidden");
});

function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  // const wakeUpTimes = [];
  wakeUpHoursDiv.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    // wakeUpTimes.push(wakeUpTimeString);
    // const cycleDiv = document.getElementById('cycle-${i}'); // **CONCEPT** uses div's ID to update the corresponding div element
    // cycleDiv.textContent = wakeUpTimeString;

    // ** CONCEPT **
    const cycleDiv = document.createElement("div");  // create div element
    cycleDiv.classList.add("cycle");  // gives it class cycle
    cycleDiv.setAttribute("id", `cycle-${i}`);  // set id to cycle-i
    cycleDiv.textContent = wakeUpTimeString;  // set content to calc wake up time
    wakeUpHoursDiv.appendChild(cycleDiv); // append it to the wakeup-hours-div
  }

  // Concept
  /*
  These statements use the classList property of DOM elements in JavaScript 
  to add or remove CSS classes from the elements.
  */
  promptSection.classList.add("hidden");
  imageContainer.classList.add("hidden");
  resultSection.classList.remove("hidden");
}