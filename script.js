// unit plus 
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function(){
    var totalUnit = addUnit('unit');
    updatePrice('price',1219, totalUnit);
    updateTotalPrice('subTotal',1219);
})

const plusBtn2 = document.getElementById('plus2');
plusBtn2.addEventListener('click', function(){
    var totalUnit = addUnit('unit2');
    updatePrice('price2',59, totalUnit);
    updateTotalPrice('subTotal',59);
})

//unit minus
const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function(){
    var totalUnit = removeUnit('unit');
    updatePrice('price',1219, totalUnit);
    updateTotalPrice('subTotal',-1219);
})

const minusBtn2 = document.getElementById('minus2');
minusBtn2.addEventListener('click', function(){
    var totalUnit = removeUnit('unit2');
    updatePrice('price2',59, totalUnit);
    updateTotalPrice('subTotal',-59);
})

// functions
function addUnit(id) {
    const unit = document.getElementById(id).value;
    const getUnit= parseFloat(unit);
    const updateUnit = getUnit + 1;
    document.getElementById(id).value = updateUnit;
    return updateUnit;
}

function removeUnit(id) {
    const unit = document.getElementById(id).value;
    const getUnit= parseFloat(unit);
    const updateUnit = getUnit - 1;
    document.getElementById(id).value = updateUnit;
    return updateUnit;
}

function updatePrice(id, single, totalUnit) {
    const price = document.getElementById(id).innerText;
    const getPrice = parseFloat(price);
    const updatePrice  = single * totalUnit;
    document.getElementById(id).innerText = updatePrice;
    return updatePrice;
}

function updateTotalPrice(id,single) {
    const total = document.getElementById(id).innerText;
    const totalPrice = parseFloat(total);
    const updateTotalPrice = totalPrice + single ;
    document.getElementById(id).innerText = updateTotalPrice;
    document.getElementById('total').innerText = updateTotalPrice;
}