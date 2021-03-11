console.log("from foreground");

//google
var imgs = document.querySelectorAll('img');
if(imgs !== null){
    imgs.forEach(img => {
        if(img.src.includes('logo')){
            img.addEventListener('mouseover', function(){
                img.classList.add('spin');
            })
            
            img.addEventListener('mouseout', function(){
                img.classList.remove('spin');
            })
        }
    });
}

//naver
var nLogo = document.querySelector('.logo_naver')
if(nLogo !== null){
    nLogo.addEventListener('mouseover', function(){
        nLogo.classList.add('spin');
    })
    
    nLogo.addEventListener('mouseout', function(){
        nLogo.classList.remove('spin');
    })
}

//daum
var daumId = document.querySelector('#daum');
var daumLogoId = document.querySelector('#daumLogo');
if(daumId !== null){
    daumId.addEventListener('mouseover', function(){
        daumId.classList.add('spin');
    })
    daumId.addEventListener('mouseout', function(){
        daumId.classList.remove('spin');
    })
}
if(daumLogoId !== null){
    daumLogoId.addEventListener('mouseover', function(){
        daumLogoId.classList.add('spin');
    })
    daumLogoId.addEventListener('mouseout', function(){
        daumLogoId.classList.remove('spin');
    })
}


