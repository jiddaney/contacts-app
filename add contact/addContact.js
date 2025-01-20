const contactForm = document.querySelector('form');
const firstNameInput = document.getElementById('first name');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('inputEmail3');
const phoneInput = document.getElementById('inputPhoneNumber');
const citySelect = document.getElementById('inputCity');
const genderInputs = document.querySelectorAll('input[name="gridRadios"]');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get selected gender
    const selectedGender = Array.from(genderInputs).find(radio => radio.checked);
    
    // Create contact name
    const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
    
    // Get existing contacts or create empty array
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    // Add new contact
    contacts.push(fullName);
    
    // Save back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    // Reset form
    contactForm.reset();
    
    // Redirect to display page
    window.location.href = 'CONTACT.html';
});

// Handle cancel button
document.querySelector('button[type="reset"]').addEventListener('click', function() {
    window.location.href = 'CONTACT.html';
});