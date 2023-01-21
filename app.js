const container = document.querySelector(".container");
let totalPrice = 0;

container.addEventListener("click", (e) => {
    
    const contright = e.target.closest("div");
    if (e.target.classList.contains("fa-solid")) {

        const div = e.target.closest("div");
        const mik = div.querySelector(".mik");
        const bigdiv = div.parentElement;
        const price = bigdiv.querySelector(".prices");
        const pt = bigdiv.querySelector(".showPrice");
        const priceArea = bigdiv.parentElement.parentElement.querySelector(".totalPrices");
        const st = priceArea.querySelector(".pst");
        const tax = priceArea.querySelector(".ptx");
        const sh = priceArea.querySelector(".psh");
        const to = priceArea.querySelector(".pto");

        console.log("total price" + totalPrice);

        function multiPrice(){
            st.innerText = +totalPrice.toFixed(2);
            let tx = totalPrice / 18;
            tax.innerText = tx.toFixed(2);
            const shipping = 15;
            sh.innerText = shipping;
            let total = Number(totalPrice + tx + shipping).toFixed(2);
            to.innerText = total;
        }
        function findPrice(){
            return price.innerText;
        }

        function findTotalPrice(mikd,pr){
            return (mikd*pr);
        }

        function totalPriceAdd(price){
            totalPrice = +totalPrice + +price;
        }

        function totalPriceRemove(price){
            totalPrice = +totalPrice - +price;
        }

        function upgradePT(mikd, pr){//PRODUCT TOTAL
            pt.innerHTML = (mikd*pr).toFixed(2);
        }

        function check() {
            if (mik.innerText <= 0) {
                e.target.parentElement.parentElement.parentElement.remove();
            }
        }

        if (e.target.classList.contains("fa-minus")) {
            let mikd = Number(mik.innerText);
            mikd -= 1;
            mik.innerHTML = mikd;
            check();
            let pr = findPrice();
            let to = findTotalPrice(mikd,pr);
            upgradePT(mikd,pr);
            totalPriceRemove(pr);
            multiPrice();
        }

        else if (e.target.classList.contains("fa-plus")) {
            let mikd = Number(mik.innerText);
            mikd += 1;
            mik.innerHTML = mikd;

            check();
            let pr = findPrice();
            let to = findTotalPrice(mikd,pr);
            console.log("pr" + to);
            upgradePT(mikd,pr);
            totalPriceAdd(pr);
            multiPrice();
        }
    }

    if (e.target.classList.contains("btn")) {
        e.target.parentElement.parentElement.remove();
    };
});

