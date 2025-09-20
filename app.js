// Enhanced Fasal Pathshala Application with AI Assistant and Voice Features

// Application Data with Punjabi Support
const appData = {
  crops: [
    {
      name: "Rice", 
      nameHi: "चावल", 
      namePb: "ਚੌਲ", 
      season: "Kharif", 
      soil: "Clay", 
      yield: "3-4 tons/hectare", 
      profitMargin: "₹25,000", 
      confidence: 95
    },
    {
      name: "Wheat", 
      nameHi: "गेहूं", 
      namePb: "ਕਣਕ", 
      season: "Rabi", 
      soil: "Loam", 
      yield: "4-5 tons/hectare", 
      profitMargin: "₹30,000", 
      confidence: 92
    },
    {
      name: "Sugarcane", 
      nameHi: "गन्ना", 
      namePb: "ਗੰਨਾ", 
      season: "Year-round", 
      soil: "Clay-Loam", 
      yield: "70-80 tons/hectare", 
      profitMargin: "₹80,000", 
      confidence: 88
    },
    {
      name: "Cotton", 
      nameHi: "कपास", 
      namePb: "ਕਪਾਹ", 
      season: "Kharif", 
      soil: "Black", 
      yield: "500-600 kg/hectare", 
      profitMargin: "₹45,000", 
      confidence: 85
    },
    {
      name: "Maize", 
      nameHi: "मक्का", 
      namePb: "ਮੱਕੀ", 
      season: "Kharif/Rabi", 
      soil: "Sandy-Loam", 
      yield: "6-8 tons/hectare", 
      profitMargin: "₹35,000", 
      confidence: 90
    }
  ],
  
  liveMandiPrices: [
    {crop: "Rice", cropHi: "चावल", cropPb: "ਚੌਲ", price: 1850, change: "+2.5%", trend: "up", market: "Delhi", lastUpdate: "2 mins ago", volume: "1200 tons"},
    {crop: "Wheat", cropHi: "गेहूं", cropPb: "ਕਣਕ", price: 2100, change: "+1.2%", trend: "up", market: "Punjab", lastUpdate: "1 min ago", volume: "2500 tons"},
    {crop: "Sugarcane", cropHi: "गन्ना", cropPb: "ਗੰਨਾ", price: 350, change: "-0.8%", trend: "down", market: "UP", lastUpdate: "3 mins ago", volume: "800 tons"},
    {crop: "Cotton", cropHi: "कपास", cropPb: "ਕਪਾਹ", price: 5200, change: "+3.1%", trend: "up", market: "Gujarat", lastUpdate: "1 min ago", volume: "450 tons"},
    {crop: "Onion", cropHi: "प्याज", cropPb: "ਪਿਆਜ਼", price: 1200, change: "-5.2%", trend: "down", market: "Maharashtra", lastUpdate: "4 mins ago", volume: "600 tons"}
  ],

  aiAssistant: {
    name: "Krishi Mitra",
    avatar: "🤖",
    responses: {
      greeting: {
        en: "Hello farmer! How can I help you today?",
        hi: "नमस्ते किसान भाई! आज मैं आपकी कैसे मदद कर सकता हूं?",
        pb: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਕਿਸਾਨ ਜੀ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?"
      },
      cropAdvice: {
        en: "Based on your soil and weather data, I recommend these crops for maximum profit.",
        hi: "आपकी मिट्टी और मौसम के आधार पर, मैं अधिकतम लाभ के लिए इन फसलों की सलाह देता हूं।",
        pb: "ਤੁਹਾਡੀ ਮਿੱਟੀ ਅਤੇ ਮੌਸਮ ਦੇ ਆਧਾਰ 'ਤੇ, ਮੈਂ ਵੱਧ ਤੋਂ ਵੱਧ ਫਾਇਦੇ ਲਈ ਇਨ੍ਹਾਂ ਫਸਲਾਂ ਦੀ ਸਲਾਹ ਦਿੰਦਾ ਹਾਂ।"
      },
      weather: {
        en: "Today's weather is perfect for farming activities. Temperature is 28°C with 65% humidity.",
        hi: "आज का मौसम खेती की गतिविधियों के लिए बिल्कुल सही है। तापमान 28°C और 65% नमी है।",
        pb: "ਅੱਜ ਦਾ ਮੌਸਮ ਖੇਤੀ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਲਈ ਬਿਲਕੁਲ ਸਹੀ ਹੈ। ਤਾਪਮਾਨ 28°C ਅਤੇ 65% ਨਮੀ ਹੈ।"
      },
      prices: {
        en: "Current wheat price is ₹2100 per quintal, up by 1.2% from yesterday.",
        hi: "वर्तमान गेहूं की कीमत ₹2100 प्रति क्विंटल है, जो कल से 1.2% अधिक है।",
        pb: "ਮੌਜੂਦਾ ਕਣਕ ਦੀ ਕੀਮਤ ₹2100 ਪ੍ਰਤੀ ਕੁਇੰਟਲ ਹੈ, ਜੋ ਕੱਲ੍ਹ ਤੋਂ 1.2% ਵੱਧ ਹੈ।"
      }
    }
  },

  voiceCommands: [
    {command: "Hey Krishi", action: "activateAssistant"},
    {command: "मौसम बताओ", action: "showWeather"},
    {command: "ਮੌਸਮ ਦੱਸੋ", action: "showWeather"},
    {command: "Weather update", action: "showWeather"},
    {command: "मंडी भाव", action: "showPrices"},
    {command: "ਮੰਡੀ ਦੇ ਭਾਅ", action: "showPrices"},
    {command: "Market rates", action: "showPrices"},
    {command: "Crop suggestion", action: "showCropAdvisory"},
    {command: "फसल सुझाव", action: "showCropAdvisory"},
    {command: "ਫਸਲ ਸੁਝਾਅ", action: "showCropAdvisory"}
  ],

  tutorials: [
    {
      title: "Modern Irrigation Techniques", 
      titleHi: "आधुनिक सिंचाई तकनीक", 
      titlePb: "ਆਧੁਨਿਕ ਸਿੰਚਾਈ ਤਕਨੀਕ",
      duration: "15 min", 
      views: 12500, 
      category: "crop",
      hasAudio: true
    },
    {
      title: "Organic Pest Control Methods", 
      titleHi: "जैविक कीट नियंत्रण विधियां", 
      titlePb: "ਜੈਵਿਕ ਕੀਟ ਨਿਯੰਤਰਣ ਵਿਧੀਆਂ",
      duration: "20 min", 
      views: 8900, 
      category: "pest",
      hasAudio: true
    },
    {
      title: "Soil Testing at Home", 
      titleHi: "घर पर मिट्टी परीक्षण", 
      titlePb: "ਘਰ ਵਿੱਚ ਮਿੱਟੀ ਦੀ ਜਾਂਚ",
      duration: "12 min", 
      views: 15600, 
      category: "crop",
      hasAudio: true
    },
    {
      title: "Smart Irrigation Systems", 
      titleHi: "स्मार्ट सिंचाई प्रणाली", 
      titlePb: "ਸਮਾਰਟ ਸਿੰਚਾਈ ਪ੍ਰਣਾਲੀ",
      duration: "18 min", 
      views: 7800, 
      category: "irrigation",
      hasAudio: true
    }
  ],

  forumPosts: [
    {
      question: "Best time to plant tomatoes in Punjab?", 
      questionHi: "पंजाब में टमाटर लगाने का सबसे अच्छा समय?", 
      questionPb: "ਪੰਜਾਬ ਵਿੱਚ ਟਮਾਟਰ ਲਗਾਉਣ ਦਾ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮਾਂ?",
      answers: 5, 
      author: "Ramesh Kumar",
      hasVoice: true
    },
    {
      question: "How to control aphids naturally?", 
      questionHi: "माहूं को प्राकृतिक रूप से कैसे नियंत्रित करें?", 
      questionPb: "ਕਿੜਿਆਂ ਨੂੰ ਕੁਦਰਤੀ ਤਰੀਕੇ ਨਾਲ ਕਿਵੇਂ ਕਾਬੂ ਕਰਨਾ?",
      answers: 8, 
      author: "Priya Sharma",
      hasVoice: true
    },
    {
      question: "Irrigation schedule for wheat crop?", 
      questionHi: "गेहूं की फसल के लिए सिंचाई कार्यक्रम?", 
      questionPb: "ਕਣਕ ਦੀ ਫਸਲ ਲਈ ਸਿੰਚਾਈ ਸਮਾਂ-ਸਾਰਣੀ?",
      answers: 3, 
      author: "Suresh Patel",
      hasVoice: false
    }
  ],

  weather: {
    current: {temp: 28, humidity: 65, condition: "Partly Cloudy", wind: "12km/h", visibility: "10km", sunrise: "6:24"},
    forecast: [
      {day: "Today", high: 30, low: 22, rain: 20, icon: "☀️"},
      {day: "Tomorrow", high: 32, low: 24, rain: 10, icon: "⛅"},
      {day: "Day 3", high: 29, low: 21, rain: 60, icon: "🌧️"},
      {day: "Day 4", high: 27, low: 20, rain: 80, icon: "⛈️"},
      {day: "Day 5", high: 31, low: 23, rain: 5, icon: "☀️"}
    ]
  }
};

// Application State Management
let currentLanguage = 'en';
let isLoggedIn = false;
let otpSent = false;
let isOffline = false;
let aiAssistantActive = false;
let voiceRecognitionActive = false;
let speechSynthesis = window.speechSynthesis;
let currentVoiceInput = null;
let priceUpdateInterval = null;
let fontSize = 'normal';
let highContrast = false;

// Language Management
const translations = {
  en: {
    'Send OTP': 'Send OTP',
    'Verify OTP': 'Verify OTP',
    'Login': 'Login',
    'Enter OTP': 'Enter OTP',
    'Enter your mobile number': 'Enter your mobile number',
    'Enter 4-digit OTP': 'Enter 4-digit OTP',
    'Search tutorials, courses...': 'Search tutorials, courses...',
    'Describe your question in detail...': 'Describe your question in detail...'
  },
  hi: {
    'Send OTP': 'OTP भेजें',
    'Verify OTP': 'OTP सत्यापित करें',
    'Login': 'लॉगिन',
    'Enter OTP': 'OTP दर्ज करें',
    'Enter your mobile number': 'अपना मोबाइल नंबर दर्ज करें',
    'Enter 4-digit OTP': '4-अंकीय OTP दर्ज करें',
    'Search tutorials, courses...': 'ट्यूटोरियल, कोर्स खोजें...',
    'Describe your question in detail...': 'अपने प्रश्न का विस्तार से वर्णन करें...'
  },
  pb: {
    'Send OTP': 'OTP ਭੇਜੋ',
    'Verify OTP': 'OTP ਪ੍ਰਮਾਣਿਤ ਕਰੋ',
    'Login': 'ਲਾਗਿਨ',
    'Enter OTP': 'OTP ਦਾਖਲ ਕਰੋ',
    'Enter your mobile number': 'ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    'Enter 4-digit OTP': '4-ਅੰਕਾਂ ਦਾ OTP ਦਰਜ ਕਰੋ',
    'Search tutorials, courses...': 'ਟਿਊਟੋਰਿਅਲ, ਕੋਰਸ ਖੋਜੋ...',
    'Describe your question in detail...': 'ਆਪਣੇ ਸਵਾਲ ਦਾ ਵਿਸਥਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ...'
  }
};

// Global functions that need to be available immediately
window.setLanguage = function(lang) {
  currentLanguage = lang;
  
  // Update language button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  updateLanguageDisplay();
  updatePlaceholders();
  refreshDynamicContent();
  
  // Save preference
  localStorage.setItem('fasalLanguage', lang);
  
  // Speak language change confirmation if speech is available
  if (window.speechSynthesis) {
    speakText(getTranslatedText('Language changed', 'भाषा बदली गई', 'ਭਾਸ਼ਾ ਬਦਲੀ ਗਈ'), lang);
  }
};

window.handleLogin = function() {
  const mobileInput = document.getElementById('mobileInput');
  const otpInput = document.getElementById('otpInput');
  const loginBtn = document.getElementById('loginBtn');
  const otpGroup = document.getElementById('otpGroup');
  const biometricOption = document.getElementById('biometricOption');
  
  if (!otpSent) {
    const mobile = mobileInput.value.trim();
    if (mobile.length !== 10 || !/^\d+$/.test(mobile)) {
      showNotification(
        getTranslatedText(
          'Please enter a valid 10-digit mobile number',
          'कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें',
          'ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ 10-ਅੰਕਾਂ ਦਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਾਖਲ ਕਰੋ'
        ),
        'error'
      );
      return;
    }
    
    // Show loading state
    const btnText = loginBtn.querySelector('.btn-text');
    const loadingSpinner = loginBtn.querySelector('.loading-spinner');
    
    if (btnText && loadingSpinner) {
      loginBtn.classList.add('btn-loading');
      btnText.style.opacity = '0';
      loadingSpinner.classList.remove('hidden');
    }
    
    setTimeout(() => {
      otpSent = true;
      otpGroup.style.display = 'block';
      if (biometricOption) biometricOption.style.display = 'block';
      
      if (btnText) {
        btnText.textContent = getTranslatedText('Verify OTP', 'OTP सत्यापित करें', 'OTP ਪ੍ਰਮਾਣਿਤ ਕਰੋ');
      }
      mobileInput.disabled = true;
      
      // Remove loading state
      if (btnText && loadingSpinner) {
        loginBtn.classList.remove('btn-loading');
        btnText.style.opacity = '1';
        loadingSpinner.classList.add('hidden');
      }
      
      showNotification(
        getTranslatedText(
          'OTP sent to your mobile number: 1234',
          'आपके मोबाइल नंबर पर OTP भेजा गया: 1234',
          'ਤੁਹਾਡੇ ਮੋਬਾਈਲ ਨੰਬਰ \'ਤੇ OTP ਭੇਜਿਆ ਗਿਆ: 1234'
        ),
        'success'
      );
      
      if (otpInput) otpInput.focus();
    }, 2000);
  } else {
    const otp = otpInput.value.trim();
    if (otp === '1234') {
      loginSuccess();
    } else {
      showNotification(
        getTranslatedText(
          'Invalid OTP. Please try 1234',
          'गलत OTP। कृपया 1234 का उपयोग करें',
          'ਗਲਤ OTP। ਕਿਰਪਾ ਕਰਕੇ 1234 ਦਾ ਉਪਯੋਗ ਕਰੋ'
        ),
        'error'
      );
    }
  }
};

window.authenticateBiometric = function() {
  showNotification(
    getTranslatedText(
      'Place your finger on the sensor...',
      'सेंसर पर अपनी उंगली रखें...',
      'ਸੈਂਸਰ \'ਤੇ ਆਪਣੀ ਉੰਗਲ ਰੱਖੋ...'
    ),
    'info'
  );
  
  // Simulate biometric authentication
  setTimeout(() => {
    if (Math.random() > 0.2) { // 80% success rate
      loginSuccess();
    } else {
      showNotification(
        getTranslatedText(
          'Biometric authentication failed. Please try OTP.',
          'बायोमेट्रिक प्रमाणीकरण विफल। कृपया OTP आज़माएं।',
          'ਬਾਇਓਮੈਟਰਿਕ ਪ੍ਰਮਾਣਿਕਤਾ ਫੇਲ੍ਹ। ਕਿਰਪਾ ਕਰਕੇ OTP ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ।'
        ),
        'error'
      );
    }
  }, 3000);
};

window.toggleAssistant = function() {
  aiAssistantActive = !aiAssistantActive;
  const aiPanel = document.getElementById('aiPanel');
  const voicePulse = document.getElementById('voicePulse');
  
  if (aiAssistantActive) {
    if (aiPanel) aiPanel.classList.remove('hidden');
    if (voicePulse) voicePulse.classList.add('active');
    addAIMessage(appData.aiAssistant.responses.greeting[currentLanguage]);
  } else {
    if (aiPanel) aiPanel.classList.add('hidden');
    if (voicePulse) voicePulse.classList.remove('active');
  }
};

window.closeAssistant = function() {
  aiAssistantActive = false;
  const aiPanel = document.getElementById('aiPanel');
  const voicePulse = document.getElementById('voicePulse');
  if (aiPanel) aiPanel.classList.add('hidden');
  if (voicePulse) voicePulse.classList.remove('active');
};

window.showScreen = function(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
  
  updateNavigation(screenId);
  window.scrollTo(0, 0);
  
  // Load screen-specific content
  switch (screenId) {
    case 'mandiScreen':
      loadMandiPrices();
      break;
    case 'weatherScreen':
      loadWeatherForecast();
      break;
    case 'learningScreen':
      loadTutorials();
      break;
    case 'communityScreen':
      loadForumPosts();
      break;
  }
};

// Make more functions globally available
window.toggleHighContrast = toggleHighContrast;
window.increaseFontSize = increaseFontSize;
window.startVoiceCommand = startVoiceCommand;
window.showVoiceCommands = showVoiceCommands;
window.hideVoiceCommands = hideVoiceCommands;
window.startVoiceInput = startVoiceInput;
window.updatePH = updatePH;
window.getCropRecommendation = getCropRecommendation;
window.refreshPrices = refreshPrices;
window.showPriceAlerts = showPriceAlerts;
window.getVoiceWeather = getVoiceWeather;
window.startVoiceSearch = startVoiceSearch;
window.speakRecommendations = speakRecommendations;
window.speakAlert = speakAlert;
window.showCategory = showCategory;
window.playTutorial = playTutorial;
window.openPost = openPost;
window.startVoicePost = startVoicePost;
window.showExpertChat = showExpertChat;
window.showPostQuestion = showPostQuestion;
window.hidePostQuestion = hidePostQuestion;
window.showNotifications = showNotifications;
window.hideNotifications = hideNotifications;
window.quickWeatherUpdate = quickWeatherUpdate;
window.quickPriceCheck = quickPriceCheck;
window.showEmergencyContacts = showEmergencyContacts;
window.showDownloads = showDownloads;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  startLivePriceUpdates();
  initializeVoiceRecognition();
  loadDynamicContent();
  setupEventListeners();
  
  // Simulate network status changes
  setInterval(() => {
    if (Math.random() > 0.95) {
      toggleOfflineMode();
    }
  }, 30000);
});

function initializeApp() {
  updateLanguageDisplay();
  updatePlaceholders();
  
  // Check saved preferences
  const savedLanguage = localStorage.getItem('fasalLanguage');
  const savedFontSize = localStorage.getItem('fasalFontSize');
  const savedContrast = localStorage.getItem('fasalHighContrast');
  
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    setLanguage(currentLanguage);
  }
  
  if (savedFontSize) {
    fontSize = savedFontSize;
    applyFontSize();
  }
  
  if (savedContrast === 'true') {
    highContrast = true;
    document.body.classList.add('high-contrast');
  }
  
  // Check if user was previously logged in
  const savedLogin = localStorage.getItem('fasalPathshalaLogin');
  if (savedLogin) {
    isLoggedIn = true;
    showScreen('homeScreen');
    const bottomNav = document.getElementById('bottomNav');
    if (bottomNav) bottomNav.style.display = 'flex';
  }
}

function updateLanguageDisplay() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(element => {
    const key = `data-${currentLanguage}`;
    const text = element.getAttribute(key);
    if (text) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });
}

function updatePlaceholders() {
  const placeholderElements = [
    { id: 'mobileInput', key: 'Enter your mobile number' },
    { id: 'otpInput', key: 'Enter 4-digit OTP' },
    { id: 'learningSearch', key: 'Search tutorials, courses...' },
    { id: 'questionText', key: 'Describe your question in detail...' }
  ];
  
  placeholderElements.forEach(({id, key}) => {
    const element = document.getElementById(id);
    if (element && translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });
}

// Accessibility Functions
function toggleHighContrast() {
  highContrast = !highContrast;
  document.body.classList.toggle('high-contrast', highContrast);
  localStorage.setItem('fasalHighContrast', highContrast);
  
  showNotification(
    getTranslatedText(
      highContrast ? 'High contrast enabled' : 'High contrast disabled',
      highContrast ? 'उच्च कंट्रास्ट सक्षम' : 'उच्च कंट्रास्ट अक्षम',
      highContrast ? 'ਉੱਚ ਕੰਟਰਾਸਟ ਸਮਰੱਥ' : 'ਉੱਚ ਕੰਟਰਾਸਟ ਅਸਮਰੱਥ'
    ), 
    'info'
  );
}

function increaseFontSize() {
  const sizes = ['normal', 'large', 'extra-large'];
  const currentIndex = sizes.indexOf(fontSize);
  const nextIndex = (currentIndex + 1) % sizes.length;
  
  // Remove old class
  document.body.classList.remove(`font-${fontSize}`);
  
  fontSize = sizes[nextIndex];
  
  // Add new class
  if (fontSize !== 'normal') {
    document.body.classList.add(`font-${fontSize}`);
  }
  
  localStorage.setItem('fasalFontSize', fontSize);
  
  showNotification(
    getTranslatedText(
      `Font size: ${fontSize}`,
      `फ़ॉन्ट साइज़: ${fontSize}`,
      `ਫ਼ਾਂਟ ਸਾਈਜ਼: ${fontSize}`
    ), 
    'info'
  );
}

function applyFontSize() {
  if (fontSize !== 'normal') {
    document.body.classList.add(`font-${fontSize}`);
  }
}

function loginSuccess() {
  isLoggedIn = true;
  localStorage.setItem('fasalPathshalaLogin', 'true');
  showScreen('homeScreen');
  const bottomNav = document.getElementById('bottomNav');
  if (bottomNav) bottomNav.style.display = 'flex';
  
  setTimeout(() => {
    showNotification(
      getTranslatedText(
        'Welcome to Fasal Pathshala!',
        'फसल पाठशाला में आपका स्वागत है!',
        'ਫਸਲ ਪਾਠਸ਼ਾਲਾ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ!'
      ),
      'success'
    );
    
    // Welcome voice message
    if (window.speechSynthesis) {
      speakText(appData.aiAssistant.responses.greeting[currentLanguage]);
    }
    
    // Show AI assistant briefly
    setTimeout(() => {
      toggleAssistant();
      setTimeout(closeAssistant, 3000);
    }, 1000);
  }, 500);
}

// Voice Recognition Functions
function initializeVoiceRecognition() {
  // Check for speech recognition support
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    window.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    if (window.recognition) {
      window.recognition.continuous = false;
      window.recognition.interimResults = false;
      
      window.recognition.onresult = function(event) {
        const command = event.results[0][0].transcript.toLowerCase().trim();
        handleVoiceCommand(command);
      };
      
      window.recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
        stopVoiceRecording();
      };
      
      window.recognition.onend = function() {
        stopVoiceRecording();
      };
    }
  }
  
  // Listen for "Hey Krishi" wake word simulation
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === ' ') { // Ctrl+Space as wake word simulation
      e.preventDefault();
      if (!aiAssistantActive) {
        toggleAssistant();
      }
      startVoiceCommand();
    }
  });
}

function startVoiceCommand() {
  if (!window.recognition) {
    showVoiceCommands();
    return;
  }
  
  startVoiceRecording();
  
  try {
    window.recognition.lang = getVoiceLanguage(currentLanguage);
    window.recognition.start();
  } catch (e) {
    console.error('Error starting voice recognition:', e);
    stopVoiceRecording();
  }
}

function startVoiceRecording() {
  voiceRecognitionActive = true;
  const voiceBtn = document.getElementById('voiceBtn');
  const voicePulse = document.getElementById('voicePulse');
  
  if (voiceBtn) {
    voiceBtn.classList.add('listening');
    const speakSpan = voiceBtn.querySelector('span:last-child');
    if (speakSpan) {
      speakSpan.textContent = getTranslatedText('Listening...', 'सुन रहे हैं...', 'ਸੁਣ ਰਹੇ ਹਾਂ...');
    }
  }
  
  if (voicePulse) {
    voicePulse.classList.add('active');
  }
  
  // Auto-stop after 10 seconds
  setTimeout(() => {
    if (voiceRecognitionActive) {
      stopVoiceRecording();
    }
  }, 10000);
}

function stopVoiceRecording() {
  voiceRecognitionActive = false;
  const voiceBtn = document.getElementById('voiceBtn');
  const voicePulse = document.getElementById('voicePulse');
  
  if (voiceBtn) {
    voiceBtn.classList.remove('listening');
    const speakSpan = voiceBtn.querySelector('span:last-child');
    if (speakSpan) {
      speakSpan.textContent = getTranslatedText('Speak', 'बोलें', 'ਬੋਲੋ');
    }
  }
  
  if (voicePulse) {
    voicePulse.classList.remove('active');
  }
}

function handleVoiceCommand(command) {
  console.log('Voice command received:', command);
  
  // Find matching command
  const matchedCommand = appData.voiceCommands.find(cmd => 
    command.includes(cmd.command.toLowerCase()) || 
    cmd.command.toLowerCase().includes(command)
  );
  
  if (matchedCommand) {
    executeVoiceAction(matchedCommand.action);
    addAIMessage(getContextualResponse(matchedCommand.action));
  } else {
    // Fallback responses
    const response = getTranslatedText(
      "I didn't understand that command. Try 'Hey Krishi' followed by 'weather', 'prices', or 'crop advice'.",
      "मुझे वह कमांड समझ नहीं आई। 'हे कृषि' के बाद 'मौसम', 'भाव' या 'फसल सलाह' कहें।",
      "ਮੈਨੂੰ ਇਹ ਕਮਾਂਡ ਸਮਝ ਨਹੀਂ ਆਈ। 'ਹੇ ਕ੍ਰਿਸ਼ੀ' ਦੇ ਬਾਅਦ 'ਮੌਸਮ', 'ਰੇਟ' ਜਾਂ 'ਫਸਲ ਸਲਾਹ' ਕਹੋ।"
    );
    addAIMessage(response);
    if (window.speechSynthesis) {
      speakText(response);
    }
  }
}

function executeVoiceAction(action) {
  switch (action) {
    case 'activateAssistant':
      if (!aiAssistantActive) toggleAssistant();
      break;
    case 'showWeather':
      showScreen('weatherScreen');
      break;
    case 'showPrices':
      showScreen('mandiScreen');
      break;
    case 'showCropAdvisory':
      showScreen('cropAdvisoryScreen');
      break;
    default:
      break;
  }
}

function getContextualResponse(action) {
  const responses = appData.aiAssistant.responses;
  switch (action) {
    case 'showWeather':
      return responses.weather[currentLanguage];
    case 'showPrices':
      return responses.prices[currentLanguage];
    case 'showCropAdvisory':
      return responses.cropAdvice[currentLanguage];
    default:
      return responses.greeting[currentLanguage];
  }
}

function addAIMessage(message) {
  const messagesContainer = document.getElementById('aiMessages');
  if (!messagesContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = 'ai-message';
  messageDiv.textContent = message;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Limit message history
  const messages = messagesContainer.querySelectorAll('.ai-message');
  if (messages.length > 5) {
    messages[0].remove();
  }
}

function startVoiceInput(type) {
  currentVoiceInput = type;
  
  if (!window.recognition) {
    showNotification(
      getTranslatedText(
        'Voice input not supported in this browser',
        'इस ब्राउज़र में आवाज़ इनपुट समर्थित नहीं है',
        'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਇੰਪੁੱਟ ਸਮਰਥਿਤ ਨਹੀਂ'
      ),
      'warning'
    );
    return;
  }
  
  startVoiceRecording();
  
  window.recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    handleVoiceInput(type, transcript);
    stopVoiceRecording();
  };
  
  try {
    window.recognition.start();
  } catch (e) {
    stopVoiceRecording();
  }
}

function handleVoiceInput(type, text) {
  switch (type) {
    case 'mobile':
      const numbers = text.replace(/\D/g, '');
      if (numbers.length === 10) {
        const mobileInput = document.getElementById('mobileInput');
        if (mobileInput) mobileInput.value = numbers;
      }
      break;
    case 'otp':
      const otpNumbers = text.replace(/\D/g, '');
      if (otpNumbers.length <= 4) {
        const otpInput = document.getElementById('otpInput');
        if (otpInput) otpInput.value = otpNumbers;
      }
      break;
    case 'soil':
      const soilTypes = ['clay', 'sandy', 'loam', 'black'];
      const matchedSoil = soilTypes.find(type => text.toLowerCase().includes(type));
      if (matchedSoil) {
        const soilSelect = document.getElementById('soilType');
        if (soilSelect) soilSelect.value = matchedSoil;
      }
      break;
    case 'question':
      const questionTextarea = document.getElementById('questionText');
      if (questionTextarea) questionTextarea.value = text;
      break;
    default:
      break;
  }
}

// Text-to-Speech Functions
function speakText(text, lang = currentLanguage) {
  if (!window.speechSynthesis) return;
  
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = getVoiceLanguage(lang);
  utterance.rate = 0.9;
  utterance.pitch = 1;
  
  // Get appropriate voice
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang.startsWith(getVoiceLanguage(lang).split('-')[0]));
  if (voice) {
    utterance.voice = voice;
  }
  
  window.speechSynthesis.speak(utterance);
}

function getVoiceLanguage(lang) {
  const langMap = {
    'en': 'en-US',
    'hi': 'hi-IN',
    'pb': 'pa-IN'
  };
  return langMap[lang] || 'en-US';
}

function speakRecommendations() {
  const recommendations = document.getElementById('cropRecommendations');
  if (recommendations) {
    const text = recommendations.textContent;
    speakText(text);
  }
}

function speakAlert(alertElement) {
  const title = alertElement.querySelector('.alert-title');
  const desc = alertElement.querySelector('.alert-desc');
  if (title && desc) {
    speakText(`${title.textContent}. ${desc.textContent}`);
  }
}

function getVoiceWeather() {
  const weatherResponse = appData.aiAssistant.responses.weather[currentLanguage];
  if (window.speechSynthesis) {
    speakText(weatherResponse);
  }
  addAIMessage(weatherResponse);
  if (!aiAssistantActive) toggleAssistant();
}

// Live Price Updates
function startLivePriceUpdates() {
  updatePriceTicker();
  updateMandiPrices();
  
  // Update prices every 30 seconds
  priceUpdateInterval = setInterval(() => {
    updatePriceTicker();
    updateMandiPrices();
  }, 30000);
}

function updatePriceTicker() {
  const tickerContent = document.querySelector('.ticker-content');
  if (!tickerContent) return;
  
  let tickerHTML = '';
  appData.liveMandiPrices.forEach(item => {
    const trendIcon = item.trend === 'up' ? '📈' : '📉';
    const cropName = getCropName(item.crop);
    tickerHTML += `<span class="ticker-item">${cropName} ₹${item.price} ${trendIcon} ${item.change}</span>`;
  });
  
  tickerContent.innerHTML = tickerHTML;
}

function updateMandiPrices() {
  // Simulate price fluctuations
  appData.liveMandiPrices.forEach(item => {
    const fluctuation = (Math.random() - 0.5) * 0.1; // ±5% max change
    const newPrice = Math.round(item.price * (1 + fluctuation));
    const changePercent = ((newPrice - item.price) / item.price * 100).toFixed(1);
    
    item.price = newPrice;
    item.change = (changePercent >= 0 ? '+' : '') + changePercent + '%';
    item.trend = changePercent >= 0 ? 'up' : 'down';
    item.lastUpdate = Math.floor(Math.random() * 5) + 1 + ' min ago';
  });
  
  // Update UI if on prices screen
  if (document.querySelector('.screen.active')?.id === 'mandiScreen') {
    loadMandiPrices();
  }
  
  // Update last updated time
  const updateTime = document.querySelector('.update-time');
  if (updateTime) {
    updateTime.textContent = 'Just now';
  }
}

function refreshDynamicContent() {
  const activeScreen = document.querySelector('.screen.active');
  if (!activeScreen) return;
  
  switch (activeScreen.id) {
    case 'mandiScreen':
      loadMandiPrices();
      break;
    case 'weatherScreen':
      loadWeatherForecast();
      break;
    case 'learningScreen':
      loadTutorials();
      break;
    case 'communityScreen':
      loadForumPosts();
      break;
  }
}

function refreshPrices() {
  const refreshBtn = document.querySelector('.refresh-btn');
  if (refreshBtn) {
    refreshBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
      refreshBtn.style.transform = '';
    }, 500);
  }
  
  updateMandiPrices();
  showNotification(
    getTranslatedText(
      'Prices updated successfully',
      'मूल्य सफलतापूर्वक अपडेट किए गए',
      'ਕੀਮਤਾਂ ਸਫਲਤਾਪੂਰਵਕ ਅੱਪਡੇਟ ਕੀਤੀਆਂ ਗਈਆਂ'
    ),
    'success'
  );
}

function updateNavigation(activeScreen) {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  
  const screenNavMap = {
    'homeScreen': 0,
    'cropAdvisoryScreen': 1,
    'weatherScreen': 2,
    'mandiScreen': 3,
    'communityScreen': 4
  };
  
  const activeIndex = screenNavMap[activeScreen];
  if (activeIndex !== undefined && navItems[activeIndex]) {
    navItems[activeIndex].classList.add('active');
  }
}

// Dynamic Content Loading
function loadDynamicContent() {
  loadWeatherForecast();
  loadMandiPrices();
  loadTutorials();
  loadForumPosts();
}

function loadMandiPrices() {
  const priceList = document.getElementById('priceList');
  if (!priceList) return;
  
  let html = '';
  appData.liveMandiPrices.forEach(item => {
    const trendClass = item.trend === 'up' ? 'positive' : 'negative';
    const trendIcon = item.trend === 'up' ? '📈' : '📉';
    const cropName = getCropName(item.crop);
    
    html += `
      <div class="price-item">
        <div class="price-info">
          <h4>${cropName}</h4>
          <div class="price-details">${item.market} • ${getTranslatedText('per quintal', 'प्रति क्विंटल', 'ਪ੍ਰਤੀ ਕੁਇੰਟਲ')}</div>
          <div class="price-details">${getTranslatedText('Volume', 'मात्रा', 'ਮਾਤਰਾ')}: ${item.volume}</div>
        </div>
        <div class="price-change">
          <div class="price-amount">₹${item.price.toLocaleString()}</div>
          <div class="price-trend ${trendClass}">
            ${trendIcon} ${item.change}
          </div>
          <div class="update-time">${item.lastUpdate}</div>
        </div>
      </div>
    `;
  });
  
  priceList.innerHTML = html;
}

function loadWeatherForecast() {
  const forecastList = document.getElementById('forecastList');
  if (!forecastList) return;
  
  let html = '';
  appData.weather.forecast.forEach(day => {
    html += `
      <div class="forecast-item">
        <div class="forecast-day">${day.day}</div>
        <div class="forecast-icon">${day.icon}</div>
        <div class="forecast-temps">
          <span class="temp-high">${day.high}°</span>
          <span class="temp-low">${day.low}°</span>
        </div>
        <div class="rain-chance">${day.rain}% ${getTranslatedText('rain', 'बारिश', 'ਬਾਰਿਸ਼')}</div>
      </div>
    `;
  });
  
  forecastList.innerHTML = html;
}

function loadTutorials() {
  const tutorialList = document.getElementById('tutorialList');
  if (!tutorialList) return;
  
  displayTutorials(appData.tutorials);
}

function displayTutorials(tutorials) {
  const tutorialList = document.getElementById('tutorialList');
  if (!tutorialList) return;
  
  let html = '';
  
  tutorials.forEach(tutorial => {
    const icon = tutorial.category === 'pest' ? '🐛' : 
                 tutorial.category === 'crop' ? '🌱' : 
                 tutorial.category === 'irrigation' ? '💧' : '📚';
    
    const title = getTutorialTitle(tutorial);
    
    html += `
      <div class="tutorial-item" onclick="playTutorial('${tutorial.title}')">
        <div class="tutorial-thumbnail">${icon}</div>
        <div class="tutorial-content">
          <h4>${title}</h4>
          <div class="tutorial-meta">
            <span>⏱️ ${tutorial.duration}</span>
            <span>👁️ ${tutorial.views.toLocaleString()}</span>
            ${tutorial.hasAudio ? '<span>🎤 ' + getTranslatedText('Audio', 'ऑडियो', 'ਆਡੀਓ') + '</span>' : ''}
          </div>
        </div>
      </div>
    `;
  });
  
  tutorialList.innerHTML = html;
}

function loadForumPosts() {
  const forumList = document.getElementById('forumList');
  if (!forumList) return;
  
  let html = '';
  appData.forumPosts.forEach(post => {
    const question = getPostQuestion(post);
    
    html += `
      <div class="forum-post" onclick="openPost('${post.question}')">
        <div class="post-header">
          <div>
            <div class="post-question">${question}</div>
            <div class="post-meta">
              <span>👤 ${post.author}</span>
              <span>⏰ 2h ago</span>
              ${post.hasVoice ? '<span>🎤 ' + getTranslatedText('Voice', 'आवाज़', 'ਆਵਾਜ਼') + '</span>' : ''}
            </div>
          </div>
          <div class="answer-count">${post.answers}</div>
        </div>
      </div>
    `;
  });
  
  forumList.innerHTML = html;
}

// Helper Functions for Multilingual Content
function getCropName(crop) {
  const cropData = appData.liveMandiPrices.find(p => p.crop === crop);
  if (!cropData) return crop;
  
  switch (currentLanguage) {
    case 'hi': return cropData.cropHi || crop;
    case 'pb': return cropData.cropPb || crop;
    default: return crop;
  }
}

function getTutorialTitle(tutorial) {
  switch (currentLanguage) {
    case 'hi': return tutorial.titleHi || tutorial.title;
    case 'pb': return tutorial.titlePb || tutorial.title;
    default: return tutorial.title;
  }
}

function getPostQuestion(post) {
  switch (currentLanguage) {
    case 'hi': return post.questionHi || post.question;
    case 'pb': return post.questionPb || post.question;
    default: return post.question;
  }
}

function getTranslatedText(en, hi, pb) {
  switch (currentLanguage) {
    case 'hi': return hi;
    case 'pb': return pb;
    default: return en;
  }
}

// Crop Advisory Functions
function updatePH(value) {
  const phValueElement = document.getElementById('phValue');
  if (phValueElement) {
    phValueElement.textContent = parseFloat(value).toFixed(1);
  }
}

function getCropRecommendation() {
  const soilType = document.getElementById('soilType')?.value;
  const phValue = document.getElementById('phSlider')?.value;
  const state = document.getElementById('stateSelect')?.value;
  const farmArea = document.getElementById('farmArea')?.value;
  
  if (!soilType || !state) {
    showNotification(
      getTranslatedText(
        'Please fill all required fields',
        'कृपया सभी आवश्यक फ़ील्ड भरें',
        'ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਲੋੜੀਂਦੇ ਖੇਤਰ ਭਰੋ'
      ),
      'warning'
    );
    return;
  }
  
  const resultsDiv = document.getElementById('cropResults');
  const recommendationsDiv = document.getElementById('cropRecommendations');
  const btn = document.querySelector('.btn-large.enhanced');
  
  // Show loading state
  if (btn) {
    btn.classList.add('btn-loading');
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    if (btnText) btnText.style.opacity = '0';
    if (btnLoading) btnLoading.classList.remove('hidden');
  }
  
  if (resultsDiv) resultsDiv.style.display = 'block';
  if (recommendationsDiv) {
    recommendationsDiv.innerHTML = '<div class="loading" style="text-align: center; padding: 2rem;">🤖 AI is analyzing your data...</div>';
  }
  
  // Simulate AI processing
  setTimeout(() => {
    const recommendations = getCropRecommendations(soilType, phValue, state, farmArea);
    displayCropRecommendations(recommendations);
    
    // Remove loading state
    if (btn) {
      btn.classList.remove('btn-loading');
      const btnText = btn.querySelector('.btn-text');
      const btnLoading = btn.querySelector('.btn-loading');
      if (btnText) btnText.style.opacity = '1';
      if (btnLoading) btnLoading.classList.add('hidden');
    }
    
    // Speak recommendations
    const aiResponse = appData.aiAssistant.responses.cropAdvice[currentLanguage];
    addAIMessage(aiResponse);
    if (window.speechSynthesis) {
      speakText(aiResponse);
    }
    
  }, 3000);
}

function getCropRecommendations(soilType, phValue, state, farmArea) {
  // AI-like recommendation logic
  const suitableCrops = appData.crops.filter(crop => {
    const cropSoil = crop.soil.toLowerCase();
    const selectedSoil = soilType.toLowerCase();
    return cropSoil.includes(selectedSoil) || selectedSoil.includes(cropSoil.split('-')[0]);
  });
  
  // pH recommendations
  const ph = parseFloat(phValue || 7);
  const phRecommendations = [];
  if (ph < 6.5) {
    phRecommendations.push(getTranslatedText('Apply lime to reduce acidity', 'अम्लता कम करने के लिए चूना डालें', 'ਤੇਜ਼ਾਬੀਤਾ ਘਟਾਉਣ ਲਈ ਚੂਨਾ ਪਾਓ'));
  } else if (ph > 7.5) {
    phRecommendations.push(getTranslatedText('Apply sulfur to reduce alkalinity', 'क्षारीयता कम करने के लिए सल्फर डालें', 'ਖਾਰੀਤਾ ਘਟਾਉਣ ਲਈ ਸਲਫਰ ਪਾਓ'));
  }
  
  // Area-based recommendations
  const areaAdvice = farmArea ? getAreaBasedAdvice(parseFloat(farmArea)) : null;
  
  return {
    crops: suitableCrops.length > 0 ? suitableCrops.slice(0, 3) : [appData.crops[0]],
    phRecommendations: phRecommendations,
    areaAdvice: areaAdvice,
    confidence: Math.floor(Math.random() * 10) + 90 // 90-99%
  };
}

function getAreaBasedAdvice(area) {
  if (area < 1) {
    return getTranslatedText(
      'Small scale farming - Focus on high-value crops',
      'छोटे पैमाने की खेती - उच्च मूल्य वाली फसलों पर ध्यान दें',
      'ਛੋਟੇ ਪੈਮਾਨੇ ਦੀ ਖੇਤੀ - ਉੱਚ ਮੁੱਲ ਵਾਲੀਆਂ ਫਸਲਾਂ \'ਤੇ ਫੋਕਸ ਕਰੋ'
    );
  } else if (area < 5) {
    return getTranslatedText(
      'Medium scale farming - Consider crop rotation',
      'मध्यम पैमाने की खेती - फसल चक्र पर विचार करें',
      'ਮੱਧਮ ਪੈਮਾਨੇ ਦੀ ਖੇਤੀ - ਫਸਲ ਚੱਕਰ ਬਾਰੇ ਸੋਚੋ'
    );
  } else {
    return getTranslatedText(
      'Large scale farming - Mechanization recommended',
      'बड़े पैमाने की खेती - यंत्रीकरण की सिफारिश',
      'ਵੱਡੇ ਪੈਮਾਨੇ ਦੀ ਖੇਤੀ - ਮਸ਼ੀਨੀਕਰਣ ਦੀ ਸਿਫਾਰਿਸ਼'
    );
  }
}

function displayCropRecommendations(recommendations) {
  const recommendationsDiv = document.getElementById('cropRecommendations');
  if (!recommendationsDiv) return;
  
  let html = '';
  
  // Update confidence meter
  const confidenceFill = document.querySelector('.confidence-fill');
  const confidenceText = document.querySelector('.confidence-text');
  if (confidenceFill && confidenceText) {
    confidenceFill.style.width = recommendations.confidence + '%';
    confidenceText.textContent = getTranslatedText(
      `AI Confidence: ${recommendations.confidence}%`,
      `AI विश्वसनीयता: ${recommendations.confidence}%`,
      `AI ਭਰੋਸਾ: ${recommendations.confidence}%`
    );
  }
  
  // Crop recommendations
  recommendations.crops.forEach(crop => {
    const cropName = getCurrentLanguageCropName(crop);
    html += `
      <div class="crop-recommendation">
        <h4>${cropName}</h4>
        <div class="crop-details">
          <div class="crop-detail">
            <strong>${getTranslatedText('Season:', 'मौसम:', 'ਮੌਸਮ:')}</strong> ${crop.season}
          </div>
          <div class="crop-detail">
            <strong>${getTranslatedText('Expected Yield:', 'अपेक्षित उत्पादन:', 'ਉਮੀਦ ਕੀਤਾ ਉਤਪਾਦਨ:')}</strong> ${crop.yield}
          </div>
          <div class="crop-detail">
            <strong>${getTranslatedText('Profit Potential:', 'लाभ की संभावना:', 'ਲਾਭ ਦੀ ਸੰਭਾਵਨਾ:')}</strong> ${crop.profitMargin}
          </div>
          <div class="crop-detail">
            <strong>${getTranslatedText('AI Confidence:', 'AI विश्वसनीयता:', 'AI ਭਰੋਸਾ:')}</strong> ${crop.confidence}%
          </div>
        </div>
      </div>
    `;
  });
  
  // pH recommendations
  if (recommendations.phRecommendations.length > 0) {
    html += `
      <div class="crop-recommendation">
        <h4>${getTranslatedText('Soil pH Recommendations', 'मिट्टी pH सिफारिशें', 'ਮਿੱਟੀ pH ਸਿਫਾਰਿਸ਼ਾਂ')}</h4>
        <div class="crop-details">
          ${recommendations.phRecommendations.map(rec => `<div class="crop-detail">• ${rec}</div>`).join('')}
        </div>
      </div>
    `;
  }
  
  // Area-based advice
  if (recommendations.areaAdvice) {
    html += `
      <div class="crop-recommendation">
        <h4>${getTranslatedText('Farm Size Recommendations', 'खेत के आकार की सिफारिशें', 'ਖੇਤ ਦੇ ਆਕਾਰ ਦੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ')}</h4>
        <div class="crop-details">
          <div class="crop-detail">${recommendations.areaAdvice}</div>
        </div>
      </div>
    `;
  }
  
  recommendationsDiv.innerHTML = html;
}

function getCurrentLanguageCropName(crop) {
  switch (currentLanguage) {
    case 'hi': return crop.nameHi || crop.name;
    case 'pb': return crop.namePb || crop.name;
    default: return crop.name;
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Form input listeners
  document.addEventListener('input', function(e) {
    if (e.target.id === 'mobileInput') {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    }
    
    if (e.target.id === 'otpInput') {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (e.target.value.length === 4) {
        setTimeout(() => handleLogin(), 500);
      }
    }
    
    if (e.target.id === 'learningSearch') {
      const searchTerm = e.target.value.toLowerCase();
      const filteredTutorials = appData.tutorials.filter(tutorial =>
        tutorial.title.toLowerCase().includes(searchTerm) ||
        (tutorial.titleHi && tutorial.titleHi.toLowerCase().includes(searchTerm)) ||
        (tutorial.titlePb && tutorial.titlePb.toLowerCase().includes(searchTerm))
      );
      displayTutorials(filteredTutorials);
    }
  });
  
  // Category pill listeners
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('category-pill')) {
      const pills = document.querySelectorAll('.category-pill');
      pills.forEach(pill => pill.classList.remove('active'));
      e.target.classList.add('active');
      
      const category = e.target.getAttribute('data-category');
      if (category) {
        showCategory(category);
      }
    }
    
    if (e.target.classList.contains('tab-btn')) {
      const tabs = document.querySelectorAll('.tab-btn');
      tabs.forEach(tab => tab.classList.remove('active'));
      e.target.classList.add('active');
    }
  });
}

// Additional Functions
function showCategory(category) {
  const filteredTutorials = category === 'all' ? 
    appData.tutorials : 
    appData.tutorials.filter(tutorial => tutorial.category === category);
  
  displayTutorials(filteredTutorials);
}

function playTutorial(title) {
  showNotification(
    getTranslatedText(
      `Playing: ${title}`,
      `चला रहे हैं: ${title}`,
      `ਚਲਾ ਰਹੇ ਹਾਂ: ${title}`
    ),
    'info'
  );
  
  const tutorial = appData.tutorials.find(t => t.title === title);
  if (tutorial && tutorial.hasAudio && window.speechSynthesis) {
    speakText(
      getTranslatedText(
        `Starting tutorial: ${title}. This tutorial covers important farming techniques.`,
        `ट्यूटोरियल शुरू: ${title}। यह ट्यूटोरियल महत्वपूर्ण कृषि तकनीकों को कवर करता है।`,
        `ਟਿਊਟੋਰਿਅਲ ਸ਼ੁਰੂ: ${title}। ਇਹ ਟਿਊਟੋਰਿਅਲ ਮਹੱਤਵਪੂਰਣ ਖੇਤੀ ਤਕਨੀਕਾਂ ਨੂੰ ਕਵਰ ਕਰਦਾ ਹੈ।`
      )
    );
  }
}

function openPost(question) {
  showNotification(
    getTranslatedText(
      `Opening: ${question}`,
      `खोल रहे हैं: ${question}`,
      `ਖੋਲ੍ਹ ਰਹੇ ਹਾਂ: ${question}`
    ),
    'info'
  );
}

function startVoicePost() {
  if (!window.recognition) {
    showNotification(
      getTranslatedText(
        'Voice posting not supported in this browser',
        'इस ब्राउज़र में आवाज़ पोस्टिंग समर्थित नहीं है',
        'ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੌਇਸ ਪੋਸਟਿੰਗ ਸਮਰਥਿਤ ਨਹੀਂ'
      ),
      'warning'
    );
    return;
  }
  
  showNotification(
    getTranslatedText(
      'Speak your question...',
      'अपना प्रश्न बोलें...',
      'ਆਪਣਾ ਸਵਾਲ ਬੋਲੋ...'
    ),
    'info'
  );
  
  startVoiceRecording();
  
  window.recognition.onresult = function(event) {
    const question = event.results[0][0].transcript;
    
    // Add to forum posts
    appData.forumPosts.unshift({
      question: question,
      questionHi: question,
      questionPb: question,
      answers: 0,
      author: "You",
      hasVoice: true
    });
    
    loadForumPosts();
    stopVoiceRecording();
    
    showNotification(
      getTranslatedText(
        'Voice question posted successfully!',
        'आवाज़ प्रश्न सफलतापूर्वक पोस्ट किया गया!',
        'ਵੌਇਸ ਸਵਾਲ ਸਫਲਤਾਪੂਰਵਕ ਪੋਸਟ ਕੀਤਾ ਗਿਆ!'
      ),
      'success'
    );
  };
  
  try {
    window.recognition.start();
  } catch (e) {
    stopVoiceRecording();
  }
}

function showExpertChat() {
  showNotification(
    getTranslatedText(
      'Connecting to expert...',
      'विशेषज्ञ से जुड़ रहे हैं...',
      'ਮਾਹਰ ਨਾਲ ਜੁੜ ਰਹੇ ਹਾਂ...'
    ),
    'info'
  );
}

function startVoiceSearch(context = '') {
  currentVoiceInput = 'search';
  startVoiceInput('search');
}

function showPostQuestion() {
  const modal = document.getElementById('questionModal');
  if (modal) modal.classList.remove('hidden');
}

function hidePostQuestion() {
  const modal = document.getElementById('questionModal');
  if (modal) modal.classList.add('hidden');
}

function showVoiceCommands() {
  const modal = document.getElementById('voiceCommandsModal');
  if (modal) modal.classList.remove('hidden');
}

function hideVoiceCommands() {
  const modal = document.getElementById('voiceCommandsModal');
  if (modal) modal.classList.add('hidden');
}

function showNotifications() {
  const panel = document.getElementById('notificationsPanel');
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function hideNotifications() {
  const panel = document.getElementById('notificationsPanel');
  if (panel) {
    panel.classList.add('hidden');
  }
}

function showPriceAlerts() {
  showNotification(
    getTranslatedText(
      'Price alerts feature coming soon!',
      'मूल्य अलर्ट सुविधा जल्द आ रही है!',
      'ਕੀਮਤ ਚੇਤਾਵਨੀ ਵਿਸ਼ੇਸ਼ਤਾ ਜਲਦੀ ਆ ਰਹੀ ਹੈ!'
    ),
    'info'
  );
}

function showDownloads() {
  showNotification(
    getTranslatedText(
      'Downloads feature coming soon!',
      'डाउनलोड सुविधा जल्द आ रही है!',
      'ਡਾਉਨਲੋਡ ਵਿਸ਼ੇਸ਼ਤਾ ਜਲਦੀ ਆ ਰਹੀ ਹੈ!'
    ),
    'info'
  );
}

function quickWeatherUpdate() {
  const weather = appData.weather.current;
  const message = getTranslatedText(
    `Current weather: ${weather.temp}°C, ${weather.condition}. Humidity: ${weather.humidity}%`,
    `वर्तमान मौसम: ${weather.temp}°C, ${weather.condition}। नमी: ${weather.humidity}%`,
    `ਮੌਜੂਦਾ ਮੌਸਮ: ${weather.temp}°C, ${weather.condition}। ਨਮੀ: ${weather.humidity}%`
  );
  
  addAIMessage(message);
  if (window.speechSynthesis) {
    speakText(message);
  }
  
  if (!aiAssistantActive) {
    toggleAssistant();
    setTimeout(closeAssistant, 5000);
  }
}

function quickPriceCheck() {
  const wheat = appData.liveMandiPrices.find(p => p.crop === 'Wheat');
  if (wheat) {
    const message = getTranslatedText(
      `Wheat price: ₹${wheat.price} per quintal, ${wheat.change} from yesterday`,
      `गेहूं की कीमत: ₹${wheat.price} प्रति क्विंटल, कल से ${wheat.change}`,
      `ਕਣਕ ਦੀ ਕੀਮਤ: ₹${wheat.price} ਪ੍ਰਤੀ ਕੁਇੰਟਲ, ਕੱਲ੍ਹ ਤੋਂ ${wheat.change}`
    );
    
    addAIMessage(message);
    if (window.speechSynthesis) {
      speakText(message);
    }
    
    if (!aiAssistantActive) {
      toggleAssistant();
      setTimeout(closeAssistant, 5000);
    }
  }
}

function showEmergencyContacts() {
  showNotification(
    getTranslatedText(
      'Emergency: Call 112 for immediate help. Agricultural helpline: 1800-180-1551',
      'आपातकाल: तत्काल सहायता के लिए 112 पर कॉल करें। कृषि हेल्पलाइन: 1800-180-1551',
      'ਐਮਰਜੈਂਸੀ: ਤੁਰੰਤ ਮਦਦ ਲਈ 112 \'ਤੇ ਕਾਲ ਕਰੋ। ਖੇਤੀ ਹੈਲਪਲਾਈਨ: 1800-180-1551'
    ),
    'warning'
  );
}

// Offline Mode
function toggleOfflineMode() {
  isOffline = !isOffline;
  const indicator = document.getElementById('connectionStatus');
  
  if (indicator) {
    const statusDot = indicator.querySelector('.status-dot');
    const statusText = indicator.querySelector('.status-text');
    
    if (isOffline) {
      if (statusDot) statusDot.classList.remove('online');
      if (statusText) statusText.textContent = getTranslatedText('Offline', 'ऑफ़लाइन', 'ਆਫਲਾਈਨ');
      showNotification(
        getTranslatedText(
          'You are now offline. Some features may not work.',
          'आप अब ऑफ़लाइन हैं। कुछ सुविधाएं काम नहीं कर सकतीं।',
          'ਤੁਸੀਂ ਹੁਣ ਆਫਲਾਈਨ ਹੋ। ਕੁਝ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦੀਆਂ।'
        ),
        'warning'
      );
    } else {
      if (statusDot) statusDot.classList.add('online');
      if (statusText) statusText.textContent = getTranslatedText('Online', 'ऑनलाइन', 'ਆਨਲਾਈਨ');
      showNotification(
        getTranslatedText(
          'You are back online!',
          'आप वापस ऑनलाइन हैं!',
          'ਤੁਸੀਂ ਵਾਪਸ ਆਨਲਾਈਨ ਹੋ!'
        ),
        'success'
      );
    }
  }
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    left: 20px;
    max-width: 400px;
    margin: 0 auto;
    background: var(--color-bg-secondary);
    border: 2px solid var(--color-${type === 'success' ? 'success' : type === 'warning' ? 'warning' : type === 'error' ? 'error' : 'info'});
    border-radius: var(--border-radius);
    padding: 16px 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    z-index: 4000;
    font-weight: 600;
    animation: slideDown 0.3s ease-out;
    backdrop-filter: blur(10px);
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  
  if (!document.head.querySelector('style[data-notifications]')) {
    style.setAttribute('data-notifications', 'true');
    document.head.appendChild(style);
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    notification.style.animation = 'slideDown 0.3s ease-out reverse';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 4000);
}

// Cleanup function
window.addEventListener('beforeunload', function() {
  if (priceUpdateInterval) {
    clearInterval(priceUpdateInterval);
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
});

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    setLanguage,
    showScreen,
    getCropRecommendation,
    appData,
    toggleAssistant,
    handleVoiceCommand
  };
}