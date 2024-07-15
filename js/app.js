'use strict';
const img = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass']

const state = {
    totalProducts:[],
    tally:0
};

function Products(nombre, ruta,) {
    this.nombre = nombre;
    this.ruta = ruta;
    this.count = 0;
    this.views = 0;
};



function imganesShower() {
    for (let i = 0; i < imganes.length; i++) {
        let producto = new Products(img[i],'img'+img[i]+'.jpg');
        state.totalProducts.push(producto);
    }
}