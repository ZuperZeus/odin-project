function createGrid(size)
{
    let container = document.querySelector('.container');
    container.innerHTML='';
    for(let i=0;i<size;i++)
    {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<size;j++)
        {
            let elem = document.createElement('div');
            elem.classList.add('elem');
            row.appendChild(elem);
        }
        container.appendChild(row);
    }
}
createGrid(4);
let sizeButton=document.querySelector('.get-size');
sizeButton.addEventListener('click',() => {
    let size = Math.max(1,Math.min(+prompt(),100));
    createGrid(size);
});