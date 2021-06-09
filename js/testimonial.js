
    var testimonialbtn = document.getElementsByClassName("testimonialbtn");
    var slide = document.getElementById("slide");
        
        testimonialbtn[0].onclick = function(){
            slide.style.transform="translatex(0px)";
            
            for(i=0;i<3;i++){
                testimonialbtn[i].classList.remove("active");
                this.classList.add("active");
            }
                                              }
        testimonialbtn[1].onclick = function(){
            slide.style.transform="translatex(-800px)";
            
            for(i=0;i<3;i++){
                testimonialbtn[i].classList.remove("active");
                this.classList.add("active");
                                              }
        }
        testimonialbtn[2].onclick = function(){
            slide.style.transform="translatex(-1600px)";
            
            for(i=0;i<3;i++){
                testimonialbtn[i].classList.remove("active");
                this.classList.add("active");
                                              }
        }
        
    