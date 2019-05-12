import { iif, of, merge, concat } from "rxjs";

/**
 *  SETUP
 */

const value = 2;

/**
 *  TODO : refactor the code below using pipe operators
 *   Observable.if(() => value === 2, of(2), of(1)).subscribe(result =>
 *      console.log(result)
 *   );
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below
 *   of(1, 2)
 *      .pipe(merge(of(3, 4), of(5, 6)))
 *      .subscribe(result => console.log(result));
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below
 *   of(1, 2)
 *      .pipe(concat(of(3, 4), of(5, 6)))
 *      .subscribe(result => console.log(result));
 */



// see also combineLatest, race, zip
