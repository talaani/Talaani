const consentKey = "talaani-privacy-confirmed";
const consentVersion = "2026-04-05";
const musicPreferenceKey = "talaani-music-preference";
const languagePreferenceKey = "talaani-language";

const playlist = [
  { src: "assets/audio/Talaani - All In.mp3", label: "All In" },
  { src: "assets/audio/Talaani - Kami.mp3", label: "Kami" },
  { src: "assets/audio/Talaani - Luminance.mp3", label: "Luminance" },
  { src: "assets/audio/Talaani - Recall.mp3", label: "Recall" },
];

const englishTranslations = {
  meta_description: "Talaani - personal website with info, games, socials and privacy details at a glance.",
  meta_description_short: "Personal website with info, games, socials and privacy details at a glance.",
  meta_image_alt: "Talaani banner",
  nav_label: "Main navigation",
  lang_label: "Language",
  nav_start: "Home",
  nav_about: "About",
  nav_games: "Games",
  nav_socials: "Socials",
  nav_privacy: "Privacy",
  start_eyebrow: "Personal Web Presence",
  start_title: "Welcome to Talaani",
  start_intro:
    "This is my creator hub with the most important info and direct paths to my channels. The content stays intentionally open: gaming, entertainment and a good atmosphere are at the center of it all.",
  start_button_socials: "View my socials",
  start_button_games: "Explore games",
  overview_eyebrow: "Overview",
  overview_title: "What you will find here",
  overview_streams_title: "Streams",
  overview_streams_text:
    "You can find my livestreams on both YouTube and Twitch. Drop by for a wide variety of games. Most of the time you will probably catch me somewhere in the Verse.",
  overview_videos_title: "Videos",
  overview_videos_text:
    "Right now my video output is still mostly tied to livestreams, but over time there will also be offline projects once I have spent more time learning proper video editing.",
  overview_person_title: "My personality",
  overview_person_text:
    "Sometimes I am quieter than I want to be, sometimes a little more direct than I probably should be. But really, what is the worst that could happen?!",
  about_eyebrow: "About",
  about_title: "The person behind Talaani",
  about_intro_1:
    'I am Talaani, rapidly approaching retirement at the old age of <span id="current-age">34</span>, and I spend a big part of my free time in front of my PC. You will see me gaming, but that is far from the only thing I do there. I write songs, spend a lot of time around AI, and I am currently learning how to edit videos properly.',
  about_intro_2:
    "Content-wise I am pretty broad beyond my main game. I enjoy a lot of different genres, and there really are not that many I have no interest in at all. The things I care least about are football, racing games, and shooters like Call of Duty.",
  about_card_1_title: "What I do",
  about_card_1_text:
    "So far, streams still make up my entire portfolio. Later on there will also be videos and, if I come up with good ideas, maybe something else as well.",
  about_card_2_title: "What I stand for",
  about_card_2_text:
    "Above all, I believe in authenticity. If you are a calm person, that is perfectly fine. I am not the kind of streamer who talks endlessly when nobody is around, overreacts to things that are not that special, or performs a fake persona for viewers.",
  about_card_3_title: "What to expect",
  about_card_3_text:
    "That depends a lot on what I am doing. With calmer games I tend to be calmer too, with funny games you will hear me talk a lot and sometimes ramble nonsense, and with tactical games I get very focused and may pay a little less attention to chat. You could say I can be a bit of a tryhard sometimes.",
  about_goal_eyebrow: "My goal",
  about_goal_title: "A presence with personality",
  about_goal_text:
    "My goal, aside from wanting your follow, is mainly to build a good community. I am looking for friendly, grown-up people who think before they speak and use common sense. We can game together when I offer it, we can talk, we can just hang out - not only one-on-one with me, but with each other as part of the community too.",
  games_eyebrow: "Games",
  games_title: "Genres and games that stick with me",
  games_intro:
    "Here you get an overview of the games and genres that shape my content. Click a card to expand it and read more.",
  games_grid_label: "Game selection",
  games_card_1_eyebrow: "Main Game",
  games_card_1_text:
    "Star Citizen is a massive space simulation where you move freely through a still-growing universe, take missions, fly ships and step into very different roles. My personal focus is mostly on hauling and medic gameplay: transporting cargo, rescuing people from difficult situations and enjoying the kind of gameplay that can swing from relaxed to suddenly very intense.",
  games_card_2_eyebrow: "Genre",
  games_card_2_title: "Survival Games",
  games_card_2_text:
    "When I think survival, DayZ is a good modern example: rough, dirty, unpredictable, and always carrying the feeling that something can go wrong around the next corner. On the fantasy side, Enshrouded is a great example and much closer to the direction I enjoy most. Medieval fantasy is generally my favorite, but every now and then there is absolutely nothing wrong with a good zombie game either.",
  games_card_3_eyebrow: "Genre",
  games_card_3_title: "Shooter",
  games_card_3_text:
    "When it comes to shooters, Arma Reforger is my main point of reference. It is much less of a fast arcade shooter and much more of a tactical military experience where communication, awareness and teamwork really matter. That mix of structure, tension and coordination is what makes it appealing to me.",
  games_card_4_eyebrow: "Experience",
  games_card_4_text:
    "In VR I play all kinds of titles with my HTC Vive Pro 2. Virtual reality makes a lot of things feel more direct, more intense and more immediate than a regular monitor ever can. That feeling of really being there is exactly what makes VR special to me and keeps me curious about trying different experiences.",
  games_card_5_eyebrow: "Genre",
  games_card_5_title: "Strategy",
  games_card_5_text:
    "In strategy games I like very different kinds of planning and structure. Anno stands for economy, growth and a nice balance of calm and complexity. Satisfactory is all about designing processes cleanly and improving production chains over time. Shadows of Doubt is compelling in a completely different way, because observation, deduction and structured thinking take center stage there. That variety is exactly what makes the genre interesting to me.",
  socials_eyebrow: "My Socials",
  socials_title: "Direct links to my channels",
  socials_intro:
    "If you want to catch me live or keep up with my content, this is where you can jump straight to my channels. External platforms only open after you actively click a link.",
  social_twitch_eyebrow: "Live",
  social_twitch_text:
    "On Twitch I am live. That is where direct interaction, spontaneous moments and shared experiences take the spotlight.",
  social_twitch_button: "Visit Twitch",
  social_youtube_eyebrow: "Live / On Demand",
  social_youtube_text:
    "On YouTube you will find livestreams as well as videos, highlights and selected content you can watch whenever it suits you.",
  social_youtube_button: "Visit YouTube",
  social_discord_eyebrow: "Community",
  social_discord_text:
    "My Discord server is where you can chat with me and the community, keep up with what is going on and just stay connected.",
  social_discord_button: "Join Discord",
  social_ts_eyebrow: "Voice",
  social_ts_text:
    "If you prefer jumping straight into voice chat, you can also find me and parts of the community on my TeamSpeak server.",
  social_ts_button: "Connect TS",
  contact_eyebrow: "Contact",
  contact_title: "Business, sponsorships or collaborations",
  contact_text:
    "If you want to reach out about sponsorships, collaborations or other business topics, just send me a message directly.",
  privacy_eyebrow: "Privacy",
  privacy_title: "Notes on data processing",
  privacy_intro:
    "Protecting your data matters to me. This website is intentionally built to collect as little data as possible and does not use tracking or marketing cookies. Below you will find the key notes on which data may be processed when visiting this website.",
  privacy_card_1_title: "1. Website hosting",
  privacy_card_1_text:
    "This website is hosted as a static site. When pages are accessed, technically necessary connection data may be processed by the hosting provider in order to deliver the website and maintain the security of the service.",
  privacy_card_2_title: "2. Technically processed access data",
  privacy_card_2_text:
    "This may include the IP address, date and time of access, the page or file requested, information about the browser and operating system used, the referrer URL and technical request status details.",
  privacy_card_3_title: "3. No tracking or marketing cookies",
  privacy_card_3_text:
    "This website does not use tracking or marketing cookies. No external analytics tools are used to evaluate your behavior on the site either.",
  privacy_card_4_title: "4. Local storage of your confirmation",
  privacy_card_4_text:
    "If you confirm the privacy notice on this website, that information is stored locally in your browser. The sole purpose of this storage is to avoid showing the notice again the next time you visit.",
  privacy_card_5_title: "5. Local audio playback",
  privacy_card_5_text:
    "This website includes locally hosted audio files. Playback only happens when you actively start it yourself. No audio is loaded from external services.",
  privacy_card_6_title: "6. External links",
  privacy_card_6_text:
    "This website contains links to external platforms, especially Twitch and YouTube. Data is not transferred to those platforms automatically when the page loads, but only after you actively click one of those links.",
  privacy_card_7_title: "7. Locally hosted fonts",
  privacy_card_7_text:
    "The fonts used on this website are hosted locally. No fonts are loaded from third-party providers when the website is opened.",
  privacy_card_8_title: "8. Status of these notes",
  privacy_card_8_text:
    "These privacy notes reflect the website's current technical implementation. If additional features, embedded content or services are added in the future, these notes will be updated accordingly. This especially applies to embeds, analytics tools, widgets, externally hosted fonts or other third-party services that may trigger additional data processing.",
  privacy_card_9_title: "9. Copyright and usage rights",
  privacy_card_9_text:
    "The contents of this website, especially texts, images, design elements, audio and other provided media, belong to Talaani unless stated otherwise. Use, reproduction, editing or redistribution is not permitted without prior explicit consent.",
  footer_text: "© Talaani. Content, images, audio and design belong to Talaani unless stated otherwise.",
  footer_privacy: "Privacy",
  footer_games: "Games",
};

const uiCopy = {
  de: {
    audioPlayLabel: "Musik starten",
    audioPauseLabel: "Musik pausieren",
    audioPrevLabel: "Vorheriger Track",
    audioNextLabel: "Nächster Track",
    audioToggleEnable: "Musik aktivieren",
    audioToggleDisable: "Musik pausieren",
    audioToggleAllow: "Musik erlauben",
    audioStatusOff: "Musik ist aus",
    audioStatusDisabled: "Musik ist deaktiviert",
    audioStatusReady: "Musik ist aus - bereit: {track}",
    audioStatusPlaying: "Jetzt läuft: {track}",
  },
  en: {
    audioPlayLabel: "Start music",
    audioPauseLabel: "Pause music",
    audioPrevLabel: "Previous track",
    audioNextLabel: "Next track",
    audioToggleEnable: "Enable music",
    audioToggleDisable: "Pause music",
    audioToggleAllow: "Allow music",
    audioStatusOff: "Music is off",
    audioStatusDisabled: "Music is disabled",
    audioStatusReady: "Music is off - ready: {track}",
    audioStatusPlaying: "Now playing: {track}",
  },
};

let currentLanguage = "de";
const germanText = {};
const germanHtml = {};
const germanAttrs = {};

function localizeText(template, replacements = {}) {
  return Object.entries(replacements).reduce(
    (text, [token, replacement]) => text.replaceAll(`{${token}}`, replacement),
    template,
  );
}

function captureGermanBaseline() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    germanText[element.dataset.i18n] = element.textContent.trim();
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    germanHtml[element.dataset.i18nHtml] = element.innerHTML.trim();
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split("|").forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      if (attribute && key) {
        germanAttrs[key] = element.getAttribute(attribute) ?? "";
      }
    });
  });
}

function getStaticTranslation(key, type = "text") {
  if (currentLanguage === "en") {
    return englishTranslations[key] ?? (type === "html" ? germanHtml[key] : germanText[key] ?? germanAttrs[key] ?? key);
  }

  if (type === "html") {
    return germanHtml[key] ?? "";
  }

  return germanText[key] ?? germanAttrs[key] ?? "";
}

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

function applyTranslations(language) {
  currentLanguage = language === "en" ? "en" : "de";
  window.localStorage.setItem(languagePreferenceKey, currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getStaticTranslation(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = getStaticTranslation(element.dataset.i18nHtml, "html");
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split("|").forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      if (attribute && key) {
        element.setAttribute(attribute, getStaticTranslation(key));
      }
    });
  });

  document.querySelectorAll(".lang-switch-button").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateAge();
}

function initLocalization() {
  captureGermanBaseline();
  const storedLanguage = window.localStorage.getItem(languagePreferenceKey);
  applyTranslations(storedLanguage === "en" ? "en" : "de");

  document.querySelectorAll(".lang-switch-button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang === "en" ? "en" : "de";
      if (nextLanguage === currentLanguage) {
        return;
      }

      applyTranslations(nextLanguage);
      document.dispatchEvent(new CustomEvent("talaani:language-change"));
    });
  });
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

  window.talaaniShowView = showView;

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
  const consentReadPrivacy = document.getElementById("consent-read-privacy");

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
    !consentAccept ||
    !consentReadPrivacy
  ) {
    return;
  }

  let currentIndex = 0;
  let hasLoadedTrack = false;
  let hasMusicPermission = false;
  let animationFrameId = 0;
  let activeOverlay = null;
  let restoreFocusElement = null;

  const overlayFocusSelector = [
    "button:not([disabled])",
    "a[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
  ].join(", ");

  const getFocusableElements = (overlay) =>
    [...overlay.querySelectorAll(overlayFocusSelector)].filter(
      (element) => !element.hasAttribute("disabled") && !element.getAttribute("aria-hidden"),
    );

  const lockBody = () => {
    document.body.classList.add("consent-locked");
  };

  const unlockBodyIfPossible = () => {
    if (!document.querySelector(".consent-overlay.is-visible")) {
      document.body.classList.remove("consent-locked");
    }
  };

  const openOverlay = (overlay, triggerElement = document.activeElement) => {
    if (!overlay) {
      return;
    }

    if (activeOverlay && activeOverlay !== overlay) {
      activeOverlay.classList.remove("is-visible");
    }

    restoreFocusElement = triggerElement instanceof HTMLElement ? triggerElement : null;
    activeOverlay = overlay;
    overlay.classList.add("is-visible");
    lockBody();

    const [firstFocusable] = getFocusableElements(overlay);
    firstFocusable?.focus();
  };

  const closeOverlay = (overlay, returnFocus = true) => {
    if (!overlay) {
      return;
    }

    overlay.classList.remove("is-visible");

    if (activeOverlay === overlay) {
      activeOverlay = null;
    }

    unlockBodyIfPossible();

    if (returnFocus && restoreFocusElement) {
      restoreFocusElement.focus();
    }
  };

  document.addEventListener("keydown", (event) => {
    if (!activeOverlay || event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableElements(activeOverlay);

    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    const current = document.activeElement;

    if (event.shiftKey && current === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && current === last) {
      event.preventDefault();
      first.focus();
    }
  });

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

  const ui = () => uiCopy[currentLanguage] ?? uiCopy.de;

  const updateStatus = (isPlaying) => {
    const copy = ui();
    const currentTrack = playlist[currentIndex];
    const text = isPlaying
      ? localizeText(copy.audioStatusPlaying, { track: currentTrack.label })
      : hasMusicPermission
        ? hasLoadedTrack
          ? localizeText(copy.audioStatusReady, { track: currentTrack.label })
          : copy.audioStatusOff
        : copy.audioStatusDisabled;

    status.textContent = text;
    toggleButton.textContent = isPlaying
      ? copy.audioToggleDisable
      : hasMusicPermission
        ? copy.audioToggleEnable
        : copy.audioToggleAllow;
    toggleButton.setAttribute("aria-pressed", String(isPlaying));
    prevButton.setAttribute("aria-label", copy.audioPrevLabel);
    nextButton.setAttribute("aria-label", copy.audioNextLabel);
    playButton.textContent = isPlaying ? "II" : ">";
    playButton.setAttribute("aria-label", isPlaying ? copy.audioPauseLabel : copy.audioPlayLabel);
    dock.classList.toggle("is-playing", isPlaying);
  };

  const loadTrack = (index) => {
    currentIndex = (index + playlist.length) % playlist.length;
    audio.src = playlist[currentIndex].src;
    hasLoadedTrack = true;
  };

  const playCurrent = async () => {
    if (!hasMusicPermission) {
      openOverlay(musicOverlay);
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
    closeOverlay(musicOverlay);
  };

  const maybeOpenMusicPrompt = () => {
    const storedPreference = window.localStorage.getItem(musicPreferenceKey);

    if (storedPreference === "yes") {
      hasMusicPermission = true;
      window.setTimeout(() => {
        playCurrent();
      }, 0);
      return;
    }

    if (storedPreference === "no") {
      hasMusicPermission = false;
      return;
    }

    openOverlay(musicOverlay);
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
    closeOverlay(consentOverlay);
    maybeOpenMusicPrompt();
    updateStatus(false);
  });

  consentReadPrivacy.addEventListener("click", (event) => {
    event.preventDefault();
    closeOverlay(consentOverlay, false);
    window.talaaniShowView?.("privacy", true);
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

  document.addEventListener("talaani:language-change", () => {
    updateStatus(!audio.paused && !audio.ended);
  });

  const hasAcceptedCurrentVersion = window.localStorage.getItem(consentKey) === consentVersion;

  if (!hasAcceptedCurrentVersion) {
    openOverlay(consentOverlay, consentAccept);
  } else {
    maybeOpenMusicPrompt();
  }

  resetEqBars();
  updateStatus(false);
}

document.addEventListener("DOMContentLoaded", () => {
  initLocalization();
  initSectionNavigation();
  initMusicPlayer();
});
