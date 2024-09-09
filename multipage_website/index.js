function loader(){
    setTimeout(show,1000)
    function show(){
        let website = document.querySelector('#website')
        website.style.display ="block";
        let logo = document.querySelector('#imageloader')
        logo.style.display = "none";

    }
}