document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    const formData = {
        student_id: document.getElementById('student-id').value,
        branch: document.getElementById('branch').value,
        first_name: document.getElementById('first-name').value,
        last_name: document.getElementById('last-name').value,
        id_number: document.getElementById('id-number').value,
        dob: document.getElementById('dob').value,
        workplace: document.getElementById('workplace').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value,
        mobile_phone: document.getElementById('mobile-phone').value,
        landline_phone: document.getElementById('landline-phone').value,
        education: document.getElementById('education').value,
        referrer: document.getElementById('referrer').value,
        course_start_date: document.getElementById('course-start-date').value,
        course_name: document.getElementById('course-name').value,
        tuition: document.getElementById('tuition').value,
        registration_fee: document.getElementById('registration-fee').value,
        total_fee: document.getElementById('total-fee').value,
        payment_method: document.getElementById('payment-method').value
    };

    emailjs.send(serviceID, templateID, formData)
        .then(response => {
            alert('تم إرسال النموذج بنجاح!');
        }, error => {
            alert('فشل في إرسال النموذج، الرجاء المحاولة مرة أخرى.');
        });
});
