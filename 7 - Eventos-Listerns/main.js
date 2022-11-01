
//body onLoad
/*

let body = document.....
body.addEventListener("load", {

})
*/
function mudaCorBody(){          
        if(input1.value.length > 8){
            let body = document.getElementsByTagName("body")[0];
            body.style.backgroundColor = "purple";
        }  
        
}
let input1 = document.getElementById("input1");
input1.addEventListener("keyup", mudaCorBody);