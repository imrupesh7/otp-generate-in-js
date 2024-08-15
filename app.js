
const renderOtp = () => { 
    return Math.floor(1000 + Math.random() * 9000) 
};


const otpp= document.getElementById("otp");
const clickme = document.getElementById("generatebtn");
const validatenumber= document.getElementById("validatenumber");
const validatebtn = document.getElementById("validatebtn");
const validatedata = document.getElementById("validatedata");
const validateotp = document.querySelector(".validateotp");


const updateOtp = () => {
    const otpCheck = renderOtp();
    document.getElementById("otp").innerHTML = otpCheck;
    return otpCheck;
};

let currentOtp;

clickme.addEventListener("click", () => {
    currentOtp  = updateOtp();
    console.log("Your 4 Digit OTP is: " + currentOtp);
    validateotp.style.display="block";
});

const verify = (userEnteredOtp, currentOtp) => {
    if (userEnteredOtp == currentOtp) {
        validatedata.innerHTML="You OTP is right";
        validatedata.style.color="green";
        validatedata.style.border="2px dashed green";
        validatedata.style.display="block";
    } else {
       validatedata.innerHTML="You entered the wrong value. Please try again.";
       validatedata.style.color="red";
       validatedata.style.border="2px dashed red";
       validatedata.style.display="block";
    }
};

validatebtn.addEventListener("click", () => {
    const userEnteredOtp = validatenumber.value;
    verify(userEnteredOtp, currentOtp); 
  
});



function numbervalidate(inputField) {
    if (inputField.value.length <= 4 && /^\d+$/.test(inputField.value)) {
        inputField.style.border = "2px solid green";

    } else {
        alert("Please enter a valid 4 Digit Number");
        inputField.style.border = "2px solid red";
        inputField.value = "";
    }
}