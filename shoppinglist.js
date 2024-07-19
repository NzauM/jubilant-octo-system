// fetch shopping list

// let items;
const itemsContainer = document.getElementById('itemslist')

fetch("http://localhost:3000/items")
.then((resp)=>resp.json())
.then((data)=>{
    console.log(data)
    data.forEach(item => {
        let listItem = document.createElement('li')
        listItem.innerHTML = item.itemname
        itemsContainer.appendChild(listItem)
        // listItem.addEventListener('click',(e)=>listItem.style.textDecoration = 'line-through')
        let listButton = document.createElement('button')
        listButton.textContent = 'Edit Item'
        listButton.style.marginLeft = '10%'
        listButton.addEventListener('click',(e)=>{
            editItem(item)
            
        })
        listItem.appendChild(listButton)
    });
})


const shoppingForm = document.getElementById('addItem')
let newItemName

const nameInput = document.getElementById('itemName')
nameInput.addEventListener('input',(e)=>{
    newItemName = e.target.value
})

shoppingForm.addEventListener('submit',(e=>{
    e.preventDefault()
    fetch("http://localhost:3000/items",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({itemname:newItemName})
    })
    .then((res)=>{
        console.log(res)
    })
}))

function editItem(item){
    console.log(item);
    document.getElementById("editItem").style.display = 'block'
    document.getElementById("edititemName").value = item.itemname
    let newName;
    document.getElementById("edititemName").addEventListener('input',(e)=>{
        newName = e.target.value
    })
    let editForm = document.getElementById('editItem')
    editForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        fetch(`http://localhost:3000/items/${item.id}`,{
            method:'PATCH',                                                                                                                                                                                                                                                                          
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({itemname:newName})
        })
        .then((res)=>{
            console.log(res);
        })
    })
   

}

