const answers_no = {
    english: [
        "No",
        "Radhika, are you sure?",
        "Really really sure??",
        "Like 100% sure???",
        "What if I bring you chai? ☕",
        "I'll even share my fries with you...",
        "But we'd be so cute together! 🥺",
        "I promise I'm funnier in person!",
        "Okay this is getting embarrassing...",
        "My heart is breaking here Radhika! 💔",
        "Fine, I'll learn to cook for you!",
        "I'll even watch your favorite show!",
        "Radhika pleeeease! 🙏",
        "I'm not giving up that easily!",
        "Okay okay, let's start over... *takes deep breath*"
    ],
    french: [
        "Non",
        "Tu es sûr ?",
        "Tu es vraiment sûr ??",
        "Tu es vraiment vraiment sûr ???",
        "Réfléchis encore?",
        "Tu ne crois pas aux deuxièmes chances ?",
        "Pourquoi tu es si froid?",
        "Peut-être, on peut en parler ?",
        "Je ne vais pas demander encore une fois!",
        "D'accord, maintenant ca me fait mal!",
        "Tu es juste méchant!",
        "Pourquoi tu me fais ça?",
        "Donnez-moi une chance plz!",
        "Je te supplie d'arrêter!",
        "D'accord, recommençons.."
    ],
    thai: [
        "ไม่อ่ะ",
        "แน่ใจจริงๆหรอคะ?",
        "แน่ใจจริงๆ จริงๆนะคะ?",
        "อย่าบอกนะว่านี่แน่ใจสุดๆแล้วจริงๆ ?",
        "ลองคิดดูอีกทีหน่อยสิคะ..",
        "ขอโอกาศที่สองทีค่ะ..",
        "อย่าเย็นชาสิคะ กระซิกๆ",
        "ขอร้องนะคะ",
        "น้าาาๆๆๆๆๆ",
        "เราจะร้องไห้เอานะ กระซิกๆ",
        "จะเอังี้ๆจริงหรอคะ",
        "ฮือออออ",
        "ขอโอกาศครั้งที่สองที่ค่ะ!",
        "ขอร้องละค่าาา",
        "โอเคค่ะ.. งั้นเริ่มใหม่ !"
    ],
    japanese: [
        "いいえ",
        "Radhika、本当に？",
        "本当に本当に？？",
        "100%確かですか？？？",
        "チャイを持ってきたら？☕",
        "フライドポテトもシェアするよ...",
        "一緒に可愛いカップルになるよ！🥺",
        "実際に会ったらもっと面白いよ！",
        "これは恥ずかしくなってきた...",
        "Radhika、心が壊れちゃうよ！💔",
        "料理を習うよ！",
        "好きな番組も見るよ！",
        "Radhika、お願い！🙏",
        "そう簡単に諦めないよ！",
        "オーケー、最初からやり直そう...*深呼吸*"
    ],
    haryanvi: [
        "ना",
        "Radhika, पक्की है के?",
        "सच में पक्की?",
        "100% पक्की है?",
        "चाय ल्याऊं तो?",
        "फ्राइज भी बांटूंगा तेरे साथें...",
        "हम दोन्नु कितने सोहणे लगेंगे! 🥺",
        "मिलूं तो और मजेदार सूं!",
        "अब तो शर्म आण लागरी है...",
        "Radhika, दिल टूट रह्या है! 💔",
        "खाणा बणाणा भी सीख लूंगा!",
        "तेरी पसंद की सीरीज भी देख लूंगा!",
        "Radhika प्लीज यार! 🙏",
        "इत्ती जल्दी हार नहीं मानूंगा!",
        "ठीक है ठीक है, फेर त शुरू तै...*गहरी सांस*"
    ]
};

answers_yes = {
    "english": "Yes",
    "french": "Oui",
    "thai": "เย่ คืนดีกันแล้วน้า",
    "japanese": "はい",
    "haryanvi": "हाँ"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "french") {
        questionHeading.textContent = "Radhika, tu veux être mon valentin?";
    } else if (language === "thai") {
        questionHeading.textContent = "Radhika, คืนดีกับเราได้อ่ะป่าว?";
    } else if (language === "japanese") {
        questionHeading.textContent = "Radhika、私のバレンタインになってくれる？";
    } else if (language === "haryanvi") {
        questionHeading.textContent = "Radhika, मेरी Valentine बणेगी?";
    } else {
        questionHeading.textContent = "Radhika, will you be my valentine?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "french") {
        successMessage.textContent = "Yessss! À bientôt Radhika! 🥳💕";
    } else if (language === "thai") {
        successMessage.textContent = "Yessss! คืนดีกันแล้วน้า Radhika! 🥳💕";
    } else if (language === "japanese") {
        successMessage.textContent = "やった！デート楽しみだよ、Radhika！🥳💕";
    } else if (language === "haryanvi") {
        successMessage.textContent = "यस्स! Date का इंतजार रहेगा, Radhika! 🥳💕";
    } else {
        successMessage.textContent = "Yessss! Can't wait for our date, Radhika! 🥳💕";
    }
}