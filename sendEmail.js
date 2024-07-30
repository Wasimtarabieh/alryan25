<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مركز التدريب المهني الريان</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init("k3sFmPycB9ilBaUgQ");
        })();
    </script>
</head>
<body>
    <div class="container">
        <div class="registration-form">
            <div class="header">
                <img src="https://assets.codepen.io/12011409/logo-01.png" alt="شعار المركز" class="logo">
                <h1>مركز التدريب المهني الريان</h1>
            </div>
            <h2>نموذج التسجيل</h2>
            <form id="registrationForm">
                <div class="form-group">
                    <label for="student-id">رقم الطالب:</label>
                    <input type="text" id="student-id" name="student_id" required>
                </div>
                <div class="form-group">
                    <label for="branch">الفرع:</label>
                    <input type="text" id="branch" name="branch" required>
                </div>
                <div class="form-group">
                    <label for="first-name">الاسم الأول:</label>
                    <input type="text" id="first-name" name="first_name" required>
                </div>
                <div class="form-group">
                    <label for="last-name">الاسم الأخير:</label>
                    <input type="text" id="last-name" name="last_name" required>
                </div>
                <div class="form-group">
                    <label for="id-number">رقم الهوية:</label>
                    <input type="text" id="id-number" name="id_number" required>
                </div>
                <div class="form-group">
                    <label for="dob">تاريخ الميلاد:</label>
                    <input type="date" id="dob" name="dob" required>
                </div>
                <div class="form-group">
                    <label for="workplace">مكان العمل:</label>
                    <input type="text" id="workplace" name="workplace" required>
                </div>
                <div class="form-group">
                    <label for="address">العنوان:</label>
                    <input type="text" id="address" name="address" required>
                </div>
                <div class="form-group">
                    <label for="email">البريد الإلكتروني:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="mobile-phone">رقم الهاتف المحمول:</label>
                    <input type="tel" id="mobile-phone" name="mobile_phone" required>
                </div>
                <div class="form-group">
                    <label for="landline-phone">رقم الهاتف الأرضي:</label>
                    <input type="tel" id="landline-phone" name="landline_phone">
                </div>
                <div class="form-group">
                    <label for="education">المستوى التعليمي:</label>
                    <input type="text" id="education" name="education" required>
                </div>
                <div class="form-group">
                    <label for="referrer">مصدر الإحالة:</label>
                    <input type="text" id="referrer" name="referrer">
                </div>
                <div class="form-group">
                    <label for="course-start-date">تاريخ البدء المتوقع:</label>
                    <input type="date" id="course-start-date" name="course_start_date" required>
                </div>
                <div class="form-group">
                    <label for="course-name">اسم الدورة:</label>
                    <input type="text" id="course-name" name="course_name" required>
                </div>
                <div class="form-group">
                    <label for="tuition">رسوم التعليم:</label>
                    <input type="text" id="tuition" name="tuition" required>
                </div>
                <div class="form-group">
                    <label for="registration-fee">رسوم التسجيل:</label>
                    <input type="text" id="registration-fee" name="registration_fee" required>
                </div>
                <div class="form-group">
                    <label for="total-fee">الإجمالي مع الضريبة:</label>
                    <input type="text" id="total-fee" name="total_fee" required>
                </div>
                <div class="form-group">
                    <label for="payment-method">طريقة الدفع / التعليقات:</label>
                    <textarea id="payment-method" name="payment_method" rows="4" required></textarea>
                </div>
                <button type="submit">إرسال</button>
            </form>
        </div>
    </div>
    <script src="sendEmail.js"></script>
</body>
</html>
