// You need to return sorted array, not string
// arr: input array
// arrSize: size of array
function sortEvenOdd(arr, arrSize) {
  // Your code here  
  let n = arrSize;
  let l = 0, r = n - 1;
  let k = 0;
  while (l < r) {
    while (arr[l] % 2 != 0) {
      l++; k++;
    }
    while (arr[r] % 2 == 0 && l < r)
      r--;
    if (l < r) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
    }
  }
  let odd = new Array(k);
  for (let i = 0; i < k; i++) {
    odd[i] = arr[i];
  }
  let even = new Array(n - k);
  for (let i = 0; i < n - k; i++) {
    even[i] = arr[k + i];
  }
  odd.sort(function (a, b) { return b - a });
  even.sort(function (a, b) { return a - b });

  return odd.concat(even);
}
