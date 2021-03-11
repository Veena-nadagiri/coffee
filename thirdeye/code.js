const text = ['20k+ Curated Vendors','100k+ Trusted Reviews','10mio+ Wedding Inspirations'];
let count = 0;
let index = 0;
let currenttext = '';
let letter = '';
(function type(){
    if(count === text.length){
        count = 0;
    }
    currenttext = text[count];
    letter = currenttext.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currenttext.length ){
        count++; 
        index = 0;

    }
    setTimeout(type,200);


}())