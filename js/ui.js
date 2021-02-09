function flipClockUpdate(interval) {
  let value;

  const days = applyFormat(interval.days);
  updateTimeUnit(".days", days);

  const hours = applyFormat(interval.hours);
  updateTimeUnit(".hours", hours);

  const minutes = applyFormat(interval.minutes);
  updateTimeUnit(".minutes", minutes);

  const seconds = applyFormat(interval.seconds);
  updateTimeUnit(".seconds", seconds);
}

function setClock(interval) {
  const days = applyFormat(interval.days);
  setDigitBase(".days", days);

  const hours = applyFormat(interval.hours);
  setDigitBase(".hours", hours);

  const minutes = applyFormat(interval.minutes);
  setDigitBase(".minutes", minutes);

  const seconds = applyFormat(interval.seconds);
  setDigitBase(".seconds", seconds);
}

export { flipClockUpdate, setClock };

function updateTimeUnit(whichDigit, value) {
  const divDigit = document.querySelector(whichDigit);

  const base = divDigit.querySelector(".base");
  const current = divDigit.dataset.value;
  const newValue = applyFormat(value);

  if (current != newValue) {
    divDigit.dataset.value = newValue;
    divDigit.querySelector(".front").dataset.content = current;
    divDigit.querySelector(".back").dataset.content = newValue;
    divDigit.querySelector(".under").dataset.content = newValue;

    const divFlap = divDigit.querySelectorAll(".flap");
    divFlap.forEach((item) => (item.style.display = "block"));
    setTimeout(() => {
      base.textContent = newValue;
      divFlap.forEach((item) => (item.style.display = "none"));
    }, 350);
  }
}

function setDigitBase(whichDigit, value) {
  const divDigit = document.querySelector(whichDigit);
  const base = divDigit.querySelector(".base");

  divDigit.dataset.value = value;
  base.textContent = value;
}

const applyFormat = (number) => number.toString().padStart(2, "0");
