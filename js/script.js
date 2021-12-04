const lg = document.querySelector(`#lrgimg`);
const t1 = document.querySelector(`#th1`);
const t2 = document.querySelector(`#th2`);
const t3 = document.querySelector(`#th3`);
const thumbs = document.querySelectorAll(`.thumbnail`)
const clickfunc = function(event){
    lg.setAttribute(`src`,event.target.getAttribute(`src`));
};
thumbs.forEach(function(thumbs){
    thumbs.addEventListener(`click`,clickfunc);
})
