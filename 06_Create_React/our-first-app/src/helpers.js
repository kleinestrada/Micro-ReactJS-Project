import {foods} from './foods'

const listFood = foods

function giveFruit(){
    const theChosenOne = choice(foods)

    var finalOutput = {
        ChosenFruit: theChosenOne,
        isItAvailable: remove(listFood, theChosenOne),
        numberFruitLeft: listFood.length + 1
    }
    return finalOutput
}

function choice(items){
    const thechosenone = items[Math.floor(Math.random() * items.length)]
    return thechosenone
}

function remove(items, item){
    if (items.indexOf(item) !== -1) {
        items.splice(items.indexOf(item), 1)
        return item
    }
    else{
        return 'Out of stock'
    }
}

export default giveFruit;