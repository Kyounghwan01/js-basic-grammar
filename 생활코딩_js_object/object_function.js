//call 

var kim={name:"kim",first:10,second:20}
var lee={name:"lee",first:10,second:10}

function sum(prefix){
    return prefix+(this.first+this.second);
}
console.log(sum.call(kim,'=>'));

//bind : 내부적으로 사용할 인자를 고정시킨다.

var kimsum=sum.bind(kim,"->");
console.log(kimsum());
