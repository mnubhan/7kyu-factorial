const factorial = x =>{
  let total=1
  for(let i=1;i<=x;i++){
     total*=i
  }
  return total
}

const factorial = n => n ? factorial(n - 1) * n : 1;
