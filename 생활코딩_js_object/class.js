//class에서 객체를 만드는 방법

//객체의 초기상태를 지정하는 것은 constructor()

//class안에서 메소드를 정의 할 때는 prototype 쓴다.

class Person{
    constructor(name,first,second){
        this.name=name;
        this.first=first;
        this.second=second;
        console.log('constructor');
    }
}


var kim=new Person('kim',10,20);
console.log('kim',kim)
