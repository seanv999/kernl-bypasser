    alert(`Kernl key bypass by Sean V`)
    const opt = parseInt(prompt(`Select the checkpoints and wait 15 seconds [1-4]`))

    const bypass = c => {
        if(!c){
            alert(`Retry, You didn't select a valid checkpoint`)
            return
        }
        window.open(c)
        //start 15 seconds timer
        let t = 20
        console.log('Now Wait, then go to the next checkpoint (In ORDER)')
        const timer = setInterval(()=>{
            console.log(t)
            t -= 1
            
            if(t == 0){
                clearInterval(timer)
                console.log(`you may now continue to the next checkpoint`)
            }
        },1000)
    }

    switch(opt) {
        case 1:
            bypass('https://cdn.krnl.place/getkey')
        break;

        case 2:
            bypass('https://cdn.krnl.place/getkey_games')
        break;
        
        case 3:
            bypass('https://cdn.krnl.place/getkey_interface')
        break

        case 4:
            bypass('https://cdn.krnl.place/getkey.php')
        break

        default:
            bypass(false)
    }
