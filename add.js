let total = 0;

let cartListArr = [
    `<li><i class="ri-close-large-line fs-2" style="cursor: pointer;" onclick="hideCart()"></i></li>`,
    `<p class="fs-3 total">Total: &#8369 ${(total.toFixed(2))}</p>
    <button class="btn btn-danger confirm-btn" onclick="location.href='ff-login.html'">Confirm Order</button>`
];

let totalElem = document.querySelector(".total");

function food2Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic4.jpg" style="width: 80px; height: auto;">
                <div>Sayote Chips (Small)</div>
                <button class="btn btn-outline-danger" onclick="remove2(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 10;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food3Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic3.jpg" style="width: 80px; height: auto;">
                <div>Sayote Chips (Medium)</div>
                <button class="btn btn-outline-danger" onclick="remove3(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 15;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food4Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic2.jpg" style="width: 80px; height: auto;">
                <div>Sayote Chips (Large)</div>
                <button class="btn btn-outline-danger" onclick="remove4(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 20;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}


function food6Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic4.jpg" style="width: 80px; height: auto;">
                <div>Sili Chips (Small)</div>
                <button class="btn btn-outline-danger" onclick="remove6(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 10;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food7Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic3.jpg" style="width: 80px; height: auto;">
                <div>Sili Chips (Medium)</div>
                <button class="btn btn-outline-danger" onclick="remove7(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 15;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function food8Func() {
    function insertElement() {
        let index = cartListArr.length - 1;
        let element = `
        <li style="margin-bottom: 80px;">
            <div class="cart-item rounded" style="display: flex; align-items: center; gap: 16px;">
                <img src="assets/pic2.jpg" style="width: 80px; height: auto;">
                <div>Sili Chips (Large)</div>
                <button class="btn btn-outline-danger" onclick="remove8(${index})">Remove</button>
            </div>
        </li>
        `;
    
        cartListArr.splice(index, 0, element);
        document.querySelector(".cart-lists").innerHTML = cartListArr.join("");
    }
    
    insertElement();

    total += 20;
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
    if(total > 0) {
        document.querySelector(".cart-lists .confirm-btn").style.display = "block";
    } else {
        document.querySelector(".confirm-btn").classList.add("d-none");
    }

    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}
