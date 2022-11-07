console.log("load page here");

function createContainer()
{
    const container = document.createElement("div");
    container.id = "container";
    return container;
}

function get_size_element(rows, cols)
{
    let arr = [];
    arr.push(960/rows);
    arr.push(960/cols);
    return arr;
}

function createDivs(rows, cols)
{
    const container = createContainer();
    let size = get_size_element(rows, cols);
    console.log(size);

    for(i = 0; i < cols; i++)
    {
        for(j = 0; j < rows; j++)
        {
            let div = document.createElement("div");
            div.id = `${i}x${j}`;
            div.classList.add("divs");
            div.style.minWidth = `${size[0]}px`
            div.style.minHeight = `${size[1]}px`;
            //div.textContent = `${i}x${j}`;
            container.appendChild(div);
        }
    }
    document.querySelector("body").appendChild(container);
    return container;
}

function hoverEvent(id)
{
    const div = document.getElementById(id);
    div.style.background = "blue";
}

function loadPage(size)
{
    const container = createDivs(size, size);
    container.childNodes.forEach(MouseOver => MouseOver.addEventListener("mouseover", function (e) {
        hoverEvent(e.target.id)
    }));
}

function eraseDivs()
{
    const container = document.querySelector("#container");
    container.innerHTML = "";
}

function resizedContainer()
{
    const size = prompt("Enter your size (entered number must be from 1 to 100)");
    eraseDivs();
    loadPage(size);
}

function revert_divs_color()
{
    const divs = document.querySelectorAll(".divs");
    divs.forEach(div => div.style.background = "white");
    //console.log(button);
}

const size_button = document.querySelector("#sizeButton");
size_button.addEventListener("click", () => resizedContainer())

const erase_button = document.querySelector("#eraseButton");
erase_button.addEventListener("click", () => revert_divs_color());