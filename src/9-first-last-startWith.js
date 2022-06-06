import { add, sampleData } from "../helpers";
import { pluck, startWith } from "rxjs";

const me = {
  name: "Matt Keener"
};

sampleData
  .pipe(
    // first(),
    // last(),
    startWith(me),
    pluck("name")
  )
  .subscribe(add.li);
