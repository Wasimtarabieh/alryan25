document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    
    const sendEmail = (attempt = 1) => {
        emailjs.send('service_6oului3', 'template_577zftz', formObject)
            .then(function(response) {
                alert('تم إرسال النموذج بنجاح!');
                form.reset();
            })
            .catch(function(error) {
                console.error(`خطأ أثناء إرسال النموذج (المحاولة ${attempt}):`, error);
                if (attempt < 3) {
                    // المحاولة مرة أخرى بعد فترة قصيرة
                    setTimeout(() => sendEmail(attempt + 1), 1000);
                } else {
                    alert('حدث خطأ أثناء إرسال النموذج، الرجاء المحاولة مرة أخرى. إذا استمرت المشكلة، يرجى الاتصال بالدعم الفني.');
                }
            });
    };

    sendEmail();
});
