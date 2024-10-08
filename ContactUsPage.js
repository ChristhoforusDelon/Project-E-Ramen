function val(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phone = document.getElementById("phone")
    let write = document.getElementById("write")
    let checkbox = document.getElementById("validation")

    if(name.value.length <= 5){
        alert("Name must be atleast 5 characters")
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Must use Gmail")
    }else if(phone.value.length <= 10){
        alert("Invalid phone number must be atleast longer than 10")
    }else if(write.value.length <= 0){
        alert("Please write something")
    }else if(checkbox.value != 'on'){
        alert("Must agree with validation")
    }else{
        alert("Thank You!")
    }
}