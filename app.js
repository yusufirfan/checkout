const container = document.querySelector(".container");
let totalPrice = 0;
container.addEventListener("click", (e)=>{
        const div = e.target.parentElement;
        const mik = div.querySelector(".mik")
        const bigdiv = div.parentElement;
        const prices = bigdiv.querySelector(".prices");
        const price = prices.innerText;
        const pT = bigdiv.querySelector(".showPrice");
        const priceArea = bigdiv.parentElement.parentElement.querySelector(".totalPrices")
        const pst = priceArea.querySelector(".pst");
        const ptx = priceArea.querySelector(".ptx");
        const psh = priceArea.querySelector(".psh");
        const pto = priceArea.querySelector(".pto");
        function showPT(miktar,price){
            pT.innerText = (miktar*price).toFixed(2);
        }
        
        function showPriceArea(){
            pst.innerText = totalPrice.toFixed(2);
            let tax = totalPrice / 18;
            ptx.innerText = tax.toFixed(2);
            let shipping = 15;
            // if(totalPrice==0){
            //     shipping = 0;
            // }  
            psh.innerText = shipping;
            let total = totalPrice + tax + shipping;
            pto.innerText = total.toFixed(2); 

            if(totalPrice<=0){
                pst.innerText = 0;
                ptx.innerText = 0;
                pto.innerText = 0;
                psh.innerText = 0;
            } 
        } 
    if(e.target.classList.contains("fa-solid")){
        if(e.target.classList.contains("fa-minus")){
            let miktar = mik.innerText;
            miktar = miktar-1;
            mik.innerHTML = miktar;

            if(miktar<=0){
                e.target.parentElement.parentElement.parentElement.remove();
                totalPrice -= +price;
                showPriceArea()
                return;
            }

            showPT(miktar,price)
            totalPrice -= +price;
            console.log(totalPrice);
            showPriceArea()


        }
        else if(e.target.classList.contains("fa-plus")){
            let miktar = mik.innerText;
            miktar = +miktar+1;
            mik.innerHTML = miktar;
            
            showPT(miktar,price);
            totalPrice += +price;
            console.log(totalPrice);
            showPriceArea()
        }
    }
    if(e.target.classList.contains("btn")){
        let miktar = mik.innerText;
        if(miktar>=0){
            totalPrice -= miktar*price;
        }
        console.log(totalPrice);
        const ddiv = e.target.parentElement.parentElement;
        ddiv.remove();
        showPriceArea();
    }
})


//v1 
// const container = document.querySelector(".container");
// let totalPrice = 0;

// container.addEventListener("click", (e) => {
    
//     const contright = e.target.closest("div");
//     if (e.target.classList.contains("fa-solid")) {

//         const div = e.target.closest("div");
//         const mik = div.querySelector(".mik");
//         const bigdiv = div.parentElement;
//         const price = bigdiv.querySelector(".prices");
//         const pt = bigdiv.querySelector(".showPrice");
//         const priceArea = bigdiv.parentElement.parentElement.querySelector(".totalPrices");
//         const st = priceArea.querySelector(".pst");
//         const tax = priceArea.querySelector(".ptx");
//         const sh = priceArea.querySelector(".psh");
//         const to = priceArea.querySelector(".pto");

//         console.log("total price" + totalPrice);

//         function multiPrice(){
//             st.innerText = +totalPrice.toFixed(2);
//             let tx = totalPrice / 18;
//             tax.innerText = tx.toFixed(2);
//             const shipping = 15;
//             sh.innerText = shipping;
//             let total = Number(totalPrice + tx + shipping).toFixed(2);
//             to.innerText = total;
//         }
//         function findPrice(){
//             return price.innerText;
//         }

//         function findTotalPrice(mikd,pr){
//             return (mikd*pr);
//         }

//         function totalPriceAdd(price){
//             totalPrice = +totalPrice + +price;
//         }

//         function totalPriceRemove(price){
//             totalPrice = +totalPrice - +price;
//         }

//         function upgradePT(mikd, pr){//PRODUCT TOTAL
//             pt.innerHTML = (mikd*pr).toFixed(2);
//         }

//         function check() {
//             if (mik.innerText <= 0) {
//                 e.target.parentElement.parentElement.parentElement.remove();
//             }
//         }

//         if (e.target.classList.contains("fa-minus")) {
//             let mikd = Number(mik.innerText);
//             mikd -= 1;
//             mik.innerHTML = mikd;
//             check();
//             let pr = findPrice();
//             let to = findTotalPrice(mikd,pr);
//             upgradePT(mikd,pr);
//             totalPriceRemove(pr);
//             multiPrice();
//         }

//         else if (e.target.classList.contains("fa-plus")) {
//             let mikd = Number(mik.innerText);
//             mikd += 1;
//             mik.innerHTML = mikd;

//             check();
//             let pr = findPrice();
//             let to = findTotalPrice(mikd,pr);
//             console.log("pr" + to);
//             upgradePT(mikd,pr);
//             totalPriceAdd(pr);
//             multiPrice();
//         }
//     }

//     if (e.target.classList.contains("btn")) {
//         e.target.parentElement.parentElement.remove();
//     };
// });

