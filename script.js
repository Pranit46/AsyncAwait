const msg = (count) =>{
    return new Promise((resolve, reject) =>{
        if(count >=1 ){
          setTimeout(()=>{ 
          document.getElementById("counter").innerHTML = count
          resolve (count); 
   },1000);
          }
          else{
            setTimeout(()=>{ 
             reject ("Happy New Year!!!"); 
   },1000);
          }
        })
    }
   
  async function countDown(count){
      try{
          let n = await msg(count)
          await msg(--n)
          await msg(--n)
          await msg(--n)
          await msg(--n)
          await msg(--n)
          await msg(--n) 
          await msg(--n) 
          await msg(--n) 
          await msg(--n) 
          await msg(--n) 
      }
    catch (countDownMsg) {
       document.getElementById("counter").innerText = countDownMsg;
    }
    
  }
  
  countDown(10)