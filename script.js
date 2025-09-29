const akanForm = document.getElementById("akanForm");
const resultDiv = document.getElementById("result");

const maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

akanForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const dateInput = document.getElementById("date").value;
  const gender = document.getElementById("gender").value;

  if (!dateInput || !gender) {
    alert("⚠️ Please fill in all fields.");
    return;
  }

  const birthDate = new Date(dateInput);

  if (isNaN(birthDate.getTime())) {
    alert("⚠️ Invalid date. Please enter a valid birthdate.");
    return;
  }

  const day = birthDate.getDay(); // 0 = Sunday, 6 = Saturday
  let akanName = "";

  if (gender === "male") {
    akanName = maleNames[day];
  } else if (gender === "female") {
    akanName = femaleNames[day];
  }

  resultDiv.innerHTML = `🎉 You were born on <b>${daysOfWeek[day]}</b>. Your Akan name is <b>${akanName}</b>!`;

  // Clear form after result
  akanForm.reset();
});
