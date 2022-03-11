window.addEventListener("load", (evt) => {

    let documentElementScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    let increaseBy = 10;
    let reached = 'top';

    // setting initial reached value
    if(window.scrollY <= documentElementScrollHeight || window.scrollY > (documentElementScrollHeight - (increaseBy + 1))){
        reached = 'bottom';
    }else if(window.scrollY <= 0 || window.scrollY  < (increaseBy + 1)){
        reached = 'top';
    }

    setInterval(() => {

        if(window.scrollY < documentElementScrollHeight && window.scrollY > (documentElementScrollHeight - (increaseBy + 1))){
            reached = 'bottom';
        }else if(window.scrollY <= 0 || window.scrollY  < (increaseBy + 1)){
            reached = 'top';
        }

        if(reached == 'top'){

            window.scrollTo(0, window.scrollY + increaseBy);

        }else if(reached == 'bottom'){

            window.scrollTo(0, window.scrollY - increaseBy);

        }

    }, 25);

});