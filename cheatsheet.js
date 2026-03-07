const CHEATSHEET_CACHE = {};

function getSectionPrefix(sectionName) {
    const match = sectionName.match(/^([A-D]\d+)/);
    return match ? match[1] : null;
}

async function renderCheatsheet(sectionName) {
    const content = document.getElementById("cheatsheetContent");

    const prefix = getSectionPrefix(sectionName);
    if (!prefix) {
        content.innerHTML = `<div class="cheatsheet-empty"><i class="fa-solid fa-book-open"></i><p>Không có cheatsheet cho phần này</p></div>`;
        return;
    }

    let data = CHEATSHEET_CACHE[prefix];

    if (!data) {
        content.innerHTML = `<div class="cheatsheet-empty"><i class="fa-solid fa-spinner fa-spin"></i><p>Đang tải cheatsheet...</p></div>`;
        try {
            const response = await fetch(`data/cheatsheets/${prefix}.json`);
            if (!response.ok) throw new Error("File not found");
            data = await response.json();
            CHEATSHEET_CACHE[prefix] = data;
        } catch (error) {
            content.innerHTML = `<div class="cheatsheet-empty"><i class="fa-solid fa-book-open"></i><p>Chưa có cheatsheet chi tiết cho phần này.</p></div>`;
            return;
        }
    }

    let html = `<h3 class="cheatsheet-title">${data.title}</h3><div class="formula-list">`;
    data.items.forEach(item => {
        html += `<div class="formula-item">
      <div class="formula-name">${item.name}</div>
      ${item.latex ? `<div class="formula-latex" data-latex="${item.latex.replace(/"/g, '&quot;')}"></div>` : ''}
      <div class="formula-note">${item.note}</div>
    </div>`;
    });
    html += '</div>';

    content.innerHTML = html;

    // Render LaTeX with KaTeX if present
    content.querySelectorAll('.formula-latex').forEach(el => {
        try {
            katex.render(el.dataset.latex, el, { throwOnError: false, displayMode: false });
        } catch (e) {
            el.textContent = el.dataset.latex;
        }
    });
}
