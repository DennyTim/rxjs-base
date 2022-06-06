import { concatMap, exhaustMap, fromEvent, interval, mergeMap, tap } from "rxjs";
import { add, animate } from "../helpers";
import { map, switchMap, take } from "rxjs/operators";

const startButton = document.getElementById("start");
const startClicked = fromEvent(startButton, "click");
const circle = document.getElementById("circle");

startClicked
  .pipe(mergeMap(() => {
    return animate(5000);
  }))
  .subscribe(t => {
    circle.style.marginLeft = `${t * 450}px`;
  });

interval(2000)
  .pipe(
    take(3),
    map(value => `${value * 100}`),
    exhaustMap(x => {
      return interval(1000)
        .pipe(
          take(5),
          map(value => `inner(${value}), outer(${x})`)
        );
    })
  )
  .subscribe(value =>
    add.li(`Emitted Value: ${value}`)
  );
