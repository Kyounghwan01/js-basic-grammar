//함수와 환경으로 구성
//클로저에 의해 count가 가리키는 값이 달라진다. 
//다른 변수에 의해 호출된 함수의 카운트 변수가 하나의 다른 환경으로 구성된다

function countfuction(count){
    function increse(){
       count++
        console.log(count);
    }
    return increse;
}

var a=countfuction(10);
var b=countfuction(1);
a();
b();