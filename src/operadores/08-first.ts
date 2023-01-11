import { fromEvent } from 'rxjs';
import { first, take, tap, map } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    tap<PointerEvent>( console.log ),
    map( ( { clientX, clientY } ) => ( { clientX, clientY } ) ),
    first( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log( 'next:', val ),
    complete: () => console.log( 'complete' )
});