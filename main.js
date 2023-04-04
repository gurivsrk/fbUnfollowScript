function findChild(){
        try{
            for(let fBtn of document.querySelectorAll('.x1fayt1i .x1i10hfl')){
                if(fBtn.children[1].children[0].children[0].children[0].innerText == 'Follow settings'){
                    followBtn = fBtn
                    break;
                }
            }
            
            followBtn.click()
            setTimeout(()=>{
                document.querySelector('[aria-label="Unfollow"]').click()
                document.querySelector('[aria-label="Update"]').click()
                setTimeout(()=>{
                    document.querySelector('[aria-label="Close"]').click()
                },2000)
            },2000)
        }catch(err){
        }
}

let allBtn = document.querySelectorAll('[aria-label="More actions"]'),
i = 0;
setInterval(()=>{
    if(i != 0){
        try{
             allBtn[i].click()
            setTimeout(()=>{
                 findChild()
            },2000)
        }
        catch(er){()=> console.log(er)}
    }
        
    console.log(i++) 
},10000)
facebook unfollow script
