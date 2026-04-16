const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target);
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
}, {})

const todoElements = document.querySelectorAll(".todo")
todoElements.forEach(el => observer.observe(el))


function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    const title = section.querySelector("h1");
    if (!title) return;

    const topbar = document.querySelector(".topbar");
    //const offset = topbar ? topbar.offsetHeight + 50 : 120;
const offset = document.querySelector(".topbar").offsetHeight + 80;

    section.classList.add("show");

    requestAnimationFrame(() => {
        const y = title.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });
    });
}


function openContact() {
    document.getElementById("contactModal").style.display = "block";
}

function closeContact() {
    document.getElementById("contactModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("contactModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}