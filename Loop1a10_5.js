
for(let i = 1; i <= 10; i++){

    if(i == 10){
        process.stdout.write(i.toString())    
    }else{
        process.stdout.write(`${i.toString()}-`)
    }
}
