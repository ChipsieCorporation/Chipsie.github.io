function remove2(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 10}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 10;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function remove3(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 15}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 15;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function remove4(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 20}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 20;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function remove6(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 10}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 10;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function remove7(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 15}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 15;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}

function remove8(index) {
    cartListArr.splice(index, 1);
    totalElem.innerHTML = `Total: &#8369 ${(total.toFixed(2)) - 20}`;
    document.querySelector(".cart-lists").innerHTML = cartListArr.join("\n");
    total -= 20;
    document.querySelector(".cart-lists p").innerHTML = `Total: &#8369 ${(total.toFixed(2))}`;
}
