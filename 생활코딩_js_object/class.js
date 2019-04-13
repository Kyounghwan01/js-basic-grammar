//class에서 객체를 만드는 방법

//객체의 초기상태를 지정하는 것은 constructor()

//class안에서 메소드를 정의 할 때는 prototype 쓴다.

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum() {
    return super.sum()+this.third;
  }
}
Person.prototype.sum = function() {
  return this.first + this.second;
};
Person.prototype.avg = function() {
  return this.sum() / 2;
};

var kim = new PersonPlus("kim", 10, 20,30);
console.log(kim.sum());

//상속을 함으로 부모 자식간의 관계에 따른 부작용,
//부모의 클래스를 받으면 그 인자를 그대로 써야함, 그러나 자식 클래스에서 인자를 더하거나 빼고 싶다. 그때 super를 쓴다.
//super사용 : 부모와 중복이 되는 인자을 super(name,first,second);로 정의
//super.sum();:부모클래스 자체 
//super():부모클래스의 생성자 일부
