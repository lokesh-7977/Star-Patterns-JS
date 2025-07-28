let n = 6  // n might be anything

for(let i =0; i<n ; i++){
    let row = " ";
    for(let j=1;j<=n-i;j++){
        row = row + " " + j
    }
    console.log(row)
}

//Output will be:

//   1 2 3 4 5 6
//   1 2 3 4 5
//   1 2 3 4
//   1 2 3
//   1 2
//   1
