let isCoder = true; 

function alternate() {
  const element = document.querySelector(".change");
  if (isCoder) {
    element.value = "I am a Coder";
  } else {
    element.textContent = "I am a Developer";
  }
  isCoder = !isCoder; // Toggle the state

  setTimeout(alternate, 3000); // Schedule the next change after 5 seconds
}
alternate();
document.querySelector(".sbm.btn.btn-primary").addEventListener("click",()=>{
    // let fn=document.querySelector(".fname").value;
    // let ln=document.querySelector(".lname").value;
    // console.log(fn);
    document.querySelector(".fname").value="";
    document.querySelector(".lname").value="";
    document.querySelector(".email").value="";
    document.querySelector(".pass").value="";
    document.querySelector(".write").value="";
    // document.querySelector(".main").style.background="White";
    // document.querySelector(".thanks").innerHTML=`Thanks for contacting ${fn}`;
})
