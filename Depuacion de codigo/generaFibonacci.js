function generraFibonacci(num){
const Fibonacci = [0,1];
for(let i = 2;i <= num;i++){
    Fibonacci[i]= Fibonacci[i-1] + Fibonacci[i-2]
}
return Fibonacci
}

num = 15

resuelto = generraFibonacci(num);
