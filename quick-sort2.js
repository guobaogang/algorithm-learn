function quickSort(li, start, end) {
    if (start >= end) return;
    let left = start,
        right = end;
    let tempIndex = start,
        temp = li[tempIndex];
    while (left < right) {
        while (left < right && li[right] >= temp) {
            right--;
        }
        if (left < right) {
            li[tempIndex] = li[right]
            tempIndex = right;
        }
        while (left < right && li[left] < temp) {
            left++
        }
        if (left < right) {
            li[tempIndex] = li[left]
            tempIndex = left;
        }
    }
    li[left] = temp;

    quickSort(li, start, left - 1);
    quickSort(li, left + 1, end)
}


let testLi = new Array(100);
for (let index = 0; index < testLi.length; index++) {
   testLi[index] = Math.ceil(Math.random() * 100)
}
console.log(testLi)
quickSort(testLi, 0, testLi.length - 1)
console.log(testLi)