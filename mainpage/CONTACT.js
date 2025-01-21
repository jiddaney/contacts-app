let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
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
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Save to localStorage
        displayContacts(); 
    }
}

addButton.addEventListener('click', addContact);
displayContacts();