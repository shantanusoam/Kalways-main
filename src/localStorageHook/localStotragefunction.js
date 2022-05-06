// useEffect: persistent state
// 💯 flexible localStorage hook
// http://localhost:3000/isolated/final/02.extra-4.js

export default function LocalStorageFunction(
  key,
  data,
  // the = {} fixes the error we would get from destructuring when no argument was passed
  // Check https://jacobparis.com/blog/destructure-arguments for a detailed explanation
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  window.localStorage.setItem(key, serialize(data));
}
