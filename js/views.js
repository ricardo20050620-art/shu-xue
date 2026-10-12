/* ============================================================
   考研数学二全面练习大题库 - 视图渲染层
   ============================================================ */
(function() {
  'use strict';

  const { Data, State, Router, Utils, Icons } = window.QB;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ============================================================
  // 视图：首页 - 章节目录
  // ============================================================
  function renderHome() {
    const stats = State.getStats();
    const chapters = Data.getChapters();
    const app = $('#app');

    let html = `
      <div class="page-header">
        <h1 class="page-title">考研数学二 · 全面练习大题库</h1>
        <p class="page-subtitle">覆盖高等数学 + 线性代数全部11章，${stats.total} 道精选题，逐题配详细解析</p>
      </div>

      <div class="stats-overview">
        <div class="stat-card primary">
          <div class="stat-value">${stats.total}</div>
          <div class="stat-label">题目总数</div>
        </div>
        <div class="stat-card success">
          <div class="stat-value">${stats.mastered}</div>
          <div class="stat-label">已掌握</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-value">${stats.review}</div>
          <div class="stat-label">需复习</div>
        </div>
        <div class="stat-card danger">
          <div class="stat-value">${stats.wrongCount}</div>
          <div class="stat-label">错题数</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${stats.overallRate}%</div>
          <div class="stat-label">总体完成率</div>
        </div>
      </div>

      <div class="chapter-grid" id="chapter-grid">
    `;

    chapters.forEach(ch => {
      const chStats = stats.chapterStats[ch.id] || { total: 0, mastered: 0, rate: 0 };
      const sectionCount = Object.keys(ch.sections).length;
      const isCalc = ch.id <= 5;
      html += `
        <div class="chapter-card" data-chapter="${ch.id}">
          <div class="chapter-card-header" onclick="QBViews.toggleChapter(${ch.id})">
            <div class="chapter-number ${isCalc ? 'calculus' : 'algebra'}">${ch.id}</div>
            <div class="chapter-info">
              <div class="chapter-name">${ch.title}</div>
              <div class="chapter-meta">
                <span>${sectionCount} 小节</span>
                <span>${chStats.total} 题</span>
                <span>完成 ${chStats.rate}%</span>
              </div>
            </div>
            <div class="chapter-expand-icon">${Icons.chevronDown}</div>
          </div>
          <div class="chapter-sections">
      `;
      Object.values(ch.sections).forEach(sec => {
        let secMastered = 0;
        sec.questions.forEach(q => {
          if (State.getQuestionStatus(q.id) === 'mastered') secMastered++;
        });
        const rate = sec.questions.length > 0 ? Math.round((secMastered / sec.questions.length) * 100) : 0;
        html += `
          <div class="section-row" onclick="QBViews.goSection('${sec.id}')">
            <span class="section-id">${sec.id}</span>
            <span class="section-name">${sec.title}</span>
            <span class="section-count">${sec.questions.length}题</span>
            <div class="section-progress-bar">
              <div class="section-progress-fill" style="width:${rate}%"></div>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    });

    html += `</div>`;
    app.innerHTML = html;
    updateNavActive('home');
  }

  // ============================================================
  // 视图：小节练习页
  // ============================================================
  let sectionFilter = { difficulty: 'all', type: 'all', random: false };

  function renderSection(params) {
    const sectionId = params[0];
    const section = Data.getSection(sectionId);
    const app = $('#app');

    if (!section) {
      app.innerHTML = `<div class="empty-state"><h3>小节不存在</h3><p>请返回首页选择其他小节</p></div>`;
      return;
    }

    const [chId] = sectionId.split('.');
    const chapter = Data.getChapter(chId);
    let questions = [...section.questions];

    // 应用筛选
    questions = Data.filterByDifficulty(questions, sectionFilter.difficulty);
    questions = Data.filterByType(questions, sectionFilter.type);
    if (sectionFilter.random) {
      questions = Data.randomSample(section.questions, Math.min(20, section.questions.length));
    }

    let html = `
      <div class="section-header">
        <div class="section-header-info">
          <h2>${chapter.title} · ${section.id} ${section.title}</h2>
          <p>共 ${section.questions.length} 道题目 · 当前显示 ${questions.length} 道</p>
        </div>
        <div class="flex gap-8">
          <button class="btn btn-secondary btn-sm" onclick="QBViews.randomPractice('${sectionId}')">
            ${Icons.refresh} 随机抽20题
          </button>
          <button class="btn btn-ghost btn-sm" onclick="QBViews.goHome()">返回首页</button>
        </div>
      </div>

      <div class="filter-bar">
        <div class="filter-group">
          <span class="filter-label">难度：</span>
          ${['all','基础','提高','难题','真题'].map(d =>
            `<span class="filter-chip ${sectionFilter.difficulty === d ? 'active' : ''}" onclick="QBViews.setFilter('difficulty','${d}','${sectionId}')">${d === 'all' ? '全部' : d}</span>`
          ).join('')}
        </div>
        <div class="filter-group">
          <span class="filter-label">题型：</span>
          ${['all','选择','填空','解答'].map(t =>
            `<span class="filter-chip ${sectionFilter.type === t ? 'active' : ''}" onclick="QBViews.setFilter('type','${t}','${sectionId}')">${t === 'all' ? '全部' : t}</span>`
          ).join('')}
        </div>
        ${sectionFilter.random ? `<button class="btn btn-ghost btn-sm" onclick="QBViews.cancelRandom('${sectionId}')">取消随机</button>` : ''}
      </div>

      <div class="question-list">
    `;

    if (questions.length === 0) {
      html += `<div class="empty-state"><p>没有符合筛选条件的题目</p></div>`;
    }

    questions.forEach(q => {
      const status = State.getQuestionStatus(q.id);
      const isWrong = State.isWrong(q.id);
      const isFav = State.isFavorite(q.id);
      const itemClass = isWrong ? 'wrong' : status;

      html += `
        <div class="question-item ${itemClass}" onclick="QBViews.goQuestion('${q.id}')">
          <div class="question-item-header">
            <span class="question-id">${q.id}</span>
            <span class="badge ${Utils.difficultyBadge(q.difficulty)}">${q.difficulty}${q.year ? '·' + q.year : ''}</span>
            <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
            <span class="question-topic">${q.topic}</span>
            ${isFav ? `<span style="color:var(--warning);margin-left:auto">${Icons.starFilled}</span>` : ''}
          </div>
          <div class="question-item-body math">${q.question}</div>
          <div class="question-item-footer">
            <span class="status-tag ${status}">${Utils.statusLabel(status)}</span>
            ${isWrong ? `<span class="status-tag" style="background:var(--danger-bg);color:var(--danger)">错题</span>` : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    app.innerHTML = html;
    updateNavActive('section');
  }

  // ============================================================
  // 视图：题目详情
  // ============================================================
  function renderQuestion(params) {
    const qid = params[0];
    const q = Data.getQuestion(qid);
    const app = $('#app');

    if (!q) {
      app.innerHTML = `<div class="empty-state"><h3>题目不存在</h3></div>`;
      return;
    }

    const status = State.getQuestionStatus(qid);
    const isFav = State.isFavorite(qid);
    const isWrong = State.isWrong(qid);
    const [sectionId] = qid.split('-');
    const section = Data.getSection(sectionId);
    const sectionQuestions = section ? section.questions : [];
    const currentIdx = sectionQuestions.findIndex(x => x.id === qid);
    const prevQ = currentIdx > 0 ? sectionQuestions[currentIdx - 1] : null;
    const nextQ = currentIdx < sectionQuestions.length - 1 ? sectionQuestions[currentIdx + 1] : null;

    let optionsHtml = '';
    if (q.type === '选择' && q.options && q.options.length) {
      optionsHtml = `<div class="question-options" id="question-options">`;
      q.options.forEach((opt, i) => {
        const letter = String.fromCharCode(65 + i);
        optionsHtml += `
          <div class="question-option" data-idx="${i}" onclick="QBViews.selectOption(this, '${qid}')">
            <span class="option-label">${letter}</span>
            <span>${opt.replace(/^[A-D][.、]\s*/, '')}</span>
          </div>
        `;
      });
      optionsHtml += `</div>`;
    }

    let solutionHtml = '';
    if (q.solution && q.solution.length) {
      solutionHtml = `<div class="solution-steps">`;
      q.solution.forEach((step, i) => {
        solutionHtml += `
          <div class="solution-step">
            <div class="step-number">${i + 1}</div>
            <div class="step-content math">${step}</div>
          </div>
        `;
      });
      solutionHtml += `</div>`;
    }

    let keyPointsHtml = '';
    if (q.keyPoints && q.keyPoints.length) {
      keyPointsHtml = `<div class="key-points">`;
      q.keyPoints.forEach(kp => {
        let cls = 'key';
        if (kp.includes('易错')) cls = 'error';
        else if (kp.includes('简便') || kp.includes('技巧')) cls = 'tip';
        const label = kp.match(/^【(.+?)】/) ? kp.match(/^【(.+?)】/)[1] : '提示';
        const content = kp.replace(/^【.+?】\s*/, '');
        keyPointsHtml += `
          <div class="key-point ${cls}">
            <span class="key-point-label">【${label}】</span>
            <span>${content}</span>
          </div>
        `;
      });
      keyPointsHtml += `</div>`;
    }

    app.innerHTML = `
      <div class="question-detail">
        <div class="question-detail-header">
          <div class="question-detail-title">
            <h2>${q.id}</h2>
            <span class="badge ${Utils.difficultyBadge(q.difficulty)}">${q.difficulty}${q.year ? '·' + q.year : ''}</span>
            <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
            <span class="badge" style="background:var(--bg-tertiary);color:var(--text-secondary)">${q.topic}</span>
          </div>
          <div class="question-detail-actions">
            <button class="btn ${isFav ? 'btn-danger' : 'btn-secondary'} btn-sm" onclick="QBViews.toggleFav('${qid}')">
              ${isFav ? Icons.starFilled : Icons.star} ${isFav ? '已收藏' : '收藏'}
            </button>
            ${isWrong ? `<button class="btn btn-secondary btn-sm" onclick="QBViews.removeFromWrong('${qid}')">${Icons.check} 移出错题</button>` : ''}
          </div>
        </div>

        <div class="question-detail-body">
          <div class="question-text math">${q.question}</div>
          ${optionsHtml}

          <div class="status-buttons" style="margin-bottom:20px">
            <span class="filter-label" style="margin-right:8px">掌握状态：</span>
            <button class="status-btn ${status === 'mastered' ? 'active mastered' : ''}" onclick="QBViews.setStatus('${qid}','mastered')">已掌握</button>
            <button class="status-btn ${status === 'review' ? 'active review' : ''}" onclick="QBViews.setStatus('${qid}','review')">需复习</button>
            <button class="status-btn ${status === 'unmastered' ? 'active unmastered' : ''}" onclick="QBViews.setStatus('${qid}','unmastered')">未掌握</button>
          </div>

          <div class="answer-section" id="answer-section">
            <div class="answer-toggle" onclick="QBViews.toggleAnswer()">
              ${Icons.eye} 查看答案与解析
            </div>
            <div class="answer-content">
              <div class="answer-inner">
                <div class="answer-block">
                  <div class="answer-block-title">${Icons.check} 最终答案</div>
                  <div class="answer-block-content math">${q.answer}</div>
                </div>

                ${solutionHtml ? `
                <div class="answer-block">
                  <div class="answer-block-title">${Icons.target} 解题思路</div>
                  ${solutionHtml}
                </div>
                ` : ''}

                ${keyPointsHtml ? `
                <div class="answer-block">
                  <div class="answer-block-title">${Icons.alert} 重点与易错点</div>
                  ${keyPointsHtml}
                </div>
                ` : ''}

                ${q.summary ? `
                <div class="answer-block">
                  <div class="answer-block-title">${Icons.book} 方法总结</div>
                  <div class="method-summary"><strong>方法归纳：</strong>${q.summary}</div>
                </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="question-nav">
        ${prevQ ? `<button class="btn btn-secondary" onclick="QBViews.goQuestion('${prevQ.id}')">${Icons.chevronLeft} 上一题</button>` : `<span></span>`}
        <span class="question-nav-info">${currentIdx + 1} / ${sectionQuestions.length}</span>
        ${nextQ ? `<button class="btn btn-primary" onclick="QBViews.goQuestion('${nextQ.id}')">下一题 ${Icons.chevronRight}</button>` : `<span></span>`}
      </div>
    `;
    updateNavActive('question');
  }

  // ============================================================
  // 视图：错题本
  // ============================================================
  function renderWrong() {
    const wrongQuestions = State.getWrongQuestions();
    const app = $('#app');

    // 按章节分组
    const byChapter = {};
    wrongQuestions.forEach(q => {
      const chId = q.id.split('.')[0];
      if (!byChapter[chId]) byChapter[chId] = [];
      byChapter[chId].push(q);
    });

    let html = `
      <div class="page-header">
        <h1 class="page-title">错题本</h1>
        <p class="page-subtitle">共 ${wrongQuestions.length} 道错题，按章节分类整理</p>
      </div>
    `;

    if (wrongQuestions.length === 0) {
      html += `
        <div class="empty-state">
          ${Icons.wrong}
          <h3>还没有错题</h3>
          <p>做题时标记错误的题目会自动收录到这里</p>
        </div>
      `;
    } else {
      Object.keys(byChapter).sort().forEach(chId => {
        const ch = Data.getChapter(chId);
        html += `<h3 style="font-size:15px;margin:20px 0 12px;color:var(--text-secondary)">${ch ? ch.title : '第' + chId + '章'} (${byChapter[chId].length}题)</h3>`;
        html += `<div class="question-list">`;
        byChapter[chId].forEach(q => {
          html += `
            <div class="question-item wrong" onclick="QBViews.goQuestion('${q.id}')">
              <div class="question-item-header">
                <span class="question-id">${q.id}</span>
                <span class="badge ${Utils.difficultyBadge(q.difficulty)}">${q.difficulty}</span>
                <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
                <span class="question-topic">${q.topic}</span>
              </div>
              <div class="question-item-body math">${q.question}</div>
            </div>
          `;
        });
        html += `</div>`;
      });
    }

    app.innerHTML = html;
    updateNavActive('wrong');
  }

  // ============================================================
  // 视图：收藏夹
  // ============================================================
  function renderFavorites() {
    const favQuestions = State.getFavoriteQuestions();
    const app = $('#app');

    let html = `
      <div class="page-header">
        <h1 class="page-title">收藏夹</h1>
        <p class="page-subtitle">共 ${favQuestions.length} 道收藏题目</p>
      </div>
    `;

    if (favQuestions.length === 0) {
      html += `
        <div class="empty-state">
          ${Icons.star}
          <h3>还没有收藏</h3>
          <p>在题目详情页点击收藏按钮，将重点题目收录到这里</p>
        </div>
      `;
    } else {
      html += `<div class="question-list">`;
      favQuestions.forEach(q => {
        const status = State.getQuestionStatus(q.id);
        html += `
          <div class="question-item ${status}" onclick="QBViews.goQuestion('${q.id}')">
            <div class="question-item-header">
              <span class="question-id">${q.id}</span>
              <span class="badge ${Utils.difficultyBadge(q.difficulty)}">${q.difficulty}${q.year ? '·' + q.year : ''}</span>
              <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
              <span class="question-topic">${q.topic}</span>
              <span style="color:var(--warning);margin-left:auto">${Icons.starFilled}</span>
            </div>
            <div class="question-item-body math">${q.question}</div>
          </div>
        `;
      });
      html += `</div>`;
    }

    app.innerHTML = html;
    updateNavActive('favorites');
  }

  // ============================================================
  // 视图：真题模考
  // ============================================================
  let examState = { active: false, year: null, questions: [], currentIdx: 0, answers: {}, startTime: null, timer: null };

  function renderExam() {
    const app = $('#app');

    if (!examState.active) {
      const years = Data.getExamYears();
      const yearList = Object.keys(years).sort((a, b) => b - a);

      let html = `
        <div class="page-header">
          <h1 class="page-title">历年真题模考</h1>
          <p class="page-subtitle">按年份成套练习，模拟真实考试节奏</p>
        </div>
      `;

      if (yearList.length === 0) {
        html += `<div class="empty-state"><h3>暂无真题数据</h3><p>真题数据正在加载中，请稍后再试</p></div>`;
      } else {
        html += `<div class="exam-year-grid">`;
        yearList.forEach(year => {
          const result = State.getExamResult(year);
          html += `
            <div class="exam-year-card" onclick="QBViews.startExam(${year})">
              <div class="exam-year">${year}</div>
              <div class="exam-year-label">考研数学二真题</div>
              <div class="exam-year-meta">
                <span>${years[year].length} 题</span>
                ${result ? `<span style="color:var(--success)">已完成 ${result.score}分</span>` : ''}
              </div>
            </div>
          `;
        });
        html += `</div>`;
      }

      app.innerHTML = html;
    } else {
      renderExamQuestion();
    }
    updateNavActive('exam');
  }

  function renderExamQuestion() {
    const app = $('#app');
    const q = examState.questions[examState.currentIdx];
    if (!q) return;

    const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
    const remaining = Math.max(0, 180 * 60 - elapsed); // 180分钟
    const timerClass = remaining < 600 ? 'danger' : remaining < 1800 ? 'warning' : '';

    let optionsHtml = '';
    if (q.type === '选择' && q.options) {
      optionsHtml = `<div class="question-options">`;
      q.options.forEach((opt, i) => {
        const letter = String.fromCharCode(65 + i);
        const selected = examState.answers[q.id] === letter;
        optionsHtml += `
          <div class="question-option ${selected ? 'selected' : ''}" onclick="QBViews.examAnswer('${q.id}','${letter}')">
            <span class="option-label">${letter}</span>
            <span>${opt.replace(/^[A-D][.、]\s*/, '')}</span>
          </div>
        `;
      });
      optionsHtml += `</div>`;
    }

    app.innerHTML = `
      <div class="exam-timer ${timerClass}" id="exam-timer">${Utils.formatTime(remaining)}</div>

      <div class="question-detail">
        <div class="question-detail-header">
          <div class="question-detail-title">
            <h2>${examState.year}年真题 · 第${examState.currentIdx + 1}题</h2>
            <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
            <span class="badge" style="background:var(--bg-tertiary);color:var(--text-secondary)">${q.topic}</span>
          </div>
          <button class="btn btn-danger btn-sm" onclick="QBViews.endExam()">交卷</button>
        </div>
        <div class="question-detail-body">
          <div class="question-text math">${q.question}</div>
          ${optionsHtml}
          ${q.type !== '选择' ? `<div style="margin-top:16px"><textarea placeholder="请在此处写下你的解答过程（仅作记录，不参与评分）" style="width:100%;min-height:120px;padding:12px;border:1px solid var(--border-color);border-radius:var(--radius-sm);background:var(--bg-tertiary);font-family:inherit;resize:vertical" onchange="QBViews.examAnswer('${q.id}', this.value)"></textarea></div>` : ''}
        </div>
      </div>

      <div class="question-nav">
        ${examState.currentIdx > 0 ? `<button class="btn btn-secondary" onclick="QBViews.examPrev()">${Icons.chevronLeft} 上一题</button>` : '<span></span>'}
        <span class="question-nav-info">${examState.currentIdx + 1} / ${examState.questions.length}</span>
        ${examState.currentIdx < examState.questions.length - 1 ? `<button class="btn btn-primary" onclick="QBViews.examNext()">下一题 ${Icons.chevronRight}</button>` : '<button class="btn btn-primary" onclick="QBViews.endExam()">交卷</button>'}
      </div>
    `;
  }

  // ============================================================
  // 视图：学习统计
  // ============================================================
  function renderStats() {
    const stats = State.getStats();
    const app = $('#app');

    let html = `
      <div class="page-header">
        <h1 class="page-title">学习统计</h1>
        <p class="page-subtitle">追踪学习进度，分析薄弱环节</p>
      </div>

      <div class="stats-overview">
        <div class="stat-card primary">
          <div class="stat-value">${stats.overallRate}%</div>
          <div class="stat-label">总体完成率</div>
        </div>
        <div class="stat-card success">
          <div class="stat-value">${stats.mastered}/${stats.total}</div>
          <div class="stat-label">已掌握 / 总题数</div>
        </div>
        <div class="stat-card warning">
          <div class="stat-value">${stats.review}</div>
          <div class="stat-label">需复习</div>
        </div>
        <div class="stat-card danger">
          <div class="stat-value">${stats.wrongCount}</div>
          <div class="stat-label">错题数</div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="chart-card">
          <div class="chart-card-title">各章节完成率</div>
          <div class="chapter-progress-list">
    `;

    const colors = ['#3b5bdb', '#5c7cfa', '#7048e8', '#9775fa', '#15aabf', '#2f9e44', '#f08c00', '#e03131', '#845ef7', '#20c997', '#fd7e14'];
    Data.getChapters().forEach((ch, i) => {
      const cs = stats.chapterStats[ch.id] || { rate: 0, mastered: 0, total: 0 };
      html += `
        <div class="chapter-progress-item">
          <span class="chapter-progress-name">${ch.id}. ${ch.title}</span>
          <div class="chapter-progress-track">
            <div class="chapter-progress-fill" style="width:${cs.rate}%;background:${colors[i % colors.length]}"></div>
          </div>
          <span class="chapter-progress-text">${cs.rate}%</span>
        </div>
      `;
    });

    html += `
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-card-title">薄弱环节分析（正确率低于60%的小节）</div>
    `;

    if (stats.weakSections.length === 0) {
      html += `<div class="empty-state" style="padding:30px"><h3>暂无薄弱环节</h3><p>继续保持，所有小节正确率均在60%以上</p></div>`;
    } else {
      html += `<div class="weak-section-list">`;
      stats.weakSections.forEach(ws => {
        html += `
          <div class="weak-section-item" style="cursor:pointer" onclick="QBViews.goSection('${ws.id}')">
            <span class="weak-section-id">${ws.id}</span>
            <span class="weak-section-name">${ws.title}</span>
            <span class="weak-section-rate">${ws.rate}%</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    html += `
        </div>
      </div>

      <div class="card mt-24" style="text-align:center">
        <p style="color:var(--text-secondary);margin-bottom:12px">需要重置所有学习记录吗？此操作不可恢复。</p>
        <button class="btn btn-danger btn-sm" onclick="QBViews.resetAllData()">${Icons.trash} 重置所有数据</button>
      </div>
    `;

    app.innerHTML = html;
    updateNavActive('stats');
  }

  // ============================================================
  // 视图：搜索结果
  // ============================================================
  function renderSearch(params) {
    const keyword = decodeURIComponent(params[0] || '');
    const results = Data.search(keyword);
    const app = $('#app');

    let html = `
      <div class="page-header">
        <h1 class="page-title">搜索结果</h1>
        <p class="page-subtitle">关键词「${keyword}」共找到 ${results.length} 道题目</p>
      </div>
    `;

    if (results.length === 0) {
      html += `<div class="empty-state">${Icons.search}<h3>未找到相关题目</h3><p>试试其他关键词</p></div>`;
    } else {
      html += `<div class="question-list">`;
      results.slice(0, 100).forEach(q => {
        html += `
          <div class="question-item" onclick="QBViews.goQuestion('${q.id}')">
            <div class="question-item-header">
              <span class="question-id">${q.id}</span>
              <span class="badge ${Utils.difficultyBadge(q.difficulty)}">${q.difficulty}</span>
              <span class="badge ${Utils.typeBadge(q.type)}">${q.type}</span>
              <span class="question-topic">${q.topic}</span>
            </div>
            <div class="question-item-body math">${q.question}</div>
          </div>
        `;
      });
      html += `</div>`;
      if (results.length > 100) {
        html += `<div style="text-align:center;padding:20px;color:var(--text-tertiary)">仅显示前100条结果，请缩小搜索范围</div>`;
      }
    }

    app.innerHTML = html;
  }

  // ============================================================
  // 交互方法（挂到全局供 onclick 调用）
  // ============================================================
  window.QBViews = {
    // 导航
    goHome() { Router.navigate('/home'); },
    goSection(id) { sectionFilter = { difficulty: 'all', type: 'all', random: false }; Router.navigate('/section/' + id); },
    goQuestion(id) { Router.navigate('/question/' + id); },
    goWrong() { Router.navigate('/wrong'); },
    goFavorites() { Router.navigate('/favorites'); },
    goExam() { Router.navigate('/exam'); },
    goStats() { Router.navigate('/stats'); },

    // 首页交互
    toggleChapter(id) {
      const card = document.querySelector(`.chapter-card[data-chapter="${id}"]`);
      if (card) card.classList.toggle('expanded');
    },

    // 筛选
    setFilter(key, value, sectionId) {
      sectionFilter[key] = value;
      sectionFilter.random = false;
      renderSection([sectionId]);
    },
    randomPractice(sectionId) {
      sectionFilter.random = true;
      renderSection([sectionId]);
      Utils.toast('已随机抽取20道题目', 'info');
    },
    cancelRandom(sectionId) {
      sectionFilter.random = false;
      renderSection([sectionId]);
    },

    // 题目详情
    toggleAnswer() {
      const section = document.getElementById('answer-section');
      if (section) section.classList.toggle('show');
    },
    setStatus(qid, status) {
      State.setQuestionStatus(qid, status);
      renderQuestion([qid]);
      Utils.toast('已标记为「' + Utils.statusLabel(status) + '」', 'success');
    },
    toggleFav(qid) {
      const isFav = State.toggleFavorite(qid);
      renderQuestion([qid]);
      Utils.toast(isFav ? '已添加到收藏夹' : '已取消收藏', isFav ? 'success' : 'info');
    },
    removeFromWrong(qid) {
      State.removeWrong(qid);
      renderQuestion([qid]);
      Utils.toast('已从错题本移除', 'success');
    },
    selectOption(el, qid) {
      document.querySelectorAll('.question-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      // 如果选错了，自动加入错题本（简单判断：选择题答案通常以正确选项开头）
      const q = Data.getQuestion(qid);
      if (q && q.type === '选择') {
        const selectedLetter = el.querySelector('.option-label').textContent;
        // 检查答案中是否包含该字母
        if (q.answer && !q.answer.includes(selectedLetter)) {
          State.addWrong(qid);
        }
      }
    },

    // 真题模考
    startExam(year) {
      const years = Data.getExamYears();
      if (!years[year]) return;
      examState = {
        active: true,
        year: year,
        questions: years[year],
        currentIdx: 0,
        answers: {},
        startTime: Date.now(),
        timer: setInterval(() => {
          const timerEl = document.getElementById('exam-timer');
          if (timerEl) {
            const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
            const remaining = Math.max(0, 180 * 60 - elapsed);
            timerEl.textContent = Utils.formatTime(remaining);
            timerEl.className = 'exam-timer ' + (remaining < 600 ? 'danger' : remaining < 1800 ? 'warning' : '');
            if (remaining === 0) {
              this.endExam();
            }
          }
        }, 1000)
      };
      renderExam();
      Utils.toast(`${year}年真题模考开始，限时180分钟`, 'info');
    },
    examAnswer(qid, answer) {
      examState.answers[qid] = answer;
    },
    examPrev() {
      if (examState.currentIdx > 0) {
        examState.currentIdx--;
        renderExamQuestion();
      }
    },
    examNext() {
      if (examState.currentIdx < examState.questions.length - 1) {
        examState.currentIdx++;
        renderExamQuestion();
      }
    },
    endExam() {
      if (examState.timer) clearInterval(examState.timer);
      const answered = Object.keys(examState.answers).length;
      const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
      State.setExamResult(examState.year, {
        score: answered,
        total: examState.questions.length,
        time: elapsed,
        answers: examState.answers
      });
      examState.active = false;
      Utils.toast(`模考结束！作答 ${answered}/${examState.questions.length} 题，用时 ${Utils.formatTime(elapsed)}`, 'success');
      renderExam();
    },

    // 统计
    resetAllData() {
      if (confirm('确定要重置所有学习记录吗？此操作不可恢复。')) {
        State.resetAll();
        Utils.toast('所有数据已重置', 'info');
        renderStats();
      }
    },

    // 搜索
    doSearch(keyword) {
      if (keyword && keyword.trim()) {
        Router.navigate('/search/' + encodeURIComponent(keyword.trim()));
      }
    }
  };

  // ============================================================
  // 辅助：更新导航高亮
  // ============================================================
  function updateNavActive(view) {
    $$('.nav-item').forEach(item => item.classList.remove('active'));
    const map = { home: 'nav-home', section: 'nav-home', question: 'nav-home', wrong: 'nav-wrong', favorites: 'nav-favorites', exam: 'nav-exam', stats: 'nav-stats' };
    const id = map[view];
    if (id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('active');
    }
  }

  // ============================================================
  // 注册路由
  // ============================================================
  Router.register('/home', () => renderHome());
  Router.register('/section', (p) => renderSection(p));
  Router.register('/question', (p) => renderQuestion(p));
  Router.register('/wrong', () => renderWrong());
  Router.register('/favorites', () => renderFavorites());
  Router.register('/exam', () => renderExam());
  Router.register('/stats', () => renderStats());
  Router.register('/search', (p) => renderSearch(p));

  // 导出渲染函数供外部调用
  window.QBViews.renderHome = renderHome;
  window.QBViews.renderSection = renderSection;

})();
