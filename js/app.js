/* ============================================================
   考研数学二全面练习大题库 - 核心应用逻辑
   ============================================================ */
(function() {
  'use strict';

  // ============================================================
  // 1. 数据访问层 (Data Access Layer)
  // ============================================================
  const Data = {
    /** 获取所有章节元信息 */
    getChapters() {
      const result = [];
      for (let i = 1; i <= 11; i++) {
        const ch = window.QB_DATA && window.QB_DATA[String(i)];
        if (ch) result.push(ch);
      }
      return result;
    },

    /** 获取指定章节 */
    getChapter(id) {
      return window.QB_DATA && window.QB_DATA[String(id)];
    },

    /** 获取指定小节 */
    getSection(sectionId) {
      const [chId] = sectionId.split('.');
      const ch = this.getChapter(chId);
      return ch ? ch.sections[sectionId] : null;
    },

    /** 获取指定题目 */
    getQuestion(questionId) {
      const [sectionId, num] = questionId.split('-');
      const section = this.getSection(sectionId);
      if (!section) return null;
      return section.questions.find(q => q.id === questionId) || null;
    },

    /** 获取小节所有题目 */
    getSectionQuestions(sectionId) {
      const section = this.getSection(sectionId);
      return section ? section.questions : [];
    },

    /** 按难度筛选题目 */
    filterByDifficulty(questions, difficulty) {
      if (!difficulty || difficulty === 'all') return questions;
      return questions.filter(q => q.difficulty === difficulty);
    },

    /** 按题型筛选题目 */
    filterByType(questions, type) {
      if (!type || type === 'all') return questions;
      return questions.filter(q => q.type === type);
    },

    /** 随机抽题 */
    randomSample(questions, count) {
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    },

    /** 搜索题目 */
    search(keyword) {
      if (!keyword || keyword.trim().length < 1) return [];
      const kw = keyword.trim().toLowerCase();
      const results = [];
      this.getChapters().forEach(ch => {
        Object.values(ch.sections).forEach(sec => {
          sec.questions.forEach(q => {
            const haystack = (q.id + ' ' + q.topic + ' ' + q.question + ' ' + q.answer).toLowerCase();
            if (haystack.includes(kw)) results.push(q);
          });
        });
      });
      return results;
    },

    /** 获取所有真题（按年份分组） */
    getExamYears() {
      const years = {};
      this.getChapters().forEach(ch => {
        Object.values(ch.sections).forEach(sec => {
          sec.questions.forEach(q => {
            if (q.difficulty === '真题' && q.year) {
              if (!years[q.year]) years[q.year] = [];
              years[q.year].push(q);
            }
          });
        });
      });
      return years;
    },

    /** 统计总题数 */
    getTotalCount() {
      let count = 0;
      this.getChapters().forEach(ch => {
        Object.values(ch.sections).forEach(sec => {
          count += sec.questions.length;
        });
      });
      return count;
    },

    /** 获取章节题目数 */
    getChapterCount(chId) {
      const ch = this.getChapter(chId);
      if (!ch) return 0;
      let count = 0;
      Object.values(ch.sections).forEach(sec => { count += sec.questions.length; });
      return count;
    }
  };

  // ============================================================
  // 2. 状态管理 (State Manager - localStorage)
  // ============================================================
  const STORAGE_KEY = 'kaoyan_math2_bank_state';

  const defaultState = {
    progress: {},       // { questionId: 'mastered'|'review'|'unmastered' }
    wrong: [],          // [questionId, ...]
    favorites: [],      // [questionId, ...]
    settings: {
      theme: 'light',   // 'light' | 'dark'
      showAnswer: false
    },
    examResults: {},    // { year: { score, total, time, answers: {} } }
    searchHistory: []
  };

  const State = {
    _state: null,

    load() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          this._state = Object.assign({}, defaultState, JSON.parse(raw));
          // 确保嵌套对象完整
          this._state.progress = this._state.progress || {};
          this._state.wrong = this._state.wrong || [];
          this._state.favorites = this._state.favorites || [];
          this._state.settings = Object.assign({}, defaultState.settings, this._state.settings || {});
          this._state.examResults = this._state.examResults || {};
        } else {
          this._state = JSON.parse(JSON.stringify(defaultState));
        }
      } catch (e) {
        this._state = JSON.parse(JSON.stringify(defaultState));
      }
      return this._state;
    },

    save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state));
      } catch (e) {
        console.error('Failed to save state:', e);
      }
    },

    get() {
      if (!this._state) this.load();
      return this._state;
    },

    // 题目状态
    setQuestionStatus(qid, status) {
      this.get().progress[qid] = status;
      this.save();
    },
    getQuestionStatus(qid) {
      return this.get().progress[qid] || 'unmastered';
    },

    // 错题
    addWrong(qid) {
      const s = this.get();
      if (!s.wrong.includes(qid)) {
        s.wrong.push(qid);
        this.save();
      }
    },
    removeWrong(qid) {
      const s = this.get();
      s.wrong = s.wrong.filter(id => id !== qid);
      this.save();
    },
    isWrong(qid) {
      return this.get().wrong.includes(qid);
    },
    getWrongQuestions() {
      return this.get().wrong.map(id => Data.getQuestion(id)).filter(Boolean);
    },

    // 收藏
    toggleFavorite(qid) {
      const s = this.get();
      const idx = s.favorites.indexOf(qid);
      if (idx >= 0) {
        s.favorites.splice(idx, 1);
      } else {
        s.favorites.push(qid);
      }
      this.save();
      return idx < 0;
    },
    isFavorite(qid) {
      return this.get().favorites.includes(qid);
    },
    getFavoriteQuestions() {
      return this.get().favorites.map(id => Data.getQuestion(id)).filter(Boolean);
    },

    // 设置
    setTheme(theme) {
      this.get().settings.theme = theme;
      this.save();
      document.documentElement.setAttribute('data-theme', theme);
    },
    getTheme() {
      return this.get().settings.theme;
    },

    // 考试结果
    setExamResult(year, result) {
      this.get().examResults[year] = result;
      this.save();
    },
    getExamResult(year) {
      return this.get().examResults[year];
    },

    // 统计
    getStats() {
      const s = this.get();
      const total = Data.getTotalCount();
      let mastered = 0, review = 0, attempted = 0;
      Object.values(s.progress).forEach(status => {
        if (status === 'mastered') mastered++;
        else if (status === 'review') review++;
        if (status !== 'unmastered') attempted++;
      });

      // 各章节完成率
      const chapterStats = {};
      Data.getChapters().forEach(ch => {
        let chTotal = 0, chMastered = 0, chReview = 0;
        Object.values(ch.sections).forEach(sec => {
          sec.questions.forEach(q => {
            chTotal++;
            const st = s.progress[q.id];
            if (st === 'mastered') chMastered++;
            else if (st === 'review') chReview++;
          });
        });
        chapterStats[ch.id] = {
          total: chTotal,
          mastered: chMastered,
          review: chReview,
          rate: chTotal > 0 ? Math.round((chMastered / chTotal) * 100) : 0
        };
      });

      // 薄弱小节（正确率最低的5个）
      const sectionRates = [];
      Data.getChapters().forEach(ch => {
        Object.values(ch.sections).forEach(sec => {
          let secTotal = sec.questions.length;
          let secMastered = 0;
          sec.questions.forEach(q => {
            if (s.progress[q.id] === 'mastered') secMastered++;
          });
          if (secTotal > 0 && (secMastered / secTotal) < 0.6) {
            sectionRates.push({
              id: sec.id,
              title: sec.title,
              chapterId: ch.id,
              chapterTitle: ch.title,
              total: secTotal,
              mastered: secMastered,
              rate: Math.round((secMastered / secTotal) * 100)
            });
          }
        });
      });
      sectionRates.sort((a, b) => a.rate - b.rate);

      return {
        total,
        mastered,
        review,
        attempted,
        wrongCount: s.wrong.length,
        favoriteCount: s.favorites.length,
        overallRate: total > 0 ? Math.round((mastered / total) * 100) : 0,
        chapterStats,
        weakSections: sectionRates.slice(0, 8)
      };
    },

    // 重置所有数据
    resetAll() {
      this._state = JSON.parse(JSON.stringify(defaultState));
      this.save();
    }
  };

  // ============================================================
  // 3. 路由 (Hash Router)
  // ============================================================
  const Router = {
    routes: {},
    currentRoute: null,

    register(path, handler) {
      this.routes[path] = handler;
    },

    navigate(path) {
      window.location.hash = path;
    },

    getCurrent() {
      const hash = window.location.hash.slice(1) || '/home';
      return hash;
    },

    parse(hash) {
      // 支持参数路由，如 /section/1.3, /question/1.3-015
      const parts = hash.split('/').filter(Boolean);
      return {
        path: '/' + (parts[0] || 'home'),
        params: parts.slice(1),
        full: hash
      };
    },

    resolve() {
      const hash = this.getCurrent();
      const parsed = this.parse(hash);
      this.currentRoute = parsed;

      // 精确匹配
      if (this.routes[parsed.path]) {
        this.routes[parsed.path](parsed.params);
        return;
      }

      // 回退到首页
      if (this.routes['/home']) {
        this.routes['/home']([]);
      }
    },

    init() {
      window.addEventListener('hashchange', () => this.resolve());
      this.resolve();
    }
  };

  // ============================================================
  // 4. 工具函数 (Utilities)
  // ============================================================
  const Utils = {
    /** 显示 Toast 通知 */
    toast(message, type = 'info') {
      const container = document.getElementById('toast-container');
      if (!container) return;
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = message;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    },

    /** 难度对应的 badge 类名 */
    difficultyBadge(diff) {
      const map = { '基础': 'badge-basic', '提高': 'badge-intermediate', '难题': 'badge-hard', '真题': 'badge-exam' };
      return map[diff] || 'badge-basic';
    },

    /** 题型对应的 badge 类名 */
    typeBadge(type) {
      const map = { '选择': 'badge-choice', '填空': 'badge-fill', '解答': 'badge-answer' };
      return map[type] || 'badge-answer';
    },

    /** 状态对应的标签 */
    statusLabel(status) {
      const map = { 'mastered': '已掌握', 'review': '需复习', 'unmastered': '未掌握' };
      return map[status] || '未掌握';
    },

    /** 转义 HTML */
    escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    },

    /** 格式化时间（秒 -> MM:SS） */
    formatTime(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    },

    /** 防抖 */
    debounce(fn, delay) {
      let timer;
      return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    }
  };

  // ============================================================
  // 5. SVG 图标库
  // ============================================================
  const Icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    wrong: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    starFilled: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    exam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>'
  };

  // ============================================================
  // 6. 导出到全局
  // ============================================================
  window.QB = {
    Data,
    State,
    Router,
    Utils,
    Icons
  };

})();
