import { concatMap, delay, of, range } from "rxjs";
import { add } from "../helpers";

const numbers = range(50, 51);
numbers.pipe(concatMap(value => of(value)
  .pipe(delay(1000)))).subscribe(add.li);
