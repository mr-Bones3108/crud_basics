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
        input.value = ""
    }
}


const updateData = (data) => {
    posts.innerHTML += `<div>
    <p>${data}</p>
    <span class="options">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
    </span>
</div>`
}