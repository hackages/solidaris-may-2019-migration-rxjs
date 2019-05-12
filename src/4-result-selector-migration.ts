import { getSynchroneDigitDataObservable } from "./utilities";
import {first, last, map} from 'rxjs/operators';

/**
 *  SETUP
 */

// `data` is an observable stream of digit value. Values will be 1, 2, 3, 4, 5
const data = getSynchroneDigitDataObservable();

/**
 *  TODO : refactor the code below
 *  data.pipe(first(v => v === 2, v => v * 3, 'Default')).subscribe(result => console.log(result));
 
 */


/*====================================================================================================================*/


/**
 *  TODO : refactor the code below
 *  data.pipe(last(v => v === 2, v => v * 3, 'Default')).subscribe(result => console.log(result));

 */



/*====================================================================================================================*/


// see also mergeMap, mergeMapTo(), concatMap, concatMapTo etc
