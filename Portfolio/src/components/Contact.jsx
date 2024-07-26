const Contact = () => {

    
    const handleSubmit = ()=> {
        
        const uname = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        

        const objToSend = {
            name: uname.value,
            email: email.value,
            message: message.value
        };

            console.log(objToSend);
        
        uname.value = '';
        email.value = '';
        message.value = '';

    }

    return(
        <>
        <p>Send me a message!</p>
        <form action="">
        <div className="contactinputs">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="boxedtext"  />
        </div>
        <div className="contactinputs">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="boxedtext" />
        </div>
        <div className="contactinputs">
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message" className="boxedtext" />
        </div>
        </form>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Contact;