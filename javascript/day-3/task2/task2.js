function getPrime(num){
    for(let i = 2; i<= num /2; i++){
        if(num % i == 0){
            return false
        }
    }
    return num
}


function sumOfPrime(num1, num2){
    let sum = 0
    for(let i = num1; i <= num2; i++){
        if(getPrime(i)){
            sum  += i
        }
    }
    return sum
}

const num1  = prompt('Enter a Number :')
const num2  = prompt('Enter a Number :')


console.log(sumOfPrime(num1, num2))
