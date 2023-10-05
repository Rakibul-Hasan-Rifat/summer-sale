makeCouponBtnDisable()
makePurchaseBtnDisable()

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', e => {
        const productName = e.currentTarget.children[2].innerText;
        const productPrice = parseFloat(e.currentTarget.lastElementChild.firstElementChild.innerText);
        addElementAndTotalPriceToDetailsCard(productName, productPrice)
    })
})

document.getElementById('coupon_field').addEventListener('keyup', function () {
    makeCouponBtnDisable()
})

document.querySelector('.buy_details button').addEventListener('click', function () {
    document.querySelector('.popup_section').style.display = 'flex'
})

document.getElementById('go_home_btn').addEventListener('click', function () {
    document.querySelector('.popup_section').style.display = 'none';
})

document.getElementById('apply_btn').addEventListener('click', function () {
    const discountElement = document.getElementById('discount')
    const discountedTotalElement = document.getElementById('total')
    const couponField = document.getElementById('coupon_field');
    const totalPriceElementText = document.getElementById('total_price').innerText;

    if (couponField.value === 'SELL200') {
        const totalPriceAmount = parseFloat(totalPriceElementText)
        discountElement.innerText = (0.2 * totalPriceAmount).toFixed(2)
        discountedTotalElement.innerText = parseFloat(totalPriceAmount - 0.2 * totalPriceAmount).toFixed(2)
        couponField.value = '';
        makeCouponBtnDisable();
    }
})

function addElementAndTotalPriceToDetailsCard(productName, productPrice) {
    const listContainer = document.querySelector('.product_list')
    const totalElement = document.getElementById('total_price')
    const discountedTotalElement = document.getElementById('total')

    const newLi = document.createElement('li');
    const newText = document.createTextNode(productName)
    newLi.appendChild(newText)
    listContainer.appendChild(newLi)

    const totalElemenetConvertedText = parseFloat(totalElement.innerText)
    productPrice += totalElemenetConvertedText
    totalElement.innerText = productPrice.toFixed(2);
    discountedTotalElement.innerText = productPrice.toFixed(2)

    makePurchaseBtnDisable()
}

function makeCouponBtnDisable() {
    const couponFieldValue = document.getElementById('coupon_field').value;
    if (couponFieldValue === 'SELL200') {
        document.getElementById('apply_btn').removeAttribute('disabled');
        btnStyles('apply_btn')
    } else {
        document.getElementById('apply_btn').setAttribute('disabled', '');
        btnStyles('apply_btn')
    }
}

function makePurchaseBtnDisable() {
    const totalPriceAmount = parseInt(document.getElementById('total_price').innerText);
    if (totalPriceAmount > 0) {
        document.getElementById('purchase_btn').removeAttribute('disabled')
        btnStyles('purchase_btn')
    } else {
        document.getElementById('purchase_btn').setAttribute('disabled', '')
        btnStyles('purchase_btn')
    }
}

function btnStyles(elementId) {
    const btn = document.getElementById(elementId)
    if (btn.hasAttribute('disabled')) {
        btn.style.cursor = 'default';
        btn.style.backgroundColor = 'lightgray'
    } else {
        btn.style.cursor = 'pointer';
        btn.style.backgroundColor = '#E527B2'
    }
}