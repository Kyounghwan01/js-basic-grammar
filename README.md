# JS BASIC GRAMMER
## 자바스크립트 기본 문법에 대한 커밋

<ul>
    <li>조건문(for, while, do while,for in)</li>
    <li>for of : ex) for a of array -> array안에 있는 각 요소들을 a에 넣어준다.
        
    var s = "try hello world";
    for (let a of check){
        console.log('a) ===> a:try, a:hello, a:world 출력됨
        }
    
   </li>
    <li>함수</li>
    <li>배열</li>
    <li>method,this</li>
    <li>scope,showding</li>
    <li>closer</li>
    <li>reduce</li>
    <li>filter</li>
    <li>map</li>
    <li>forEach</li>
    <li>Math</li>
    <li>apply : fun.apply([thisobj],[argarray])<br>
    fun : 가져다 쓸 메소드, thisobj(선택) : 현재 객체로 사용될 객체. argarray : 함수에 전달 될 "인수" 집합.<br>
        call은 인자 하나하나를 apply는 인자 리스트를 전달. <br> 참조 : https://beomy.tistory.com/4

        arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
        
   </li>
    <li>
     indexOf :  arr.indexOf(a) : a값이 arr 안에 있는지 알고 싶을 때, 있다면 return을 값을 배열의 순번으로 알려준다. 
    </li>
    <li>
     slice : 배열 복사 : 
        
        ex) var arr2 = arr.slice();
        
   </li>
    <li>
      splice : 배열 중간값 자르기 : 
    
        ex) var arr=[0,1,2]; 
            arr.splice(2,1) => arr=[0,2]
   </li>
   <li>
    정수화 : 
    
    +num, -num, parseInt, parseFloat => 상황에 맞게 잘 쓸것!
    문자화 : n+""
    reverse() : 가진 문자열 반대로
   </li>
    <li>
    배열 다루기 <br>
    
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
    map : 함수를 통해 실행한 결과를 가지고 새로운 배열을 만들 때 사용합니다.<br>
       배열로 가져온 값에 대해 새로운 값을 만들어 보낸다. 그렇기 때문에 기존에 있던 배열은 바뀌지 않는다.
    
    array.map(callbackFunction(currentValue,index,array),thisArg)
    ex) string으로 정의 된 배열내의 값들을 int값으로 바꾸고 싶다. 
    var a = n.map(function(a){return parseInt(a);});
    var a = n.map(o=>o=parseInt(o));
    

   </li>
</ul>
