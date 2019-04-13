//Math 객체
console.log("Math.PI",Math.PI);
console.log("Math.random()",Math.random()); //객체에 소속된 함수 : 메소드 
console.log("Math.floor(3,9)",Math.floor(3,9));

//객체 만들기
//그룹핑하여 관리하기 쉽도록 한다. 
var MyMath={
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val);
    }
}
console.log("Math.PI",MyMath.PI);




//constructor (new Person())
//양산 : 이름은 다른 같은 유형의 객체에서 유형이 바뀔 경우 이름이 다른 객체 모두가 바뀜

//this
//this가 속한 메소드를 가진 객체를 가리킨다. 
function Person(name,first,second,third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}

//new를 붙이면 객체를 생성하는 생성자가 된다. (생성자 함수)
var kim=new Person('kim',10,20,30);
console.log(kim.sum());

var lee=new Person('lee',10,10,10);
console.log(lee.sum());

console.log('new Person()',new Person('noh',10,10,10));

//객체를 만들때마다 정의를 해주는데, 생성자를 통해서는 new를 생성함으로 객체를 바로 만들 수 있다.