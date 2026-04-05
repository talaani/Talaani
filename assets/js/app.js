const consentKey = "talaani-privacy-confirmed";
const consentVersion = "2026-04-05";
const musicPreferenceKey = "talaani-music-preference";

const playlist = [
  { src: "assets/audio/Talaani - All In.mp3", label: "All In" },
  { src: "assets/audio/Talaani - Kami.mp3", label: "Kami" },
  { src: "assets/audio/Talaani - Luminance.mp3", label: "Luminance" },
  { src: "assets/audio/Talaani - Recall.mp3", label: "Recall" },
];

function updateAge() {
  const ageNode = document.getElementById("current-age");

  if (!ageNode) {
    return;
  }

  const today = new Date();
  const birthYear = 1991;
  const birthdayMonthIndex = 9;
  const birthdayDay = 11;
  let age = today.getFullYear() - birthYear;

  const birthdayHasPassed =
    today.getMonth() > birthdayMonthIndex ||
    (today.getMonth() === birthdayMonthIndex && today.getDate() >= birthdayDay);

  if (!birthdayHasPassed) {
    age -= 1;
  }

  ageNode.textContent = String(age);
}

function initSectionNavigation() {
  const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const links = [...document.querySelectorAll('a[href^="#"]')];
  const sections = [...document.querySelectorAll(".page-section[data-view]")];
  const contentStack = document.querySelector(".content-stack");

  if (!links.length || !sections.length || !contentStack) {
    return;
  }

  const validViews = [...new Set(sections.map((section) => section.dataset.view))];

  const setActiveLink = (view) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${view}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const showView = (requestedView, shouldPushHash = false) => {
    const view = validViews.includes(requestedView) ? requestedView : "start";

    sections.forEach((section) => {
      section.hidden = section.dataset.view !== view;
    });

    setActiveLink(view);

    if (shouldPushHash) {
      window.history.replaceState(null, "", `#${view}`);
    }

    contentStack.scrollTo({ top: 0, behavior: "smooth" });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href?.startsWith("#")) {
        return;
      }

      const targetView = href.slice(1);

      if (!validViews.includes(targetView)) {
        return;
      }

      event.preventDefault();
      showView(targetView, true);
    });
  });

  window.addEventListener("hashchange", () => {
    showView(window.location.hash.slice(1));
  });

  showView(window.location.hash.slice(1));
}

function initMusicPlayer() {
  const audio = document.getElementById("playlist-player");
  const dock = document.querySelector(".audio-dock");
  const eqBars = [...document.querySelectorAll(".audio-eq span")];
  const toggleButton = document.getElementById("audio-toggle");
  const playButton = document.getElementById("audio-play");
  const prevButton = document.getElementById("audio-prev");
  const nextButton = document.getElementById("audio-next");
  const status = document.getElementById("audio-status");
  const musicOverlay = document.getElementById("music-overlay");
  const musicAccept = document.getElementById("music-accept");
  const musicDecline = document.getElementById("music-decline");
  const consentOverlay = document.getElementById("consent-overlay");
  const consentAccept = document.getElementById("consent-accept");

  if (
    !audio ||
    !dock ||
    !eqBars.length ||
    !toggleButton ||
    !playButton ||
    !prevButton ||
    !nextButton ||
    !status ||
    !musicOverlay ||
    !musicAccept ||
    !musicDecline ||
    !consentOverlay ||
    !consentAccept
  ) {
    return;
  }

  let currentIndex = 0;
  let hasLoadedTrack = false;
  let hasMusicPermission = false;
  let animationFrameId = 0;

  const resetEqBars = () => {
    eqBars.forEach((bar, index) => {
      const idleHeight = 12 + ((index % 6) * 2);
      bar.style.height = `${idleHeight}%`;
      bar.style.opacity = "0.25";
    });
  };

  const renderEq = () => {
    if (audio.paused) {
      animationFrameId = 0;
      return;
    }

    eqBars.forEach((bar, index) => {
      const cluster = index % 6;
      const base = 16 + (cluster * 6);
      const wave = (Math.sin((performance.now() / 220) + index) + 1) * 0.5;
      const jitter = Math.random() * 26;
      const height = Math.min(88, base + (wave * 24) + jitter);
      const opacity = 0.28 + ((height / 100) * 0.6);

      bar.style.height = `${height}%`;
      bar.style.opacity = `${opacity}`;
    });

    animationFrameId = window.requestAnimationFrame(renderEq);
  };

  const startEq = () => {
    if (!animationFrameId) {
      animationFrameId = window.requestAnimationFrame(renderEq);
    }
  };

  const stopEq = () => {
    if (animationFrameId) {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    }

    resetEqBars();
  };

  const updateStatus = (isPlaying) => {
    const currentTrack = playlist[currentIndex];
    const text = isPlaying
      ? `Jetzt läuft: ${currentTrack.label}`
      : hasMusicPermission
        ? `Musik ist aus${hasLoadedTrack ? ` - bereit: ${currentTrack.label}` : ""}`
        : "Musik ist deaktiviert";

    status.textContent = text;
    toggleButton.textContent = isPlaying ? "Musik pausieren" : hasMusicPermission ? "Musik aktivieren" : "Musik erlauben";
    toggleButton.setAttribute("aria-pressed", String(isPlaying));
    playButton.textContent = isPlaying ? "II" : ">";
    playButton.setAttribute("aria-label", isPlaying ? "Musik pausieren" : "Musik starten");
    dock.classList.toggle("is-playing", isPlaying);
  };

  const loadTrack = (index) => {
    currentIndex = (index + playlist.length) % playlist.length;
    audio.src = playlist[currentIndex].src;
    hasLoadedTrack = true;
  };

  const playCurrent = async () => {
    if (!hasMusicPermission) {
      musicOverlay.classList.add("is-visible");
      document.body.classList.add("consent-locked");
      return;
    }

    if (!hasLoadedTrack) {
      loadTrack(currentIndex);
    }

    try {
      await audio.play();
      updateStatus(true);
      startEq();
    } catch {
      updateStatus(false);
      stopEq();
    }
  };

  const pauseCurrent = () => {
    audio.pause();
    updateStatus(false);
    stopEq();
  };

  const saveMusicPreference = (value) => {
    window.localStorage.setItem(musicPreferenceKey, value ? "yes" : "no");
    hasMusicPermission = value;
  };

  const closeMusicPrompt = () => {
    musicOverlay.classList.remove("is-visible");
    document.body.classList.remove("consent-locked");
  };

  const maybeOpenMusicPrompt = () => {
    const storedPreference = window.localStorage.getItem(musicPreferenceKey);

    if (storedPreference === "yes") {
      hasMusicPermission = true;
      return;
    }

    if (storedPreference === "no") {
      hasMusicPermission = false;
      return;
    }

    musicOverlay.classList.add("is-visible");
    document.body.classList.add("consent-locked");
  };

  const togglePlayback = () => {
    if (audio.paused) {
      playCurrent();
    } else {
      pauseCurrent();
    }
  };

  toggleButton.addEventListener("click", togglePlayback);
  playButton.addEventListener("click", togglePlayback);

  prevButton.addEventListener("click", () => {
    loadTrack(currentIndex - 1);
    playCurrent();
  });

  nextButton.addEventListener("click", () => {
    loadTrack(currentIndex + 1);
    playCurrent();
  });

  audio.addEventListener("ended", () => {
    loadTrack(currentIndex + 1);
    playCurrent();
  });

  audio.addEventListener("pause", () => {
    if (audio.ended) {
      return;
    }

    stopEq();
    updateStatus(false);
  });

  audio.addEventListener("play", () => {
    updateStatus(true);
    startEq();
  });

  consentAccept.addEventListener("click", () => {
    window.localStorage.setItem(consentKey, consentVersion);
    consentOverlay.classList.remove("is-visible");
    document.body.classList.remove("consent-locked");
    maybeOpenMusicPrompt();
    updateStatus(false);
  });

  musicAccept.addEventListener("click", async () => {
    saveMusicPreference(true);
    closeMusicPrompt();
    await playCurrent();
  });

  musicDecline.addEventListener("click", () => {
    saveMusicPreference(false);
    pauseCurrent();
    closeMusicPrompt();
  });

  const hasAcceptedCurrentVersion = window.localStorage.getItem(consentKey) === consentVersion;

  if (!hasAcceptedCurrentVersion) {
    consentOverlay.classList.add("is-visible");
    document.body.classList.add("consent-locked");
  } else {
    maybeOpenMusicPrompt();
  }

  resetEqBars();
  updateStatus(false);
}

document.addEventListener("DOMContentLoaded", () => {
  updateAge();
  initSectionNavigation();
  initMusicPlayer();
});
