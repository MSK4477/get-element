function foo() {
    // Get the values of the form fields
    const firstName = document.getElementById("firstname").value;
    const middleName = document.getElementById("middlename").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;

    // Log the form details to the console
    console.log("First Name: " + firstName);
    console.log("Middle Name: " + middleName);
    console.log("Last Name: " + lastName);
    console.log("Email:"+email );
  }