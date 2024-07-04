import {Subject} from "rxjs";
import {Component, OnDestroy} from "@angular/core";

@Component({
  standalone: true,
  template: ''
})
export class Destroyer implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    // Unsubscribe from whatever used takeUntil(destroy$)
    this.destroy$.next(true);
    // Now let's also unsubscribe from the subject itself:
    this.destroy$.unsubscribe();
  }
}
