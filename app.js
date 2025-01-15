alert(`This site typically utilizes Objects and built in functions such as Alert. This was done because I've been trying to learn object oriented programming and this acts by storing the info typed in the input in an object - {}`)

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const register = document.getElementById('register');

const infoBox = {
    construction: () => {
        this.fName = firstName.value;
        this.lName = lastName.value;
        this.mail = email.value;

        if(this.fName && this.lName && this.mail){
            alert(`
            First Name: ${this.fName}
            Last Name: ${this.lName}
            Email.Name: ${this.mail}
    
            `)
        }else{
            alert('🍟 No fries in the box!')
        }
    }
}



register.onclick = infoBox.construction;
