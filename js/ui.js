function flipClockUpdate(interval) {
  let value;

  value = applyFormat(interval.days);
  updateTimeUnit(".days", value);

  value = applyFormat(interval.hours);
  updateTimeUnit(".hours", value);

  value = applyFormat(interval.minutes);
  updateTimeUnit(".minutes", value);

  value = applyFormat(interval.seconds);
  updateTimeUnit(".seconds", value);
}

function setClock(interval) {
  let value;

  value = applyFormat(interval.days);
  setDigitBase(".days", value);

  value = applyFormat(interval.hours);
  setDigitBase(".hours", value);

  value = applyFormat(interval.minutes);
  setDigitBase(".minutes", value);

  value = applyFormat(interval.seconds);
  setDigitBase(".seconds", value);
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
