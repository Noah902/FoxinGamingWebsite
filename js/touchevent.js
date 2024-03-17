document.addEventListener("touchstart", e => {
    console.log('hes started to touch me!!!');
    [...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot)
    });
}, {passive:false});


document.addEventListener("touchmove", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
    })
    
    
    console.log('he touching meeeee')
})


document.addEventListener("touchend", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })


    
    console.log('he touched meeeee')
})


//In case something funky happens and mobile cursor breaks
document.addEventListener("touchcancel", e => {
    ;[...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})
