

var dom = document.querySelectorAll("button");
for(var i = 0; i<dom.length; i++){
  dom[i].addEventListener("click",function (evt){
    var text1 =  this.innerHTML;
    makeSound(text1);
    buttonAnimation(text1);
  }
  );
}

function playins(inst){
  var aud = new Audio("sounds/"+inst+".mp3");
  aud.play();
}

function makeSound(text1){
  if(text1 === "w"){
    playins("tom-1");
  }else if(text1 === "a"){
    playins("tom-2");
  }else if(text1 === "s"){
    playins("tom-3");
  }else if(text1 === "d"){
    playins("tom-4");
  }else if(text1 === "j"){
    playins("kick-bass");
  }else if(text1 === "k"){
    playins("snare");
  }else if(text1 === "l"){
    playins("crash");
  }
}

document.addEventListener("keydown", function(evt){
  var text1 =  evt.key;
  console.log("pressed key", text1);
  makeSound(text1);
  buttonAnimation(text1);
});


function buttonAnimation(currentKey){
  var activ = document.querySelector("."+currentKey);
  activ.classList.add("pressed");
  setTimeout(function(){
    activ.classList.remove("pressed");
  },100);
}
