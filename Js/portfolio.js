// document.addEventListener("DOMContentLoaded", function() {
//     const contentDiv = document.getElementById("content");
//     const links = {
//         "aboutme-link": "aboutme.html",
//         "projects-link": "projects.html",
//         "experiences-link": "experiences.html",
//         "contact-link": "contact.html",
//         "other-link": "other.html",
//     };

//     // Ngarkoni faqen fillestare
//     loadPage("aboutme.html");

//     // Regjistro ngjarjen e klikimit për secilën lidhje në navbar
//     for (let linkId in links) {
//         const link = document.getElementById(linkId);
//         link.addEventListener("click", function(event) {
//             event.preventDefault();
//             const page = links[linkId];
//             loadPage(page);
//         });
//     }

//     function loadPage(page) {
//         fetch(page)
//             .then(response => response.text())
//             .then(data => {
//                 contentDiv.innerHTML = data;
//             })
//             .catch(error => {
//                 console.error("Gabim në ngarkimin e faqes: " + error);
//             });
//     }
// });
