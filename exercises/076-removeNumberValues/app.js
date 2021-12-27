var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here
    for(let key in obj){
        if(obj[key].constructor === Number){
           delete obj[key]; 
        }
    }
}
//Todos los objetos tienen una propiedad constructor. Los objetos creados sin explicitar el uso de una función (como son los objetos y las cadenas literales) tendrán una propiedad de constructor que apunta al tipo de constructor del Objeto Fundamento para ese objeto.

removeNumberValues(obj);
console.log(obj); 