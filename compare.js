//comparing two object in javascript


var obj1 ={
    x:10,
    y:8
}

var obj2 = {
    x:10,
    y:8
}
console.log(obj1.y == obj2.y);
console.log(obj1 == obj2);

if(obj1.x == obj2.x && obj1.y == obj2.y){
    console.log(true);
}

console.log(obj1)
console.log(JSON.stringify(obj1)=== JSON.stringify(obj2))