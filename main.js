// ============ Nav scroll state ============
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ============ Mobile menu ============
const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const toggleMenu = (open) => {
  const willOpen = open ?? !menu.classList.contains("open");
  menu.classList.toggle("open", willOpen);
  burger.classList.toggle("open", willOpen);
  burger.setAttribute("aria-expanded", String(willOpen));
  menu.setAttribute("aria-hidden", String(!willOpen));
  document.body.style.overflow = willOpen ? "hidden" : "";
};
burger.addEventListener("click", () => toggleMenu());
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

// ============ Careers — job card expand ============
document.querySelectorAll(".job__head").forEach((head) => {
  head.addEventListener("click", () => {
    const job = head.closest(".job");
    const open = job.classList.toggle("open");
    head.setAttribute("aria-expanded", String(open));
  });
});

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // gentle stagger for grouped elements
          const delay = entry.target.dataset.delay || (i % 4) * 70;
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// ============ Subtle parallax on hero blobs ============
const blobs = document.querySelectorAll(".hero .blob");
if (blobs.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      blobs.forEach((b, i) => {
        const speed = (i + 1) * 0.04;
        b.style.transform = `translateY(${y * speed}px)`;
      });
      ticking = false;
    });
  }, { passive: true });
}
