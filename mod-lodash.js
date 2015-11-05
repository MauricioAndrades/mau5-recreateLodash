// var arrOne = [1, 2, 3];
// var arrTwo = [1, 4, 5];
// //[2,3]



// var clean = function(arrayOne, arrayTwo) {
//     for (var i = 0; i < arrOne.length; i++) {
//         if (arrTwo.indexOf(arrOne[i]) !== -1) {
//             arrOne.splice(i, 1);
//         }
//     }
// };

// clean(arrOne, arrTwo);

// console.log(arrOne);


// //max
// var arrThree = [8, 9, 10];

// function arrayMax(array) {
//     return Math.max.apply(null, array);
// }

// console.log(arrayMax(arrThree));

// var arrFour = [1, 2, 3];

// function arrayMin(array) {
//     var min = Math.min(array);
//     return min;
// }

// console.log("arrayFour " + arrFour);
// console.log("math.min " + arrayMin(arrFour));

// var min = Math.min.apply(null, arrFour);
// console.log(min);

// var arrSix = [1, 3, 5];

// var lodashMin = function(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === undefined) {
//             return undefined;
//         } else {
//             var min = Math.min.apply(null, arr);
//             return min;
//         }
//     }
// };

// console.log("lodashMin " + lodashMin(arrSix));
// // arr.indexOf(searchElement[, fromIndex = 0])

// function array_unique(arr) {
//     var result = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (result.indexOf(arr[i]) == -1) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }



// var array = [2, 5, 9];
// console.log("var array = " + array);
// console.log('indexOf(2) ' + array.indexOf(2));
// console.log('indexOf(7) ' + array.indexOf(7));
// console.log('indexOf(9,2) ' + array.indexOf(9, 2));
// console.log(array.indexOf(2, -1));
// console.log(array.indexOf(2, -3));

// // var modIndexOf = function(arr, arg) {
// //     for (i = 0; i < arr.length; i++) {
// //         if (arg !== arr.indexOf(arr[i])) {
// //             return -1;
// //         } else {

// //         }
// //     }
// // };

// //console.log('i should return -1: ' + modIndexOf(array, 11));

// // for ( ... loop ) {
// //     if ( :) ) 
// // return i;
// // }


function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
};

var arr = [4, 5, 6, 7];

[2, 5, , 9].forEach(logArrayElements);

halindexOf = function(arr, arg) {
        for(var i = 0; i< arr.length; i++){
            if(arr[i] === arg)
            {
                return i;
            }
            else{
                 return -1;
            }
        }
};

console.log(halindexOf(['one','two'], 'three'));
console.log(halindexOf([1,2,1,4,5], 4));


shuffle = function(arr) {
    var arrlength = arr.length
    var val = null;
    var ridx = null;
    while (0 !== arr.length) {
        ridx = Math.floor(Math.random() * arrlength);
        arrlength -= 1;

        val = arr[arrlength];
        arr[arrlength] = arr[ridx];
        arr[ridx] = val;
    }
    return arr;
};