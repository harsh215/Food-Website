function moreText(num){
    console.log("hello")
    var card=document.getElementById("card"+num)
    var x=document.querySelector(".readMore"+num)
    card.classList.toggle("show");
    if (x.innerHTML === "Read more") {
        card.style.height="auto";
        x.innerHTML = "Read Less";
      } else {
        card.style.height="500px"; 
        x.innerHTML = "Read more";
      }
}
function hamclick(){
  var navBar=document.getElementById("navbar");
  var ul=document.getElementById("navUl");
  if(navBar.classList.contains(".trans")){
    navbar.classList.remove(".trans");
    ul.style.transform="translateY(-120%)";
  }
  else{
    navbar.classList.add(".trans");
    ul.style.transform="translateY(-15%)";
  }
}