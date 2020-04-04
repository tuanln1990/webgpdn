// Event click tính năng / bảng giá
var btnTabs = document.querySelectorAll('.product__tabItem');
btnTabs.forEach(btnTab => {
    btnTab.addEventListener('click',function(){
        btnTabs.forEach(btnTab => {
            btnTab.classList.remove('product__tabItem_active');
        });
        btnTab.classList.add('product__tabItem_active');
        var productContainer = document.querySelectorAll('.product__container');
        if(btnTab == btnTabs[0]){
            productContainer[1].style.display = 'none';
            productContainer[0].style.display = 'block';
        }
        if(btnTab == btnTabs[1]){
            productContainer[0].style.display = 'none';
            productContainer[1].style.display = 'block';
        }
    });
});

// Event click kèm thiết bị / không kèm thiết bị

var btnPriceTabs = document.querySelectorAll('.product__price_tab');

btnPriceTabs.forEach(btnPriceTab => {
    btnPriceTab.addEventListener('click',function() {
        btnPriceTabs.forEach(btnPriceTab => {
            btnPriceTab.classList.remove('product__price_tab-active');
        });
        btnPriceTab.classList.add('product__price_tab-active');
        var productPriceContentBoxs = document.querySelectorAll('.product__price_contentBox');
        productPriceContentBoxs.forEach(a => {
            if(btnPriceTab == btnPriceTabs[0]){
                productPriceContentBoxs[0].style.display = "flex";
                productPriceContentBoxs[1].style.display = "none";
            }
            if(btnPriceTab == btnPriceTabs[1]) {
                productPriceContentBoxs[1].style.display = "flex";
                productPriceContentBoxs[0].style.display = "none";
            }
        });
    });
});
