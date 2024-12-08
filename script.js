const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
})

anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });