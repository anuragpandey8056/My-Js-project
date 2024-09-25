let i = 1;
let rup = 1259
function plus() {
    let one = document.getElementById('main');
    ++i
    one.innerHTML = i;
    let price  = document.getElementById("total")
    price.innerHTML= rup*i;

}

function minus() {
    if(i>0){
        let two = document.getElementById('main');
        two.innerHTML = i-1;
        --i

        let price  = document.getElementById("total")
        price.innerHTML= (rup*i);
    }
    

  

}

function run(){
    let one = document.getElementById('product')
    one.style.display = "none"
    let two = document.getElementById('total')
    two.innerHTML=0;
}