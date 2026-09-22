const categoryData = {
  qb: {
    title: "Question Banks",
    subtitle: "Past papers, model questions and more",
    items: [
      { title: "Educational Psych & Guidance", year: "2015-2024", desc: "Question Bank for Educational Psychological and Guidance.", color: "color-red", fileId: "1sGChbXE_InRGD69u5LA6l8Ueo-7iWyes" },
      { title: "ICT Education Paper-1", year: "2015-2024", desc: "Question Bank for ICT Education Paper 1.", color: "color-blue", fileId: "1pp3DslWvl8T2qXeRKJWx1YGzBXMlwB3r" },
      { title: "ICT in Education", year: "2016-2024", desc: "Question Bank for ICT in Education.", color: "color-green", fileId: "15vcLA8Qk_2DaNiUM1SWdKckx0QwI1iBw" },
      { title: "English Question Bank", year: "2016-2024", desc: "Question Bank for English.", color: "color-purple", fileId: "1L9lyFvxDBIbHJMn-7aE-UrFjvsDwT7jM" },
      { title: "Bangla Question Bank", year: "2016-2024", desc: "Question Bank for Bangla.", color: "color-orange", fileId: "1R4PHNfb8qeZO4aLENaIkm7GEe-0_XYnl" },
      { title: "Math Question Bank", year: "2018-19, 23-24", desc: "Question Bank for Math.", color: "color-red", fileId: "1fvR6B8dneqgExUGbejylJ7w9RAXJCdhO" }
    ]
  },
  ab: { title: "Answer Banks", subtitle: "Solved past papers and exercises", items: [] },
  suggestions: { title: "Suggestions", subtitle: "Exam focus topics and shortlists", items: [] },
  notices: { title: "Notices", subtitle: "Important announcements and dates", items: [] },
    syllabus: { 
    title: "Syllabus", 
    subtitle: "Course outlines and modules", 
    items: [
      {
        title: "3rd Semester Complete Syllabus",
        year: "2023-2024",
        desc: "Interactive syllabus hub for all compulsory and area-wise courses.",
        color: "color-purple",
        isLocal: true,
        localUrl: "syllabus.html"
      }
    ] 
  },

  routine: { title: "Routine", subtitle: "Class schedules and timings", items: [] },
  notes: { 
    title: "Notes", 
    subtitle: "Lecture notes and summaries", 
    items: [
      {
        title: "ICT Education Paper 1 Note",
        year: "2024",
        desc: "আইসিটি বেসিক, ইনপুট-আউটপুট, RAM/ROM এবং কম্পিউটারের শ্রেণিবিভাগ নিয়ে সম্পূর্ণ নোট।",
        color: "color-blue",
        isLocal: true,
        localUrl: "ict-note.html"
      }
    ] 
  },
  books: { title: "Books", subtitle: "Reference materials and textbooks", items: [] },
  sheets: { title: "Sheets", subtitle: "Practice sheets and worksheets", items: [] }
};

const svgPremiumFile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="width:28px; height:28px;">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fill-opacity="0.12" stroke="none"></path>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="8" y1="13" x2="16" y2="13"></line>
  <line x1="8" y1="17" x2="16" y2="17"></line>
  <line x1="8" y1="9" x2="11" y2="9"></line>
</svg>`;

const svgCalendar = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px; vertical-align:-2px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
const svgEye = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
const svgDownload = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

function renderList(category) {
  const data = categoryData[category];
  document.getElementById('section-title').textContent = data.title;
  document.getElementById('section-subtitle').textContent = data.subtitle;
  document.getElementById('item-count').textContent = `${data.items.length} resources`;
  
  const container = document.getElementById('resource-list');
  container.innerHTML = '';

  if(data.items.length === 0) {
    container.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 20px;">No resources uploaded yet.</p>`;
    return;
  }

  data.items.forEach(item => {
    let actionsHtml = '';
    
    if (item.isLocal) {
      actionsHtml = `<a href="${item.localUrl}" class="btn btn-view" style="flex: 100%;">${svgEye} Open Page</a>`;
    } else {
      const viewUrl = `https://drive.google.com/file/d/${item.fileId}/view`;
      const dlUrl = `https://drive.google.com/uc?export=download&id=${item.fileId}`;
      actionsHtml = `
        <a href="${viewUrl}" target="_blank" class="btn btn-view">${svgEye} View</a>
        <a href="${dlUrl}" target="_blank" class="btn btn-download">${svgDownload} Download</a>
      `;
    }

    const card = document.createElement('div');
    card.className = 'resource-card';
    card.innerHTML = `
      <div class="file-icon ${item.color}">${svgPremiumFile}</div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <div class="card-meta">
          <span>${svgCalendar}${item.year}</span>
        </div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-actions">
          ${actionsHtml}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    const category = e.target.dataset.category;
    
    if (category === 'routine') {
      window.location.href = 'Class routine.html';
      return;
    }

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    renderList(category);
  });
});

// Initial render
renderList('qb');
