# JS BASIC GRAMMER
## 자바스크립트 기본 문법에 대한 커밋

<ul>
    <li><strong>조건문</strong>(for, while, do while)</li>
    <li><strong>for of</strong> : <br> ex) for a of array -> array안에 있는 각 요소들을 a에 넣어준다.
        
    var s = "try hello world";
    for (let a of check){
        console.log('a) ===> a:try, a:hello, a:world 출력됨
        }
    
   </li>
   <li><strong>for in</strong>: <br> 객체 내부 요소를 파악하기 위한 for in 구문
    
    var a={ age:30 ma:"femal"}
    
    for(var a_property in a){
    console.log(a_property+":"+a[a_property]);
    }
    
    //age:30
      ma:femal
   </li>
   <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><strong>forEach</strong></a>: <br> 배열 전체를 돌며 해당 배열의 요소에 작업 수행할 때
    
    var a=[1,2,3];
    a.forEach((n,i,a)=>a[i]=n+1); ==>a=[2,3,4]
    for문 대신 사용 가능 

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
    
   <li><strong>constructor(생성자 함수)</strong> : <br>객체에 대한 포맷을 정의하고, 생성자의 호출에 따라 자유롭게 변화한다.(new)<br>
    객체를 생성하면 본 객체와, prototype 객체가 생성되는데, 객체 이름.constructor를 통해 객체의 출처를 추적할 수 있다. 
    
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
   
   <li><strong>super</strong> <br>
    쓰는 이유 : 상속을 받지만 부모 클래스의 메소드 또는 인자를 더하거나 빼고 싶을 때 사용<br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp super가 없다면 부모클래스의 인자를 다시 적어야함 즉, 상속의 의미가 없어짐  <br>
    효과 :  중복 제거<br>
    사용법 : 부모클래스의 인자값을 가져올 경우 super(name,first,second)<br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 부모클래스 일체를 가져오면 super.sum();
    
    class PersonPlus extends Person {
        constructor(name, first, second, third) {
            super(name, first, second);
            this.third = third;
            }
        sum() {
            return super.sum()+this.third;
        }
    }
   </li>
   <li><strong>객체 생성 후 상속 원리</strong> <br>
    Person 객체 생성시, 본 객체와 prototype 객체 2개가 생성 됨.<br>
    Person 본 객체는 prototype을 통해 prototype 객체에 접근하고, prototype 객체는 constructor를 통해 본 객체로 접근 함.<br>
    new를 통해 새로 생성된 객체는 __proto__를 통해 prototype 객체로 접근하며 그 안에 생성된 함수 사용하게 됨.<br>
    모든 객체들은 __proto__를 가지고 다른 객체에 접근 가능 함    
     
    다른 객체 접근 예시 코드  
    PersonPlus.prototype.__proto__=Person.prototype;
    또는 
    PersonPlus.prototype=Object.create(Person.prototype);
    PersonPlus.prototype.constructor=PersonPlus;
    를 통해 PersonPlus는 Person의 prototype의 함수를 사용함.
<img src="https://user-images.githubusercontent.com/44187477/56094459-9b876280-5f0f-11e9-9a31-f1f3f5f530ba.png" width="40%" />
<img src="https://user-images.githubusercontent.com/44187477/56094460-9b876280-5f0f-11e9-9537-9ed310d90bd7.png" width="40%" />
    

   </li>
    <li><strong>__proto__ , Object.create()</strong> <br>
    효과 : 객체가 객체를 상속한다.<br>
    사용법 : __proto__ : 받을객체이름.__proto__=상속객체;<br>
    Object.create() : 받을객체이름=Object.create(상속객체);
    
    var kim={ name:"kim",first:10,second:20, 
        sum:function(){
        return this.first+this.second;}}

    var noh={name:'noh',first:10,second:20}
    
    noh.__proto__=kim;

    var lee=Object.create(kim);
    lee.name="lee";
    lee.first=20;
    lee.second=30;
    lee.ave=function(){ return this.sum()/2 }

   </li>
   <li><strong>call</strong> <br>
    효과 : 상속 없이 하나의 함수를 정의하고 여러개의 객체에서 가져다 쓸 수 있다.<br>
    사용법 : 함수명.call(객체이름,인자);
    
    var kim={name:"kim",first:10,second:20}
    var lee={name:"lee",first:10,second:10}

    function sum(prefix){
        return prefix+(this.first+this.second);
    }
    console.log(sum.call(kim,'=>'));
   </li>   
   <li><strong>bind</strong> <br>
    효과 : call은 하나의 함수를 여러 객체에서 호출하나, bind는 하나의 함수에 대해 이 객체만 호출하겠다 지정함. <br>
    &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp 그러나 그 함수는 귀속되지 않고 존재<br>
    사용법 : 함수.bind(객체,인자);
    
    var kimsum=sum.bind(kim,"->");
    console.log(kimsum());
   </li>   
   <li>
     <strong>sort()</strong> : 
    
    숫자정렬
    A.sort((p,c)=>p-c); ==> 오름차순 (음의 값이 되려면 c가 더 커야하므로 p<c인 값 오름차순이 됨)
    A.sort((p,c)=>-p+c); ==> 내림차순 (음의 값을 만드는 방향으로 움직인다.)
    object 정렬
    exp.sort((a,b)=>a.name<b.name ? -1 : a.name>b.name?1:0); ==> (음이 참인 경우이니 b가 더 큰 값이 와야 함)    
    
   </li>
    <li>함수</li>
    <li>배열</li>
    <li>method</li>
    <li>scope,showding</li>
    <li>closer</li>
    <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"><strong>reduce</strong></a></li>
    <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"><strong>filter()</strong></a> : 
    
    var arr = [15, 377, 395, 400, 1024, 3000]; 
    var arr2 = arr.filter((n)=>n%5==0) ==> 5의 배수 걸러내는 함수 
   </li>
    <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map"><strong>map()</strong></a> : 

   </li>
    <li>forEach</li>
    <li>Math</li>
    <li><strong>apply</strong> : <br> fun.apply([thisobj],[argarray])<br>
    fun : 가져다 쓸 메소드, thisobj(선택) : 현재 객체로 사용될 객체. argarray : 함수에 전달 될 "인수" 집합.<br>
        call은 인자 하나하나를 apply는 인자 리스트를 전달. <br> 참조 : https://beomy.tistory.com/4

        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
        
   </li>
    <li>
     <strong>indexOf</strong> : 
    
    arr.indexOf(a) : a값이 arr 안에 있는지 알고 싶을 때, 있다면 return을 값을 배열의 순번으로 알려준다. 
    
   </li>
    <li>
     <strong>charAt()</strong> : 
    
    arr[0].charAt(2) : arr의 0번 배열의 요소의 2번 위치의 string 값을 return 해준다.
    
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
    
    \d : 숫자를 모두 출력 (1글자씩 출력 : 02-123-456 => ['0','2','1' ...]
    \d+ : 연결된 숫자를 연결하여 출력 (02-123-456 => ['02','123','456']
    * : 0개 이상 => \d* : 숫자가 0개 이상이다. => 자연수 : [1-9]\d* (자연수 출력)
    \D : 숫자를 제외한 문자
    \s : 공백 문자
    \S : 공백 문자를 제외한 문자
    \w : _를 포함한 a,b,c,가,나,1,2같은 문자,숫자를 포함. 특수문자 x(1글자씩 출력)
    \W(대문자) : 글자 대표 문자를 제외한 글자들(특수문자, 공백 등)
    ? : 있거나 없거나 => -? : -가 있거나 없다 :\d+-?\d+-?\d+ => 000-000-000 or 000 000 000 
    {숫자} : 숫자번 반복한다 => \d{2} : 숫자가 연속 두 번 나온다. => \d{2} : ['02','12']
    {2,3} : 2개에서 3개 사이의 숫자가 나온다
    [a-z]+ : []안에 찾고자 하는 문자를 입력하면 대상에 대해 한줄로 서치됨, +를 붙이면 소문자를 연결하여 출력 
    [가-힣] : 한국어로 a-z와 동일 단, ㄱㄴㄷㅏㅑㅓㅕ 서칭 불가
    
   </li>
    <li>
    <strong>Ajax</strong> : <br>
    쓰는 이유 : 한페이지에서 일부 정보만 바뀔 경우 이전의 경우 전체 페이지를 재렌더링 해야하함.<br> 
    그러나 ajax는 필요한 정보만 다시 불러오는 효과를 가진다.<br>
    목적 : 이를 통해 single page application을 만드는 것을 목적으로 한다.<br>
    제한사항 : ajax를 쓸 경우 웹서버와 통신을 해야만 실행 가능 하다. <br>
          

   </li>
</ul>
