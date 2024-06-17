let formData = {};

let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputs = document.querySelectorAll(".inpval");
  formData = {
    name: inputs[0].value,
    number: inputs[1].value,
    email: inputs[2].value,
    companyName: inputs[3].value,
    message: inputs[4].value,
  };
    sendDta();
});
function sendDta() {
  emailjs
    .send("service_f5upt5c", "template_i1a1ztn", formData)
    .then((response) => {
      alert(
        "Your email was send successfully to the Brijendra Tiwari",
        response
      );
    })
    .catch((erorr) => {
      alert("Message not send to the host due to ", erorr);
    });
}
