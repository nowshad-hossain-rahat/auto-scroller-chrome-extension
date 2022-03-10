window.addEventListener("load", (evt) => {

    let bodyScrollHeight = document.body.scrollHeight;
    let i = 10;

    window.addEventListener('scroll', (evt) => {

        i = window.scrollY;

    });

    let scroller = setInterval(() => {

        if(i >= bodyScrollHeight){clearInterval(scroller); return;}
        console.log('now : ', i);
        window.scrollTo(0, i);
        i+=10;

    }, 25);

});