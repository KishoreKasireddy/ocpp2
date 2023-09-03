document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("command-form");
  const responseDiv = document.getElementById("response");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const url = "php.php"; // Change to the actual API endpoint

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        responseDiv.textContent = data;
      })
      .catch((error) => {
        responseDiv.textContent = "An error occurred.";
        console.error(error);
      });
  });
});
