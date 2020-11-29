const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const itemsRef = document.querySelectorAll('.item');
itemsRef.forEach(item => {
    const titleTextRef = item.querySelector('h2').textContent;
    const lengthItemRef = item.querySelectorAll('li').length;
    console.log(`Категория: ${titleTextRef} \n Количество элементов: ${lengthItemRef}`);
});
