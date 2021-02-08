"use strict";
import getInterval, { getDeadlineFromURL } from "./time.js";
import { setClock, flipClockUpdate } from "./ui.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const { deadline, description } = getDeadlineFromURL();

  console.log("description:", description);
  const divDescription = document.querySelector("#description-text");
  divDescription.textContent = description;

  const interval = getInterval(deadline);
  setClock(interval);

  setInterval(() => {
    const interval = getInterval(deadline);
    flipClockUpdate(interval);
  }, 1000);
}
