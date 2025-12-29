


// starting smooth scroll from here
function enableScrollReveal(win) {
  if (!win || !win.document) return;

  const style = win.document.createElement("style");
  style.innerHTML = `
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity .7s ease, transform .7s ease;
    }
    .reveal.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  win.document.head.appendChild(style);

  const script = win.document.createElement("script");
  script.innerHTML = `
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    });
    document.querySelectorAll("section, .glass, .box, .card")
      .forEach(el => {
        el.classList.add("reveal");
        observer.observe(el);
      });
  `;
  win.document.body.appendChild(script);
}
// download process code
function downloadFile(name, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

let ACTIVE_PROJECT = null;
function showDownloadPopup() {
  requestAnimationFrame(() => {
    setTimeout(() => {
      const popup = document.getElementById("downloadPopup");
      if (!popup) {
        console.log("Popup element missing");
        return;
      }
      popup.style.display = "flex";
    }, 50);
  });
}


window.addEventListener("message", (e) => {
  if (e.data === "DOWNLOAD_PROJECT" && ACTIVE_PROJECT) {
    downloadFile("index.html", ACTIVE_PROJECT.html);
    downloadFile("style.css", ACTIVE_PROJECT.css);
    downloadFile("main.js", ACTIVE_PROJECT.js);
  }
});


function showDownloadPopup() {
  
  
  requestAnimationFrame(() => {
    setTimeout(() => {
      const popup = document.getElementById("downloadPopup");
      if (!popup) {
        console.log("Popup element missing");
        return;
      }
      popup.style.display = "flex";
    }, 50);
  });
}



window.addEventListener("load", () => {
  const popup = document.getElementById("downloadPopup");
  const confirmBtn = document.getElementById("confirmDownload");
  const cancelBtn = document.getElementById("cancelDownload");

  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      console.log("YES clicked", ACTIVE_PROJECT);

      if (!ACTIVE_PROJECT || !ACTIVE_PROJECT.html) {
        alert("No generated project found");
        return;
      }

      downloadFile("index.html", ACTIVE_PROJECT.html);
      popup.style.display = "none";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});



window.addEventListener("load", function () {
  const btn = document.getElementById("generateBtn");
  const brandInput = document.getElementById("BrandName");
  const typeSelect = document.getElementById("businesstype");
  const colorInput = document.getElementById("brandcolor");

  if (!btn || !brandInput || !typeSelect || !colorInput) return;

  btn.addEventListener("click", function () {
    const brand = brandInput.value.trim();
    const type = typeSelect.value;
    const userColor = colorInput.value || "";

    if (!brand || !type) {
      alert("Brand name aur business type select karo");
      return;
    }

    const w = window.open("", "_blank");
    if (!w) {
      alert("Popup blocked");
      return;
    }

    /* 
       here is my image based websites like cafe ,gym etc
     */
    const bgGradients = [
  "linear-gradient(135deg,#f8fafc,#e2e8f0)",
  "linear-gradient(135deg,#0f172a,#020617)",
  "linear-gradient(135deg,#111827,#1f2933)",
  "linear-gradient(135deg,#ffffff,#f1f5f9)"
];

const randomBg = bgGradients[Math.floor(Math.random() * bgGradients.length)];

    const imageMap = {
      cafe: ["cafe1.avif", "cafe2.avif", "cafe3.avif"],
      restaurent: ["res1.webp", "res2.avif", "res3.avif"],
      gym: ["gym1.avif", "gym2.avif", "gym3.avif"],
      salon: ["saloon1.avif", "salon2.avif", "salon3.avif"]
    };

    if (imageMap[type]) {
      const base = window.location.origin;
      const heroText = {
        cafe: "Fresh Coffee & Cozy Vibes",
        restaurent: "Delicious Food, Great Taste",
        gym: "Build Your Best Body",
        salon: "Beauty & Style Redefined"
      };
      const arr = imageMap[type];
      const img = `${base}/images/${type}/${arr[Math.floor(Math.random() * arr.length)]}?v=${Date.now()}`;
      const GENERATED_HTML=`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${brand}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial}
.hero{
  flex:1;
  padding:8px;
  display:flex;
  justify-content:center;
  align-items:center;
}

.hero-glass{
  position:relative;
  width:100%;
  max-width:1350px;
  height:520px;
  border-radius:28px;
  overflow:hidden;
}

.hero-glass img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  filter: contrast(1.1) saturate(1.1);
}


.hero-content{
  position:absolute;
  inset:0;
  z-index:2;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  text-align:center;
  padding:32px;

  background:none;   
}

.hero-content h1{
  font-size:48px;
  margin-bottom:12px;
}

.hero-content p{
  font-size:18px;
  color:#475569;
  max-width:520px;
}



.page{
  min-height:100vh;
  background:${randomBg};
  display:flex;
  flex-direction:column;
  color:#0f172a; 
}


nav{
  padding:24px 48px;
  display:flex;
  justify-content:space-between;
  font-weight:bold;
}
footer{
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
}
  nav, footer{
  background: rgba(255,255,255,0.22);
  backdrop-filter: blur(8px);
  border:1px solid rgba(255,255,255,0.45);
}
  /* text redablity fixing*/
.hero-scrim{
  position:absolute;
  inset:0;
  z-index:1;

  /* Dark overlay for anyimage */
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.55),
    rgba(0,0,0,0.4),
    rgba(0,0,0,0.25)
  );
}

/*  image stay clear */
.hero-glass img{
  position:absolute;
  inset:0;
  z-index:0;

  width:100%;
  height:100%;
  object-fit:cover;

  filter:none; /* no blur, no fog */
}

/* Text always above scrim */
.hero-content{
  position:absolute;
  inset:0;
  z-index:2;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  text-align:center;
  padding:32px;

  background:none; /* VERY IMPORTANT */
}

.hero-content h1,
.hero-content p{
  color:#ffffff;
}



</style>
</head>
<body>
<div class="page">
  <nav>
    <span>${brand}</span>
    <span>Home | About | Contact</span>
  </nav>

  <div class="hero">
  <div class="hero-glass">
        <img src="${img}" alt="${brand}">
        <div class="hero-scrim"></div>


    <div class="hero-content">
      <h1>${heroText[type]}</h1>
      <p>Professional services that grow your business.</p>


    </div>
  </div>
</div>


  <footer>© 2025 ${brand}</footer>
</div>
</body>
</html>
`;
  ACTIVE_PROJECT={
  html:GENERATED_HTML
};
      w.document.write(GENERATED_HTML);
      w.document.close();
      showDownloadPopup();
      return;
    }

    /* 
       random themes for portfolio and local
    */
    const themes = [
      {
        gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        nav: "rgba(15,32,39,0.85)",
        footer: "rgba(15,32,39,0.9)",
        text: "#ffffff",
        accent: "#38bdf8"
      },
      {
        gradient: "linear-gradient(135deg, #1f2933, #111827)",
        nav: "rgba(17,24,39,0.85)",
        footer: "rgba(17,24,39,0.9)",
        text: "#ffffff",
        accent: "#a855f7"
      },
      {
        gradient: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
        nav: "rgba(255,255,255,0.85)",
        footer: "rgba(255,255,255,0.9)",
        text: "#0f172a",
        accent: "#2563eb"
      },
      {
        gradient: "linear-gradient(135deg, #0a0a0a, #1c1917)",
        nav: "rgba(24,24,27,0.85)",
        footer: "rgba(24,24,27,0.95)",
        text: "#f8fafc",
        accent: "#22c55e"
      }
    ];

    const theme = themes[Math.floor(Math.random() * themes.length)];
    const accent = userColor || theme.accent;

    /* 
       starting portfolio from here
     */
    if (type === "portfolio") {
      const GENERATED_HTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${brand}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:Arial;
  background:${theme.gradient};
  color:${theme.text};
}


nav{
  position:sticky;
  top:0;
  z-index:10;
  padding:18px 48px;
  display:flex;
  justify-content:space-between;
  background:${theme.nav};
  backdrop-filter:blur(14px);
}
nav a{
  color:${theme.text};
  margin-left:20px;
  text-decoration:none;
  opacity:.85;
}
nav a:hover{color:${accent};opacity:1}


.hero{
  min-height:100vh;
  display:flex;
  align-items:center;
  padding:0 48px;
}
.hero h1{
  font-size:clamp(44px,6vw,64px);
  line-height:1.1;
}


.boxes{
  display:flex;
  gap:32px;
  padding:0 48px 140px;
}
.glass{
  flex:1;
  padding:36px;
  background:rgba(255,255,255,0.12);
  backdrop-filter:blur(18px);
  border-radius:18px;
  border:1px solid rgba(255,255,255,0.18);
}


footer{
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:${theme.footer};
}
</style>
</head>
<body>

<nav>
  <strong>${brand}</strong>
  <div>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<section class="hero">
  <h1>Hi, I’m ${brand}<br>Designing modern digital experiences.</h1>
</section>

<section class="boxes">
  <div class="glass" id="about">
    <h2>About Me</h2>
    <p>I build visually clean, fast and user-focused interfaces.</p>
  </div>
  <div class="glass" id="skills">
    <h2>Skills</h2>
    <p>HTML · CSS · JavaScript · UI Design</p>
  </div>
</section>

<footer id="contact">© 2025 ${brand}</footer>

</body>
</html>
`;

ACTIVE_PROJECT = {
  html: GENERATED_HTML
};


      w.document.write(GENERATED_HTML);
      w.document.close();
      showDownloadPopup();
      return;
    }

    /* 
       starting local-business from here
    */
    if (type === "local-business") {
      const GENERATED_HTML =` <!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${brand}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:Arial;
  background:${theme.gradient};
  color:${theme.text};
}


nav{
  position:sticky;
  top:0;
  z-index:10;
  padding:18px 48px;
  display:flex;
  justify-content:space-between;
  background:${theme.nav};
  backdrop-filter:blur(14px);
}
nav a{
  color:${theme.text};
  margin-left:20px;
  text-decoration:none;
  opacity:.85;
}
nav a:hover{color:${accent}}


.hero{
  min-height:60vh;
  display:flex;
  align-items:center;
  padding:0 48px;
}
.hero h1{
  font-size:clamp(40px,5vw,56px);
}


.boxes{
  display:flex;
  gap:32px;
  padding:0 48px 140px;
}
.glass{
  flex:1;
  padding:36px;
  background:rgba(255,255,255,0.12);
  backdrop-filter:blur(18px);
  border-radius:18px;
  border:1px solid rgba(255,255,255,0.18);
}


footer{
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:${theme.footer};
}
</style>
</head>
<body>

<nav>
  <strong>${brand}</strong>
  <div>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

<section class="hero">
  <h1>Trusted Local Business</h1>
</section>

<section class="boxes">
  <div class="glass" id="about">
    <h2>About Us</h2>
    <p>Professional services built on trust and quality.</p>
  </div>
  <div class="glass" id="services">
    <h2>Services</h2>
    <p>Fast Support · Quality Work · Fair Pricing</p>
  </div>
</section>

<footer id="contact">© 2025 ${brand}</footer>

</body>
</html>`;


      w.document.write(GENERATED_HTML);
      w.document.close();
      showDownloadPopup();
      return;
    }

  });
});

//  popup button 
window.addEventListener("load", () => {
  const popup = document.getElementById("downloadPopup");
  const confirmBtn = document.getElementById("confirmDownload");
  const cancelBtn = document.getElementById("cancelDownload");

  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      console.log("YES clicked", ACTIVE_PROJECT);

      if (!ACTIVE_PROJECT || !ACTIVE_PROJECT.html) {
        alert("No generated project found");
        return;
      }

      downloadFile("index.html", ACTIVE_PROJECT.html);
      popup.style.display = "none";
    });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      console.log("CANCEL clicked");
      popup.style.display = "none";
    });
  }
});
