//firebase config can vary depending on what the firebase google provided.
const firebaseConfig = {
    // apiKey: "AIzaSyC60leqI8Sllw7EvSOeuOFizP7jipbYfCs",
    // authDomain: "contactform-d0167.firebaseapp.com",
    // databaseURL: "https://contactform-d0167-default-rtdb.firebaseio.com",
    // projectId: "contactform-d0167",
    // storageBucket: "contactform-d0167.appspot.com",
    // messagingSenderId: "866935346696",
    // appId: "1:866935346696:web:521e9a68a94e3c4a7763bd" 
  };
  
    // initialize firebase
  firebase.initializeApp(firebaseConfig);
    
    // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
    
  document.getElementById("contactForm").addEventListener("submit", submitForm);
    
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("name");
    var email = getElementVal("emailid");
    var pass = getElementVal("pass");
    var conpass = getElementVal("conpass");
    var msgContent = getElementVal("msgContent");
    
    saveMessages(name, email, pass, conpass, msgContent);
  }
  const saveMessages = (name, email, pass, conpass, msgContent) => {
    var newContactForm = contactFormDB.push();
      newContactForm.set({
        name: name,
        email: email,
        pass : pass,
        conpass : conpass,
        msgContent: msgContent,
    });
  };
  const getElementVal = (id) => {
      return document.getElementById(id).value;
  };