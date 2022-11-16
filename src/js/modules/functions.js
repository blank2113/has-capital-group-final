export function isWebp(){

    function testWebP(callback){
        let webP = new Image();
        webP.onload = webP.onerror = function (){
            callback(webP.height ==2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIil";
    }
    
    testWebP(function (support){
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    })
}




// const card = document.querySelectorAll('.products-inner__content-card');
// console.log(card);
// for(let i =0; i < card.length; i++){
//     card[i].addEventListener('mouseover',()=>{
//         for(let j = 0; j < card.length; j++){
//            if(!card[j].classList.contains('active')){
//             card[j].classList.toggle('no-active');
//            }
//         }
//         card[i].classList.toggle('active');
        
//     })
//     card[i].addEventListener('mouseout',()=>{
//         for(let k = 0; k < card.length; k++){
//             if(card[k].classList.contains('no-active')){
//                 card[k].classList.remove('no-active');
//                }
//         }
//         card[i].classList.remove('active');
//     })
// }