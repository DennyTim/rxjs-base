import { interval, tap } from "rxjs";
import { take } from "rxjs/operators";
import { add } from "../helpers";

const counter = interval(1000);

counter.pipe(
  take(10),
  tap(value => add.li("before x2: " + value))
).subscribe(console.log);
