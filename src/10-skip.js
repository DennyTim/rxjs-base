import { from, fromEvent, interval, skip, skipUntil, skipWhile } from "rxjs";
import { add } from "../helpers";
import { take } from "rxjs/operators";

// from(["apples", "grapes", "oranges", "pears"])
//   .pipe(skip(2))
//   .subscribe(add.li);

const btn = document.getElementById("submit");
const buttonEvents = fromEvent(btn, "click");

interval(1000)
  .pipe(
    // take(10)
    // skipWhile(number => number < 4)
    skipUntil(buttonEvents)
  )
  .subscribe(add.li);
