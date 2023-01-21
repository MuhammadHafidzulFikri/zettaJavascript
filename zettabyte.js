const input = [8,7,7,9,5,4,2,9];

function result(input){
    //your code
    input.sort(function(a,b){return b-a});
    var hasil = input[Math.round((input.length - 1)/2)];
    return hasil;

}
console.log(result(input));