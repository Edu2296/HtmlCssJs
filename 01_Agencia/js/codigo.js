// alert('hola mundo');
// console.log('hola mundo');
// console.log(window.pageXOffset);
// function(parametros){
//     acciones
// }
// window.addEventListener('scroll', function(){
//     // console.log('hiciste scroll');
//     // console.log(window.scrollY);
//     if(window.scrollY > 0){
//         console.log('es mayor que cero');
//     }
//     else{
//         console.log('no es mayor a 0 o es igual a 0 ');
//     }
// })
const nav = document.querySelector('.header__nav');
// console.log('nav');
window.addEventListener('scroll', function(){
        
        if(window.scrollY > 0){
           nav.classList.add('active');
        }
        else{
            nav.classList.remove('active');
        }
    })