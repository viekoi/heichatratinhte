import classes from './MainBanner.module.css'
import React, { useRef, useEffect } from 'react';



function MainBanner() {
    
    const ref = useRef(null)
    
    const data =[
        {imglink:"https://www.highlandscoffee.com.vn/vnt_upload/weblink/BrandFresh/Master_KV.png"},
        {imglink:"https://www.highlandscoffee.com.vn/vnt_upload/weblink/BrandFresh/Love.png"},
        {imglink:"https://www.highlandscoffee.com.vn/vnt_upload/weblink/BrandFresh/Respect.png",},
     ]
    
    
    const colSize = 1;
    let counter = useRef(1);

     useEffect(()=>{
        const carouselSlide = ref.current
        const banner = document.querySelectorAll(` .${classes['carousel-slide']} .banner`)
        const sectionBtn = document.querySelector(`.${classes['section-btn']}`)
        const sectionBtns = document.querySelectorAll(`.${classes['section-btn']} .owl-dot`)
        let size = banner[0].clientWidth
        carouselSlide.style.transform = `translateX( ${-size *counter.current}px )`;
        banner[0].setAttribute("id","last-clone")
        banner[banner.length-colSize].setAttribute("id","first-clone")
        let rightRemain = data.length - colSize;
        let leftRemain = 0;
        const prevBtn = document.querySelector("#prevBtn")
        const nextBtn = document.querySelector("#nextBtn")
        prevBtn.addEventListener("click",()=>{
               
                if ( counter.current <= 0) return;
                if ( leftRemain > 0 &&  leftRemain <  colSize) {
                    carouselSlide.style.transition = "transform 0.4s ease-in-out";
                    counter.current -=  leftRemain;
                    rightRemain+= leftRemain
                    leftRemain -=  leftRemain;
                    carouselSlide.style.transform = `translateX( ${- size *  counter.current}px )`;
                } else {
                    
                    carouselSlide.style.transition = "transform 0.4s ease-in-out";
                    counter.current -=  colSize;
                    leftRemain -= colSize;
                    rightRemain+=colSize
                    carouselSlide.style.transform = `translateX( ${- size *  counter.current}px )`;
                    
                }
              
                
                
            })

        nextBtn.addEventListener("click",()=>{
            
            if(counter.current >=(banner.length-colSize)){
                
                return
               } 
              
            if (rightRemain > 0 && rightRemain < colSize) {
                carouselSlide.style.transition = "transform 0.4s ease-in-out";
                counter.current += rightRemain;
                leftRemain+=rightRemain
                rightRemain -= rightRemain;
                carouselSlide.style.transform = `translateX( ${-size * counter.current}px )`;
                
            } else {
                carouselSlide.style.transition = "transform 0.4s ease-in-out";
                counter.current += colSize;
                rightRemain -= colSize;
                leftRemain+=colSize
                carouselSlide.style.transform = `translateX( ${-size * counter.current}px )`;
               
            }
        })

        
       carouselSlide.addEventListener("transitionstart", () => {
            const curActiveBtn = document.querySelector(`.${classes['section-btn']} .active`)
   
            if (banner[counter.current].id ==="last-clone") {
                // carouselSlide.style.transition='none';
                counter.current = data.length;
                leftRemain = data.length - colSize
                rightRemain = 0
                carouselSlide.style.transform = `translateX( ${-size * counter.current }px )`;
            }
             if(banner[counter.current].id ==="first-clone") {
                // carouselSlide.style.transition='none';
                counter.current = colSize
                rightRemain = data.length - colSize
                leftRemain = 0
                carouselSlide.style.transform = `translateX( ${-size * counter.current}px )`;
            }

                curActiveBtn.classList.remove("active")
                sectionBtns[Math.ceil(counter.current/colSize)-1].classList.add("active")
    
        })


        sectionBtn.addEventListener("click",(e)=>{
            const curActiveBtn = document.querySelector(`.${classes['section-btn']} .active`)
            const clickedBtn = e.target.closest(".owl-dot")
            if(clickedBtn){
                curActiveBtn.classList.remove("active")
                clickedBtn.classList.add("active")
                clearInterval(sliderInterval)
                if(clickedBtn.dataset.index > curActiveBtn.dataset.index){
                  for(let i = 0; i < Math.abs(clickedBtn.dataset.index - curActiveBtn.dataset.index);i++){
                     nextBtn.click()
                  }
                }else if(clickedBtn.dataset.index < curActiveBtn.dataset.index){
                   for(let i = 0; i < Math.abs(clickedBtn.dataset.index - curActiveBtn.dataset.index);i++){
                     prevBtn.click()
                  }
                }
                sliderInterval = setInterval(()=>{
                    nextBtn.click()
                },10000)
                
             }
        })

        window.addEventListener('resize', () => {
            carouselSlide.style.transition='none';
            size = banner[0].clientWidth;
            carouselSlide.style.transform = `translateX( ${-size * counter.current}px )`;
         });
        
        let sliderInterval = setInterval(()=>{
            nextBtn.click()
        },10000)

        
     },[])


     const contents = data.map((content,index)=>{
        return(
            <div key={index} data-index={index} className="banner"><a className=""><img src={content.imglink} alt=""/></a></div>
        )
     })

     const sectionBtn = data.map((btn,index)=>{
        return(
            <button key={index} className={`owl-dot ${index===0?`active`:``}`} data-index={index}><span></span></button>
        )
     })

     const contentsTop = contents.slice(0,colSize)
     const contentsBot = contents.slice(contents.length-colSize, contents.length+1)
    return ( 
        <div className={classes['main-banner']}>
                <div className={classes['carousel-container']}>
                    <div ref={ref} className={classes["carousel-slide"]}>
                        {contentsBot} 
                        {contents}
                        {contentsTop}         
                    </div>           
                </div> 
                <button id="prevBtn" ><i className="fa-solid fa-angle-left"></i></button>
                <button id="nextBtn"><i className="fa-solid fa-angle-right"></i></button>
                <div className={classes[`section-btn`]}>
                    {sectionBtn}
                </div> 
        </div>
     );
}

export default MainBanner;