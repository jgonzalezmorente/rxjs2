import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log( 'siguiente [next]: ', value ),
    error: error => console.warn( 'error [obs]: ', error ),
    complete: () => console.info( 'completado [obs]')
}


const obs$ = new Observable<string>( subs => {

    subs.next( 'Hola' );
    subs.next( 'Mundo' );

    subs.next( 'Hola' );
    subs.next( 'Mundo' );

    // Forzar un error

    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete();

    subs.next( 'Hola' );
    subs.next( 'Mundo' );

});

obs$.subscribe( observer );

// obs$.subscribe({
//     next: valor => console.log( 'next: ', valor ),  
//     error: error => console.warn( 'error ', error ),
//     complete: () => console.log('completado')
// });
