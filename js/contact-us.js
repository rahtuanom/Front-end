const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
	});
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});

function showSweetAlert(title, text, icon) {
	return Swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonColor: "#645cff",
	});
  }
  
  const API_URL = "https://back-end-production-1871.up.railway.app";
  
  document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contact");
  
	form.addEventListener("submit", async function (event) {
	  event.preventDefault();
  
	  const firstName = document.getElementById("firstName").value;
	  const lastName = document.getElementById("lastName").value; 
	  const email = document.getElementById("email").value;
	  const mobile = document.getElementById("mobile").value;
	  const message = document.getElementById("message").value;
	    
	  try {
		const response = await fetch(`${API_URL}/contact`, {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify({
			firstName,
			lastName,
			email,
			mobile,
			message,
		  }),
		});
  
		if (response.ok) {
		  const data = await response.json();
		  console.log("Success:", data);
		  showSweetAlert(
			"Sending Message Successful",
			"Thank  you ${firstName} ${lastName} your input will be useful for a brighter future!",
			"success"
		  );
		} else {
		  const errorData = await response.json();
		  console.error("Error:", errorData);
		  showSweetAlert(
			"Huh... it's seems Failed",
			"Oops! Something went wrong. Please try again later.",
			"error"
		  );
		}
	  } catch (error) {
		console.error("Error:", error);
		showSweetAlert(
		  "Huh... it's seems Failed",
		  "Oops! Something went wrong. Please try again later.",
		  "error"
		);
	  }
	});
  });
  
  
  function showSweetAlert(title, text, icon) {
	return Swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonColor: "#645cff",
	});
	}