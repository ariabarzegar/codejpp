setInterval(function(){
  let r=Math.floor(Math.random()*255)
  let g=Math.floor(Math.random()*255)
  let b=Math.floor(Math.random()*255)
  let res=document.getElementById("form-test")
  res.style.background = `rgb(${r},${g},${b})`
  },4000)