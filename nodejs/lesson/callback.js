function writeName(name,callback){
    console.log(name);
    callback();
}

writeName("nanay",function(){
    console.log(" Hoşgeldiniz.");
});