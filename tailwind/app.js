const form = document.getElementById('form')
const input = document.getElementById("input")
const list = document.getElementById("list")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(input.value.trim().length){
        list.innerHTML += `<li class="rounded-md py-1.5 px-4 border-[2px] text-xl">${input.value.trim()}</li>`
        input.value = ""
    }
   
})