// useEffect: persistent state
// 💯 flexible localStorage hook
// http://localhost:3000/isolated/final/02.extra-4.js

import * as React from 'react';
// import client from '../client';
export default function useLocalStorageState(
  key,
  defaultValue = '',
  // the = {} fixes the error we would get from destructuring when no argument was passed
  // Check https://jacobparis.com/blog/destructure-arguments for a detailed explanation
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  // Check the example at src/examples/local-state-key-change.js to visualize a key change
  React.useEffect(() => {
    console.log(`inside useEffect of local storage`);

    if (window.localStorage.getItem(key)) {
      const prevKey = prevKeyRef.current;
      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey);
      }
      prevKeyRef.current = key;
      console.log(
        `inside useEffect of local storage key and setting ${key} in local storage`
      );
      window.localStorage.setItem(key, serialize(state));
    }
  }, [key, state, serialize]);

  return [state, setState];
}

export function localstorageCleaner(revid, page) {
  if (!window.localStorage.getItem(`${page}revid`)) {
    window.localStorage.setItem(`${page}revid`, revid);
  } else if (window.localStorage.getItem(`${page}revid`) !== revid) {
    window.localStorage.removeItem(page);
    window.localStorage.setItem('revid', revid);
  }
}
