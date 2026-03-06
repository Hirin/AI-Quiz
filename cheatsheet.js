const CHEATSHEET_DATA = {
    "A1": {
        title: "📐 Đại số tuyến tính",
        formulas: [
            { name: "Dot product", formula: "u·v = Σuᵢvᵢ = |u||v|cosθ" },
            { name: "Det 2×2", formula: "det([[a,b],[c,d]]) = ad − bc" },
            { name: "Det 3×3", formula: "Khai triển Sarrus hoặc cofactor" },
            { name: "Inverse 2×2", formula: "A⁻¹ = (1/det) × [[d,−b],[−c,a]]" },
            { name: "Norm", formula: "‖v‖ = √(v₁² + v₂² + … + vₙ²)" },
            { name: "Transpose", formula: "(AB)ᵀ = BᵀAᵀ" },
            { name: "Matrix multiply", formula: "Cᵢⱼ = Σ Aᵢₖ × Bₖⱼ" },
            { name: "Rank", formula: "rank(A) = số pivot sau row echelon" },
        ]
    },
    "A2": {
        title: "🔢 Eigenvalue & Decomposition",
        formulas: [
            { name: "Eigenvalue eq", formula: "Av = λv → det(A − λI) = 0" },
            { name: "Characteristic", formula: "λ² − trace(A)λ + det(A) = 0" },
            { name: "Trace", formula: "tr(A) = Σaᵢᵢ = Σλᵢ" },
            { name: "Det from eigen", formula: "det(A) = Πλᵢ" },
            { name: "SVD", formula: "A = UΣVᵀ" },
            { name: "PCA", formula: "Cov = (1/n)XᵀX, rồi eigendecomp" },
        ]
    },
    "A3": {
        title: "🎲 Xác suất",
        formulas: [
            { name: "P(A∪B)", formula: "P(A) + P(B) − P(A∩B)" },
            { name: "P(A∩B) indep", formula: "P(A) × P(B) nếu độc lập" },
            { name: "Cond. prob", formula: "P(A|B) = P(A∩B) / P(B)" },
            { name: "Bayes", formula: "P(A|B) = P(B|A)P(A) / P(B)" },
            { name: "Total prob", formula: "P(B) = ΣP(B|Aᵢ)P(Aᵢ)" },
            { name: "Combinatorics", formula: "C(n,k) = n! / (k!(n−k)!)" },
            { name: "Permutation", formula: "P(n,k) = n! / (n−k)!" },
        ]
    },
    "A4": {
        title: "📊 Phân phối xác suất",
        formulas: [
            { name: "Bernoulli", formula: "P(X=1)=p, P(X=0)=1−p" },
            { name: "Binomial", formula: "P(X=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ" },
            { name: "Poisson", formula: "P(X=k) = e⁻λ λᵏ / k!" },
            { name: "Normal (PDF)", formula: "f(x) = (1/σ√2π) e^(−(x−μ)²/2σ²)" },
            { name: "Z-score", formula: "z = (x − μ) / σ" },
            { name: "68-95-99.7", formula: "±1σ: 68%, ±2σ: 95%, ±3σ: 99.7%" },
            { name: "Exponential", formula: "f(x) = λe⁻λˣ, E[X] = 1/λ" },
        ]
    },
    "A5": {
        title: "📈 Thống kê",
        formulas: [
            { name: "Mean", formula: "x̄ = (Σxᵢ) / n" },
            { name: "Variance", formula: "σ² = Σ(xᵢ − x̄)² / n" },
            { name: "Std Dev", formula: "σ = √(variance)" },
            { name: "Median", formula: "Giá trị giữa (sort rồi chọn)" },
            { name: "Covariance", formula: "cov(X,Y) = E[(X−μₓ)(Y−μᵧ)]" },
            { name: "Correlation", formula: "r = cov(X,Y) / (σₓσᵧ), −1 ≤ r ≤ 1" },
            { name: "Confidence", formula: "x̄ ± z × (σ/√n)" },
        ]
    },
    "A6": {
        title: "∫ Giải tích & Tối ưu",
        formulas: [
            { name: "Power rule", formula: "d/dx(xⁿ) = nxⁿ⁻¹" },
            { name: "Chain rule", formula: "d/dx f(g(x)) = f'(g(x))·g'(x)" },
            { name: "Product rule", formula: "(uv)' = u'v + uv'" },
            { name: "∫ Power", formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C" },
            { name: "Gradient", formula: "∇f = [∂f/∂x₁, ∂f/∂x₂, …]" },
            { name: "GD update", formula: "θ = θ − α∇L(θ)" },
            { name: "Cực trị", formula: "f'(x)=0, f''(x)>0: min, <0: max" },
        ]
    },
    "A7": {
        title: "🧮 Ước lượng & Thông tin",
        formulas: [
            { name: "Entropy", formula: "H(X) = −Σp(x)log₂p(x)" },
            { name: "Cross-entropy", formula: "H(p,q) = −Σp(x)log q(x)" },
            { name: "KL Divergence", formula: "D(p||q) = Σp(x)log(p(x)/q(x))" },
            { name: "Mutual Info", formula: "I(X;Y) = H(X) − H(X|Y)" },
        ]
    },
    "A8": {
        title: "🧮 Lý thuyết thông tin",
        formulas: [
            { name: "Entropy", formula: "H(X) = −Σp(x)log₂p(x)" },
            { name: "Cross-entropy", formula: "H(p,q) = −Σp(x)log q(x)" },
            { name: "KL Divergence", formula: "D(p||q) = Σp(x)log(p(x)/q(x))" },
        ]
    },
    "A9": {
        title: "📏 Distance Metrics",
        formulas: [
            { name: "Euclidean", formula: "d = √(Σ(xᵢ−yᵢ)²)" },
            { name: "Manhattan", formula: "d = Σ|xᵢ−yᵢ|" },
            { name: "Cosine sim", formula: "cos(θ) = (u·v)/(‖u‖‖v‖)" },
            { name: "Jaccard", formula: "J(A,B) = |A∩B| / |A∪B|" },
            { name: "Mahalanobis", formula: "d = √((x−μ)ᵀ Σ⁻¹ (x−μ))" },
        ]
    },
    "A10": {
        title: "💻 Numerical Stability",
        formulas: [
            { name: "Machine epsilon", formula: "ε ≈ 2.2 × 10⁻¹⁶ (float64)" },
            { name: "Log-sum-exp", formula: "log(Σeˣⁱ) = M + log(Σe^(xᵢ−M))" },
            { name: "Softmax stable", formula: "softmax(x) = e^(x−max(x)) / Σ" },
        ]
    },
    "B1": {
        title: "🐍 Python Basics",
        formulas: [
            { name: "List comp", formula: "[expr for x in iter if cond]" },
            { name: "Slicing", formula: "a[start:stop:step]" },
            { name: "Dict comp", formula: "{k:v for k,v in items}" },
            { name: "f-string", formula: "f'{var:.2f}' → format 2 decimal" },
            { name: "Ternary", formula: "x if condition else y" },
            { name: "Unpack", formula: "a, *b, c = [1,2,3,4,5]" },
        ]
    },
    "B2": {
        title: "🐍 Python Advanced",
        formulas: [
            { name: "Decorator", formula: "@decorator ≡ fn = decorator(fn)" },
            { name: "Generator", formula: "yield → lazy evaluation" },
            { name: "Lambda", formula: "lambda x: x**2" },
            { name: "Map/Filter", formula: "map(fn, iter), filter(fn, iter)" },
            { name: "Context mgr", formula: "with open() as f: ..." },
            { name: "Dataclass", formula: "@dataclass: auto __init__, __repr__" },
        ]
    },
    "B3": {
        title: "⚡ DSA Complexity",
        formulas: [
            { name: "Binary search", formula: "O(log n)" },
            { name: "Sort (best)", formula: "O(n log n) — merge/quick/heap" },
            { name: "Hash lookup", formula: "O(1) average" },
            { name: "Nested loops", formula: "O(n^k) — k nested loops" },
            { name: "BFS/DFS", formula: "O(V + E)" },
            { name: "Stack", formula: "LIFO: push/pop O(1)" },
            { name: "Queue", formula: "FIFO: enqueue/dequeue O(1)" },
        ]
    },
    "B4": {
        title: "🐼 Numpy & Pandas",
        formulas: [
            { name: "Shape", formula: "arr.shape → (rows, cols)" },
            { name: "Broadcasting", formula: "(m,n) op (1,n) → auto expand" },
            { name: "GroupBy", formula: "df.groupby('col').agg(func)" },
            { name: "Merge", formula: "pd.merge(df1, df2, on='key')" },
            { name: "Pivot", formula: "df.pivot_table(values, index, cols)" },
            { name: "NaN", formula: "df.fillna() / df.dropna()" },
        ]
    },
    "B5": {
        title: "🗄️ SQL",
        formulas: [
            { name: "SELECT", formula: "SELECT col FROM t WHERE cond" },
            { name: "JOIN", formula: "INNER/LEFT/RIGHT/FULL JOIN ON" },
            { name: "GROUP BY", formula: "GROUP BY col HAVING agg > val" },
            { name: "Window", formula: "RANK() OVER (PARTITION BY ORDER BY)" },
            { name: "Subquery", formula: "WHERE col IN (SELECT ...)" },
        ]
    },
    "B12": {
        title: "⚙️ C++ Basics",
        formulas: [
            { name: "Pointer", formula: "int* ptr = &x; *ptr = value" },
            { name: "Reference", formula: "int& ref = x; (alias)" },
            { name: "new/delete", formula: "int* p = new int; delete p;" },
            { name: "Vector", formula: "vector<T> v; v.push_back(x);" },
            { name: "For range", formula: "for(auto& x : vec) {...}" },
            { name: "Const ref", formula: "void f(const T& x) // no copy" },
        ]
    },
    "B13": {
        title: "⚙️ C++ Advanced",
        formulas: [
            { name: "Smart ptr", formula: "unique_ptr<T> / shared_ptr<T>" },
            { name: "Virtual", formula: "virtual void f() = 0; // pure" },
            { name: "Template", formula: "template<typename T> T f(T a)" },
            { name: "Lambda", formula: "[capture](params){body}" },
            { name: "Move", formula: "std::move(obj) → rvalue ref &&" },
            { name: "RAII", formula: "Resource in ctor, release in dtor" },
        ]
    },
    "C1": {
        title: "🤖 Supervised / Unsupervised",
        formulas: [
            { name: "Linear Reg", formula: "ŷ = wᵀx + b, Loss = MSE" },
            { name: "Logistic", formula: "σ(z) = 1/(1+e⁻ᶻ)" },
            { name: "MSE", formula: "(1/n)Σ(yᵢ − ŷᵢ)²" },
            { name: "Cross-entropy", formula: "−Σylog(ŷ) + (1−y)log(1−ŷ)" },
            { name: "L1 / L2", formula: "L1: Σ|w|, L2: Σw²" },
            { name: "K-Means", formula: "min Σ‖xᵢ − μₖ‖²" },
        ]
    },
    "C2": {
        title: "📋 Model Evaluation",
        formulas: [
            { name: "Accuracy", formula: "(TP+TN) / (TP+TN+FP+FN)" },
            { name: "Precision", formula: "TP / (TP+FP)" },
            { name: "Recall", formula: "TP / (TP+FN)" },
            { name: "F1", formula: "2×P×R / (P+R)" },
            { name: "AUC-ROC", formula: "Area under TPR vs FPR curve" },
            { name: "R²", formula: "1 − SS_res/SS_tot" },
        ]
    },
    "C3": {
        title: "🧠 Deep Learning",
        formulas: [
            { name: "ReLU", formula: "f(x) = max(0, x)" },
            { name: "Softmax", formula: "σ(zⱼ) = eᶻʲ / Σeᶻᵏ" },
            { name: "Backprop", formula: "∂L/∂w = ∂L/∂ŷ × ∂ŷ/∂w" },
            { name: "Adam", formula: "m,v momentum + RMSProp" },
            { name: "Dropout", formula: "Randomly zero p% neurons" },
            { name: "BatchNorm", formula: "x̂ = (x−μ)/σ, then γx̂+β" },
        ]
    },
    "C4": {
        title: "📝 NLP",
        formulas: [
            { name: "TF-IDF", formula: "tf(t,d) × log(N/df(t))" },
            { name: "Attention", formula: "Attn = softmax(QKᵀ/√dₖ)V" },
            { name: "BLEU", formula: "n-gram precision × brevity penalty" },
            { name: "Perplexity", formula: "PPL = exp(−(1/N)Σlog P(wᵢ))" },
        ]
    },
    "C5": {
        title: "👁️ Computer Vision",
        formulas: [
            { name: "Conv output", formula: "out = (W−F+2P)/S + 1" },
            { name: "Receptive field", formula: "Grows with depth/stride" },
            { name: "IoU", formula: "Intersection / Union" },
            { name: "mAP", formula: "Mean Average Precision" },
        ]
    },
    "C9": {
        title: "🤖 LLM & GenAI",
        formulas: [
            { name: "Temperature", formula: "p = softmax(logits / T)" },
            { name: "Top-p", formula: "Sample from smallest set Σp ≥ p" },
            { name: "Perplexity", formula: "PPL = exp(avg neg log-likelihood)" },
            { name: "LoRA", formula: "W' = W + BA (low-rank adaptation)" },
            { name: "RLHF", formula: "SFT → Reward Model → PPO" },
        ]
    },
    "C10": {
        title: "🎮 Reinforcement Learning",
        formulas: [
            { name: "Return", formula: "Gₜ = rₜ + γrₜ₊₁ + γ²rₜ₊₂ + …" },
            { name: "Q-update", formula: "Q(s,a) ← Q + α[r + γ max Q(s',a') − Q]" },
            { name: "ε-greedy", formula: "ε% random, (1−ε)% argmax Q" },
            { name: "Bellman", formula: "V(s) = max_a [R(s,a) + γV(s')]" },
        ]
    },
};

// Extract section prefix from section name (e.g., "A1: ..." → "A1")
function getSectionPrefix(sectionName) {
    const match = sectionName.match(/^([A-D]\d+)/);
    return match ? match[1] : null;
}

function renderCheatsheet(sectionName) {
    const panel = document.getElementById("cheatsheetPanel");
    const content = document.getElementById("cheatsheetContent");

    const prefix = getSectionPrefix(sectionName);
    const data = prefix ? CHEATSHEET_DATA[prefix] : null;

    if (!data) {
        content.innerHTML = `<div class="cheatsheet-empty"><i class="fa-solid fa-book-open"></i><p>Không có cheatsheet cho phần này</p></div>`;
        return;
    }

    let html = `<h3 class="cheatsheet-title">${data.title}</h3>`;
    html += '<div class="formula-list">';
    data.formulas.forEach(f => {
        html += `<div class="formula-item">
      <div class="formula-name">${f.name}</div>
      <div class="formula-value">${f.formula}</div>
    </div>`;
    });
    html += '</div>';

    content.innerHTML = html;
}
