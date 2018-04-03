
import { trigger, state, transition, style, animate } from '@angular/animations';

    export let fadexx = trigger('jwfade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({ backgroundColor: 'white', opacity: 1})),
        //this style() can be omitted now that angular will automatically restore its initial style
      ]),
      transition('* => void', [
        //animate(1000, style({ opacity: 0}))
        animate(1000)
      ])
    ]);