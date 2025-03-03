// Wait for the page to load
window.onload = function () {
    document.getElementById("searchInput").addEventListener("keyup", performSearch);
};

// Mock data: Pet Listings
const petListings = [
    { name: "Bella", breed: "Golden Retriever", age: "2 years" },
    { name: "Max", breed: "Labrador Retriever", age: "3 years" },
    { name: "Milo", breed: "Siberian Husky", age: "1.5 years" },
    { name: "Luna", breed: "Persian Cat", age: "1 year" },
    { name: "Charlie", breed: "Beagle", age: "4 years" },
    { name: "Rocky", breed: "German Shepherd", age: "2.5 years" },
    { name: "Daisy", breed: "Poodle", age: "3 years" },
    { name: "Leo", breed: "Maine Coon", age: "2 years" }
];

function performSearch() {
    let query = document.getElementById("searchInput").value;
    
    // Ensure query is not null or undefined
    if (!query) return;

    query = query.toLowerCase();
    let resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (query.trim() === "") {
        resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    let filteredResults = petListings.filter(pet => 
        pet.name.toLowerCase().includes(query) || 
        pet.breed.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = "<p>No matching pets found.</p>";
        return;
    }

    filteredResults.forEach(pet => {
        let div = document.createElement("div");
        div.classList.add("pet-card");
        div.innerHTML = `<strong>${pet.name}</strong> - ${pet.breed} (${pet.age})`;
        resultsContainer.appendChild(div);
    });
}
