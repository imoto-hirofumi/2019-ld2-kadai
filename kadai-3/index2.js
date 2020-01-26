for(let i =1; i<=100; i++){
    if(i%3===0 && i.toString(10).indexOf("3") >= 0){
        console.log("3の倍数、かつ３のつく数字です　－＞" + i);
    }else if(i%3===0){
        console.log("3の倍数です　ー＞" + i);
    }else if(i.toString(10).indexOf("3") >= 0){
        console.log("3のつく数字です　ー＞" + i);
    }else{
        console.log("それ以外です　ー＞"　+ i);
    }
}

