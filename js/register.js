function registerValidation() {
    var fullname = document.getElementById('fullname')
    var password = document.getElementById('password');
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var email = document.getElementById('email')
    var phone = document.getElementById('phone');
    var address = document.getElementById('address')
    var skinType = document.getElementById('skinType');
    var aggrement = document.getElementById('aggrement');
    if (nameValidation(fullname, 5, 30)) {
        if (passValidation(password, 7, 20)) {
            if (genderValidation(male, female)) {
                if (emailValidation(email)) {
                    if (phoneValidation(phone, 10, 15)) {
                        if (addressValidation(address, 10, 50)) {
                            if(skinTypeValidation(skinType,5,20)) {
                                if(aggrementValidation(aggrement)) {

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function nameValidation(fullname, mx, my) {
    var fullnameLen = fullname.value.length;
    if (fullnameLen == 0 || fullnameLen >= my || fullnameLen < mx) {
        alert("Name Field Should Not be Empty / Length be Between " + mx + " to " + my);
        return false;
    }
    return true;
}

function passValidation(password, mx, my) {
    var passLen = password.value.length;
    if (passLen == 0 || passLen >= my || passLen < mx) {
        alert("Password Field Should Not be Empty / Length be Between " + mx + " to " + my);
        return false;
    }
    return true;
}

function genderValidation(male, female) {
    x = 0;

    if (male.checked) {
        x++;
    }
    if (female.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Your Gender to Male/Female');
        return false;
    }
    return true;
}

function emailValidation(email) {
    console.log('aa');
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailFormat)) {
        return true;
    } else if (email.value.length == 0) {
        alert("You Have to Filled the Email Field")
        return false;
    } else {
        alert("You Have Entered an Invalid Email Address!");
        return false;
    }
}

function phoneValidation(phone, mx, my) {
    var format = /^[0-9]+$/;
    var phoneLen = phone.value.length;
    if (phone.value.match(format) && phoneLen >= 10 && phoneLen < 15) {
        return true;
    } else if (phoneLen == 0) {
        alert("Phone Field Should Not be Empty");
        return false;
    }
    else if (!phone.value.match(format)) {
        alert('Phone Field Must Have Numeric Characters Only');
        return false;
    } else if (phoneLen >= my || phoneLen < mx) {
        alert("Phone Field Should Have Length Between " + mx + " to " + my)
        return false;
    }
}

function addressValidation(address, mx, my) {
    var addressLen = address.value.length;
    if (addressLen == 0 || addressLen >= my || addressLen < mx) {
        alert("Address Field Should Not be Empty / Length be Between " + mx + " to " + my);
        return false;
    }
    return true;
}

function skinTypeValidation(skinType, mx, my) {
    var skinTypeLen = skinType.value.length;
    if(skinTypeLen == 0 || skinTypeLen >= my || skinTypeLen < mx) {
        alert("Skin Type Field Should Not be Empty / Length be Between " + mx + " to " + my);
        return false;
    }
    return true;
}

function aggrementValidation(aggrement){
    x = 0;
    if(aggrement.checked){
        x++;
    }
    if( x == 0){
        alert("You Have to Aggree With Our Term and Conditions to Continue");
        return false;
    }
    else {
    alert('Your Registration Already Submitted');
    
    window.location.href = "home.html";
    return true;
    }
}