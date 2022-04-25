$(window).ready(function(e) {
    console.log(localStorage.getItem(".21"))
    for (let i = 0; i < 4; i++) {
        for (let a = 0; a < 13; a++) {
            try {
                let item = document.getElementsByClassName("" + i + a);
                item[0].style.width = localStorage.getItem("." + i + a);
            } catch (error) {
                console.log("bah! I knew it!")
            }
        }
    }
   $(this).click(function(e) {
       let x = Math.floor((e.pageX/window.innerWidth)*1000)
       let point = (((x - ((curs(e) * 247) + 20))/216) * 21.5).toFixed(1) + "%";
       $(loc(e)).css("width", point);
       localStorage.setItem(loc(e), point)
   })
});

function loc(e) {
    let x = Math.floor((e.pageX/window.innerWidth)*1000)
    let y = Math.floor((e.pageY/window.innerHeight)*1000)
    let test1 = (x + 11) / 247;
    let test2 = (x + 11) % 247;
    let test3 = (y - 136) / 63; 
    let test4 = (y - 136) % 63;
    if (test2 > 31 && test4 > 14) {
        return "." + Math.floor(test1) + Math.floor(test3);
    } else {
        return null
    }
}
function curs(e) {
    let x = Math.floor((e.pageX/window.innerWidth)*1000)
    return Math.floor((x + 11) / 247);
}
