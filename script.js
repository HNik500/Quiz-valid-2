const validateForm = (e) =>{
    e.preventDefault()
    console.log(e);
    // console.log(e.target.fname.value)
    let firstName= document.contact.fname.value
    let lastName= document.contact.lname.value
    let email= document.contact.Myemail.value
    let Qtype= document.contact.Qtype.value
    let message= document.contact.message.value
    let op0= document.contact.op0.value
    let error = false
     if (firstName.length ==0) {
        document.querySelector('.nreq').style.display ="block"
        console.log("i have shown");
        error = true
    }
    
    
    if (!error) {
        document.querySelector('#success').style.display ="flex"
        e.target.reset()
    }
}