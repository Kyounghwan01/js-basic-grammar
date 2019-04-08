




/*
js는 고차함수(다른 함수를 소비 또는 생성하는 함수)가 존재(filter,reduce,map)

reduce

reduce의 매개변수는 callbackFunction,initialValue이다
initialValue : callbackFunction을 호출할 때 첫 perviousValue 값을 사용될 값입니다. 선택적으로 사용 가능. 
initialValue이 있을 경우 이 값이 callbackFunction의 첫 번째 perviousValue값이 되고
currentValue가 배열의 첫번째 인자가 된다(없을 경우 첫 번째 perviousValue에는 배열의 첫번째 값.)

callbackFunction은 4개의 매개변수를 선택적으로 받을 수 있다.
perviousValue : 배열의 첫번째 인자, 혹은 initialValue가 있을 경우 initialValue.
currentValue : 배열 내 현재 처리되고 있는 값.
currentIndex : 배열 내 현재 처리되고 있는 값의 인덱스.
array1 : 현재 호출된 배열

배열의 length-1번 반복된다.

indexOf() : 배열의 원소 중에 특정한 값을 찾는다. 찾으면 해당 인덱스를 반환, 없으면 -1를 반환
*/

function test(){
    var array=[1,2,2,2,3,4,4,4,4,1,1,1,5,5,5,4,3,3,2,2,2,2,2,1,1,1,1];
    var sum=array.reduce(function(perviousValue,currentValue,currentIndex,array1){
        // console.log("perviousValue "+perviousValue);
        // console.log("currentValue "+currentValue);
        // console.log("currentIndex "+currentIndex);
        // console.log("array1 "+array1);
        // if(perviousValue.indexOf())
        return perviousValue+currentValue;
    });
    console.log("sum : "+sum)
}
test();

// 중복제거 예시


var array=[1,2,2,2,3,4,4,4,4,1,1,1,5,5,5,4,3,3,2,2,2,2,2,1,1,1,1];
var uniq = array.reduce(function(a,b){
    if(a.indexOf(b)<0) a.push(b);
    return a;
},[]);
console.log(uniq); 


