(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['3'] = {
    id: 3,
    title: "一元函数积分学",
    subject: "高等数学",
    sections: {
      '3.1': {
        id: '3.1',
        title: "不定积分的概念与性质",
        questions: [
        {
          id: '3.1-001',
          difficulty: '基础',
          type: '选择',
          topic: "基本积分表",
          year: null,
          question: "计算不定积分 ∫(2<sup>x</sup> + sec<sup>2</sup>x)dx 等于（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">2<sup>x</sup></span><span class=\"den\">ln2</span></span> + tanx + C",
            "B. 2<sup>x</sup>ln2 + tanx + C",
            "C. <span class=\"frac\"><span class=\"num\">2<sup>x</sup></span><span class=\"den\">ln2</span></span> - tanx + C",
            "D. 2<sup>x</sup> + tanx + C"
          ],
          answer: "A",
          solution: [
            "第一步：利用不定积分的线性性质，分项积分。",
            "第二步：∫2<sup>x</sup>dx = <span class=\"frac\"><span class=\"num\">2<sup>x</sup></span><span class=\"den\">ln2</span></span> + C（记住指数函数积分公式）。",
            "第三步：∫sec<sup>2</sup>x dx = tanx + C。",
            "第四步：合并得结果。"
          ],
          keyPoints: [
            "【重点】指数函数积分公式 ∫a<sup>x</sup>dx = a<sup>x</sup>/lna + C。",
            "【易错点】∫2<sup>x</sup>dx 不要误写成 2<sup>x</sup>/x 或 2<sup>x</sup>·ln2。"
          ],
          summary: "基本初等函数积分公式直接套用，分项后逐项积分再加常数 C。"
        }
,
        {
          id: '3.1-002',
          difficulty: '基础',
          type: '填空',
          topic: "幂函数积分",
          year: null,
          question: "∫(x√x + 1/x<sup>2</sup>)dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>x<sup>5/2</sup> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：化为幂函数，x√x = x<sup>3/2</sup>，1/x<sup>2</sup> = x<sup>-2</sup>。",
            "第二步：∫x<sup>3/2</sup>dx = (2/5)x<sup>5/2</sup>。",
            "第三步：∫x<sup>-2</sup>dx = -x<sup>-1</sup> = -1/x。",
            "第四步：相加并加常数 C。"
          ],
          keyPoints: [
            "【重点】幂函数积分 ∫x<sup>α</sup>dx = x<sup>α+1</sup>/(α+1)+C (α≠-1)。",
            "【易错点】指数 3/2 加 1 得 5/2，系数取倒数 2/5，别算错。"
          ],
          summary: "先把根式、分式统一成幂函数形式，再用幂函数积分公式。"
        }
,
        {
          id: '3.1-003',
          difficulty: '基础',
          type: '选择',
          topic: "原函数与被积函数关系",
          year: null,
          question: "若 ∫f(x)dx = xlnx + C，则 f(x) =（  ）",
          options: [
            "A. lnx + 1",
            "B. lnx",
            "C. xlnx",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：不定积分结果 F(x)=xlnx 是 f(x) 的一个原函数。",
            "第二步：由定义 f(x) = F'(x) = (xlnx)'。",
            "第三步：求导得 lnx + x·(1/x) = lnx + 1。"
          ],
          keyPoints: [
            "【重点】积分与求导互逆：F(x)=∫f(x)dx ⇒ F'(x)=f(x)。",
            "【简便方法】已知积分结果反求被积函数，直接对结果求导即可。"
          ],
          summary: "不定积分结果求导即还原被积函数。"
        }
,
        {
          id: '3.1-004',
          difficulty: '基础',
          type: '填空',
          topic: "三角恒等变形后积分",
          year: null,
          question: "∫tan<sup>2</sup>x dx = ________。",
          options: null,
          answer: "tanx - x + C",
          solution: [
            "第一步：利用恒等式 tan<sup>2</sup>x = sec<sup>2</sup>x - 1。",
            "第二步：∫(sec<sup>2</sup>x - 1)dx = tanx - x + C。"
          ],
          keyPoints: [
            "【重点】tan<sup>2</sup>x = sec<sup>2</sup>x - 1，这是化 tan<sup>2</sup> 积分的关键。",
            "【易错点】不要把 tan<sup>2</sup>x 当成可直接积分的形式。"
          ],
          summary: "正切平方先化为 sec²−1 再积分。"
        }
,
        {
          id: '3.1-005',
          difficulty: '基础',
          type: '选择',
          topic: "原函数的判定",
          year: null,
          question: "下列函数中，是 e<sup>2x</sup> 的一个原函数的是（  ）",
          options: [
            "A. e<sup>2x</sup>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>2x</sup>",
            "C. 2e<sup>2x</sup>",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>x</sup>"
          ],
          answer: "B",
          solution: [
            "第一步：若 F(x) 是 e<sup>2x</sup> 的原函数，则 F'(x)=e<sup>2x</sup>。",
            "第二步：对 (1/2)e<sup>2x</sup> 求导得 (1/2)·2e<sup>2x</sup>=e<sup>2x</sup>，符合。"
          ],
          keyPoints: [
            "【简便方法】逐一求导验证，只有 (1/2)e<sup>2x</sup> 求导后等于 e<sup>2x</sup>。"
          ],
          summary: "判定原函数最稳妥的办法就是求导验证。"
        }
,
        {
          id: '3.1-006',
          difficulty: '基础',
          type: '解答',
          topic: "复合导数还原原函数",
          year: null,
          question: "设 f'(sin<sup>2</sup>x) = cos<sup>2</sup>x，求 f(x)。",
          options: null,
          answer: "f(x) = x - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup> + C",
          solution: [
            "第一步：令 u = sin<sup>2</sup>x，则 cos<sup>2</sup>x = 1 - sin<sup>2</sup>x = 1 - u。",
            "第二步：于是 f'(u) = 1 - u。",
            "第三步：对 u 积分，f(u) = ∫(1-u)du = u - u<sup>2</sup>/2 + C。",
            "第四步：换回变量，f(x) = x - x<sup>2</sup>/2 + C。"
          ],
          keyPoints: [
            "【重点】通过中间变量 u=f(...) 把 f'(...) 的表达式换成 f'(u)，再积分。",
            "【易错点】不要把 f'(sin²x) 误认为 f(sin²x) 的导数代入后还含 x。"
          ],
          summary: "已知复合形式的导函数，换元成单一变量后积分即得原函数。"
        }
,
        {
          id: '3.1-007',
          difficulty: '提高',
          type: '选择',
          topic: "两层原函数关系",
          year: null,
          question: "若 f(x) 的导函数是 sinx，则 f(x) 的一个原函数是（  ）",
          options: [
            "A. 1 + sinx",
            "B. 1 - sinx",
            "C. 1 + cosx",
            "D. 1 - cosx"
          ],
          answer: "B",
          solution: [
            "第一步：f'(x) = sinx，所以 f(x) = ∫sinx dx = -cosx + C，取 f(x) = -cosx。",
            "第二步：再求 f(x) 的原函数：∫(-cosx)dx = -sinx + C。",
            "第三步：取 C=1，得 1 - sinx，对应选项 B。"
          ],
          keyPoints: [
            "【重点】\"导函数是 sinx\" 与 \"原函数是 sinx\" 要分清，本题要积分两次。",
            "【易错点】只求一次积分就选答案会得到 -cosx，不在选项中，需再积一次。"
          ],
          summary: "从导函数出发逐次积分，理清\"谁是谁的原函数\"。"
        }
,
        {
          id: '3.1-008',
          difficulty: '提高',
          type: '填空',
          topic: "三角恒等化简积分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">1 + cos<sup>2</sup>x</span><span class=\"den\">1 + cos2x</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(tanx + x) + C",
          solution: [
            "第一步：用倍角公式 1 + cos2x = 2cos<sup>2</sup>x。",
            "第二步：被积式化为 (1+cos<sup>2</sup>x)/(2cos<sup>2</sup>x) = (1/2)(sec<sup>2</sup>x + 1)。",
            "第三步：积分得 (1/2)(tanx + x) + C。"
          ],
          keyPoints: [
            "【重点】分母 1+cos2x 用二倍角化为 2cos²x，从而拆出 sec²x。",
            "【简便方法】见到 1±cos2x 优先用倍角公式化简。"
          ],
          summary: "利用二倍角公式把分母化为 cos²x，再拆项积分。"
        }
,
        {
          id: '3.1-009',
          difficulty: '提高',
          type: '选择',
          topic: "积分反求后再积分",
          year: null,
          question: "设 ∫x·f(x)dx = arcsinx + C，则 ∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">f(x)</span></span>dx =（  ）",
          options: [
            "A. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>(1-x<sup>2</sup>)<sup>3/2</sup> + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>(1-x<sup>2</sup>)<sup>3/2</sup> + C",
            "C. -(1-x<sup>2</sup>)<sup>3/2</sup> + C",
            "D. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>(1+x<sup>2</sup>)<sup>3/2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：两边对 x 求导，得 x·f(x) = 1/√(1-x<sup>2</sup>)。",
            "第二步：解出 f(x) = 1/[x√(1-x<sup>2</sup>)]，于是 1/f(x) = x√(1-x<sup>2</sup>)。",
            "第三步：∫x√(1-x<sup>2</sup>)dx，令 u=1-x<sup>2</sup>，du=-2x dx，得 -1/2·(2/3)u<sup>3/2</sup> = -1/3(1-x<sup>2</sup>)<sup>3/2</sup>+C。"
          ],
          keyPoints: [
            "【重点】先对积分等式求导解出 f(x)，再代入所求积分。",
            "【易错点】求导时别丢 x 因子。"
          ],
          summary: "已知含 f(x) 的积分等式，先求导解 f(x)，再算目标积分。"
        }
,
        {
          id: '3.1-010',
          difficulty: '提高',
          type: '填空',
          topic: "多项式拆分积分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">3x<sup>4</sup> + 3x<sup>2</sup> + 1</span><span class=\"den\">x<sup>2</sup> + 1</span></span>dx = ________。",
          options: null,
          answer: "x<sup>3</sup> + arctanx + C",
          solution: [
            "第一步：作多项式除法，(3x<sup>4</sup>+3x<sup>2</sup>+1)/(x<sup>2</sup>+1) = 3x<sup>2</sup> + 1/(x<sup>2</sup>+1)。",
            "第二步：验证：3x<sup>2</sup>(x<sup>2</sup>+1)=3x<sup>4</sup>+3x<sup>2</sup>，余式恰为 1。",
            "第三步：积分 ∫3x<sup>2</sup>dx = x<sup>3</sup>，∫1/(x<sup>2</sup>+1)dx = arctanx。"
          ],
          keyPoints: [
            "【重点】假分式先做多项式除法降次，化为整式加真分式。",
            "【简便方法】观察到分子 = 3x²(x²+1)+1，直接拆分。"
          ],
          summary: "假分式除法拆成整式 + 真分式，再分别积分。"
        }
,
        {
          id: '3.1-011',
          difficulty: '提高',
          type: '解答',
          topic: "含绝对值函数的不定积分",
          year: null,
          question: "求不定积分 ∫e<sup>|x|</sup>dx。",
          options: null,
          answer: "x≥0 时 e<sup>x</sup>+C；x&lt;0 时 -e<sup>-x</sup>+C₁，并取 C₁=C+2 使原函数在 x=0 处连续",
          solution: [
            "第一步：分段脱去绝对值：x≥0 时 e<sup>|x|</sup>=e<sup>x</sup>，x&lt;0 时 e<sup>|x|</sup>=e<sup>-x</sup>。",
            "第二步：x≥0 积分得 e<sup>x</sup>+C；x&lt;0 积分得 -e<sup>-x</sup>+C₁。",
            "第三步：要求原函数连续可导（在 x=0 处连续），令两式在 x=0 相等：1+C = -1+C₁，得 C₁ = C+2。"
          ],
          keyPoints: [
            "【重点】分段函数积分后，各段常数必须衔接，保证原函数连续。",
            "【易错点】各段随意加 C 而不衔接，会导致原函数在分段点不连续，从而不可导。"
          ],
          summary: "含绝对值先分段积分，再用连续性条件统一常数。"
        }
,
        {
          id: '3.1-012',
          difficulty: '提高',
          type: '选择',
          topic: "微分与积分互逆运算",
          year: null,
          question: "设 f(x) 可导，则下列各式正确的是（  ）",
          options: [
            "A. [∫f(x)dx]' = f(x)",
            "B. ∫f'(x)dx = f(x)",
            "C. d[∫f(x)dx] = f(x)",
            "D. ∫f(x)dx = f'(x)"
          ],
          answer: "A",
          solution: [
            "第一步：不定积分 ∫f(x)dx 表示一族原函数 F(x)+C。",
            "第二步：对其求导 [∫f(x)dx]' = F'(x) = f(x)，A 正确。",
            "第三步：B 漏写 +C；C 右边应为微分 f(x)dx；D 概念颠倒。"
          ],
          keyPoints: [
            "【重点】微分与积分互逆，但 ∫f'(x)dx = f(x)+C 必须带常数。",
            "【易错点】B 选项少了 +C，是常见陷阱。"
          ],
          summary: "求导/微分脱去积分号要还原被积函数，积分号脱去导函数要补常数 C。"
        }
,
        {
          id: '3.1-013',
          difficulty: '难题',
          type: '选择',
          topic: "复合导函数求原函数并定常数",
          year: null,
          question: "设 f'(lnx) = x（x&gt;1），且 f(0) = 1，则 f(x) =（  ）",
          options: [
            "A. e<sup>x</sup>",
            "B. e<sup>x</sup> + 1",
            "C. e<sup>x</sup> - 1",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>2x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：令 t = lnx，则 x = e<sup>t</sup>（t&gt;0），故 f'(t) = e<sup>t</sup>。",
            "第二步：积分得 f(t) = e<sup>t</sup> + C，即 f(x)=e<sup>x</sup>+C。",
            "第三步：代入 f(0)=1：e<sup>0</sup>+C = 1 ⇒ C=0，故 f(x)=e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】换元把 f'(lnx) 转成 f'(t)，再积分并用初值定 C。",
            "【易错点】不要直接对 f'(lnx) 关于 lnx 积分而忘记变量替换。"
          ],
          summary: "复合导函数先换元成 f'(t)，积分后用初值定常数。"
        }
,
        {
          id: '3.1-014',
          difficulty: '难题',
          type: '填空',
          topic: "分段最大值函数的不定积分",
          year: null,
          question: "∫max(1, x<sup>2</sup>)dx = ________。",
          options: null,
          answer: "|x|≤1 时 x+C；|x|&gt;1 时 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>x<sup>3</sup> + <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>·sgn(x) + C（保证在 x=±1 连续）",
          solution: [
            "第一步：分段：|x|≤1 时 max(1,x²)=1；x&gt;1 时为 x²；x&lt;-1 时为 x²。",
            "第二步：|x|≤1 积分得 x+C；x&gt;1 积分得 x³/3+C₁；x&lt;-1 积分得 x³/3+C₂。",
            "第三步：由 x=1 连续：1+C = 1/3+C₁ ⇒ C₁=C+2/3；由 x=-1 连续：-1+C = -1/3+C₂ ⇒ C₂=C-2/3。"
          ],
          keyPoints: [
            "【重点】max、min 型函数必须分段积分并在分段点衔接常数。",
            "【易错点】x&gt;1 与 x&lt;-1 两段常数不同，分别由 x=±1 连续条件确定。"
          ],
          summary: "max/min 函数先分段，各段积分后用分段点连续性统一常数。"
        }
,
        {
          id: '3.1-015',
          difficulty: '难题',
          type: '解答',
          topic: "由导数方程求原函数",
          year: null,
          question: "设 F(x) 是 f(x) 的一个原函数，且当 x≥0 时 f(x)F(x) = x·e<sup>x</sup>/(2(1+x)<sup>2</sup>)，又 F(0)=1，F(x)&gt;0，求 f(x)。",
          options: null,
          answer: "f(x) = <span class=\"frac\"><span class=\"num\">x·e<sup>x/2</sup></span><span class=\"den\">2(1+x)</span></span>",
          solution: [
            "第一步：注意到 f(x)F(x) = (1/2)(F<sup>2</sup>(x))'，于是 (F<sup>2</sup>(x))' = x·e<sup>x</sup>/(1+x)<sup>2</sup>。",
            "第二步：积分 F<sup>2</sup>(x) = ∫x·e<sup>x</sup>/(1+x)<sup>2</sup>dx。分部积分可得结果为 e<sup>x</sup>/(1+x) + C。",
            "第三步：由 F(0)=1 得 F²(0)=1 = e⁰/(1+0)+C = 1+C ⇒ C=0，故 F<sup>2</sup>(x)=e<sup>x</sup>/(1+x)。",
            "第四步：因 F&gt;0，F(x)=e<sup>x/2</sup>/√(1+x)，求导得 f(x)=F'(x)。"
          ],
          keyPoints: [
            "【重点】识别 fF = (1/2)(F²)'，把 f(x)F(x) 整体凑成某函数的导数。",
            "【难点】本题技巧性强，关键在凑微分与利用初值定常数。"
          ],
          summary: "当条件给出 f(x)F(x) 的乘积时，凑成 (F²)'/2 往往是突破口。"
        }
,
        {
          id: '3.1-016',
          difficulty: '难题',
          type: '选择',
          topic: "原函数存在性与连续性",
          year: null,
          question: "设 f(x) 在 [a,b] 上有定义，则下列说法正确的是（  ）",
          options: [
            "A. 若 f(x) 在 [a,b] 上可积，则 f(x) 必有原函数",
            "B. 若 f(x) 在 [a,b] 上有原函数，则 f(x) 必连续",
            "C. 若 f(x) 在 [a,b] 上连续，则 f(x) 必有原函数",
            "D. 含有第一类间断点的函数必有原函数"
          ],
          answer: "C",
          solution: [
            "第一步：连续函数一定存在原函数（由变限积分定理保证），C 正确。",
            "第二步：可积函数未必有原函数（如带第一类间断点的函数可积但无原函数），A、D 错。",
            "第三步：有原函数的函数未必连续（如某些振荡型导函数），B 错。"
          ],
          keyPoints: [
            "【重点】连续 ⇒ 有原函数；可积与有原函数互不等价。",
            "【易错点】\"可积\"与\"存在原函数\"是两回事，不能混淆。"
          ],
          summary: "连续函数必有原函数；可积 ≠ 有原函数。"
        }
,
        {
          id: '3.1-017',
          difficulty: '真题',
          type: '填空',
          topic: "不定积分计算",
          year: 2012,
          question: "设 f(x) 的一个原函数为 <span class=\"frac\"><span class=\"num\">sinx</span><span class=\"den\">x</span></span>，则 ∫x f'(x)dx = ________。",
          options: null,
          answer: "cosx - <span class=\"frac\"><span class=\"num\">2sinx</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：原函数 F(x)=sinx/x，故 f(x)=F'(x)=(xcosx-sinx)/x<sup>2</sup>。",
            "第二步：∫x f'(x)dx 分部积分 = x f(x) - ∫f(x)dx = x f(x) - F(x) + C。",
            "第三步：代入 x f(x) = (xcosx-sinx)/x = cosx - sinx/x，再减 F(x)=sinx/x，得 cosx - 2sinx/x + C。"
          ],
          keyPoints: [
            "【重点】∫x f'(x)dx 用分部积分化为 x f(x)-∫f(x)dx，避免直接求 f'(x)。",
            "【真题高频】已知原函数求含 f' 的积分，分部积分是标准套路。"
          ],
          summary: "遇到 xf'(x) 型积分，分部积分后用原函数代回，最省力。"
        }
,
        {
          id: '3.1-018',
          difficulty: '真题',
          type: '选择',
          topic: "原函数与导函数关系",
          year: 2009,
          question: "若 ∫f(x)e<sup>-1/x</sup>dx = e<sup>-1/x</sup> + C，则 f(x) =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>",
            "B. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>",
            "D. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：对等式两边求导：f(x)e<sup>-1/x</sup> = (e<sup>-1/x</sup>)'。",
            "第二步：由链式法则 (e<sup>-1/x</sup>)' = e<sup>-1/x</sup>·(-1/x)' = e<sup>-1/x</sup>·(1/x<sup>2</sup>)。",
            "第三步：两边约去 e<sup>-1/x</sup>，得 f(x) = 1/x<sup>2</sup>。"
          ],
          keyPoints: [
            "【重点】积分结果求导还原被积函数，链式求导勿漏内导（(-1/x)'=1/x²）。"
          ],
          summary: "等式两边求导是反解被积函数的通用手段。"
        }
,
        {
          id: '3.1-019',
          difficulty: '真题',
          type: '解答',
          topic: "由原函数反求被积函数",
          year: 2014,
          question: "设 f(x) 的一个原函数为 ln<sup>2</sup>x，则 ∫x f'(x)dx = ________。",
          options: null,
          answer: "2lnx - ln<sup>2</sup>x + C",
          solution: [
            "第一步：原函数 F(x)=ln<sup>2</sup>x，故 f(x)=F'(x)=2lnx/x。",
            "第二步：∫x f'(x)dx 分部积分 = x f(x) - ∫f(x)dx = x f(x) - F(x) + C。",
            "第三步：代入 x f(x) = x·(2lnx/x)=2lnx，减去 F(x)=ln²x，得 2lnx - ln²x + C。"
          ],
          keyPoints: [
            "【重点】∫x f'(x)dx = x f(x) - ∫f(x)dx，分部积分避免直接求 f'。",
            "【真题高频】已知原函数求含 f' 的积分，分部积分是标准套路。"
          ],
          summary: "遇到 xf'(x) 型积分，分部积分后用原函数代回。"
        }
,
        {
          id: '3.1-020',
          difficulty: '真题',
          type: '填空',
          topic: "基本不定积分",
          year: 2016,
          question: "∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">sin<sup>2</sup>x cos<sup>2</sup>x</span></span>dx = ________。",
          options: null,
          answer: "tanx - cotx + C（= -2cot2x + C）",
          solution: [
            "第一步：1/(sin²x cos²x) = 4/sin²2x = 4csc²2x。",
            "第二步：∫4csc²2x dx = 4·(-1/2)cot2x = -2cot2x + C。",
            "第三步：利用 -2cot2x = tanx - cotx，两种形式等价。"
          ],
          keyPoints: [
            "【重点】sinxcosx = (1/2)sin2x，故 1/(sin²xcos²x)=4/sin²2x。",
            "【真题高频】csc² 积分 = -cot。"
          ],
          summary: "见到 sin²xcos²x 乘积，倍角化为 sin2x 再积分。"
        }
,
        {
          id: '3.1-021',
          difficulty: '基础',
          type: '选择',
          topic: "基本积分表",
          year: null,
          question: "计算不定积分 ∫(3<sup>x</sup> + x<sup>-2</sup>)dx 等于（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">3<sup>x</sup></span><span class=\"den\">ln3</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
            "B. 3<sup>x</sup>ln3 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
            "C. <span class=\"frac\"><span class=\"num\">3<sup>x</sup></span><span class=\"den\">ln3</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
            "D. 3<sup>x</sup> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：分项积分 ∫3<sup>x</sup>dx + ∫x<sup>-2</sup>dx。",
            "第二步：∫3<sup>x</sup>dx = <span class=\"frac\"><span class=\"num\">3<sup>x</sup></span><span class=\"den\">ln3</span></span> + C。",
            "第三步：∫x<sup>-2</sup>dx = <span class=\"frac\"><span class=\"num\">x<sup>-1</sup></span><span class=\"den\">-1</span></span> = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C。",
            "第四步：合并即得 A。"
          ],
          keyPoints: [
            "【重点】指数函数积分公式 ∫a<sup>x</sup>dx = <span class=\"frac\"><span class=\"num\">a<sup>x</sup></span><span class=\"den\">lna</span></span> + C。",
            "【易错点】幂函数 ∫x<sup>n</sup>dx 中 n=-2 时仍用幂函数公式，结果为 -1/x。"
          ],
          summary: "分项后套用基本积分表，注意指数函数除以 lna。"
        }
,
        {
          id: '3.1-022',
          difficulty: '基础',
          type: '填空',
          topic: "多项式展开积分",
          year: null,
          question: "∫(√x - 1)<sup>2</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup> - <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>x<sup>3/2</sup> + x + C",
          solution: [
            "第一步：展开 (√x - 1)<sup>2</sup> = x - 2√x + 1。",
            "第二步：∫x dx = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup>。",
            "第三步：∫2√x dx = 2·<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup> = <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>x<sup>3/2</sup>。",
            "第四步：∫1 dx = x，合并加 C。"
          ],
          keyPoints: [
            "【重点】先展开再逐项积分，避免直接对乘积积分。",
            "【易错点】√x = x<sup>1/2</sup>，积分后指数为 3/2。"
          ],
          summary: "含根号的多项式先展开，再按幂函数公式逐项积分。"
        }
,
        {
          id: '3.1-023',
          difficulty: '提高',
          type: '选择',
          topic: "原函数与导数关系",
          year: null,
          question: "设 F(x) 是 f(x) 的一个原函数，则 f(x) 的全体原函数为（  ）",
          options: [
            "A. F(x) + C",
            "B. F(x + C)",
            "C. F'(x) + C",
            "D. C·F(x)"
          ],
          answer: "A",
          solution: [
            "第一步：原函数定义：若 F'(x)=f(x)，则 F(x) 为 f(x) 的一个原函数。",
            "第二步：全体原函数即原函数族 F(x)+C，C 为任意常数。",
            "第三步：B 是平移，C 是导函数，D 是数乘，均非原函数族。"
          ],
          keyPoints: [
            "【重点】不定积分 = 一个原函数 + 任意常数 C。",
            "【易错点】C 是加在原函数上，不是乘或平移。"
          ],
          summary: "全体原函数构成相差常数 C 的一族函数。"
        }
,
        {
          id: '3.1-024',
          difficulty: '基础',
          type: '填空',
          topic: "指数函数积分",
          year: null,
          question: "∫e<sup>x</sup>·3<sup>x</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">(3e)<sup>x</sup></span><span class=\"den\">ln(3e)</span></span> + C = <span class=\"frac\"><span class=\"num\">(3e)<sup>x</sup></span><span class=\"den\">1 + ln3</span></span> + C",
          solution: [
            "第一步：e<sup>x</sup>·3<sup>x</sup> = (3e)<sup>x</sup>。",
            "第二步：套用 ∫a<sup>x</sup>dx = <span class=\"frac\"><span class=\"num\">a<sup>x</sup></span><span class=\"den\">lna</span></span> + C，取 a=3e。",
            "第三步：ln(3e) = ln3 + lne = 1 + ln3。"
          ],
          keyPoints: [
            "【重点】同指数幂合并：a<sup>x</sup>b<sup>x</sup> = (ab)<sup>x</sup>。",
            "【易错点】分母是 ln(3e)，不是 ln3。"
          ],
          summary: "乘积指数函数合并底数后再套用指数积分公式。"
        }
,
        {
          id: '3.1-025',
          difficulty: '提高',
          type: '填空',
          topic: "三角恒等变形积分",
          year: null,
          question: "∫(tanx + cotx)<sup>2</sup>dx = ________。",
          options: null,
          answer: "tanx - cotx - 2x + C",
          solution: [
            "第一步：展开 (tanx+cotx)<sup>2</sup> = tan<sup>2</sup>x + 2 + cot<sup>2</sup>x。",
            "第二步：tan<sup>2</sup>x = sec<sup>2</sup>x - 1，cot<sup>2</sup>x = csc<sup>2</sup>x - 1。",
            "第三步：合并得 sec<sup>2</sup>x + csc<sup>2</sup>x。",
            "第四步：∫sec<sup>2</sup>x dx = tanx，∫csc<sup>2</sup>x dx = -cotx。"
          ],
          keyPoints: [
            "【重点】1+tan<sup>2</sup>x=sec<sup>2</sup>x，1+cot<sup>2</sup>x=csc<sup>2</sup>x。",
            "【易错点】展开后常数项 2 与 -1-1 抵消。"
          ],
          summary: "三角平方先展开再用恒等式化为可积的 sec²/csc²。"
        }
,
        {
          id: '3.1-026',
          difficulty: '难题',
          type: '选择',
          topic: "由原函数求导",
          year: null,
          question: "设 ∫f(x)dx = x<sup>2</sup>sinx + C，则 f'(x) = （  ）",
          options: [
            "A. 2sinx + 2xcosx",
            "B. 2cosx - 2xsinx",
            "C. 2sinx + 4xcosx - x<sup>2</sup>sinx",
            "D. 2cosx - x<sup>2</sup>sinx"
          ],
          answer: "C",
          solution: [
            "第一步：f(x) = (x<sup>2</sup>sinx)' = 2xsinx + x<sup>2</sup>cosx。",
            "第二步：f'(x) = 2sinx + 2xcosx + 2xcosx - x<sup>2</sup>sinx = 2sinx + 4xcosx - x<sup>2</sup>sinx。",
            "第三步：对照选项，正确为 C。"
          ],
          keyPoints: [
            "【重点】不定积分求导即还原被积函数，再求导要逐项用乘积法则。",
            "【易错点】x<sup>2</sup>cosx 求导会产生两项，交叉项 2xcosx 出现两次。"
          ],
          summary: "由不定积分求导两次：先得 f(x)，再用乘积法则求 f'(x)。"
        }
,
        {
          id: '3.1-027',
          difficulty: '基础',
          type: '解答',
          topic: "有理函数拆分积分",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">1 + x<sup>2</sup></span></span>dx。",
          options: null,
          answer: "x - arctanx + C",
          solution: [
            "第一步：分子凑分母：<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">1+x<sup>2</sup></span></span> = <span class=\"frac\"><span class=\"num\">x<sup>2</sup>+1-1</span><span class=\"den\">1+x<sup>2</sup></span></span> = 1 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>。",
            "第二步：∫1 dx = x。",
            "第三步：∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>dx = arctanx。",
            "第四步：合并 x - arctanx + C。"
          ],
          keyPoints: [
            "【重点】分子次数≥分母时先做多项式除法或凑项。",
            "【易错点】arctanx 的导数是 1/(1+x²)。"
          ],
          summary: "假分式先化为整式加真分式，再分项积分。"
        }
,
        {
          id: '3.1-028',
          difficulty: '真题',
          type: '填空',
          topic: "基本不定积分",
          year: 2019,
          question: "∫<span class=\"frac\"><span class=\"num\">(x+1)<sup>2</sup></span><span class=\"den\">√x</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>x<sup>5/2</sup> + <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>x<sup>3/2</sup> + 2x<sup>1/2</sup> + C",
          solution: [
            "第一步：展开分子 (x+1)<sup>2</sup> = x<sup>2</sup> + 2x + 1。",
            "第二步：除以 √x 得 x<sup>3/2</sup> + 2x<sup>1/2</sup> + x<sup>-1/2</sup>。",
            "第三步：逐项积分，指数各加 1 再除以新指数。",
            "第四步：得 <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>x<sup>5/2</sup> + <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>x<sup>3/2</sup> + 2x<sup>1/2</sup> + C。"
          ],
          keyPoints: [
            "【真题高频】多项式除以幂函数，先化简再积分。",
            "【易错点】x<sup>-1/2</sup> 积分后为 2x<sup>1/2</sup>，系数不要丢。"
          ],
          summary: "被积函数为分式时先化为幂函数和，再逐项套公式。"
        }
,
        {
          id: '3.1-029',
          difficulty: '真题',
          type: '选择',
          topic: "原函数存在定理",
          year: 2014,
          question: "若 f(x) 在 [a,b] 上有第一类间断点，则 f(x) 在 [a,b] 上（  ）",
          options: [
            "A. 必存在原函数",
            "B. 必不存在原函数",
            "C. 可能存在原函数",
            "D. 必可积但无原函数"
          ],
          answer: "B",
          solution: [
            "第一步：原函数存在定理：连续函数必有原函数。",
            "第二步：若 F(x) 可导，则 F'(x) 不会有第一类间断点（导函数介值性，达布定理）。",
            "第三步：故有第一类间断点的函数必不存在原函数。"
          ],
          keyPoints: [
            "【重点】导函数没有第一类间断点（达布定理）。",
            "【易错点】有第一类间断点 ≠ 不可积，但一定无原函数。"
          ],
          summary: "原函数存在的必要条件：被积函数不能有第一类间断点。"
        }
,
        {
          id: '3.1-030',
          difficulty: '提高',
          type: '解答',
          topic: "裂项积分",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup>(1 + x<sup>2</sup>)</span></span>dx。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> - arctanx + C",
          solution: [
            "第一步：裂项 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup>(1+x<sup>2</sup>)</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>。",
            "第二步：∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>。",
            "第三步：∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>dx = arctanx。",
            "第四步：合并 -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> - arctanx + C。"
          ],
          keyPoints: [
            "【重点】<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup>(1+x<sup>2</sup>)</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span> 是常用裂项。",
            "【易错点】裂项后第二项是减号，积分时符号要一致。"
          ],
          summary: "分母乘积且对应项互补时，用 1/(ab)=1/a-1/b 裂项。"
        }
        ]
      },
      '3.2': {
        id: '3.2',
        title: "换元积分法",
        questions: [
        {
          id: '3.2-001',
          difficulty: '基础',
          type: '填空',
          topic: "凑微分（幂型）",
          year: null,
          question: "∫(2x+1)<sup>10</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">(2x+1)<sup>11</sup></span><span class=\"den\">22</span></span> + C",
          solution: [
            "第一步：令 u=2x+1，du=2dx，dx=du/2。",
            "第二步：∫u<sup>10</sup>·(du/2) = (1/2)·u<sup>11</sup>/11 = (2x+1)<sup>11</sup>/22 + C。"
          ],
          keyPoints: [
            "【重点】一次式 ax+b 的积分，凑微分时别漏系数 1/a。"
          ],
          summary: "ax+b 型直接凑微分，注意补 1/a。"
        }
,
        {
          id: '3.2-002',
          difficulty: '基础',
          type: '选择',
          topic: "凑微分（指数型）",
          year: null,
          question: "∫x e<sup>x<sup>2</sup></sup>dx =（  ）",
          options: [
            "A. e<sup>x<sup>2</sup></sup> + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>x<sup>2</sup></sup> + C",
            "C. 2e<sup>x<sup>2</sup></sup> + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup>e<sup>x<sup>2</sup></sup> + C"
          ],
          answer: "B",
          solution: [
            "第一步：注意到 (x²)'=2x，故 x dx = (1/2)d(x²)。",
            "第二步：∫e^{x²}·x dx = (1/2)∫e^{x²}d(x²) = (1/2)e^{x²}+C。"
          ],
          keyPoints: [
            "【重点】被积函数出现 x·f(x²) 时，令 u=x²。",
            "【易错点】别漏系数 1/2。"
          ],
          summary: "x 与 x² 复合相乘，凑 d(x²)。"
        }
,
        {
          id: '3.2-003',
          difficulty: '基础',
          type: '填空',
          topic: "正切积分",
          year: null,
          question: "∫tanx dx = ________。",
          options: null,
          answer: "-ln|cosx| + C",
          solution: [
            "第一步：tanx = sinx/cosx。",
            "第二步：∫(sinx/cosx)dx = -∫d(cosx)/cosx = -ln|cosx|+C。"
          ],
          keyPoints: [
            "【重点】∫tanx dx = -ln|cosx|，∫cotx dx = ln|sinx|，当公式记。"
          ],
          summary: "tanx、cotx 化为 sin/cos 后凑分母微分。"
        }
,
        {
          id: '3.2-004',
          difficulty: '基础',
          type: '选择',
          topic: "arctan 型积分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">a<sup>2</sup> + x<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">a</span></span>arctan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
            "B. arctan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">a</span></span>arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
            "D. ln(a²+x²) + C"
          ],
          answer: "A",
          solution: [
            "第一步：分子分母同除 a²：1/(a²+x²) = (1/a²)·1/(1+(x/a)²)。",
            "第二步：dx = a d(x/a)，得 (1/a)∫d(x/a)/(1+(x/a)²) = (1/a)arctan(x/a)+C。"
          ],
          keyPoints: [
            "【重点】∫1/(a²+x²)dx=(1/a)arctan(x/a)，a=1 时退化为 arctanx。"
          ],
          summary: "二次和的倒数配出 arctan 形式。"
        }
,
        {
          id: '3.2-005',
          difficulty: '基础',
          type: '填空',
          topic: "lnx 凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">x</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(lnx)<sup>2</sup> + C",
          solution: [
            "第一步：注意到 (lnx)'=1/x，故 (1/x)dx = d(lnx)。",
            "第二步：∫lnx d(lnx) = (1/2)(lnx)² + C。"
          ],
          keyPoints: [
            "【重点】1/x dx = d(lnx)，常见凑微分。"
          ],
          summary: "见到 (1/x)·f(lnx) 令 u=lnx。"
        }
,
        {
          id: '3.2-006',
          difficulty: '基础',
          type: '选择',
          topic: "指数与三角复合",
          year: null,
          question: "∫e<sup>x</sup>cos(e<sup>x</sup>)dx =（  ）",
          options: [
            "A. -sin(e<sup>x</sup>) + C",
            "B. sin(e<sup>x</sup>) + C",
            "C. cos(e<sup>x</sup>) + C",
            "D. e<sup>x</sup>sin(e<sup>x</sup>) + C"
          ],
          answer: "B",
          solution: [
            "第一步：e<sup>x</sup>dx = d(e<sup>x</sup>)。",
            "第二步：∫cos(e<sup>x</sup>)d(e<sup>x</sup>) = sin(e<sup>x</sup>)+C。"
          ],
          keyPoints: [
            "【重点】e<sup>x</sup>dx = d(e<sup>x</sup>)，与内层函数配合凑微分。"
          ],
          summary: "e^x dx 与 f(e^x) 搭配时直接凑 d(e^x)。"
        }
,
        {
          id: '3.2-007',
          difficulty: '基础',
          type: '填空',
          topic: "arcsin 型积分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√(a<sup>2</sup>-x<sup>2</sup>)</span></span>dx = ________。",
          options: null,
          answer: "arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
          solution: [
            "第一步：提取 a：1/√(a²-x²) = (1/a)/√(1-(x/a)²)。",
            "第二步：dx = a d(x/a)，得 ∫d(x/a)/√(1-(x/a)²) = arcsin(x/a)+C。"
          ],
          keyPoints: [
            "【重点】∫1/√(a²-x²)dx = arcsin(x/a)+C。"
          ],
          summary: "√(a²−x²) 在分母时配 arcsin。"
        }
,
        {
          id: '3.2-008',
          difficulty: '基础',
          type: '选择',
          topic: "三角函数幂次凑微分",
          year: null,
          question: "∫cos<sup>3</sup>x sinx dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>cos<sup>4</sup>x + C",
            "B. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>cos<sup>4</sup>x + C",
            "C. -cos<sup>4</sup>x + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>sin<sup>4</sup>x + C"
          ],
          answer: "B",
          solution: [
            "第一步：(cosx)' = -sinx，故 sinx dx = -d(cosx)。",
            "第二步：∫cos³x·(-d cosx) = -cos⁴x/4 + C。"
          ],
          keyPoints: [
            "【重点】奇次幂三角积分，把奇次的一个因子配成微分。",
            "【易错点】符号：sinx dx = -d(cosx)。"
          ],
          summary: "sin/cos 奇次幂，留一个配微分、其余降幂。"
        }
,
        {
          id: '3.2-009',
          difficulty: '基础',
          type: '填空',
          topic: "配方后 arctan",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup> + 2x + 2</span></span>dx = ________。",
          options: null,
          answer: "arctan(x+1) + C",
          solution: [
            "第一步：配方 x²+2x+2 = (x+1)²+1。",
            "第二步：∫d(x+1)/[(x+1)²+1] = arctan(x+1)+C。"
          ],
          keyPoints: [
            "【重点】二次分母先配方成 (x-a)²+b²。"
          ],
          summary: "含 x² 项的分母先配方，再套 arctan 公式。"
        }
,
        {
          id: '3.2-010',
          difficulty: '基础',
          type: '选择',
          topic: "根号凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span>dx =（  ）",
          options: [
            "A. √(1+x<sup>2</sup>) + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>√(1+x<sup>2</sup>) + C",
            "C. 2√(1+x<sup>2</sup>) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>(1+x<sup>2</sup>)<sup>3/2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：x dx = (1/2)d(x²+1)。",
            "第二步：∫(1/2)·(u)^(-1/2)du = (1/2)·2u^(1/2)=√(1+x²)+C。"
          ],
          keyPoints: [
            "【简便方法】直接观察：[√(1+x²)]' = x/√(1+x²)，即得结果。"
          ],
          summary: "x 与 √(1+x²) 搭配，凑 d(1+x²)。"
        }
,
        {
          id: '3.2-011',
          difficulty: '基础',
          type: '填空',
          topic: "反三角凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">arcsinx</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(arcsinx)<sup>2</sup> + C",
          solution: [
            "第一步：(arcsinx)' = 1/√(1-x²)。",
            "第二步：∫arcsinx d(arcsinx) = (1/2)(arcsinx)²+C。"
          ],
          keyPoints: [
            "【重点】1/√(1-x²) dx = d(arcsinx)。"
          ],
          summary: "反三角函数作内层，配它的导数凑微分。"
        }
,
        {
          id: '3.2-012',
          difficulty: '基础',
          type: '解答',
          topic: "连续凑微分",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x lnx</span></span>。",
          options: null,
          answer: "ln|lnx| + C",
          solution: [
            "第一步：(1/x)dx = d(lnx)。",
            "第二步：原式 = ∫d(lnx)/lnx = ln|lnx|+C。"
          ],
          keyPoints: [
            "【易错点】结果是 ln|lnx|，外层对数内要加绝对值。"
          ],
          summary: "多层对数时逐层凑微分。"
        }
,
        {
          id: '3.2-013',
          difficulty: '提高',
          type: '选择',
          topic: "平方差倒数积分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">a<sup>2</sup> - x<sup>2</sup></span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2a</span></span>ln|<span class=\"frac\"><span class=\"num\">a+x</span><span class=\"den\">a-x</span></span>| + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2a</span></span>ln|<span class=\"frac\"><span class=\"num\">a-x</span><span class=\"den\">a+x</span></span>| + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">a</span></span>arctan(x/a) + C",
            "D. ln|a²-x²| + C"
          ],
          answer: "A",
          solution: [
            "第一步：部分分式 1/(a²-x²) = 1/[(a-x)(a+x)] = (1/2a)[1/(a+x)+1/(a-x)]。",
            "第二步：积分 = (1/2a)[ln|a+x|-ln|a-x|] = (1/2a)ln|(a+x)/(a-x)|+C。"
          ],
          keyPoints: [
            "【重点】平方差型拆开后是两个 ln，注意 (a-x) 积分出负号。"
          ],
          summary: "a²−x² 拆开为两分式，结果为对数差。"
        }
,
        {
          id: '3.2-014',
          difficulty: '提高',
          type: '填空',
          topic: "降幂公式",
          year: null,
          question: "∫sin<sup>2</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">sin2x</span><span class=\"den\">4</span></span> + C",
          solution: [
            "第一步：降幂 sin²x = (1-cos2x)/2。",
            "第二步：积分 = (1/2)∫(1-cos2x)dx = x/2 - sin2x/4 + C。"
          ],
          keyPoints: [
            "【重点】偶次幂用降幂公式 sin²x=(1-cos2x)/2，cos²x=(1+cos2x)/2。"
          ],
          summary: "sin²/cos² 用降幂公式化为一次式。"
        }
,
        {
          id: '3.2-015',
          difficulty: '提高',
          type: '选择',
          topic: "三角代换 √(a²−x²)",
          year: null,
          question: "∫√(a<sup>2</sup>-x<sup>2</sup>)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>√(a<sup>2</sup>-x<sup>2</sup>) + <span class=\"frac\"><span class=\"num\">a<sup>2</sup></span><span class=\"den\">2</span></span>arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
            "B. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>√(a<sup>2</sup>-x<sup>2</sup>) - <span class=\"frac\"><span class=\"num\">a<sup>2</sup></span><span class=\"den\">2</span></span>arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C",
            "C. √(a<sup>2</sup>-x<sup>2</sup>) + C",
            "D. <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 x = a·sint，dx=a·cost dt，√(a²-x²)=a cost。",
            "第二步：∫a cost·a cost dt = a²∫cos²t dt = a²(t/2 + sin2t/4)。",
            "第三步：回代 t=arcsin(x/a)，sin2t=2(x/a)√(1-x²/a²)，整理得结果。"
          ],
          keyPoints: [
            "【重点】√(a²−x²) 令 x=a sin t，是标准三角代换。",
            "【易错点】回代时用辅助三角形还原三角函数。"
          ],
          summary: "√(a²−x²) 型一律令 x=a sin t。"
        }
,
        {
          id: '3.2-016',
          difficulty: '提高',
          type: '填空',
          topic: "三角代换 √(x²−a²)",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x√(x<sup>2</sup>-1)</span></span> (x&gt;1) = ________。",
          options: null,
          answer: "arccos<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：令 x = sect，则 √(x²-1)=tant，dx=sect tant dt。",
            "第二步：∫sect tant/(sect·tant)dt = ∫dt = t + C。",
            "第三步：回代 t = arcsecx = arccos(1/x)。"
          ],
          keyPoints: [
            "【重点】√(x²−1) 令 x=sec t，化为 ∫dt 极简洁。"
          ],
          summary: "√(x²−a²) 令 x=a sec t。"
        }
,
        {
          id: '3.2-017',
          difficulty: '提高',
          type: '选择',
          topic: "配方+arctan",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>-2x+5</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctan<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">2</span></span> + C",
            "B. arctan<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">2</span></span> + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctan(x-1) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>arctan<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">2</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：配方 x²-2x+5=(x-1)²+4。",
            "第二步：∫d(x-1)/[(x-1)²+2²] = (1/2)arctan((x-1)/2)+C。"
          ],
          keyPoints: [
            "【易错点】配方后常数项是 4=2²，arctan 系数为 1/2。"
          ],
          summary: "配方到 (x−a)²+b² 后套 arctan(x−a)/b。"
        }
,
        {
          id: '3.2-018',
          difficulty: '提高',
          type: '填空',
          topic: "指数代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+e<sup>x</sup></span></span> = ________。",
          options: null,
          answer: "x - ln(1+e<sup>x</sup>) + C",
          solution: [
            "第一步：变形 1/(1+e<sup>x</sup>) = 1 - e<sup>x</sup>/(1+e<sup>x</sup>)。",
            "第二步：积分 = x - ∫e<sup>x</sup>/(1+e<sup>x</sup>)dx = x - ln(1+e<sup>x</sup>)+C。"
          ],
          keyPoints: [
            "【简便方法】分子同加减 e^x 凑微分，比令 t=e^x 更快捷。"
          ],
          summary: "1/(1+e^x) 用\"分子=1\"拆成 1 − e^x/(1+e^x)。"
        }
,
        {
          id: '3.2-019',
          difficulty: '提高',
          type: '选择',
          topic: "三角代换 √(x²+a²)",
          year: null,
          question: "∫√(x<sup>2</sup>+a<sup>2</sup>)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>√(x<sup>2</sup>+a<sup>2</sup>) + <span class=\"frac\"><span class=\"num\">a<sup>2</sup></span><span class=\"den\">2</span></span>ln(x+√(x<sup>2</sup>+a<sup>2</sup>)) + C",
            "B. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>√(x<sup>2</sup>+a<sup>2</sup>) - <span class=\"frac\"><span class=\"num\">a<sup>2</sup></span><span class=\"den\">2</span></span>ln(x+√(x<sup>2</sup>+a<sup>2</sup>)) + C",
            "C. √(x<sup>2</sup>+a<sup>2</sup>) + C",
            "D. <span class=\"frac\"><span class=\"num\">a<sup>2</sup></span><span class=\"den\">2</span></span>arcsin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">a</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 x = a·tant，dx=a sec²t dt，√(x²+a²)=a sect。",
            "第二步：∫a sect·a sec²t dt = a²∫sec³t dt。",
            "第三步：∫sec³t dt = (1/2)(sect tant + ln|sect+tant|)，回代得结果。"
          ],
          keyPoints: [
            "【重点】√(x²+a²) 令 x=a tan t，含 ∫sec³t。",
            "【难点】∫sec³t 本身要分部积分。"
          ],
          summary: "√(x²+a²) 令 x=a tan t。"
        }
,
        {
          id: '3.2-020',
          difficulty: '提高',
          type: '填空',
          topic: "根式代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x(1+√x)<sup>2</sup></span></span> = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">1+√x</span></span> + C",
          solution: [
            "第一步：令 t=√x，则 x=t²，dx=2t dt。",
            "第二步：∫2t/[t(1+t)²]dt = 2∫dt/(1+t)² = -2/(1+t)+C。",
            "第三步：回代 t=√x。"
          ],
          keyPoints: [
            "【重点】被积式含 √x 时令 t=√x，dx=2t dt 化简。"
          ],
          summary: "含单个根式 √(ax+b) 令 t 等于该根式。"
        }
,
        {
          id: '3.2-021',
          difficulty: '提高',
          type: '解答',
          topic: "指数凑微分",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">e<sup>x</sup>+e<sup>-x</sup></span></span>。",
          options: null,
          answer: "arctan(e<sup>x</sup>) + C",
          solution: [
            "第一步：分子分母同乘 e<sup>x</sup>：e<sup>x</sup>/(e<sup>2x</sup>+1)。",
            "第二步：e<sup>x</sup>dx = d(e<sup>x</sup>)，∫d(e<sup>x</sup>)/[(e<sup>x</sup>)²+1] = arctan(e<sup>x</sup>)+C。"
          ],
          keyPoints: [
            "【简便方法】同乘 e^x 把分母变成平方和，凑 arctan。"
          ],
          summary: "e^x 与 e^{-x} 同时出现，同乘 e^x 归一。"
        }
,
        {
          id: '3.2-022',
          difficulty: '提高',
          type: '选择',
          topic: "复合凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">1+lnx</span><span class=\"den\">√(1-(xlnx)<sup>2</sup>)</span></span>dx =（  ）",
          options: [
            "A. arcsin(xlnx) + C",
            "B. arctan(xlnx) + C",
            "C. arcsinx + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(arcsinx)<sup>2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：注意 (xlnx)' = lnx + 1。",
            "第二步：原式 = ∫d(xlnx)/√(1-(xlnx)²) = arcsin(xlnx)+C。"
          ],
          keyPoints: [
            "【重点】识别分子 (1+lnx) 正是 xlnx 的导数。"
          ],
          summary: "分子恰是某复合函数导数时，整体作换元。"
        }
,
        {
          id: '3.2-023',
          difficulty: '提高',
          type: '填空',
          topic: "积化和差",
          year: null,
          question: "∫sin3x cosx dx = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">cos4x</span><span class=\"den\">8</span></span> - <span class=\"frac\"><span class=\"num\">cos2x</span><span class=\"den\">4</span></span> + C",
          solution: [
            "第一步：积化和差 sin3x cosx = (1/2)(sin4x + sin2x)。",
            "第二步：积分 = (1/2)(-cos4x/4 - cos2x/2) = -cos4x/8 - cos2x/4 + C。"
          ],
          keyPoints: [
            "【重点】不同名、不同角的三角乘积用积化和差公式拆开。"
          ],
          summary: "sinmx cosnx 用积化和差后逐项积分。"
        }
,
        {
          id: '3.2-024',
          difficulty: '提高',
          type: '解答',
          topic: "三角代换",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>√(1+x<sup>2</sup>)</span></span>。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">√(1+x<sup>2</sup>)</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：令 x=tant，dx=sec²t dt，√(1+x²)=sect。",
            "第二步：被积式变为 sec²t/(tan²t·sect) = sect/tan²t = cost/sin²t。",
            "第三步：∫cost/sin²t dt = -1/sint，回代 sint = x/√(1+x²)，得 -√(1+x²)/x。"
          ],
          keyPoints: [
            "【重点】√(1+x²) 在分母，三角代换后化为 sin/cos 简单积分。"
          ],
          summary: "含 √(1+x²) 用 x=tan t。"
        }
,
        {
          id: '3.2-025',
          difficulty: '难题',
          type: '选择',
          topic: "含根式复合代换",
          year: null,
          question: "∫√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1-x</span></span>dx =（  ）",
          options: [
            "A. arcsin√x - √(x(1-x)) + C",
            "B. arcsin√x + √(x(1-x)) + C",
            "C. √(x(1-x)) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(arcsin√x)<sup>2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 x = sin²t，dx=2sint cost dt，√(x/(1-x)) = tant。",
            "第二步：∫tant·2sint cost dt = 2∫sin²t dt = t - sin2t/2。",
            "第三步：回代 t=arcsin√x，sin2t=2√(x(1-x))，得 arcsin√x - √(x(1-x))+C。"
          ],
          keyPoints: [
            "【难点】√(x/(1-x)) 整体是关键，令 x=sin²t 同时脱去两层根号。"
          ],
          summary: "带分式的根号，整体作三角代换一次性脱去。"
        }
,
        {
          id: '3.2-026',
          difficulty: '难题',
          type: '填空',
          topic: "根式代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">√(x<sup>2</sup>-1)</span><span class=\"den\">x</span></span>dx = ________。",
          options: null,
          answer: "√(x<sup>2</sup>-1) - arccos<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：令 x=sect，dx=sect tant dt，√(x²-1)=tant。",
            "第二步：∫tant/sect·sect tant dt = ∫tan²t dt = ∫(sec²t-1)dt = tant - t。",
            "第三步：回代 tant=√(x²-1)，t=arcsecx=arccos(1/x)。"
          ],
          keyPoints: [
            "【难点】tan²t=sec²t−1 的转化。"
          ],
          summary: "√(x²−1)/x 用 x=sec t。"
        }
,
        {
          id: '3.2-027',
          difficulty: '难题',
          type: '选择',
          topic: "多根次有理化代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x(1+∛x)</span></span> =（  ）",
          options: [
            "A. 6[<span class=\"frac\"><span class=\"num\">√x</span><span class=\"den\">1</span></span> - arctan∛x] + C 形式，即 6(∛x - arctan∛x) + C",
            "B. 6(√x - arctan√x) + C",
            "C. ln(1+∛x) + C",
            "D. 2√x - 3∛x + C"
          ],
          answer: "A",
          solution: [
            "第一步：同时有 √x=x^{1/2} 和 ∛x=x^{1/3}，取公倍数 6，令 t=x^{1/6}，x=t⁶，dx=6t⁵dt。",
            "第二步：√x=t³，∛x=t²，原式 = ∫6t⁵/(t³(1+t²))dt = 6∫t²/(1+t²)dt。",
            "第三步：=6∫(1-1/(1+t²))dt = 6(t - arctant)，回代 t=x^{1/6}，整理为 6(∛x - arctan∛x) + C。"
          ],
          keyPoints: [
            "【重点】多个不同根次，取根指数最小公倍数作代换 t=x^{1/n}。"
          ],
          summary: "多根式并存，取根指数公倍数一次脱尽。"
        }
,
        {
          id: '3.2-028',
          difficulty: '难题',
          type: '填空',
          topic: "万能代换思想",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">sinx cos<sup>3</sup>x</span></span> = ________。",
          options: null,
          answer: "ln|tanx| + <span class=\"frac\"><span class=\"num\">tan<sup>2</sup>x</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：令 u=tanx，sinx=u/√(1+u²)，cosx=1/√(1+u²)，dx=du/(1+u²)。",
            "第二步：sinx cos³x = u/(1+u²)²，被积式 dx = (1+u²)²/u·du/(1+u²) = (1+u²)/u du。",
            "第三步：∫(1/u + u)du = ln|u| + u²/2 = ln|tanx|+tan²x/2+C。"
          ],
          keyPoints: [
            "【难点】万能代换 u=tanx 将三角有理式化为有理函数积分。"
          ],
          summary: "sin、cos 混合的复杂式，用 tanx 代换化为有理函数。"
        }
,
        {
          id: '3.2-029',
          difficulty: '难题',
          type: '解答',
          topic: "根式代换",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+√(2x+1)</span></span>。",
          options: null,
          answer: "√(2x+1) - ln(1+√(2x+1)) + C",
          solution: [
            "第一步：令 t=√(2x+1)，则 x=(t²-1)/2，dx=t dt。",
            "第二步：∫t/(1+t)dt = ∫(1 - 1/(1+t))dt = t - ln|1+t|。",
            "第三步：回代 t=√(2x+1)。"
          ],
          keyPoints: [
            "【重点】含 √(ax+b) 令 t 等于该根式。"
          ],
          summary: "单个一次根式令 t=√(ax+b)。"
        }
,
        {
          id: '3.2-030',
          difficulty: '难题',
          type: '选择',
          topic: "凑微分与换元结合",
          year: null,
          question: "∫x√(x+1)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>(x+1)<sup>5/2</sup> - <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>(x+1)<sup>3/2</sup> + C",
            "B. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>(x+1)<sup>5/2</sup> + <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>(x+1)<sup>3/2</sup> + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup>√(x+1) + C",
            "D. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>(x+1)<sup>3/2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=x+1，则 x=u-1，dx=du。",
            "第二步：∫(u-1)√u du = ∫(u^{3/2}-u^{1/2})du = (2/5)u^{5/2}-(2/3)u^{3/2}。",
            "第三步：回代 u=x+1。"
          ],
          keyPoints: [
            "【简便方法】令 u=x+1 把 x 拆成 u−1，整体变成幂函数积分。"
          ],
          summary: "x 与 √(x+a) 相乘，令 u=x+a 拆 x。"
        }
,
        {
          id: '3.2-031',
          difficulty: '难题',
          type: '填空',
          topic: "分母有理化换元",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√(x+1)+√x</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>[(x+1)<sup>3/2</sup> - x<sup>3/2</sup>] + C",
          solution: [
            "第一步：分子分母同乘 (√(x+1)-√x)，分母变为 (x+1)-x=1。",
            "第二步：原式 = ∫(√(x+1)-√x)dx = (2/3)(x+1)^{3/2} - (2/3)x^{3/2}+C。"
          ],
          keyPoints: [
            "【简便方法】共轭因式有理化，分母直接消成 1。"
          ],
          summary: "两根式之和在分母，共轭相乘有理化。"
        }
,
        {
          id: '3.2-032',
          difficulty: '难题',
          type: '解答',
          topic: "三角代换综合",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x√(4-x<sup>2</sup>)</span></span>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">2-√(4-x<sup>2</sup>)</span><span class=\"den\">x</span></span>| + C",
          solution: [
            "第一步：令 x=2sint，dx=2cost dt，√(4-x²)=2cost。",
            "第二步：∫2cost/(2sint·2cost)dt = (1/2)∫csct dt = (1/2)ln|tan(t/2)|+C。",
            "第三步：回代 tan(t/2) = sint/(1+cost) = (x/2)/(1+√(4-x²)/2) = x/(2+√(4-x²))，整理即得。"
          ],
          keyPoints: [
            "【难点】csct 积分公式与半角回代。"
          ],
          summary: "x√(a²−x²) 型令 x=a sin t。"
        }
,
        {
          id: '3.2-033',
          difficulty: '真题',
          type: '填空',
          topic: "凑微分",
          year: 2010,
          question: "∫<span class=\"frac\"><span class=\"num\">arcsin√x</span><span class=\"den\">√(x(1-x))</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(arcsin√x)<sup>2</sup> + C",
          solution: [
            "第一步：令 u=arcsin√x，求导 du = [1/√(1-x)]·(1/(2√x))dx = dx/[2√(x(1-x))]。",
            "第二步：故 dx/√(x(1-x)) = 2du。",
            "第三步：原式 = ∫u·2du = u² = (1/2)(arcsin√x)² + C。"
          ],
          keyPoints: [
            "【真题高频】arcsin√x 与 √(x(1−x)) 天然配凑。"
          ],
          summary: "观察到分母恰是内层函数导数的倒数倍，整体换元。"
        }
,
        {
          id: '3.2-034',
          difficulty: '真题',
          type: '填空',
          topic: "对称配对积分",
          year: 2015,
          question: "∫<span class=\"frac\"><span class=\"num\">sinx</span><span class=\"den\">sinx+cosx</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|sinx+cosx| + C",
          solution: [
            "第一步：记 I = ∫sinx/(sinx+cosx)dx，J = ∫cosx/(sinx+cosx)dx。",
            "第二步：I+J = ∫1 dx = x；J-I = ∫(cosx-sinx)/(sinx+cosx)dx = ln|sinx+cosx|。",
            "第三步：两式联立解出 I = (x - ln|sinx+cosx|)/2。"
          ],
          keyPoints: [
            "【真题技巧】I、J 配对，利用和与差的易积分表达式反解。"
          ],
          summary: "sin/(sin+cos) 类配对积分，和差联立求解。"
        }
,
        {
          id: '3.2-035',
          difficulty: '真题',
          type: '选择',
          topic: "指数根式代换",
          year: 2017,
          question: "∫√(1+e<sup>x</sup>)dx =（  ）",
          options: [
            "A. 2√(1+e<sup>x</sup>) + ln|<span class=\"frac\"><span class=\"num\">√(1+e<sup>x</sup>)-1</span><span class=\"den\">√(1+e<sup>x</sup>)+1</span></span>| + C",
            "B. √(1+e<sup>x</sup>) + C",
            "C. x√(1+e<sup>x</sup>) + C",
            "D. 2√(1+e<sup>x</sup>) - ln(1+e<sup>x</sup>) + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√(1+e<sup>x</sup>)，则 e<sup>x</sup>=t²-1，x=ln(t²-1)，dx=2t/(t²-1)dt。",
            "第二步：∫t·2t/(t²-1)dt = 2∫t²/(t²-1)dt = 2∫[1+1/(t²-1)]dt。",
            "第三步：= 2t + ln|(t-1)/(t+1)|，回代 t=√(1+e<sup>x</sup>)。"
          ],
          keyPoints: [
            "【重点】含 √(1+e^x) 令 t 等于该整体。"
          ],
          summary: "e^x 与根式复合，整体令 t=√(1+e^x)。"
        }
,
        {
          id: '3.2-036',
          difficulty: '真题',
          type: '填空',
          topic: "凑微分",
          year: 2018,
          question: "∫<span class=\"frac\"><span class=\"num\">x+5</span><span class=\"den\">x<sup>2</sup>+2x+5</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(x<sup>2</sup>+2x+5) + 2arctan<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：分子凑分母导数：x+5 = (1/2)(2x+2) + 4。",
            "第二步：原式 = (1/2)∫(2x+2)/(x²+2x+5)dx + 4∫dx/[(x+1)²+4]。",
            "第三步：第一项 = (1/2)ln(x²+2x+5)；第二项 = 4·(1/2)arctan((x+1)/2)=2arctan((x+1)/2)。"
          ],
          keyPoints: [
            "【真题高频】一次式在分子、二次式在分母，拆成\"分母导数+常数\"。"
          ],
          summary: "一次/二次 型拆成导数项 + 常数项。"
        }
,
        {
          id: '3.2-037',
          difficulty: '真题',
          type: '解答',
          topic: "根式代换",
          year: 2019,
          question: "计算不定积分 ∫<span class=\"frac\"><span class=\"num\">x·arcsinx</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span>dx。",
          options: null,
          answer: "-arcsinx·√(1-x<sup>2</sup>) + x + C",
          solution: [
            "第一步：注意 x/√(1-x²)dx = -d√(1-x²)。",
            "第二步：原式 = -∫arcsinx d√(1-x²)，分部积分 = -arcsinx·√(1-x²) + ∫√(1-x²)·(1/√(1-x²))dx。",
            "第三步：余项 = ∫1 dx = x，合并得结果。"
          ],
          keyPoints: [
            "【重点】x/√(1−x²) 凑成 −d√(1−x²)，再分部积分。"
          ],
          summary: "分子带 x、分母带 √(1−x²)，先凑微分再分部。"
        }
,
        {
          id: '3.2-038',
          difficulty: '真题',
          type: '填空',
          topic: "三角代换",
          year: 2020,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>√(4-x<sup>2</sup>)</span></span> = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">√(4-x<sup>2</sup>)</span><span class=\"den\">4x</span></span> + C",
          solution: [
            "第一步：令 x=2sint，dx=2cost dt，√(4-x²)=2cost。",
            "第二步：∫2cost/(4sin²t·2cost)dt = (1/4)∫csc²t dt = -(1/4)cott。",
            "第三步：回代 cott = √(4-x²)/x，得 -√(4-x²)/(4x)+C。"
          ],
          keyPoints: [
            "【真题高频】x²√(a²−x²) 型三角代换。"
          ],
          summary: "x²√(a²−x²) 令 x=a sin t。"
        }
,
        {
          id: '3.2-039',
          difficulty: '真题',
          type: '解答',
          topic: "分部与换元综合",
          year: 2021,
          question: "计算不定积分 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(1+ln<sup>2</sup>x)</span></span>。",
          options: null,
          answer: "arctan(lnx) + C",
          solution: [
            "第一步：注意 (1/x)dx = d(lnx)。",
            "第二步：令 u=lnx，原式 = ∫du/(1+u²) = arctan u。",
            "第三步：回代 u=lnx。"
          ],
          keyPoints: [
            "【真题高频】1/x dx = d(lnx)，配 arctan。"
          ],
          summary: "多层对数配 arctan，先凑 d(lnx)。"
        }
,
        {
          id: '3.2-040',
          difficulty: '真题',
          type: '选择',
          topic: "换元对称性",
          year: 2022,
          question: "已知 ∫<sub>0</sub><sup>+∞</sup> e<sup>-x<sup>2</sup></sup>dx = <span class=\"frac\"><span class=\"num\">√π</span><span class=\"den\">2</span></span>，则 ∫<sub>0</sub><sup>+∞</sup> e<sup>-ax<sup>2</sup></sup>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">√π</span><span class=\"den\">2√a</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">√π</span><span class=\"den\">2</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">√π</span><span class=\"den\">2a</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">√π√a</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√a·x，则 x=t/√a，dx=dt/√a。",
            "第二步：∫₀^∞ e^{-t²}·dt/√a = (1/√a)·(√π/2)。"
          ],
          keyPoints: [
            "【重点】高斯积分换元缩放，记住 ∫₀^∞e^{-x²}dx=√π/2。"
          ],
          summary: "高斯积分换元缩放因子 1/√a。"
        }
,
        {
          id: '3.2-041',
          difficulty: '基础',
          type: '选择',
          topic: "第一类换元（凑微分）",
          year: null,
          question: "∫(2x + 1)<sup>5</sup>dx = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">(2x+1)<sup>6</sup></span><span class=\"den\">12</span></span> + C",
            "B. <span class=\"frac\"><span class=\"num\">(2x+1)<sup>6</sup></span><span class=\"den\">6</span></span> + C",
            "C. <span class=\"frac\"><span class=\"num\">(2x+1)<sup>4</sup></span><span class=\"den\">4</span></span> + C",
            "D. <span class=\"frac\"><span class=\"num\">(2x+1)<sup>6</sup></span><span class=\"den\">2</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=2x+1，则 du=2dx，即 dx=<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">2</span></span>。",
            "第二步：∫u<sup>5</sup>·<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">u<sup>6</sup></span><span class=\"den\">6</span></span> = <span class=\"frac\"><span class=\"num\">u<sup>6</sup></span><span class=\"den\">12</span></span>。",
            "第三步：回代 u=2x+1。"
          ],
          keyPoints: [
            "【重点】凑微分后别忘除以系数 2。",
            "【易错点】∫(ax+b)<sup>n</sup>dx = <span class=\"frac\"><span class=\"num\">(ax+b)<sup>n+1</sup></span><span class=\"den\">a(n+1)</span></span>。"
          ],
          summary: "线性复合幂函数，令 u=ax+b，除回 a 后再用幂函数公式。"
        }
,
        {
          id: '3.2-042',
          difficulty: '基础',
          type: '填空',
          topic: "凑微分 e^x",
          year: null,
          question: "∫e<sup>x</sup>·sin(e<sup>x</sup>)dx = ________。",
          options: null,
          answer: "-cos(e<sup>x</sup>) + C",
          solution: [
            "第一步：令 u=e<sup>x</sup>，du=e<sup>x</sup>dx。",
            "第二步：原式 = ∫sin(u)du = -cosu + C。",
            "第三步：回代 u=e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】e<sup>x</sup>dx = d(e<sup>x</sup>)，直接凑微分。",
            "【易错点】∫sin u du = -cos u，负号别丢。"
          ],
          summary: "被积函数含 e<sup>x</sup> 且另一因子为 e<sup>x</sup> 的函数时，凑 d(e<sup>x</sup>)。"
        }
,
        {
          id: '3.2-043',
          difficulty: '提高',
          type: '选择',
          topic: "凑微分 ln",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">x</span></span>dx = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(lnx)<sup>2</sup> + C",
            "B. (lnx)<sup>2</sup> + C",
            "C. lnx + C",
            "D. <span class=\"frac\"><span class=\"num\">lnx<sup>2</sup></span><span class=\"den\">2</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = d(lnx)。",
            "第二步：原式 = ∫lnx d(lnx) = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(lnx)<sup>2</sup> + C。"
          ],
          keyPoints: [
            "【重点】<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = d(lnx) 是常用凑微分。",
            "【易错点】结果是 (lnx)²/2，不是 ln(x²)/2。"
          ],
          summary: "见到 1/x 配 lnx，凑 d(lnx) 后按幂函数积分。"
        }
,
        {
          id: '3.2-044',
          difficulty: '提高',
          type: '填空',
          topic: "第二类换元（三角代换）",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√(x<sup>2</sup> + 1)</span></span> = ________。",
          options: null,
          answer: "ln|x + √(x<sup>2</sup> + 1)| + C",
          solution: [
            "第一步：令 x = tant，则 dx = sec<sup>2</sup>t dt，√(x<sup>2</sup>+1)=sect。",
            "第二步：原式 = ∫<span class=\"frac\"><span class=\"num\">sec<sup>2</sup>t</span><span class=\"den\">sect</span></span>dt = ∫sect dt。",
            "第三步：∫sect dt = ln|sect + tant| + C。",
            "第四步：回代 tant=x，sect=√(x²+1)，得 ln|x+√(x²+1)| + C。"
          ],
          keyPoints: [
            "【重点】√(x²+a²) 型用 x=atant。",
            "【重点】∫sect dt = ln|sect+tant| + C 是必背公式。"
          ],
          summary: "含 √(x²+a²) 用三角代换 tant，结果化为反双曲正弦形式。"
        }
,
        {
          id: '3.2-045',
          difficulty: '提高',
          type: '解答',
          topic: "第二类换元（根式代换）",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x + 1</span></span>（令 t=√x）。",
          options: null,
          answer: "2√x - 2ln(1+√x) + C",
          solution: [
            "第一步：令 t=√x，则 x=t<sup>2</sup>，dx=2t dt。",
            "第二步：原式 = ∫<span class=\"frac\"><span class=\"num\">2t</span><span class=\"den\">t + 1</span></span>dt = 2∫<span class=\"frac\"><span class=\"num\">t+1-1</span><span class=\"den\">t+1</span></span>dt。",
            "第三步：= 2∫(1 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">t+1</span></span>)dt = 2(t - ln|t+1|) + C。",
            "第四步：回代 t=√x，得 2√x - 2ln(1+√x) + C。"
          ],
          keyPoints: [
            "【重点】含单一根式 √x 令 t=√x 去根号。",
            "【易错点】dx=2t dt，不要漏掉 2t。"
          ],
          summary: "一次根式用根代换去根号，化为有理函数再积分。"
        }
,
        {
          id: '3.2-046',
          difficulty: '难题',
          type: '选择',
          topic: "凑微分综合",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup> + 2x + 2</span></span> = （  ）",
          options: [
            "A. arctan(x+1) + C",
            "B. arctan(x-1) + C",
            "C. ln(x<sup>2</sup>+2x+2) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctan(x+1) + C"
          ],
          answer: "A",
          solution: [
            "第一步：配方 x<sup>2</sup>+2x+2 = (x+1)<sup>2</sup> + 1。",
            "第二步：令 u=x+1，du=dx。",
            "第三步：原式 = ∫<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">u<sup>2</sup>+1</span></span> = arctanu + C。",
            "第四步：回代得 arctan(x+1) + C。"
          ],
          keyPoints: [
            "【重点】二次分母先配方化为 u²+a² 型。",
            "【易错点】配方后常数项为 1，不用除以 a。"
          ],
          summary: "分母为二次不可约式时配方，凑成 arctan 型积分。"
        }
,
        {
          id: '3.2-047',
          difficulty: '难题',
          type: '解答',
          topic: "三角代换√(a²-x²)",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">√(1 - x<sup>2</sup>)</span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>(arcsinx - x√(1-x<sup>2</sup>)(2x<sup>2</sup>+1)) + C",
          solution: [
            "第一步：令 x=sint，dx=cost dt，√(1-x²)=cost。",
            "第二步：原式 = ∫<span class=\"frac\"><span class=\"num\">sin<sup>2</sup>t</span><span class=\"den\">cost</span></span>·cost dt = ∫sin<sup>2</sup>t dt。",
            "第三步：∫sin<sup>2</sup>t dt = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫(1-cos2t)dt = <span class=\"frac\"><span class=\"num\">t</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">sin2t</span><span class=\"den\">4</span></span> + C。",
            "第四步：回代 t=arcsinx，sin2t=2x√(1-x²)，得 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arcsinx - <span class=\"frac\"><span class=\"num\">x√(1-x<sup>2</sup>)</span><span class=\"den\">2</span></span> + C。"
          ],
          keyPoints: [
            "【重点】√(a²-x²) 用 x=asint。",
            "【易错点】回代时 sin2t 要展开为 2sintcost。"
          ],
          summary: "含 √(a²-x²) 用正弦代换，化为三角幂次积分后倍角降次。"
        }
,
        {
          id: '3.2-048',
          difficulty: '真题',
          type: '填空',
          topic: "凑微分",
          year: 2017,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(1 + ln<sup>2</sup>x)</span></span> = ________。",
          options: null,
          answer: "arctan(lnx) + C",
          solution: [
            "第一步：<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = d(lnx)。",
            "第二步：令 u=lnx，原式 = ∫<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">1+u<sup>2</sup></span></span> = arctanu + C。",
            "第三步：回代 u=lnx。"
          ],
          keyPoints: [
            "【真题高频】1/x 配 ln 型，凑 d(lnx)。",
            "【易错点】分母是 1+ln²x，对应 arctan 而非 ln。"
          ],
          summary: "1/x 与 ln 的函数组合，凑 d(lnx) 后套 arctan 公式。"
        }
,
        {
          id: '3.2-049',
          difficulty: '真题',
          type: '选择',
          topic: "第二类换元",
          year: 2012,
          question: "若 ∫f(x)dx = x<sup>2</sup> + C，则 ∫xf(1-x<sup>2</sup>)dx = （  ）",
          options: [
            "A. -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(1-x<sup>2</sup>)<sup>2</sup> + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(1-x<sup>2</sup>)<sup>2</sup> + C",
            "C. -x<sup>2</sup>(1-x<sup>2</sup>)<sup>2</sup> + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>4</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：由 ∫f(x)dx=x²+C 得 f(x)=2x。",
            "第二步：令 u=1-x<sup>2</sup>，du=-2x dx，即 x dx = -<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">2</span></span>。",
            "第三步：原式 = ∫f(u)·(-<span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">2</span></span>) = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫f(u)du = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>u<sup>2</sup> + C。",
            "第四步：回代 u=1-x²。"
          ],
          keyPoints: [
            "【重点】不必先求 f，直接对复合部分凑微分。",
            "【易错点】du=-2x dx 的负号和系数 1/2。"
          ],
          summary: "已知原函数求复合积分，对括号整体凑微分。"
        }
,
        {
          id: '3.2-050',
          difficulty: '真题',
          type: '解答',
          topic: "分部+换元综合",
          year: 2021,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">arcsin√x</span><span class=\"den\">√x</span></span>dx。",
          options: null,
          answer: "2√x·arcsin√x + 2√(1-x) + C",
          solution: [
            "第一步：令 t=√x，则 x=t<sup>2</sup>，dx=2t dt。",
            "第二步：原式 = ∫<span class=\"frac\"><span class=\"num\">arcsint</span><span class=\"den\">t</span></span>·2t dt = 2∫arcsint dt。",
            "第三步：分部积分：∫arcsint dt = t·arcsint - ∫<span class=\"frac\"><span class=\"num\">t</span><span class=\"den\">√(1-t<sup>2</sup>)</span></span>dt。",
            "第四步：后项 = √(1-t<sup>2</sup>)（凑微分 d(1-t²)）。",
            "第五步：回代 t=√x，得 2√x·arcsin√x + 2√(1-x) + C。"
          ],
          keyPoints: [
            "【重点】先根式代换去根号，再分部积分。",
            "【易错点】∫t/√(1-t²)dt = √(1-t²)，符号为正。"
          ],
          summary: "反三角配根式，先代换去根号再分部。"
        }
        ]
      },
      '3.3': {
        id: '3.3',
        title: "分部积分法",
        questions: [
        {
          id: '3.3-001',
          difficulty: '基础',
          type: '填空',
          topic: "幂×指数",
          year: null,
          question: "∫x e<sup>x</sup>dx = ________。",
          options: null,
          answer: "(x-1)e<sup>x</sup> + C",
          solution: [
            "第一步：取 u=x，dv=e<sup>x</sup>dx，则 du=dx，v=e<sup>x</sup>。",
            "第二步：∫x e<sup>x</sup>dx = x e<sup>x</sup> - ∫e<sup>x</sup>dx = x e<sup>x</sup> - e<sup>x</sup>+C。"
          ],
          keyPoints: [
            "【重点】分部积分公式 ∫u dv = uv - ∫v du。"
          ],
          summary: "幂×指数，取幂函数为 u，指数进 dv。"
        }
,
        {
          id: '3.3-002',
          difficulty: '基础',
          type: '选择',
          topic: "幂×三角",
          year: null,
          question: "∫x cosx dx =（  ）",
          options: [
            "A. x sinx + cosx + C",
            "B. x sinx - cosx + C",
            "C. -x sinx + cosx + C",
            "D. x cosx + C"
          ],
          answer: "A",
          solution: [
            "第一步：取 u=x，dv=cosx dx，du=dx，v=sinx。",
            "第二步：= x sinx - ∫sinx dx = x sinx + cosx + C。"
          ],
          keyPoints: [
            "【易错点】∫sinx dx=-cosx，减负号得 +cosx。"
          ],
          summary: "幂×三角，幂取 u。"
        }
,
        {
          id: '3.3-003',
          difficulty: '基础',
          type: '填空',
          topic: "对数单独分部",
          year: null,
          question: "∫lnx dx = ________。",
          options: null,
          answer: "xlnx - x + C",
          solution: [
            "第一步：取 u=lnx，dv=dx，du=dx/x，v=x。",
            "第二步：= xlnx - ∫x·(1/x)dx = xlnx - ∫1 dx = xlnx - x + C。"
          ],
          keyPoints: [
            "【重点】lnx 没有积分公式，必须取它作 u，dv=dx。"
          ],
          summary: "对数单独出现时取 u=lnx，dv=dx。"
        }
,
        {
          id: '3.3-004',
          difficulty: '基础',
          type: '选择',
          topic: "多次分部",
          year: null,
          question: "∫x<sup>2</sup> e<sup>x</sup>dx =（  ）",
          options: [
            "A. e<sup>x</sup>(x<sup>2</sup>-2x+2) + C",
            "B. e<sup>x</sup>(x<sup>2</sup>+2x+2) + C",
            "C. e<sup>x</sup>(x<sup>2</sup>-2x) + C",
            "D. 2x e<sup>x</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：第一次分部：u=x²，dv=e^x dx，= x²e^x - 2∫x e^x dx。",
            "第二步：∫x e^x dx=(x-1)e^x，代入得 x²e^x -2(x-1)e^x = e^x(x²-2x+2)+C。"
          ],
          keyPoints: [
            "【重点】幂函数次数每分部一次降一次，直到消去。"
          ],
          summary: "高次幂×指数，反复分部降幂。"
        }
,
        {
          id: '3.3-005',
          difficulty: '基础',
          type: '填空',
          topic: "反三角分部",
          year: null,
          question: "∫arcsinx dx = ________。",
          options: null,
          answer: "xarcsinx + √(1-x<sup>2</sup>) + C",
          solution: [
            "第一步：u=arcsinx，dv=dx，du=dx/√(1-x²)，v=x。",
            "第二步：= x arcsinx - ∫x/√(1-x²)dx = x arcsinx + √(1-x²)+C。"
          ],
          keyPoints: [
            "【重点】反三角函数取 u，dv=dx。"
          ],
          summary: "反三角单独出现取 u，dv=dx。"
        }
,
        {
          id: '3.3-006',
          difficulty: '基础',
          type: '选择',
          topic: "对数分部",
          year: null,
          question: "∫ln(x+1)dx =（  ）",
          options: [
            "A. (x+1)ln(x+1) - x + C",
            "B. xln(x+1) + C",
            "C. (x+1)ln(x+1) + x + C",
            "D. ln(x+1) - x + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=ln(x+1)，dv=dx。",
            "第二步：= xln(x+1) - ∫x/(x+1)dx = xln(x+1) - ∫(1-1/(x+1))dx。",
            "第三步：= xln(x+1) - x + ln(x+1) = (x+1)ln(x+1)-x+C。"
          ],
          keyPoints: [
            "【简便方法】令 t=x+1，则 ∫ln t dt = t ln t - t，更直接。"
          ],
          summary: "ln(ax+b) 令 t=ax+b 后用 ∫ln t dt。"
        }
,
        {
          id: '3.3-007',
          difficulty: '基础',
          type: '填空',
          topic: "幂×三角",
          year: null,
          question: "∫x sin2x dx = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">xcos2x</span><span class=\"den\">2</span></span> + <span class=\"frac\"><span class=\"num\">sin2x</span><span class=\"den\">4</span></span> + C",
          solution: [
            "第一步：u=x，dv=sin2x dx，v=-cos2x/2。",
            "第二步：= -x cos2x/2 + ∫cos2x/2 dx = -x cos2x/2 + sin2x/4+C。"
          ],
          keyPoints: [
            "【易错点】v 要除以角频率 2。"
          ],
          summary: "幂×sin(kx)，v=−cos(kx)/k。"
        }
,
        {
          id: '3.3-008',
          difficulty: '基础',
          type: '选择',
          topic: "循环型分部",
          year: null,
          question: "∫e<sup>x</sup>sinx dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx-cosx)</span><span class=\"den\">2</span></span> + C",
            "B. <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx+cosx)</span><span class=\"den\">2</span></span> + C",
            "C. e<sup>x</sup>sinx + C",
            "D. <span class=\"frac\"><span class=\"num\">e<sup>x</sup>cosx</span><span class=\"den\">2</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：I=∫e^x sinx dx，取 u=sinx，dv=e^x dx：= e^x sinx - ∫e^x cosx dx。",
            "第二步：对 ∫e^x cosx dx 再分部，= e^x cosx + ∫e^x sinx dx（第二次 u=cosx）。",
            "第三步：代回 I = e^x sinx - e^x cosx - I，解 2I=e^x(sinx-cosx)。"
          ],
          keyPoints: [
            "【重点】e^x sinx、e^x cosx 型分部两次后\"循环回原积分\"，移项解方程。"
          ],
          summary: "指数×三角循环型，分部两次移项解出 I。"
        }
,
        {
          id: '3.3-009',
          difficulty: '基础',
          type: '填空',
          topic: "幂×对数",
          year: null,
          question: "∫x<sup>3</sup>lnx dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x<sup>4</sup>lnx</span><span class=\"den\">4</span></span> - <span class=\"frac\"><span class=\"num\">x<sup>4</sup></span><span class=\"den\">16</span></span> + C",
          solution: [
            "第一步：取 u=lnx（对数优先作 u），dv=x³ dx，v=x⁴/4。",
            "第二步：= x⁴lnx/4 - ∫(x⁴/4)·(1/x)dx = x⁴lnx/4 - x⁴/16+C。"
          ],
          keyPoints: [
            "【重点】\"反对幂指三\"：反三角、对数优先取 u。"
          ],
          summary: "幂×对数，对数取 u。"
        }
,
        {
          id: '3.3-010',
          difficulty: '基础',
          type: '选择',
          topic: "反三角分部",
          year: null,
          question: "∫arctanx dx =（  ）",
          options: [
            "A. xarctanx - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(1+x<sup>2</sup>) + C",
            "B. xarctanx + C",
            "C. xarctanx + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(1+x<sup>2</sup>) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=arctanx，dv=dx，du=dx/(1+x²)，v=x。",
            "第二步：= x arctanx - ∫x/(1+x²)dx = x arctanx - (1/2)ln(1+x²)+C。"
          ],
          keyPoints: [
            "【重点】∫x/(1+x²)dx=(1/2)ln(1+x²)。"
          ],
          summary: "arctanx 分部后余一个对数。"
        }
,
        {
          id: '3.3-011',
          difficulty: '基础',
          type: '填空',
          topic: "对数幂次分部",
          year: null,
          question: "∫(lnx)<sup>2</sup>dx = ________。",
          options: null,
          answer: "x(lnx)<sup>2</sup> - 2xlnx + 2x + C",
          solution: [
            "第一步：u=(lnx)²，dv=dx，= x(lnx)² - ∫x·2lnx/x dx = x(lnx)² - 2∫lnx dx。",
            "第二步：∫lnx dx=xlnx-x，代入得 x(lnx)²-2(xlnx-x)+C。"
          ],
          keyPoints: [
            "【重点】(lnx)ⁿ 反复分部降对数次数。"
          ],
          summary: "(lnx)ⁿ 分部后化为 (lnx)^{n-1}。"
        }
,
        {
          id: '3.3-012',
          difficulty: '基础',
          type: '解答',
          topic: "幂×指数",
          year: null,
          question: "计算 ∫x e<sup>-x</sup>dx。",
          options: null,
          answer: "-(x+1)e<sup>-x</sup> + C",
          solution: [
            "第一步：u=x，dv=e^{-x}dx，v=-e^{-x}。",
            "第二步：= -x e^{-x} + ∫e^{-x}dx = -x e^{-x} - e^{-x} = -(x+1)e^{-x}+C。"
          ],
          keyPoints: [
            "【易错点】v=−e^{−x}，注意负号。"
          ],
          summary: "幂×e^{kx}，v=e^{kx}/k。"
        }
,
        {
          id: '3.3-013',
          difficulty: '提高',
          type: '选择',
          topic: "高次幂×三角",
          year: null,
          question: "∫x<sup>2</sup>cosx dx =（  ）",
          options: [
            "A. x<sup>2</sup>sinx + 2xcosx - 2sinx + C",
            "B. x<sup>2</sup>sinx - 2xcosx + 2sinx + C",
            "C. x<sup>2</sup>cosx + C",
            "D. x<sup>2</sup>sinx + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=x²，dv=cosx dx：= x²sinx - 2∫x sinx dx。",
            "第二步：∫x sinx dx = -x cosx + sinx。",
            "第三步：代入 = x²sinx -2(-x cosx+sinx) = x²sinx+2x cosx-2sinx+C。"
          ],
          keyPoints: [
            "【重点】两次分部，符号层层叠加，最易错。"
          ],
          summary: "x²×三角，连续两次分部。"
        }
,
        {
          id: '3.3-014',
          difficulty: '提高',
          type: '填空',
          topic: "换元后分部",
          year: null,
          question: "∫e<sup>√x</sup>dx = ________。",
          options: null,
          answer: "2e<sup>√x</sup>(√x - 1) + C",
          solution: [
            "第一步：令 t=√x，x=t²，dx=2t dt。",
            "第二步：2∫t e<sup>t</sup>dt = 2e<sup>t</sup>(t-1)。",
            "第三步：回代 t=√x。"
          ],
          keyPoints: [
            "【重点】先去根号换元，再分部积分。"
          ],
          summary: "e^{√x} 先 t=√x 再分部。"
        }
,
        {
          id: '3.3-015',
          difficulty: '提高',
          type: '选择',
          topic: "对数×二次",
          year: null,
          question: "∫ln(1+x<sup>2</sup>)dx =（  ）",
          options: [
            "A. xln(1+x<sup>2</sup>) - 2x + 2arctanx + C",
            "B. xln(1+x<sup>2</sup>) + C",
            "C. xln(1+x<sup>2</sup>) - 2x + C",
            "D. 2arctanx + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=ln(1+x²)，dv=dx。",
            "第二步：= xln(1+x²) - ∫x·2x/(1+x²)dx = xln(1+x²) - 2∫x²/(1+x²)dx。",
            "第三步：= xln(1+x²)-2∫(1-1/(1+x²))dx = xln(1+x²)-2x+2arctanx+C。"
          ],
          keyPoints: [
            "【难点】x²/(1+x²)=1−1/(1+x²) 的拆分。"
          ],
          summary: "ln(1+x²) 分部后余有理函数拆分。"
        }
,
        {
          id: '3.3-016',
          difficulty: '提高',
          type: '填空',
          topic: "反三角平方",
          year: null,
          question: "∫(arcsinx)<sup>2</sup>dx = ________。",
          options: null,
          answer: "x(arcsinx)<sup>2</sup> + 2√(1-x<sup>2</sup>)arcsinx - 2x + C",
          solution: [
            "第一步：u=(arcsinx)²，dv=dx，= x(arcsinx)² - 2∫x arcsinx/√(1-x²)dx。",
            "第二步：x/√(1-x²)dx = -d√(1-x²)，故 ∫x arcsinx/√(1-x²)dx = -√(1-x²)arcsinx + x。",
            "第三步：代入整理得结果。"
          ],
          keyPoints: [
            "【难点】需两次分部/凑微分结合，技巧性强。"
          ],
          summary: "(arcsinx)² 分部 + 凑 √(1−x²)。"
        }
,
        {
          id: '3.3-017',
          difficulty: '提高',
          type: '选择',
          topic: "指数缩放分部",
          year: null,
          question: "∫x e<sup>2x</sup>dx =（  ）",
          options: [
            "A. e<sup>2x</sup>(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>) + C",
            "B. e<sup>2x</sup>(x - 1) + C",
            "C. 2x e<sup>2x</sup> + C",
            "D. e<sup>2x</sup>(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>) + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=x，dv=e^{2x}dx，v=e^{2x}/2。",
            "第二步：= x e^{2x}/2 - ∫e^{2x}/2 dx = x e^{2x}/2 - e^{2x}/4 + C。"
          ],
          keyPoints: [
            "【易错点】v=e^{2x}/2，最后再除一次 2。"
          ],
          summary: "x·e^{kx} 分部两次除以 k。"
        }
,
        {
          id: '3.3-018',
          difficulty: '提高',
          type: '填空',
          topic: "sec³ 循环分部",
          year: null,
          question: "∫sec<sup>3</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(secx tanx + ln|secx+tanx|) + C",
          solution: [
            "第一步：sec³x = secx·sec²x，取 u=secx，dv=sec²x dx，v=tanx。",
            "第二步：= secx tanx - ∫secx tan²x dx = secx tanx - ∫secx(sec²x-1)dx。",
            "第三步：= secx tanx - ∫sec³x dx + ∫secx dx，移项 2I=secx tanx+ln|secx+tanx|。"
          ],
          keyPoints: [
            "【难点】循环型，移项解方程；∫secx dx=ln|secx+tanx|。"
          ],
          summary: "sec³x 循环分部移项求解。"
        }
,
        {
          id: '3.3-019',
          difficulty: '提高',
          type: '选择',
          topic: "双曲型反三角",
          year: null,
          question: "∫ln(x+√(1+x<sup>2</sup>))dx =（  ）",
          options: [
            "A. xln(x+√(1+x<sup>2</sup>)) - √(1+x<sup>2</sup>) + C",
            "B. xln(x+√(1+x<sup>2</sup>)) + √(1+x<sup>2</sup>) + C",
            "C. ln(x+√(1+x<sup>2</sup>)) + C",
            "D. x√(1+x<sup>2</sup>) + C"
          ],
          answer: "A",
          solution: [
            "第一步：注意 [ln(x+√(1+x²))]' = 1/√(1+x²)（双曲反正弦）。",
            "第二步：分部 = x·ln(x+√(1+x²)) - ∫x/√(1+x²)dx。",
            "第三步：∫x/√(1+x²)dx = √(1+x²)，得结果。"
          ],
          keyPoints: [
            "【重点】ln(x+√(1+x²)) 的导数是 1/√(1+x²)，当公式记。"
          ],
          summary: "双曲反正弦型，分部后剩 √(1+x²)。"
        }
,
        {
          id: '3.3-020',
          difficulty: '提高',
          type: '填空',
          topic: "幂×降幂三角",
          year: null,
          question: "∫x cos<sup>2</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">4</span></span> + <span class=\"frac\"><span class=\"num\">xsin2x</span><span class=\"den\">4</span></span> + <span class=\"frac\"><span class=\"num\">cos2x</span><span class=\"den\">8</span></span> + C",
          solution: [
            "第一步：cos²x=(1+cos2x)/2，原式=∫x/2 dx + (1/2)∫x cos2x dx。",
            "第二步：∫x/2 dx=x²/4；∫x cos2x dx = x sin2x/2 + cos2x/4。",
            "第三步：合并 = x²/4 + (1/2)(x sin2x/2+cos2x/4)。"
          ],
          keyPoints: [
            "【重点】偶次三角先降幂，再对剩余的 x·cos2x 分部。"
          ],
          summary: "cos²x 先降幂，幂×三角分部。"
        }
,
        {
          id: '3.3-021',
          difficulty: '提高',
          type: '解答',
          topic: "幂×反三角",
          year: null,
          question: "计算 ∫x arctanx dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(1+x<sup>2</sup>)arctanx - <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：u=arctanx，dv=x dx，v=x²/2。",
            "第二步：= (x²/2)arctanx - (1/2)∫x²/(1+x²)dx。",
            "第三步：= (x²/2)arctanx - (1/2)∫(1-1/(1+x²))dx = (x²/2)arctanx - x/2 + arctanx/2。"
          ],
          keyPoints: [
            "【重点】反三角取 u，幂函数进 dv。"
          ],
          summary: "幂×反三角，反三角作 u。"
        }
,
        {
          id: '3.3-022',
          difficulty: '提高',
          type: '选择',
          topic: "循环型",
          year: null,
          question: "∫e<sup>x</sup>cosx dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx+cosx)</span><span class=\"den\">2</span></span> + C",
            "B. <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx-cosx)</span><span class=\"den\">2</span></span> + C",
            "C. e<sup>x</sup>cosx + C",
            "D. e<sup>x</sup>sinx + C"
          ],
          answer: "A",
          solution: [
            "第一步：两次分部循环，移项解出。",
            "第二步：最终 I = e^x(sinx+cosx)/2 + C。"
          ],
          keyPoints: [
            "【简便方法】记结论 ∫e^{ax}cosbx = e^{ax}(a cosbx+b sinbx)/(a²+b²)。"
          ],
          summary: "指数×cos 循环分部。"
        }
,
        {
          id: '3.3-023',
          difficulty: '提高',
          type: '填空',
          topic: "对数×负幂",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">√x</span></span>dx = ________。",
          options: null,
          answer: "2√x lnx - 4√x + C",
          solution: [
            "第一步：u=lnx，dv=x^{-1/2}dx，v=2√x。",
            "第二步：= 2√x lnx - ∫2√x·(1/x)dx = 2√x lnx - 2∫x^{-1/2}dx。",
            "第三步：= 2√x lnx - 4√x + C。"
          ],
          keyPoints: [
            "【重点】√x 在分母时 v=2√x，别丢系数。"
          ],
          summary: "lnx/√x 分部，v=2√x。"
        }
,
        {
          id: '3.3-024',
          difficulty: '提高',
          type: '解答',
          topic: "幂×三角",
          year: null,
          question: "计算 ∫x tan<sup>2</sup>x dx。",
          options: null,
          answer: "x tanx + ln|cosx| - <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：tan²x=sec²x-1，原式=∫x sec²x dx - ∫x dx。",
            "第二步：∫x sec²x dx = x tanx - ∫tanx dx = x tanx + ln|cosx|。",
            "第三步：减 x²/2 得结果。"
          ],
          keyPoints: [
            "【重点】先把 tan²x 化为 sec²−1 再分部。"
          ],
          summary: "tan²x 先降为 sec²−1。"
        }
,
        {
          id: '3.3-025',
          difficulty: '难题',
          type: '选择',
          topic: "分部+换元综合",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">arcsinx</span><span class=\"den\">(1-x<sup>2</sup>)<sup>3/2</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">xarcsinx</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">1+x</span><span class=\"den\">1-x</span></span>| + C",
            "B. <span class=\"frac\"><span class=\"num\">xarcsinx</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span> + C",
            "C. arcsinx + C",
            "D. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 x=sint，dx=cost dt，(1-x²)^{3/2}=cos³t。",
            "第二步：原式 = ∫t/cos³t·cost dt = ∫t sec²t dt = t tant - ∫tant dt。",
            "第三步：= t tant + ln|cost|，回代 t=arcsinx，tant=x/√(1-x²)。"
          ],
          keyPoints: [
            "【难点】先三角代换再分部，两层技巧叠加。"
          ],
          summary: "反三角在分子、(1−x²)^{3/2} 在分母，先换元再分部。"
        }
,
        {
          id: '3.3-026',
          difficulty: '难题',
          type: '填空',
          topic: "凑微分后分部",
          year: null,
          question: "∫x<sup>3</sup>e<sup>x<sup>2</sup></sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>x<sup>2</sup></sup>(x<sup>2</sup>-1) + C",
          solution: [
            "第一步：令 t=x²，dt=2x dx，x³dx = t·dt/2。",
            "第二步：= (1/2)∫t e<sup>t</sup>dt = (1/2)e<sup>t</sup>(t-1)。",
            "第三步：回代 t=x²。"
          ],
          keyPoints: [
            "【重点】x³e^{x²} 先凑 t=x² 把 x 因子配掉。"
          ],
          summary: "高次幂×e^{x²} 先换元降次。"
        }
,
        {
          id: '3.3-027',
          difficulty: '难题',
          type: '选择',
          topic: "对数根式综合",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">ln(1+√x)</span><span class=\"den\">√x</span></span>dx =（  ）",
          options: [
            "A. 2(1+√x)ln(1+√x) - 2√x + C",
            "B. 2√x ln(1+√x) + C",
            "C. (1+√x)ln(1+√x) + C",
            "D. 2ln(1+√x) + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√x，dx=2t dt。",
            "第二步：原式 = ∫ln(1+t)/t·2t dt = 2∫ln(1+t)dt。",
            "第三步：= 2[(1+t)ln(1+t)-t]，回代 t=√x。"
          ],
          keyPoints: [
            "【重点】√x 作换元同时消去分母 √x。"
          ],
          summary: "ln(1+√x)/√x 令 t=√x。"
        }
,
        {
          id: '3.3-028',
          difficulty: '难题',
          type: '填空',
          topic: "三角凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">xsinx</span><span class=\"den\">cos<sup>3</sup>x</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2cos<sup>2</sup>x</span></span> - <span class=\"frac\"><span class=\"num\">tanx</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：注意 d(sec²x)=2sec²x tanx dx=2sinx/cos³x dx。",
            "第二步：原式 = (1/2)∫x d(sec²x) = (1/2)x sec²x - (1/2)∫sec²x dx。",
            "第三步：= x/(2cos²x) - tanx/2 + C。"
          ],
          keyPoints: [
            "【难点】凑 d(sec²x) 是关键观察。"
          ],
          summary: "sinx/cos³x 凑成 (1/2)d(sec²x)。"
        }
,
        {
          id: '3.3-029',
          difficulty: '难题',
          type: '解答',
          topic: "指数×降幂三角",
          year: null,
          question: "计算 ∫e<sup>x</sup>sin<sup>2</sup>x dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>x</sup> - <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(cos2x+2sin2x)</span><span class=\"den\">10</span></span> + C",
          solution: [
            "第一步：sin²x=(1-cos2x)/2，原式=(1/2)∫e^x dx - (1/2)∫e^x cos2x dx。",
            "第二步：∫e^x cos2x dx = e^x(cos2x+2sin2x)/5。",
            "第三步：代入整理得结果。"
          ],
          keyPoints: [
            "【重点】先降幂，再用循环分部公式 ∫e^x cos2x。"
          ],
          summary: "e^x sin²x 先降幂后循环分部。"
        }
,
        {
          id: '3.3-030',
          difficulty: '难题',
          type: '选择',
          topic: "对数幂次",
          year: null,
          question: "∫√x (lnx)<sup>2</sup>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup>[(lnx)<sup>2</sup> - <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>lnx + <span class=\"frac\"><span class=\"num\">8</span><span class=\"den\">9</span></span>] + C",
            "B. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup>(lnx)<sup>2</sup> + C",
            "C. x<sup>3/2</sup>lnx + C",
            "D. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup>ln<sup>2</sup>x - <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：u=(lnx)²，dv=√x dx，v=(2/3)x^{3/2}。",
            "第二步：反复分部，将 (lnx)²→lnx→常数，系数依次为 2/3、4/9、8/9。",
            "第三步：整理得括号内形式。"
          ],
          keyPoints: [
            "【难点】对数平方需两次分部，系数链条要算清。"
          ],
          summary: "√x·(lnx)² 连续分部降对数次数。"
        }
,
        {
          id: '3.3-031',
          difficulty: '难题',
          type: '填空',
          topic: "整体凑微分",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x+sinx</span><span class=\"den\">1+cosx</span></span>dx = ________。",
          options: null,
          answer: "x tan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：1+cosx=2cos²(x/2)，sinx=2sin(x/2)cos(x/2)。",
            "第二步：(x+sinx)/(1+cosx) = x/(1+cosx) + sinx/(1+cosx) = (x/2)sec²(x/2) + tan(x/2)。",
            "第三步：注意 [x tan(x/2)]' = tan(x/2) + x·(1/2)sec²(x/2)，恰为被积式，故积分=x tan(x/2)+C。"
          ],
          keyPoints: [
            "【简便方法】观察到整体恰是 x tan(x/2) 的导数。"
          ],
          summary: "分子凑成某函数导数，直接还原。"
        }
,
        {
          id: '3.3-032',
          difficulty: '难题',
          type: '解答',
          topic: "分部综合",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">ln(x+√(1+x<sup>2</sup>))</span><span class=\"den\">(1+x<sup>2</sup>)<sup>3/2</sup></span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x·ln(x+√(1+x<sup>2</sup>))</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(1+x<sup>2</sup>) + C",
          solution: [
            "第一步：注意 [x/√(1+x²)]' = 1/(1+x²)^{3/2}。",
            "第二步：原式 = ∫ln(x+√(1+x²)) d(x/√(1+x²))，分部。",
            "第三步：余项 ∫x/√(1+x²)·1/√(1+x²) dx = ∫x/(1+x²)dx = (1/2)ln(1+x²)，整理得结果。"
          ],
          keyPoints: [
            "【难点】识别 (1+x²)^{−3/2} 是 x/√(1+x²) 的导数。"
          ],
          summary: "(1+x²)^{−3/2} 凑 d(x/√(1+x²))。"
        }
,
        {
          id: '3.3-033',
          difficulty: '真题',
          type: '解答',
          topic: "分部积分",
          year: 2013,
          question: "计算不定积分 ∫<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">(1+x)<sup>2</sup></span></span>dx。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">1+x</span></span> + ln<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span> + C",
          solution: [
            "第一步：取 u=lnx，dv=dx/(1+x)²，v=-1/(1+x)。",
            "第二步：= -lnx/(1+x) + ∫1/[x(1+x)]dx。",
            "第三步：1/[x(1+x)]=1/x-1/(1+x)，积分得 lnx-ln(1+x)=ln(x/(1+x))。"
          ],
          keyPoints: [
            "【真题高频】lnx 取 u，负幂进 dv。"
          ],
          summary: "lnx/(1+x)² 分部后余有理拆分。"
        }
,
        {
          id: '3.3-034',
          difficulty: '真题',
          type: '填空',
          topic: "幂×负幂对数",
          year: 2014,
          question: "∫<span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">x<sup>2</sup></span></span>dx = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">lnx+1</span><span class=\"den\">x</span></span> + C",
          solution: [
            "第一步：u=lnx，dv=x^{-2}dx，v=-1/x。",
            "第二步：= -lnx/x + ∫(1/x)(1/x)dx = -lnx/x + ∫x^{-2}dx。",
            "第三步：= -lnx/x - 1/x = -(lnx+1)/x + C。"
          ],
          keyPoints: [
            "【真题高频】lnx/x² 标准分部。"
          ],
          summary: "lnx/xⁿ 分部后化 lnx/x^{n−1}。"
        }
,
        {
          id: '3.3-035',
          difficulty: '真题',
          type: '选择',
          topic: "反三角分部",
          year: 2016,
          question: "∫<span class=\"frac\"><span class=\"num\">arctan√x</span><span class=\"den\">√x</span></span>dx =（  ）",
          options: [
            "A. 2√x arctan√x - ln(1+x) + C",
            "B. √x arctan√x + C",
            "C. 2√x arctan√x + ln(1+x) + C",
            "D. arctan√x + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√x，dx=2t dt。",
            "第二步：原式 = ∫arctan t/t·2t dt = 2∫arctan t dt。",
            "第三步：= 2[t arctan t - (1/2)ln(1+t²)]，回代 t=√x。"
          ],
          keyPoints: [
            "【真题高频】arctan√x 先换元再分部。"
          ],
          summary: "arctan√x/√x 令 t=√x。"
        }
,
        {
          id: '3.3-036',
          difficulty: '真题',
          type: '解答',
          topic: "分部+换元",
          year: 2018,
          question: "计算不定积分 ∫<span class=\"frac\"><span class=\"num\">x·e<sup>arcsinx</sup></span><span class=\"den\">√(1-x<sup>2</sup>)</span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">e<sup>arcsinx</sup>(x-√(1-x<sup>2</sup>))</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：令 t=arcsinx，x=sint，dx=cost dt。",
            "第二步：原式=∫sint·e^t dt = e^t(sint-cost)/2。",
            "第三步：回代 cost=√(1-x²)。"
          ],
          keyPoints: [
            "【难点】换元后化为 ∫sint e^t 循环分部。"
          ],
          summary: "带 √(1−x²) 与 arcsinx，三角代换后循环分部。"
        }
,
        {
          id: '3.3-037',
          difficulty: '真题',
          type: '填空',
          topic: "分部",
          year: 2020,
          question: "∫(2x+1)e<sup>x</sup>dx = ________。",
          options: null,
          answer: "(2x-1)e<sup>x</sup> + C",
          solution: [
            "第一步：∫(2x+1)e^x dx = 2∫x e^x dx + ∫e^x dx。",
            "第二步：∫x e^x dx=(x-1)e^x，故 2(x-1)e^x + e^x = (2x-1)e^x+C。"
          ],
          keyPoints: [
            "【简便方法】观察 [(2x-1)e^x]'=2e^x+(2x-1)e^x=(2x+1)e^x，直接验证。"
          ],
          summary: "线性式×e^x 拆开分别分部。"
        }
,
        {
          id: '3.3-038',
          difficulty: '真题',
          type: '解答',
          topic: "分部+换元",
          year: 2021,
          question: "计算不定积分 ∫<span class=\"frac\"><span class=\"num\">arcsin√x</span><span class=\"den\">√(1-x)</span></span>dx。",
          options: null,
          answer: "-2√(1-x)arcsin√x + 2√x + C",
          solution: [
            "第一步：注意 dx/√(1-x) = -2d√(1-x)。",
            "第二步：分部 = -2√(1-x)arcsin√x + ∫2√(1-x)·(1/√(1-x))·(1/(2√x))dx。",
            "第三步：余项 = ∫1/√x dx = 2√x，合并得结果。"
          ],
          keyPoints: [
            "【难点】arcsin√x 与 √(1−x) 的导数配合。"
          ],
          summary: "arcsin√x/√(1−x) 凑 −2d√(1−x)。"
        }
,
        {
          id: '3.3-039',
          difficulty: '真题',
          type: '选择',
          topic: "分部公式",
          year: 2023,
          question: "设 f(x) 的一个原函数为 e<sup>-x</sup>，则 ∫x f'(x)dx =（  ）",
          options: [
            "A. -e<sup>-x</sup>(x+1) + C",
            "B. e<sup>-x</sup>(x-1) + C",
            "C. e<sup>-x</sup>(x+1) + C",
            "D. -e<sup>-x</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：原函数 F=e^{-x}，f(x)=F'=-e^{-x}。",
            "第二步：∫x f'(x)dx = x f(x) - ∫f(x)dx = x(-e^{-x}) - e^{-x} + C。",
            "第三步：= -e^{-x}(x+1)+C。"
          ],
          keyPoints: [
            "【真题高频】∫x f'(x)=xf(x)−∫f(x)。"
          ],
          summary: "已知原函数求 xf' 积分，分部后用原函数代回。"
        }
,
        {
          id: '3.3-040',
          difficulty: '真题',
          type: '填空',
          topic: "整体换元",
          year: 2024,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x(1+x)</span></span> = ________。",
          options: null,
          answer: "2arctan√x + C",
          solution: [
            "第一步：令 t=√x，dx=2t dt。",
            "第二步：原式 = ∫2t/[t(1+t²)]dt = 2∫dt/(1+t²) = 2arctan t。",
            "第三步：回代 t=√x。"
          ],
          keyPoints: [
            "【真题高频】√x(1+x) 配 arctan。"
          ],
          summary: "√x(1+x) 令 t=√x 化 arctan。"
        }
,
        {
          id: '3.3-041',
          difficulty: '基础',
          type: '选择',
          topic: "分部积分基本",
          year: null,
          question: "∫x·e<sup>x</sup>dx = （  ）",
          options: [
            "A. (x-1)e<sup>x</sup> + C",
            "B. (x+1)e<sup>x</sup> + C",
            "C. xe<sup>x</sup> + C",
            "D. -xe<sup>x</sup> + C"
          ],
          answer: "A",
          solution: [
            "第一步：分部积分 ∫u dv = uv - ∫v du，取 u=x，dv=e<sup>x</sup>dx。",
            "第二步：du=dx，v=e<sup>x</sup>。",
            "第三步：原式 = xe<sup>x</sup> - ∫e<sup>x</sup>dx = xe<sup>x</sup> - e<sup>x</sup> + C = (x-1)e<sup>x</sup> + C。"
          ],
          keyPoints: [
            "【重点】反对幂三指，u 选靠前的函数，x 优先作 u。",
            "【易错点】∫v du = ∫e<sup>x</sup>dx = e<sup>x</sup>，前面是减号。"
          ],
          summary: "多项式乘指数函数，多项式作 u，分部一次降次。"
        }
,
        {
          id: '3.3-042',
          difficulty: '基础',
          type: '填空',
          topic: "分部积分 ln",
          year: null,
          question: "∫lnx dx = ________。",
          options: null,
          answer: "xlnx - x + C",
          solution: [
            "第一步：取 u=lnx，dv=dx。",
            "第二步：du=<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span>，v=x。",
            "第三步：原式 = xlnx - ∫x·<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = xlnx - ∫1 dx = xlnx - x + C。"
          ],
          keyPoints: [
            "【重点】lnx 没有现成积分，必须作 u。",
            "【易错点】∫v du = ∫1 dx = x，不是别的。"
          ],
          summary: "单独的对数函数，lnx 作 u、dx 作 dv。"
        }
,
        {
          id: '3.3-043',
          difficulty: '提高',
          type: '选择',
          topic: "分部积分两次",
          year: null,
          question: "∫x<sup>2</sup>cosx dx = （  ）",
          options: [
            "A. x<sup>2</sup>sinx + 2xcosx - 2sinx + C",
            "B. x<sup>2</sup>sinx - 2xcosx + 2sinx + C",
            "C. x<sup>2</sup>cosx + 2xsinx + 2cosx + C",
            "D. (x<sup>2</sup>-2)sinx + C"
          ],
          answer: "A",
          solution: [
            "第一步：取 u=x<sup>2</sup>，dv=cosx dx，v=sinx。",
            "第二步：原式 = x<sup>2</sup>sinx - ∫2x sinx dx。",
            "第三步：对 ∫x sinx dx 再分部：u=x，dv=sinx dx，得 -xcosx + ∫cosx dx = -xcosx + sinx。",
            "第四步：代入得 x<sup>2</sup>sinx - 2(-xcosx+sinx) = x<sup>2</sup>sinx + 2xcosx - 2sinx + C。"
          ],
          keyPoints: [
            "【重点】多项式乘三角，分部两次，多项式逐次降幂。",
            "【易错点】第二次分部后整体乘 -2，注意符号。"
          ],
          summary: "高次多项式乘三角/指数，连续分部直到多项式消失。"
        }
,
        {
          id: '3.3-044',
          difficulty: '提高',
          type: '填空',
          topic: "循环型分部",
          year: null,
          question: "∫e<sup>x</sup>sinx dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx - cosx)</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：取 u=sinx，dv=e<sup>x</sup>dx，原式 = e<sup>x</sup>sinx - ∫e<sup>x</sup>cosx dx。",
            "第二步：对后项再分部，u=cosx，dv=e<sup>x</sup>dx，得 e<sup>x</sup>cosx + ∫e<sup>x</sup>sinx dx。",
            "第三步：设 I=∫e<sup>x</sup>sinx dx，则 I = e<sup>x</sup>sinx - e<sup>x</sup>cosx - I。",
            "第四步：2I = e<sup>x</sup>(sinx-cosx)，I = <span class=\"frac\"><span class=\"num\">e<sup>x</sup>(sinx-cosx)</span><span class=\"den\">2</span></span> + C。"
          ],
          keyPoints: [
            "【重点】指数乘三角循环型，分部两次后解方程。",
            "【易错点】第二次分部时 u、dv 选择要与第一次同类（都取三角或都取指数）。"
          ],
          summary: "e^x 乘 sin/cos 循环出现原积分，移项解方程。"
        }
,
        {
          id: '3.3-045',
          difficulty: '提高',
          type: '解答',
          topic: "分部积分反三角",
          year: null,
          question: "计算 ∫x·arctanx dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup>arctanx - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(x - arctanx) + C",
          solution: [
            "第一步：取 u=arctanx，dv=x dx，v=<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>。",
            "第二步：原式 = <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>arctanx - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">1+x<sup>2</sup></span></span>dx。",
            "第三步：<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">1+x<sup>2</sup></span></span> = 1 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>。",
            "第四步：积分得 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>x<sup>2</sup>arctanx - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(x - arctanx) + C。"
          ],
          keyPoints: [
            "【重点】反三角作 u，因其求导后化为有理函数。",
            "【易错点】∫x²/(1+x²)dx 要先拆 1 - 1/(1+x²)。"
          ],
          summary: "反三角配多项式，反三角作 u，再化简有理函数。"
        }
,
        {
          id: '3.3-046',
          difficulty: '难题',
          type: '选择',
          topic: "分部积分递推",
          year: null,
          question: "设 I<sub>n</sub>=∫x<sup>n</sup>e<sup>x</sup>dx，则 I<sub>n</sub> = （  ）",
          options: [
            "A. x<sup>n</sup>e<sup>x</sup> - nI<sub>n-1</sub>",
            "B. x<sup>n</sup>e<sup>x</sup> + nI<sub>n-1</sub>",
            "C. nx<sup>n-1</sup>e<sup>x</sup> - I<sub>n-1</sub>",
            "D. x<sup>n</sup>e<sup>x</sup> - I<sub>n-1</sub>"
          ],
          answer: "A",
          solution: [
            "第一步：取 u=x<sup>n</sup>，dv=e<sup>x</sup>dx。",
            "第二步：I<sub>n</sub> = x<sup>n</sup>e<sup>x</sup> - ∫nx<sup>n-1</sup>e<sup>x</sup>dx。",
            "第三步：= x<sup>n</sup>e<sup>x</sup> - nI<sub>n-1</sub>。"
          ],
          keyPoints: [
            "【重点】分部积分可建立递推关系。",
            "【易错点】系数 n 来自 x<sup>n</sup> 的导数。"
          ],
          summary: "高次幂乘指数用分部积分递推降次。"
        }
,
        {
          id: '3.3-047',
          difficulty: '难题',
          type: '解答',
          topic: "分部+换元综合",
          year: null,
          question: "计算 ∫arcsin√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span>dx。",
          options: null,
          answer: "x·arcsin√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span> - √x + arctan√x + C",
          solution: [
            "第一步：取 u=arcsin√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span>，dv=dx。",
            "第二步：求导 u'：令 t=√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span>，可算得 u'=<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2√x(1+x)</span></span>。",
            "第三步：原式 = x·u - ∫<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2√x(1+x)</span></span>dx = xu - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫<span class=\"frac\"><span class=\"num\">√x</span><span class=\"den\">1+x</span></span>dx。",
            "第四步：令 t=√x，后项化为 ∫<span class=\"frac\"><span class=\"num\">2t<sup>2</sup></span><span class=\"den\">1+t<sup>2</sup></span></span>dt = 2(t-arctant)。",
            "第五步：回代得 x·arcsin√<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x</span></span> - √x + arctan√x + C。"
          ],
          keyPoints: [
            "【重点】反三角复合函数，先分部再根式代换。",
            "【易错点】求 u' 时链式法则要仔细，结果为 1/(2√x(1+x))。"
          ],
          summary: "反三角复合函数积分，分部后化简再代换。"
        }
,
        {
          id: '3.3-048',
          difficulty: '真题',
          type: '填空',
          topic: "分部积分",
          year: 2018,
          question: "∫e<sup>x</sup>·arcsin(e<sup>x</sup>)dx = ________。",
          options: null,
          answer: "e<sup>x</sup>·arcsin(e<sup>x</sup>) - √(1-e<sup>2x</sup>) + C",
          solution: [
            "第一步：令 t=e<sup>x</sup>，dt=e<sup>x</sup>dx，原式 = ∫arcsint dt。",
            "第二步：分部积分 ∫arcsint dt = t·arcsint - ∫<span class=\"frac\"><span class=\"num\">t</span><span class=\"den\">√(1-t<sup>2</sup>)</span></span>dt。",
            "第三步：后项 = √(1-t<sup>2</sup>)。",
            "第四步：回代 t=e<sup>x</sup>。"
          ],
          keyPoints: [
            "【真题高频】e<sup>x</sup>dx=d(e<sup>x</sup>) 后化为 arcsint 的标准分部。",
            "【易错点】∫t/√(1-t²)dt = √(1-t²)。"
          ],
          summary: "e^x 配反三角，凑 d(e^x) 后分部积分。"
        }
,
        {
          id: '3.3-049',
          difficulty: '真题',
          type: '选择',
          topic: "原函数与分部",
          year: 2015,
          question: "设 f(x) 的一个原函数为 e<sup>-x</sup>，则 ∫x f'(x)dx = （  ）",
          options: [
            "A. -e<sup>-x</sup>(x+1) + C",
            "B. e<sup>-x</sup>(x-1) + C",
            "C. e<sup>-x</sup>(x+1) + C",
            "D. -e<sup>-x</sup>(x-1) + C"
          ],
          answer: "A",
          solution: [
            "第一步：f(x) = (e<sup>-x</sup>)' = -e<sup>-x</sup>。",
            "第二步：分部 ∫x f'(x)dx = x f(x) - ∫f(x)dx。",
            "第三步：= x(-e<sup>-x</sup>) - e<sup>-x</sup> + C = -e<sup>-x</sup>(x+1) + C。"
          ],
          keyPoints: [
            "【重点】∫x f'(x)dx 直接分部，避免求 f'。",
            "【易错点】∫f(x)dx 就是已知原函数 e<sup>-x</sup>。"
          ],
          summary: "含 f' 的积分用分部积分 ∫u dv=uv-∫v du，u=x。"
        }
,
        {
          id: '3.3-050',
          difficulty: '真题',
          type: '解答',
          topic: "分部综合",
          year: 2022,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">ln(x + √(1+x<sup>2</sup>))</span><span class=\"den\">(1+x<sup>2</sup>)<sup>3/2</sup></span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x·ln(x+√(1+x<sup>2</sup>))</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span> + C",
          solution: [
            "第一步：注意 d[ln(x+√(1+x²))] = <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span>。",
            "第二步：分部积分，u=ln(x+√(1+x²))，dv=<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">(1+x<sup>2</sup>)<sup>3/2</sup></span></span>。",
            "第三步：求 v：令 x=tant，v = ∫<span class=\"frac\"><span class=\"num\">sect dt</span><span class=\"den\">sec<sup>3</sup>t</span></span> = ∫cos<sup>2</sup>t dt 的化简结果为 <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span>。",
            "第四步：∫v du = ∫<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x<sup>2</sup></span></span>·<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span> 的交叉项在分部后抵消。",
            "第五步：结果为 <span class=\"frac\"><span class=\"num\">x·ln(x+√(1+x<sup>2</sup>))</span><span class=\"den\">√(1+x<sup>2</sup>)</span></span> + C。"
          ],
          keyPoints: [
            "【重点】ln(x+√(1+x²)) 是反双曲正弦，其导数为 1/√(1+x²)。",
            "【易错点】v 的计算用三角代换，别漏常数。"
          ],
          summary: "反双曲对数配 (1+x²)^(-3/2)，分部积分后交叉项化简。"
        }
        ]
      },
      '3.4': {
        id: '3.4',
        title: "有理函数与三角函数有理式的积分",
        questions: [
        {
          id: '3.4-001',
          difficulty: '基础',
          type: '填空',
          topic: "部分分式（一次因子）",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>+3x+2</span></span> = ________。",
          options: null,
          answer: "ln|<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">x+2</span></span>| + C",
          solution: [
            "第一步：因式分解 x²+3x+2=(x+1)(x+2)。",
            "第二步：1/[(x+1)(x+2)] = 1/(x+1) - 1/(x+2)。",
            "第三步：积分 = ln|x+1| - ln|x+2| + C。"
          ],
          keyPoints: [
            "【重点】两个不同一次因子，拆成两个 ln 之差。"
          ],
          summary: "分母可分解为不同一次因子时，直接拆部分分式。"
        }
,
        {
          id: '3.4-002',
          difficulty: '基础',
          type: '选择',
          topic: "部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x+1)</span></span> =（  ）",
          options: [
            "A. ln|<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x+1</span></span>| + C",
            "B. ln|<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">x</span></span>| + C",
            "C. ln|x(x+1)| + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup>+x</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/[x(x+1)] = 1/x - 1/(x+1)。",
            "第二步：积分 = ln|x| - ln|x+1| + C。"
          ],
          keyPoints: [
            "【重点】1/[x(x+1)]=1/x−1/(x+1)。"
          ],
          summary: "相邻一次因子的倒数差型。"
        }
,
        {
          id: '3.4-003',
          difficulty: '基础',
          type: '填空',
          topic: "分子凑导数",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">2x+3</span><span class=\"den\">x<sup>2</sup>+x+1</span></span>dx = ________。",
          options: null,
          answer: "ln(x<sup>2</sup>+x+1) + <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">√3</span></span>arctan<span class=\"frac\"><span class=\"num\">2x+1</span><span class=\"den\">√3</span></span> + C",
          solution: [
            "第一步：分母导数 2x+1，把分子 2x+3 写成 (2x+1)+2。",
            "第二步：第一项 ∫(2x+1)/(x²+x+1)dx = ln(x²+x+1)。",
            "第三步：第二项 2∫dx/[(x+1/2)²+3/4] = 2·(2/√3)arctan((2x+1)/√3)。"
          ],
          keyPoints: [
            "【重点】分子=分母导数+常数，拆成 ln 项 + arctan 项。"
          ],
          summary: "一次分子/二次分母，凑分母导数后配方。"
        }
,
        {
          id: '3.4-004',
          difficulty: '基础',
          type: '选择',
          topic: "平方差",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>-1</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+1</span></span>| + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">x-1</span></span>| + C",
            "C. arctanx + C",
            "D. ln|x²-1| + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/(x²-1) = (1/2)[1/(x-1) - 1/(x+1)]。",
            "第二步：积分 = (1/2)(ln|x-1|-ln|x+1|)+C。"
          ],
          keyPoints: [
            "【重点】∫1/(x²-a²)=(1/2a)ln|(x-a)/(x+a)|。"
          ],
          summary: "平方差倒数标准公式。"
        }
,
        {
          id: '3.4-005',
          difficulty: '基础',
          type: '填空',
          topic: "凑导数",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">x<sup>2</sup>+2x+5</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(x<sup>2</sup>+2x+5) + C",
          solution: [
            "第一步：分母导数 2x+2=2(x+1)，恰为分子 2 倍。",
            "第二步：(x+1)dx = (1/2)d(x²+2x+5)，积分=(1/2)ln(x²+2x+5)+C。"
          ],
          keyPoints: [
            "【简便方法】分子正好是分母导数的一半，直接出 ln。"
          ],
          summary: "分子是分母导数的倍数时，直接凑 ln。"
        }
,
        {
          id: '3.4-006',
          difficulty: '基础',
          type: '选择',
          topic: "部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">(x-1)(x+2)</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+2</span></span>| + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>ln|<span class=\"frac\"><span class=\"num\">x+2</span><span class=\"den\">x-1</span></span>| + C",
            "C. ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+2</span></span>| + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">(x-1)(x+2)</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/[(x-1)(x+2)] = (1/3)[1/(x-1) - 1/(x+2)]。",
            "第二步：积分 = (1/3)ln|(x-1)/(x+2)|+C。"
          ],
          keyPoints: [
            "【重点】系数 1/[(x-a)(x-b)] 拆出 1/(a-b)。"
          ],
          summary: "两因子相差常数，拆分式时除该常数。"
        }
,
        {
          id: '3.4-007',
          difficulty: '基础',
          type: '填空',
          topic: "三角有理式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+sinx</span></span> = ________。",
          options: null,
          answer: "tanx - secx + C",
          solution: [
            "第一步：分子分母同乘 (1-sinx)：(1-sinx)/(1-sin²x)=(1-sinx)/cos²x。",
            "第二步：= sec²x - secx tanx，积分 = tanx - secx + C。"
          ],
          keyPoints: [
            "【简便方法】乘共轭 1−sinx 化为平方差。"
          ],
          summary: "1/(1±sinx) 乘共轭有理化。"
        }
,
        {
          id: '3.4-008',
          difficulty: '基础',
          type: '选择',
          topic: "三角有理式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+cosx</span></span> =（  ）",
          options: [
            "A. tan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
            "B. cot<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
            "C. tanx + C",
            "D. -tan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：1+cosx=2cos²(x/2)。",
            "第二步：∫dx/[2cos²(x/2)] = tan(x/2)+C。"
          ],
          keyPoints: [
            "【重点】1+cosx=2cos²(x/2)，1−cosx=2sin²(x/2)。"
          ],
          summary: "1±cosx 用半角公式化为 sec²/csc²。"
        }
,
        {
          id: '3.4-009',
          difficulty: '提高',
          type: '填空',
          topic: "假分式化真",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup>+1</span><span class=\"den\">x<sup>2</sup>-1</span></span>dx = ________。",
          options: null,
          answer: "x + ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+1</span></span>| + C",
          solution: [
            "第一步：(x²+1)/(x²-1) = 1 + 2/(x²-1)。",
            "第二步：2/(x²-1)=1/(x-1)-1/(x+1)。",
            "第三步：积分 = x + ln|(x-1)/(x+1)|+C。"
          ],
          keyPoints: [
            "【重点】分子分母同次先化出整式 1。"
          ],
          summary: "假分式先分出常数/整式。"
        }
,
        {
          id: '3.4-010',
          difficulty: '提高',
          type: '选择',
          topic: "部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x<sup>2</sup>+1)</span></span> =（  ）",
          options: [
            "A. ln|x| - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(x<sup>2</sup>+1) + C",
            "B. ln|x| + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(x<sup>2</sup>+1) + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x<sup>2</sup>+1</span></span>| + C",
            "D. arctanx + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/[x(x²+1)] = 1/x - x/(x²+1)。",
            "第二步：积分 = ln|x| - (1/2)ln(x²+1)+C。"
          ],
          keyPoints: [
            "【重点】x(x²+1) 拆为 1/x − x/(x²+1)。"
          ],
          summary: "含 x 与不可约二次因子的乘积。"
        }
,
        {
          id: '3.4-011',
          difficulty: '提高',
          type: '填空',
          topic: "多项式除法",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">x+1</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span> - x + ln|x+1| + C",
          solution: [
            "第一步：x²/(x+1) = x-1 + 1/(x+1)。",
            "第二步：积分 = x²/2 - x + ln|x+1|+C。"
          ],
          keyPoints: [
            "【重点】假分式除法降次。"
          ],
          summary: "分子次数≥分母，先做除法。"
        }
,
        {
          id: '3.4-012',
          difficulty: '提高',
          type: '选择',
          topic: "万能代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">sinx(1+cosx)</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|tan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>| + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>tan<sup>2</sup><span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
            "B. ln|tan(x/2)| + C",
            "C. tan(x/2) + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>sec<sup>2</sup>(x/2) + C"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=tan(x/2)，化为有理函数积分 (1/(2u)+u/2)du。",
            "第二步：积分 = (1/2)ln|u| + u²/4。",
            "第三步：回代 u=tan(x/2)。"
          ],
          keyPoints: [
            "【重点】万能代换 u=tan(x/2) 处理一般三角有理式。"
          ],
          summary: "复杂三角有理式用万能代换化为有理函数。"
        }
,
        {
          id: '3.4-013',
          difficulty: '提高',
          type: '填空',
          topic: "三因子部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>3</sup>-x</span></span> = ________。",
          options: null,
          answer: "-ln|x| + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|x<sup>2</sup>-1| + C",
          solution: [
            "第一步：x³-x=x(x-1)(x+1)。",
            "第二步：拆为 -1/x + 1/[2(x-1)] + 1/[2(x+1)]。",
            "第三步：积分 = -ln|x| + (1/2)ln|x²-1|+C。"
          ],
          keyPoints: [
            "【重点】三个一次因子，分别定系数。"
          ],
          summary: "乘积型分母逐一拆部分分式。"
        }
,
        {
          id: '3.4-014',
          difficulty: '提高',
          type: '选择',
          topic: "一次+二次因子",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">3x<sup>2</sup>-x+4</span><span class=\"den\">(x-1)(x<sup>2</sup>+1)</span></span>dx =（  ）",
          options: [
            "A. 3ln|x-1| - arctanx + C",
            "B. 3ln|x-1| + arctanx + C",
            "C. ln|x-1| - 3arctanx + C",
            "D. 3ln(x²+1) + C"
          ],
          answer: "A",
          solution: [
            "第一步：拆为 3/(x-1) - 1/(x²+1)（定系数得 A=3,B=0,C=-1）。",
            "第二步：积分 = 3ln|x-1| - arctanx+C。"
          ],
          keyPoints: [
            "【难点】不可约二次因子对应一次分子 Bx+C。"
          ],
          summary: "一次因子 + 不可约二次因子混合拆分。"
        }
,
        {
          id: '3.4-015',
          difficulty: '提高',
          type: '填空',
          topic: "万能代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+sinx+cosx</span></span> = ________。",
          options: null,
          answer: "ln|1+tan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>| + C",
          solution: [
            "第一步：u=tan(x/2)，分母化为 2(1+u)/(1+u²)。",
            "第二步：原式 = du/(1+u) = ln|1+u|。",
            "第三步：回代 u=tan(x/2)。"
          ],
          keyPoints: [
            "【重点】万能代换后恰消成 du/(1+u)。"
          ],
          summary: "sin、cos 线性组合分母用万能代换。"
        }
,
        {
          id: '3.4-016',
          difficulty: '提高',
          type: '解答',
          topic: "重二次因子",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">(x<sup>2</sup>+1)<sup>2</sup></span></span>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(arctanx + <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x<sup>2</sup>+1</span></span>) + C",
          solution: [
            "第一步：令 x=tan t，dx=sec²t dt，(x²+1)²=sec⁴t。",
            "第二步：∫sec²t/sec⁴t dt = ∫cos²t dt = t/2 + sin2t/4。",
            "第三步：回代 t=arctanx，sin2t=2x/(1+x²)，得结果。"
          ],
          keyPoints: [
            "【重点】(x²+1)ⁿ 型用三角代换。"
          ],
          summary: "(x²+1)² 型令 x=tan t。"
        }
,
        {
          id: '3.4-017',
          difficulty: '难题',
          type: '选择',
          topic: "双二次分解",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>4</sup>-1</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+1</span></span>| - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctanx + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+1</span></span>| + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctanx + C",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|<span class=\"frac\"><span class=\"num\">x-1</span><span class=\"den\">x+1</span></span>| + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctanx + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/(x⁴-1) = (1/2)[1/(x²-1) - 1/(x²+1)]。",
            "第二步：∫1/(x²-1)=(1/2)ln|(x-1)/(x+1)|，∫1/(x²+1)=arctanx。",
            "第三步：合并得结果。"
          ],
          keyPoints: [
            "【简便方法】(x²+1)−(x²−1)=2，整体拆分，不必逐项定系数。"
          ],
          summary: "双二次差型用 1/(a−b) 拆分。"
        }
,
        {
          id: '3.4-018',
          difficulty: '难题',
          type: '填空',
          topic: "假分式+部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x<sup>4</sup></span><span class=\"den\">x<sup>4</sup>+5x<sup>2</sup>+4</span></span>dx = ________。",
          options: null,
          answer: "x - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>arctanx - <span class=\"frac\"><span class=\"num\">7</span><span class=\"den\">3</span></span>arctan<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + C",
          solution: [
            "第一步：分出整式 1，余 (5x²+4)/[(x²+1)(x²+4)]。",
            "第二步：部分分式 = (1/3)/(x²+1) + (14/3)/(x²+4)。",
            "第三步：积分 = x - (1/3)arctanx - (14/3)(1/2)arctan(x/2)。"
          ],
          keyPoints: [
            "【难点】假分式先出 1，再对余式拆两个 arctan。"
          ],
          summary: "同次假分式，先出整式再拆分。"
        }
,
        {
          id: '3.4-019',
          difficulty: '难题',
          type: '解答',
          topic: "万能代换",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">2sinx - cosx + 5</span></span>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√5</span></span>arctan<span class=\"frac\"><span class=\"num\">3tan(x/2)+1</span><span class=\"den\">√5</span></span> + C",
          solution: [
            "第一步：令 u=tan(x/2)，分母化为 2(3u²+2u+2)/(1+u²)。",
            "第二步：原式 = du/(3u²+2u+2)，配方 3[(u+1/3)²+5/9]。",
            "第三步：积分 = (1/√5)arctan((3u+1)/√5)，回代。"
          ],
          keyPoints: [
            "【难点】万能代换后二次分母配方。"
          ],
          summary: "三角线性分式用万能代换化二次有理。"
        }
,
        {
          id: '3.4-020',
          difficulty: '难题',
          type: '选择',
          topic: "部分分式技巧",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">(x<sup>2</sup>+1)<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctanx - <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2(x<sup>2</sup>+1)</span></span> + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctanx + <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2(x<sup>2</sup>+1)</span></span> + C",
            "C. arctanx + C",
            "D. -<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x<sup>2</sup>+1</span></span> + C"
          ],
          answer: "A",
          solution: [
            "第一步：x²/(x²+1)² = 1/(x²+1) - 1/(x²+1)²。",
            "第二步：∫1/(x²+1)²=(1/2)(arctanx+x/(x²+1))。",
            "第三步：相减得 (1/2)arctanx - x/[2(x²+1)]。"
          ],
          keyPoints: [
            "【简便方法】拆成两个常用积分之差。"
          ],
          summary: "(x²+1)² 分母拆 arctan 差。"
        }
,
        {
          id: '3.4-021',
          difficulty: '难题',
          type: '填空',
          topic: "综合部分分式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x<sup>2</sup>+2x+2)</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln|x| - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>ln(x<sup>2</sup>+2x+2) - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>arctan(x+1) + C",
          solution: [
            "第一步：拆为 (1/2)/x + (-(1/2)x-1)/(x²+2x+2)。",
            "第二步：分子 -(1/2)x-1 = -(1/4)(2x+2) - 1/2。",
            "第三步：积分得 ln 项 + arctan 项。"
          ],
          keyPoints: [
            "【难点】不可约二次因子配出 ln 与 arctan 两项。"
          ],
          summary: "x 与不可约二次乘积的综合拆分。"
        }
,
        {
          id: '3.4-022',
          difficulty: '真题',
          type: '解答',
          topic: "重一次因子",
          year: 2010,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x+1)<sup>2</sup></span></span>。",
          options: null,
          answer: "ln|x| - ln|x+1| + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span> + C",
          solution: [
            "第一步：拆为 1/x - 1/(x+1) - 1/(x+1)²。",
            "第二步：积分 = ln|x| - ln|x+1| + 1/(x+1) + C。"
          ],
          keyPoints: [
            "【真题高频】重因子 (x+1)² 要拆出 (x+1) 与 (x+1)² 两项。"
          ],
          summary: "重复一次因子按幂次展开。"
        }
,
        {
          id: '3.4-023',
          difficulty: '真题',
          type: '填空',
          topic: "凑微分+部分分式",
          year: 2015,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x<sup>6</sup>+4)</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">24</span></span>ln|<span class=\"frac\"><span class=\"num\">x<sup>6</sup></span><span class=\"den\">x<sup>6</sup>+4</span></span>| + C",
          solution: [
            "第一步：令 t=x⁶，dt=6x⁵dx，但此处用 t=x⁶ 时注意 dx/x：原式=∫x⁵dx/[x⁶(x⁶+4)]。",
            "第二步：x⁵dx=dt/6，原式=(1/6)∫dt/[t(t+4)]。",
            "第三步：1/[t(t+4)]=(1/4)(1/t-1/(t+4))，积分=(1/24)ln|t/(t+4)|，回代。"
          ],
          keyPoints: [
            "【难点】分子补 x⁵ 凑 d(x⁶)，化为有理积分。"
          ],
          summary: "高次幂分母先凑 d(xⁿ)。"
        }
,
        {
          id: '3.4-024',
          difficulty: '真题',
          type: '选择',
          topic: "三角有理式",
          year: 2019,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+2tanx</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>x + <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>ln|cosx+2sinx| + C",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>x - <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>ln|cosx+2sinx| + C",
            "C. ln|cosx+2sinx| + C",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>ln|cosx+2sinx| + C"
          ],
          answer: "A",
          solution: [
            "第一步：1/(1+2tanx) = cosx/(cosx+2sinx)。",
            "第二步：用配对法，A·(cosx+2sinx) 的分子形式：设 cosx = a(cosx+2sinx)'+... 解出 a=1/5，b=2/5。",
            "第三步：积分 = (1/5)x + (2/5)ln|cosx+2sinx|+C。"
          ],
          keyPoints: [
            "【技巧】(a sinx+b cosx)/(c sinx+d cosx) 拆成常数+对数。"
          ],
          summary: "正切线性式用配对系数法。"
        }
,
        {
          id: '3.4-025',
          difficulty: '真题',
          type: '解答',
          topic: "综合",
          year: 2022,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup>(x+1)</span></span>。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> + ln|<span class=\"frac\"><span class=\"num\">x+1</span><span class=\"den\">x</span></span>| + C",
          solution: [
            "第一步：拆为 -1/x² - 1/x + 1/(x+1)（定系数）。",
            "第二步：积分 = 1/x - ln|x| + ln|x+1|。",
            "第三步：整理为 -1/x + ln|(x+1)/x|+C。"
          ],
          keyPoints: [
            "【真题高频】x²(x+1) 重因子 + 单因子拆分。"
          ],
          summary: "x²(x+1) 拆出 1/x²、1/x、1/(x+1)。"
        }
,
        {
          id: '3.4-026',
          difficulty: '基础',
          type: '选择',
          topic: "部分分式",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup> - 1</span></span> 的部分分式分解为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span>)",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span>)",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：x<sup>2</sup>-1 = (x-1)(x+1)。",
            "第二步：设 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">(x-1)(x+1)</span></span> = <span class=\"frac\"><span class=\"num\">A</span><span class=\"den\">x-1</span></span> + <span class=\"frac\"><span class=\"num\">B</span><span class=\"den\">x+1</span></span>。",
            "第三步：通分得 1 = A(x+1)+B(x-1)，令 x=1 得 A=1/2，x=-1 得 B=-1/2。"
          ],
          keyPoints: [
            "【重点】单因式分解为一次分式之和，系数用代入法。",
            "【易错点】A=1/2、B=-1/2，对应 A/(x-1) - A/(x+1)。"
          ],
          summary: "分母可分解为不同一次因式时，用待定系数法拆成部分分式。"
        }
,
        {
          id: '3.4-027',
          difficulty: '基础',
          type: '填空',
          topic: "三角有理式万能代换",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1 + cosx</span></span> = ________。",
          options: null,
          answer: "tan(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>) + C",
          solution: [
            "第一步：1+cosx = 2cos<sup>2</sup>(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>)。",
            "第二步：原式 = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫sec<sup>2</sup>(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>)dx。",
            "第三步：凑微分 d(tan(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>)) = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>sec<sup>2</sup>(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>)dx。",
            "第四步：得 tan(<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>) + C。"
          ],
          keyPoints: [
            "【重点】半角公式 1+cosx=2cos²(x/2)。",
            "【易错点】凑微分后系数 1/2 抵消。"
          ],
          summary: "分母 1±cosx 用半角公式化为 sec²/csc² 再凑微分。"
        }
,
        {
          id: '3.4-028',
          difficulty: '提高',
          type: '解答',
          topic: "部分分式积分",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">x + 3</span><span class=\"den\">x<sup>2</sup> - 5x + 6</span></span>dx。",
          options: null,
          answer: "5ln|x-3| - 4ln|x-2| + C",
          solution: [
            "第一步：分解 x<sup>2</sup>-5x+6 = (x-2)(x-3)。",
            "第二步：设 <span class=\"frac\"><span class=\"num\">x+3</span><span class=\"den\">(x-2)(x-3)</span></span> = <span class=\"frac\"><span class=\"num\">A</span><span class=\"den\">x-2</span></span> + <span class=\"frac\"><span class=\"num\">B</span><span class=\"den\">x-3</span></span>。",
            "第三步：通分 x+3 = A(x-3)+B(x-2)，令 x=2 得 A=-5，x=3 得 B=6。",
            "第四步：原式 = ∫(<span class=\"frac\"><span class=\"num\">-5</span><span class=\"den\">x-2</span></span> + <span class=\"frac\"><span class=\"num\">6</span><span class=\"den\">x-3</span></span>)dx = -5ln|x-2| + 6ln|x-3| + C。"
          ],
          keyPoints: [
            "【重点】部分分式后逐项积分得对数。",
            "【易错点】A=-5、B=6，结果写为 6ln|x-3| - 5ln|x-2|。"
          ],
          summary: "真分式分解为部分分式，再逐项积分为对数。"
        }
,
        {
          id: '3.4-029',
          difficulty: '提高',
          type: '选择',
          topic: "三角有理式",
          year: null,
          question: "∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">sinx cosx</span></span> = （  ）",
          options: [
            "A. ln|tanx| + C",
            "B. ln|sinx| + C",
            "C. ln|cosx| + C",
            "D. tanx - cotx + C"
          ],
          answer: "A",
          solution: [
            "第一步：<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">sinx cosx</span></span> = <span class=\"frac\"><span class=\"num\">sin<sup>2</sup>x + cos<sup>2</sup>x</span><span class=\"den\">sinx cosx</span></span> = tanx + cotx。",
            "第二步：∫tanx dx = -ln|cosx|，∫cotx dx = ln|sinx|。",
            "第三步：合并 = ln|sinx| - ln|cosx| = ln|tanx| + C。"
          ],
          keyPoints: [
            "【重点】分子加 1=sin²+cos² 拆项。",
            "【易错点】∫tanx dx = -ln|cosx|，负号别丢。"
          ],
          summary: "分母 sinxcosx 时拆为 tanx+cotx 分别积分。"
        }
,
        {
          id: '3.4-030',
          difficulty: '难题',
          type: '解答',
          topic: "有理函数重因式",
          year: null,
          question: "计算 ∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x-1)<sup>2</sup></span></span>。",
          options: null,
          answer: "-ln|x| + ln|x-1| - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span> + C",
          solution: [
            "第一步：设 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x(x-1)<sup>2</sup></span></span> = <span class=\"frac\"><span class=\"num\">A</span><span class=\"den\">x</span></span> + <span class=\"frac\"><span class=\"num\">B</span><span class=\"den\">x-1</span></span> + <span class=\"frac\"><span class=\"num\">C</span><span class=\"den\">(x-1)<sup>2</sup></span></span>。",
            "第二步：通分 1 = A(x-1)<sup>2</sup> + Bx(x-1) + Cx。",
            "第三步：令 x=0 得 A=1；x=1 得 C=1；比较 x<sup>2</sup> 系数得 A+B=0，故 B=-1。",
            "第四步：积分得 ln|x| - ln|x-1| - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x-1</span></span> 的对应符号结果。"
          ],
          keyPoints: [
            "【重点】重因式 (x-a)<sup>2</sup> 要拆出 A/(x-a) + B/(x-a)<sup>2</sup> 两项。",
            "【易错点】B 由比较系数得到，不是代入法。"
          ],
          summary: "重根部分分式要保留一次和二次两项，二次项积分后化为幂函数。"
        }
        ]
      },
      '3.5': {
        id: '3.5',
        title: "定积分的概念与性质",
        questions: [
        {
          id: '3.5-001',
          difficulty: '基础',
          type: '选择',
          topic: "定积分计算",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> 2x dx =（  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. 4"
          ],
          answer: "A",
          solution: [
            "第一步：∫2x dx = x²。",
            "第二步：[x²]₀¹ = 1。"
          ],
          keyPoints: [
            "【重点】牛顿-莱布尼茨公式：∫ₐᵇf=F(b)-F(a)。"
          ],
          summary: "直接求原函数代上下限。"
        }
,
        {
          id: '3.5-002',
          difficulty: '基础',
          type: '填空',
          topic: "奇函数对称区间",
          year: null,
          question: "∫<sub>-1</sub><sup>1</sup> x<sup>3</sup>cosx dx = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：x³cosx 是奇函数（奇×偶=奇）。",
            "第二步：对称区间 [-1,1] 上奇函数积分为 0。"
          ],
          keyPoints: [
            "【重点】奇函数在对称区间积分为 0。"
          ],
          summary: "对称区间遇奇函数直接得 0。"
        }
,
        {
          id: '3.5-003',
          difficulty: '基础',
          type: '选择',
          topic: "几何意义",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> sinx dx =（  ）",
          options: [
            "A. 0",
            "B. 1",
            "C. 2",
            "D. π"
          ],
          answer: "C",
          solution: [
            "第一步：∫sinx dx = -cosx。",
            "第二步：[-cosx]₀^π = -cosπ + cos0 = 1+1 = 2。"
          ],
          keyPoints: [
            "【重点】sinx 在 [0,π] 上面积为 2。"
          ],
          summary: "基础三角定积分。"
        }
,
        {
          id: '3.5-004',
          difficulty: '基础',
          type: '填空',
          topic: "比较性质",
          year: null,
          question: "比较大小：∫<sub>1</sub><sup>2</sup> lnx dx 与 ∫<sub>1</sub><sup>2</sup> (lnx)<sup>2</sup>dx，较大者是________。",
          options: null,
          answer: "∫<sub>1</sub><sup>2</sup> lnx dx",
          solution: [
            "第一步：在 [1,2] 上 lnx∈[0,ln2]⊂[0,1]。",
            "第二步：当 0≤u≤1 时 u≥u²，即 lnx≥(lnx)²。",
            "第三步：被积函数大者积分值大。"
          ],
          keyPoints: [
            "【重点】同一区间上比较积分，只需比较被积函数大小。"
          ],
          summary: "积分比较归结为被积函数大小比较。"
        }
,
        {
          id: '3.5-005',
          difficulty: '基础',
          type: '选择',
          topic: "几何意义",
          year: null,
          question: "∫<sub>a</sub><sup>b</sup> 1 dx =（  ）",
          options: [
            "A. 1",
            "B. b-a",
            "C. a-b",
            "D. 0"
          ],
          answer: "B",
          solution: [
            "第一步：被积函数为 1，定积分等于区间长度。",
            "第二步：∫ₐᵇ1 dx = b-a。"
          ],
          keyPoints: [
            "【重点】∫ₐᵇ1 dx=b−a 即区间长度。"
          ],
          summary: "高为1时积分=底边长。"
        }
,
        {
          id: '3.5-006',
          difficulty: '基础',
          type: '填空',
          topic: "几何意义（半圆）",
          year: null,
          question: "∫<sub>-a</sub><sup>a</sup> √(a<sup>2</sup>-x<sup>2</sup>)dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">πa<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：y=√(a²-x²) 是上半圆 x²+y²=a²。",
            "第二步：积分等于上半圆面积 πa²/2。"
          ],
          keyPoints: [
            "【简便方法】几何意义直接读半圆面积，不必算。"
          ],
          summary: "√(a²−x²) 积分联想半圆面积。"
        }
,
        {
          id: '3.5-007',
          difficulty: '提高',
          type: '选择',
          topic: "积分中值定理",
          year: null,
          question: "f(x) 在 [a,b] 连续，则积分中值定理中的 ξ 满足（  ）",
          options: [
            "A. ∫<sub>a</sub><sup>b</sup> f(x)dx = f(ξ)(b-a)",
            "B. ∫<sub>a</sub><sup>b</sup> f(x)dx = f(ξ)",
            "C. f(ξ)=0",
            "D. ξ 必为区间中点"
          ],
          answer: "A",
          solution: [
            "第一步：积分中值定理 ∃ξ∈[a,b] 使 ∫ₐᵇf(x)dx=f(ξ)(b-a)。",
            "第二步：f(ξ) 即函数在区间上的平均值。"
          ],
          keyPoints: [
            "【重点】积分中值定理给出平均值 f(ξ)=积分/(b−a)。"
          ],
          summary: "定积分=高(平均值)×宽。"
        }
,
        {
          id: '3.5-008',
          difficulty: '提高',
          type: '填空',
          topic: "定积分定义求和式极限",
          year: null,
          question: "lim<sub>n→∞</sub> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">n</span></span>∑<sub>i=1</sub><sup>n</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+i/n</span></span> = ________。",
          options: null,
          answer: "ln2",
          solution: [
            "第一步：和式是 [0,1] 上等分 n 份、ξᵢ=i/n 的黎曼和。",
            "第二步：极限 = ∫₀¹ 1/(1+x) dx = [ln(1+x)]₀¹ = ln2。"
          ],
          keyPoints: [
            "【重点】(1/n)∑f(i/n) → ∫₀¹f(x)dx。"
          ],
          summary: "n 项和配 1/n，化为定积分。"
        }
,
        {
          id: '3.5-009',
          difficulty: '提高',
          type: '选择',
          topic: "分段绝对值积分",
          year: null,
          question: "∫<sub>0</sub><sup>2π</sup> |sinx| dx =（  ）",
          options: [
            "A. 0",
            "B. 2",
            "C. 4",
            "D. π"
          ],
          answer: "C",
          solution: [
            "第一步：|sinx| 在 [0,π] 为 sinx，在 [π,2π] 为 -sinx。",
            "第二步：∫₀^π sinx dx + ∫_π^{2π} (-sinx)dx = 2+2=4。"
          ],
          keyPoints: [
            "【重点】绝对值函数分段脱去绝对值。"
          ],
          summary: "|sinx| 周期 π，每段面积 2。"
        }
,
        {
          id: '3.5-010',
          difficulty: '提高',
          type: '填空',
          topic: "max 函数积分",
          year: null,
          question: "∫<sub>0</sub><sup>2</sup> max(x, x<sup>2</sup>) dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">17</span><span class=\"den\">6</span></span>",
          solution: [
            "第一步：[0,1] 上 x≥x²；[1,2] 上 x²≥x。",
            "第二步：∫₀¹ x dx + ∫₁² x² dx = 1/2 + 7/3。",
            "第三步：= 17/6。"
          ],
          keyPoints: [
            "【重点】max/min 函数分段后分段积分。"
          ],
          summary: "max(x,x²) 以 x=1 为界分段。"
        }
,
        {
          id: '3.5-011',
          difficulty: '提高',
          type: '选择',
          topic: "估值不等式",
          year: null,
          question: "设 M=∫<sub>0</sub><sup>2</sup> √(4+x<sup>2</sup>)dx，则（  ）",
          options: [
            "A. 4 ≤ M ≤ 4√2",
            "B. 0 ≤ M ≤ 2",
            "C. 4√2 ≤ M ≤ 8",
            "D. M ≥ 8"
          ],
          answer: "A",
          solution: [
            "第一步：在 [0,2] 上 2≤√(4+x²)≤√8=2√2。",
            "第二步：估值：2·2≤M≤2√2·2，即 4≤M≤4√2。"
          ],
          keyPoints: [
            "【重点】m(b−a)≤∫≤M(b−a)。"
          ],
          summary: "估值先求被积函数在区间上最值。"
        }
,
        {
          id: '3.5-012',
          difficulty: '提高',
          type: '填空',
          topic: "奇偶性",
          year: null,
          question: "∫<sub>-π</sub><sup>π</sup> x<sup>2</sup>sinx dx = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：x²sinx 是偶函数×奇函数=奇函数。",
            "第二步：对称区间积分为 0。"
          ],
          keyPoints: [
            "【重点】偶×奇=奇。"
          ],
          summary: "对称区间奇函数积分 0。"
        }
,
        {
          id: '3.5-013',
          difficulty: '难题',
          type: '选择',
          topic: "定积分定义",
          year: null,
          question: "lim<sub>n→∞</sub> (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">n+1</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">n+2</span></span> + … + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">n+n</span></span>) =（  ）",
          options: [
            "A. ln2",
            "B. 1",
            "C. ln3",
            "D. 0"
          ],
          answer: "A",
          solution: [
            "第一步：提取 1/n：和式 = (1/n)∑_{i=1}^{n} 1/(1+i/n)。",
            "第二步：极限 = ∫₀¹ 1/(1+x)dx = ln2。"
          ],
          keyPoints: [
            "【难点】识别 1/(n+i)=(1/n)·1/(1+i/n) 的结构。"
          ],
          summary: "倒和式凑 1/n 变定积分。"
        }
,
        {
          id: '3.5-014',
          difficulty: '难题',
          type: '填空',
          topic: "去根号分段",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> √(1-sin2x) dx = ________。",
          options: null,
          answer: "2√2",
          solution: [
            "第一步：1-sin2x=(sinx-cosx)²，根号=|sinx-cosx|。",
            "第二步：[0,π/4] 取 cosx-sinx，[π/4,π] 取 sinx-cosx。",
            "第三步：两段积分 = (√2-1)+(1+√2)=2√2。"
          ],
          keyPoints: [
            "【难点】√(平方)=绝对值，必须分段。"
          ],
          summary: "√(1−sin2x)=|sinx−cosx| 分段。"
        }
,
        {
          id: '3.5-015',
          difficulty: '难题',
          type: '选择',
          topic: "比较大小",
          year: null,
          question: "设 I<sub>1</sub>=∫<sub>0</sub><sup>1</sup> e<sup>-x</sup>dx，I<sub>2</sub>=∫<sub>0</sub><sup>1</sup> e<sup>-x<sup>2</sup></sup>dx，则（  ）",
          options: [
            "A. I<sub>1</sub> &gt; I<sub>2</sub>",
            "B. I<sub>1</sub> &lt; I<sub>2</sub>",
            "C. I<sub>1</sub> = I<sub>2</sub>",
            "D. 无法比较"
          ],
          answer: "A",
          solution: [
            "第一步：在 (0,1) 上 x&gt;x²，故 -x&lt;-x²。",
            "第二步：e<sup>-x</sup>&gt;e<sup>-x²</sup>，被积函数大者积分大，I₁&gt;I₂。"
          ],
          keyPoints: [
            "【重点】同一区间比积分即比被积函数。"
          ],
          summary: "指数同底比较，比较指数即可。"
        }
,
        {
          id: '3.5-016',
          difficulty: '难题',
          type: '解答',
          topic: "定积分定义求极限",
          year: null,
          question: "用定积分定义求 lim<sub>n→∞</sub> <span class=\"frac\"><span class=\"num\">1<sup>p</sup>+2<sup>p</sup>+…+n<sup>p</sup></span><span class=\"den\">n<sup>p+1</sup></span></span>（p&gt;0）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">p+1</span></span>",
          solution: [
            "第一步：原式 = (1/n)∑_{i=1}^{n}(i/n)<sup>p</sup>。",
            "第二步：极限 = ∫₀¹ x<sup>p</sup>dx = 1/(p+1)。"
          ],
          keyPoints: [
            "【重点】幂和式提取 n^{p+1} 后成黎曼和。"
          ],
          summary: "幂和式极限化为 ∫₀¹x^p。"
        }
,
        {
          id: '3.5-017',
          difficulty: '真题',
          type: '选择',
          topic: "比较积分大小",
          year: 2012,
          question: "设 I<sub>1</sub>=∫<sub>0</sub><sup>1</sup> e<sup>x</sup>dx，I<sub>2</sub>=∫<sub>0</sub><sup>1</sup> e<sup>x<sup>2</sup></sup>dx，则（  ）",
          options: [
            "A. I<sub>1</sub> &gt; I<sub>2</sub>",
            "B. I<sub>1</sub> &lt; I<sub>2</sub>",
            "C. I<sub>1</sub> = I<sub>2</sub>",
            "D. 无法确定"
          ],
          answer: "A",
          solution: [
            "第一步：在 (0,1) 上 x&gt;x²，故 e<sup>x</sup>&gt;e<sup>x²</sup>。",
            "第二步：积分值 I₁&gt;I₂。"
          ],
          keyPoints: [
            "【真题高频】同区间不同指数函数比大小。"
          ],
          summary: "指数比较归结为指数大小。"
        }
,
        {
          id: '3.5-018',
          difficulty: '真题',
          type: '填空',
          topic: "和式极限",
          year: 2016,
          question: "lim<sub>n→∞</sub> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">n</span></span>∑<sub>i=1</sub><sup>n</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+(i/n)<sup>2</sup></span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：化为 ∫₀¹ 1/(1+x²)dx。",
            "第二步：= [arctanx]₀¹ = π/4。"
          ],
          keyPoints: [
            "【真题高频】黎曼和化定积分。"
          ],
          summary: "1/(1+x²) 型和式极限。"
        }
,
        {
          id: '3.5-019',
          difficulty: '真题',
          type: '选择',
          topic: "奇偶与对称",
          year: 2020,
          question: "∫<sub>-1</sub><sup>1</sup> (x<sup>2020</sup>+x)sinx dx =（  ）",
          options: [
            "A. 2∫<sub>0</sub><sup>1</sup> x<sup>2020</sup>sinx dx",
            "B. 0",
            "C. 2∫<sub>0</sub><sup>1</sup> x sinx dx",
            "D. 2"
          ],
          answer: "C",
          solution: [
            "第一步：拆成 x<sup>2020</sup>sinx 与 x sinx 两项。",
            "第二步：x<sup>2020</sup>sinx 是偶函数×奇函数=奇函数，对称区间积分为 0。",
            "第三步：x sinx 是奇函数×奇函数=偶函数，积分=2∫₀¹x sinx，对应选项 C。"
          ],
          keyPoints: [
            "【易错点】奇×偶=奇(积0)，奇×奇=偶(加倍)。"
          ],
          summary: "拆项后逐项判奇偶。"
        }
,
        {
          id: '3.5-020',
          difficulty: '真题',
          type: '填空',
          topic: "奇偶综合",
          year: 2024,
          question: "∫<sub>-1</sub><sup>1</sup> (xcosx + |x|) dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：xcosx 是奇函数，对称区间积分为 0。",
            "第二步：|x| 是偶函数，积分=2∫₀¹ x dx=2·(1/2)=1。",
            "第三步：合计 0+1=1。"
          ],
          keyPoints: [
            "【真题高频】奇函数清零、偶函数加倍。"
          ],
          summary: "对称区间拆分，奇零偶倍。"
        }
,
        {
          id: '3.5-021',
          difficulty: '基础',
          type: '选择',
          topic: "定积分几何意义",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup>√(1 - x<sup>2</sup>)dx = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. π"
          ],
          answer: "A",
          solution: [
            "第一步：y=√(1-x²) 是单位圆上半部分。",
            "第二步：x∈[0,1] 对应四分之一圆。",
            "第三步：面积 = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>·π·1<sup>2</sup> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>。"
          ],
          keyPoints: [
            "【重点】定积分几何意义为曲边梯形面积。",
            "【易错点】1/4 圆不是 1/2 圆。"
          ],
          summary: "被积函数为圆弧时，直接用几何面积求积分。"
        }
,
        {
          id: '3.5-022',
          difficulty: '基础',
          type: '填空',
          topic: "定积分线性性质",
          year: null,
          question: "已知 ∫<sub>0</sub><sup>1</sup>f(x)dx = 3，∫<sub>0</sub><sup>1</sup>g(x)dx = -2，则 ∫<sub>0</sub><sup>1</sup>[2f(x) - g(x)]dx = ________。",
          options: null,
          answer: "8",
          solution: [
            "第一步：线性性质 ∫[af+bg] = a∫f + b∫g。",
            "第二步：= 2·3 - (-2) = 6 + 2 = 8。"
          ],
          keyPoints: [
            "【重点】定积分对被积函数线性。",
            "【易错点】减 g(x) 对应 -(-2) = +2。"
          ],
          summary: "定积分线性性质可拆分计算。"
        }
,
        {
          id: '3.5-023',
          difficulty: '提高',
          type: '选择',
          topic: "定积分比较性质",
          year: null,
          question: "设 I<sub>1</sub>=∫<sub>0</sub><sup>1</sup>e<sup>x</sup>dx，I<sub>2</sub>=∫<sub>0</sub><sup>1</sup>e<sup>x²</sup>dx，则（  ）",
          options: [
            "A. I<sub>1</sub> &gt; I<sub>2</sub>",
            "B. I<sub>1</sub> &lt; I<sub>2</sub>",
            "C. I<sub>1</sub> = I<sub>2</sub>",
            "D. 无法比较"
          ],
          answer: "A",
          solution: [
            "第一步：x∈[0,1] 时 x ≥ x<sup>2</sup>。",
            "第二步：e<sup>x</sup> 单调增，故 e<sup>x</sup> ≥ e<sup>x²</sup>。",
            "第三步：由保序性 I<sub>1</sub> ≥ I<sub>2</sub>，且不恒等，故 I<sub>1</sub> &gt; I<sub>2</sub>。"
          ],
          keyPoints: [
            "【重点】定积分保序性：被积函数大则积分大。",
            "【易错点】[0,1] 上 x≥x²，[-1,0] 则相反。"
          ],
          summary: "比较积分大小先比较被积函数在区间上的大小。"
        }
,
        {
          id: '3.5-024',
          difficulty: '提高',
          type: '填空',
          topic: "奇偶函数对称积分",
          year: null,
          question: "∫<sub>-1</sub><sup>1</sup>(x<sup>3</sup>cosx + x<sup>2</sup>)dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：x<sup>3</sup>cosx 是奇函数，对称区间积分 = 0。",
            "第二步：x<sup>2</sup> 是偶函数，∫<sub>-1</sub><sup>1</sup>x<sup>2</sup>dx = 2∫<sub>0</sub><sup>1</sup>x<sup>2</sup>dx。",
            "第三步：= 2·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> = <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>。"
          ],
          keyPoints: [
            "【重点】对称区间上奇函数积分为 0。",
            "【易错点】拆成奇+偶，奇函数项直接 0。"
          ],
          summary: "对称区间先看奇偶性，奇函数消去，偶函数加倍。"
        }
,
        {
          id: '3.5-025',
          difficulty: '提高',
          type: '解答',
          topic: "区间再现公式",
          year: null,
          question: "证明 ∫<sub>0</sub><sup>π/2</sup>f(sinx)dx = ∫<sub>0</sub><sup>π/2</sup>f(cosx)dx。",
          options: null,
          answer: "令 x=π/2 - t 即证",
          solution: [
            "第一步：令 x = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> - t，dx = -dt。",
            "第二步：当 x=0 时 t=<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>；x=<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> 时 t=0。",
            "第三步：原式 = ∫<sub>π/2</sub><sup>0</sup>f(sin(<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>-t))(-dt) = ∫<sub>0</sub><sup>π/2</sup>f(cost)dt。",
            "第四步：将 t 改写为 x，得证。"
          ],
          keyPoints: [
            "【重点】区间再现公式：∫<sub>0</sub><sup>a</sup>f(x)dx = ∫<sub>0</sub><sup>a</sup>f(a-x)dx。",
            "【易错点】换元后上下限交换，负号抵消。"
          ],
          summary: "利用 x→a-x 换元可将被积函数 f(x) 化为 f(a-x)。"
        }
,
        {
          id: '3.5-026',
          difficulty: '难题',
          type: '选择',
          topic: "积分中值定理",
          year: null,
          question: "设 f(x) 在 [0,1] 连续且递减，则对 a∈(0,1) 有（  ）",
          options: [
            "A. a∫<sub>0</sub><sup>1</sup>f(x)dx ≤ ∫<sub>0</sub><sup>a</sup>f(x)dx",
            "B. a∫<sub>0</sub><sup>1</sup>f(x)dx ≥ ∫<sub>0</sub><sup>a</sup>f(x)dx",
            "C. a∫<sub>0</sub><sup>1</sup>f(x)dx = ∫<sub>0</sub><sup>a</sup>f(x)dx",
            "D. 无法比较"
          ],
          answer: "A",
          solution: [
            "第一步：f 递减，[0,a] 上 f(x) ≥ f(a)，[a,1] 上 f(x) ≤ f(a)。",
            "第二步：∫<sub>0</sub><sup>a</sup>f(x)dx ≥ a·f(a)，∫<sub>a</sub><sup>1</sup>f(x)dx ≤ (1-a)f(a)。",
            "第三步：推出 ∫<sub>0</sub><sup>a</sup>f(x)dx ≥ a∫<sub>0</sub><sup>1</sup>f(x)dx。"
          ],
          keyPoints: [
            "【重点】递减函数在小区间上的均值大于整体均值。",
            "【易错点】结论方向：递减时 a∫₀¹f ≤ ∫₀ᵃf。"
          ],
          summary: "利用单调性分段估计积分，比较区间均值。"
        }
,
        {
          id: '3.5-027',
          difficulty: '难题',
          type: '解答',
          topic: "估值定理",
          year: null,
          question: "估计 ∫<sub>0</sub><sup>2</sup>e<sup>x<sup>2</sup>-x</sup>dx 的范围。",
          options: null,
          answer: "2e<sup>-1/4</sup> ≤ I ≤ 2e<sup>2</sup>",
          solution: [
            "第一步：令 g(x)=x<sup>2</sup>-x，在 [0,2] 上求最值。",
            "第二步：g'(x)=2x-1，驻点 x=1/2。",
            "第三步：g(0)=0，g(1/2)=-1/4，g(2)=2，故 g∈[-1/4,2]。",
            "第四步：e<sup>g</sup>∈[e<sup>-1/4</sup>,e<sup>2</sup>]，积分区间长 2。",
            "第五步：由估值定理 2e<sup>-1/4</sup> ≤ I ≤ 2e<sup>2</sup>。"
          ],
          keyPoints: [
            "【重点】估值定理 m(b-a) ≤ ∫f ≤ M(b-a)。",
            "【易错点】要找被积函数在区间上的最大最小值。"
          ],
          summary: "估计积分值先求被积函数在区间上的最值，再乘区间长度。"
        }
,
        {
          id: '3.5-028',
          difficulty: '真题',
          type: '填空',
          topic: "对称区间积分",
          year: 2016,
          question: "∫<sub>-π/2</sub><sup>π/2</sup>(x<sup>3</sup> + sin<sup>2</sup>x)cos<sup>2</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：x<sup>3</sup>cos<sup>2</sup>x 是奇函数，积分 = 0。",
            "第二步：只剩 ∫<sub>-π/2</sub><sup>π/2</sup>sin<sup>2</sup>x cos<sup>2</sup>x dx = 2∫<sub>0</sub><sup>π/2</sup>sin<sup>2</sup>x cos<sup>2</sup>x dx。",
            "第三步：sin<sup>2</sup>xcos<sup>2</sup>x = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>sin<sup>2</sup>2x = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>(1-cos4x)。",
            "第四步：积分得 2·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>·<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>。"
          ],
          keyPoints: [
            "【真题高频】对称区间先消奇函数，再用华莱士公式。",
            "【易错点】sin²xcos²x 要用倍角公式降次。"
          ],
          summary: "对称区间奇消偶留，偶段用倍角公式或华莱士公式。"
        }
,
        {
          id: '3.5-029',
          difficulty: '真题',
          type: '选择',
          topic: "定积分性质",
          year: 2013,
          question: "设 a<sub>n</sub>=∫<sub>0</sub><sup>nπ</sup>x|sinx|dx，则 a<sub>n</sub> = （  ）",
          options: [
            "A. n<sup>2</sup>π",
            "B. 2n<sup>2</sup>π",
            "C. nπ",
            "D. 2nπ"
          ],
          answer: "B",
          solution: [
            "第一步：分段 ∫<sub>(k-1)π</sub><sup>kπ</sup>x|sinx|dx，令 x=(k-1)π+t。",
            "第二步：每段 = ∫<sub>0</sub><sup>π</sup>[(k-1)π+t]sint dt。",
            "第三步：∫<sub>0</sub><sup>π</sup>sint dt=2，∫<sub>0</sub><sup>π</sup>t sint dt=π。",
            "第四步：每段 = 2(k-1)π + π = (2k-1)π。",
            "第五步：求和 ∑<sub>k=1</sub><sup>n</sup>(2k-1)π = n<sup>2</sup>π·2... 化简得 2n<sup>2</sup>π。"
          ],
          keyPoints: [
            "【重点】含 |sinx| 按周期分段。",
            "【易错点】每段积分结果 (2k-1)π，求和为 n²π 的 2 倍。"
          ],
          summary: "绝对值三角函数按周期分段，换元后求和。"
        }
,
        {
          id: '3.5-030',
          difficulty: '真题',
          type: '解答',
          topic: "区间再现",
          year: 2020,
          question: "计算 ∫<sub>0</sub><sup>π</sup><span class=\"frac\"><span class=\"num\">x sinx</span><span class=\"den\">1 + cos<sup>2</sup>x</span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π<sup>2</sup></span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：用区间再现 I = ∫<sub>0</sub><sup>π</sup><span class=\"frac\"><span class=\"num\">(π-x)sinx</span><span class=\"den\">1+cos<sup>2</sup>x</span></span>dx。",
            "第二步：2I = ∫<sub>0</sub><sup>π</sup><span class=\"frac\"><span class=\"num\">π sinx</span><span class=\"den\">1+cos<sup>2</sup>x</span></span>dx。",
            "第三步：令 u=cosx，du=-sinx dx，得 2I = π∫<sub>-1</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">1+u<sup>2</sup></span></span> = π·<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。",
            "第四步：I = <span class=\"frac\"><span class=\"num\">π<sup>2</sup></span><span class=\"den\">4</span></span>。"
          ],
          keyPoints: [
            "【重点】x·f(sinx) 型用区间再现消去 x。",
            "【易错点】2I 中 sinx dx 凑 d(cosx)。"
          ],
          summary: "∫₀^π x·g(sinx)dx 用区间再现公式化为 π/2 · ∫g。"
        }
        ]
      },
      '3.6': {
        id: '3.6',
        title: "微积分基本定理与变限积分",
        questions: [
        {
          id: '3.6-001',
          difficulty: '基础',
          type: '填空',
          topic: "变限积分求导",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x</sup> sin(t<sup>2</sup>)dt = ________。",
          options: null,
          answer: "sin(x<sup>2</sup>)",
          solution: [
            "第一步：上限就是 x，直接代入被积函数。",
            "第二步：d/dx∫₀ˣ f(t)dt = f(x)。"
          ],
          keyPoints: [
            "【重点】变上限积分求导=被积函数在上限处的值。"
          ],
          summary: "上限为 x 时直接代入。"
        }
,
        {
          id: '3.6-002',
          difficulty: '基础',
          type: '选择',
          topic: "复合变限求导",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x<sup>2</sup></sup> sin t dt =（  ）",
          options: [
            "A. 2x sin(x<sup>2</sup>)",
            "B. sin(x<sup>2</sup>)",
            "C. 2x sinx",
            "D. x<sup>2</sup> sin(x<sup>2</sup>)"
          ],
          answer: "A",
          solution: [
            "第一步：上限 φ(x)=x²，链式法则。",
            "第二步：= sin(x²)·(x²)' = 2x sin(x²)。"
          ],
          keyPoints: [
            "【重点】d/dx∫₀^{φ(x)}f(t)dt = f(φ(x))·φ'(x)。"
          ],
          summary: "上限是函数时乘上限导数。"
        }
,
        {
          id: '3.6-003',
          difficulty: '基础',
          type: '填空',
          topic: "下限变化",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>x</sub><sup>1</sup> e<sup>t<sup>2</sup></sup>dt = ________。",
          options: null,
          answer: "-e<sup>x<sup>2</sup></sup>",
          solution: [
            "第一步：∫ₓ¹ = -∫₁ˣ。",
            "第二步：求导 = -e<sup>x²</sup>。"
          ],
          keyPoints: [
            "【易错点】下限是 x 时前面加负号。"
          ],
          summary: "下限含 x 先交换上下限。"
        }
,
        {
          id: '3.6-004',
          difficulty: '基础',
          type: '选择',
          topic: "变限积分极值",
          year: null,
          question: "F(x)=∫<sub>0</sub><sup>x</sup>(t-1)dt 的极小值点为（  ）",
          options: [
            "A. x=1",
            "B. x=0",
            "C. x=-1",
            "D. x=2"
          ],
          answer: "A",
          solution: [
            "第一步：F'(x)=x-1。",
            "第二步：令 F'=0 得 x=1，且 x&lt;1 减、x&gt;1 增，故 x=1 极小。"
          ],
          keyPoints: [
            "【重点】变限积分的导数即被积函数。"
          ],
          summary: "变限积分求极值用其导数。"
        }
,
        {
          id: '3.6-005',
          difficulty: '基础',
          type: '填空',
          topic: "复合变限",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x<sup>2</sup></sup> √(1+t)dt = ________。",
          options: null,
          answer: "2x√(1+x<sup>2</sup>)",
          solution: [
            "第一步：= √(1+x²)·(x²)' = 2x√(1+x²)。"
          ],
          keyPoints: [
            "【重点】乘上限导数 2x。"
          ],
          summary: "根号被积函数配链式求导。"
        }
,
        {
          id: '3.6-006',
          difficulty: '基础',
          type: '选择',
          topic: "洛必达+变限",
          year: null,
          question: "lim<sub>x→0</sub> <span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x</sup> sin(t<sup>2</sup>)dt</span><span class=\"den\">x<sup>3</sup></span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "C. 1",
            "D. 0"
          ],
          answer: "A",
          solution: [
            "第一步：0/0 型，洛必达：分子求导 sin(x²)，分母求导 3x²。",
            "第二步：lim sin(x²)/(3x²)=1/3。"
          ],
          keyPoints: [
            "【重点】变限积分求极限，洛必达配合 sinu~u。"
          ],
          summary: "0/0 变限极限洛必达后等价无穷小。"
        }
,
        {
          id: '3.6-007',
          difficulty: '基础',
          type: '填空',
          topic: "复合变限",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>1</sub><sup>2x</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+t<sup>2</sup></span></span>dt = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">1+4x<sup>2</sup></span></span>",
          solution: [
            "第一步：= [1/(1+(2x)²)]·(2x)' = 2/(1+4x²)。"
          ],
          keyPoints: [
            "【易错点】(2x)'=2 别漏。"
          ],
          summary: "线性上限乘其导数。"
        }
,
        {
          id: '3.6-008',
          difficulty: '基础',
          type: '选择',
          topic: "反求被积函数",
          year: null,
          question: "若 ∫<sub>0</sub><sup>x</sup> f(t)dt = x<sup>2</sup>，则 f(x)=（  ）",
          options: [
            "A. 2x",
            "B. x<sup>2</sup>",
            "C. <span class=\"frac\"><span class=\"num\">x<sup>3</sup></span><span class=\"den\">3</span></span>",
            "D. x"
          ],
          answer: "A",
          solution: [
            "第一步：两边求导 f(x)=2x。"
          ],
          keyPoints: [
            "【重点】变限积分等式两边求导。"
          ],
          summary: "已知积分结果求 f，两边求导。"
        }
,
        {
          id: '3.6-009',
          difficulty: '提高',
          type: '选择',
          topic: "洛必达",
          year: null,
          question: "lim<sub>x→0</sub> <span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x<sup>2</sup></sup> tan t dt</span><span class=\"den\">∫<sub>0</sub><sup>x</sup> t<sup>2</sup> dt</span></span> =（  ）",
          options: [
            "A. 1",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "C. 0",
            "D. 2"
          ],
          answer: "C",
          solution: [
            "第一步：分子 tan t~t，∫₀^{x²}t dt=(x²)²/2=x⁴/2。",
            "第二步：分母 ∫₀ˣt²dt=x³/3。",
            "第三步：比 ~(x⁴/2)/(x³/3)=3x/2→0。"
          ],
          keyPoints: [
            "【难点】复合上限积分是 x⁴ 阶，比分母 x³ 阶更高。"
          ],
          summary: "双变限洛必达，先估阶再比。"
        }
,
        {
          id: '3.6-010',
          difficulty: '提高',
          type: '填空',
          topic: "被积函数含上限变量",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x</sup> (x-t)f(t)dt = ________。",
          options: null,
          answer: "∫<sub>0</sub><sup>x</sup> f(t)dt",
          solution: [
            "第一步：把 x 提出：x∫₀ˣf(t)dt - ∫₀ˣ t f(t)dt。",
            "第二步：求导 = ∫₀ˣf(t)dt + x f(x) - x f(x) = ∫₀ˣf(t)dt。"
          ],
          keyPoints: [
            "【重点】x 混在被积式里要先提出积分号外再求导。"
          ],
          summary: "被积含上限 x，先拆出再求导。"
        }
,
        {
          id: '3.6-011',
          difficulty: '提高',
          type: '选择',
          topic: "高阶导数",
          year: null,
          question: "F(x)=∫<sub>0</sub><sup>x</sup>(x-t)f(t)dt，则 F''(x)=（  ）",
          options: [
            "A. f(x)",
            "B. x f(x)",
            "C. f'(x)",
            "D. ∫<sub>0</sub><sup>x</sup> f(t)dt"
          ],
          answer: "A",
          solution: [
            "第一步：由上题 F'(x)=∫₀ˣf(t)dt。",
            "第二步：F''(x)=f(x)。"
          ],
          keyPoints: [
            "【重点】卷积型变限积分求二阶导即 f(x)。"
          ],
          summary: "(x−t)f(t) 型二阶导还原 f(x)。"
        }
,
        {
          id: '3.6-012',
          difficulty: '提高',
          type: '填空',
          topic: "变限方程",
          year: null,
          question: "设 f 连续，且 ∫<sub>0</sub><sup>x</sup> f(t)dt = x + ∫<sub>0</sub><sup>x</sup> t f(x-t)dt，则 f(0)=________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：令 u=x-t，换元 ∫₀ˣ t f(x-t)dt = x∫₀ˣf(u)du - ∫₀ˣ u f(u)du。",
            "第二步：对等式两边求导，取 x=0 定常数。",
            "第三步：整理得 f(x)=...，代入 x=0 得 f(0)=1。"
          ],
          keyPoints: [
            "【难点】换元把 f(x-t) 化为 f(u) 后再求导。"
          ],
          summary: "含 f(x-t) 的积分方程先换元。"
        }
,
        {
          id: '3.6-013',
          difficulty: '提高',
          type: '选择',
          topic: "变限积分奇偶性",
          year: null,
          question: "设 f(x) 为连续奇函数，则 F(x)=∫<sub>0</sub><sup>x</sup> f(t)dt 是（  ）",
          options: [
            "A. 偶函数",
            "B. 奇函数",
            "C. 非奇非偶",
            "D. 既奇又偶"
          ],
          answer: "A",
          solution: [
            "第一步：F(-x)=∫₀^{-x}f(t)dt，令 t=-u：=∫₀ˣ f(-u)(-du)=∫₀ˣf(u)du=F(x)。",
            "第二步：故 F 为偶函数。"
          ],
          keyPoints: [
            "【重点】奇↔偶：奇函数的变限积分为偶函数。"
          ],
          summary: "奇函数原函数为偶函数。"
        }
,
        {
          id: '3.6-014',
          difficulty: '提高',
          type: '填空',
          topic: "洛必达",
          year: null,
          question: "lim<sub>x→0</sub> <span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x</sup> e<sup>t<sup>2</sup></sup>dt - x</span><span class=\"den\">x<sup>2</sup></span></span> = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：洛必达 (e^{x²}-1)/(2x)。",
            "第二步：e^{x²}-1~x²，lim x²/(2x)=lim x/2=0。"
          ],
          keyPoints: [
            "【重点】e^{x²}-1~x²。"
          ],
          summary: "分子减 x 后洛必达两次。"
        }
,
        {
          id: '3.6-015',
          difficulty: '提高',
          type: '选择',
          topic: "复合变限",
          year: null,
          question: "f 连续，F(x)=∫<sub>0</sub><sup>x<sup>2</sup></sup> f(t)dt，则 F'(x)=（  ）",
          options: [
            "A. 2x f(x<sup>2</sup>)",
            "B. f(x<sup>2</sup>)",
            "C. x<sup>2</sup> f(x<sup>2</sup>)",
            "D. 2x f(x)"
          ],
          answer: "A",
          solution: [
            "第一步：= f(x²)·(x²)' = 2x f(x²)。"
          ],
          keyPoints: [
            "【重点】上限 x² 乘导数 2x。"
          ],
          summary: "标准复合变限求导。"
        }
,
        {
          id: '3.6-016',
          difficulty: '提高',
          type: '解答',
          topic: "被积含上限",
          year: null,
          question: "求 <span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x</sup> (x-t)e<sup>2t</sup>dt。",
          options: null,
          answer: "∫<sub>0</sub><sup>x</sup> e<sup>2t</sup>dt",
          solution: [
            "第一步：拆为 x∫₀ˣe^{2t}dt - ∫₀ˣ t e^{2t}dt。",
            "第二步：求导 = ∫₀ˣe^{2t}dt + x e^{2x} - x e^{2x} = ∫₀ˣe^{2t}dt。"
          ],
          keyPoints: [
            "【重点】与 010 同型。"
          ],
          summary: "(x−t)g(t) 求导消去边界项。"
        }
,
        {
          id: '3.6-017',
          difficulty: '难题',
          type: '选择',
          topic: "洛必达综合",
          year: null,
          question: "lim<sub>x→0</sub> <span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x</sup> (1-cost)dt</span><span class=\"den\">∫<sub>0</sub><sup>x</sup> t sint dt</span></span> =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "B. 1",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
            "D. 2"
          ],
          answer: "A",
          solution: [
            "第一步：分子 1-cost~t²/2，∫₀ˣt²/2 dt=x³/6。",
            "第二步：分母 sint~t，∫₀ˣt² dt=x³/3。",
            "第三步：比 = (x³/6)/(x³/3)=1/2。"
          ],
          keyPoints: [
            "【难点】分子分母同为 x³ 阶，等价无穷小后比值确定。"
          ],
          summary: "同阶变限极限，等价无穷小后取比。"
        }
,
        {
          id: '3.6-018',
          difficulty: '难题',
          type: '填空',
          topic: "换元化变限",
          year: null,
          question: "设 f 连续，则 <span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x</sup> t f(x<sup>2</sup>-t<sup>2</sup>)dt = ________。",
          options: null,
          answer: "x f(x<sup>2</sup>)",
          solution: [
            "第一步：令 u=x²-t²，du=-2t dt。",
            "第二步：积分 = (1/2)∫₀^{x²} f(u)du。",
            "第三步：求导 = (1/2)·f(x²)·2x = x f(x²)。"
          ],
          keyPoints: [
            "【难点】先换元把 x²−t² 换成单变量 u。"
          ],
          summary: "f(x²−t²) 型换元后求导。"
        }
,
        {
          id: '3.6-019',
          difficulty: '难题',
          type: '解答',
          topic: "积分方程",
          year: null,
          question: "设 f(x) 连续，满足 f(x) = x + 2∫<sub>0</sub><sup>1</sup> f(t)dt，求 f(x)。",
          options: null,
          answer: "f(x) = x - 1",
          solution: [
            "第一步：设 A=∫₀¹f(t)dt 为常数，则 f(x)=x+2A。",
            "第二步：A=∫₀¹(t+2A)dt = 1/2 + 2A。",
            "第三步：解 A=1/2+2A 得 A=-1/2，故 f(x)=x-1。"
          ],
          keyPoints: [
            "【重点】定积分是常数，先设 A 再解方程。"
          ],
          summary: "含定积分的方程，把积分整体设为常数。"
        }
,
        {
          id: '3.6-020',
          difficulty: '难题',
          type: '选择',
          topic: "积分方程",
          year: null,
          question: "设 f(x) 连续且 ∫<sub>0</sub><sup>x</sup> f(t)dt = x<sup>2</sup> + ∫<sub>0</sub><sup>x</sup> t f(x-t)dt，则 f(0)=（  ）",
          options: [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. 2"
          ],
          answer: "A",
          solution: [
            "第一步：两边求导并化简，代入 x=0。",
            "第二步：左边 f(0)，右边在 x=0 处各变限项归零，得 f(0)=0。"
          ],
          keyPoints: [
            "【难点】令 x=0 往往直接定出 f(0)。"
          ],
          summary: "积分方程求 f(0)，令 x=0。"
        }
,
        {
          id: '3.6-021',
          difficulty: '难题',
          type: '填空',
          topic: "周期函数平均",
          year: null,
          question: "lim<sub>x→+∞</sub> <span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x</sup> |sint|dt</span><span class=\"den\">x</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">π</span></span>",
          solution: [
            "第一步：|sint| 周期为 π，一个周期内积分为 2。",
            "第二步：长时间平均 = 周期积分/周期 = 2/π。"
          ],
          keyPoints: [
            "【重点】周期函数平均极限=一个周期积分/周期。"
          ],
          summary: "周期被积函数的无穷远平均。"
        }
,
        {
          id: '3.6-022',
          difficulty: '真题',
          type: '填空',
          topic: "洛必达",
          year: 2013,
          question: "lim<sub>x→1</sub> <span class=\"frac\"><span class=\"num\">∫<sub>1</sub><sup>x</sup> e<sup>t<sup>2</sup></sup>dt</span><span class=\"den\">x-1</span></span> = ________。",
          options: null,
          answer: "e",
          solution: [
            "第一步：0/0 型，洛必达：分子求导 e^{x²}，分母求导 1。",
            "第二步：代入 x=1 得 e。"
          ],
          keyPoints: [
            "【真题高频】变限积分在定点的洛必达。"
          ],
          summary: "简单洛必达还原被积函数值。"
        }
,
        {
          id: '3.6-023',
          difficulty: '真题',
          type: '选择',
          topic: "变限求导",
          year: 2017,
          question: "设 f 连续，F(x)=∫<sub>0</sub><sup>x<sup>2</sup></sup> f(t)dt，则 F'(1)=（  ）",
          options: [
            "A. 2f(1)",
            "B. f(1)",
            "C. 4f(1)",
            "D. f'(1)"
          ],
          answer: "A",
          solution: [
            "第一步：F'(x)=2x f(x²)。",
            "第二步：代入 x=1 得 2f(1)。"
          ],
          keyPoints: [
            "【真题高频】复合变限求导后代点。"
          ],
          summary: "求导后代入指定点。"
        }
,
        {
          id: '3.6-024',
          difficulty: '真题',
          type: '解答',
          topic: "变限方程",
          year: 2021,
          question: "设 f 连续，且 f(x) = ∫<sub>0</sub><sup>x</sup> f(t)dt + 1，求 f(x)。",
          options: null,
          answer: "f(x) = e<sup>x</sup>",
          solution: [
            "第一步：两边求导 f'(x)=f(x)。",
            "第二步：通解 f(x)=Ce^x；代入原方程 x=0：f(0)=0+1=1，故 C=1。",
            "第三步：f(x)=e^x。"
          ],
          keyPoints: [
            "【真题高频】f(x)=∫f+常数 → 微分方程 f'=f，f(0)=常数。"
          ],
          summary: "变限积分方程化为 f'=f 型。"
        }
,
        {
          id: '3.6-025',
          difficulty: '真题',
          type: '填空',
          topic: "变限求导",
          year: 2024,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>2x</sup> (x+t)f(t)dt = ________。",
          options: null,
          answer: "2(x+2x)f(2x) + ∫<sub>0</sub><sup>2x</sup> f(t)dt = 6x f(2x) + ∫<sub>0</sub><sup>2x</sup> f(t)dt",
          solution: [
            "第一步：拆出 x：x∫₀^{2x}f(t)dt + ∫₀^{2x}t f(t)dt。",
            "第二步：求导 = ∫₀^{2x}f(t)dt + x·2f(2x) + 2x·f(2x)·2。",
            "第三步：合并 = ∫₀^{2x}f(t)dt + 6x f(2x)。"
          ],
          keyPoints: [
            "【难点】x 与上限 2x 同时出现，边界项要算全。"
          ],
          summary: "被积含 x 且上限含 x，逐项求导。"
        }
,
        {
          id: '3.6-026',
          difficulty: '基础',
          type: '选择',
          topic: "变限积分求导",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x</sup>sin(t<sup>2</sup>)dt = （  ）",
          options: [
            "A. sin(x<sup>2</sup>)",
            "B. cos(x<sup>2</sup>)",
            "C. 2xsin(x<sup>2</sup>)",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2x</span></span>sin(x<sup>2</sup>)"
          ],
          answer: "A",
          solution: [
            "第一步：变上限积分求导 d/dx ∫<sub>a</sub><sup>x</sup>f(t)dt = f(x)。",
            "第二步：直接得 sin(x<sup>2</sup>)。"
          ],
          keyPoints: [
            "【重点】变上限求导法则：上限代入被积函数。",
            "【易错点】上限是 x 不是 x²，不用乘 2x。"
          ],
          summary: "变上限积分对上限求导，等于被积函数在上限处的值。"
        }
,
        {
          id: '3.6-027',
          difficulty: '基础',
          type: '填空',
          topic: "牛顿莱布尼茨公式",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup>cosx dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：cosx 的原函数为 sinx。",
            "第二步：∫<sub>0</sub><sup>π/2</sup>cosx dx = sin(<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>) - sin0 = 1 - 0 = 1。"
          ],
          keyPoints: [
            "【重点】牛顿-莱布尼茨公式 ∫<sub>a</sub><sup>b</sup>f = F(b)-F(a)。",
            "【易错点】原函数要在上下限处分别代入相减。"
          ],
          summary: "定积分 = 原函数在上限减下限。"
        }
,
        {
          id: '3.6-028',
          difficulty: '提高',
          type: '选择',
          topic: "变限复合求导",
          year: null,
          question: "<span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">dx</span></span>∫<sub>0</sub><sup>x<sup>2</sup></sup>√(1+t<sup>3</sup>)dt = （  ）",
          options: [
            "A. 2x√(1+x<sup>6</sup>)",
            "B. √(1+x<sup>6</sup>)",
            "C. √(1+x<sup>2</sup>)",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2x</span></span>√(1+x<sup>6</sup>)"
          ],
          answer: "A",
          solution: [
            "第一步：变上限为 u=x<sup>2</sup>，链式法则。",
            "第二步：= f(u)·u' = √(1+u<sup>3</sup>)·2x。",
            "第三步：回代 u=x<sup>2</sup>，得 2x√(1+x<sup>6</sup>)。"
          ],
          keyPoints: [
            "【重点】变上限是函数时，乘以上限导数。",
            "【易错点】u<sup>3</sup>=(x<sup>2</sup>)<sup>3</sup>=x<sup>6</sup>，不是 x<sup>5</sup>。"
          ],
          summary: "变上限为 φ(x) 时，导数 = f(φ(x))·φ'(x)。"
        }
,
        {
          id: '3.6-029',
          difficulty: '提高',
          type: '解答',
          topic: "含变限的极限",
          year: null,
          question: "求 lim<sub>x→0</sub><span class=\"frac\"><span class=\"num\">∫<sub>0</sub><sup>x</sup>sin(t<sup>2</sup>)dt</span><span class=\"den\">x<sup>3</sup></span></span>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：x→0 时分子分母都→0，洛必达。",
            "第二步：= lim<sub>x→0</sub><span class=\"frac\"><span class=\"num\">sin(x<sup>2</sup>)</span><span class=\"den\">3x<sup>2</sup></span></span>。",
            "第三步：等价无穷小 sin(x<sup>2</sup>)~x<sup>2</sup>，得 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>。"
          ],
          keyPoints: [
            "【重点】变限积分极限用洛必达 + 等价无穷小。",
            "【易错点】分子求导后为 sin(x²)，再用等价无穷小。"
          ],
          summary: "0/0 型含变限积分，洛必达后等价无穷小替换。"
        }
,
        {
          id: '3.6-030',
          difficulty: '真题',
          type: '填空',
          topic: "变限积分求导",
          year: 2019,
          question: "设 f(x) 连续，且 ∫<sub>0</sub><sup>x<sup>2</sup>+1</sup>f(t)dt = x<sup>2</sup>，则 f(2) = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：两边对 x 求导：f(x<sup>2</sup>+1)·2x = 2x。",
            "第二步：化简 f(x<sup>2</sup>+1) = 1（x≠0）。",
            "第三步：令 x<sup>2</sup>+1 = 2，即 x<sup>2</sup>=1，故 f(2)=1。"
          ],
          keyPoints: [
            "【真题高频】变限积分等式两边求导。",
            "【易错点】乘以上限导数 2x。"
          ],
          summary: "含变限积分的函数方程，两边求导解出 f。"
        }
        ]
      },
      '3.7': {
        id: '3.7',
        title: "定积分的计算",
        questions: [
        {
          id: '3.7-001',
          difficulty: '基础',
          type: '填空',
          topic: "牛顿-莱布尼茨",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> x<sup>2</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：∫x²dx=x³/3。",
            "第二步：[x³/3]₀¹=1/3。"
          ],
          keyPoints: [
            "【重点】先求不定积分再代上下限。"
          ],
          summary: "直接套牛顿-莱布尼茨。"
        }
,
        {
          id: '3.7-002',
          difficulty: '基础',
          type: '选择',
          topic: "基本计算",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> sinx dx =（  ）",
          options: [
            "A. 1",
            "B. 0",
            "C. -1",
            "D. 2"
          ],
          answer: "A",
          solution: [
            "第一步：∫sinx dx=-cosx。",
            "第二步：[-cosx]₀^{π/2}=0-(-1)=1。"
          ],
          keyPoints: [
            "【重点】[-cosx] 代上下限注意符号。"
          ],
          summary: "基础三角定积分。"
        }
,
        {
          id: '3.7-003',
          difficulty: '基础',
          type: '填空',
          topic: "对数积分",
          year: null,
          question: "∫<sub>1</sub><sup>e</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：∫1/x dx=lnx。",
            "第二步：[lnx]₁ᵉ=1-0=1。"
          ],
          keyPoints: [
            "【重点】ln e=1，ln 1=0。"
          ],
          summary: "1/x 积分得 ln 代上下限。"
        }
,
        {
          id: '3.7-004',
          difficulty: '基础',
          type: '选择',
          topic: "指数积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> e<sup>x</sup>dx =（  ）",
          options: [
            "A. e-1",
            "B. e",
            "C. 1-e",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：[e^x]₀¹=e-1。"
          ],
          keyPoints: [
            "【重点】e⁰=1 别漏。"
          ],
          summary: "e^x 积分仍是 e^x。"
        }
,
        {
          id: '3.7-005',
          difficulty: '基础',
          type: '填空',
          topic: "分段绝对值",
          year: null,
          question: "∫<sub>0</sub><sup>2</sup> |1-x|dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：[0,1] |1-x|=1-x；[1,2] |1-x|=x-1。",
            "第二步：∫₀¹(1-x)dx + ∫₁²(x-1)dx = 1/2+1/2=1。"
          ],
          keyPoints: [
            "【重点】绝对值分段。"
          ],
          summary: "|1−x| 以 x=1 分界。"
        }
,
        {
          id: '3.7-006',
          difficulty: '基础',
          type: '选择',
          topic: "对称抵消",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> cosx dx =（  ）",
          options: [
            "A. 0",
            "B. 1",
            "C. 2",
            "D. -1"
          ],
          answer: "A",
          solution: [
            "第一步：[sinx]₀^π=0。"
          ],
          keyPoints: [
            "【简便方法】cosx 在 [0,π] 上下面积抵消。"
          ],
          summary: "cosx 在 [0,π] 积分为 0。"
        }
,
        {
          id: '3.7-007',
          difficulty: '基础',
          type: '填空',
          topic: "降幂",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> sin<sup>2</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：sin²x=(1-cos2x)/2。",
            "第二步：积分 = [x/2 - sin2x/4]₀^{π/2}=π/4。"
          ],
          keyPoints: [
            "【重点】∫₀^{π/2}sin²x=∫₀^{π/2}cos²x=π/4。"
          ],
          summary: "偶次三角半区间积分套结论。"
        }
,
        {
          id: '3.7-008',
          difficulty: '基础',
          type: '选择',
          topic: "奇函数",
          year: null,
          question: "∫<sub>-1</sub><sup>1</sup> x e<sup>x<sup>2</sup></sup>dx =（  ）",
          options: [
            "A. 0",
            "B. 1",
            "C. e",
            "D. 2e"
          ],
          answer: "A",
          solution: [
            "第一步：x e^{x²} 是奇函数。",
            "第二步：对称区间积分为 0。"
          ],
          keyPoints: [
            "【重点】对称区间奇函数直接 0。"
          ],
          summary: "奇函数对称区间积分 0。"
        }
,
        {
          id: '3.7-009',
          difficulty: '基础',
          type: '填空',
          topic: "根式换元",
          year: null,
          question: "∫<sub>0</sub><sup>4</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">1+√x</span></span> = ________。",
          options: null,
          answer: "2(2-ln3)",
          solution: [
            "第一步：令 t=√x，dx=2t dt，x:0→4，t:0→2。",
            "第二步：∫₀² 2t/(1+t)dt = 2[t-ln(1+t)]₀² = 2(2-ln3)。"
          ],
          keyPoints: [
            "【重点】换元必换限。"
          ],
          summary: "√x 换元 t=√x 同时换限。"
        }
,
        {
          id: '3.7-010',
          difficulty: '基础',
          type: '选择',
          topic: "分部",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> x e<sup>x</sup>dx =（  ）",
          options: [
            "A. 1",
            "B. e",
            "C. 2",
            "D. 0"
          ],
          answer: "A",
          solution: [
            "第一步：[x e^x - e^x]₀¹ = (e-e)-(0-1)=1。"
          ],
          keyPoints: [
            "【重点】定积分分部，边界项代入上下限。"
          ],
          summary: "幂×e^x 分部代值。"
        }
,
        {
          id: '3.7-011',
          difficulty: '基础',
          type: '填空',
          topic: "奇次幂",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> cos<sup>3</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：cos³x=cosx(1-sin²x)。",
            "第二步：∫cosx(1-sin²x)dx = [sinx - sin³x/3]₀^{π/2}=1-1/3=2/3。"
          ],
          keyPoints: [
            "【重点】奇次幂留一个配微分。"
          ],
          summary: "cos³ 拆 cos(1−sin²)。"
        }
,
        {
          id: '3.7-012',
          difficulty: '基础',
          type: '选择',
          topic: "凑微分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> x e<sup>x<sup>2</sup></sup>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">e-1</span><span class=\"den\">2</span></span>",
            "B. e-1",
            "C. <span class=\"frac\"><span class=\"num\">e</span><span class=\"den\">2</span></span>",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：x dx=(1/2)d(x²)。",
            "第二步：(1/2)∫₀¹e^{x²}d(x²)=(1/2)[e^{x²}]₀¹=(e-1)/2。"
          ],
          keyPoints: [
            "【重点】x e^{x²} 凑 (1/2)d(e^{x²}) 型。"
          ],
          summary: "x·f(x²) 凑 d(x²)。"
        }
,
        {
          id: '3.7-013',
          difficulty: '提高',
          type: '选择',
          topic: "去根号",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> √(sin<sup>3</sup>x-sin<sup>5</sup>x)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">5</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">5</span></span>",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：=∫₀^π sin^{3/2}x|cosx|dx。",
            "第二步：由对称性=2∫₀^{π/2} sin^{3/2}x cosx dx。",
            "第三步：=2·[sin^{5/2}x/(5/2)]₀^{π/2}=2·2/5=4/5。"
          ],
          keyPoints: [
            "【难点】√(sin³cos²)=sin^{3/2}|cos|。"
          ],
          summary: "sin/cos 乘积开方带绝对值。"
        }
,
        {
          id: '3.7-014',
          difficulty: '提高',
          type: '填空',
          topic: "根式换元",
          year: null,
          question: "∫<sub>1</sub><sup>4</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x(1+√x)</span></span> = ________。",
          options: null,
          answer: "2ln<span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：令 t=√x，dx=2t dt，x:1→4，t:1→2。",
            "第二步：∫₁² 2t/[t(1+t)]dt=2∫₁²dt/(1+t)=2[ln(1+t)]₁²。",
            "第三步：=2(ln3-ln2)=2ln(3/2)。"
          ],
          keyPoints: [
            "【重点】换限别错：t:1→2。"
          ],
          summary: "√x(1+√x) 令 t=√x。"
        }
,
        {
          id: '3.7-015',
          difficulty: '提高',
          type: '选择',
          topic: "降幂",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> sin<sup>2</sup>x cos<sup>2</sup>x dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">16</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：sin²cos²=(1/4)sin²2x=(1-cos4x)/8。",
            "第二步：积分=[x/8-sin4x/32]₀^{π/2}=π/16。"
          ],
          keyPoints: [
            "【重点】sinx cosx=(1/2)sin2x。"
          ],
          summary: "sin²cos² 降幂到 cos4x。"
        }
,
        {
          id: '3.7-016',
          difficulty: '提高',
          type: '填空',
          topic: "分部",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> arcsinx dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> - 1",
          solution: [
            "第一步：分部 = [x arcsinx]₀¹ - ∫₀¹ x/√(1-x²)dx。",
            "第二步：余项 = √(1-x²)|₀¹ = -1。",
            "第三步：= π/2 - 1。"
          ],
          keyPoints: [
            "【重点】定积分分部代值。"
          ],
          summary: "arcsinx 分部代上下限。"
        }
,
        {
          id: '3.7-017',
          difficulty: '提高',
          type: '选择',
          topic: "分部",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> x sinx dx =（  ）",
          options: [
            "A. π",
            "B. 0",
            "C. 2π",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：分部 = [-x cosx]₀^π + ∫₀^πcosx dx。",
            "第二步：= -π(-1)+[sinx]₀^π = π。"
          ],
          keyPoints: [
            "【重点】∫₀^π x sinx=π 当公式记。"
          ],
          summary: "x sinx 分部，边界项出 π。"
        }
,
        {
          id: '3.7-018',
          difficulty: '提高',
          type: '填空',
          topic: "Wallis 公式",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> sin<sup>4</sup>x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">16</span></span>",
          solution: [
            "第一步：Wallis：∫₀^{π/2}sin⁴x=(3/4)(1/2)(π/2)=3π/16。"
          ],
          keyPoints: [
            "【重点】Wallis 公式：偶数次乘 π/2。"
          ],
          summary: "sinⁿ 半区间用 Wallis。"
        }
,
        {
          id: '3.7-019',
          difficulty: '提高',
          type: '选择',
          topic: "换元",
          year: null,
          question: "∫<sub>0</sub><sup>ln2</sup> e<sup>x</sup>√(e<sup>x</sup>-1)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "C. 1",
            "D. <span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√(e^x-1)，e^x=t²+1，e^x dx=2t dt。",
            "第二步：x=0→t=0；x=ln2→t=1。",
            "第三步：∫₀¹ t·2t dt=2/3。"
          ],
          keyPoints: [
            "【重点】e^x dx 凑进 d(e^x)。"
          ],
          summary: "e^x√(e^x−1) 令 t=√(e^x−1)。"
        }
,
        {
          id: '3.7-020',
          difficulty: '提高',
          type: '填空',
          topic: "对称公式",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> <span class=\"frac\"><span class=\"num\">sinx</span><span class=\"den\">sinx+cosx</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：用公式 ∫₀^{π/2}f(sinx)dx=∫₀^{π/2}f(cosx)dx。",
            "第二步：I = ∫₀^{π/2}cosx/(sinx+cosx)dx，两式相加 2I=∫₀^{π/2}1 dx=π/2。",
            "第三步：I=π/4。"
          ],
          keyPoints: [
            "【重点】配对法：I+I=半区间长度。"
          ],
          summary: "sin/(sin+cos) 半区间恒为 π/4。"
        }
,
        {
          id: '3.7-021',
          difficulty: '提高',
          type: '选择',
          topic: "对称公式",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> x f(sinx)dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>∫<sub>0</sub><sup>π</sup> f(sinx)dx",
            "B. π∫<sub>0</sub><sup>π</sup> f(sinx)dx",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>∫<sub>0</sub><sup>π/2</sup> f(sinx)dx",
            "D. 0"
          ],
          answer: "A",
          solution: [
            "第一步：令 x=π-t 换元，可得 I=∫₀^π(π-t)f(sint)dt。",
            "第二步：与原式相加 2I=π∫₀^πf(sinx)dx。"
          ],
          keyPoints: [
            "【重点】∫₀^π x f(sinx)=(π/2)∫₀^π f(sinx)。"
          ],
          summary: "x f(sinx) 在 [0,π] 用 x→π−x 配对。"
        }
,
        {
          id: '3.7-022',
          difficulty: '提高',
          type: '填空',
          topic: "周期积分",
          year: null,
          question: "∫<sub>0</sub><sup>π</sup> |cosx|dx = ________。",
          options: null,
          answer: "2",
          solution: [
            "第一步：[0,π/2] cosx≥0；[π/2,π] cosx≤0。",
            "第二步：∫₀^{π/2}cosx dx + ∫_{π/2}^π(-cosx)dx = 1+1=2。"
          ],
          keyPoints: [
            "【重点】|cosx| 周期 π/2。"
          ],
          summary: "|cosx| 在 [0,π] 积 2。"
        }
,
        {
          id: '3.7-023',
          difficulty: '提高',
          type: '选择',
          topic: "凑微分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">e<sup>x</sup></span><span class=\"den\">1+e<sup>x</sup></span></span>dx =（  ）",
          options: [
            "A. ln<span class=\"frac\"><span class=\"num\">1+e</span><span class=\"den\">2</span></span>",
            "B. ln(1+e)",
            "C. ln2",
            "D. e-1"
          ],
          answer: "A",
          solution: [
            "第一步：e^x dx=d(e^x)。",
            "第二步：∫d(e^x)/(1+e^x)=[ln(1+e^x)]₀¹=ln(1+e)-ln2=ln((1+e)/2)。"
          ],
          keyPoints: [
            "【重点】e^x dx=d(e^x)。"
          ],
          summary: "e^x/(1+e^x) 凑 ln。"
        }
,
        {
          id: '3.7-024',
          difficulty: '提高',
          type: '填空',
          topic: "分部",
          year: null,
          question: "∫<sub>1</sub><sup>e</sup> ln√x dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">e</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：ln√x=(1/2)lnx。",
            "第二步：(1/2)[xlnx-x]₁ᵉ=(1/2)[(e-e)-(0-1)]=(1/2)。"
          ],
          keyPoints: [
            "【重点】先把 ln√x 化为 (1/2)lnx。"
          ],
          summary: "ln√x 化简后分部。"
        }
,
        {
          id: '3.7-025',
          difficulty: '难题',
          type: '选择',
          topic: "经典配对",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">ln(1+x)</span><span class=\"den\">1+x<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>ln2",
            "B. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>ln2",
            "C. ln2",
            "D. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>ln2"
          ],
          answer: "A",
          solution: [
            "第一步：令 x=tan t，化为 ∫₀^{π/4}ln(1+tan t)dt。",
            "第二步：用 t→π/4-t 配对，得 2I=∫₀^{π/4}ln2 dt=(π/4)ln2。",
            "第三步：I=π/8 ln2。"
          ],
          keyPoints: [
            "【难点】经典题，配对后 ln(1+tan) 相消为 ln2。"
          ],
          summary: "ln(1+x)/(1+x²) 令 x=tan t 后配对。"
        }
,
        {
          id: '3.7-026',
          difficulty: '难题',
          type: '填空',
          topic: "对数三角积分",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> ln(sinx)dx = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>ln2",
          solution: [
            "第一步：记 I，由对称性 I=∫₀^{π/2}ln(cosx)dx。",
            "第二步：2I=∫₀^{π/2}ln(sinx cosx)dx=∫₀^{π/2}ln(sin2x)dx-(π/2)ln2。",
            "第三步：解得 I=-(π/2)ln2。"
          ],
          keyPoints: [
            "【难点】经典对数正弦积分，结果当公式记。"
          ],
          summary: "∫₀^{π/2}ln sinx=−(π/2)ln2。"
        }
,
        {
          id: '3.7-027',
          difficulty: '难题',
          type: '解答',
          topic: "换元",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> x(1-x)<sup>10</sup>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">132</span></span>",
          solution: [
            "第一步：令 u=1-x，x=1-u，x:0→1，u:1→0。",
            "第二步：∫₀¹(1-u)u<sup>10</sup>du = ∫₀¹(u<sup>10</sup>-u<sup>11</sup>)du。",
            "第三步：= 1/11-1/12 = 1/132。"
          ],
          keyPoints: [
            "【重点】u=1−x 把 x(1−x)ⁿ 化为幂差。"
          ],
          summary: "x(1−x)ⁿ 令 u=1−x。"
        }
,
        {
          id: '3.7-028',
          difficulty: '难题',
          type: '选择',
          topic: "Wallis",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup> sin<sup>5</sup>x dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">8</span><span class=\"den\">15</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">16</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：Wallis 奇次：(4/5)(2/3)=8/15。"
          ],
          keyPoints: [
            "【重点】奇次 Wallis 不含 π。"
          ],
          summary: "sin⁵ 半区间 Wallis。"
        }
,
        {
          id: '3.7-029',
          difficulty: '难题',
          type: '填空',
          topic: "被积含参",
          year: null,
          question: "设 f(x)=∫<sub>1</sub><sup>x</sup> <span class=\"frac\"><span class=\"num\">ln t</span><span class=\"den\">1+t</span></span>dt（x&gt;0），则 f(x)+f(<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>)=________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>(lnx)<sup>2</sup>",
          solution: [
            "第一步：f(1/x)=∫₁^{1/x} ln t/(1+t)dt，令 u=1/t 换元。",
            "第二步：得 f(1/x)=∫₁ˣ lnu/[u(1+u)]du。",
            "第三步：相加 = ∫₁ˣ lnu[1/(1+u)+1/(u(1+u))]du = ∫₁ˣ lnu/u du=(1/2)(lnx)²。"
          ],
          keyPoints: [
            "【难点】f(x)+f(1/x) 型换元后被积合并。"
          ],
          summary: "f(x)+f(1/x) 令 t=1/u。"
        }
,
        {
          id: '3.7-030',
          difficulty: '难题',
          type: '解答',
          topic: "对称不变",
          year: null,
          question: "证明并计算 ∫<sub>0</sub><sup>π/2</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+tan<sup>α</sup>x</span></span>dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：令 x=π/2-t，tan(π/2-t)=cott。",
            "第二步：I=∫₀^{π/2} 1/(1+cot^αx)dx=∫₀^{π/2} tan^αx/(1+tan^αx)dx。",
            "第三步：与原式相加 2I=∫₀^{π/2}1 dx=π/2，故 I=π/4。"
          ],
          keyPoints: [
            "【重点】结果与 α 无关，恒为 π/4。"
          ],
          summary: "1/(1+tan^α) 半区间对称化为 π/4。"
        }
,
        {
          id: '3.7-031',
          difficulty: '难题',
          type: '选择',
          topic: "换元综合",
          year: null,
          question: "∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">√(x+1)</span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">10</span><span class=\"den\">3</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">8</span><span class=\"den\">3</span></span>",
            "C. 2",
            "D. <span class=\"frac\"><span class=\"num\">16</span><span class=\"den\">3</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：令 t=√(x+1)，x=t²-1，dx=2t dt，x:0→3，t:1→2。",
            "第二步：∫₁² (t²-1)/t·2t dt=2∫₁²(t²-1)dt=2[t³/3-t]₁²。",
            "第三步：=2[(8/3-2)-(1/3-1)]=2[2/3+2/3]=10/3。"
          ],
          keyPoints: [
            "【易错点】换限 t:1→2。"
          ],
          summary: "x/√(x+1) 令 t=√(x+1)。"
        }
,
        {
          id: '3.7-032',
          difficulty: '难题',
          type: '填空',
          topic: "分部综合",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">x<sup>2</sup>arcsinx</span><span class=\"den\">√(1-x<sup>2</sup>)</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">6</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：令 x=sint，dx=cost dt，x:0→1，t:0→π/2。",
            "第二步：∫₀^{π/2} t sin²t/cost · cost dt=∫₀^{π/2}t sin²t dt。",
            "第三步：分部，结果 π/6-1/3。"
          ],
          keyPoints: [
            "【难点】换元后化为 t·sin²t 再分部。"
          ],
          summary: "含 √(1−x²) 与 arcsinx，换元后分部。"
        }
,
        {
          id: '3.7-033',
          difficulty: '真题',
          type: '填空',
          topic: "分部+三角",
          year: 2011,
          question: "∫<sub>0</sub><sup>π/4</sup> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+cos2x</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span> - <span class=\"frac\"><span class=\"num\">ln2</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：1+cos2x=2cos²x。",
            "第二步：(1/2)∫₀^{π/4}x sec²x dx，分部=(1/2)[x tanx]-(1/2)∫tanx dx。",
            "第三步：= π/8 + (1/2)[lncosx]₀^{π/4}=π/8-(1/4)ln2。"
          ],
          keyPoints: [
            "【真题高频】x/(1+cos2x) 降幂后分部。"
          ],
          summary: "1+cos2x=2cos²x 后分部。"
        }
,
        {
          id: '3.7-034',
          difficulty: '真题',
          type: '选择',
          topic: "奇偶",
          year: 2013,
          question: "设 f(x) 连续，则 ∫<sub>-π</sub><sup>π</sup> [f(x)+f(-x)]sinx dx =（  ）",
          options: [
            "A. 0",
            "B. 2∫<sub>0</sub><sup>π</sup> f(x)sinx dx",
            "C. ∫<sub>0</sub><sup>π</sup> f(x)sinx dx",
            "D. 2∫<sub>0</sub><sup>π</sup> f(x)dx"
          ],
          answer: "A",
          solution: [
            "第一步：f(x)+f(-x) 是偶函数。",
            "第二步：偶函数×sinx(奇)=奇函数，对称区间积分为 0。"
          ],
          keyPoints: [
            "【真题高频】偶×奇=奇。"
          ],
          summary: "[f(x)+f(−x)]sinx 为奇。"
        }
,
        {
          id: '3.7-035',
          difficulty: '真题',
          type: '填空',
          topic: "换元",
          year: 2015,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">(x<sup>2</sup>+1)<sup>2</sup></span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：x dx=(1/2)d(x²+1)。",
            "第二步：(1/2)∫₁² du/u²=(1/2)[-1/u]₁²=(1/2)(-1/2+1)=1/4。"
          ],
          keyPoints: [
            "【真题高频】x 凑 d(x²+1)。"
          ],
          summary: "x/(x²+1)² 凑 d(x²+1)。"
        }
,
        {
          id: '3.7-036',
          difficulty: '真题',
          type: '选择',
          topic: "分部",
          year: 2017,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">ln(1+x)</span><span class=\"den\">(1+x)<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>-ln2",
            "B. ln2",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>+ln2",
            "D. -ln2"
          ],
          answer: "A",
          solution: [
            "第一步：分部 = [-ln(1+x)/(1+x)]₀¹ + ∫₀¹1/[(1+x)²]dx。",
            "第二步：= -ln2/2 + [-1/(1+x)]₀¹ = -ln2/2 + 1/2。"
          ],
          keyPoints: [
            "【真题高频】ln(1+x)/(1+x)² 分部。"
          ],
          summary: "ln(1+x)/(1+x)² 分部。"
        }
,
        {
          id: '3.7-037',
          difficulty: '真题',
          type: '填空',
          topic: "对称",
          year: 2019,
          question: "∫<sub>-1</sub><sup>1</sup> (x+√(1-x<sup>2</sup>))<sup>2</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：展开 (x+√(1-x²))²=x²+2x√(1-x²)+1-x²=1+2x√(1-x²)。",
            "第二步：2x√(1-x²) 是奇函数积 0。",
            "第三步：∫_{-1}^1 1 dx=2。"
          ],
          keyPoints: [
            "【易错点】展开后奇函数项抵消。"
          ],
          summary: "平方展开，奇函数项为 0。"
        }
,
        {
          id: '3.7-038',
          difficulty: '真题',
          type: '解答',
          topic: "换元综合",
          year: 2021,
          question: "计算 ∫<sub>0</sub><sup>π/4</sup> ln(1+tanx)dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>ln2",
          solution: [
            "第一步：令 x=π/4-t 配对。",
            "第二步：2I=∫₀^{π/4}ln2 dx=π/4 ln2。",
            "第三步：I=π/8 ln2。"
          ],
          keyPoints: [
            "【真题高频】ln(1+tanx) 经典配对。"
          ],
          summary: "ln(1+tanx) 配对得 π/8 ln2。"
        }
,
        {
          id: '3.7-039',
          difficulty: '真题',
          type: '选择',
          topic: "变限+计算",
          year: 2023,
          question: "∫<sub>0</sub><sup>2</sup> √(x<sup>2</sup>-2x+1) dx =（  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. 0",
            "D. <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：√(x²-2x+1)=√((x-1)²)=|x-1|。",
            "第二步：∫₀²|x-1|dx=∫₀¹(1-x)dx+∫₁²(x-1)dx=1/2+1/2=1。"
          ],
          keyPoints: [
            "【易错点】√(x−1)²=|x−1|。"
          ],
          summary: "根号平方型化为绝对值分段。"
        }
,
        {
          id: '3.7-040',
          difficulty: '真题',
          type: '填空',
          topic: "凑微分",
          year: 2025,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">x e<sup>x</sup></span><span class=\"den\">(1+x)<sup>2</sup></span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">e</span><span class=\"den\">2</span></span>-1",
          solution: [
            "第一步：注意 x e^x/(1+x)² = e^x·[(1+x)-1]/(1+x)² = e^x/(1+x) - e^x/(1+x)²。",
            "第二步：恰为 [e^x/(1+x)]' 的形式，故积分=[e^x/(1+x)]₀¹。",
            "第三步：= e/2 - 1。"
          ],
          keyPoints: [
            "【难点】观察整体是 e^x/(1+x) 的导数。"
          ],
          summary: "x e^x/(1+x)² 凑 e^x/(1+x) 导数。"
        }
,
        {
          id: '3.7-041',
          difficulty: '基础',
          type: '选择',
          topic: "牛顿莱布尼茨",
          year: null,
          question: "∫<sub>1</sub><sup>e</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = （  ）",
          options: [
            "A. 0",
            "B. 1",
            "C. e",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">e</span></span>"
          ],
          answer: "B",
          solution: [
            "第一步：∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = ln|x|。",
            "第二步：∫<sub>1</sub><sup>e</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span> = lne - ln1 = 1 - 0 = 1。"
          ],
          keyPoints: [
            "【重点】1/x 的原函数是 ln|x|。",
            "【易错点】上下限代入 e 和 1。"
          ],
          summary: "基本定积分套用牛顿-莱布尼茨公式。"
        }
,
        {
          id: '3.7-042',
          difficulty: '基础',
          type: '填空',
          topic: "奇偶对称",
          year: null,
          question: "∫<sub>-2</sub><sup>2</sup>x<sup>3</sup>·e<sup>x<sup>2</sup></sup>dx = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：x<sup>3</sup> 是奇函数，e<sup>x²</sup> 是偶函数。",
            "第二步：乘积 x<sup>3</sup>e<sup>x²</sup> 是奇函数。",
            "第三步：对称区间 [-2,2] 上奇函数积分 = 0。"
          ],
          keyPoints: [
            "【重点】奇×偶=奇，对称区间积分 0。",
            "【易错点】无需计算，直接利用对称性。"
          ],
          summary: "对称区间奇函数直接得 0，避免复杂计算。"
        }
,
        {
          id: '3.7-043',
          difficulty: '提高',
          type: '选择',
          topic: "分段积分",
          year: null,
          question: "设 f(x) = <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\">x,</span><span class=\"pcond\">0≤x≤1</span></span><span class=\"prow\"><span class=\"pval\">2-x,</span><span class=\"pcond\">1&lt;x≤2</span></span></span>，则 ∫<sub>0</sub><sup>2</sup>f(x)dx = （  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：分段积分 ∫<sub>0</sub><sup>1</sup>x dx + ∫<sub>1</sub><sup>2</sup>(2-x)dx。",
            "第二步：∫<sub>0</sub><sup>1</sup>x dx = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>。",
            "第三步：∫<sub>1</sub><sup>2</sup>(2-x)dx = [2x - <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>]<sub>1</sub><sup>2</sup> = 2 - <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>。",
            "第四步：合计 1。"
          ],
          keyPoints: [
            "【重点】分段函数按分段点拆开积分。",
            "【易错点】第二段积分上限 2、下限 1。"
          ],
          summary: "分段函数定积分 = 各段积分之和。"
        }
,
        {
          id: '3.7-044',
          difficulty: '提高',
          type: '填空',
          topic: "换元法定积分",
          year: null,
          question: "∫<sub>0</sub><sup>ln2</sup>e<sup>x</sup>(e<sup>x</sup>+1)<sup>2</sup>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">19</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：令 u=e<sup>x</sup>+1，du=e<sup>x</sup>dx。",
            "第二步：x=0 时 u=2；x=ln2 时 u=3。",
            "第三步：原式 = ∫<sub>2</sub><sup>3</sup>u<sup>2</sup>du = [<span class=\"frac\"><span class=\"num\">u<sup>3</sup></span><span class=\"den\">3</span></span>]<sub>2</sub><sup>3</sup> = <span class=\"frac\"><span class=\"num\">27-8</span><span class=\"den\">3</span></span> = <span class=\"frac\"><span class=\"num\">19</span><span class=\"den\">3</span></span>。"
          ],
          keyPoints: [
            "【重点】定积分换元必须同时换限。",
            "【易错点】上限对应 u=3，不要回代 x。"
          ],
          summary: "定积分凑微分换元后直接换限计算，不必回代。"
        }
,
        {
          id: '3.7-045',
          difficulty: '提高',
          type: '解答',
          topic: "对称区间化简",
          year: null,
          question: "计算 ∫<sub>-1</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">2x<sup>2</sup> + xcosx</span><span class=\"den\">1 + √(1-x<sup>2</sup>)</span></span>dx。",
          options: null,
          answer: "4 - π",
          solution: [
            "第一步：拆为偶部 <span class=\"frac\"><span class=\"num\">2x<sup>2</sup></span><span class=\"den\">1+√(1-x²)</span></span> 和奇部 <span class=\"frac\"><span class=\"num\">xcosx</span><span class=\"den\">1+√(1-x²)</span></span>。",
            "第二步：奇部对称积分 = 0。",
            "第三步：偶部 = 2∫<sub>0</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">2x<sup>2</sup></span><span class=\"den\">1+√(1-x²)</span></span>dx。",
            "第四步：分母有理化 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+√(1-x²)</span></span> = <span class=\"frac\"><span class=\"num\">1-√(1-x²)</span><span class=\"den\">x<sup>2</sup></span></span>，化简得 2∫<sub>0</sub><sup>1</sup>2(1-√(1-x²))dx。",
            "第五步：= 4(1 - <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>) = 4 - π。"
          ],
          keyPoints: [
            "【重点】对称区间先拆奇偶，偶部再分母有理化。",
            "【易错点】∫<sub>0</sub><sup>1</sup>√(1-x²)dx = π/4（四分之一圆）。"
          ],
          summary: "对称区间积分先消奇部，偶部化简后几何求积。"
        }
,
        {
          id: '3.7-046',
          difficulty: '难题',
          type: '选择',
          topic: "华莱士公式",
          year: null,
          question: "∫<sub>0</sub><sup>π/2</sup>sin<sup>4</sup>x dx = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">16</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">8</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">8</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：华莱士公式 ∫<sub>0</sub><sup>π/2</sup>sin<sup>n</sup>x dx = ∫<sub>0</sub><sup>π/2</sup>cos<sup>n</sup>x dx。",
            "第二步：n=4 偶数，= <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">4</span></span>·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">16</span></span>。"
          ],
          keyPoints: [
            "【重点】华莱士公式：偶数 n 乘 π/2，奇数 n 不乘。",
            "【易错点】n=4 结果含 π/2，n=3 结果不含 π。"
          ],
          summary: "0 到 π/2 的 sin^n/cos^n 直接套华莱士公式。"
        }
,
        {
          id: '3.7-047',
          difficulty: '难题',
          type: '解答',
          topic: "换元+分段",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>π</sup>√(1 - sinx) dx。",
          options: null,
          answer: "4(√2 - 1)",
          solution: [
            "第一步：1 - sinx = (sin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - cos<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>)<sup>2</sup>。",
            "第二步：√ = |sin<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - cos<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>|。",
            "第三步：x=π/2 为分界，[0,π/2] 上 cos≥sin，[π/2,π] 上 sin≥cos。",
            "第四步：拆两段积分，令 t=x/2，得 4(√2-1)。"
          ],
          keyPoints: [
            "【重点】√(1-sinx) 要开绝对值，按符号分段。",
            "【易错点】分界点在 x=π/2，不是 x=π。"
          ],
          summary: "√(三角式) 先化为平方再开绝对值，按符号分段积分。"
        }
,
        {
          id: '3.7-048',
          difficulty: '真题',
          type: '填空',
          topic: "定积分计算",
          year: 2018,
          question: "∫<sub>0</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">(2-x)√(1-x<sup>2</sup>)</span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> - 1",
          solution: [
            "第一步：令 x=sint，dx=cost dt，√(1-x²)=cost。",
            "第二步：原式 = ∫<sub>0</sub><sup>π/2</sup><span class=\"frac\"><span class=\"num\">sint</span><span class=\"den\">2-sint</span></span>dt。",
            "第三步：裂项 <span class=\"frac\"><span class=\"num\">sint</span><span class=\"den\">2-sint</span></span> = -1 + <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">2-sint</span></span>。",
            "第四步：配合半角公式积分，得 <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> - 1。"
          ],
          keyPoints: [
            "【真题高频】√(1-x²) 用三角代换。",
            "【易错点】裂项后常数项 -1 积分贡献 -π/2。"
          ],
          summary: "含 √(1-x²) 用三角代换，再裂项化简。"
        }
,
        {
          id: '3.7-049',
          difficulty: '真题',
          type: '选择',
          topic: "定积分换元",
          year: 2014,
          question: "∫<sub>0</sub><sup>2</sup>x√(2x - x<sup>2</sup>)dx = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "B. π",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "D. 2π"
          ],
          answer: "A",
          solution: [
            "第一步：配方 2x-x<sup>2</sup> = 1-(x-1)<sup>2</sup>。",
            "第二步：令 t=x-1，原式 = ∫<sub>-1</sub><sup>1</sup>(t+1)√(1-t<sup>2</sup>)dt。",
            "第三步：t√(1-t²) 是奇函数，积分 = 0。",
            "第四步：剩 ∫<sub>-1</sub><sup>1</sup>√(1-t<sup>2</sup>)dt = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>（上半圆面积）。"
          ],
          keyPoints: [
            "【重点】配方后平移，对称区间奇函数消去。",
            "【易错点】√(1-t²) 在 [-1,1] 上是上半圆，面积 π/2。"
          ],
          summary: "根号二次式先配方平移，再用对称和几何意义。"
        }
,
        {
          id: '3.7-050',
          difficulty: '真题',
          type: '解答',
          topic: "分部积分定积分",
          year: 2023,
          question: "计算 ∫<sub>0</sub><sup>1</sup>x·arcsinx dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：分部积分，u=arcsinx，dv=x dx，v=<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>。",
            "第二步：= [<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>arcsinx]<sub>0</sub><sup>1</sup> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫<sub>0</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">√(1-x<sup>2</sup>)</span></span>dx。",
            "第三步：边界项 = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>。",
            "第四步：后项令 x=sint，得 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫<sub>0</sub><sup>π/2</sup>sin<sup>2</sup>t dt = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>。",
            "第五步：结果 = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> - <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>。"
          ],
          keyPoints: [
            "【重点】反三角作 u，分部后三角代换。",
            "【易错点】边界项 x=1 时 arcsin1=π/2。"
          ],
          summary: "反三角配多项式，分部后再用三角代换和华莱士公式。"
        }
        ]
      },
      '3.8': {
        id: '3.8',
        title: "反常积分",
        questions: [
        {
          id: '3.8-001',
          difficulty: '基础',
          type: '填空',
          topic: "无穷限积分",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：[-1/x]₁^∞ = 0-(-1)=1。"
          ],
          keyPoints: [
            "【重点】∫₁^∞1/x²=1 当公式记。"
          ],
          summary: "p=2&gt;1 收敛。"
        }
,
        {
          id: '3.8-002',
          difficulty: '基础',
          type: '选择',
          topic: "瑕积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√x</span></span>dx =（  ）",
          options: [
            "A. 2",
            "B. 1",
            "C. 0",
            "D. 发散"
          ],
          answer: "A",
          solution: [
            "第一步：x=0 是瑕点。",
            "第二步：∫x^{-1/2}dx=2√x，[2√x]₀¹=2。"
          ],
          keyPoints: [
            "【重点】瑕点在端点，p=1/2&lt;1 收敛。"
          ],
          summary: "√x 在 0 为瑕点，p&lt;1 收敛。"
        }
,
        {
          id: '3.8-003',
          difficulty: '基础',
          type: '填空',
          topic: "无穷限",
          year: null,
          question: "∫<sub>0</sub><sup>+∞</sup> e<sup>-x</sup>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：[-e^{-x}]₀^∞=0-(-1)=1。"
          ],
          keyPoints: [
            "【重点】∫₀^∞e^{-x}=1。"
          ],
          summary: "指数衰减反常积分。"
        }
,
        {
          id: '3.8-004',
          difficulty: '基础',
          type: '选择',
          topic: "发散",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>dx =（  ）",
          options: [
            "A. 1",
            "B. 0",
            "C. ln2",
            "D. 发散"
          ],
          answer: "D",
          solution: [
            "第一步：[lnx]₁^∞=∞。",
            "第二步：p=1 时 ∫₁^∞1/x 发散。"
          ],
          keyPoints: [
            "【重点】p=1 是临界，∫₁^∞1/x 发散。"
          ],
          summary: "调和型反常积分 p=1 发散。"
        }
,
        {
          id: '3.8-005',
          difficulty: '基础',
          type: '填空',
          topic: "无穷限",
          year: null,
          question: "∫<sub>-∞</sub><sup>0</sup> e<sup>x</sup>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：[e^x]_{-∞}^0=1-0=1。"
          ],
          keyPoints: [
            "【重点】e^{x} 在 -∞ 趋于 0。"
          ],
          summary: "左无穷 e^x 收敛。"
        }
,
        {
          id: '3.8-006',
          difficulty: '基础',
          type: '选择',
          topic: "无穷限",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>3</sup></span></span>dx =（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "C. 1",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：[-1/(2x²)]₁^∞=0+1/2。"
          ],
          keyPoints: [
            "【重点】∫₁^∞x^{-p}=1/(p-1)。"
          ],
          summary: "x^{-3} 积分=1/2。"
        }
,
        {
          id: '3.8-007',
          difficulty: '提高',
          type: '选择',
          topic: "收敛判别",
          year: null,
          question: "下列反常积分收敛的是（  ）",
          options: [
            "A. ∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√x</span></span>dx",
            "B. ∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>dx",
            "C. ∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx",
            "D. ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx"
          ],
          answer: "C",
          solution: [
            "第一步：A: p=1/2&lt;1 发散；B: p=1 发散；C: p=2&gt;1 收敛；D: 瑕积分 p=2&gt;1 发散。"
          ],
          keyPoints: [
            "【重点】∞ 端 p&gt;1 收敛；0 端 p&lt;1 收敛。"
          ],
          summary: "记住 p 判别两个方向相反。"
        }
,
        {
          id: '3.8-008',
          difficulty: '提高',
          type: '填空',
          topic: "瑕积分发散",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx 的敛散性为________。",
          options: null,
          answer: "发散",
          solution: [
            "第一步：x=0 瑕点，p=2≥1，瑕积分发散。"
          ],
          keyPoints: [
            "【重点】瑕积分在 0 端 p&lt;1 才收敛。"
          ],
          summary: "0 端 1/x² 发散。"
        }
,
        {
          id: '3.8-009',
          difficulty: '提高',
          type: '选择',
          topic: "双向无穷",
          year: null,
          question: "∫<sub>-∞</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. π",
            "B. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "C. 1",
            "D. 2π"
          ],
          answer: "A",
          solution: [
            "第一步：[arctanx]_{-∞}^∞=π/2-(-π/2)=π。"
          ],
          keyPoints: [
            "【重点】∫_{-∞}^∞1/(1+x²)=π。"
          ],
          summary: "标准柯西分布积分 π。"
        }
,
        {
          id: '3.8-010',
          difficulty: '提高',
          type: '填空',
          topic: "凑微分",
          year: null,
          question: "∫<sub>2</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x ln<sup>2</sup>x</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">ln2</span></span>",
          solution: [
            "第一步：u=lnx，du=dx/x。",
            "第二步：∫_{ln2}^∞ du/u²=[-1/u]_{ln2}^∞=1/ln2。"
          ],
          keyPoints: [
            "【重点】dx/x=d(lnx)。"
          ],
          summary: "1/(x ln²x) 凑 d(lnx)。"
        }
,
        {
          id: '3.8-011',
          difficulty: '提高',
          type: '选择',
          topic: "收敛判别",
          year: null,
          question: "下列反常积分发散的是（  ）",
          options: [
            "A. ∫<sub>0</sub><sup>+∞</sup> e<sup>-x</sup>dx",
            "B. ∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>dx",
            "C. ∫<sub>0</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">(1+x)<sup>2</sup></span></span>dx",
            "D. ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√(1-x)</span></span></span>dx"
          ],
          answer: "C",
          solution: [
            "第一步：C 中 x/(1+x)²~1/x (x→∞)，与 1/x 同阶，发散。",
            "第二步：其余均收敛。"
          ],
          keyPoints: [
            "【难点】∞ 端被积函数等价 1/x 时发散。"
          ],
          summary: "判敛看被积函数在端点的阶。"
        }
,
        {
          id: '3.8-012',
          difficulty: '提高',
          type: '填空',
          topic: "瑕积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> lnx dx = ________。",
          options: null,
          answer: "-1",
          solution: [
            "第一步：x=0 瑕点，分部 [xlnx-x]₀¹。",
            "第二步：=(0-1)-0=-1（xlnx→0）。"
          ],
          keyPoints: [
            "【重点】xlnx 在 0 趋于 0。"
          ],
          summary: "∫₀¹lnx=−1。"
        }
,
        {
          id: '3.8-013',
          difficulty: '难题',
          type: '选择',
          topic: "综合判敛",
          year: null,
          question: "已知 ∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">f(x)</span><span class=\"den\">x</span></span>dx 收敛，则（  ）",
          options: [
            "A. f(x) 必有界",
            "B. ∫<sub>1</sub><sup>+∞</sup> f(x)dx 必收敛",
            "C. f(x)→0 (x→∞)",
            "D. 以上都不对"
          ],
          answer: "D",
          solution: [
            "第一步：反常积分收敛不蕴含 f 有界、趋于 0 或 ∫f 收敛。",
            "第二步：反例说明三者均不必然成立。"
          ],
          keyPoints: [
            "【难点】收敛是整体行为，不逐点保证。"
          ],
          summary: "收敛不推出 f→0 等结论。"
        }
,
        {
          id: '3.8-014',
          difficulty: '难题',
          type: '填空',
          topic: "伽马型",
          year: null,
          question: "∫<sub>0</sub><sup>+∞</sup> x e<sup>-x</sup>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：分部 [-xe^{-x}-e^{-x}]₀^∞。",
            "第二步：=0-(-1)=1。"
          ],
          keyPoints: [
            "【重点】∫₀^∞x e^{-x}=Γ(2)=1。"
          ],
          summary: "x e^{-x} 分部。"
        }
,
        {
          id: '3.8-015',
          difficulty: '难题',
          type: '解答',
          topic: "瑕+无穷",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x(1+x)</span></span>。",
          options: null,
          answer: "π",
          solution: [
            "第一步：令 t=√x，x=t²，dx=2t dt。",
            "第二步：∫₀^∞ 2t/[t(1+t²)]dt=2∫₀^∞dt/(1+t²)=2·(π/2)=π。"
          ],
          keyPoints: [
            "【重点】既是 0 端瑕点又是无穷限，换元后收敛为 π。"
          ],
          summary: "√x(1+x) 换元后变 arctan。"
        }
,
        {
          id: '3.8-016',
          difficulty: '难题',
          type: '选择',
          topic: "比较判敛",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">lnx</span><span class=\"den\">x<sup>2</sup></span></span>dx =（  ）",
          options: [
            "A. 1",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "C. 发散",
            "D. 2"
          ],
          answer: "A",
          solution: [
            "第一步：分部，u=lnx，dv=x^{-2}dx。",
            "第二步：=[-lnx/x]₁^∞+∫₁^∞dx/x²=0+1=1。"
          ],
          keyPoints: [
            "【重点】lnx/x 在 ∞ 趋于 0。"
          ],
          summary: "lnx/x² 分部得 1。"
        }
,
        {
          id: '3.8-017',
          difficulty: '真题',
          type: '选择',
          topic: "收敛判别",
          year: 2013,
          question: "设 a&gt;0，则下列反常积分收敛的是（  ）",
          options: [
            "A. ∫<sub>a</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span>",
            "B. ∫<sub>0</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x</span></span>",
            "C. ∫<sub>a</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup></span></span>",
            "D. ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span>"
          ],
          answer: "C",
          solution: [
            "第一步：A p=1 发散；B p=1/2 发散；C p=2&gt;1 收敛；D 瑕点 p=1 发散。"
          ],
          keyPoints: [
            "【真题高频】p 判别说收敛。"
          ],
          summary: "∞ 端 p&gt;1 收敛。"
        }
,
        {
          id: '3.8-018',
          difficulty: '真题',
          type: '填空',
          topic: "无穷限",
          year: 2016,
          question: "∫<sub>0</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">(1+x<sup>2</sup>)<sup>2</sup></span></span>dx = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：x dx=(1/2)d(x²+1)。",
            "第二步：(1/2)∫₁^∞du/u²=(1/2)(1)=1/2。"
          ],
          keyPoints: [
            "【真题高频】x/(1+x²)² 凑微分。"
          ],
          summary: "凑 d(x²+1) 后反常积分。"
        }
,
        {
          id: '3.8-019',
          difficulty: '真题',
          type: '选择',
          topic: "判敛",
          year: 2020,
          question: "下列反常积分发散的是（  ）",
          options: [
            "A. ∫<sub>0</sub><sup>+∞</sup> e<sup>-x</sup>dx",
            "B. ∫<sub>0</sub><sup>+∞</sub> <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">1+x<sup>2</sup></span></span>dx",
            "C. ∫<sub>0</sub><sup>+∞</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>dx",
            "D. ∫<sub>0</sub><sup>+∞</sup> x e<sup>-x</sup>dx"
          ],
          answer: "B",
          solution: [
            "第一步：B 中 x/(1+x²)~1/(2x)，与调和级数同阶，发散。",
            "第二步：其余收敛。"
          ],
          keyPoints: [
            "【真题高频】被积函数~1/x 发散。"
          ],
          summary: "x/(1+x²) 在 ∞ 等价 1/x。"
        }
,
        {
          id: '3.8-020',
          difficulty: '真题',
          type: '填空',
          topic: "瑕积分",
          year: 2024,
          question: "∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">(1-x)<sup>1/3</sup></span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：x=1 瑕点，p=1/3&lt;1 收敛。",
            "第二步：∫₀¹(1-x)^{-1/3}dx=[-(3/2)(1-x)^{2/3}]₀¹=3/2。"
          ],
          keyPoints: [
            "【真题高频】瑕积分 (1−x)^{-p}，p&lt;1 收敛。"
          ],
          summary: "(1−x)^{-1/3} 瑕积分。"
        }
,
        {
          id: '3.8-021',
          difficulty: '基础',
          type: '选择',
          topic: "无穷限反常积分",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup></span></span> = （  ）",
          options: [
            "A. 1",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "D. 发散"
          ],
          answer: "A",
          solution: [
            "第一步：∫<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup></span></span> = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>。",
            "第二步：lim<sub>b→∞</sub>[-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>]<sub>1</sub><sup>b</sup> = lim<sub>b→∞</sub>(-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">b</span></span> + 1) = 1。"
          ],
          keyPoints: [
            "【重点】p 积分 ∫<sub>1</sub><sup>∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>p</sup></span></span>，p&gt;1 收敛。",
            "【易错点】p=2 收敛值为 1/(p-1)=1。"
          ],
          summary: "p 积分 ∫₁^∞ x^(-p)：p>1 收敛，值 1/(p-1)。"
        }
,
        {
          id: '3.8-022',
          difficulty: '基础',
          type: '填空',
          topic: "p积分判敛",
          year: null,
          question: "∫<sub>1</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x</span></span> 的敛散性为________。",
          options: null,
          answer: "发散",
          solution: [
            "第一步：p=1/2 &lt; 1。",
            "第二步：p 积分 p≤1 时发散。",
            "第三步：故该反常积分发散。"
          ],
          keyPoints: [
            "【重点】p 积分 p≤1 发散。",
            "【易错点】√x = x<sup>1/2</sup>，即 x<sup>-1/2</sup>，p=1/2。"
          ],
          summary: "∞ 处 x^(-p) 积分，p≤1 发散，p>1 收敛。"
        }
,
        {
          id: '3.8-023',
          difficulty: '提高',
          type: '选择',
          topic: "瑕积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">√x</span></span> = （  ）",
          options: [
            "A. 收敛于 2",
            "B. 收敛于 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "C. 发散",
            "D. 收敛于 1"
          ],
          answer: "A",
          solution: [
            "第一步：x=0 是瑕点。",
            "第二步：∫<sub>0</sub><sup>1</sup>x<sup>-1/2</sup>dx = [2√x]<sub>0+</sub><sup>1</sup> = 2。",
            "第三步：瑕积分 ∫<sub>0</sub><sup>1</sup>x<sup>-p</sup>，p&lt;1 收敛。"
          ],
          keyPoints: [
            "【重点】瑕积分 p&lt;1 收敛，p≥1 发散。",
            "【易错点】与无穷限 p 积分结论相反。"
          ],
          summary: "0 处瑕积分 x^(-p)：p<1 收敛，值 1/(1-p)。"
        }
,
        {
          id: '3.8-024',
          difficulty: '提高',
          type: '填空',
          topic: "指数衰减积分",
          year: null,
          question: "∫<sub>0</sub><sup>+∞</sup>e<sup>-x</sup>dx = ________。",
          options: null,
          answer: "1",
          solution: [
            "第一步：∫e<sup>-x</sup>dx = -e<sup>-x</sup>。",
            "第二步：lim<sub>b→∞</sub>[-e<sup>-x</sup>]<sub>0</sub><sup>b</sup> = lim<sub>b→∞</sub>(-e<sup>-b</sup> + 1) = 1。"
          ],
          keyPoints: [
            "【重点】∫<sub>0</sub><sup>∞</sup>e<sup>-x</sup>dx = 1。",
            "【易错点】e<sup>-∞</sup>=0。"
          ],
          summary: "指数衰减反常积分值为 1。"
        }
,
        {
          id: '3.8-025',
          difficulty: '提高',
          type: '解答',
          topic: "Γ函数型",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>+∞</sup>x<sup>2</sup>e<sup>-x</sup>dx。",
          options: null,
          answer: "2",
          solution: [
            "第一步：分部积分 I = [-x<sup>2</sup>e<sup>-x</sup>]<sub>0</sub><sup>∞</sup> + 2∫<sub>0</sub><sup>∞</sup>xe<sup>-x</sup>dx。",
            "第二步：边界项 = 0。",
            "第三步：∫<sub>0</sub><sup>∞</sup>xe<sup>-x</sup>dx = [-xe<sup>-x</sup>]<sub>0</sub><sup>∞</sup> + ∫<sub>0</sub><sup>∞</sup>e<sup>-x</sup>dx = 1。",
            "第四步：I = 2·1 = 2。"
          ],
          keyPoints: [
            "【重点】∫<sub>0</sub><sup>∞</sup>x<sup>n</sup>e<sup>-x</sup>dx = n!。",
            "【易错点】边界项 x<sup>n</sup>e<sup>-x</sup>→0。"
          ],
          summary: "x^n e^(-x) 在 [0,∞) 积分 = n!，分部递推。"
        }
,
        {
          id: '3.8-026',
          difficulty: '难题',
          type: '选择',
          topic: "混合型反常积分",
          year: null,
          question: "∫<sub>0</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x(x+1)</span></span> = （  ）",
          options: [
            "A. 收敛于 ln2",
            "B. 收敛于 1",
            "C. 收敛于 π",
            "D. 发散"
          ],
          answer: "A",
          solution: [
            "第一步：裂项 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x(x+1)</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+1</span></span>。",
            "第二步：积分 = [lnx - ln(x+1)]<sub>0+</sub><sup>∞</sup> = [ln<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x+1</span></span>]<sub>0+</sub><sup>∞</sup>。",
            "第三步：lim<sub>x→∞</sub>ln<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x+1</span></span> = ln1 = 0；lim<sub>x→0+</sub>ln<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">x+1</span></span> = ln0 = -∞。",
            "第四步：需拆开 ∫<sub>0</sub><sup>1</sup> 和 ∫<sub>1</sub><sup>∞</sup> 分别判敛；实际裂项后整体 = ln2。"
          ],
          keyPoints: [
            "【重点】0 和 ∞ 都是奇点，要分段。",
            "【易错点】单独 ln x 在 0 发散，但 ln(x/(x+1)) 整体收敛。"
          ],
          summary: "多奇点反常积分要拆段，裂项后整体求极限。"
        }
,
        {
          id: '3.8-027',
          difficulty: '难题',
          type: '解答',
          topic: "换元判敛",
          year: null,
          question: "讨论 ∫<sub>2</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x ln<sup>p</sup>x</span></span> 的敛散性。",
          options: null,
          answer: "p&gt;1 收敛，p≤1 发散",
          solution: [
            "第一步：令 t=lnx，dt=<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span>。",
            "第二步：原式 = ∫<sub>ln2</sub><sup>∞</sup><span class=\"frac\"><span class=\"num\">dt</span><span class=\"den\">t<sup>p</sup></span></span>。",
            "第三步：这是 p 积分，p&gt;1 收敛，p≤1 发散。"
          ],
          keyPoints: [
            "【重点】<span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x</span></span>=d(lnx)，化为 p 积分。",
            "【易错点】结论与 p 积分一致：p>1 收敛。"
          ],
          summary: "含 1/(x ln^p x) 凑 d(lnx)，化为标准 p 积分。"
        }
,
        {
          id: '3.8-028',
          difficulty: '真题',
          type: '填空',
          topic: "反常积分",
          year: 2016,
          question: "∫<sub>0</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x<sup>2</sup> + 2x + 2</span></span> = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：配方 x<sup>2</sup>+2x+2 = (x+1)<sup>2</sup>+1。",
            "第二步：令 u=x+1，原式 = ∫<sub>1</sub><sup>∞</sup><span class=\"frac\"><span class=\"num\">du</span><span class=\"den\">u<sup>2</sup>+1</span></span>。",
            "第三步：= [arctanu]<sub>1</sub><sup>∞</sup> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>。"
          ],
          keyPoints: [
            "【真题高频】配方后凑 arctan。",
            "【易错点】下限对应 u=1，不是 0。"
          ],
          summary: "分母二次不可约先配方，再凑 arctan 求反常积分。"
        }
,
        {
          id: '3.8-029',
          difficulty: '真题',
          type: '选择',
          topic: "瑕积分判敛",
          year: 2010,
          question: "瑕积分 ∫<sub>0</sub><sup>1</sup><span class=\"frac\"><span class=\"num\">√x</span><span class=\"den\">√(1-x<sup>3</sup>)</span></span>dx 的敛散性为（  ）",
          options: [
            "A. 收敛",
            "B. 发散",
            "C. 无法判断",
            "D. 仅当 p 取特定值才收敛"
          ],
          answer: "A",
          solution: [
            "第一步：x→1<sup>-</sup> 时 1-x<sup>3</sup> ≈ 3(1-x)。",
            "第二步：被积函数 ≈ <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√(1-x)</span></span> = (1-x)<sup>-1/2</sup>。",
            "第三步：p=1/2 &lt; 1，瑕积分收敛。"
          ],
          keyPoints: [
            "【重点】瑕积分比较法：与 (x-a)<sup>-p</sup> 比较。",
            "【易错点】1-x<sup>3</sup>=(1-x)(1+x+x²)，近似 3(1-x)。"
          ],
          summary: "瑕点附近用等价无穷小化为标准 p 积分判敛。"
        }
,
        {
          id: '3.8-030',
          difficulty: '真题',
          type: '解答',
          topic: "反常积分计算",
          year: 2020,
          question: "计算 ∫<sub>1</sub><sup>+∞</sup><span class=\"frac\"><span class=\"num\">dx</span><span class=\"den\">x√(x<sup>2</sup>-1)</span></span>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：令 x=sect，dx=sect·tant dt。",
            "第二步：x=1 时 t=0；x→∞ 时 t→π/2。",
            "第三步：原式 = ∫<sub>0</sub><sup>π/2</sup><span class=\"frac\"><span class=\"num\">sect·tant</span><span class=\"den\">sect·tant</span></span>dt = ∫<sub>0</sub><sup>π/2</sup>1 dt = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【真题高频】√(x²-1) 用 x=sect 代换。",
            "【易错点】上下限对应 t∈[0,π/2]。"
          ],
          summary: "√(x²-1) 在 [1,∞) 用正割代换，化为有限区间积分。"
        }
        ]
      },
      '3.9': {
        id: '3.9',
        title: "定积分的应用",
        questions: [
        {
          id: '3.9-001',
          difficulty: '基础',
          type: '填空',
          topic: "平面图形面积",
          year: null,
          question: "由曲线 y=x<sup>2</sup>、直线 x=1 及 x 轴围成的图形面积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：S=∫₀¹x²dx=1/3。"
          ],
          keyPoints: [
            "【重点】曲边梯形面积=∫f dx。"
          ],
          summary: "基本曲边梯形面积。"
        }
,
        {
          id: '3.9-002',
          difficulty: '基础',
          type: '选择',
          topic: "两曲线面积",
          year: null,
          question: "由 y=x 与 y=x<sup>2</sup> 围成的图形面积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：交点 x=x² 得 x=0,1。",
            "第二步：S=∫₀¹(x-x²)dx=1/2-1/3=1/6。"
          ],
          keyPoints: [
            "【重点】上减下：S=∫(上−下)dx。"
          ],
          summary: "两直线/抛物线间面积。"
        }
,
        {
          id: '3.9-003',
          difficulty: '基础',
          type: '填空',
          topic: "旋转体体积",
          year: null,
          question: "曲线 y=√x（0≤x≤1）绕 x 轴旋转所得旋转体体积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：V=π∫₀¹(√x)²dx=π∫₀¹x dx=π/2。"
          ],
          keyPoints: [
            "【重点】Vx=π∫y²dx。"
          ],
          summary: "绕 x 轴：π∫y²。"
        }
,
        {
          id: '3.9-004',
          difficulty: '基础',
          type: '选择',
          topic: "旋转体体积",
          year: null,
          question: "曲线 y=x<sup>2</sup>（0≤x≤2）绕 x 轴旋转体积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">32π</span><span class=\"den\">5</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">16π</span><span class=\"den\">5</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">32π</span><span class=\"den\">3</span></span>",
            "D. 16π"
          ],
          answer: "A",
          solution: [
            "第一步：V=π∫₀²x⁴dx=π·[x⁵/5]₀²=32π/5。"
          ],
          keyPoints: [
            "【重点】y=x² 时被积为 x⁴。"
          ],
          summary: "抛物线旋转体积。"
        }
,
        {
          id: '3.9-005',
          difficulty: '基础',
          type: '填空',
          topic: "平面曲线弧长",
          year: null,
          question: "直线段 y=2x 从 (0,0) 到 (1,2) 的弧长为________。",
          options: null,
          answer: "√5",
          solution: [
            "第一步：y'=2。",
            "第二步：s=∫₀¹√(1+4)dx=√5。"
          ],
          keyPoints: [
            "【重点】s=∫√(1+y'²)dx。"
          ],
          summary: "直线弧长即两点距离 √5。"
        }
,
        {
          id: '3.9-006',
          difficulty: '基础',
          type: '选择',
          topic: "弧长",
          year: null,
          question: "单位圆上半部分弧长为（  ）",
          options: [
            "A. π",
            "B. 2π",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：半圆周长=π。"
          ],
          keyPoints: [
            "【简便方法】几何常识半圆长 π。"
          ],
          summary: "上半圆弧长 π。"
        }
,
        {
          id: '3.9-007',
          difficulty: '基础',
          type: '填空',
          topic: "旋转侧面积",
          year: null,
          question: "直线段 y=x（0≤x≤1）绕 x 轴旋转所得圆锥侧面积为________。",
          options: null,
          answer: "√2 π",
          solution: [
            "第一步：y'=1，S=2π∫₀¹x·√2 dx=2π√2·(1/2)=√2 π。"
          ],
          keyPoints: [
            "【重点】侧面积 S=2π∫y√(1+y'²)dx。"
          ],
          summary: "圆锥侧面积公式。"
        }
,
        {
          id: '3.9-008',
          difficulty: '基础',
          type: '选择',
          topic: "交点",
          year: null,
          question: "y=x<sup>2</sup> 与 y=1 的交点横坐标为（  ）",
          options: [
            "A. x=±1",
            "B. x=1",
            "C. x=0",
            "D. x=±√2"
          ],
          answer: "A",
          solution: [
            "第一步：x²=1 得 x=±1。"
          ],
          keyPoints: [
            "【重点】先求交点定积分限。"
          ],
          summary: "面积题第一步永远是求交点。"
        }
,
        {
          id: '3.9-009',
          difficulty: '基础',
          type: '填空',
          topic: "变力做功",
          year: null,
          question: "弹簧弹力 F=kx（N/m），从原长拉长 2m 做功 W=________。",
          options: null,
          answer: "2k",
          solution: [
            "第一步：W=∫₀²kx dx=k·[x²/2]₀²=2k。"
          ],
          keyPoints: [
            "【重点】变力做功 W=∫F dx。"
          ],
          summary: "弹簧做功 1/2kx²。"
        }
,
        {
          id: '3.9-010',
          difficulty: '提高',
          type: '选择',
          topic: "极坐标面积",
          year: null,
          question: "圆 r=a 所围图形面积为（  ）",
          options: [
            "A. πa<sup>2</sup>",
            "B. 2πa<sup>2</sup>",
            "C. <span class=\"frac\"><span class=\"num\">πa<sup>2</sup></span><span class=\"den\">2</span></span>",
            "D. 4πa<sup>2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：极坐标 S=(1/2)∫₀^{2π}r²dθ=(1/2)∫₀^{2π}a²dθ=πa²。"
          ],
          keyPoints: [
            "【重点】极坐标面积 S=(1/2)∫r²dθ。"
          ],
          summary: "圆面积公式验证。"
        }
,
        {
          id: '3.9-011',
          difficulty: '提高',
          type: '填空',
          topic: "旋转体积",
          year: null,
          question: "曲线 y=sinx（0≤x≤π）绕 x 轴旋转体积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：V=π∫₀^π sin²x dx。",
            "第二步：=π·(π/2)=π²/2。"
          ],
          keyPoints: [
            "【重点】∫₀^πsin²x=π/2。"
          ],
          summary: "正弦拱旋转体体积。"
        }
,
        {
          id: '3.9-012',
          difficulty: '提高',
          type: '选择',
          topic: "面积",
          year: null,
          question: "y=e<sup>x</sup>、y=e 及 y 轴围成面积为（  ）",
          options: [
            "A. 1",
            "B. e",
            "C. e-1",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：e^x=e 得 x=1。",
            "第二步：S=∫₀¹(e-e^x)dx=[ex-e^x]₀¹=(e-e)-(0-1)=1。"
          ],
          keyPoints: [
            "【重点】上为 e 下为 e^x。"
          ],
          summary: "指数曲线与水平线间面积。"
        }
,
        {
          id: '3.9-013',
          difficulty: '提高',
          type: '填空',
          topic: "心形线面积",
          year: null,
          question: "心形线 r=a(1+cosθ) 所围图形面积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3πa<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：S=(1/2)∫₀^{2π}a²(1+cosθ)²dθ。",
            "第二步：展开积分 = (a²/2)·3π=3πa²/2。"
          ],
          keyPoints: [
            "【重点】心形线面积 3πa²/2 当公式记。"
          ],
          summary: "r=a(1+cosθ) 面积。"
        }
,
        {
          id: '3.9-014',
          difficulty: '提高',
          type: '选择',
          topic: "星形线弧长",
          year: null,
          question: "星形线 x<sup>2/3</sup>+y<sup>2/3</sup>=a<sup>2/3</sup> 的全长为（  ）",
          options: [
            "A. 6a",
            "B. 3a",
            "C. 12a",
            "D. 8a"
          ],
          answer: "A",
          solution: [
            "第一步：参数方程 x=a cos³t，y=a sin³t。",
            "第二步：全长=4∫₀^{π/2}√(x'²+y'²)dt=6a。"
          ],
          keyPoints: [
            "【重点】星形线周长 6a 当公式记。"
          ],
          summary: "星形线全长 6a。"
        }
,
        {
          id: '3.9-015',
          difficulty: '提高',
          type: '填空',
          topic: "水压力",
          year: null,
          question: "底边 a、高 h 的等腰三角形平板竖直沉入水中，顶点在上与水面齐，腰长为 l，则一侧所受水压力为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">γa h<sup>2</sup></span><span class=\"den\">6</span></span>",
          solution: [
            "第一步：深 x 处宽度 = (a/h)x。",
            "第二步：压力 P=∫₀^h γx·(a/h)x dx=(γa/h)·h³/3=γah²/3。"
          ],
          keyPoints: [
            "【重点】压强 γx 乘深度处宽度。"
          ],
          summary: "三角形平板水压力 γah²/3。"
        }
,
        {
          id: '3.9-016',
          difficulty: '提高',
          type: '选择',
          topic: "绕 y 轴体积",
          year: null,
          question: "y=x²（0≤x≤1）绕 y 轴旋转体积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "B. π",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">2π</span><span class=\"den\">3</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：绕 y 轴，x=√y，V=π∫₀¹x²dy=π∫₀¹y dy=π/2。"
          ],
          keyPoints: [
            "【重点】绕 y 轴要把 x 表为 y 的函数。"
          ],
          summary: "绕 y 轴：V=π∫x²dy。"
        }
,
        {
          id: '3.9-017',
          difficulty: '提高',
          type: '填空',
          topic: "抽水做功",
          year: null,
          question: "高 H、底面积 S 的圆柱形水桶装满水，把水全部吸出桶口做功 W=________（水密度 ρ，重力 g）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">ρgS H<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：深 x 处薄层体积 Sdx，提升距离 H-x。",
            "第二步：W=∫₀^H ρg(H-x)S dx=ρgS·H²/2。"
          ],
          keyPoints: [
            "【重点】每层水提升距离不同。"
          ],
          summary: "抽水做功用重心高度算。"
        }
,
        {
          id: '3.9-018',
          difficulty: '提高',
          type: '选择',
          topic: "侧面积",
          year: null,
          question: "y=√x（0≤x≤1）绕 x 轴旋转侧面积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">6</span></span>(5√5-1)",
            "B. π",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">3</span></span>",
            "D. 2π"
          ],
          answer: "A",
          solution: [
            "第一步：y'=1/(2√x)，√(1+y'²)=√(1+1/(4x))。",
            "第二步：S=2π∫₀¹√x·√(1+1/(4x))dx=π∫₀¹√(4x+1)dx=π/6(5√5-1)。"
          ],
          keyPoints: [
            "【难点】侧面积要带 √(1+y'²)。"
          ],
          summary: "√x 旋转侧面积。"
        }
,
        {
          id: '3.9-019',
          difficulty: '难题',
          type: '选择',
          topic: "体积综合",
          year: null,
          question: "y=sinx（0≤x≤π）绕 y 轴旋转体积为（  ）",
          options: [
            "A. 2π<sup>2</sup>",
            "B. π<sup>2</sup>",
            "C. 4π<sup>2</sup>",
            "D. <span class=\"frac\"><span class=\"num\">π<sup>2</sup></span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：柱壳法 V=2π∫₀^π x·sinx dx。",
            "第二步：∫₀^πx sinx dx=π。",
            "第三步：V=2π·π=2π²。"
          ],
          keyPoints: [
            "【重点】绕 y 轴柱壳法 V=2π∫x·f(x)dx。"
          ],
          summary: "正弦拱绕 y 轴柱壳法。"
        }
,
        {
          id: '3.9-020',
          difficulty: '难题',
          type: '填空',
          topic: "弧长",
          year: null,
          question: "曲线 y=lnx 上从 x=1 到 x=e 的弧长为________。",
          options: null,
          answer: "√(1+e<sup>2</sup>) - √2 + ln<span class=\"frac\"><span class=\"num\">1+√(1+e<sup>2</sup>)</span><span class=\"den\">e(1+√2)</span></span>",
          solution: [
            "第一步：y'=1/x，√(1+1/x²)=√(x²+1)/x。",
            "第二步：s=∫₁ᵉ√(x²+1)/x dx，换元积分。",
            "第三步：化简得 √(1+e²)-√2+ln[(1+√(1+e²))/(e(1+√2))]。"
          ],
          keyPoints: [
            "【难点】√(1+x²)/x 换元积分。"
          ],
          summary: "lnx 弧长。"
        }
,
        {
          id: '3.9-021',
          difficulty: '难题',
          type: '解答',
          topic: "面积旋转",
          year: null,
          question: "求由 y=x<sup>2</sup>、y=x 围成图形绕 x 轴旋转所得体积。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2π</span><span class=\"den\">15</span></span>",
          solution: [
            "第一步：交点 x=0,1，上为 y=x，下为 y=x²。",
            "第二步：V=π∫₀¹[(x)²-(x²)²]dx=π∫₀¹(x²-x⁴)dx。",
            "第三步：=π(1/3-1/5)=2π/15。"
          ],
          keyPoints: [
            "【重点】内外半径平方差：V=π∫(外²−内²)dx。"
          ],
          summary: "两曲线间旋转体用垫圈法。"
        }
,
        {
          id: '3.9-022',
          difficulty: '难题',
          type: '选择',
          topic: "质心",
          year: null,
          question: "均匀半圆板 y≥0、x²+y²≤R² 的质心纵坐标 ȳ=（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">4R</span><span class=\"den\">3π</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">R</span><span class=\"den\">2</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">3R</span><span class=\"den\">8</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">2R</span><span class=\"den\">π</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：对称性 x̄=0。",
            "第二步：ȳ=(∫∫y dA)/(面积)，算得 ȳ=4R/(3π)。"
          ],
          keyPoints: [
            "【重点】半圆质心距圆心 4R/(3π)。"
          ],
          summary: "上半圆质心 4R/3π。"
        }
,
        {
          id: '3.9-023',
          difficulty: '难题',
          type: '填空',
          topic: "变力做功",
          year: null,
          question: "半径 R、高 H 的圆锥形水箱装满水，把水全部抽出箱口做功 W=________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">πρgR<sup>2</sup>H<sup>2</sup></span><span class=\"den\">12</span></span>",
          solution: [
            "第一步：距顶 x 处截面半径 r=(R/H)x。",
            "第二步：薄层提升距离 H-x，W=∫₀^H ρg(H-x)πr²dx。",
            "第三步：=πρgR²/H²·∫₀^H(H-x)x²dx=πρgR²H²/12。"
          ],
          keyPoints: [
            "【难点】截面半径随深度线性变化。"
          ],
          summary: "圆锥抽水做功。"
        }
,
        {
          id: '3.9-024',
          difficulty: '难题',
          type: '解答',
          topic: "弧长综合",
          year: null,
          question: "求曲线 y=∫<sub>0</sub><sup>x</sup> √(sint)dt 在 0≤x≤π 上的弧长。",
          options: null,
          answer: "4",
          solution: [
            "第一步：y'=√(sinx)。",
            "第二步：s=∫₀^π√(1+sinx)dx。",
            "第三步：√(1+sinx)=sin(x/2)+cos(x/2)，积分=4。"
          ],
          keyPoints: [
            "【难点】变限积分求导后配 √(1+sinx) 化简。"
          ],
          summary: "变限曲线弧长。"
        }
,
        {
          id: '3.9-025',
          difficulty: '真题',
          type: '填空',
          topic: "面积",
          year: 2012,
          question: "曲线 y=x<sup>2</sup> 与 y=1 所围图形面积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：交点 x=±1。",
            "第二步：S=∫_{-1}^1(1-x²)dx=2[x-x³/3]₀¹=4/3。"
          ],
          keyPoints: [
            "【真题高频】对称区间偶函数加倍。"
          ],
          summary: "抛物线与水平线面积。"
        }
,
        {
          id: '3.9-026',
          difficulty: '真题',
          type: '选择',
          topic: "体积",
          year: 2014,
          question: "y=x<sup>2</sup>（0≤x≤1）绕 x 轴旋转体积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">5</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">3</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">2π</span><span class=\"den\">5</span></span>",
            "D. π"
          ],
          answer: "A",
          solution: [
            "第一步：V=π∫₀¹x⁴dx=π/5。"
          ],
          keyPoints: [
            "【真题高频】抛物线旋转体积。"
          ],
          summary: "y=x² 绕 x 轴。"
        }
,
        {
          id: '3.9-027',
          difficulty: '真题',
          type: '填空',
          topic: "弧长",
          year: 2016,
          question: "曲线 y=<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup>（0≤x≤1）的弧长为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>(2√2-1)",
          solution: [
            "第一步：y'=x^{1/2}，√(1+x)。",
            "第二步：s=∫₀¹√(1+x)dx=[(2/3)(1+x)^{3/2}]₀¹=(2/3)(2√2-1)。"
          ],
          keyPoints: [
            "【真题高频】弧长公式代算。"
          ],
          summary: "x^{3/2} 弧长。"
        }
,
        {
          id: '3.9-028',
          difficulty: '真题',
          type: '选择',
          topic: "侧面积",
          year: 2019,
          question: "y=√x（0≤x≤1）绕 x 轴旋转侧面积公式中被积函数为（  ）",
          options: [
            "A. 2π√x·√(1+<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4x</span></span>)",
            "B. 2π√x",
            "C. 2πx",
            "D. πx"
          ],
          answer: "A",
          solution: [
            "第一步：S=2π∫y√(1+y'²)dx。",
            "第二步：y=√x，y'=1/(2√x)，√(1+y'²)=√(1+1/(4x))。"
          ],
          keyPoints: [
            "【真题高频】侧面积三要素别漏 √(1+y'²)。"
          ],
          summary: "侧面积被积三要素。"
        }
,
        {
          id: '3.9-029',
          difficulty: '真题',
          type: '解答',
          topic: "综合应用",
          year: 2022,
          question: "过原点作曲线 y=e<sup>x</sup> 的切线，求切线、曲线与 x 轴所围图形面积及绕 x 轴旋转体积。",
          options: null,
          answer: "面积 = <span class=\"frac\"><span class=\"num\">e</span><span class=\"den\">2</span></span>-1；体积 = <span class=\"frac\"><span class=\"num\">πe<sup>2</sup></span><span class=\"den\">6</span></span>",
          solution: [
            "第一步：设切点 (a,e^a)，切线过原点 e^a/a=e^a 得 a=1，切线 y=ex。",
            "第二步：面积 S=∫₀¹ e^x dx-三角形 = e-1-e/2=e/2-1。",
            "第三步：体积 V=π∫₀¹e^{2x}dx - 圆锥体 = πe²/6。"
          ],
          keyPoints: [
            "【难点】先由切线过原点定切点 a=1。"
          ],
          summary: "原点切线 + 曲线围区。"
        }
,
        {
          id: '3.9-030',
          difficulty: '真题',
          type: '填空',
          topic: "物理应用",
          year: 2025,
          question: "一质量为 m 的物体沿 x 轴运动，受力 F(x)=x<sup>2</sup>（N），从 x=0 移到 x=2m 做功 W=________（J）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">8</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：W=∫₀²x²dx=[x³/3]₀²=8/3。"
          ],
          keyPoints: [
            "【重点】变力做功直接积分。"
          ],
          summary: "变力 F=x² 做功。"
        }
,
        {
          id: '3.9-031',
          difficulty: '基础',
          type: '选择',
          topic: "平面图形面积",
          year: null,
          question: "由 y=x<sup>2</sup> 与 y=x 围成的图形面积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：交点 x<sup>2</sup>=x，得 x=0,1。",
            "第二步：[0,1] 上 x ≥ x<sup>2</sup>。",
            "第三步：面积 = ∫<sub>0</sub><sup>1</sup>(x - x<sup>2</sup>)dx = [<span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">x<sup>3</sup></span><span class=\"den\">3</span></span>]<sub>0</sub><sup>1</sup> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>。"
          ],
          keyPoints: [
            "【重点】面积 = 上曲线减下曲线积分。",
            "【易错点】先求交点确定积分区间。"
          ],
          summary: "两条曲线围成面积 = ∫(上-下)dx，先求交点。"
        }
,
        {
          id: '3.9-032',
          difficulty: '基础',
          type: '填空',
          topic: "旋转体体积",
          year: null,
          question: "由 y=x<sup>2</sup>, x=1, y=0 围成的图形绕 x 轴旋转一周所得体积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">5</span></span>",
          solution: [
            "第一步：圆盘法 V = π∫<sub>a</sub><sup>b</sup>y<sup>2</sup>dx。",
            "第二步：V = π∫<sub>0</sub><sup>1</sup>x<sup>4</sup>dx = π·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">5</span></span>。"
          ],
          keyPoints: [
            "【重点】绕 x 轴旋转 V = π∫y<sup>2</sup>dx。",
            "【易错点】是 y<sup>2</sup>，不是 y。"
          ],
          summary: "绕 x 轴旋转体体积用圆盘法，V=π∫y²dx。"
        }
,
        {
          id: '3.9-033',
          difficulty: '提高',
          type: '解答',
          topic: "极坐标面积",
          year: null,
          question: "求心形线 r=a(1+cosθ) 所围图形的面积。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3πa<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：极坐标面积 S = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∫<sub>0</sub><sup>2π</sup>r<sup>2</sup>dθ。",
            "第二步：r<sup>2</sup>=a<sup>2</sup>(1+cosθ)<sup>2</sup>=a<sup>2</sup>(1+2cosθ+cos<sup>2</sup>θ)。",
            "第三步：积分 ∫<sub>0</sub><sup>2π</sup>1 dθ=2π，∫cosθ=0，∫cos<sup>2</sup>θ=π。",
            "第四步：S = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>a<sup>2</sup>(2π+π) = <span class=\"frac\"><span class=\"num\">3πa<sup>2</sup></span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】极坐标面积公式 S=1/2∫r²dθ。",
            "【易错点】心形线 θ∈[0,2π]。"
          ],
          summary: "极坐标曲线面积用 1/2∫r²dθ，利用对称性可减半。"
        }
,
        {
          id: '3.9-034',
          difficulty: '真题',
          type: '填空',
          topic: "旋转体体积",
          year: 2017,
          question: "由曲线 y=<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span> 与直线 y=x, x=e 围成的图形绕 x 轴旋转一周所得体积为________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">8π</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：交点 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>=x 得 x=1。",
            "第二步：区间 [1,e]，外半径 x，内半径 1/x。",
            "第三步：V = π∫<sub>1</sub><sup>e</sup>(x<sup>2</sup> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x<sup>2</sup></span></span>)dx。",
            "第四步：= π[<span class=\"frac\"><span class=\"num\">x<sup>3</sup></span><span class=\"den\">3</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>]<sub>1</sub><sup>e</sup> = <span class=\"frac\"><span class=\"num\">8π</span><span class=\"den\">3</span></span>。"
          ],
          keyPoints: [
            "【重点】圆环法 V=π∫(R²-r²)dx。",
            "【易错点】内半径是 1/x，外半径是 x。"
          ],
          summary: "两曲线间绕 x 轴旋转用圆环法，外半径减内半径平方。"
        }
,
        {
          id: '3.9-035',
          difficulty: '真题',
          type: '解答',
          topic: "面积+旋转综合",
          year: 2022,
          question: "设 D 是由 y=√x, y=0, x=1 围成的区域，求 (1)D 的面积；(2)D 绕 x 轴旋转的体积。",
          options: null,
          answer: "(1) 2/3；(2) π/2",
          solution: [
            "第一步：面积 S = ∫<sub>0</sub><sup>1</sup>√x dx = <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>。",
            "第二步：体积 V = π∫<sub>0</sub><sup>1</sup>x dx = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】基础面积与旋转体积计算。",
            "【易错点】旋转体积是 y²=x 积分。"
          ],
          summary: "基础应用题：面积 ∫y dx，旋转体 π∫y²dx。"
        }
        ]
      }
    }
  };
})();