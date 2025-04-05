document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const userInput = document.getElementById("user-input");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStats = document.querySelector(".stats-cards");

    async function fetchUserDetails(username) {
        if (!searchButton) {
            console.error("Search button not found!");
            return;
        }

        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);

            if (!response.ok) {
                throw new Error(`Unable to fetch user details: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Fetched Data:", data);

            if (data.status !== "success") {
                throw new Error("User not found or API issue.");
            }

            displayUserData(data);
        } catch (error) {
            console.error("Error fetching user details:", error.message);
            alert("Failed to fetch data. Please check username or try again later.");
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, labelElement, circleElement) {
        if (!labelElement || !circleElement) return;

        if (total === 0) return;
        const progress = (solved / total) * 100;

        circleElement.style.background = `conic-gradient(lime ${progress}%, #192619 ${progress}%)`;
        labelElement.textContent = `${solved}/${total}`;
    }

    function displayUserData(data) {
        const totalEasy = data.totalEasy || 1;
        const totalMedium = data.totalMedium || 1;
        const totalHard = data.totalHard || 1;

        updateProgress(data.easySolved, totalEasy, easyLabel, document.getElementById("easy-circle"));
        updateProgress(data.mediumSolved, totalMedium, mediumLabel, document.getElementById("medium-circle"));
        updateProgress(data.hardSolved, totalHard, hardLabel, document.getElementById("hard-circle"));

        // **Fixing card data population**
        const cardData = [
            { label: "Overall Submission", value: data.totalSolved },
            { label: "Total Easy", value: data.easySolved },
            { label: "Total Medium", value: data.mediumSolved },
            { label: "Total Hard", value: data.hardSolved },
        ];

        cardStats.innerHTML = cardData.map((card) => {
            return `
            <div class="card">
            <h3>${card.label}</h3>
            <p>${card.value}</p>
            </div>
            `;
        }).join("");

        // Chart Data (If you're planning to add a chart)
        const chartData = {
            labels: ["Easy", "Medium", "Hard"],
            datasets: [
                {
                    label: "Solved",
                    data: [data.easySolved, data.mediumSolved, data.hardSolved],
                    backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                },
                {
                    label: "Total",
                    data: [data.totalEasy, data.totalMedium, data.totalHard],
                    backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
                },
            ],
        };

        console.log("Chart Data:", chartData);
    }

    searchButton.addEventListener("click", function () {
        const username = userInput.value.trim();
        if (username) {
            fetchUserDetails(username);
        } else {
            alert("Please enter a username");
        }
    });
});
