var tab1=document.getElementsByClassName("nav-linka")[0].addEventListener("click",opentab1);
var tab2=document.getElementsByClassName("nav-linkb")[0].addEventListener("click",opentab2);
var tab3=document.getElementsByClassName("nav-linkc")[0].addEventListener("click",opentab3);

function opentab1(){
	document.getElementsByClassName("tab")[0].innerHTML="<h5>I studied in St Joseph High School.</h5> <h5>I feel that till now my school life was the best part of my life.</h5><h5> I had a great opportunity to make lots of friends,explore myself and my hobbies.</h5><h5>As in everyperson's life, it was my least stressed time till now.</h5><h5>I am quite sure that I will grab the opportunity to go back to that time if I get it.</h5>"
}

function opentab2(){
	document.getElementsByClassName("tab")[0].innerHTML="<h5>In my Junior College life I didn't do much other than studies.(No big deal, just PCM, thats all!!)</h5><h5>I guess that is one of the price which people generally have to pay in order to get into their dream college</h5>"
}

function opentab3(){
	document.getElementsByClassName("tab")[0].innerHTML="<h5>I am presently in my college life.</5><h5>I study at Indian Institute of Technology Madras.</h5><h5>Here I am have a nice opportunity to learn new things which I had never thought about before and ofcourse here I have been given a chance to enjoy Hostel Life."
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}