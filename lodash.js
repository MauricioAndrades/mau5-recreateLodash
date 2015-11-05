var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

// Returns the first element of an array
_.first = function(arr) {
    // Place your solution here
    return arr[0];
};

// Returns the first n number of elements in an array.
// take(array, int) should return int elements from the beginning of the array
_.take = function(arr, n) {
    if (n === undefined) {
        n = 1;
    }
    return arr.slice(0, n);
};

// Returns the last element of an array
_.last = function(arr) {
    return arr.pop();
    // Place your solution here
};

// Returns the last n number of elements in an array.
_.takeRight = function(arr, n) {
    if (n === undefined) {
        n = 1;
    }
    return arr.slice(-n);

};

// Creates a new array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (!arr[i])
            arr.splice(i, 1);
    }
    return arr;

    // Place your solution here	
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
    for (i = 0; i < arr.length; i++) {
        if (r.indexOf(arr[i]) === -1) {
            r.push(arr[i]);
        }
    }
    return r;
};

// Returns maximum value in an array
_.max = function(arr) {
    return Math.max.apply(null, arr)
};

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
}

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

/**************************************
 ************* COLLECTIONS *************
 **************************************/
// Returns the length of the collection
_.size = function() {
    // Place your solution here	
};

// Iterates on each item of the collection and then returns the original collection
_.forEach = function(collection, callback) {
    // Place your solution here
    if (collection.constructor === Array || collection.constructor === String) {
        for (var i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else z {
        for (var key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
};

// Returns a new array with the filtered items
_.filter = function() {
    // Place your solution here	
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