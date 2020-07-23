// unit plus 
const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', function(){
    const unit = document.getElementById('unit').value;
    const getUnit= parseFloat(unit);

    const updateUnit = getUnit + 1;
    document.getElementById('unit').value = updateUnit;

    const price = document.getElementById('price').innerText;
    const getPrice = parseFloat(price);

    const updatePrice  = 1219 * updateUnit;
    document.getElementById('price').innerText = updatePrice;

    const total = document.getElementById('subTotal').innerText;
    const totalPrice = parseFloat(total);

    const updateTotalPrice = totalPrice + 1219 ;
    document.getElementById('subTotal').innerText = updateTotalPrice;

    document.getElementById('total').innerText = updateTotalPrice;
})
const plusBtn2 = document.getElementById('plus2');
plusBtn2.addEventListener('click', function(){
    const unit = document.getElementById('unit2').value;
    const getUnit= parseFloat(unit);

    const updateUnit = getUnit + 1;
    document.getElementById('unit2').value = updateUnit;

    const price = document.getElementById('price2').innerText;
    const getPrice = parseFloat(price);

    const updatePrice  = 59 * updateUnit;
    document.getElementById('price2').innerText = updatePrice;

    const total = document.getElementById('subTotal').innerText;
    const totalPrice = parseFloat(total);

    const updateTotalPrice = totalPrice + 59 ;
    document.getElementById('subTotal').innerText = updateTotalPrice;
    
    document.getElementById('total').innerText = updateTotalPrice;
})

//unit minus

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', function(){

    const unit = document.getElementById('unit').value;
    const getUnit= parseFloat(unit);

    const updateUnit = getUnit - 1;
    document.getElementById('unit').value = updateUnit;
    

    const price = document.getElementById('price').innerText;
    const getPrice = parseFloat(price);

    const updatePrice  = 1219 * updateUnit;
    document.getElementById('price').innerText = updatePrice;

    const total = document.getElementById('subTotal').innerText;
    const totalPrice = parseFloat(total);

    const updateTotalPrice = totalPrice - 1219 ;
    document.getElementById('subTotal').innerText = updateTotalPrice;

    document.getElementById('total').innerText = updateTotalPrice;
    
})

const minusBtn2 = document.getElementById('minus2');
minusBtn2.addEventListener('click', function(){

    const unit = document.getElementById('unit2').value;
    const getUnit= parseFloat(unit);

    const updateUnit = getUnit - 1;
    document.getElementById('unit2').value = updateUnit;
    

    const price = document.getElementById('price2').innerText;
    const getPrice = parseFloat(price);

    const updatePrice  = 59 * updateUnit;
    document.getElementById('price2').innerText = updatePrice;

    const total = document.getElementById('subTotal').innerText;
    const totalPrice = parseFloat(total);

    const updateTotalPrice = totalPrice - 59 ;
    document.getElementById('subTotal').innerText = updateTotalPrice;

    document.getElementById('total').innerText = updateTotalPrice;
    
})
