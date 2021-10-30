function showPrimeNumbers(first,last){
    for(let i=2;i<=last;i++){
        let isPrime = true;
        for(let j=2; j<i;j++){
            if(i%j === 0 || i===1){
                isPrime = false;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumbers(1,465)