import { concat, fromEvent, interval } from "rxjs";
import { map, take } from "rxjs/operators";
import { add } from "../helpers";

const button = document.getElementById("submit");

const streamOne = interval(1000)
  .pipe(take(10));

const streamTwo = fromEvent(button, "click")
  .pipe(map(e => "clicked"));

concat(streamOne, streamTwo).subscribe(add.li);
