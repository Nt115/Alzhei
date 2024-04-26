function signUp() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    if (username === "" || password === "" || phone === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Here you can add code to handle the sign-up process, such as sending data to a server or storing it locally.
    // For now, let's just log the data.
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Phone Number:", phone);
  
    // After sign up, redirect to the home page
    window.location.href = "home.html";
  }
  