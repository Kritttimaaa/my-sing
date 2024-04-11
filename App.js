
function validateLogin() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (email === '' || password === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
    }

    

    return true;
}


function validateSignup() {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    if (email === '' || password === '' || confirmPassword === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return false;
    }

    if (password !== confirmPassword) {
        alert('รหัสผ่านไม่ตรงกัน');
        return false;
    }

 

    return true;
}
