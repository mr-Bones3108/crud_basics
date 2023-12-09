const form = document.getElementById("form")
const input = document.getElementById("input")
const msg = document.getElementById("msg")
const posts = document.getElementById("posts")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    formValidation()
    console.log("submitted")
})


const data = {}


const formValidation = () => {
    if (input.value === "") {
        msg.innerText = "Please enter a value cannot be empty"
    }
    else {
        data["text"] = input.value
        updateData(data.text)
        
    }
}


const updateData = (data) => {
    posts.innerHTML += `<div>
    <p>${data}</p>
    <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>`
input.value = ""
}


const editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()
}

const deletePost = (e)=>{
    e.parentElement.parentElement.remove()
}