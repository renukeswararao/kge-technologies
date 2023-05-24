document.getElementById("submit-button-form").addEventListener("submit",function(event){
    event.preventDefault();
    validateFirstName();
});

function validateFirstName(){

    //first name validation

    let firstNameField=document.getElementById("multicol-first-name");
    let firstName=firstNameField.value.trim();
    let firstNameErrMsg=document.getElementById("first-name-error");
    var alphaRegex = /^[a-zA-Z]+$/;
    if(firstName===""){
        firstNameErrMsg.textContent="First Name can not be empty";
    }
    else if(!alphaRegex.test(firstName)){
        firstNameErrMsg.textContent="Invalid First Name. please enter characters only.";
    }
    else if(firstName.length>50){
        firstNameErrMsg.textContent="first name exceeds the maximum limit of 50 characters.";
    }
    else if(firstName.length<3){
        firstNameErrMsg.textContent="first name should be atleast 3 charactes long.";
    }
    else{
        firstNameErrMsg.textContent="";
    }

    //last Name validation

    let lastNameField=document.getElementById("multicol-last-name");
    let lastName=lastNameField.value.trim();
    let lastNameErrMsg=document.getElementById("last-name-error");
    if(lastName===""){
        lastNameErrMsg.textContent="Last Name can not be empty";
    }
    else if(!alphaRegex.test(lastName)){
        lastNameErrMsg.textContent="Invalid last Name. please enter characters only.";
    }
    else if(lastName.length>50){
        lastNameErrMsg.textContent="last name exceeds the maximum limit of 50 characters.";
    }
    else{
        lastNameErrMsg.textContent="";
    }


    //Mobile number validation 


    let mobileNumberField=document.getElementById("multicol-phone");
    let mobileNumber=mobileNumberField.value.trim();
    let mobileNumErrMsg=document.getElementById("mobile-number-error");
    let numericRegx=/^[0-9]+$/;
    if(mobileNumber===""){
        mobileNumErrMsg.textContent="Mobile Number is required";
    }
    else if(!numericRegx.test(mobileNumber)){
        mobileNumErrMsg.textContent="Invalid Mobile Number.Enter digits only";
    }
    else if(mobileNumber.lenght!==10){
        mobileNumErrMsg.textContent="Mobile number must be 10 digits long";
    }
    else if(mobileNumber==="0000000000"){
        mobileNumErrMsg.textContent="Invalid Mobile Number. Please enter a valid mobile number";
    }
    else{
        mobileNumErrMsg.textContent=""
    }


    // Whats app number validation 

    let whatsappNumberField=document.getElementById("multicol-whatsapp");
    let whatsappNumber=whatsappNumberField.value.trim();
    let whatsappNumErrMsg=document.getElementById("whatsapp-number-error");
    if(whatsappNumber===""){
        whatsappNumErrMsg.textContent="whatsapp Number is required";
    }
    else if(!numericRegx.test(whatsappNumber)){
        whatsappNumErrMsg.textContent="Invalid whatsapp Number.Enter digits only";
    }
    else if(whatsappNumber.length!==10){
        whatsappNumErrMsg.textContent="whatsapp number must be 10 digits long";
    }
    else if(whatsappNumber==="0000000000"){
        whatsappNumErrMsg.textContent="Invalid whatsapp Number. Please enter a valid mobile number";
    }
    else{
        whatsappNumErrMsg.textContent=""
    }   
    //validate pan number 

    let panNumberField=document.getElementById("multicol-pan-number");
    let panNumber=panNumberField.value.trim();
    let panNumErrMsg=document.getElementById("pan-number-error");
    let alphanumericRegex = /^[A-Za-z0-9]+$/;

    if(panNumber===""){
        panNumErrMsg.textContent="Pan Number is required";
    }
    else if(!alphanumericRegex.test(panNumber)){
        panNumErrMsg.textContent="Invalid Pan Number.please enter alphanumeric characters only";
    }
    else if(panNumber.length!==10){
        panNumErrMsg.textContent="pan number must be 10 digits long";
    }
    else{
        panNumErrMsg.textContent=""
    }   

    //validate aadhar number 

    let adharNumberField=document.getElementById("multicol-adhar-number");
    let adharNumber=adharNumberField.value.trim();
    let adharNumErrMsg=document.getElementById("adhar-number-error");

    if(adharNumber===""){
        adharNumErrMsg.textContent="adhar Number is required";
    }
    else if(!numericRegx.test(panNumber)){
        adharNumErrMsg.textContent="Invalid aadhar Number.please enter numeric characters only";
    }
    else if(panNumber.length !== 10){
        adharNumErrMsg.textContent="pan number must be 10 digits long";
    }
    else{
        adharNumErrMsg.textContent=""
    } 

}