function sendMail() {
    // Get form values
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create the mailto link
    var mailto_link = "mailto:osoriodav2@gmail.com" +
                      "?subject=" + encodeURIComponent(subject) +
                      "&body=" + 
                      encodeURIComponent(message);

    // Open the mailto link
    window.location.href = mailto_link;
}
