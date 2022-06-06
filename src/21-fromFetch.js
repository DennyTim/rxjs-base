import { fromFetch } from "rxjs/fetch";
import { catchError, map, retry, switchMap } from "rxjs/operators";
import { add } from "../helpers";
import { concatAll, concatMap, delay, from, mergeMap, of, pipe, tap, throwError } from "rxjs";
import { ajax } from "rxjs/ajax";

/**
 * Example #1
 * */
// const users = fromFetch("https://jsonplaceholder.typicode.com/users");
//
// users
//   .pipe(
//     switchMap(response => {
//       return response.json();
//     })
//   )
//   .subscribe((users) => {
//     users.forEach(user => {
//       add.li(user.name);
//     });
//   });

/**
 * Example #2
 * High order function
 * */

// function getJSON() {
//   return switchMap((res) => {
//     return res.json();
//   });
// }
//
// function emitEach(d) {
//   return pipe(
//     map((response) => from(response)),
//     concatAll(),
//     concatMap((item) => {
//       return of(item).pipe(delay(d));
//     })
//   );
// }
//
// fromFetch("https://jsonplaceholder.typicode.com/users")
//   .pipe(
//     getJSON(),
//     emitEach(2000)
//   )
//   .subscribe(user =>
//     add.li(user.name)
//   );

/**
 * Example #3
 * ajax
 * */
// ajax
//   .getJSON("https://jsonplaceholder.typicode.com/users")
//   .pipe(retry(3))
//   .subscribe((response) => {
//     response.forEach(user => add.li(user.name));
//   });

function checkStatus() {
  return switchMap(response => {
    return response.status === 400
      ? throwError()
      : of("Looks good");
  });
}

/**
 * Example #3
 * error handling
 * */
fromFetch("https://httpbin.org/status/200")
  .pipe(
    checkStatus(),
    catchError(err => {
      return throwError(() => "There was a problem");
    })
  )
  .subscribe(
    {
      next: response => {
        console.log("next", response);
      },
      error: error => {
        console.error("error", error);
      }
    });
