console.log("load page here");

function createContainer()
{
    const container = document.createElement("div");
    container.id = "container";
    return container;
}

function createDivs(rows, cols)
{
    const container = createContainer();
    for(i = 0; i < cols; i++)
    {
        for(j = 0; j < rows; j++)
        {
            let div = document.createElement("div");
            div.id = `${i}x${j}`;
            div.textContent = `${i} x ${j}`;
            container.appendChild(div);
        }
    }
    document.querySelector("body").appendChild(container);
    return container;
}

function hoverEvent(id)
{
    console.log(id);
    //const div = document.getElementById(id);
    div.style.background = "blue";
}

function loadPage()
{
    const container = createDivs(16, 16);
    console.log(container);
    container.childNodes.forEach(MouseOver => MouseOver.addEventListener("mouseover", function (e) {
        hoverEvent(e.target.id)
    }));
}