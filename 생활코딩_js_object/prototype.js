//prototype

/*
function Person(name,first,second,third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}
*/

//위의 생성 함수는 호출 될 때마다 sum이라는 함수가 계속 만들어지고 있다. 매우 비효율적.

//생성자 안에서 메소드가 들어가면 메소드가 바뀔 때마다 new를 통해 만들어진 객체에서 함수를 다시 정의해야 함.
function Person(name,first,second,third){
    this.name=name,
    this.first=first,
    this.second=second
}

//생성자의 함수를 따로 정의 함으로 객체 생성 호출때마다 매번 함수 실행하지 않아도 됨 메모리 절약.
Person.prototype.sum=function(){
    return "prototype : "+(this.first+this.second);
}

//new를 붙이면 객체를 생성하는 생성자가 된다. (생성자 함수)
var kim=new Person('kim',10,20);
//하나의 객체만 다르게 함수 실행
kim.sum=function(){
    return "따로 정의 : "+(this.first+this.second);
}
console.log(kim.sum());

var lee=new Person('lee',10,10);
console.log(lee.sum());

//console.log('new Person()',new Person('noh',10,10,10));

//객체를 만들때마다 정의를 해주는데, 생성자를 통해서는 new를 생성함으로 객체를 바로 만들 수 있다.


