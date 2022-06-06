import { concatMap, from, interval, reduce } from "rxjs";
import { scan, take } from "rxjs/operators";
import { add } from "../helpers";

const FS = interval(100).pipe(take(10),
  /**
   * scan return result for each value in thread
   * and previous result for each iteration before
   * */
  //  scan((acc, val) => {
  //     const n = val + 1;
  //     const last = acc[n];
  //     const beforeLast = acc[n - 1];
  //     return [...acc, last + beforeLast];
  //   }, [0, 1])
  /**
   * reduce just return result for each value in thread
   * */
  reduce((acc, val) => {
    const n = val + 1;
    const last = acc[n];
    const beforeLast = acc[n - 1];
    return [...acc, last + beforeLast];
  }, [0, 1]));

FS
  .pipe(concatMap(sequence => from(sequence)))
  .subscribe(add.li);
