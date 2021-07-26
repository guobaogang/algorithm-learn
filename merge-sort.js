function merge(li, start, mid, end) {
    let left = start,
        right = mid + 1,
        tempList = [];
    while (left <= mid && right <= end) {
        if (li[left] < li[right]) {
            tempList.push(li[left]);
            left++;
        } else {
            tempList.push(li[right]);
            right++;
        }
    }
    while (left <= mid) {
        tempList.push(li[left]);
        left++;
    }
    while (right <= end) {
        tempList.push(li[right]);
        right++;
    }
    for (let index = 0; index < tempList.length; index++) {
        li[start + index] = tempList[index]
    }
}

function mergeSort(li, start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSort(li, start, mid);
        mergeSort(li, mid + 1, end);
        merge(li, start, mid, end);
    }
    return li;
}

let testLi = new Array(99);
for (let index = 0; index < testLi.length; index++) {
   testLi[index] = Math.ceil(Math.random() * 100)
}
console.log(testLi);
mergeSort(testLi, 0, testLi.length - 1)
console.log(testLi);