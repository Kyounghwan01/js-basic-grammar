
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



for(count;count<3;count++){
    var nam = parseInt(prompt("뭐먹을래요?"));
  switch (nam) {
    case 1:
      document.write("홍차");
      break;
    case 2:
      document.write("아메");
      break;
    default:
      document.write("없다");
  }
}
document.write("bye");

// var cost = [ 85, 42, 37, 10, 22, 8, 15 ];
// var total_cost = 0;
// // 여기에 코드를 작성하세요.
// for(var i=0; i<cost.length; i++){
//     total_cost=total_cost+cost[i];
// }
// console.log(total_cost);



// for(var i=0;i<11;i++){
//     if(i%2==0){
//         continue;
//     }
//     document.write(i+"<br>");
//     continue;
// }

// var arr=[1,2,3,4,5,6,7,8,9,10];
// var i=0;
// var j=0;

// while(i <arr.length){
//     document.write(arr[i]+"<br>");

//     i++
// }

// for(i=2;i<10;i++){
//     for(var j=1;j<10;j++){
//     document.write(i*j);
//     }
//     document.write("<br>");
// }

// do{
//     var ans= parseInt(prompt("1+1=?"))
// }while(ans!=2)
//     document.write("정답이 아닙니다. 다시 푸세요");