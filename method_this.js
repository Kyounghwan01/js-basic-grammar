//함수도 객체의 속성이 될 수 있다. 
// 객체의 속성이 된 함수를 메소드라고 부름

function f(){
    console.log(this);
    console.log('f is called');
}
function setName(name){
    this.name=name;
}

var o={name : 'object',method:f,setName:setName};
var o2={name:"",setName:setName}
o.setName("object1");
o2.setName("object2");
console.log(o,o2);
//this : 함수 f가 불렸을 때 어떤 객체의 파일들의 속성으로 불렀는지 알림,누가불렀는지 누구를 알린다;.
//메소드 부르는 방법 : 객체 안에서 함수를 부를 객체를 만들고 그 객체이름으로 함수를 만들어 호출


