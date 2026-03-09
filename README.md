# 🧠 AI Competency Quiz — Premium Edition

👉 **Live Demo**: [https://hirin.github.io/AI-Quiz/](https://hirin.github.io/AI-Quiz/)

Ứng dụng web ôn tập kiến thức AI/ML/Data Science dạng trắc nghiệm, kèm **cheatsheet công thức & mẹo ghi nhớ** cho từng chủ đề.

## ✨ Tính năng

- **581+ câu hỏi** trải đều 4 Module (A → D), từ Toán nền tảng đến Đạo đức AI
- **Cheatsheet thông minh** — tự động hiển thị công thức + mẹo ghi nhớ tương ứng với phần đang làm
- **Shuffle đáp án** — thứ tự đáp án tự động xáo trộn mỗi lần load, chống học vẹt
- **Mixed Comprehensive Test** — trộn câu hỏi từ tất cả module để thi thử tổng hợp
- **Responsive** — chạy tốt trên cả Desktop và Mobile
- **KaTeX rendering** — hiển thị công thức toán học đẹp mắt

## 📚 Nội dung

| Module | Chủ đề | Sections |
|--------|--------|----------|
| **A** | Toán & Thống kê | Đại số tuyến tính, Eigenvalue, Xác suất, Phân phối, Thống kê, Giải tích, Distance Metrics, Numerical Stability |
| **B** | Lập trình & Công cụ | Python (Basic + Advanced), DSA, Numpy/Pandas, SQL, Pipelines, Testing, Visualization, Regex |
| **C** | Machine Learning | Supervised/Unsupervised, Model Eval, Deep Learning, NLP, CV, LLM, RL, Time Series, Feature Engineering |
| **D** | Đạo đức & Kỹ năng mềm | Logic & Ethics, Regulations, IP & Society, Communication |

## 🚀 Cách chạy

```bash
# Clone repo
git clone <repo-url>
cd <repo-folder>

# Chạy local server
python3 -m http.server 8000

# Mở trình duyệt
# http://localhost:8000
```

> Không cần cài thêm bất kỳ thư viện nào — chỉ cần Python 3 và trình duyệt.

## 📁 Cấu trúc thư mục

```
.
├── index.html              # Trang chính
├── style.css               # Giao diện (dark theme, responsive)
├── script.js               # Logic quiz, shuffle, điều hướng
├── cheatsheet.js           # Dynamic loader cho cheatsheet JSON
├── data/
│   ├── quiz/               # 37 file JSON chứa câu hỏi
│   │   ├── A1_BasicLinear.json
│   │   ├── B5_SQL.json
│   │   ├── C3_DeepLearning.json
│   │   └── ...
│   └── cheatsheets/        # 29 file JSON chứa công thức & mẹo
│       ├── A1.json
│       ├── B5.json
│       ├── C3.json
│       └── ...
└── README.md
```

## 🎮 Hướng dẫn sử dụng

1. **Chọn Module** — Click vào Module A/B/C/D ở sidebar trái để mở rộng danh sách section
2. **Làm quiz** — Chọn đáp án, hệ thống sẽ highlight xanh (đúng) / đỏ (sai) ngay lập tức
3. **Xem cheatsheet** — Panel bên phải tự động cập nhật công thức + mẹo ghi nhớ theo section đang làm
4. **Shuffle** — Bấm nút 🔀 Shuffle để xáo trộn lại thứ tự câu hỏi
5. **Mixed Test** — Bấm "Shuffle All" để tạo bài thi tổng hợp trộn từ tất cả module

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML / CSS / JavaScript (không framework)
- **Math Rendering**: [KaTeX](https://katex.org/)
- **Icons**: [Font Awesome 6](https://fontawesome.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- **Hosting**: Static files — deploy được trên GitHub Pages, Netlify, hoặc bất kỳ static host nào

## 📝 Thêm câu hỏi mới

Tạo file JSON trong `data/quiz/` với format:

```json
[
  {
    "module": "B",
    "section": "B5_SQL",
    "question": "Câu hỏi ở đây?",
    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
    "correct": 0,
    "explanation": "Giải thích tại sao đáp án A đúng."
  }
]
```

Sau đó thêm đường dẫn file vào mảng `JSON_FILES` trong `script.js`.

## 📝 Thêm cheatsheet mới

Tạo file JSON trong `data/cheatsheets/` với tên là prefix section (ví dụ `B5.json`):

```json
{
  "title": "🗄️ SQL & DB Basics",
  "items": [
    {
      "name": "Tên mục",
      "latex": "\\texttt{SELECT * FROM table}",
      "note": "Mẹo ghi nhớ và giải thích ngắn gọn ở đây"
    }
  ]
}
```

## 📄 License

MIT
