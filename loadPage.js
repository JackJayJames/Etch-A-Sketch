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
    arr.push(924/rows);
    arr.push(924/cols);
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
            div.style.minWidth = `${size[0]}px`
            div.style.minHeight = `${size[1]}px`;
            div.textContent = `${i}x${j}`;
            container.appendChild(div);
        }
    }
    document.querySelector("body").appendChild(container);
    return container;
}

function hoverEvent(id)
{
    //console.log(id);
    const div = document.getElementById(id);
    div.style.background = "blue";
}

function loadPage()
{
    const container = createDivs(16, 16);
    container.childNodes.forEach(MouseOver => MouseOver.addEventListener("mouseover", function (e) {
        hoverEvent(e.target.id)
    }));
}