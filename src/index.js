import "./style.css"
import html from "./file.html"

import {myIcon}   from "./home.js";

myIcon.classList.add('homeImg')

// header > nav > home ..menu ..contact
const header= document.createElement("header")
const nav = document.createElement("nav")
const home = document.createElement('div')
home.textContent="Home"

const menu = document.createElement('div')
menu.textContent="Menu"
const contact = document.createElement('div')
contact.textContent="Contact"

function changeColor(){
  if (e.currentTarget===home){
    home.style.color="red";
    menu.style.color = "white";
    contact.style.color = "white"
  }
  
}


// body > content
const content = document.createElement('div')
content.classList.add("content")


home.addEventListener('click', createHome)



// function to create Home content
function createHome(){
  home.id = "navActive";
 menu.removeAttribute('id')
 contact.removeAttribute('id')
content.innerHTML="";

  const title = document.createElement('h3')
const icon = myIcon
const para = document.createElement("p")

 title.innerHTML="Tasty food"
 content.appendChild(title);
 content.appendChild(myIcon)

 
 para.innerHTML= "Eat unHealthy !!!"
 content.appendChild(para)

 home.removeEventListener('click', createHome);
 contact.addEventListener('click', createContact)

 menu.addEventListener('click',createMenu)
 
}
 
 



menu.addEventListener('click',createMenu)


// function to create  ..MENU...
function createMenu(){
 menu.id = "navActive";
 home.removeAttribute('id')
 contact.removeAttribute('id')
  content.innerHTML="";
  const title1 = document.createElement('h3')
const cardsContainer = document.createElement('div')
 cardsContainer.classList.add("cardsContainer")
// function to create Food Item with name..photo..price
function createMenuItem(item,picUrl,price){
  const foodCard = document.createElement('div')

  foodCard.classList.add('foodCard')
  cardsContainer.appendChild(foodCard)
  const foodName = document.createElement('h5')
  foodName.textContent= item;
  foodCard.appendChild(foodName)
  
  //const foodPic = document.createElement('img')
  const foodPic = new Image()
  foodPic.classList.add("foodPic")
  foodPic.src=picUrl;
  foodCard.appendChild(foodPic)
  const foodPrice = document.createElement('h6')
  foodPrice.textContent= price + " $" ;
  foodCard.appendChild(foodPrice)

}
  

 title1.innerHTML="..Menu.."
 content.appendChild(title1);
 content.appendChild(cardsContainer)

 createMenuItem("Burger1","../src/img/burger1.jpeg",4.99)
 createMenuItem("Burger2","../src/img/burger2.jpeg",2.99)
 createMenuItem("Burger3","../src/img/burger3.jpeg",4.99)
 createMenuItem("Burger4","../src/img/burger4.jpeg",7.99)
 createMenuItem("Fried Chicken ( 3 Pcs)","../src/img/friedchicken.jpeg",8.99)
 createMenuItem("Fries","../src/img/fries.jpeg",1.99)
 createMenuItem("Gyro Sandwich","../src/img/gyrosand.jpeg",6.99)
 createMenuItem("Gyro Plate","../src/img/gyroplate.jpeg",14.99)



 // disable Menu ...enable Home & Contact
menu.removeEventListener('click',createMenu)
contact.addEventListener('click', createContact)
 home.addEventListener('click', createHome)


}

contact.addEventListener('click', createContact)

function createContact(){
  content.innerHTML="";
  contact.id = "navActive";
 home.removeAttribute('id');
 menu.removeAttribute('id');

 content.innerHTML=` 
 <h4 class="contactUs">Contact Us</h4>
<div class="sideContactContainer">
       <h5 class="sideTitle">Address</h5>
        <div class="addressContainer">
            <img src="../dist/icon/map-marker.png" alt="" class="addressIcon">
             <div class="address">Address
                  <p class="sidePara">12442 OldHickery Blvd Nashville,Tn 37013</p>
             </div>
        </div>

        <div class="emailContainer">
             <img src="../dist/icon/email-edit.png" alt="" class="emailIcon">
             <div class="email">Email
                  <p class="sidePara">drsheko91@gmail.com</p>
            </div>
        </div>

        <div class="phoneContainer">
            <img src="../dist/icon/cellphone-basic.png" alt="" class="phoneIcon">
            <div class="phone">Phone
                 <p class="sidePara">(615)495-3482</p>
            </div>
        </div>

      <div class="bottomContainer">  
        <div class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12904.60764415087!2d-86.60539998506411!3d36.04099828178836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886472a0a1130b23%3A0x757b6a31ed7c4e66!2s12442%20Old%20Hickory%20Blvd%2C%20Antioch%2C%20TN%2037013!5e0!3m2!1sen!2sus!4v1649754087804!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>


       <form action="">
          <input type="text" class="fullName" placeholder="Full name" required>
           <input type="email" class="inputEmail" placeholder="Email" required>
           <input type="text" class="inputPhone" placeholder="phone number" required>
           <textarea name="" id="" cols="30" rows="10" placeholder="Leave your comment here"> </textarea>
           <div class="submitContainer"><button type="submit" class="submitBtn">Submit</button></div>
       </form>

      </div>
  </div>`
 

  contact.removeEventListener('click', createContact)
  home.addEventListener('click', createHome)
  menu.addEventListener('click',createMenu)


}



// footer
const footer = document.createElement('footer')
footer.textContent = " © 2022 Restaurant-page.All rights reserved | By Dr.Tech"


document.body.appendChild(header)
header.appendChild(nav)
nav.appendChild(home)
nav.appendChild(menu)
nav.appendChild(contact)
document.body.appendChild(content)
document.body.appendChild(footer)

 
document.addEventListener("DOMContentLoaded",createHome)