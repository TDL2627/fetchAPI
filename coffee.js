
// to retrive the data
fetch('https://fakestoreapi.com/products').then(products => {
    return products.json();
}).then(ProductData => {
    for (let i=0; i<ProductData.length; i++){
        document.getElementById('load').innerHTML += "<img src='" + ProductData[i].image +"' height='200px width='200px' >"+" ";
        document.getElementById('load').innerHTML += "<h1>"+ ProductData[i].title + "</h1>" + '<br>';
        document.getElementById('load').innerHTML += "<h2>R"+ ProductData[i].price + "</h1>" + '<br>';
        document.getElementById('load').innerHTML += "<p>" + ProductData[i].description + "</p>" + '<br><br><br><hr>';
    }

}).catch((err) => {
    console.log('resolve', err);
});

