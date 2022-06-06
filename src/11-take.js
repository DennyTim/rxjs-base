import { fromEvent, interval, takeLast, takeUntil } from "rxjs";
import { add } from "../helpers";
import { take, takeWhile } from "rxjs/operators";

const btn = document.getElementById("submit");
const buttonEvents = fromEvent(btn, "click");

interval(500)
  .pipe(
    // take(10),
    // takeLast(5)
    // takeWhile(numbers => numbers < 5)
    takeUntil(buttonEvents)
  )
  .subscribe(add.li);
