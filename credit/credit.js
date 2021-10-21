function credit(N) {
  let arr = Array.from(String(N));
  let seconds = [], rests = [];
  for(let i = arr.length-2; i>=0; i= i-2) {
		let second = arr[i];
    second = second * 2;
    (second > 10)?
      seconds.push(Number(String(second)[0]), 		Number(String(second)[1])):seconds.push(second);
  }
  let secondSum = seconds.reduce((a,b) => a+b);
  for(let j = arr.length-1; j>=0; j = j-2) {
    let rest = arr[j];
    rests.push(Number(rest));
  }
  let restSum = rests.reduce((a, b)=> a+b);
  if((restSum + secondSum)%10 === 0) {
    if(/^4/.test(N))
      return "VISA";
    if(/^3[4|7]/.test(N))
      return "MASTERCARD";
    else return "AMAX";
  } else return "Invalid";
}

credit(4003600000000014);

