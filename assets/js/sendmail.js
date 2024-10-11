function sendMail() {
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create the mailto link
    var mailto_link = "mailto:osoriodav2@gmail.com" +
                      "?subject=" + encodeURIComponent(subject) +
                      "&body=" + 
                      "Name: " + encodeURIComponent(name) + "%0A" + 
                      "Email: " + encodeURIComponent(email) + "%0A" + 
                      "Message: " + encodeURIComponent(message);

    // Open the mailto link
    window.location.href = mailto_link;
}
