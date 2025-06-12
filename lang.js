function changeLanguage(lang) {
  const data = {
    eng: {
      siteTitle: "My Ayodhya",
      navHome: "Home",
      navPlaces: "Places",
      navGallery: "Gallery",
      navContact: "Contact",
      pageHeading: "Explore the Untold Stories of Ayodhya",
      introText: "Welcome to the timeless city of Ayodhya — a place of ancient history, cultural elegance, and architectural legacy. Discover beautiful parks, chowks, gardens, and more without religious boundaries.",
      tagline: "\"Where history lives in every corner, and silence tells a story.\"",
      placesHeading: "Historic & Tourist Sites",
      place1Title: "Guptar Ghat",
      place1Desc: "Located along the Saryu river, this ghat reflects Ayodhya’s tranquil charm and holds silent tales of its past.",
      place2Title: "Mani Parvat",
      place2Desc: "A small hillock offering a breathtaking view of Ayodhya and its historical surroundings.",
      place3Title: "Lata Mangeshkar Chowk",
      place3Desc: "Built in memory of the legendary singer, this chowk features a giant veena and is a beautiful tribute to Indian music culture.",
      place4Title: "Chudamadi Choraha",
      place4Desc: "A central intersection in Ayodhya that connects key market areas. Known for its vibrant street scenes and local life.",
      place5Title: "Guptar Garden",
      place5Desc: "A scenic green space near Guptar Ghat. Ideal for morning walks and peaceful relaxation.",
      place6Title: "Korean Friendship Park",
      place6Desc: "A symbol of Indo-Korean friendship, this beautifully landscaped park celebrates the cultural bond through gardens and monuments.",
      historyHeading: "Brief History of Ayodhya",
      historyPara1: "Ayodhya, an ancient city located in Uttar Pradesh, India, has a recorded history spanning several centuries. Known for its strategic location along the Saryu River, it has been a center of culture, learning, and governance. The city's architecture, ghats, and chowks reflect its transformation through eras of rulers, civilizations, and cultural exchanges.",
      historyPara2: "Today, Ayodhya continues to develop as a modern city while preserving its unique identity through parks, museums, and civic spaces that welcome visitors from around the world.",
      galleryHeading: "Photo Gallery",
      contactHeading: "Contact Us",
      guptarHeading: "Guptar Ghat",
      sarjuHeading:"Sarju River",
      parkHeading:"Guptar Ghat Park",
      chudamaniHeading:"Chudamani Choraha",
      lataHeading:"Lata Mangeshkar chowk",
      koreanHeading:"Korean Park",
      contactText: "For suggestions or contributions to the Ayodhya Heritage archive, please contact Nagar Nigam Ayodhya.",
      devHeading: "About the Developer",
      devText: "Namaste 🙏, I'm Aryan, I live in Rani Bazar Sathri Ayodhya My School name is Madhav Sarvoday Inter College — a passionate front-end developer and UI designer from India. I believe in building meaningful, fast, and accessible web experiences. My mission is to empower others through code, especially in Hindi and regional languages.",
      eyeLi:"💻 HTML, CSS, JAVASCRIPT",
      earLi:"🧘 Calm Coding. Clear Thinking ",
      footerText: "© 2025 Nagar Nigam Ayodhya | Designed with ❤️ by Aryan"
    },
    hin: {
      siteTitle: "मेरी अयोध्या",
      navHome: "मुखपृष्ठ",
      navPlaces: "स्थल",
      navGallery: "गैलरी",
      navContact: "संपर्क",
      pageHeading: "अयोध्या की अनकही कहानियाँ",
      introText: "अयोध्या, एक ऐसा नगर जहाँ हर कोना इतिहास की गवाही देता है। यहाँ के पार्क, चौक और बगीचे बिना किसी धार्मिक पहचान के आकर्षण का केंद्र हैं।",
      tagline: "\"जहाँ हर कोने में इतिहास साँस लेता है और ख़ामोशी कहानी कहती है।\"",
      placesHeading: "ऐतिहासिक और पर्यटक स्थल",
      place1Title: "गुप्तार घाट",
      place1Desc: "सरयू नदी के किनारे स्थित यह घाट अयोध्या की शांति और गौरवशाली अतीत को दर्शाता है।",
      place2Title: "मणि पर्वत",
      place2Desc: "एक छोटी सी पहाड़ी जहाँ से अयोध्या का सुंदर दृश्य दिखाई देता है।",
      place3Title: "लता मंगेशकर चौक",
      place3Desc: "महान गायिका की याद में बना यह चौक एक विशाल वीणा के साथ भारतीय संगीत को समर्पित है।",
      place4Title: "चुड़ामड़ी चौराहा",
      place4Desc: "अयोध्या का एक प्रमुख चौराहा जो बाजार क्षेत्रों को जोड़ता है। यह अपने जीवंत वातावरण के लिए प्रसिद्ध है।",
      place5Title: "गुप्तार गार्डन",
      place5Desc: "गुप्तार घाट के पास एक सुंदर बागीचा जो सैर और शांति के लिए उत्तम स्थान है।",
      place6Title: "कोरियन मैत्री पार्क",
      place6Desc: "भारत और कोरिया के मैत्री संबंधों का प्रतीक, यह पार्क सांस्कृतिक सौहार्द का सुंदर उदाहरण है।",
      historyHeading: "अयोध्या का संक्षिप्त इतिहास",
      historyPara1: "अयोध्या, उत्तर प्रदेश में स्थित एक प्राचीन नगर है जिसकी इतिहासिक यात्रा कई सदियों तक फैली है। सरयू नदी के किनारे स्थित यह नगर संस्कृति, शिक्षा और शासन का केंद्र रहा है। इसकी वास्तुकला, घाट और चौक विभिन्न कालखंडों की गवाही देते हैं।",
      historyPara2: "आज अयोध्या एक आधुनिक शहर के रूप में विकसित हो रहा है और साथ ही साथ अपनी सांस्कृतिक पहचान को भी संरक्षित कर रहा है।",
      galleryHeading: "फोटो गैलरी",
      contactHeading: "संपर्क करें",
      guptarHeading:"गुप्तार घाट",
      sarjuHeading:"सरजू नदी",
      parkHeading:"गुप्तार घाट पार्क",
      chudamaniHeading:"चूड़ामणि चौराहा",
      lataHeading:"लता मंगेशकर चौक",
      koreanHeading:"कोरियन पार्क",
      contactText: "यदि आप सुझाव देना चाहते हैं या जानकारी साझा करना चाहते हैं, तो नगर निगम अयोध्या से संपर्क करें।",
      devHeading: "डेवलपर के बारे में",
      devText: "नमस्ते 🙏, मैं आर्यन हूँ मै रानी बाजार सथरी, अयोध्या में रहता हूं। मेरे विद्यालय का नाम माधव सर्वोदय इंटर कॉलेज है। — एक उत्साही फ्रंट-एंड डेवलपर और UI डिज़ाइनर। मेरा मानना है कि सरल, तेज़ और उपयोगी वेब अनुभव लोगों तक पहुँचने चाहिए — खासकर हिंदी और स्थानीय भाषाओं में।",
      eyeLi:"💻 एचटीएमएल, सीएसएस, जावास्क्रिप्ट",
      earLi:"🧘शांतिपूर्ण कोडिंग, स्पष्ट सोच।",
      footerText: "© 2025 नगर निगम अयोध्या | ❤️ से डिज़ाइन किया गया - आर्यन द्वारा"
    }
  };

  const selected = data[lang];
  for (const id in selected) {
    const el = document.getElementById(id);
    if (el) el.textContent = selected[id];
  }
  localStorage.setItem("lang", lang);
}
window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "eng";
  changeLanguage(savedLang);
};
