window.onload = function(){
    let arrasar = false;
    const container = document.querySelectorAll(".container");
    container.forEach(function(element){
        element.addEventListener("mousedown",(event)=>{
            arrasar = true;
            var distancia = event.clientX - element.getBoundingClientRect().left;
            let imgTop = element.lastElementChild;
            imgTop.style.width = distancia + "px";
        })
        element.addEventListener("mousemove",(event)=>{
            if(arrasar){
                element.style.cursor = "col-resize";
                var distancia = event.clientX - element.getBoundingClientRect().left;
                let imgTop = element.lastElementChild;
                imgTop.style.width = distancia + "px";
            }
        })
        element.addEventListener("mouseup",(event)=>{
            arrasar = false;
            element.style.cursor = "default";
            var distancia = event.clientX - element.getBoundingClientRect().left;
            let imgTop = element.lastElementChild;
            imgTop.style.width = distancia + "px";            
        })
        element.addEventListener("click",(event)=>{
            arrasar = false;
            var distancia = event.clientX - element.getBoundingClientRect().left;
            let imgTop = element.lastElementChild;
            imgTop.style.width = distancia + "px";        
        })
    }) 
}