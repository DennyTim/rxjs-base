import { add } from "../helpers";
import { from, fromEvent, of } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";

const submit = document.getElementById("submit");

// rxjs handle events
fromEvent(submit, "click")
  .subscribe(event => console.log(event.target));

fromFetch("https://jsonplaceholder.typicode.com/users")
  .pipe(
    switchMap((response) => {
      return response.json();
    })
  )
  .subscribe(result => {
    console.log(result);
    result.forEach(user => add.li(user.name));
  });

// output: ["apples", "oranges", "grapes"]
of(["apples", "oranges", "grapes"])
  .subscribe(data => console.log("of", data));

// output: apples
// output: oranges
// output: grapes
from(["apples", "oranges", "grapes"])
  .subscribe(data => console.log("from", data));
