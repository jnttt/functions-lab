function minusOne (num){
    if (typeof Number(num)){
        console.log(num - 1);
    }
    
}

minusOne(11);

function getLastElement(arr) {
    console.log(arr[arr.length - 1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement(['a', 'b', 'c']);          // 'c'
getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]
