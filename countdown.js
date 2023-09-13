function calculateAge() {
    // Get the input date of birth
    const dobInput = document.getElementById("dob");
    const dobValue = new Date(dobInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const ageInMilliseconds = currentDate - dobValue;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const ageInMonths = ageInYears * 12;
    const ageInDays = ageInMilliseconds / (24 * 60 * 60 * 1000);

    // Update the HTML elements with the calculated values
    document.getElementById("years").textContent = Math.floor(ageInYears);
    document.getElementById("months").textContent = Math.floor(ageInMonths);
    document.getElementById("days").textContent = Math.floor(ageInDays);
}
