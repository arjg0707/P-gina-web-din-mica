function validateForm(){
    
    var name=document.CVForm.name;
    var date=document.CVForm.date;
    var occupation=document.CVForm.occupation;
    var phone=document.CVForm.phone;
    var email=document.CVForm.email;
    var nationality=document.CVForm.nationality;
    var level=document.CVForm.level;
    var language=document.CVForm.language;
    var aptitudes=document.CVForm.aptitudes;
    var skills=document.CVForm.skills;
    var profile=document.CVForm.profile;
   
    if (name.value == "") {
        name.nextElementSibling.style.display = "block";
        name.style.border = "1px solid #f00";
        return false
        }
    else{
        name.nextElementSibling.style.display = "none";
        name.style.border = "1px solid transparent";
    }

    
    let regex = RegExp("^([0-2][0-9]|(3)[0-1])([\/])(((0)[0-9])|((1)[0-2]))([\/])([0-9]{4})$");
    if (!regex.test(date)) {
        date.nextElementSibling.style.display = "block";
        date.style.border = "1px solid #f00";
        return false
        }
    else{
        date.nextElementSibling.style.display = "none";
        date.style.border = "1px solid transparent";
    }
    
    if (occupation.value == "") {
        occupation.nextElementSibling.style.display = "block";
        occupation.style.border = "1px solid #f00";
        return false
        }
    else{
        occupation.nextElementSibling.style.display = "none";
        occupation.style.border = "1px solid transparent";
    }

    if (phone.value == "") {
        phone.nextElementSibling.style.display = "block";
        phone.style.border = "1px solid #f00";
        return false
        }
    else{
        phone.nextElementSibling.style.display = "none";
        phone.style.border = "1px solid transparent";
    }

    if (nationality.value == "") {
        nationality.nextElementSibling.style.display = "block";
        nationality.style.border = "1px solid #f00";
        return false
        }
    else{
        nationality.nextElementSibling.style.display = "none";
        nationality.style.border = "1px solid transparent";
    }

    if (level.value == "") {
        level.nextElementSibling.style.display = "block";
        level.style.border = "1px solid #f00";
        return false
        }
    else{
        level.nextElementSibling.style.display = "none";
        level.style.border = "1px solid transparent";
    }

    if (language.value == "") {
        language.nextElementSibling.style.display = "block";
        language.style.border = "1px solid #f00";
        return false
        }
    else{
        language.nextElementSibling.style.display = "none";
        language.style.border = "1px solid transparent";
    }

    if (aptitudes.value == "") {
        aptitudes.nextElementSibling.style.display = "block";
        aptitudes.style.border = "1px solid #f00";
        return false
        }
    else{
        aptitudes.nextElementSibling.style.display = "none";
        aptitudes.style.border = "1px solid transparent";
    }

    if (skills.value == "") {
        skills.nextElementSibling.style.display = "block";
        skills.style.border = "1px solid #f00";
        return false
        }
    else{
        skills.nextElementSibling.style.display = "none";
        skills.style.border = "1px solid transparent";
    }

    if (profile.value == "") {
        profile.nextElementSibling.style.display = "block";
        profile.style.border = "1px solid #f00";
        return false
        }
    else{
        profile.nextElementSibling.style.display = "none";
        profile.style.border = "1px solid transparent";
    }

    
}
