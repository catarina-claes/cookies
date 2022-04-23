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
       let point = e.pageX - ((curs(e) * 306) + 26)  + "px";
       $(loc(e)).css("width", point);
       localStorage.setItem(loc(e), point)
   })
});

function loc(e) {
    let test1 = (e.pageX + 15) / 306;
    let test2 = (e.pageX + 15) % 306;
    let test3 = (e.pageY - 105) / 48; 
    let test4 = (e.pageY - 105) % 48;
    if (test2 > 40 && test4 > 10) {
        return "." + Math.floor(test1) + Math.floor(test3);
    } else {
        return null
    }
}
function curs(e) {
    return Math.floor((e.pageX + 15 ) / 306);
}
