
let contacts = ["abdo", "amal", "amina", "badr", "brahim", "boutaina", "bahendan", "haitam"];


const contactListElement = document.querySelector('.contact-list');
const searchInputElement = document.querySelector('.search-input');
const addButton = document.querySelector('.add-btn');


function displayContacts() {
    contactListElement.innerHTML = ""; 
    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.textContent = contact;
        contactListElement.appendChild(listItem);
    });
}


function addContact() {
    const newContact = searchInputElement.value.trim();
    if (newContact) {
        contacts.push(newContact); 
        displayContacts(); 
    }
}


addButton.addEventListener('click', addContact);


displayContacts();
