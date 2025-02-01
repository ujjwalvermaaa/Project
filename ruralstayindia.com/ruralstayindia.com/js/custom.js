

// custom.js

// Section 1: Search Results Persistence
function saveSearchResults(results) {
    sessionStorage.setItem('searchResults', JSON.stringify(results));
}

window.onload = function () {
    const savedResults = sessionStorage.getItem('searchResults');
    if (savedResults) {
        const results = JSON.parse(savedResults);
        displaySearchResults(results); // Function to display results on the page
    }
};

// Section 2: Calendar Interaction
document.getElementById('calendar-icon').addEventListener('click', function () {
    document.getElementById('date-input').focus();
});

// Section 3: Filter Functionality
function applyFilters(filters) {
    const properties = getAllProperties(); // Fetch all properties
    const filteredProperties = properties.filter(property => {
        return filters.every(filter => property[filter.key] === filter.value);
    });
    displayProperties(filteredProperties); // Function to display filtered properties
}

// Section 4: Sorting Functionality
function sortProperties(sortBy) {
    const properties = getAllProperties(); // Fetch all properties
    properties.sort((a, b) => {
        if (sortBy === 'high-to-low') return b.price - a.price;
        if (sortBy === 'low-to-high') return a.price - b.price;
        return 0;
    });
    displayProperties(properties); // Function to display sorted properties
}

// Section 5: Total Cost Calculation
function calculateTotalCost(days, pricePerDay) {
    return days * pricePerDay;
}

// Update the total cost display
document.getElementById('total-cost').textContent = calculateTotalCost(days, pricePerDay);

// Section 6: Property Price Visibility
document.querySelectorAll('.property-price').forEach(priceElement => {
    if (!priceElement.textContent.trim()) {
        priceElement.textContent = 'Price: ₹5000 per night'; // Default price
    }
});