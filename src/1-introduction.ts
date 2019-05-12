/**
 *  TODO : refactor the code below using pipe operators
 *  Observable.of(1, true, 4, "string")
 */

const observable = null;

console.log("start");
observable.subscribe(
  x => console.log(x),
  err => console.error("Error", err),
  () => console.log("complete")
);
console.log("end");

/**
 Output should be:

 start
 1
 true
 4
 'string'
 complete
 end

 */

/* /!\ Output is synchrone  */


/*====================================================================================================================*/

const data = [1, true, 4, "string"];

/**
 *  TODO : refactor the code below using pipe operators
 *  Observable.from(data)
 */

const observable2 = null;

console.log("start");
observable2.subscribe(
  x => console.log(x),
  err => console.error("Error", err),
  () => console.log("complete")
);
console.log("end");

/**
 Output should be:

 start
 1
 true
 4
 string
 complete
 end

 */
