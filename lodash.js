var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

// # first Returns the first element of an array
_.first = function(arr) {
    // Place your solution here
    return arr[0];
};

// #take Returns the first n number of elements in an array.
// #take take(array, int) should return int elements from the beginning of the array
_.take = function(arr, n) {
    if (n === undefined) {
        n = 1;
    }
    return arr.slice(0, n);
};

// #last Returns the last element of an array
_.last = function(arr) {
    return arr.pop();
// return array[array.length-1];
};

// #take right Returns the last n number of elements in an array.
_.takeRight = function(arr, n) {
    if (n === undefined) {
        n = 1;
    }
    return arr.slice(-n);
// n = n || 1;
// var start = array.length -n;
// if (start < 0 ) {
    // n = 0
// }
//return array.slice(n);
};


// #compact Creates a new array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i])
            arr.splice(i, 1);
    }
    return arr;
};

// Creates an array of unique array values not included in the other provided arrays
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrOne, arrTwo) {
    for (var i = 0; i < arrOne.length; i++) {
        if (arrTwo.indexOf(arrOne[i]) !== -1) {
            arrOne.splice(i, 1);
        }
    }
    return arrOne;
};

// Create a duplicate free version of the array
// _.uniq([2, 1, 2]);
// → [2, 1]
_.uniq = function(arr) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
        if (r.indexOf(arr[i]) === -1) {
            r.push(arr[i]);
        }
    }
    return r;
};

// Returns maximum value in an array
_.max = function(arr) {
    return Math.max.apply(null, arr);
};

//or

// for (i = 0; i < arr.length; i++) {
//     var max = array[0];
//         for ( var i = 0; i < arr.length; i++) {
//             if (array[i] > max) {
//                 max = array[i];
//         }
// }

// Returns min value in an array
_.min = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === undefined) {
            return undefined;
        } else {
            var min = Math.min.apply(null, arr);
            return min;
        }
    }
};

// for (i = 0; i < arr.length; i++) {
//     var max = array[0];
//         for ( var i = 0; i < arr.length; i++) {
//             if (array[i] < max) {
//                 max = array[i];
//         }
// }

// Returns index of matched value, else return -1
_.indexOf = function(arr, arg) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arg) {
            return i;
        }
    }
    return -1;
};


/*************** BONUS ***************/
// Retuns a new shuffled array

_.shuffle = function(arr) {
    var cindex = arr.length, tval, rindex;
    while (0 !== cindex) {
        rindex = Math.floor(Math.random() * cindex);
        cindex -= 1;
        tval = arr[cindex];
        arr[cindex] = arr[rindex];
        arr[rindex] = tval;
    }
    return arr;
};

/**************************************
 ************* COLLECTIONS *************
 **************************************/
// Returns the length of the collection
_.size = function() {
    //conditional statement
    if(collection.constructor === Array || collection.constructor === 'string') {
        len = collection;
    } else {
        len = Object.keys(collection);
    } 
    return len;
};

// Iterates on each item of the collection and then returns the original collection
_.forEach = function(collection, callback) {
    // Place your solution here
    if (collection.constructor === Array || collection.constructor === String) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (var key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
};

// Returns a new array with the filtered items
_.filter = function(collection, callback) {
    var r = [];
        for (i = 0; i < collection.length; i++) {
            if (callback(collection[i], i, collection));
        

    return r;
};

// Returns a new array with the unfiltered items
_.reject = function() {
    // Place your solution here 
};

/*************** BONUS ***************/
// Returns n random items
_.sample = function() {
    // Place your solution here 
};


module.exports = _;
