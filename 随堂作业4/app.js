const cardsData = [
    {
        title: "总用户数",
        value: "12,847",
        change: "+12.5%",
        changeType: "positive",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>`,
        chartData: [40, 55, 35, 70, 50, 80, 65, 90, 75, 85, 60, 95]
    },
    {
        title: "总收入",
        value: "¥284,520",
        change: "+8.2%",
        changeType: "positive",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>`,
        chartData: [30, 45, 60, 40, 75, 55, 80, 65, 90, 70, 85, 95]
    },
    {
        title: "订单数量",
        value: "3,462",
        change: "-2.4%",
        changeType: "negative",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>`,
        chartData: [70, 60, 80, 50, 65, 45, 55, 70, 40, 60, 50, 45]
    },
    {
        title: "活跃用户",
        value: "8,291",
        change: "+5.7%",
        changeType: "positive",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>`,
        chartData: [50, 65, 45, 80, 55, 70, 60, 85, 75, 90, 65, 80]
    },
    {
        title: "转化率",
        value: "24.8%",
        change: "+1.2%",
        changeType: "positive",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
        </svg>`,
        chartData: [20, 35, 25, 50, 40, 60, 45, 70, 55, 65, 50, 75]
    },
    {
        title: "客户满意度",
        value: "96.2%",
        change: "+0.8%",
        changeType: "positive",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>`,
        chartData: [85, 90, 88, 92, 90, 95, 93, 96, 94, 97, 95, 98]
    }
];

function renderCards() {
    const dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = "";

    cardsData.forEach((card) => {
        const section = document.createElement("section");
        section.className = "card";

        const chartBars = card.chartData
            .map(
                (val) =>
                    `<div class="bar" style="height: ${val}%"></div>`
            )
            .join("");

        section.innerHTML = `
            <h2>${card.icon}${card.title}</h2>
            <div class="value">${card.value}</div>
            <div class="change ${card.changeType}">${card.change}</div>
            <div class="chart-bar">${chartBars}</div>
        `;

        dashboard.appendChild(section);
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderCards();
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
});