function run(){
    let cont1 = document.querySelector('aside')
    cont1.style.backgroundColor = "yellow";
}
 let  one = document.getElementById("welcome");
 
 let data = window.localStorage.getItem("data");
//  console.log(data)
let converteddata = JSON.parse(data);

one.innerHTML = converteddata.name;


 

