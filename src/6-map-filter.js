import { filter, interval } from "rxjs";
import { map, take } from "rxjs/operators";
import { add } from "../helpers";

const numbers = ["zero", "one", "two", "three", "four"];

const counter = interval(1000)
  .pipe(take(4));   // output: 0, 1, 2, 3

counter
  .pipe(
    filter(value => {
      return value % 2;
    }),
    // output: 1, 3
    map((value) => {
      return numbers[value];
    })
    // output: one, three
  )
  .subscribe(add.li);
