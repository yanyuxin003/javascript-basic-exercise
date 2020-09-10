export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  let list = null;
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  // 将输出1 2 3 element 写在一起
  for (let i = array.length - 1; i >= 0; i -= 1) {
    list = { value: array[i], next: list };
  }
  return list;
}
