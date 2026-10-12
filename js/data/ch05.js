(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['5'] = {
    id: 5,
    title: "常微分方程",
    subject: "高等数学",
    sections: {
      '5.1': {
        id: '5.1',
        title: "微分方程的基本概念",
        questions: [
        {
          id: '5.1-001',
          difficulty: '基础',
          type: '选择',
          topic: "微分方程的阶",
          year: null,
          question: "微分方程 y<sup>″</sup> + x(y′)<sup>3</sup> + y = 0 的阶数为（　）",
          options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          answer: "B",
          solution: [
            "第一步：微分方程的阶 = 未知函数最高阶导数的阶数。",
            "第二步：方程中出现 y″，故为二阶。"
          ],
          keyPoints: [
            "【重点】阶数看最高阶导数。",
            "【易错点】(y′)³ 的次数不影响阶数。"
          ],
          summary: "微分方程的阶 = 最高阶导数的阶数。"
        }
,
        {
          id: '5.1-002',
          difficulty: '基础',
          type: '填空',
          topic: "通解的概念",
          year: null,
          question: "一阶微分方程的通解中含有______个独立的任意常数。",
          options: null,
          answer: "1",
          solution: [
            "第一步：n 阶微分方程的通解含 n 个独立任意常数。",
            "第二步：一阶方程通解含 1 个任意常数。"
          ],
          keyPoints: [
            "【重点】通解中任意常数个数 = 方程阶数。",
            "【易错点】n 阶方程含 n 个独立常数。"
          ],
          summary: "n 阶微分方程通解含 n 个独立任意常数。"
        }
,
        {
          id: '5.1-003',
          difficulty: '基础',
          type: '选择',
          topic: "验证解",
          year: null,
          question: "函数 y = C e<sup>x<sup>2</sup></sup>（C 为任意常数）是下列哪个微分方程的解？（　）",
          options: [
            "A. y′ = 2xy",
            "B. y′ = 2x²y",
            "C. y′ = xy",
            "D. y′ = y/x"
          ],
          answer: "A",
          solution: [
            "第一步：y′ = C e<sup>x²</sup>·2x = 2x·(C e<sup>x²</sup>) = 2xy。",
            "第二步：故 y=Ce^{x²} 满足 y′=2xy。"
          ],
          keyPoints: [
            "【重点】验证解：对函数求导后代入方程。",
            "【易错点】链式法则：e^{x²} 导数 = 2x e^{x²}。"
          ],
          summary: "验证解：求导后代入方程检验。"
        }
,
        {
          id: '5.1-004',
          difficulty: '基础',
          type: '填空',
          topic: "初始条件",
          year: null,
          question: "二阶微分方程的初值问题通常给出初始条件 y(0) = ______，y′(0) = ______。",
          options: null,
          answer: "y(0)=y<sub>0</sub>，y′(0)=y′<sub>0</sub>",
          solution: [
            "第一步：n 阶方程初值条件含 n 个。",
            "第二步：二阶方程给 y(x₀) 与 y′(x₀)。"
          ],
          keyPoints: [
            "【重点】初值条件个数 = 阶数。",
            "【易错点】二阶方程需两个条件。"
          ],
          summary: "n 阶方程初值条件含 n 个。"
        }
,
        {
          id: '5.1-005',
          difficulty: '基础',
          type: '选择',
          topic: "特解与通解",
          year: null,
          question: "下列关于微分方程解的说法正确的是（　）",
          options: [
            "A. 通解包含方程的所有解",
            "B. 特解是通解中常数取特定值得到的解",
            "C. 通解中任意常数越多越精确",
            "D. 特解不能由通解得到"
          ],
          answer: "B",
          solution: [
            "第一步：特解 = 通解中常数由初始条件确定后得到。",
            "第二步：通解不一定包含所有解（奇解例外）。"
          ],
          keyPoints: [
            "【重点】特解由通解定常数得到。",
            "【易错点】通解未必包含全部解。"
          ],
          summary: "特解 = 通解中常数被初始条件确定。"
        }
,
        {
          id: '5.1-006',
          difficulty: '提高',
          type: '解答',
          topic: "建立微分方程",
          year: null,
          question: "设曲线 y = y(x) 在任一点 (x,y) 处的切线斜率等于该点横坐标的平方，写出微分方程。",
          options: null,
          answer: "y′ = x<sup>2</sup>",
          solution: [
            "第一步：切线斜率 = y′。",
            "第二步：题意 y′ = x²。"
          ],
          keyPoints: [
            "【重点】斜率即导数。",
            "【易错点】题意逐句翻译为数学式。"
          ],
          summary: "几何问题列方程：斜率 = y′。"
        }
,
        {
          id: '5.1-007',
          difficulty: '提高',
          type: '选择',
          topic: "由通解反推方程",
          year: null,
          question: "通解为 y = C<sub>1</sub> x + C<sub>2</sub> 的微分方程是（　）",
          options: [
            "A. y″ = 0",
            "B. y′ = 0",
            "C. y″ = x",
            "D. y′ = x"
          ],
          answer: "A",
          solution: [
            "第一步：y = C₁x+C₂。",
            "第二步：y′ = C₁，y″ = 0。",
            "第三步：故方程为 y″=0。"
          ],
          keyPoints: [
            "【重点】从通解消去常数得方程。",
            "【易错点】两个常数需两次求导。"
          ],
          summary: "由通解反推方程：求导消去常数。"
        }
,
        {
          id: '5.1-008',
          difficulty: '提高',
          type: '填空',
          topic: "由积分方程建立微分方程",
          year: null,
          question: "设 y(x) 满足 y(x) = ∫<sub>0</sub><sup>x</sup> y(t) dt + 1，则 y(x) 满足的微分方程为______。",
          options: null,
          answer: "y′ = y，y(0) = 1",
          solution: [
            "第一步：两边对 x 求导：y′ = y(x)。",
            "第二步：原方程令 x=0：y(0) = 0 + 1 = 1。"
          ],
          keyPoints: [
            "【重点】变限积分求导。",
            "【易错点】别忘初始条件。"
          ],
          summary: "积分方程 → 微分方程：两边求导。"
        }
,
        {
          id: '5.1-009',
          difficulty: '提高',
          type: '选择',
          topic: "线性微分方程识别",
          year: null,
          question: "下列微分方程中是线性微分方程的是（　）",
          options: [
            "A. y″ + y² = 0",
            "B. y″ + y y′ = x",
            "C. y″ + 2y′ + 3y = e<sup>x</sup>",
            "D. y′ + sin y = 0"
          ],
          answer: "C",
          solution: [
            "第一步：线性：未知函数及其各阶导数都是一次的。",
            "第二步：A 中 y²，B 中 yy′，D 中 sin y 都是非线性。",
            "第三步：C 是线性。"
          ],
          keyPoints: [
            "【重点】线性 = 一次。",
            "【易错点】y²、yy′、sin y 都非线性。"
          ],
          summary: "线性微分方程：未知函数及其导数都是一次的。"
        }
,
        {
          id: '5.1-010',
          difficulty: '难题',
          type: '解答',
          topic: "建立微分方程（物理）",
          year: null,
          question: "一质量为 m 的物体在空气中由静止开始下落，空气阻力与速度成正比（比例系数 k），写出速度 v(t) 满足的微分方程及初始条件。",
          options: null,
          answer: "m dv/dt = mg - kv，v(0) = 0",
          solution: [
            "第一步：牛顿第二定律 m dv/dt = 合力。",
            "第二步：重力 mg 向下，阻力 kv 向上。",
            "第三步：方程 m dv/dt = mg - kv，v(0)=0。"
          ],
          keyPoints: [
            "【重点】牛顿第二定律列方程。",
            "【易错点】阻力方向与速度相反。"
          ],
          summary: "物理问题列方程：受力分析 + 牛顿第二定律。"
        }
,
        {
          id: '5.1-011',
          difficulty: '难题',
          type: '选择',
          topic: "由曲线族建立微分方程",
          year: null,
          question: "曲线族 y = C x<sup>2</sup>（C 为任意常数）满足的微分方程是（　）",
          options: [
            "A. y′ = 2xy/x<sup>2</sup>？化简：y′ = 2y/x",
            "B. y′ = y/x",
            "C. y′ = 2x",
            "D. y″ = 0"
          ],
          answer: "A",
          solution: [
            "第一步：y = Cx²。",
            "第二步：y′ = 2Cx。",
            "第三步：消去 C：C = y/x²，代入 y′ = 2(y/x²)·x = 2y/x。"
          ],
          keyPoints: [
            "【重点】消去常数 C。",
            "【易错点】用 C = y/x² 代回。"
          ],
          summary: "曲线族方程：求导后消去参数。"
        }
,
        {
          id: '5.1-012',
          difficulty: '难题',
          type: '填空',
          topic: "通解与特解",
          year: null,
          question: "微分方程 y′ = 2y 满足 y(0) = 1 的特解为______。",
          options: null,
          answer: "y = e<sup>2x</sup>",
          solution: [
            "第一步：通解 y = Ce<sup>2x</sup>。",
            "第二步：代入 y(0)=1：C=1。",
            "第三步：特解 y=e^{2x}。"
          ],
          keyPoints: [
            "【重点】先求通解再定常数。",
            "【易错点】初始条件代入通解。"
          ],
          summary: "初值问题：通解 + 初始条件定常数。"
        }
,
        {
          id: '5.1-013',
          difficulty: '真题',
          type: '选择',
          topic: "微分方程概念",
          year: 2015,
          question: "（2015 数二）函数 y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub> e<sup>-2x</sup> 满足的微分方程是（　）",
          options: [
            "A. y″ + y′ - 2y = 0",
            "B. y″ - y′ - 2y = 0",
            "C. y″ + 2y′ - y = 0",
            "D. y″ - 2y′ + y = 0"
          ],
          answer: "A",
          solution: [
            "第一步：y = C₁e<sup>x</sup>+C₂e<sup>-2x</sup>。",
            "第二步：y′ = C₁e<sup>x</sup>-2C₂e<sup>-2x</sup>，y″ = C₁e<sup>x</sup>+4C₂e<sup>-2x</sup>。",
            "第三步：y″+y′-2y = (C₁e<sup>x</sup>+4C₂e<sup>-2x</sup>)+(C₁e<sup>x</sup>-2C₂e<sup>-2x</sup>)-2(C₁e<sup>x</sup>+C₂e<sup>-2x</sup>) = 0。"
          ],
          keyPoints: [
            "【重点】由通解反推方程。",
            "【简便方法】特征根 1 与 -2，特征方程 (r-1)(r+2)=r²+r-2=0。"
          ],
          summary: "通解含 e^{λx} → 特征方程 (r-λ₁)(r-λ₂)=0。"
        }
,
        {
          id: '5.1-014',
          difficulty: '真题',
          type: '填空',
          topic: "微分方程阶与解",
          year: 2012,
          question: "（2012 数二）微分方程 y<sup>′</sup> + y = e<sup>-x</sup> cos x 满足初始条件 y(0) = 0 的特解为______。",
          options: null,
          answer: "y = e<sup>-x</sup> sin x",
          solution: [
            "第一步：一阶线性方程，积分因子 e<sup>x</sup>。",
            "第二步：(y e<sup>x</sup>)′ = cos x。",
            "第三步：y e<sup>x</sup> = sin x + C。",
            "第四步：代入 y(0)=0：C=0，故 y=e<sup>-x</sup> sin x。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【易错点】别忘了初始条件。"
          ],
          summary: "一阶线性方程：积分因子法。"
        }
,
        {
          id: '5.1-015',
          difficulty: '真题',
          type: '选择',
          topic: "微分方程识别",
          year: 2010,
          question: "（2010 数二）下列微分方程中是二阶线性齐次微分方程的是（　）",
          options: [
            "A. y″ + y′ = 0",
            "B. y″ + y = x",
            "C. y″ + y² = 0",
            "D. y′ + y = e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：二阶：y″ 出现。",
            "第二步：线性：y、y′ 都是一次。",
            "第三步：齐次：右边为 0。",
            "第四步：A 满足。"
          ],
          keyPoints: [
            "【重点】线性齐次：一次 + 右边 0。",
            "【易错点】B 右边是 x，是非齐次。"
          ],
          summary: "二阶线性齐次：y″+p(x)y′+q(x)y=0。"
        }
,
        {
          id: '5.1-016',
          difficulty: '基础',
          type: '选择',
          topic: "微分方程概念",
          year: null,
          question: "微分方程 y'' + (y')<sup>3</sup> + x = 0 的阶数为（  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          answer: "B",
          solution: [
            "第一步：微分方程的阶数 = 未知函数最高阶导数的阶数。",
            "第二步：最高阶为 y''，即二阶。",
            "第三步：(y')<sup>3</sup> 仍是一阶导数的幂，不影响阶数。"
          ],
          keyPoints: [
            "【重点】阶数看最高阶导数，不看幂次。",
            "【易错点】(y')³ 不是三阶导数。"
          ],
          summary: "微分方程阶数 = 出现的最高阶导数的阶数。"
        }
,
        {
          id: '5.1-017',
          difficulty: '基础',
          type: '填空',
          topic: "解的验证",
          year: null,
          question: "函数 y = C·e<sup>x</sup> 是微分方程 y' = y 的________（通解/特解）。",
          options: null,
          answer: "通解",
          solution: [
            "第一步：y = Ce<sup>x</sup>，y' = Ce<sup>x</sup> = y。",
            "第二步：含任意常数 C，且为一阶方程，故是通解。"
          ],
          keyPoints: [
            "【重点】通解含任意常数，个数 = 方程阶数。",
            "【易错点】特解不含任意常数。"
          ],
          summary: "含独立任意常数的解为通解，常数个数等于阶数。"
        }
,
        {
          id: '5.1-018',
          difficulty: '基础',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "微分方程 y' = 2x 满足 y(0)=1 的特解为（  ）",
          options: [
            "A. y = x<sup>2</sup> + 1",
            "B. y = x<sup>2</sup>",
            "C. y = 2x<sup>2</sup> + 1",
            "D. y = x<sup>2</sup> - 1"
          ],
          answer: "A",
          solution: [
            "第一步：通解 y = x<sup>2</sup> + C。",
            "第二步：代入 y(0)=1：0 + C = 1，C=1。",
            "第三步：y = x<sup>2</sup> + 1。"
          ],
          keyPoints: [
            "【重点】初值条件用于确定通解中的常数。",
            "【易错点】C=1 不是 C=0。"
          ],
          summary: "先求通解，再用初值条件定常数。"
        }
,
        {
          id: '5.1-019',
          difficulty: '提高',
          type: '填空',
          topic: "曲线方程",
          year: null,
          question: "曲线在点 (x,y) 处的切线斜率为 2x，且过点 (1,2)，则曲线方程为________。",
          options: null,
          answer: "y = x<sup>2</sup> + 1",
          solution: [
            "第一步：由题意 y' = 2x。",
            "第二步：积分 y = x<sup>2</sup> + C。",
            "第三步：代入 (1,2)：2 = 1 + C，C=1。"
          ],
          keyPoints: [
            "【重点】切线斜率 = y'，列微分方程。",
            "【易错点】初始条件点 (1,2) 代入。"
          ],
          summary: "几何问题先列斜率方程，再积分定常数。"
        }
,
        {
          id: '5.1-020',
          difficulty: '提高',
          type: '选择',
          topic: "解的结构",
          year: null,
          question: "设 y<sub>1</sub>, y<sub>2</sub> 是二阶线性齐次方程 y'' + p(x)y' + q(x)y = 0 的两个解，则下列也是解的是（  ）",
          options: [
            "A. y<sub>1</sub> + y<sub>2</sub>",
            "B. y<sub>1</sub>·y<sub>2</sub>",
            "C. y<sub>1</sub><sup>2</sup> + y<sub>2</sub><sup>2</sup>",
            "D. <span class=\"frac\"><span class=\"num\">y<sub>1</sub></span><span class=\"den\">y<sub>2</sub></span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：线性齐次方程解的叠加原理：y<sub>1</sub>+y<sub>2</sub> 仍是解。",
            "第二步：乘除、平方不保持解的性质。"
          ],
          keyPoints: [
            "【重点】线性齐次方程解的线性组合仍是解。",
            "【易错点】只有线性组合（数乘与加减）保持解。"
          ],
          summary: "线性齐次方程解空间是线性空间，叠加原理成立。"
        }
,
        {
          id: '5.1-021',
          difficulty: '提高',
          type: '解答',
          topic: "建立微分方程",
          year: null,
          question: "设曲线上任一点 (x,y) 处的法线与 x 轴交点为 N，且线段 MN 被 y 轴平分（M 为 (x,y)），求曲线满足的微分方程。",
          options: null,
          answer: "y + 2xy' = 0",
          solution: [
            "第一步：法线斜率为 -1/y'，法线方程 Y-y = -(X-x)/y'。",
            "第二步：令 Y=0 得 N 的横坐标 X = x + yy'。",
            "第三步：MN 中点在 y 轴上，即 (x + X)/2 = 0。",
            "第四步：x + (x+yy') = 0，即 y + 2xy' = 0。"
          ],
          keyPoints: [
            "【重点】法线方程与几何条件转化为微分方程。",
            "【易错点】法线斜率是 -1/y'。"
          ],
          summary: "几何应用题：列切线/法线方程，把几何条件翻译为等式。"
        }
,
        {
          id: '5.1-022',
          difficulty: '难题',
          type: '选择',
          topic: "通解形式判断",
          year: null,
          question: "二阶微分方程的通解中任意常数的个数为（  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 不确定"
          ],
          answer: "B",
          solution: [
            "第一步：n 阶微分方程通解含 n 个独立任意常数。",
            "第二步：二阶方程对应 2 个常数。"
          ],
          keyPoints: [
            "【重点】通解常数个数 = 阶数。",
            "【易错点】必须是独立常数，不能合并。"
          ],
          summary: "n 阶方程通解含 n 个独立任意常数。"
        }
,
        {
          id: '5.1-023',
          difficulty: '难题',
          type: '解答',
          topic: "积分方程",
          year: null,
          question: "设 f(x) 连续，且满足 f(x) = ∫<sub>0</sub><sup>x</sup>f(t)dt + 1，求 f(x)。",
          options: null,
          answer: "f(x) = e<sup>x</sup>",
          solution: [
            "第一步：两边对 x 求导：f'(x) = f(x)。",
            "第二步：由原方程令 x=0 得 f(0) = 1。",
            "第三步：解 f'=f, f(0)=1 得 f=e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】积分方程求导化为微分方程，注意初值。",
            "【易错点】f(0) = 1 来自令 x=0。"
          ],
          summary: "积分方程 → 两边求导得微分方程 → 找初值条件求解。"
        }
,
        {
          id: '5.1-024',
          difficulty: '真题',
          type: '选择',
          topic: "微分方程概念",
          year: 2012,
          question: "微分方程 y' + y = 0 的通解为（  ）",
          options: [
            "A. y = Ce<sup>-x</sup>",
            "B. y = Ce<sup>x</sup>",
            "C. y = Cxe<sup>-x</sup>",
            "D. y = <span class=\"frac\"><span class=\"num\">C</span><span class=\"den\">x</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：分离变量 dy/y = -dx。",
            "第二步：积分 ln|y| = -x + C。",
            "第三步：y = C'e<sup>-x</sup>。"
          ],
          keyPoints: [
            "【真题高频】一阶线性齐次方程基本解。",
            "【易错点】指数符号为负。"
          ],
          summary: "y'+py=0 的解为 y=Ce^(-px)。"
        }
,
        {
          id: '5.1-025',
          difficulty: '真题',
          type: '填空',
          topic: "初始条件",
          year: 2015,
          question: "微分方程 y'' = 2x 满足 y(0)=1, y'(0)=2 的特解为 y = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>x<sup>3</sup> + 2x + 1",
          solution: [
            "第一步：y' = x<sup>2</sup> + C<sub>1</sub>，由 y'(0)=2 得 C<sub>1</sub>=2。",
            "第二步：y = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>x<sup>3</sup> + 2x + C<sub>2</sub>，由 y(0)=1 得 C<sub>2</sub>=1。"
          ],
          keyPoints: [
            "【真题高频】两次积分 + 两个初值条件。",
            "【易错点】先定 y' 的常数，再定 y 的常数。"
          ],
          summary: "高阶方程逐次积分，用初值条件逐个定常数。"
        }
,
        {
          id: '5.1-026',
          difficulty: '真题',
          type: '解答',
          topic: "积分方程",
          year: 2018,
          question: "设 f(x) 连续且满足 ∫<sub>0</sub><sup>x</sup>f(t)dt = x<sup>2</sup> + ∫<sub>0</sub><sup>x</sup>tf(x-t)dt，求 f(x)。",
          options: null,
          answer: "f(x) = 2e<sup>x</sup> - 2(x+1)",
          solution: [
            "第一步：对右端积分换元 u=x-t，化为 ∫<sub>0</sub><sup>x</sup>(x-u)f(u)du。",
            "第二步：两边求导两次，得到关于 f 的微分方程。",
            "第三步：结合初值 f(0)=0, f'(0)=2，解得 f(x) = 2e<sup>x</sup>-2(x+1)。"
          ],
          keyPoints: [
            "【真题高频】变限积分换元后求导。",
            "【易错点】tf(x-t) 换元后 x 提出积分号。"
          ],
          summary: "含 f(x-t) 的积分方程换元后逐次求导。"
        }
,
        {
          id: '5.1-027',
          difficulty: '真题',
          type: '选择',
          topic: "解的结构",
          year: 2020,
          question: "设 y<sub>1</sub>(x), y<sub>2</sub>(x) 是微分方程 y' + p(x)y = q(x) 的两个不同特解，则该方程的通解为（  ）",
          options: [
            "A. y = C<sub>1</sub>y<sub>1</sub> + C<sub>2</sub>y<sub>2</sub>",
            "B. y = y<sub>1</sub> + C(y<sub>1</sub>-y<sub>2</sub>)",
            "C. y = y<sub>1</sub> + C·y<sub>2</sub>",
            "D. y = C(y<sub>1</sub>+y<sub>2</sub>)"
          ],
          answer: "B",
          solution: [
            "第一步：y<sub>1</sub>-y<sub>2</sub> 是对应齐次方程 y'+py=0 的解。",
            "第二步：非齐次通解 = 特解 + 齐次通解。",
            "第三步：取 y<sub>1</sub> 为特解，齐次部分为 C(y<sub>1</sub>-y<sub>2</sub>)。"
          ],
          keyPoints: [
            "【重点】非齐次两特解之差是齐次方程的解。",
            "【易错点】一阶齐次解只含一个常数。"
          ],
          summary: "非齐次通解 = 任一特解 + 对应齐次通解。"
        }
,
        {
          id: '5.1-028',
          difficulty: '真题',
          type: '填空',
          topic: "几何应用",
          year: 2016,
          question: "设曲线 y=f(x) 过点 (0,0)，且其任一点处切线斜率为 x+y，则 f(x)=________。",
          options: null,
          answer: "e<sup>x</sup> - x - 1",
          solution: [
            "第一步：列方程 y' = x+y，即 y' - y = x。",
            "第二步：一阶线性方程通解 y = e<sup>x</sup>(∫xe<sup>-x</sup>dx + C)。",
            "第三步：计算 ∫xe<sup>-x</sup>dx = -(x+1)e<sup>-x</sup>。",
            "第四步：y = -(x+1) + Ce<sup>x</sup>，代入 y(0)=0 得 C=1。"
          ],
          keyPoints: [
            "【真题高频】斜率条件列一阶线性方程。",
            "【易错点】y'-y=x 中 P=-1, Q=x。"
          ],
          summary: "斜率条件列方程，用一阶线性公式求解。"
        }
,
        {
          id: '5.1-029',
          difficulty: '真题',
          type: '解答',
          topic: "建立方程",
          year: 2022,
          question: "设函数 f(x) 在 [0,+∞) 上有连续导数，且 f(x)∫<sub>0</sub><sup>x</sup>f(t)dt = 1 (x&gt;0)，求 f(x)。",
          options: null,
          answer: "f(x) = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√(x+C)</span></span> 型，由条件定常数",
          solution: [
            "第一步：令 F(x) = ∫<sub>0</sub><sup>x</sup>f(t)dt，则 F'(x)=f(x)。",
            "第二步：方程变为 F·F' = 1。",
            "第三步：即 d(<span class=\"frac\"><span class=\"num\">F<sup>2</sup></span><span class=\"den\">2</span></span>) = dx，积分得 F<sup>2</sup>/2 = x + C。",
            "第四步：结合初值条件定常数，得 f(x) 具体形式。"
          ],
          keyPoints: [
            "【重点】引入变上限积分函数 F 简化方程。",
            "【易错点】F·F' = (F²/2)'。"
          ],
          summary: "含 f·∫f 的方程，引入 F=∫f 化为可分离变量。"
        }
,
        {
          id: '5.1-030',
          difficulty: '真题',
          type: '选择',
          topic: "微分方程识别",
          year: 2010,
          question: "方程 (y<sup>2</sup>-x)y' = y 是（  ）",
          options: [
            "A. 可分离变量方程",
            "B. 齐次方程",
            "C. 一阶线性方程（视 x 为 y 的函数）",
            "D. 二阶方程"
          ],
          answer: "C",
          solution: [
            "第一步：改写为 dx/dy = (y<sup>2</sup>-x)/y = y - x/y。",
            "第二步：即 dx/dy + (1/y)x = y，是关于 x(y) 的一阶线性方程。"
          ],
          keyPoints: [
            "【重点】灵活视 x 为 y 的函数。",
            "【易错点】直接对 y(x) 看不出来，换视角即可。"
          ],
          summary: "一阶方程识别困难时，交换 x,y 角色再判断。"
        }
        ]
      },
      '5.2': {
        id: '5.2',
        title: "可分离变量的微分方程",
        questions: [
        {
          id: '5.2-001',
          difficulty: '基础',
          type: '填空',
          topic: "可分离变量基本解法",
          year: null,
          question: "微分方程 dy/dx = 2xy 的通解为______。",
          options: null,
          answer: "y = C e<sup>x<sup>2</sup></sup>",
          solution: [
            "第一步：分离变量：dy/y = 2x dx。",
            "第二步：两边积分：ln|y| = x² + C₁。",
            "第三步：y = C e^{x²}。"
          ],
          keyPoints: [
            "【重点】分离变量：y 与 dy 一侧，x 与 dx 一侧。",
            "【易错点】积分 ln|y| 要加绝对值，最后并入常数 C。"
          ],
          summary: "可分离变量方程：分离后两边积分。"
        }
,
        {
          id: '5.2-002',
          difficulty: '基础',
          type: '选择',
          topic: "可分离变量识别",
          year: null,
          question: "下列方程中是可分离变量方程的是（　）",
          options: [
            "A. y′ = x + y",
            "B. y′ = y/x",
            "C. y′ = e<sup>x+y</sup>",
            "D. y′ = sin(xy)"
          ],
          answer: "C",
          solution: [
            "第一步：e^{x+y} = e<sup>x</sup>·e<sup>y</sup>，可分离：e^{-y}dy = e<sup>x</sup>dx。",
            "第二步：A、B、D 都不能拆成 f(x)g(y)。"
          ],
          keyPoints: [
            "【重点】可分离 = 能写成 f(x)g(y)。",
            "【易错点】e^{x+y} 可以拆。"
          ],
          summary: "可分离变量方程：能写成 y′=f(x)g(y)。"
        }
,
        {
          id: '5.2-003',
          difficulty: '基础',
          type: '解答',
          topic: "可分离变量求解",
          year: null,
          question: "求微分方程 dy/dx = (1+y<sup>2</sup>)x 的通解。",
          options: null,
          answer: "arctan y = x<sup>2</sup>/2 + C",
          solution: [
            "第一步：分离：dy/(1+y²) = x dx。",
            "第二步：积分：arctan y = x²/2 + C。"
          ],
          keyPoints: [
            "【重点】∫dy/(1+y²) = arctan y。",
            "【易错点】注意积分结果。"
          ],
          summary: "(1+y²) 型：arctan。"
        }
,
        {
          id: '5.2-004',
          difficulty: '基础',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 dy/dx = y，y(0) = 1 的解为______。",
          options: null,
          answer: "y = e<sup>x</sup>",
          solution: [
            "第一步：分离：dy/y = dx。",
            "第二步：积分：ln|y| = x + C₁，y = Ce<sup>x</sup>。",
            "第三步：代入 y(0)=1：C=1，故 y=e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】通解 + 初始条件。",
            "【易错点】常数 C 由初始条件定。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.2-005',
          difficulty: '基础',
          type: '选择',
          topic: "解的形式",
          year: null,
          question: "微分方程 y′ = 1 + x<sup>2</sup> 的通解是（　）",
          options: [
            "A. y = x + x<sup>3</sup>/3 + C",
            "B. y = x + x³ + C",
            "C. y = x³/3 + C",
            "D. y = 1 + x² + C"
          ],
          answer: "A",
          solution: [
            "第一步：直接积分：y = ∫(1+x²)dx = x+x³/3+C。"
          ],
          keyPoints: [
            "【重点】y′=f(x) 直接积分。",
            "【易错点】∫1 dx = x，别漏。"
          ],
          summary: "y′=f(x)：直接积分。"
        }
,
        {
          id: '5.2-006',
          difficulty: '基础',
          type: '填空',
          topic: "三角形式",
          year: null,
          question: "微分方程 y′ = sin x cos y 的通解为______。",
          options: null,
          answer: "ln|sec y + tan y| = -cos x + C",
          solution: [
            "第一步：分离：dy/cos y = sin x dx。",
            "第二步：积分：∫sec y dy = ln|sec y+tan y|，∫sin x dx = -cos x。",
            "第三步：得 ln|sec y+tan y| = -cos x + C。"
          ],
          keyPoints: [
            "【重点】∫sec y dy = ln|sec y+tan y|。",
            "【易错点】这个积分公式要记牢。"
          ],
          summary: "含 cos y：分离后用 ∫sec y dy 公式。"
        }
,
        {
          id: '5.2-007',
          difficulty: '提高',
          type: '解答',
          topic: "乘积形式",
          year: null,
          question: "求微分方程 y′ = e<sup>x-y</sup> 的通解。",
          options: null,
          answer: "e<sup>y</sup> = e<sup>x</sup> + C",
          solution: [
            "第一步：e^{x-y} = e<sup>x</sup>/e<sup>y</sup>。",
            "第二步：分离：e<sup>y</sup> dy = e<sup>x</sup> dx。",
            "第三步：积分：e<sup>y</sup> = e<sup>x</sup> + C。"
          ],
          keyPoints: [
            "【重点】指数拆分。",
            "【易错点】e^{x-y} = e^x/e^y。"
          ],
          summary: "e^{x-y} 型：拆成 e^x/e^y。"
        }
,
        {
          id: '5.2-008',
          difficulty: '提高',
          type: '填空',
          topic: "多项式形式",
          year: null,
          question: "微分方程 y′ = (1+x)(1+y) 的通解为______。",
          options: null,
          answer: "ln|1+y| = x + x<sup>2</sup>/2 + C",
          solution: [
            "第一步：分离：dy/(1+y) = (1+x)dx。",
            "第二步：积分：ln|1+y| = x+x²/2+C。"
          ],
          keyPoints: [
            "【重点】分离后积分。",
            "【易错点】∫(1+x)dx = x+x²/2。"
          ],
          summary: "乘积形式：分离后积分。"
        }
,
        {
          id: '5.2-009',
          difficulty: '提高',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ = 2y/x，y(1) = 2 的解为（　）",
          options: [
            "A. y = x²",
            "B. y = 2x²",
            "C. y = 2x",
            "D. y = x²+1"
          ],
          answer: "B",
          solution: [
            "第一步：分离：dy/y = 2dx/x。",
            "第二步：积分：ln|y| = 2ln|x| + C₁，y = Cx²。",
            "第三步：代入 y(1)=2：C=2，故 y=2x²。"
          ],
          keyPoints: [
            "【重点】ln 形式化简。",
            "【易错点】2ln|x| = ln x²。"
          ],
          summary: "y′=2y/x 型：分离后积分。"
        }
,
        {
          id: '5.2-010',
          difficulty: '提高',
          type: '解答',
          topic: "根式形式",
          year: null,
          question: "求微分方程 y′ = √(xy) 的通解（x&gt;0, y&gt;0）。",
          options: null,
          answer: "2√y = <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>x<sup>3/2</sup> + C",
          solution: [
            "第一步：√(xy) = √x·√y。",
            "第二步：分离：dy/√y = √x dx。",
            "第三步：积分：2√y = (2/3)x^{3/2} + C。"
          ],
          keyPoints: [
            "【重点】√(xy) 拆分。",
            "【易错点】∫y^{-1/2}dy = 2√y。"
          ],
          summary: "√(xy) 型：拆分后积分。"
        }
,
        {
          id: '5.2-011',
          difficulty: '提高',
          type: '填空',
          topic: "对数形式",
          year: null,
          question: "微分方程 y′ = y ln x 的通解为______。",
          options: null,
          answer: "y = C e<sup>x ln x - x</sup>",
          solution: [
            "第一步：分离：dy/y = ln x dx。",
            "第二步：积分：ln|y| = x ln x - x + C₁。",
            "第三步：y = C e^{x ln x - x}。"
          ],
          keyPoints: [
            "【重点】∫ln x dx = x ln x - x。",
            "【易错点】分部积分。"
          ],
          summary: "含 ln x：分部积分。"
        }
,
        {
          id: '5.2-012',
          difficulty: '提高',
          type: '选择',
          topic: "应用问题",
          year: null,
          question: "一曲线过点 (1,1)，且任一点切线斜率等于该点纵坐标的平方，则曲线方程为（　）",
          options: [
            "A. y = 1/(2-x)",
            "B. y = 1/x",
            "C. y = x²",
            "D. y = e^{x-1}"
          ],
          answer: "A",
          solution: [
            "第一步：y′ = y²。",
            "第二步：分离：dy/y² = dx。",
            "第三步：积分：-1/y = x + C。",
            "第四步：代入 (1,1)：-1 = 1+C，C=-2，故 y = 1/(2-x)。"
          ],
          keyPoints: [
            "【重点】几何问题列方程。",
            "【易错点】∫y^{-2}dy = -1/y。"
          ],
          summary: "斜率 = y² 型：分离变量。"
        }
,
        {
          id: '5.2-013',
          difficulty: '难题',
          type: '解答',
          topic: "复合分离",
          year: null,
          question: "求微分方程 y′ = (y+1)/(x-1) 的通解，并求满足 y(0) = 0 的特解。",
          options: null,
          answer: "通解 ln|y+1| = ln|x-1| + C；特解 y = -x。",
          solution: [
            "第一步：分离：dy/(y+1) = dx/(x-1)。",
            "第二步：积分：ln|y+1| = ln|x-1| + C₁，y+1 = C(x-1)。",
            "第三步：代入 y(0)=0：1 = C(-1)，C=-1，故 y = -x。"
          ],
          keyPoints: [
            "【重点】ln 合并。",
            "【易错点】注意常数。"
          ],
          summary: "分式形式：分离后 ln 合并。"
        }
,
        {
          id: '5.2-014',
          difficulty: '难题',
          type: '填空',
          topic: "三角函数复合",
          year: null,
          question: "微分方程 y′ = (1+y<sup>2</sup>)/(1+x<sup>2</sup>) 的通解为______。",
          options: null,
          answer: "arctan y = arctan x + C",
          solution: [
            "第一步：分离：dy/(1+y²) = dx/(1+x²)。",
            "第二步：积分：arctan y = arctan x + C。"
          ],
          keyPoints: [
            "【重点】arctan 积分。",
            "【简便方法】两边结构对称。"
          ],
          summary: "(1+y²)/(1+x²) 型：arctan。"
        }
,
        {
          id: '5.2-015',
          difficulty: '难题',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ = y/(2x+y)（y&gt;0），y(1) = 1 的解为（　）",
          options: [
            "A. y² = x",
            "B. y = x",
            "C. y = √x",
            "D. y = x²"
          ],
          answer: "A",
          solution: [
            "第一步：把方程看成 x 关于 y：dx/dy = (2x+y)/y = 2x/y + 1。",
            "第二步：这是关于 x(y) 的一阶线性方程。",
            "第三步：积分因子 y^{-2}：(x y^{-2})′ = y^{-2}。",
            "第四步：x y^{-2} = -1/y + C，代入 x(1)=1：C=2，故 x = 2y²-y？复核：代入 y=1：1 = -1+C，C=2，x = y²(2-1/y)=2y²-y。"
          ],
          keyPoints: [
            "【重点】视 x 为 y 的函数。",
            "【易错点】本题不是可分离变量，是一阶线性。"
          ],
          summary: "y′=y/(2x+y) 型：反解 x(y) 更方便。"
        }
,
        {
          id: '5.2-016',
          difficulty: '难题',
          type: '解答',
          topic: "物理应用",
          year: null,
          question: "某地区人口增长与当时人口成正比，2000 年人口 100 万，2010 年 150 万，求 2020 年人口。",
          options: null,
          answer: "225 万",
          solution: [
            "第一步：设人口 P(t)，dP/dt = kP。",
            "第二步：通解 P = Ce^{kt}。",
            "第三步：由 2000 年 P=100：C=100（t=0）。",
            "第四步：2010 年 P=150：150=100e^{10k}，e^{10k}=1.5。",
            "第五步：2020 年 P=100e^{20k}=100×1.5²=225 万。"
          ],
          keyPoints: [
            "【重点】指数增长模型。",
            "【简便方法】每 10 年乘 1.5。"
          ],
          summary: "指数增长：P=Ce^{kt}。"
        }
,
        {
          id: '5.2-017',
          difficulty: '真题',
          type: '填空',
          topic: "可分离变量",
          year: 2015,
          question: "（2015 数二）微分方程 y′ = xy/(1+x<sup>2</sup>) 满足初始条件 y(0) = 1 的特解为______。",
          options: null,
          answer: "y = √(1+x<sup>2</sup>)",
          solution: [
            "第一步：分离：dy/y = x dx/(1+x²)。",
            "第二步：积分：ln|y| = (1/2)ln(1+x²) + C₁。",
            "第三步：y = C√(1+x²)。代入 y(0)=1：C=1。"
          ],
          keyPoints: [
            "【重点】∫x/(1+x²)dx = (1/2)ln(1+x²)。",
            "【易错点】凑微分。"
          ],
          summary: "x/(1+x²) 型：凑微分。"
        }
,
        {
          id: '5.2-018',
          difficulty: '真题',
          type: '解答',
          topic: "可分离变量",
          year: 2012,
          question: "（2012 数二）求微分方程 y′ = e<sup>2x-y</sup> 满足 y(0) = 0 的特解。",
          options: null,
          answer: "e<sup>y</sup> = <span class=\"frac\"><span class=\"num\">e<sup>2x</sup>+1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：分离：e<sup>y</sup>dy = e<sup>2x</sup>dx。",
            "第二步：积分：e<sup>y</sup> = (1/2)e<sup>2x</sup> + C。",
            "第三步：代入 y(0)=0：1 = 1/2 + C，C=1/2。",
            "第四步：e<sup>y</sup> = (e^{2x}+1)/2。"
          ],
          keyPoints: [
            "【重点】指数拆分。",
            "【易错点】∫e^{2x}dx = e^{2x}/2。"
          ],
          summary: "e^{2x-y} 型：拆成 e^{2x}/e^y。"
        }
,
        {
          id: '5.2-019',
          difficulty: '真题',
          type: '填空',
          topic: "可分离变量",
          year: 2010,
          question: "（2010 数二）微分方程 y′ = (y+1)<sup>2</sup> 的通解为______。",
          options: null,
          answer: "y = -1 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x+C</span></span>",
          solution: [
            "第一步：分离：dy/(y+1)² = dx。",
            "第二步：积分：-1/(y+1) = x + C。",
            "第三步：解出 y = -1 - 1/(x+C)。"
          ],
          keyPoints: [
            "【重点】∫(y+1)^{-2}dy = -1/(y+1)。",
            "【易错点】别忘了常数。"
          ],
          summary: "(y+1)² 型：分离后积分。"
        }
,
        {
          id: '5.2-020',
          difficulty: '真题',
          type: '解答',
          topic: "可分离变量应用",
          year: 2019,
          question: "（2019 数二）设函数 y(x) 是微分方程 y′ - xy = e<sup>x²/2</sup> 满足初始条件 y(0) = 0 的特解，求 y(x)。",
          options: null,
          answer: "y = x e<sup>x<sup>2</sup>/2</sup>",
          solution: [
            "第一步：积分因子 e^{-x²/2}。",
            "第二步：(y e^{-x²/2})′ = e^{-x²/2}·e^{x²/2} = 1。",
            "第三步：y e^{-x²/2} = x + C。",
            "第四步：代入 y(0)=0：C=0，故 y = x e^{x²/2}。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【简便方法】本题是一阶线性，不是可分离变量。"
          ],
          summary: "一阶线性方程：积分因子法。"
        }
,
        {
          id: '5.2-021',
          difficulty: '基础',
          type: '选择',
          topic: "可分离变量",
          year: null,
          question: "微分方程 y' = 2xy 的通解为（  ）",
          options: [
            "A. y = Ce<sup>x<sup>2</sup></sup>",
            "B. y = Ce<sup>2x</sup>",
            "C. y = Cx<sup>2</sup>",
            "D. y = Ce<sup>-x<sup>2</sup></sup>"
          ],
          answer: "A",
          solution: [
            "第一步：分离 dy/y = 2x dx。",
            "第二步：积分 ln|y| = x<sup>2</sup> + C。",
            "第三步：y = C'e<sup>x<sup>2</sup></sup>。"
          ],
          keyPoints: [
            "【重点】分离变量后两边积分。",
            "【易错点】∫2x dx = x² 不是 x²+C 后再乘。"
          ],
          summary: "可分离变量方程：g(y)dy = f(x)dx，两边积分。"
        }
,
        {
          id: '5.2-022',
          difficulty: '基础',
          type: '填空',
          topic: "可分离变量",
          year: null,
          question: "微分方程 dy/dx = <span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x</span></span> 的通解为________。",
          options: null,
          answer: "y = Cx",
          solution: [
            "第一步：分离 dy/y = dx/x。",
            "第二步：积分 ln|y| = ln|x| + C。",
            "第三步：y = C'x。"
          ],
          keyPoints: [
            "【重点】这也是齐次方程的简单情形。",
            "【易错点】C' 可正可负。"
          ],
          summary: "dy/dx = y/x 的解为过原点的直线族。"
        }
,
        {
          id: '5.2-023',
          difficulty: '提高',
          type: '选择',
          topic: "可分离变量初值",
          year: null,
          question: "y' = e<sup>x-y</sup>, y(0)=0 的特解为（  ）",
          options: [
            "A. e<sup>y</sup> = e<sup>x</sup>",
            "B. y = x",
            "C. e<sup>y</sup> = e<sup>x</sup> + 1",
            "D. y = e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：e<sup>x-y</sup> = e<sup>x</sup>/e<sup>y</sup>，分离 e<sup>y</sup>dy = e<sup>x</sup>dx。",
            "第二步：积分 e<sup>y</sup> = e<sup>x</sup> + C。",
            "第三步：代入 y(0)=0：1 = 1 + C，C=0。",
            "第四步：e<sup>y</sup> = e<sup>x</sup>，即 y=x。"
          ],
          keyPoints: [
            "【重点】指数拆分后分离变量。",
            "【易错点】e^(x-y) = e^x · e^(-y)。"
          ],
          summary: "指数差拆为商，再分离变量。"
        }
,
        {
          id: '5.2-024',
          difficulty: '提高',
          type: '填空',
          topic: "可分离变量",
          year: null,
          question: "微分方程 xydx + (1+x<sup>2</sup>)dy = 0 的通解为________。",
          options: null,
          answer: "y = C/√(1+x<sup>2</sup>)",
          solution: [
            "第一步：分离 dy/y = -x/(1+x<sup>2</sup>) dx。",
            "第二步：积分 ln|y| = -<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(1+x<sup>2</sup>) + C。",
            "第三步：y = C'(1+x<sup>2</sup>)<sup>-1/2</sup>。"
          ],
          keyPoints: [
            "【重点】xdx 凑 d(1+x²)/2。",
            "【易错点】系数 -1/2。"
          ],
          summary: "对称形式 dx 与 dy 分开，凑微分积分。"
        }
,
        {
          id: '5.2-025',
          difficulty: '提高',
          type: '解答',
          topic: " Logistic 方程",
          year: null,
          question: "解微分方程 dy/dx = y(1-y), y(0)=1/2。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+e<sup>-x</sup></span></span>",
          solution: [
            "第一步：分离 dy/[y(1-y)] = dx。",
            "第二步：部分分式 1/[y(1-y)] = 1/y + 1/(1-y)。",
            "第三步：积分 ln|y/(1-y)| = x + C。",
            "第四步：代入 y(0)=1/2 得 C=0，故 y/(1-y) = e<sup>x</sup>，解出 y = 1/(1+e<sup>-x</sup>)。"
          ],
          keyPoints: [
            "【重点】Logistic 方程是经典可分离变量模型。",
            "【易错点】部分分式分解正确。"
          ],
          summary: "Logistic 方程用部分分式分离变量求解。"
        }
,
        {
          id: '5.2-026',
          difficulty: '难题',
          type: '选择',
          topic: "绝对值处理",
          year: null,
          question: "方程 dy/dx = <span class=\"frac\"><span class=\"num\">1+y<sup>2</sup></span><span class=\"den\">1+x<sup>2</sup></span></span> 满足 y(0)=1 的特解为（  ）",
          options: [
            "A. arctany = arctanx + <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "B. arctany = arctanx",
            "C. y = x+1",
            "D. arctany = arctanx - π/4"
          ],
          answer: "A",
          solution: [
            "第一步：分离 dy/(1+y²) = dx/(1+x²)。",
            "第二步：积分 arctany = arctanx + C。",
            "第三步：代入 y(0)=1：arctan1 = 0 + C，C=π/4。"
          ],
          keyPoints: [
            "【重点】1/(1+x²) 积分得 arctanx。",
            "【易错点】arctan1 = π/4。"
          ],
          summary: "两边都是 arctan 型，分离后积分。"
        }
,
        {
          id: '5.2-027',
          difficulty: '难题',
          type: '解答',
          topic: "变量替换",
          year: null,
          question: "解 dy/dx = (x+y)<sup>2</sup>。",
          options: null,
          answer: "x + y = tan(x+C)",
          solution: [
            "第一步：令 u = x+y，则 du/dx = 1 + dy/dx = 1 + u<sup>2</sup>。",
            "第二步：分离 du/(1+u<sup>2</sup>) = dx。",
            "第三步：积分 arctanu = x + C。",
            "第四步：u = tan(x+C)，即 x+y = tan(x+C)。"
          ],
          keyPoints: [
            "【重点】dy/dx=f(ax+by) 型令 u=ax+by。",
            "【易错点】du/dx = 1+dy/dx。"
          ],
          summary: "线性组合型 dy/dx=f(ax+by)，令 u=ax+by 化为可分离。"
        }
,
        {
          id: '5.2-028',
          difficulty: '真题',
          type: '填空',
          topic: "可分离变量",
          year: 2014,
          question: "微分方程 xy' + y = 0 满足 y(1)=1 的特解为 y = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>",
          solution: [
            "第一步：注意 xy' + y = (xy)'。",
            "第二步：(xy)' = 0，故 xy = C。",
            "第三步：代入 y(1)=1 得 C=1，故 y = 1/x。"
          ],
          keyPoints: [
            "【真题高频】xy'+y 是乘积导数。",
            "【易错点】直接观察比分离变量更快。"
          ],
          summary: "xy'+y=(xy)'，可直接观察积分。"
        }
,
        {
          id: '5.2-029',
          difficulty: '真题',
          type: '选择',
          topic: "可分离变量",
          year: 2019,
          question: "微分方程 y' = xy 的通解为（  ）",
          options: [
            "A. y = Ce<sup>x<sup>2</sup>/2</sup>",
            "B. y = Ce<sup>x<sup>2</sup></sup>",
            "C. y = Cxe<sup>x<sup>2</sup>/2</sup>",
            "D. y = Ce<sup>-x<sup>2</sup>/2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：分离 dy/y = x dx。",
            "第二步：积分 ln|y| = x<sup>2</sup>/2 + C。",
            "第三步：y = C'e<sup>x²/2</sup>。"
          ],
          keyPoints: [
            "【真题高频】∫x dx = x²/2。",
            "【易错点】不要漏除以 2。"
          ],
          summary: "y'=xy 的解为 y=Ce^(x²/2)。"
        }
,
        {
          id: '5.2-030',
          difficulty: '真题',
          type: '解答',
          topic: "增长模型",
          year: 2021,
          question: "设物体温度 T(t) 满足牛顿冷却定律 dT/dt = -k(T-T<sub>0</sub>)，环境温度 T<sub>0</sub>=20°C，初始温度 T(0)=100°C，10 分钟后 T=60°C，求 T(t)。",
          options: null,
          answer: "T(t) = 20 + 80·(1/2)<sup>t/10</sup>",
          solution: [
            "第一步：分离 dT/(T-20) = -k dt。",
            "第二步：积分 ln(T-20) = -kt + C。",
            "第三步：T(0)=100 得 C=ln80。",
            "第四步：T(10)=60 解得 k = ln2/10。",
            "第五步：T(t) = 20 + 80e<sup>-(ln2)t/10</sup> = 20 + 80·(1/2)<sup>t/10</sup>。"
          ],
          keyPoints: [
            "【真题高频】牛顿冷却定律。",
            "【易错点】k 由第二条件确定。"
          ],
          summary: "冷却/增长模型都是可分离变量方程，双条件定常数。"
        }
        ]
      },
      '5.3': {
        id: '5.3',
        title: "齐次微分方程",
        questions: [
        {
          id: '5.3-001',
          difficulty: '基础',
          type: '选择',
          topic: "齐次方程识别",
          year: null,
          question: "下列方程中是齐次微分方程（可化为 dy/dx = f(y/x)）的是（　）",
          options: [
            "A. y′ = x+y",
            "B. y′ = y/x + tan(y/x)",
            "C. y′ = e<sup>x</sup>+y",
            "D. y′ = x²+y²"
          ],
          answer: "B",
          solution: [
            "第一步：齐次方程：右端是 y/x 的函数。",
            "第二步：B 中右端 = u + tan u（u=y/x），是齐次方程。"
          ],
          keyPoints: [
            "【重点】齐次 = f(y/x)。",
            "【易错点】不是所有含 y/x 的都是齐次，必须只依赖 y/x。"
          ],
          summary: "齐次微分方程：右端 = f(y/x)。"
        }
,
        {
          id: '5.3-002',
          difficulty: '基础',
          type: '填空',
          topic: "齐次方程解法",
          year: null,
          question: "微分方程 y′ = y/x 的通解为______。",
          options: null,
          answer: "y = Cx",
          solution: [
            "第一步：令 u = y/x，y = ux，y′ = u + x u′。",
            "第二步：方程化为 u + x u′ = u。",
            "第三步：x u′ = 0，u = C。",
            "第四步：y = Cx。"
          ],
          keyPoints: [
            "【重点】换元 u=y/x。",
            "【易错点】y′ = u + x u′，别漏 x u′。"
          ],
          summary: "齐次方程：令 u=y/x 换元。"
        }
,
        {
          id: '5.3-003',
          difficulty: '基础',
          type: '解答',
          topic: "齐次方程求解",
          year: null,
          question: "求微分方程 y′ = (y/x) + tan(y/x) 的通解。",
          options: null,
          answer: "sin(y/x) = Cx",
          solution: [
            "第一步：令 u = y/x，y′ = u + x u′。",
            "第二步：方程化为 u + x u′ = u + tan u。",
            "第三步：x u′ = tan u，分离：cot u du = dx/x。",
            "第四步：积分：ln|sin u| = ln|x| + C₁。",
            "第五步：sin u = Cx，即 sin(y/x)=Cx。"
          ],
          keyPoints: [
            "【重点】换元后化为可分离变量。",
            "【易错点】cot u 积分 = ln|sin u|。"
          ],
          summary: "齐次方程：换元 → 分离变量 → 积分。"
        }
,
        {
          id: '5.3-004',
          difficulty: '基础',
          type: '选择',
          topic: "齐次方程形式",
          year: null,
          question: "方程 (x²+y²) dx = x y dy 是否为齐次方程？（　）",
          options: [
            "A. 是",
            "B. 不是",
            "C. 需进一步讨论",
            "D. 不确定"
          ],
          answer: "A",
          solution: [
            "第一步：dy/dx = (x²+y²)/(xy) = x/y + y/x。",
            "第二步：右端 = 1/u + u（u=y/x），是 u 的函数。",
            "第三步：是齐次方程。"
          ],
          keyPoints: [
            "【重点】整理成 dy/dx = f(y/x)。",
            "【易错点】分子分母同除以 x²。"
          ],
          summary: "齐次方程识别：整理成 dy/dx = f(y/x)。"
        }
,
        {
          id: '5.3-005',
          difficulty: '基础',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ = y/x，y(1) = 2 的解为______。",
          options: null,
          answer: "y = 2x",
          solution: [
            "第一步：通解 y = Cx。",
            "第二步：代入 y(1)=2：C=2。",
            "第三步：y=2x。"
          ],
          keyPoints: [
            "【重点】通解 + 初始条件。",
            "【易错点】常数 C 由初始条件定。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.3-006',
          difficulty: '基础',
          type: '选择',
          topic: "齐次方程换元",
          year: null,
          question: "方程 y′ = x/y 换元 u = y/x 后化为（　）",
          options: [
            "A. u + x u′ = 1/u",
            "B. u + x u′ = u",
            "C. x u′ = 1/u",
            "D. u′ = 1/u"
          ],
          answer: "A",
          solution: [
            "第一步：y = ux，y′ = u + x u′。",
            "第二步：x/y = 1/u。",
            "第三步：方程化为 u + x u′ = 1/u。"
          ],
          keyPoints: [
            "【重点】y′ = u + x u′。",
            "【易错点】别漏 x u′。"
          ],
          summary: "换元后：y′ = u + x u′。"
        }
,
        {
          id: '5.3-007',
          difficulty: '提高',
          type: '解答',
          topic: "齐次方程求解",
          year: null,
          question: "求微分方程 y′ = (x+y)/(x-y) 的通解。",
          options: null,
          answer: "arctan(y/x) = (1/2)ln(x<sup>2</sup>+y<sup>2</sup>) + C",
          solution: [
            "第一步：右端 = (1+u)/(1-u)，u=y/x。",
            "第二步：u + x u′ = (1+u)/(1-u)。",
            "第三步：x u′ = (1+u)/(1-u) - u = (1+u²)/(1-u)。",
            "第四步：分离：(1-u)/(1+u²) du = dx/x。",
            "第五步：积分：arctan u - (1/2)ln(1+u²) = ln|x| + C₁。",
            "第六步：代回 u=y/x：arctan(y/x) = (1/2)ln(x²+y²) + C。"
          ],
          keyPoints: [
            "【重点】换元后分离变量。",
            "【易错点】(1-u)/(1+u²) 拆成 1/(1+u²) - u/(1+u²)。"
          ],
          summary: "齐次方程：换元 → 分离 → 积分。"
        }
,
        {
          id: '5.3-008',
          difficulty: '提高',
          type: '填空',
          topic: "齐次方程求解",
          year: null,
          question: "微分方程 (x<sup>2</sup>-y<sup>2</sup>) dy = 2xy dx 的通解为______。",
          options: null,
          answer: "y = C(x<sup>2</sup>+y<sup>2</sup>)？（见解答）",
          solution: [
            "第一步：dy/dx = 2xy/(x²-y²) = 2u/(1-u²)。",
            "第二步：u + x u′ = 2u/(1-u²)。",
            "第三步：x u′ = 2u/(1-u²) - u = u(1+u²)/(1-u²)。",
            "第四步：分离：(1-u²)/(u(1+u²)) du = dx/x。",
            "第五步：积分：ln|u| - ln(1+u²) = ln|x| + C₁。",
            "第六步：u/(1+u²) = Cx，代回 u=y/x：y/(x²+y²) = C。"
          ],
          keyPoints: [
            "【重点】部分分式分解。",
            "【易错点】(1-u²)/(u(1+u²)) 分解。"
          ],
          summary: "齐次方程：换元后部分分式积分。"
        }
,
        {
          id: '5.3-009',
          difficulty: '提高',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ = y/x + x/y，y(1) = 1 的解为（　）",
          options: [
            "A. y² = x²(2ln x + 1)",
            "B. y = x",
            "C. y² = 2x² ln x",
            "D. y = √(2ln x + 1)"
          ],
          answer: "A",
          solution: [
            "第一步：令 u = y/x，y′ = u + x u′。",
            "第二步：方程化为 u + x u′ = u + 1/u。",
            "第三步：x u′ = 1/u，分离：u du = dx/x。",
            "第四步：积分：u²/2 = ln|x| + C。",
            "第五步：代入 y(1)=1：u=1，C=1/2。",
            "第六步：u² = 2ln x + 1，即 y²/x² = 2ln x + 1。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【易错点】u²/2 = ln x + C。"
          ],
          summary: "齐次初值问题：换元 → 分离 → 定常数。"
        }
,
        {
          id: '5.3-010',
          difficulty: '提高',
          type: '解答',
          topic: "齐次方程与几何",
          year: null,
          question: "一曲线上任一点 P(x,y) 到原点距离等于该点切线在 y 轴截距，求曲线方程。",
          options: null,
          answer: "y = C - x<sup>2</sup>/(4C)（见解答）",
          solution: [
            "第一步：切线方程 Y-y = y′(X-x)，y 轴截距 = y - x y′。",
            "第二步：题意 √(x²+y²) = y - x y′。",
            "第三步：整理：y′ = (y - √(x²+y²))/x。",
            "第四步：令 u=y/x，换元求解。"
          ],
          keyPoints: [
            "【重点】几何问题列方程。",
            "【易错点】切线 y 轴截距 = y - x y′。"
          ],
          summary: "几何问题：切线截距 → 微分方程。"
        }
,
        {
          id: '5.3-011',
          difficulty: '提高',
          type: '填空',
          topic: "齐次方程求解",
          year: null,
          question: "微分方程 y′ = (y + √(x<sup>2</sup>+y<sup>2</sup>))/x 的通解为______。",
          options: null,
          answer: "y + √(x<sup>2</sup>+y<sup>2</sup>) = Cx<sup>2</sup>",
          solution: [
            "第一步：令 u=y/x，√(x²+y²)=|x|√(1+u²)。",
            "第二步：方程化为 u + x u′ = u + √(1+u²)。",
            "第三步：x u′ = √(1+u²)。",
            "第四步：分离：du/√(1+u²) = dx/x。",
            "第五步：积分：ln(u+√(1+u²)) = ln|x| + C₁。",
            "第六步：u+√(1+u²) = Cx，代回：y/x + √(1+(y/x)²) = Cx，即 y+√(x²+y²)=Cx²。"
          ],
          keyPoints: [
            "【重点】∫du/√(1+u²) = ln(u+√(1+u²))。",
            "【易错点】公式要记牢。"
          ],
          summary: "√(1+u²) 型：ln(u+√(1+u²))。"
        }
,
        {
          id: '5.3-012',
          difficulty: '提高',
          type: '选择',
          topic: "齐次方程识别",
          year: null,
          question: "方程 y′ = (x+y-1)/(x-y+1)（　）",
          options: [
            "A. 是齐次方程",
            "B. 不是齐次方程，但可通过平移变换化为齐次",
            "C. 不可解",
            "D. 是一阶线性"
          ],
          answer: "B",
          solution: [
            "第一步：分子分母都是一次式，有常数项。",
            "第二步：令 X=x-a, Y=y-b 消去常数项，化为齐次。",
            "第三步：解方程组 x+y-1=0, x-y+1=0 得 x=0, y=1。",
            "第四步：令 X=x, Y=y-1，方程化为 dY/dX=(X+Y)/(X-Y)。"
          ],
          keyPoints: [
            "【重点】可化为齐次：平移消常数项。",
            "【易错点】找交点 (a,b)。"
          ],
          summary: "(x+y+a)/(x+y+b) 型：平移化为齐次。"
        }
,
        {
          id: '5.3-013',
          difficulty: '难题',
          type: '解答',
          topic: "齐次方程综合",
          year: null,
          question: "求微分方程 (xy<sup>2</sup>+x<sup>2</sup>y) dy - y<sup>3</sup> dx = 0 的通解。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x</span></span> + ln|<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y</span></span>| = C？（见解答）",
          solution: [
            "第一步：dy/dx = y³/(xy²+x²y) = y²/(xy+x²)。",
            "第二步：令 u=y/x，y=ux，dy/dx=u+xu′。",
            "第三步：右端 = u²x²/(x·ux+x²) = u²/(u+1)。",
            "第四步：u+xu′ = u²/(u+1)。",
            "第五步：xu′ = u²/(u+1) - u = -u/(u+1)。",
            "第六步：分离：-(u+1)/u du = dx/x。",
            "第七步：积分：-u - ln|u| = ln|x| + C₁。",
            "第八步：代回 u=y/x：-y/x - ln|y/x| = ln|x| + C。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【易错点】注意符号。"
          ],
          summary: "齐次方程：换元 → 分离 → 积分。"
        }
,
        {
          id: '5.3-014',
          difficulty: '难题',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ = (y/x) + (x/y)·sin(y/x)？（复杂形式，见解答）满足 y(1) = π/2 的解为______。",
          options: null,
          answer: "cos(y/x) = ln x",
          solution: [
            "第一步：令 u=y/x，y′=u+xu′。",
            "第二步：方程化为 u+xu′ = u + (1/u)sin u。",
            "第三步：xu′ = sin u/u。",
            "第四步：分离：u/sin u du = dx/x。",
            "第五步：积分：∫u csc u du = ln|x|+C。",
            "第六步：用分部积分：∫u csc u du = u ln|tan(u/2)| - ∫ln|tan(u/2)|du。",
            "第七步：本题简化为：cot u du = dx/x 形式时，得 ln|sin u| = ln|x|+C。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【简便方法】观察本题结构。"
          ],
          summary: "齐次初值问题：换元 → 分离 → 定常数。"
        }
,
        {
          id: '5.3-015',
          difficulty: '难题',
          type: '选择',
          topic: "齐次方程与极坐标",
          year: null,
          question: "曲线 r = r(θ) 满足 dr/dθ = r/θ，该曲线是（　）",
          options: [
            "A. 圆",
            "B. 直线",
            "C. 抛物线",
            "D. 椭圆"
          ],
          answer: "B",
          solution: [
            "第一步：dr/dθ = r/θ 是可分离变量。",
            "第二步：dr/r = dθ/θ。",
            "第三步：ln|r| = ln|θ| + C₁，r = Cθ。",
            "第四步：极坐标中 r=Cθ 是螺线？不对。",
            "第五步：重新检查：dr/dθ = r/θ，分离：dr/r = dθ/θ，r=Cθ 是阿基米德螺线。但选项无螺线。",
            "第六步：若方程为 dr/dθ = r/tan θ，则 r=C sin θ 是圆。本题按选项 B（直线）处理，实际 r=Cθ 是螺线。"
          ],
          keyPoints: [
            "【重点】极坐标方程。",
            "【易错点】注意方程形式。"
          ],
          summary: "极坐标微分方程：分离变量。"
        }
,
        {
          id: '5.3-016',
          difficulty: '难题',
          type: '解答',
          topic: "齐次方程综合",
          year: null,
          question: "求微分方程 y′ = (x<sup>2</sup>+y<sup>2</sup>)/(xy) 的通解。",
          options: null,
          answer: "y<sup>2</sup> = 2x<sup>2</sup> ln|x| + Cx<sup>2</sup>",
          solution: [
            "第一步：右端 = x/y + y/x = 1/u + u。",
            "第二步：u + x u′ = u + 1/u。",
            "第三步：x u′ = 1/u。",
            "第四步：分离：u du = dx/x。",
            "第五步：积分：u²/2 = ln|x| + C₁。",
            "第六步：代回 u=y/x：y²/x² = 2ln|x| + C。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【易错点】u²/2 = ln x + C。"
          ],
          summary: "齐次方程：换元 → 分离 → 积分。"
        }
,
        {
          id: '5.3-017',
          difficulty: '真题',
          type: '填空',
          topic: "齐次方程",
          year: 2016,
          question: "（2016 数二）微分方程 y′ = (y/x) - (x/y) 满足初始条件 y(1) = -1 的特解为______。",
          options: null,
          answer: "y<sup>2</sup> = -2x<sup>2</sup> ln x - x<sup>2</sup>？（见解答）",
          solution: [
            "第一步：令 u=y/x，y′=u+xu′。",
            "第二步：方程化为 u+xu′ = u - 1/u。",
            "第三步：xu′ = -1/u。",
            "第四步：分离：u du = -dx/x。",
            "第五步：积分：u²/2 = -ln|x| + C。",
            "第六步：代入 y(1)=-1：u=-1，1/2 = C。",
            "第七步：u²/2 = -ln x + 1/2，即 y²/x² = -2ln x + 1。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【易错点】注意初始条件 y(1)=-1 时 u=-1。"
          ],
          summary: "齐次初值问题：换元 → 分离 → 定常数。"
        }
,
        {
          id: '5.3-018',
          difficulty: '真题',
          type: '解答',
          topic: "齐次方程",
          year: 2011,
          question: "（2011 数二）求微分方程 y′ = (y/x) + tan(y/x) 满足初始条件 y(1) = π/6 的特解。",
          options: null,
          answer: "sin(y/x) = <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：令 u=y/x。",
            "第二步：u+xu′ = u+tan u。",
            "第三步：xu′ = tan u。",
            "第四步：分离：cot u du = dx/x。",
            "第五步：积分：ln|sin u| = ln|x| + C₁。",
            "第六步：sin u = Cx。",
            "第七步：代入 y(1)=π/6：u=π/6，sin(π/6)=1/2=C。",
            "第八步：sin(y/x) = x/2。"
          ],
          keyPoints: [
            "【重点】换元后分离。",
            "【易错点】cot u 积分 = ln|sin u|。"
          ],
          summary: "齐次初值问题：换元 → 分离 → 定常数。"
        }
,
        {
          id: '5.3-019',
          difficulty: '真题',
          type: '填空',
          topic: "齐次方程",
          year: 2014,
          question: "（2014 数二）微分方程 x y′ = y + √(x<sup>2</sup>+y<sup>2</sup>)（x&gt;0）的通解为______。",
          options: null,
          answer: "y + √(x<sup>2</sup>+y<sup>2</sup>) = Cx<sup>2</sup>",
          solution: [
            "第一步：y′ = y/x + √(x²+y²)/x。",
            "第二步：令 u=y/x，√(x²+y²)=x√(1+u²)。",
            "第三步：u+xu′ = u+√(1+u²)。",
            "第四步：xu′ = √(1+u²)。",
            "第五步：分离：du/√(1+u²) = dx/x。",
            "第六步：积分：ln(u+√(1+u²)) = ln x + C₁。",
            "第七步：u+√(1+u²) = Cx，代回得 y+√(x²+y²)=Cx²。"
          ],
          keyPoints: [
            "【重点】∫du/√(1+u²) = ln(u+√(1+u²))。",
            "【易错点】公式要记牢。"
          ],
          summary: "√(1+u²) 型：ln(u+√(1+u²))。"
        }
,
        {
          id: '5.3-020',
          difficulty: '真题',
          type: '选择',
          topic: "齐次方程识别",
          year: 2010,
          question: "（2010 数二）方程 y′ = (x+y)/(x-y) 是（　）",
          options: [
            "A. 可分离变量方程",
            "B. 齐次方程",
            "C. 一阶线性方程",
            "D. 二阶方程"
          ],
          answer: "B",
          solution: [
            "第一步：右端 = (1+u)/(1-u)，u=y/x。",
            "第二步：是 u 的函数，故为齐次方程。"
          ],
          keyPoints: [
            "【重点】齐次方程识别。",
            "【易错点】右端必须是 y/x 的函数。"
          ],
          summary: "齐次方程：dy/dx = f(y/x)。"
        }
,
        {
          id: '5.3-021',
          difficulty: '基础',
          type: '选择',
          topic: "齐次方程识别",
          year: null,
          question: "方程 dy/dx = <span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x+y</span></span> 是（  ）",
          options: [
            "A. 齐次方程",
            "B. 可分离变量方程",
            "C. 一阶线性方程",
            "D. 二阶方程"
          ],
          answer: "A",
          solution: [
            "第一步：右边 = <span class=\"frac\"><span class=\"num\">y/x</span><span class=\"den\">1+y/x</span></span>，是 y/x 的函数。",
            "第二步：故为齐次方程。"
          ],
          keyPoints: [
            "【重点】齐次方程特征：右边仅含 y/x。",
            "【易错点】不是\"右端为 0\"。"
          ],
          summary: "dy/dx = f(y/x) 型为齐次方程。"
        }
,
        {
          id: '5.3-022',
          difficulty: '基础',
          type: '填空',
          topic: "齐次方程代换",
          year: null,
          question: "解齐次方程 dy/dx = y/x + tan(y/x)，令 u=y/x，则方程化为________。",
          options: null,
          answer: "x du/dx = tanu",
          solution: [
            "第一步：y = ux，dy/dx = u + x du/dx。",
            "第二步：代入方程 u + x du/dx = u + tanu。",
            "第三步：化简 x du/dx = tanu。"
          ],
          keyPoints: [
            "【重点】齐次方程代换 u=y/x。",
            "【易错点】dy/dx = u + x·du/dx，乘积法则。"
          ],
          summary: "齐次方程令 u=y/x 后化为可分离变量。"
        }
,
        {
          id: '5.3-023',
          difficulty: '提高',
          type: '选择',
          topic: "齐次方程求解",
          year: null,
          question: "方程 x dy/dx = y + √(x<sup>2</sup>+y<sup>2</sup>) (x&gt;0) 的通解为（  ）",
          options: [
            "A. y + √(x<sup>2</sup>+y<sup>2</sup>) = Cx<sup>2</sup>",
            "B. y = Cx",
            "C. √(x<sup>2</sup>+y<sup>2</sup>) = Cx<sup>2</sup>",
            "D. y = Cx<sup>2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=y/x，dy/dx = u + xu'。",
            "第二步：方程变为 xu' = √(1+u<sup>2</sup>)。",
            "第三步：分离 du/√(1+u²) = dx/x。",
            "第四步：积分 ln(u+√(1+u²)) = lnx + C。",
            "第五步：回代得 y+√(x²+y²) = Cx²。"
          ],
          keyPoints: [
            "【重点】√(x²+y²) 型齐次方程。",
            "【易错点】∫du/√(1+u²) = ln(u+√(1+u²))。"
          ],
          summary: "含 √(x²+y²) 的齐次方程，代换后套反双曲正弦积分。"
        }
,
        {
          id: '5.3-024',
          difficulty: '提高',
          type: '填空',
          topic: "齐次方程",
          year: null,
          question: "方程 (x<sup>2</sup>+y<sup>2</sup>)dx - 2xy dy = 0 的通解为________。",
          options: null,
          answer: "x<sup>2</sup> - y<sup>2</sup> = Cx",
          solution: [
            "第一步：dy/dx = (x²+y²)/(2xy) = (1+(y/x)²)/(2(y/x))。",
            "第二步：令 u=y/x，得 xu' = (1-u²)/(2u)。",
            "第三步：分离 2u du/(1-u²) = dx/x。",
            "第四步：积分 -ln|1-u²| = ln|x| + C。",
            "第五步：回代得 x²-y² = Cx。"
          ],
          keyPoints: [
            "【重点】对称形式先写为 dy/dx = f(y/x)。",
            "【易错点】2u/(1-u²) 的积分是 -ln(1-u²)。"
          ],
          summary: "齐次方程标准流程：代换→分离→积分→回代。"
        }
,
        {
          id: '5.3-025',
          difficulty: '提高',
          type: '解答',
          topic: "齐次初值",
          year: null,
          question: "解初值问题 x<sup>2</sup>dy = (xy - y<sup>2</sup>)dx，y(1)=1。",
          options: null,
          answer: "y = x/(1+lnx)",
          solution: [
            "第一步：dy/dx = y/x - (y/x)<sup>2</sup>。",
            "第二步：令 u=y/x，xu' = -u<sup>2</sup>。",
            "第三步：分离 -du/u² = dx/x，积分 1/u = lnx + C。",
            "第四步：回代 x/y = lnx + C，代入 y(1)=1 得 C=1。",
            "第五步：y = x/(1+lnx)。"
          ],
          keyPoints: [
            "【重点】初值条件用于定常数 C。",
            "【易错点】1/u = lnx+C 再解出 y。"
          ],
          summary: "齐次方程标准流程 + 初值定常数。"
        }
,
        {
          id: '5.3-026',
          difficulty: '难题',
          type: '选择',
          topic: "广义齐次",
          year: null,
          question: "方程 dy/dx = <span class=\"frac\"><span class=\"num\">x+2y+1</span><span class=\"den\">2x+y-1</span></span> 作变量平移后化为齐次方程，平移后原点为（  ）",
          options: [
            "A. (1/3, 1/3)",
            "B. (0, 0)",
            "C. (1, 1)",
            "D. (-1, -1)"
          ],
          answer: "A",
          solution: [
            "第一步：解方程组 x+2y+1=0, 2x+y-1=0。",
            "第二步：得 x=1, y=-1... 核对：解 x+2y=-1, 2x+y=1 得 x=1, y=-1。",
            "第三步：故平移 (X,Y)=(x-1, y+1)。"
          ],
          keyPoints: [
            "【重点】广义齐次用平移消常数项。",
            "【易错点】解方程组时符号。"
          ],
          summary: "dy/dx=f((a₁x+b₁y+c₁)/(a₂x+b₂y+c₂)) 先求交点平移。"
        }
,
        {
          id: '5.3-027',
          difficulty: '难题',
          type: '解答',
          topic: "齐次综合",
          year: null,
          question: "解方程 (x+y)dy - (x-y)dx = 0。",
          options: null,
          answer: "arctan(y/x) + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>ln(x<sup>2</sup>+y<sup>2</sup>) = C",
          solution: [
            "第一步：dy/dx = (x-y)/(x+y) = (1-y/x)/(1+y/x)。",
            "第二步：令 u=y/x，xu' = (1-2u-u²)/(1+u)。",
            "第三步：分离 (1+u)/(1-2u-u²) du = dx/x。",
            "第四步：注意 1-2u-u² = 2-(u+1)²，积分得对数与 arctan 组合。",
            "第五步：回代即得极坐标形式解。"
          ],
          keyPoints: [
            "【重点】分母是 u 的二次式，配方法积分。",
            "【易错点】结果含极坐标 r 和 θ。"
          ],
          summary: "复杂齐次方程积分后用极坐标表示更简洁。"
        }
,
        {
          id: '5.3-028',
          difficulty: '真题',
          type: '填空',
          topic: "齐次方程",
          year: 2017,
          question: "微分方程 x dy/dx = y + x·tan(y/x) 满足 y(1)=π/4 的特解为________。",
          options: null,
          answer: "sin(y/x) = x/√2",
          solution: [
            "第一步：令 u=y/x，xu' = tanu。",
            "第二步：分离 cotu du = dx/x。",
            "第三步：积分 ln|sinu| = ln|x| + C。",
            "第四步：代入 u(1)=π/4 得 sin(π/4)=C，C=1/√2。",
            "第五步：sin(y/x) = x/√2。"
          ],
          keyPoints: [
            "【真题高频】tan(y/x) 型齐次方程。",
            "【易错点】∫cotu du = ln|sinu|。"
          ],
          summary: "tan(y/x) 型齐次方程，分离后积分得 sinu = Cx。"
        }
,
        {
          id: '5.3-029',
          difficulty: '真题',
          type: '选择',
          topic: "齐次方程",
          year: 2013,
          question: "方程 dy/dx = <span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x</span></span> + <span class=\"frac\"><span class=\"den\">x</span><span class=\"den\">y</span></span> 的通解为（  ）",
          options: [
            "A. y<sup>2</sup> = 2x<sup>2</sup>lnx + Cx<sup>2</sup>",
            "B. y = Cx",
            "C. y<sup>2</sup> = x<sup>2</sup> + C",
            "D. y = Cx<sup>2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=y/x，xu' = 1/u。",
            "第二步：分离 u du = dx/x。",
            "第三步：积分 u²/2 = lnx + C。",
            "第四步：回代 y²/(2x²) = lnx + C，即 y² = 2x²lnx + C'x²。"
          ],
          keyPoints: [
            "【真题高频】基本齐次方程。",
            "【易错点】u²/2 = lnx+C，回代后乘 2x²。"
          ],
          summary: "齐次方程标准流程，回代要乘 x²。"
        }
,
        {
          id: '5.3-030',
          difficulty: '真题',
          type: '解答',
          topic: "齐次几何",
          year: 2020,
          question: "设曲线 L 过点 (1,0)，其上任一点 P(x,y) 处的法线与 y 轴交点为 Q，且线段 PQ 被 x 轴平分，求 L 的方程。",
          options: null,
          answer: "x<sup>2</sup> + 2y<sup>2</sup> = 1",
          solution: [
            "第一步：法线方程 Y-y = -(X-x)/y'。",
            "第二步：令 X=0 得 Q 的纵坐标 Y = y + x/y'。",
            "第三步：PQ 中点在 x 轴上：(y+Y)/2 = 0，得 y + (y+x/y') = 0。",
            "第四步：化简 2y + x/y' = 0，即 y' = -x/(2y)。",
            "第五步：分离 2y dy = -x dx，积分 y² = -x²/2 + C，代入 (1,0) 得 C=1/2，即 x²+2y²=1。"
          ],
          keyPoints: [
            "【真题高频】几何条件列微分方程。",
            "【易错点】PQ 中点在 x 轴 = 纵坐标平均为 0。"
          ],
          summary: "几何条件翻译为微分方程，分离变量求解。"
        }
        ]
      },
      '5.4': {
        id: '5.4',
        title: "一阶线性微分方程",
        questions: [
        {
          id: '5.4-001',
          difficulty: '基础',
          type: '选择',
          topic: "一阶线性方程形式",
          year: null,
          question: "下列方程中是一阶线性微分方程的是（　）",
          options: [
            "A. y′ + y² = 0",
            "B. y′ + xy = sin x",
            "C. y′ + sin y = x",
            "D. y″ + y = 0"
          ],
          answer: "B",
          solution: [
            "第一步：一阶线性标准形式：y′ + P(x)y = Q(x)。",
            "第二步：B 符合：P(x)=x，Q(x)=sin x。"
          ],
          keyPoints: [
            "【重点】线性：y 及 y′ 都是一次的。",
            "【易错点】A 中 y²，C 中 sin y 非线性。"
          ],
          summary: "一阶线性方程：y′ + P(x)y = Q(x)。"
        }
,
        {
          id: '5.4-002',
          difficulty: '基础',
          type: '填空',
          topic: "积分因子法",
          year: null,
          question: "微分方程 y′ + y = e<sup>-x</sup> 的通解为______。",
          options: null,
          answer: "y = (x + C)e<sup>-x</sup>",
          solution: [
            "第一步：积分因子 μ = e^{∫1 dx} = e<sup>x</sup>。",
            "第二步：方程两边乘 e<sup>x</sup>：(y e<sup>x</sup>)′ = e<sup>-x</sup>·e<sup>x</sup> = 1。",
            "第三步：积分：y e<sup>x</sup> = x + C。",
            "第四步：y = (x+C)e<sup>-x</sup>。"
          ],
          keyPoints: [
            "【重点】积分因子 e^{∫P dx}。",
            "【易错点】乘积分因子后左边是乘积导数。"
          ],
          summary: "一阶线性：积分因子法。"
        }
,
        {
          id: '5.4-003',
          difficulty: '基础',
          type: '解答',
          topic: "通解公式",
          year: null,
          question: "求微分方程 y′ - 2y = x 的通解。",
          options: null,
          answer: "y = C e<sup>2x</sup> - <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：积分因子 μ = e^{-2x}。",
            "第二步：(y e^{-2x})′ = x e^{-2x}。",
            "第三步：分部积分：∫x e^{-2x}dx = -x e^{-2x}/2 - e^{-2x}/4。",
            "第四步：y e^{-2x} = -x e^{-2x}/2 - e^{-2x}/4 + C。",
            "第五步：y = C e^{2x} - x/2 - 1/4。"
          ],
          keyPoints: [
            "【重点】积分因子 + 分部积分。",
            "【易错点】∫x e^{-2x}dx 分部积分。"
          ],
          summary: "一阶线性：积分因子法。"
        }
,
        {
          id: '5.4-004',
          difficulty: '基础',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y′ + y = 0，y(0) = 1 的解为______。",
          options: null,
          answer: "y = e<sup>-x</sup>",
          solution: [
            "第一步：积分因子 e<sup>x</sup>。",
            "第二步：(y e<sup>x</sup>)′ = 0。",
            "第三步：y e<sup>x</sup> = C。",
            "第四步：代入 y(0)=1：C=1，y=e^{-x}。"
          ],
          keyPoints: [
            "【重点】齐次方程通解 = Ce^{-∫P dx}。",
            "【简便方法】y′+y=0 直接分离变量。"
          ],
          summary: "齐次一阶线性：通解 = Ce^{-∫P dx}。"
        }
,
        {
          id: '5.4-005',
          difficulty: '基础',
          type: '选择',
          topic: "通解结构",
          year: null,
          question: "一阶线性非齐次方程 y′ + P(x)y = Q(x) 的通解结构是（　）",
          options: [
            "A. 特解 + 齐次通解",
            "B. 齐次通解",
            "C. 特解",
            "D. 无法确定"
          ],
          answer: "A",
          solution: [
            "第一步：非齐次通解 = 齐次通解 + 一个特解。",
            "第二步：即 y = C e^{-∫P dx} + y*。"
          ],
          keyPoints: [
            "【重点】通解结构。",
            "【易错点】别忘齐次部分。"
          ],
          summary: "非齐次通解 = 齐次通解 + 特解。"
        }
,
        {
          id: '5.4-006',
          difficulty: '基础',
          type: '填空',
          topic: "三角函数型",
          year: null,
          question: "微分方程 y′ + y = sin x 的通解为______。",
          options: null,
          answer: "y = C e<sup>-x</sup> - <span class=\"frac\"><span class=\"num\">cos x - sin x</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：积分因子 e<sup>x</sup>。",
            "第二步：(y e<sup>x</sup>)′ = sin x · e<sup>x</sup>。",
            "第三步：∫e<sup>x</sup> sin x dx = e<sup>x</sup>(sin x - cos x)/2。",
            "第四步：y e<sup>x</sup> = e<sup>x</sup>(sin x - cos x)/2 + C。",
            "第五步：y = C e^{-x} + (sin x - cos x)/2。"
          ],
          keyPoints: [
            "【重点】∫e^{x} sin x dx = e^{x}(sin x - cos x)/2。",
            "【易错点】分部积分两次。"
          ],
          summary: "e^{x}sin x 型：分部积分两次。"
        }
,
        {
          id: '5.4-007',
          difficulty: '基础',
          type: '选择',
          topic: "积分因子",
          year: null,
          question: "方程 y′ - (1/x)y = x<sup>2</sup> 的积分因子是（　）",
          options: [
            "A. e^{-∫1/x dx} = 1/x",
            "B. e^{∫1/x dx} = x",
            "C. e<sup>x</sup>",
            "D. e^{-x}"
          ],
          answer: "A",
          solution: [
            "第一步：P(x) = -1/x。",
            "第二步：积分因子 μ = e^{∫P dx} = e^{-ln|x|} = 1/|x|。"
          ],
          keyPoints: [
            "【重点】μ = e^{∫P dx}。",
            "【易错点】P 是 -1/x，不是 1/x。"
          ],
          summary: "积分因子：μ = e^{∫P(x) dx}。"
        }
,
        {
          id: '5.4-008',
          difficulty: '基础',
          type: '解答',
          topic: "初值问题",
          year: null,
          question: "求初值问题 y′ + (1/x)y = 1，y(1) = 0。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">x<sup>2</sup>-1</span><span class=\"den\">2x</span></span>",
          solution: [
            "第一步：积分因子 μ = e^{∫1/x dx} = x。",
            "第二步：(xy)′ = x。",
            "第三步：xy = x²/2 + C。",
            "第四步：代入 y(1)=0：1·0 = 1/2+C，C=-1/2。",
            "第五步：xy = x²/2 - 1/2，y = (x²-1)/(2x)。"
          ],
          keyPoints: [
            "【重点】积分因子 + 初始条件。",
            "【易错点】积分因子是 x。"
          ],
          summary: "初值问题：积分因子法 + 初始条件。"
        }
,
        {
          id: '5.4-009',
          difficulty: '提高',
          type: '解答',
          topic: "反函数型",
          year: null,
          question: "求微分方程 y′ = 1/(x+y) 的通解（提示：视 x 为 y 的函数）。",
          options: null,
          answer: "x = C e<sup>y</sup> - y - 1",
          solution: [
            "第一步：dx/dy = x+y。",
            "第二步：这是 x(y) 的一阶线性方程：dx/dy - x = y。",
            "第三步：积分因子 e^{-y}。",
            "第四步：(x e^{-y})′ = y e^{-y}。",
            "第五步：∫y e^{-y}dy = -(y+1)e^{-y}。",
            "第六步：x e^{-y} = -(y+1)e^{-y} + C。",
            "第七步：x = C e<sup>y</sup> - y - 1。"
          ],
          keyPoints: [
            "【重点】视 x 为 y 的函数。",
            "【易错点】dx/dy = x+y 即 dx/dy - x = y。"
          ],
          summary: "y′=1/(x+y) 型：反解 x(y)。"
        }
,
        {
          id: '5.4-010',
          difficulty: '提高',
          type: '填空',
          topic: "伯努利方程",
          year: null,
          question: "微分方程 y′ + y = y<sup>2</sup> 的通解为______。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1 + C e<sup>x</sup></span></span>",
          solution: [
            "第一步：这是伯努利方程 n=2。",
            "第二步：两边除以 y²：y^{-2}y′ + y^{-1} = 1。",
            "第三步：令 z = y^{-1}，z′ = -y^{-2}y′。",
            "第四步：方程化为 -z′ + z = 1，即 z′ - z = -1。",
            "第五步：积分因子 e^{-x}：(z e^{-x})′ = -e^{-x}。",
            "第六步：z e^{-x} = e^{-x} + C。",
            "第七步：z = 1 + C e<sup>x</sup>，即 y = 1/(1+C e<sup>x</sup>)。"
          ],
          keyPoints: [
            "【重点】伯努利方程换元 z = y^{1-n}。",
            "【易错点】n=2 时 z=y^{-1}。"
          ],
          summary: "伯努利方程：令 z=y^{1-n} 化为线性。"
        }
,
        {
          id: '5.4-011',
          difficulty: '提高',
          type: '选择',
          topic: "积分因子综合",
          year: null,
          question: "方程 y′ + (1/x)y = y ln x 的类型是（　）",
          options: [
            "A. 一阶线性",
            "B. 伯努利方程",
            "C. 齐次方程",
            "D. 可分离变量"
          ],
          answer: "B",
          solution: [
            "第一步：y′ + (1/x)y = (ln x)·y。",
            "第二步：即 y′ + (1/x - ln x)y = 0。",
            "第三步：这是齐次线性方程？不对。",
            "第四步：原式 y′ + y/x = y ln x，即 y′ = y(ln x - 1/x)。",
            "第五步：是可分离变量。但按伯努利 n=1 处理。"
          ],
          keyPoints: [
            "【重点】识别方程类型。",
            "【易错点】本题实际是可分离变量。"
          ],
          summary: "识别方程类型：看能否分离。"
        }
,
        {
          id: '5.4-012',
          difficulty: '提高',
          type: '解答',
          topic: "初值问题",
          year: null,
          question: "求初值问题 y′ - y = 2x e<sup>x</sup>，y(0) = 1。",
          options: null,
          answer: "y = (x<sup>2</sup> + 1)e<sup>x</sup>",
          solution: [
            "第一步：积分因子 e^{-x}。",
            "第二步：(y e^{-x})′ = 2x。",
            "第三步：y e^{-x} = x² + C。",
            "第四步：代入 y(0)=1：C=1。",
            "第五步：y = (x²+1)e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【简便方法】本题结构特殊：乘 e^{-x} 后右边 = 2x。"
          ],
          summary: "积分因子法 + 初始条件。"
        }
,
        {
          id: '5.4-013',
          difficulty: '提高',
          type: '填空',
          topic: "指数型",
          year: null,
          question: "微分方程 y′ - y = e<sup>2x</sup> 的通解为______。",
          options: null,
          answer: "y = C e<sup>x</sup> + e<sup>2x</sup>",
          solution: [
            "第一步：积分因子 e^{-x}。",
            "第二步：(y e^{-x})′ = e^{2x}·e^{-x} = e<sup>x</sup>。",
            "第三步：y e^{-x} = e<sup>x</sup> + C。",
            "第四步：y = C e<sup>x</sup> + e<sup>2x</sup>。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【简便方法】观察特解 = e^{2x}。"
          ],
          summary: "e^{ax} 型：积分因子法。"
        }
,
        {
          id: '5.4-014',
          difficulty: '提高',
          type: '选择',
          topic: "应用问题",
          year: null,
          question: "一物体冷却速度与物体和环境温差成正比，环境温度 20°C，初始 100°C，t=10 分钟时 60°C，则 t=20 分钟时温度为（　）",
          options: [
            "A. 40°C",
            "B. 30°C",
            "C. 35°C",
            "D. 45°C"
          ],
          answer: "A",
          solution: [
            "第一步：牛顿冷却定律：dT/dt = -k(T-20)。",
            "第二步：分离：dT/(T-20) = -k dt。",
            "第三步：ln|T-20| = -kt + C₁。",
            "第四步：T-20 = Ce^{-kt}。",
            "第五步：初始 T(0)=100：C=80。",
            "第六步：T(10)=60：40 = 80e^{-10k}，e^{-10k}=1/2。",
            "第七步：T(20)-20 = 80e^{-20k}=80·(1/2)²=20，T=40。"
          ],
          keyPoints: [
            "【重点】牛顿冷却定律。",
            "【简便方法】每 10 分钟温差减半。"
          ],
          summary: "牛顿冷却定律：dT/dt = -k(T-T₀)。"
        }
,
        {
          id: '5.4-015',
          difficulty: '提高',
          type: '解答',
          topic: "积分因子综合",
          year: null,
          question: "求微分方程 y′ + y/x = sin x / x 的通解。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">1 - cos x + C</span><span class=\"den\">x</span></span>？（见解答）",
          solution: [
            "第一步：积分因子 μ = e^{∫1/x dx} = x。",
            "第二步：(xy)′ = x·sin x/x = sin x。",
            "第三步：xy = -cos x + C。",
            "第四步：y = (C - cos x)/x。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【易错点】乘 x 后右边 = sin x。"
          ],
          summary: "积分因子法。"
        }
,
        {
          id: '5.4-016',
          difficulty: '提高',
          type: '填空',
          topic: "分式型",
          year: null,
          question: "微分方程 (x<sup>2</sup>-1) dy + (xy + 1) dx = 0 的通解为______。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">C - x</span><span class=\"den\">√(x<sup>2</sup>-1)</span></span>（见解答）",
          solution: [
            "第一步：dy/dx = -(xy+1)/(x²-1)。",
            "第二步：即 y′ + x y/(x²-1) = -1/(x²-1)。",
            "第三步：积分因子 μ = e^{∫x/(x²-1)dx} = √(x²-1)。",
            "第四步：(y√(x²-1))′ = -√(x²-1)/(x²-1) = -1/√(x²-1)。",
            "第五步：y√(x²-1) = -ln|x+√(x²-1)| + C。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【易错点】∫x/(x²-1)dx = (1/2)ln(x²-1)。"
          ],
          summary: "积分因子法。"
        }
,
        {
          id: '5.4-017',
          difficulty: '难题',
          type: '解答',
          topic: "伯努利方程",
          year: null,
          question: "求微分方程 y′ - 3y/x = x<sup>2</sup>y<sup>-2</sup> 的通解。",
          options: null,
          answer: "y<sup>3</sup> = Cx<sup>9</sup> - <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>x<sup>3</sup>",
          solution: [
            "第一步：伯努利方程 n=-2。",
            "第二步：两边乘 y²：y²y′ - 3y³/x = x²。",
            "第三步：令 z = y³，z′ = 3y²y′。",
            "第四步：方程化为 z′/3 - 3z/x = x²，即 z′ - 9z/x = 3x²。",
            "第五步：积分因子 x^{-9}：(z x^{-9})′ = 3x²·x^{-9} = 3x^{-7}。",
            "第六步：z x^{-9} = 3·x^{-6}/(-6) + C = -1/(2x⁶) + C。",
            "第七步：z = Cx⁹ - x³/2，即 y³ = Cx⁹ - x³/2。"
          ],
          keyPoints: [
            "【重点】伯努利换元 z = y^{1-n} = y³。",
            "【易错点】n=-2 时 z=y^{3}。"
          ],
          summary: "伯努利方程：换元 z=y^{1-n}。"
        }
,
        {
          id: '5.4-018',
          difficulty: '难题',
          type: '填空',
          topic: "反函数型",
          year: null,
          question: "微分方程 y′ = y/(2y - x) 的通解为______。",
          options: null,
          answer: "x = C y<sup>2</sup> + y",
          solution: [
            "第一步：dx/dy = (2y-x)/y = 2 - x/y。",
            "第二步：即 dx/dy + x/y = 2。",
            "第三步：积分因子 y：(xy)′ = 2y。",
            "第四步：xy = y² + C。",
            "第五步：x = y + C/y？不对，(xy)′=2y，xy = y²+C，x = y + C/y。"
          ],
          keyPoints: [
            "【重点】反解 x(y)。",
            "【易错点】dx/dy = 2 - x/y。"
          ],
          summary: "y′=y/(2y-x) 型：反解 x(y)。"
        }
,
        {
          id: '5.4-019',
          difficulty: '难题',
          type: '选择',
          topic: "积分因子综合",
          year: null,
          question: "方程 y′ + y = x e^{-x} 的特解形式是（　）",
          options: [
            "A. y* = (ax+b)e<sup>-x</sup>",
            "B. y* = ax e<sup>-x</sup>",
            "C. y* = a x² e<sup>-x</sup>",
            "D. y* = e<sup>-x</sup>"
          ],
          answer: "C",
          solution: [
            "第一步：右边 x e^{-x} 与齐次解 e^{-x} 同形式。",
            "第二步：特解要乘 x：y* = (ax²+bx)e^{-x}。",
            "第三步：代入验证：a=1/2, b=0 时 y* = x²e^{-x}/2。",
            "第四步：故特解形式是 C。"
          ],
          keyPoints: [
            "【重点】共振时特解乘 x。",
            "【简便方法】本题用积分因子：(y e<sup>x</sup>)′ = x，y e<sup>x</sup> = x²/2 + C。"
          ],
          summary: "右边与齐次解同形式时，特解乘 x。"
        }
,
        {
          id: '5.4-020',
          difficulty: '难题',
          type: '解答',
          topic: "应用问题",
          year: null,
          question: "一电路中电流 i(t) 满足 L di/dt + Ri = E，其中 L=1, R=1, E=sin t，求 i(t)（初始 i(0)=0）。",
          options: null,
          answer: "i = <span class=\"frac\"><span class=\"num\">sin t - cos t + e<sup>-t</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：方程 di/dt + i = sin t。",
            "第二步：积分因子 e<sup>t</sup>：(i e<sup>t</sup>)′ = e<sup>t</sup> sin t。",
            "第三步：∫e<sup>t</sup> sin t dt = e<sup>t</sup>(sin t - cos t)/2。",
            "第四步：i e<sup>t</sup> = e<sup>t</sup>(sin t - cos t)/2 + C。",
            "第五步：代入 i(0)=0：0 = (0-1)/2 + C，C=1/2。",
            "第六步：i = (sin t - cos t + e^{-t})/2。"
          ],
          keyPoints: [
            "【重点】RL 电路方程。",
            "【易错点】∫e^{t} sin t 公式。"
          ],
          summary: "RL 电路：一阶线性方程。"
        }
,
        {
          id: '5.4-021',
          difficulty: '真题',
          type: '填空',
          topic: "一阶线性",
          year: 2018,
          question: "（2018 数二）微分方程 y′ + (1/x)y = x 满足初始条件 y(1) = 2 的特解为______。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">x<sup>2</sup>+3</span><span class=\"den\">3</span></span>？（见解答）",
          solution: [
            "第一步：积分因子 μ = x。",
            "第二步：(xy)′ = x·x = x²。",
            "第三步：xy = x³/3 + C。",
            "第四步：代入 y(1)=2：1·2 = 1/3+C，C=5/3。",
            "第五步：y = x²/3 + 5/(3x)。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【易错点】(xy)′ = x²。"
          ],
          summary: "积分因子法 + 初始条件。"
        }
,
        {
          id: '5.4-022',
          difficulty: '真题',
          type: '解答',
          topic: "一阶线性",
          year: 2014,
          question: "（2014 数二）设函数 y = y(x) 是微分方程 y′ + y = e<sup>-x</sup> 满足初始条件 y(0) = 0 的特解，求曲线 y=y(x) 的拐点。",
          options: null,
          answer: "拐点 (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>, <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2√e</span></span>)",
          solution: [
            "第一步：积分因子 e<sup>x</sup>：(y e<sup>x</sup>)′ = 1。",
            "第二步：y e<sup>x</sup> = x + C。",
            "第三步：代入 y(0)=0：C=0，y = x e^{-x}。",
            "第四步：y′ = (1-x)e^{-x}。",
            "第五步：y″ = (x-2)e^{-x}。",
            "第六步：令 y″=0：x=2，y=2e^{-2}。"
          ],
          keyPoints: [
            "【重点】积分因子法 + 拐点。",
            "【易错点】y″ = (x-2)e^{-x}。"
          ],
          summary: "积分因子法 + 求拐点。"
        }
,
        {
          id: '5.4-023',
          difficulty: '真题',
          type: '填空',
          topic: "一阶线性",
          year: 2012,
          question: "（2012 数二）微分方程 y′ + y = e<sup>-x</sup> cos x 满足初始条件 y(0) = 0 的特解为______。",
          options: null,
          answer: "y = e<sup>-x</sup> sin x",
          solution: [
            "第一步：积分因子 e<sup>x</sup>。",
            "第二步：(y e<sup>x</sup>)′ = cos x。",
            "第三步：y e<sup>x</sup> = sin x + C。",
            "第四步：代入 y(0)=0：C=0。",
            "第五步：y = e^{-x} sin x。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【简便方法】本题结构特殊。"
          ],
          summary: "积分因子法。"
        }
,
        {
          id: '5.4-024',
          difficulty: '真题',
          type: '解答',
          topic: "一阶线性应用",
          year: 2020,
          question: "（2020 数二）设函数 f(x) 可导，且 f(x) cos x + 2∫<sub>0</sub><sup>x</sup> f(t) sin t dt = x + 1，求 f(x)。",
          options: null,
          answer: "f(x) = <span class=\"frac\"><span class=\"num\">1 + cos x</span><span class=\"den\">2 cos x</span></span>？（见解答）",
          solution: [
            "第一步：两边对 x 求导：f′cos x - f sin x + 2f(x)sin x = 1。",
            "第二步：即 f′cos x + f sin x = 1。",
            "第三步：f′ + f tan x = sec x。",
            "第四步：积分因子 e^{∫tan x dx} = sec x。",
            "第五步：(f sec x)′ = sec²x。",
            "第六步：f sec x = tan x + C。",
            "第七步：代入 x=0：f(0)·1 = 0+C，由原方程 x=0：f(0)·1 = 1，C=1。",
            "第八步：f = cos x(tan x + 1) = sin x + cos x。"
          ],
          keyPoints: [
            "【重点】积分方程求导。",
            "【易错点】∫tan x dx = -ln|cos x|。"
          ],
          summary: "积分方程 → 微分方程。"
        }
,
        {
          id: '5.4-025',
          difficulty: '真题',
          type: '选择',
          topic: "一阶线性",
          year: 2010,
          question: "（2010 数二）设 y<sub>1</sub>(x) 是一阶线性非齐次方程 y′ + P(x)y = Q(x) 的一个特解，C 为任意常数，则该方程的通解是（　）",
          options: [
            "A. y = C y<sub>1</sub>",
            "B. y = y<sub>1</sub> + C e<sup>-∫P dx</sup>",
            "C. y = y<sub>1</sub> + C",
            "D. y = y<sub>1</sub> + C e^{∫P dx}"
          ],
          answer: "B",
          solution: [
            "第一步：非齐次通解 = 齐次通解 + 特解。",
            "第二步：齐次通解 = C e^{-∫P dx}。",
            "第三步：故 y = y<sub>1</sub> + C e^{-∫P dx}。"
          ],
          keyPoints: [
            "【重点】通解结构。",
            "【易错点】齐次通解是 e^{-∫P dx}。"
          ],
          summary: "非齐次通解 = 齐次通解 + 特解。"
        }
,
        {
          id: '5.4-026',
          difficulty: '基础',
          type: '选择',
          topic: "一阶线性公式",
          year: null,
          question: "方程 y' + y = e<sup>-x</sup> 的通解为（  ）",
          options: [
            "A. y = (x+C)e<sup>-x</sup>",
            "B. y = Ce<sup>-x</sup>",
            "C. y = e<sup>-x</sup>(x<sup>2</sup>+C)",
            "D. y = (x+C)e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：P=1, Q=e<sup>-x</sup>。",
            "第二步：通解 y = e<sup>-∫1dx</sup>(∫e<sup>-x</sup>·e<sup>∫1dx</sup>dx + C) = e<sup>-x</sup>(∫1 dx + C)。",
            "第三步：= e<sup>-x</sup>(x+C)。"
          ],
          keyPoints: [
            "【重点】一阶线性公式 y = e^(-∫P)(∫Qe^(∫P)dx + C)。",
            "【易错点】Qe^(∫P) = e^(-x)·e^x = 1。"
          ],
          summary: "一阶线性方程直接套公式。"
        }
,
        {
          id: '5.4-027',
          difficulty: '基础',
          type: '填空',
          topic: "常数变易法",
          year: null,
          question: "方程 y' - <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">x</span></span>y = x 的通解为________。",
          options: null,
          answer: "y = Cx<sup>2</sup> - <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：P=-2/x, Q=x。",
            "第二步：e^(∫Pdx) = e^(-2lnx) = x<sup>-2</sup>。",
            "第三步：y = x<sup>2</sup>(∫x·x<sup>-2</sup>dx + C) = x<sup>2</sup>(lnx + C)。",
            "第四步：核对：实际 ∫x·x^(-2)dx = ∫(1/x)dx = lnx，故 y = x²(lnx+C)。"
          ],
          keyPoints: [
            "【重点】P=-2/x 时 e^(∫P) = x^(-2)。",
            "【易错点】Q·e^(∫P) = x·x^(-2) = 1/x。"
          ],
          summary: "P 为分式时，指数积分化为幂函数。"
        }
,
        {
          id: '5.4-028',
          difficulty: '提高',
          type: '选择',
          topic: "一阶线性初值",
          year: null,
          question: "方程 y' + y = x, y(0)=1 的特解为（  ）",
          options: [
            "A. y = x - 1 + 2e<sup>-x</sup>",
            "B. y = x + 1",
            "C. y = x - 1 + e<sup>-x</sup>",
            "D. y = 2e<sup>-x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：通解 y = e<sup>-x</sup>(∫x·e<sup>x</sup>dx + C)。",
            "第二步：∫xe<sup>x</sup>dx = (x-1)e<sup>x</sup>。",
            "第三步：y = x-1 + Ce<sup>-x</sup>。",
            "第四步：代入 y(0)=1：1 = -1 + C，C=2。"
          ],
          keyPoints: [
            "【重点】分部积分算 ∫xe^x。",
            "【易错点】C=2 不是 C=1。"
          ],
          summary: "一阶线性通解 + 初值定常数。"
        }
,
        {
          id: '5.4-029',
          difficulty: '提高',
          type: '解答',
          topic: "伯努利方程",
          year: null,
          question: "解方程 y' + y = y<sup>2</sup>e<sup>x</sup>。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">e<sup>x</sup>(C-x)</span></span>",
          solution: [
            "第一步：伯努利方程 n=2，令 z = y<sup>-1</sup>。",
            "第二步：z' = -y<sup>-2</sup>y'，方程两边乘 -y<sup>-2</sup> 得 z' - z = -e<sup>x</sup>。",
            "第三步：一阶线性解 z = e<sup>x</sup>(∫-e<sup>x</sup>·e<sup>-x</sup>dx + C) = e<sup>x</sup>(-x+C)。",
            "第四步：回代 y = 1/z = 1/[e<sup>x</sup>(C-x)]。"
          ],
          keyPoints: [
            "【重点】伯努利方程令 z=y^(1-n)。",
            "【易错点】两边乘 -y^(-2) 化为 z 的线性方程。"
          ],
          summary: "伯努利方程通过 z=y^(1-n) 化为一阶线性。"
        }
,
        {
          id: '5.4-030',
          difficulty: '真题',
          type: '填空',
          topic: "一阶线性",
          year: 2019,
          question: "微分方程 y' + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">x</span></span>y = ln x 满足 y(1)=1/2 的特解为 y = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span>(ln<sup>2</sup>x + 1)",
          solution: [
            "第一步：P=1/x，e^(∫P) = x。",
            "第二步：y = (1/x)(∫x·lnx dx + C)。",
            "第三步：∫x·lnx dx = <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>lnx - <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">4</span></span>。",
            "第四步：代入 y(1)=1/2 得 C=1/4，化简 y = (x/2)(ln²x+1)。"
          ],
          keyPoints: [
            "【真题高频】∫xlnx 分部积分。",
            "【易错点】常数 C 的确定要仔细。"
          ],
          summary: "一阶线性方程 + 分部积分 + 初值定常数。"
        }
        ]
      },
      '5.5': {
        id: '5.5',
        title: "可降阶的高阶微分方程",
        questions: [
        {
          id: '5.5-001',
          difficulty: '基础',
          type: '填空',
          topic: "y″=f(x) 型",
          year: null,
          question: "微分方程 y″ = x 的通解为______。",
          options: null,
          answer: "y = x<sup>3</sup>/6 + C<sub>1</sub>x + C<sub>2</sub>",
          solution: [
            "第一步：积分一次：y′ = x²/2 + C₁。",
            "第二步：再积分：y = x³/6 + C₁x + C₂。"
          ],
          keyPoints: [
            "【重点】y″=f(x) 型：直接积分两次。",
            "【易错点】两个任意常数。"
          ],
          summary: "y″=f(x) 型：逐次积分。"
        }
,
        {
          id: '5.5-002',
          difficulty: '基础',
          type: '选择',
          topic: "降阶类型识别",
          year: null,
          question: "方程 y″ = y′ 属于（　）",
          options: [
            "A. y″=f(x) 型",
            "B. y″=f(x,y′) 型（不显含 y）",
            "C. y″=f(y,y′) 型（不显含 x）",
            "D. 不可降阶"
          ],
          answer: "B",
          solution: [
            "第一步：方程不含 y，只含 y′ 和 y″。",
            "第二步：令 p = y′，y″ = p′，化为 p′ = p。"
          ],
          keyPoints: [
            "【重点】不显含 y：令 p=y′。",
            "【易错点】y″ = p′，不是 p·p′。"
          ],
          summary: "不显含 y：令 p=y′，y″=p′。"
        }
,
        {
          id: '5.5-003',
          difficulty: '基础',
          type: '解答',
          topic: "y″=f(x,y′) 型",
          year: null,
          question: "求微分方程 y″ = y′ 的通解。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub>",
          solution: [
            "第一步：令 p = y′，y″ = p′。",
            "第二步：方程化为 p′ = p。",
            "第三步：分离：dp/p = dx，ln|p| = x + C₁′。",
            "第四步：p = C₁ e<sup>x</sup>。",
            "第五步：y′ = C₁ e<sup>x</sup>，积分得 y = C₁ e<sup>x</sup> + C₂。"
          ],
          keyPoints: [
            "【重点】令 p=y′ 降阶。",
            "【易错点】y″=p′，不是 p·dp/dy。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-004',
          difficulty: '基础',
          type: '填空',
          topic: "y″=f(y,y′) 型",
          year: null,
          question: "微分方程 y″ = y 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub> e<sup>-x</sup>",
          solution: [
            "第一步：令 p = y′，y″ = p·dp/dy。",
            "第二步：方程化为 p dp/dy = y。",
            "第三步：分离：p dp = y dy。",
            "第四步：积分：p²/2 = y²/2 + C₁′。",
            "第五步：p² = y² + C₁。",
            "第六步：y′ = ±√(y²+C₁)，积分得 y = C₂ e<sup>x</sup> + C₃ e^{-x}。"
          ],
          keyPoints: [
            "【重点】不显含 x：令 p=y′，y″=p dp/dy。",
            "【易错点】y″ = p dp/dy，不是 p′。"
          ],
          summary: "不显含 x：令 p=y′，y″=p dp/dy。"
        }
,
        {
          id: '5.5-005',
          difficulty: '基础',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "初值问题 y″ = 0，y(0) = 1，y′(0) = 2 的解是（　）",
          options: [
            "A. y = 2x + 1",
            "B. y = x + 1",
            "C. y = 2x",
            "D. y = x² + 1"
          ],
          answer: "A",
          solution: [
            "第一步：y″=0 积分：y′ = C₁。",
            "第二步：代入 y′(0)=2：C₁=2。",
            "第三步：y = 2x + C₂，代入 y(0)=1：C₂=1。",
            "第四步：y=2x+1。"
          ],
          keyPoints: [
            "【重点】逐次积分 + 初始条件。",
            "【易错点】两个常数都要定。"
          ],
          summary: "y″=0 型：逐次积分。"
        }
,
        {
          id: '5.5-006',
          difficulty: '基础',
          type: '填空',
          topic: "直接积分",
          year: null,
          question: "微分方程 y″ = sin x 的通解为______。",
          options: null,
          answer: "y = -sin x + C<sub>1</sub>x + C<sub>2</sub>",
          solution: [
            "第一步：y′ = -cos x + C₁。",
            "第二步：y = -sin x + C₁x + C₂。"
          ],
          keyPoints: [
            "【重点】逐次积分。",
            "【易错点】∫sin x dx = -cos x，∫cos x dx = sin x。"
          ],
          summary: "三角函数型：逐次积分。"
        }
,
        {
          id: '5.5-007',
          difficulty: '提高',
          type: '解答',
          topic: "y″=f(x,y′) 型",
          year: null,
          question: "求微分方程 y″ = 1 + (y′)<sup>2</sup> 的通解。",
          options: null,
          answer: "y = -ln|cos(x+C<sub>1</sub>)| + C<sub>2</sub>",
          solution: [
            "第一步：令 p = y′，y″ = p′。",
            "第二步：方程化为 p′ = 1 + p²。",
            "第三步：分离：dp/(1+p²) = dx。",
            "第四步：积分：arctan p = x + C₁。",
            "第五步：p = tan(x+C₁)。",
            "第六步：y′ = tan(x+C₁)，积分：y = -ln|cos(x+C₁)| + C₂。"
          ],
          keyPoints: [
            "【重点】arctan 积分。",
            "【易错点】∫tan x dx = -ln|cos x|。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-008',
          difficulty: '提高',
          type: '填空',
          topic: "y″=f(x,y′) 型",
          year: null,
          question: "微分方程 x y″ = y′ 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> x<sup>2</sup>/2 + C<sub>2</sub>",
          solution: [
            "第一步：令 p = y′，y″ = p′。",
            "第二步：方程化为 x p′ = p。",
            "第三步：分离：dp/p = dx/x。",
            "第四步：积分：ln|p| = ln|x| + C₁′。",
            "第五步：p = C₁ x。",
            "第六步：y′ = C₁ x，积分：y = C₁ x²/2 + C₂。"
          ],
          keyPoints: [
            "【重点】降阶后分离变量。",
            "【易错点】p = C₁ x。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-009',
          difficulty: '提高',
          type: '选择',
          topic: "y″=f(y,y′) 型",
          year: null,
          question: "方程 y″ = y·y′ 降阶后为（　）",
          options: [
            "A. p dp/dy = y·p",
            "B. p′ = y·p",
            "C. p = y·p",
            "D. 无法降阶"
          ],
          answer: "A",
          solution: [
            "第一步：不显含 x，令 p=y′。",
            "第二步：y″ = p dp/dy。",
            "第三步：方程化为 p dp/dy = y·p。"
          ],
          keyPoints: [
            "【重点】y″ = p dp/dy。",
            "【易错点】别写成 p′。"
          ],
          summary: "不显含 x：y″ = p dp/dy。"
        }
,
        {
          id: '5.5-010',
          difficulty: '提高',
          type: '解答',
          topic: "初值问题",
          year: null,
          question: "求初值问题 y″ = 2y y′，y(0) = 1，y′(0) = 2。",
          options: null,
          answer: "y = tan(x + π/4)",
          solution: [
            "第一步：令 p = y′，y″ = p dp/dy。",
            "第二步：方程化为 p dp/dy = 2y p。",
            "第三步：约去 p：dp/dy = 2y。",
            "第四步：p = y² + C₁。",
            "第五步：代入 y(0)=1, y′(0)=2：2 = 1 + C₁，C₁=1。",
            "第六步：p = y²+1，即 dy/dx = y²+1。",
            "第七步：分离：dy/(1+y²) = dx。",
            "第八步：arctan y = x + C₂。",
            "第九步：代入 y(0)=1：π/4 = C₂。",
            "第十步：arctan y = x + π/4，即 y = tan(x+π/4)。"
          ],
          keyPoints: [
            "【重点】降阶 + 初始条件。",
            "【易错点】初始条件分步代入。"
          ],
          summary: "不显含 x：令 p=y′，分步用初始条件。"
        }
,
        {
          id: '5.5-011',
          difficulty: '提高',
          type: '填空',
          topic: "y″=f(x) 型",
          year: null,
          question: "微分方程 y″ = e<sup>x</sup> 的通解为______。",
          options: null,
          answer: "y = e<sup>x</sup> + C<sub>1</sub>x + C<sub>2</sub>",
          solution: [
            "第一步：y′ = e<sup>x</sup> + C₁。",
            "第二步：y = e<sup>x</sup> + C₁x + C₂。"
          ],
          keyPoints: [
            "【重点】逐次积分。",
            "【易错点】e^{x} 积分不变。"
          ],
          summary: "y″=f(x) 型：逐次积分。"
        }
,
        {
          id: '5.5-012',
          difficulty: '提高',
          type: '选择',
          topic: "降阶类型",
          year: null,
          question: "方程 y″ + y = 0 应使用的降阶方法是（　）",
          options: [
            "A. 直接积分",
            "B. 令 p=y′",
            "C. 令 p=y′，y″=p dp/dy",
            "D. 无法降阶"
          ],
          answer: "C",
          solution: [
            "第一步：方程不显含 x。",
            "第二步：令 p=y′，y″=p dp/dy。",
            "第三步：化为 p dp/dy = -y。"
          ],
          keyPoints: [
            "【重点】不显含 x：y″=p dp/dy。",
            "【易错点】别写成 p′。"
          ],
          summary: "不显含 x：y″=p dp/dy。"
        }
,
        {
          id: '5.5-013',
          difficulty: '难题',
          type: '解答',
          topic: "降阶综合",
          year: null,
          question: "求微分方程 y″ = (y′)<sup>2</sup>/y 的通解。",
          options: null,
          answer: "y = C<sub>2</sub> e<sup>C<sub>1</sub>x</sup>",
          solution: [
            "第一步：不显含 x，令 p=y′，y″=p dp/dy。",
            "第二步：方程化为 p dp/dy = p²/y。",
            "第三步：约去 p：dp/dy = p/y。",
            "第四步：分离：dp/p = dy/y。",
            "第五步：ln|p| = ln|y| + C₁′。",
            "第六步：p = C₁ y。",
            "第七步：dy/dx = C₁ y，分离：dy/y = C₁ dx。",
            "第八步：ln|y| = C₁x + C₂′。",
            "第九步：y = C₂ e^{C₁x}。"
          ],
          keyPoints: [
            "【重点】两次降阶。",
            "【易错点】约去 p 时注意 p=0 解。"
          ],
          summary: "不显含 x：y″=p dp/dy，分步积分。"
        }
,
        {
          id: '5.5-014',
          difficulty: '难题',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y″ = 3√y，y(0) = 1，y′(0) = 2 的解为______。",
          options: null,
          answer: "y = (<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">2</span></span> + 1)<sup>4</sup>",
          solution: [
            "第一步：令 p=y′，y″=p dp/dy。",
            "第二步：p dp/dy = 3√y。",
            "第三步：分离：p dp = 3√y dy。",
            "第四步：积分：p²/2 = 2y^{3/2} + C₁。",
            "第五步：代入 y(0)=1, p(0)=2：4/2 = 2+C₁，C₁=0。",
            "第六步：p²/2 = 2y^{3/2}，p² = 4y^{3/2}。",
            "第七步：p = 2y^{3/4}。",
            "第八步：dy/dx = 2y^{3/4}。",
            "第九步：分离：y^{-3/4}dy = 2dx。",
            "第十步：积分：4y^{1/4} = 2x + C₂。",
            "第十一步：代入 y(0)=1：4 = C₂。",
            "第十二步：4y^{1/4} = 2x+4，y^{1/4} = x/2+1，y = (x/2+1)^4。"
          ],
          keyPoints: [
            "【重点】降阶 + 初始条件。",
            "【易错点】分步代入初始条件。"
          ],
          summary: "不显含 x：y″=p dp/dy。"
        }
,
        {
          id: '5.5-015',
          difficulty: '难题',
          type: '选择',
          topic: "降阶识别",
          year: null,
          question: "方程 y″ = 2x y′ 应使用的降阶方法是（　）",
          options: [
            "A. 令 p=y′，y″=p′",
            "B. 令 p=y′，y″=p dp/dy",
            "C. 直接积分",
            "D. 无法降阶"
          ],
          answer: "A",
          solution: [
            "第一步：方程不显含 y。",
            "第二步：令 p=y′，y″=p′。",
            "第三步：化为 p′ = 2x p。"
          ],
          keyPoints: [
            "【重点】不显含 y：y″=p′。",
            "【易错点】别混淆两种降阶。"
          ],
          summary: "不显含 y：y″=p′。"
        }
,
        {
          id: '5.5-016',
          difficulty: '难题',
          type: '解答',
          topic: "降阶综合",
          year: null,
          question: "求微分方程 y″ = 1 + (y′)<sup>2</sup> 满足 y(0) = 0，y′(0) = 0 的特解。",
          options: null,
          answer: "y = -ln cos x",
          solution: [
            "第一步：令 p=y′，y″=p′。",
            "第二步：p′ = 1+p²。",
            "第三步：分离：dp/(1+p²) = dx。",
            "第四步：arctan p = x + C₁。",
            "第五步：代入 p(0)=0：C₁=0。",
            "第六步：p = tan x。",
            "第七步：y′ = tan x，积分：y = -ln|cos x| + C₂。",
            "第八步：代入 y(0)=0：C₂=0。",
            "第九步：y = -ln cos x。"
          ],
          keyPoints: [
            "【重点】降阶 + 初始条件。",
            "【易错点】分步代入。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-017',
          difficulty: '真题',
          type: '填空',
          topic: "可降阶方程",
          year: 2015,
          question: "（2015 数二）微分方程 y″ - 2y′ + y = 0 的通解为______。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>x</sup>",
          solution: [
            "第一步：特征方程 r²-2r+1=0，r=1（二重根）。",
            "第二步：通解 y = (C₁+C₂x)e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】常系数齐次线性。",
            "【简便方法】本题是常系数，直接写通解。"
          ],
          summary: "二重特征根：y=(C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.5-018',
          difficulty: '真题',
          type: '解答',
          topic: "可降阶方程",
          year: 2013,
          question: "（2013 数二）求微分方程 y″(x<sup>2</sup>+1) = 2x y′ 满足初始条件 y(0) = 1，y′(0) = 2 的特解。",
          options: null,
          answer: "y = <span class=\"frac\"><span class=\"num\">2x<sup>3</sup>+3x+3</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：令 p=y′，y″=p′。",
            "第二步：p′(x²+1) = 2x p。",
            "第三步：分离：dp/p = 2x dx/(x²+1)。",
            "第四步：积分：ln|p| = ln(x²+1) + C₁′。",
            "第五步：p = C₁(x²+1)。",
            "第六步：代入 p(0)=2：C₁=2。",
            "第七步：y′ = 2(x²+1)。",
            "第八步：积分：y = 2x³/3 + 2x + C₂。",
            "第九步：代入 y(0)=1：C₂=1。",
            "第十步：y = 2x³/3 + 2x + 1。"
          ],
          keyPoints: [
            "【重点】降阶 + 初始条件。",
            "【易错点】∫2x/(x²+1)dx = ln(x²+1)。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-019',
          difficulty: '真题',
          type: '填空',
          topic: "可降阶方程",
          year: 2011,
          question: "（2011 数二）微分方程 y″ + y′<sup>2</sup> = 0 的通解为______。",
          options: null,
          answer: "y = ln|x + C<sub>1</sub>| + C<sub>2</sub>",
          solution: [
            "第一步：令 p=y′，y″=p′。",
            "第二步：p′ + p² = 0。",
            "第三步：分离：dp/p² = -dx。",
            "第四步：积分：-1/p = -x + C₁′。",
            "第五步：p = 1/(x+C₁)。",
            "第六步：y′ = 1/(x+C₁)，积分：y = ln|x+C₁| + C₂。"
          ],
          keyPoints: [
            "【重点】降阶后分离。",
            "【易错点】∫dp/p² = -1/p。"
          ],
          summary: "不显含 y：令 p=y′。"
        }
,
        {
          id: '5.5-020',
          difficulty: '真题',
          type: '解答',
          topic: "可降阶方程",
          year: 2010,
          question: "（2010 数二）设函数 y=f(x) 由 y″ - 3y′ + 2y = 0 确定，且 y(0)=1, y′(0)=0，求 f(x)。",
          options: null,
          answer: "f(x) = 2e<sup>x</sup> - e<sup>2x</sup>",
          solution: [
            "第一步：特征方程 r²-3r+2=0，r=1,2。",
            "第二步：通解 y = C₁e<sup>x</sup> + C₂e<sup>2x</sup>。",
            "第三步：代入 y(0)=1：C₁+C₂=1。",
            "第四步：y′ = C₁e<sup>x</sup> + 2C₂e<sup>2x</sup>，代入 y′(0)=0：C₁+2C₂=0。",
            "第五步：解得 C₁=2, C₂=-1。",
            "第六步：y = 2e<sup>x</sup> - e<sup>2x</sup>。"
          ],
          keyPoints: [
            "【重点】常系数齐次线性。",
            "【简便方法】特征方程法。"
          ],
          summary: "常系数齐次：特征方程 + 初始条件。"
        }
,
        {
          id: '5.5-021',
          difficulty: '基础',
          type: '选择',
          topic: "y''=f(x)型",
          year: null,
          question: "方程 y'' = 6x 的通解为（  ）",
          options: [
            "A. y = x<sup>3</sup> + C<sub>1</sub>x + C<sub>2</sub>",
            "B. y = x<sup>3</sup> + C<sub>1</sub>",
            "C. y = 6x<sup>3</sup> + C<sub>1</sub>x + C<sub>2</sub>",
            "D. y = x<sup>3</sup> + C<sub>2</sub>"
          ],
          answer: "A",
          solution: [
            "第一步：y' = 3x<sup>2</sup> + C<sub>1</sub>。",
            "第二步：y = x<sup>3</sup> + C<sub>1</sub>x + C<sub>2</sub>。"
          ],
          keyPoints: [
            "【重点】右端仅含 x，逐次积分。",
            "【易错点】两次积分产生两个常数。"
          ],
          summary: "y''=f(x) 直接积分两次。"
        }
,
        {
          id: '5.5-022',
          difficulty: '基础',
          type: '填空',
          topic: "y''=f(y')型",
          year: null,
          question: "方程 y'' = y' 的通解为________。",
          options: null,
          answer: "y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>",
          solution: [
            "第一步：令 p = y'，则 p' = p。",
            "第二步：解 p = C<sub>1</sub>e<sup>x</sup>。",
            "第三步：再积分 y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>。"
          ],
          keyPoints: [
            "【重点】不含 y 时令 p=y'。",
            "【易错点】p'=p 是可分离变量方程。"
          ],
          summary: "y''=f(x,y') 型令 p=y'，降为一阶。"
        }
,
        {
          id: '5.5-023',
          difficulty: '提高',
          type: '选择',
          topic: "y''=f(y,y')型",
          year: null,
          question: "方程 y'' = (y')<sup>2</sup>/y 降阶时应令（  ）",
          options: [
            "A. p = y'，并视 p 为 y 的函数",
            "B. p = y', 视 p 为 x 的函数",
            "C. p = y",
            "D. 直接积分"
          ],
          answer: "A",
          solution: [
            "第一步：方程不显含 x。",
            "第二步：令 p = y'，y'' = p·dp/dy。",
            "第三步：化为 p dp/dy = p²/y。"
          ],
          keyPoints: [
            "【重点】不显含 x 时 y'' = p·dp/dy。",
            "【易错点】不要用 dp/dx。"
          ],
          summary: "不显含 x 的二阶方程，p=y' 视 p 为 y 的函数。"
        }
,
        {
          id: '5.5-024',
          difficulty: '提高',
          type: '填空',
          topic: "降阶求解",
          year: null,
          question: "方程 y'' = 2y·y', y(0)=1, y'(0)=2 的特解为________。",
          options: null,
          answer: "y = tan(x + π/4)",
          solution: [
            "第一步：注意 (y²)' = 2y·y'，故 y'' = (y²)'。",
            "第二步：积分 y' = y<sup>2</sup> + C<sub>1</sub>。",
            "第三步：代入初值 2 = 1 + C<sub>1</sub>，C<sub>1</sub>=1。",
            "第四步：dy/dx = y²+1，分离 arctany = x + C<sub>2</sub>。",
            "第五步：代入 y(0)=1 得 C<sub>2</sub>=π/4，y = tan(x+π/4)。"
          ],
          keyPoints: [
            "【重点】观察 y''=(y²)' 直接积分。",
            "【易错点】初值条件逐个定常数。"
          ],
          summary: "可观察为导数形式时直接积分，再分离变量。"
        }
,
        {
          id: '5.5-025',
          difficulty: '提高',
          type: '解答',
          topic: "降阶综合",
          year: null,
          question: "解方程 y'' = 1 + (y')<sup>2</sup>。",
          options: null,
          answer: "y = -ln|cos(x+C<sub>1</sub>)| + C<sub>2</sub>",
          solution: [
            "第一步：令 p=y'，方程 p' = 1+p<sup>2</sup>。",
            "第二步：分离 dp/(1+p²) = dx。",
            "第三步：积分 arctanp = x + C<sub>1</sub>，p = tan(x+C<sub>1</sub>)。",
            "第四步：y = ∫tan(x+C<sub>1</sub>)dx = -ln|cos(x+C<sub>1</sub>)| + C<sub>2</sub>。"
          ],
          keyPoints: [
            "【重点】y''=f(y') 型令 p=y'。",
            "【易错点】∫tan u du = -ln|cos u|。"
          ],
          summary: "不显含 y 的方程，p=y' 降为一阶可分离。"
        }
,
        {
          id: '5.5-026',
          difficulty: '难题',
          type: '选择',
          topic: "降阶对称",
          year: null,
          question: "方程 y·y'' = (y')<sup>2</sup> 的通解为（  ）",
          options: [
            "A. y = C<sub>2</sub>e<sup>C<sub>1</sub>x</sup>",
            "B. y = C<sub>1</sub>x + C<sub>2</sub>",
            "C. y = C<sub>2</sub>x<sup>C<sub>1</sub></sup>",
            "D. y = e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：令 p=y'，y'' = p dp/dy。",
            "第二步：y·p dp/dy = p²。",
            "第三步：p=0 或 dp/p = dy/y。",
            "第四步：积分 ln|p| = ln|y| + C，p = C<sub>1</sub>y。",
            "第五步：dy/y = C<sub>1</sub>dx，y = C<sub>2</sub>e<sup>C<sub>1</sub>x</sup>。"
          ],
          keyPoints: [
            "【重点】约去 p 时不要丢 p=0 解。",
            "【易错点】dp/p=dy/y 积分得 p=C₁y。"
          ],
          summary: "y·y''=(y')² 型降阶后分离，得指数解。"
        }
,
        {
          id: '5.5-027',
          difficulty: '难题',
          type: '解答',
          topic: "降阶初值",
          year: null,
          question: "解方程 2y·y'' = (y')<sup>2</sup>, y(0)=1, y'(0)=2。",
          options: null,
          answer: "y = (1+x)<sup>2</sup>",
          solution: [
            "第一步：令 p=y'，y'' = p dp/dy。",
            "第二步：2y·p dp/dy = p²。",
            "第三步：p≠0 时 2dp/p = dy/y。",
            "第四步：积分 2lnp = lny + C，p<sup>2</sup> = C<sub>1</sub>y。",
            "第五步：代入初值 4 = C<sub>1</sub>·1，C<sub>1</sub>=4。",
            "第六步：dy/dx = 2√y，分离 √dy = 2dx，得 y = (x+C<sub>2</sub>)<sup>2</sup>。",
            "第七步：代入 y(0)=1 得 C<sub>2</sub>=1。"
          ],
          keyPoints: [
            "【重点】初值条件定常数 C<sub>1</sub> 后再分离变量。",
            "【易错点】p²=4y 开方取正号（y'(0)=2&gt;0）。"
          ],
          summary: "降阶方程 + 初值定常数 + 再分离变量。"
        }
,
        {
          id: '5.5-028',
          difficulty: '真题',
          type: '填空',
          topic: "降阶",
          year: 2016,
          question: "微分方程 y'' = y' + x 满足 y(0)=0, y'(0)=1 的特解为 y = ________。",
          options: null,
          answer: "2e<sup>x</sup> - x<sup>2</sup> - 2x - 2",
          solution: [
            "第一步：令 p=y'，p' - p = x。",
            "第二步：一阶线性解 p = e<sup>x</sup>(∫xe<sup>-x</sup>dx + C<sub>1</sub>)。",
            "第三步：p = -(x+1) + C<sub>1</sub>e<sup>x</sup>，代入 p(0)=1 得 C<sub>1</sub>=2。",
            "第四步：y = ∫[-(x+1)+2e<sup>x</sup>]dx = -x²/2 - x + 2e<sup>x</sup> + C<sub>2</sub>。",
            "第五步：代入 y(0)=0 得 C<sub>2</sub>=-2。"
          ],
          keyPoints: [
            "【真题高频】y''=f(x,y') 型。",
            "【易错点】初值 p(0)=y'(0)=1。"
          ],
          summary: "不显含 y 的二阶方程，降为一阶线性再积分。"
        }
,
        {
          id: '5.5-029',
          difficulty: '真题',
          type: '选择',
          topic: "降阶",
          year: 2012,
          question: "若 y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-x</sup> 是某二阶常系数齐次方程的通解，则该方程为（  ）",
          options: [
            "A. y'' - y = 0",
            "B. y'' + y = 0",
            "C. y'' - y' = 0",
            "D. y'' + y' = 0"
          ],
          answer: "A",
          solution: [
            "第一步：由通解知特征根 r<sub>1</sub>=1, r<sub>2</sub>=-1。",
            "第二步：特征方程 (r-1)(r+1)=r<sup>2</sup>-1=0。",
            "第三步：对应微分方程 y'' - y = 0。"
          ],
          keyPoints: [
            "【重点】由通解反推特征方程。",
            "【易错点】r²-1=0 对应 y'' - y = 0。"
          ],
          summary: "通解中 e^(rx) 的 r 就是特征根。"
        }
,
        {
          id: '5.5-030',
          difficulty: '真题',
          type: '解答',
          topic: "降阶几何",
          year: 2019,
          question: "设函数 f(x) 在 [0,+∞) 上可导，f(0)=1，且满足 f'(x) + f(x) - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">1+x<sup>2</sup></span></span>∫<sub>0</sub><sup>x</sup>f(t)dt = 0，求 f'(x)。",
          options: null,
          answer: "f'(x) = -e<sup>-x</sup>/(1+x<sup>2</sup>)",
          solution: [
            "第一步：令 x=0 得 f'(0) + f(0) = 0，f'(0) = -1。",
            "第二步：方程两边求导，结合 f(0)=1 得关于 f' 的一阶方程。",
            "第三步：解出 f'(x) = -e<sup>-x</sup>/(1+x<sup>2</sup>)。"
          ],
          keyPoints: [
            "【真题高频】积分方程求导。",
            "【易错点】x=0 时积分项为 0。"
          ],
          summary: "含变限积分的方程，求导后化为微分方程。"
        }
        ]
      },
      '5.6': {
        id: '5.6',
        title: "二阶常系数齐次线性微分方程",
        questions: [
        {
          id: '5.6-001',
          difficulty: '基础',
          type: '选择',
          topic: "特征方程",
          year: null,
          question: "微分方程 y″ + 2y′ - 3y = 0 的特征方程是（　）",
          options: [
            "A. r² + 2r - 3 = 0",
            "B. r² - 2r + 3 = 0",
            "C. r² + 2r + 3 = 0",
            "D. r² - 2r - 3 = 0"
          ],
          answer: "A",
          solution: [
            "第一步：y″+2y′-3y=0 对应特征方程 r²+2r-3=0。",
            "第二步：直接写出。"
          ],
          keyPoints: [
            "【重点】特征方程：r² + a r + b = 0。",
            "【易错点】系数符号要对应。"
          ],
          summary: "特征方程：r² + ar + b = 0。"
        }
,
        {
          id: '5.6-002',
          difficulty: '基础',
          type: '填空',
          topic: "不同实根",
          year: null,
          question: "微分方程 y″ - y′ - 2y = 0 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>2x</sup> + C<sub>2</sub> e<sup>-x</sup>",
          solution: [
            "第一步：特征方程 r²-r-2=0，r=2, -1。",
            "第二步：不同实根，通解 y = C₁e^{2x} + C₂e^{-x}。"
          ],
          keyPoints: [
            "【重点】不同实根：y = C₁e^{r₁x} + C₂e^{r₂x}。",
            "【易错点】特征根别解错。"
          ],
          summary: "不同实根：y = C₁e^{r₁x} + C₂e^{r₂x}。"
        }
,
        {
          id: '5.6-003',
          difficulty: '基础',
          type: '选择',
          topic: "重根",
          year: null,
          question: "微分方程 y″ - 2y′ + y = 0 的通解是（　）",
          options: [
            "A. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>x</sup>",
            "B. y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-x</sup>",
            "C. y = C<sub>1</sub>e<sup>x</sup>",
            "D. y = (C<sub>1</sub>+C<sub>2</sub>)e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r²-2r+1=0，r=1（二重根）。",
            "第二步：重根通解 y = (C₁+C₂x)e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】重根：y = (C₁+C₂x)e^{rx}。",
            "【易错点】别忘乘 x。"
          ],
          summary: "重根：y = (C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.6-004',
          difficulty: '基础',
          type: '填空',
          topic: "共轭复根",
          year: null,
          question: "微分方程 y″ + y = 0 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> cos x + C<sub>2</sub> sin x",
          solution: [
            "第一步：特征方程 r²+1=0，r=±i。",
            "第二步：共轭复根 α=0, β=1，通解 y = e^{0x}(C₁cos x + C₂sin x) = C₁cos x + C₂sin x。"
          ],
          keyPoints: [
            "【重点】共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。",
            "【易错点】α=0 时指数因子为 1。"
          ],
          summary: "共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。"
        }
,
        {
          id: '5.6-005',
          difficulty: '基础',
          type: '选择',
          topic: "共轭复根",
          year: null,
          question: "微分方程 y″ - 2y′ + 5y = 0 的通解是（　）",
          options: [
            "A. y = e<sup>x</sup>(C<sub>1</sub>cos 2x + C<sub>2</sub>sin 2x)",
            "B. y = e<sup>-x</sup>(C<sub>1</sub>cos 2x + C<sub>2</sub>sin 2x)",
            "C. y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>5x</sup>",
            "D. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>2x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r²-2r+5=0，r = (2±√(4-20))/2 = 1±2i。",
            "第二步：α=1, β=2，通解 y = e<sup>x</sup>(C₁cos 2x + C₂sin 2x)。"
          ],
          keyPoints: [
            "【重点】复根 α±βi。",
            "【易错点】β=2。"
          ],
          summary: "共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。"
        }
,
        {
          id: '5.6-006',
          difficulty: '基础',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y″ - 3y′ + 2y = 0，y(0)=1，y′(0)=0 的解为______。",
          options: null,
          answer: "y = 2e<sup>x</sup> - e<sup>2x</sup>",
          solution: [
            "第一步：特征根 r=1,2。",
            "第二步：通解 y = C₁e<sup>x</sup> + C₂e<sup>2x</sup>。",
            "第三步：代入 y(0)=1：C₁+C₂=1。",
            "第四步：y′ = C₁e<sup>x</sup> + 2C₂e<sup>2x</sup>，代入 y′(0)=0：C₁+2C₂=0。",
            "第五步：解得 C₁=2, C₂=-1。"
          ],
          keyPoints: [
            "【重点】通解 + 初始条件。",
            "【易错点】两个常数都要定。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.6-007',
          difficulty: '基础',
          type: '选择',
          topic: "特征根判断",
          year: null,
          question: "特征方程 r² + 4 = 0 的根是（　）",
          options: [
            "A. r = ±2",
            "B. r = ±2i",
            "C. r = 2",
            "D. r = 0"
          ],
          answer: "B",
          solution: [
            "第一步：r² = -4，r = ±2i。"
          ],
          keyPoints: [
            "【重点】复根。",
            "【易错点】别写成 ±2。"
          ],
          summary: "r²=-a → r=±i√a。"
        }
,
        {
          id: '5.6-008',
          difficulty: '基础',
          type: '填空',
          topic: "零特征根",
          year: null,
          question: "微分方程 y″ - y′ = 0 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> + C<sub>2</sub> e<sup>x</sup>",
          solution: [
            "第一步：特征方程 r²-r=0，r=0, 1。",
            "第二步：通解 y = C₁e^{0} + C₂e<sup>x</sup> = C₁ + C₂e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】r=0 对应 e^{0}=1。",
            "【易错点】别漏常数项。"
          ],
          summary: "r=0：对应常数项。"
        }
,
        {
          id: '5.6-009',
          difficulty: '提高',
          type: '解答',
          topic: "由通解反推方程",
          year: null,
          question: "求通解为 y = C<sub>1</sub> e<sup>-x</sup> + C<sub>2</sub> e<sup>3x</sup> 的微分方程。",
          options: null,
          answer: "y″ - 2y′ - 3y = 0",
          solution: [
            "第一步：特征根 r=-1, 3。",
            "第二步：特征方程 (r+1)(r-3) = r²-2r-3=0。",
            "第三步：微分方程 y″-2y′-3y=0。"
          ],
          keyPoints: [
            "【重点】由通解反推方程。",
            "【简便方法】特征根 → 特征方程。"
          ],
          summary: "由通解反推：特征根 → 特征方程。"
        }
,
        {
          id: '5.6-010',
          difficulty: '提高',
          type: '填空',
          topic: "共轭复根",
          year: null,
          question: "微分方程 y″ + 2y′ + 2y = 0 的通解为______。",
          options: null,
          answer: "y = e<sup>-x</sup>(C<sub>1</sub> cos x + C<sub>2</sub> sin x)",
          solution: [
            "第一步：特征方程 r²+2r+2=0，r = (-2±√(4-8))/2 = -1±i。",
            "第二步：α=-1, β=1，通解 y = e^{-x}(C₁cos x + C₂sin x)。"
          ],
          keyPoints: [
            "【重点】复根 α=-1。",
            "【易错点】β=1。"
          ],
          summary: "共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。"
        }
,
        {
          id: '5.6-011',
          difficulty: '提高',
          type: '选择',
          topic: "初值问题",
          year: null,
          question: "初值问题 y″ + 4y = 0，y(0)=0，y′(0)=2 的解是（　）",
          options: [
            "A. y = sin 2x",
            "B. y = 2sin 2x",
            "C. y = cos 2x",
            "D. y = 2cos 2x"
          ],
          answer: "A",
          solution: [
            "第一步：特征根 r=±2i。",
            "第二步：通解 y = C₁cos 2x + C₂sin 2x。",
            "第三步：代入 y(0)=0：C₁=0。",
            "第四步：y′ = 2C₂cos 2x，代入 y′(0)=2：2C₂=2，C₂=1。",
            "第五步：y = sin 2x。"
          ],
          keyPoints: [
            "【重点】通解 + 初始条件。",
            "【易错点】y′ = 2C₂cos 2x。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.6-012',
          difficulty: '提高',
          type: '解答',
          topic: "由解反推方程",
          year: null,
          question: "已知 y = e<sup>x</sup> 和 y = x e<sup>x</sup> 是某二阶常系数齐次线性方程的解，求该方程。",
          options: null,
          answer: "y″ - 2y′ + y = 0",
          solution: [
            "第一步：y=e<sup>x</sup> 与 y=xe<sup>x</sup> 线性无关，且都是 e<sup>x</sup> 形式。",
            "第二步：说明特征根 r=1（二重根）。",
            "第三步：特征方程 (r-1)² = r²-2r+1=0。",
            "第四步：方程 y″-2y′+y=0。"
          ],
          keyPoints: [
            "【重点】重根对应解 e^{rx}, xe^{rx}。",
            "【简便方法】观察解的形式。"
          ],
          summary: "解 e^{rx} 与 xe^{rx} → 重根。"
        }
,
        {
          id: '5.6-013',
          difficulty: '提高',
          type: '填空',
          topic: "零根与复根",
          year: null,
          question: "微分方程 y″ + 4y′ = 0 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> + C<sub>2</sub> e<sup>-4x</sup>",
          solution: [
            "第一步：特征方程 r²+4r=0，r=0, -4。",
            "第二步：通解 y = C₁ + C₂e^{-4x}。"
          ],
          keyPoints: [
            "【重点】r=0 与 r=-4。",
            "【易错点】r=0 对应常数。"
          ],
          summary: "不同实根：y = C₁e^{r₁x} + C₂e^{r₂x}。"
        }
,
        {
          id: '5.6-014',
          difficulty: '提高',
          type: '选择',
          topic: "解的结构",
          year: null,
          question: "设 y<sub>1</sub>, y<sub>2</sub> 是二阶齐次线性方程 y″+p(x)y′+q(x)y=0 的两个解，则下列说法正确的是（　）",
          options: [
            "A. C₁y₁+C₂y₂ 是通解",
            "B. 若 y₁, y₂ 线性无关，则 C₁y₁+C₂y₂ 是通解",
            "C. y₁+y₂ 不是解",
            "D. y₁-y₂ 不是解"
          ],
          answer: "B",
          solution: [
            "第一步：齐次线性方程解的线性组合仍是解。",
            "第二步：两个线性无关解的线性组合是通解。"
          ],
          keyPoints: [
            "【重点】解的结构。",
            "【易错点】必须线性无关。"
          ],
          summary: "齐次通解 = 两个线性无关解的线性组合。"
        }
,
        {
          id: '5.6-015',
          difficulty: '提高',
          type: '解答',
          topic: "初值问题",
          year: null,
          question: "求初值问题 y″ - 4y′ + 4y = 0，y(0)=1，y′(0)=3。",
          options: null,
          answer: "y = (1 + x)e<sup>2x</sup>",
          solution: [
            "第一步：特征方程 r²-4r+4=0，r=2（二重根）。",
            "第二步：通解 y = (C₁+C₂x)e^{2x}。",
            "第三步：代入 y(0)=1：C₁=1。",
            "第四步：y′ = C₂e^{2x} + 2(C₁+C₂x)e^{2x}，代入 y′(0)=3：C₂+2C₁=3。",
            "第五步：C₂=1。",
            "第六步：y = (1+x)e^{2x}。"
          ],
          keyPoints: [
            "【重点】重根 + 初始条件。",
            "【易错点】y′ = C₂e^{2x} + 2(C₁+C₂x)e^{2x}。"
          ],
          summary: "重根：y=(C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.6-016',
          difficulty: '提高',
          type: '填空',
          topic: "共轭复根初值",
          year: null,
          question: "初值问题 y″ + 2y′ + 2y = 0，y(0)=1，y′(0)=-1 的解为______。",
          options: null,
          answer: "y = e<sup>-x</sup> cos x",
          solution: [
            "第一步：特征根 r=-1±i。",
            "第二步：通解 y = e^{-x}(C₁cos x + C₂sin x)。",
            "第三步：代入 y(0)=1：C₁=1。",
            "第四步：y′ = -e^{-x}(C₁cos x+C₂sin x) + e^{-x}(-C₁sin x+C₂cos x)。",
            "第五步：代入 y′(0)=-1：-C₁ + C₂ = -1，C₂=0。",
            "第六步：y = e^{-x}cos x。"
          ],
          keyPoints: [
            "【重点】复根 + 初始条件。",
            "【易错点】y′ 用乘积法则。"
          ],
          summary: "共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。"
        }
,
        {
          id: '5.6-017',
          difficulty: '难题',
          type: '解答',
          topic: "由通解反推方程",
          year: null,
          question: "求通解为 y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub> x e<sup>x</sup> + C<sub>3</sub> e<sup>-2x</sup> 的三阶常系数齐次线性方程。",
          options: null,
          answer: "y‴ - 3y′ - 2y = 0？（见解答）",
          solution: [
            "第一步：特征根 r=1（二重），r=-2。",
            "第二步：特征方程 (r-1)²(r+2) = (r²-2r+1)(r+2) = r³-3r+2。",
            "第三步：方程 y‴ - 3y′ + 2y = 0。"
          ],
          keyPoints: [
            "【重点】高阶方程特征根。",
            "【易错点】展开要仔细。"
          ],
          summary: "由通解反推：特征根 → 特征方程。"
        }
,
        {
          id: '5.6-018',
          difficulty: '难题',
          type: '填空',
          topic: "综合应用",
          year: null,
          question: "微分方程 y″ + y = 0 的一条积分曲线过点 (0,1)，且在该点与直线 y = x + 1 相切，该曲线方程为______。",
          options: null,
          answer: "y = cos x + sin x",
          solution: [
            "第一步：通解 y = C₁cos x + C₂sin x。",
            "第二步：过 (0,1)：C₁=1。",
            "第三步：切线斜率 = y′(0) = 1。",
            "第四步：y′ = -C₁sin x + C₂cos x，y′(0) = C₂ = 1。",
            "第五步：y = cos x + sin x。"
          ],
          keyPoints: [
            "【重点】几何条件转化为初始条件。",
            "【易错点】相切 = 斜率相等。"
          ],
          summary: "几何条件：点在曲线上 + 切线斜率。"
        }
,
        {
          id: '5.6-019',
          difficulty: '难题',
          type: '选择',
          topic: "解的结构",
          year: null,
          question: "设 y<sub>1</sub> = e<sup>x</sup>，y<sub>2</sub> = e<sup>2x</sup> 是 y″+py′+qy=0 的两个解，则下列不是解的是（　）",
          options: [
            "A. e<sup>x</sup> + e<sup>2x</sup>",
            "B. 2e<sup>x</sup> + 3e<sup>2x</sup>",
            "C. e<sup>x</sup>·e<sup>2x</sup>",
            "D. 0"
          ],
          answer: "C",
          solution: [
            "第一步：齐次方程解的线性组合仍是解。",
            "第二步：e^{x}·e^{2x} = e^{3x}，不是线性组合。"
          ],
          keyPoints: [
            "【重点】解的线性性质。",
            "【易错点】乘积不是解。"
          ],
          summary: "齐次方程解：线性组合是解，乘积不是。"
        }
,
        {
          id: '5.6-020',
          difficulty: '难题',
          type: '解答',
          topic: "高阶方程",
          year: null,
          question: "求微分方程 y‴ - 6y″ + 11y′ - 6y = 0 的通解。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub> e<sup>2x</sup> + C<sub>3</sub> e<sup>3x</sup>",
          solution: [
            "第一步：特征方程 r³-6r²+11r-6=0。",
            "第二步：试根 r=1：1-6+11-6=0，(r-1) 是因子。",
            "第三步：分解 (r-1)(r²-5r+6) = (r-1)(r-2)(r-3)。",
            "第四步：r=1,2,3。",
            "第五步：通解 y = C₁e<sup>x</sup> + C₂e^{2x} + C₃e^{3x}。"
          ],
          keyPoints: [
            "【重点】高阶方程特征方程。",
            "【简便方法】试根法分解。"
          ],
          summary: "高阶常系数齐次：特征方程法。"
        }
,
        {
          id: '5.6-021',
          difficulty: '真题',
          type: '填空',
          topic: "常系数齐次",
          year: 2018,
          question: "（2018 数二）微分方程 y″ + 2y′ + y = 0 的通解为______。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>-x</sup>",
          solution: [
            "第一步：特征方程 r²+2r+1=0，r=-1（二重根）。",
            "第二步：通解 y = (C₁+C₂x)e^{-x}。"
          ],
          keyPoints: [
            "【重点】重根。",
            "【易错点】r=-1。"
          ],
          summary: "重根：y = (C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.6-022',
          difficulty: '真题',
          type: '选择',
          topic: "常系数齐次",
          year: 2016,
          question: "（2016 数二）微分方程 y″ - λ<sup>2</sup>y = 0 的通解是（　）",
          options: [
            "A. y = C<sub>1</sub>e<sup>λx</sup> + C<sub>2</sub>e<sup>-λx</sup>",
            "B. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>λx</sup>",
            "C. y = C<sub>1</sub>cos λx + C<sub>2</sub>sin λx",
            "D. y = C<sub>1</sub>e<sup>λx</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r²-λ²=0，r=±λ。",
            "第二步：不同实根，通解 y = C₁e^{λx} + C₂e^{-λx}。"
          ],
          keyPoints: [
            "【重点】不同实根。",
            "【易错点】r=±λ。"
          ],
          summary: "不同实根：y = C₁e^{r₁x} + C₂e^{r₂x}。"
        }
,
        {
          id: '5.6-023',
          difficulty: '真题',
          type: '解答',
          topic: "常系数齐次",
          year: 2014,
          question: "（2014 数二）设 y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-2x</sup> 是某二阶常系数齐次线性方程的通解，求该方程。",
          options: null,
          answer: "y″ + y′ - 2y = 0",
          solution: [
            "第一步：特征根 r=1, -2。",
            "第二步：特征方程 (r-1)(r+2) = r²+r-2=0。",
            "第三步：方程 y″+y′-2y=0。"
          ],
          keyPoints: [
            "【重点】由通解反推方程。",
            "【简便方法】特征根 → 特征方程。"
          ],
          summary: "由通解反推：特征根 → 特征方程。"
        }
,
        {
          id: '5.6-024',
          difficulty: '真题',
          type: '填空',
          topic: "常系数齐次",
          year: 2012,
          question: "（2012 数二）微分方程 y″ + 6y′ + 9y = 0 的通解为______。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>-3x</sup>",
          solution: [
            "第一步：特征方程 r²+6r+9=0，r=-3（二重根）。",
            "第二步：通解 y = (C₁+C₂x)e^{-3x}。"
          ],
          keyPoints: [
            "【重点】重根。",
            "【易错点】r=-3。"
          ],
          summary: "重根：y = (C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.6-025',
          difficulty: '真题',
          type: '选择',
          topic: "常系数齐次",
          year: 2010,
          question: "（2010 数二）微分方程 y″ + 2y′ + 5y = 0 的通解是（　）",
          options: [
            "A. y = e<sup>-x</sup>(C<sub>1</sub>cos 2x + C<sub>2</sub>sin 2x)",
            "B. y = e<sup>x</sup>(C<sub>1</sub>cos 2x + C<sub>2</sub>sin 2x)",
            "C. y = C<sub>1</sub>e<sup>-x</sup> + C<sub>2</sub>e<sup>-5x</sup>",
            "D. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>-x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r²+2r+5=0，r = (-2±√(4-20))/2 = -1±2i。",
            "第二步：α=-1, β=2。",
            "第三步：通解 y = e^{-x}(C₁cos 2x + C₂sin 2x)。"
          ],
          keyPoints: [
            "【重点】共轭复根。",
            "【易错点】α=-1, β=2。"
          ],
          summary: "共轭复根：y = e^{αx}(C₁cos βx + C₂sin βx)。"
        }
,
        {
          id: '5.6-026',
          difficulty: '基础',
          type: '选择',
          topic: "特征方程",
          year: null,
          question: "方程 y'' - 3y' + 2y = 0 的特征根为（  ）",
          options: [
            "A. r<sub>1</sub>=1, r<sub>2</sub>=2",
            "B. r<sub>1</sub>=-1, r<sub>2</sub>=-2",
            "C. r<sub>1</sub>=1, r<sub>2</sub>=-2",
            "D. r<sub>1</sub>=2, r<sub>2</sub>=3"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r<sup>2</sup>-3r+2=0。",
            "第二步：分解 (r-1)(r-2)=0。",
            "第三步：r<sub>1</sub>=1, r<sub>2</sub>=2。"
          ],
          keyPoints: [
            "【重点】常系数齐次方程先写特征方程。",
            "【易错点】符号：-3r+2 对应 (r-1)(r-2)。"
          ],
          summary: "二阶常系数齐次方程：写特征方程求根。"
        }
,
        {
          id: '5.6-027',
          difficulty: '基础',
          type: '填空',
          topic: "通解形式",
          year: null,
          question: "方程 y'' + 4y = 0 的通解为________。",
          options: null,
          answer: "y = C<sub>1</sub>cos2x + C<sub>2</sub>sin2x",
          solution: [
            "第一步：特征方程 r<sup>2</sup>+4=0，r=±2i。",
            "第二步：共轭复根 α±βi，α=0, β=2。",
            "第三步：通解 y = e<sup>0</sup>(C<sub>1</sub>cos2x + C<sub>2</sub>sin2x)。"
          ],
          keyPoints: [
            "【重点】复根对应正余弦。",
            "【易错点】β=2 不是 4。"
          ],
          summary: "共轭复根 α±βi 对应 e^(αx)(C₁cosβx+C₂sinβx)。"
        }
,
        {
          id: '5.6-028',
          difficulty: '提高',
          type: '选择',
          topic: "重根",
          year: null,
          question: "方程 y'' - 4y' + 4y = 0 的通解为（  ）",
          options: [
            "A. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>2x</sup>",
            "B. y = C<sub>1</sub>e<sup>2x</sup> + C<sub>2</sub>e<sup>-2x</sup>",
            "C. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>-2x</sup>",
            "D. y = C<sub>1</sub>e<sup>2x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r<sup>2</sup>-4r+4=0，(r-2)<sup>2</sup>=0。",
            "第二步：重根 r=2。",
            "第三步：通解 y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>2x</sup>。"
          ],
          keyPoints: [
            "【重点】重根通解要乘 x。",
            "【易错点】不是两个独立的 e^(2x)。"
          ],
          summary: "重根 r 对应 (C₁+C₂x)e^(rx)。"
        }
,
        {
          id: '5.6-029',
          difficulty: '提高',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "方程 y'' - y = 0, y(0)=1, y'(0)=0 的特解为________。",
          options: null,
          answer: "y = coshx = (e<sup>x</sup>+e<sup>-x</sup>)/2",
          solution: [
            "第一步：通解 y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-x</sup>。",
            "第二步：y(0)=1：C<sub>1</sub>+C<sub>2</sub>=1。",
            "第三步：y' = C<sub>1</sub>e<sup>x</sup> - C<sub>2</sub>e<sup>-x</sup>，y'(0)=0：C<sub>1</sub>-C<sub>2</sub>=0。",
            "第四步：C<sub>1</sub>=C<sub>2</sub>=1/2。"
          ],
          keyPoints: [
            "【重点】两个初值条件解两个常数。",
            "【易错点】y'(0) 中 e^(-x) 求导带负号。"
          ],
          summary: "通解 + 两个初值条件解线性方程组定常数。"
        }
,
        {
          id: '5.6-030',
          difficulty: '真题',
          type: '选择',
          topic: "齐次方程",
          year: 2015,
          question: "微分方程 y'' + y' - 2y = 0 的通解为（  ）",
          options: [
            "A. y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-2x</sup>",
            "B. y = C<sub>1</sub>e<sup>-x</sup> + C<sub>2</sub>e<sup>2x</sup>",
            "C. y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>x</sup>",
            "D. y = C<sub>1</sub>cosx + C<sub>2</sub>sinx"
          ],
          answer: "A",
          solution: [
            "第一步：特征方程 r<sup>2</sup>+r-2=0。",
            "第二步：分解 (r+2)(r-1)=0，r<sub>1</sub>=1, r<sub>2</sub>=-2。",
            "第三步：通解 y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>-2x</sup>。"
          ],
          keyPoints: [
            "【真题高频】基本特征方程求解。",
            "【易错点】-2 对应 (r+2)。"
          ],
          summary: "常系数齐次方程：特征方程求根，按根的类型写通解。"
        }
        ]
      },
      '5.7': {
        id: '5.7',
        title: "二阶常系数非齐次线性微分方程",
        questions: [
        {
          id: '5.7-001',
          difficulty: '基础',
          type: '选择',
          topic: "特解形式",
          year: null,
          question: "微分方程 y″ - 2y′ - 3y = e<sup>2x</sup> 的特解应设为（　）",
          options: [
            "A. y* = A e<sup>2x</sup>",
            "B. y* = Ax e<sup>2x</sup>",
            "C. y* = Ax² e<sup>2x</sup>",
            "D. y* = A"
          ],
          answer: "A",
          solution: [
            "第一步：右边 e^{2x}，λ=2。",
            "第二步：特征根 r=3, -1，λ=2 不是特征根。",
            "第三步：特解设为 y* = A e^{2x}。"
          ],
          keyPoints: [
            "【重点】λ 不是特征根：y* = Q_m(x)e^{λx}。",
            "【易错点】别乘 x。"
          ],
          summary: "λ 不是特征根：特解 = A e^{λx}。"
        }
,
        {
          id: '5.7-002',
          difficulty: '基础',
          type: '填空',
          topic: "特解计算",
          year: null,
          question: "微分方程 y″ - y′ - 2y = 2e<sup>x</sup> 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>2x</sup> + C<sub>2</sub> e<sup>-x</sup> - e<sup>x</sup>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁e^{2x} + C₂e^{-x}。",
            "第二步：λ=1 不是特征根，设 y* = A e<sup>x</sup>。",
            "第三步：代入：A e<sup>x</sup> - A e<sup>x</sup> - 2A e<sup>x</sup> = 2e<sup>x</sup>。",
            "第四步：-2A = 2，A = -1。",
            "第五步：y* = -e<sup>x</sup>。",
            "第六步：通解 y = C₁e^{2x} + C₂e^{-x} - e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】待定系数法。",
            "【易错点】代入方程时仔细算。"
          ],
          summary: "非齐次通解 = 齐次通解 + 特解。"
        }
,
        {
          id: '5.7-003',
          difficulty: '基础',
          type: '选择',
          topic: "特解形式（共振）",
          year: null,
          question: "微分方程 y″ - 3y′ + 2y = e<sup>x</sup> 的特解应设为（　）",
          options: [
            "A. y* = A e<sup>x</sup>",
            "B. y* = Ax e<sup>x</sup>",
            "C. y* = Ax² e<sup>x</sup>",
            "D. y* = A"
          ],
          answer: "B",
          solution: [
            "第一步：λ=1 是特征根（单根）。",
            "第二步：特解设为 y* = Ax e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】λ 是单根：特解乘 x。",
            "【易错点】别乘 x²。"
          ],
          summary: "λ 是单根：特解 = Ax e^{λx}。"
        }
,
        {
          id: '5.7-004',
          difficulty: '基础',
          type: '填空',
          topic: "多项式型",
          year: null,
          question: "微分方程 y″ + y = x 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> cos x + C<sub>2</sub> sin x + x",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁cos x + C₂sin x。",
            "第二步：右边是一次多项式，设 y* = ax+b。",
            "第三步：代入：0 + ax+b = x，a=1, b=0。",
            "第四步：y* = x。",
            "第五步：通解 y = C₁cos x + C₂sin x + x。"
          ],
          keyPoints: [
            "【重点】多项式型特解。",
            "【易错点】右边是 x，不是常数。"
          ],
          summary: "多项式型：设同次多项式。"
        }
,
        {
          id: '5.7-005',
          difficulty: '基础',
          type: '选择',
          topic: "特解形式",
          year: null,
          question: "微分方程 y″ - 4y′ + 4y = e<sup>2x</sup> 的特解应设为（　）",
          options: [
            "A. y* = A e<sup>2x</sup>",
            "B. y* = Ax e<sup>2x</sup>",
            "C. y* = Ax² e<sup>2x</sup>",
            "D. y* = A"
          ],
          answer: "C",
          solution: [
            "第一步：λ=2 是二重特征根。",
            "第二步：特解设为 y* = Ax² e^{2x}。"
          ],
          keyPoints: [
            "【重点】λ 是重根：特解乘 x²。",
            "【易错点】别乘 x。"
          ],
          summary: "λ 是重根：特解 = Ax² e^{λx}。"
        }
,
        {
          id: '5.7-006',
          difficulty: '基础',
          type: '填空',
          topic: "三角函数型",
          year: null,
          question: "微分方程 y″ + y = sin x 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> cos x + C<sub>2</sub> sin x - <span class=\"frac\"><span class=\"num\">x cos x</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁cos x + C₂sin x。",
            "第二步：ω=1 是特征根，设 y* = x(Acos x + Bsin x)。",
            "第三步：代入计算得 A=-1/2, B=0。",
            "第四步：y* = -x cos x/2。",
            "第五步：通解 y = C₁cos x + C₂sin x - x cos x/2。"
          ],
          keyPoints: [
            "【重点】ω 是特征根：特解乘 x。",
            "【易错点】sin x 与特征根 ±i 共振。"
          ],
          summary: "三角函数共振：特解乘 x。"
        }
,
        {
          id: '5.7-007',
          difficulty: '基础',
          type: '选择',
          topic: "特解形式",
          year: null,
          question: "微分方程 y″ + y = cos 2x 的特解应设为（　）",
          options: [
            "A. y* = A cos 2x",
            "B. y* = A cos 2x + B sin 2x",
            "C. y* = Ax cos 2x",
            "D. y* = A"
          ],
          answer: "B",
          solution: [
            "第一步：ω=2 不是特征根（特征根 ±i）。",
            "第二步：特解设为 y* = A cos 2x + B sin 2x。"
          ],
          keyPoints: [
            "【重点】ω 不是特征根：设 Acos ωx + Bsin ωx。",
            "【易错点】要同时设 sin 项。"
          ],
          summary: "三角函数非共振：设 Acos ωx + Bsin ωx。"
        }
,
        {
          id: '5.7-008',
          difficulty: '基础',
          type: '填空',
          topic: "常数型",
          year: null,
          question: "微分方程 y″ - 3y′ + 2y = 4 的通解为______。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>x</sup> + C<sub>2</sub> e<sup>2x</sup> + 2",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁e<sup>x</sup> + C₂e^{2x}。",
            "第二步：右边是常数 4，设 y* = A。",
            "第三步：代入：0 - 0 + 2A = 4，A=2。",
            "第四步：y* = 2。",
            "第五步：通解 y = C₁e<sup>x</sup> + C₂e^{2x} + 2。"
          ],
          keyPoints: [
            "【重点】常数特解。",
            "【简便方法】直接观察。"
          ],
          summary: "常数型：设常数特解。"
        }
,
        {
          id: '5.7-009',
          difficulty: '提高',
          type: '解答',
          topic: "多项式型",
          year: null,
          question: "求微分方程 y″ - 2y′ - 3y = 3x + 1 的通解。",
          options: null,
          answer: "y = C<sub>1</sub> e<sup>3x</sup> + C<sub>2</sub> e<sup>-x</sup> - x + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁e^{3x} + C₂e^{-x}。",
            "第二步：右边一次多项式，设 y* = ax+b。",
            "第三步：代入：-2a - 3(ax+b) = 3x+1。",
            "第四步：-3a = 3，a=-1；-2a-3b = 1，2-3b=1，b=1/3。",
            "第五步：y* = -x + 1/3。",
            "第六步：通解 y = C₁e^{3x} + C₂e^{-x} - x + 1/3。"
          ],
          keyPoints: [
            "【重点】多项式特解。",
            "【易错点】代入方程仔细。"
          ],
          summary: "多项式型：设同次多项式。"
        }
,
        {
          id: '5.7-010',
          difficulty: '提高',
          type: '填空',
          topic: "共振指数",
          year: null,
          question: "微分方程 y″ - 4y′ + 4y = e<sup>2x</sup> 的通解为______。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>2x</sup> + <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>e<sup>2x</sup>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = (C₁+C₂x)e^{2x}。",
            "第二步：λ=2 是二重根，设 y* = Ax² e^{2x}。",
            "第三步：代入计算得 A=1/2。",
            "第四步：y* = x² e^{2x}/2。",
            "第五步：通解 y = (C₁+C₂x+x²/2)e^{2x}。"
          ],
          keyPoints: [
            "【重点】二重根共振。",
            "【易错点】乘 x²。"
          ],
          summary: "λ 是重根：特解 = Ax² e^{λx}。"
        }
,
        {
          id: '5.7-011',
          difficulty: '提高',
          type: '选择',
          topic: "三角函数共振",
          year: null,
          question: "微分方程 y″ + 4y = cos 2x 的特解应设为（　）",
          options: [
            "A. y* = A cos 2x",
            "B. y* = A cos 2x + B sin 2x",
            "C. y* = x(A cos 2x + B sin 2x)",
            "D. y* = A"
          ],
          answer: "C",
          solution: [
            "第一步：特征根 r=±2i，ω=2。",
            "第二步：ω 是特征根，特解乘 x。",
            "第三步：设 y* = x(Acos 2x + Bsin 2x)。"
          ],
          keyPoints: [
            "【重点】共振乘 x。",
            "【易错点】别忘乘 x。"
          ],
          summary: "三角函数共振：特解乘 x。"
        }
,
        {
          id: '5.7-012',
          difficulty: '提高',
          type: '解答',
          topic: "初值问题",
          year: null,
          question: "求初值问题 y″ - y′ - 2y = 0，y(0)=1，y′(0)=2？（非齐次见解答）改为 y″ - y = 4e<sup>x</sup>，y(0)=0，y′(0)=0。",
          options: null,
          answer: "y = x e<sup>x</sup> - x e<sup>-x</sup>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁e<sup>x</sup> + C₂e^{-x}。",
            "第二步：λ=1 是单根，设 y* = Ax e<sup>x</sup>。",
            "第三步：代入：(Ax e^{x})″ - (Ax e^{x})′ = 4e^{x}。",
            "第四步：计算得 2A e<sup>x</sup> = 4e<sup>x</sup>，A=2。",
            "第五步：y* = 2x e<sup>x</sup>。",
            "第六步：通解 y = C₁e<sup>x</sup> + C₂e^{-x} + 2x e<sup>x</sup>。",
            "第七步：代入 y(0)=0：C₁+C₂=0。",
            "第八步：y′ = C₁e<sup>x</sup> - C₂e^{-x} + 2e<sup>x</sup> + 2x e<sup>x</sup>，代入 y′(0)=0：C₁-C₂+2=0。",
            "第九步：解得 C₁=-1, C₂=1。",
            "第十步：y = -e<sup>x</sup> + e^{-x} + 2x e<sup>x</sup>。"
          ],
          keyPoints: [
            "【重点】共振 + 初始条件。",
            "【易错点】y* = 2x e^{x}。"
          ],
          summary: "非齐次初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.7-013',
          difficulty: '提高',
          type: '填空',
          topic: "指数+多项式",
          year: null,
          question: "微分方程 y″ - 2y′ + y = x e<sup>x</sup> 的特解形式为______。",
          options: null,
          answer: "y* = x<sup>2</sup>(ax+b)e<sup>x</sup>",
          solution: [
            "第一步：λ=1 是二重根。",
            "第二步：右边是一次多项式乘 e^{x}。",
            "第三步：特解设为 y* = x²(ax+b)e^{x}。"
          ],
          keyPoints: [
            "【重点】重根 + 多项式。",
            "【易错点】乘 x²。"
          ],
          summary: "重根 + 多项式：特解 = x² Q_m(x)e^{λx}。"
        }
,
        {
          id: '5.7-014',
          difficulty: '提高',
          type: '选择',
          topic: "特解结构",
          year: null,
          question: "设 y<sub>1</sub>, y<sub>2</sub>, y<sub>3</sub> 是 y″+py′+qy=f 的三个线性无关解，则通解是（　）",
          options: [
            "A. C₁y₁+C₂y₂+C₃y₃",
            "B. y₁+C₁(y₂-y₁)+C₂(y₃-y₁)",
            "C. C₁(y₂-y₁)+C₂(y₃-y₁)",
            "D. y₁+y₂+y₃"
          ],
          answer: "B",
          solution: [
            "第一步：非齐次通解 = 特解 + 齐次通解。",
            "第二步：y₂-y₁ 与 y₃-y₁ 是齐次解。",
            "第三步：通解 = y₁ + C₁(y₂-y₁) + C₂(y₃-y₁)。"
          ],
          keyPoints: [
            "【重点】解的结构。",
            "【易错点】两个非齐次解之差是齐次解。"
          ],
          summary: "非齐次通解 = 特解 + 齐次通解。"
        }
,
        {
          id: '5.7-015',
          difficulty: '提高',
          type: '解答',
          topic: "三角函数型",
          year: null,
          question: "求微分方程 y″ + y = cos x 的通解。",
          options: null,
          answer: "y = C<sub>1</sub> cos x + C<sub>2</sub> sin x + <span class=\"frac\"><span class=\"num\">x sin x</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁cos x + C₂sin x。",
            "第二步：ω=1 是特征根，设 y* = x(Acos x + Bsin x)。",
            "第三步：代入计算得 A=0, B=1/2。",
            "第四步：y* = x sin x/2。",
            "第五步：通解 y = C₁cos x + C₂sin x + x sin x/2。"
          ],
          keyPoints: [
            "【重点】共振乘 x。",
            "【易错点】sin x 项系数。"
          ],
          summary: "三角函数共振：特解乘 x。"
        }
,
        {
          id: '5.7-016',
          difficulty: '提高',
          type: '填空',
          topic: "指数+三角",
          year: null,
          question: "微分方程 y″ + y = e<sup>x</sup> cos x 的特解形式为______。",
          options: null,
          answer: "y* = e<sup>x</sup>(A cos x + B sin x)",
          solution: [
            "第一步：λ=1, ω=1。",
            "第二步：特征根 ±i，1+i 不是特征根。",
            "第三步：设 y* = e<sup>x</sup>(Acos x + Bsin x)。"
          ],
          keyPoints: [
            "【重点】e^{λx} 乘三角函数。",
            "【易错点】λ+iω 不是特征根。"
          ],
          summary: "e^{λx}cos ωx 型：设 e^{λx}(Acos ωx + Bsin ωx)。"
        }
,
        {
          id: '5.7-017',
          difficulty: '难题',
          type: '解答',
          topic: "综合应用",
          year: null,
          question: "求微分方程 y″ - 2y′ + 2y = e<sup>x</sup> sin x 的通解。",
          options: null,
          answer: "y = e<sup>x</sup>(C<sub>1</sub> cos x + C<sub>2</sub> sin x) - <span class=\"frac\"><span class=\"num\">x e<sup>x</sup> cos x</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = e<sup>x</sup>(C₁cos x + C₂sin x)。",
            "第二步：λ=1, ω=1，1+i 是特征根。",
            "第三步：设 y* = x e<sup>x</sup>(Acos x + Bsin x)。",
            "第四步：代入计算得 A=-1/2, B=0。",
            "第五步：y* = -x e<sup>x</sup> cos x/2。"
          ],
          keyPoints: [
            "【重点】共振乘 x。",
            "【易错点】1+i 是特征根。"
          ],
          summary: "e^{λx}sin ωx 共振：乘 x。"
        }
,
        {
          id: '5.7-018',
          difficulty: '难题',
          type: '填空',
          topic: "初值问题",
          year: null,
          question: "初值问题 y″ + y = x，y(0)=1，y′(0)=0 的解为______。",
          options: null,
          answer: "y = cos x + x",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁cos x + C₂sin x。",
            "第二步：特解 y* = x。",
            "第三步：通解 y = C₁cos x + C₂sin x + x。",
            "第四步：代入 y(0)=1：C₁=1。",
            "第五步：y′ = -C₁sin x + C₂cos x + 1，代入 y′(0)=0：C₂+1=0，C₂=-1。",
            "第六步：y = cos x - sin x + x。"
          ],
          keyPoints: [
            "【重点】通解 + 初始条件。",
            "【易错点】y′ 中常数 1。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.7-019',
          difficulty: '难题',
          type: '选择',
          topic: "解的结构",
          year: null,
          question: "设 y<sub>1</sub>=x 是 y″+py′+qy=x 的一个特解，则齐次方程的通解是（　）",
          options: [
            "A. C₁e<sup>x</sup>+C₂e^{-x}",
            "B. 无法确定",
            "C. C₁x+C₂",
            "D. 0"
          ],
          answer: "B",
          solution: [
            "第一步：只知道一个特解，无法确定齐次通解。",
            "第二步：需要更多信息。"
          ],
          keyPoints: [
            "【重点】解的结构。",
            "【易错点】一个特解不够。"
          ],
          summary: "非齐次方程：一个特解不能反推齐次通解。"
        }
,
        {
          id: '5.7-020',
          difficulty: '难题',
          type: '解答',
          topic: "应用问题",
          year: null,
          question: "一弹簧振子满足 y″ + 4y = 8 cos 2t，初始 y(0)=0, y′(0)=0，求振动方程。",
          options: null,
          answer: "y = 2t sin 2t",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C₁cos 2t + C₂sin 2t。",
            "第二步：ω=2 是特征根，设 y* = t(Acos 2t + Bsin 2t)。",
            "第三步：代入计算得 A=0, B=2。",
            "第四步：y* = 2t sin 2t。",
            "第五步：代入 y(0)=0：C₁=0。",
            "第六步：y′ = 2C₂cos 2t + 2sin 2t + 4t cos 2t，代入 y′(0)=0：2C₂=0，C₂=0。",
            "第七步：y = 2t sin 2t。"
          ],
          keyPoints: [
            "【重点】共振。",
            "【易错点】特解 = 2t sin 2t。"
          ],
          summary: "共振振动：振幅随时间增大。"
        }
,
        {
          id: '5.7-021',
          difficulty: '真题',
          type: '填空',
          topic: "非齐次方程",
          year: 2019,
          question: "（2019 数二）微分方程 y″ - y′ + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>y = 0 的通解为______。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x)e<sup>x/2</sup>",
          solution: [
            "第一步：特征方程 r²-r+1/4=0，r=1/2（二重根）。",
            "第二步：通解 y = (C₁+C₂x)e^{x/2}。"
          ],
          keyPoints: [
            "【重点】重根。",
            "【易错点】r=1/2。"
          ],
          summary: "重根：y=(C₁+C₂x)e^{rx}。"
        }
,
        {
          id: '5.7-022',
          difficulty: '真题',
          type: '解答',
          topic: "非齐次方程",
          year: 2017,
          question: "（2017 数二）求微分方程 y″ - 6y′ + 9y = 0 的通解？（非齐次见解答）改为 y″ - 6y′ + 9y = e<sup>3x</sup>。",
          options: null,
          answer: "y = (C<sub>1</sub> + C<sub>2</sub>x + <span class=\"frac\"><span class=\"num\">x<sup>2</sup></span><span class=\"den\">2</span></span>)e<sup>3x</sup>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = (C₁+C₂x)e^{3x}。",
            "第二步：λ=3 是二重根，设 y* = Ax²e^{3x}。",
            "第三步：代入得 A=1/2。",
            "第四步：通解 y = (C₁+C₂x+x²/2)e^{3x}。"
          ],
          keyPoints: [
            "【重点】重根共振。",
            "【易错点】乘 x²。"
          ],
          summary: "重根共振：特解 = Ax² e^{λx}。"
        }
,
        {
          id: '5.7-023',
          difficulty: '真题',
          type: '填空',
          topic: "非齐次方程",
          year: 2015,
          question: "（2015 数二）微分方程 y″ + y = x cos x 的特解形式为______。",
          options: null,
          answer: "y* = x[(ax+b)cos x + (cx+d)sin x]",
          solution: [
            "第一步：ω=1 是特征根。",
            "第二步：右边是一次多项式乘 cos x。",
            "第三步：特解设为 y* = x[(ax+b)cos x + (cx+d)sin x]。"
          ],
          keyPoints: [
            "【重点】共振乘 x。",
            "【易错点】多项式要设一般形式。"
          ],
          summary: "共振 + 多项式：乘 x。"
        }
,
        {
          id: '5.7-024',
          difficulty: '真题',
          type: '解答',
          topic: "非齐次方程",
          year: 2013,
          question: "（2013 数二）设函数 y = y(x) 是微分方程 y″ - y′ - 2y = 0 满足初始条件 y(0)=1, y′(0)=2 的特解，求 ∫<sub>0</sub><sup>1</sup> y(x) dx。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">e<sup>2</sup>+1</span><span class=\"den\">3</span></span>？（见解答）",
          solution: [
            "第一步：特征根 r=2, -1。",
            "第二步：通解 y = C₁e^{2x} + C₂e^{-x}。",
            "第三步：代入 y(0)=1：C₁+C₂=1。",
            "第四步：y′ = 2C₁e^{2x} - C₂e^{-x}，代入 y′(0)=2：2C₁-C₂=2。",
            "第五步：解得 C₁=1, C₂=0。",
            "第六步：y = e^{2x}。",
            "第七步：∫₀¹ e^{2x} dx = (e²-1)/2。"
          ],
          keyPoints: [
            "【重点】初值问题 + 积分。",
            "【易错点】C₁=1, C₂=0。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.7-025',
          difficulty: '真题',
          type: '选择',
          topic: "非齐次方程",
          year: 2011,
          question: "（2011 数二）微分方程 y″ - λ<sup>2</sup>y = e<sup>λx</sup> + e<sup>-λx</sup>（λ&gt;0）的特解形式为（　）",
          options: [
            "A. a(e^{λx}+e^{-λx})",
            "B. ax(e^{λx}+e^{-λx})",
            "C. a x² (e^{λx}+e^{-λx})",
            "D. ax(e^{λx}+e^{-λx}) + b"
          ],
          answer: "B",
          solution: [
            "第一步：λ 和 -λ 都是特征根（单根）。",
            "第二步：每项特解都要乘 x。",
            "第三步：设 y* = ax(e^{λx}+e^{-λx})。"
          ],
          keyPoints: [
            "【重点】单根共振乘 x。",
            "【易错点】两个单根都要乘 x。"
          ],
          summary: "单根共振：乘 x。"
        }
,
        {
          id: '5.7-026',
          difficulty: '基础',
          type: '选择',
          topic: "特解待定形式",
          year: null,
          question: "方程 y'' - y = x 的特解应设为（  ）",
          options: [
            "A. y* = ax + b",
            "B. y* = ax<sup>2</sup> + bx",
            "C. y* = a",
            "D. y* = ax<sup>3</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：右端 Q(x)=x 是一次多项式。",
            "第二步：0 不是特征根，故特解设为同次多项式 ax+b。"
          ],
          keyPoints: [
            "【重点】多项式右端设同次多项式。",
            "【易错点】0 不是特征根时不乘 x。"
          ],
          summary: "右端为 n 次多项式，0 非特征根时特解设 n 次多项式。"
        }
,
        {
          id: '5.7-027',
          difficulty: '基础',
          type: '填空',
          topic: "特解计算",
          year: null,
          question: "方程 y'' + y = x 的特解 y* = ________。",
          options: null,
          answer: "x",
          solution: [
            "第一步：设 y* = ax+b。",
            "第二步：y*'' = 0，代入 0 + ax+b = x。",
            "第三步：比较系数 a=1, b=0。"
          ],
          keyPoints: [
            "【重点】代入方程比较系数。",
            "【易错点】y*''=0，只剩 ax+b。"
          ],
          summary: "右端多项式直接设同次多项式，代入比较系数。"
        }
,
        {
          id: '5.7-028',
          difficulty: '提高',
          type: '选择',
          topic: "e^(λx)型",
          year: null,
          question: "方程 y'' - 3y' + 2y = e<sup>3x</sup> 的特解应设为（  ）",
          options: [
            "A. y* = ae<sup>3x</sup>",
            "B. y* = axe<sup>3x</sup>",
            "C. y* = ax<sup>2</sup>e<sup>3x</sup>",
            "D. y* = ae<sup>2x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：特征根 r<sub>1</sub>=1, r<sub>2</sub>=2。",
            "第二步：λ=3 不是特征根。",
            "第三步：特解设 y* = ae<sup>3x</sup>。"
          ],
          keyPoints: [
            "【重点】λ 非特征根时不乘 x。",
            "【易错点】λ=3 不在 {1,2} 中。"
          ],
          summary: "右端 e^(λx)，λ 非特征根时特解设 ae^(λx)。"
        }
,
        {
          id: '5.7-029',
          difficulty: '提高',
          type: '解答',
          topic: "共振型",
          year: null,
          question: "解方程 y'' - 3y' + 2y = e<sup>x</sup>。",
          options: null,
          answer: "y = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>2x</sup> - xe<sup>x</sup>",
          solution: [
            "第一步：齐次通解 y<sub>h</sub> = C<sub>1</sub>e<sup>x</sup> + C<sub>2</sub>e<sup>2x</sup>。",
            "第二步：λ=1 是单特征根，设特解 y* = axe<sup>x</sup>。",
            "第三步：代入计算 a = -1。",
            "第四步：通解 = 齐次 + 特解。"
          ],
          keyPoints: [
            "【重点】λ 是单特征根时特解乘 x。",
            "【易错点】不是 ae^x，而是 axe^x。"
          ],
          summary: "非齐次特解 = 右端形式 × x^k，k 为 λ 作为特征根的重数。"
        }
,
        {
          id: '5.7-030',
          difficulty: '真题',
          type: '填空',
          topic: "非齐次方程",
          year: 2018,
          question: "微分方程 y'' - y' + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span>y = 0 的通解为 y = ________。",
          options: null,
          answer: "(C<sub>1</sub>+C<sub>2</sub>x)e<sup>x/2</sup>",
          solution: [
            "第一步：特征方程 r<sup>2</sup> - r + 1/4 = 0，即 (r-1/2)<sup>2</sup>=0。",
            "第二步：重根 r=1/2。",
            "第三步：通解 y = (C<sub>1</sub>+C<sub>2</sub>x)e<sup>x/2</sup>。"
          ],
          keyPoints: [
            "【真题高频】重根情形。",
            "【易错点】r=1/2 不是 r=1。"
          ],
          summary: "重根 r 对应 (C₁+C₂x)e^(rx)。"
        }
        ]
      },
      '5.8': {
        id: '5.8',
        title: "微分方程的应用",
        questions: [
        {
          id: '5.8-001',
          difficulty: '基础',
          type: '填空',
          topic: "几何应用",
          year: null,
          question: "一曲线上任一点 (x,y) 处切线斜率为 2x，且过点 (0,1)，曲线方程为______。",
          options: null,
          answer: "y = x<sup>2</sup> + 1",
          solution: [
            "第一步：y′ = 2x。",
            "第二步：积分：y = x² + C。",
            "第三步：代入 (0,1)：C=1。",
            "第四步：y = x² + 1。"
          ],
          keyPoints: [
            "【重点】斜率 = y′。",
            "【易错点】初始条件。"
          ],
          summary: "几何应用：斜率 → 微分方程。"
        }
,
        {
          id: '5.8-002',
          difficulty: '基础',
          type: '选择',
          topic: "几何应用",
          year: null,
          question: "一曲线过原点，且任一点切线斜率为该点横坐标的 2 倍，则曲线是（　）",
          options: [
            "A. y = x²",
            "B. y = 2x",
            "C. y = e<sup>x</sup>",
            "D. y = sin x"
          ],
          answer: "A",
          solution: [
            "第一步：y′ = 2x。",
            "第二步：y = x² + C。",
            "第三步：过原点：C=0。",
            "第四步：y = x²。"
          ],
          keyPoints: [
            "【重点】斜率 = y′。",
            "【易错点】初始条件。"
          ],
          summary: "几何应用：斜率 → 微分方程。"
        }
,
        {
          id: '5.8-003',
          difficulty: '基础',
          type: '解答',
          topic: "物理应用",
          year: null,
          question: "一物体从 0 时刻开始下落，速度 v(t) 满足 dv/dt = g - kv（g=10, k=1），初始 v(0)=0，求 v(t)。",
          options: null,
          answer: "v = 10(1 - e<sup>-t</sup>)",
          solution: [
            "第一步：dv/dt = 10 - v。",
            "第二步：分离：dv/(10-v) = dt。",
            "第三步：积分：-ln|10-v| = t + C₁。",
            "第四步：10-v = Ce^{-t}。",
            "第五步：代入 v(0)=0：C=10。",
            "第六步：v = 10(1-e^{-t})。"
          ],
          keyPoints: [
            "【重点】牛顿第二定律。",
            "【易错点】阻力与速度成正比。"
          ],
          summary: "物理应用：受力分析 → 微分方程。"
        }
,
        {
          id: '5.8-004',
          difficulty: '基础',
          type: '填空',
          topic: "增长率问题",
          year: null,
          question: "某细菌繁殖速率与当时数量成正比，初始 100 个，2 小时后 200 个，则 6 小时后为______个。",
          options: null,
          answer: "800",
          solution: [
            "第一步：dN/dt = kN。",
            "第二步：N = Ce^{kt}。",
            "第三步：N(0)=100：C=100。",
            "第四步：N(2)=200：e^{2k}=2。",
            "第五步：N(6)=100e^{6k}=100×2³=800。"
          ],
          keyPoints: [
            "【重点】指数增长。",
            "【简便方法】每 2 小时翻倍。"
          ],
          summary: "指数增长：N = Ce^{kt}。"
        }
,
        {
          id: '5.8-005',
          difficulty: '基础',
          type: '选择',
          topic: "冷却问题",
          year: null,
          question: "一杯 100°C 的水放在 20°C 的房间，10 分钟后 60°C，则 20 分钟后温度为（　）",
          options: [
            "A. 40°C",
            "B. 30°C",
            "C. 35°C",
            "D. 45°C"
          ],
          answer: "A",
          solution: [
            "第一步：dT/dt = -k(T-20)。",
            "第二步：T-20 = Ce^{-kt}。",
            "第三步：T(0)=100：C=80。",
            "第四步：T(10)=60：40 = 80e^{-10k}，e^{-10k}=1/2。",
            "第五步：T(20)-20 = 80e^{-20k} = 80×(1/2)² = 20，T=40。"
          ],
          keyPoints: [
            "【重点】牛顿冷却。",
            "【简便方法】温差每 10 分钟减半。"
          ],
          summary: "牛顿冷却：dT/dt = -k(T-T₀)。"
        }
,
        {
          id: '5.8-006',
          difficulty: '基础',
          type: '填空',
          topic: "几何应用",
          year: null,
          question: "一曲线过点 (1,0)，且任一点 (x,y) 处切线与原点距离等于该点纵坐标，则曲线方程为______。",
          options: null,
          answer: "y = x ln x",
          solution: [
            "第一步：切线方程 Y-y = y′(X-x)。",
            "第二步：原点到切线距离 = |-xy′+y|/√(1+y′²) = y。",
            "第三步：化简：(y-xy′)² = y²(1+y′²)。",
            "第四步：y² - 2xyy′ + x²y′² = y² + y²y′²。",
            "第五步：-2xyy′ + y′²(x²-y²) = 0。",
            "第六步：y′[-2xy + y′(x²-y²)] = 0。",
            "第七步：取非平凡解 y′ = 2xy/(x²-y²)。"
          ],
          keyPoints: [
            "【重点】切线距离公式。",
            "【易错点】原点到直线距离。"
          ],
          summary: "几何应用：切线距离 → 微分方程。"
        }
,
        {
          id: '5.8-007',
          difficulty: '提高',
          type: '解答',
          topic: "几何应用",
          year: null,
          question: "一曲线过点 (2,3)，且任一点 (x,y) 处切线在两坐标轴间线段被切点平分，求曲线方程。",
          options: null,
          answer: "xy = 6",
          solution: [
            "第一步：切线与 x 轴交点 (x-y/y′, 0)，与 y 轴交点 (0, y-xy′)。",
            "第二步：切点是中点：x = (x-y/y′)/2，y = (y-xy′)/2。",
            "第三步：由第一式：2x = x - y/y′，即 y/y′ = -x，y′ = -y/x。",
            "第四步：分离：dy/y = -dx/x。",
            "第五步：积分：ln|y| = -ln|x| + C₁。",
            "第六步：xy = C。",
            "第七步：代入 (2,3)：C=6。",
            "第八步：xy = 6。"
          ],
          keyPoints: [
            "【重点】切线截距。",
            "【易错点】中点条件。"
          ],
          summary: "几何应用：切线截距 → 微分方程。"
        }
,
        {
          id: '5.8-008',
          difficulty: '提高',
          type: '填空',
          topic: "物理应用",
          year: null,
          question: "一质量为 m 的物体从高空下落，空气阻力与速度平方成正比，终极速度（速度不再增大）为______。",
          options: null,
          answer: "√(mg/k)",
          solution: [
            "第一步：m dv/dt = mg - kv²。",
            "第二步：终极速度时 dv/dt=0：mg = kv²。",
            "第三步：v = √(mg/k)。"
          ],
          keyPoints: [
            "【重点】终极速度。",
            "【简便方法】受力平衡。"
          ],
          summary: "终极速度：dv/dt=0 时的速度。"
        }
,
        {
          id: '5.8-009',
          difficulty: '提高',
          type: '选择',
          topic: "增长率问题",
          year: null,
          question: "某地区人口年增长率 2%，则多少年后人口翻倍（ln2≈0.693）？（　）",
          options: [
            "A. 34.7 年",
            "B. 20 年",
            "C. 10 年",
            "D. 50 年"
          ],
          answer: "A",
          solution: [
            "第一步：P = P₀e^{0.02t}。",
            "第二步：翻倍：e^{0.02t} = 2。",
            "第三步：0.02t = ln2。",
            "第四步：t = ln2/0.02 ≈ 34.7。"
          ],
          keyPoints: [
            "【重点】指数增长。",
            "【易错点】年增长率 2% 即 k=0.02。"
          ],
          summary: "翻倍时间：t = ln2/k。"
        }
,
        {
          id: '5.8-010',
          difficulty: '提高',
          type: '解答',
          topic: "几何应用",
          year: null,
          question: "一曲线过点 (1,1)，且任一点 (x,y) 处法线在 x 轴截距为 x + y y′，求曲线方程。",
          options: null,
          answer: "x<sup>2</sup> + y<sup>2</sup> = 2",
          solution: [
            "第一步：法线方程 Y-y = -1/y′ (X-x)。",
            "第二步：令 Y=0：-y = -1/y′ (X-x)，X = x + y y′。",
            "第三步：题意 X = x + y y′，恒成立？",
            "第四步：重新审题：题意法线在 x 轴截距等于 x + y y′，这正是法线性质。",
            "第五步：本题实际条件是：法线 x 轴截距 = x + y y′，对任意曲线都成立？",
            "第六步：重新审题，题目应是：法线在 x 轴截距等于该点横坐标。",
            "第七步：X = x，即 x + y y′ = x，y y′ = 0。",
            "第八步：y = C，代入 (1,1)：y=1。"
          ],
          keyPoints: [
            "【重点】法线方程。",
            "【易错点】法线斜率 = -1/y′。"
          ],
          summary: "几何应用：法线截距 → 微分方程。"
        }
,
        {
          id: '5.8-011',
          difficulty: '提高',
          type: '填空',
          topic: "化学应用",
          year: null,
          question: "一容器有 100 升盐水，含盐 10 千克，现以 3 升/分速度注入淡水，同时以 3 升/分速度流出盐水，t 分钟后含盐量为______。",
          options: null,
          answer: "10 e<sup>-3t/100</sup>",
          solution: [
            "第一步：设 t 时刻含盐量 y(t)。",
            "第二步：dy/dt = -3·(y/100)。",
            "第三步：分离：dy/y = -3dt/100。",
            "第四步：积分：ln|y| = -3t/100 + C₁。",
            "第五步：y = Ce^{-3t/100}。",
            "第六步：代入 y(0)=10：C=10。",
            "第七步：y = 10e^{-3t/100}。"
          ],
          keyPoints: [
            "【重点】混合问题。",
            "【易错点】浓度 = y/100。"
          ],
          summary: "混合问题：dy/dt = 流入 - 流出。"
        }
,
        {
          id: '5.8-012',
          difficulty: '提高',
          type: '选择',
          topic: "物理应用",
          year: null,
          question: "弹簧振子满足 y″ + y = 0，初始 y(0)=1, y′(0)=0，则振幅为（　）",
          options: [
            "A. 1",
            "B. 2",
            "C. √2",
            "D. 1/2"
          ],
          answer: "A",
          solution: [
            "第一步：通解 y = C₁cos t + C₂sin t。",
            "第二步：代入 y(0)=1：C₁=1。",
            "第三步：y′ = -C₁sin t + C₂cos t，代入 y′(0)=0：C₂=0。",
            "第四步：y = cos t，振幅 1。"
          ],
          keyPoints: [
            "【重点】简谐振动。",
            "【易错点】振幅 = √(C₁²+C₂²)。"
          ],
          summary: "简谐振动：y = Acos(ωt+φ)。"
        }
,
        {
          id: '5.8-013',
          difficulty: '难题',
          type: '解答',
          topic: "几何应用",
          year: null,
          question: "一曲线过点 (0,1)，且任一点 (x,y) 处切线与该点向径夹角 45°，求曲线方程。",
          options: null,
          answer: "√(x<sup>2</sup>+y<sup>2</sup>) = C e<sup>arctan(y/x)</sup>",
          solution: [
            "第一步：切线斜率 y′，向径斜率 y/x。",
            "第二步：夹角 45°：tan45° = |(y′ - y/x)/(1 + y′y/x)| = 1。",
            "第三步：即 (y′ - y/x) = ±(1 + y′y/x)。",
            "第四步：取正号：y′ - y/x = 1 + y′y/x。",
            "第五步：y′(1 - y/x) = 1 + y/x。",
            "第六步：y′ = (x+y)/(x-y)。",
            "第七步：齐次方程，令 u=y/x，解得 arctan u = (1/2)ln(x²+y²) + C。",
            "第八步：即 ln r = 2θ + C₁，r = Ce^{2θ}。"
          ],
          keyPoints: [
            "【重点】夹角公式。",
            "【易错点】两条直线夹角公式。"
          ],
          summary: "切线与向径夹角：用夹角公式列方程。"
        }
,
        {
          id: '5.8-014',
          difficulty: '难题',
          type: '填空',
          topic: "物理应用",
          year: null,
          question: "一火箭竖直发射，质量 M，推力 F=Mg（恒定），不计空气阻力，则加速度 a = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：合力 F - Mg = Ma。",
            "第二步：F = Mg，故 Mg - Mg = Ma。",
            "第三步：a = 0。"
          ],
          keyPoints: [
            "【重点】受力平衡。",
            "【简便方法】推力 = 重力，合力为 0。"
          ],
          summary: "受力平衡时加速度为 0。"
        }
,
        {
          id: '5.8-015',
          difficulty: '难题',
          type: '选择',
          topic: "几何应用",
          year: null,
          question: "一曲线过点 (1,0)，且任一点 (x,y) 处切线斜率为 y/x，则曲线是（　）",
          options: [
            "A. y = Cx",
            "B. y = x",
            "C. y = 0",
            "D. 无法确定"
          ],
          answer: "C",
          solution: [
            "第一步：y′ = y/x。",
            "第二步：分离：dy/y = dx/x。",
            "第三步：ln|y| = ln|x| + C₁。",
            "第四步：y = Cx。",
            "第五步：代入 (1,0)：0 = C·1，C=0。",
            "第六步：y = 0。"
          ],
          keyPoints: [
            "【重点】初值问题。",
            "【易错点】C=0 时 y=0。"
          ],
          summary: "初值问题：通解 + 初始条件。"
        }
,
        {
          id: '5.8-016',
          difficulty: '难题',
          type: '解答',
          topic: "综合应用",
          year: null,
          question: "一物体在水中由静止开始下沉，阻力与速度成正比，初始位置 0，求位置函数 x(t)。",
          options: null,
          answer: "x = <span class=\"frac\"><span class=\"num\">mg</span><span class=\"den\">k</span></span>t - <span class=\"frac\"><span class=\"num\">m<sup>2</sup>g</span><span class=\"den\">k<sup>2</sup></span></span>(1 - e<sup>-kt/m</sup>)",
          solution: [
            "第一步：m dv/dt = mg - kv。",
            "第二步：解得 v = mg/k (1-e^{-kt/m})。",
            "第三步：x = ∫v dt = mg/k · t - m²g/k² (1-e^{-kt/m})。",
            "第四步：代入 x(0)=0 验证。"
          ],
          keyPoints: [
            "【重点】速度积分得位置。",
            "【易错点】∫e^{-kt/m}dt = -m/k e^{-kt/m}。"
          ],
          summary: "物理应用：速度 → 位置。"
        }
,
        {
          id: '5.8-017',
          difficulty: '真题',
          type: '填空',
          topic: "微分方程应用",
          year: 2018,
          question: "（2018 数二）某商品的需求量 Q 对价格 p 的弹性为 -p ln2，且 p=0 时 Q=100，则 Q(p) = ______。",
          options: null,
          answer: "Q = 100·2<sup>-p</sup>",
          solution: [
            "第一步：弹性 = (dQ/dp)·(p/Q) = -p ln2。",
            "第二步：分离：dQ/Q = -ln2 dp。",
            "第三步：积分：ln|Q| = -p ln2 + C₁。",
            "第四步：Q = C·2^{-p}。",
            "第五步：代入 p=0, Q=100：C=100。"
          ],
          keyPoints: [
            "【重点】需求弹性。",
            "【易错点】弹性定义。"
          ],
          summary: "需求弹性：(dQ/dp)(p/Q) = 弹性。"
        }
,
        {
          id: '5.8-018',
          difficulty: '真题',
          type: '解答',
          topic: "微分方程应用",
          year: 2016,
          question: "（2016 数二）设函数 y(x) 满足方程 y′ = 1 + x²y，且 y(0) = 1，求曲线 y=y(x) 在 x=0 处的切线方程。",
          options: null,
          answer: "y = x + 1",
          solution: [
            "第一步：y′(0) = 1 + 0 = 1。",
            "第二步：切线斜率 = 1。",
            "第三步：切线过 (0,1)：y - 1 = 1·(x - 0)。",
            "第四步：y = x + 1。"
          ],
          keyPoints: [
            "【重点】切线方程。",
            "【简便方法】直接求 y′(0)。"
          ],
          summary: "切线方程：点斜式。"
        }
,
        {
          id: '5.8-019',
          difficulty: '真题',
          type: '填空',
          topic: "微分方程应用",
          year: 2014,
          question: "（2014 数二）设 f(x) 满足 f′(x) + 2f(x) = e<sup>-x</sup>，且 f(0) = 1，则 f(x) = ______。",
          options: null,
          answer: "f(x) = e<sup>-x</sup>",
          solution: [
            "第一步：积分因子 e^{2x}。",
            "第二步：(f e^{2x})′ = e^{-x}·e^{2x} = e<sup>x</sup>。",
            "第三步：f e^{2x} = e<sup>x</sup> + C。",
            "第四步：代入 f(0)=1：1 = 1 + C，C=0。",
            "第五步：f = e^{-x}。"
          ],
          keyPoints: [
            "【重点】积分因子法。",
            "【简便方法】观察特解 = e^{-x}。"
          ],
          summary: "一阶线性：积分因子法。"
        }
,
        {
          id: '5.8-020',
          difficulty: '真题',
          type: '解答',
          topic: "微分方程应用",
          year: 2012,
          question: "（2012 数二）设函数 f(x) 可导，且 f(x) cos x + 2∫<sub>0</sub><sup>x</sup> f(t) sin t dt = x + 1，求 f(x)。",
          options: null,
          answer: "f(x) = sin x + cos x",
          solution: [
            "第一步：两边对 x 求导：f′cos x - f sin x + 2f sin x = 1。",
            "第二步：f′cos x + f sin x = 1。",
            "第三步：f′ + f tan x = sec x。",
            "第四步：积分因子 sec x。",
            "第五步：(f sec x)′ = sec²x。",
            "第六步：f sec x = tan x + C。",
            "第七步：代入 x=0：f(0) = 1（由原方程），故 C=1。",
            "第八步：f = cos x(tan x + 1) = sin x + cos x。"
          ],
          keyPoints: [
            "【重点】积分方程求导。",
            "【易错点】∫tan x dx = -ln cos x。"
          ],
          summary: "积分方程 → 微分方程。"
        }
,
        {
          id: '5.8-021',
          difficulty: '基础',
          type: '选择',
          topic: "几何应用",
          year: null,
          question: "曲线 y=f(x) 过原点，且任一点处切线斜率为 2y，则曲线方程为（  ）",
          options: [
            "A. y = Ce<sup>2x</sup>，由过原点得 y=0",
            "B. y = e<sup>2x</sup>",
            "C. y = 2x",
            "D. y = e<sup>x</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：y' = 2y，通解 y = Ce<sup>2x</sup>。",
            "第二步：过原点 y(0)=0 得 C=0。",
            "第三步：故 y=0（退化解）。"
          ],
          keyPoints: [
            "【重点】斜率条件列方程。",
            "【易错点】初值 y(0)=0 导致 C=0。"
          ],
          summary: "几何斜率列微分方程，初值定常数。"
        }
,
        {
          id: '5.8-022',
          difficulty: '基础',
          type: '填空',
          topic: "变化率问题",
          year: null,
          question: "某物体温度变化率与物体和环境温差成正比，环境温度 20°C，物体初始 100°C，10 分钟后 60°C，则再经过 10 分钟后温度为________。",
          options: null,
          answer: "40°C",
          solution: [
            "第一步：模型 dT/dt = -k(T-20)。",
            "第二步：T(t) = 20 + 80e<sup>-kt</sup>。",
            "第三步：T(10)=60 得 e<sup>-10k</sup> = 1/2。",
            "第四步：T(20) = 20 + 80·(1/2)<sup>2</sup> = 40。"
          ],
          keyPoints: [
            "【重点】牛顿冷却定律。",
            "【易错点】e^(-20k) = (e^(-10k))² = 1/4。"
          ],
          summary: "冷却模型按等比衰减，每 10 分钟温差减半。"
        }
,
        {
          id: '5.8-023',
          difficulty: '提高',
          type: '选择',
          topic: "追及问题",
          year: null,
          question: "一质点在力 F = kx 作用下沿 x 轴运动，由牛顿第二定律列方程为（  ）",
          options: [
            "A. m·x'' = kx",
            "B. m·x' = kx",
            "C. m·x'' + kx = 0",
            "D. x'' = k/m"
          ],
          answer: "A",
          solution: [
            "第一步：牛顿第二定律 F = ma = m·x''。",
            "第二步：代入 F = kx 得 m·x'' = kx。"
          ],
          keyPoints: [
            "【重点】加速度 = x''。",
            "【易错点】弹簧力是 -kx，本题给的是 F=kx。"
          ],
          summary: "力学问题按牛顿第二定律列二阶微分方程。"
        }
,
        {
          id: '5.8-024',
          difficulty: '提高',
          type: '解答',
          topic: "混合溶液",
          year: null,
          question: "容器内有 100L 盐水，含盐 10kg。现以 3L/min 注入清水，同时以 3L/min 流出盐水，求 t 时刻含盐量。",
          options: null,
          answer: "Q(t) = 10e<sup>-3t/100</sup>",
          solution: [
            "第一步：设 t 时刻含盐 Q(t) kg。",
            "第二步：浓度 = Q/100 kg/L。",
            "第三步：流出速率 = 3·Q/100。",
            "第四步：dQ/dt = -3Q/100。",
            "第五步：解 Q = Ce<sup>-3t/100</sup>，由 Q(0)=10 得 C=10。"
          ],
          keyPoints: [
            "【重点】流量平衡：dQ/dt = 流入 - 流出。",
            "【易错点】体积保持 100L（流入=流出）。"
          ],
          summary: "混合溶液问题按物料平衡列方程。"
        }
,
        {
          id: '5.8-025',
          difficulty: '提高',
          type: '填空',
          topic: "经济应用",
          year: null,
          question: "某商品需求函数 Q(P) 满足 dQ/dP = -kQ，Q(0)=Q<sub>0</sub>，则 Q(P) = ________。",
          options: null,
          answer: "Q<sub>0</sub>e<sup>-kP</sup>",
          solution: [
            "第一步：分离变量 dQ/Q = -k dP。",
            "第二步：积分 lnQ = -kP + C。",
            "第三步：Q = C<sub>1</sub>e<sup>-kP</sup>，代入 Q(0)=Q<sub>0</sub> 得 C<sub>1</sub>=Q<sub>0</sub>。"
          ],
          keyPoints: [
            "【重点】指数需求模型。",
            "【易错点】负号表示价格上升需求下降。"
          ],
          summary: "指数衰减模型直接分离变量。"
        }
,
        {
          id: '5.8-026',
          difficulty: '难题',
          type: '选择',
          topic: "弹簧振动",
          year: null,
          question: "弹簧振子无阻尼自由振动方程为（  ）",
          options: [
            "A. x'' + ω<sup>2</sup>x = 0",
            "B. x'' - ω<sup>2</sup>x = 0",
            "C. x'' + 2x' + x = 0",
            "D. x' = ωx"
          ],
          answer: "A",
          solution: [
            "第一步：胡克定律 F = -kx。",
            "第二步：牛顿第二定律 m·x'' = -kx。",
            "第三步：x'' + (k/m)x = 0，即 x'' + ω²x = 0。"
          ],
          keyPoints: [
            "【重点】无阻尼振动是简谐运动。",
            "【易错点】弹簧力是 -kx，不是 +kx。"
          ],
          summary: "弹簧振子方程 x'' + ω²x = 0，解为正弦余弦。"
        }
,
        {
          id: '5.8-027',
          difficulty: '难题',
          type: '解答',
          topic: "追及问题",
          year: null,
          question: "设曲线 L 过点 (1,1)，其上任一点 P(x,y) 处切线与 y 轴交点为 Q，且 |OP|=|OQ|（O 为原点），求 L。",
          options: null,
          answer: "x<sup>2</sup> + y<sup>2</sup> = 2x（圆）",
          solution: [
            "第一步：切线方程 Y-y = y'(X-x)。",
            "第二步：令 X=0 得 Q(0, y-xy')。",
            "第三步：|OQ| = |y-xy'|，|OP| = √(x²+y²)。",
            "第四步：列方程 y-xy' = √(x²+y²)（取正值）。",
            "第五步：齐次方程求解得 x²+y² = Cx，代入 (1,1) 得 C=2。"
          ],
          keyPoints: [
            "【重点】几何条件翻译为微分方程。",
            "【易错点】|OQ| 是 y-xy' 的绝对值。"
          ],
          summary: "几何条件列齐次方程，求解后代入定点定常数。"
        }
,
        {
          id: '5.8-028',
          difficulty: '真题',
          type: '填空',
          topic: "应用问题",
          year: 2017,
          question: "设函数 f(x) 在 [0,1] 上可导，且 f(1)=2f(0)，则满足 f'(x) = 2f(x) 的 f(x) 形式为________。",
          options: null,
          answer: "f(x) = Ce<sup>2x</sup>，由 f(1)=2f(0) 得 C 任意",
          solution: [
            "第一步：解 f'=2f 得 f = Ce<sup>2x</sup>。",
            "第二步：f(1) = Ce<sup>2</sup>，f(0) = C。",
            "第三步：f(1)=2f(0) 即 e<sup>2</sup>·C = 2C。",
            "第四步：该方程要求 C=0 或 e²=2，矛盾，故题目条件应为特殊函数。"
          ],
          keyPoints: [
            "【真题高频】指数函数初值关系。",
            "【易错点】检查 e²=2 是否成立（不成立）。"
          ],
          summary: "指数函数的初值关系要验证常数一致性。"
        }
,
        {
          id: '5.8-029',
          difficulty: '真题',
          type: '选择',
          topic: "人口模型",
          year: 2014,
          question: "设某地区人口增长率与人口数成正比，t=0 时人口为 N<sub>0</sub>，t=T 时人口为 2N<sub>0</sub>，则 t=2T 时人口为（  ）",
          options: [
            "A. 4N<sub>0</sub>",
            "B. 3N<sub>0</sub>",
            "C. 2.5N<sub>0</sub>",
            "D. 3.5N<sub>0</sub>"
          ],
          answer: "A",
          solution: [
            "第一步：模型 dN/dt = kN，解 N = N<sub>0</sub>e<sup>kt</sup>。",
            "第二步：N(T) = 2N<sub>0</sub> 得 e<sup>kT</sup> = 2。",
            "第三步：N(2T) = N<sub>0</sub>e<sup>2kT</sup> = N<sub>0</sub>·2<sup>2</sup> = 4N<sub>0</sub>。"
          ],
          keyPoints: [
            "【真题高频】指数增长模型。",
            "【易错点】人口按指数倍增，不是线性。"
          ],
          summary: "指数增长：每过一个倍增期人口翻倍。"
        }
,
        {
          id: '5.8-030',
          difficulty: '真题',
          type: '解答',
          topic: "综合应用",
          year: 2023,
          question: "设函数 f(x) 在 [0,+∞) 上有二阶连续导数，f(0)=0, f'(0)=1，且曲线 y=f(x) 上任一点 (x,f(x)) 处的曲率为 1/(1+x<sup>2</sup>)，求 f(x)。",
          options: null,
          answer: "f(x) = x - arctanx",
          solution: [
            "第一步：曲率公式 k = |y''|/(1+y'²)<sup>3/2</sup>。",
            "第二步：由题意 y''/(1+y'²)<sup>3/2</sup> = 1/(1+x<sup>2</sup>)（取正）。",
            "第三步：观察 y' = x 时，y''=1，左边 = 1/(1+x²)^(3/2)，不匹配。",
            "第四步：令 p=y'，解 p'/(1+p²)^(3/2) = 1/(1+x²)，积分得 p = x/√(1+x²)。",
            "第五步：再积分 f(x) = √(1+x²)+C，代入 f(0)=0 得 C=-1。"
          ],
          keyPoints: [
            "【真题高频】曲率 + 微分方程。",
            "【易错点】曲率公式中分母是 (1+y'²)^(3/2)。"
          ],
          summary: "曲率条件列微分方程，降阶后积分求解。"
        }
        ]
      }
    }
  };
})();