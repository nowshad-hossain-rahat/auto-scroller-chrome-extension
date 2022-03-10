window.addEventListener("load", (evt) => {

    let bodyScrollHeight = document.body.scrollHeight;
    let reachedBottom = false;
    let gap = document.body.scrollHeight - window.scrollY;

    setInterval(() => {

        if(gap == (document.body.scrollHeight - window.scrollY)){
            
            reachedBottom = (window.scrollY < 11) ? false:true;

        }

        if(reachedBottom == false){

            window.scrollTo(0, window.scrollY + 10);

        }else{

            window.scrollTo(0, window.scrollY - 10);

        }

        gap = document.body.scrollHeight - window.scrollY;

    }, 50);

});