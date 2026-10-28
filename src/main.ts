import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { db } from "./firebase/firebase";
import { collection, getDocs } from "firebase/firestore";



import kripaluji from './assets/kripaluji.jpg.jpeg';
import img1 from './assets/IMG-20260621-WA0105.jpg.jpeg';
import img2 from './assets/IMG-20260621-WA0107.jpg.jpeg';
import img3 from './assets/IMG-20260625-WA0015.jpg.jpeg';
import img4 from './assets/IMG-20260625-WA0017.jpg.jpeg';
import img5 from './assets/IMG-20260625-WA0019.jpg.jpeg';
import img6 from './assets/IMG-20260625-WA0021.jpg.jpeg';
import img7 from './assets/IMG-20260625-WA0024.jpg.jpeg';
import img8 from './assets/IMG-20260705-WA0030.jpg.jpeg';
import img9 from './assets/IMG-20260705-WA0036.jpg.jpeg';
import img10 from './assets/IMG-20260705-WA0038.jpg.jpeg';

import whoAmI from './assets/who-am-i.jpg.jpeg';
import prashnottari2 from './assets/prashnottari-2.jpg.jpeg';
import bhaktirasSindhu from './assets/bhaktiras-sindhu.jpg.jpeg';
import brajRasMadhuri from './assets/braj-ras-madhuri.jpg.jpeg';
import premRasMadira from './assets/prem-ras-madira.jpg.jpeg';

const book1 = whoAmI;
const book2 = prashnottari2;
const book3 = bhaktirasSindhu;
const book4 = brajRasMadhuri;
const book5 = premRasMadira;
AOS.init({
  duration: 1000,
  once: true,
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<nav id="navbar" class="navbar">
  <div class="logo">&#128367; Radha Govind Dham</div>
<div class="menu-toggle" id="menu-toggle">&#9776;</div>
  <ul class="nav-links">
    <li><a href="#">Home</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#shop">Book Shop</a></li>
    <li><a href="#contact">Contact</a></li>
  <li><a href="#" id="adminLoginBtn">Admin</a></li>
    </ul>
</nav>
<header class="hero">
<div class="hero-content">
  <h1>&#128330; Radha Govind Dham</h1>
  <p>Welcome to the Divine Home of Shri Radha Krishna</p>

  <a href="#gallery" class="btn">&#128247; View Gallery</a>
  <a href="#shop" class="btn">&#128218; Book Shop</a>
  </div>
</header>
<section class="live-kirtan" 
data-aos="fade-right">
<h2><span class="live-badge">&#128308; LIVE</span> KIRTAN</h2>
<p><strong>Every Sunday</strong></p>

<p>8:30 AM - 11:30 AM</p>

<p>Join the divine Hari Naam Sankirtan live from Radha Govind Dham.</p>
<div class="live-video">
  <iframe
    width="100%"
    height="500"
    src="https://www.youtube.com/embed/Npwk2G18S3g"
    title="Live Kirtan"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>

</section>
<section id="about" class="about"
data-aos="fade-up">
<div class="container">
    <h2>&#128367; About Radha Govind Dham</h2>

    <p>
      Radha Govind Dham, Kanpur is a sacred temple dedicated to the divine
      love of Shri Radha Krishna. It is a peaceful place where devotees gather
      for darshan, bhajan, satsang and spiritual learning. The temple inspires
      every visitor to experience devotion, inner peace and selfless service.
    </p>

<div class="maharaj-card">
    <img src="${kripaluji}"
     alt="Jagadguru Shri Kripalu Ji Maharaj">
</div>

<h3>Jagadguru Shri Kripalu Ji Maharaj</h3>

    <p>
      Jagadguru Shri Kripalu Ji Maharaj was one of the greatest spiritual
      teachers of modern India. He dedicated his life to spreading the message
      of divine love for Shri Radha Krishna. Through his teachings, devotional
      songs and spiritual discourses, he inspired millions of people around the
      world to follow the path of Bhakti (devotion), Prem (divine love) and
      Seva (selfless service).
    </p>

    <h3>Our Mission</h3>

    <ul>
      <li>Spread devotion to Shri Radha Krishna.</li>
      <li>Promote love, peace and spiritual wisdom.</li>
      <li>Organize satsang, kirtan and festivals.</li>
      <li>Inspire selfless service for humanity.</li>
    </ul>
  </div>
</section>
<section>
  <div class="card">
    <h2>Daily Darshan Timings</h2>
    <p>Morning: 5:00 AM - 12:00 PM</p>
    <p>Evening: 4:00 PM - 9:00 PM</p>
  </div>
</section>

<section>
  <div class="card">
    <h2>Contact</h2>
    <p>Radha Govind Dham</p>
    <p>+91 XXXXXXXXXX</p>
    <p>info@radhagovinddham.org</p>
  </div>
</section>
</section>

<!-- YAHAN IMAGE GALLERY KA CODE PASTE KARO -->
<section id="gallery"
  data-aos="zoom-in">
<div class="card">
    <h2>&#128247; Image Gallery</h2>
    <div class="gallery">
   <img class="zoom-img" src="${img1}">
<img class="zoom-img" src="${img2}">
<img class="zoom-img" src="${img3}">
<img class="zoom-img" src="${img4}">
<img class="zoom-img" src="${img5}">
<img class="zoom-img" src="${img6}">
<img class="zoom-img" src="${img7}">
<img class="zoom-img" src="${img8}">
<img class="zoom-img" src="${img9}">
<img class="zoom-img" src="${img10}">
    </div>
  </div>
</section>
<section id="shop">
  <div class="card">
    <h2>Book Shop</h2>

    <div class="gallery">

      <div class="product">
        <img src="${book1}" alt="Who Am I">
        <h3>Who Am I? Who Is Mine?</h3>
        <p>Jagadguruttam Shri Kripalu Ji Maharaj</p>
        <a class="btn"
         href="https://wa.me/918318974660?text=Namaste%20I%20would%20like%20to%20order%20this%20book." target="_blank" rel="noopener noreferrer">
  Buy Now
</a>
      </div>

      <div class="product">
        <img src="${book2}" alt="Prashnottari 2">
        <h3>Prashnottari Part-2</h3>
        <p>Jagadguruttam Shri Kripalu Ji Maharaj</p>
        <a class="btn"
         href="https://wa.me/918318974660?text=Namaste%20I%20would%20like%20to%20order%20this%20book." target="_blank" rel="noopener noreferrer">
  Buy Now
</a>
      </div>

      <div class="product">
        <img src="${book3}" alt="Bhaktiras Sindhu">
        <h3>Bhaktiras Sindhu</h3>
        <p>Jagadguruttam Shri Kripalu Ji Maharaj</p>
        <a class="btn"
         href="https://wa.me/918318974660?text=Namaste%20I%20would%20like%20to%20order%20this%20book." target="_blank" rel="noopener noreferrer">
  Buy Now
</a>
      </div>

      <div class="product">
        <img src="${book4}" alt="Braj Ras Madhuri">
        <h3>Braj Ras Madhuri Part-3</h3>
        <p>Jagadguruttam Shri Kripalu Ji Maharaj</p>
        <a class="btn"
        href="https://wa.me/918318974660?text=Namaste%20I%20would%20like%20to%20order%20this%20book." target="_blank" rel="noopener noreferrer">
  Buy Now
</a>
      </div>

      <div class="product">
        <img src="${book5}" alt="Prem Ras Madira">
        <h3>Prem Ras Madira</h3>
        <p>Jagadguruttam Shri Kripalu Ji Maharaj</p>
        <a class="btn"
         href="https://wa.me/918318974660?text=Namaste%20I%20would%20like%20to%20order%20this%20book." target="_blank" rel="noopener noreferrer">
  Buy Now
</a>
      </div>

    </div>
  </div>
</section>
<section id="announcements" class="card">
  <h2>&#128226; Latest Announcements</h2>
  <div id="announcementList">
    Loading announcements...
  </div>
</section>

<footer class="site-footer" id="contact">
  <h2>Radha Govind Dham</h2>
  <p>A sacred place dedicated to Shri Radha Krishna.</p>

  <p>
    <strong>Location:</strong> Kanpur, Uttar Pradesh
  </p>

  <p>
    <a href="https://wa.me/918318974660"
       target="_blank"
       rel="noopener noreferrer">
      Contact us on WhatsApp
    </a>
  </p>

  <p class="footer-credit">
    Built by Siddharth Pal | ApnoAI Intern
    <br>
    <a href="https://apnoai.com"
       target="_blank"
       rel="noopener noreferrer">ApnoAI</a>
  </p>

  <p>&copy; 2026 Radha Govind Dham. All Rights Reserved.</p>
</footer>

  
<a href="https://wa.me/918318974660"
   class="whatsapp-btn"
   target="_blank">
   WhatsApp
</a>
<button id="topBtn" class="top-btn">↑</button>
<div id="lightbox" class="lightbox">
  <span id="close-lightbox">&times;</span>
  <img id="lightbox-img" src="" alt="">
</div>
<section class="countdown"
  data-aos="fade-left">
<h2>Next Sunday Kirtan Starts In</h2>
  <div id="countdown"></div>
</section>
`;
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
 const day = now.getDay();
const hour = now.getHours();
const minute = now.getMinutes();

const liveBadge = document.querySelector(".live-badge");

const isLive =
  day === 0 &&
  (
    hour > 8 ||
    (hour === 8 && minute >= 30)
  ) &&
  (
    hour < 11 ||
    (hour === 11 && minute <= 30)
  );

if (liveBadge) {
  liveBadge.textContent = isLive ? "LIVE NOW" : "OFFLINE";
}
  const target = new Date();

  target.setDate(now.getDate() + ((7 - now.getDay()) % 7));

  if (target <= now) {
    target.setDate(target.getDate() + 7);
  }

  target.setHours(8, 30, 0, 0);

const diff = target.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (countdown) {
    countdown.innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
AOS.init({
  duration: 1000,
  once: true,
});
const images =
 document.querySelectorAll('.zoom-img');
const navbar =
 document.getElementById("navbar");
const lightbox = document.getElementById("lightbox") as HTMLDivElement;
const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement;
const closeLightbox = document.getElementById("close-lightbox") as HTMLSpanElement;

images.forEach((img) => {
  img.addEventListener("click", () => {
    const src = img.getAttribute("src");
    if (src) {
      lightbox.style.display = "flex";
      lightboxImg.src = src;
    }
  });
});

closeLightbox?.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
    } else {
        navbar?.classList.remove("scrolled");
    }
});const topBtn = document.getElementById("topBtn") as HTMLButtonElement;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
});const adminBtn = document.getElementById("adminLoginBtn");

adminBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  // Never store admin credentials in public frontend code.
  window.location.assign("/src/pages/login.html");
});
async function loadAnnouncement() {
  const announcementText = document.getElementById("announcementList");
  if (!announcementText) return;

  try {
    const snapshot = await getDocs(collection(db, "announcements"));

    if (snapshot.empty) {
      announcementText.textContent = "No Announcement";
      return;
    }

    const last = snapshot.docs[snapshot.docs.length - 1].data();
    announcementText.textContent =
      typeof last.text === "string" ? last.text : "Announcement unavailable";
  } catch (error) {
    console.error("Could not load announcements:", error);
    announcementText.textContent = "Announcements are temporarily unavailable.";
  }
}

void loadAnnouncement();
