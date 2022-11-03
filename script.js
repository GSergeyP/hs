const $ = document.getElementById.bind(document),
      block = $('block'),
      blockChangeColor = $('block__change-color'),
      modal = $('modal'),
      modalContainer = $('modal__container'),
      modalContainerItem = document.querySelectorAll('ul > li[id^="modal__container-item"]'),
      child = blockChangeColor.firstElementChild,
      element = [block, blockChangeColor];

const blockBackground = () => {
  const getСolor = localStorage.getItem('modal__container-item');
  if(getСolor) for(let item in element) element[item].classList.add(getСolor);
  else for(let item in element) element[item].classList.add('modal__container-item__0');
}

for(let i = 0; i < modalContainerItem.length; i++) {
  modalContainerItem[i].addEventListener('click', () => {
    localStorage.setItem('modal__container-item', modalContainerItem[i].id);
    for(let item in element) {
      element[item].classList.remove(element[item].className);
      element[item].classList.add(modalContainerItem[i].id);
    }
    modal.style.display = 'none';
  });
}

blockChangeColor.addEventListener('click', () =>{
  modal.style.display = 'block';
});

modalContainer.addEventListener('mouseover', () => {
  child.style.setProperty('--content-color', 'red');
});
modalContainer.addEventListener('mouseout', () => {
  child.style.setProperty('--content-color', 'blue');
});

document.addEventListener('DOMContentLoaded', blockBackground);