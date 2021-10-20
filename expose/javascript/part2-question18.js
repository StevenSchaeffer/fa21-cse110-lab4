function refresh() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(refresh, 1000);