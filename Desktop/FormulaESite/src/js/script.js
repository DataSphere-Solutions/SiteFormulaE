
// SlideShow Automático
let imagens=['./src/img/img1.png','./src/img/img 2.png','./src/img/img 3.png', './src/img/img4.png'];
let index = 0;
let time = 5000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();
