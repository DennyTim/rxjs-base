import { ReplaySubject } from "rxjs";
import { scan } from "rxjs/operators";

const subject = new ReplaySubject(2); // buffer 2 values for new subscribers

subject.next({ task: "open", timestamp: Date.now() });
subject.next({ task: "in production", timestamp: Date.now() });
subject.next({ task: "in progress", timestamp: Date.now() });

subject
  .pipe(
    scan((acc, val) => {
      return [...acc, val];
    }, [])
  )
  .subscribe((v) => console.log(v));

subject.next({ task: "completed", timestamp: Date.now() });
