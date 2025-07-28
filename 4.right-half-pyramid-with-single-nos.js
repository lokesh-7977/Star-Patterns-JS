let n = 6  // n might be anything

for(let i =0; i< n ; i++){
    let row = " ";
    for(let j=1;j<i+1;j++){
        row = row + " " +i
    }
    console.log(row)
}

//Output will be:

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
//  6 6 6 6 6 6
