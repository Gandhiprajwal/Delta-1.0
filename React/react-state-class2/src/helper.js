function getTicket(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr){
    return arr.reduce((sum,val)=> sum+val,0)
}

export {getTicket,sum};

// let generateLottery = () => {
  //   let sum = 0;
  //   setNumber((prevVal) => {
  //     return Math.floor(Math.random() * 1000) + 1;
  //   });
  //   sum = 0;
  //   while (number) {
  //     sum += number % 10;
  //     number = Math.floor(number / 10);
  //   }
  //   if (sum == 15) {
  //     setWon(() => {

  //       return true;
  //     });
  //   } else {
  //     setWon(() => {
  //       return false;
  //     });
  //   }
  // };