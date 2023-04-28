var form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        alert('Email sent successfully');
        form.reset();
      } else {
        alert('Error sending email');
      }
    }
  };
  xhr.open('POST', '../api/send-email.php', true);
  xhr.send(formData);
});