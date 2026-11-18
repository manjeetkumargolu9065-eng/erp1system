```javascript
/* =====================================================
   MYERP ERP DASHBOARD JAVASCRIPT
   ===================================================== */

const body = document.body;

const themeBtn = document.getElementById("themeBtn");
const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.getElementById("sidebar");

const dashboardPage = document.getElementById("dashboardPage");
const dynamicPage = document.getElementById("dynamicPage");

const pageTitle = document.getElementById("pageTitle");

const dynamicTitle = document.getElementById("dynamicTitle");
const dynamicDescription = document.getElementById("dynamicDescription");
const dynamicIcon = document.getElementById("dynamicIcon");

const searchInput = document.getElementById("searchInput");


/* =====================================================
   ACCORDION MENU
   ===================================================== */

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(button => {

    button.addEventListener("click", () => {

        const group = button.parentElement;

        group.classList.toggle("open");
        button.classList.toggle("open");

    });

});


/* =====================================================
   PAGE DATA
   ===================================================== */

const pageData = {

    "Time Table": {
        icon: "📅",
        description: "View your complete semester timetable, class timings, rooms and faculty details."
    },

    "Course Outline": {
        icon: "📚",
        description: "View subject-wise course outline, units, topics and learning objectives."
    },

    "Attendance Status": {
        icon: "📊",
        description: "Check your overall attendance percentage and attendance status."
    },

    "Attendance Subject": {
        icon: "📈",
        description: "View subject-wise attendance records and attendance percentage."
    },

    "Assessment Subject": {
        icon: "📝",
        description: "View internal assessment details for all registered subjects."
    },

    "Assessment Marks": {
        icon: "🏆",
        description: "Check your assessment marks and internal examination performance."
    },

    "Assignment": {
        icon: "📋",
        description: "View pending and upcoming academic assignments."
    },

    "Assignments": {
        icon: "📚",
        description: "View all assignments submitted and assigned by faculty."
    },

    "Current Backlog": {
        icon: "⚠️",
        description: "Check your current backlog subjects and examination status."
    },

    "Exam Result": {
        icon: "🏆",
        description: "View semester examination results, SGPA and academic performance."
    },

    "Leave Application": {
        icon: "📄",
        description: "Apply for academic leave and check the status of submitted applications."
    },

    "Mentoring Questions": {
        icon: "💬",
        description: "View and answer questions related to student mentoring."
    },

    "My Grades": {
        icon: "🎓",
        description: "View subject grades and semester-wise academic performance."
    },

    "Online Class Record": {
        icon: "💻",
        description: "View records of your online classes and attendance."
    },

    "Online Test": {
        icon: "📝",
        description: "View available online tests and test history."
    },

    "Online Test Portal": {
        icon: "🌐",
        description: "Access your online examination and quiz portal."
    },

    "Plagiarism Check": {
        icon: "🔍",
        description: "Submit academic documents for plagiarism checking."
    },

    "Print Exam Form": {
        icon: "🖨️",
        description: "View and print your examination form."
    },

    "Registration Form": {
        icon: "📄",
        description: "Complete and manage your semester registration form."
    },

    "Special Leave": {
        icon: "📑",
        description: "Apply for special leave according to college rules."
    },

    "Student Progress": {
        icon: "📈",
        description: "Track your overall academic progress."
    },

    "Subject Choice": {
        icon: "📚",
        description: "Select and manage your available subjects."
    },

    "Zoom Online Class": {
        icon: "🎥",
        description: "Join scheduled Zoom online classes."
    },

    "Exam Schedule": {
        icon: "🗓️",
        description: "View upcoming university and semester examination schedules."
    },


    /* FEES */

    "Apply Bus Facility": {
        icon: "🚌",
        description: "Apply for college bus and transportation facilities."
    },

    "Fees Installment": {
        icon: "💰",
        description: "View installment amounts, due dates and payment status."
    },

    "Fees Receipts": {
        icon: "🧾",
        description: "Download and view previous fee payment receipts."
    },

    "Online Fee Transaction": {
        icon: "💳",
        description: "View online fee transaction history and payment status."
    },

    "Other Fee Print": {
        icon: "🖨️",
        description: "Print receipts for examination, library and other fees."
    },

    "Other Ledger": {
        icon: "📒",
        description: "View your additional fee ledger and transactions."
    },

    "Pay Fee Bus/Mess": {
        icon: "🚌",
        description: "Pay bus or hostel mess related fees online."
    },

    "Pay Fee Online": {
        icon: "💳",
        description: "Pay your tuition or semester fees online."
    },

    "Pay Other Fee": {
        icon: "💰",
        description: "Pay examination, workshop, revaluation and other fees."
    },

    "Student Ledger": {
        icon: "📒",
        description: "View total fees, paid amount and pending dues."
    },

    "Verify Transaction": {
        icon: "✓",
        description: "Verify a payment transaction if money was deducted but receipt was not generated."
    },


    /* GENERAL INFO */

    "ABCID Verification": {
        icon: "🪪",
        description: "Verify and manage your Academic Bank of Credits ID."
    },

    "Academic Calendar": {
        icon: "🗓️",
        description: "View academic events, holidays, examinations and important dates."
    },

    "Contact Details": {
        icon: "📞",
        description: "View and update your mobile number, email and address."
    },

    "Examination Pattern": {
        icon: "📝",
        description: "View examination pattern, rules and examination information."
    },

    "Grievance": {
        icon: "⚠️",
        description: "Submit a complaint or grievance to the college administration."
    },

    "News/Notices": {
        icon: "📢",
        description: "View latest college news, notices and circulars."
    },

    "Online Form Application": {
        icon: "📄",
        description: "Apply for available online college forms and services."
    },

    "Other Service Request": {
        icon: "📑",
        description: "Request services such as Bonafide, TC and other documents."
    },

    "Progression Diary": {
        icon: "📔",
        description: "View your daily academic progress and activities."
    },

    "Progression Index": {
        icon: "📊",
        description: "View semester-wise CGPA and academic progression."
    },

    "Question Bank": {
        icon: "📚",
        description: "Access subject-wise and unit-wise question banks."
    },

    "Question Paper": {
        icon: "📄",
        description: "Access previous year university and semester question papers."
    },

    "Submit Documents": {
        icon: "📤",
        description: "Upload required academic and identity documents."
    },

    "Syllabus": {
        icon: "📖",
        description: "View and download subject-wise syllabus."
    },

    "Today's Dispatch": {
        icon: "📨",
        description: "View today's academic dispatch and class-related information."
    },

    "Your Profile": {
        icon: "👤",
        description: "View your complete student profile and academic details."
    },


    /* PLACEMENTS */

    "Career Plan": {
        icon: "🎯",
        description: "View career planning and counselling information."
    },

    "Internship Permission": {
        icon: "📄",
        description: "Apply for internship permission and NOC."
    },

    "Placement News": {
        icon: "📢",
        description: "View placement-related news and notices."
    },

    "Placements": {
        icon: "💼",
        description: "View placement records and eligible companies."
    },

    "Placement Drive": {
        icon: "🏢",
        description: "View upcoming placement drives and apply for available opportunities."
    },

    "Update Profile 1": {
        icon: "👤",
        description: "Update the first section of your placement profile."
    },

    "Update Profile 2": {
        icon: "👤",
        description: "Update the second section of your placement profile."
    },

    "Update Resume": {
        icon: "📄",
        description: "Upload or update your latest resume."
    },

    "Upload SIP": {
        icon: "📤",
        description: "Upload SIP and internship-related documents."
    },


    /* HOSTEL */

    "Hostel Notification": {
        icon: "🏠",
        description: "View hostel rules, notices, allotment and notifications."
    },

    "Hostel/Bus Service": {
        icon: "🚌",
        description: "Apply for or check hostel and bus service information."
    },

    "Hostel Complaint": {
        icon: "🔧",
        description: "Submit complaints related to room, mess and maintenance."
    },

    "Hostel Registration": {
        icon: "🏠",
        description: "Register or renew your hostel accommodation."
    },


    /* TRANSPORTATION */

    "Apply Bus Stops": {
        icon: "🚍",
        description: "Apply for a new bus stop or request a bus stop change."
    },

    "Bus Routes": {
        icon: "🗺️",
        description: "View available college bus routes."
    },

    "Bus Stops": {
        icon: "🚏",
        description: "View bus stops and transportation timings."
    },


    /* LIBRARY */

    "Circulation Ledger": {
        icon: "📚",
        description: "Check issued books, return dates and borrowing history."
    },

    "Ebook Center": {
        icon: "📱",
        description: "Access digital books and online study material."
    },

    "Fine Records": {
        icon: "💰",
        description: "View library fines and late return records."
    },

    "Library Rules": {
        icon: "📖",
        description: "View library rules, conditions and timings."
    },

    "OPAC": {
        icon: "🔍",
        description: "Search books and resources available in the library."
    }

};


/* =====================================================
   OPEN PAGE
   ===================================================== */

function openPage(pageName) {

    dashboardPage.classList.add("hidden");
    dynamicPage.classList.remove("hidden");

    pageTitle.textContent = pageName;
    dynamicTitle.textContent = pageName;

    const data = pageData[pageName];

    if (data) {
        dynamicIcon.textContent = data.icon;
        dynamicDescription.textContent = data.description;
    } else {
        dynamicIcon.textContent = "📋";
        dynamicDescription.textContent =
            "This ERP module is ready for integration with your backend.";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    sidebar.classList.remove("show");
}


/* =====================================================
   SHOW DASHBOARD
   ===================================================== */

function showDashboard() {

    dynamicPage.classList.add("hidden");
    dashboardPage.classList.remove("hidden");

    pageTitle.textContent = "Dashboard";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   ALL MENU LINKS
   ===================================================== */

document.querySelectorAll("[data-page]").forEach(item => {

    item.addEventListener("click", function(e) {

        e.preventDefault();

        const page = this.getAttribute("data-page");

        if (page === "dashboard") {
            showDashboard();
            return;
        }

        openPage(page);

    });

});


/* =====================================================
   SEARCH
   ===================================================== */

searchInput.addEventListener("input", function() {

    const value = this.value.toLowerCase().trim();

    const links = document.querySelectorAll(".submenu a");
    const groups = document.querySelectorAll(".menu-group");

    if (value === "") {

        links.forEach(link => {
            link.style.display = "block";
        });

        return;
    }

    groups.forEach(group => {

        let found = false;

        group.querySelectorAll(".submenu a").forEach(link => {

            const text = link.textContent.toLowerCase();

            if (text.includes(value)) {
                link.style.display = "block";
                found = true;
            } else {
                link.style.display = "none";
            }

        });

        if (found) {
            group.classList.add("open");
        }

    });

});


/* =====================================================
   DARK / LIGHT MODE
   ===================================================== */

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

        localStorage.setItem("erpTheme", "dark");

    } else {

        themeBtn.textContent = "☾";

        localStorage.setItem("erpTheme", "light");

    }

});


/* LOAD SAVED THEME */

const savedTheme = localStorage.getItem("erpTheme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeBtn.textContent = "☀";
}


/* =====================================================
   MOBILE SIDEBAR
   ===================================================== */

mobileMenu.addEventListener("click", () => {

    sidebar.classList.toggle("show");

});


/* =====================================================
   LOGOUT
   ===================================================== */

document.getElementById("logoutBtn").addEventListener("click", () => {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {

        alert("Logout successful!");

        showDashboard();

    }

});


/* =====================================================
   DEMO MODULE BUTTON
   ===================================================== */

function showMessage() {

    alert(
        "This module is ready.\n\n" +
        "Next step: connect this frontend with Java + Spring Boot + MySQL backend."
    );

}


/* =====================================================
   KEYBOARD SHORTCUT
   ===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        sidebar.classList.remove("show");
    }

});
```
