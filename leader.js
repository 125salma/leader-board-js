document.getElementById('title-color').style.color = 'rgba(255, 99, 71, 0.8)';
document.getElementById('top-color').style.color = 'rgba(255, 99, 71, 0.8)';

document.getElementById('top-backg').style.backgroundColor = 'rgb(215, 233, 237)';

//li create and add
var listItem =0;
function addListing(){

if(listItem>=3){
  listItem=0;
}
 if(listItem==0){
  var list= 'Top Player';

 }
 if(listItem==1){
  var list ='Top Blogs';
 }
 if(listItem==2){
  var list ='Latest Courses';
 }
 listItem++;
 var newNode = document.createElement('li');
 var textNode = document.createTextNode(list);
 newNode.appendChild(textNode);
 const ul =document.getElementById('item-container');
 ul.appendChild(newNode);
}
function removeList(){
  var removeListed=document.getElementById('item-container');
  removeListed.removeChild(removeListed.childNodes[0]);
}

//incresing number input field
let num=0;
function submitButton(){
let input = document.getElementById('input-field');
if(input.value<5){
  input.value=++num;
}
  if (num==5) {
    
    document.getElementById('disable-Button').disabled = true;
  }
}
//
document.getElementById('perform').style.backgroundColor='tomato'
  




