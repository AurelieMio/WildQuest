function even_or_odd(number){
  if (Number.isInteger(number/2)){
    return "Even"
  } else{
    return "Odd"
}}

console.log(even_or_odd(3))