let n = 6   // n might be anything

for(let i =0; i<n ; i++){
    let row = " ";
    let change = 0;
    for(let j=0;j<i+1;j++){
        row = row + change
        if(change===1){
            change =0
        }
        else {
            change =1
        }
    }
   
    console.log(row)
}

//Output will be:

//   0
//   0 1
//   0 1 0
//   0 1 0 1
//   0 1 0 1 0
//   0 1 0 1 0 1