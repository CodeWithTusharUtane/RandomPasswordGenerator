const p = document.getElementById("dj");
const bt = document.getElementById("jd");

// function for generating password:
function generateP() {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

// Adding the event listener
bt.addEventListener("click",()=>{
    p.innerText = generateP();
    
})