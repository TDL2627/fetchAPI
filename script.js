// to retrive the 2nd
fetch('https://api.kanye.rest').then(yeezy => {
    return yeezy.json();
}).then(bars => {
   document.write(bars.quote)

}).catch((err1) => {
    console.log('wrong', err1);
});
