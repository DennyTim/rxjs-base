import { fromEvent, takeUntil, tap } from "rxjs";
import { map, switchMap } from "rxjs/operators";

const canvas = document.querySelector("#display-canvas");
const context = canvas.getContext("2d");

const moves = fromEvent(canvas, "mousemove");
const down = fromEvent(canvas, "mousedown");
const up = fromEvent(canvas, "mouseup");

function brush(coords) {
  context.lineWidth = 2;
  context.lineTo(coords.x, coords.y);
  context.stroke();
}

down
  .pipe(
    tap(evt => {
      context.strokeStyle = "purple";
      context.beginPath();
      context.moveTo(evt.offsetX, evt.offsetY);
    }),
    switchMap(evt =>
      moves.pipe(
        map(evt => {
          return { x: evt.offsetX, y: evt.offsetY };
        }),
        takeUntil(up)
      )
    )
  )
  .subscribe(coords => {
    brush(coords);
  });
