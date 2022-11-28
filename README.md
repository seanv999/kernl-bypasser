# How to Bypass 
open a new tab and run the script in the console, select check point one, wait about 15 seconds (there is a 20 second count down in the console), then goto checkpoint 2 and so on
```js
alert(`Krnl Key Bypasser\nall you have to do is complete the checkpoint, then return to this page`)
let t = false;
let b = false;
document.addEventListener("visibilitychange", event => {
    if (document.visibilityState == "visible") {
        b = true
    } else {
        t = true
    }
});

let currentCheckpoint = 1;

const bypass = checkpoint => {
    switch(checkpoint) {
        case 1:
            window.open('https://cdn.krnl.place/getkey')
        break;

        case 2:
            window.open('https://cdn.krnl.place/getkey_games')
        break;
        
        case 3:
            window.open('https://cdn.krnl.place/getkey_interface')
        break

        case 4:
            window.open('https://cdn.krnl.place/getkey.php')
        break

        case 5:
            window.open('https://cdn.krnl.place/getkey_scripts')
        break
        
        default:
            window.open('https://cdn.krnl.place/getkey_scripts')
    }
    //detect
    setInterval(() => {
        if(t && b){
            console.log('The next checkpoint will open after this countdown...')
            t = false
            b = false
            let time = 20//to be safe
            const timer = setInterval(()=>{
                
                console.log(`opening in: ${time}`)
                if(time <= 0 ){
                    clearInterval(timer)
                    currentCheckpoint += 1
                    bypass(currentCheckpoint)
                    console.clear()
                }
                time -= 1
            },1000)
        }
    }, 500);
    
}
bypass(1)
```
