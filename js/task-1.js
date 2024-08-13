const mainListChildren = document.getElementById('categories').children;

console.log(`Number of categories: ${mainListChildren.length}`);

function getEverythingInside([...items]) {
    items.forEach(element => {
        [...element.children].forEach(elem => {
            if (elem.children.length === 0) {
                console.log(`Category: ${elem.textContent}`);
            } else {
                console.log(`Elements: ${elem.children.length}`);
            }
        })
    });
}

getEverythingInside(mainListChildren);
