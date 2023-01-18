console.log("Hello, I'm a script!")
// get the JSON data from http://localhost:5500/plushies.json
const response = await fetch("/Plushies-Store/plushies.json");
// parse out the json into a variable - "plushies"
const plushies = await response.json();

// print to console
console.log(plushies);

const grid = document.querySelector('.plushies-grid');
console.log(grid)




for (let plushy of plushies) {
    grid.innerHTML += `
        <div class="plushies">
            <img
            src="${plushy.image}"
            alt="An ${plushy.brand} ${plushy.model} plushy"
            />
            <div class="description">
            <div>
                <p>${plushy.brand}</p>
                <p>${plushy.model}</p>
            </div>
            <div>
                <a href="_plushImg" class="bold">View</a>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            </div>
        </div>
    `
}