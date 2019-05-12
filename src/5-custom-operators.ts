import {map} from 'rxjs/operators';
import {MonoTypeOperatorFunction, of} from 'rxjs';

/**
 *  SETUP
 */

const data = of(0, "", "foo", 69);

/**
 *  TODO : implement firstTruthy operator
 *  Get only in the first truthy value emitted by a stream
 */

function firstTruthy<T>(): MonoTypeOperatorFunction<T> {
  // TODO: implement the custom operator
  return observable => of();
}


/*====================================================================================================================*/

const data2 = of(0, 3, 69);

/**
 *  TODO : implement pow operator
 *   It will raise the emitted value to the power of n
 */

function pow(n: number) {
  // TODO: implement the custom operator
  return of();
}

// uncomment me when you will implement it
// data2.pipe(pow(3)).subscribe(result => console.log(result));
