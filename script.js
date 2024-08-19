document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const firstName = document.getElementById('inputFname');
    const lastName = document.getElementById('inputLname');
    const email = document.getElementById('inputEmail');
    const phoneNumber = document.getElementById('inputPnumber');

    form.addEventListener('submit', function(event) {
        let valid = true;
        
       
        if (firstName.value.trim() === '') {
            alert('Please enter your first name.');
            valid = false;
        }

 
        if (lastName.value.trim() === '') {
            alert('Please enter your last name.');
            valid = false;
        }

      
        if (!validateEmail(email.value)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

      
        if (!validatePhoneNumber(phoneNumber.value)) {
            alert('Please enter a valid phone number.');
            valid = false;
        }

       
        if (!valid) {
            event.preventDefault();
        }
    });


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

   
    function validatePhoneNumber(phoneNumber) {
        const re = /^\d{10}$/;
        return re.test(phoneNumber);
    }
});
