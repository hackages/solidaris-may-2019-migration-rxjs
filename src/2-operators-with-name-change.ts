
import { catchError, filter, map, take, tap } from "rxjs/operators";
import { getSynchroneDigitDataObservable } from "./utilities";
import { of } from "rxjs";

/**
 *  SETUP
 */

// `data` is an observable stream of digit value. Values will be 1, 2, 3, 4, 5
const data = getSynchroneDigitDataObservable();

/**
 *  TODO : refactor the code below using pipe operators
 *  data.map(v=> v * 2).do(v => console.log('logging', v)).subscribe(result => console.log(result))
 */


/*====================================================================================================================*/

/**
 *  TODO : refactor the code below using pipe operators
 *  data
 .map(v => {
        if (v === 2) {
          throw new Error("2");
        }
        return 2;
      })
 .catch(error => of(1))
 .subscribe(result => console.log(result));
 */



/*====================================================================================================================*/

// see also switch -> switchAll and finally -> finalize
