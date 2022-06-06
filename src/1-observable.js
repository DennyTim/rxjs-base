import { add } from "../helpers";
import { Observable } from "rxjs";

const observer = {
  next: add.li,
  error: add.li,
  complete: () => add.li("There are no more values")
};

const producer = new Observable(subscriber => {
  subscriber.next("Hello from the Observable class");
  subscriber.next("something I forgot");
  subscriber.complete();
});

producer.subscribe(observer);
