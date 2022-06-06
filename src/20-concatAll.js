import { concatAll, expand, from, fromEvent, interval, mergeAll, of, switchAll, tap } from "rxjs";
import { add } from "../helpers";
import { map, take } from "rxjs/operators";

const button = document.getElementById("submit");
const clicks = fromEvent(button, "click");

const source = clicks.pipe(
  tap(ev => add.li("click")),
  map(ev => {
    return interval(1000)
      .pipe(take(3));
  }),
);

source
  .pipe(switchAll())
  .subscribe(add.li);
