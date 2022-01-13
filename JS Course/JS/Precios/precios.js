function precioConDescuento(precio,descuento){
     return new Promise((resolve,reject) =>{
        if(typeof precio === 'number' && precio > 0
         && typeof descuento === 'number'){
            let total = precio - (precio * descuento / 100);
            resolve(`El precio antes del descuento era de ${precio} y con el descuento aplicado es de ${total} €`);
        }else{
             reject('El precio no está disponible');
        }
    })
    .then(response => messagePrice(response))
    .catch(error => messagePrice(error));
};

function messagePrice(some){
    document.getElementById("precioVehiculo").innerText = some;
}
/*
[■,■,■,■].map(■→●) ⇒ [●,●,●,●]
[■,●,■,▲].filter(■→true) ⇒ [■,■]
[■,●,■,▲].find(●→true) ⇒ ●
[■,●,■,▲].findIndex(●→true) ⇒ 1
[■,●,■,▲].fill(●) ⇒ [●,●,●,●]
[■,●,■,▲].some(●→true) ⇒ true
[■,●,■,▲].every(●→true) ⇒ false*/