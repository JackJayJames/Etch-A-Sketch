console.log("here");

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
}

function loadPage()
{
    const container = createContainer();
    const squares = createDivs(16, 16);
}