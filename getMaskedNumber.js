export default (number)=>{
  const base3 = 3
  const base5 = 5
  const multipleOf3 = number % base3==0
  const multipleOf5 = number % base5 ==0
  if(multipleOf3 && multipleOf5){
    return 'FizzBuzz'
  }
  if(multipleOf3){
    return 'Fizz'
  }
  if(multipleOf5){
    return 'Buzz'
  }
  return number
}
