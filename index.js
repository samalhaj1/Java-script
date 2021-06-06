
function lovelybird(){
   alert ( 'it is a piece of cake, go a head') // 

    var bird = prompt ( 'how many pictures of American bird do you  want to see' ) //

  for (var i=0 ; i<bird; i++) {
    document.write("<img style = 'display : block;' src='https://www.allaboutbirds.org/guide/assets/photo/60412921-1280px.jpg' width = '150px'; hight = '150px';>") }
    }

alert("I am glad that you are here welcome") // to give a message to the user
var x=prompt("which kind of birds do you prefer?")// the user give a value to get in the page
var state=0;
if(x == 'amirican') { // if for the correct answer
  alert("you are welcome to my website")
  }//message to the user
else{                 //the wrong answer
  alert("go and search in another website")
  state=1
  }//message to the user

  while(x=="" || x==null){
  x=prompt("please enter the type of the bird")  
  }
if(state==0){// 
var userInput = prompt("How many tybes of birds do we have?") 
}// message to the user to put value
var attempts=0
state==0;
while(userInput !=7) //loop to the user to put 7 
 {  

   userInput = prompt ( 'your answer is wrong' )
   attempts++;
   if(attempts==2 && userInput!=7){
   alert("you dont have any attempts! ")
    state=1;
   break;
    } 
 }//the value was any thing but 7

            lovelybird();

