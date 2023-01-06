var btns=document.querySelectorAll(".btn");
var remove=0
Array.from(btns).forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            document.getElementById("screentwo").innerHTML= eval(document.getElementById("screenone").innerHTML)
        }else if(e.target.innerHTML=="AC"){
            document.getElementById("screentwo").innerHTML=""
            document.getElementById("screenone").innerHTML=""
        }else if(e.target.innerHTML=="CE"){
            // document.getElementById("screenone").innerHTML=document.getElementById("screentwo").innerHTML
            // document.getElementById("screentwo").innerHTML=""
            document.getElementById("screenone").innerHTML= remove.replace(remove[remove.length-1],"")
            remove=remove.replace(remove[remove.length-1],"")
        }
        else{

            document.getElementById("screenone").innerHTML += e.target.innerHTML
            remove=document.getElementById("screenone").innerHTML
            console.log(remove)
            console.log(remove.replace(remove[remove.length-1],""))
        }
    })
})
