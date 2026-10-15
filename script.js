// --- Xử lý Đa Ngôn Ngữ ---
const translations = {
    "vi": {
        // Hero
        "hero_slogan": "Nghe để tận hưởng, nghe để tiến bộ",
        "hero_subtitle": "Nghe nhạc, xem video và biến podcast, sách nói thành nguồn luyện ngoại ngữ. Chủ động tốc độ, cách lặp và nhịp học trong cùng một ứng dụng.",
        "download": "Tải trên Google Play",
        
        // Feature 1
        "f1_title": "Một trình phát, nhiều cách tận hưởng",
        "f1_desc": "Thưởng thức âm nhạc, theo dõi podcast, nghe sách nói và xem video từ kho nội dung của bạn.",
        "f1_b1": "Phát tệp âm thanh và video trên thiết bị.",
        "f1_b2": "Điều chỉnh tốc độ để nghe, xem theo nhu cầu.",
        
        // Feature 2
        "f2_title": "Tự tạo kịch bản nghe",
        "f2_desc": "Để trình phát tự lặp và chuyển đoạn theo thiết lập của bạn. Nghe kỹ phần chưa rõ mà không phải liên tục tua lại.",
        "f2_b1": "Tạo các đoạn lặp A–B cho âm thanh và video.",
        "f2_b2": "Đặt số lần lặp và tốc độ cho từng đoạn.",
        "f2_b3": "Lặp riêng đoạn khó hoặc nghe xen kẽ trong mạch bài.",
        "f2_b4": "Tăng dần tốc độ qua mỗi lượt để luyện từ chậm đến tốc độ gốc.",
        
        // Feature 3
        "f3_title": "Nghe rõ hơn, biết mình sai ở đâu",
        "f3_desc": "Luyện nghe chép chính tả tiếng Anh và tiếng Trung với âm thanh và bản chép lời. Nhận ra từ còn nghe thiếu để luyện đúng chỗ.",
        "f3_b1": "Đối chiếu câu trả lời theo từng từ.",
        "f3_b2": "Nhận gợi ý theo ba mức khi gặp khó.",
        "f3_b3": "Ôn lại câu chép sai theo lịch giãn cách để củng cố ghi nhớ.",
        
        // Feature 4
        "f4_title": "Tập nói với nội dung bạn chọn(đang phát triển)",
        "f4_desc": "Luyện nói theo podcast, sách nói và hội thoại không có nhạc nền. Luyện phát âm, nhịp điệu và cách nhấn giọng với đoạn âm thanh mẫu.",
        "f4_b1": "Hỗ trợ luyện nói tiếng Anh và tiếng Trung.",
        "f4_b2": "Tùy chỉnh tốc độ và lặp câu mẫu theo khả năng.",
        "f4_b3": "Nhận dạng giọng nói trên thiết bị, luyện tập không cần mạng.",
        
        // Feature 5
        "f5_title": "Công cụ âm thanh ngay trong tầm tay",
        "f5_desc": "Cắt âm thanh, chuyển video thành audio và đồng bộ lời ngay trong ứng dụng, thuận tiện cho cả giải trí lẫn học tập.",
        "f5_b1": "Cắt MP3, giữ lại đoạn âm thanh bạn cần.",
        "f5_b2": "Tách âm thanh từ video để nghe riêng.",
        "f5_b3": "Đồng bộ lời theo thời gian, lưu tệp LRC hoặc nhúng vào MP3.",
        "f5_b4": "Chỉnh thông tin bài nhạc và ảnh bìa.",
        
        // CTA & Footer
        "cta_title": "Thêm giá trị cho mỗi lần nghe",
        "cta_desc": "Một ứng dụng để thưởng thức nhạc, xem video, xử lý âm thanh và luyện ngoại ngữ. Khám phá nhiều hơn từ kho nội dung của bạn cùng LalaMuzic.",
        "cta_btn": "Tải trên Google Play",
        
        "policy": "Chính sách bảo mật",
        "terms": "Điều khoản sử dụng",
        "licenses": "Giấy phép nguồn mở"
    },
    "en": {
        // Hero
        "hero_slogan": "Listen to enjoy, listen to improve",
        "hero_subtitle": "Enjoy music, watch videos, and turn podcasts or audiobooks into language practice materials. Control speed, looping, and pacing all in one app.",
        "download": "Get it on Google Play",
        
        // Feature 1
        "f1_title": "One player, endless ways to enjoy",
        "f1_desc": "Enjoy music, follow podcasts, listen to audiobooks, and watch videos straight from your own library.",
        "f1_b1": "Play local audio and video files on your device.",
        "f1_b2": "Adjust playback speed for listening and watching as you need.",
        
        // Feature 2
        "f2_title": "Create your own listening loops",
        "f2_desc": "Let the player automatically loop and switch segments based on your settings. Focus on unclear parts without manual rewinding.",
        "f2_b1": "Create A–B repeat loops for audio and video.",
        "f2_b2": "Set exact loop counts and playback speed for each segment.",
        "f2_b3": "Loop difficult parts exclusively or integrate them into continuous playback.",
        "f2_b4": "Gradually increase speed with each loop to progress from slow to native tempo.",
        
        // Feature 3
        "f3_title": "Hear better, know your mistakes",
        "f3_desc": "Practice English and Chinese dictation with audio and transcripts. Identify missing words so you can practice exactly what you need.",
        "f3_b1": "Compare your answers word by word.",
        "f3_b2": "Get three levels of hints when you're stuck.",
        "f3_b3": "Review incorrect answers using spaced repetition to boost memory retention.",
        
        // Feature 4
        "f4_title": "Practice speaking with your chosen content (in dev)",
        "f4_desc": "Shadow podcasts, audiobooks, and dialogues without background music. Improve pronunciation, rhythm, and intonation using sample audio.",
        "f4_b1": "Supports English and Chinese speaking practice.",
        "f4_b2": "Customize speed and repeat sample sentences at your own pace.",
        "f4_b3": "On-device speech recognition allows offline practice.",
        
        // Feature 5
        "f5_title": "Audio tools right at your fingertips",
        "f5_desc": "Trim audio, extract sound from videos, and sync lyrics directly within the app—perfect for both entertainment and learning.",
        "f5_b1": "Trim MP3s and keep only the audio segments you need.",
        "f5_b2": "Extract audio tracks from videos for standalone listening.",
        "f5_b3": "Time-sync lyrics and save them as LRC files or embed them into MP3s.",
        "f5_b4": "Edit music tags and cover art.",
        
        // CTA & Footer
        "cta_title": "Add value to every listen",
        "cta_desc": "One app to enjoy music, watch videos, manage audio, and learn languages. Discover more from your media library with LalaMuzic.",
        "cta_btn": "Get it on Google Play",
        
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
