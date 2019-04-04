var obj={
    name:"object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    dw:{property:1}
};
var a={
 age:30,
 ma:"femal"
}

// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);
// for(var i=0;i<Object.keys(obj).length;i++){
//     var a=Object.keys(obj)[i];
//     console.log(a,"+",obj[a]);
// }

//속성의 내부 요소를 파악하기위한 for in 구문
for(var a_property in a){
    console.log(a_property+":"+a[a_property]);
}

// for(var propertywdwd in obj){
//     console.log(propertywdwd,": ",obj[propertywdwd]) ;   
// }
