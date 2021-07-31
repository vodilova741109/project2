let position = 0;
const slideToShow = 3,
      slideToScroll = 2,
      container = document.querySelector('.slider-container'),
      track = document.querySelector('.slider-track'),    
      btnPrev = document.querySelector('.btn-prev'),
      btnNext = document.querySelector('.btn-next'),
      items =  document.querySelectorAll(' .slider-item'),
      itemsCount = items.length,
      itemWidth = container.clientWidth / slideToShow,
      movePosition = slideToScroll *itemWidth;
      console.log(itemsCount);

      items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
      });

btnNext.addEventListener('click', () =>{
    const itemsLeft = itemsCount -(Math.abs(position) + slideToShow * itemWidth ) / itemWidth;

    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    
    setPosition();
    checkBtns();   
});

btnPrev.addEventListener('click', () =>{
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();

});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slideToShow) * itemWidth ;
};

checkBtns();
