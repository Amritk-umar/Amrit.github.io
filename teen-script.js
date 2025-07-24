// teen-script.js

// AOS Initialization
AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
    once: true,     // whether animation should happen only once - while scrolling down
});

// Skill Match Quiz Logic
function suggestProject() {
    const skill = document.getElementById("skill-select").value;
    let suggestion = "";

    switch (skill) {
        case "design":
            suggestion = "You'd excel at UI/UX design for mobile apps or creating stunning website layouts!";
            break;
        case "coding":
            suggestion = "How about building interactive web components or a small game using JavaScript and React?";
            break;
        case "writing":
            suggestion = "Consider writing engaging blog posts, SEO content, or compelling ad copy for startups!";
            break;
        case "marketing":
            suggestion = "Dive into social media campaigns, content strategy, or email marketing for brands!";
            break;
        case "video":
            suggestion = "Create short-form video content, explainer videos, or animated intros for businesses!";
            break;
        default:
            suggestion = "Select a skill to get a personalized project idea!";
    }
    document.getElementById("project-suggestion-result").innerText = suggestion;
}
