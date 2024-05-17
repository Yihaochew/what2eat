document.getElementById('searchButton').addEventListener('click', function() {
    const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked')).map(cb => cb.value);
    const selectedAppliances = Array.from(document.querySelectorAll('input[name="appliance"]:checked')).map(cb => cb.value);
    const selectedMethods = Array.from(document.querySelectorAll('input[name="method"]:checked')).map(cb => cb.value);

    const searchQuery = {
        ingredients: selectedIngredients,
        appliances: selectedAppliances,
        methods: selectedMethods
    };

    // Replace 'https://api.example.com/search' with the actual API endpoint
    fetch('https://api.example.com/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchQuery)
    })
    .then(response => response.json())
    .then(data => {
        // Process the data received from the API
        console.log(data);
        // Display the data to the user (for example, in a new section or a popup)
    })
    .catch(error => console.error('Error:', error));
});