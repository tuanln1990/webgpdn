var btnTabs = document.querySelectorAll('.product__tabItem');
btnTabs.forEach(btnTab => {
    btnTab.addEventListener('click',function(){
        btnTabs.forEach(btnTab => {
            btnTab.classList.remove('product__tabItem_active');
        });
        btnTab.classList.add('product__tabItem_active');
        var productContainer = document.querySelectorAll('.product__container');
        console.log(productContainer);
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