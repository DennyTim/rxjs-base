import { debounce, debounceTime, fromEvent, interval } from "rxjs";

const inputBox = document.getElementById("input");
const renderBox = document.getElementById("display-content");
const submitButton = document.getElementById("submit");

const content = fromEvent(inputBox, "keyup");
const submit = fromEvent(submitButton, "click");

content
  .pipe(
    // debounce(() => submit)
    // debounce(() => interval(1000))
    debounceTime(2000)
  )
  .subscribe(() => {
    renderBox.innerHTML = inputBox.value;
  });
