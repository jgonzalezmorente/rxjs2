import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response ) => {
    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

const atrapaError = ( err: AjaxError ) => {
    console.warn( 'error en:', err.message );
    return of([])
}

const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log( 'data:', data ) )
//     .catch( err => console.warn( 'error en usaurios', err ) );

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log( 'data:', data ) )
//     .catch( err => console.warn( 'error en usaurios', err ) );

ajax( url ).pipe(
    map( resp => resp.response ),
    catchError( atrapaError )
).subscribe( users => console.log( 'usuarios:', users ) );
