//Validation code..............

function validate(){

    let f = false;
    // name field

    let name=$('.name-field').val();

    if(name=='' || name==undefined){

        $('.name-field-msg')
        .html('Name is Required !!')
        .addClass("text-danger");
        f=false;

    }else{
        $('.name-field-msg')
        .html('Ok')
        .removeClass("text-danger")
        .addClass("text-success");
        f=true;
    }

    //email ka validation

    let email=$('.email-field').val();
    let exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email=='' || email==undefined){
        $('.email-field-msg')
        .html('Email is Required !!')
        .addClass("text-danger");
        f=false;

    }else if(exp.test(email)==false){
        $('.email-field-msg')
        .html('Invalid Email Format')
        .addClass("text-danger");

    }else{
        $('.email-field-msg')
        .html('Ok')
        .removeClass("text-danger")
        .addClass("text-success");
        f=true;
    }

    //Mobile No 
    let phone=$('.phone-field').val();
    let phoneExp= /^\d{10}$/;

    if(phone=='' || phone==undefined){
        $('.phone-field-msg')
        .html('Mobile No is Required !!')
        .addClass("text-danger");
        f=false;

    }else if(phoneExp.test(phone)==false){
        $('.phone-field-msg')
        .html('Invalid Mobile No Format')
        .addClass("text-danger");

    }else{
        $('.phone-field-msg')
        .html('Ok')
        .removeClass("text-danger")
        .addClass("text-success");
        f=true;
    }

    //Password Validation
    
    // To check a password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter

    let password=$('.password-field').val();
    let passwordExp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(password=='' || password==undefined){
        $('.password-field-msg')
        .html('Password is Required !!')
        .addClass("text-danger");
        f=false;

    }else if(passwordExp.test(password)==false){
        $('.password-field-msg')
        .html('Invalid Password Format')
        .addClass("text-danger");
        f=false;

    }else{
        $('.password-field-msg')
        .html('Ok')
        .removeClass("text-danger")
        .addClass("text-success");
        f=true;
    }


   f=false;
    return f;
}