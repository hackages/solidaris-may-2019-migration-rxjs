import {getSynchroneDigitDataObservable} from './utilities';

/**
 *  SETUP
 */

// `data` is an observable stream of digit value. Values will be 1, 2, 3, 4, 5
const data = getSynchroneDigitDataObservable();

/**
 *  TODO : refactor the code below using pipe operators
 *  data.map(v=> v * 2).subscribe(result => console.log(result))
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below using pipe operators
 *  data.map(v=> v * 2).filter(v => v > 3).subscribe(result => console.log(result))
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below using pipe operators
 *  data.map(v=> v * 2).filter(v => v > 3).take(1).subscribe(result => console.log(result))
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below using pipe operators
 *  data.switchMap(v=> Observable.of(v * 2).map(v => v*3)).take(1).subscribe(result => console.log(result))
 */

