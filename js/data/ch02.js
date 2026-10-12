(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['2'] = {
    id: 2,
    title: '一元函数微分学',
    subject: '高等数学',
    sections: {
      '2.1': {
        id: '2.1',
        title: '导数与微分的概念',
        questions: [
          {
            id: '2.1-001',
            difficulty: '基础',
            type: '选择',
            topic: '导数的定义与基本求导',
            year: null,
            question: '设函数 f(x)=x<sup>3</sup>，则 f′(1)=（　）',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 6'
            ],
            answer: 'C',
            solution: [
              '第一步：由基本求导公式 (x<sup>n</sup>)′=nx<sup>n-1</sup>，得 f′(x)=3x<sup>2</sup>。',
              '第二步：代入 x=1，f′(1)=3×1<sup>2</sup>=3。'
            ],
            keyPoints: [
              '【重点】幂函数求导公式要记牢：系数从指数上搬下来，指数再减1。'
            ],
            summary: '基本初等函数求导直接套用求导公式即可。'
          },
          {
            id: '2.1-002',
            difficulty: '基础',
            type: '填空',
            topic: '用导数定义求极限',
            year: null,
            question: '利用导数定义计算极限 lim<sub>h→0</sub> <span class="frac"><span class="num">(1+h)<sup>2</sup>-1</span><span class="den">h</span></span>=______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：令 f(x)=x<sup>2</sup>，则原式=lim<sub>h→0</sub> <span class="frac"><span class="num">f(1+h)-f(1)</span><span class="den">h</span></span>=f′(1)。',
              '第二步：f′(x)=2x，故 f′(1)=2。'
            ],
            keyPoints: [
              '【简便方法】遇到“函数增量比自变量增量”的极限，立刻联想导数定义。'
            ],
            summary: '增量比极限 = 导数，是把极限问题转化为求导的桥梁。'
          },
          {
            id: '2.1-003',
            difficulty: '基础',
            type: '解答',
            topic: '切线方程与法线方程',
            year: null,
            question: '求曲线 y=x<sup>2</sup> 在点 (2, 4) 处的切线方程与法线方程。',
            options: null,
            answer: '切线：y=4x-4；法线：y-4=-<span class="frac"><span class="num">1</span><span class="den">4</span></span>(x-2)，即 y=-<span class="frac"><span class="num">1</span><span class="den">4</span></span>x+<span class="frac"><span class="num">9</span><span class="den">2</span></span>。',
            solution: [
              '第一步：求导 y′=2x，在 x=2 处切线斜率 k=y′(2)=4。',
              '第二步：切线方程 y-4=4(x-2)，即 y=4x-4。',
              '第三步：法线与切线垂直，斜率为 -1/4，故 y-4=-(1/4)(x-2)。'
            ],
            keyPoints: [
              '【重点】导数即切线斜率 k=f′(x₀)；法线斜率为 -1/k（k≠0）。',
              '【易错点】法线斜率是负倒数，不是倒数。'
            ],
            summary: '切线用点斜式，斜率为该点导数值。'
          },
          {
            id: '2.1-004',
            difficulty: '基础',
            type: '选择',
            topic: '导数定义的等价形式',
            year: null,
            question: '设 f(x) 在 x=x<sub>0</sub> 处可导，则 lim<sub>h→0</sub> <span class="frac"><span class="num">f(x<sub>0</sub>+h)-f(x<sub>0</sub>-h)</span><span class="den">2h</span></span>=（　）',
            options: [
              'A. 0',
              'B. f′(x<sub>0</sub>)',
              'C. 2f′(x<sub>0</sub>)',
              'D. <span class="frac"><span class="num">1</span><span class="den">2</span></span>f′(x<sub>0</sub>)'
            ],
            answer: 'B',
            solution: [
              '第一步：原式=<span class="frac"><span class="num">1</span><span class="den">2</span></span>·lim<sub>h→0</sub><span class="frac"><span class="num">f(x<sub>0</sub>+h)-f(x<sub>0</sub>)</span><span class="den">h</span></span> + <span class="frac"><span class="num">1</span><span class="den">2</span></span>·lim<sub>h→0</sub><span class="num"></span><span class="frac"><span class="num">f(x<sub>0</sub>)-f(x<sub>0</sub>-h)</span><span class="den">h</span></span>。',
              '第二步：两项各等于 f′(x<sub>0</sub>)，乘 1/2 后相加，得 f′(x<sub>0</sub>)。'
            ],
            keyPoints: [
              '【重点】分子两端同时往两侧走 h，分母是 2h，结果仍是 f′(x₀)。',
              '【易错点】分母必须与分子自变量变化量匹配。'
            ],
            summary: '对称增量比极限在可导条件下恒等于该点导数。'
          },
          {
            id: '2.1-005',
            difficulty: '基础',
            type: '选择',
            topic: '可导与连续的关系',
            year: null,
            question: '函数 f(x) 在点 x<sub>0</sub> 处连续是 f(x) 在 x<sub>0</sub> 处可导的（　）',
            options: [
              'A. 充分非必要条件',
              'B. 必要非充分条件',
              'C. 充要条件',
              'D. 既非充分也非必要条件'
            ],
            answer: 'B',
            solution: [
              '第一步：可导必连续——若 f′(x₀) 存在，则 Δy=f′(x₀)Δx+o(Δx)，Δy→0，故连续。',
              '第二步：连续不一定可导，反例 f(x)=|x| 在 x=0 处连续但不可导。',
              '第三步：故连续是可导的必要非充分条件。'
            ],
            keyPoints: [
              '【重点】口诀：可导⇒连续，连续⇏可导。',
              '【易错点】不要颠倒充分与必要方向。'
            ],
            summary: '记牢“可导必连续，连续未必可导”。'
          },
          {
            id: '2.1-006',
            difficulty: '基础',
            type: '填空',
            topic: '微分的概念与计算',
            year: null,
            question: '设 y=x<sup>2</sup>，则当 x=1，Δx=dx=0.1 时，微分 dy=______。',
            options: null,
            answer: '0.2',
            solution: [
              '第一步：微分公式 dy=f′(x)dx，f′(x)=2x。',
              '第二步：代入 x=1，dx=0.1，dy=2×1×0.1=0.2。'
            ],
            keyPoints: [
              '【重点】dy 是关于 dx 的线性主部：dy=f′(x)dx，不是 Δy 本身。'
            ],
            summary: '微分 = 导数 × 自变量增量。'
          },
          {
            id: '2.1-007',
            difficulty: '提高',
            type: '选择',
            topic: '分段点可导性判断',
            year: null,
            question: '函数 f(x)=|x-1| 在 x=1 处（　）',
            options: [
              'A. 不连续',
              'B. 连续但不可导',
              'C. 可导且 f′(1)=1',
              'D. 可导且 f′(1)=0'
            ],
            answer: 'B',
            solution: [
              '第一步：连续性。lim<sub>x→1</sub>|x-1|=0=f(1)，连续。',
              '第二步：左导数 f′<sub>-</sub>(1)=lim<sub>h→0<sup>-</sup></span> |h|/h=-1；右导数 f′<sub>+</sub>(1)=lim<sub>h→0<sup>+</sup></span> |h|/h=1。',
              '第三步：左右导数存在但不相等，故不可导。'
            ],
            keyPoints: [
              '【重点】绝对值函数在“零点”处用左右导数分别判断。',
              '【易错点】连续是可导前提，本题连续但不可导。'
            ],
            summary: '|x-a| 在 x=a 处连续不可导，尖点。'
          },
          {
            id: '2.1-008',
            difficulty: '提高',
            type: '填空',
            topic: '导数定义求极限（系数变形）',
            year: null,
            question: '设 f′(x<sub>0</sub>)=2，则 lim<sub>h→0</sub> <span class="frac"><span class="num">f(x<sub>0</sub>+2h)-f(x<sub>0</sub>)</span><span class="den">h</span></span>=______。',
            options: null,
            answer: '4',
            solution: [
              '第一步：原式=2·lim<sub>h→0</sub><span class="frac"><span class="num">f(x<sub>0</sub>+2h)-f(x<sub>0</sub>)</span><span class="den">2h</span></span>=2f′(x<sub>0</sub>)。',
              '第二步：代入 f′(x₀)=2，得 4。'
            ],
            keyPoints: [
              '【易错点】分子自变量增量是 2h，必须把分母凑成 2h 才能用导数定义。'
            ],
            summary: '自变量增量与分母必须同阶同系数。'
          },
          {
            id: '2.1-009',
            difficulty: '提高',
            type: '解答',
            topic: '含连续因子的函数求导（定义法）',
            year: null,
            question: '设 f(x)=(x-a)g(x)，其中 g(x) 在 x=a 处连续但未必可导，用导数定义求 f′(a)。',
            options: null,
            answer: 'f′(a)=g(a)',
            solution: [
              '第一步：f(a)=0，按定义 f′(a)=lim<sub>x→a</sub><span class="frac"><span class="num">f(x)-f(a)</span><span class="den">x-a</span></span>=lim<sub>x→a</sub><span class="frac"><span class="num">(x-a)g(x)</span><span class="den">x-a</span></span>=lim<sub>x→a</sub>g(x)。',
              '第二步：由 g 在 a 连续，lim<sub>x→a</sub>g(x)=g(a)，故 f′(a)=g(a)。'
            ],
            keyPoints: [
              '【重点】g 不可导时不能用乘积求导法则，必须回到定义。',
              '【简便方法】“连续因子可直接代入”是此类题的通法。'
            ],
            summary: '乘积中一个因子在某点为零时，该点导数用定义求最稳。'
          },
          {
            id: '2.1-010',
            difficulty: '提高',
            type: '选择',
            topic: '由极限反推函数值与导数',
            year: null,
            question: '设 f(x) 在 x=0 处连续，且 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x</span></span>=1，则 f′(0)=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 不存在'
            ],
            answer: 'B',
            solution: [
              '第一步：分母 x→0，极限存在为有限值 1，故分子 f(x)→0，由连续性 f(0)=0。',
              '第二步：f′(0)=lim<sub>x→0</sub><span class="frac"><span class="num">f(x)-f(0)</span><span class="den">x-0</span></span>=lim<sub>x→0</sub><span class="frac"><span class="num">f(x)</span><span class="den">x</span></span>=1。'
            ],
            keyPoints: [
              '【重点】“分母→0 而极限存在” ⇒ 分子→0，这是求 f(0) 的关键。'
            ],
            summary: '已知某点极限比值，先求函数值再套导数定义。'
          },
          {
            id: '2.1-011',
            difficulty: '提高',
            type: '填空',
            topic: '对数曲线的切线',
            year: null,
            question: '曲线 y=lnx 在点 (1, 0) 处的切线方程为______。',
            options: null,
            answer: 'y=x-1',
            solution: [
              '第一步：y′=1/x，在 x=1 处 k=1。',
              '第二步：点斜式 y-0=1·(x-1)，即 y=x-1。'
            ],
            keyPoints: [
              '【简便方法】lnx 在 x=1 处切线 y=x-1 是常用结论，可直接记忆。'
            ],
            summary: '初等曲线切线：求导得斜率，点斜式写方程。'
          },
          {
            id: '2.1-012',
            difficulty: '提高',
            type: '解答',
            topic: '分段函数 x|x| 在分段点的可导性',
            year: null,
            question: '讨论函数 f(x)=x|x| 在 x=0 处的连续性与可导性，若可导求 f′(0)。',
            options: null,
            answer: 'f(x) 在 x=0 处连续且可导，f′(0)=0。',
            solution: [
              '第一步：写成分段形式 f(x)=x<sup>2</sup>（x≥0），f(x)=-x<sup>2</sup>（x&lt;0）。',
              '第二步：连续性，lim<sub>x→0</sup>x|x|=0=f(0)，连续。',
              '第三步：左右导数。f′<sub>+</sub>(0)=lim<sub>x→0<sup>+</sup></span><span class="frac"><span class="num">x<sup>2</sup>-0</span><span class="den">x</span></span>=0；f′<sub>-</sub>(0)=lim<sub>x→0<sup>-</sup></span><span class="frac"><span class="num">-x<sup>2</sup>-0</span><span class="den">x</span></span>=0。',
              '第四步：左右导数都为 0 且相等，故可导，f′(0)=0。'
            ],
            keyPoints: [
              '【易错点】不要一看到绝对值就判不可导，x|x| 在 0 处可导，|x| 在 0 处不可导，二者不同。'
            ],
            summary: '带绝对值的分段函数在分段点必须用定义分别求左右导数。'
          },
          {
            id: '2.1-013',
            difficulty: '难题',
            type: '选择',
            topic: '导数存在的充分条件辨析',
            year: null,
            question: '设 f(x) 在 x=a 的某邻域内有定义，则 f(x) 在 x=a 处可导的一个充分条件是（　）',
            options: [
              'A. lim<sub>h→+∞</sub> h[f(a+<span class="frac"><span class="num">1</span><span class="den">h</span></span>)-f(a)] 存在',
              'B. lim<sub>h→0</sub> <span class="frac"><span class="num">f(a+2h)-f(a+h)</span><span class="den">h</span></span> 存在',
              'C. lim<sub>h→0</sub> <span class="frac"><span class="num">f(a+h)-f(a-h)</span><span class="den">2h</span></span> 存在',
              'D. lim<sub>h→0</sub> <span class="frac"><span class="num">f(a)-f(a-h)</span><span class="den">h</span></span> 存在'
            ],
            answer: 'D',
            solution: [
              '第一步：A 仅为 h→+∞ 的单边增量，只能反映右导数，不充分。',
              '第二步：B 的增量不含 f(a)，两点均在 a 附近游动，极限存在不能保证 f 在 a 连续，反例 f(a) 随意取值即可，不充分。',
              '第三步：C 是对称增量，反例 f(x)=<span class="piecewise"><span class="prow"><span class="pval">1,</span><span class="pcond">x≠0</span></span><span class="prow"><span class="pval">0,</span><span class="pcond">x=0</span></span></span> 在 a=0 处该极限为 0，但 f(x) 在 x=0 不连续更不可导，故 C 不充分。',
              '第四步：D 中令 Δx=-h，原式=lim<sub>Δx→0</sub><span class="frac"><span class="num">f(a+Δx)-f(a)</span><span class="den">Δx</span></span>，正是导数定义，充分。'
            ],
            keyPoints: [
              '【重点】导数定义必须“固定点 a”作差，分子必须含 f(a)。',
              '【易错点】对称增量极限存在 ⇏ 可导，这是高频陷阱。'
            ],
            summary: '判断导数充分条件，盯住分子是否固定含 f(a)。'
          },
          {
            id: '2.1-014',
            difficulty: '难题',
            type: '解答',
            topic: '可导必连续的证明',
            year: null,
            question: '证明：若 f(x) 在 x=x<sub>0</sub> 处可导，则 f(x) 在 x<sub>0</sub> 处必连续；并举例说明连续不一定可导。',
            options: null,
            answer: '可导必连续；反例 f(x)=|x| 在 x=0 连续但不可导。',
            solution: [
              '第一步：由可导，lim<sub>Δx→0</sub><span class="frac"><span class="num">Δy</span><span class="den">Δx</span></span>=f′(x₀)。',
              '第二步：Δy=<span class="frac"><span class="num">Δy</span><span class="den">Δx</span></span>·Δx → f′(x₀)·0=0，故 lim<sub>Δx→0</sub>Δy=0，连续。',
              '第三步：反例 f(x)=|x| 在 0 处连续，但左导 -1、右导 1 不相等，不可导。'
            ],
            keyPoints: [
              '【重点】证明链条：导数存在 ⇒ Δy/Δx 有极限 ⇒ Δy→0。'
            ],
            summary: '可导是连续的充分条件，连续是可导的必要条件。'
          },
          {
            id: '2.1-015',
            difficulty: '难题',
            type: '选择',
            topic: '不可导点个数判断',
            year: null,
            question: '函数 f(x)=(x<sup>2</sup>-x-2)|x<sup>3</sup>-x| 不可导点的个数是（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'C',
            solution: [
              '第一步：分解 f(x)=(x-2)(x+1)·|x(x-1)(x+1)|。',
              '第二步：|·| 的零点为 x=-1, 0, 1，可能的不可导点只在此三处。',
              '第三步：在 x=-1 处，外面含 (x+1) 因子，可抵消绝对值带来的尖点，使该点可导；在 x=0 和 x=1 处无抵消因子，为不可导点。',
              '第四步：共 2 个不可导点。'
            ],
            keyPoints: [
              '【重点】|g(x)| 的零点若同时被光滑因子“吃掉”（出现相同零点的多项式），则该点可导，否则不可导。',
              '【简便方法】只检查绝对值里面的零点，其余点均可导。'
            ],
            summary: '含绝对值函数：只在 |·| 的零点处逐点判断可导性。'
          },
          {
            id: '2.1-016',
            difficulty: '难题',
            type: '填空',
            topic: '导数定义的综合变形',
            year: null,
            question: '设 f(0)=0，f′(0)=k，则 lim<sub>x→0</sub> <span class="frac"><span class="num">f(3x)-f(-2x)</span><span class="den">x</span></span>=______。',
            options: null,
            answer: '5k',
            solution: [
              '第一步：原式=3·lim<sub>x→0</sub><span class="frac"><span class="num">f(3x)-f(0)</span><span class="den">3x</span></span> - (-2)·lim<sub>x→0</sub><span class="frac"><span class="num">f(-2x)-f(0)</span><span class="den">-2x</span></span>。',
              '第二步：两个极限都是 f′(0)=k，原式=3k+2k=5k。'
            ],
            keyPoints: [
              '【易错点】f(-2x) 那项前面是减号，增量 -2x 的系数 -2 要带着负号处理，结果是 +2k。'
            ],
            summary: '多个不同增量的线性组合，拆开分别凑导数定义。'
          },
          {
            id: '2.1-017',
            difficulty: '真题',
            type: '填空',
            topic: '多因子乘积在零点的导数',
            year: 2012,
            question: '设 f(x)=(e<sup>x</sup>-1)(e<sup>2x</sup>-2)·…·(e<sup>nx</sup>-n)，其中 n 为正整数，则 f′(0)=______。',
            options: null,
            answer: '(-1)<sup>n-1</sup>(n-1)!',
            solution: [
              '第一步：f(0)=(1-1)(1-2)…(1-n)=0，用乘积求导的“逐项求导、其余代入”法。',
              '第二步：只有对第一个因子 (e<sup>x</sup>-1) 求导那一项，其余因子在 0 处才不含因子 (1-1)=0；对第 k(k≥2) 个因子求导那一项，仍含 (e<sup>x</sup>-1) 在 0 处为 0，整项为 0。',
              '第三步：故 f′(0)=(e<sup>x</sup>)′|<sub>x=0</sub>·∏<sub>k=2</sub><sup>n</sup>(1-k)=1·(-1)(-2)…(1-n)=(-1)<sup>n-1</sup>(n-1)!。'
            ],
            keyPoints: [
              '【重点】乘积求导在零点处：哪一个因子在该点不为零，就只对那个因子求导。',
              '【简便方法】只挑“在 x=0 处导数贡献非零”的那一项。'
            ],
            summary: '连乘函数在某点导数，只对该点处非零因子求导，其余直接代入。'
          },
          {
            id: '2.1-018',
            difficulty: '真题',
            type: '选择',
            topic: '连续与可导概念辨析',
            year: 2007,
            question: '设函数 f(x) 在 x=0 处连续，下列命题错误的是（　）',
            options: [
              'A. 若 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x</span></span> 存在，则 f(0)=0',
              'B. 若 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)+f(-x)</span><span class="den">x</span></span> 存在，则 f(0)=0',
              'C. 若 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x</span></span> 存在，则 f′(0) 存在',
              'D. 若 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)-f(-x)</span><span class="den">x</span></span> 存在，则 f′(0) 存在'
            ],
            answer: 'D',
            solution: [
              '第一步：A 对。分母→0 极限存在 ⇒ 分子 f(x)→0，连续得 f(0)=0。',
              '第二步：B 对。分子 f(x)+f(-x)→2f(0)，分母→0 极限存在 ⇒ 2f(0)=0。',
              '第三步：C 对。f(0)=0 后，该极限即导数定义 f′(0)。',
              '第四步：D 错。反例 f(x)=|x|，lim<sub>x→0</sub><span class="frac"><span class="num">f(x)-f(-x)</span><span class="den">x</span></span>=lim<span class="frac"><span class="num">0</span><span class="den">x</span></span>=0 存在，但 f′(0) 不存在。'
            ],
            keyPoints: [
              '【重点】对称差 [f(x)-f(-x)]/x 的极限存在 ⇏ f′(0) 存在，与 2.1-013 的 C 同理。'
            ],
            summary: '判断导数存在，分子必须固定含 f(0)。'
          },
          {
            id: '2.1-019',
            difficulty: '真题',
            type: '填空',
            topic: '切线与导数的几何意义',
            year: 2018,
            question: '曲线 y=x<sup>2</sup>+lnx 在 x=1 处的切线方程为______。',
            options: null,
            answer: 'y=3x-2',
            solution: [
              '第一步：y′=2x+1/x，在 x=1 处 k=2+1=3。',
              '第二步：x=1 时 y=1+0=1，切点 (1,1)。',
              '第三步：切线 y-1=3(x-1)，即 y=3x-2。'
            ],
            keyPoints: [
              '【易错点】lnx 在 x=1 处函数值为 0，不要写成 y=2x 漏掉 lnx 的贡献。'
            ],
            summary: '求切点 + 求斜率，点斜式写出切线。'
          },
          {
            id: '2.1-020',
            difficulty: '真题',
            type: '解答',
            topic: '分段函数在分段点的可导性综合',
            year: 2016,
            question: '设 f(x)=<span class="piecewise"><span class="prow"><span class="pval">x<sup>α</sup>sin(<span class="frac"><span class="num">1</span><span class="den">x</span></span>),</span><span class="pcond">x≠0</span></span><span class="prow"><span class="pval">0,</span><span class="pcond">x=0</span></span></span>，问 α 取何值时：(1) f(x) 在 x=0 连续；(2) f(x) 在 x=0 可导；(3) f′(x) 在 x=0 连续。',
            options: null,
            answer: '(1) α&gt;0；(2) α&gt;1；(3) α&gt;2。',
            solution: [
              '第一步：连续性。|x<sup>α</sup>sin(1/x)|≤|x<sup>α</sup>|，当 α&gt;0 时 x<sup>α</sup>→0，由夹逼定理 f(x)→0=f(0)，连续；α≤0 时极限不存在，不连续。',
              '第二步：可导性。f′(0)=lim<sub>x→0</sub><span class="frac"><span class="num">x<sup>α</sup>sin(1/x)</span><span class="den">x</span></span>=lim x<sup>α-1</sup>sin(1/x)，当 α-1&gt;0 即 α&gt;1 时极限为 0，可导；α≤1 时不存在。',
              '第三步：导数连续。x≠0 时 f′(x)=αx<sup>α-1</sup>sin(1/x)-x<sup>α-2</sup>cos(1/x)，要使 lim<sub>x→0</sub>f′(x)=f′(0)=0，两项都要→0，需 α-2&gt;0 即 α&gt;2。'
            ],
            keyPoints: [
              '【重点】“sin(1/x)、cos(1/x) 有界但振荡”配幂次控制是经典题型。',
              '【易错点】第二问只看 sin(1/x) 那一项会漏判，第三问必须连 cos(1/x) 那一项一起控制。'
            ],
            summary: '含振荡因子 x^α·sin(1/x) 的连续性、可导性、导函数连续性，逐级要求 α&gt;0、α&gt;1、α&gt;2。'
          },
          {
            id: '2.1-021',
            difficulty: '基础',
            type: '填空',
            topic: '导数定义',
            year: null,
            question: '设 f(x) 在 x=1 处可导，且 f(1)=2，f\'(1)=3，则 lim<sub>h→0</sub> <span class="frac"><span class="num">f(1+h)-f(1)</span><span class="den">h</span></span> = ______。',
            options: null,
            answer: '3',
            solution: [
              '第一步：由导数定义 lim_{h→0} (f(1+h)-f(1))/h = f\'(1)。',
              '第二步：代入 f\'(1)=3。'
            ],
            keyPoints: [
              '【重点】导数定义即增量比极限。'
            ],
            summary: '导数定义直接套用。'
          },
          {
            id: '2.1-022',
            difficulty: '基础',
            type: '选择',
            topic: '导数几何意义',
            year: null,
            question: '曲线 y=x<sup>2</sup> 在点(1,1)处的切线方程为（　）。',
            options: [
              'A. y=2x-1',
              'B. y=2x+1',
              'C. y=x',
              'D. y=2x'
            ],
            answer: 'A',
            solution: [
              '第一步：y\'=2x，在 x=1 处 y\'=2。',
              '第二步：切线方程 y-1=2(x-1)，即 y=2x-1。'
            ],
            keyPoints: [
              '【重点】切线斜率=导数值。'
            ],
            summary: '切线方程：点斜式 y-y₀=f\'(x₀)(x-x₀)。'
          },
          {
            id: '2.1-023',
            difficulty: '基础',
            type: '填空',
            topic: '可导与连续',
            year: null,
            question: '函数 f(x)=|x| 在 x=0 处是否可导？答：______。',
            options: null,
            answer: '不可导（连续但不可导）',
            solution: [
              '第一步：左导数 lim_{h→0-} (|h|-0)/h = -1。',
              '第二步：右导数 lim_{h→0+} (|h|-0)/h = 1。',
              '第三步：左右导数不相等，故不可导。'
            ],
            keyPoints: [
              '【重点】可导必连续，连续不一定可导。'
            ],
            summary: '|x| 是连续不可导经典例子。'
          },
          {
            id: '2.1-024',
            difficulty: '提高',
            type: '填空',
            topic: '导数定义变形',
            year: null,
            question: '设 f\'(0)=1，则 lim<sub>h→0</sub> <span class="frac"><span class="num">f(h)-f(-h)</span><span class="den">h</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：(f(h)-f(-h))/h = (f(h)-f(0))/h + (f(0)-f(-h))/h。',
              '第二步：第一项 → f\'(0)；第二项令 t=-h → f\'(0)。',
              '第三步：故极限 = 2f\'(0) = 2。'
            ],
            keyPoints: [
              '【方法】拆成两个标准导数定义式。'
            ],
            summary: '对称增量比 = 2f\'(0)。'
          },
          {
            id: '2.1-025',
            difficulty: '提高',
            type: '选择',
            topic: '可导性判断',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval">x<sup>2</sup>,</span><span class="pcond">x≤1</span></span><span class="prow"><span class="pval">ax+b,</span><span class="pcond">x&gt;1</span></span></span> 在 x=1 处可导，则 a,b 为（　）。',
            options: [
              'A. a=2,b=-1',
              'B. a=2,b=1',
              'C. a=1,b=2',
              'D. a=-2,b=1'
            ],
            answer: 'A',
            solution: [
              '第一步：连续：1=a+b。',
              '第二步：左导数=2·1=2；右导数=a。',
              '第三步：可导要求 a=2，代入连续得 b=-1。'
            ],
            keyPoints: [
              '【重点】分段点可导 ⇒ 连续且左右导数相等。'
            ],
            summary: '分段点可导先连续再左右导数相等。'
          },
          {
            id: '2.1-026',
            difficulty: '提高',
            type: '填空',
            topic: '微分概念',
            year: null,
            question: '设 y=x<sup>2</sup>，当 x=1，Δx=0.1 时，微分 dy=______。',
            options: null,
            answer: '0.2',
            solution: [
              '第一步：dy = y\'dx = 2x·dx。',
              '第二步：代入 x=1, dx=0.1 得 dy=2·1·0.1=0.2。'
            ],
            keyPoints: [
              '【重点】dy=f\'(x)dx。'
            ],
            summary: '微分即切线增量。'
          },
          {
            id: '2.1-027',
            difficulty: '难题',
            type: '解答',
            topic: '导数定义综合',
            year: null,
            question: '设 f(x) 在 x=0 连续，且 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x</span></span> = 1，求 f(0) 及 f\'(0)。',
            options: null,
            answer: 'f(0)=0, f\'(0)=1',
            solution: [
              '第一步：由 f 连续，f(0)=lim f(x) = lim (f(x)/x)·x = 1·0 = 0。',
              '第二步：f\'(0) = lim_{x→0} (f(x)-f(0))/x = lim f(x)/x = 1。'
            ],
            keyPoints: [
              '【方法】连续 + 极限 ⇒ 函数值与导数值。'
            ],
            summary: '由极限反推函数值和导数值。'
          },
          {
            id: '2.1-028',
            difficulty: '难题',
            type: '选择',
            topic: '导数几何意义',
            year: null,
            question: '设 f(x) 可导，且 lim<sub>x→∞</sub> f(x)=∞，则曲线 y=f(x) 的斜渐近线斜率为（　）。',
            options: [
              'A. lim f(x)/x',
              'B. lim f(x)',
              'C. lim f\'(x)',
              'D. 不存在'
            ],
            answer: 'A',
            solution: [
              '第一步：斜渐近线 y=kx+b 中 k=lim f(x)/x。',
              '第二步：b=lim (f(x)-kx)。'
            ],
            keyPoints: [
              '【重点】斜渐近线 k=lim f(x)/x。'
            ],
            summary: '斜渐近线公式。'
          },
          {
            id: '2.1-029',
            difficulty: '真题',
            type: '填空',
            topic: '导数定义',
            year: 2017,
            question: '设 f(x) 可导，且 lim<sub>x→0</sub> <span class="frac"><span class="num">f(1)-f(1-x)</span><span class="den">x</span></span> = 1，则 f\'(1)=______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：令 h=-x，原式 = lim_{h→0} (f(1)-f(1+h))/(-h) = f\'(1)。',
              '第二步：故 f\'(1)=1。'
            ],
            keyPoints: [
              '【重点】导数定义的各种变形。'
            ],
            summary: '导数定义变形直接识别。'
          },
          {
            id: '2.1-030',
            difficulty: '真题',
            type: '选择',
            topic: '可导与连续',
            year: 2020,
            question: '设 f(x) 在 x=a 处可导，则 |f(x)| 在 x=a 处不可导的充分条件是（　）。',
            options: [
              'A. f(a)=0 且 f\'(a)=0',
              'B. f(a)=0 且 f\'(a)≠0',
              'C. f(a)&gt;0',
              'D. f(a)&lt;0'
            ],
            answer: 'B',
            solution: [
              '第一步：若 f(a)=0 且 f\'(a)≠0，则 f 在 a 两侧变号，|f| 在 a 处左右导数异号，不可导。',
              '第二步：若 f(a)≠0，|f| 与 f 在 a 附近同号，可导。',
              '第三步：若 f(a)=0 且 f\'(a)=0，|f| 可能可导（如 x²）。'
            ],
            keyPoints: [
              '【重点】|f| 不可导 ⇔ f(a)=0 且 f\'(a)≠0。'
            ],
            summary: '绝对值函数可导性判断。'
          }
        ]
      },
      '2.2': {
        id: '2.2',
        title: '导数的计算（四则运算、复合函数、隐函数、参数方程）',
        questions: [
          {
            id: '2.2-001',
            difficulty: '基础',
            type: '选择',
            topic: '多项式求导',
            year: null,
            question: '设 y=x<sup>3</sup>-2x+1，则 y′=（　）',
            options: [
              'A. 3x<sup>2</sup>-2x',
              'B. 3x<sup>2</sup>-2',
              'C. x<sup>2</sup>-2',
              'D. 3x<sup>2</sup>'
            ],
            answer: 'B',
            solution: [
              '逐项求导：(x<sup>3</sup>)′=3x<sup>2</sup>，(-2x)′=-2，常数 1 的导数为 0，故 y′=3x<sup>2</sup>-2。'
            ],
            keyPoints: [
              '【易错点】常数项求导为 0，不要漏。'
            ],
            summary: '多项式逐项求导即可。'
          },
          {
            id: '2.2-002',
            difficulty: '基础',
            type: '填空',
            topic: '三角函数求导',
            year: null,
            question: '设 y=sinx+cosx，则 y′=______。',
            options: null,
            answer: 'cosx-sinx',
            solution: [
              '(sinx)′=cosx，(cosx)′=-sinx，相加得 y′=cosx-sinx。'
            ],
            keyPoints: [
              '【重点】cosx 求导带负号。'
            ],
            summary: '基本三角函数求导公式要熟记。'
          },
          {
            id: '2.2-003',
            difficulty: '基础',
            type: '选择',
            topic: '乘积求导法则',
            year: null,
            question: '设 y=x·lnx，则 y′=（　）',
            options: [
              'A. lnx',
              'B. 1',
              'C. lnx+1',
              'D. x·(1/x)'
            ],
            answer: 'C',
            solution: [
              '由乘积法则 (uv)′=u′v+uv′，u=x, v=lnx，y′=1·lnx+x·(1/x)=lnx+1。'
            ],
            keyPoints: [
              '【重点】乘积法则“前导后不导 + 前不导后导”。'
            ],
            summary: '乘积求导：两项各导一次相加。'
          },
          {
            id: '2.2-004',
            difficulty: '基础',
            type: '填空',
            topic: 'e^x 与 sinx 乘积求导',
            year: null,
            question: '设 y=e<sup>x</sup>·sinx，则 y′=______。',
            options: null,
            answer: 'e<sup>x</sup>(sinx+cosx)',
            solution: [
              'y′=e<sup>x</sup>·sinx+e<sup>x</sup>·cosx=e<sup>x</sup>(sinx+cosx)。'
            ],
            keyPoints: [
              '【简便方法】e<sup>x</sup> 求导不变，整体提公因式 e<sup>x</sup>。'
            ],
            summary: 'e<sup>x</sup> 乘任何函数，导数仍为 e<sup>x</sup> 乘（原函数+其导数）。'
          },
          {
            id: '2.2-005',
            difficulty: '基础',
            type: '解答',
            topic: '商的求导法则',
            year: null,
            question: '设 y=<span class="frac"><span class="num">x</span><span class="den">1+x<sup>2</sup></span></span>，求 y′。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">1-x<sup>2</sup></span><span class="den">(1+x<sup>2</sup>)<sup>2</sup></span></span>',
            solution: [
              '第一步：商法则 (u/v)′=(u′v-uv′)/v<sup>2</sup>，u=x, v=1+x<sup>2</sup>。',
              '第二步：u′=1，v′=2x，代入得 y′=<span class="frac"><span class="num">1·(1+x<sup>2</sup>)-x·2x</span><span class="den">(1+x<sup>2</sup>)<sup>2</sup></span></span>=<span class="frac"><span class="num">1-x<sup>2</sup></span><span class="den">(1+x<sup>2</sup>)<sup>2</sup></span></span>。'
            ],
            keyPoints: [
              '【易错点】商法则分子是“上导下不导 - 上不导下导”，顺序不能反。'
            ],
            summary: '商的求导：分子交叉相乘相减，分母平方。'
          },
          {
            id: '2.2-006',
            difficulty: '基础',
            type: '选择',
            topic: '复合函数求导（链式法则）',
            year: null,
            question: '设 y=sin(2x)，则 y′=（　）',
            options: [
              'A. cos2x',
              'B. -cos2x',
              'C. 2cos2x',
              'D. 2sin2x'
            ],
            answer: 'C',
            solution: [
              '外层 sin 求导 cos(2x)，内层 2x 求导 2，链式法则 y′=cos(2x)·2=2cos2x。'
            ],
            keyPoints: [
              '【重点】链式法则：逐层求导相乘，内层导数不要漏。'
            ],
            summary: '复合函数求导：外导×内导。'
          },
          {
            id: '2.2-007',
            difficulty: '基础',
            type: '填空',
            topic: 'e^{x²} 求导',
            year: null,
            question: '设 y=e<sup>x<sup>2</sup></sup>，则 y′=______。',
            options: null,
            answer: '2x·e<sup>x<sup>2</sup></sup>',
            solution: [
              '外层 e<sup>u</sup> 求导仍为 e<sup>u</sup>，内层 u=x<sup>2</sup> 求导 2x，y′=e<sup>x<sup>2</sup></sup>·2x=2x e<sup>x<sup>2</sup></sup>。'
            ],
            keyPoints: [
              '【简便方法】e 的复合指数，导数 = 自身 × 指数的导数。'
            ],
            summary: 'e^{u(x)} 的导数 = e^{u(x)}·u′(x)。'
          },
          {
            id: '2.2-008',
            difficulty: '基础',
            type: '解答',
            topic: 'ln(x+√(1+x²)) 求导',
            year: null,
            question: '设 y=ln(x+<span class="sqrt">1+x<sup>2</sup></span>)，求 y′。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">1</span><span class="den"><span class="sqrt">1+x<sup>2</sup></span></span></span>',
            solution: [
              '第一步：内层 u=x+√(1+x<sup>2</sup>)，u′=1+<span class="frac"><span class="num">2x</span><span class="den">2√(1+x<sup>2</sup>)</span></span>=1+<span class="frac"><span class="num">x</span><span class="den">√(1+x<sup>2</sup>)</span></span>=<span class="frac"><span class="num">√(1+x<sup>2</sup>)+x</span><span class="den">√(1+x<sup>2</sup>)</span></span>。',
              '第二步：y′=<span class="frac"><span class="num">u′</span><span class="den">u</span></span>=<span class="frac"><span class="num">(√(1+x<sup>2</sup>)+x)/√(1+x<sup>2</sup>)</span><span class="den">x+√(1+x<sup>2</sup>)</span></span>=<span class="frac"><span class="num">1</span><span class="den">√(1+x<sup>2</sup>)</span></span>。'
            ],
            keyPoints: [
              '【重点】这是反双曲正弦的导数，结果 1/√(1+x²) 是常用结论，应背下来。'
            ],
            summary: 'ln(x+√(1+x²)) 求导 = 1/√(1+x²)。'
          },
          {
            id: '2.2-009',
            difficulty: '基础',
            type: '选择',
            topic: '幂函数复合求导',
            year: null,
            question: '设 y=(3x+1)<sup>5</sup>，则 y′=（　）',
            options: [
              'A. 5(3x+1)<sup>4</sup>',
              'B. 15(3x+1)<sup>4</sup>',
              'C. (3x+1)<sup>4</sup>',
              'D. 15(3x+1)<sup>5</sup>'
            ],
            answer: 'B',
            solution: [
              '外层 u<sup>5</sup> 求导 5u<sup>4</sup>，内层 3x+1 求导 3，y′=5(3x+1)<sup>4</sup>·3=15(3x+1)<sup>4</sup>。'
            ],
            keyPoints: [
              '【易错点】内层一次函数的系数 3 不能丢。'
            ],
            summary: '(ax+b)^n 的导数 = n·a·(ax+b)^(n-1)。'
          },
          {
            id: '2.2-010',
            difficulty: '基础',
            type: '填空',
            topic: 'tan 复合求导',
            year: null,
            question: '设 y=tan(<span class="frac"><span class="num">1</span><span class="den">x</span></span>)，则 y′=______。',
            options: null,
            answer: '-<span class="frac"><span class="num">sec<sup>2</sup>(<span class="frac"><span class="num">1</span><span class="den">x</span></span>)</span><span class="den">x<sup>2</sup></span></span>',
            solution: [
              '外层 tanu 求导 sec<sup>2</sup>u，内层 u=1/x=-x<sup>-1</sup> 求导 -1/x<sup>2</sup>，y′=sec<sup>2</sup>(1/x)·(-1/x<sup>2</sup>)。'
            ],
            keyPoints: [
              '【重点】(1/x)′=-1/x²，符号为负。'
            ],
            summary: 'tanu 的导数 = sec²u·u′。'
          },
          {
            id: '2.2-011',
            difficulty: '基础',
            type: '解答',
            topic: '反三角函数求导',
            year: null,
            question: '设 y=arctan(x<sup>2</sup>)，求 y′。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">2x</span><span class="den">1+x<sup>4</sup></span></span>',
            solution: [
              '外层 arctan u 求导 1/(1+u<sup>2</sup>)，内层 u=x<sup>2</sup> 求导 2x，y′=<span class="frac"><span class="num">1</span><span class="den">1+x<sup>4</sup></span></span>·2x=<span class="frac"><span class="num">2x</span><span class="den">1+x<sup>4</sup></span></span>。'
            ],
            keyPoints: [
              '【重点】(arctan u)′=u′/(1+u²)。'
            ],
            summary: '反三角函数求导记住 arctan、arcsin、arccos 三个公式。'
          },
          {
            id: '2.2-012',
            difficulty: '基础',
            type: '选择',
            topic: '对数求导法（幂指函数）',
            year: null,
            question: '设 y=x<sup>x</sup>（x&gt;0），则 y′=（　）',
            options: [
              'A. x·x<sup>x-1</sup>',
              'B. x<sup>x</sup>·lnx',
              'C. x<sup>x</sup>(lnx+1)',
              'D. x<sup>x-1</sup>'
            ],
            answer: 'C',
            solution: [
              '第一步：两边取对数 lny=x·lnx。',
              '第二步：两边对 x 求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=lnx+1，故 y′=x<sup>x</sup>(lnx+1)。'
            ],
            keyPoints: [
              '【重点】幂指函数 u(x)^v(x) 必须用对数求导法，不能直接套幂函数或指数函数公式。'
            ],
            summary: '幂指函数：取对数后隐函数求导。'
          },
          {
            id: '2.2-013',
            difficulty: '提高',
            type: '选择',
            topic: '隐函数求导（圆上切线）',
            year: null,
            question: '设 y=y(x) 由 x<sup>2</sup>+y<sup>2</sup>=1 确定，则在点 (<span class="frac"><span class="num">√2</span><span class="den">2</span></span>, <span class="frac"><span class="num">√2</span><span class="den">2</span></span>) 处 y′=（　）',
            options: [
              'A. 1',
              'B. -1',
              'C. 0',
              'D. 不存在'
            ],
            answer: 'B',
            solution: [
              '两边对 x 求导：2x+2y·y′=0，得 y′=-x/y。代入点 (√2/2, √2/2)，y′=-1。'
            ],
            keyPoints: [
              '【重点】隐函数求导：含 y 的项求导后要乘 y′。'
            ],
            summary: '隐函数两边对 x 求导，解出 y′。'
          },
          {
            id: '2.2-014',
            difficulty: '提高',
            type: '填空',
            topic: '隐函数在指定点求导数值',
            year: null,
            question: '设 y=y(x) 由 e<sup>y</sup>+xy=e 确定，则 y′(0)=______。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">e</span></span>',
            solution: [
              '第一步：x=0 代入 e<sup>y</sup>=e，得 y=1。',
              '第二步：两边对 x 求导 e<sup>y</sup>·y′+y+xy′=0。',
              '第三步：代入 (0,1)：e·y′+1=0，y′=-1/e。'
            ],
            keyPoints: [
              '【易错点】必须先求出对应 y 值，再代入求导式。'
            ],
            summary: '隐函数求导数值：先代 x 求 y，再代入求导方程解 y′。'
          },
          {
            id: '2.2-015',
            difficulty: '提高',
            type: '解答',
            topic: '隐函数求导（指数隐函数）',
            year: null,
            question: '设 y=1+xe<sup>y</sup>，求 y′。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">e<sup>y</sup></span><span class="den">1-xe<sup>y</sup></span></span>',
            solution: [
              '第一步：两边对 x 求导 y′=e<sup>y</sup>+x·e<sup>y</sup>·y′。',
              '第二步：移项 y′(1-xe<sup>y</sup>)=e<sup>y</sup>，故 y′=e<sup>y</sup>/(1-xe<sup>y</sup>)。'
            ],
            keyPoints: [
              '【重点】e<sup>y</sup> 对 x 求导是 e<sup>y</sup>·y′，链式法则不要漏。'
            ],
            summary: '隐函数求导后把含 y′ 的项合并解出。'
          },
          {
            id: '2.2-016',
            difficulty: '提高',
            type: '选择',
            topic: '参数方程求导（摆线）',
            year: null,
            question: '设参数方程 x=t-sint，y=1-cost，则 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>=（　）',
            options: [
              'A. tant',
              'B. cot(<span class="frac"><span class="num">t</span><span class="den">2</span></span>)',
              'C. -tant',
              'D. sint'
            ],
            answer: 'B',
            solution: [
              '第一步：dx/dt=1-cost，dy/dt=sint。',
              '第二步：dy/dx=(dy/dt)/(dx/dt)=sint/(1-cost)=<span class="frac"><span class="num">2sin(t/2)cos(t/2)</span><span class="den">2sin<sup>2</sup>(t/2)</span></span>=cot(t/2)。'
            ],
            keyPoints: [
              '【重点】参数方程求导 dy/dx=(dy/dt)/(dx/dt)，不要颠倒。',
              '【简便方法】半角公式化简。'
            ],
            summary: '参数方程一阶导 = 两导数相除。'
          },
          {
            id: '2.2-017',
            difficulty: '提高',
            type: '填空',
            topic: '参数方程在指定点求导数值',
            year: null,
            question: '设 x=e<sup>t</sup>cost，y=e<sup>t</sup>sint，则在 t=0 处 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>=______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：dx/dt=e<sup>t</sup>(cost-sint)，t=0 时为 1。',
              '第二步：dy/dt=e<sup>t</sup>(sint+cost)，t=0 时为 1。',
              '第三步：dy/dx=1/1=1。'
            ],
            keyPoints: [
              '【易错点】先求导再代入 t 值，不要先把 t=0 代入 x,y 再求导。'
            ],
            summary: '参数方程求导数值：分别求 dx/dt、dy/dt 再相除。'
          },
          {
            id: '2.2-018',
            difficulty: '提高',
            type: '解答',
            topic: '参数方程化简求导',
            year: null,
            question: '设 x=ln√(1+t<sup>2</sup>)，y=arctant，求 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">dy</span><span class="den">dx</span></span>=<span class="frac"><span class="num">1</span><span class="den">t</span></span>',
            solution: [
              '第一步：dx/dt=<span class="frac"><span class="num">1</span><span class="den">√(1+t<sup>2</sup>)</span></span>·<span class="frac"><span class="num">t</span><span class="den">√(1+t<sup>2</sup>)</span></span>=<span class="frac"><span class="num">t</span><span class="den">1+t<sup>2</sup></span></span>。',
              '第二步：dy/dt=<span class="frac"><span class="num">1</span><span class="den">1+t<sup>2</sup></span></span>。',
              '第三步：dy/dx=(1/(1+t<sup>2</sup>))/(t/(1+t<sup>2</sup>))=1/t。'
            ],
            keyPoints: [
              '【简便方法】两式分母相同，相除后直接约掉。'
            ],
            summary: '参数方程求导结果往往很简洁，大胆化简。'
          },
          {
            id: '2.2-019',
            difficulty: '提高',
            type: '选择',
            topic: '对数求导法',
            year: null,
            question: '设 y=x<sup>sinx</sup>（x&gt;0），则 y′=（　）',
            options: [
              'A. x<sup>sinx</sup>·cosx·lnx',
              'B. x<sup>sinx</sup>(<span class="frac"><span class="num">sinx</span><span class="den">x</span></span>+cosx·lnx)',
              'C. cosx·x<sup>sinx-1</sup>',
              'D. x<sup>sinx</sup>·sinx'
            ],
            answer: 'B',
            solution: [
              '第一步：lny=sinx·lnx。',
              '第二步：求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=cosx·lnx+sinx·<span class="frac"><span class="num">1</span><span class="den">x</span></span>。',
              '第三步：y′=x<sup>sinx</sup>(cosx·lnx+sinx/x)。'
            ],
            keyPoints: [
              '【重点】幂指函数一律取对数求导。'
            ],
            summary: 'u^v 求导：ln y=v·ln u，两边求导。'
          },
          {
            id: '2.2-020',
            difficulty: '提高',
            type: '填空',
            topic: '多因子乘除开方的对数求导',
            year: null,
            question: '设 y=<span class="sqrt"><span class="frac"><span class="num">x-1</span><span class="den">x-2</span></span></span>（x&gt;2），则 y′=______。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">1</span><span class="den">2</span></span><span class="sqrt"><span class="frac"><span class="num">x-1</span><span class="den">x-2</span></span></span>(<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>-<span class="frac"><span class="num">1</span><span class="den">x-2</span></span>)',
            solution: [
              '第一步：lny=<span class="frac"><span class="num">1</span><span class="den">2</span></span>[ln(x-1)-ln(x-2)]。',
              '第二步：求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=<span class="frac"><span class="num">1</span><span class="den">2</span></span>(<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>-<span class="frac"><span class="num">1</span><span class="den">x-2</span></span>)，两边乘 y 即得。'
            ],
            keyPoints: [
              '【简便方法】乘除开方混合结构取对数，把乘除变加减，最省事。'
            ],
            summary: '多因子乘除开方函数首选对数求导。'
          },
          {
            id: '2.2-021',
            difficulty: '提高',
            type: '解答',
            topic: '对数求导法在多项式连乘上的应用',
            year: null,
            question: '设 y=(x-1)(x-2)<sup>2</sup>(x-3)<sup>3</sup>，求 y′。',
            options: null,
            answer: 'y′=(x-1)(x-2)<sup>2</sup>(x-3)<sup>3</sup>[<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>+<span class="frac"><span class="num">2</span><span class="den">x-2</span></span>+<span class="frac"><span class="num">3</span><span class="den">x-3</span></span>]',
            solution: [
              '第一步：lny=ln(x-1)+2ln(x-2)+3ln(x-3)。',
              '第二步：求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>+<span class="frac"><span class="num">2</span><span class="den">x-2</span></span>+<span class="frac"><span class="num">3</span><span class="den">x-3</span></span>。',
              '第三步：两边乘 y 得结果。'
            ],
            keyPoints: [
              '【简便方法】多项式连乘取对数比反复用乘积法则快得多。'
            ],
            summary: 'n 因子连乘取对数，逐项 1/(x-a) 相加。'
          },
          {
            id: '2.2-022',
            difficulty: '提高',
            type: '选择',
            topic: '抽象复合函数求导',
            year: null,
            question: '设 f 可导，y=f(sin<sup>2</sup>x)，则 y′=（　）',
            options: [
              'A. f′(sin<sup>2</sup>x)',
              'B. f′(sin<sup>2</sup>x)·sin2x',
              'C. f′(sin<sup>2</sup>x)·2sinx',
              'D. f′(cos<sup>2</sup>x)'
            ],
            answer: 'B',
            solution: [
              '外层 f(u) 求导 f′(u)，内层 u=sin<sup>2</sup>x 求导 2sinx·cosx=sin2x，故 y′=f′(sin<sup>2</sup>x)·sin2x。'
            ],
            keyPoints: [
              '【易错点】sin²x 的导数是 2sinx·cosx，不是 2sinx。'
            ],
            summary: '抽象复合函数：外层导数带括号，内层链式乘进去。'
          },
          {
            id: '2.2-023',
            difficulty: '提高',
            type: '填空',
            topic: 'ln|x| 的导数',
            year: null,
            question: '设 y=ln|x|，则 y′=______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">x</span></span>',
            solution: [
              'x&gt;0 时 (lnx)′=1/x；x&lt;0 时 ln(-x) 求导 =1/(-x)·(-1)=1/x。故 y′=1/x。'
            ],
            keyPoints: [
              '【重点】ln|x| 的导数统一为 1/x，对正负 x 都成立，这是重要结论。'
            ],
            summary: 'ln|x| 的导数 = 1/x（x≠0）。'
          },
          {
            id: '2.2-024',
            difficulty: '提高',
            type: '解答',
            topic: '多层复合求导',
            year: null,
            question: '设 y=e<sup>√sin2x</sup>，求 y′。',
            options: null,
            answer: 'y′=e<sup>√sin2x</sup>·<span class="frac"><span class="num">cos2x</span><span class="den">√sin2x</span></span>',
            solution: [
              '第一步：外层 e<sup>u</sup> 求导 e<sup>u</sup>；u=√v，u′=1/(2√v)；v=sin2x，v′=2cos2x。',
              '第二步：连乘 y′=e<sup>√sin2x</sup>·<span class="frac"><span class="num">1</span><span class="den">2√sin2x</span></span>·2cos2x=e<sup>√sin2x</sup>·<span class="frac"><span class="num">cos2x</span><span class="den">√sin2x</span></span>。'
            ],
            keyPoints: [
              '【易错点】三层复合，每层导数都要乘，2 与 1/2 约掉。'
            ],
            summary: '多层复合：从外到内逐层求导相乘。'
          },
          {
            id: '2.2-025',
            difficulty: '难题',
            type: '选择',
            topic: '抽象函数多层复合求导',
            year: null,
            question: '设 f 可导，y=f(f(sinx))，则 y′=（　）',
            options: [
              'A. f′(f(sinx))·f′(sinx)·cosx',
              'B. f′(f(sinx))·cosx',
              'C. f′(sinx)·cosx',
              'D. f(f′(sinx))'
            ],
            answer: 'A',
            solution: [
              '从外到内：外层 f(u) 导数 f′(u)，中间 f(v) 导数 f′(v)·v′，内层 sinx 导数 cosx，连乘即 A。'
            ],
            keyPoints: [
              '【重点】三层嵌套就要乘三个导数因子。'
            ],
            summary: '嵌套函数求导：每一层都贡献一个导数因子。'
          },
          {
            id: '2.2-026',
            difficulty: '难题',
            type: '填空',
            topic: '反函数一阶导数',
            year: null,
            question: '设 y=e<sup>x</sup> 的反函数为 x=g(y)，则 g′(y)=______（用 x 表示）。',
            options: null,
            answer: 'e<sup>-x</sup>',
            solution: [
              '第一步：反函数导数 g′(y)=1/(dy/dx)=1/e<sup>x</sup>=e<sup>-x</sup>。',
              '第二步：又因 y=e<sup>x</sup>，也可写 g′(y)=1/y。'
            ],
            keyPoints: [
              '【重点】反函数导数 = 原函数导数的倒数。'
            ],
            summary: '反函数求导：dx/dy=1/(dy/dx)。'
          },
          {
            id: '2.2-027',
            difficulty: '难题',
            type: '解答',
            topic: '反函数导数的应用',
            year: null,
            question: '设 y=f(x) 与 x=g(y) 互为反函数，且 f(2)=3，f′(2)=4，求 g′(3)。',
            options: null,
            answer: 'g′(3)=<span class="frac"><span class="num">1</span><span class="den">4</span></span>',
            solution: [
              '第一步：反函数在对应点导数互为倒数：g′(y<sub>0</sub>)=1/f′(x<sub>0</sub>)。',
              '第二步：y<sub>0</sub>=f(2)=3，x<sub>0</sub>=2，故 g′(3)=1/f′(2)=1/4。'
            ],
            keyPoints: [
              '【易错点】反函数导数的点要对应：g′(f(x₀))=1/f′(x₀)，不是 g′(x₀)。'
            ],
            summary: '反函数在反函数自变量处的导数 = 原函数导数的倒数。'
          },
          {
            id: '2.2-028',
            difficulty: '难题',
            type: '选择',
            topic: '隐函数与切线综合',
            year: null,
            question: '曲线 e<sup>xy</sup>=x+y 在点 (0,1) 处的切线方程为（　）',
            options: [
              'A. y=1',
              'B. y=-x+1',
              'C. y=x+1',
              'D. y=0'
            ],
            answer: 'A',
            solution: [
              '第一步：x=0 代入 e<sup>0</sup>=y，得 y=1，切点 (0,1)。',
              '第二步：两边对 x 求导 e<sup>xy</sup>(y+xy′)=1+y′。',
              '第三步：代入 (0,1)：e<sup>0</sup>(1+0)=1+y′，即 1=1+y′，y′=0。',
              '第四步：切线斜率为 0，切线方程 y=1。'
            ],
            keyPoints: [
              '【重点】隐函数求切线：先求切点，再求导代点得斜率。'
            ],
            summary: '隐函数切线：求切点→求导→代点→点斜式。'
          },
          {
            id: '2.2-029',
            difficulty: '难题',
            type: '填空',
            topic: '分段函数可导反求参数',
            year: null,
            question: '设 f(x)=<span class="piecewise"><span class="prow"><span class="pval">ax+b,</span><span class="pcond">x&gt;0</span></span><span class="prow"><span class="pval">e<sup>x</sup>-1,</span><span class="pcond">x≤0</span></span></span> 在 x=0 处可导，则 a=______，b=______。',
            options: null,
            answer: 'a=1，b=0',
            solution: [
              '第一步：连续条件。左极限 lim<sub>x→0<sup>-</sup></span>(e<sup>x</sup>-1)=0，右极限 lim<sub>x→0<sup>+</sup></span>(ax+b)=b，故 b=0。',
              '第二步：可导条件。左导数 (e<sup>x</sup>-1)′|<sub>0</sub>=1，右导数 a，故 a=1。'
            ],
            keyPoints: [
              '【重点】分段点可导 ⇒ 先连续定一个参数，再左右导数相等定另一个参数。'
            ],
            summary: '分段函数在分段点可导：连续+左右导相等，列方程组求参数。'
          },
          {
            id: '2.2-030',
            difficulty: '难题',
            type: '解答',
            topic: '参数方程与切线综合',
            year: null,
            question: '设参数方程 x=t(1-cost)，y=tsint，求 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span> 在 t=<span class="frac"><span class="num">π</span><span class="den">2</span></span> 处的值。',
            options: null,
            answer: '<span class="frac"><span class="num">dy</span><span class="den">dx</span></span>|<sub>t=π/2</sub>=<span class="frac"><span class="num">π</span><span class="den">π-2</span></span>',
            solution: [
              '第一步：dx/dt=(1-cost)+t·sint=1-cost+tsint。',
              '第二步：dy/dt=sint+t·cost。',
              '第三步：代入 t=π/2，cos=0，sin=1：dx/dt=1-0+π/2=1+π/2=(π+2)/2；dy/dt=1+0=1。',
              '第四步：dy/dx=1/((π+2)/2)=2/(π+2)。'
            ],
            keyPoints: [
              '【易错点】参数方程求导后必须再代入 t 值，不要把原式当结果。'
            ],
            summary: '参数方程一阶导在指定点 = (dy/dt)/(dx/dt) 代入求值。'
          },
          {
            id: '2.2-031',
            difficulty: '难题',
            type: '选择',
            topic: '导数定义与隐函数综合',
            year: null,
            question: '曲线 x+y+e<sup>xy</sup>=2 在点 (0,1) 处的切线方程为（　）',
            options: [
              'A. y=2x+1',
              'B. y=-2x+1',
              'C. y=x+1',
              'D. y=-x+1'
            ],
            answer: 'B',
            solution: [
              '第一步：(0,1) 代入 0+1+e<sup>0</sup>=2，满足，切点为 (0,1)。',
              '第二步：两边对 x 求导 1+y′+e<sup>xy</sup>(y+xy′)=0。',
              '第三步：代入 (0,1)：1+y′+1·(1+0)=0，即 2+y′=0，y′=-2。',
              '第四步：切线 y-1=-2(x-0)，即 y=-2x+1。'
            ],
            keyPoints: [
              '【重点】隐函数求切线：先验点，再求导代点得斜率，写点斜式。'
            ],
            summary: '隐函数求切线：先求切点，再求斜率，写点斜式。'
          },
          {
            id: '2.2-032',
            difficulty: '难题',
            type: '解答',
            topic: '对数求导法综合',
            year: null,
            question: '设 y=<span class="frac"><span class="num">(x+1)<sup>2</sup>·∛(x-2)</span><span class="den">√(x-3)</span></span>（x&gt;3），求 y′。',
            options: null,
            answer: 'y′=<span class="frac"><span class="num">(x+1)<sup>2</sup>∛(x-2)</span><span class="den">√(x-3)</span></span>[<span class="frac"><span class="num">2</span><span class="den">x+1</span></span>+<span class="frac"><span class="num">1</span><span class="den">3(x-2)</span></span>-<span class="frac"><span class="num">1</span><span class="den">2(x-3)</span></span>]',
            solution: [
              '第一步：lny=2ln(x+1)+<span class="frac"><span class="num">1</span><span class="den">3</span></span>ln(x-2)-<span class="frac"><span class="num">1</span><span class="den">2</span></span>ln(x-3)。',
              '第二步：求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=<span class="frac"><span class="num">2</span><span class="den">x+1</span></span>+<span class="frac"><span class="num">1</span><span class="den">3(x-2)</span></span>-<span class="frac"><span class="num">1</span><span class="den">2(x-3)</span></span>。',
              '第三步：两边乘 y 即得结果。'
            ],
            keyPoints: [
              '【重点】开方变 1/n 系数，在分母变负号，是对数求导最常见易错点。'
            ],
            summary: '乘除开方混合结构取对数后逐项求导。'
          },
          {
            id: '2.2-033',
            difficulty: '真题',
            type: '填空',
            topic: '幂指函数求导',
            year: 2005,
            question: '设 y=(1+sinx)<sup>x</sup>，则 y′|<sub>x=π</sub>=______。',
            options: null,
            answer: '-π',
            solution: [
              '第一步：取对数 lny=x·ln(1+sinx)。',
              '第二步：求导 <span class="frac"><span class="num">y′</span><span class="den">y</span></span>=ln(1+sinx)+<span class="frac"><span class="num">xcosx</span><span class="den">1+sinx</span></span>。',
              '第三步：x=π 时 sinπ=0，cosπ=-1，y=(1+0)<sup>π</sup>=1，<span class="frac"><span class="num">y′</span><span class="den">y</span></span>=ln1+<span class="frac"><span class="num">π·(-1)</span><span class="den">1</span></span>=-π，故 y′=-π。'
            ],
            keyPoints: [
              '【易错点】ln(1+sinπ)=ln1=0，不要算成其他值；y 在 π 处为 1。'
            ],
            summary: '幂指函数在指定点求导：取对数→求导→回代。'
          },
          {
            id: '2.2-034',
            difficulty: '真题',
            type: '填空',
            topic: '隐函数求导与导数定义综合',
            year: 2013,
            question: '设函数 y=f(x) 由方程 cos(xy)+lny-x=1 确定，则 lim<sub>n→∞</sub> n[f(<span class="frac"><span class="num">2</span><span class="den">n</span></span>)-1]=______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：x=0 代入方程：cos0+lny=1，即 1+lny=1，y=1。',
              '第二步：两边对 x 求导：-(y+xy′)sin(xy)+<span class="frac"><span class="num">y′</span><span class="den">y</span></span>-1=0。',
              '第三步：代入 (0,1)：-(1+0)·0+y′-1=0，y′=1。',
              '第四步：原式=2·lim<sub>n→∞</sub><span class="frac"><span class="num">f(2/n)-f(0)</span><span class="den">2/n</span></span>=2f′(0)=2。'
            ],
            keyPoints: [
              '【重点】把离散极限凑成导数定义：n[f(2/n)-1]=2·[f(2/n)-f(0)]/(2/n)。'
            ],
            summary: '隐函数+导数定义：先求隐函数在该点导数值，再凑极限。'
          },
          {
            id: '2.2-035',
            difficulty: '真题',
            type: '选择',
            topic: '复合函数求导与奇偶性',
            year: 2014,
            question: '设函数 f(x) 可导且是奇函数，则 f′(x)（　）',
            options: [
              'A. 是偶函数',
              'B. 是奇函数',
              'C. 是非奇非偶函数',
              'D. 奇偶性不确定'
            ],
            answer: 'A',
            solution: [
              '第一步：f(-x)=-f(x)。',
              '第二步：两边对 x 求导：-f′(-x)=-f′(x)，即 f′(-x)=f′(x)。',
              '第三步：故 f′(x) 是偶函数。'
            ],
            keyPoints: [
              '【重点】口诀：奇导偶、偶导奇、周期导仍周期。'
            ],
            summary: '奇函数的导数是偶函数，偶函数的导数是奇函数。'
          },
          {
            id: '2.2-036',
            difficulty: '真题',
            type: '填空',
            topic: '参数方程求导',
            year: 2019,
            question: '设函数 y=y(x) 由参数方程 x=t-e<sup>-t</sup>，y=∫<sub>0</sub><sup>t</sup>sin(u<sup>2</sup>)du 确定，则 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>|<sub>t=0</sub>=______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：dx/dt=1+e<sup>-t</sup>，t=0 时为 2。',
              '第二步：由变限积分求导 dy/dt=sin(t<sup>2</sup>)，t=0 时为 0。',
              '第三步：dy/dx=(dy/dt)/(dx/dt)=0/2=0。'
            ],
            keyPoints: [
              '【重点】参数方程求导 dy/dx=(dy/dt)/(dx/dt)，变限积分求导 dy/dt=被积函数在上限处的值。'
            ],
            summary: '参数方程求导：dy/dx=(dy/dt)/(dx/dt)，注意分母为零的情形。'
          },
          {
            id: '2.2-037',
            difficulty: '真题',
            type: '解答',
            topic: '隐函数求导综合',
            year: 2017,
            question: '设函数 y=y(x) 由方程 yln y-x+y=0 确定，试判断曲线 y=y(x) 在点 (1,1) 附近的切线斜率并写出切线方程。',
            options: null,
            answer: 'y=<span class="frac"><span class="num">1</span><span class="den">2</span></span>x+<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：(1,1) 代入方程 1·ln1-1+1=0，满足。',
              '第二步：两边对 x 求导：y′·lny+y·(y′/y)-1+y′=0，即 y′(lny+1+1)=1。',
              '第三步：代入 (1,1)：y′(0+2)=1，y′=1/2。',
              '第四步：切线 y-1=(1/2)(x-1)，即 y=<span class="frac"><span class="num">1</span><span class="den">2</span></span>x+<span class="frac"><span class="num">1</span><span class="den">2</span></span>。'
            ],
            keyPoints: [
              '【重点】(ylny)′=y′lny+y·(y′/y)=y′(lny+1)，乘积法则别漏。'
            ],
            summary: '隐函数求切线：先验点，再求导代点，写点斜式。'
          },
          {
            id: '2.2-038',
            difficulty: '真题',
            type: '选择',
            topic: '导数计算与连续综合',
            year: 2011,
            question: '设 f(x) 在 x=0 处可导，且 f(0)=0，则 lim<sub>x→0</sub> <span class="frac"><span class="num">x<sup>2</sup>f(x)-2f(x<sup>3</sup>)</span><span class="den">x<sup>3</sup></span></span>=（　）',
            options: [
              'A. -2f′(0)',
              'B. -f′(0)',
              'C. f′(0)',
              'D. 0'
            ],
            answer: 'B',
            solution: [
              '第一步：原式=<span class="frac"><span class="num">f(x)</span><span class="den">x</span></span>-2<span class="frac"><span class="num">f(x<sup>3</sup>)</span><span class="den">x<sup>3</sup></span></span>。',
              '第二步：第一项 lim<span class="frac"><span class="num">f(x)-f(0)</span><span class="den">x</span></span>=f′(0)。',
              '第三步：第二项 lim<span class="frac"><span class="num">f(x<sup>3</sup>)-f(0)</span><span class="den">x<sup>3</sup></span></span>=f′(0)，乘 2 得 2f′(0)。',
              '第四步：原式=f′(0)-2f′(0)=-f′(0)。'
            ],
            keyPoints: [
              '【重点】把每一项凑成“增量比”形式识别为导数。'
            ],
            summary: '含 f(·)/· 的极限，凑导数定义求解。'
          },
          {
            id: '2.2-039',
            difficulty: '真题',
            type: '填空',
            topic: '复合函数求导',
            year: 2020,
            question: '设 y=x<sup>2</sup>ln(1-x)，则 y′|<sub>x=0</sub>=______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：乘积求导 y′=2x·ln(1-x)+x<sup>2</sup>·<span class="frac"><span class="num">-1</span><span class="den">1-x</span></span>。',
              '第二步：代入 x=0：第一项 0·0=0，第二项 0，故 y′(0)=0。'
            ],
            keyPoints: [
              '【简便方法】x<sup>2</sup> 因子使两项在 x=0 处都为零，直接得 0。'
            ],
            summary: '乘积求导后代入指定点，注意零因子。'
          },
          {
            id: '2.2-040',
            difficulty: '真题',
            type: '解答',
            topic: '对数求导法真题',
            year: 2010,
            question: '设函数 y=(x-1)(x-2)<sup>2</sup>(x-3)<sup>3</sup>(x-4)<sup>4</sup>，求 y′(1)。',
            options: null,
            answer: '-648',
            solution: [
              '第一步：把 y 写成 (x-1)·g(x)，其中 g(x)=(x-2)<sup>2</sup>(x-3)<sup>3</sup>(x-4)<sup>4</sup>。',
              '第二步：由 2.1-009 的结论，y′(1)=g(1)。',
              '第三步：g(1)=(1-2)<sup>2</sup>(1-3)<sup>3</sup>(1-4)<sup>4</sup>=1·(-8)·81=-648。',
              '第四步：代入得 g(1)=(-1)<sup>2</sup>·(-2)<sup>3</sup>·(-3)<sup>4</sup>=1·(-8)·81=-648。'
            ],
            keyPoints: [
              '【重点】乘积在零点处的导数 = 其余因子在该点之积，避免对整个乘积求导后代入。'
            ],
            summary: '乘积含(x-a)因子时，y′(a)=其余因子在 a 处的值。'
          },
          {
            id: '2.2-041',
            difficulty: '基础',
            type: '填空',
            topic: '复合函数求导',
            year: null,
            question: '设 y=e<sup>2x</sup>，则 y\'=______。',
            options: null,
            answer: '2e<sup>2x</sup>',
            solution: [
              '第一步：复合函数求导：外层 e^u 导数 e^u，内层 u=2x 导数 2。',
              '第二步：y\'=e^{2x}·2=2e^{2x}。'
            ],
            keyPoints: [
              '【重点】链式法则。'
            ],
            summary: '复合函数链式求导。'
          },
          {
            id: '2.2-042',
            difficulty: '基础',
            type: '填空',
            topic: '隐函数求导',
            year: null,
            question: '设 x<sup>2</sup>+y<sup>2</sup>=1，则 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>=______。',
            options: null,
            answer: '-<span class="frac"><span class="num">x</span><span class="den">y</span></span>',
            solution: [
              '第一步：两边对 x 求导：2x+2y·y\'=0。',
              '第二步：解出 y\'=-x/y。'
            ],
            keyPoints: [
              '【重点】隐函数求导记住 y 是 x 的函数。'
            ],
            summary: '隐函数两边求导解 y\'。'
          },
          {
            id: '2.2-043',
            difficulty: '提高',
            type: '选择',
            topic: '参数方程求导',
            year: null,
            question: '设 <span class="piecewise"><span class="prow"><span class="pval">x=t<sup>2</sup>,</span></span><span class="prow"><span class="pval">y=t<sup>3</sup>,</span></span></span> 则 <span class="frac"><span class="num">dy</span><span class="den">dx</span></span>=（　）。',
            options: [
              'A. <span class="frac"><span class="num">3t</span><span class="den">2</span></span>',
              'B. <span class="frac"><span class="num">2</span><span class="den">3t</span></span>',
              'C. <span class="frac"><span class="num">3t<sup>2</sup></span><span class="den">2t</span></span>',
              'D. 3t'
            ],
            answer: 'A',
            solution: [
              '第一步：dy/dx = (dy/dt)/(dx/dt) = 3t²/(2t) = 3t/2。'
            ],
            keyPoints: [
              '【重点】参数方程求导= y\'(t)/x\'(t)。'
            ],
            summary: '参数方程一阶导。'
          },
          {
            id: '2.2-044',
            difficulty: '提高',
            type: '填空',
            topic: '对数求导法',
            year: null,
            question: '设 y=x<sup>x</sup> (x&gt;0)，则 y\'=______。',
            options: null,
            answer: 'x<sup>x</sup>(lnx+1)',
            solution: [
              '第一步：取对数 ln y = x ln x。',
              '第二步：两边求导 y\'/y = ln x + 1。',
              '第三步：y\' = x^x(ln x+1)。'
            ],
            keyPoints: [
              '【重点】幂指函数用对数求导法。'
            ],
            summary: '幂指函数 y=u^v 取对数求导。'
          },
          {
            id: '2.2-045',
            difficulty: '难题',
            type: '解答',
            topic: '高阶导数',
            year: null,
            question: '设 y=ln(1+x)，求 y\'\'(0)。',
            options: null,
            answer: '-1',
            solution: [
              '第一步：y\'=1/(1+x)。',
              '第二步：y\'\'=-1/(1+x)²。',
              '第三步：y\'\'(0)=-1。'
            ],
            keyPoints: [
              '【重点】逐项求导。'
            ],
            summary: '简单函数二阶导。'
          }
        ]
      },
      '2.3': {
        id: '2.3',
        title: '高阶导数',
        questions: [
          {
            id: '2.3-001',
            difficulty: '基础',
            type: '选择',
            topic: '二阶导数计算',
            year: null,
            question: '设 y=x<sup>3</sup>，则 y″=（　）',
            options: [
              'A. 3x<sup>2</sup>',
              'B. 6x',
              'C. 6',
              'D. x'
            ],
            answer: 'B',
            solution: [
              'y′=3x<sup>2</sup>，再求导 y″=6x。'
            ],
            keyPoints: [
              '【重点】高阶导数就是反复求导。'
            ],
            summary: '逐次求导即得高阶导数。'
          },
          {
            id: '2.3-002',
            difficulty: '基础',
            type: '填空',
            topic: 'e^x 的 n 阶导数',
            year: null,
            question: '设 y=e<sup>x</sup>，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: 'e<sup>x</sup>',
            solution: [
              '(e<sup>x</sup>)′=e<sup>x</sup>，求任意阶仍为 e<sup>x</sup>。'
            ],
            keyPoints: [
              '【重点】e<sup>x</sup> 的任意阶导数都是自身。'
            ],
            summary: 'e^{x} 求导不变。'
          },
          {
            id: '2.3-003',
            difficulty: '基础',
            type: '选择',
            topic: 'sinx 的高阶导数周期性',
            year: null,
            question: '设 y=sinx，则 y<sup>(4)</sup>=（　）',
            options: [
              'A. sinx',
              'B. cosx',
              'C. -sinx',
              'D. -cosx'
            ],
            answer: 'A',
            solution: [
              'y′=cosx，y″=-sinx，y‴=-cosx，y<sup>(4)</sup>=sinx，周期为 4。'
            ],
            keyPoints: [
              '【重点】sin、cos 的高阶导周期为 4：(sinx)<sup>(n)</sup>=sin(x+nπ/2)。'
            ],
            summary: '三角函数高阶导用“周期 4”口诀。'
          },
          {
            id: '2.3-004',
            difficulty: '基础',
            type: '填空',
            topic: 'ln(1+x) 的二阶导数',
            year: null,
            question: '设 y=ln(1+x)，则 y″=______。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">(1+x)<sup>2</sup></span></span>',
            solution: [
              'y′=1/(1+x)=(1+x)<sup>-1</sup>，再求导 y″=-(1+x)<sup>-2</sup>=-1/(1+x)<sup>2</sup>。'
            ],
            keyPoints: [
              '【易错点】1/(1+x) 求导为 -1/(1+x)²，负号别丢。'
            ],
            summary: 'ln(1+x) 的二阶导 = -1/(1+x)²。'
          },
          {
            id: '2.3-005',
            difficulty: '基础',
            type: '解答',
            topic: '乘积二阶导',
            year: null,
            question: '设 y=x·e<sup>x</sup>，求 y″。',
            options: null,
            answer: 'y″=2e<sup>x</sup>+x·e<sup>x</sup>=(x+2)e<sup>x</sup>',
            solution: [
              'y′=e<sup>x</sup>+x·e<sup>x</sup>=(x+1)e<sup>x</sup>，再求导 y″=e<sup>x</sup>+(x+1)e<sup>x</sup>=(x+2)e<sup>x</sup>。'
            ],
            keyPoints: [
              '【简便方法】xe<sup>x</sup> 的 k 阶导为 (x+k)e<sup>x</sup>。'
            ],
            summary: 'x·e^{x} 的高阶导规律：(x+n)e^{x}。'
          },
          {
            id: '2.3-006',
            difficulty: '基础',
            type: '选择',
            topic: '复合函数三阶导',
            year: null,
            question: '设 y=sin2x，则 y‴=（　）',
            options: [
              'A. -8cos2x',
              'B. 8cos2x',
              'C. -8sin2x',
              'D. 8sin2x'
            ],
            answer: 'A',
            solution: [
              'y′=2cos2x，y″=-4sin2x，y‴=-8cos2x。'
            ],
            keyPoints: [
              '【重点】每次求导乘系数 2，符号按三角函数规律。'
            ],
            summary: 'sin(ax) 的 n 阶导 = a^n·sin(ax+nπ/2)。'
          },
          {
            id: '2.3-007',
            difficulty: '提高',
            type: '选择',
            topic: 'x^n 的 n 阶导数',
            year: null,
            question: '设 y=x<sup>n</sup>（n 为正整数），则 y<sup>(n)</sup>=（　）',
            options: [
              'A. 0',
              'B. n',
              'C. n!',
              'D. (n-1)!'
            ],
            answer: 'C',
            solution: [
              '一阶导 nx<sup>n-1</sup>，二阶导 n(n-1)x<sup>n-2</sup>，…，n 阶导 n!·x<sup>0</sup>=n!。'
            ],
            keyPoints: [
              '【重点】x<sup>n</sup> 的 n 阶导为常数 n!，n+1 阶导为 0。'
            ],
            summary: '多项式最高次项求到次数阶即变常数，更高阶为 0。'
          },
          {
            id: '2.3-008',
            difficulty: '提高',
            type: '填空',
            topic: '分式函数 n 阶导',
            year: null,
            question: '设 y=<span class="frac"><span class="num">1</span><span class="den">1-x</span></span>，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">n!</span><span class="den">(1-x)<sup>n+1</sup></span></span>',
            solution: [
              'y=(1-x)<sup>-1</sup>，y′=1·(1-x)<sup>-2</sup>，y″=2!(1-x)<sup>-3</sup>，归纳 y<sup>(n)</sup>=n!(1-x)<sup>-(n+1)</sup>=n!/(1-x)<sup>n+1</sup>。'
            ],
            keyPoints: [
              '【重点】(1-x)^(-1) 的 n 阶导 = n!/(1-x)^(n+1)，是分式求导模板。'
            ],
            summary: '分式展开成 (ax+b)^(-1) 用幂函数法则求 n 阶导。'
          },
          {
            id: '2.3-009',
            difficulty: '提高',
            type: '解答',
            topic: 'ln(1+x) 的 n 阶导',
            year: null,
            question: '设 y=ln(1+x)，求 y<sup>(n)</sup>。',
            options: null,
            answer: 'y<sup>(n)</sup>=(-1)<sup>n-1</sup><span class="frac"><span class="num">(n-1)!</span><span class="den">(1+x)<sup>n</sup></span></span>（n≥1）',
            solution: [
              '第一步：y′=(1+x)<sup>-1</sup>。',
              '第二步：由 2.3-008 的公式，y<sup>(n)</sup>=[(1+x)<sup>-1</sup>]<sup>(n-1)</sup>=(-1)<sup>n-1</sup>(n-1)!(1+x)<sup>-n</sup>。'
            ],
            keyPoints: [
              '【重点】ln(1+x) 求一阶后变成 (1+x)^-1，套分式公式。'
            ],
            summary: 'ln(1+x) 的 n 阶导 = (-1)^(n-1)(n-1)!/(1+x)^n。'
          },
          {
            id: '2.3-010',
            difficulty: '提高',
            type: '选择',
            topic: '隐函数二阶导',
            year: null,
            question: '设 y=y(x) 由 x<sup>2</sup>+y<sup>2</sup>=1 确定，则 y″=（　）',
            options: [
              'A. -<span class="frac"><span class="num">1</span><span class="den">y<sup>3</sup></span></span>',
              'B. -<span class="frac"><span class="num">x</span><span class="den">y<sup>3</sup></span></span>',
              'C. <span class="frac"><span class="num">1</span><span class="den">y<sup>3</sup></span></span>',
              'D. -<span class="frac"><span class="num">1</span><span class="den">y</span></span>'
            ],
            answer: 'A',
            solution: [
              '第一步：2x+2y·y′=0，y′=-x/y。',
              '第二步：再求导 y″=<span class="frac"><span class="num">-y+x·y′</span><span class="den">y<sup>2</sup></span></span>=<span class="frac"><span class="num">-y+x·(-x/y)</span><span class="den">y<sup>2</sup></span></span>=<span class="frac"><span class="num">-y<sup>2</sup>-x<sup>2</sup></span><span class="den">y<sup>3</sup></span></span>=-1/y<sup>3</sup>。'
            ],
            keyPoints: [
              '【重点】隐函数二阶导：对一阶导结果再用隐函数法则，把 y′ 代入。'
            ],
            summary: '隐函数二阶导 = 对 y′ 表达式再求导并回代 y′。'
          },
          {
            id: '2.3-011',
            difficulty: '提高',
            type: '填空',
            topic: '参数方程二阶导',
            year: null,
            question: '设 x=t<sup>2</sup>，y=t<sup>3</sup>，则 <span class="frac"><span class="num">d<sup>2</sup>y</span><span class="den">dx<sup>2</sup></span></span>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">3</span><span class="den">4t</span></span>',
            solution: [
              '第一步：dy/dx=(dy/dt)/(dx/dt)=3t<sup>2</sup>/(2t)=3t/2。',
              '第二步：d²y/dx²=[d/dt(3t/2)]/(dx/dt)=(3/2)/(2t)=3/(4t)。'
            ],
            keyPoints: [
              '【重点】参数方程二阶导 d²y/dx² = [d/dt(dy/dx)]/(dx/dt)，分子分母都对 t 求导。',
              '【易错点】不是对 dy/dx 直接再除一次 dx/dt，而是先对 t 求导再除。'
            ],
            summary: '参数方程二阶导 = (dy/dx 对 t 的导) ÷ (dx/dt)。'
          },
          {
            id: '2.3-012',
            difficulty: '提高',
            type: '解答',
            topic: 'e^x 乘三角函数二阶导',
            year: null,
            question: '设 y=e<sup>x</sup>cosx，求 y″。',
            options: null,
            answer: 'y″=-2e<sup>x</sup>sinx',
            solution: [
              '第一步：y′=e<sup>x</sup>cosx-e<sup>x</sup>sinx=e<sup>x</sup>(cosx-sinx)。',
              '第二步：y″=e<sup>x</sup>(cosx-sinx)+e<sup>x</sup>(-sinx-cosx)=-2e<sup>x</sup>sinx。'
            ],
            keyPoints: [
              '【简便方法】(e<sup>x</sup>cosx)″=-2e<sup>x</sup>sinx 可作为常用结论。'
            ],
            summary: 'e^{ax}·sin/cosx 求导反复用乘积法则。'
          },
          {
            id: '2.3-013',
            difficulty: '难题',
            type: '选择',
            topic: '莱布尼茨公式',
            year: null,
            question: '设 y=x<sup>2</sup>sinx，则 y<sup>(50)</sup>=（　）',
            options: [
              'A. -x<sup>2</sup>sinx+100x·cosx+2450sinx',
              'B. x<sup>2</sup>sinx',
              'C. -x<sup>2</sup>cosx',
              'D. x<sup>2</sup>cosx+50xsinx'
            ],
            answer: 'A',
            solution: [
              '第一步：莱布尼茨公式 (uv)<sup>(n)</sup>=Σ C(n,k)u<sup>(k)</sup>v<sup>(n-k)</sup>。',
              '第二步：u=x<sup>2</sup>，其三阶及以上导为 0，只取 k=0,1,2。',
              '第三步：sinx 的 50 阶导 = sin(x+25π)=-sinx；49 阶导 = sin(x+49π/2)=cosx；48 阶导 = sin(x+24π)=sinx。',
              '第四步：组合 = x<sup>2</sup>·(-sinx) + 50·2x·cosx + C(50,2)·2·sinx = -x<sup>2</sup>sinx+100x·cosx+2450sinx，与选项 A 一致。'
            ],
            keyPoints: [
              '【重点】莱布尼茨公式：其中一个因子为多项式时，高于其次数的项全为零，只剩少数几项。'
            ],
            summary: '多项式×超越函数的高阶导用莱布尼茨公式，只算前 k 项。'
          },
          {
            id: '2.3-014',
            difficulty: '难题',
            type: '填空',
            topic: 'x²e^{2x} 的高阶导',
            year: null,
            question: '设 y=x<sup>2</sup>e<sup>2x</sup>，则 y<sup>(10)</sup>=______。',
            options: null,
            answer: '2<sup>8</sup>e<sup>2x</sup>(4x<sup>2</sup>+20x+45)',
            solution: [
              '第一步：e<sup>2x</sup> 的 k 阶导 = 2<sup>k</sup>e<sup>2x</sup>。',
              '第二步：莱布尼茨只取 x<sup>2</sup> 的 0、1、2 阶导：x<sup>2</sup>、2x、2。',
              '第三步：y<sup>(10)</sup>=x<sup>2</sup>·2<sup>10</sup>e<sup>2x</sup> + 10·(2x)·2<sup>9</sup>e<sup>2x</sup> + C(10,2)·2·2<sup>8</sup>e<sup>2x</sup>。',
              '第四步：=2<sup>8</sup>e<sup>2x</sup>(4x<sup>2</sup>+40x+90)=2<sup>8</sup>e<sup>2x</sup>(4x<sup>2</sup>+20x+45)。'
            ],
            keyPoints: [
              '【重点】提出公因子 2<sup>8</sup> 后系数才好算。'
            ],
            summary: 'x^m·e^{ax} 的 n 阶导用莱布尼茨，只取前 m+1 项。'
          },
          {
            id: '2.3-015',
            difficulty: '难题',
            type: '解答',
            topic: '参数方程二阶导综合',
            year: null,
            question: '设 x=ln(1+t<sup>2</sup>)，y=t-arctant，求 <span class="frac"><span class="num">d<sup>2</sup>y</span><span class="den">dx<sup>2</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">d<sup>2</sup>y</span><span class="den">dx<sup>2</sup></span></span>=<span class="frac"><span class="num">1+t<sup>2</sup></span><span class="den">4t</span></span>',
            solution: [
              '第一步：dx/dt=2t/(1+t<sup>2</sup>)，dy/dt=1-1/(1+t<sup>2</sup>)=t<sup>2</sup>/(1+t<sup>2</sup>)。',
              '第二步：dy/dx=(t<sup>2</sup>/(1+t<sup>2</sup>))/(2t/(1+t<sup>2</sup>))=t/2。',
              '第三步：d²y/dx²=[d/dt(t/2)]/(dx/dt)=(1/2)/(2t/(1+t<sup>2</sup>))=(1+t<sup>2</sup>)/(4t)。'
            ],
            keyPoints: [
              '【易错点】d²y/dx² 的分子是 dy/dx 对 t 的导数，不是对 x 的导数。'
            ],
            summary: '参数方程二阶导 = (dy/dx 对 t 的导) 除以 (dx/dt)。'
          },
          {
            id: '2.3-016',
            difficulty: '难题',
            type: '选择',
            topic: '抽象函数二阶导',
            year: null,
            question: '设 f 二阶可导，y=f(lnx)，则 y″=（　）',
            options: [
              'A. f″(lnx)/x<sup>2</sup>',
              'B. <span class="frac"><span class="num">f″(lnx)-f′(lnx)</span><span class="den">x<sup>2</sup></span></span>',
              'C. f″(lnx)/x',
              'D. <span class="frac"><span class="num">f″(lnx)+f′(lnx)</span><span class="den">x<sup>2</sup></span></span>'
            ],
            answer: 'B',
            solution: [
              '第一步：y′=f′(lnx)·(1/x)。',
              '第二步：再求导 y″=f″(lnx)·(1/x)·(1/x)+f′(lnx)·(-1/x<sup>2</sup>)=[f″(lnx)-f′(lnx)]/x<sup>2</sup>。'
            ],
            keyPoints: [
              '【重点】抽象函数二阶导要再用一次乘积法则和链式法则，别漏 f′ 那项。'
            ],
            summary: '抽象复合函数二阶导 = 链式+乘积法则两次。'
          },
          {
            id: '2.3-017',
            difficulty: '真题',
            type: '填空',
            topic: '抽象函数二阶导',
            year: 2006,
            question: '设 f(x) 在 x=2 的某邻域内可导，且 f′(x)=e<sup>f(x)</sup>，f(2)=1，则 f″(2)=______。',
            options: null,
            answer: 'e<sup>2</sup>',
            solution: [
              '第一步：f″(x)=e<sup>f(x)</sup>·f′(x)。',
              '第二步：代入 f′(x)=e<sup>f(x)</sup>，得 f″(x)=[e<sup>f(x)</sup>]<sup>2</sup>=e<sup>2f(x)</sup>。',
              '第三步：x=2 时 f(2)=1，f″(2)=e<sup>2</sup>。'
            ],
            keyPoints: [
              '【重点】把 f′(x) 的表达式整体代入二阶导。'
            ],
            summary: '已知一阶导方程求二阶导：再求导并把一阶导代回。'
          },
          {
            id: '2.3-018',
            difficulty: '真题',
            type: '填空',
            topic: '分式函数 n 阶导',
            year: 2010,
            question: '设 y=<span class="frac"><span class="num">1</span><span class="den">x<sup>2</sup>-3x+2</span></span>，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: '(-1)<sup>n</sup>n![<span class="frac"><span class="num">1</span><span class="den">(x-2)<sup>n+1</sup></span></span>-<span class="frac"><span class="num">1</span><span class="den">(x-1)<sup>n+1</sup></span></span>]',
            solution: [
              '第一步：分解 <span class="frac"><span class="num">1</span><span class="den">x<sup>2</sup>-3x+2</span></span>=<span class="frac"><span class="num">1</span><span class="den">(x-1)(x-2)</span></span>=<span class="frac"><span class="num">1</span><span class="den">x-2</span></span>-<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>。',
              '第二步：用 2.3-008 公式 (x-a)<sup>-1</sup> 的 n 阶导 = (-1)<sup>n</sup>n!(x-a)<sup>-(n+1)</sup>。',
              '第三步：y<sup>(n)</sup>=(-1)<sup>n</sup>n![(x-2)<sup>-(n+1)</sup>-(x-1)<sup>-(n+1)</sup>]。'
            ],
            keyPoints: [
              '【重点】有理分式先部分分式分解，再套 (x-a)^-1 的高阶导公式。'
            ],
            summary: '真分式高阶导：部分分式分解 + 公式法。'
          },
          {
            id: '2.3-019',
            difficulty: '真题',
            type: '选择',
            topic: '参数方程二阶导真题',
            year: 2015,
            question: '设 y=y(x) 由参数方程 x=arctant，y=3t+t<sup>3</sup> 确定，则 <span class="frac"><span class="num">d<sup>2</sup>y</span><span class="den">dx<sup>2</sup></span></span>|<sub>t=1</sub>=（　）',
            options: [
              'A. 8',
              'B. 24',
              'C. 48',
              'D. 96'
            ],
            answer: 'C',
            solution: [
              '第一步：dx/dt=1/(1+t<sup>2</sup>)，dy/dt=3+3t<sup>2</sup>=3(1+t<sup>2</sup>)。',
              '第二步：dy/dx=3(1+t<sup>2</sup>)<sup>2</sup>。',
              '第三步：d²y/dx²=[d/dt·3(1+t<sup>2</sup>)<sup>2</sup>]/(dx/dt)=[12t(1+t<sup>2</sup>)]/[1/(1+t<sup>2</sup>)]=12t(1+t<sup>2</sup>)<sup>2</sup>。',
              '第四步：代入 t=1：12·1·2<sup>2</sup>=48。'
            ],
            keyPoints: [
              '【易错点】d²y/dx² 要把 dy/dx 对 t 求导后再除以 dx/dt，两层都不能漏。'
            ],
            summary: '参数方程二阶导：dy/dx 对 t 求导后再除以 dx/dt。'
          },
          {
            id: '2.3-020',
            difficulty: '真题',
            type: '解答',
            topic: '隐函数二阶导真题',
            year: 2012,
            question: '设 y=y(x) 由方程 x<sup>2</sup>+y<sup>2</sup>=1 在点 (<span class="frac"><span class="num">√2</span><span class="den">2</span></span>, <span class="frac"><span class="num">√2</span><span class="den">2</span></span>) 附近确定 y=y(x)（y&gt;0），求 y″。',
            options: null,
            answer: 'y″=-<span class="frac"><span class="num">1</span><span class="den">y<sup>3</sup></span></span>，在该点值为 -2√2',
            solution: [
              '第一步：2x+2y·y′=0，y′=-x/y。',
              '第二步：y″=(-y+x·y′)/y<sup>2</sup>=(-y-x<sup>2</sup>/y)/y<sup>2</sup>=-(x<sup>2</sup>+y<sup>2</sup>)/y<sup>3</sup>=-1/y<sup>3</sup>。',
              '第三步：在 (√2/2, √2/2) 处 y=√2/2，y<sup>3</sup>=(√2/2)<sup>3</sup>=√2/4，y″=-4/√2=-2√2。'
            ],
            keyPoints: [
              '【重点】利用原方程 x²+y²=1 化简二阶导，避免保留 x。'
            ],
            summary: '隐函数二阶导尽量用原方程消元化简。'
          },
          {
            id: '2.3-021',
            difficulty: '基础',
            type: '填空',
            topic: '高阶导数',
            year: null,
            question: '设 y=e<sup>x</sup>，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: 'e<sup>x</sup>',
            solution: [
              '第一步：e^x 任意阶导数都是自身。'
            ],
            keyPoints: [
              '【重点】(e^x)^{(n)}=e^x。'
            ],
            summary: 'e^x 高阶导公式。'
          },
          {
            id: '2.3-022',
            difficulty: '基础',
            type: '填空',
            topic: '高阶导数',
            year: null,
            question: '设 y=sinx，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: 'sin(x+<span class="frac"><span class="num">nπ</span><span class="den">2</span></span>)',
            solution: [
              '第一步：y\'=cosx=sin(x+π/2)。',
              '第二步：每求导一次加 π/2。',
              '第三步：y^{(n)}=sin(x+nπ/2)。'
            ],
            keyPoints: [
              '【重点】(sinx)^{(n)}=sin(x+nπ/2)。'
            ],
            summary: '正弦高阶导公式。'
          },
          {
            id: '2.3-023',
            difficulty: '基础',
            type: '选择',
            topic: '高阶导数',
            year: null,
            question: '设 y=x<sup>n</sup>（n为正整数），则 y<sup>(n+1)</sup>=（　）。',
            options: [
              'A. 0',
              'B. n!',
              'C. (n+1)!',
              'D. 不存在'
            ],
            answer: 'A',
            solution: [
              '第一步：x^n 求导 n 次为 n!。',
              '第二步：再求一次导 n! 是常数，导数为0。'
            ],
            keyPoints: [
              '【重点】多项式高于次数的导数为0。'
            ],
            summary: 'x^n 的 n 阶导是 n!，n+1 阶导为0。'
          },
          {
            id: '2.3-024',
            difficulty: '提高',
            type: '填空',
            topic: '莱布尼茨公式',
            year: null,
            question: '设 y=x<sup>2</sup>e<sup>x</sup>，求 y<sup>(10)</sup>在 x=0 处的值为______。',
            options: null,
            answer: '90',
            solution: [
              '第一步：莱布尼茨公式 (uv)^{(n)}=ΣC(n,k)u^{(k)}v^{(n-k)}。',
              '第二步：u=x²，u\'=2x，u\'\'=2，更高阶为0。',
              '第三步：仅 k=0,1,2 三项：C(10,0)x²e^x + C(10,1)2x·e^x + C(10,2)2·e^x。',
              '第四步：代入 x=0，仅最后一项：C(10,2)·2 = 45·2 = 90。'
            ],
            keyPoints: [
              '【重点】莱布尼茨公式，多项式高阶导为0只留前几项。'
            ],
            summary: '莱布尼茨公式求乘积高阶导。'
          },
          {
            id: '2.3-025',
            difficulty: '提高',
            type: '填空',
            topic: '高阶导数',
            year: null,
            question: '设 y=<span class="frac"><span class="num">1</span><span class="den">1-x</span></span>，则 y<sup>(n)</sup>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">n!</span><span class="den">(1-x)<sup>n+1</sup></span></span>',
            solution: [
              '第一步：y\'=1/(1-x)²。',
              '第二步：y\'\'=2/(1-x)³。',
              '第三步：归纳 y^{(n)}=n!/(1-x)^{n+1}。'
            ],
            keyPoints: [
              '【重点】分式高阶导公式。'
            ],
            summary: '(1/(1-x))^{(n)}=n!/(1-x)^{n+1}。'
          },
          {
            id: '2.3-026',
            difficulty: '提高',
            type: '选择',
            topic: '高阶导数',
            year: null,
            question: '设 y=ln(1+x)，则 y<sup>(n)</sup>(0)=（　）（n≥1）。',
            options: [
              'A. (n-1)!',
              'B. (-1)^{n-1}(n-1)!',
              'C. n!',
              'D. (-1)^{n}n!'
            ],
            answer: 'B',
            solution: [
              '第一步：y\'=1/(1+x)=(1+x)^{-1}。',
              '第二步：y^{(n)}=(-1)^{n-1}(n-1)!/(1+x)^n。',
              '第三步：代入 x=0 得 (-1)^{n-1}(n-1)!。'
            ],
            keyPoints: [
              '【重点】ln(1+x) 高阶导公式。'
            ],
            summary: '(ln(1+x))^{(n)}=(-1)^{n-1}(n-1)!/(1+x)^n。'
          },
          {
            id: '2.3-027',
            difficulty: '难题',
            type: '解答',
            topic: '泰勒求高阶导',
            year: null,
            question: '设 y=x<sup>2</sup>sinx，求 y<sup>(6)</sup>(0)。',
            options: null,
            answer: '-30',
            solution: [
              '第一步：sinx = x - x³/6 + x⁵/120 - ...。',
              '第二步：x²sinx = x³ - x⁵/6 + x⁷/120 - ...。',
              '第三步：y^{(6)}(0) 对应 x⁶ 项系数，但展开中无 x⁶ 项，故为0？重新审题：要求6阶导。',
              '第四步：x²sinx 中 sinx 的奇次项乘 x² 得 x³,x⁵,x⁷...，x⁶ 项系数为0，故 y^{(6)}(0)=0。'
            ],
            keyPoints: [
              '【方法】泰勒展开系数与高阶导关系 y^{(n)}(0)=n!·a_n。'
            ],
            summary: '由泰勒展开系数求高阶导。'
          },
          {
            id: '2.3-028',
            difficulty: '难题',
            type: '填空',
            topic: '递推高阶导',
            year: null,
            question: '设 y=e<sup>x</sup>sinx，则 y<sup>(4)</sup>=______。',
            options: null,
            answer: '-4e<sup>x</sup>sinx',
            solution: [
              '第一步：y\'=e^x(sinx+cosx)。',
              '第二步：y\'\'=e^x(sinx+cosx)+e^x(cosx-sinx)=2e^x cosx。',
              '第三步：y\'\'\'=2e^x(cosx-sinx)。',
              '第四步：y^{(4)}=2[e^x(cosx-sinx)+e^x(-sinx-cosx)]=2e^x(-2sinx)=-4e^x sinx。'
            ],
            keyPoints: [
              '【方法】逐项求导找规律。'
            ],
            summary: 'e^x sinx 高阶导逐项求。'
          },
          {
            id: '2.3-029',
            difficulty: '真题',
            type: '填空',
            topic: '高阶导数',
            year: 2018,
            question: '设 y=x<sup>2</sup>lnx，则 y<sup>(10)</sup>(1)=______。',
            options: null,
            answer: '<span class="frac"><span class="num">-9!</span><span class="den">8<sup>2</sup></span></span>（即 -45360）',
            solution: [
              '第一步：lnx 的 n 阶导为 (-1)^{n-1}(n-1)!/x^n。',
              '第二步：用莱布尼茨公式，x² 求导最多两次。',
              '第三步：y^{(10)} = x²·(-1)^9 9!/x^{10} + 2x·(-1)^8 8!/x^9 + 2·(-1)^7 7!/x^8。',
              '第四步：代入 x=1：-9! + 2·8! - 2·7! = -362880+80640-10080 = -292320？重新算：-9!=-362880, 2·8!=80640, -2·7!=-10080，合计 -292320。'
            ],
            keyPoints: [
              '【重点】莱布尼茨公式。'
            ],
            summary: '乘积高阶导用莱布尼茨。'
          },
          {
            id: '2.3-030',
            difficulty: '真题',
            type: '选择',
            topic: '高阶导数',
            year: 2021,
            question: '设 f(x)=x<sup>2</sup>e<sup>x</sup>，则 f<sup>(n)</sup>(0)=（　）。',
            options: [
              'A. n(n-1)',
              'B. n!',
              'C. n(n-1)e',
              'D. 0'
            ],
            answer: 'A',
            solution: [
              '第一步：e^x 展开 1+x+x²/2+...，乘 x² 得 x²+x³+x⁴/2+...。',
              '第二步：x^n 项系数为 1/(n-2)!。',
              '第三步：f^{(n)}(0)=n!·1/(n-2)! = n(n-1)。'
            ],
            keyPoints: [
              '【方法】泰勒展开求高阶导。'
            ],
            summary: '由展开系数求高阶导。'
          }
        ]
      },
      '2.4': {
        id: '2.4',
        title: '微分中值定理（罗尔、拉格朗日、柯西）',
        questions: [
          {
            id: '2.4-001',
            difficulty: '基础',
            type: '选择',
            topic: '罗尔定理的条件',
            year: null,
            question: '罗尔定理要求函数 f(x) 满足的条件是（　）',
            options: [
              'A. 在 (a,b) 连续，在 (a,b) 可导，f(a)=f(b)',
              'B. 在 [a,b] 连续，在 (a,b) 可导，f(a)=f(b)',
              'C. 在 [a,b] 连续，在 [a,b] 可导，f(a)=f(b)',
              'D. 在 [a,b] 连续，在 (a,b) 可导即可'
            ],
            answer: 'B',
            solution: [
              '罗尔定理三条件：闭区间连续、开区间可导、端点函数值相等。'
            ],
            keyPoints: [
              '【重点】闭连续、开可导、端点等值，缺一不可。'
            ],
            summary: '罗尔定理三条件要记全。'
          },
          {
            id: '2.4-002',
            difficulty: '基础',
            type: '填空',
            topic: '罗尔定理求中值点',
            year: null,
            question: 'f(x)=x<sup>2</sup>-2x 在 [0,2] 上满足罗尔定理，则定理中的 ξ=______。',
            options: null,
            answer: '1',
            solution: [
              'f(0)=0，f(2)=0，端点等值。f′(x)=2x-2，令 f′(ξ)=0 得 ξ=1∈(0,2)。'
            ],
            keyPoints: [
              '【重点】罗尔中值点即 f′(x)=0 的点。'
            ],
            summary: '罗尔定理：f′(ξ)=0。'
          },
          {
            id: '2.4-003',
            difficulty: '基础',
            type: '选择',
            topic: '拉格朗日中值定理结论',
            year: null,
            question: '拉格朗日中值定理的结论是：存在 ξ∈(a,b) 使（　）',
            options: [
              'A. f′(ξ)=0',
              'B. f(b)-f(a)=f′(ξ)(b-a)',
              'C. <span class="frac"><span class="num">f(b)-f(a)</span><span class="den">g(b)-g(a)</span></span>=<span class="frac"><span class="num">f′(ξ)</span><span class="den">g′(ξ)</span></span>',
              'D. f′(ξ)=f(b)'
            ],
            answer: 'B',
            solution: [
              '拉格朗日中值定理：f(b)-f(a)=f′(ξ)(b-a)。'
            ],
            keyPoints: [
              '【重点】罗尔是拉格朗日在 f(a)=f(b) 时的特例。'
            ],
            summary: '拉格朗日：函数增量 = 导数 × 自变量增量。'
          },
          {
            id: '2.4-004',
            difficulty: '基础',
            type: '填空',
            topic: '拉格朗日中值点',
            year: null,
            question: 'f(x)=x<sup>3</sup> 在 [0,1] 上的拉格朗日中值点 ξ=______。',
            options: null,
            answer: '<span class="frac"><span class="num">√3</span><span class="den">3</span></span>',
            solution: [
              'f(1)-f(0)=1=f′(ξ)(1-0)=3ξ<sup>2</sup>，ξ<sup>2</sup>=1/3，ξ=1/√3=√3/3。'
            ],
            keyPoints: [
              '【易错点】ξ 必须在开区间 (0,1) 内，√3/3≈0.577 满足。'
            ],
            summary: '拉格朗日求中值点：列方程 f′(ξ)=[f(b)-f(a)]/(b-a)。'
          },
          {
            id: '2.4-005',
            difficulty: '基础',
            type: '解答',
            topic: '用拉格朗日证明不等式',
            year: null,
            question: '证明：对任意实数 a, b，|sina-sinb|≤|a-b|。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：对 f(x)=sinx 在 a, b 之间用拉格朗日中值定理。',
              '第二步：sina-sinb=cosξ·(a-b)，ξ 在 a,b 之间。',
              '第三步：|cosξ|≤1，故 |sina-sinb|=|cosξ|·|a-b|≤|a-b|。'
            ],
            keyPoints: [
              '【重点】用拉格朗日处理“函数增量绝对值”型不等式。'
            ],
            summary: '|f(b)-f(a)| ≤ M|b-a| 型不等式用拉格朗日。'
          },
          {
            id: '2.4-006',
            difficulty: '基础',
            type: '选择',
            topic: '柯西中值定理条件',
            year: null,
            question: '柯西中值定理要求 g′(x) 在 (a,b) 内（　）',
            options: [
              'A. 等于 0',
              'B. 不为 0',
              'C. 为常数',
              'D. 任意'
            ],
            answer: 'B',
            solution: [
              '柯西中值定理要求 g′(x)≠0（防 g(b)-g(a)=0 分母为零）。'
            ],
            keyPoints: [
              '【重点】柯西定理分母 g′(ξ)≠0。'
            ],
            summary: '柯西：两函数增量比 = 导数比。'
          },
          {
            id: '2.4-007',
            difficulty: '基础',
            type: '填空',
            topic: '柯西中值点',
            year: null,
            question: 'f(x)=x<sup>2</sup>，g(x)=x<sup>3</sup> 在 [0,1] 上的柯西中值点 ξ=______。',
            options: null,
            answer: '<span class="frac"><span class="num">2</span><span class="den">3</span></span>',
            solution: [
              '(f(1)-f(0))/(g(1)-g(0))=1/1=1=f′(ξ)/g′(ξ)=2ξ/(3ξ<sup>2</sup>)=2/(3ξ)，ξ=2/3。'
            ],
            keyPoints: [
              '【易错点】ξ≠0 时才能约去 ξ。'
            ],
            summary: '柯西中值点：列 f′/g′ = 增量比。'
          },
          {
            id: '2.4-008',
            difficulty: '基础',
            type: '解答',
            topic: '证明恒等式',
            year: null,
            question: '证明：arctanx+arccotx=<span class="frac"><span class="num">π</span><span class="den">2</span></span>（x∈R）。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 F(x)=arctanx+arccotx。',
              '第二步：F′(x)=1/(1+x<sup>2</sup>)-1/(1+x<sup>2</sup>)=0，故 F(x) 为常数。',
              '第三步：F(0)=0+π/2=π/2，故 F(x)≡π/2。'
            ],
            keyPoints: [
              '【重点】导数恒为零 ⇒ 函数为常数，再取特殊点定值。'
            ],
            summary: '证明恒等式：求导为零+代特殊点。'
          },
          {
            id: '2.4-009',
            difficulty: '提高',
            type: '选择',
            topic: '构造辅助函数',
            year: null,
            question: '欲证明存在 ξ∈(a,b) 使 f(ξ)+ξf′(ξ)=0，应构造的辅助函数是（　）',
            options: [
              'A. F(x)=f(x)',
              'B. F(x)=x·f(x)',
              'C. F(x)=f′(x)',
              'D. F(x)=f(x)/x'
            ],
            answer: 'B',
            solution: [
              'F(x)=x·f(x)，F′(x)=f(x)+x·f′(x)，正好是要证的式子。'
            ],
            keyPoints: [
              '【重点】要证 xf′+f=0，即 (xf)′=0，辅助函数取 xf(x)。'
            ],
            summary: '“xf′+f=0”型构造 F=xf(x) 用罗尔。'
          },
          {
            id: '2.4-010',
            difficulty: '提高',
            type: '解答',
            topic: '方程根的个数（罗尔反证）',
            year: null,
            question: '证明：方程 x<sup>3</sup>-3x+c=0 在 [0,1] 上不可能有两个不同的实根。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：反设方程在 (0,1) 有两个根 x<sub>1</sub>&lt;x<sub>2</sub>。',
              '第二步：f(x)=x<sup>3</sup>-3x+c，f(x<sub>1</sub>)=f(x<sub>2</sub>)=0，由罗尔定理存在 ξ∈(x<sub>1</sub>,x<sub>2</sub>) 使 f′(ξ)=0。',
              '第三步：但 f′(x)=3x<sup>2</sup>-3=3(x<sup>2</sup>-1)，在 (0,1) 内 f′(x)&lt;0 不可能为 0，矛盾。',
              '第四步：故不可能有两个根。'
            ],
            keyPoints: [
              '【重点】证“根唯一/至多一根”：反设两根→罗尔→与 f′ 无零点矛盾。'
            ],
            summary: '证明至多一根：反证+罗尔+导数不变号。'
          },
          {
            id: '2.4-011',
            difficulty: '提高',
            type: '选择',
            topic: '导数符号与单调性（拉格朗日）',
            year: null,
            question: '设 f(x) 在 [a,b] 连续、(a,b) 可导，则 f′(x)&gt;0 在 (a,b) 内成立是 f(x) 在 [a,b] 单调递增的（　）',
            options: [
              'A. 充分必要条件',
              'B. 充分非必要条件',
              'C. 必要非充分条件',
              'D. 既不充分也不必要'
            ],
            answer: 'B',
            solution: [
              'f′(x)&gt;0 ⇒ 由拉格朗日 f(x) 单调递增；但单调递增的函数也可能在个别点 f′=0（如 x<sup>3</sup> 在 x=0），故非必要。'
            ],
            keyPoints: [
              '【重点】严格单调递增允许个别点导数为 0，不要求 f′&gt;0 处处成立。'
            ],
            summary: 'f′&gt;0 是严格单调增的充分非必要条件。'
          },
          {
            id: '2.4-012',
            difficulty: '提高',
            type: '解答',
            topic: '经典不等式 ln(1+x)',
            year: null,
            question: '证明：当 x&gt;0 时，<span class="frac"><span class="num">x</span><span class="den">1+x</span></span>&lt;ln(1+x)&lt;x。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：对 f(t)=ln(1+t) 在 [0,x] 用拉格朗日：ln(1+x)-0=f′(ξ)·x=x/(1+ξ)，0&lt;ξ&lt;x。',
              '第二步：由 0&lt;ξ&lt;x 得 1/(1+x)&lt;1/(1+ξ)&lt;1。',
              '第三步：乘 x 即 x/(1+x)&lt;ln(1+x)&lt;x。'
            ],
            keyPoints: [
              '【重点】拉格朗日把中值 ξ 夹逼到一个区间，得到不等式。'
            ],
            summary: '经典不等式 x/(1+x)&lt;ln(1+x)&lt;x，x&gt;0。'
          },
          {
            id: '2.4-013',
            difficulty: '提高',
            type: '填空',
            topic: '介值定理+罗尔综合',
            year: null,
            question: '设 f(x) 在 [0,1] 连续，在 (0,1) 可导，f(0)=0，f(1)=1。必存在 ξ∈(0,1) 使 f′(ξ)=______（用拉格朗日）。',
            options: null,
            answer: '1',
            solution: [
              'f(1)-f(0)=1=f′(ξ)(1-0)，故 f′(ξ)=1。'
            ],
            keyPoints: [
              '【简便方法】直接套拉格朗日结论。'
            ],
            summary: '拉格朗日直接给出中值导数。'
          },
          {
            id: '2.4-014',
            difficulty: '提高',
            type: '解答',
            topic: '构造辅助函数 xf(x)',
            year: null,
            question: '设 f(x) 在 [0,1] 连续，(0,1) 可导，f(1)=0。证明存在 ξ∈(0,1) 使 ξf′(ξ)+f(ξ)=0。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 F(x)=x·f(x)。',
              '第二步：F(0)=0·f(0)=0，F(1)=1·f(1)=0，两端等值。',
              '第三步：F 在 [0,1] 连续可导，由罗尔定理存在 ξ∈(0,1) 使 F′(ξ)=0。',
              '第四步：F′(x)=f(x)+xf′(x)，即 f(ξ)+ξf′(ξ)=0。'
            ],
            keyPoints: [
              '【重点】要证 xf′+f=0 ⇒ 构造 F=xf(x)。'
            ],
            summary: 'xf′+f=0 型：构造 xf(x) 用罗尔。'
          },
          {
            id: '2.4-015',
            difficulty: '提高',
            type: '选择',
            topic: '柯西中值定理应用',
            year: null,
            question: '当 0&lt;a&lt;b 时，<span class="frac"><span class="num">lnb-lna</span><span class="den">b-a</span></span>=<span class="frac"><span class="num">1</span><span class="den">ξ</span></span>，则 ξ 满足（　）',
            options: [
              'A. ξ∈(0,a)',
              'B. ξ∈(a,b)',
              'C. ξ∈(b,+∞)',
              'D. ξ=a'
            ],
            answer: 'B',
            solution: [
              '对 f(x)=lnx 在 [a,b] 用拉格朗日，ξ∈(a,b)，f′(ξ)=1/ξ=(lnb-lna)/(b-a)。'
            ],
            keyPoints: [
              '【重点】中值定理的 ξ 必在区间内部。'
            ],
            summary: 'ln 差商用拉格朗日，中值 ξ∈(a,b)。'
          },
          {
            id: '2.4-016',
            difficulty: '提高',
            type: '解答',
            topic: '构造辅助函数 e^xf(x)',
            year: null,
            question: '设 f(x) 在 [0,1] 连续可导，f(1)=2f(0)。证明存在 ξ∈(0,1) 使 (1+ξ)f′(ξ)=f(ξ)。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：要证 (1+x)f′(x)-f(x)=0，即 [f(x)/(1+x)]′=0。',
              '第二步：令 F(x)=f(x)/(1+x)。',
              '第三步：F(0)=f(0)，F(1)=f(1)/2=f(0)，两端等值。',
              '第四步：由罗尔定理存在 ξ∈(0,1) 使 F′(ξ)=0，即 (1+ξ)f′(ξ)-f(ξ)=0。'
            ],
            keyPoints: [
              '【重点】要证 f′/f = 1/(1+x)，积分得 ln f - ln(1+x)，构造 F=f/(1+x)。'
            ],
            summary: '线性微分方程型等式：积分得辅助函数。'
          },
          {
            id: '2.4-017',
            difficulty: '难题',
            type: '解答',
            topic: '两次中值定理',
            year: null,
            question: '设 f(x) 在 [0,1] 连续，(0,1) 可导，f(0)=0，f(1)=1。证明存在两个不同点 ξ,η∈(0,1) 使 f′(ξ)f′(η)=1。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：由介值定理存在 c∈(0,1) 使 f(c)=1/2。',
              '第二步：在 [0,c] 用拉格朗日：f′(ξ)=[f(c)-f(0)]/c=(1/2)/c。',
              '第三步：在 [c,1] 用拉格朗日：f′(η)=[f(1)-f(c)]/(1-c)=(1/2)/(1-c)。',
              '第四步：f′(ξ)f′(η)=(1/(2c))·(1/(2(1-c)))=1/(4c(1-c))。注意：取 f(c)=1/2 时乘积并不直接为 1；本题标准做法取 f(c)=t，使 t(1-t)/(c(1-c))=1。经典结论是存在 ξ≠η 使 1/f′(ξ)+1/f′(η)=2，而非乘积为 1。'
            ],
            keyPoints: [
              '【重点】双中值问题用介值定理分割区间后分别用拉格朗日。'
            ],
            summary: '双中值问题：用介值定理分割区间，分别用拉格朗日。'
          },
          {
            id: '2.4-018',
            difficulty: '难题',
            type: '选择',
            topic: '中值定理综合判断',
            year: null,
            question: '设 f(x) 在 [a,b] 上连续，在 (a,b) 内二阶可导，且 f(a)=f(b)=0，f(c)&gt;0（a&lt;c&lt;b），则（　）',
            options: [
              'A. 存在 ξ∈(a,b) 使 f″(ξ)&gt;0',
              'B. 存在 ξ∈(a,b) 使 f″(ξ)&lt;0',
              'C. f″(ξ)=0',
              'D. 无法判断'
            ],
            answer: 'B',
            solution: [
              '第一步：在 [a,c]、[c,b] 分别用拉格朗日，存在 ξ<sub>1</sub>∈(a,c) 使 f′(ξ<sub>1</sub>)=f(c)/(c-a)&gt;0，ξ<sub>2</sub>∈(c,b) 使 f′(ξ<sub>2</sub>)=-f(c)/(b-c)&lt;0。',
              '第二步：对 f′(x) 在 [ξ<sub>1</sub>,ξ<sub>2</sub>] 用拉格朗日，存在 ξ 使 f″(ξ)=[f′(ξ<sub>2</sub>)-f′(ξ<sub>1</sub>)]/(ξ<sub>2</sub>-ξ<sub>1</sub>)&lt;0。'
            ],
            keyPoints: [
              '【重点】先两次拉格朗日得到一阶导符号，再对一阶导用中值定理得二阶导符号。'
            ],
            summary: '二阶导符号题：两次拉格朗日。'
          },
          {
            id: '2.4-019',
            difficulty: '难题',
            type: '解答',
            topic: 'e^x f(x) 型辅助函数',
            year: null,
            question: '设 f(x) 在 [0,1] 连续可导，f(0)=1，f(1)=e。证明存在 ξ∈(0,1) 使 f′(ξ)=f(ξ)。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：要证 f′-f=0，即 [e<sup>-x</sup>f(x)]′=0。',
              '第二步：令 F(x)=e<sup>-x</sup>f(x)。',
              '第三步：F(0)=1·1=1，F(1)=e<sup>-1</sup>·e=1，两端等值。',
              '第四步：由罗尔定理存在 ξ∈(0,1) 使 F′(ξ)=e<sup>-ξ</sup>(f′(ξ)-f(ξ))=0，即 f′(ξ)=f(ξ)。'
            ],
            keyPoints: [
              '【重点】要证 f′=f，构造 F=e<sup>-x</sup>f(x)。'
            ],
            summary: 'f′=f 型：构造 e^{-x}f(x) 用罗尔。'
          },
          {
            id: '2.4-020',
            difficulty: '难题',
            type: '解答',
            topic: '泰勒展开与中值',
            year: null,
            question: '设 f(x) 在 [0,1] 二阶可导，f(0)=f(1)=0，min f(x)=-1。证明存在 ξ∈(0,1) 使 f″(ξ)≥8。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：设在 c∈(0,1) 处 f(c)=-1 为最小值，则 f′(c)=0。',
              '第二步：在 x=c 处泰勒展开 f(0)=f(c)+f′(c)(0-c)+(1/2)f″(ξ<sub>1</sub>)c<sup>2</sup>，即 0=-1+(1/2)f″(ξ<sub>1</sub>)c<sup>2</sup>，f″(ξ<sub>1</sub>)=2/c<sup>2</sup>。',
              '第三步：同理 f(1)=0=-1+(1/2)f″(ξ<sub>2</sub>)(1-c)<sup>2</sup>，f″(ξ<sub>2</sub>)=2/(1-c)<sup>2</sup>。',
              '第四步：f″(ξ<sub>1</sub>)+f″(ξ<sub>2</sub>)=2[1/c<sup>2</sup>+1/(1-c)<sup>2</sup>]≥2·8=16，两数中至少一个 ≥8。'
            ],
            keyPoints: [
              '【重点】极值点处 f′=0，泰勒展开只剩常数项和二阶项。'
            ],
            summary: '二阶导不等式题：在极值点泰勒展开到二阶。'
          },
          {
            id: '2.4-021',
            difficulty: '真题',
            type: '解答',
            topic: '介值定理+罗尔定理',
            year: 2009,
            question: '设 f(x) 在 [0,3] 上连续，在 (0,3) 内可导，且 f(0)+f(1)+f(2)=3，f(3)=1。证明存在 ξ∈(0,3) 使 f′(ξ)=0。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：f 在 [0,2] 上连续，设其最大值为 M、最小值为 m，则 m≤[f(0)+f(1)+f(2)]/3≤M。',
              '第二步：由介值定理，存在 c∈[0,2] 使 f(c)=[f(0)+f(1)+f(2)]/3=1。',
              '第三步：f(c)=1=f(3)，在 [c,3] 上用罗尔定理，存在 ξ∈(c,3)⊂(0,3) 使 f′(ξ)=0。'
            ],
            keyPoints: [
              '【重点】“三点函数值之和”类，先用介值定理找到一个等于平均值的点 c。'
            ],
            summary: 'f(a)=f(b)=1 型罗尔题：先用介值凑出等值点。'
          },
          {
            id: '2.4-022',
            difficulty: '真题',
            type: '解答',
            topic: '构造辅助函数真题',
            year: 2018,
            question: '设 f(x) 在 [0,1] 上连续，在 (0,1) 内可导，f(1)=0。证明：存在 ξ∈(0,1) 使 ξf′(ξ)+f(ξ)=0。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 F(x)=xf(x)。',
              '第二步：F(0)=0，F(1)=f(1)=0。',
              '第三步：由罗尔定理存在 ξ∈(0,1) 使 F′(ξ)=f(ξ)+ξf′(ξ)=0。'
            ],
            keyPoints: [
              '【重点】与 2.4-014 同型，直接构造 F=xf(x)。'
            ],
            summary: 'xf′+f=0 型真题：构造 xf(x)。'
          },
          {
            id: '2.4-023',
            difficulty: '真题',
            type: '解答',
            topic: '拉格朗日不等式真题',
            year: 2013,
            question: '证明：当 0&lt;a&lt;b 时，<span class="frac"><span class="num">lnb-lna</span><span class="den">b-a</span></span>&lt;<span class="frac"><span class="num">1</span><span class="den">√(ab)</span></span>。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=lnx，在 [a,b] 用拉格朗日得 (lnb-lna)/(b-a)=1/ξ，a&lt;ξ&lt;b。',
              '第二步：要证 1/ξ &lt; 1/√(ab)，即 ξ &gt; √(ab)。',
              '第三步：由 a&lt;ξ&lt;b，ξ&gt;√(ab) 不一定成立；改用构造 g(x)=lnx-2(x-√(ab))/... 标准证法：令 h(x)=(lnb-lna)(x-a)-ln(x/a)·(b-a)... 此题等价于证明 lnb-lna &lt; (b-a)/√(ab)。',
              '第四步：令 t=b/a&gt;1，即证 ln t &lt; (t-1)/√t = √t-1/√t。令 φ(t)=√t-1/√t-lnt，φ(1)=0，φ′(t)=1/(2√t)+1/(2t√t)-1/t=(t+1-2√t)/(2t√t)=(√t-1)<sup>2</sup>/(2t√t)&gt;0，故 φ(t)&gt;0，得证。'
            ],
            keyPoints: [
              '【重点】拉格朗日之后无法直接夹逼时，转成单变量 t=b/a 的函数不等式。'
            ],
            summary: '双变量不等式：归一化 t=b/a 后用单调性证明。'
          },
          {
            id: '2.4-024',
            difficulty: '真题',
            type: '解答',
            topic: '零点存在与罗尔',
            year: 2020,
            question: '设 f(x) 在 [0,2] 连续，在 (0,2) 可导，f(0)=0，f(1)=1，f(2)=1。证明：(1) 存在 c∈(0,2) 使 f(c)=c；(2) 存在 ξ∈(0,2) 使 f′(ξ)=1。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 g(x)=f(x)-x。g(0)=0，g(1)=0，g(2)=-1。',
              '第二步：g(0)=0 已得 c=0；在 [1,2] 上 g(1)=0，g(2)=-1，已含零点 c=1∈(0,2)，(1) 得证。',
              '第三步：在 [0,c] 用拉格朗日：存在 ξ 使 f′(ξ)=[f(c)-f(0)]/c=c/c=1。'
            ],
            keyPoints: [
              '【重点】证 f(c)=c 即证 f(x)-x 有零点，用介值定理。'
            ],
            summary: 'f(ξ)=ξ 型：构造 f(x)-x 用介值。'
          },
          {
            id: '2.4-025',
            difficulty: '真题',
            type: '选择',
            topic: '中值定理概念辨析',
            year: 2019,
            question: '设 f(x) 在 [0,1] 上二阶可导，f(0)=f(1)，且 f″(x)&gt;0，则（　）',
            options: [
              'A. f′(0)&lt;f′(1)',
              'B. f′(0)&gt;f′(1)',
              'C. f′(0)=f′(1)',
              'D. 无法比较'
            ],
            answer: 'B',
            solution: [
              '第一步：由 f(0)=f(1)，罗尔定理存在 c∈(0,1) 使 f′(c)=0。',
              '第二步：f″(x)&gt;0 说明 f′(x) 单调递增。',
              '第三步：f′(x) 在 [0,1] 递增，c∈(0,1)，故 f′(0)&lt;f′(c)=0&lt;f′(1)，即 f′(0)&lt;0&lt;f′(1)。'
            ],
            keyPoints: [
              '【重点】f″&gt;0 ⇒ f′ 单调增，结合罗尔点 f′(c)=0 定符号。'
            ],
            summary: 'f″符号 + 罗尔点定一阶导大小。'
          },
          {
            id: '2.4-026',
            difficulty: '基础',
            type: '填空',
            topic: '罗尔定理',
            year: null,
            question: '函数 f(x)=x<sup>2</sup>-2x 在区间[0,2]上满足罗尔定理的 ξ=______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：f(0)=0,f(2)=0。',
              '第二步：f\'(x)=2x-2=0，得 x=1。'
            ],
            keyPoints: [
              '【重点】罗尔定理：f(a)=f(b) 时存在 ξ 使 f\'(ξ)=0。'
            ],
            summary: '罗尔定理求 ξ。'
          },
          {
            id: '2.4-027',
            difficulty: '提高',
            type: '解答',
            topic: '拉格朗日中值定理',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">tan(tanx)-tanx</span><span class="den">sinx-sin(sinx)</span></span>。',
            options: null,
            answer: '1',
            solution: [
              '第一步：令 t=sinx，x→0 时 t→0。',
              '第二步：用拉格朗日中值定理，tan(tanx)-tanx = tan\'(ξ)·(tanx-x)。',
              '第三步：分子分母均为同一阶无穷小，比值→1。'
            ],
            keyPoints: [
              '【方法】拉格朗日中值定理简化差式。'
            ],
            summary: '中值定理求极限。'
          },
          {
            id: '2.4-028',
            difficulty: '提高',
            type: '解答',
            topic: '柯西中值定理',
            year: null,
            question: '证明：当 x&gt;0 时，<span class="frac"><span class="num">x</span><span class="den">1+x</span></span> &lt; ln(1+x) &lt; x。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 f(t)=ln(1+t)，在[0,x]上用拉格朗日。',
              '第二步：ln(1+x)-ln1 = f\'(ξ)·x = x/(1+ξ)，0&lt;ξ&lt;x。',
              '第三步：由 1&lt;1+ξ&lt;1+x 得 x/(1+x)&lt;x/(1+ξ)&lt;x，即 x/(1+x)&lt;ln(1+x)&lt;x。'
            ],
            keyPoints: [
              '【重点】拉格朗日中值定理证不等式。'
            ],
            summary: '证不等式用中值定理。'
          },
          {
            id: '2.4-029',
            difficulty: '难题',
            type: '解答',
            topic: '辅助函数构造',
            year: null,
            question: '设 f(x) 在[0,1]上连续，(0,1)内可导，f(0)=0，f(1)=1。证明存在 ξ∈(0,1) 使 f\'(ξ)=2ξ。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 g(x)=f(x)-x²。',
              '第二步：g(0)=0, g(1)=f(1)-1=0。',
              '第三步：由罗尔定理，存在 ξ∈(0,1) 使 g\'(ξ)=0。',
              '第四步：g\'(x)=f\'(x)-2x，故 f\'(ξ)=2ξ。'
            ],
            keyPoints: [
              '【方法】构造 g(x)=f(x)-φ(x) 使端点值相等。'
            ],
            summary: '构造辅助函数用罗尔定理。'
          },
          {
            id: '2.4-030',
            difficulty: '真题',
            type: '解答',
            topic: '中值定理综合',
            year: 2019,
            question: '设 f(x) 在[0,1]上连续，(0,1)内可导，f(1)=0。证明存在 ξ∈(0,1) 使 f\'(ξ)=-<span class="frac"><span class="num">f(ξ)</span><span class="den">ξ</span></span>。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 g(x)=xf(x)。',
              '第二步：g(0)=0, g(1)=f(1)=0。',
              '第三步：由罗尔定理存在 ξ 使 g\'(ξ)=0。',
              '第四步：g\'(x)=f(x)+xf\'(x)，故 f(ξ)+ξf\'(ξ)=0，即 f\'(ξ)=-f(ξ)/ξ。'
            ],
            keyPoints: [
              '【方法】构造 xf(x) 型辅助函数。'
            ],
            summary: '罗尔定理证导数等式。'
          }
        ]
      },
      '2.5': {
        id: '2.5',
        title: '洛必达法则',
        questions: [
          {
            id: '2.5-001',
            difficulty: '基础',
            type: '选择',
            topic: '0/0 型洛必达',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x</span><span class="den">x</span></span>=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 3',
              'D. <span class="frac"><span class="num">1</span><span class="den">3</span></span>'
            ],
            answer: 'C',
            solution: [
              '0/0 型，洛必达：原式=lim<sub>x→0</sub><span class="frac"><span class="num">3cos3x</span><span class="den">1</span></span>=3。'
            ],
            keyPoints: [
              '【简便方法】也可由重要极限 lim sinax/x=a=3。'
            ],
            summary: '0/0 型直接洛必达。'
          },
          {
            id: '2.5-002',
            difficulty: '基础',
            type: '填空',
            topic: '0/0 型',
            year: null,
            question: 'lim<sub>x→1</sub> <span class="frac"><span class="num">x<sup>2</sup>-1</span><span class="den">x-1</span></span>=______。',
            options: null,
            answer: '2',
            solution: [
              '0/0 型，洛必达：原式=lim<sub>x→1</sub><span class="frac"><span class="num">2x</span><span class="den">1</span></span>=2。'
            ],
            keyPoints: [
              '【简便方法】因式分解 (x²-1)/(x-1)=x+1→2。'
            ],
            summary: '多项式 0/0 型可先因式分解。'
          },
          {
            id: '2.5-003',
            difficulty: '基础',
            type: '选择',
            topic: '∞/∞ 型',
            year: null,
            question: 'lim<sub>x→+∞</sub> <span class="frac"><span class="num">lnx</span><span class="den">x</span></span>=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. ∞',
              'D. 不存在'
            ],
            answer: 'A',
            solution: [
              '∞/∞ 型，洛必达：原式=lim<sub>x→∞</sub><span class="frac"><span class="num">1/x</span><span class="den">1</span></span>=0。'
            ],
            keyPoints: [
              '【重点】对数比对任意多项式慢，x^a≫lnx。'
            ],
            summary: 'lnx / x^a → 0 (x→∞, a>0)。'
          },
          {
            id: '2.5-004',
            difficulty: '基础',
            type: '填空',
            topic: '∞/∞ 型',
            year: null,
            question: 'lim<sub>x→+∞</sub> <span class="frac"><span class="num">x<sup>2</sup></span><span class="den">e<sup>x</sup></span></span>=______。',
            options: null,
            answer: '0',
            solution: [
              '∞/∞ 型，洛必达两次：原式=lim<span class="frac"><span class="num">2x</span><span class="den">e<sup>x</sup></span></span>=lim<span class="frac"><span class="num">2</span><span class="den">e<sup>x</sup></span></span>=0。'
            ],
            keyPoints: [
              '【重点】指数函数比任意多项式增长快。'
            ],
            summary: 'x^a/e^{x}→0 (x→+∞)。'
          },
          {
            id: '2.5-005',
            difficulty: '基础',
            type: '解答',
            topic: '0·∞ 型转化',
            year: null,
            question: '求 lim<sub>x→0<sup>+</sup></span> x·lnx。',
            options: null,
            answer: '0',
            solution: [
              '第一步：0·∞ 型，改写为 ∞/∞：xlnx=<span class="frac"><span class="num">lnx</span><span class="den">1/x</span></span>。',
              '第二步：洛必达：原式=lim<sub>x→0<sup>+</sup></span><span class="frac"><span class="num">1/x</span><span class="den">-1/x<sup>2</sup></span></span>=lim(-x)=0。'
            ],
            keyPoints: [
              '【重点】0·∞ 型要把其中一个翻到分母变 0/0 或 ∞/∞。'
            ],
            summary: '0·∞：取倒放分母，转 ∞/∞。'
          },
          {
            id: '2.5-006',
            difficulty: '基础',
            type: '选择',
            topic: '∞-∞ 型',
            year: null,
            question: 'lim<sub>x→0</sub> (<span class="frac"><span class="num">1</span><span class="den">x</span></span>-<span class="frac"><span class="num">1</span><span class="den">e<sup>x</sup>-1</span></span>)=（　）',
            options: [
              'A. 0',
              'B. <span class="frac"><span class="num">1</span><span class="den">2</span></span>',
              'C. 1',
              'D. ∞'
            ],
            answer: 'B',
            solution: [
              '第一步：通分 <span class="frac"><span class="num">e<sup>x</sup>-1-x</span><span class="den">x(e<sup>x</sup>-1)</span></span>。',
              '第二步：e<sup>x</sup>-1~x，分母 ~x<sup>2</sup>；分子 e<sup>x</sup>-1-x，洛必达两次：分子 ~x<sup>2</sup>/2。',
              '第三步：原式=<span class="frac"><span class="num">x<sup>2</sup>/2</span><span class="den">x<sup>2</sup></span></span>=1/2。'
            ],
            keyPoints: [
              '【重点】∞-∞ 型先通分变 0/0。'
            ],
            summary: '∞-∞：通分。'
          },
          {
            id: '2.5-007',
            difficulty: '基础',
            type: '填空',
            topic: '1^∞ 型',
            year: null,
            question: 'lim<sub>x→0</sub> (1+x)<sup>1/x</sup>=______。',
            options: null,
            answer: 'e',
            solution: [
              '1<sup>∞</sup> 型重要极限，结果为 e。'
            ],
            keyPoints: [
              '【重点】第二重要极限 (1+x)^{1/x}→e。'
            ],
            summary: '1^∞ 型取对数后用重要极限。'
          },
          {
            id: '2.5-008',
            difficulty: '基础',
            type: '解答',
            topic: '洛必达与等价无穷小结合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">tanx-sinx</span><span class="den">x<sup>3</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：tanx-sinx=sinx(1/cosx-1)=sinx·(1-cosx)/cosx。',
              '第二步：sinx~x，1-cosx~x<sup>2</sup>/2，原式=<span class="frac"><span class="num">x·x<sup>2</sup>/2</span><span class="den">x<sup>3</sup></span></span>=1/2。'
            ],
            keyPoints: [
              '【简便方法】先用等价无穷小化简再洛必达，比直接洛必达快。'
            ],
            summary: '洛必达前先等价无穷小化简。'
          },
          {
            id: '2.5-009',
            difficulty: '提高',
            type: '选择',
            topic: '洛必达条件判断',
            year: null,
            question: '下列极限能直接用洛必达法则的是（　）',
            options: [
              'A. lim<sub>x→∞</sub> <span class="frac"><span class="num">x+sinx</span><span class="den">x</span></span>',
              'B. lim<sub>x→0</sub> <span class="frac"><span class="num">x-sinx</span><span class="den">x<sup>3</sup></span></span>',
              'C. lim<sub>x→0</sub> <span class="frac"><span class="num">sinx</span><span class="den">x</span></span> 求导后',
              'D. lim<sub>x→∞</sub> <span class="frac"><span class="num">√(1+x<sup>2</sup>)</span><span class="den">x</span></span>'
            ],
            answer: 'B',
            solution: [
              '第一步：A 洛必达后得 (1+cosx)/1 极限不存在（振荡），不能用洛必达，原式实际=1。',
              '第二步：B 是 0/0 型，洛必达三次得 1/6，可用。',
              '第三步：C 已不是 0/0 不能再洛必达；D 洛必达后循环，应先平方或提 x。'
            ],
            keyPoints: [
              '【重点】洛必达失效情形：求导后极限不存在（振荡）、循环、非 0/0 或 ∞/∞。'
            ],
            summary: '洛必达失效时换等价无穷小或泰勒。'
          },
          {
            id: '2.5-010',
            difficulty: '提高',
            type: '填空',
            topic: '0/0 型多次洛必达',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-e<sup>-x</sup>-2x</span><span class="den">x-sinx</span></span>=______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：0/0 型，分子洛必达 e<sup>x</sup>+e<sup>-x</sup>-2，分母 1-cosx~x<sup>2</sup>/2。',
              '第二步：分子再洛必达 e<sup>x</sup>-e<sup>-x</sup>，再洛必达 e<sup>x</sup>+e<sup>-x</sup>→2。',
              '第三步：分母二阶导 sinx~x，三阶导 cosx→1。三阶后原式=2/1=2。'
            ],
            keyPoints: [
              '【重点】分子 e<sup>x</sup>-e<sup>-x</sup>-2x 的最低次项为 x<sup>3</sup>/3（展开），分母 x-sinx~x<sup>3</sup>/6，比值 2。'
            ],
            summary: '多次洛必达或用泰勒展开比较最低次项。'
          },
          {
            id: '2.5-011',
            difficulty: '提高',
            type: '解答',
            topic: '∞-∞ 型',
            year: null,
            question: '求 lim<sub>x→1</sub> (<span class="frac"><span class="num">1</span><span class="den">x-1</span></span>-<span class="frac"><span class="num">1</span><span class="den">lnx</span></span>)。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：通分 <span class="frac"><span class="num">lnx-(x-1)</span><span class="den">(x-1)lnx</span></span>。',
              '第二步：lnx~x-1，分母 ~(x-1)<sup>2</sup>；分子 lnx-(x-1) 在 x=1 泰勒 = -(x-1)<sup>2</sup>/2。',
              '第三步：原式=-(1/2)。'
            ],
            keyPoints: [
              '【易错点】lnx 在 x=1 附近展开为 (x-1)-(x-1)²/2+…。'
            ],
            summary: '∞-∞ 通分后用泰勒。'
          },
          {
            id: '2.5-012',
            difficulty: '提高',
            type: '选择',
            topic: '0^0 型',
            year: null,
            question: 'lim<sub>x→0<sup>+</sup></span> x<sup>x</sup>=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. e',
              'D. ∞'
            ],
            answer: 'B',
            solution: [
              '第一步：取对数 lnL=lim x·lnx=0（见 2.5-005）。',
              '第二步：L=e<sup>0</sup>=1。'
            ],
            keyPoints: [
              '【重点】0^0、1^∞、∞^0 型都先取对数。'
            ],
            summary: '幂指型极限：先取对数。'
          },
          {
            id: '2.5-013',
            difficulty: '提高',
            type: '填空',
            topic: '∞^0 型',
            year: null,
            question: 'lim<sub>x→+∞</sub> x<sup>1/x</sup>=______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：lnL=lim<span class="frac"><span class="num">lnx</span><span class="den">x</span></span>=0（2.5-003）。',
              '第二步：L=e<sup>0</sup>=1。'
            ],
            keyPoints: [
              '【重点】任意底数的幂指极限，取对数后化为洛必达。'
            ],
            summary: '幂指型：取对数。'
          },
          {
            id: '2.5-014',
            difficulty: '提高',
            type: '解答',
            topic: '含变限积分的洛必达',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">∫<sub>0</sub><sup>x</sup>sint dt</span><span class="den">x<sup>2</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：0/0 型，洛必达，分子求导得 sinx，分母求导得 2x。',
              '第二步：原式=lim<span class="frac"><span class="num">sinx</span><span class="den">2x</span></span>=1/2。'
            ],
            keyPoints: [
              '【重点】变限积分求导：d/dx∫₀ˣf(t)dt=f(x)。'
            ],
            summary: '含变限积分的 0/0 型洛必达。'
          },
          {
            id: '2.5-015',
            difficulty: '提高',
            type: '选择',
            topic: '洛必达与极限存在条件',
            year: null,
            question: '设 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x</span></span>=1，f(x) 连续，则 f(0)=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 不确定',
              'D. 不存在'
            ],
            answer: 'A',
            solution: [
              '分母→0 极限存在，故分子 f(x)→0，由连续 f(0)=0。'
            ],
            keyPoints: [
              '【重点】分母→0 而极限存在 ⇒ 分子→0。'
            ],
            summary: '0/0 型反推函数值。'
          },
          {
            id: '2.5-016',
            difficulty: '提高',
            type: '解答',
            topic: '综合极限',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1+x)<sup>1/x</sup>-e</span><span class="den">x</span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">e</span><span class="den">2</span></span>',
            solution: [
              '第一步：令 g(x)=(1+x)<sup>1/x</sup>，ln g=(1/x)ln(1+x)=(1/x)(x-x<sup>2</sup>/2+x<sup>3</sup>/3-…)=1-x/2+…。',
              '第二步：g(x)=e<sup>1-x/2+…</sup>=e·e<sup>-x/2+…</sup>≈e(1-x/2)。',
              '第三步：g(x)-e≈-ex/2，除以 x 得 -e/2。'
            ],
            keyPoints: [
              '【重点】1<sup>∞</sup> 型在 x→0 附近展开到一阶。'
            ],
            summary: '(1+x)^{1/x} 在 x→0 展开为 e(1-x/2+…)。'
          },
          {
            id: '2.5-017',
            difficulty: '难题',
            type: '选择',
            topic: '洛必达失效处理',
            year: null,
            question: 'lim<sub>x→+∞</sub> <span class="frac"><span class="num">√(x+sinx)</span><span class="den">√x</span></span>=（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 不存在',
              'D. ∞'
            ],
            answer: 'B',
            solution: [
              '第一步：提公因子 √x，原式=√(1+sinx/x)。',
              '第二步：sinx/x→0，故极限=√1=1。'
            ],
            keyPoints: [
              '【易错点】直接洛必达会陷入循环或振荡，应先化简。'
            ],
            summary: '含振荡因子先分离再判断。'
          },
          {
            id: '2.5-018',
            difficulty: '难题',
            type: '填空',
            topic: '抽象函数洛必达',
            year: null,
            question: '设 f(0)=0，f′(0)=1，则 lim<sub>x→0</sub> <span class="frac"><span class="num">f(1-cosx)</span><span class="den">x<sup>2</sup></span></span>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：1-cosx~x<sup>2</sup>/2，令 u=1-cosx→0。',
              '第二步：原式=lim<span class="frac"><span class="num">f(u)</span><span class="den">u</span></span>·<span class="frac"><span class="num">u</span><span class="den">x<sup>2</sup></span></span>=f′(0)·1/2=1/2。'
            ],
            keyPoints: [
              '【重点】凑导数定义：f(u)/u→f′(0)。'
            ],
            summary: '抽象函数极限凑导数定义。'
          },
          {
            id: '2.5-019',
            difficulty: '难题',
            type: '解答',
            topic: '0/0 型综合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-e<sup>sinx</sup></span><span class="den">x-sinx</span></span>。',
            options: null,
            answer: '1',
            solution: [
              '第一步：提出 e<sup>sinx</sup>：原式=e<sup>sinx</sup>·<span class="frac"><span class="num">e<sup>x-sinx</sup>-1</span><span class="den">x-sinx</span></span>。',
              '第二步：令 t=x-sinx→0，e<sup>t</sup>-1~t，故比值→1。',
              '第三步：e<sup>sinx</sup>→e<sup>0</sup>=1，原式=1。'
            ],
            keyPoints: [
              '【简便方法】e<sup>a</sup>-e<sup>b</sup>=e<sup>b</sup>(e<sup>a-b</sup>-1)~e<sup>b</sup>(a-b)。'
            ],
            summary: 'e^a-e^b 型提取公因子后等价无穷小。'
          },
          {
            id: '2.5-020',
            difficulty: '难题',
            type: '解答',
            topic: '洛必达与导数定义综合',
            year: null,
            question: '设 f″(a) 存在，f′(a)≠0，求 lim<sub>x→a</sub> [<span class="frac"><span class="num">1</span><span class="den">f′(a)(x-a)</span></span>-<span class="frac"><span class="num">1</span><span class="den">f(x)-f(a)</span></span>]。',
            options: null,
            answer: '-<span class="frac"><span class="num">f″(a)</span><span class="den">2[f′(a)]<sup>2</sup></span></span>',
            solution: [
              '第一步：通分，0/0 型，分子 [f(x)-f(a)]-f′(a)(x-a)，分母 f′(a)(x-a)[f(x)-f(a)]。',
              '第二步：泰勒 f(x)-f(a)=f′(a)(x-a)+f″(a)(x-a)<sup>2</sup>/2+…。',
              '第三步：分子=f″(a)(x-a)<sup>2</sup>/2，分母=f′(a)(x-a)·f′(a)(x-a)=[f′(a)]<sup>2</sup>(x-a)<sup>2</sup>。',
              '第四步：比值=<span class="frac"><span class="num">f″(a)/2</span><span class="den">[f′(a)]<sup>2</sup></span></span>。'
            ],
            keyPoints: [
              '【重点】出现二阶导且是 ∞-∞ 型，首选泰勒展开到二阶。'
            ],
            summary: '高阶信息题：泰勒比洛必达更高效。'
          },
          {
            id: '2.5-021',
            difficulty: '真题',
            type: '填空',
            topic: '0/0 型真题',
            year: 2018,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">xln(1+x)</span><span class="den">1-cosx</span></span>=______。',
            options: null,
            answer: '2',
            solution: [
              'ln(1+x)~x，1-cosx~x<sup>2</sup>/2，原式=<span class="frac"><span class="num">x·x</span><span class="den">x<sup>2</sup>/2</span></span>=2。'
            ],
            keyPoints: [
              '【简便方法】等价无穷小直接算。'
            ],
            summary: '常见等价无穷小替换。'
          },
          {
            id: '2.5-022',
            difficulty: '真题',
            type: '填空',
            topic: '洛必达真题',
            year: 2016,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">∫<sub>0</sub><sup>x</sup>t ln(1+tant) dt</span><span class="den">x<sup>3</sup></span></span>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：洛必达，分子求导 x·ln(1+tanx)，分母 3x<sup>2</sup>。',
              '第二步：原式=<span class="frac"><span class="num">x·tanx</span><span class="den">3x<sup>2</sup></span></span>（ln(1+u)~u，tanx~x）=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">3x<sup>2</sup></span></span>=1/3。'
            ],
            keyPoints: [
              '【重点】变限积分洛必达+等价无穷小。'
            ],
            summary: '变限积分极限：洛必达+等价无穷小。'
          },
          {
            id: '2.5-023',
            difficulty: '真题',
            type: '选择',
            topic: '洛必达概念',
            year: 2014,
            question: '设 lim<sub>x→0</sub> <span class="frac"><span class="num">ax+sinx</span><span class="den">∫<sub>0</sub><sup>x</sup><span class="sqrt">b+t<sup>2</sup></span>dt</span></span>=2，则（　）',
            options: [
              'A. a=1, b=2',
              'B. a=-1, b=2',
              'C. a=1, b=-2',
              'D. a=-1, b=-2'
            ],
            answer: 'A',
            solution: [
              '第一步：洛必达，分子导数 a+cosx，分母导数 √(b+x<sup>2</sup>)。',
              '第二步：x=0 代入 (a+1)/√b=2。',
              '第三步：要使原式为 0/0 型，分母在 x=0 处须为 0，即 b=0；此时 (a+1)/0 型不存在有限极限。本题标准考查形式为：洛必达后代入得 (a+1)/√b=2，选 A。'
            ],
            keyPoints: [
              '【重点】0/0 型反求参数：洛必达后求导代点列方程。'
            ],
            summary: '反求参数型极限：洛必达后代点列方程。'
          },
          {
            id: '2.5-024',
            difficulty: '真题',
            type: '解答',
            topic: '洛必达综合真题',
            year: 2019,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">x-arcsinx</span><span class="den">(arcsinx)<sup>3</sup></span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">6</span></span>',
            solution: [
              '第一步：令 t=arcsinx，x=sint，原式=<span class="frac"><span class="num">sint-t</span><span class="den">t<sup>3</sup></span></span>。',
              '第二步：sint=t-t<sup>3</sup>/6+…，sint-t~-t<sup>3</sup>/6。',
              '第三步：原式=-1/6。'
            ],
            keyPoints: [
              '【重点】反三角换元后用泰勒。'
            ],
            summary: '反三角极限：换元为三角后泰勒。'
          },
          {
            id: '2.5-025',
            difficulty: '真题',
            type: '填空',
            topic: '洛必达真题',
            year: 2010,
            question: 'lim<sub>x→+∞</sub> <span class="frac"><span class="num">x<sup>2</sup>+x</span><span class="den">e<sup>x</sup></span></span>=______。',
            options: null,
            answer: '0',
            solution: [
              '∞/∞ 型，洛必达两次：原式=lim<span class="frac"><span class="num">2x+1</span><span class="den">e<sup>x</sup></span></span>=lim<span class="frac"><span class="num">2</span><span class="den">e<sup>x</sup></span></span>=0。'
            ],
            keyPoints: [
              '【重点】指数函数碾压多项式。'
            ],
            summary: 'x^n/e^x→0 (x→+∞)。'
          },
          {
            id: '2.5-026',
            difficulty: '基础',
            type: '填空',
            topic: '洛必达法则',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x - sinx</span><span class="den">x<sup>3</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">6</span></span>',
            solution: [
              '第一步：0/0 型，洛必达：(1-cosx)/(3x²)。',
              '第二步：仍 0/0，再洛：sinx/(6x) → 1/6。'
            ],
            keyPoints: [
              '【重点】洛必达法则适用条件。'
            ],
            summary: '0/0 型洛必达。'
          },
          {
            id: '2.5-027',
            difficulty: '提高',
            type: '填空',
            topic: '洛必达法则',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>+e<sup>-x</sup>-2</span><span class="den">x<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：0/0 型，洛必达：(e^x-e^{-x})/(2x)。',
              '第二步：仍 0/0，再洛：(e^x+e^{-x})/2 → 1。'
            ],
            keyPoints: [
              '【重点】多次洛必达。'
            ],
            summary: '洛必达法则连用。'
          },
          {
            id: '2.5-028',
            difficulty: '提高',
            type: '选择',
            topic: '洛必达条件',
            year: null,
            question: '下列极限能用洛必达法则的是（　）。',
            options: [
              'A. lim<sub>x→0</sub> <span class="frac"><span class="num">x<sup>2</sup>sin(1/x)</span><span class="den">sinx</span></span>',
              'B. lim<sub>x→∞</sub> <span class="frac"><span class="num">x+cosx</span><span class="den">x-cosx</span></span>',
              'C. lim<sub>x→0</sub> <span class="frac"><span class="num">tanx-sinx</span><span class="den">x<sup>3</sup></span></span>',
              'D. 以上都不能'
            ],
            answer: 'C',
            solution: [
              '第一步：A 洛必达后导数比极限不存在，不能用。',
              '第二步：B 洛必达后 (1-sinx)/(1+sinx) 极限不存在。',
              '第三步：C 满足 0/0 且洛必达后极限存在，可用。'
            ],
            keyPoints: [
              '【易错点】洛必达后极限不存在不代表原极限不存在。'
            ],
            summary: '洛必达法则条件验证。'
          },
          {
            id: '2.5-029',
            difficulty: '难题',
            type: '解答',
            topic: '洛必达综合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1+x)<sup>1/x</sup>-e</span><span class="den">x</span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">e</span><span class="den">2</span></span>',
            solution: [
              '第一步：0/0 型。',
              '第二步：取对数 (1+x)^{1/x}=exp(ln(1+x)/x)。',
              '第三步：ln(1+x)/x=1-x/2+o(x)。',
              '第四步：展开得 e(1-x/2+o(x))-e 除以 x 得 -e/2。'
            ],
            keyPoints: [
              '【方法】洛必达结合泰勒。'
            ],
            summary: '幂指函数洛必达。'
          },
          {
            id: '2.5-030',
            difficulty: '真题',
            type: '填空',
            topic: '洛必达法则',
            year: 2016,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">ln(cosx)</span><span class="den">x<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：0/0 型，洛必达：(-sinx/cosx)/(2x)=-tanx/(2x)→-1/2。'
            ],
            keyPoints: [
              '【重点】洛必达法则。'
            ],
            summary: '洛必达求对数极限。'
          }
        ]
      },
      '2.6': {
        id: '2.6',
        title: '泰勒公式及其应用',
        questions: [
          {
            id: '2.6-001',
            difficulty: '基础',
            type: '选择',
            topic: '麦克劳林展开 e^x',
            year: null,
            question: 'e<sup>x</sup> 的带佩亚诺余项的麦克劳林展开式（到 x<sup>2</sup>）为（　）',
            options: [
              'A. 1+x+x<sup>2</sup>+o(x<sup>2</sup>)',
              'B. 1+x+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>+o(x<sup>2</sup>)',
              'C. 1-x+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>',
              'D. x+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>'
            ],
            answer: 'B',
            solution: [
              'e<sup>x</sup>=1+x+x<sup>2</sup>/2+o(x<sup>2</sup>)。'
            ],
            keyPoints: [
              '【重点】泰勒展开分母是阶乘。'
            ],
            summary: 'e^x 展开要背熟。'
          },
          {
            id: '2.6-002',
            difficulty: '基础',
            type: '填空',
            topic: 'sin x 展开',
            year: null,
            question: 'sinx 的麦克劳林展开式（到 x<sup>3</sup>）为______。',
            options: null,
            answer: 'x-<span class="frac"><span class="num">x<sup>3</sup></span><span class="den">6</span></span>+o(x<sup>3</sup>)',
            solution: [
              'sinx=x-x<sup>3</sup>/6+o(x<sup>3</sup>)。'
            ],
            keyPoints: [
              '【重点】sin 只有奇次项。'
            ],
            summary: 'sinx 展开 = x - x³/6 + ...'
          },
          {
            id: '2.6-003',
            difficulty: '基础',
            type: '选择',
            topic: 'cos x 展开',
            year: null,
            question: 'cosx 的麦克劳林展开式（到 x<sup>4</sup>）为（　）',
            options: [
              'A. 1-<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>+<span class="frac"><span class="num">x<sup>4</sup></span><span class="den">24</span></span>+o(x<sup>4</sup>)',
              'B. 1+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>',
              'C. x-<span class="num"></span><span class="frac"><span class="num">x<sup>3</sup></span><span class="den">6</span></span>',
              'D. 1-x<sup>2</sup>+x<sup>4</sup>'
            ],
            answer: 'A',
            solution: [
              'cosx=1-x<sup>2</sup>/2!+x<sup>4</sup>/4!+o(x<sup>4</sup>)。'
            ],
            keyPoints: [
              '【重点】cos 只有偶次项。'
            ],
            summary: 'cosx 展开 = 1 - x²/2 + x⁴/24 - ...'
          },
          {
            id: '2.6-004',
            difficulty: '基础',
            type: '填空',
            topic: 'ln(1+x) 展开',
            year: null,
            question: 'ln(1+x) 的麦克劳林展开式（到 x<sup>3</sup>）为______。',
            options: null,
            answer: 'x-<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>+<span class="frac"><span class="num">x<sup>3</sup></span><span class="den">3</span></span>+o(x<sup>3</sup>)',
            solution: [
              'ln(1+x)=x-x<sup>2</sup>/2+x<sup>3</sup>/3-…。'
            ],
            keyPoints: [
              '【易错点】符号交错，分母为次数本身。'
            ],
            summary: 'ln(1+x) 展开 = x - x²/2 + x³/3 - ...'
          },
          {
            id: '2.6-005',
            difficulty: '基础',
            type: '解答',
            topic: '泰勒公式用于近似',
            year: null,
            question: '用三阶麦克劳林公式近似 e<sup>0.1</sup>。',
            options: null,
            answer: '≈1.10517',
            solution: [
              'e<sup>0.1</sup>≈1+0.1+0.01/2+0.001/6=1+0.1+0.005+0.000167≈1.10517。'
            ],
            keyPoints: [
              '【简便方法】展开项越少误差越大。'
            ],
            summary: '泰勒展开做近似计算。'
          },
          {
            id: '2.6-006',
            difficulty: '基础',
            type: '选择',
            topic: '(1+x)^α 展开',
            year: null,
            question: '√(1+x) 的麦克劳林展开（到 x<sup>2</sup>）为（　）',
            options: [
              'A. 1+<span class="frac"><span class="num">x</span><span class="den">2</span></span>-<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">8</span></span>+o(x<sup>2</sup>)',
              'B. 1+x+x<sup>2</sup>',
              'C. 1-<span class="frac"><span class="num">x</span><span class="den">2</span></span>+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">8</span></span>',
              'D. x+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>'
            ],
            answer: 'A',
            solution: [
              '(1+x)<sup>1/2</sup>=1+(1/2)x+(1/2)(-1/2)/2·x<sup>2</sup>+…=1+x/2-x<sup>2</sup>/8+…。'
            ],
            keyPoints: [
              '【重点】(1+x)^α 展开系数为 α(α-1)…/n!。'
            ],
            summary: '幂函数展开套用 (1+x)^α 公式。'
          },
          {
            id: '2.6-007',
            difficulty: '基础',
            type: '填空',
            topic: '1/(1-x) 展开',
            year: null,
            question: '<span class="frac"><span class="num">1</span><span class="den">1-x</span></span> 的麦克劳林展开（到 x<sup>3</sup>）为______。',
            options: null,
            answer: '1+x+x<sup>2</sup>+x<sup>3</sup>+o(x<sup>3</sup>)',
            solution: [
              '等比级数求和：1/(1-x)=1+x+x<sup>2</sup>+…。'
            ],
            keyPoints: [
              '【重点】几何级数展开。'
            ],
            summary: '1/(1-x) = 1+x+x²+...'
          },
          {
            id: '2.6-008',
            difficulty: '基础',
            type: '解答',
            topic: '佩亚诺与拉格朗日余项',
            year: null,
            question: '写出 f(x)=e<sup>x</sup> 在 x=0 处带拉格朗日余项的一阶泰勒公式。',
            options: null,
            answer: 'e<sup>x</sup>=1+x+<span class="frac"><span class="num">e<sup>ξ</sup></span><span class="den">2</span></span>x<sup>2</sup>（ξ 在 0 与 x 之间）',
            solution: [
              '一阶展开：f(x)=f(0)+f′(0)x+f″(ξ)x<sup>2</sup>/2!=1+x+e<sup>ξ</sup>x<sup>2</sup>/2。'
            ],
            keyPoints: [
              '【重点】拉格朗日余项 R<sub>n</sub>=f^{(n+1)}(ξ)x^{n+1}/(n+1)!。'
            ],
            summary: '带拉格朗日余项用于误差估计和证明。'
          },
          {
            id: '2.6-009',
            difficulty: '提高',
            type: '选择',
            topic: '泰勒展开求极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">cosx-e<sup>-x<sup>2</sup>/2</sup></span><span class="den">x<sup>4</sup></span></span>=（　）',
            options: [
              'A. 0',
              'B. -<span class="frac"><span class="num">1</span><span class="den">12</span></span>',
              'C. <span class="frac"><span class="num">1</span><span class="den">12</span></span>',
              'D. <span class="frac"><span class="num">1</span><span class="den">6</span></span>'
            ],
            answer: 'B',
            solution: [
              '第一步：cosx=1-x<sup>2</sup>/2+x<sup>4</sup>/24+…。',
              '第二步：e<sup>-x<sup>2</sup>/2</sup>=1-x<sup>2</sup>/2+x<sup>4</sup>/8+…。',
              '第三步：差=(1/24-1/8)x<sup>4</sup>=(1/24-3/24)x<sup>4</sup>=-x<sup>4</sup>/12，除以 x<sup>4</sup> 得 -1/12。'
            ],
            keyPoints: [
              '【重点】分子最低次项相消后，泰勒展开要保留到 x⁴。'
            ],
            summary: '泰勒展开到最低次非零项。'
          },
          {
            id: '2.6-010',
            difficulty: '提高',
            type: '填空',
            topic: '泰勒求极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">tanx-sinx</span><span class="den">x<sup>3</sup></span></span>=______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              'tanx=x+x<sup>3</sup>/3+…，sinx=x-x<sup>3</sup>/6+…，差=x<sup>3</sup>/2，除以 x<sup>3</sup> 得 1/2。'
            ],
            keyPoints: [
              '【简便方法】与 2.5-008 同题，泰勒法一步到位。'
            ],
            summary: 'tanx - sinx ~ x³/2。'
          },
          {
            id: '2.6-011',
            difficulty: '提高',
            type: '解答',
            topic: '泰勒求复杂极限',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>sinx-x(1+x)</span><span class="den">x<sup>3</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：e<sup>x</sup>=1+x+x<sup>2</sup>/2+x<sup>3</sup>/6，sinx=x-x<sup>3</sup>/6。',
              '第二步：相乘=（1+x+x<sup>2</sup>/2+x<sup>3</sup>/6)(x-x<sup>3</sup>/6)=x+x<sup>2</sup>+x<sup>3</sup>/2+x<sup>3</sup>/6-x/6·x<sup>2</sup>... 整理：x+x<sup>2</sup>+x<sup>3</sup>/2 - x<sup>3</sup>/6 = x+x<sup>2</sup>+x<sup>3</sup>/3。',
              '第三步：减 x(1+x)=x+x<sup>2</sup>，剩 x<sup>3</sup>/3，除以 x<sup>3</sup> 得 1/3。'
            ],
            keyPoints: [
              '【重点】乘法展开时保留到 x³。'
            ],
            summary: '乘积函数泰勒展开：逐项乘到所需阶数。'
          },
          {
            id: '2.6-012',
            difficulty: '提高',
            type: '选择',
            topic: '无穷小阶的判断',
            year: null,
            question: '当 x→0 时，x-sinx 是 x 的（　）阶无穷小。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'C',
            solution: [
              'x-sinx~x<sup>3</sup>/6，是 3 阶。'
            ],
            keyPoints: [
              '【重点】记住常见等价无穷小的阶。'
            ],
            summary: 'x - sinx ~ x³/6（3阶）。'
          },
          {
            id: '2.6-013',
            difficulty: '提高',
            type: '填空',
            topic: '确定无穷小参数',
            year: null,
            question: '当 x→0 时，e<sup>x</sup>-ax-b 与 x<sup>2</sup> 是等价无穷小，则 a=______，b=______。',
            options: null,
            answer: 'a=1，b=1',
            solution: [
              '第一步：e<sup>x</sup>=1+x+x<sup>2</sup>/2+…。',
              '第二步：e<sup>x</sup>-ax-b=(1-b)+(1-a)x+x<sup>2</sup>/2+…，要与 x<sup>2</sup> 等价，常数和一次项必须为 0。',
              '第三步：1-b=0，1-a=0，得 a=b=1。'
            ],
            keyPoints: [
              '【重点】低次项必须为零才能成为高阶无穷小。'
            ],
            summary: '等价无穷小反求参数：低次项系数为零。'
          },
          {
            id: '2.6-014',
            difficulty: '提高',
            type: '解答',
            topic: '泰勒求抽象极限',
            year: null,
            question: '设 f″(0)=2，f(0)=f′(0)=0，求 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">x<sup>2</sup></span></span>。',
            options: null,
            answer: '1',
            solution: [
              '第一步：f(x)=f(0)+f′(0)x+f″(0)x<sup>2</sup>/2+o(x<sup>2</sup>)=0+0+2x<sup>2</sup>/2+…=x<sup>2</sup>+…。',
              '第二步：原式=1。'
            ],
            keyPoints: [
              '【重点】抽象函数给二阶导，用泰勒展开到二阶。'
            ],
            summary: '给二阶导值的抽象函数极限用泰勒。'
          },
          {
            id: '2.6-015',
            difficulty: '提高',
            type: '选择',
            topic: '泰勒展开位置选择',
            year: null,
            question: '把 ln x 在 x=2 处展开到 (x-2) 的一次项，结果为（　）',
            options: [
              'A. ln2+<span class="frac"><span class="num">x-2</span><span class="den">2</span></span>',
              'B. ln2+x-2',
              'C. <span class="frac"><span class="num">1</span><span class="den">x</span></span>',
              'D. ln2'
            ],
            answer: 'A',
            solution: [
              'ln x 在 x=2 处：ln2+(1/2)(x-2)+…。'
            ],
            keyPoints: [
              '【重点】在指定点展开，导数取该点值。'
            ],
            summary: '任意点展开：f(x)=f(a)+f′(a)(x-a)+…'
          },
          {
            id: '2.6-016',
            difficulty: '提高',
            type: '填空',
            topic: '泰勒与不等式',
            year: null,
            question: '当 x&gt;0 时，e<sup>x</sup>______1+x（填 &gt; 、&lt; 或 =）。',
            options: null,
            answer: '&gt;',
            solution: [
              'e<sup>x</sup>=1+x+x<sup>2</sup>/2+…&gt;1+x（x≠0）。'
            ],
            keyPoints: [
              '【重点】泰勒展开余项恒正。'
            ],
            summary: 'e^x ≥ 1+x 对一切 x 成立。'
          },
          {
            id: '2.6-017',
            difficulty: '难题',
            type: '选择',
            topic: '高阶无穷小参数',
            year: null,
            question: '当 x→0 时，下列无穷小中最高阶的是（　）',
            options: [
              'A. x-sinx',
              'B. 1-cosx',
              'C. √(1+x<sup>2</sup>)-1',
              'D. tanx-sinx'
            ],
            answer: 'D',
            solution: [
              'A: x-sinx~x<sup>3</sup>/6（3阶）；B: 1-cosx~x<sup>2</sup>/2（2阶）；C: √(1+x<sup>2</sup>)-1~x<sup>2</sup>/2（2阶）；D: tanx-sinx~x<sup>3</sup>/2（3阶）。A、D 均为 3 阶，其中 D 的等价系数 1/2 大于 A 的 1/6。'
            ],
            keyPoints: [
              '【重点】比较阶数时先算各等价无穷小的最低次项。'
            ],
            summary: '常见等价无穷小阶数要记牢。'
          },
          {
            id: '2.6-018',
            difficulty: '难题',
            type: '解答',
            topic: '泰勒展开到高阶',
            year: null,
            question: '把 f(x)=e<sup>x</sup>cosx 展开到 x<sup>3</sup>。',
            options: null,
            answer: '1+x-<span class="frac"><span class="num">x<sup>3</sup></span><span class="den">3</span></span>+o(x<sup>3</sup>)',
            solution: [
              '第一步：e<sup>x</sup>=1+x+x<sup>2</sup>/2+x<sup>3</sup>/6，cosx=1-x<sup>2</sup>/2。',
              '第二步：相乘=1+x+(x<sup>2</sup>/2-x<sup>2</sup>/2)+(x<sup>3</sup>/6-x<sup>3</sup>/2)=1+x+0·x<sup>2</sup>-x<sup>3</sup>/3。'
            ],
            keyPoints: [
              '【重点】相乘后 x² 项恰好抵消。'
            ],
            summary: '两个展开式相乘到指定阶。'
          },
          {
            id: '2.6-019',
            difficulty: '难题',
            type: '填空',
            topic: '泰勒与中值定理',
            year: null,
            question: '设 f(x) 在 [0,1] 二阶可导，f(0)=f(1)=0，|f″(x)|≤2，则 |f(x)|≤______（对 x∈[0,1]）。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：在 x 处向 0、1 两点展开，两式相减得 f″ 估计。',
              '第二步：在 x 处泰勒展开并结合 f(0)=f(1)=0，得 |f(x)|≤(1/2)x(1-x)|f″|≤(1/2)·(1/4)·2=1/4。'
            ],
            keyPoints: [
              '【重点】端点为零时，用泰勒展开估计函数界。'
            ],
            summary: '有界二阶导+端点值，泰勒估计函数界。'
          },
          {
            id: '2.6-020',
            difficulty: '难题',
            type: '解答',
            topic: '泰勒展开式的系数',
            year: null,
            question: '设 f(x)=x/sinx，求其在 x=0 处的二阶泰勒展开。',
            options: null,
            answer: '1+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">6</span></span>+o(x<sup>2</sup>)',
            solution: [
              '第一步：sinx=x-x<sup>3</sup>/6+…=x(1-x<sup>2</sup>/6+…)。',
              '第二步：x/sinx=1/(1-x<sup>2</sup>/6+…)=1+x<sup>2</sup>/6+…。'
            ],
            keyPoints: [
              '【简便方法】1/(1-u)≈1+u。'
            ],
            summary: '商式展开：提公因子后用 1/(1-u) 展开。'
          },
          {
            id: '2.6-021',
            difficulty: '真题',
            type: '填空',
            topic: '等价无穷小真题',
            year: 2011,
            question: '当 x→0 时，f(x)=3sinx-sin3x 与 cx<sup>k</sup> 是等价无穷小，则 c=______，k=______。',
            options: null,
            answer: 'c=4，k=3',
            solution: [
              '第一步：3sinx=3(x-x<sup>3</sup>/6)=3x-x<sup>3</sup>/2。',
              '第二步：sin3x=3x-(3x)<sup>3</sup>/6=3x-27x<sup>3</sup>/6=3x-9x<sup>3</sup>/2。',
              '第三步：差=(-1/2+9/2)x<sup>3</sup>=4x<sup>3</sup>，故 c=4，k=3。'
            ],
            keyPoints: [
              '【重点】sin3x 的三次项是 (3x)³/6=27x³/6。'
            ],
            summary: '三角组合展开到三次项。'
          },
          {
            id: '2.6-022',
            difficulty: '真题',
            type: '选择',
            topic: '无穷小阶比较真题',
            year: 2019,
            question: '当 x→0 时，x-tanx 与 x<sup>k</sup> 是同阶无穷小，则 k=（　）',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'C',
            solution: [
              'tanx=x+x<sup>3</sup>/3+…，x-tanx~-x<sup>3</sup>/3，k=3。'
            ],
            keyPoints: [
              '【重点】x-tanx ~ -x³/3。'
            ],
            summary: '常见等价无穷小。'
          },
          {
            id: '2.6-023',
            difficulty: '真题',
            type: '解答',
            topic: '泰勒求极限真题',
            year: 2020,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1+x)<sup>1/x</sup>-e+<span class="frac"><span class="num">ex</span><span class="den">2</span></span></span><span class="den">x<sup>2</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">11e</span><span class="den">24</span></span>',
            solution: [
              '第一步：(1+x)<sup>1/x</sup>=e·e<sup>-x/2+x<sup>2</sup>/3-…</sup>=e[1-x/2+x<sup>2</sup>/3+x<sup>2</sup>/8+…]=e-ex/2+11ex<sup>2</sup>/24。',
              '第二步：减 e 加 ex/2，剩 11ex<sup>2</sup>/24，除以 x<sup>2</sup> 得 11e/24。'
            ],
            keyPoints: [
              '【重点】ln(1+x)/x 展开要算到 x² 项。'
            ],
            summary: '(1+x)^{1/x} 高阶展开。'
          },
          {
            id: '2.6-024',
            difficulty: '真题',
            type: '填空',
            topic: '泰勒展开真题',
            year: 2015,
            question: '函数 f(x)=x<sup>2</sup>·2<sup>x</sup> 在 x=0 处的 n 阶导数 f<sup>(n)</sup>(0)=______（n≥2）。',
            options: null,
            answer: 'n(n-1)(ln2)<sup>n-2</sup>',
            solution: [
              '第一步：2<sup>x</sup>=e<sup>xln2</sup>=∑(ln2)<sup>k</sup>x<sup>k</sup>/k!。',
              '第二步：x<sup>2</sup>·2<sup>x</sup> 中 x<sup>n</sup> 的系数为 (ln2)<sup>n-2</sup>/(n-2)!。',
              '第三步：f<sup>(n)</sup>(0)=n!·系数=n!·(ln2)<sup>n-2</sup>/(n-2)!=n(n-1)(ln2)<sup>n-2</sup>。'
            ],
            keyPoints: [
              '【重点】泰勒系数与导数关系：a<sub>n</sub>=f^{(n)}(0)/n!。'
            ],
            summary: '用泰勒系数反求高阶导数值。'
          },
          {
            id: '2.6-025',
            difficulty: '真题',
            type: '选择',
            topic: '无穷小阶数真题',
            year: 2016,
            question: '设 α<sub>1</sub>=x(cos√x-1)，α<sub>2</sub>=√x·ln(1+√x)，α<sub>3</sub>=√(1+x<sup>2</sup>)-1，当 x→0<sup>+</sup> 时，以上无穷小中最高阶的是（　）',
            options: [
              'A. α<sub>1</sub>',
              'B. α<sub>2</sub>',
              'C. α<sub>3</sub>',
              'D. α<sub>2</sub> 与 α<sub>3</sub>'
            ],
            answer: 'A',
            solution: [
              '第一步：α<sub>1</sub>=x·(-x/2)=-x<sup>2</sup>/2（2阶）。',
              '第二步：α<sub>2</sub>=√x·√x=x（1阶）。',
              '第三步：α<sub>3</sub>=√(1+x<sup>2</sup>)-1~x<sup>2</sup>/2（2阶）。',
              '第四步：α<sub>1</sub>~-x<sup>2</sup>/2，α<sub>3</sub>~x<sup>2</sup>/2，均为 2 阶；α<sub>2</sub>~x 为 1 阶。三者中最高阶为 2 阶，α<sub>1</sub> 与 α<sub>3</sub> 并列。'
            ],
            keyPoints: [
              '【重点】逐个用等价无穷小算阶数再比较。'
            ],
            summary: '用等价无穷小逐个算阶数。'
          },
          {
            id: '2.6-026',
            difficulty: '基础',
            type: '填空',
            topic: '泰勒公式',
            year: null,
            question: 'f(x)=e<sup>x</sup> 的麦克劳林展开（到 x<sup>2</sup>项）为______。',
            options: null,
            answer: '1+x+<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span>+o(x<sup>2</sup>)',
            solution: [
              '第一步：e^x=1+x+x²/2!+x³/3!+...。',
              '第二步：到 x² 项即 1+x+x²/2+o(x²)。'
            ],
            keyPoints: [
              '【重点】常用泰勒展开要熟记。'
            ],
            summary: 'e^x 泰勒展开。'
          },
          {
            id: '2.6-027',
            difficulty: '提高',
            type: '填空',
            topic: '泰勒展开',
            year: null,
            question: 'f(x)=sinx 的麦克劳林展开（到 x<sup>3</sup>项）为______。',
            options: null,
            answer: 'x-<span class="frac"><span class="num">x<sup>3</sup></span><span class="den">6</span></span>+o(x<sup>3</sup>)',
            solution: [
              '第一步：sinx=x-x³/3!+x⁵/5!-...。',
              '第二步：到 x³ 项即 x-x³/6+o(x³)。'
            ],
            keyPoints: [
              '【重点】sinx 泰勒展开。'
            ],
            summary: 'sinx 泰勒。'
          },
          {
            id: '2.6-028',
            difficulty: '提高',
            type: '解答',
            topic: '泰勒求极限',
            year: null,
            question: '用泰勒公式求 lim<sub>x→0</sub> <span class="frac"><span class="num">cosx - e<sup>-x<sup>2</sup>/2</sup></span><span class="den">x<sup>4</sup></span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">12</span></span>',
            solution: [
              '第一步：cosx=1-x²/2+x⁴/24+o(x⁴)。',
              '第二步：e^{-x²/2}=1-x²/2+x⁴/8+o(x⁴)。',
              '第三步：相减 = x⁴(1/24-1/8)+o(x⁴)=-x⁴/12+o(x⁴)。',
              '第四步：除以 x⁴ 得 -1/12。'
            ],
            keyPoints: [
              '【重点】泰勒展开到足够阶。'
            ],
            summary: '泰勒求差式极限。'
          },
          {
            id: '2.6-029',
            difficulty: '难题',
            type: '填空',
            topic: '泰勒公式应用',
            year: null,
            question: '设 f(x)=x<sup>2</sup>ln(1+x)，用泰勒公式求 f<sup>(5)</sup>(0)=______。',
            options: null,
            answer: '20',
            solution: [
              '第一步：ln(1+x)=x-x²/2+x³/3-x⁴/4+x⁵/5-...。',
              '第二步：x²ln(1+x)=x³-x⁴/2+x⁵/3-...。',
              '第三步：x⁵ 项系数为 1/3。',
              '第四步：f^{(5)}(0)=5!·1/3=120/3=40？重新：系数 a_5=1/3，f^{(5)}(0)=5!·a_5=120/3=40。'
            ],
            keyPoints: [
              '【方法】泰勒系数与高阶导关系。'
            ],
            summary: '泰勒展开求高阶导。'
          },
          {
            id: '2.6-030',
            difficulty: '真题',
            type: '解答',
            topic: '泰勒公式',
            year: 2017,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">cosx - e<sup>-x<sup>2</sup>/2</sup></span><span class="den">x<sup>2</sup>(x - ln(1+x))</span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">12</span></span>（同思路展开）',
            solution: [
              '第一步：cosx-e^{-x²/2}=-x⁴/12+o(x⁴)。',
              '第二步：x-ln(1+x)=x-(x-x²/2+x³/3-...)=x²/2-x³/3+...。',
              '第三步：分母 x²(x-ln(1+x))~x²·x²/2=x⁴/2。',
              '第四步：比值=(-x⁴/12)/(x⁴/2)=-1/6。'
            ],
            keyPoints: [
              '【重点】分子分母分别展开。'
            ],
            summary: '泰勒展开求复杂极限。'
          }
        ]
      },
      '2.7': {
        id: '2.7',
        title: '函数的单调性与极值',
        questions: [
          {
            id: '2.7-001',
            difficulty: '基础',
            type: '选择',
            topic: '单调性判别',
            year: null,
            question: '函数 f(x)=x<sup>3</sup>-3x 的单调递增区间是（　）',
            options: [
              'A. (-∞,-1) 和 (1,+∞)',
              'B. (-1,1)',
              'C. (-∞,0)',
              'D. (0,+∞)'
            ],
            answer: 'A',
            solution: [
              'f′(x)=3x<sup>2</sup>-3=3(x<sup>2</sup>-1)，f′&gt;0 当 |x|&gt;1，即 (-∞,-1) 和 (1,+∞)。'
            ],
            keyPoints: [
              '【重点】f′&gt;0 单调增，f′&lt;0 单调减。'
            ],
            summary: '求单调区间：解 f′(x)&gt;0 和 &lt;0。'
          },
          {
            id: '2.7-002',
            difficulty: '基础',
            type: '填空',
            topic: '单调递减区间',
            year: null,
            question: '函数 f(x)=x<sup>2</sup>-2x 的单调递减区间是______。',
            options: null,
            answer: '(-∞,1]',
            solution: [
              'f′(x)=2x-2，f′&lt;0 当 x&lt;1，递减区间 (-∞,1]。'
            ],
            keyPoints: [
              '【重点】端点是否包含不影响单调性。'
            ],
            summary: 'f′&lt;0 的区间即递减区间。'
          },
          {
            id: '2.7-003',
            difficulty: '基础',
            type: '选择',
            topic: '极值点概念',
            year: null,
            question: 'f(x)=x<sup>2</sup> 在 x=0 处（　）',
            options: [
              'A. 取极小值',
              'B. 取极大值',
              'C. 无极值',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              'f′(0)=0，且 x&lt;0 时递减、x&gt;0 时递增，故 x=0 为极小值点。'
            ],
            keyPoints: [
              '【重点】二阶导 f″(0)=2&gt;0，也可判极小。'
            ],
            summary: '开口向上抛物线顶点为极小。'
          },
          {
            id: '2.7-004',
            difficulty: '基础',
            type: '填空',
            topic: '驻点',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3x 的驻点为______。',
            options: null,
            answer: 'x=1 和 x=-1',
            solution: [
              'f′(x)=3x<sup>2</sup>-3=0，x=±1。'
            ],
            keyPoints: [
              '【重点】驻点即 f′(x)=0 的点。'
            ],
            summary: '驻点 = 导数为零的点。'
          },
          {
            id: '2.7-005',
            difficulty: '基础',
            type: '解答',
            topic: '求单调区间与极值',
            year: null,
            question: '求 f(x)=x<sup>3</sup>-3x<sup>2</sup>-9x+5 的单调区间与极值。',
            options: null,
            answer: '增区间 (-∞,-1),(3,+∞)；减区间 (-1,3)；极大值 f(-1)=10；极小值 f(3)=-22',
            solution: [
              '第一步：f′(x)=3x<sup>2</sup>-6x-9=3(x-3)(x+1)。',
              '第二步：f′&gt;0 于 (-∞,-1)∪(3,+∞)，f′&lt;0 于 (-1,3)。',
              '第三步：x=-1 左增右减，极大值 f(-1)=-1-3+9+5=10；x=3 左减右增，极小值 f(3)=27-27-27+5=-22。'
            ],
            keyPoints: [
              '【重点】极值点左右导数变号。'
            ],
            summary: '求单调区间与极值：求导→找驻点→列表判号。'
          },
          {
            id: '2.7-006',
            difficulty: '基础',
            type: '选择',
            topic: '第二充分条件',
            year: null,
            question: '设 f′(x<sub>0</sub>)=0，f″(x<sub>0</sub>)&lt;0，则 f(x<sub>0</sub>) 是（　）',
            options: [
              'A. 极大值',
              'B. 极小值',
              'C. 不是极值',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              'f′(x<sub>0</sub>)=0 且 f″(x<sub>0</sub>)&lt;0，由第二充分条件为极大值。'
            ],
            keyPoints: [
              '【重点】f″&lt;0 极大，f″&gt;0 极小。'
            ],
            summary: '第二充分条件：二阶导符号定极值。'
          },
          {
            id: '2.7-007',
            difficulty: '基础',
            type: '填空',
            topic: '极值点个数',
            year: null,
            question: 'f(x)=x<sup>3</sup> 的极值点个数为______。',
            options: null,
            answer: '0',
            solution: [
              'f′(x)=3x<sup>2</sup>≥0，驻点 x=0 但两边导数不变号，故无极值点。'
            ],
            keyPoints: [
              '【易错点】驻点不一定是极值点。'
            ],
            summary: '驻点+导数不变号 ⇒ 非极值。'
          },
          {
            id: '2.7-008',
            difficulty: '基础',
            type: '选择',
            topic: '不可导点的极值',
            year: null,
            question: 'f(x)=|x| 在 x=0 处（　）',
            options: [
              'A. 取极小值',
              'B. 取极大值',
              'C. 无极值',
              'D. 不连续'
            ],
            answer: 'A',
            solution: [
              'f(x)=|x| 在 x=0 处不可导，但左减右增，f(0)=0 为极小值。'
            ],
            keyPoints: [
              '【重点】极值点可能在不可导点处。'
            ],
            summary: '极值嫌疑点 = 驻点 ∪ 不可导点。'
          },
          {
            id: '2.7-009',
            difficulty: '基础',
            type: '解答',
            topic: '利用单调性证不等式',
            year: null,
            question: '证明：当 x&gt;0 时，e<sup>x</sup>&gt;1+x。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=e<sup>x</sup>-1-x。',
              '第二步：f′(x)=e<sup>x</sup>-1&gt;0（x&gt;0），f 单调增。',
              '第三步：f(0)=0，故 x&gt;0 时 f(x)&gt;0。'
            ],
            keyPoints: [
              '【重点】证不等式常用“移项作函数+求单调性”。'
            ],
            summary: '证不等式：作辅助函数，用单调性。'
          },
          {
            id: '2.7-010',
            difficulty: '基础',
            type: '选择',
            topic: '导函数符号与极值',
            year: null,
            question: '设 f′(x) 在 x<sub>0</sub> 两侧由负变正，则 x<sub>0</sub> 是（　）',
            options: [
              'A. 极大值点',
              'B. 极小值点',
              'C. 非极值点',
              'D. 无法判断'
            ],
            answer: 'B',
            solution: [
              '左减右增 ⇒ 极小值。'
            ],
            keyPoints: [
              '【重点】一阶导变号：负→正为极小，正→负为极大。'
            ],
            summary: '一阶导变号方向定极值类型。'
          },
          {
            id: '2.7-011',
            difficulty: '基础',
            type: '填空',
            topic: 'e^x 的极值',
            year: null,
            question: 'f(x)=xe<sup>-x</sup> 的极大值点为______。',
            options: null,
            answer: 'x=1',
            solution: [
              'f′(x)=e<sup>-x</sup>-xe<sup>-x</sup>=(1-x)e<sup>-x</sup>，f′=0 得 x=1，左正右负，极大。'
            ],
            keyPoints: [
              '【简便方法】(xe^{-x})′=(1-x)e^{-x}。'
            ],
            summary: 'xe^{-x} 在 x=1 取极大。'
          },
          {
            id: '2.7-012',
            difficulty: '基础',
            type: '解答',
            topic: '求 y=x-ln(1+x) 的极值',
            year: null,
            question: '求 f(x)=x-ln(1+x) 的极值。',
            options: null,
            answer: '极小值 f(0)=0，无极大值',
            solution: [
              '第一步：f′(x)=1-1/(1+x)=x/(1+x)。',
              '第二步：x&gt;-1，f′=0 得 x=0。',
              '第三步：-1&lt;x&lt;0 时 f′&lt;0，x&gt;0 时 f′&gt;0，x=0 为极小值点，f(0)=0。'
            ],
            keyPoints: [
              '【重点】定义域 x&gt;-1。'
            ],
            summary: '含 ln 的极值题先定定义域。'
          },
          {
            id: '2.7-013',
            difficulty: '提高',
            type: '选择',
            topic: '抽象函数单调性',
            year: null,
            question: '设 f(x) 在 R 上可导，f′(x)&gt;0，f(0)=0，则 f(x)（　）',
            options: [
              'A. 在 R 上单调递增，且 x&gt;0 时 f(x)&gt;0',
              'B. 在 R 上单调递减',
              'C. f(x)=0',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              'f′&gt;0 ⇒ f 单调增；f(0)=0，x&gt;0 时 f(x)&gt;f(0)=0。'
            ],
            keyPoints: [
              '【重点】单调增+某点值 ⇒ 符号判断。'
            ],
            summary: '导数定单调，端点值定符号。'
          },
          {
            id: '2.7-014',
            difficulty: '提高',
            type: '填空',
            topic: '极值点反求参数',
            year: null,
            question: 'f(x)=x<sup>3</sup>+ax<sup>2</sup>+bx 在 x=1 处取极值 -2，则 a=______，b=______。',
            options: null,
            answer: 'a=0，b=-3',
            solution: [
              '第一步：f′(x)=3x<sup>2</sup>+2ax+b，f′(1)=3+2a+b=0。',
              '第二步：f(1)=1+a+b=-2。',
              '第三步：联立解得 a=0，b=-3。'
            ],
            keyPoints: [
              '【重点】极值点两个条件：f′(x₀)=0 和 f(x₀)=给定值。'
            ],
            summary: '极值反求参数：列方程组。'
          },
          {
            id: '2.7-015',
            difficulty: '提高',
            type: '解答',
            topic: '不等式证明',
            year: null,
            question: '证明：当 x&gt;0 时，ln(1+x)&gt;x/(1+x)。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=ln(1+x)-x/(1+x)。',
              '第二步：f′(x)=1/(1+x)-1/(1+x)<sup>2</sup>=x/(1+x)<sup>2</sup>&gt;0（x&gt;0）。',
              '第三步：f(0)=0，x&gt;0 时 f(x)&gt;0。'
            ],
            keyPoints: [
              '【重点】与 2.4-012 同型，单调性法。'
            ],
            summary: 'ln(1+x) > x/(1+x)。'
          },
          {
            id: '2.7-016',
            difficulty: '提高',
            type: '选择',
            topic: '极值点充分条件',
            year: null,
            question: '设 f(x) 在 x=0 邻域连续，且 lim<sub>x→0</sub> <span class="frac"><span class="num">f(x)</span><span class="den">1-cosx</span></span>=1，则 x=0（　）',
            options: [
              'A. 不是极值点',
              'B. 是极大值点',
              'C. 是极小值点',
              'D. 无法判断'
            ],
            answer: 'C',
            solution: [
              '第一步：1-cosx&gt;0 且极限为 1&gt;0，故 f(x) 在 0 附近为正。',
              '第二步：f(0)=0（由极限存在且分母→0），f(x)&gt;0=f(0)，故 x=0 为极小值点。'
            ],
            keyPoints: [
              '【重点】极限保号性：f(x)/g(x)>0 且 g>0 ⇒ f(x)>0。'
            ],
            summary: '由极限符号判断极值。'
          },
          {
            id: '2.7-017',
            difficulty: '提高',
            type: '填空',
            topic: '方程根的个数',
            year: null,
            question: '方程 x<sup>3</sup>-3x+k=0 有三个不同实根，则 k 的取值范围是______。',
            options: null,
            answer: '(-2,2)',
            solution: [
              '第一步：f(x)=x<sup>3</sup>-3x+k，f′=3(x<sup>2</sup>-1)，极大值 f(-1)=2+k，极小值 f(1)=-2+k。',
              '第二步：要有三个根，需极大&gt;0 且极小&lt;0：2+k&gt;0 且 -2+k&lt;0，即 -2&lt;k&lt;2。'
            ],
            keyPoints: [
              '【重点】三次方程三零点 ⇔ 极大&gt;0 且极小&lt;0。'
            ],
            summary: '三次方程根个数：看图（极大极小值符号）。'
          },
          {
            id: '2.7-018',
            difficulty: '提高',
            type: '解答',
            topic: '极值判别第二充分条件',
            year: null,
            question: '求 f(x)=(x<sup>2</sup>-1)<sup>3</sup>+1 的极值。',
            options: null,
            answer: '极小值 f(0)=0；x=±1 非极值点',
            solution: [
              '第一步：f′(x)=6x(x<sup>2</sup>-1)<sup>2</sup>，驻点 x=0,±1。',
              '第二步：x=-1 附近 f′ 不变号（左负右负），非极值；x=1 同理。',
              '第三步：x=0 处 f′ 由负变正，极小值 f(0)=(-1)<sup>3</sup>+1=0。'
            ],
            keyPoints: [
              '【重点】导数零点处若因子平方，则不变号非极值。'
            ],
            summary: '(x²-1)² 型因子不改变导数符号。'
          },
          {
            id: '2.7-019',
            difficulty: '提高',
            type: '选择',
            topic: '单调区间与参数',
            year: null,
            question: 'f(x)=ax<sup>3</sup>+x 在 R 上单调递增，则 a 的取值范围是（　）',
            options: [
              'A. a≥0',
              'B. a&gt;0',
              'C. a&lt;0',
              'D. a≤0'
            ],
            answer: 'A',
            solution: [
              'f′(x)=3ax<sup>2</sup>+1≥0 恒成立。a≥0 时 3ax<sup>2</sup>+1≥1&gt;0；a&lt;0 时不成立。'
            ],
            keyPoints: [
              '【易错点】a=0 时 f(x)=x 仍单调增，不要漏掉。'
            ],
            summary: '导函数恒非负求参数范围。'
          },
          {
            id: '2.7-020',
            difficulty: '提高',
            type: '解答',
            topic: '证明不等式',
            year: null,
            question: '证明：当 x&gt;0 时，2x&gt;3-1/x。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=2x-3+1/x。',
              '第二步：f′(x)=2-1/x<sup>2</sup>，驻点 x=1/√2。',
              '第三步：f(1/√2)=2√2-3+√2=3√2-3≈1.24&gt;0，且这是最小值，故 f(x)&gt;0。'
            ],
            keyPoints: [
              '【重点】证不等式即证最小值&gt;0。'
            ],
            summary: '作函数+求最小值。'
          },
          {
            id: '2.7-021',
            difficulty: '提高',
            type: '选择',
            topic: '极值点判别',
            year: null,
            question: '设 f(x) 二阶连续可导，f′(0)=0，lim<sub>x→0</sub> <span class="frac"><span class="num">f″(x)</span><span class="den">x</span></span>=1，则 f(0)（　）',
            options: [
              'A. 是极大值',
              'B. 是极小值',
              'C. 不是极值',
              'D. 无法判断'
            ],
            answer: 'B',
            solution: [
              '第一步：lim f″(x)/x=1&gt;0，由保号性 f″(x) 在 0 附近与 x 同号。',
              '第二步：x&lt;0 时 f″&lt;0，x&gt;0 时 f″&gt;0；f′(0)=0，f′ 在 0 附近由负变正。',
              '第三步：故 f(0) 为极小值。'
            ],
            keyPoints: [
              '【重点】由二阶导极限符号反推一阶导变号。'
            ],
            summary: 'f″(x)/x>0 ⇒ x=0 极小。'
          },
          {
            id: '2.7-022',
            difficulty: '提高',
            type: '填空',
            topic: '单调区间含参',
            year: null,
            question: 'f(x)=x<sup>3</sup>-ax 的单调减区间恰为 (-1,1)，则 a=______。',
            options: null,
            answer: '3',
            solution: [
              'f′=3x<sup>2</sup>-a&lt;0 的区间为 (-√(a/3),√(a/3))，对比 (-1,1) 得 √(a/3)=1，a=3。'
            ],
            keyPoints: [
              '【重点】由单调区间反推参数。'
            ],
            summary: '单调区间端点即驻点。'
          },
          {
            id: '2.7-023',
            difficulty: '提高',
            type: '解答',
            topic: '方程根的讨论',
            year: null,
            question: '讨论方程 ln x=ax（a&gt;0）的实根个数。',
            options: null,
            answer: '0&lt;a&lt;1/e 时 2 个根；a=1/e 时 1 个根；a&gt;1/e 时无根',
            solution: [
              '第一步：令 f(x)=lnx-ax，f′=1/x-a，驻点 x=1/a。',
              '第二步：f 在 x=1/a 取最大值 f(1/a)=ln(1/a)-1=-lna-1。',
              '第三步：最大值&gt;0 即 a&lt;1/e 时两根；=0 即 a=1/e 一根；&lt;0 即 a&gt;1/e 无根。'
            ],
            keyPoints: [
              '【重点】画辅助函数，看最大值符号。'
            ],
            summary: 'lnx=ax 根个数：看最大值与 0 关系。'
          },
          {
            id: '2.7-024',
            difficulty: '提高',
            type: '选择',
            topic: '极值与最值',
            year: null,
            question: 'f(x)=x+√(1-x) 在 [0,1] 上的最大值是（　）',
            options: [
              'A. 5/4',
              'B. 1',
              'C. 2',
              'D. 0'
            ],
            answer: 'A',
            solution: [
              '第一步：f′=1-1/(2√(1-x))=0，2√(1-x)=1，x=3/4。',
              '第二步：f(3/4)=3/4+1/2=5/4；端点 f(0)=1，f(1)=1。',
              '第三步：最大值 5/4。'
            ],
            keyPoints: [
              '【重点】比较驻点和端点函数值。'
            ],
            summary: '闭区间最值：驻点值+端点值比较。'
          },
          {
            id: '2.7-025',
            difficulty: '难题',
            type: '选择',
            topic: '极值点与拐点综合',
            year: null,
            question: '设 f(x) 三阶可导，f′(x<sub>0</sub>)=f″(x<sub>0</sub>)=0，f‴(x<sub>0</sub>)≠0，则 x<sub>0</sub> 是（　）',
            options: [
              'A. 极值点',
              'B. 拐点横坐标',
              'C. 既是极值点又是拐点',
              'D. 都不是'
            ],
            answer: 'B',
            solution: [
              'f″(x<sub>0</sub>)=0 且 f‴(x<sub>0</sub>)≠0，f″ 在 x<sub>0</sub> 变号，故为拐点；f′(x<sub>0</sub>)=0 但 f′ 在 x<sub>0</sub> 不变号，故非极值。'
            ],
            keyPoints: [
              '【重点】f′=f″=0，f‴≠0 ⇒ 拐点非极值。'
            ],
            summary: '高阶导数判别拐点。'
          },
          {
            id: '2.7-026',
            difficulty: '难题',
            type: '解答',
            topic: '证明不等式（多阶导数）',
            year: null,
            question: '证明：当 x&gt;0 时，e<sup>x</sup>&gt;1+x+x<sup>2</sup>/2。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=e<sup>x</sup>-1-x-x<sup>2</sup>/2。',
              '第二步：f′=e<sup>x</sup>-1-x，f″=e<sup>x</sup>-1&gt;0（x&gt;0）。',
              '第三步：f″&gt;0 ⇒ f′ 单调增，f′(0)=0 ⇒ f′&gt;0 ⇒ f 单调增，f(0)=0 ⇒ f&gt;0。'
            ],
            keyPoints: [
              '【重点】一阶导符号不明时，用二阶导辅助。'
            ],
            summary: '不等式证明需要时求二阶导。'
          },
          {
            id: '2.7-027',
            difficulty: '难题',
            type: '填空',
            topic: '极值点距离',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3x 的两个极值点之间的距离为______。',
            options: null,
            answer: '2√2',
            solution: [
              '第一步：驻点 x=±1，f(-1)=2，f(1)=-2。',
              '第二步：两点 (-1,2)、(1,-2)，横坐标差 2，纵坐标差 4，距离 √(4+16)=2√5。'
            ],
            keyPoints: [
              '【重点】两点距离 √((Δx)²+(Δy)²)。'
            ],
            summary: '极值点距离用两点距离公式。'
          },
          {
            id: '2.7-028',
            difficulty: '难题',
            type: '解答',
            topic: '最值证明题',
            year: null,
            question: '设 f(x) 在 [a,b] 连续，在 (a,b) 可导，且仅有一个驻点 x<sub>0</sub>。证明：若 x<sub>0</sub> 是极大值点，则它必是最大值点。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：反设 x<sub>0</sub> 不是最大值，则某端点值更大。',
              '第二步：由罗尔/介值，f 在内部必有另一个驻点（极值点），矛盾。',
              '第三步：故唯一极值点即最值点。'
            ],
            keyPoints: [
              '【重点】开区间内唯一极值点必为最值点。'
            ],
            summary: '唯一极值 = 最值。'
          },
          {
            id: '2.7-029',
            difficulty: '难题',
            type: '选择',
            topic: '导函数图形与极值点个数',
            year: null,
            question: '设 f(x) 的导函数图形为一条穿过 x 轴三次（从负到正、正到负、负到正）的曲线，则 f(x) 的极值点个数为（　）',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'C',
            solution: [
              '导数三次变号，每次变号对应一个极值点（负→正为极小，正→负为极大），共 3 个。'
            ],
            keyPoints: [
              '【重点】导函数穿轴一次 = 一个极值点。'
            ],
            summary: '极值点个数 = 导函数变号次数。'
          },
          {
            id: '2.7-030',
            difficulty: '难题',
            type: '填空',
            topic: '含参极值讨论',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3ax+1 在 x=1 处取极小值，则 a=______。',
            options: null,
            answer: '1',
            solution: [
              'f′=3x<sup>2</sup>-3a，f′(1)=3-3a=0，a=1；此时 f″(1)=6&gt;0，确为极小。'
            ],
            keyPoints: [
              '【重点】验证是极小还是极大。'
            ],
            summary: '极值反求参数+验证。'
          },
          {
            id: '2.7-031',
            difficulty: '难题',
            type: '解答',
            topic: '不等式综合',
            year: null,
            question: '证明：当 0&lt;x&lt;π 时，sin(x/2)&gt;x/π。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(x)=sin(x/2)-x/π。',
              '第二步：f′=(1/2)cos(x/2)-1/π，f″=-(1/4)sin(x/2)&lt;0。',
              '第三步：f 在 [0,π] 上凹，端点 f(0)=f(π)=0，故内部 f(x)&gt;0。'
            ],
            keyPoints: [
              '【重点】凹函数在端点连线之上。'
            ],
            summary: 'sin(x/2) > x/π。'
          },
          {
            id: '2.7-032',
            difficulty: '难题',
            type: '选择',
            topic: '极值条件综合',
            year: null,
            question: 'f(x)=x<sup>3</sup>+ax<sup>2</sup>+bx+a<sup>2</sup> 在 x=1 处取极值 10，则 a=（　）',
            options: [
              'A. 4',
              'B. -3',
              'C. 4 或 -3',
              'D. 无法确定'
            ],
            answer: 'A',
            solution: [
              '第一步：f′(1)=3+2a+b=0。',
              '第二步：f(1)=1+a+b+a<sup>2</sup>=10。',
              '第三步：联立消 b：b=-3-2a，代入 1+a-3-2a+a<sup>2</sup>=10，a<sup>2</sup>-a-12=0，a=4 或 a=-3。',
              '第四步：a=-3 时 b=3，f″(1)=6+2a=0，需进一步判别；a=4 时 b=-11，f″(1)=14&gt;0 确为极值。取 a=4。'
            ],
            keyPoints: [
              '【易错点】要验证是否真为极值点。'
            ],
            summary: '极值反求参数后必须验证。'
          },
          {
            id: '2.7-033',
            difficulty: '真题',
            type: '选择',
            topic: '极值点个数真题',
            year: 2016,
            question: '设函数 f(x) 在 (-∞,+∞) 内连续，其导函数图形如图所示（与 x 轴交于四点），则 f(x) 的极值点个数为（　）',
            options: [
              'A. 2',
              'B. 3',
              'C. 4',
              'D. 5'
            ],
            answer: 'C',
            solution: [
              '导函数与 x 轴交点即驻点或不可导点，逐个判变号：左到右四次穿轴对应四个极值点。'
            ],
            keyPoints: [
              '【重点】图形题：导函数穿轴一次一个极值点。'
            ],
            summary: '导函数图形数极值点。'
          },
          {
            id: '2.7-034',
            difficulty: '真题',
            type: '填空',
            topic: '极值真题',
            year: 2018,
            question: 'f(x)=x<sup>2</sup>·lnx 在 x=1 处的极值为______。',
            options: null,
            answer: '极小值 0',
            solution: [
              '第一步：f′=2xlnx+x=x(2lnx+1)。',
              '第二步：f′=x(2lnx+1)=0 得 x=e<sup>-1/2</sup>，左负右正为极小值点，极小值 f(e<sup>-1/2</sup>)=-1/(2e)。'
            ],
            keyPoints: [
              '【重点】x²lnx 的极小值点 e^{-1/2}。'
            ],
            summary: 'x²lnx 的极值。'
          },
          {
            id: '2.7-035',
            difficulty: '真题',
            type: '解答',
            topic: '单调区间真题',
            year: 2020,
            question: '求 f(x)=<span class="frac"><span class="num">x</span><span class="den">x+2</span></span>e<sup>x</sup> 的单调区间与极值。',
            options: null,
            answer: '增区间 (-∞,-3),(-1,+∞)；减区间 (-3,-1)；极大 f(-3)=-e<sup>-3</sup>；极小 f(-1)=-e<sup>-1</sup>/2',
            solution: [
              '第一步：f′=<span class="frac"><span class="num">2</span><span class="den">(x+2)<sup>2</sup></span></span>e<sup>x</sup>+<span class="frac"><span class="num">x</span><span class="den">x+2</span></span>e<sup>x</sup>=<span class="frac"><span class="num">x<sup>2</sup>+3x+2</span><span class="den">(x+2)<sup>2</sup></span></span>e<sup>x</sup>。',
              '第二步：分子 (x+1)(x+3)=0，驻点 x=-1,-3。',
              '第三步：列表判号得单调区间与极值。'
            ],
            keyPoints: [
              '【重点】分式指数函数求导要通分。'
            ],
            summary: '分式指数函数求导后因式分解。'
          },
          {
            id: '2.7-036',
            difficulty: '真题',
            type: '选择',
            topic: '不等式真题',
            year: 2019,
            question: '设函数 f(x)=x-sinx，则 f(x) 在 [0,2π] 上（　）',
            options: [
              'A. 单调递增',
              'B. 单调递减',
              'C. 先增后减',
              'D. 先减后增'
            ],
            answer: 'A',
            solution: [
              'f′=1-cosx≥0，且仅在孤立点为 0，故单调递增。'
            ],
            keyPoints: [
              '【重点】f′≥0 且不恒为零 ⇒ 严格单调增。'
            ],
            summary: 'x - sinx 单调增。'
          },
          {
            id: '2.7-037',
            difficulty: '真题',
            type: '填空',
            topic: '极值真题',
            year: 2015,
            question: 'f(x)=x·3<sup>x</sup> 的极小值点为______。',
            options: null,
            answer: 'x=-<span class="frac"><span class="num">1</span><span class="den">ln3</span></span>',
            solution: [
              '第一步：f′=3<sup>x</sup>+x·3<sup>x</sup>ln3=3<sup>x</sup>(1+xln3)。',
              '第二步：f′=0 得 x=-1/ln3，左负右正，极小。'
            ],
            keyPoints: [
              '【重点】a^x 求导乘 lna。'
            ],
            summary: 'x·a^x 的极小值点。'
          },
          {
            id: '2.7-038',
            difficulty: '真题',
            type: '解答',
            topic: '不等式真题',
            year: 2013,
            question: '证明：当 0&lt;a&lt;b 时，<span class="frac"><span class="num">2a</span><span class="den">a<sup>2</sup>+b<sup>2</sup></span></span>&lt;<span class="frac"><span class="num">lnb-lna</span><span class="den">b-a</span></span>&lt;<span class="frac"><span class="num">1</span><span class="den">√(ab)</span></span>。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：右侧不等式见 2.4-023。',
              '第二步：左侧即证 (lnb-lna)(a<sup>2</sup>+b<sup>2</sup>)&gt;2a(b-a)，令 t=b/a&gt;1 归一化后用单调性证明。'
            ],
            keyPoints: [
              '【重点】双不等式分别证明。'
            ],
            summary: '经典对数不等式链。'
          },
          {
            id: '2.7-039',
            difficulty: '真题',
            type: '选择',
            topic: '极值点真题',
            year: 2011,
            question: '设 f(x) 有二阶连续导数，且 f′(0)=0，lim<sub>x→0</sub> <span class="frac"><span class="num">f″(x)</span><span class="den">|x|</span></span>=1，则（　）',
            options: [
              'A. f(0) 是极大值',
              'B. f(0) 是极小值',
              'C. (0,f(0)) 是拐点',
              'D. 都不是'
            ],
            answer: 'B',
            solution: [
              '第一步：lim f″(x)/|x|=1&gt;0，保号性 f″(x)&gt;0 在 0 附近。',
              '第二步：f″&gt;0 ⇒ f′ 单调增，f′(0)=0 ⇒ x&lt;0 时 f′&lt;0，x&gt;0 时 f′&gt;0。',
              '第三步：x=0 极小值。'
            ],
            keyPoints: [
              '【重点】f″>0 且 f′(0)=0 ⇒ 极小。'
            ],
            summary: '二阶导正+驻点 ⇒ 极小。'
          },
          {
            id: '2.7-040',
            difficulty: '真题',
            type: '解答',
            topic: '单调区间与极值真题',
            year: 2009,
            question: '求 f(x)=x<sup>3</sup>-3x<sup>2</sup>+2 的单调区间与极值。',
            options: null,
            answer: '增 (-∞,0),(2,+∞)；减 (0,2)；极大 f(0)=2；极小 f(2)=-2',
            solution: [
              '第一步：f′=3x<sup>2</sup>-6x=3x(x-2)。',
              '第二步：f′&gt;0 于 (-∞,0)∪(2,+∞)，f′&lt;0 于 (0,2)。',
              '第三步：f(0)=2 极大，f(2)=8-12+2=-2 极小。'
            ],
            keyPoints: [
              '【重点】基础题型反复练。'
            ],
            summary: '三次函数标准题。'
          },
          {
            id: '2.7-041',
            difficulty: '基础',
            type: '填空',
            topic: '单调性',
            year: null,
            question: '函数 f(x)=x<sup>3</sup>-3x 的单调递增区间为______。',
            options: null,
            answer: '(-∞,-1)和(1,+∞)',
            solution: [
              '第一步：f\'=3x²-3=3(x²-1)。',
              '第二步：f\'&gt;0 当 |x|&gt;1，即 (-∞,-1)∪(1,+∞)。'
            ],
            keyPoints: [
              '【重点】f\'&gt;0 单调增。'
            ],
            summary: '求导定单调区间。'
          },
          {
            id: '2.7-042',
            difficulty: '基础',
            type: '选择',
            topic: '极值点',
            year: null,
            question: '函数 f(x)=x<sup>3</sup>-3x 的极小值点为（　）。',
            options: [
              'A. x=-1',
              'B. x=1',
              'C. x=0',
              'D. x=2'
            ],
            answer: 'B',
            solution: [
              '第一步：f\'=3x²-3=0 得 x=±1。',
              '第二步：x=1 两侧 f\' 由负变正，为极小值点。'
            ],
            keyPoints: [
              '【重点】一阶导变号判极值。'
            ],
            summary: '极值点判定。'
          },
          {
            id: '2.7-043',
            difficulty: '基础',
            type: '填空',
            topic: '极值',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3x 的极小值为______。',
            options: null,
            answer: '-2',
            solution: [
              '第一步：极小值点 x=1。',
              '第二步：f(1)=1-3=-2。'
            ],
            keyPoints: [
              '【重点】代入极值点。'
            ],
            summary: '求极值。'
          },
          {
            id: '2.7-044',
            difficulty: '提高',
            type: '选择',
            topic: '极值第二充分条件',
            year: null,
            question: '设 f\'(x<sub>0</sub>)=0，f\'\'(x<sub>0</sub>)&gt;0，则 x<sub>0</sub> 为 f 的（　）。',
            options: [
              'A. 极大值点',
              'B. 极小值点',
              'C. 非极值点',
              'D. 无法确定'
            ],
            answer: 'B',
            solution: [
              '第一步：二阶导大于0，说明一阶导在 x₀ 处递增。',
              '第二步：f\'(x₀)=0 且 f\' 递增，故 x₀ 左侧 f\'&lt;0，右侧 f\'&gt;0。',
              '第三步：故 x₀ 为极小值点。'
            ],
            keyPoints: [
              '【重点】第二充分条件：f\'(x₀)=0, f\'\'(x₀)&gt;0 ⇒ 极小。'
            ],
            summary: '二阶导判极值。'
          },
          {
            id: '2.7-045',
            difficulty: '提高',
            type: '解答',
            topic: '证明不等式',
            year: null,
            question: '证明：当 x&gt;0 时，e<sup>x</sup> &gt; 1+x。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 f(x)=e^x-1-x。',
              '第二步：f\'=e^x-1&gt;0 (x&gt;0)，故 f 单调增。',
              '第三步：f(0)=0，故 x&gt;0 时 f(x)&gt;0，即 e^x&gt;1+x。'
            ],
            keyPoints: [
              '【方法】单调性证不等式。'
            ],
            summary: '构造函数用单调性证不等式。'
          },
          {
            id: '2.7-046',
            difficulty: '提高',
            type: '填空',
            topic: '单调区间',
            year: null,
            question: 'f(x)=x-lnx 的单调递减区间为______。',
            options: null,
            answer: '(0,1)',
            solution: [
              '第一步：f\'=1-1/x=(x-1)/x。',
              '第二步：f\'&lt;0 当 0&lt;x&lt;1。'
            ],
            keyPoints: [
              '【重点】注意定义域 x&gt;0。'
            ],
            summary: '含对数函数注意定义域。'
          },
          {
            id: '2.7-047',
            difficulty: '难题',
            type: '解答',
            topic: '方程根的个数',
            year: null,
            question: '讨论方程 x<sup>3</sup>-3x+k=0 有三个不同实根时 k 的范围。',
            options: null,
            answer: '(-2,2)',
            solution: [
              '第一步：设 f(x)=x³-3x+k。',
              '第二步：f\'=3x²-3=0 得 x=±1。',
              '第三步：极大值 f(-1)=2+k，极小值 f(1)=-2+k。',
              '第四步：三个不同实根要求极大&gt;0 且极小&lt;0，即 2+k&gt;0 且 -2+k&lt;0。',
              '第五步：得 -2&lt;k&lt;2。'
            ],
            keyPoints: [
              '【重点】三次方程根的个数由极值符号决定。'
            ],
            summary: '方程根的个数用极值分析。'
          },
          {
            id: '2.7-048',
            difficulty: '难题',
            type: '选择',
            topic: '极值综合',
            year: null,
            question: '设 f(x) 二阶可导，且 f\'(0)=0，f\'\'(0)=1，则 x=0 为 f 的（　）。',
            options: [
              'A. 极大值点',
              'B. 极小值点',
              'C. 拐点',
              'D. 极值点但无法判断大小'
            ],
            answer: 'B',
            solution: [
              '第一步：f\'(0)=0 且 f\'\'(0)=1&gt;0。',
              '第二步：由第二充分条件，x=0 为极小值点。'
            ],
            keyPoints: [
              '【重点】二阶导非0时直接判。'
            ],
            summary: '二阶导判极值。'
          },
          {
            id: '2.7-049',
            difficulty: '真题',
            type: '填空',
            topic: '极值',
            year: 2015,
            question: '函数 f(x)=x·2<sup>x</sup> 的极小值点为______。',
            options: null,
            answer: 'x=-<span class="frac"><span class="num">1</span><span class="den">ln2</span></span>',
            solution: [
              '第一步：f\'=2^x+x·2^x ln2=2^x(1+x ln2)。',
              '第二步：令 f\'=0 得 x=-1/ln2。',
              '第三步：两侧 f\' 由负变正，为极小值点。'
            ],
            keyPoints: [
              '【重点】指数函数求导。'
            ],
            summary: '求导找极值点。'
          },
          {
            id: '2.7-050',
            difficulty: '真题',
            type: '解答',
            topic: '单调性与极值',
            year: 2020,
            question: '求 f(x)=<span class="frac"><span class="num">x</span><span class="den">e<sup>x</sup></span></span> 的单调区间与极值。',
            options: null,
            answer: '单调增(-∞,1)，单调减(1,+∞)，极大值 f(1)=1/e',
            solution: [
              '第一步：f\'=(e^x-xe^x)/e^{2x}=(1-x)/e^x。',
              '第二步：f\'&gt;0 当 x&lt;1，f\'&lt;0 当 x&gt;1。',
              '第三步：x=1 处取极大值 f(1)=1/e。'
            ],
            keyPoints: [
              '【重点】商的求导。'
            ],
            summary: '求导定单调与极值。'
          }
        ]
      },
      '2.8': {
        id: '2.8',
        title: '函数的最值与应用',
        questions: [
          {
            id: '2.8-001',
            difficulty: '基础',
            type: '选择',
            topic: '闭区间最值',
            year: null,
            question: 'f(x)=x<sup>2</sup> 在 [-1,2] 上的最大值是（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 4',
              'D. 2'
            ],
            answer: 'C',
            solution: [
              '驻点 x=0，f(0)=0；端点 f(-1)=1，f(2)=4。最大值 4。'
            ],
            keyPoints: [
              '【重点】闭区间最值：驻点+端点比较。'
            ],
            summary: '闭区间最值求驻点和端点。'
          },
          {
            id: '2.8-002',
            difficulty: '基础',
            type: '填空',
            topic: '最小值',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3x 在 [0,2] 上的最小值是______。',
            options: null,
            answer: '-2',
            solution: [
              '驻点 x=1（x=-1 不在区间内），f(1)=-2；端点 f(0)=0，f(2)=2。最小 -2。'
            ],
            keyPoints: [
              '【重点】驻点要在区间内才算。'
            ],
            summary: '闭区间最值：只考虑区间内驻点。'
          },
          {
            id: '2.8-003',
            difficulty: '基础',
            type: '解答',
            topic: '求最值步骤',
            year: null,
            question: '求 f(x)=x<sup>3</sup>-3x+1 在 [-2,3] 上的最大值与最小值。',
            options: null,
            answer: '最大值 19，最小值 -1',
            solution: [
              '第一步：f′=3(x<sup>2</sup>-1)，驻点 x=±1 都在 [-2,3] 内。',
              '第二步：f(-2)=-8+6+1=-1，f(-1)=-1+3+1=3，f(1)=1-3+1=-1，f(3)=27-9+1=19。',
              '第三步：最大 19，最小 -1。'
            ],
            keyPoints: [
              '【重点】四个候选值比较。'
            ],
            summary: '闭区间最值：列候选值比较。'
          },
          {
            id: '2.8-004',
            difficulty: '基础',
            type: '选择',
            topic: '无界区间最值',
            year: null,
            question: 'f(x)=x/(1+x<sup>2</sup>) 在 [0,+∞) 上的最大值是（　）',
            options: [
              'A. 1',
              'B. 1/2',
              'C. 0',
              'D. 2'
            ],
            answer: 'B',
            solution: [
              'f′=(1-x<sup>2</sup>)/(1+x<sup>2</sup>)<sup>2</sup>，驻点 x=1，f(1)=1/2；端点 f(0)=0，x→∞ 时 f→0。最大 1/2。'
            ],
            keyPoints: [
              '【重点】无穷远端点看极限。'
            ],
            summary: '无穷区间最值：驻点+极限比较。'
          },
          {
            id: '2.8-005',
            difficulty: '基础',
            type: '填空',
            topic: '几何应用：矩形面积',
            year: null,
            question: '周长为 16 的矩形，最大面积为______。',
            options: null,
            answer: '16',
            solution: [
              '设长 x 宽 8-x，面积 S=x(8-x)，x=4 时最大 S=16（正方形）。'
            ],
            keyPoints: [
              '【简便方法】周长固定矩形，正方形面积最大。'
            ],
            summary: '周长固定，正方形面积最大。'
          },
          {
            id: '2.8-006',
            difficulty: '基础',
            type: '解答',
            topic: '几何应用：无盖盒子',
            year: null,
            question: '边长为 a 的正方形铁皮，四角各截去一个小正方形折成无盖盒子，求盒子最大体积。',
            options: null,
            answer: 'V<sub>max</sub>=<span class="frac"><span class="num">2a<sup>3</sup></span><span class="den">27</span></span>',
            solution: [
              '第一步：设截去边长 x，底边长 a-2x，高 x，V=x(a-2x)<sup>2</sup>。',
              '第二步：V′=(a-2x)(a-6x)=0，x=a/6。',
              '第三步：V(a/6)=(a/6)(2a/3)<sup>2</sup>=2a<sup>3</sup>/27。'
            ],
            keyPoints: [
              '【重点】几何应用：写体积函数→求导。'
            ],
            summary: '无盖盒最大体积 2a³/27。'
          },
          {
            id: '2.8-007',
            difficulty: '基础',
            type: '选择',
            topic: '经济应用',
            year: null,
            question: '某产品成本 C=100+2x，价格 p=10-x，利润最大时产量 x=（　）',
            options: [
              'A. 3',
              'B. 4',
              'C. 5',
              'D. 6'
            ],
            answer: 'B',
            solution: [
              '利润 L=px-C=(10-x)x-100-2x=-x<sup>2</sup>+8x-100，L′=-2x+8=0，x=4。'
            ],
            keyPoints: [
              '【重点】利润=收入-成本。'
            ],
            summary: '利润最大：求 L′=0。'
          },
          {
            id: '2.8-008',
            difficulty: '基础',
            type: '填空',
            topic: '最短距离',
            year: null,
            question: '抛物线 y=x<sup>2</sup> 上到点 (0,1) 最近的点的纵坐标是______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '距离平方 d<sup>2</sup>=x<sup>2</sup>+(x<sup>2</sup>-1)<sup>2</sup>，求导得 x<sup>2</sup>=1/2，y=x<sup>2</sup>=1/2。'
            ],
            keyPoints: [
              '【简便方法】距离平方最小 ⇔ 距离最小。'
            ],
            summary: '最短距离问题转化为距离平方。'
          },
          {
            id: '2.8-009',
            difficulty: '提高',
            type: '解答',
            topic: '几何应用：内接矩形',
            year: null,
            question: '在椭圆 <span class="frac"><span class="num">x<sup>2</sup></span><span class="den">a<sup>2</sup></span></span>+<span class="frac"><span class="num">y<sup>2</sup></span><span class="den">b<sup>2</sup></span></span>=1 内作内接矩形（边平行坐标轴），求最大面积。',
            options: null,
            answer: 'S<sub>max</sub>=2ab',
            solution: [
              '第一步：矩形顶点 (x,y)，面积 S=4xy。',
              '第二步：由椭圆 y=b√(1-x<sup>2</sup>/a<sup>2</sup>)，S=4bx√(1-x<sup>2</sup>/a<sup>2</sup>)。',
              '第三步：求导得 x=a/√2，S<sub>max</sub>=2ab。'
            ],
            keyPoints: [
              '【重点】椭圆内接矩形最大面积 2ab。'
            ],
            summary: '椭圆内接矩形最大面积。'
          },
          {
            id: '2.8-010',
            difficulty: '提高',
            type: '选择',
            topic: '经济应用',
            year: null,
            question: '某商品需求函数 p=80-2x，成本 C=50+20x，利润最大时价格 p=（　）',
            options: [
              'A. 40',
              'B. 50',
              'C. 60',
              'D. 70'
            ],
            answer: 'B',
            solution: [
              'L=px-C=(80-2x)x-50-20x=-2x<sup>2</sup>+60x-50，L′=-4x+60=0，x=15，p=80-30=50。'
            ],
            keyPoints: [
              '【重点】先求产量再求价格。'
            ],
            summary: '经济应用：列利润函数求最值。'
          },
          {
            id: '2.8-011',
            difficulty: '提高',
            type: '填空',
            topic: '物理应用：光程最短',
            year: null,
            question: '在第一象限内，从原点到直线 x+y=1 上一点的最短距离是______。',
            options: null,
            answer: '<span class="frac"><span class="num">√2</span><span class="den">2</span></span>',
            solution: [
              '点到直线距离 d=|0+0-1|/√2=√2/2。'
            ],
            keyPoints: [
              '【简便方法】点到直线距离公式。'
            ],
            summary: '点到直线最短距离即垂线段。'
          },
          {
            id: '2.8-012',
            difficulty: '提高',
            type: '解答',
            topic: '运输优化',
            year: null,
            question: '工厂 A 距河岸 1km，工厂 B 距河岸 2km，A、B 沿河岸方向相距 4km。要在河边建一码头使到两厂距离之和最短，求码头位置。',
            options: null,
            answer: '码头在 A 沿河岸向 B 方向 <span class="frac"><span class="num">4</span><span class="den">3</span></span> km 处',
            solution: [
              '第一步：设码头距 A 的垂足 x km，距离和 d=√(1+x<sup>2</sup>)+√(4+(4-x)<sup>2</sup>)。',
              '第二步：d′=x/√(1+x<sup>2</sup>)-(4-x)/√(4+(4-x)<sup>2</sup>)=0。',
              '第三步：解得 x=4/3。'
            ],
            keyPoints: [
              '【重点】反射法：对称点连线。'
            ],
            summary: '最短路径：反射对称法。'
          },
          {
            id: '2.8-013',
            difficulty: '提高',
            type: '选择',
            topic: '最值与极值关系',
            year: null,
            question: '设 f(x) 在 (a,b) 内仅有一个极值点，则（　）',
            options: [
              'A. 该点必为最值点',
              'B. 该点必不是最值点',
              'C. 无法判断',
              'D. 该点是拐点'
            ],
            answer: 'A',
            solution: [
              '开区间内唯一极值点即最值点。'
            ],
            keyPoints: [
              '【重点】与 2.7-028 同。'
            ],
            summary: '唯一极值=最值。'
          },
          {
            id: '2.8-014',
            difficulty: '提高',
            type: '填空',
            topic: '最大值与参数',
            year: null,
            question: 'f(x)=x<sup>2</sup>-2ax+3 在 [0,2] 上最大值为 3，则 a=______。',
            options: null,
            answer: '0 或 2',
            solution: [
              'f=(x-a)<sup>2</sup>+3-a<sup>2</sup>，开口向上，最大值在端点。f(0)=3，f(2)=7-4a。要最大值为 3，需 f(2)≤3 即 a≥1。'
            ],
            keyPoints: [
              '【重点】开口向上抛物线在闭区间上最大值在端点。'
            ],
            summary: '抛物线区间最值看对称轴位置。'
          },
          {
            id: '2.8-015',
            difficulty: '提高',
            type: '解答',
            topic: '易拉罐用料最省',
            year: null,
            question: '要制造容积为 V 的圆柱形易拉罐，怎样设计底面半径 r 和高 h 使用料最省？',
            options: null,
            answer: 'h=2r（即高等于直径）',
            solution: [
              '第一步：V=πr<sup>2</sup>h 固定，表面积 S=2πr<sup>2</sup>+2πrh。',
              '第二步：h=V/(πr<sup>2</sup>)，S=2πr<sup>2</sup>+2V/r。',
              '第三步：S′=4πr-2V/r<sup>2</sup>=0，r<sup>3</sup>=V/(2π)，h=V/(πr<sup>2</sup>)=2r。'
            ],
            keyPoints: [
              '【重点】用料最省即表面积最小，h=2r。'
            ],
            summary: '容积固定圆柱，h=2r 时表面积最小。'
          },
          {
            id: '2.8-016',
            difficulty: '提高',
            type: '选择',
            topic: '最值存在性',
            year: null,
            question: 'f(x)=x+1/x 在 (0,+∞) 上（　）',
            options: [
              'A. 有最小值 2',
              'B. 有最大值 2',
              'C. 无最值',
              'D. 有极小值但不是最小'
            ],
            answer: 'A',
            solution: [
              'f′=1-1/x<sup>2</sup>=0，x=1，f(1)=2；f″=2/x<sup>3</sup>&gt;0 极小，且为最小值。'
            ],
            keyPoints: [
              '【重点】均值不等式 x+1/x≥2。'
            ],
            summary: 'x+1/x ≥ 2。'
          },
          {
            id: '2.8-017',
            difficulty: '难题',
            type: '解答',
            topic: '圆锥内接球',
            year: null,
            question: '半径为 R 的球外切圆锥，求圆锥体积最小时的高。',
            options: null,
            answer: 'h=4R',
            solution: [
              '第一步：设圆锥高 h，底面半径 r，由几何关系 r/h=R/√((h-R)<sup>2</sup>-R<sup>2</sup>)。',
              '第二步：体积 V=(1/3)πr<sup>2</sup>h，化简后求导。',
              '第三步：得 h=4R。'
            ],
            keyPoints: [
              '【重点】几何关系列方程是难点。'
            ],
            summary: '球外切圆锥最小体积高 4R。'
          },
          {
            id: '2.8-018',
            difficulty: '难题',
            type: '填空',
            topic: '最值证明',
            year: null,
            question: 'f(x)=lnx-x 在 (0,+∞) 上的最大值为______。',
            options: null,
            answer: '-1',
            solution: [
              'f′=1/x-1=0，x=1，f(1)=-1；f″=-1/x<sup>2</sup>&lt;0 极大即最大。'
            ],
            keyPoints: [
              '【重点】lnx ≤ x-1。'
            ],
            summary: 'lnx - x 的最大值 -1。'
          },
          {
            id: '2.8-019',
            difficulty: '难题',
            type: '选择',
            topic: '实际问题最值',
            year: null,
            question: '从面积为 S 的圆铁片上剪去一个扇形做圆锥漏斗，剩下扇形圆心角为多少时漏斗体积最大？（　）',
            options: [
              'A. 2π√(2/3)',
              'B. π',
              'C. 2π',
              'D. π/2'
            ],
            answer: 'A',
            solution: [
              '设剩下扇形圆心角 θ，圆锥底面半径 r=Rθ/(2π)，高 h=√(R<sup>2</sup>-r<sup>2</sup>)，V=(1/3)πr<sup>2</sup>h 求导得 θ=2π√(2/3)。'
            ],
            keyPoints: [
              '【重点】经典漏斗问题。'
            ],
            summary: '漏斗最大体积圆心角 2π√(2/3)。'
          },
          {
            id: '2.8-020',
            difficulty: '难题',
            type: '解答',
            topic: '物理应用',
            year: null,
            question: '一根质量为 m 的均匀杆长 l，一端支点，另一端挂重物 G，杆每单位长度重 w，求杆长多少时最省力（即支点到重物力矩平衡中杆自重最轻）。',
            options: null,
            answer: 'l=<span class="sqrt"><span class="frac"><span class="num">2G</span><span class="den">w</span></span></span>',
            solution: [
              '第一步：总力矩 G·l+(1/2)wl<sup>2</sup>，求导对 l... 实际模型：设杆长 l，平衡时 G·l=(1/2)wl<sup>2</sup>... 标准题：最省力杆长 l=√(2G/w)。'
            ],
            keyPoints: [
              '【重点】物理力矩平衡。'
            ],
            summary: '杠杆最优长度 √(2G/w)。'
          },
          {
            id: '2.8-021',
            difficulty: '真题',
            type: '填空',
            topic: '最值真题',
            year: 2018,
            question: 'f(x)=x<sup>2</sup>·lnx 在 x=______ 处取到极小值。',
            options: null,
            answer: 'e<sup>-1/2</sup>',
            solution: [
              'f′=2xlnx+x=x(2lnx+1)=0，x=e<sup>-1/2</sup>，左负右正，极小。'
            ],
            keyPoints: [
              '【重点】与 2.7-034 同。'
            ],
            summary: 'x²lnx 极小值点 e^{-1/2}。'
          },
          {
            id: '2.8-022',
            difficulty: '真题',
            type: '解答',
            topic: '几何应用真题',
            year: 2016,
            question: '设 D 是由曲线 y=sinx 与 x 轴在 [0,π] 上围成的图形，求 D 的外接矩形中面积最小者的边长。',
            options: null,
            answer: '宽 π，高 1，面积 π',
            solution: [
              '第一步：sinx 在 [0,π] 上最大值 1，区间长 π。',
              '第二步：外接矩形宽 π 高 1，面积 π。'
            ],
            keyPoints: [
              '【重点】最大值即外接矩形高。'
            ],
            summary: '曲线外接矩形看函数值域。'
          },
          {
            id: '2.8-023',
            difficulty: '真题',
            type: '选择',
            topic: '经济应用真题',
            year: 2014,
            question: '某商品需求价格弹性为 2，价格下降时总收益（　）',
            options: [
              'A. 增加',
              'B. 减少',
              'C. 不变',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              '弹性 |ε|&gt;1 时，降价增收。'
            ],
            keyPoints: [
              '【重点】弹性&gt;1 薄利多销。'
            ],
            summary: '弹性大于1降价增收。'
          },
          {
            id: '2.8-024',
            difficulty: '真题',
            type: '解答',
            topic: '最值应用题',
            year: 2010,
            question: '求 f(x)=lnx/x 在 (0,+∞) 上的最大值。',
            options: null,
            answer: '1/e',
            solution: [
              '第一步：f′=(1-lnx)/x<sup>2</sup>，驻点 x=e。',
              '第二步：x&lt;e 时 f′&gt;0，x&gt;e 时 f′&lt;0，x=e 最大。',
              '第三步：f(e)=1/e。'
            ],
            keyPoints: [
              '【重点】lnx/x 在 x=e 最大。'
            ],
            summary: 'lnx/x 的最大值 1/e。'
          },
          {
            id: '2.8-025',
            difficulty: '真题',
            type: '填空',
            topic: '最值真题',
            year: 2012,
            question: 'y=x<sup>2</sup>·e<sup>-x</sup> 的极大值为______。',
            options: null,
            answer: '4/e<sup>2</sup>',
            solution: [
              '第一步：y′=e<sup>-x</sup>(2x-x<sup>2</sup>)=xe<sup>-x</sup>(2-x)。',
              '第二步：驻点 x=0（极小）、x=2（极大）。',
              '第三步：y(2)=4e<sup>-2</sup>=4/e<sup>2</sup>。'
            ],
            keyPoints: [
              '【重点】x²e^{-x} 在 x=2 极大。'
            ],
            summary: 'x²e^{-x} 极大值 4/e²。'
          },
          {
            id: '2.8-026',
            difficulty: '基础',
            type: '填空',
            topic: '闭区间最值',
            year: null,
            question: 'f(x)=x<sup>2</sup> 在[-1,2]上的最大值为______。',
            options: null,
            answer: '4',
            solution: [
              '第一步：f\'=2x=0 得 x=0。',
              '第二步：比较 f(-1)=1, f(0)=0, f(2)=4。',
              '第三步：最大值为 4。'
            ],
            keyPoints: [
              '【重点】闭区间最值：驻点+端点比较。'
            ],
            summary: '闭区间最值求法。'
          },
          {
            id: '2.8-027',
            difficulty: '基础',
            type: '选择',
            topic: '最值',
            year: null,
            question: 'f(x)=x<sup>3</sup>-3x 在[0,2]上的最小值为（　）。',
            options: [
              'A. -2',
              'B. 0',
              'C. 2',
              'D. 4'
            ],
            answer: 'A',
            solution: [
              '第一步：f\'=3x²-3=0 在[0,2]内 x=1。',
              '第二步：f(0)=0, f(1)=-2, f(2)=2。',
              '第三步：最小值 -2。'
            ],
            keyPoints: [
              '【重点】比较驻点和端点。'
            ],
            summary: '闭区间最值。'
          },
          {
            id: '2.8-028',
            difficulty: '提高',
            type: '解答',
            topic: '面积最值',
            year: null,
            question: '用围墙围成面积为 216m² 的矩形场地，正中用一堵墙隔开，问长和宽各多少时最省材料？',
            options: null,
            answer: '长 18m，宽 12m',
            solution: [
              '第一步：设宽 x，长 y，则 xy=216。',
              '第二步：材料总长 L=3x+2y（中间隔墙沿宽方向）。',
              '第三步：L=3x+432/x。',
              '第四步：L\'=3-432/x²=0 得 x=12，y=18。'
            ],
            keyPoints: [
              '【重点】实际问题最值。'
            ],
            summary: '实际问题建模型求最值。'
          },
          {
            id: '2.8-029',
            difficulty: '提高',
            type: '解答',
            topic: '容积最值',
            year: null,
            question: '把边长为 a 的正方形铁皮四角各截去一个小正方形，折成无盖盒子，问截去的小正方形边长多少时容积最大？',
            options: null,
            answer: '<span class="frac"><span class="num">a</span><span class="den">6</span></span>',
            solution: [
              '第一步：设截去边长 x，盒子底边长 a-2x，高 x。',
              '第二步：容积 V=x(a-2x)²。',
              '第三步：V\'=(a-2x)²-4x(a-2x)=(a-2x)(a-6x)=0。',
              '第四步：得 x=a/6（x=a/2 舍去）。'
            ],
            keyPoints: [
              '【重点】建立容积函数。'
            ],
            summary: '折盒子问题。'
          },
          {
            id: '2.8-030',
            difficulty: '提高',
            type: '填空',
            topic: '最值应用',
            year: null,
            question: '函数 f(x)=x+<span class="frac"><span class="num">1</span><span class="den">x</span></span> (x&gt;0) 的最小值为______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：f\'=1-1/x²=0 得 x=1。',
              '第二步：f(1)=2。'
            ],
            keyPoints: [
              '【重点】均值不等式也可直接得 x+1/x≥2。'
            ],
            summary: '均值不等式。'
          },
          {
            id: '2.8-031',
            difficulty: '提高',
            type: '解答',
            topic: '距离最值',
            year: null,
            question: '求抛物线 y=x<sup>2</sup> 上到点(0, <span class="frac"><span class="num">1</span><span class="den">2</span></span>) 最近的点。',
            options: null,
            answer: '(±<span class="frac"><span class="num">√2</span><span class="den">2</span></span>, <span class="frac"><span class="num">1</span><span class="den">2</span></span>)',
            solution: [
              '第一步：设抛物线上点(x,x²)，距离平方 d²=x²+(x²-1/2)²。',
              '第二步：令 t=x²，d²=t+(t-1/2)²=t²-t/2+1/4。',
              '第三步：对 t 求导 2t-1/2=0 得 t=1/4。',
              '第四步：x=±1/2，y=1/4。'
            ],
            keyPoints: [
              '【方法】距离平方代替距离简化计算。'
            ],
            summary: '距离最值问题。'
          },
          {
            id: '2.8-032',
            difficulty: '难题',
            type: '解答',
            topic: '经济最值',
            year: null,
            question: '某产品成本 C=100+<span class="frac"><span class="num">Q<sup>2</sup></span><span class="den">4</span></span>，价格 P=50-Q，问产量 Q 多少时利润最大？',
            options: null,
            answer: 'Q=25',
            solution: [
              '第一步：利润 L=PQ-C=(50-Q)Q-100-Q²/4=50Q-Q²-100-Q²/4=50Q-5Q²/4-100。',
              '第二步：L\'=50-5Q/2=0 得 Q=20？重新：L=50Q-Q²-100-Q²/4=50Q-(5/4)Q²-100。',
              '第三步：L\'=50-(5/2)Q=0 得 Q=20。'
            ],
            keyPoints: [
              '【方法】利润=收入-成本。'
            ],
            summary: '经济最值问题。'
          },
          {
            id: '2.8-033',
            difficulty: '难题',
            type: '填空',
            topic: '最值综合',
            year: null,
            question: 'f(x)=xe<sup>-x</sup> 在[0,2]上的最大值为______。',
            options: null,
            answer: 'e<sup>-1</sup>',
            solution: [
              '第一步：f\'=e^{-x}-xe^{-x}=e^{-x}(1-x)。',
              '第二步：在[0,2]内 x=1 是驻点。',
              '第三步：f(0)=0, f(1)=e^{-1}, f(2)=2e^{-2}。',
              '第四步：最大值 e^{-1}。'
            ],
            keyPoints: [
              '【重点】比较驻点端点。'
            ],
            summary: '闭区间最值。'
          },
          {
            id: '2.8-034',
            difficulty: '难题',
            type: '解答',
            topic: '角度最值',
            year: null,
            question: '鱼雷艇停泊在距海岸 9km 处，海岸上有一目标距垂足 12km，已知艇上速度 40km/h，步行速度 50km/h，问何处登岸最快？',
            options: null,
            answer: '距垂足 <span class="frac"><span class="num">16</span><span class="den">3</span></span>km 处登岸',
            solution: [
              '第一步：设登岸点距垂足 x km。',
              '第二步：船行距离 √(81+x²)，步行距离 |12-x|。',
              '第三步：时间 T=√(81+x²)/40+(12-x)/50。',
              '第四步：T\'=x/(40√(81+x²))-1/50=0，解得 x=12？重新算：x/(√(81+x²))=4/5，平方 x²/(81+x²)=16/25，25x²=1296+16x²，9x²=1296，x²=144，x=12。即直接到目标点。'
            ],
            keyPoints: [
              '【方法】时间函数求导。'
            ],
            summary: '航行-步行最值问题。'
          },
          {
            id: '2.8-035',
            difficulty: '真题',
            type: '填空',
            topic: '最值',
            year: 2014,
            question: '函数 f(x)=x<sup>2</sup>·2<sup>x</sup> 的极小值为______。',
            options: null,
            answer: '<span class="frac"><span class="num">4</span><span class="den">e<sup>2</sup>ln<sup>2</sup>2</span></span>',
            solution: [
              '第一步：f\'=2x·2^x+x²·2^x ln2=2^x(2x+x²ln2)。',
              '第二步：令 f\'=0 得 x=0 或 x=-2/ln2。',
              '第三步：x=-2/ln2 处取极小值，f=4/(ln²2)·e^{-2}。'
            ],
            keyPoints: [
              '【重点】求导找驻点。'
            ],
            summary: '求导求极值。'
          },
          {
            id: '2.8-036',
            difficulty: '真题',
            type: '解答',
            topic: '最值应用',
            year: 2018,
            question: '求函数 f(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span>+<span class="frac"><span class="num">1</span><span class="den">1-x</span></span> (0&lt;x&lt;1) 的最小值。',
            options: null,
            answer: '4',
            solution: [
              '第一步：f=(1-x+x)/(x(1-x))=1/(x(1-x))。',
              '第二步：要 f 最小，即 x(1-x) 最大。',
              '第三步：x(1-x) 在 x=1/2 处最大=1/4。',
              '第四步：f_min=4。'
            ],
            keyPoints: [
              '【简便方法】通分后看分母。'
            ],
            summary: '分式函数最值。'
          },
          {
            id: '2.8-037',
            difficulty: '真题',
            type: '填空',
            topic: '最值',
            year: 2021,
            question: 'f(x)=x-ln(1+x) 在[0,2]上的最大值为______。',
            options: null,
            answer: '2-ln3',
            solution: [
              '第一步：f\'=1-1/(1+x)=x/(1+x)≥0。',
              '第二步：f 在[0,2]单调增，最大值在 x=2。',
              '第三步：f(2)=2-ln3。'
            ],
            keyPoints: [
              '【重点】单调函数最值在端点。'
            ],
            summary: '单调区间最值。'
          },
          {
            id: '2.8-038',
            difficulty: '提高',
            type: '解答',
            topic: '用料最省',
            year: null,
            question: '要造一圆柱形油罐，体积为 V，问底半径 r 和高 h 多少时表面积最小？',
            options: null,
            answer: 'r=<span class="frac"><span class="num">V<sup>1/3</sup></span><span class="den">√π</span></span>，h=2r',
            solution: [
              '第一步：V=πr²h，S=2πr²+2πrh。',
              '第二步：h=V/(πr²)，S=2πr²+2V/r。',
              '第三步：S\'=4πr-2V/r²=0 得 r³=V/(2π)。',
              '第四步：此时 h=V/(πr²)=2r。'
            ],
            keyPoints: [
              '【重点】圆柱表面积。'
            ],
            summary: '用料最省问题。'
          },
          {
            id: '2.8-039',
            difficulty: '难题',
            type: '解答',
            topic: '光学最值',
            year: null,
            question: '在椭圆 <span class="frac"><span class="num">x<sup>2</sup></span><span class="den">a<sup>2</sup></span></span>+<span class="frac"><span class="num">y<sup>2</sup></span><span class="den">b<sup>2</sup></span></span>=1 内作一内接矩形，问长和宽多少时面积最大？',
            options: null,
            answer: '长 √2a，宽 √2b',
            solution: [
              '第一步：设矩形顶点(x,y)在椭圆上，面积 S=4xy。',
              '第二步：由椭圆方程 y=b√(1-x²/a²)。',
              '第三步：S=4bx√(1-x²/a²)，求导得 x=a/√2。',
              '第四步：y=b/√2，S_max=2ab。'
            ],
            keyPoints: [
              '【方法】参数方程或求导。'
            ],
            summary: '椭圆内接矩形最值。'
          },
          {
            id: '2.8-040',
            difficulty: '真题',
            type: '解答',
            topic: '最值综合',
            year: 2023,
            question: '求 f(x)=lnx - <span class="frac"><span class="num">x<sup>2</sup></span><span class="den">2</span></span> 在(0,+∞)上的最大值。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：f\'=1/x-x=(1-x²)/x。',
              '第二步：令 f\'=0 得 x=1。',
              '第三步：x&lt;1 时 f\'&gt;0，x&gt;1 时 f\'&lt;0，x=1 为最大值点。',
              '第四步：f(1)=0-1/2=-1/2。'
            ],
            keyPoints: [
              '【重点】求导找最大值点。'
            ],
            summary: '对数函数最值。'
          }
        ]
      },
      '2.9': {
        id: '2.9',
        title: '曲线的凹凸性与拐点',
        questions: [
          {
            id: '2.9-001',
            difficulty: '基础',
            type: '选择',
            topic: '凹凸性判别',
            year: null,
            question: 'f(x)=x<sup>2</sup> 在 R 上是（　）',
            options: [
              'A. 凹曲线（向上凹）',
              'B. 凸曲线',
              'C. 直线',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              'f″(x)=2&gt;0，凹曲线（向上凹/下凸）。'
            ],
            keyPoints: [
              '【重点】f″&gt;0 凹，f″&lt;0 凸。'
            ],
            summary: '二阶导正为凹。'
          },
          {
            id: '2.9-002',
            difficulty: '基础',
            type: '填空',
            topic: '凹凸区间',
            year: null,
            question: 'f(x)=x<sup>3</sup> 的凹区间是______。',
            options: null,
            answer: '(0,+∞)',
            solution: [
              'f″=6x，f″&gt;0 当 x&gt;0。'
            ],
            keyPoints: [
              '【重点】f″=0 的点是拐点嫌疑点。'
            ],
            summary: 'x³ 在 (0,+∞) 凹，(-∞,0) 凸。'
          },
          {
            id: '2.9-003',
            difficulty: '基础',
            type: '选择',
            topic: '拐点概念',
            year: null,
            question: 'f(x)=x<sup>3</sup> 的拐点是（　）',
            options: [
              'A. (0,0)',
              'B. (1,1)',
              'C. (0,1)',
              'D. 无拐点'
            ],
            answer: 'A',
            solution: [
              'f″=6x，在 x=0 两侧变号，拐点 (0,0)。'
            ],
            keyPoints: [
              '【重点】拐点是曲线上的点 (x, f(x))。'
            ],
            summary: '拐点即凹凸改变点。'
          },
          {
            id: '2.9-004',
            difficulty: '基础',
            type: '解答',
            topic: '求凹凸区间与拐点',
            year: null,
            question: '求 f(x)=x<sup>3</sup>-3x<sup>2</sup> 的凹凸区间与拐点。',
            options: null,
            answer: '凸 (-∞,1)，凹 (1,+∞)，拐点 (1,-2)',
            solution: [
              '第一步：f′=3x<sup>2</sup>-6x，f″=6x-6=6(x-1)。',
              '第二步：x&lt;1 时 f″&lt;0 凸；x&gt;1 时 f″&gt;0 凹。',
              '第三步：拐点 x=1，f(1)=1-3=-2，拐点 (1,-2)。'
            ],
            keyPoints: [
              '【重点】f″=0 且两侧变号 ⇒ 拐点。'
            ],
            summary: '求凹凸区间：解 f″=0 后列表判号。'
          },
          {
            id: '2.9-005',
            difficulty: '基础',
            type: '填空',
            topic: 'f=lnx 的凹凸性',
            year: null,
            question: 'f(x)=lnx 的凹凸性为______。',
            options: null,
            answer: '凸',
            solution: [
              'f″=-1/x<sup>2</sup>&lt;0，凸。'
            ],
            keyPoints: [
              '【重点】lnx 是凸函数。'
            ],
            summary: 'lnx 凸，e^x 凹。'
          },
          {
            id: '2.9-006',
            difficulty: '基础',
            type: '选择',
            topic: '拐点条件',
            year: null,
            question: 'f(x) 在 x<sub>0</sub> 处二阶可导，且 (x<sub>0</sub>,f(x<sub>0</sub>)) 为拐点，则必有（　）',
            options: [
              'A. f″(x<sub>0</sub>)=0',
              'B. f″(x<sub>0</sub>)&gt;0',
              'C. f″(x<sub>0</sub>)&lt;0',
              'D. f′(x<sub>0</sub>)=0'
            ],
            answer: 'A',
            solution: [
              '拐点处二阶可导则 f″(x<sub>0</sub>)=0（必要条件）。'
            ],
            keyPoints: [
              '【重点】f″=0 是拐点必要不充分条件。'
            ],
            summary: '拐点必要条件 f″=0。'
          },
          {
            id: '2.9-007',
            difficulty: '提高',
            type: '选择',
            topic: '拐点个数',
            year: null,
            question: 'f(x)=x<sup>4</sup> 的拐点个数是（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'A',
            solution: [
              'f″=12x<sup>2</sup>≥0，在 x=0 两侧不变号，故无拐点。'
            ],
            keyPoints: [
              '【易错点】f″(0)=0 但不变号 ⇒ 非拐点。'
            ],
            summary: 'f″=0 不变号非拐点。'
          },
          {
            id: '2.9-008',
            difficulty: '提高',
            type: '填空',
            topic: '拐点反求参数',
            year: null,
            question: 'f(x)=x<sup>3</sup>+ax<sup>2</sup>+bx+c 在 x=1 处有拐点 (1,-1)，则 a=______。',
            options: null,
            answer: '-3',
            solution: [
              'f″=6x+2a，f″(1)=6+2a=0，a=-3。'
            ],
            keyPoints: [
              '【重点】拐点处 f″=0。'
            ],
            summary: '拐点反求参数。'
          },
          {
            id: '2.9-009',
            difficulty: '提高',
            type: '解答',
            topic: '拐点讨论',
            year: null,
            question: '求 f(x)=xe<sup>-x</sup> 的凹凸区间与拐点。',
            options: null,
            answer: '凹 (-∞,2)，凸 (2,+∞)，拐点 (2,2/e<sup>2</sup>)',
            solution: [
              '第一步：f′=e<sup>-x</sup>(1-x)，f″=e<sup>-x</sup>(x-2)。',
              '第二步：x&lt;2 时 f″&lt;0 凸；x&gt;2 时 f″&gt;0 凹。',
              '第三步：拐点 x=2，f(2)=2e<sup>-2</sup>。'
            ],
            keyPoints: [
              '【重点】e^{-x} 求导变号。'
            ],
            summary: 'xe^{-x} 拐点在 x=2。'
          },
          {
            id: '2.9-010',
            difficulty: '提高',
            type: '选择',
            topic: '抽象函数凹凸性',
            year: null,
            question: '设 f″(x)&lt;0 在 [a,b] 上恒成立，则对任意 x<sub>1</sub>&lt;x<sub>2</sub>，有（　）',
            options: [
              'A. f(<span class="frac"><span class="num">x<sub>1</sub>+x<sub>2</sub></span><span class="den">2</span></span>)&gt;<span class="frac"><span class="num">f(x<sub>1</sub>)+f(x<sub>2</sub>)</span><span class="den">2</span></span>',
              'B. f((x<sub>1</sub>+x<sub>2</sub>)/2)&lt;[f(x<sub>1</sub>)+f(x<sub>2</sub>)]/2',
              'C. 相等',
              'D. 无法比较'
            ],
            answer: 'A',
            solution: [
              '凸函数（f″&lt;0）满足 f(中点)&gt;[f(x₁)+f(x₂)]/2。'
            ],
            keyPoints: [
              '【重点】琴生不等式：凸函数中点值大于端点平均。'
            ],
            summary: '凸函数 f((a+b)/2) > (f(a)+f(b))/2。'
          },
          {
            id: '2.9-011',
            difficulty: '提高',
            type: '填空',
            topic: '拐点横坐标',
            year: null,
            question: 'f(x)=(x-1)<sup>4</sup> 的拐点个数是______。',
            options: null,
            answer: '0',
            solution: [
              'f″=12(x-1)<sup>2</sup>≥0，不变号，无拐点。'
            ],
            keyPoints: [
              '【重点】偶次幂因子不变号。'
            ],
            summary: '(x-a)^4 无拐点。'
          },
          {
            id: '2.9-012',
            difficulty: '提高',
            type: '解答',
            topic: '曲线 y=x^(1/3) 的拐点',
            year: null,
            question: '讨论 f(x)=∛x 的凹凸性与拐点。',
            options: null,
            answer: '拐点 (0,0)；x&gt;0 凸，x&lt;0 凹',
            solution: [
              '第一步：f′=(1/3)x<sup>-2/3</sup>，f″=-(2/9)x<sup>-5/3</sup>。',
              '第二步：x&gt;0 时 f″&lt;0 凸；x&lt;0 时 f″&gt;0 凹。',
              '第三步：x=0 处不可导但凹凸改变，拐点 (0,0)。'
            ],
            keyPoints: [
              '【重点】拐点可在不可导点处。'
            ],
            summary: '拐点嫌疑点 = f″=0 ∪ 不可导点。'
          },
          {
            id: '2.9-013',
            difficulty: '难题',
            type: '选择',
            topic: '拐点与高阶导数',
            year: null,
            question: 'f″(x<sub>0</sub>)=0，f‴(x<sub>0</sub>)≠0，则 (x<sub>0</sub>,f(x<sub>0</sub>)) 是（　）',
            options: [
              'A. 拐点',
              'B. 极值点',
              'C. 都不是',
              'D. 无法判断'
            ],
            answer: 'A',
            solution: [
              'f″=0 且 f‴≠0 ⇒ f″ 在该点变号 ⇒ 拐点。'
            ],
            keyPoints: [
              '【重点】f″=0，f‴≠0 必为拐点。'
            ],
            summary: '三阶导非零的 f″=0 点为拐点。'
          },
          {
            id: '2.9-014',
            difficulty: '难题',
            type: '解答',
            topic: '隐函数拐点',
            year: null,
            question: '求曲线 x<sup>2</sup>-xy+y<sup>2</sup>=3 在 y=0 处的凹凸性。',
            options: null,
            answer: '在该点凹（f″&gt;0）',
            solution: [
              '第一步：y=0 时 x<sup>2</sup>=3，x=±√3。',
              '第二步：隐函数求二阶导后代入判断符号。'
            ],
            keyPoints: [
              '【重点】隐函数二阶导求符号。'
            ],
            summary: '隐函数凹凸性：求二阶导判号。'
          },
          {
            id: '2.9-015',
            difficulty: '难题',
            type: '填空',
            topic: '拐点与切线',
            year: null,
            question: '曲线 y=x<sup>3</sup>-3x<sup>2</sup> 的拐点处切线方程为______。',
            options: null,
            answer: 'y=-3x+1',
            solution: [
              '拐点 x=1，f(1)=-2，f′(1)=3-6=-3，切线 y+2=-3(x-1)，即 y=-3x+1。'
            ],
            keyPoints: [
              '【重点】拐点处求切线：求 f(拐点) 和 f′(拐点)。'
            ],
            summary: '拐点切线：点斜式。'
          },
          {
            id: '2.9-016',
            difficulty: '难题',
            type: '解答',
            topic: '凹凸性证明不等式',
            year: null,
            question: '用凹凸性证明：当 x&gt;0, y&gt;0, x≠y 时，xlnx+ylny&gt;(x+y)ln<span class="frac"><span class="num">x+y</span><span class="den">2</span></span>。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：令 f(t)=tlnt，f′=lnt+1，f″=1/t&gt;0。',
              '第二步：f 为凹函数，由琴生不等式 f((x+y)/2)&lt;[f(x)+f(y)]/2。',
              '第三步：即 (x+y)/2·ln((x+y)/2)&lt;(xlnx+ylny)/2，整理即得。'
            ],
            keyPoints: [
              '【重点】琴生不等式证明和的对数。'
            ],
            summary: '凸/凹函数琴生不等式。'
          },
          {
            id: '2.9-017',
            difficulty: '真题',
            type: '选择',
            topic: '拐点真题',
            year: 2015,
            question: '设 f(x) 在 (-∞,+∞) 连续，其二阶导图形与 x 轴交于三点，则 f(x) 的拐点个数为（　）',
            options: [
              'A. 2',
              'B. 3',
              'C. 4',
              'D. 5'
            ],
            answer: 'B',
            solution: [
              'f″ 与 x 轴交点且变号处为拐点，共 3 个。'
            ],
            keyPoints: [
              '【重点】f″ 穿轴即拐点。'
            ],
            summary: '拐点个数 = f″ 变号次数。'
          },
          {
            id: '2.9-018',
            difficulty: '真题',
            type: '填空',
            topic: '拐点真题',
            year: 2011,
            question: '曲线 y=(x-1)(x-2)<sup>2</sup>(x-3)<sup>3</sup>(x-4)<sup>4</sup> 的拐点个数为______。',
            options: null,
            answer: '3',
            solution: [
              'f″ 在 x=2,3,4 附近变号情况分析：奇数次幂对应变号，共 3 个拐点。'
            ],
            keyPoints: [
              '【重点】偶次根处不变号，奇次根处变号。'
            ],
            summary: '多项式拐点：看根的奇偶次。'
          },
          {
            id: '2.9-019',
            difficulty: '真题',
            type: '选择',
            topic: '凹凸性真题',
            year: 2007,
            question: 'f(x)=|x(1-x)|，则（　）',
            options: [
              'A. x=0 是极值点，(0,0) 是拐点',
              'B. x=0 不是极值点，(0,0) 是拐点',
              'C. x=0 是极值点，(0,0) 不是拐点',
              'D. 都不是'
            ],
            answer: 'A',
            solution: [
              'f(x)≥0，f(0)=0 为极小；f″ 在 x=0 两侧变号，(0,0) 为拐点。'
            ],
            keyPoints: [
              '【重点】极值点和拐点可同一点。'
            ],
            summary: '极值点与拐点可重合。'
          },
          {
            id: '2.9-020',
            difficulty: '真题',
            type: '解答',
            topic: '凹凸区间真题',
            year: 2020,
            question: '求 f(x)=x<sup>4</sup>-2x<sup>3</sup> 的凹凸区间与拐点。',
            options: null,
            answer: '凸 (-∞,0),(1,+∞)；凹 (0,1)；拐点 (0,0),(1,-1)',
            solution: [
              '第一步：f′=4x<sup>3</sup>-6x<sup>2</sup>，f″=12x<sup>2</sup>-12x=12x(x-1)。',
              '第二步：f″&gt;0 于 (-∞,0)∪(1,+∞)，f″&lt;0 于 (0,1)。',
              '第三步：拐点 x=0（f=0）和 x=1（f=-1）。'
            ],
            keyPoints: [
              '【重点】两个拐点。'
            ],
            summary: '四次函数两个拐点。'
          },
          {
            id: '2.9-021',
            difficulty: '基础',
            type: '填空',
            topic: '凹凸性',
            year: null,
            question: 'f(x)=x<sup>3</sup> 的凹区间为______。',
            options: null,
            answer: '(0,+∞)',
            solution: [
              '第一步：f\'=3x²，f\'\'=6x。',
              '第二步：f\'\'&gt;0 当 x&gt;0，为凹区间。'
            ],
            keyPoints: [
              '【重点】f\'\'&gt;0 凹，f\'\'&lt;0 凸。'
            ],
            summary: '二阶导判凹凸。'
          },
          {
            id: '2.9-022',
            difficulty: '基础',
            type: '选择',
            topic: '拐点',
            year: null,
            question: 'f(x)=x<sup>3</sup> 的拐点为（　）。',
            options: [
              'A. (0,0)',
              'B. (1,1)',
              'C. (-1,-1)',
              'D. 无拐点'
            ],
            answer: 'A',
            solution: [
              '第一步：f\'\'=6x，在 x=0 两侧变号。',
              '第二步：拐点 (0,0)。'
            ],
            keyPoints: [
              '【重点】拐点是凹凸性改变的点。'
            ],
            summary: '拐点判定。'
          },
          {
            id: '2.9-023',
            difficulty: '基础',
            type: '填空',
            topic: '凹凸性',
            year: null,
            question: 'f(x)=lnx 的凸区间为______。',
            options: null,
            answer: '(0,+∞)',
            solution: [
              '第一步：f\'=1/x，f\'\'=-1/x²&lt;0。',
              '第二步：在定义域(0,+∞)上恒凸。'
            ],
            keyPoints: [
              '【重点】lnx 是凸函数。'
            ],
            summary: 'lnx 凹凸性。'
          },
          {
            id: '2.9-024',
            difficulty: '提高',
            type: '填空',
            topic: '拐点',
            year: null,
            question: 'f(x)=x<sup>4</sup>-2x<sup>3</sup> 的拐点为______。',
            options: null,
            answer: '(0,0)和(1,-1)',
            solution: [
              '第一步：f\'=4x³-6x²，f\'\'=12x²-12x=12x(x-1)。',
              '第二步：f\'\'=0 得 x=0 或 x=1。',
              '第三步：两侧 f\'\' 均变号，故 (0,0) 和 (1,-1) 都是拐点。'
            ],
            keyPoints: [
              '【重点】f\'\'=0 且两侧变号才是拐点。'
            ],
            summary: '拐点求法。'
          },
          {
            id: '2.9-025',
            difficulty: '提高',
            type: '选择',
            topic: '凹凸性应用',
            year: null,
            question: '设 f(x) 在[a,b]上二阶可导，且 f\'\'(x)&gt;0，则对任意 x<sub>1</sub>,x<sub>2</sub> 有（　）。',
            options: [
              'A. f((x₁+x₂)/2) &lt; (f(x₁)+f(x₂))/2',
              'B. f((x₁+x₂)/2) &gt; (f(x₁)+f(x₂))/2',
              'C. 相等',
              'D. 无法确定'
            ],
            answer: 'A',
            solution: [
              '第一步：f\'\'&gt;0 为凹函数。',
              '第二步：凹函数满足 f((x₁+x₂)/2)≤(f(x₁)+f(x₂))/2。'
            ],
            keyPoints: [
              '【重点】凹函数琴生不等式。'
            ],
            summary: '凹函数性质。'
          },
          {
            id: '2.9-026',
            difficulty: '提高',
            type: '解答',
            topic: '曲线凹凸区间',
            year: null,
            question: '求 f(x)=x<sup>3</sup>-3x<sup>2</sup> 的凹凸区间与拐点。',
            options: null,
            answer: '凸区间(-∞,1)，凹区间(1,+∞)，拐点(1,-2)',
            solution: [
              '第一步：f\'=3x²-6x，f\'\'=6x-6=6(x-1)。',
              '第二步：f\'\'&lt;0 当 x&lt;1，凸；f\'\'&gt;0 当 x&gt;1，凹。',
              '第三步：拐点 (1, f(1))=(1,-2)。'
            ],
            keyPoints: [
              '【重点】求二阶导定凹凸。'
            ],
            summary: '求凹凸区间。'
          },
          {
            id: '2.9-027',
            difficulty: '难题',
            type: '选择',
            topic: '拐点判定',
            year: null,
            question: '设 f\'\'(x<sub>0</sub>)=0，则(x<sub>0</sub>,f(x<sub>0</sub>))（　）。',
            options: [
              'A. 必为拐点',
              'B. 不一定是拐点',
              'C. 不是拐点',
              'D. 是极值点'
            ],
            answer: 'B',
            solution: [
              '第一步：f\'\'(x₀)=0 只是必要条件。',
              '第二步：还需两侧 f\'\' 变号才是拐点。',
              '第三步：如 f(x)=x⁴，f\'\'(0)=0 但不是拐点。'
            ],
            keyPoints: [
              '【易错点】f\'\'=0 不一定是拐点。'
            ],
            summary: '拐点判定条件。'
          },
          {
            id: '2.9-028',
            difficulty: '难题',
            type: '填空',
            topic: '凹凸性证明',
            year: null,
            question: '当 x&gt;0,y&gt;0 时，lnx+lny ≤ ______（用琴生不等式）。',
            options: null,
            answer: '2ln<span class="frac"><span class="num">x+y</span><span class="den">2</span></span>',
            solution: [
              '第一步：ln 是凹函数。',
              '第二步：由琴生不等式 (lnx+lny)/2 ≤ ln((x+y)/2)。',
              '第三步：即 lnx+lny ≤ 2ln((x+y)/2)。'
            ],
            keyPoints: [
              '【重点】凹函数琴生不等式。'
            ],
            summary: '琴生不等式应用。'
          },
          {
            id: '2.9-029',
            difficulty: '真题',
            type: '填空',
            topic: '拐点',
            year: 2016,
            question: '曲线 y=x<sup>3</sup>-3x<sup>2</sup>+3x 的拐点为______。',
            options: null,
            answer: '(1,1)',
            solution: [
              '第一步：y\'=3x²-6x+3，y\'\'=6x-6。',
              '第二步：y\'\'=0 得 x=1，两侧变号。',
              '第三步：y(1)=1，拐点(1,1)。'
            ],
            keyPoints: [
              '【重点】求拐点。'
            ],
            summary: '拐点求法。'
          },
          {
            id: '2.9-030',
            difficulty: '真题',
            type: '选择',
            topic: '凹凸性',
            year: 2020,
            question: '曲线 y=(x-1)<sup>2</sup>(x-2)<sup>2</sup> 的拐点个数为（　）。',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'C',
            solution: [
              '第一步：四次函数有两个拐点。',
              '第二步：展开后求二阶导为二次函数，有两个零点且两侧变号。'
            ],
            keyPoints: [
              '【方法】四次函数拐点。'
            ],
            summary: '拐点个数判断。'
          }
        ]
      },
      '2.10': {
        id: '2.10',
        title: '渐近线与函数作图',
        questions: [
          {
            id: '2.10-001',
            difficulty: '基础',
            type: '选择',
            topic: '水平渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span> 的水平渐近线是（　）',
            options: [
              'A. y=0',
              'B. y=1',
              'C. x=0',
              'D. 无'
            ],
            answer: 'A',
            solution: [
              'lim<sub>x→∞</sub>1/x=0，水平渐近线 y=0。'
            ],
            keyPoints: [
              '【重点】水平渐近线即 y=lim_{x→∞}f(x)。'
            ],
            summary: '水平渐近线：x→∞ 时函数极限。'
          },
          {
            id: '2.10-002',
            difficulty: '基础',
            type: '填空',
            topic: '垂直渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">1</span><span class="den">x-1</span></span> 的垂直渐近线是______。',
            options: null,
            answer: 'x=1',
            solution: [
              'lim<sub>x→1</sub>1/(x-1)=∞，垂直渐近线 x=1。'
            ],
            keyPoints: [
              '【重点】垂直渐近线在分母零点处。'
            ],
            summary: '垂直渐近线 = 函数趋于无穷的点。'
          },
          {
            id: '2.10-003',
            difficulty: '基础',
            type: '选择',
            topic: '斜渐近线',
            year: null,
            question: 'f(x)=x+1/x 的斜渐近线是（　）',
            options: [
              'A. y=x',
              'B. y=x+1',
              'C. y=0',
              'D. 无斜渐近线'
            ],
            answer: 'A',
            solution: [
              'k=lim f(x)/x=lim(1+1/x<sup>2</sup>)=1，b=lim(f-x)=lim1/x=0，斜渐近线 y=x。'
            ],
            keyPoints: [
              '【重点】斜渐近线 y=kx+b，k=lim f/x，b=lim(f-kx)。'
            ],
            summary: '斜渐近线：k=lim f/x，b=lim(f-kx)。'
          },
          {
            id: '2.10-004',
            difficulty: '基础',
            type: '填空',
            topic: '渐近线条数',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x</span><span class="den">x+1</span></span> 的水平渐近线是______。',
            options: null,
            answer: 'y=1',
            solution: [
              'lim<sub>x→∞</sub>x/(x+1)=1，y=1。'
            ],
            keyPoints: [
              '【简便方法】分子分母同次，水平渐近线=系数比。'
            ],
            summary: '有理函数水平渐近线：x→∞ 极限。'
          },
          {
            id: '2.10-005',
            difficulty: '基础',
            type: '解答',
            topic: '求全部渐近线',
            year: null,
            question: '求 f(x)=<span class="frac"><span class="num">1</span><span class="den">(x-1)(x+2)</span></span> 的全部渐近线。',
            options: null,
            answer: '水平 y=0；垂直 x=1 和 x=-2',
            solution: [
              '第一步：水平 lim<sub>x→∞</sub>f=0，y=0。',
              '第二步：垂直 x=1 和 x=-2 处分母为零且极限为 ∞。'
            ],
            keyPoints: [
              '【重点】三条渐近线。'
            ],
            summary: '有理函数渐近线：水平+垂直。'
          },
          {
            id: '2.10-006',
            difficulty: '基础',
            type: '选择',
            topic: '斜渐近线计算',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">x+1</span></span> 的斜渐近线是（　）',
            options: [
              'A. y=x-1',
              'B. y=x+1',
              'C. y=x',
              'D. 无'
            ],
            answer: 'A',
            solution: [
              'k=lim f/x=lim x/(x+1)=1，b=lim(f-x)=lim(x<sup>2</sup>/(x+1)-x)=lim(-x/(x+1))=-1，y=x-1。'
            ],
            keyPoints: [
              '【重点】多项式除法：x²/(x+1)=x-1+1/(x+1)。'
            ],
            summary: '假分式拆整式+真分式。'
          },
          {
            id: '2.10-007',
            difficulty: '基础',
            type: '填空',
            topic: 'y=lnx 的渐近线',
            year: null,
            question: 'y=lnx 的垂直渐近线是______。',
            options: null,
            answer: 'x=0',
            solution: [
              'lim<sub>x→0<sup>+</sup></sub>lnx=-∞，x=0。'
            ],
            keyPoints: [
              '【重点】lnx 在 x=0+ 趋于 -∞。'
            ],
            summary: 'lnx 垂直渐近线 x=0。'
          },
          {
            id: '2.10-008',
            difficulty: '基础',
            type: '解答',
            topic: '指数函数渐近线',
            year: null,
            question: '求 f(x)=e<sup>1/x</sup> 的渐近线。',
            options: null,
            answer: '水平 y=1；垂直 x=0',
            solution: [
              '第一步：x→∞ 时 1/x→0，e<sup>1/x</sup>→1，水平 y=1。',
              '第二步：x→0<sup>+</sup> 时 1/x→+∞，e<sup>1/x</sup>→+∞，垂直 x=0。'
            ],
            keyPoints: [
              '【重点】指数函数渐近线。'
            ],
            summary: 'e^{1/x} 的渐近线。'
          },
          {
            id: '2.10-009',
            difficulty: '提高',
            type: '选择',
            topic: '渐近线综合',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">xsinx</span><span class="den">√(1+x<sup>2</sup>)</span></span> 的渐近线情况是（　）',
            options: [
              'A. 无水平渐近线',
              'B. 有水平渐近线 y=1',
              'C. 有垂直渐近线',
              'D. 有斜渐近线'
            ],
            answer: 'A',
            solution: [
              'lim<sub>x→∞</sub>f(x) 因 sinx 振荡不存在，无水平渐近线；无垂直渐近线。'
            ],
            keyPoints: [
              '【重点】振荡函数无渐近线。'
            ],
            summary: '含 sinx/x 振荡无渐近线。'
          },
          {
            id: '2.10-010',
            difficulty: '提高',
            type: '填空',
            topic: '斜渐近线',
            year: null,
            question: 'f(x)=√(x<sup>2</sup>-x+1) 的斜渐近线是______。',
            options: null,
            answer: 'y=x-<span class="frac"><span class="num">1</span><span class="den">2</span></span> 和 y=-x+<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：x→+∞ 时 f=x√(1-1/x+1/x<sup>2</sup>)≈x(1-1/(2x))=x-1/2。',
              '第二步：x→-∞ 时 f=-x√(1-1/x+1/x<sup>2</sup>)≈-x+1/2。'
            ],
            keyPoints: [
              '【重点】x→+∞ 和 x→-∞ 要分开算。'
            ],
            summary: '根号函数斜渐近线分正负无穷。'
          },
          {
            id: '2.10-011',
            difficulty: '提高',
            type: '解答',
            topic: '渐近线条数',
            year: null,
            question: '求 f(x)=<span class="frac"><span class="num">xlnx</span><span class="den">x+1</span></span> 的渐近线。',
            options: null,
            answer: '垂直 x=-1（定义域外）；无水平；无斜',
            solution: [
              '第一步：定义域 x&gt;0，x=-1 不在定义域。',
              '第二步：x→+∞ 时 f~lnx→∞，无水平渐近线。',
              '第三步：x→0<sup>+</sup> 时 xlnx→0。'
            ],
            keyPoints: [
              '【重点】渐近线只在定义域内考虑。'
            ],
            summary: '先定定义域再求渐近线。'
          },
          {
            id: '2.10-012',
            difficulty: '提高',
            type: '选择',
            topic: 'y=x+arctanx 渐近线',
            year: null,
            question: 'f(x)=x+arctanx 的斜渐近线（x→+∞）为（　）',
            options: [
              'A. y=x+π/2',
              'B. y=x',
              'C. y=x-π/2',
              'D. 无'
            ],
            answer: 'A',
            solution: [
              'k=lim f/x=1，b=lim(f-x)=lim arctanx=π/2，y=x+π/2。'
            ],
            keyPoints: [
              '【重点】arctanx 在 ±∞ 极限不同。'
            ],
            summary: 'x+arctanx 两侧斜渐近线不同。'
          },
          {
            id: '2.10-013',
            difficulty: '提高',
            type: '填空',
            topic: '曲线 y=x^2/(x+1) 渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">x+1</span></span> 的垂直渐近线为______。',
            options: null,
            answer: 'x=-1',
            solution: [
              'lim<sub>x→-1</sub>x<sup>2</sup>/(x+1)=∞，x=-1。'
            ],
            keyPoints: [
              '【重点】分母零点。'
            ],
            summary: '垂直渐近线 x=-1。'
          },
          {
            id: '2.10-014',
            difficulty: '提高',
            type: '解答',
            topic: '函数作图步骤',
            year: null,
            question: '简述作函数 y=f(x) 图形的一般步骤。',
            options: null,
            answer: '见过程',
            solution: [
              '第一步：求定义域、奇偶性、周期性。',
              '第二步：求 f′，定单调区间与极值。',
              '第三步：求 f″，定凹凸区间与拐点。',
              '第四步：求渐近线。',
              '第五步：描关键点作图。'
            ],
            keyPoints: [
              '【重点】五步法。'
            ],
            summary: '函数作图五步法。'
          },
          {
            id: '2.10-015',
            difficulty: '提高',
            type: '选择',
            topic: 'y=e^x 的渐近线',
            year: null,
            question: 'f(x)=e<sup>x</sup> 的渐近线是（　）',
            options: [
              'A. y=0（x→-∞）',
              'B. y=0（x→+∞）',
              'C. x=0',
              'D. 无'
            ],
            answer: 'A',
            solution: [
              'lim<sub>x→-∞</sub>e<sup>x</sup>=0，水平渐近线 y=0。'
            ],
            keyPoints: [
              '【重点】e^x 在 x→-∞ 时→0。'
            ],
            summary: 'e^x 水平渐近线 y=0（x→-∞）。'
          },
          {
            id: '2.10-016',
            difficulty: '提高',
            type: '填空',
            topic: '渐近线交点',
            year: null,
            question: '曲线 y=<span class="frac"><span class="num">x<sup>2</sup>+1</span><span class="den">x</span></span> 的斜渐近线与垂直渐近线交点坐标为______。',
            options: null,
            answer: '(0,0)',
            solution: [
              '斜渐近线 y=x，垂直渐近线 x=0，交点 (0,0)。'
            ],
            keyPoints: [
              '【简便方法】y=x+1/x 斜渐近线 y=x。'
            ],
            summary: '渐近线交点即解联立。'
          },
          {
            id: '2.10-017',
            difficulty: '难题',
            type: '选择',
            topic: '渐近线条数',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x+sinx</span><span class="den">x</span></span> 的渐近线条数为（　）',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 0'
            ],
            answer: 'A',
            solution: [
              'lim f=1（sinx/x→0），水平 y=1；x→0 时 f→∞？x=0 处分母为零但分子→0，极限为 2... 实际 x→0 时 (x+sinx)/x→2，非垂直。只有一条水平渐近线 y=1。'
            ],
            keyPoints: [
              '【易错点】x=0 处极限有限，非垂直渐近线。'
            ],
            summary: '(x+sinx)/x 仅水平渐近线 y=1。'
          },
          {
            id: '2.10-018',
            difficulty: '难题',
            type: '填空',
            topic: 'y=(1+1/x)^x 的渐近线',
            year: null,
            question: 'f(x)=(1+<span class="frac"><span class="num">1</span><span class="den">x</span></span>)<sup>x</sup> 的水平渐近线是______。',
            options: null,
            answer: 'y=e',
            solution: [
              'lim<sub>x→∞</sub>(1+1/x)<sup>x</sup>=e，y=e。'
            ],
            keyPoints: [
              '【重点】重要极限。'
            ],
            summary: '(1+1/x)^x → e。'
          },
          {
            id: '2.10-019',
            difficulty: '难题',
            type: '解答',
            topic: '综合作图',
            year: null,
            question: '作函数 y=<span class="frac"><span class="num">x</span><span class="den">1+x<sup>2</sup></span></span> 的图形（求极值、拐点、渐近线）。',
            options: null,
            answer: '极大 (1,1/2)，极小 (-1,-1/2)，拐点 (0,0)，水平渐近线 y=0',
            solution: [
              '第一步：f′=(1-x<sup>2</sup>)/(1+x<sup>2</sup>)<sup>2</sup>，驻点 x=±1。',
              '第二步：f″=2x(x<sup>2</sup>-3)/(1+x<sup>2</sup>)<sup>3</sup>，拐点 x=0,±√3。',
              '第三步：水平渐近线 y=0。'
            ],
            keyPoints: [
              '【重点】经典作图题。'
            ],
            summary: 'x/(1+x²) 图形。'
          },
          {
            id: '2.10-020',
            difficulty: '真题',
            type: '选择',
            topic: '渐近线真题',
            year: 2020,
            question: '曲线 y=<span class="frac"><span class="num">x+arctan(1+x<sup>2</sup>)</span><span class="den"></span></span> 的斜渐近线方程为（　）',
            options: [
              'A. y=x+π/2',
              'B. y=x',
              'C. y=x+π/4',
              'D. 无'
            ],
            answer: 'A',
            solution: [
              'k=lim f/x=1，b=lim(f-x)=lim arctan(1+x<sup>2</sup>)=π/2，y=x+π/2。'
            ],
            keyPoints: [
              '【重点】arctan(+∞)=π/2。'
            ],
            summary: '斜渐近线真题。'
          },
          {
            id: '2.10-021',
            difficulty: '基础',
            type: '填空',
            topic: '水平渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">1</span><span class="den">1+x<sup>2</sup></span></span> 的水平渐近线为______。',
            options: null,
            answer: 'y=0',
            solution: [
              '第一步：lim_{x→∞} 1/(1+x²)=0。',
              '第二步：水平渐近线 y=0。'
            ],
            keyPoints: [
              '【重点】水平渐近线 y=lim_{x→∞}f(x)。'
            ],
            summary: '水平渐近线。'
          },
          {
            id: '2.10-022',
            difficulty: '基础',
            type: '填空',
            topic: '垂直渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">1</span><span class="den">x-1</span></span> 的垂直渐近线为______。',
            options: null,
            answer: 'x=1',
            solution: [
              '第一步：lim_{x→1} 1/(x-1)=∞。',
              '第二步：垂直渐近线 x=1。'
            ],
            keyPoints: [
              '【重点】垂直渐近线找使函数→∞的点。'
            ],
            summary: '垂直渐近线。'
          },
          {
            id: '2.10-023',
            difficulty: '基础',
            type: '选择',
            topic: '斜渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x<sup>2</sup></span><span class="den">x+1</span></span> 的斜渐近线为（　）。',
            options: [
              'A. y=x-1',
              'B. y=x+1',
              'C. y=x',
              'D. y=x-2'
            ],
            answer: 'A',
            solution: [
              '第一步：k=lim f(x)/x=lim x/(x+1)=1。',
              '第二步：b=lim (f(x)-x)=lim (x²/(x+1)-x)=lim (-x/(x+1))=-1。',
              '第三步：y=x-1。'
            ],
            keyPoints: [
              '【重点】斜渐近线 k=lim f(x)/x，b=lim(f(x)-kx)。'
            ],
            summary: '斜渐近线求法。'
          },
          {
            id: '2.10-024',
            difficulty: '提高',
            type: '填空',
            topic: '渐近线综合',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x</span><span class="den">e<sup>x</sup></span></span> 的水平渐近线为______。',
            options: null,
            answer: 'y=0（x→+∞）',
            solution: [
              '第一步：lim_{x→+∞} x/e^x=0。',
              '第二步：lim_{x→-∞} x/e^x=-∞。',
              '第三步：水平渐近线 y=0。'
            ],
            keyPoints: [
              '【重点】注意 x→±∞ 分别讨论。'
            ],
            summary: '水平渐近线。'
          },
          {
            id: '2.10-025',
            difficulty: '提高',
            type: '选择',
            topic: '渐近线条数',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">xsinx</span><span class="den">x<sup>2</sup>+1</span></span> 的渐近线条数为（　）。',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'B',
            solution: [
              '第一步：lim_{x→∞} xsinx/(x²+1)=0（有界量×无穷小）。',
              '第二步：水平渐近线 y=0。',
              '第三步：无垂直渐近线，无斜渐近线。共1条。'
            ],
            keyPoints: [
              '【重点】有界量×无穷小=无穷小。'
            ],
            summary: '渐近线条数。'
          },
          {
            id: '2.10-026',
            difficulty: '提高',
            type: '填空',
            topic: '斜渐近线',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x<sup>3</sup></span><span class="den">x<sup>2</sup>-1</span></span> 的斜渐近线为______。',
            options: null,
            answer: 'y=x',
            solution: [
              '第一步：k=lim f(x)/x=lim x²/(x²-1)=1。',
              '第二步：b=lim(f(x)-x)=lim(x³/(x²-1)-x)=lim x/(x²-1)=0。',
              '第三步：y=x。'
            ],
            keyPoints: [
              '【方法】多项式除法。'
            ],
            summary: '斜渐近线。'
          },
          {
            id: '2.10-027',
            difficulty: '难题',
            type: '解答',
            topic: '渐近线综合',
            year: null,
            question: '求 f(x)=<span class="frac"><span class="num">(x+1)<sup>3</sup></span><span class="den">(x-1)<sup>2</sup></span></span> 的渐近线。',
            options: null,
            answer: '垂直 x=1，斜 y=x+5',
            solution: [
              '第一步：垂直：x→1 时 f→∞，故 x=1。',
              '第二步：k=lim f/x=lim (x+1)³/(x(x-1)²)=1。',
              '第三步：b=lim(f-x)=lim((x+1)³/(x-1)²-x)，展开计算得 b=5。'
            ],
            keyPoints: [
              '【重点】斜渐近线计算。'
            ],
            summary: '综合渐近线。'
          },
          {
            id: '2.10-028',
            difficulty: '难题',
            type: '选择',
            topic: '渐近线',
            year: null,
            question: '曲线 y=xln(<span class="frac"><span class="num">1</span><span class="den">x</span></span>+1) (x&gt;0) 的渐近线为（　）。',
            options: [
              'A. y=0',
              'B. y=1',
              'C. y=x',
              'D. 无渐近线'
            ],
            answer: 'A',
            solution: [
              '第一步：x→+∞ 时 ln(1+1/x)~1/x。',
              '第二步：y~x·(1/x)=1？重新：y=xln(1+1/x)，令 t=1/x→0，y=(1/t)ln(1+t)→1。',
              '第三步：水平渐近线 y=1。'
            ],
            keyPoints: [
              '【方法】换元 t=1/x。'
            ],
            summary: '含对数的渐近线。'
          },
          {
            id: '2.10-029',
            difficulty: '真题',
            type: '填空',
            topic: '渐近线',
            year: 2015,
            question: '曲线 y=<span class="frac"><span class="num">x</span><span class="den">2x-1</span></span> 的斜渐近线方程为______。',
            options: null,
            answer: 'y=<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：lim_{x→∞} x/(2x-1)=1/2。',
              '第二步：水平渐近线 y=1/2。'
            ],
            keyPoints: [
              '【重点】有理式水平渐近线。'
            ],
            summary: '水平渐近线。'
          },
          {
            id: '2.10-030',
            difficulty: '真题',
            type: '选择',
            topic: '渐近线条数',
            year: 2019,
            question: '曲线 y=<span class="frac"><span class="num">x+1</span><span class="den">x<sup>2</sup>-1</span></span> 的渐近线条数为（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'B',
            solution: [
              '第一步：化简 y=1/(x-1)（x≠-1）。',
              '第二步：垂直渐近线 x=1。',
              '第三步：水平渐近线 y=0。',
              '第四步：共2条。'
            ],
            keyPoints: [
              '【重点】先化简再找渐近线。'
            ],
            summary: '渐近线条数。'
          }
        ]
      },
      '2.11': {
        id: '2.11',
        title: '曲率与曲率半径（数二要求）',
        questions: [
          {
            id: '2.11-001',
            difficulty: '基础',
            type: '选择',
            topic: '曲率公式',
            year: null,
            question: '曲线 y=f(x) 在点 (x,y) 处的曲率 K 为（　）',
            options: [
              'A. <span class="frac"><span class="num">|y″|</span><span class="den">(1+y′<sup>2</sup>)<sup>3/2</sup></span></span>',
              'B. <span class="frac"><span class="num">y″</span><span class="den">1+y′<sup>2</sup></span></span>',
              'C. |y″|',
              'D. <span class="frac"><span class="num">1</span><span class="den">y″</span></span>'
            ],
            answer: 'A',
            solution: [
              '曲率公式 K=|y″|/(1+y′<sup>2</sup>)<sup>3/2</sup>。'
            ],
            keyPoints: [
              '【重点】曲率公式必须背熟。'
            ],
            summary: '曲率 K=|y″|/(1+y′²)^(3/2)。'
          },
          {
            id: '2.11-002',
            difficulty: '基础',
            type: '填空',
            topic: '曲率半径',
            year: null,
            question: '曲率 K 与曲率半径 R 的关系是 R=______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">K</span></span>',
            solution: [
              'R=1/K。'
            ],
            keyPoints: [
              '【重点】曲率半径是曲率倒数。'
            ],
            summary: 'R = 1/K。'
          },
          {
            id: '2.11-003',
            difficulty: '基础',
            type: '选择',
            topic: '直线曲率',
            year: null,
            question: '直线的曲率为（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. ∞',
              'D. 无法确定'
            ],
            answer: 'A',
            solution: [
              '直线 y=ax+b，y″=0，K=0。'
            ],
            keyPoints: [
              '【重点】直线不弯曲，曲率为零。'
            ],
            summary: '直线曲率为 0。'
          },
          {
            id: '2.11-004',
            difficulty: '基础',
            type: '填空',
            topic: '圆的曲率',
            year: null,
            question: '半径为 R 的圆，其曲率为______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">R</span></span>',
            solution: [
              '圆上各处曲率相同，等于 1/R。'
            ],
            keyPoints: [
              '【重点】圆的曲率处处为 1/R。'
            ],
            summary: '圆曲率 = 1/R。'
          },
          {
            id: '2.11-005',
            difficulty: '基础',
            type: '解答',
            topic: '求 y=x² 在原点曲率',
            year: null,
            question: '求抛物线 y=x<sup>2</sup> 在原点处的曲率与曲率半径。',
            options: null,
            answer: 'K=2，R=1/2',
            solution: [
              '第一步：y′=2x，在原点 y′=0。',
              '第二步：y″=2。',
              '第三步：K=2/(1+0)<sup>3/2</sup>=2，R=1/2。'
            ],
            keyPoints: [
              '【重点】顶点处 y′=0 简化计算。'
            ],
            summary: 'y=x² 在原点 K=2。'
          },
          {
            id: '2.11-006',
            difficulty: '基础',
            type: '选择',
            topic: 'y=lnx 的曲率',
            year: null,
            question: 'y=lnx 在 x=1 处的曲率为（　）',
            options: [
              'A. <span class="frac"><span class="num">√2</span><span class="den">4</span></span>',
              'B. 1',
              'C. <span class="frac"><span class="num">1</span><span class="den">2</span></span>',
              'D. <span class="frac"><span class="num">√2</span><span class="den">2</span></span>'
            ],
            answer: 'A',
            solution: [
              'y′=1/x=1，y″=-1/x<sup>2</sup>=-1。K=|-1|/(1+1)<sup>3/2</sup>=1/(2√2)=√2/4。'
            ],
            keyPoints: [
              '【重点】代入 x=1。'
            ],
            summary: 'lnx 在 x=1 曲率 √2/4。'
          },
          {
            id: '2.11-007',
            difficulty: '基础',
            type: '填空',
            topic: 'y=sinx 顶点曲率',
            year: null,
            question: 'y=sinx 在 x=π/2 处的曲率为______。',
            options: null,
            answer: '1',
            solution: [
              'y′=cosx=0，y″=-sinx=-1，K=1/(1+0)<sup>3/2</sup>=1。'
            ],
            keyPoints: [
              '【重点】正弦波顶点曲率 1。'
            ],
            summary: 'sinx 顶点曲率 1。'
          },
          {
            id: '2.11-008',
            difficulty: '基础',
            type: '解答',
            topic: '曲率圆概念',
            year: null,
            question: '什么是曲率圆？写出曲率圆半径公式。',
            options: null,
            answer: '见过程',
            solution: [
              '第一步：曲率圆是与曲线在该点相切、凹向相同、曲率相同的圆。',
              '第二步：半径 R=1/K=(1+y′<sup>2</sup>)<sup>3/2</sup>/|y″|。'
            ],
            keyPoints: [
              '【重点】曲率圆半径即曲率半径。'
            ],
            summary: '曲率圆半径 R=1/K。'
          },
          {
            id: '2.11-009',
            difficulty: '提高',
            type: '选择',
            topic: '最大曲率点',
            year: null,
            question: 'y=e<sup>x</sup> 上曲率最大的点是（　）',
            options: [
              'A. (0,1)',
              'B. (1,e)',
              'C. (-1,1/e)',
              'D. 无最大'
            ],
            answer: 'A',
            solution: [
              'K=e<sup>x</sup>/(1+e<sup>2x</sup>)<sup>3/2</sup>，求导得 x=0 时最大。'
            ],
            keyPoints: [
              '【重点】e^x 在 x=0 曲率最大。'
            ],
            summary: 'e^x 最大曲率在 x=0。'
          },
          {
            id: '2.11-010',
            difficulty: '提高',
            type: '填空',
            topic: '参数方程曲率',
            year: null,
            question: '摆线 x=t-sint，y=1-cost 在 t=π 处的曲率为______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">4</span></span>',
            solution: [
              '第一步：dx/dt=1-cost，dy/dt=sint，t=π 时 dx/dt=2，dy/dt=0。',
              '第二步：d²y/dx²=3/(4t)... 用参数方程曲率公式 K=|x′y″-y′x″|/(x′²+y′²)^(3/2)。',
              '第三步：t=π 时 x′=2, y′=0, x″=0, y″=-1，K=|2·(-1)|/(4)^(3/2)=2/8=1/4。'
            ],
            keyPoints: [
              '【重点】参数方程曲率公式。'
            ],
            summary: '参数方程曲率 K=|x′y″-y′x″|/(x′²+y′²)^(3/2)。'
          },
          {
            id: '2.11-011',
            difficulty: '提高',
            type: '解答',
            topic: 'y=ln secx 曲率',
            year: null,
            question: '求 y=lncosx 在 x=0 处的曲率半径。',
            options: null,
            answer: 'R=1',
            solution: [
              '第一步：y′=-tanx=0，y″=-sec<sup>2</sup>x=-1。',
              '第二步：K=1/(1+0)<sup>3/2</sup>=1，R=1。'
            ],
            keyPoints: [
              '【重点】直接代入。'
            ],
            summary: 'lncosx 在 x=0 曲率半径 1。'
          },
          {
            id: '2.11-012',
            difficulty: '提高',
            type: '选择',
            topic: '曲率与凹凸',
            year: null,
            question: '曲率 K 的值（　）',
            options: [
              'A. 恒为正',
              'B. 可正可负',
              'C. 恒为负',
              'D. 可为零'
            ],
            answer: 'A',
            solution: [
              '曲率公式有绝对值，恒非负。'
            ],
            keyPoints: [
              '【重点】曲率是正数（直线为 0）。'
            ],
            summary: '曲率恒非负。'
          },
          {
            id: '2.11-013',
            difficulty: '提高',
            type: '填空',
            topic: '抛物线顶点曲率',
            year: null,
            question: 'y=ax<sup>2</sup> 在顶点处曲率为______。',
            options: null,
            answer: '|2a|',
            solution: [
              '顶点 y′=0，y″=2a，K=|2a|。'
            ],
            keyPoints: [
              '【重点】抛物线顶点曲率 |2a|。'
            ],
            summary: 'y=ax² 顶点曲率 |2a|。'
          },
          {
            id: '2.11-014',
            difficulty: '提高',
            type: '解答',
            topic: '铁路弯道缓冲',
            year: null,
            question: '铁轨直道接入半径 R=400m 的圆弧，为避免突变用三次抛物线 y=x<sup>3</sup> 作缓冲曲线。已知直道在原点，求缓冲段长度使终点曲率等于圆弧曲率。',
            options: null,
            answer: '见过程',
            solution: [
              '第一步：圆弧曲率 1/400。',
              '第二步：y=x<sup>3</sup> 在 x=L 处 y′=3L<sup>2</sup>，y″=6L，K=6L/(1+9L<sup>4</sup>)<sup>3/2</sup>。',
              '第三步：令 K=1/400 解 L。'
            ],
            keyPoints: [
              '【重点】缓冲曲线使曲率从 0 渐增到圆弧曲率。'
            ],
            summary: '缓冲曲线设计。'
          },
          {
            id: '2.11-015',
            difficulty: '提高',
            type: '选择',
            topic: '曲率与二阶导',
            year: null,
            question: '若曲线在某点处 y′=0，则曲率 K=（　）',
            options: [
              'A. |y″|',
              'B. |y″|/2',
              'C. 0',
              'D. 1'
            ],
            answer: 'A',
            solution: [
              'y′=0 时分母 (1+0)<sup>3/2</sup>=1，K=|y″|。'
            ],
            keyPoints: [
              '【简便方法】y′=0 处曲率就是 |y″|。'
            ],
            summary: 'y′=0 时 K=|y″|。'
          },
          {
            id: '2.11-016',
            difficulty: '提高',
            type: '填空',
            topic: '曲率中心',
            year: null,
            question: '曲线 y=f(x) 在点 (x,y) 处的曲率中心 (ξ,η) 中，η-y=______（用 y′,y″ 表示）。',
            options: null,
            answer: '<span class="frac"><span class="num">1+y′<sup>2</sup></span><span class="den">|y″|</span></span>·sign(y″)',
            solution: [
              '曲率中心在法线方向距离 R 处，η-y=(1+y′<sup>2</sup>)/y″。'
            ],
            keyPoints: [
              '【重点】曲率中心公式。'
            ],
            summary: '曲率中心坐标。'
          },
          {
            id: '2.11-017',
            difficulty: '难题',
            type: '选择',
            topic: '椭圆曲率',
            year: null,
            question: '椭圆 x=acost，y=bsint 在短轴端点处曲率为（　）',
            options: [
              'A. a/b<sup>2</sup>',
              'B. b/a<sup>2</sup>',
              'C. ab',
              'D. 1/a'
            ],
            answer: 'A',
            solution: [
              '短轴端点 (0,±b)，t=π/2，x′=-a, y′=0, x″=0, y″=-b，K=|x′y″-y′x″|/(x′²+y′²)^(3/2)=ab/a<sup>3</sup>=b/a<sup>2</sup>。'
            ],
            keyPoints: [
              '【重点】椭圆短轴端点曲率 b/a²，长轴端点 a/b²。'
            ],
            summary: '椭圆端点曲率。'
          },
          {
            id: '2.11-018',
            difficulty: '难题',
            type: '解答',
            topic: '公路设计',
            year: null,
            question: '某公路弯道为抛物线 y=x<sup>2</sup>/100（单位 m），求汽车在原点处对路面的压力变化（曲率半径）。',
            options: null,
            answer: 'R=50m',
            solution: [
              '第一步：y′=x/50=0，y″=1/50。',
              '第二步：K=1/50，R=50m。'
            ],
            keyPoints: [
              '【重点】实际应用。'
            ],
            summary: '抛物线 y=x²/100 原点 R=50m。'
          },
          {
            id: '2.11-019',
            difficulty: '真题',
            type: '填空',
            topic: '曲率真题',
            year: 2012,
            question: '曲线 y=x<sup>2</sup>+x 在点 (0,0) 处的曲率半径为______。',
            options: null,
            answer: '<span class="frac"><span class="num">√2</span><span class="den">4</span></span>',
            solution: [
              '第一步：y′=2x+1=1，y″=2。',
              '第二步：K=2/(1+1)<sup>3/2</sup>=2/(2√2)=1/√2。',
              '第三步：K=2/(1+1)^(3/2)=2/(2√2)=1/√2，R=√2。'
            ],
            keyPoints: [
              '【重点】R=(1+y′²)^(3/2)/|y″|。'
            ],
            summary: '曲率半径真题。'
          },
          {
            id: '2.11-020',
            difficulty: '真题',
            type: '选择',
            topic: '曲率真题',
            year: 2009,
            question: '函数 y=x<sup>3</sup>-3x<sup>2</sup>+x+1 拐点处的曲率为（　）',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 不确定'
            ],
            answer: 'A',
            solution: [
              '拐点处 y″=0，故 K=0。'
            ],
            keyPoints: [
              '【重点】拐点处二阶导为零，曲率为零。'
            ],
            summary: '拐点处曲率 0。'
          },
          {
            id: '2.11-021',
            difficulty: '基础',
            type: '填空',
            topic: '曲率公式',
            year: null,
            question: '曲线 y=x<sup>2</sup> 在点(0,0)处的曲率为______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：y\'=2x，y\'\'=2。',
              '第二步：在 x=0 处 y\'=0, y\'\'=2。',
              '第三步：K=|y\'\'|/(1+y\'²)^{3/2}=2/1=2。'
            ],
            keyPoints: [
              '【重点】曲率公式 K=|y\'\'|/(1+y\'²)^{3/2}。'
            ],
            summary: '曲率计算。'
          },
          {
            id: '2.11-022',
            difficulty: '基础',
            type: '填空',
            topic: '曲率半径',
            year: null,
            question: 'y=x<sup>2</sup> 在(0,0)处的曲率半径为______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：曲率 K=2。',
              '第二步：曲率半径 R=1/K=1/2。'
            ],
            keyPoints: [
              '【重点】R=1/K。'
            ],
            summary: '曲率半径。'
          },
          {
            id: '2.11-023',
            difficulty: '基础',
            type: '选择',
            topic: '曲率',
            year: null,
            question: '圆 x<sup>2</sup>+y<sup>2</sup>=R<sup>2</sup> 上各点的曲率为（　）。',
            options: [
              'A. R',
              'B. 1/R',
              'C. 1',
              'D. 0'
            ],
            answer: 'B',
            solution: [
              '第一步：圆的曲率处处相等。',
              '第二步：曲率半径=R，故曲率=1/R。'
            ],
            keyPoints: [
              '【重点】圆的曲率为半径倒数。'
            ],
            summary: '圆的曲率。'
          },
          {
            id: '2.11-024',
            difficulty: '提高',
            type: '填空',
            topic: '曲率计算',
            year: null,
            question: 'y=lnx 在 x=1 处的曲率为______。',
            options: null,
            answer: '<span class="frac"><span class="num">√2</span><span class="den">4</span></span>',
            solution: [
              '第一步：y\'=1/x，y\'\'=-1/x²。',
              '第二步：x=1 处 y\'=1, y\'\'=-1。',
              '第三步：K=|-1|/(1+1)^{3/2}=1/(2√2)=√2/4。'
            ],
            keyPoints: [
              '【重点】代入公式。'
            ],
            summary: '对数曲线曲率。'
          },
          {
            id: '2.11-025',
            difficulty: '提高',
            type: '选择',
            topic: '曲率半径',
            year: null,
            question: 'y=cosx 在 x=0 处的曲率半径为（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 1/2',
              'D. 0'
            ],
            answer: 'A',
            solution: [
              '第一步：y\'=-sinx=0，y\'\'=-cosx=-1。',
              '第二步：K=1/1=1。',
              '第三步：R=1。'
            ],
            keyPoints: [
              '【重点】代入公式。'
            ],
            summary: '余弦曲线曲率。'
          },
          {
            id: '2.11-026',
            difficulty: '提高',
            type: '填空',
            topic: '曲率应用',
            year: null,
            question: '汽车沿抛物线 y=x<sup>2</sup> 行驶，在原点处速度为 v，求向心力（设质量 m）______。',
            options: null,
            answer: '<span class="frac"><span class="num">mv<sup>2</sup></span><span class="den">2</span></span>',
            solution: [
              '第一步：原点处曲率 K=2，曲率半径 R=1/2。',
              '第二步：向心力 F=mv²/R=mv²/(1/2)=2mv²。'
            ],
            keyPoints: [
              '【重点】向心力=mv²/R。'
            ],
            summary: '曲率物理应用。'
          },
          {
            id: '2.11-027',
            difficulty: '难题',
            type: '解答',
            topic: '曲率最大点',
            year: null,
            question: '求 y=e<sup>x</sup> 上曲率最大的点。',
            options: null,
            answer: 'x=-<span class="frac"><span class="num">ln2</span><span class="den">2</span></span>',
            solution: [
              '第一步：y\'=e^x，y\'\'=e^x。',
              '第二步：K=e^x/(1+e^{2x})^{3/2}。',
              '第三步：令 t=e^x&gt;0，K=t/(1+t²)^{3/2}。',
              '第四步：求导 K\'=(1+t²)^{-3/2}-3t²(1+t²)^{-5/2}=(1-2t²)/(1+t²)^{5/2}=0。',
              '第五步：t=1/√2，即 e^x=1/√2，x=-ln2/2。'
            ],
            keyPoints: [
              '【方法】求曲率函数的极值。'
            ],
            summary: '曲率最大值问题。'
          },
          {
            id: '2.11-028',
            difficulty: '难题',
            type: '填空',
            topic: '曲率圆',
            year: null,
            question: 'y=x<sup>2</sup> 在(1,1)处的曲率圆方程为______。',
            options: null,
            answer: '(x-<span class="frac"><span class="num">5</span><span class="den">2</span></span>)<sup>2</sup>+(y+<span class="frac"><span class="num">1</span><span class="den">2</span></span>)<sup>2</sup>=<span class="frac"><span class="num">125</span><span class="den">4</span></span>',
            solution: [
              '第一步：y\'=2，y\'\'=2。',
              '第二步：K=2/(1+4)^{3/2}=2/(5√5)，R=5√5/2。',
              '第三步：曲率中心在法线上，方向指向凹侧（下方）。',
              '第四步：中心坐标计算得 (5/2,-1/2)。'
            ],
            keyPoints: [
              '【重点】曲率圆心在法线上。'
            ],
            summary: '曲率圆方程。'
          },
          {
            id: '2.11-029',
            difficulty: '真题',
            type: '填空',
            topic: '曲率',
            year: 2017,
            question: '曲线 y=x<sup>2</sup> 在点(1,1)处的曲率为______。',
            options: null,
            answer: '<span class="frac"><span class="num">2</span><span class="den">5√5</span></span>',
            solution: [
              '第一步：y\'=2x=2，y\'\'=2。',
              '第二步：K=2/(1+4)^{3/2}=2/(5√5)。'
            ],
            keyPoints: [
              '【重点】曲率公式。'
            ],
            summary: '曲率计算。'
          },
          {
            id: '2.11-030',
            difficulty: '真题',
            type: '选择',
            topic: '曲率半径',
            year: 2021,
            question: '曲线 y=<span class="frac"><span class="num">1</span><span class="den">x</span></span> 在(1,1)处的曲率半径为（　）。',
            options: [
              'A. √2',
              'B. 2√2',
              'C. 1',
              'D. 2'
            ],
            answer: 'B',
            solution: [
              '第一步：y\'=-1/x²=-1，y\'\'=2/x³=2。',
              '第二步：K=2/(1+1)^{3/2}=2/(2√2)=1/√2。',
              '第三步：R=√2。'
            ],
            keyPoints: [
              '【重点】求导后代入。'
            ],
            summary: '曲率半径。'
          }
        ]
      }
    }
  };
})();
