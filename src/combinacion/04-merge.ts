import { fromEvent, map, merge } from 'rxjs';

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge( 
    keyup$.pipe( map( key => key.type ) ), 
    click$.pipe( map( key => key.type ) ) 
).subscribe( console.log );
