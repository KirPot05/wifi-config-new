const sidebar = document.getElementById("sidebar");

function handleHighlight() {
  if (sidebar === null || sidebar === undefined) return;

  const navLinks = document.querySelectorAll(".nav-link");
  for (const navLink of navLinks) {
    if (
      navLink.classList.contains("active") &&
      window.location.pathname !== navLink.getAttribute("href")
    ) {
      navLink.classList.remove("active");
      navLink.classList.add("text-white");
    } else if (window.location.pathname === navLink.getAttribute("href")) {
      navLink.classList.add("active");
    }
  }
}

handleHighlight();
