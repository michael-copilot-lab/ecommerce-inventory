function formatCurrency(amount, currencyCode) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode
    }).format(amount);
}

// Function to validate an employee ID.
// Format: 2 uppercase letters, followed by a hyphen, followed by 5 digits.
// Example valid: AB-12345
// Example invalid: aB-1234, ABC-12345
// Returns boolean.

function validate(employeeId) {
    const regex = /^[A-Z]{2}-\d{5}$/;
    return regex.test(employeeId);
}