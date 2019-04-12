//배열
var memberArray=['a','b','c'];
// console.log(memberArray[2]);

//객체 정의

var memberObject={
    name : 'a',
    age:'20',
    house:'c'
}
//객체 수정

memberObject.house="cc";

//객체 삭제

// delete memberObject.house;
// console.log(memberObject['house'])
// console.log(memberObject.house);

//배열을 반복문 
console.group('array loop');
var i=0;
while(i<memberArray.length){
    console.log(i,memberArray[i]);
    i++;
}
console.groupEnd('array loop');

//for in 문법 
console.group('object loop');
for(var a in memberObject){
    console.log(a,memberObject[a]);
}
console.groupEnd('object loop');