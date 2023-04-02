const h1 = document.getElementById("hour");
const m1 = document.getElementById("minutes");
const s1 = document.getElementById("seconds");
const AP = document.getElementById("ampm");
function upClk(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if(h>12)
    {
        h = h-12;
        ampm = "PM";
    }
    h = h<10? "0" + h: h;
    m = m<10? "0" + m: m;
    s = s<10? "0" + s: s;
    h1.innerText = h;
    m1.innerText = m;
    s1.innerText = s;
    AP, (innerText = ampm);
    setTimeout(() => {
    upClk()
    }, 1000);
}
upClk();
