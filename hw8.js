//problem 1
var paragraph= document.getElementById("p1"); 
function changeText(){
  paragraph.innerHTML= "I'm right!";
}
function changeText2(){
  paragraph.innerHTML= "No, I'm right!";
}
//problem 2
function mouseover(){
  document.getElementById("p2").innerHTML= "Hey! I said don't hover over me!";
}
function mouseout(){
  document.getElementById("p2").innerHTML= "Don't hover over me.";
}
//problem 3
var k= document.getElementById("h");
window.addEventListener("keypress", function(event){
 k.innerHTML= event.key;
});
//problem 4
var u= document.getElementById("username");
var p= document.getElementById("password");
var button= document.getElementById("s1");
button.addEventListener("click", function(){
  if(u.value.length < 14 && p.value == "12345678")
  {
    k.innerHTML= "Congrats on knowing you username and password!";
  }
  else{
    k.innerHTML= "Wrong username or password!";
  }
});
