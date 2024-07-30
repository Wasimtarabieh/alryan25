document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    
    emailjs.send('service_6oului3', 'template_577zftz', formObject)
        .then(function(response) {
            alert('تم إرسال النموذج بنجاح!');
            form.reset();
        }, function(error) {
            alert('حدث خطأ أثناء إرسال النموذج، الرجاء المحاولة مرة أخرى.');
        });
});
