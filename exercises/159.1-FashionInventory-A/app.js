var currentInventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            { name: 'tasselled black low-top lace-up', price: 1000 },
            { name: 'tasselled green low-top lace-up', price: 1100 },
            { name: 'plain beige suede moccasin', price: 950 },
            { name: 'plain olive suede moccasin', price: 1050 }
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            { name: 'red leather laced sneakers', price: 800 },
            { name: 'black leather laced sneakers', price: 900 }
        ]
    }
];

function renderInventory(inventory) {
    let array= [];

    for (key in inventory) {
        let designername = inventory[key].name;
        let shoes = inventory[key].shoes;
    
        for (secondkey in shoes) {
            let name = shoes[secondkey].name;
            let price = shoes[secondkey].price;

            array.push([designername, name, price]);
        }
    }

    return array;

}
console.log(renderInventory(currentInventory))