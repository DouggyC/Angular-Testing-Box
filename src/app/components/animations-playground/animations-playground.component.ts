import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-animations-playground',
  templateUrl: './animations-playground.component.html',
  styleUrls: ['./animations-playground.component.css'],
  animations: [
    trigger('popOverState', [
      state(
        'show',
        style({
          opacity: 1
        })
      ),
      state(
        'hide',
        style({
          opacity: 0
        })
      ),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    //
    trigger('photoState', [
      state(
        'move',
        style({
          transform: 'translateX(30%) translateX(300px)'
        })
      ),
      state(
        'spin',
        style({
          transform: 'rotateY(180deg) rotateZ(180deg)'
        })
      ),
      state(
        'enlarge',
        style({
          transform: 'scale(2, 3)'
        })
      ),
      // transition('spin => move', animate('2000ms ease-out')),
      // transition('* => *', animate('5000ms ease')),
      transition(
        '* => move',
        animate(
          '2000ms',
          keyframes([
            style({ transform: 'translateX(0) rotateY(0)', offset: 0 }),
            style({
              transform: 'translateX(50%) rotateY(90deg)',
              offset: 0.33
            }),
            style({
              transform: 'translateX(-75%) rotateY(180deg)',
              offset: 0.66
            }),
            style({ transform: 'translateX(-100%)', offset: 1.0 })
          ])
        )
      )
    ]),
    // photosAnimations
    trigger('photosAnimation', [
      transition('* => *', [
        query(
          'img',
          style({
            transform: 'translateX(80%)'
          })
        ),
        query(
          'img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' }))
          ])
        )
      ])
    ])
  ]
})
export class AnimationsPlaygroundComponent implements OnInit {
  photos = [
    'https://source.unsplash.com/300x200/?nature',
    'https://source.unsplash.com/300x200/?dog',
    'https://source.unsplash.com/300x200/?cat',
    'https://source.unsplash.com/300x200/?fish',
    'https://source.unsplash.com/300x200/?bird'
  ];

  constructor() {}

  ngOnInit() {}

  show = false;
  get stateName() {
    return this.show ? 'show' : 'hide';
  }
  toggle() {
    this.show = !this.show;
  }

  //
  position: string;
  changePosition(newPosition: string) {
    this.position = newPosition;
  }

  logAnimation($event) {
    console.log(`${this.position} animation ${$event.phaseName}`);
  }
}
