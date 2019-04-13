var kim={
    name:"kim",
    first:10,
    second:20,
    sum:function(){
        return this.first+this.second;
    }
}

var noh={
    name:'noh',
    first:10,second:20
}
noh.__proto__=kim;
console.log(noh.sum());

var lee=Object.create(kim);
lee.name="lee";
lee.first=20;
lee.second=30;
lee.ave=function(){
    return this.sum()/2
}

console.log(kim.sum())
console.log(lee.ave())