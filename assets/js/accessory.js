// Images cover event
var btnImageItems = document.querySelectorAll('.accessory__coverItem');
btnImageItems.forEach(btnImageItem => {
    btnImageItem.addEventListener('click',function(){
        btnImageItems.forEach(temp => {
            temp.classList.remove('accessory__coverItem-active');
        });
        btnImageItem.classList.add('accessory__coverItem-active');
        var coverBox = document.querySelector('.accessory__cover');
        styleOfbtnImage = getComputedStyle(btnImageItem);
        coverBox.style.background = styleOfbtnImage.background;
    });
}); 