import {from, interval, Observable, of} from 'rxjs';

export const getSynchroneDataObservable = () => {
  return of(1, "a", false);
};

export const getSynchroneDigitDataObservable: () => Observable<any> = () => {
  return from<number[]>([1, 2, 3, 4, 5]);
};

export const getInfiniteDataObservable = () => {
  return interval(100);
};

export const createFakeEventTarget = () => {
  let id;
  let counter = 0;

  return {
    addEventListener(type, listener) {
      console.log("StartListener::type=", type);
      id = setInterval(() => {
        listener(`${type}-${counter}`);
        counter++;
      }, 500);
    },
    /**
     * Dispatches a synthetic event event to target and returns true
     * if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    dispatchEvent(event) {},
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     */
    removeEventListener(type, callback) {
      console.log("EndListener::type=", type);
      clearInterval(id);
      counter = 0;
    }
  };
};

export const createLoggerObserver = key => ({
  next(x) {
    console.log(key, x);
  },
  error(error) {
    console.error(`${key}::error`, error);
  },
  complete() {
    console.log(key, "complete");
  }
});
