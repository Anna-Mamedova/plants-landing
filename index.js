// бургер меню

let burger = document.querySelector(".burger")
let burgerIcon = document.querySelector(".burger-icon")
let closeNav = document.querySelector(".close-nav-button")
let navItems = document.querySelector(".nav-items")
burger.addEventListener("click", showNavItems)
closeNav.addEventListener("click", hideNavItems)


function showNavItems() {
    navItems.classList.add("open-nav-items")
    navItems.classList.remove("close-nav-items")
}

function hideNavItems() {
    navItems.classList.remove("open-nav-items")
    navItems.classList.add("close-nav-items")
}

window.onclick = function(event) {
    if(event.target !== burger && event.target !== burgerIcon) {
        if(navItems.classList.contains("open-nav-items")){
            hideNavItems()
        }
    }
}

// кнопки сервис

let gardensButton = document.querySelector(".gardens-button")
let lawnButton = document.querySelector(".lawn-button")
let plantingButton = document.querySelector(".planting-button")
let gardensCard = document.querySelectorAll(".gardens-card")
let plantingCard = document.querySelectorAll(".planting-card")
let lawnCard = document.querySelectorAll(".lawn-card")
gardensButton.addEventListener("click", showCard)
lawnButton.addEventListener("click", showCard)
plantingButton.addEventListener("click", showCard)

function showCard () {
    let activeButtons = document.querySelectorAll(".active-service-button")
    
    this.classList.toggle("active-service-button")
    this.classList.toggle("inactive-service-button")
    if(activeButtons.length >= 2) {
        this.classList.remove("active-service-button")
        this.classList.add("inactive-service-button")
    }
    if(activeButtons.length <= 2){
        if(this === gardensButton && plantingButton.classList.contains("inactive-service-button") && lawnButton.classList.contains("inactive-service-button")) {
            for(let i = 0; i < plantingCard.length; i++){
                plantingCard[i].classList.toggle("blur-service-card")
            }
            for(let i = 0; i < lawnCard.length; i++){
                lawnCard[i].classList.toggle("blur-service-card")
            }
        } else if (this === gardensButton && plantingButton.classList.contains("active-service-button") && lawnButton.classList.contains("inactive-service-button") || this === gardensButton && plantingButton.classList.contains("inactive-service-button") && lawnButton.classList.contains("active-service-button")){
            for(let i = 0; i < gardensCard.length; i++){
                gardensCard[i].classList.toggle("blur-service-card")
            }
        } 
        if(this === lawnButton && gardensButton.classList.contains("inactive-service-button") && plantingButton.classList.contains("inactive-service-button")) {
            for(let i = 0; i < plantingCard.length; i++){
                plantingCard[i].classList.toggle("blur-service-card")
            }
            for(let i = 0; i < gardensCard.length; i++){
                gardensCard[i].classList.toggle("blur-service-card")
            }
        } else if (this === lawnButton && gardensButton.classList.contains("active-service-button") && plantingButton.classList.contains("inactive-service-button") || this === lawnButton && gardensButton.classList.contains("inactive-service-button") && plantingButton.classList.contains("active-service-button")){
            for(let i = 0; i < lawnCard.length; i++){
                lawnCard[i].classList.toggle("blur-service-card")
            }
        } 
        if(this === plantingButton && gardensButton.classList.contains("inactive-service-button") && lawnButton.classList.contains("inactive-service-button")) {
            for(let i = 0; i < lawnCard.length; i++){
                lawnCard[i].classList.toggle("blur-service-card")
            }
            for(let i = 0; i < gardensCard.length; i++){
                gardensCard[i].classList.toggle("blur-service-card")
            }
        } else if (this === plantingButton && gardensButton.classList.contains("active-service-button") && lawnButton.classList.contains("inactive-service-button") || this === plantingButton && gardensButton.classList.contains("inactive-service-button") && lawnButton.classList.contains("active-service-button")){
            for(let i = 0; i < plantingCard.length; i++){
                plantingCard[i].classList.toggle("blur-service-card")
            }
        }
    }
}

// аккордион цены

let priceButton = document.querySelectorAll(".price-label")
let accordionPriceContent = document.querySelectorAll(".price-info-container")

for (let i = 0; i < priceButton.length; i++) {
  priceButton[i].addEventListener("click", showPriceInfo)
}

function showPriceInfo () {
    if(this === priceButton[0]){
        accordionPriceContent[0].classList.toggle("active-price-accordion")
        accordionPriceContent[1].classList.remove("active-price-accordion")
        accordionPriceContent[2].classList.remove("active-price-accordion")
    }
    if(this === priceButton[1]){
        accordionPriceContent[0].classList.remove("active-price-accordion")
        accordionPriceContent[1].classList.toggle("active-price-accordion")
        accordionPriceContent[2].classList.remove("active-price-accordion")
    }
    if(this === priceButton[2]){
        accordionPriceContent[0].classList.remove("active-price-accordion")
        accordionPriceContent[1].classList.remove("active-price-accordion")
        accordionPriceContent[2].classList.toggle("active-price-accordion")
    } 
}

// аккордион город

let accordionCity = document.querySelector(".select-city")
let cityContact = document.querySelectorAll(".city-contact")
let cityContactContent = document.querySelectorAll(".city-contact-content")
let accordionLabel = document.querySelector(".select-city-label")
let contactTitle = document.querySelector(".contactTitle")
let contactImg = document.querySelector(".contactImg")
accordionLabel.addEventListener("click", showCity)

for(let i = 0; i < cityContact.length; i++){
    cityContact[i].addEventListener("click", showCityInfo)
    cityContact[i].addEventListener("click", showCity)
}

function showCity () {
    contactTitle.classList.add("contactUsSmolerMargin")
    accordionCity.classList.toggle("active-city-accordion")
    if(this === accordionLabel){
        accordionLabel.innerHTML = "City"
        contactImg.classList.remove("contactImg-none")
        cityContactContent.forEach((city) => {
            city.classList.remove("active-city-contact-content")
        })
    }
}

function showCityInfo () {
    if(this === cityContact[0]){
        accordionLabel.innerHTML = ("Canandaigua, NY")
        cityContactContent[0].classList.toggle("active-city-contact-content")
    }
    if(this === cityContact[1]){
        accordionLabel.innerHTML = "New York City"
        cityContactContent[1].classList.toggle("active-city-contact-content")
    }
    if(this === cityContact[2]){
        accordionLabel.innerHTML = "Yonkers, NY"
        cityContactContent[2].classList.toggle("active-city-contact-content")
    }
    if(this === cityContact[3]){
        accordionLabel.innerHTML = "Sherrill, NY"
        cityContactContent[3].classList.toggle("active-city-contact-content")
    }
    cityContactContent.forEach((city) => {
        if(city.classList.contains("active-city-contact-content")){
            contactImg.classList.add("contactImg-none")
        }
    })
}