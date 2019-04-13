# JS BASIC GRAMMER
## 자바스크립트 기본 문법에 대한 커밋

<ul>
    <li><strong>조건문</strong>(for, while, do while,for in)</li>
    <li><strong>for of</strong> : <br> ex) for a of array -> array안에 있는 각 요소들을 a에 넣어준다.
        
    var s = "try hello world";
    for (let a of check){
        console.log('a) ===> a:try, a:hello, a:world 출력됨
        }
    
   </li>
    <li><strong>this</strong>: <br>this가 속한 메소드를 가진 객체를 가리킨다. 
    
    var kim={
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }} 
    console.log(kim.sum());
   </li>
   <li><strong>constructor(생성자 함수)</strong> : <br>객체에 대한 포맷을 정의하고, 생성자의 호출에 따라 자유롭게 변화한다.(new)
    
    function Person(name,first,second,third){
    this.name=name,
    this.first=first,
    this.second=second,
    this.third=third,
    this.sum=function(){
        return this.first+this.second+this.third;
        }
    }
    var kim=new Person('kim',10,20,30); ===> new를 붙여 객체를 생성!
   </li>
   <li><strong>class(생성자 함수)</strong> : <br>객체에 대한 포맷을 정의하고, 생성자의 호출에 따라 자유롭게 변화한다.(new 정의와 같은 역할)<br>
    function 대신 class를 쓰고 내부 초기 값은 constructor이라는 문법을 사용하여 그 안에 정의한다. 
    
    class Person{
    constructor(name,first,second){
        this.name=name;
        this.first=first;
        this.second=second;
        console.log('constructor');
        }
    }
    var kim=new Person('kim',10,20);
    
   </li>
   <li><strong>prototype</strong> <br>
    쓰는 이유 : 생성자 안에서 메소드(함수)가 들어가면 메소드가 바뀔 때마다 new를 통해 만들어진 객체에서 함수를 다시 정의해야 함.<br>
    효과 : 객체를 정의한 시점이 아닌 함수가 필요한 시점에서 사용하기에 메모리 절약, 생성된 모든 객체가 공통으로 사용가능.<br> 객체마다 커스텀 가능
    
    Person.prototype.sum=function(){
    return "prototype : "+(this.first+this.second); }
    
    하나의 객체만 함수 커스텀
    kim.sum=function(){
    return "따로 정의 : "+(this.first+this.second);}
   </li>
   
   <li><strong>상속</strong> <br>
    쓰는 이유 : class를 다르게 기능을 추가 하지만 내부 요소가 많이 중복되어 다시 정의하는게 메모리 손해를 야기 할 때 <br>
    효과 : 코드 짧아짐, 메모리 절약<br>
    사용법 : class명 뒤에 extends를 붙이고 그 뒤에 상속 받고 싶은 class명을 적는다. 
    
    class PersonPlus extends Person{}
   </li>
    <li>함수</li>
    <li>배열</li>
    <li>method</li>
    <li>scope,showding</li>
    <li>closer</li>
    <li>reduce</li>
    <li>filter</li>
    <li>map</li>
    <li>forEach</li>
    <li>Math</li>
    <li><strong>apply</strong> : <br> fun.apply([thisobj],[argarray])<br>
    fun : 가져다 쓸 메소드, thisobj(선택) : 현재 객체로 사용될 객체. argarray : 함수에 전달 될 "인수" 집합.<br>
        call은 인자 하나하나를 apply는 인자 리스트를 전달. <br> 참조 : https://beomy.tistory.com/4

        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
        
   </li>
    <li>
     <strong>indexOf</strong> : <br> arr.indexOf(a) : a값이 arr 안에 있는지 알고 싶을 때, 있다면 return을 값을 배열의 순번으로 알려준다. 
    </li>
    <li>
     <strong>slice</strong> : 배열 복사 : 
        
        ex) var arr2 = arr.slice();
        
   </li>
    <li>
      <strong>splice</strong> : 배열 중간값 자르기 : 
    
        ex) var arr=[0,1,2]; 
            arr.splice(2,1) => arr=[0,2]
   </li>
   <li>
    <strong>정수화</strong> : 
    
    +num, -num, parseInt, parseFloat => 상황에 맞게 잘 쓸것!
    문자화 : n+""
    reverse() : 가진 문자열 반대로
   </li>
    <li>
    <strong>배열 다루기</strong> <br>
    
    pop() : 배열의 맨 마지막 요소를 제거함
    shift() : 배열의 맨 처음 요소를 제거함
    push() : 배열의 맨 마지막 요소에 추가함
    unshift() : 배열의 처음 요소에 추가함
    reverse() : 배열의 앞뒤를 바꿈
    sort() : 배열의 값들을 조건에 따라 나열
    arr.concat(arr2) : 배열 합치기
    indexof(2) : 2가 있는 배열의 순서
    lastindexof(2) : 2가 있는 뒤부터의 배열의 순서
   </li>
   <li>
    <strong>map</strong> :<br> 함수를 통해 실행한 결과를 가지고 새로운 배열을 만들 때 사용합니다.<br>
       배열로 가져온 값에 대해 새로운 값을 만들어 보낸다. 그렇기 때문에 기존에 있던 배열은 바뀌지 않는다.
    
    array.map(callbackFunction(currentValue,index,array),thisArg)
    ex) string으로 정의 된 배열내의 값들을 int값으로 바꾸고 싶다. 
    var a = n.map(function(a){return parseInt(a);});
    var a = n.map(o=>o=parseInt(o));
   </li>
   <li>
    <strong>정규표현식</strong> : 
    
    \d : 숫자를 모두 출력
    
</ul>
