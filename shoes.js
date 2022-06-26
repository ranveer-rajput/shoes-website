const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform= 'translet(${-100 * index}vw)';
    });
    
});


