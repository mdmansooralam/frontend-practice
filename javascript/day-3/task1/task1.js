const num1 = prompt('Enter a number : ')
const num2 = prompt('Enter a number : ')

    for(let i = num1; i <= num2; i++){
        if(i%4 == 0 && i%6 == 0){
            console.log('QuadHex')
        }else if(i%4 == 0){
            console.log('Quad')
        }else if(i%6 == 0){
            console.log('Hex')
        }else{
            console.log(i)
        }
    }

