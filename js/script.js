const lg = document.querySelector(`#lrgimg`);
const t1 = document.querySelector(`#th1`);
const t2 = document.querySelector(`#th2`);
const t3 = document.querySelector(`#th3`);

const changeofimage = function(thumb){
    const url = thumb.getAttribute(`src`);
    lg.setAttribute(`src`,url)
};
const clickfunc = function(event){
    changeofimage(event.target)
};
t1.addEventListener(`click`,clickfunc);
t2.addEventListener(`click`,clickfunc);

t3.addEventListener(`click`,clickfunc);

