import { animationFrameScheduler, interval, throttle } from "rxjs";
import { take } from "rxjs/operators";
import { add } from "../helpers";

interval(0, animationFrameScheduler)
  .pipe(
    throttle(() => interval(1000)),
    // throttleTime(1000),
    take(10)
  )
  .subscribe(add.li);
