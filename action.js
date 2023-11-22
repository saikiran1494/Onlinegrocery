let login = document.querySelector(".login");
let register = document.querySelector(".Register");
let home = document.querySelector(".home");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let cart_list = [];

//For Opening Home Page
function open_home(){
    if (save_user == username.value && save_password == password.value)
    {
        cart_list = [];
        alert("Authentication Completed..");
        let prod_cart = document.querySelector(".prod_cart");
        let product = document.querySelector(".mainpage");
        product.style.display = "block";
        prod_cart.style.display = "none";
        login.style.display = "none";
        home.style.display = "block";
        error.style.display = "none";
    }
    else
    {
        let error = document.querySelector(".error_log1");
        error.style.display = "block";
    }
}


//For enter details into Register Page
function Reg_sub(){
    let Name = document.querySelector("#Name");
    let mail = document.querySelector("#email");
    let new_password = document.querySelector("#new_password");
    let con_password = document.querySelector("#con_password");
    if (Name.value == "" && mail.value == "" && new_password.value == "" && con_password.value == "")
        alert("Enter Details");
    else if (new_password.value != con_password.value)
        alert("Enter the correct Password");
    else if (!(mail.value.includes("@") && mail.value.includes(".com")))
    {
        let error = document.querySelector(".error_log2");
        error.style.display = "block";
    }
    else{
        localStorage.setItem("Name",Name.value);
        localStorage.setItem("password",new_password.value);
        localStorage.setItem("email",mail.value);
        alert("Registration Successfully Completed!");
    }
}

//For storing user data into local storage
let save_user = localStorage.getItem("Name");
let save_password = localStorage.getItem("password");
let save_email = localStorage.getItem("email");


//For Opening Register Page
function open_reg(){
    login.style.display = "none";
    register.style.display = "block";
}

//For opening Login Page
function open_log(){
    login.style.display = "block";
    home.style.display = "none";
    username.value = "";
    password.value = "";
}

//In home,it is for showing products in home page
function Home()
{
    let product = document.querySelector(".mainpage");
    let profile = document.querySelector(".profile");
    let prod_cart = document.querySelector(".prod_cart");
    prod_cart.style.display = "none";
    product.style.display = "block";
    profile.style.display = "none";
    let your_name = document.querySelector(".your_name");
    your_name.innerText = Name.value;
}


//For opening profile and showing your details
function profile(){
    
    let product = document.querySelector(".mainpage");
    let profile = document.querySelector(".profile");
    let prod_cart = document.querySelector(".prod_cart");
    prod_cart.style.display = "none";
    product.style.display = "none";
    profile.style.display = "block";
    let name_v = document.querySelector(".name_value");
    let password_v = document.querySelector(".password_value");
    let email_v = document.querySelector(".email_value");
    name_v.innerText = save_user;
    password_v.innerText = save_password;
    email_v.innerText = save_email;
}

//For updating your details
function update()
{
    let value = prompt("which value you want to update");
    let answer = prompt("Enter Value");
    if (value == "name")
    {
        localStorage.setItem("Name",answer);
        alert("Updated Successfully.");
    }
    else if (value == "email")
    {
        localStorage.setItem("email",answer);
        alert("Updated Successfully.");
    }
    else if (value == "password"){
        localStorage.setItem("password",answer);
        alert("Updated Successfully.");
    }
}


//For opening cart page
function cart()
{
    let product = document.querySelector(".mainpage");
    let profile = document.querySelector(".profile");
    product.style.display = "none";
    profile.style.display = "none";
    let prod_cart = document.querySelector(".prod_cart");
    prod_cart.style.display = "block";
}

//For adding the product into cart
function add_cart(productName,price)
{
    alert("successfully added to cart");
    cart_list.push({name:productName,price:price});
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let delete_btn = document.createElement("button");
    let order = document.createElement("button");
    h3.innerText = productName;
    p.textContent = price;
    delete_btn.textContent = "Delete";
    order.textContent = "Place Order";
    delete_btn.classList.add("delete");
    order.classList.add("delete");
    h3.classList.add("prod_h3");
    p.classList.add("prod_p");
    let prod = document.querySelector(".prod");
    prod.appendChild(h3);
    prod.appendChild(p);
    prod.appendChild(delete_btn);
    prod.appendChild(order);
    delete_btn.addEventListener("click",()=>{
        prod.removeChild(h3);
        prod.removeChild(p);
        prod.removeChild(delete_btn);
        prod.removeChild(order);
    });
    order.addEventListener("click",()=>{
        alert(`Order Placed! ${h3.innerText} ${p.textContent} and quantity is 100g with order ID:101`);
    })
}   