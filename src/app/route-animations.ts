import { trigger, style, animate, transition, query } from '@angular/animations'

// fade animation
export const routeFade =
trigger('routeAnimations', [
    // trigger must match the @trigger in html
    transition('* <=> *', [
        // above has a wild card selector for all animations
        query(':enter, :leave',[
            // query allows us to add elements to the DOM
            style({
                position: 'absolute',
                width: '100%',
                left: 0,
                opacity: 0,
                transform: 'scale(0) translateY(100%)',
            })
        ]),
        query(':enter', [
            animate('600ms ease',
            style({ opacity:1, transform: 'scale(1)'})
            )
        ]
        )
    ]),
])

export const fadeInAnimation = 
trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
    ])
])