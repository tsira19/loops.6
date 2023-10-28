var numbers =  [12, 67, 34, 122, 10, -90, -12, -100, -546, 3452, -1, -2];
one_array = [];
two_array=[];

for(let i=0;i<numbers.length; i++){
    if(numbers[i]<0) {
        one_array.push(numbers[i]);
    }
    if(numbers[i]>0){
        two_array.push(numbers[i]);
    }
}
document.write(one_array + "<br>");
document.write(two_array);