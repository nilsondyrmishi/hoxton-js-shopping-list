let shoppingList = [
    ["Milk", 2.00],
    ["Cocoa", 3.00],
    ["Salad", 2.00],
    ["Carrots", 1.00],
    ["Tomatoes", 1.00],
    ["Ready meals", 5.00]
]
let newProduct = prompt("Whats gonna be the new product?")
let newPrice = Number(prompt("How much is it?"))


let newItem = [newProduct, newPrice]
shoppingList.push(newItem)

for(let i=0; i< shoppingList.length; i++){
    let productItem = shoppingList[i]
    for(let j=0; j<productItem.length; j++){
        console.log(`${productItem[0]} price is £ ${productItem[1]}`)
    }
}
if (Number.isNaN(newPrice) ||typeof newProduct !== "string"){
    alert(`please enter a valid value`)
}

