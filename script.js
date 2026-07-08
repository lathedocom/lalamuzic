// --- Xử lý Đa Ngôn Ngữ ---
const translations = {
    "vi": {
        "slogan": "Làm chủ ngoại ngữ qua từng giai điệu",
        "hero_desc": "Trình phát nhạc thông minh tích hợp phương pháp luyện nghe sâu (Dictation), nói đuổi (Shadowing) và thuật toán lặp lại ngắt quãng (FSRS).",
        "download": "Tải trên Google Play",
        
        "box1_title": "Trình phát nhạc chuyên nghiệp",
        "box1_desc": "Trải nghiệm âm nhạc mượt mà với giao diện tùy chỉnh và công cụ xử lý âm thanh mạnh mẽ.",
        "icon_filter": "Bộ lọc âm thanh đa dạng: Phân tách giọng nói, loại bỏ tạp âm.",
        "icon_speed": "Kiểm soát tốc độ và cao độ (Pitch & Speed) không làm méo tiếng.",
        
        "box2_title": "Luyện nghe & Chép chính tả (Dictation)",
        "box2_desc": "Biến lời bài hát thành các bài tập rèn luyện kỹ năng nghe hoàn toàn tự động.",
        "icon_ab": "Lặp đoạn AB nâng cao giúp nghe rõ từng chi tiết nhỏ nhất.",
        "icon_fsrs": "Ghi nhớ dài hạn với thuật toán Spaced Repetition (FSRS).",
        
        "free_title": "Nâng tầm kỹ năng nghe nói ngay hôm nay",
        "free_desc": "Tận dụng kho nhạc yêu thích của bạn để học ngoại ngữ một cách tự nhiên nhất.",
        "download_cta": "Tải trên Google Play",
        
        "policy": "Chính sách bảo mật",
        "terms": "Điều khoản sử dụng",
        "licenses": "Mã nguồn mở"
    },
    "en": {
        "slogan": "Master languages through melodies",
        "hero_desc": "A smart music player integrated with deep listening (Dictation), Shadowing, and Free Spaced Repetition Scheduler (FSRS).",
        "download": "Get it on Google Play",
        
        "box1_title": "Professional Music Player",
        "box1_desc": "Experience seamless music playback with customizable interfaces and powerful audio tools.",
        "icon_filter": "Various audio filters: Isolate vocals, remove background noise.",
        "icon_speed": "Control speed and pitch without audio distortion.",
        
        "box2_title": "Dictation & Shadowing",
        "box2_desc": "Turn song lyrics into automated listening exercises.",
        "icon_ab": "Advanced AB repeat helps you catch every single detail.",
        "icon_fsrs": "Long-term memory retention with Spaced Repetition (FSRS) algorithm.",
        
        "free_title": "Elevate your listening skills today",
        "free_desc": "Leverage your favorite music library to learn languages naturally.",
        "download_cta": "Get it on Google Play",
        
        "policy": "Privacy Policy",
        "terms": "Terms of Use",
        "licenses": "Open Source Licenses"
    }
};

let currentLang = "vi";

function toggleLanguage() {
    currentLang = currentLang === "vi" ? "en" : "vi";
    
    // Đổi Text
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });
    
    // Đổi link Footer
    document.getElementById("link-policy").href = currentLang === "vi" ? "policy_vi.html" : "policy_en.html";
    document.getElementById("link-terms").href = currentLang === "vi" ? "terms_vi.html" : "terms_en.html";
    document.getElementById("link-licenses").href = currentLang === "vi" ? "licenses_vi.html" : "licenses_en.html";
    
    // Đổi nút Toggle
    document.getElementById("langToggle").innerText = currentLang === "vi" ? "VI / EN" : "EN / VI";
}
