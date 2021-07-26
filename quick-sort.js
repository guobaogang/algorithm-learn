function quickSort(li) {
    if (li.length < 2) return li;
    let left = [],
        mid = [],
        right = [];
    let temp = li[0]
    for (let index = 0; index < li.length; index++) {
        let value = li[index];
        if (value > temp) {
            right.push(value)
        } else if (value < temp) {
            left.push(value)
        } else {
            mid.push(value)
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}

let testLi = new Array(100);
for (let index = 0; index < testLi.length; index++) {
   testLi[index] = Math.ceil(Math.random() * 100)
}
console.log(testLi)
console.log(quickSort(testLi))