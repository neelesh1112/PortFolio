




/* ===== Typping Animiatiom ====== */
var typeData = new Typed(".typing", {
    strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
        "React Developer",
        "MERN Stack Developer "
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});





// var typed = new Typed(".typing", {
//     strings: [" ", "Web Developer", "React Developer","MERN Stack", "Competitive Coder", "Software Enginner", "Web Designer"],
//     typSpeed: 100,
//     BackSpeed: 60,
//     backDelay: 1000,
//     loop: true
// })

/* ========== Aside =========== */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click",()=>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
}



