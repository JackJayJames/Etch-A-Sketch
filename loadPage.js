console.log("load page here");

const setUp = {
    randomColor: false,
    blackColor: true
}

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

function getRandomColor()
{
    return Math.floor(Math.random()*16777215).toString(16);
}

function hoverEvent(id)
{
    const div = document.getElementById(id);
    if(setUp.blackColor === true && setUp.randomColor === false)
    {
        div.style.background = "black";
    }
    else if(setUp.blackColor === false && setUp.randomColor === true)
    {
        const Rcolor = getRandomColor();
        div.style.background = `#${Rcolor}`;
    }
}

function loadPage(size)
{
    const container = createDivs(size, size);
    container.childNodes.forEach(MouseOver => MouseOver.addEventListener("mouseover", function (e) {
        hoverEvent(e.target.id)
    }));
}

function eraseContainer()
{
    const container = document.querySelector("#container");
    container.remove();
}

function resizedContainer()
{
    let size = prompt("Enter your size (entered number must be from 1 to 100)");
    while(true)
    {
        if(size > 0 && size < 101)
        {
            break;
        }
        else
        {
            size = prompt("Wrong input! Please enter number from 1 to 100");
        }
    }
    eraseContainer();
    loadPage(size);
}

function revert_divs_color()
{
    const divs = document.querySelectorAll(".divs");
    divs.forEach(div => div.style.background = "white");
}

const size_button = document.querySelector("#sizeButton");
size_button.addEventListener("click", () => resizedContainer())

const erase_button = document.querySelector("#eraseButton");
erase_button.addEventListener("click", () => revert_divs_color());

const random_button = document.querySelector("#randomColorButton");
random_button.addEventListener("click", function () {
    setUp.blackColor = false;
    setUp.randomColor = true;
});

const black_button = document.querySelector("#blackColorButton");
black_button.addEventListener("click", function () {
    setUp.blackColor = true;
    setUp.randomColor = false;
})