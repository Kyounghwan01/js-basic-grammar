//선언된 변수가 어느 위치에서 유효한가
a=()=>{
    var v_a="a";
    
    b=()=>{
        var v_b="b";
        console.log("b : ",typeof(v),typeof(v_a),typeof(v_b));
    }
    b();
    console.log("a : ",typeof(v),typeof(v_a),typeof(v_b));
    
}
var v="v";
a();

// 변수의 scpoes는 functio의 scope를 따른다.
// 객체가 선언되면 선언된 함수안에서만 접근이 가능하다.

console.log("o : ",typeof(v),typeof(v_a),typeof(v_b));