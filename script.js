document.addEventListener("DOMContentLoaded", function() {
    var dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
        
            var targetId = item.getAttribute('id').replace('Link', '');
            var tabButton = document.getElementById('pills-' + targetId + '-tab');
            tabButton.click();
        });
    });
});

const foodItems = [
    "Sayote Chips",
    "Sili Chips"
];

function populateSuggestions(input) {
    const datalist = document.getElementById("foodSuggestions");
    datalist.innerHTML = ""; // Clear previous suggestions

    const filteredItems = foodItems.filter(item =>
      item.toLowerCase().includes(input.toLowerCase())
    );

    filteredItems.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      datalist.appendChild(option);
    });
}

const searchInput = document.getElementById("foodSearch");

searchInput.addEventListener("input", function(event) {
    const inputValue = event.target.value;
    populateSuggestions(inputValue);
});