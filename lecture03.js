
var name =prompt("이름을 입력해주세요");
a = ()=>{
    document.write("입력받은 이름 : "+name+"<br>");
    if(name=="d"){
        document.write("실행<br>");
    }else{
        document.write("non<br>")
    }
}
a();

function inputBoxText(){
    document.write("name : "+name+"<br>");
}
inputBoxText();
qwe =()=>{
    var a=3;
    var b=2;
    return document.write(a>b);
}
qwe();
