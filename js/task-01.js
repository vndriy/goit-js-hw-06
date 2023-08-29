const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);
const categoriesItems = categoriesList.children;
// console.log(categoriesItems);

console.log(`Number of categories: ${categoriesItems.length}`)

const categoriesArrayItems = [...categoriesItems];

    
categoriesArrayItems.forEach(category => {
    // console.log(category);
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
});
