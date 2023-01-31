import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, map, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime( 3000 )
); //.subscribe( console.log );

// Ejemplo 2
const input = document.createElement( 'input' );
document.querySelector( 'body' ).append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    throttleTime( 1000, asyncScheduler, {
        leading: false, 
        trailing: true
    }),
    // throttleTime( 1000 ),
    map( ( { target }) => target['value'] ),
    distinctUntilChanged()
).subscribe( console.log );