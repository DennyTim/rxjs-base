import { add, sampleData } from "../helpers";
import { pluck } from "rxjs";

sampleData.pipe(
  pluck("company", "name")
).subscribe(console.log);
