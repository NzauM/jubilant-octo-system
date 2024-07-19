const items = ["milk","bread","eggs"]

const itemsContainer = document.getElementById("itemslist")

function updateItems(){
    // alert("Page refre")
    itemsContainer.innerHTML = ''
    items.forEach((item)=>{
        let list = document.createElement('li')
        list.innerText = item
        itemsContainer.appendChild(list)
        list.addEventListener('click',(e)=>{
            // list.style.display = 'none'
            list.style.backgroundColor = 'red'
            // list.style.textDecoration = list.style.textDecoration == 'none' ? 'green wavy line-through' : 'none'
    
        })
    })
}

updateItems()



// Add New Item
const form = document.getElementById('addItem')
let itemName
// const itemName = document.getElementById('itemName')
// const itemprice = document.getElementById('itemprice')

// Get Name Value
document.getElementById('itemName').addEventListener('input',(e)=>{
    itemName = e.target.value
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    items.push(itemName)
    updateItems()
})

document.getElementById("clearList").addEventListener('click',(e)=>{
    itemsContainer.innerHTML = ''
})
