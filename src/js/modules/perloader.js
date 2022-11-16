export function loader (){
    document.addEventListener('DomContentLoaded', () =>{
  
        const mediaFiles = document.querySelectorAll('img , video');
        let i =0;
        Array.from(mediaFiles).forEach((file)=>{
          file.onload = ()=>{
            i++
            percent.innerHTML = (i*100) / mediaFiles.length
            if( i === mediaFiles.length){
              preloader.classList.add('.active')
              percent.innerHTML = 100;
              console.log(1);
            }
          }
        })
      })
}