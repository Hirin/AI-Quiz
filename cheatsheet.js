const CHEATSHEET_DATA = {
    "A1": {
        title: "📐 Đại số tuyến tính",
        items: [
            { name: "Dot Product (Tích vô hướng)", latex: "\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i = \\|u\\|\\|v\\|\\cos\\theta", note: "Nhân từng cặp rồi cộng: [1,2]·[3,4] = 1×3+2×4 = 11. Kết quả là 1 số (scalar). Nếu = 0 → hai vector vuông góc (⊥)" },
            { name: "Determinant 2×2", latex: "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc", note: "det = 0 → ma trận suy biến, không có nghịch đảo" },
            { name: "Determinant 3×3 (Sarrus)", latex: "\\det(A) = a(ei-fh) - b(di-fg) + c(dh-eg)", note: "Sarrus: kẻ 3 đường chéo trái trừ 3 đường chéo phải. Chỉ dùng cho 3×3!" },
            { name: "Ma trận nghịch đảo 2×2", latex: "A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}", note: "Đổi chỗ a↔d, đổi dấu b,c, chia cho det" },
            { name: "Cofactor (Phần phù hợp)", latex: "C_{ij} = (-1)^{i+j} M_{ij}", note: "Bước 1: Bỏ hàng i, cột j → ma trận con nhỏ hơn. Bước 2: Tính det ma trận con = Mᵢⱼ (minor). Bước 3: Nhân (-1)^(i+j) → cofactor. Inverse = (1/det) × Cofactor matrixᵀ" },
            { name: "Row Echelon (Dạng bậc thang)", latex: "\\begin{pmatrix} 1 & * & * \\\\ 0 & 1 & * \\\\ 0 & 0 & 1 \\end{pmatrix}", note: "Gauss elimination: dùng 3 phép biến đổi hàng (đổi chỗ, nhân hằng số, cộng bội hàng khác) để đưa về dạng tam giác. Pivot = số 1 đầu mỗi hàng. Rank = số pivot ≠ 0. Nếu rank < n → hệ vô số nghiệm hoặc vô nghiệm" },
            { name: "Norm (Độ dài vector)", latex: "\\|\\mathbf{v}\\| = \\sqrt{v_1^2 + v_2^2 + \\cdots + v_n^2}", note: "L2 norm (Euclidean). L1 norm = Σ|vᵢ|" },
            { name: "Nhân ma trận", latex: "C_{ij} = \\sum_{k} A_{ik} \\cdot B_{kj}", note: "Hàng A × Cột B. A(m×n) × B(n×p) = C(m×p). Không giao hoán: AB ≠ BA" },
            { name: "Transpose (Chuyển vị)", latex: "(AB)^T = B^T A^T", note: "Lật qua đường chéo: hàng thành cột, cột thành hàng. VD: [[1,2],[3,4]]ᵀ = [[1,3],[2,4]]. Lưu ý: thứ tự đảo ngược khi transpose tích" },
        ]
    },
    "A2": {
        title: "🔢 Eigenvalue & Decomposition",
        items: [
            { name: "Phương trình Eigenvalue", latex: "A\\mathbf{v} = \\lambda \\mathbf{v}", note: "v: eigenvector (hướng không đổi khi nhân A). λ: eigenvalue (hệ số co giãn)" },
            { name: "Tìm Eigenvalue", latex: "\\det(A - \\lambda I) = 0", note: "Giải phương trình đặc trưng → tìm λ. Cho 2×2: λ² − tr(A)λ + det(A) = 0" },
            { name: "Trace = Tổng eigenvalues", latex: "\\text{tr}(A) = \\sum a_{ii} = \\sum \\lambda_i", note: "Trace = tổng đường chéo. Nhanh kiểm tra kết quả eigenvalue" },
            { name: "Det = Tích eigenvalues", latex: "\\det(A) = \\prod \\lambda_i", note: "Nếu 1 eigenvalue = 0 → det = 0 → suy biến" },
            { name: "SVD (Phân tích giá trị kì dị)", latex: "A = U \\Sigma V^T", note: "Phân tích BẤT KỲ ma trận nào thành 3 phần: U = hướng output, Σ = mức co giãn (diagonal), V = hướng input. Ứng dụng: nén ảnh (giữ top-k singular values), PCA, recommendation systems" },
            { name: "PCA (Giảm chiều)", latex: "\\text{Cov} = \\frac{1}{n}X^T X \\to \\text{eigendecomp}", note: "Bước: center data → tính ma trận Cov → tìm eigenvectors (= trục mới) + eigenvalues (= bao nhiêu thông tin mỗi trục giữ). Giữ top-k trục = giảm dari n chiều xuống k chiều" },
        ]
    },
    "A3": {
        title: "🎲 Xác suất",
        items: [
            { name: "Hợp (Union)", latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", note: "Trừ phần giao để không đếm 2 lần" },
            { name: "Độc lập", latex: "P(A \\cap B) = P(A) \\times P(B)", note: "A, B independent: biết A không ảnh hưởng B" },
            { name: "Xác suất có điều kiện", latex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)}", note: "Xác suất A xảy ra, BIẾT B đã xảy ra" },
            { name: "Bayes", latex: "P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}", note: "Prior × Likelihood / Evidence = Posterior. Cập nhật niềm tin khi có data mới" },
            { name: "Xác suất toàn phần", latex: "P(B) = \\sum_i P(B|A_i) P(A_i)", note: "Chia bài toán thành các trường hợp không giao nhau A₁, A₂,... rồi cộng lại. VD: P(mưa) = P(mưa|mùa hè)P(hè) + P(mưa|mùa đông)P(đông). Thường dùng ở mẫu số Bayes" },
            { name: "Tổ hợp", latex: "C(n,k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}", note: "Chọn k từ n (không quan tâm thứ tự)" },
            { name: "Chỉnh hợp", latex: "P(n,k) = \\frac{n!}{(n-k)!}", note: "Chọn k từ n (CÓ quan tâm thứ tự)" },
        ]
    },
    "A4": {
        title: "📊 Phân phối xác suất",
        items: [
            { name: "Bernoulli", latex: "P(X=1)=p,\\quad P(X=0)=1-p", note: "1 lần thử, 2 kết quả (thành/bại). VD: tung đồng xu" },
            { name: "Binomial", latex: "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}", note: "n lần Bernoulli. E[X]=np, Var=np(1−p)" },
            { name: "Poisson", latex: "P(X=k) = \\frac{e^{-\\lambda} \\lambda^k}{k!}", note: "Đếm SỐ LẦN sự kiện xảy ra trong khoảng thời gian/không gian cố định. λ = tốc độ trung bình. VD: TB 3 email/giờ → P(5 email/giờ)? λ=3, k=5" },
            { name: "Normal (Gauss)", latex: "f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}", note: "Hình chuông đối xứng. μ = đỉnh (trung bình), σ = độ rộng (càng lớn càng dẹt). Central Limit Theorem: lấy trung bình nhiều mẫu → luôn tiến về dạng Normal, bất kể dữ liệu gốc" },
            { name: "Z-score", latex: "z = \\frac{x - \\mu}{\\sigma}", note: "Chuẩn hoá: x cách μ bao nhiêu σ. z=1.96 → 97.5 percentile" },
            { name: "Quy tắc 68-95-99.7", latex: "\\pm 1\\sigma: 68\\%,\\quad \\pm 2\\sigma: 95\\%,\\quad \\pm 3\\sigma: 99.7\\%", note: "Áp dụng cho Normal distribution" },
        ]
    },
    "A5": {
        title: "📈 Thống kê",
        items: [
            { name: "Trung bình (Mean)", latex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i", note: "Nhạy cảm với outlier. Median robust hơn" },
            { name: "Phương sai (Variance)", latex: "\\sigma^2 = \\frac{1}{n}\\sum(x_i - \\bar{x})^2", note: "Bình phương khoảng cách trung bình từ mean. Giá trị lớn = dữ liệu rải rác. Population: chia n. Sample: chia (n−1) vì Bessel's correction — mẫu nhỏ dễ underestimate" },
            { name: "Độ lệch chuẩn (Std Dev)", latex: "\\sigma = \\sqrt{\\sigma^2}", note: "Cùng đơn vị với data (khác variance = đơn vị²)" },
            { name: "Hiệp phương sai", latex: "\\text{cov}(X,Y) = E[(X-\\mu_X)(Y-\\mu_Y)]", note: "> 0: cùng chiều, < 0: ngược chiều, = 0: không tương quan tuyến tính" },
            { name: "Hệ số tương quan Pearson", latex: "r = \\frac{\\text{cov}(X,Y)}{\\sigma_X \\sigma_Y}, \\quad -1 \\le r \\le 1", note: "r = ±1: tuyến tính hoàn hảo. r = 0: không tương quan tuyến tính" },
            { name: "Khoảng tin cậy (CI)", latex: "\\bar{x} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}", note: "CI 95% nghĩa là: nếu lấy mẫu 100 lần, ~95 lần giá trị thật nằm trong khoảng này. z=1.96 cho 95%, z=2.576 cho 99%. n tăng → CI hẹp hơn (chính xác hơn)" },
        ]
    },
    "A6": {
        title: "∫ Giải tích & Tối ưu",
        items: [
            { name: "Đạo hàm Power rule", latex: "\\frac{d}{dx}x^n = nx^{n-1}", note: "VD: (x³)' = 3x². Hằng số: (5)' = 0" },
            { name: "Chain rule", latex: "\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)", note: "Đạo hàm hàm hợp. VD: (sin(2x))' = cos(2x)·2" },
            { name: "Product rule", latex: "(uv)' = u'v + uv'", note: "Đạo hàm tích. VD: (x·eˣ)' = eˣ + xeˣ" },
            { name: "Tích phân Power", latex: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C", note: "C = hằng số tích phân. Tích phân là ngược đạo hàm" },
            { name: "Gradient", latex: "\\nabla f = \\left[\\frac{\\partial f}{\\partial x_1}, \\frac{\\partial f}{\\partial x_2}, \\ldots\\right]", note: "Vector chỉ hướng tăng nhanh nhất. Partial derivative: đạo hàm theo 1 biến, giữ biến khác cố định" },
            { name: "Gradient Descent", latex: "\\theta_{t+1} = \\theta_t - \\alpha \\nabla L(\\theta_t)", note: "α: learning rate. Đi ngược gradient để minimize loss L" },
            { name: "Cực trị", latex: "f'(x)=0,\\quad f''(x)>0: \\text{min},\\quad f''(x)<0: \\text{max}", note: "Bước 1: f'(x) = 0 → tìm điểm dừng. Bước 2: f''(x) > 0 → lõm lên (cực tiểu), f''(x) < 0 → lõm xuống (cực đại). VD: f(x) = x²−4x → f'=2x−4=0 → x=2, f''=2>0 → min" },
        ]
    },
    "A9": {
        title: "📏 Distance Metrics",
        items: [
            { name: "Euclidean", latex: "d = \\sqrt{\\sum(x_i - y_i)^2}", note: "Khoảng cách đường thẳng. Nhạy cảm với scale → cần normalize" },
            { name: "Manhattan (L1)", latex: "d = \\sum |x_i - y_i|", note: "Tổng khoảng cách theo từng trục. Dùng khi di chuyển theo lưới" },
            { name: "Cosine Similarity", latex: "\\cos(\\theta) = \\frac{\\mathbf{u} \\cdot \\mathbf{v}}{\\|u\\| \\|v\\|}", note: "Đo góc giữa 2 vector, không quan tâm độ dài. Dùng nhiều trong NLP" },
            { name: "Jaccard Index", latex: "J(A,B) = \\frac{|A \\cap B|}{|A \\cup B|}", note: "Cho tập hợp. 1 = giống hoàn toàn, 0 = khác hoàn toàn" },
            { name: "Mahalanobis", latex: "d = \\sqrt{(x-\\mu)^T \\Sigma^{-1} (x-\\mu)}", note: "Euclidean 'thông minh': xét cả mức phân tán và tương quan giữa các biến. Nếu Σ = I (identity) → giống Euclidean. Dùng để phát hiện outlier đa chiều" },
        ]
    },
    "A10": {
        title: "💻 Numerical Stability",
        items: [
            { name: "Machine Epsilon", latex: "\\epsilon \\approx 2.2 \\times 10^{-16} \\text{ (float64)}", note: "Số nhỏ nhất sao cho 1 + ε ≠ 1. Giới hạn precision máy tính" },
            { name: "Log-sum-exp trick", latex: "\\log\\sum e^{x_i} = M + \\log\\sum e^{x_i - M}", note: "Vấn đề: e^1000 = Inf (overflow!). Trick: trừ max trước → e^(1000−1000)=e^0=1. Kết quả toán học giống hệt, nhưng máy tính tính được. Dùng trong softmax, HMM, CRF" },
            { name: "Softmax ổn định", latex: "\\text{softmax}(x_i) = \\frac{e^{x_i - \\max(x)}}{\\sum e^{x_j - \\max(x)}}", note: "Trừ max trước khi exp → tránh eˣ quá lớn → Inf" },
        ]
    },
    "B1": {
        title: "🐍 Python Basics",
        items: [
            { name: "List Comprehension", latex: "\\texttt{[expr for x in iter if cond]}", note: "Tạo list nhanh. VD: [x**2 for x in range(5)]" },
            { name: "Slicing", latex: "\\texttt{a[start:stop:step]}", note: "stop không bao gồm. a[::-1] → reverse. a[1:4] → index 1,2,3" },
            { name: "Dict methods", latex: "\\texttt{d.get(key, default)}", note: "Không raise KeyError nếu key missing, trả default thay" },
            { name: "f-string format", latex: "\\texttt{f'\\{val:.2f\\}'} \\to \\texttt{3.14}", note: ".2f = 2 số thập phân. :, = thêm dấu phẩy ngàn" },
            { name: "Ternary", latex: "\\texttt{x if condition else y}", note: "1 dòng if-else. VD: 'even' if n%2==0 else 'odd'" },
            { name: "Unpacking", latex: "\\texttt{a, *b, c = [1,2,3,4,5]}", note: "a=1, b=[2,3,4], c=5. * gom phần còn lại" },
        ]
    },
    "B3": {
        title: "⚡ DSA & Complexity",
        items: [
            { name: "Binary Search", latex: "O(\\log n)", note: "Mảng đã sort. 1024 phần tử → tối đa 10 bước (log₂1024 = 10)" },
            { name: "Sort tối ưu", latex: "O(n \\log n)", note: "Merge sort, Quick sort (avg), Heap sort. Không thể nhanh hơn cho comparison sort" },
            { name: "Hash Table", latex: "O(1) \\text{ average}", note: "dict/set trong Python. Worst case O(n) khi collision nhiều" },
            { name: "Nested Loops", latex: "O(n^k)", note: "k vòng lặp lồng nhau. 2 vòng = O(n²), 3 vòng = O(n³)" },
            { name: "Stack (LIFO)", latex: "\\text{push/pop: } O(1)", note: "Last In First Out. Ứng dụng: undo, đệ quy, kiểm tra ngoặc" },
            { name: "Queue (FIFO)", latex: "\\text{enqueue/dequeue: } O(1)", note: "First In First Out. Ứng dụng: BFS, task scheduling" },
        ]
    },
    "B4": {
        title: "🐼 Numpy & Pandas",
        items: [
            { name: "Broadcasting", latex: "\\texttt{(m,n) + (1,n)} \\to \\texttt{(m,n)}", note: "Numpy tự 'kéo giãn' array nhỏ để khớp kích thước lớn. VD: ma trận (3,4) + vector (1,4) → cộng vector vào MỖI hàng. Quy tắc: chiều = 1 hoặc bằng nhau thì broadcast được" },
            { name: "GroupBy", latex: "\\texttt{df.groupby('col').agg(func)}", note: "Split → Apply → Combine. func: mean, sum, count, ..." },
            { name: "Merge / Join", latex: "\\texttt{pd.merge(df1, df2, on='key')}", note: "how='inner'/'left'/'right'/'outer'. Tương tự SQL JOIN" },
        ]
    },
    "B5": {
        title: "🗄️ SQL",
        items: [
            { name: "JOIN types", latex: "\\texttt{INNER / LEFT / RIGHT / FULL}", note: "INNER: chỉ match. LEFT: giữ tất cả bảng trái. FULL: giữ cả hai" },
            { name: "Window Function", latex: "\\texttt{RANK() OVER (PARTITION BY .. ORDER BY ..)}", note: "Tính trên group mà không GROUP BY. ROW_NUMBER, LAG, LEAD" },
            { name: "Thứ tự thực thi SQL", latex: "\\texttt{FROM \\to WHERE \\to GROUP \\to HAVING \\to SELECT \\to ORDER}", note: "SELECT chạy gần cuối! WHERE lọc trước GROUP, HAVING lọc sau" },
        ]
    },
    "B12": {
        title: "⚙️ C++ Basics",
        items: [
            { name: "Pointer", latex: "\\texttt{int* ptr = \\&x; \\quad *ptr = value;}", note: "ptr chứa địa chỉ. &x: lấy địa chỉ. *ptr: lấy giá trị (dereference)" },
            { name: "Reference", latex: "\\texttt{int\\& ref = x;}", note: "Bí danh (alias), phải gán luôn, không thể null, không rebind" },
            { name: "Smart Pointer", latex: "\\texttt{unique\\_ptr<T> / shared\\_ptr<T>}", note: "Tự delete khi hết scope. unique: 1 owner. shared: đếm reference" },
            { name: "Const reference (best practice)", latex: "\\texttt{void f(const T\\& x)}", note: "Không copy (nhanh), không modify (an toàn). Dùng cho object lớn" },
        ]
    },
    "B13": {
        title: "⚙️ C++ Advanced",
        items: [
            { name: "Virtual & Override", latex: "\\texttt{virtual void f() = 0;}", note: "= 0: pure virtual → abstract class. override: derived class ghi đè" },
            { name: "Template", latex: "\\texttt{template<typename T> T max(T a, T b)}", note: "Generic: 1 code chạy mọi type. Compiler sinh code riêng cho mỗi type" },
            { name: "Lambda", latex: "\\texttt{[capture](params)\\{body\\}}", note: "[=] capture by value, [&] by reference. Dùng cho sort, algorithms" },
            { name: "Move semantics", latex: "\\texttt{std::move(obj)} \\to \\texttt{rvalue \\&\\&}", note: "Chuyển ownership thay vì copy. O(1) thay vì O(n). Dùng cho container lớn" },
            { name: "RAII pattern", latex: "\\texttt{ctor: acquire, dtor: release}", note: "Resource lấy trong constructor, trả trong destructor. lock_guard, unique_ptr" },
        ]
    },
    "C1": {
        title: "🤖 ML Supervised / Unsupervised",
        items: [
            { name: "Linear Regression", latex: "\\hat{y} = \\mathbf{w}^T\\mathbf{x} + b, \\quad L = \\text{MSE}", note: "Dự đoán số liên tục (giá nhà, nhiệt độ). Tìm w sao cho MSE nhỏ nhất. Giải trực tiếp: w = (XᵀX)⁻¹Xᵀy (normal equation — chỉ hiệu quả khi n nhỏ) hoặc dùng Gradient Descent" },
            { name: "Logistic (Sigmoid)", latex: "\\sigma(z) = \\frac{1}{1+e^{-z}}", note: "Nén output vào (0,1) → xác suất. z > 0 → σ > 0.5" },
            { name: "MSE", latex: "\\text{MSE} = \\frac{1}{n}\\sum(y_i - \\hat{y}_i)^2", note: "Mean Squared Error. Regression loss. Nhạy outlier (vì bình phương)" },
            { name: "Cross-Entropy Loss", latex: "L = -\\sum[y\\log\\hat{y} + (1-y)\\log(1-\\hat{y})]", note: "Classification loss. y=0 hoặc 1. Phạt nặng khi confident sai" },
            { name: "Regularization", latex: "L_1: \\sum|w_i|, \\quad L_2: \\sum w_i^2", note: "Thêm penalty vào loss để chống overfit. L1 (Lasso): đẩy w về 0 → tự động loại feature không quan trọng. L2 (Ridge): giữ w nhỏ nhưng ≠ 0 → mượt hơn. Elastic Net: kết hợp cả hai" },
        ]
    },
    "C2": {
        title: "📋 Model Evaluation",
        items: [
            { name: "Accuracy", latex: "\\frac{TP + TN}{TP + TN + FP + FN}", note: "TP = đoán P đúng, TN = đoán N đúng, FP = đoán P sai (false alarm), FN = bỏ sót. Bẫy: data 99% bệnh nhân khoẻ → model luôn đoán 'khoẻ' được 99% accuracy nhưng vô dụng!" },
            { name: "Precision", latex: "\\frac{TP}{TP + FP}", note: "Trong số DỰ ĐOÁN positive, bao nhiêu đúng? Quan trọng khi FP tốn kém" },
            { name: "Recall (Sensitivity)", latex: "\\frac{TP}{TP + FN}", note: "Trong số THỰC SỰ positive, bao nhiêu tìm được? Quan trọng khi FN nguy hiểm" },
            { name: "F1 Score", latex: "F_1 = \\frac{2 \\cdot P \\cdot R}{P + R}", note: "Trung bình điều hoà (harmonic mean) — khác trung bình cộng ở chỗ: nếu P hoặc R = 0 thì F1 = 0. Buộc CẢ HAI đều phải tốt. F1 = 1 là perfect" },
            { name: "R² Score", latex: "R^2 = 1 - \\frac{SS_{res}}{SS_{tot}}", note: "SS_res = tổng sai số². SS_tot = tổng phương sai data. R²=1: dự đoán hoàn hảo. R²=0: model chẳng hơn gì đoán mean. R²<0: tệ hơn cả đoán mean (model rất tồi)" },
        ]
    },
    "C3": {
        title: "🧠 Deep Learning",
        items: [
            { name: "ReLU", latex: "f(x) = \\max(0, x)", note: "x>0 → giữ nguyên, x<0 → = 0. Vanishing gradient = gradient quá nhỏ (sigmoid) → layer sâu không học được → ReLU fix vì gradient = 1 khi x>0. Dying ReLU: neuron kẹt ở 0 mãi → dùng Leaky ReLU (0.01x khi x<0)" },
            { name: "Softmax", latex: "\\sigma(z_j) = \\frac{e^{z_j}}{\\sum_k e^{z_k}}", note: "Multiclass: chuyển logits → xác suất (tổng = 1)" },
            { name: "Backpropagation", latex: "\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial w}", note: "Forward: input → output → loss. Backward: dùng chain rule tính ∂L/∂w cho TỪNG weight, đi ngược từ output về input. Mỗi layer nhận gradient từ layer sau, nhân thêm gradient cục bộ" },
            { name: "Batch Normalization", latex: "\\hat{x} = \\frac{x - \\mu}{\\sigma}, \\quad y = \\gamma\\hat{x} + \\beta", note: "Bước 1: normalize output mỗi layer về mean=0, std=1 (theo batch). Bước 2: scale & shift bằng γ, β (model TỰ HỌC giá trị tốt nhất). Lợi ích: train nhanh hơn, cho phép learning rate lớn hơn, ít nhạy initialization" },
            { name: "Dropout", latex: "\\text{Randomly zero } p\\% \\text{ neurons}", note: "Regularization. Train: random tắt. Inference: tắt dropout, scale output" },
        ]
    },
    "C4": {
        title: "📝 NLP",
        items: [
            { name: "Attention (Transformer)", latex: "\\text{Attn}(Q,K,V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V", note: "Q: query, K: key, V: value. √d_k: scale tránh softmax quá sharp" },
            { name: "TF-IDF", latex: "\\text{tfidf} = \\text{tf}(t,d) \\times \\log\\frac{N}{\\text{df}(t)}", note: "tf: tần suất trong doc. idf: nghịch tần suất trong corpus. Từ hiếm → IDF cao" },
        ]
    },
    "C5": {
        title: "👁️ Computer Vision",
        items: [
            { name: "Conv output size", latex: "\\text{out} = \\frac{W - F + 2P}{S} + 1", note: "W: input, F: filter, P: padding, S: stride" },
            { name: "IoU (Intersection over Union)", latex: "\\text{IoU} = \\frac{|A \\cap B|}{|A \\cup B|}", note: "Đo overlap bounding boxes. IoU > 0.5 = 'good' detection" },
        ]
    },
    "C9": {
        title: "🤖 LLM & GenAI",
        items: [
            { name: "Temperature", latex: "p_i = \\text{softmax}\\left(\\frac{\\text{logit}_i}{T}\\right)", note: "T→0: deterministic (chọn top). T→∞: random đều. T=1: default" },
            { name: "LoRA (Low-Rank Adaptation)", latex: "W' = W + BA", note: "Thay vì update ma trận W gốc (rất lớn, VD 4096×4096), chỉ học 2 ma trận nhỏ B(4096×16) × A(16×4096). r=16 → giảm 99.6% params cần train. Freeze W gốc, chỉ train B và A" },
            { name: "Perplexity", latex: "\\text{PPL} = \\exp\\left(-\\frac{1}{N}\\sum \\log P(w_i)\\right)", note: "Đo khả năng dự đoán. PPL thấp = model tốt. GPT-4 PPL ≈ 8-15" },
        ]
    },
    "C10": {
        title: "🎮 Reinforcement Learning",
        items: [
            { name: "Return (Tổng reward)", latex: "G_t = r_t + \\gamma r_{t+1} + \\gamma^2 r_{t+2} + \\cdots", note: "γ: discount factor. γ gần 1 = far-sighted, gần 0 = short-sighted" },
            { name: "Q-Learning update", latex: "Q(s,a) \\leftarrow Q + \\alpha[r + \\gamma \\max_{a'} Q(s',a') - Q(s,a)]", note: "Q(s,a) = giá trị hành động a ở state s. Update: Q mới = Q cũ + α × (reward thực tế + giá trị tương lai ước lượng − Q cũ). Temporal Difference: học từng bước, không cần đợi hết episode" },
            { name: "Bellman Equation", latex: "V(s) = \\max_a [R(s,a) + \\gamma V(s')]", note: "Giá trị state = best action reward + discounted next state value" },
        ]
    },
};

function getSectionPrefix(sectionName) {
    const match = sectionName.match(/^([A-D]\d+)/);
    return match ? match[1] : null;
}

function renderCheatsheet(sectionName) {
    const content = document.getElementById("cheatsheetContent");

    const prefix = getSectionPrefix(sectionName);
    const data = prefix ? CHEATSHEET_DATA[prefix] : null;

    if (!data) {
        content.innerHTML = `<div class="cheatsheet-empty"><i class="fa-solid fa-book-open"></i><p>Không có cheatsheet cho phần này</p></div>`;
        return;
    }

    let html = `<h3 class="cheatsheet-title">${data.title}</h3><div class="formula-list">`;
    data.items.forEach(item => {
        html += `<div class="formula-item">
      <div class="formula-name">${item.name}</div>
      <div class="formula-latex" data-latex="${item.latex.replace(/"/g, '&quot;')}"></div>
      <div class="formula-note">${item.note}</div>
    </div>`;
    });
    html += '</div>';

    content.innerHTML = html;

    // Render LaTeX with KaTeX
    content.querySelectorAll('.formula-latex').forEach(el => {
        try {
            katex.render(el.dataset.latex, el, { throwOnError: false, displayMode: false });
        } catch (e) {
            el.textContent = el.dataset.latex;
        }
    });
}
