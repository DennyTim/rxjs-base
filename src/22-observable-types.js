import { Observable, shareReplay, Subject } from "rxjs";
import { add } from "../helpers";

// Hot observable or Multicast
const sub = new Subject();
const readableStream = sub.asObservable()
  .pipe(shareReplay(1));

setTimeout(() => {
  readableStream.subscribe(x => add.li("S: " + x));
}, 1000);

setTimeout(() => {
  readableStream.subscribe(x => add.li("S: " + x));
}, 1000);

setTimeout(() => {
  readableStream.subscribe(x => add.li("S: " + x));
}, 1000);

setTimeout(() => {
  sub.next(Date.now());
}, 1005);

// Cold Unicast

const obs = new Observable(subscriber =>
  subscriber.next(Date.now())
);

setTimeout(() => {
  obs.subscribe(x => add.li("S: " + x));
}, 1000);

setTimeout(() => {
  obs.subscribe(x => add.li("S: " + x));
}, 2000);

setTimeout(() => {
  obs.subscribe(x => add.li("S: " + x));
}, 3000);
