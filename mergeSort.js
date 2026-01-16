

function merge(left, right) {
    let i = 0;
    let merged= [];

    while (left.length > 0 || right.length > 0) {
        if (left.length == 0) break;
        if (right.length == 0) break;

        if (left[i] < right[i]) {
            merged.push(left[i]);
            left.splice(i, 1);    
        } else {
            merged.push(right[i]);
            right.splice(i, 1);
        }
        
    }
    if (left.length > 0) merged = merged.concat(left);
    if (right.length > 0) merged = merged.concat(right);

    return merged;

}

function mergeSort(array, results=[]) {
    if (array.length == 0) {
        return [];
    } 
    if (array.length == 1) {
        return array;
    }

    else {
        
        const midPoint = Math.ceil(array.length/2);
        const leftArray = mergeSort(array.slice(0, midPoint), results);
        const rightArray = mergeSort(array.slice(midPoint, array.length), results);
        results = results.concat(merge(leftArray, rightArray));

    }
    return results;
}


console.log(mergeSort([]));
console.log(mergeSort([73]));

console.log(mergeSort([1, 2, 3, 4, 5]));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));
