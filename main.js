

function addUser()
{
   var  username = document.getElementById("myname").value;
   var password = document.getElementById("password").value;

   localStorage.setItem("myname", username);
      localStorage.setItem("password", password);

      if(username === "admin" && password === "password123") {
        window.location.href = "nextpage.html"; // Redirect to the next page
    } else {
        alert("Invalid username or password!");
    }
   
}


