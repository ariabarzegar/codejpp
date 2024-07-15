let slectbutoncss=document.querySelector(".button-test-css")
let selectformTestT=document.getElementById("form-test-t")
slectbutoncss.addEventListener("click",()=>{
  selectformTestT.classList.toggle("form-test-t")
  if (slectbutoncss.innerHTML=="حذف کد") {
    slectbutoncss.innerHTML="اجرای کد"
  }else if (slectbutoncss.innerHTML=="اجرای کد") {
    slectbutoncss.innerHTML="حذف کد"
  }
})

let slectbutonjs=document.querySelector(".button-test-js")
let selectformTest=document.getElementById("form-test")
slectbutonjs.addEventListener("click",()=>{

    slectbutoncss.innerHTML="اجرای کد"
   var a= setInterval(function(){
      let r=Math.floor(Math.random()*255)
      let g=Math.floor(Math.random()*255)
      let b=Math.floor(Math.random()*255)
      let res=document.getElementById("form-test")
      res.style.background = `rgb(${r},${g},${b})`
      },500)
})

let slectbutonhtml=document.querySelector(".button-test")
let selectformhtml=document.querySelector(".none")
slectbutonhtml.addEventListener("click",()=>{
  if (slectbutonhtml.innerHTML=="حذف کد") {
    selectformhtml.classList.add("none")
    selectformhtml.classList.remove("non")
    slectbutonhtml.innerHTML="اجرای کد"
  }else if (slectbutonhtml.innerHTML=="اجرای کد") {
    selectformhtml.classList.add("non")
    selectformhtml.classList.remove("none")
    slectbutonhtml.innerHTML="حذف کد"
  }
})