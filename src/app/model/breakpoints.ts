import { BREAKPOINT } from '@angular/flex-layout';

export const MY_BREAKPOINTS = [
    
    { alias: 'xs', mediaQuery: 'screen and (max-width: 600px)', overlapping: false, priority: 1001 },
    { alias: 'gt-xs', mediaQuery: 'screen and (min-width: 601px)', overlapping: false, priority: 1001 },
];

export const CustomBreakPointsProvider = {
    provide: BREAKPOINT,
    useValue: [...MY_BREAKPOINTS],
    multi: true,
};