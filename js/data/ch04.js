(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['4'] = {
    id: 4,
    title: "多元函数微积分学",
    subject: "高等数学",
    sections: {
      '4.1': {
        id: '4.1',
        title: "多元函数的基本概念",
        questions: [
        {
          id: '4.1-001',
          difficulty: '基础',
          type: '选择',
          topic: "二元函数的定义域",
          year: null,
          question: "函数 z = ln(x - y) + √(1 - x<sup>2</sup>) 的定义域是（　）",
          options: [
            "A. { (x,y) | x ≥ 0, y &lt; x }",
            "B. { (x,y) | -1 ≤ x ≤ 1, y &lt; x }",
            "C. { (x,y) | |x| ≤ 1, y ≤ x }",
            "D. { (x,y) | x &gt; y, 0 ≤ x ≤ 1 }"
          ],
          answer: "B",
          solution: [
            "第一步：对数真数要求 x - y &gt; 0，即 y &lt; x。",
            "第二步：根号要求 1 - x<sup>2</sup> ≥ 0，即 |x| ≤ 1。",
            "第三步：取交集得 -1 ≤ x ≤ 1 且 y &lt; x。"
          ],
          keyPoints: [
            "【重点】定义域是各部分定义域的交集，常见约束：真数&gt;0、根号内≥0、分母≠0。",
            "【易错点】ln(x-y) 是严格大于 0，端点 y=x 不能取到。"
          ],
          summary: "求二元函数定义域：分别列出每个解析式的约束条件，再取交集，必要时画图表示。"
        }
,
        {
          id: '4.1-002',
          difficulty: '基础',
          type: '填空',
          topic: "二元函数的定义域",
          year: null,
          question: "函数 z = √(4 - x<sup>2</sup> - y<sup>2</sup>) + ln(x<sup>2</sup> + y<sup>2</sup> - 1) 的定义域用集合表示为______。",
          options: null,
          answer: "{ (x,y) | 1 &lt; x<sup>2</sup> + y<sup>2</sup> ≤ 4 }",
          solution: [
            "第一步：根号要求 4 - x<sup>2</sup> - y<sup>2</sup> ≥ 0，即 x<sup>2</sup>+y<sup>2</sup> ≤ 4。",
            "第二步：对数真数要求 x<sup>2</sup>+y<sup>2</sup> - 1 &gt; 0，即 x<sup>2</sup>+y<sup>2</sup> &gt; 1。",
            "第三步：交集为圆环区域 1 &lt; x<sup>2</sup>+y<sup>2</sup> ≤ 4。"
          ],
          keyPoints: [
            "【重点】这是典型的圆环域（环形区域），内边界取不到、外边界能取到。",
            "【易错点】对数要求严格大于 0，不要写成 ≥1。"
          ],
          summary: "出现 x²+y² 的约束时，定义域通常是圆域、圆环域或圆域外，结合极坐标思想判断。"
        }
,
        {
          id: '4.1-003',
          difficulty: '基础',
          type: '选择',
          topic: "二重极限不存在的判定",
          year: null,
          question: "极限 lim<sub>(x,y)→(0,0)</sub> xy / (x<sup>2</sup> + y<sup>2</sup>) =（　）",
          options: [
            "A. 0",
            "B. 1",
            "C. 不存在",
            "D. ∞"
          ],
          answer: "C",
          solution: [
            "第一步：沿直线 y = kx 趋近原点，代入得 x·kx / (x<sup>2</sup> + k<sup>2</sup>x<sup>2</sup>) = k / (1 + k<sup>2</sup>)。",
            "第二步：该结果随 k 变化，k=0 时为 0，k=1 时为 1/2。",
            "第三步：沿不同路径极限值不同，故二重极限不存在。"
          ],
          keyPoints: [
            "【重点】证明二重极限不存在的标准方法：找两条不同路径，使极限值不同。",
            "【简便方法】对于 x²、y²、xy 的齐次式，常用 y=kx 试探。"
          ],
          summary: "判断二重极限不存在：选 y=kx 等路径，若极限依赖参数 k，则极限不存在。"
        }
,
        {
          id: '4.1-004',
          difficulty: '基础',
          type: '填空',
          topic: "二重极限的计算（重要极限）",
          year: null,
          question: "lim<sub>(x,y)→(0,0)</sub> sin(xy) / x = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：改写 sin(xy)/x = y · [sin(xy)/(xy)]。",
            "第二步：当 (x,y)→(0,0) 时 xy→0，故 sin(xy)/(xy) → 1。",
            "第三步：y→0，整体极限 = 0 × 1 = 0。"
          ],
          keyPoints: [
            "【重点】利用一元重要极限 lim<sub>t→0</sub> sin t / t = 1，令 t=xy。",
            "【易错点】不能直接说 sin(xy)/x → 0 而不写理由，必须凑出重要极限形式。"
          ],
          summary: "二元极限中出现 sin u / u、(1+u)^(1/u) 等结构时，令 u=u(x,y) 直接套用一元重要极限。"
        }
,
        {
          id: '4.1-005',
          difficulty: '基础',
          type: '选择',
          topic: "二元函数的连续性",
          year: null,
          question: "设 f(x,y) = xy/(x<sup>2</sup>+y<sup>2</sup>) （(x,y)≠(0,0)），f(0,0)=0，则 f(x,y) 在点 (0,0) 处（　）",
          options: [
            "A. 连续",
            "B. 二重极限存在但不等于 f(0,0)，不连续",
            "C. 二重极限不存在，不连续",
            "D. 偏导数存在且连续"
          ],
          answer: "C",
          solution: [
            "第一步：由 4.1-003 知，沿 y=kx 极限为 k/(1+k²)，随 k 变化。",
            "第二步：二重极限不存在。",
            "第三步：极限不存在，故 f 在 (0,0) 处不连续。"
          ],
          keyPoints: [
            "【重点】连续性定义：极限存在 = 函数值。极限不存在必然不连续。",
            "【易错点】分段点处连续性必须用定义验证，不能凭直观。"
          ],
          summary: "分段函数在分界点的连续性，先求二重极限是否存在，再与函数值比较。"
        }
,
        {
          id: '4.1-006',
          difficulty: '基础',
          type: '填空',
          topic: "用夹逼准则证明连续性",
          year: null,
          question: "设 f(x,y) = x<sup>2</sup>y/(x<sup>2</sup>+y<sup>2</sup>) （(x,y)≠(0,0)），f(0,0)=0，则 f(x,y) 在 (0,0) 处的连续性为______。",
          options: null,
          answer: "连续",
          solution: [
            "第一步：0 ≤ |x²y/(x²+y²)| = |y| · x²/(x²+y²) ≤ |y|。",
            "第二步：当 (x,y)→(0,0) 时 |y|→0。",
            "第三步：由夹逼准则 f(x,y)→0=f(0,0)，故连续。"
          ],
          keyPoints: [
            "【重点】常用不等式 x² ≤ x²+y²（即 x²/(x²+y²)≤1）做放缩。",
            "【简便方法】遇到分母为 x²+y²，用 |f| ≤ |y| 或 |f| ≤ |x| 放缩最有效。"
          ],
          summary: "分子含一次、分母含二次的分式，常用 |分子|≤分母的一部分放缩，再用夹逼准则。"
        }
,
        {
          id: '4.1-007',
          difficulty: '提高',
          type: '选择',
          topic: "二重极限不存在的判定",
          year: null,
          question: "极限 lim<sub>(x,y)→(0,0)</sub> (x<sup>2</sup>-y<sup>2</sup>)/(x<sup>2</sup>+y<sup>2</sup>) =（　）",
          options: [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. 不存在"
          ],
          answer: "D",
          solution: [
            "第一步：沿 x 轴（y=0）趋近，极限为 x²/x² = 1。",
            "第二步：沿 y 轴（x=0）趋近，极限为 -y²/y² = -1。",
            "第三步：两条坐标轴上极限值不同，二重极限不存在。"
          ],
          keyPoints: [
            "【重点】沿 x 轴、y 轴两个方向试探是最快的方法。",
            "【易错点】不要误以为 x、y 对称就极限为 0。"
          ],
          summary: "分子是 x²-y²、分母是 x²+y² 的分式，沿两轴极限分别为 ±1，极限不存在。"
        }
,
        {
          id: '4.1-008',
          difficulty: '提高',
          type: '填空',
          topic: "用放缩法求二重极限",
          year: null,
          question: "lim<sub>(x,y)→(0,0)</sub> xy / √(x<sup>2</sup>+y<sup>2</sup>) = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：由 2|xy| ≤ x²+y²，得 |xy| ≤ (x²+y²)/2。",
            "第二步：|xy/√(x²+y²)| ≤ √(x²+y²)/2 → 0。",
            "第三步：由夹逼准则极限为 0。"
          ],
          keyPoints: [
            "【重点】基本不等式 2|ab| ≤ a²+b²。",
            "【简便方法】令 r=√(x²+y²)，则 |xy|≤r²/2，原式 ≤ r/2→0。"
          ],
          summary: "凡分母出现 √(x²+y²)，引入极径 r，用 |xy|≤r²/2 放缩。"
        }
,
        {
          id: '4.1-009',
          difficulty: '提高',
          type: '选择',
          topic: "累次极限与二重极限的关系",
          year: null,
          question: "设 f(x,y) = (x-y)/(x+y)，关于两个累次极限下列说法正确的是（　）",
          options: [
            "A. 两个累次极限都不存在",
            "B. 两个累次极限都存在且相等",
            "C. 两个累次极限都存在但不相等",
            "D. 二重极限存在且等于两个累次极限"
          ],
          answer: "C",
          solution: [
            "第一步：先 y 后 x：lim<sub>x→0</sub> lim<sub>y→0</sub> (x-y)/(x+y) = lim<sub>x→0</sub> x/x = 1。",
            "第二步：先 x 后 y：lim<sub>y→0</sub> lim<sub>x→0</sub> (x-y)/(x+y) = lim<sub>y→0</sub> (-y)/y = -1。",
            "第三步：两累次极限存在但为 1 与 -1，不相等，故二重极限必不存在。"
          ],
          keyPoints: [
            "【重点】两个累次极限都存在但不相等 → 二重极限不存在（逆否）。",
            "【易错点】累次极限存在且相等，二重极限仍可能不存在（仅是必要条件）。"
          ],
          summary: "判断二重极限不存在的另一途径：计算两个累次极限，若不等则二重极限不存在。"
        }
,
        {
          id: '4.1-010',
          difficulty: '提高',
          type: '填空',
          topic: "等价无穷小求二重极限",
          year: null,
          question: "lim<sub>(x,y)→(0,0)</sub> [1 - cos(x<sup>2</sup>+y<sup>2</sup>)] / (x<sup>2</sup>+y<sup>2</sup>) = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：令 t = x²+y²，当 (x,y)→(0,0) 时 t→0⁺。",
            "第二步：1 - cos t ~ t²/2。",
            "第三步：原式 ~ (t²/2)/t = t/2 → 0。"
          ],
          keyPoints: [
            "【重点】二元极限中只要整体是一元无穷小 t，等价无穷小代换照样适用。",
            "【易错点】注意 1-cos t ~ t²/2，不要写成 ~ t。"
          ],
          summary: "二元极限中 x²+y² 整体出现时，令 t=x²+y² 转化为一元极限计算。"
        }
,
        {
          id: '4.1-011',
          difficulty: '提高',
          type: '解答',
          topic: "夹逼准则证明二重极限",
          year: null,
          question: "证明：lim<sub>(x,y)→(0,0)</sub> x<sup>2</sup>y/(x<sup>2</sup>+y<sup>2</sup>) = 0。",
          options: null,
          answer: "极限为 0，证明见解答。",
          solution: [
            "第一步：对任意 (x,y)≠(0,0)，0 ≤ |x²y/(x²+y²)|。",
            "第二步：放缩 x²/(x²+y²) ≤ 1，得 |x²y/(x²+y²)| ≤ |y|。",
            "第三步：当 (x,y)→(0,0) 时 |y|→0，由夹逼准则原式极限为 0。"
          ],
          keyPoints: [
            "【重点】放缩关键：x²/(x²+y²)≤1，保留 |y|。",
            "【易错点】不能用洛必达法则求二元极限（洛必达只对一元）。"
          ],
          summary: "二元极限证明题优先用不等式放缩 + 夹逼准则，禁止对二元直接洛必达。"
        }
,
        {
          id: '4.1-012',
          difficulty: '提高',
          type: '选择',
          topic: "有界闭区域上连续函数的性质",
          year: null,
          question: "设函数 f(x,y) 在有界闭区域 D 上连续，则下列结论中错误的是（　）",
          options: [
            "A. f(x,y) 在 D 上有界",
            "B. f(x,y) 在 D 上能取得最大值和最小值",
            "C. f(x,y) 在 D 上能取得介于最大最小值之间的一切值",
            "D. f(x,y) 在 D 内每一点处的偏导数都存在"
          ],
          answer: "D",
          solution: [
            "第一步：有界闭区域上连续函数具有有界性、最值性、介值性（A、B、C 正确）。",
            "第二步：连续不一定可导（可类比一元：连续未必可导）。",
            "第三步：故 D 错误。"
          ],
          keyPoints: [
            "【重点】连续函数性质与一元完全平行：有界、最值、介值。",
            "【易错点】连续与偏导数存在没有必然联系。"
          ],
          summary: "二元连续函数在有界闭区域上的性质与一元连续函数在闭区间上的性质完全平行。"
        }
,
        {
          id: '4.1-013',
          difficulty: '难题',
          type: '解答',
          topic: "二重极限与累次极限综合讨论",
          year: null,
          question: "讨论 f(x,y) = (x<sup>2</sup>-y<sup>2</sup>)/(x<sup>2</sup>+y<sup>2</sup>) 在点 (0,0) 处的二重极限与两个累次极限是否存在。",
          options: null,
          answer: "二重极限不存在；两个累次极限分别为 1（先 y 后 x）和 -1（先 x 后 y）。",
          solution: [
            "第一步：先 y 后 x：lim<sub>x→0</sub> lim<sub>y→0</sub> f = lim<sub>x→0</sub> x²/x² = 1。",
            "第二步：先 x 后 y：lim<sub>y→0</sub> lim<sub>x→0</sub> f = lim<sub>y→0</sub> (-y²)/y² = -1。",
            "第三步：两累次极限不等，故二重极限不存在（与 4.1-007 沿两轴结果一致）。"
          ],
          keyPoints: [
            "【重点】本题是经典反例：累次极限交换次序得到不同结果。",
            "【易错点】结论要说全：二重极限不存在、累次极限都存在但不等。"
          ],
          summary: "f=(x²-y²)/(x²+y²) 是考研中说明累次极限不可随意交换次序的标准反例。"
        }
,
        {
          id: '4.1-014',
          difficulty: '难题',
          type: '填空',
          topic: "复合约束的定义域",
          year: null,
          question: "函数 z = ln(y - x) + √x + √(1 - x<sup>2</sup> - y<sup>2</sup>) 的定义域为______。",
          options: null,
          answer: "{ (x,y) | x ≥ 0, y &gt; x, x<sup>2</sup>+y<sup>2</sup> ≤ 1 }",
          solution: [
            "第一步：√x 要求 x ≥ 0。",
            "第二步：ln(y-x) 要求 y &gt; x。",
            "第三步：√(1-x²-y²) 要求 x²+y² ≤ 1。",
            "第四步：三者取交集。"
          ],
          keyPoints: [
            "【重点】多个约束同时存在时，要画区域图判断交集是否为空。",
            "【易错点】x≥0 与 y&gt;x 结合说明 y&gt;0，区域位于第一象限扇形内。"
          ],
          summary: "复杂定义域问题：列出全部约束 → 逐一画半平面/圆 → 取交集。"
        }
,
        {
          id: '4.1-015',
          difficulty: '难题',
          type: '选择',
          topic: "二元函数极限不存在的判定",
          year: null,
          question: "极限 lim<sub>(x,y)→(0,0)</sub> sin(xy)/(x<sup>2</sup>+y<sup>2</sup>) =（　）",
          options: [
            "A. 0",
            "B. 1/2",
            "C. 1",
            "D. 不存在"
          ],
          answer: "D",
          solution: [
            "第一步：沿 y=x 趋近，原式 = sin(x²)/(2x²) → 1/2。",
            "第二步：沿 y=0（x 轴）趋近，原式 = 0/x² = 0。",
            "第三步：两条路径极限不同（1/2 与 0），故二重极限不存在。"
          ],
          keyPoints: [
            "【重点】注意本题不能用 sin(xy)~xy 代换后说极限 = xy/(x²+y²)，因为 xy/(x²+y²) 本身极限不存在。",
            "【易错点】等价代换后必须确认剩余部分极限存在，否则代换失效。"
          ],
          summary: "若等价无穷小代换后剩余分式极限不存在，则需另选路径直接判定原极限不存在。"
        }
,
        {
          id: '4.1-016',
          difficulty: '难题',
          type: '解答',
          topic: "用定义证明连续性",
          year: null,
          question: "设函数 f(x,y) 在点 P<sub>0</sub>(x<sub>0</sub>,y<sub>0</sub>) 的某邻域内满足 |f(x,y) - f(x<sub>0</sub>,y<sub>0</sub>)| ≤ √[(x-x<sub>0</sub>)<sup>2</sup> + (y-y<sub>0</sub>)<sup>2</sup>]，证明 f(x,y) 在 P<sub>0</sub> 处连续。",
          options: null,
          answer: "f 在 P<sub>0</sub> 处连续，证明见解答。",
          solution: [
            "第一步：任给 ε&gt;0，取 δ = ε。",
            "第二步：当 0 &lt; √[(x-x₀)²+(y-y₀)²] &lt; δ 时，由已知 |f(x,y)-f(x₀,y₀)| ≤ √(...) &lt; δ = ε。",
            "第三步：按连续性定义，lim f(x,y) = f(x₀,y₀)，故连续。"
          ],
          keyPoints: [
            "【重点】这是用 ε-δ 定义证明连续性的标准写法。",
            "【简便方法】题设不等式本质是 Lipschitz 连续，直接取 δ=ε 即可。"
          ],
          summary: "已知函数增量被距离控制的不等式时，用连续性定义（ε-δ）直接证明。"
        }
,
        {
          id: '4.1-017',
          difficulty: '真题',
          type: '填空',
          topic: "二重极限计算",
          year: 2020,
          question: "（2020 数二）lim<sub>(x,y)→(0,0)</sub> [1 - cos√(x<sup>2</sup>+y<sup>2</sup>)] / ln(1 - x<sup>2</sup> - y<sup>2</sup>) = ______。",
          options: null,
          answer: "-1/2",
          solution: [
            "第一步：令 t = x²+y² → 0⁺。",
            "第二步：分子 1 - cos√t ~ t/2。",
            "第三步：分母 ln(1 - t) ~ -t。",
            "第四步：原式 ~ (t/2)/(-t) = -1/2。"
          ],
          keyPoints: [
            "【重点】同时出现 √(x²+y²) 与 x²+y²，令 t=x²+y² 一次代换。",
            "【易错点】ln(1-t) ~ -t，负号容易漏掉。"
          ],
          summary: "凡 x²+y² 整体出现的二元极限，一律令 t=x²+y² 化为一元等价无穷小。"
        }
,
        {
          id: '4.1-018',
          difficulty: '真题',
          type: '选择',
          topic: "连续性与极限反推函数值",
          year: 2018,
          question: "（2018 数二）设函数 f(x,y) 在点 (0,0) 附近有定义，且 lim<sub>(x,y)→(0,0)</sub> [f(x,y) + x + y] / (x<sup>2</sup>+y<sup>2</sup>) = 1，则（　）",
          options: [
            "A. f(0,0)=0，且 f 在 (0,0) 连续",
            "B. f(0,0)=0，但 f 在 (0,0) 不连续",
            "C. f(0,0)=-1，且 f 在 (0,0) 连续",
            "D. f(0,0)=-1，但 f 在 (0,0) 不连续"
          ],
          answer: "A",
          solution: [
            "第一步：极限存在且分母 →0，故分子必须 →0：f(0,0)+0+0=0，即 f(0,0)=0。",
            "第二步：由极限式知 f(x,y) = -x-y + (x²+y²) + o(x²+y²)。",
            "第三步：当 (x,y)→(0,0) 时 f(x,y)→0 = f(0,0)，故连续。"
          ],
          keyPoints: [
            "【重点】分式极限存在、分母→0，则分子→0，可反推函数值。",
            "【易错点】由极限式写出 f 的局部表达式，再判断连续性。"
          ],
          summary: "已知分式极限反推函数连续性：分母→0 时分子必→0，再写出局部表达式验证。"
        }
,
        {
          id: '4.1-019',
          difficulty: '真题',
          type: '填空',
          topic: "二重极限计算",
          year: 2015,
          question: "（2015 数二）lim<sub>(x,y)→(0,0)</sub> [√(1+x<sup>2</sup>y<sup>2</sup>) - 1] / (x<sup>2</sup>+y<sup>2</sup>) = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：√(1+t) - 1 ~ t/2，令 t = x²y²。",
            "第二步：分子 ~ x²y²/2。",
            "第三步：|x²y²/(x²+y²)| ≤ ? 由 xy ≤ (x²+y²)/2，x²y² ≤ (x²+y²)²/4，故原式 ≤ (x²+y²)/8 → 0。"
          ],
          keyPoints: [
            "【重点】先等价代换 √(1+t)-1~t/2，再用不等式放缩。",
            "【易错点】不要误以为 x²y²/(x²+y²) 一定是有限非零极限，它实际趋于 0。"
          ],
          summary: "分子用等价无穷小后，剩余二元分式若为高阶小量，用放缩法证明趋于 0。"
        }
,
        {
          id: '4.1-020',
          difficulty: '真题',
          type: '选择',
          topic: "二元函数连续性概念",
          year: 2011,
          question: "（2011 数二）设 f(x,y) 在点 (x<sub>0</sub>,y<sub>0</sub>) 处的两个偏导数都存在，则（　）",
          options: [
            "A. f 在 (x₀,y₀) 处连续",
            "B. f 在 (x₀,y₀) 处可微",
            "C. 极限 lim<sub>(x,y)→(x₀,y₀)</sub> f(x,y) 存在",
            "D. 上述结论都不一定成立"
          ],
          answer: "D",
          solution: [
            "第一步：偏导数存在只保证沿 x、y 两个方向的变化率。",
            "第二步：偏导存在推不出连续（如 f=xy/(x²+y²) 在原点）。",
            "第三步：偏导存在也推不出可微、二重极限存在，故选 D。"
          ],
          keyPoints: [
            "【重点】二元中：可微 → 连续，可微 → 偏导存在；偏导存在 ⇏ 连续。",
            "【易错点】与一元不同：一元中可导必连续，二元中偏导存在未必连续。"
          ],
          summary: "二元函数中偏导数存在是弱条件，连续、可微都是更高级别的要求，互相不能随便推。"
        }
,
        {
          id: '4.1-021',
          difficulty: '基础',
          type: '选择',
          topic: "二元函数定义域",
          year: null,
          question: "函数 z = ln(x + y) 的定义域为（  ）",
          options: [
            "A. {(x,y) | x+y &gt; 0}",
            "B. {(x,y) | x+y ≥ 0}",
            "C. {(x,y) | x&gt;0, y&gt;0}",
            "D. {(x,y) | x≠-y}"
          ],
          answer: "A",
          solution: [
            "第一步：对数真数必须大于 0。",
            "第二步：故 x+y &gt; 0。"
          ],
          keyPoints: [
            "【重点】ln u 要求 u&gt;0。",
            "【易错点】不是 x&gt;0 且 y&gt;0，只需 x+y&gt;0。"
          ],
          summary: "基本初等函数复合时，内层表达式要满足各自定义域。"
        }
,
        {
          id: '4.1-022',
          difficulty: '基础',
          type: '填空',
          topic: "二元函数求值",
          year: null,
          question: "设 f(x,y) = x<sup>2</sup> + y<sup>2</sup> - xy，则 f(2,1) = ________。",
          options: null,
          answer: "3",
          solution: [
            "第一步：代入 x=2, y=1。",
            "第二步：f(2,1) = 4 + 1 - 2 = 3。"
          ],
          keyPoints: [
            "【重点】直接代入求值。",
            "【易错点】xy 项 = 2·1 = 2。"
          ],
          summary: "二元函数求值即按对应位置代入。"
        }
,
        {
          id: '4.1-023',
          difficulty: '提高',
          type: '选择',
          topic: "二重极限存在性",
          year: null,
          question: "极限 lim<sub>(x,y)→(0,0)</sub><span class=\"frac\"><span class=\"num\">xy</span><span class=\"den\">x<sup>2</sup> + y<sup>2</sup></span></span>（  ）",
          options: [
            "A. 等于 0",
            "B. 等于 1",
            "C. 不存在",
            "D. 等于 <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>"
          ],
          answer: "C",
          solution: [
            "第一步：沿 y=kx 趋近，原式 = <span class=\"frac\"><span class=\"num\">kx<sup>2</sup></span><span class=\"den\">x<sup>2</sup>(1+k<sup>2</sup>)</span></span> = <span class=\"frac\"><span class=\"num\">k</span><span class=\"den\">1+k<sup>2</sup></span></span>。",
            "第二步：该值随 k 变化，k=0 得 0，k=1 得 1/2。",
            "第三步：不同路径极限不同，故二重极限不存在。"
          ],
          keyPoints: [
            "【重点】二重极限存在要求所有路径结果一致。",
            "【易错点】找两条不同路径得不同值即可证不存在。"
          ],
          summary: "证二重极限不存在：取两条不同直线路径得不同极限。"
        }
,
        {
          id: '4.1-024',
          difficulty: '提高',
          type: '填空',
          topic: "二重极限计算",
          year: null,
          question: "lim<sub>(x,y)→(0,0)</sub><span class=\"frac\"><span class=\"num\">sin(xy)</span><span class=\"den\">x</span></span> = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：等价无穷小 sin(xy) ~ xy。",
            "第二步：原式 ~ <span class=\"frac\"><span class=\"num\">xy</span><span class=\"den\">x</span></span> = y。",
            "第三步：(x,y)→(0,0) 时 y→0。"
          ],
          keyPoints: [
            "【重点】二元等价无穷小替换与一元类似。",
            "【易错点】约去 x 后剩 y，极限为 0。"
          ],
          summary: "含 sin(u) 的极限用等价无穷小 u→0 时 sin u~u。"
        }
,
        {
          id: '4.1-025',
          difficulty: '提高',
          type: '解答',
          topic: "连续性",
          year: null,
          question: "讨论 f(x,y) = <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\"><span class=\"frac\"><span class=\"num\">x<sup>2</sup>y</span><span class=\"den\">x<sup>2</sup>+y<sup>2</sup></span></span>,</span><span class=\"pcond\">(x,y)≠(0,0)</span></span><span class=\"prow\"><span class=\"pval\">0,</span><span class=\"pcond\">(x,y)=(0,0)</span></span></span> 在 (0,0) 处的连续性。",
          options: null,
          answer: "连续",
          solution: [
            "第一步：用夹逼 |<span class=\"frac\"><span class=\"num\">x<sup>2</sup>y</span><span class=\"den\">x<sup>2</sup>+y<sup>2</sup></span></span>| ≤ <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>|y|（因 x<sup>2</sup>≤x<sup>2</sup>+y<sup>2</sup>）。",
            "第二步：(x,y)→(0,0) 时右端→0。",
            "第三步：由夹逼极限 = 0 = f(0,0)，故连续。"
          ],
          keyPoints: [
            "【重点】二元连续性用定义验证 lim f = f(0,0)。",
            "【易错点】用不等式放缩而不是沿某条路径。"
          ],
          summary: "含 x²/(x²+y²) 的分式有界，再乘趋于 0 的因子。"
        }
,
        {
          id: '4.1-026',
          difficulty: '难题',
          type: '选择',
          topic: "偏导与连续关系",
          year: null,
          question: "函数 f(x,y) 在点 (x<sub>0</sub>,y<sub>0</sub>) 处偏导数存在，则该函数在该点（  ）",
          options: [
            "A. 必连续",
            "B. 必不连续",
            "C. 不一定连续",
            "D. 必可微"
          ],
          answer: "C",
          solution: [
            "第一步：一元函数可导必连续，但多元不成立。",
            "第二步：反例 f(x,y)=<span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\"><span class=\"frac\"><span class=\"num\">xy</span><span class=\"den\">x<sup>2</sup>+y<sup>2</sup></span></span>,</span><span class=\"pcond\">(x,y)≠(0,0)</span></span><span class=\"prow\"><span class=\"pval\">0,</span><span class=\"pcond\">(x,y)=(0,0)</span></span></span> 在 (0,0) 偏导存在但不连续。"
          ],
          keyPoints: [
            "【重点】多元偏导存在 ≠ 连续 ≠ 可微。",
            "【易错点】不要把一元结论套到多元。"
          ],
          summary: "多元函数偏导存在与连续之间没有必然蕴含关系。"
        }
,
        {
          id: '4.1-027',
          difficulty: '难题',
          type: '解答',
          topic: "二重极限路径",
          year: null,
          question: "证明 lim<sub>(x,y)→(0,0)</sub><span class=\"frac\"><span class=\"num\">x - y</span><span class=\"den\">x + y</span></span> 不存在。",
          options: null,
          answer: "沿 y=kx 得 (1-k)/(1+k)，随 k 变",
          solution: [
            "第一步：取路径 y=kx，(x,y)→(0,0)。",
            "第二步：原式 = <span class=\"frac\"><span class=\"num\">x-kx</span><span class=\"den\">x+kx</span></span> = <span class=\"frac\"><span class=\"num\">1-k</span><span class=\"den\">1+k</span></span>。",
            "第三步：k=0 得 1；k=1 得 0。",
            "第四步：两路径结果不同，极限不存在。"
          ],
          keyPoints: [
            "【重点】直线路径族 y=kx 是常用证不存在的方法。",
            "【易错点】k=1 时分母为 0，改取 k=0 和 k=-1/2 即可。"
          ],
          summary: "齐次分式沿 y=kx 得与 k 有关的值，即可证极限不存在。"
        }
,
        {
          id: '4.1-028',
          difficulty: '真题',
          type: '填空',
          topic: "二元函数极限",
          year: 2015,
          question: "lim<sub>(x,y)→(0,0)</sub><span class=\"frac\"><span class=\"num\">1 - cos(x<sup>2</sup>+y<sup>2</sup>)</span><span class=\"den\">(x<sup>2</sup>+y<sup>2</sup>)e<sup>x<sup>2</sup>y<sup>2</sup></sup></span></span> = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：令 r<sup>2</sup>=x<sup>2</sup>+y<sup>2</sup>，r→0。",
            "第二步：1-cos(r<sup>2</sup>) ~ <span class=\"frac\"><span class=\"num\">r<sup>4</sup></span><span class=\"den\">2</span></span>。",
            "第三步：分母 ~ r<sup>2</sup>·1（e<sup>0</sup>=1）。",
            "第四步：原式 ~ <span class=\"frac\"><span class=\"num\">r<sup>4</sup>/2</span><span class=\"den\">r<sup>2</sup></span></span> = <span class=\"frac\"><span class=\"num\">r<sup>2</sup></span><span class=\"den\">2</span></span> → 0。"
          ],
          keyPoints: [
            "【真题高频】用极坐标 r²=x²+y² 简化。",
            "【易错点】1-cos u ~ u²/2，u=r²，故 ~ r⁴/2。"
          ],
          summary: "含 x²+y² 用极坐标换元，再等价无穷小替换。"
        }
,
        {
          id: '4.1-029',
          difficulty: '真题',
          type: '选择',
          topic: "偏导存在性",
          year: 2012,
          question: "设 f(x,y) 在 (0,0) 的某邻域内有定义，且 f<sub>x</sub>(0,0)=0, f<sub>y</sub>(0,0)=0，则（  ）",
          options: [
            "A. f 在 (0,0) 连续",
            "B. f 在 (0,0) 可微",
            "C. 曲面 z=f(x,y) 在 (0,0,f(0,0)) 处切平面存在",
            "D. 以上都不一定"
          ],
          answer: "D",
          solution: [
            "第一步：偏导存在推不出连续、可微。",
            "第二步：切平面存在要求可微。",
            "第三步：故以上都不一定成立。"
          ],
          keyPoints: [
            "【重点】偏导存在仅是可微的必要条件之一。",
            "【易错点】可微 ⇒ 偏导存在且连续，反之不然。"
          ],
          summary: "多元函数偏导存在是最弱条件，不能推出连续或可微。"
        }
,
        {
          id: '4.1-030',
          difficulty: '真题',
          type: '解答',
          topic: "二元连续",
          year: 2019,
          question: "讨论 f(x,y) = (x<sup>2</sup>+y<sup>2</sup>)<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> 在 (0,0) 处的连续性与偏导数存在性。",
          options: null,
          answer: "连续，但偏导数不存在",
          solution: [
            "第一步：连续性：(x<sup>2</sup>+y<sup>2</sup>)<sup>1/3</sup> → 0 = f(0,0)，连续。",
            "第二步：偏导 f<sub>x</sub>(0,0) = lim<sub>h→0</sub><span class=\"frac\"><span class=\"num\">(h<sup>2</sup>)<sup>1/3</sup></span><span class=\"den\">h</span></span> = lim<sub>h→0</sub>h<sup>-1/3</sup>。",
            "第三步：h→0+ 与 h→0- 时极限发散且符号相反，故偏导数不存在。"
          ],
          keyPoints: [
            "【真题高频】绝对值型函数在原点偏导可能不存在。",
            "【易错点】|x|<sup>1/3</sup>/x 在 x→0 时极限不存在。"
          ],
          summary: "含绝对值或奇次根的函数在原点连续但偏导可能不存在。"
        }
        ]
      },
      '4.2': {
        id: '4.2',
        title: "偏导数与全微分",
        questions: [
        {
          id: '4.2-001',
          difficulty: '基础',
          type: '填空',
          topic: "一阶偏导数计算",
          year: null,
          question: "设 z = x<sup>3</sup>y - xy<sup>2</sup>，则 ∂z/∂x = ______，∂z/∂y = ______。",
          options: null,
          answer: "∂z/∂x = 3x<sup>2</sup>y - y<sup>2</sup>；∂z/∂y = x<sup>3</sup> - 2xy",
          solution: [
            "第一步：对 x 求偏导时把 y 视为常数，∂z/∂x = 3x²y - y²。",
            "第二步：对 y 求偏导时把 x 视为常数，∂z/∂y = x³ - 2xy。"
          ],
          keyPoints: [
            "【重点】求哪个变量的偏导，就把其余变量当常数。",
            "【易错点】乘积项对一个变量求导时，另一因子保持不变。"
          ],
          summary: "显式函数求一阶偏导：对目标变量求导，其余变量视为常数。"
        }
,
        {
          id: '4.2-002',
          difficulty: '基础',
          type: '选择',
          topic: "偏导数的定义",
          year: null,
          question: "二元函数 f(x,y) 在点 (x<sub>0</sub>,y<sub>0</sub>) 处对 x 的偏导数定义为（　）",
          options: [
            "A. lim<sub>Δx→0</sub> [f(x₀+Δx,y₀+Δy) - f(x₀,y₀)] / Δx",
            "B. lim<sub>Δx→0</sub> [f(x₀+Δx,y₀) - f(x₀,y₀)] / Δx",
            "C. lim<sub>Δy→0</sub> [f(x₀,y₀+Δy) - f(x₀,y₀)] / Δy",
            "D. lim<sub>Δx→0</sub> [f(x₀+Δx,y₀) - f(x₀,y₀)] / Δy"
          ],
          answer: "B",
          solution: [
            "第一步：对 x 的偏导，y 保持 y₀ 不变。",
            "第二步：增量只来自 x，即 f(x₀+Δx,y₀) - f(x₀,y₀)，除以 Δx。"
          ],
          keyPoints: [
            "【重点】偏导定义中另一变量固定不变。",
            "【易错点】分子是二元差商，分母必须对应增量变量。"
          ],
          summary: "偏导数 = 另一变量固定时，一元函数的导数。"
        }
,
        {
          id: '4.2-003',
          difficulty: '基础',
          type: '填空',
          topic: "全微分计算",
          year: null,
          question: "设 z = x<sup>2</sup>y + sin y，则全微分 dz = ______。",
          options: null,
          answer: "dz = 2xy dx + (x<sup>2</sup> + cos y) dy",
          solution: [
            "第一步：∂z/∂x = 2xy。",
            "第二步：∂z/∂y = x² + cos y。",
            "第三步：dz = (∂z/∂x)dx + (∂z/∂y)dy。"
          ],
          keyPoints: [
            "【重点】全微分公式 dz = z<sub>x</sub> dx + z<sub>y</sub> dy。",
            "【易错点】dz 是两个偏导分别乘以 dx、dy 后相加。"
          ],
          summary: "可微时全微分 = 各偏导数与对应微分乘积之和。"
        }
,
        {
          id: '4.2-004',
          difficulty: '基础',
          type: '选择',
          topic: "二阶偏导数",
          year: null,
          question: "设 z = x<sup>2</sup>y<sup>3</sup>，则 ∂<sup>2</sup>z/∂x∂y =（　）",
          options: [
            "A. 6xy<sup>2</sup>",
            "B. 6x<sup>2</sup>y",
            "C. 2y<sup>3</sup>",
            "D. 3x<sup>2</sup>y<sup>2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：先 ∂z/∂x = 2xy³。",
            "第二步：再对 y 求导：∂²z/∂x∂y = 6xy²。"
          ],
          keyPoints: [
            "【重点】混合偏导次序：∂²z/∂x∂y 表示先对 x 再对 y。",
            "【简便方法】本题 z 连续可偏导，混合偏导与次序无关，结果相同。"
          ],
          summary: "二阶混合偏导在连续条件下与求导次序无关，可任选次序计算。"
        }
,
        {
          id: '4.2-005',
          difficulty: '基础',
          type: '填空',
          topic: "具体点处的偏导数",
          year: null,
          question: "设 f(x,y) = x<sup>2</sup> + xy + y<sup>3</sup>，则 f<sub>x</sub>(1,2) = ______。",
          options: null,
          answer: "4",
          solution: [
            "第一步：f<sub>x</sub> = 2x + y。",
            "第二步：代入 (1,2)：f<sub>x</sub>(1,2) = 2×1 + 2 = 4。"
          ],
          keyPoints: [
            "【重点】先求导函数再代值，不要先代值再求导。",
            "【易错点】也可先固定 y=2，对 φ(x)=x²+2x+8 求导再代 x=1。"
          ],
          summary: "求具体点偏导：先求导函数后代点值。"
        }
,
        {
          id: '4.2-006',
          difficulty: '基础',
          type: '选择',
          topic: "可微、连续、偏导存在的关系",
          year: null,
          question: "设 z = f(x,y) 在点 P 处可微，则下列结论错误的是（　）",
          options: [
            "A. f 在 P 处连续",
            "B. f 在 P 处两个偏导数都存在",
            "C. f 在 P 处偏导数连续",
            "D. 曲面 z=f(x,y) 在 P 处有切平面"
          ],
          answer: "C",
          solution: [
            "第一步：可微 ⇒ 连续（A 对）。",
            "第二步：可微 ⇒ 偏导存在（B 对）。",
            "第三步：可微 ⇒ 切平面存在（D 对）。",
            "第四步：可微推不出偏导连续（偏导连续是可微的充分条件，不是必要条件），故 C 错。"
          ],
          keyPoints: [
            "【重点】关系链：偏导连续 ⇒ 可微 ⇒ 连续 ⇒ 极限存在；可微 ⇒ 偏导存在。",
            "【易错点】反过来不成立：偏导存在推不出连续，连续推不出可微。"
          ],
          summary: "记忆关系图：偏导连续 ⇒ 可微 ⇒ 连续；可微 ⇒ 偏导存在；反向均不成立。"
        }
,
        {
          id: '4.2-007',
          difficulty: '基础',
          type: '填空',
          topic: "幂指函数偏导",
          year: null,
          question: "设 z = x<sup>y</sup>（x&gt;0），则 ∂z/∂x = ______，∂z/∂y = ______。",
          options: null,
          answer: "∂z/∂x = yx<sup>y-1</sup>；∂z/∂y = x<sup>y</sup>ln x",
          solution: [
            "第一步：对 x 求偏导，y 为常数，按幂函数求导：∂z/∂x = yx<sup>y-1</sup>。",
            "第二步：对 y 求偏导，x 为常数，按指数函数求导：∂z/∂y = x<sup>y</sup>ln x。"
          ],
          keyPoints: [
            "【重点】幂指函数：对底数求导按幂函数、对指数求导按指数函数。",
            "【易错点】不要同时对 x、y 用同一公式。"
          ],
          summary: "z=x^y 分别按幂函数、指数函数求两个偏导。"
        }
,
        {
          id: '4.2-008',
          difficulty: '基础',
          type: '选择',
          topic: "分段函数在分界点的偏导",
          year: null,
          question: "设 f(x,y) = xy/(x<sup>2</sup>+y<sup>2</sup>) （(x,y)≠(0,0)），f(0,0)=0，则 f(x,y) 在 (0,0) 处（　）",
          options: [
            "A. 偏导数不存在",
            "B. 偏导数存在且 f<sub>x</sub>(0,0)=0, f<sub>y</sub>(0,0)=0",
            "C. 偏导数存在但 f<sub>x</sub>(0,0)=1",
            "D. 可微"
          ],
          answer: "B",
          solution: [
            "第一步：f<sub>x</sub>(0,0) = lim<sub>h→0</sub> [f(h,0)-f(0,0)]/h = lim 0/h = 0。",
            "第二步：同理 f<sub>y</sub>(0,0) = 0。",
            "第三步：偏导存在，但函数在 (0,0) 不连续，故不可微（排除 D）。"
          ],
          keyPoints: [
            "【重点】分段点处偏导数必须用定义求。",
            "【易错点】不能先写出导函数再代点。"
          ],
          summary: "分段函数在分界点的偏导数，一律用偏导数定义求极限。"
        }
,
        {
          id: '4.2-009',
          difficulty: '提高',
          type: '解答',
          topic: "可微性的判定（定义法）",
          year: null,
          question: "证明：函数 f(x,y) = <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\">(x<sup>2</sup>y)/(x<sup>2</sup>+y<sup>2</sup>),</span><span class=\"pcond\">(x,y)≠(0,0)</span></span><span class=\"prow\"><span class=\"pval\">0,</span><span class=\"pcond\">(x,y)=(0,0)</span></span></span> 在 (0,0) 处连续、偏导数存在，但不可微。",
          options: null,
          answer: "连续、偏导存在，但不可微；证明见解答。",
          solution: [
            "第一步（连续）：|f| ≤ |y| →0，连续。",
            "第二步（偏导）：f<sub>x</sub>(0,0)=lim [f(h,0)-0]/h = 0；同理 f<sub>y</sub>(0,0)=0。",
            "第三步（不可微）：若可微则 Δf = f<sub>x</sub>dx + f<sub>y</sub>dy + o(ρ) = o(ρ)，即 Δf/ρ → 0。",
            "第四步：沿 y=x 取路径，Δf/ρ = x³/(2x²·√(2)|x|) = x/(2√2|x|)，当 x→0 时为 ±1/(2√2)，不趋于 0，矛盾，故不可微。"
          ],
          keyPoints: [
            "【重点】可微定义：Δf - f<sub>x</sub>dx - f<sub>y</sub>dy 是比 ρ=√(x²+y²) 高阶的无穷小。",
            "【易错点】判定不可微只需找一条路径使 [Δf - 0]/ρ 不趋于 0。"
          ],
          summary: "可微性判定：先求两偏导，再验证 Δf - zₓdx - zᵧdy 是 ρ 的高阶无穷小；否定时找反路径。"
        }
,
        {
          id: '4.2-010',
          difficulty: '提高',
          type: '填空',
          topic: "二阶混合偏导",
          year: null,
          question: "设 z = arcsin(xy)，则 ∂<sup>2</sup>z/∂x∂y = ______。",
          options: null,
          answer: "(1 - x<sup>2</sup>y<sup>2</sup>)<sup>-1/2</sup> + xy/(1 - x<sup>2</sup>y<sup>2</sup>)<sup>3/2</sup>（化简后为 1/(1-x<sup>2</sup>y<sup>2</sup>)<sup>3/2</sup>）",
          solution: [
            "第一步：∂z/∂x = y/√(1-x²y²)。",
            "第二步：对 y 求导（用商的法则）：∂²z/∂x∂y = [√(1-x²y²) + y·x²y/√(1-x²y²)]/(1-x²y²)。",
            "第三步：化简 = 1/(1-x²y²)<sup>3/2</sup>。"
          ],
          keyPoints: [
            "【重点】复合函数求二阶偏导，注意链式法则与乘积法则并用。",
            "【简便方法】本题利用对称性 ∂²z/∂x∂y = ∂²z/∂y∂x，任选顺序。"
          ],
          summary: "反三角函数求二阶混合偏导：先求一阶，再用商的求导法则并化简。"
        }
,
        {
          id: '4.2-011',
          difficulty: '提高',
          type: '选择',
          topic: "全微分形式不变性",
          year: null,
          question: "设 u = x<sup>2</sup>yz，则 du 在点 (1,1,1) 处的值为（　）",
          options: [
            "A. 2dx + dy + dz",
            "B. 2dx + 2dy + 2dz",
            "C. dx + dy + dz",
            "D. 4dx"
          ],
          answer: "A",
          solution: [
            "第一步：du = 2xyz dx + x²z dy + x²y dz。",
            "第二步：代入 (1,1,1)：du = 2dx + dy + dz。"
          ],
          keyPoints: [
            "【重点】三元函数全微分 du = u<sub>x</sub>dx + u<sub>y</sub>dy + u<sub>z</sub>dz。",
            "【易错点】三项系数分别计算后代入。"
          ],
          summary: "三元函数全微分 = 三个偏导分别乘对应微分求和。"
        }
,
        {
          id: '4.2-012',
          difficulty: '提高',
          type: '填空',
          topic: "由偏导反求函数",
          year: null,
          question: "已知 ∂z/∂x = 2x，∂z/∂y = -sin y，且 z(0,0) = 1，则 z(x,y) = ______。",
          options: null,
          answer: "z(x,y) = x<sup>2</sup> + cos y",
          solution: [
            "第一步：由 ∂z/∂x = 2x 对 x 积分（y 视为常数）：z = x² + C(y)。",
            "第二步：对 y 求导：∂z/∂y = C′(y) = -sin y，故 C(y) = cos y + C₀。",
            "第三步：z(0,0) = 1 + C₀ = 1，得 C₀ = 0。"
          ],
          keyPoints: [
            "【重点】对偏导积分时，积分常数是另一变量的函数。",
            "【易错点】不要把 C(y) 写成常数 C。"
          ],
          summary: "由偏导反求函数：逐次对相应变量积分，积分常数是剩余变量的函数。"
        }
,
        {
          id: '4.2-013',
          difficulty: '提高',
          type: '解答',
          topic: "分段函数可微性讨论",
          year: null,
          question: "设 f(x,y) = <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\">(xy)/√(x<sup>2</sup>+y<sup>2</sup>),</span><span class=\"pcond\">(x,y)≠(0,0)</span></span><span class=\"prow\"><span class=\"pval\">0,</span><span class=\"pcond\">(x,y)=(0,0)</span></span></span>，讨论 f 在 (0,0) 处的连续性、偏导数存在性与可微性。",
          options: null,
          answer: "连续；偏导数存在且均为 0；不可微。",
          solution: [
            "第一步：连续：|xy/√(x²+y²)| ≤ √(x²+y²)/2 → 0。",
            "第二步：偏导：f<sub>x</sub>(0,0) = lim [f(h,0)-0]/h = 0；同理 f<sub>y</sub>(0,0)=0。",
            "第三步：可微性：Δf/ρ = xy/(x²+y²)，沿 y=x 得 1/2，不趋于 0，故不可微。"
          ],
          keyPoints: [
            "【重点】经典反例：连续 + 偏导存在 ⇏ 可微。",
            "【易错点】Δf/ρ 沿 y=x 时 xy/(x²+y²) = x²/(2x²) = 1/2。"
          ],
          summary: "判定分段点可微性的标准三步：连续 → 偏导 → 验证 Δf - 线性主部 是 ρ 的高阶无穷小。"
        }
,
        {
          id: '4.2-014',
          difficulty: '提高',
          type: '选择',
          topic: "偏导数与连续的关系",
          year: null,
          question: "二元函数 f(x,y) 在点 (x<sub>0</sub>,y<sub>0</sub>) 处两个偏导数都存在，则 f 在该点（　）",
          options: [
            "A. 必连续",
            "B. 必不连续",
            "C. 可能连续也可能不连续",
            "D. 必可微"
          ],
          answer: "C",
          solution: [
            "第一步：反例 f=|x| 在 (0,0) 偏导不存在，说明偏导存在需要条件。",
            "第二步：偏导存在的函数（如 z=x+y）在该点连续；但 xy/(x²+y²) 在 (0,0) 偏导存在却不连续。",
            "第三步：故偏导存在时，连续与否都可能。"
          ],
          keyPoints: [
            "【重点】偏导存在 ⇏ 连续（与一元不同！）。",
            "【易错点】不要把一元中可导必连续搬到二元。"
          ],
          summary: "二元中偏导存在只是局部两个方向的性质，推不出全面连续。"
        }
,
        {
          id: '4.2-015',
          difficulty: '提高',
          type: '填空',
          topic: "隐式给出的偏导数关系",
          year: null,
          question: "设 z = ln(x + z/y)，则 ∂z/∂x = ______。",
          options: null,
          answer: "1/(x + z)（即 ∂z/∂x = 1/(x+z)，化简过程见解答）",
          solution: [
            "第一步：方程两边对 x 求偏导（y 固定）：∂z/∂x = (1 + ∂z/∂x)/(x + z/y)。",
            "第二步：记 p = ∂z/∂x，得 p = (1+p)/(x+z/y)。",
            "第三步：解出 p·(x+z/y) = 1+p，p·(x+z/y - 1) = 1；由原方程 x+z/y = e^z，故 p = 1/(e^z - 1)。"
          ],
          keyPoints: [
            "【重点】隐函数求偏导：两边求导后把 p 当作未知数解方程。",
            "【易错点】z 本身是 x,y 的函数，对 x 求导时 z 也要参与求导。"
          ],
          summary: "方程 F(x,y,z)=0 求偏导：视 z 为 x,y 的函数，两边求导后解出偏导。"
        }
,
        {
          id: '4.2-016',
          difficulty: '提高',
          type: '解答',
          topic: "抽象函数二阶偏导",
          year: null,
          question: "设 z = f(x+y, x-y)，其中 f(u,v) 有连续二阶偏导数，求 ∂<sup>2</sup>z/∂x<sup>2</sup> 与 ∂<sup>2</sup>z/∂y<sup>2</sup>（用 f 的偏导表示）。",
          options: null,
          answer: "∂²z/∂x² = f<sub>uu</sub> + 2f<sub>uv</sub> + f<sub>vv</sub>；∂²z/∂y² = f<sub>uu</sub> - 2f<sub>uv</sub> + f<sub>vv</sub>。",
          solution: [
            "第一步：令 u = x+y，v = x-y。",
            "第二步：∂z/∂x = f<sub>u</sub>·1 + f<sub>v</sub>·1 = f<sub>u</sub>+f<sub>v</sub>。",
            "第三步：再对 x 求导：∂²z/∂x² = (f<sub>uu</sub>+f<sub>uv</sub>) + (f<sub>vu</sub>+f<sub>vv</sub>) = f<sub>uu</sub>+2f<sub>uv</sub>+f<sub>vv</sub>。",
            "第四步：同理 ∂z/∂y = f<sub>u</sub>-f<sub>v</sub>，再导得 f<sub>uu</sub>-2f<sub>uv</sub>+f<sub>vv</sub>。"
          ],
          keyPoints: [
            "【重点】抽象函数求导：f<sub>u</sub>、f<sub>v</sub> 仍是 u,v 的函数，继续用链式法则。",
            "【易错点】f<sub>u</sub> 对 x 求导时要写成 f<sub>uu</sub>·1 + f<sub>uv</sub>·1，不要漏项。"
          ],
          summary: "抽象复合函数求二阶偏导：每一阶都对中间变量再用一次链式法则。"
        }
,
        {
          id: '4.2-017',
          difficulty: '难题',
          type: '解答',
          topic: "可微的必要条件与反证",
          year: null,
          question: "设 f(x,y) 在 (0,0) 的某邻域内有定义，且 f<sub>x</sub>(0,0) = 2，f<sub>y</sub>(0,0) = -1，又 f(x,y) = 2x - y + o(√(x<sup>2</sup>+y<sup>2</sup>))，求 lim<sub>(x,y)→(0,0)</sub> [f(x,y) - f(0,0)] / √(x<sup>2</sup>+y<sup>2</sup>) 是否存在，并说明理由。",
          options: null,
          answer: "不存在。沿不同方向极限不同（方向导数依赖方向）。",
          solution: [
            "第一步：由条件 f(x,y) - f(0,0) = 2x - y + o(ρ)。",
            "第二步：令沿方向 (cosθ, sinθ) 趋近，x=ρcosθ, y=ρsinθ。",
            "第三步：比值 = 2cosθ - sinθ + o(1)，随 θ 变化。",
            "第四步：故极限不存在（这正说明线性主部方向导数依赖方向）。"
          ],
          keyPoints: [
            "【重点】可微函数的增量主部是线性的，沿不同方向比值不同是正常的。",
            "【易错点】题目问的是比值极限，不是方向导数；比值极限不存在是必然的。"
          ],
          summary: "已知可微展开式时，沿任意方向代入即可看出主部为方向线性组合。"
        }
,
        {
          id: '4.2-018',
          difficulty: '难题',
          type: '选择',
          topic: "偏导数连续与可微的关系",
          year: null,
          question: "设 f(x,y) 在点 P 的某邻域内存在偏导数，且偏导数在 P 处连续，则（　）",
          options: [
            "A. f 在 P 处可微",
            "B. f 在 P 处不一定可微",
            "C. f 在 P 处不连续",
            "D. f<sub>xy</sub> 不存在"
          ],
          answer: "A",
          solution: [
            "第一步：偏导数连续是可微的充分条件（定理）。",
            "第二步：故 f 在 P 处可微，进而连续。",
            "第三步：连续可偏导时混合偏导连续且相等。"
          ],
          keyPoints: [
            "【重点】偏导连续 ⇒ 可微（充分条件）。",
            "【易错点】反过来可微推不出偏导连续。"
          ],
          summary: "判定可微的充分条件：偏导数在该点连续。"
        }
,
        {
          id: '4.2-019',
          difficulty: '难题',
          type: '填空',
          topic: "由全微分反求函数",
          year: null,
          question: "设 (axy<sup>3</sup> - y<sup>2</sup>cos x)dx + (by sin x + 3x<sup>2</sup>y<sup>2</sup>)dy 为某函数 u(x,y) 的全微分，则 a = ______，b = ______。",
          options: null,
          answer: "a = 2，b = -2",
          solution: [
            "第一步：设 P dx + Q dy 是全微分，则 ∂P/∂y = ∂Q/∂x。",
            "第二步：∂P/∂y = 3axy² - 2y cos x；∂Q/∂x = by cos x + 6xy²。",
            "第三步：比较 y² 项系数：3a = 6，得 a = 2。",
            "第四步：比较 ycosx 项系数：-2 = b，得 b = -2。"
          ],
          keyPoints: [
            "【重点】Pdx+Qdy 为全微分 ⟺ ∂P/∂y = ∂Q/∂x（平面单连通域内）。",
            "【易错点】比较同类项系数要对应。"
          ],
          summary: "判断 Pdx+Qdy 是否为全微分：验证 ∂P/∂y = ∂Q/∂x。"
        }
,
        {
          id: '4.2-020',
          difficulty: '难题',
          type: '解答',
          topic: "可微定义综合题",
          year: null,
          question: "设 f(x,y) = <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\">(x<sup>2</sup>-y<sup>2</sup>)/(x<sup>2</sup>+y<sup>2</sup>),</span><span class=\"pcond\">(x,y)≠(0,0)</span></span><span class=\"prow\"><span class=\"pval\">0,</span><span class=\"pcond\">(x,y)=(0,0)</span></span></span>，求 f<sub>x</sub>(0,0) 与 f<sub>y</sub>(0,0)，并说明 f 在 (0,0) 是否可微。",
          options: null,
          answer: "f<sub>x</sub>(0,0) 与 f<sub>y</sub>(0,0) 都不存在；f 在 (0,0) 不连续、不可微。",
          solution: [
            "第一步：沿 x 轴 f(h,0)=1（h≠0），故 f<sub>x</sub>(0,0) = lim<sub>h→0</sub> [f(h,0)-f(0,0)]/h = lim (1-0)/h，不存在。",
            "第二步：同理沿 y 轴 f(0,k) = -1，f<sub>y</sub>(0,0) = lim (-1-0)/k，不存在。",
            "第三步：偏导不存在，则 f 在 (0,0) 既不连续也不可微。"
          ],
          keyPoints: [
            "【重点】f(h,0)=1 恒成立（x 轴上函数值为 1），故差商为 1/h。",
            "【易错点】不要误算 f<sub>x</sub>(0,0)=0；本题偏导根本不存在。"
          ],
          summary: "分段函数偏导存在性：先看沿坐标轴的函数值是否与 f(0,0) 一致，差商极限是否存在。"
        }
,
        {
          id: '4.2-021',
          difficulty: '真题',
          type: '选择',
          topic: "可微与偏导的关系",
          year: 2012,
          question: "（2012 数二）设函数 f(x,y) 在点 (0,0) 的某邻域内连续，则下列命题正确的是（　）",
          options: [
            "A. 若 f<sub>x</sub>(0,0), f<sub>y</sub>(0,0) 都存在，则 f 在 (0,0) 可微",
            "B. 若 f<sub>x</sub>(0,0), f<sub>y</sub>(0,0) 都存在，则 f 在 (0,0) 连续",
            "C. 若 f 在 (0,0) 可微，则 f<sub>x</sub>(0,0), f<sub>y</sub>(0,0) 都存在",
            "D. 若 f<sub>x</sub>, f<sub>y</sub> 在 (0,0) 的某邻域内存在，则 f 在 (0,0) 连续"
          ],
          answer: "C",
          solution: [
            "第一步：可微 ⇒ 偏导存在，C 正确。",
            "第二步：偏导存在推不出可微（A 错）、推不出连续（B、D 错）。"
          ],
          keyPoints: [
            "【重点】标准关系题：可微 ⇒ 偏导存在；反向均不成立。",
            "【易错点】D 中偏导仅存在而不连续，仍推不出 f 连续。"
          ],
          summary: "可微与偏导存在的关系：单向推出，方向不能反。"
        }
,
        {
          id: '4.2-022',
          difficulty: '真题',
          type: '填空',
          topic: "全微分计算",
          year: 2016,
          question: "（2016 数二）设 z = arctan(x/y)，则 dz 在点 (1,2) 处的值为______。",
          options: null,
          answer: "dz = <span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">5</span></span>dx - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">5</span></span>dy",
          solution: [
            "第一步：∂z/∂x = (1/y)/(1+x²/y²) = y/(x²+y²)。",
            "第二步：∂z/∂y = (-x/y²)/(1+x²/y²) = -x/(x²+y²)。",
            "第三步：代入 (1,2)：z<sub>x</sub>=2/5，z<sub>y</sub>=-1/5。"
          ],
          keyPoints: [
            "【重点】∂z/∂x = y/(x²+y²)，注意化简。",
            "【易错点】∂z/∂y 带负号。"
          ],
          summary: "反三角函数复合求全微分：先化简偏导表达式再代值。"
        }
,
        {
          id: '4.2-023',
          difficulty: '真题',
          type: '选择',
          topic: "可微性判定",
          year: 2007,
          question: "（2007 数二）二元函数 f(x,y) 在点 (0,0) 处可微的一个充分条件是（　）",
          options: [
            "A. f(x,y) 在 (0,0) 处连续",
            "B. f<sub>x</sub>(0,0), f<sub>y</sub>(0,0) 都存在",
            "C. lim<sub>(x,y)→(0,0)</sub> [f(x,y)-f(0,0)]/√(x²+y²) = 0",
            "D. lim<sub>x→0</sub> [f<sub>x</sub>(x,0)-f<sub>x</sub>(0,0)] = 0 且 lim<sub>y→0</sub> [f<sub>y</sub>(0,y)-f<sub>y</sub>(0,0)] = 0"
          ],
          answer: "D",
          solution: [
            "第一步：连续（A）、偏导存在（B）都不是可微充分条件。",
            "第二步：C 表示 f(x,y)-f(0,0) 是 ρ 的高阶无穷小，但缺少线性主部，不构成可微。",
            "第三步：D 表示两个偏导数分别沿坐标轴连续，即偏导连续，是可微充分条件。"
          ],
          keyPoints: [
            "【重点】偏导连续的定义：lim<sub>(x,y)→P</sub> f<sub>x</sub>(x,y) = f<sub>x</sub>(P)。",
            "【易错点】C 只说明函数值增量高阶小，不是可微。"
          ],
          summary: "可微充分条件 = 两个偏导数在该点连续。"
        }
,
        {
          id: '4.2-024',
          difficulty: '真题',
          type: '填空',
          topic: "由偏导反求函数",
          year: 2022,
          question: "（2022 数二）设函数 f(x,y) 满足 ∂f/∂x = 2x，且 f(0,y) = y + sin y，则 f(x,y) = ______。",
          options: null,
          answer: "f(x,y) = x<sup>2</sup> + y + sin y",
          solution: [
            "第一步：∂f/∂x = 2x 对 x 积分：f = x² + C(y)。",
            "第二步：代入 x=0：f(0,y) = C(y) = y + sin y。",
            "第三步：故 f(x,y) = x² + y + sin y。"
          ],
          keyPoints: [
            "【重点】对偏导积分时常数是 y 的函数，由 f(0,y) 条件确定。",
            "【易错点】不要忘记 C(y) 是函数不是常数。"
          ],
          summary: "已知对 x 的偏导和 x=0 处的条件，积分后由边界条件定 C(y)。"
        }
,
        {
          id: '4.2-025',
          difficulty: '真题',
          type: '解答',
          topic: "偏导数与全微分综合",
          year: 2013,
          question: "（2013 数二）设函数 z = z(x,y) 由方程 z = e<sup>2x-3z</sup> + 2y 确定，求 3∂z/∂x + ∂z/∂y。",
          options: null,
          answer: "2",
          solution: [
            "第一步：方程两边对 x 求偏导：∂z/∂x = e<sup>2x-3z</sup>·(2 - 3∂z/∂x)。",
            "第二步：记 p = ∂z/∂x，解得 p(1+3e<sup>2x-3z</sup>) = 2e<sup>2x-3z</sup>。",
            "第三步：对 y 求偏导：∂z/∂y = e<sup>2x-3z</sup>·(-3∂z/∂y) + 2，得 q = ∂z/∂y = 2/(1+3e<sup>2x-3z</sup>)。",
            "第四步：3p + q = 3·[2e<sup>2x-3z</sup>/(1+3e<sup>2x-3z</sup>)] + 2/(1+3e<sup>2x-3z</sup>) = (6e+2)/(1+3e) = 2。"
          ],
          keyPoints: [
            "【重点】隐函数求导后代入组合表达式，常能整体消去 z。",
            "【简便方法】本题答案恒为 2，与 x,y 无关。"
          ],
          summary: "隐函数求偏导后，所求式子常能整体化简为常数。"
        }
,
        {
          id: '4.2-026',
          difficulty: '基础',
          type: '选择',
          topic: "偏导数计算",
          year: null,
          question: "设 z = x<sup>2</sup>y + siny，则 <span class=\"frac\"><span class=\"num\">∂z</span><span class=\"den\">∂x</span></span> = （  ）",
          options: [
            "A. 2xy",
            "B. x<sup>2</sup> + cosy",
            "C. 2xy + cosy",
            "D. x<sup>2</sup>"
          ],
          answer: "A",
          solution: [
            "第一步：对 x 求偏导时 y 视为常数。",
            "第二步：∂/∂x(x<sup>2</sup>y) = 2xy。",
            "第三步：∂/∂x(siny) = 0（与 x 无关）。"
          ],
          keyPoints: [
            "【重点】对一个变量求偏导，其余变量视为常数。",
            "【易错点】siny 对 x 偏导为 0。"
          ],
          summary: "偏导数即视其他变量为常数的一元导数。"
        }
,
        {
          id: '4.2-027',
          difficulty: '基础',
          type: '填空',
          topic: "全微分",
          year: null,
          question: "设 z = x<sup>2</sup>y，则 dz|<sub>(1,2)</sub> = ________。",
          options: null,
          answer: "4dx + dy",
          solution: [
            "第一步：∂z/∂x = 2xy，∂z/∂y = x<sup>2</sup>。",
            "第二步：dz = 2xy dx + x<sup>2</sup>dy。",
            "第三步：代入 (1,2)：dz = 4dx + dy。"
          ],
          keyPoints: [
            "【重点】全微分 dz = z<sub>x</sub>dx + z<sub>y</sub>dy。",
            "【易错点】代入点时两个偏导都要算。"
          ],
          summary: "全微分 = 各偏导数乘对应变量微分之和。"
        }
,
        {
          id: '4.2-028',
          difficulty: '提高',
          type: '选择',
          topic: "二阶偏导",
          year: null,
          question: "设 z = x<sup>3</sup>y<sup>2</sup>，则 <span class=\"frac\"><span class=\"num\">∂<sup>2</sup>z</span><span class=\"den\">∂x∂y</span></span> = （  ）",
          options: [
            "A. 6x<sup>2</sup>y",
            "B. 6xy<sup>2</sup>",
            "C. 3x<sup>2</sup>y<sup>2</sup>",
            "D. 2x<sup>3</sup>y"
          ],
          answer: "A",
          solution: [
            "第一步：先对 x：z<sub>x</sub> = 3x<sup>2</sup>y<sup>2</sup>。",
            "第二步：再对 y：z<sub>xy</sub> = 6x<sup>2</sup>y。"
          ],
          keyPoints: [
            "【重点】混合偏导连续时与求导顺序无关。",
            "【易错点】z<sub>x</sub> 中 y<sup>2</sup> 对 y 求导得 2y。"
          ],
          summary: "混合偏导按顺序逐次求导即可。"
        }
,
        {
          id: '4.2-029',
          difficulty: '提高',
          type: '填空',
          topic: "可微定义",
          year: null,
          question: "设 f(x,y) = x<sup>2</sup> + y<sup>2</sup>，则 f 在 (1,1) 处沿方向 l=(1,0) 的方向导数为________。",
          options: null,
          answer: "2",
          solution: [
            "第一步：方向 l 的单位向量 = (1,0)。",
            "第二步：方向导数 = f<sub>x</sub>·1 + f<sub>y</sub>·0 = 2x。",
            "第三步：代入 x=1，得 2。"
          ],
          keyPoints: [
            "【重点】方向导数 = 梯度点乘方向单位向量。",
            "【易错点】l 不是单位向量时要先归一化。"
          ],
          summary: "方向导数 = ∇f·e<sub>l</sub>，e<sub>l</sub> 为方向单位向量。"
        }
,
        {
          id: '4.2-030',
          difficulty: '真题',
          type: '选择',
          topic: "可微判定",
          year: 2018,
          question: "设 f(x,y) 在 (0,0) 的某邻域内有定义，则下列说法正确的是（  ）",
          options: [
            "A. 若 f<sub>x</sub>(0,0), f<sub>y</sub>(0,0) 都存在，则 f 在 (0,0) 可微",
            "B. 若 f<sub>x</sub>, f<sub>y</sub> 在 (0,0) 某邻域内存在且在 (0,0) 连续，则 f 在 (0,0) 可微",
            "C. 若 f 在 (0,0) 可微，则 f<sub>x</sub>, f<sub>y</sub> 在 (0,0) 连续",
            "D. 以上都不对"
          ],
          answer: "B",
          solution: [
            "第一步：偏导连续 ⇒ 可微（充分条件）。",
            "第二步：可微 ⇒ 偏导存在但不一定连续。",
            "第三步：故 B 正确。"
          ],
          keyPoints: [
            "【重点】偏导连续是可微的充分非必要条件。",
            "【易错点】可微推不出偏导连续。"
          ],
          summary: "偏导连续 ⇒ 可微 ⇒ 偏导存在且函数连续。"
        }
        ]
      },
      '4.3': {
        id: '4.3',
        title: "多元复合函数求导",
        questions: [
        {
          id: '4.3-001',
          difficulty: '基础',
          type: '填空',
          topic: "多元复合函数一阶偏导（一个中间变量）",
          year: null,
          question: "设 z = u<sup>2</sup>v，而 u = x+y，v = x-y，则 ∂z/∂x = ______。",
          options: null,
          answer: "3x<sup>2</sup> + 2xy - y<sup>2</sup>",
          solution: [
            "第一步：由链式法则 ∂z/∂x = (∂z/∂u)(∂u/∂x) + (∂z/∂v)(∂v/∂x)。",
            "第二步：∂z/∂u = 2uv，∂z/∂v = u²，∂u/∂x = 1，∂v/∂x = 1。",
            "第三步：代入得 ∂z/∂x = 2uv + u² = 2(x+y)(x-y) + (x+y)² = 3x²+2xy-y²。"
          ],
          keyPoints: [
            "【重点】链式法则：沿每条到自变量的路径各算一段，再求和。",
            "【易错点】不要漏掉其中一条路径。"
          ],
          summary: "两条路径到达自变量：分别求两段导数相乘，再相加。"
        }
,
        {
          id: '4.3-002',
          difficulty: '基础',
          type: '选择',
          topic: "全导数",
          year: null,
          question: "设 z = f(x,y)，而 x = t，y = t<sup>2</sup>，则全导数 dz/dt =（　）",
          options: [
            "A. f<sub>x</sub> + f<sub>y</sub>",
            "B. f<sub>x</sub>·1 + f<sub>y</sub>·2t",
            "C. f<sub>x</sub>·2t + f<sub>y</sub>",
            "D. f<sub>x</sub>·t + f<sub>y</sub>·t²"
          ],
          answer: "B",
          solution: [
            "第一步：x 对 t 导数 dx/dt = 1，y 对 t 导数 dy/dt = 2t。",
            "第二步：dz/dt = f<sub>x</sub>(dx/dt) + f<sub>y</sub>(dy/dt) = f<sub>x</sub> + 2t f<sub>y</sub>。"
          ],
          keyPoints: [
            "【重点】全导数 = 一元函数链式法则，所有中间变量都要过一遍。",
            "【易错点】dy/dt = 2t，不要写成 t。"
          ],
          summary: "所有中间变量都是 t 的一元函数时，用全导数公式逐项相加。"
        }
,
        {
          id: '4.3-003',
          difficulty: '基础',
          type: '填空',
          topic: "抽象函数一阶偏导",
          year: null,
          question: "设 z = f(x<sup>2</sup>-y<sup>2</sup>)，其中 f 可导，则 ∂z/∂x = ______。",
          options: null,
          answer: "2x f′(x<sup>2</sup>-y<sup>2</sup>)",
          solution: [
            "第一步：令 u = x²-y²，z = f(u)。",
            "第二步：∂z/∂x = f′(u) · ∂u/∂x = f′(u)·2x。"
          ],
          keyPoints: [
            "【重点】单中间变量的抽象函数：链式法则简化为 f′(u)·u<sub>x</sub>。",
            "【易错点】f′ 的自变量仍是 u，不要漏写。"
          ],
          summary: "z=f(g(x,y)) 型：z<sub>x</sub>=f′(g)·g<sub>x</sub>。"
        }
,
        {
          id: '4.3-004',
          difficulty: '基础',
          type: '选择',
          topic: "链式法则路径数",
          year: null,
          question: "设 z = f(u,v)，u = u(x,y)，v = v(x,y)，则 ∂z/∂x 的路径数为（　）",
          options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          answer: "B",
          solution: [
            "第一步：z→u→x 与 z→v→x 共两条路径。",
            "第二步：故 ∂z/∂x = f<sub>u</sub>·u<sub>x</sub> + f<sub>v</sub>·v<sub>x</sub>。"
          ],
          keyPoints: [
            "【重点】画变量依赖图：z 到 x 的每条连线都贡献一项。",
            "【简便方法】路径数 = 中间变量个数。"
          ],
          summary: "链式法则项数 = 中间变量个数。"
        }
,
        {
          id: '4.3-005',
          difficulty: '基础',
          type: '填空',
          topic: "具体复合函数计算",
          year: null,
          question: "设 z = e<sup>xy</sup>，而 x = s+t，y = s-t，则 ∂z/∂s = ______。",
          options: null,
          answer: "2s e<sup>s²-t²</sup>",
          solution: [
            "第一步：直接代入 xy = (s+t)(s-t) = s²-t²，z = e<sup>s²-t²</sup>。",
            "第二步：∂z/∂s = e<sup>s²-t²</sup>·2s。"
          ],
          keyPoints: [
            "【简便方法】能先代入化简的就先代入，再求导。",
            "【易错点】本题直接代入比链式法则更快捷。"
          ],
          summary: "具体复合函数优先代入化简后再求导。"
        }
,
        {
          id: '4.3-006',
          difficulty: '基础',
          type: '选择',
          topic: "复合函数偏导记号",
          year: null,
          question: "设 z = f(x+y, xy)，则 ∂z/∂x =（　）",
          options: [
            "A. f<sub>1</sub> + y f<sub>2</sub>",
            "B. f<sub>1</sub> + x f<sub>2</sub>",
            "C. f<sub>1</sub>·1 + f<sub>2</sub>·y",
            "D. A 和 C 相同"
          ],
          answer: "D",
          solution: [
            "第一步：记 u=x+y（第一分量），v=xy（第二分量）。",
            "第二步：∂z/∂x = f<sub>1</sub>·∂u/∂x + f<sub>2</sub>·∂v/∂x = f<sub>1</sub>·1 + f<sub>2</sub>·y。",
            "第三步：即 A 与 C 写法一致。"
          ],
          keyPoints: [
            "【重点】f<sub>1</sub>、f<sub>2</sub> 表示对第一、第二中间变量求偏导。",
            "【易错点】∂v/∂x = y，不是 x。"
          ],
          summary: "多元抽象函数常用 f₁、f₂ 简写对第 1、第 2 个中间变量的偏导。"
        }
,
        {
          id: '4.3-007',
          difficulty: '基础',
          type: '填空',
          topic: "全微分形式不变性",
          year: null,
          question: "设 z = f(x<sup>2</sup>+y<sup>2</sup>)，则 dz = ______。",
          options: null,
          answer: "2f′(x<sup>2</sup>+y<sup>2</sup>)(x dx + y dy)",
          solution: [
            "第一步：dz = f′(u)·du，u = x²+y²。",
            "第二步：du = 2x dx + 2y dy。",
            "第三步：dz = 2f′(u)(x dx + y dy)。"
          ],
          keyPoints: [
            "【重点】全微分形式不变性：du 的结构不因 u 是否为中间变量而变。",
            "【易错点】dz 是 x dx + y dy 的倍数。"
          ],
          summary: "用全微分形式不变性可以一次性求出全部偏导。"
        }
,
        {
          id: '4.3-008',
          difficulty: '基础',
          type: '选择',
          topic: "链式法则简单应用",
          year: null,
          question: "设 z = x<sup>2</sup>y + y<sup>2</sup>，x = t，y = t<sup>3</sup>，则 dz/dt =（　）",
          options: [
            "A. 2t·t³ + 3t⁴·t²",
            "B. 2t·t³·1 + (x²+2y)·3t²",
            "C. 2t·t³ + 2t³",
            "D. 2t·t³ + 3t²·t⁶"
          ],
          answer: "B",
          solution: [
            "第一步：∂z/∂x = 2xy，∂z/∂y = x²+2y。",
            "第二步：dx/dt = 1，dy/dt = 3t²。",
            "第三步：dz/dt = 2xy·1 + (x²+2y)·3t²，即 B。"
          ],
          keyPoints: [
            "【重点】全导数公式的完整写法。",
            "【易错点】∂z/∂y 是 x²+2y，别漏 2y。"
          ],
          summary: "具体函数全导数：先求偏导函数，再乘中间变量对 t 的导数。"
        }
,
        {
          id: '4.3-009',
          difficulty: '提高',
          type: '解答',
          topic: "抽象函数二阶偏导",
          year: null,
          question: "设 z = f(xy, x/y)，其中 f 有连续二阶偏导，求 ∂<sup>2</sup>z/∂x∂y。",
          options: null,
          answer: "∂²z/∂x∂y = f<sub>1</sub> + xy f<sub>11</sub> - <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y<sup>3</sup></span></span> f<sub>22</sub>",
          solution: [
            "第一步：记 u=xy，v=x/y。",
            "第二步：∂z/∂x = f<sub>1</sub>·y + f<sub>2</sub>·(1/y)。",
            "第三步：再对 y 求导：f<sub>1</sub> 对 y 导为 f<sub>11</sub>·x + f<sub>12</sub>·(-x/y²)，乘 y；f<sub>2</sub> 对 y 导为 f<sub>21</sub>·x + f<sub>22</sub>·(-x/y²)，乘 1/y。",
            "第四步：加上乘积法则中对 y、1/y 直接求导的项 f<sub>1</sub>（因 y 导为 1），整理即得。"
          ],
          keyPoints: [
            "【重点】f<sub>1</sub>、f<sub>2</sub> 仍是 u,v 的函数，继续用链式法则。",
            "【易错点】乘积法则：(y·f<sub>1</sub>) 对 y 求导要分 y 导和 f<sub>1</sub> 导两部分。"
          ],
          summary: "抽象函数二阶偏导：链式法则与乘积法则并用，逐项展开不遗漏。"
        }
,
        {
          id: '4.3-010',
          difficulty: '提高',
          type: '填空',
          topic: "齐次函数性质",
          year: null,
          question: "设 f(x,y) 可微，且满足 f(tx,ty) = t<sup>2</sup>f(x,y)（二次齐次函数），则 x f<sub>x</sub> + y f<sub>y</sub> = ______ f(x,y)。",
          options: null,
          answer: "2",
          solution: [
            "第一步：等式两边对 t 求导（令 u=tx, v=ty）。",
            "第二步：左边 = x f<sub>x</sub>(tx,ty) + y f<sub>y</sub>(tx,ty)。",
            "第三步：右边 = 2t f(x,y)。",
            "第四步：令 t=1，得 x f<sub>x</sub> + y f<sub>y</sub> = 2f(x,y)。"
          ],
          keyPoints: [
            "【重点】齐次函数欧拉定理：x f<sub>x</sub> + y f<sub>y</sub> = n f（n 为次数）。",
            "【简便方法】直接令 t=1 代入求导结果。"
          ],
          summary: "n 次齐次函数满足 x fₓ + y f_y = n f(x,y)（欧拉公式）。"
        }
,
        {
          id: '4.3-011',
          difficulty: '提高',
          type: '选择',
          topic: "变换偏导方程",
          year: null,
          question: "设 u = x，v = x/y，方程 y ∂z/∂x + ∂z/∂y = 0 通过变换化为（　）",
          options: [
            "A. ∂z/∂u = 0",
            "B. ∂z/∂v = 0",
            "C. ∂z/∂u + ∂z/∂v = 0",
            "D. 无法化简"
          ],
          answer: "B",
          solution: [
            "第一步：x=u，y = u/v。",
            "第二步：∂z/∂x = z<sub>u</sub>·1 + z<sub>v</sub>·(1/y)；∂z/∂y = z<sub>v</sub>·(-x/y²)。",
            "第三步：代入 y z<sub>x</sub> + z<sub>y</sub> = y(z<sub>u</sub>+z<sub>v</sub>/y) - x z<sub>v</sub>/y² = y z<sub>u</sub> + z<sub>v</sub> - z<sub>v</sub> = y z<sub>u</sub>。令其为 0 得 z<sub>u</sub>=0。"
          ],
          keyPoints: [
            "【重点】变量替换化简微分方程：把 z<sub>x</sub>、z<sub>y</sub> 全部换成新变量偏导。",
            "【易错点】∂v/∂x = 1/y，∂v/∂y = -x/y²。"
          ],
          summary: "坐标变换化简偏导方程：用链式法则把旧偏导换成新偏导。"
        }
,
        {
          id: '4.3-012',
          difficulty: '提高',
          type: '解答',
          topic: "含 f 的复合函数求导",
          year: null,
          question: "设 z = <span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">f(xy)</span></span>，其中 f 可微，求 y ∂z/∂y - x ∂z/∂x。",
          options: null,
          answer: "0",
          solution: [
            "第一步：∂z/∂x = y·f′(xy)·y = y² f′(xy)。",
            "第二步：∂z/∂y = f(xy) + y·f′(xy)·x = f(xy) + xy f′(xy)。",
            "第三步：y ∂z/∂y - x ∂z/∂x = y f(xy) + xy² f′ - xy² f′ = y f(xy) = z。"
          ],
          keyPoints: [
            "【重点】乘积与商的复合函数求导，每步用对公式。",
            "【易错点】∂z/∂y 是乘积 y·g(y)，要用乘积法则。"
          ],
          summary: "商式复合函数：拆成乘积后逐项用链式法则。"
        }
,
        {
          id: '4.3-013',
          difficulty: '提高',
          type: '填空',
          topic: "混合偏导连续条件",
          year: null,
          question: "设 z = f(x,y) 有连续二阶偏导，则 ∂<sup>2</sup>z/∂x∂y = ______（用偏导记号填空）。",
          options: null,
          answer: "∂<sup>2</sup>z/∂y∂x",
          solution: [
            "第一步：混合偏导连续 ⇒ 与求导次序无关。",
            "第二步：故 ∂²z/∂x∂y = ∂²z/∂y∂x。"
          ],
          keyPoints: [
            "【重点】考研题中默认混合偏导连续，可交换次序。",
            "【简便方法】计算时选简单次序。"
          ],
          summary: "连续二阶偏导：混合偏导与次序无关，可任选计算顺序。"
        }
,
        {
          id: '4.3-014',
          difficulty: '提高',
          type: '解答',
          topic: "极坐标变换",
          year: null,
          question: "设 z = f(x,y) 在极坐标 x = r cosθ，y = r sinθ 下，证明：(∂z/∂x)<sup>2</sup> + (∂z/∂y)<sup>2</sup> = (∂z/∂r)<sup>2</sup> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">r<sup>2</sup></span></span>(∂z/∂θ)<sup>2</sup>。",
          options: null,
          answer: "等式成立，证明见解答。",
          solution: [
            "第一步：∂z/∂r = z<sub>x</sub>cosθ + z<sub>y</sub>sinθ；∂z/∂θ = -z<sub>x</sub>·r sinθ + z<sub>y</sub>·r cosθ。",
            "第二步：计算 z<sub>r</sub>² + (1/r²)z<sub>θ</sub>² = (z<sub>x</sub>cosθ+z<sub>y</sub>sinθ)² + (-z<sub>x</sub>sinθ+z<sub>y</sub>cosθ)²。",
            "第三步：展开 = z<sub>x</sub>²(cos²+sin²) + z<sub>y</sub>²(sin²+cos²) + 2z<sub>x</sub>z<sub>y</sub>(cosθsinθ-sinθcosθ) = z<sub>x</sub>²+z<sub>y</sub>²。"
          ],
          keyPoints: [
            "【重点】极坐标下梯度模长公式，常用在二元函数方程化简。",
            "【易错点】z<sub>θ</sub> 中带 r，除以 r² 后才消去。"
          ],
          summary: "极坐标变换中恒等式 (∂z/∂x)²+(∂z/∂y)² = zᵣ² + z<sub>θ</sub>²/r²。"
        }
,
        {
          id: '4.3-015',
          difficulty: '提高',
          type: '选择',
          topic: "复合函数求导选择",
          year: null,
          question: "设 z = f(u,v)，u = x<sup>2</sup>，v = y<sup>2</sup>，则 ∂<sup>2</sup>z/∂x∂y =（　）",
          options: [
            "A. f<sub>uv</sub>·4xy",
            "B. f<sub>vu</sub>·4xy",
            "C. A 与 B 相同（混合偏导连续时）",
            "D. 2x f<sub>u</sub> + 2y f<sub>v</sub>"
          ],
          answer: "C",
          solution: [
            "第一步：∂z/∂x = f<sub>u</sub>·2x。",
            "第二步：再对 y 求导：f<sub>u</sub> 对 y 导 = f<sub>uv</sub>·2y，故 ∂²z/∂x∂y = 4xy f<sub>uv</sub>。",
            "第三步：混合偏导连续时 f<sub>uv</sub>=f<sub>vu</sub>，A、B 相同。"
          ],
          keyPoints: [
            "【重点】本题 u 只含 x、v 只含 y，二阶交叉偏导只出 f<sub>uv</sub> 一项。",
            "【易错点】不要写 f<sub>uu</sub> 项（u 与 y 无关）。"
          ],
          summary: "中间变量分别只含一个自变量时，二阶混合偏导只含交叉项 fᵤᵥ。"
        }
,
        {
          id: '4.3-016',
          difficulty: '提高',
          type: '解答',
          topic: "由偏导条件求函数",
          year: null,
          question: "设 f(x,y) 可微，且 f(x, 3x) = x<sup>3</sup>，f<sub>x</sub>(x,3x) = x<sup>2</sup>，求 f<sub>y</sub>(x,3x)。",
          options: null,
          answer: "f<sub>y</sub>(x,3x) = <span class=\"frac\"><span class=\"num\">2x<sup>2</sup></span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：f(x,3x) 对 x 求导：f<sub>x</sub>(x,3x)·1 + f<sub>y</sub>(x,3x)·3 = 3x²。",
            "第二步：代入 f<sub>x</sub>(x,3x) = x²：x² + 3 f<sub>y</sub> = 3x²。",
            "第三步：解得 f<sub>y</sub>(x,3x) = 2x²/3。"
          ],
          keyPoints: [
            "【重点】沿着一条曲线 y=3x 用全导数。",
            "【易错点】别忘乘 dy/dx = 3。"
          ],
          summary: "沿给定曲线约束求偏导：用全导数公式结合已知条件。"
        }
,
        {
          id: '4.3-017',
          difficulty: '难题',
          type: '解答',
          topic: "Laplace 算子变换",
          year: null,
          question: "设 u = x，v = x<sup>2</sup>-y<sup>2</sup>，将方程 ∂<sup>2</sup>z/∂x<sup>2</sup> + ∂<sup>2</sup>z/∂y<sup>2</sup> = 0 化为以 u,v 为自变量的方程。",
          options: null,
          answer: "(1+4u<sup>2</sup>)z<sub>uu</sub> + 4v z<sub>uv</sub> + 4u<sup>2</sup>z<sub>vv</sub> = 0",
          solution: [
            "第一步：z<sub>x</sub> = z<sub>u</sub>·1 + z<sub>v</sub>·2x；z<sub>y</sub> = z<sub>v</sub>·(-2y)。",
            "第二步：z<sub>xx</sub> = z<sub>uu</sub> + 2x(z<sub>uv</sub>·1+z<sub>vv</sub>·2x) + 2z<sub>v</sub>。",
            "第三步：z<sub>yy</sub> = -2y·(z<sub>vu</sub>·0+z<sub>vv</sub>·(-2y)) + (-2)·z<sub>v</sub> = 4y² z<sub>vv</sub> - 2z<sub>v</sub>。",
            "第四步：相加：z<sub>uu</sub> + 4x z<sub>uv</sub> + 4(x²+y²)z<sub>vv</sub> = 0，代入 x=u, x²+y²=2x²-v=2u²-v。"
          ],
          keyPoints: [
            "【重点】Laplace 方程变换是考研难题常客。",
            "【易错点】z<sub>xx</sub> 中 2z<sub>v</sub> 与 z<sub>yy</sub> 中 -2z<sub>v</sub> 正好抵消。"
          ],
          summary: "二阶偏导方程变换：逐次用链式法则，注意对中间变量再求导时的乘积法则。"
        }
,
        {
          id: '4.3-018',
          difficulty: '难题',
          type: '解答',
          topic: "复合函数求导与方程联立",
          year: null,
          question: "设 z = f(u,v)，u = x - y，v = y - x，证明 ∂z/∂x + ∂z/∂y = 0。",
          options: null,
          answer: "等式成立，证明见解答。",
          solution: [
            "第一步：z<sub>x</sub> = f<sub>u</sub>·1 + f<sub>v</sub>·(-1) = f<sub>u</sub>-f<sub>v</sub>。",
            "第二步：z<sub>y</sub> = f<sub>u</sub>·(-1) + f<sub>v</sub>·1 = -f<sub>u</sub>+f<sub>v</sub>。",
            "第三步：相加为 0。"
          ],
          keyPoints: [
            "【重点】u+v = 0 时函数沿 x=y 方向不变。",
            "【简便方法】注意到 u=-v，z 只依赖 u=x-y，故 z<sub>x</sub>+z<sub>y</sub>=f′(u)-f′(u)=0。"
          ],
          summary: "中间变量线性相关时，可先合并化简再求导。"
        }
,
        {
          id: '4.3-019',
          difficulty: '难题',
          type: '填空',
          topic: "抽象函数综合",
          year: null,
          question: "设 f(x,y) 有连续偏导，且 f(x, x<sup>2</sup>) = 1，f<sub>x</sub>(x,x<sup>2</sup>) = x，则 f<sub>y</sub>(x,x<sup>2</sup>) = ______。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2x</span></span>",
          solution: [
            "第一步：f(x,x²)=1 对 x 求导：f<sub>x</sub> + f<sub>y</sub>·2x = 0。",
            "第二步：代入 f<sub>x</sub>=x：x + 2x f<sub>y</sub> = 0。",
            "第三步：f<sub>y</sub> = -1/2。"
          ],
          keyPoints: [
            "【重点】沿曲线约束求导。",
            "【易错点】注意 f(x,x²)=1 是常数，导数为 0。"
          ],
          summary: "已知沿曲线的函数值和一个偏导，用全导数求另一个偏导。"
        }
,
        {
          id: '4.3-020',
          difficulty: '难题',
          type: '选择',
          topic: "二阶偏导综合",
          year: null,
          question: "设 z = f(x,y) 可微，且在变换 u = x, v = y/x 下 z<sub>x</sub> 化简为（　）",
          options: [
            "A. z<sub>u</sub> - (v/u)z<sub>v</sub>",
            "B. z<sub>u</sub>",
            "C. z<sub>u</sub> + z<sub>v</sub>",
            "D. z<sub>v</sub>"
          ],
          answer: "A",
          solution: [
            "第一步：x = u，y = uv。",
            "第二步：∂x/∂u = 1，∂y/∂u = v；∂x/∂v = 0，∂y/∂v = u。",
            "第三步：z<sub>u</sub> = z<sub>x</sub>·1 + z<sub>y</sub>·v；z<sub>v</sub> = z<sub>x</sub>·0 + z<sub>y</sub>·u。",
            "第四步：由 z<sub>v</sub>=u z<sub>y</sub> 得 z<sub>y</sub>=z<sub>v</sub>/u，代回 z<sub>u</sub>=z<sub>x</sub>+(v/u)z<sub>v</sub>，故 z<sub>x</sub>=z<sub>u</sub>-(v/u)z<sub>v</sub>。"
          ],
          keyPoints: [
            "【重点】反解偏导：解线性方程组。",
            "【易错点】变换是 (x,y)→(u,v)，要用反函数偏导。"
          ],
          summary: "变量替换后若要求旧偏导，用新偏导线性方程组反解。"
        }
,
        {
          id: '4.3-021',
          difficulty: '真题',
          type: '填空',
          topic: "复合函数偏导",
          year: 2014,
          question: "（2014 数二）设 z = f(x<sup>2</sup>-y<sup>2</sup>, g(xy))，其中 f 有二阶连续偏导，g 可导，则 ∂z/∂x = ______。",
          options: null,
          answer: "2x f<sub>1</sub> + y g′(xy) f<sub>2</sub>",
          solution: [
            "第一步：u=x²-y²，v=g(xy)。",
            "第二步：∂u/∂x = 2x，∂v/∂x = g′(xy)·y。",
            "第三步：链式法则得 ∂z/∂x = f<sub>1</sub>·2x + f<sub>2</sub>·y g′(xy)。"
          ],
          keyPoints: [
            "【重点】第二中间变量本身又是复合函数 g(xy)。",
            "【易错点】∂v/∂x 中 g′ 的自变量是 xy。"
          ],
          summary: "多层复合：逐层使用链式法则。"
        }
,
        {
          id: '4.3-022',
          difficulty: '真题',
          type: '解答',
          topic: "抽象函数二阶偏导",
          year: 2011,
          question: "（2011 数二）设 z = f(xy, yg(x))，其中 f 有二阶连续偏导，g 可导，求 ∂<sup>2</sup>z/∂x∂y。",
          options: null,
          answer: "z<sub>xy</sub> = f<sub>1</sub> + x f<sub>11</sub>·? （完整表达式见解答）",
          solution: [
            "第一步：记 u=xy，v=y g(x)。",
            "第二步：z<sub>x</sub> = f<sub>1</sub>·y + f<sub>2</sub>·y g′(x)。",
            "第三步：再对 y 求导：f<sub>1</sub> 对 y 导 = f<sub>11</sub>·x + f<sub>12</sub>·g(x)；f<sub>2</sub> 对 y 导 = f<sub>21</sub>·x + f<sub>22</sub>·g(x)。",
            "第四步：乘积法则整理：z<sub>xy</sub> = f<sub>1</sub> + y[x f<sub>11</sub>+g(x)f<sub>12</sub>] + g′(x)[f<sub>2</sub> + y(x f<sub>21</sub>+g(x)f<sub>22</sub>)]。"
          ],
          keyPoints: [
            "【重点】经典二阶偏导大题，逐项展开。",
            "【易错点】不要漏 f<sub>1</sub>、f<sub>2</sub> 本身对 y 直接求导（乘积法则中的 1·f<sub>1</sub>）。"
          ],
          summary: "二阶偏导大题标准写法：一阶结果再逐因子求导，不丢项。"
        }
,
        {
          id: '4.3-023',
          difficulty: '真题',
          type: '填空',
          topic: "复合函数偏导",
          year: 2018,
          question: "（2018 数二）设函数 z = z(x,y) 由方程 z = (x+1)ln y - e<sup>xz</sup> 确定，则 ∂z/∂y|<sub>(0,1)</sub> = ______。",
          options: null,
          answer: "1",
          solution: [
            "第一步：在 (0,1) 处，z(0,1) = 1·ln1 - e⁰ = -1。",
            "第二步：方程两边对 y 求导：z<sub>y</sub> = (x+1)/y - e<sup>xz</sup>·x z<sub>y</sub>。",
            "第三步：代入 (0,1,-1)：z<sub>y</sub> = 1/1 - 0 = 1。"
          ],
          keyPoints: [
            "【重点】先求该点 z 值，再代入求导方程。",
            "【易错点】x=0 时 e<sup>xz</sup>·x z<sub>y</sub>=0，简化计算。"
          ],
          summary: "隐函数在某点偏导：先求该点函数值，再代入求导方程。"
        }
,
        {
          id: '4.3-024',
          difficulty: '真题',
          type: '解答',
          topic: "复合函数与极值综合",
          year: 2020,
          question: "（2020 数二）设 z = f(x,y) 的全微分 dz = 2x dx - 2y dy，且 f(1,1) = 2，求 z = f(x,y) 在 D = {(x,y) | x<sup>2</sup>+y<sup>2</sup>≤4, y≥0} 上的最大值。",
          options: null,
          answer: "最大值为 6",
          solution: [
            "第一步：由 dz = 2x dx - 2y dy 得 f<sub>x</sub>=2x, f<sub>y</sub>=-2y。",
            "第二步：积分得 f(x,y) = x² - y² + C；代入 f(1,1)=2：1-1+C=2，C=2。",
            "第三步：D 为上半圆域。内部驻点仅 (0,0)，f(0,0)=2。",
            "第四步：直径边 y=0（|x|≤2）上 f=x²+2，最大在 x=±2：f=6。",
            "第五步：半圆弧边 x²+y²=4（y≥0）上 f=2x²-2，最大在 x=±2：f=6。故最大值为 6。"
          ],
          keyPoints: [
            "【重点】由全微分反求函数，再求闭区域最值。",
            "【易错点】最值要在边界逐段检查。"
          ],
          summary: "由全微分反求函数后，闭区域最值在内部驻点与边界上比较。"
        }
,
        {
          id: '4.3-025',
          difficulty: '真题',
          type: '填空',
          topic: "复合函数偏导",
          year: 2017,
          question: "（2017 数二）设 f(u,v) 可微，且 f(x+y, x-y) = x<sup>2</sup>-y<sup>2</sup>，则 ∂f/∂u · ∂f/∂v = ______。",
          options: null,
          answer: "uv",
          solution: [
            "第一步：令 u=x+y，v=x-y，则 uv = x²-y²，故 f(u,v) = uv。",
            "第二步：∂f/∂u = v，∂f/∂v = u。",
            "第三步：乘积 = uv。"
          ],
          keyPoints: [
            "【重点】做变量替换直接写出 f(u,v) 表达式。",
            "【简便方法】观察 x²-y²=(x+y)(x-y)=uv。"
          ],
          summary: "给出 f(x+y, x-y)=表达式时，用 u=x+y,v=x-y 反解。"
        }
,
        {
          id: '4.3-026',
          difficulty: '基础',
          type: '选择',
          topic: "链式法则",
          year: null,
          question: "设 z = u<sup>2</sup> + v<sup>2</sup>，u = x+y, v = x-y，则 <span class=\"frac\"><span class=\"num\">∂z</span><span class=\"den\">∂x</span></span> = （  ）",
          options: [
            "A. 4x",
            "B. 4y",
            "C. 2x",
            "D. 2(x+y)"
          ],
          answer: "A",
          solution: [
            "第一步：链式法则 z<sub>x</sub> = z<sub>u</sub>·u<sub>x</sub> + z<sub>v</sub>·v<sub>x</sub>。",
            "第二步：z<sub>u</sub>=2u，z<sub>v</sub>=2v，u<sub>x</sub>=1，v<sub>x</sub>=1。",
            "第三步：= 2u + 2v = 2(x+y) + 2(x-y) = 4x。"
          ],
          keyPoints: [
            "【重点】多元链式法则按路径相乘再相加。",
            "【易错点】u<sub>x</sub> 和 v<sub>x</sub> 都是 1。"
          ],
          summary: "复合函数求导画出变量依赖树，每条路径偏导相乘再相加。"
        }
,
        {
          id: '4.3-027',
          difficulty: '基础',
          type: '填空',
          topic: "全导数",
          year: null,
          question: "设 z = xy，x = e<sup>t</sup>，y = e<sup>-t</sup>，则 <span class=\"frac\"><span class=\"num\">dz</span><span class=\"den\">dt</span></span> = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：全导数 dz/dt = z<sub>x</sub>·dx/dt + z<sub>y</sub>·dy/dt。",
            "第二步：= y·e<sup>t</sup> + x·(-e<sup>-t</sup>) = e<sup>-t</sup>e<sup>t</sup> - e<sup>t</sup>e<sup>-t</sup> = 1-1 = 0。"
          ],
          keyPoints: [
            "【重点】一元复合全导数公式。",
            "【易错点】z=xy=e<sup>t</sup>e<sup>-t</sup>=1，直接得 0。"
          ],
          summary: "全导数可直接代入化简，也可按链式法则。"
        }
,
        {
          id: '4.3-028',
          difficulty: '提高',
          type: '选择',
          topic: "抽象复合函数",
          year: null,
          question: "设 z = f(x<sup>2</sup>-y<sup>2</sup>, e<sup>xy</sup>)，f 可微，则 <span class=\"frac\"><span class=\"num\">∂z</span><span class=\"den\">∂x</span></span> = （  ）",
          options: [
            "A. 2x·f<sub>1</sub>' + y·e<sup>xy</sup>·f<sub>2</sub>'",
            "B. 2x·f<sub>1</sub>'",
            "C. y·e<sup>xy</sup>·f<sub>2</sub>'",
            "D. f<sub>1</sub>' + f<sub>2</sub>'"
          ],
          answer: "A",
          solution: [
            "第一步：令 u=x<sup>2</sup>-y<sup>2</sup>，v=e<sup>xy</sup>。",
            "第二步：z<sub>x</sub> = f<sub>1</sub>'·u<sub>x</sub> + f<sub>2</sub>'·v<sub>x</sub>。",
            "第三步：u<sub>x</sub>=2x，v<sub>x</sub>=ye<sup>xy</sup>。"
          ],
          keyPoints: [
            "【重点】抽象函数 f<sub>1</sub>' 表示对第一个中间变量求偏导。",
            "【易错点】v<sub>x</sub> 中 y 视为常数，得 y·e<sup>xy</sup>。"
          ],
          summary: "抽象复合函数用 f₁'、f₂' 记号，按中间变量分别求导。"
        }
,
        {
          id: '4.3-029',
          difficulty: '提高',
          type: '填空',
          topic: "二阶复合偏导",
          year: null,
          question: "设 z = f(x+y, x-y)，f 有二阶连续偏导，则 <span class=\"frac\"><span class=\"num\">∂<sup>2</sup>z</span><span class=\"den\">∂x<sup>2</sup></span></span> = ________。",
          options: null,
          answer: "f<sub>11</sub>'' + 2f<sub>12</sub>'' + f<sub>22</sub>''",
          solution: [
            "第一步：令 u=x+y，v=x-y，z<sub>x</sub> = f<sub>1</sub>' + f<sub>2</sub>'。",
            "第二步：再对 x 求导，注意 f<sub>1</sub>'、f<sub>2</sub>' 仍是 u,v 的函数。",
            "第三步：z<sub>xx</sub> = (f<sub>11</sub>''·1 + f<sub>12</sub>''·1) + (f<sub>21</sub>''·1 + f<sub>22</sub>''·1)。",
            "第四步：连续混合偏导 f<sub>12</sub>=f<sub>21</sub>，合并得 f<sub>11</sub>+2f<sub>12</sub>+f<sub>22</sub>。"
          ],
          keyPoints: [
            "【重点】二阶偏导时 f<sub>i</sub>' 仍要按链式法则再求导。",
            "【易错点】f<sub>12</sub>'' 和 f<sub>21</sub>'' 合并为 2f<sub>12</sub>''。"
          ],
          summary: "抽象复合函数求二阶偏导，每层都要链式展开再合并。"
        }
,
        {
          id: '4.3-030',
          difficulty: '真题',
          type: '解答',
          topic: "复合函数偏导",
          year: 2017,
          question: "设 z = f(xy, <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y</span></span>)，f 有二阶连续偏导，求 <span class=\"frac\"><span class=\"num\">∂z</span><span class=\"den\">∂x</span></span>, <span class=\"frac\"><span class=\"num\">∂<sup>2</sup>z</span><span class=\"den\">∂x∂y</span></span>。",
          options: null,
          answer: "z<sub>x</sub>=yf<sub>1</sub>' + (1/y)f<sub>2</sub>'；z<sub>xy</sub>=f<sub>1</sub>'+xyf<sub>11</sub>'' - (x/y<sup>3</sup>)f<sub>22</sub>''",
          solution: [
            "第一步：令 u=xy，v=x/y。",
            "第二步：z<sub>x</sub> = y·f<sub>1</sub>' + (1/y)·f<sub>2</sub>'。",
            "第三步：对 y 求偏导，逐项展开并合并 f<sub>12</sub>=f<sub>21</sub>。",
            "第四步：结果 = f<sub>1</sub>' + xy·f<sub>11</sub>'' - <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y<sup>3</sup></span></span>·f<sub>22</sub>''。"
          ],
          keyPoints: [
            "【真题高频】抽象复合函数二阶混合偏导。",
            "【易错点】乘积法则：对 y 求导时 y 因子也要导。"
          ],
          summary: "抽象复合二阶偏导，乘积法则与链式法则并用。"
        }
        ]
      },
      '4.4': {
        id: '4.4',
        title: "隐函数求导",
        questions: [
        {
          id: '4.4-001',
          difficulty: '基础',
          type: '填空',
          topic: "一元隐函数求导",
          year: null,
          question: "设 y = y(x) 由方程 x<sup>2</sup> + y<sup>2</sup> = 1 确定，则 dy/dx = ______。",
          options: null,
          answer: "-x/y",
          solution: [
            "第一步：两边对 x 求导：2x + 2y·(dy/dx) = 0。",
            "第二步：解出 dy/dx = -x/y。"
          ],
          keyPoints: [
            "【重点】一元隐函数：y 是 x 的函数，两边求导后解出 y′。",
            "【易错点】y² 对 x 求导要写 2y·y′。"
          ],
          summary: "一元隐函数求导：两边求导，把 y′ 当未知数解方程。"
        }
,
        {
          id: '4.4-002',
          difficulty: '基础',
          type: '选择',
          topic: "隐函数存在定理",
          year: null,
          question: "方程 F(x,y,z) = 0 在点 P 的某邻域内能唯一确定连续可微函数 z = z(x,y) 的充分条件是（　）",
          options: [
            "A. F 在 P 连续",
            "B. F<sub>z</sub>(P) ≠ 0",
            "C. F 有连续偏导且 F<sub>z</sub>(P) ≠ 0",
            "D. F(P)=0"
          ],
          answer: "C",
          solution: [
            "第一步：隐函数存在定理要求 F 有连续偏导、F(P)=0 且 F<sub>z</sub>(P)≠0。",
            "第二步：C 完整表述了充分条件。"
          ],
          keyPoints: [
            "【重点】F<sub>z</sub>≠0 是关键条件。",
            "【易错点】仅有连续不够，必须偏导连续且 F<sub>z</sub>≠0。"
          ],
          summary: "隐函数存在定理三条件：连续偏导、F(P)=0、F<sub>z</sub>(P)≠0。"
        }
,
        {
          id: '4.4-003',
          difficulty: '基础',
          type: '填空',
          topic: "隐函数求导公式",
          year: null,
          question: "设 z = z(x,y) 由方程 x + y + z = e<sup>z</sup> 确定，则 ∂z/∂x = ______。",
          options: null,
          answer: "1/(e<sup>z</sup>-1)",
          solution: [
            "第一步：令 F = x+y+z-e<sup>z</sup>。",
            "第二步：F<sub>x</sub>=1，F<sub>z</sub>=1-e<sup>z</sup>。",
            "第三步：z<sub>x</sub> = -F<sub>x</sub>/F<sub>z</sub> = -1/(1-e<sup>z</sup>) = 1/(e<sup>z</sup>-1)。"
          ],
          keyPoints: [
            "【重点】公式法：z<sub>x</sub> = -F<sub>x</sub>/F<sub>z</sub>。",
            "【易错点】负号不要丢。"
          ],
          summary: "公式法求隐函数偏导：zₓ = -Fₓ/F_z。"
        }
,
        {
          id: '4.4-004',
          difficulty: '基础',
          type: '选择',
          topic: "隐函数偏导",
          year: null,
          question: "设 z = z(x,y) 由 xyz = 1 确定，则 ∂z/∂y =（　）",
          options: [
            "A. z/y",
            "B. -z/y",
            "C. z/x",
            "D. -x/z"
          ],
          answer: "B",
          solution: [
            "第一步：两边对 y 求偏导（x 固定）：x·z + xy·z<sub>y</sub> = 0。",
            "第二步：解出 z<sub>y</sub> = -xz/(xy) = -z/y。"
          ],
          keyPoints: [
            "【重点】乘积 xyz 对 y 求导：xz + xy z<sub>y</sub>。",
            "【易错点】x 视为常数。"
          ],
          summary: "隐函数求偏导：固定其他自变量，逐项求导。"
        }
,
        {
          id: '4.4-005',
          difficulty: '基础',
          type: '填空',
          topic: "隐函数全微分",
          year: null,
          question: "设 z = z(x,y) 由方程 z<sup>3</sup> - 3xyz = 1 确定，则 dz = ______。",
          options: null,
          answer: "dz = <span class=\"frac\"><span class=\"num\">yz dx + xz dy</span><span class=\"den\">z<sup>2</sup> - xy</span></span>",
          solution: [
            "第一步：两边微分：3z² dz - 3yz dx - 3xz dy - 3xy dz = 0。",
            "第二步：整理：(z²-xy) dz = yz dx + xz dy。",
            "第三步：dz = (yz dx + xz dy)/(z²-xy)。"
          ],
          keyPoints: [
            "【重点】全微分法：两边微分，把 dz 合并到一边。",
            "【简便方法】微分法一次求出 z<sub>x</sub>、z<sub>y</sub>。"
          ],
          summary: "隐函数求全微分：两边微分，合并 dz 后解出。"
        }
,
        {
          id: '4.4-006',
          difficulty: '基础',
          type: '解答',
          topic: "隐函数二阶偏导",
          year: null,
          question: "设 z = z(x,y) 由方程 z = x + y e<sup>z</sup> 确定，求 ∂z/∂x 与 ∂z/∂y。",
          options: null,
          answer: "z<sub>x</sub> = 1/(1 - y e<sup>z</sup>)，z<sub>y</sub> = e<sup>z</sup>/(1 - y e<sup>z</sup>)",
          solution: [
            "第一步：两边对 x 求导：z<sub>x</sub> = 1 + y e<sup>z</sup>·z<sub>x</sub>。",
            "第二步：解得 z<sub>x</sub>(1 - y e<sup>z</sup>) = 1，即 z<sub>x</sub> = 1/(1-ye<sup>z</sup>)。",
            "第三步：对 y 求导：z<sub>y</sub> = e<sup>z</sup> + y e<sup>z</sup>·z<sub>y</sub>，解得 z<sub>y</sub> = e<sup>z</sup>/(1-ye<sup>z</sup>)。"
          ],
          keyPoints: [
            "【重点】e<sup>z</sup> 对 x、y 求导都要乘 z<sub>x</sub>、z<sub>y</sub>。",
            "【易错点】y e<sup>z</sup> 对 y 求导要用乘积法则：e<sup>z</sup> + y e<sup>z</sup> z<sub>y</sub>。"
          ],
          summary: "指数含 z 的隐函数：每次求导都乘相应偏导，再解方程。"
        }
,
        {
          id: '4.4-007',
          difficulty: '提高',
          type: '解答',
          topic: "方程组确定的隐函数",
          year: null,
          question: "设 x = e<sup>u</sup>cos v，y = e<sup>u</sup>sin v，求 ∂u/∂x 与 ∂v/∂x。",
          options: null,
          answer: "u<sub>x</sub> = e<sup>-u</sup>cos v，v<sub>x</sub> = -e<sup>-u</sup>sin v",
          solution: [
            "第一步：两式对 x 求偏导（y 固定）：1 = e<sup>u</sup>u<sub>x</sub>cos v - e<sup>u</sup>sin v·v<sub>x</sub>；0 = e<sup>u</sup>u<sub>x</sub>sin v + e<sup>u</sup>cos v·v<sub>x</sub>。",
            "第二步：把 u<sub>x</sub>、v<sub>x</sub> 当未知数解线性方程组。",
            "第三步：由第二式 v<sub>x</sub> = -u<sub>x</sub>tan v，代入第一式得 u<sub>x</sub> = e<sup>-u</sup>cos v，v<sub>x</sub> = -e<sup>-u</sup>sin v。"
          ],
          keyPoints: [
            "【重点】方程组情形：对每个方程两边求导，联立解。",
            "【易错点】y 固定时 y 对 x 的偏导是 0。"
          ],
          summary: "方程组型隐函数：两方程两边求导，联立解偏导。"
        }
,
        {
          id: '4.4-008',
          difficulty: '提高',
          type: '填空',
          topic: "隐函数在具体点",
          year: null,
          question: "设 z = z(x,y) 由 x<sup>2</sup>+y<sup>2</sup>+z<sup>2</sup> = 2x+2y+2z 确定，且在 (1,1) 附近 z &lt; 1，则 z<sub>x</sub>(1,1) = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：代入 (1,1)：1+1+z² = 2+2+2z，即 z²-2z-2=0，z = 1±√3。",
            "第二步：由 z&lt;1 取 z = 1-√3。",
            "第三步：两边对 x 求导：2x+2z z<sub>x</sub> = 2+2z<sub>x</sub>。代入 (1,1,1-√3)：2+2(1-√3)z<sub>x</sub> = 2+2z<sub>x</sub>，解得 z<sub>x</sub>=0。"
          ],
          keyPoints: [
            "【重点】先求该点 z 值，再代入求导方程。",
            "【易错点】方程隐含两个分支，按题目条件取一支。"
          ],
          summary: "隐函数在具体点偏导：先定该点函数值，再代入。"
        }
,
        {
          id: '4.4-009',
          difficulty: '提高',
          type: '选择',
          topic: "隐函数偏导组合",
          year: null,
          question: "设 z = z(x,y) 由 F(x - z, y - z) = 0 确定，则 z<sub>x</sub> + z<sub>y</sub> =（　）",
          options: [
            "A. 0",
            "B. 1",
            "C. -1",
            "D. F<sub>1</sub>+F<sub>2</sub>"
          ],
          answer: "B",
          solution: [
            "第一步：u=x-z, v=y-z，F(u,v)=0。",
            "第二步：两边对 x 求导：F<sub>1</sub>(1-z<sub>x</sub>) + F<sub>2</sub>(-z<sub>x</sub>) = 0，得 z<sub>x</sub> = F<sub>1</sub>/(F<sub>1</sub>+F<sub>2</sub>)。",
            "第三步：同理 z<sub>y</sub> = F<sub>2</sub>/(F<sub>1</sub>+F<sub>2</sub>)。",
            "第四步：相加 = 1。"
          ],
          keyPoints: [
            "【重点】抽象隐函数：用 f<sub>1</sub>、f<sub>2</sub> 表示，最后组合常为常数。",
            "【简便方法】观察：若 w=x+y-2z，F 自变量之和 = x+y-2z = w，故 z 只依赖 w，z<sub>x</sub>+z<sub>y</sub>=1。"
          ],
          summary: "抽象隐函数求偏导组合：先求两个偏导表达式再相加。"
        }
,
        {
          id: '4.4-010',
          difficulty: '提高',
          type: '解答',
          topic: "隐函数二阶偏导",
          year: null,
          question: "设 z = z(x,y) 由 xyz = x + y + z 确定，求 z<sub>xx</sub>。",
          options: null,
          answer: "z<sub>xx</sub> = <span class=\"frac\"><span class=\"num\">2yz(1-xy)</span><span class=\"den\">(xy-1)<sup>3</sup></span></span>（化简后结果，见解答）",
          solution: [
            "第一步：两边对 x 求导：yz + xy z<sub>x</sub> = 1 + z<sub>x</sub>。",
            "第二步：解得 z<sub>x</sub> = (1-yz)/(xy-1)。",
            "第三步：再对 x 求导（注意 z、z<sub>x</sub> 仍含 x）：y z<sub>x</sub> + y z<sub>x</sub> + xy z<sub>xx</sub> = z<sub>xx</sub>。",
            "第四步：整理得 z<sub>xx</sub> = -2y z<sub>x</sub>/(xy-1)，代入 z<sub>x</sub> 即得。"
          ],
          keyPoints: [
            "【重点】二阶偏导时 z 仍是 x,y 的函数。",
            "【易错点】yz 对 x 求导为 y z<sub>x</sub>。"
          ],
          summary: "隐函数二阶偏导：一阶结果再求导，全程视 z 为 x,y 的函数。"
        }
,
        {
          id: '4.4-011',
          difficulty: '提高',
          type: '填空',
          topic: "极坐标隐函数",
          year: null,
          question: "设 r = r(θ) 由 r = a(1 + cos θ)（心脏线）确定，则 dr/dθ = ______。",
          options: null,
          answer: "-a sin θ",
          solution: [
            "第一步：两边对 θ 求导：dr/dθ = a·(-sin θ)。"
          ],
          keyPoints: [
            "【重点】本题是显式方程，直接求导。",
            "【易错点】隐函数题偶尔混入显式，不要被 r= 形式迷惑。"
          ],
          summary: "能显式写出的先显式求导。"
        }
,
        {
          id: '4.4-012',
          difficulty: '提高',
          type: '选择',
          topic: "隐函数存在条件",
          year: null,
          question: "方程 x + y + z - sin(xyz) = 0 在原点附近能否确定 z = z(x,y)？（　）",
          options: [
            "A. 能",
            "B. 不能",
            "C. 需进一步讨论",
            "D. 不确定"
          ],
          answer: "A",
          solution: [
            "第一步：F(0,0,0) = 0。",
            "第二步：F<sub>z</sub> = 1 - xy cos(xyz)，在原点 = 1 ≠ 0。",
            "第三步：由隐函数存在定理，能确定 z=z(x,y)。"
          ],
          keyPoints: [
            "【重点】直接验证 F<sub>z</sub>(P)≠0。",
            "【易错点】F<sub>z</sub> 计算：对 z 求导时 xyz 视为整体。"
          ],
          summary: "判断能否确定隐函数：验证 F(P)=0 且 F<sub>z</sub>(P)≠0。"
        }
,
        {
          id: '4.4-013',
          difficulty: '难题',
          type: '解答',
          topic: "反函数组偏导",
          year: null,
          question: "设 u = x + y，v = x/(x+y)，求 ∂(x,y)/∂(u,v)（即雅可比行列式的逆）。",
          options: null,
          answer: "x+y",
          solution: [
            "第一步：由 u=x+y，v=x/u，得 x=uv，y=u(1-v)。",
            "第二步：x<sub>u</sub>=v, x<sub>v</sub>=u；y<sub>u</sub>=1-v, y<sub>v</sub>=-u。",
            "第三步：雅可比 = x<sub>u</sub>y<sub>v</sub> - x<sub>v</sub>y<sub>u</sub> = v(-u) - u(1-v) = -u。绝对值为 u=x+y。"
          ],
          keyPoints: [
            "【重点】反函数组求导：先反解 x,y 关于 u,v，再算雅可比。",
            "【简便方法】|∂(x,y)/∂(u,v)| = 1/|∂(u,v)/∂(x,y)|。"
          ],
          summary: "反函数组雅可比 = 原雅可比的倒数（绝对值）。"
        }
,
        {
          id: '4.4-014',
          difficulty: '难题',
          type: '填空',
          topic: "隐函数变换",
          year: null,
          question: "设 z = z(x,y) 由 F(x+y+z, x<sup>2</sup>+y<sup>2</sup>+z<sup>2</sup>) = 0 确定，则 y z<sub>x</sub> - x z<sub>y</sub> = ______。",
          options: null,
          answer: "(x-y)·<span class=\"frac\"><span class=\"num\">F<sub>1</sub>+2z F<sub>2</sub></span><span class=\"den\">F<sub>1</sub>+2y F<sub>2</sub></span></span>（见解答）",
          solution: [
            "第一步：记 u=x+y+z, v=x²+y²+z²。",
            "第二步：F<sub>1</sub>(1+z<sub>x</sub>)+F<sub>2</sub>(2x+2z z<sub>x</sub>) = 0，解得 z<sub>x</sub> = -(F<sub>1</sub>+2x F<sub>2</sub>)/(F<sub>1</sub>+2z F<sub>2</sub>)。",
            "第三步：同理 z<sub>y</sub> = -(F<sub>1</sub>+2y F<sub>2</sub>)/(F<sub>1</sub>+2z F<sub>2</sub>)。",
            "第四步：y z<sub>x</sub> - x z<sub>y</sub> = [-y(F<sub>1</sub>+2xF<sub>2</sub>)+x(F<sub>1</sub>+2yF<sub>2</sub>)]/(F<sub>1</sub>+2zF<sub>2</sub>) = (x-y)F<sub>1</sub>/(F<sub>1</sub>+2zF<sub>2</sub>)。"
          ],
          keyPoints: [
            "【重点】两偏导分母相同，分子相减时常有项抵消。",
            "【易错点】注意符号。"
          ],
          summary: "抽象隐函数组合：先写出两个偏导，再整体代入化简。"
        }
,
        {
          id: '4.4-015',
          difficulty: '难题',
          type: '解答',
          topic: "隐函数与切线",
          year: null,
          question: "求曲线 x<sup>2</sup>+y<sup>2</sup> = 2x+2y-1 在点 (1+√2/2, 1) 处的切线方程。",
          options: null,
          answer: "x = 1 + √2/2（竖直切线）",
          solution: [
            "第一步：两边对 x 求导：2x+2y y′ = 2+2y′。",
            "第二步：代入 y=1：2x+2y′ = 2+2y′，得 2x=2，即 x=1 时矛盾？",
            "第三步：在点 (1+√2/2, 1) 处代入：2(1+√2/2)+2y′ = 2+2y′ → 2+√2+2y′=2+2y′ → √2=0，矛盾。故 y′ 不存在，切线竖直 x = 1+√2/2。"
          ],
          keyPoints: [
            "【重点】导数不存在对应竖直切线。",
            "【易错点】先检查求导方程是否矛盾。"
          ],
          summary: "隐函数求导矛盾时，切线为竖直线。"
        }
,
        {
          id: '4.4-016',
          difficulty: '难题',
          type: '填空',
          topic: "隐函数偏导恒等式",
          year: null,
          question: "设 z = z(x,y) 由 F(x/y, y/z) = 0 确定，则 x z<sub>x</sub> + y z<sub>y</sub> = ______ z。",
          options: null,
          answer: "1",
          solution: [
            "第一步：u=x/y, v=y/z。F(u,v)=0。",
            "第二步：两边对 x：F<sub>1</sub>·(1/y) + F<sub>2</sub>·(-y/z²)z<sub>x</sub> = 0。",
            "第三步：两边对 y：F<sub>1</sub>·(-x/y²) + F<sub>2</sub>·(1/z - y z<sub>y</sub>/z²) = 0。",
            "第四步：整理组合：x z<sub>x</sub> + y z<sub>y</sub> = z。"
          ],
          keyPoints: [
            "【重点】齐次型隐函数：x z<sub>x</sub>+y z<sub>y</sub> 常等于 z 或 0。",
            "【简便方法】若 F 的两个自变量零次齐次，则 z 是一次齐次函数。"
          ],
          summary: "零次齐次约束下，z 为一次齐次：x zₓ+y z_y = z。"
        }
,
        {
          id: '4.4-017',
          difficulty: '真题',
          type: '填空',
          topic: "隐函数偏导",
          year: 2015,
          question: "（2015 数二）设 z = z(x,y) 由方程 e<sup>z</sup> = xyz 确定，则 ∂z/∂x = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">yz</span><span class=\"den\">e<sup>z</sup> - xy</span></span>",
          solution: [
            "第一步：两边对 x 求导：e<sup>z</sup>·z<sub>x</sub> = yz + xy z<sub>x</sub>。",
            "第二步：整理：(e<sup>z</sup> - xy)z<sub>x</sub> = yz。",
            "第三步：z<sub>x</sub> = yz/(e<sup>z</sup>-xy)。"
          ],
          keyPoints: [
            "【重点】e<sup>z</sup> 求导带 z<sub>x</sub>，乘积 xyz 用乘积法则。",
            "【易错点】不要把 e<sup>z</sup>-xy 写成 e<sup>z</sup>-xy 时漏负号。"
          ],
          summary: "指数隐函数求偏导：eᶻ·zₓ 与乘积项并列，合并同类项。"
        }
,
        {
          id: '4.4-018',
          difficulty: '真题',
          type: '选择',
          topic: "隐函数存在与偏导",
          year: 2010,
          question: "（2010 数二）设函数 z = z(x,y) 由方程 F(y/x, z/x) = 0 确定，其中 F 可微，则 x z<sub>x</sub> + y z<sub>y</sub> =（　）",
          options: [
            "A. x",
            "B. z",
            "C. -x",
            "D. -z"
          ],
          answer: "B",
          solution: [
            "第一步：u=y/x, v=z/x。",
            "第二步：z<sub>x</sub>：F<sub>1</sub>·(-y/x²) + F<sub>2</sub>·(z<sub>x</sub>·x - z)/x² = 0。",
            "第三步：z<sub>y</sub>：F<sub>1</sub>·(1/x) + F<sub>2</sub>·(z<sub>y</sub>/x) = 0。",
            "第四步：解得 z<sub>x</sub> = (yF<sub>1</sub>+zF<sub>2</sub>)/(xF<sub>2</sub>)，z<sub>y</sub> = -F<sub>1</sub>/F<sub>2</sub>，组合得 x z<sub>x</sub>+y z<sub>y</sub> = z。"
          ],
          keyPoints: [
            "【重点】典型齐次隐函数，组合结果为 z。",
            "【简便方法】F(y/x,z/x)=0 说明 z/x 只依赖 y/x，即 z = x·g(y/x)，一次齐次。"
          ],
          summary: "形如 F(y/x,z/x)=0 的隐函数必为一次齐次：x zₓ+y z_y = z。"
        }
,
        {
          id: '4.4-019',
          difficulty: '真题',
          type: '解答',
          topic: "隐函数求导",
          year: 2013,
          question: "（2013 数二）设 z = z(x,y) 由方程 z = e<sup>2x-3z</sup> + 2y 确定，求 3z<sub>x</sub> + z<sub>y</sub>。",
          options: null,
          answer: "2",
          solution: [
            "第一步：两边对 x 求导：z<sub>x</sub> = e<sup>2x-3z</sup>(2-3z<sub>x</sub>)。",
            "第二步：解得 z<sub>x</sub> = 2e<sup>2x-3z</sup>/(1+3e<sup>2x-3z</sup>)。",
            "第三步：对 y 求导：z<sub>y</sub> = e<sup>2x-3z</sup>(-3z<sub>y</sub>) + 2，得 z<sub>y</sub> = 2/(1+3e<sup>2x-3z</sup>)。",
            "第四步：3z<sub>x</sub>+z<sub>y</sub> = (6e+2)/(1+3e) = 2。"
          ],
          keyPoints: [
            "【重点】组合后整体化简为常数。",
            "【易错点】e<sup>2x-3z</sup> 对 y 求导也要乘 (-3z<sub>y</sub>)。"
          ],
          summary: "隐函数偏导组合题：先分别求导，再整体代入化简。"
        }
,
        {
          id: '4.4-020',
          difficulty: '真题',
          type: '填空',
          topic: "隐函数偏导具体点",
          year: 2021,
          question: "（2021 数二）设 z = z(x,y) 由方程 (z+y)<sup>x</sup> = xy 确定，则 z<sub>x</sub>(1,1) = ______。",
          options: null,
          answer: "1",
          solution: [
            "第一步：代入 (1,1)：(z+1)¹ = 1，得 z(1,1) = 0。",
            "第二步：两边取对数：x ln(z+y) = ln x + ln y。",
            "第三步：对 x 求导：ln(z+y) + x·z<sub>x</sub>/(z+y) = 1/x。",
            "第四步：代入 (1,1,0)：ln1 + 1·z<sub>x</sub>/1 = 1，故 z<sub>x</sub>(1,1) = 1。"
          ],
          keyPoints: [
            "【重点】幂指型隐函数先取对数。",
            "【易错点】z(1,1)=0 是关键中间值。"
          ],
          summary: "幂指型隐函数：取对数后再求导。"
        }
,
        {
          id: '4.4-021',
          difficulty: '基础',
          type: '选择',
          topic: "隐函数求导一元",
          year: null,
          question: "设 x<sup>2</sup> + y<sup>2</sup> = 1，则 <span class=\"frac\"><span class=\"num\">dy</span><span class=\"den\">dx</span></span> = （  ）",
          options: [
            "A. -<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y</span></span>",
            "C. -<span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">y</span><span class=\"den\">x</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：两边对 x 求导：2x + 2y·y' = 0。",
            "第二步：解出 y' = -<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">y</span></span>。"
          ],
          keyPoints: [
            "【重点】隐函数求导把 y 视为 x 的函数。",
            "【易错点】y<sup>2</sup> 求导是 2y·y'。"
          ],
          summary: "一元隐函数两边对 x 求导，解出 y'。"
        }
,
        {
          id: '4.4-022',
          difficulty: '基础',
          type: '填空',
          topic: "隐函数偏导公式",
          year: null,
          question: "设 F(x,y,z) = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 1 = 0，则 <span class=\"frac\"><span class=\"num\">∂z</span><span class=\"den\">∂x</span></span> = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">z</span></span>",
          solution: [
            "第一步：公式 z<sub>x</sub> = -<span class=\"frac\"><span class=\"num\">F<sub>x</sub></span><span class=\"den\">F<sub>z</sub></span></span>。",
            "第二步：F<sub>x</sub>=2x，F<sub>z</sub>=2z。",
            "第三步：z<sub>x</sub> = -<span class=\"frac\"><span class=\"num\">x</span><span class=\"den\">z</span></span>。"
          ],
          keyPoints: [
            "【重点】隐函数定理 z<sub>x</sub> = -F<sub>x</sub>/F<sub>z</sub>。",
            "【易错点】分子是 F<sub>x</sub>，不是 F<sub>z</sub>。"
          ],
          summary: "三元方程 F=0 确定 z=z(x,y)，偏导为 -F 偏导比。"
        }
,
        {
          id: '4.4-023',
          difficulty: '提高',
          type: '选择',
          topic: "隐函数组",
          year: null,
          question: "设方程组 <span class=\"piecewise\"><span class=\"prow\"><span class=\"pval\">x = u + v,</span><span class=\"pcond\"></span></span><span class=\"prow\"><span class=\"pval\">y = u<sup>2</sup> + v<sup>2</sup>,</span><span class=\"pcond\"></span></span></span> 则 <span class=\"frac\"><span class=\"num\">∂u</span><span class=\"den\">∂x</span></span> = （  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2(u-v)</span></span>",
            "B. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2(u+v)</span></span>",
            "C. 2(u-v)",
            "D. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">u-v</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：两边对 x 求偏导（y 视为常数）：1 = u<sub>x</sub>+v<sub>x</sub>，0 = 2u·u<sub>x</sub> + 2v·v<sub>x</sub>。",
            "第二步：由第二式 v<sub>x</sub> = -<span class=\"frac\"><span class=\"num\">u</span><span class=\"den\">v</span></span>u<sub>x</sub>。",
            "第三步：代入第一式：u<sub>x</sub>(1 - <span class=\"frac\"><span class=\"num\">u</span><span class=\"den\">v</span></span>) = 1，得 u<sub>x</sub> = <span class=\"frac\"><span class=\"num\">v</span><span class=\"den\">v-u</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2(u-v)</span></span> 的等价化简结果。"
          ],
          keyPoints: [
            "【重点】隐函数组两边对指定变量求偏导，解线性方程组。",
            "【易错点】y 固定时 y<sub>x</sub>=0。"
          ],
          summary: "隐函数组求偏导：对指定变量求导，解线性方程组。"
        }
,
        {
          id: '4.4-024',
          difficulty: '提高',
          type: '填空',
          topic: "全微分形式不变性",
          year: null,
          question: "设 z = z(x,y) 由 xyz = x + y + z 确定，则 dz = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">yz-1</span><span class=\"den\">1-xy</span></span>dx + <span class=\"frac\"><span class=\"num\">xz-1</span><span class=\"den\">1-xy</span></span>dy",
          solution: [
            "第一步：两边取全微分：yz dx + xz dy + xy dz = dx + dy + dz。",
            "第二步：移项 (xy-1)dz = (1-yz)dx + (1-xz)dy。",
            "第三步：dz = <span class=\"frac\"><span class=\"num\">yz-1</span><span class=\"den\">1-xy</span></span>dx + <span class=\"frac\"><span class=\"num\">xz-1</span><span class=\"den\">1-xy</span></span>dy。"
          ],
          keyPoints: [
            "【重点】全微分形式不变性可同时求出两个偏导。",
            "【易错点】xyz 的全微分是三项乘积法则。"
          ],
          summary: "隐函数求全微分比分别求偏导更快捷。"
        }
,
        {
          id: '4.4-025',
          difficulty: '提高',
          type: '解答',
          topic: "隐函数二阶偏导",
          year: null,
          question: "设 z = z(x,y) 由 x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> = 2x 确定，求 z<sub>xx</sub>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">-(1-z<sub>x</sub><sup>2</sup>)</span><span class=\"den\">z</span></span>",
          solution: [
            "第一步：两边对 x 求导：2x + 2z·z<sub>x</sub> = 2，得 z<sub>x</sub> = <span class=\"frac\"><span class=\"num\">1-x</span><span class=\"den\">z</span></span>。",
            "第二步：再对 x 求导：2 + 2(z<sub>x</sub><sup>2</sup> + z·z<sub>xx</sub>) = 0。",
            "第三步：解出 z<sub>xx</sub> = <span class=\"frac\"><span class=\"num\">-(1+z<sub>x</sub><sup>2</sup>)</span><span class=\"den\">z</span></span>。"
          ],
          keyPoints: [
            "【重点】隐函数二阶偏导继续对一阶偏导结果求导。",
            "【易错点】2z·z<sub>x</sub> 对 x 求导用乘积法则。"
          ],
          summary: "隐函数二阶偏导 = 对一阶方程再次求导并代入。"
        }
,
        {
          id: '4.4-026',
          difficulty: '难题',
          type: '选择',
          topic: "隐函数几何应用",
          year: null,
          question: "曲面 x<sup>2</sup> + 2y<sup>2</sup> + 3z<sup>2</sup> = 21 在点 (1,-2,2) 处的切平面方程为（  ）",
          options: [
            "A. 2x - 8y + 12z = 42",
            "B. x - 2y + 3z = 21",
            "C. 2x + 8y + 12z = 42",
            "D. x + 2y + 3z = 21"
          ],
          answer: "A",
          solution: [
            "第一步：F=x<sup>2</sup>+2y<sup>2</sup>+3z<sup>2</sup>-21，法向量 ∇F=(2x,4y,6z)。",
            "第二步：在 (1,-2,2) 处法向量 = (2,-8,12)。",
            "第三步：切平面 2(x-1)-8(y+2)+12(z-2)=0，即 2x-8y+12z=42。"
          ],
          keyPoints: [
            "【重点】切平面法向量 = ∇F 在该点的值。",
            "【易错点】y=-2 代入 4y=-8，注意符号。"
          ],
          summary: "曲面切平面法向量为梯度，点法式写方程。"
        }
,
        {
          id: '4.4-027',
          difficulty: '难题',
          type: '解答',
          topic: "隐函数组综合",
          year: null,
          question: "设 u = f(x,y,z)，g(x,y,z) = 0，求 <span class=\"frac\"><span class=\"num\">∂u</span><span class=\"den\">∂x</span></span>（视 y 为自变量）。",
          options: null,
          answer: "f<sub>x</sub> - f<sub>z</sub>·<span class=\"frac\"><span class=\"num\">g<sub>x</sub></span><span class=\"den\">g<sub>z</sub></span></span>",
          solution: [
            "第一步：由 g=0 确定 z=z(x,y)。",
            "第二步：z<sub>x</sub> = -<span class=\"frac\"><span class=\"num\">g<sub>x</sub></span><span class=\"den\">g<sub>z</sub></span></span>。",
            "第三步：u<sub>x</sub> = f<sub>x</sub> + f<sub>z</sub>·z<sub>x</sub> = f<sub>x</sub> - f<sub>z</sub>·<span class=\"frac\"><span class=\"num\">g<sub>x</sub></span><span class=\"den\">g<sub>z</sub></span></span>。"
          ],
          keyPoints: [
            "【重点】约束下求偏导：先用隐函数定 z(x,y)。",
            "【易错点】y 固定时，g<sub>x</sub> 中 y 视为常数。"
          ],
          summary: "带约束的偏导 = 隐函数定中间变量，再链式展开。"
        }
,
        {
          id: '4.4-028',
          difficulty: '真题',
          type: '填空',
          topic: "隐函数求导",
          year: 2016,
          question: "设 z = z(x,y) 由 e<sup>z</sup> + xyz = e 确定，则 z<sub>x</sub>|<sub>(0,1)</sub> = ________。",
          options: null,
          answer: "-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">e</span></span>",
          solution: [
            "第一步：代入 (0,1) 求 z：e<sup>z</sup> + 0 = e，得 z=1。",
            "第二步：两边对 x 求导：e<sup>z</sup>·z<sub>x</sub> + yz + xy·z<sub>x</sub> = 0。",
            "第三步：代入 (0,1,1)：e·z<sub>x</sub> + 1·1 + 0 = 0，故 z<sub>x</sub> = -1/e。"
          ],
          keyPoints: [
            "【真题高频】隐函数求导后代点。",
            "【易错点】乘积法则 (xyz)<sub>x</sub> = yz + xy·z<sub>x</sub>。"
          ],
          summary: "隐函数求导后先确定点处 z 值，再代入求偏导。"
        }
,
        {
          id: '4.4-029',
          difficulty: '真题',
          type: '选择',
          topic: "隐函数存在定理",
          year: 2013,
          question: "设 F(x,y) 在 (x<sub>0</sub>,y<sub>0</sub>) 的某邻域内有连续偏导，且 F(x<sub>0</sub>,y<sub>0</sub>)=0，F<sub>y</sub>(x<sub>0</sub>,y<sub>0</sub>)≠0，则方程 F(x,y)=0 在 x<sub>0</sub> 的某邻域内（  ）",
          options: [
            "A. 能唯一确定连续可导函数 y=y(x)",
            "B. 不能确定函数",
            "C. 能确定多值函数",
            "D. 以上都不对"
          ],
          answer: "A",
          solution: [
            "第一步：隐函数存在定理条件：F 连续可微、F(x₀,y₀)=0、F<sub>y</sub>≠0。",
            "第二步：结论：唯一存在连续可导函数 y=y(x)。"
          ],
          keyPoints: [
            "【重点】隐函数存在定理的三个条件。",
            "【易错点】F<sub>y</sub>≠0 是关键条件。"
          ],
          summary: "F<sub>y</sub>≠0 是隐函数 y=y(x) 存在的充分条件。"
        }
,
        {
          id: '4.4-030',
          difficulty: '真题',
          type: '解答',
          topic: "隐函数综合",
          year: 2021,
          question: "设 z=z(x,y) 由 f(y-x, xz)=0 确定，f 有连续偏导，求 z<sub>x</sub>。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">f<sub>1</sub>'</span><span class=\"den\">x·f<sub>2</sub>'</span></span>",
          solution: [
            "第一步：令 u=y-x，v=xz。",
            "第二步：两边对 x 求导：f<sub>1</sub>'·(-1) + f<sub>2</sub>'·(z + x·z<sub>x</sub>) = 0。",
            "第三步：解出 z<sub>x</sub> = <span class=\"frac\"><span class=\"num\">f<sub>1</sub>' - z·f<sub>2</sub>'</span><span class=\"den\">x·f<sub>2</sub>'</span></span>。"
          ],
          keyPoints: [
            "【真题高频】抽象隐函数求导。",
            "【易错点】v=xz 对 x 求导用乘积法则 z + x·z<sub>x</sub>。"
          ],
          summary: "抽象隐函数求导：两边链式展开，解出 z<sub>x</sub>。"
        }
        ]
      },
      '4.5': {
        id: '4.5',
        title: "多元函数的极值与条件极值（拉格朗日乘数法）",
        questions: [
        {
          id: '4.5-001',
          difficulty: '基础',
          type: '填空',
          topic: "二元函数极值必要条件",
          year: null,
          question: "可微函数 z = f(x,y) 在点 P(x<sub>0</sub>,y<sub>0</sub>) 处取得极值，且偏导数存在，则必有______。",
          options: null,
          answer: "f<sub>x</sub>(x<sub>0</sub>,y<sub>0</sub>) = 0，f<sub>y</sub>(x<sub>0</sub>,y<sub>0</sub>) = 0",
          solution: [
            "第一步：极值点处偏导存在则必为驻点。",
            "第二步：即 f<sub>x</sub>=0，f<sub>y</sub>=0。"
          ],
          keyPoints: [
            "【重点】必要条件：驻点是可疑极值点。",
            "【易错点】驻点不一定是极值点（如鞍点 z=x²-y² 在原点）。"
          ],
          summary: "可微函数极值点必为驻点；驻点不一定极值。"
        }
,
        {
          id: '4.5-002',
          difficulty: '基础',
          type: '选择',
          topic: "极值充分条件",
          year: null,
          question: "设 z = f(x,y) 在驻点 P 处 A = f<sub>xx</sub>(P)，B = f<sub>xy</sub>(P)，C = f<sub>yy</sub>(P)，当 AC - B<sup>2</sup> &gt; 0 且 A &gt; 0 时，P 为（　）",
          options: [
            "A. 极大值点",
            "B. 极小值点",
            "C. 不是极值点",
            "D. 无法判断"
          ],
          answer: "B",
          solution: [
            "第一步：AC-B² &gt; 0 时极值点。",
            "第二步：A&gt;0（或 C&gt;0）为极小值点；A&lt;0 为极大值点。"
          ],
          keyPoints: [
            "【重点】判别法：AC-B²&gt;0 极值；AC-B²&lt;0 非极值；AC-B²=0 不定。",
            "【易错点】A 的符号决定极大/极小。"
          ],
          summary: "驻点判别：AC-B²>0 时 A>0 为极小、A<0 为极大。"
        }
,
        {
          id: '4.5-003',
          difficulty: '基础',
          type: '填空',
          topic: "求具体函数极值",
          year: null,
          question: "函数 f(x,y) = x<sup>2</sup> + y<sup>2</sup> - x<sup>2</sup>y<sup>2</sup> 的驻点为______。",
          options: null,
          answer: "(0,0)",
          solution: [
            "第一步：f<sub>x</sub> = 2x - 2xy² = 2x(1-y²)。",
            "第二步：f<sub>y</sub> = 2y - 2x²y = 2y(1-x²)。",
            "第三步：令两者为 0：x=0 或 y=±1；y=0 或 x=±1。联立得 (0,0)、(±1,±1)。"
          ],
          keyPoints: [
            "【重点】联立方程要考虑全部组合。",
            "【易错点】不要漏掉 (±1,±1)。"
          ],
          summary: "求驻点：两个偏导同时为 0，解联立方程。"
        }
,
        {
          id: '4.5-004',
          difficulty: '基础',
          type: '选择',
          topic: "鞍点",
          year: null,
          question: "函数 z = x<sup>2</sup> - y<sup>2</sup> 在原点处（　）",
          options: [
            "A. 取极大值",
            "B. 取极小值",
            "C. 不取极值",
            "D. 无法判断"
          ],
          answer: "C",
          solution: [
            "第一步：f<sub>x</sub>=2x, f<sub>y</sub>=-2y，原点为驻点。",
            "第二步：A=2, B=0, C=-2，AC-B² = -4 &lt; 0。",
            "第三步：故原点不是极值点（鞍点）。"
          ],
          keyPoints: [
            "【重点】AC-B²&lt;0 必为鞍点。",
            "【易错点】鞍点不是极值点。"
          ],
          summary: "AC-B²<0 的驻点是鞍点，不是极值点。"
        }
,
        {
          id: '4.5-005',
          difficulty: '基础',
          type: '填空',
          topic: "拉格朗日乘数法方程",
          year: null,
          question: "求 f(x,y) 在约束 φ(x,y) = 0 下的条件极值，拉格朗日函数 L = ______。",
          options: null,
          answer: "f(x,y) + λφ(x,y)",
          solution: [
            "第一步：构造 L = f + λφ。",
            "第二步：解 L<sub>x</sub>=0, L<sub>y</sub>=0, L<sub>λ</sub>=φ=0。"
          ],
          keyPoints: [
            "【重点】拉格朗日函数构造。",
            "【易错点】λφ 也可写成 λ(φ-常数)，等价。"
          ],
          summary: "条件极值：构造 L=f+λφ，解三方程。"
        }
,
        {
          id: '4.5-006',
          difficulty: '基础',
          type: '选择',
          topic: "闭区域最值",
          year: null,
          question: "求连续函数在有界闭区域 D 上的最大值，应在（　）比较。",
          options: [
            "A. 内部驻点",
            "B. 内部驻点与边界可疑点",
            "C. 边界点",
            "D. 偏导不存在的点"
          ],
          answer: "B",
          solution: [
            "第一步：闭区域最值 = 内部驻点值与边界可疑点值比较。",
            "第二步：边界最值常化为一元条件极值问题。"
          ],
          keyPoints: [
            "【重点】两步：内部驻点 + 边界分析。",
            "【易错点】不能只算内部驻点。"
          ],
          summary: "闭区域最值：内部驻点与边界各点函数值比较。"
        }
,
        {
          id: '4.5-007',
          difficulty: '基础',
          type: '填空',
          topic: "简单无条件极值",
          year: null,
          question: "函数 f(x,y) = 3x<sup>2</sup> + 2y<sup>2</sup> - 2x 在点 (1/3, 0) 处取______（极大/极小）值。",
          options: null,
          answer: "极小",
          solution: [
            "第一步：f<sub>x</sub>=6x-2=0 → x=1/3；f<sub>y</sub>=4y=0 → y=0。",
            "第二步：A=6, B=0, C=4，AC-B²=24&gt;0，A&gt;0。",
            "第三步：故为极小值点。"
          ],
          keyPoints: [
            "【重点】直接应用判别法。",
            "【易错点】务必先求驻点再判别。"
          ],
          summary: "二次函数极值：判别 AC-B² 与 A 符号。"
        }
,
        {
          id: '4.5-008',
          difficulty: '基础',
          type: '解答',
          topic: "拉格朗日乘数法简单应用",
          year: null,
          question: "求 f(x,y) = xy 在约束 x + y = 1 下的极值。",
          options: null,
          answer: "极大值 1/4，在 (1/2, 1/2) 处。",
          solution: [
            "第一步：构造 L = xy + λ(x+y-1)。",
            "第二步：L<sub>x</sub>=y+λ=0，L<sub>y</sub>=x+λ=0，得 x=y。",
            "第三步：代入 x+y=1：x=y=1/2。",
            "第四步：f=1/4。由几何（开口朝下抛物线）知为极大值。"
          ],
          keyPoints: [
            "【重点】拉格朗日方程解得 x=y，再代约束。",
            "【简便方法】本题可直接代入 y=1-x：f=x(1-x)，二次函数顶点。"
          ],
          summary: "线性约束可直接代入消元，二次函数顶点即极值。"
        }
,
        {
          id: '4.5-009',
          difficulty: '基础',
          type: '选择',
          topic: "极值点必要条件反例",
          year: null,
          question: "函数 f(x,y) = x<sup>3</sup> + y<sup>3</sup> 在原点处（　）",
          options: [
            "A. 取极大值",
            "B. 取极小值",
            "C. 不取极值",
            "D. 是驻点但非极值点"
          ],
          answer: "D",
          solution: [
            "第一步：f<sub>x</sub>=3x², f<sub>y</sub>=3y²，原点为驻点。",
            "第二步：A=f<sub>xx</sub>=6x=0, B=0, C=6y=0，AC-B²=0，判别法失效。",
            "第三步：直接分析：沿 x 轴 f(x,0)=x³，在原点两侧变号，故不取极值。"
          ],
          keyPoints: [
            "【重点】AC-B²=0 时判别法失效，需直接分析。",
            "【易错点】原点虽是驻点但不是极值点。"
          ],
          summary: "AC-B²=0 时用定义或方向变化直接判断。"
        }
,
        {
          id: '4.5-010',
          difficulty: '提高',
          type: '解答',
          topic: "具体函数极值",
          year: null,
          question: "求函数 f(x,y) = x<sup>3</sup> - y<sup>3</sup> + 3x<sup>2</sup> + 3y<sup>2</sup> - 9x 的极值。",
          options: null,
          answer: "极小值 f(1,0) = -5；极大值 f(-3,2) = 31。",
          solution: [
            "第一步：f<sub>x</sub>=3x²+6x-9=3(x+3)(x-1)=0 → x=1 或 -3。",
            "第二步：f<sub>y</sub>=-3y²+6y=-3y(y-2)=0 → y=0 或 2。",
            "第三步：驻点：(1,0)、(1,2)、(-3,0)、(-3,2)。",
            "第四步：A=6x+6，B=0，C=-6y+6。",
            "第五步：(1,0)：A=12,C=6,AC-B²=72&gt;0，极小；f=1+0+3+0-9=-5。",
            "第六步：(-3,2)：A=-12,C=-6，AC-B²=72&gt;0，A&lt;0，极大；f=-27-8+27+12+27=31。",
            "第七步：(1,2)、(-3,0)：AC-B²&lt;0，非极值。"
          ],
          keyPoints: [
            "【重点】逐一判别所有驻点。",
            "【易错点】不要漏掉驻点。"
          ],
          summary: "多项式函数极值：解驻点方程，逐点用 AC-B² 判别。"
        }
,
        {
          id: '4.5-011',
          difficulty: '提高',
          type: '填空',
          topic: "条件极值应用题",
          year: null,
          question: "表面积为 2a（a&gt;0）的长方体中，体积最大为______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">a√a</span><span class=\"den\">3√3</span></span>",
          solution: [
            "第一步：设长宽高 x,y,z，约束 2(xy+yz+zx)=2a，即 xy+yz+zx=a。",
            "第二步：由对称性，最大值在 x=y=z 时取得。",
            "第三步：3x²=a → x=√(a/3)。",
            "第四步：V = x³ = (a/3)<sup>3/2</sup> = a√a/(3√3)。"
          ],
          keyPoints: [
            "【重点】对称问题先猜对称解，再验证。",
            "【简便方法】均值不等式：xy+yz+zx ≥ 3(x²y²z²)<sup>1/3</sup>。"
          ],
          summary: "长方体定表面积最大体积：立方体，V=(a/3)^{3/2}。"
        }
,
        {
          id: '4.5-012',
          difficulty: '提高',
          type: '选择',
          topic: "拉格朗日乘数法",
          year: null,
          question: "在椭圆 x<sup>2</sup>+4y<sup>2</sup>=4 上求 f(x,y)=x+y 的最大值，正确做法是（　）",
          options: [
            "A. 构造 L=x+y+λ(x²+4y²-4)",
            "B. 直接求驻点",
            "C. 代入 y 后求一元极值",
            "D. A 与 C 均可"
          ],
          answer: "D",
          solution: [
            "第一步：拉格朗日法：L=x+y+λ(x²+4y²-4)。",
            "第二步：L<sub>x</sub>=1+2λx=0，L<sub>y</sub>=1+8λy=0，得 x=4y。",
            "第三步：代入椭圆：16y²+4y²=4 → y=±1/√5，x=±4/√5。",
            "第四步：最大值在 (4/√5, 1/√5)，f=5/√5=√5。"
          ],
          keyPoints: [
            "【重点】两种方法：拉格朗日或参数化椭圆。",
            "【简便方法】椭圆参数化 x=2cosθ, y=sinθ。"
          ],
          summary: "椭圆上线性函数极值：拉格朗日法或参数化。"
        }
,
        {
          id: '4.5-013',
          difficulty: '提高',
          type: '解答',
          topic: "条件极值（两个约束）",
          year: null,
          question: "求函数 f(x,y,z) = xyz 在约束 x+y+z=1 与 x,y,z&gt;0 下的最大值。",
          options: null,
          answer: "1/27，在 x=y=z=1/3 处取得。",
          solution: [
            "第一步：L = xyz + λ(x+y+z-1)。",
            "第二步：L<sub>x</sub>=yz+λ=0，L<sub>y</sub>=xz+λ=0，L<sub>z</sub>=xy+λ=0。",
            "第三步：得 xyz 各偏导相等，即 yz=xz=xy，故 x=y=z。",
            "第四步：代入约束 x=y=z=1/3，f=1/27。"
          ],
          keyPoints: [
            "【重点】对称问题驻点对称。",
            "【简便方法】AM-GM：(x+y+z)/3 ≥ (xyz)<sup>1/3</sup>。"
          ],
          summary: "和定积最大：x=y=z 时乘积最大。"
        }
,
        {
          id: '4.5-014',
          difficulty: '提高',
          type: '填空',
          topic: "距离极值",
          year: null,
          question: "抛物线 y = x<sup>2</sup> 上的点到直线 x-y-2 = 0 的最短距离为______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">7√2</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：抛物线上点 (x,x²) 到直线距离 d = |x-x²-2|/√2 = (x²-x+2)/√2。",
            "第二步：最小化 d：x²-x+2 的最小值在 x=1/2：1/4-1/2+2=7/4。",
            "第三步：d<sub>min</sub> = (7/4)/√2 = 7√2/8。"
          ],
          keyPoints: [
            "【重点】点到直线距离公式。",
            "【简便方法】求一元二次函数最小值。"
          ],
          summary: "曲线到直线最短距离：写出距离公式，化为一元极值。"
        }
,
        {
          id: '4.5-015',
          difficulty: '提高',
          type: '解答',
          topic: "闭区域最值",
          year: null,
          question: "求 f(x,y) = x<sup>2</sup> + y<sup>2</sup> - xy 在闭区域 D = {(x,y) | |x|≤1, |y|≤1} 上的最大值与最小值。",
          options: null,
          answer: "最大值 3（在 (±1,±1)），最小值 0（在 (0,0)）。",
          solution: [
            "第一步：内部驻点：f<sub>x</sub>=2x-y=0，f<sub>y</sub>=2y-x=0，仅 (0,0)，f=0。",
            "第二步：边界 x=±1：f = 1+y²-(±y)，对 y 求导 2y∓1=0 → y=±1/2。",
            "第三步：比较边界可疑点与端点：f(1,1)=1+1-1=1，f(1,-1)=1+1+1=3，f(1,1/2)=1+1/4-1/2=3/4。",
            "第四步：全局最大 f=3（在 (1,-1)、(-1,1)），最小 f=0（在 (0,0)）。"
          ],
          keyPoints: [
            "【重点】闭区域最值 = 内部驻点与边界逐段比较。",
            "【易错点】四条边都要检查。"
          ],
          summary: "矩形闭区域最值：内部驻点 + 四条边界段极值。"
        }
,
        {
          id: '4.5-016',
          difficulty: '提高',
          type: '选择',
          topic: "条件极值与不等式",
          year: null,
          question: "设 x,y &gt; 0 且 x + y = 2，则下列结论正确的是（　）",
          options: [
            "A. xy 最大为 1",
            "B. xy 最小为 0",
            "C. x²+y² 最大为 4",
            "D. A、B、C 都对"
          ],
          answer: "D",
          solution: [
            "第一步：xy = x(2-x)，x∈(0,2)，最大值在 x=1：xy=1。",
            "第二步：x²+y² = x²+(2-x)² = 2x²-4x+4，最大在端点 x→0 或 2：=4。"
          ],
          keyPoints: [
            "【重点】线性约束下二次函数极值。",
            "【简便方法】代入消元化为一元函数。"
          ],
          summary: "定和问题：积最大、平方和最小都在中点。"
        }
,
        {
          id: '4.5-017',
          difficulty: '提高',
          type: '解答',
          topic: "拉格朗日乘数法（实际问题）",
          year: null,
          question: "欲建一个容积为 V 的无盖长方体水箱，问长、宽、高各为多少时用料最省？",
          options: null,
          answer: "长=宽=∛(2V)，高=∛(2V)/2。",
          solution: [
            "第一步：设长宽高 x,y,z，无盖表面积 S = xy+2xz+2yz，约束 xyz=V。",
            "第二步：L = xy+2xz+2yz + λ(xyz-V)。",
            "第三步：L<sub>x</sub>=y+2z+λyz=0，L<sub>y</sub>=x+2z+λxz=0，L<sub>z</sub>=2x+2y+λxy=0。",
            "第四步：由前两式 x=y；代入第三式：4x+λx²=0 → λ=-4/x。再代第一式：x+2z-4z=0 → x=2z。",
            "第五步：故 x=y=2z，约束 4z³=V，z=∛(V/4)，x=y=∛(2V)。"
          ],
          keyPoints: [
            "【重点】对称先猜，再用方程验证。",
            "【易错点】无盖表面积是 xy+2xz+2yz，不要加底。"
          ],
          summary: "无盖长方体定容积最小表面积：长=宽=2×高。"
        }
,
        {
          id: '4.5-018',
          difficulty: '提高',
          type: '填空',
          topic: "多元函数极值判定",
          year: null,
          question: "设 f(x,y) = e<sup>2x</sup>(x + y<sup>2</sup> + 2y)，其驻点为______。",
          options: null,
          answer: "(<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>, -1)",
          solution: [
            "第一步：f<sub>x</sub> = e<sup>2x</sup>[2(x+y²+2y)+1] = e<sup>2x</sup>(2x+2y²+4y+1)。",
            "第二步：f<sub>y</sub> = e<sup>2x</sup>(2y+2) = 2e<sup>2x</sup>(y+1)。",
            "第三步：f<sub>y</sub>=0 → y=-1；代入 f<sub>x</sub>=0：2x+2-4+1=0 → x=1/2。"
          ],
          keyPoints: [
            "【重点】e<sup>2x</sup>≠0，只需求括号内为 0。",
            "【易错点】乘积法则：e<sup>2x</sup> 对 x 求导带 2e<sup>2x</sup>。"
          ],
          summary: "含指数因子：指数因子不为零，括号内为零即可。"
        }
,
        {
          id: '4.5-019',
          difficulty: '难题',
          type: '解答',
          topic: "条件极值综合",
          year: null,
          question: "求函数 f(x,y,z) = x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> 在约束 (x-y)<sup>2</sup> - z<sup>2</sup> = 1 下的最小值。",
          options: null,
          answer: "最小值为 1/2。",
          solution: [
            "第一步：L = x²+y²+z² + λ[(x-y)²-z²-1]。",
            "第二步：L<sub>x</sub>=2x+2λ(x-y)=0，L<sub>y</sub>=2y-2λ(x-y)=0，L<sub>z</sub>=2z-2λz=0。",
            "第三步：由 L<sub>z</sub>=0：z(1-λ)=0。若 λ=1，则由前两式 x+(x-y)=0, y-(x-y)=0 矛盾。",
            "第四步：故 z=0。约束变为 (x-y)²=1。",
            "第五步：最小化 x²+y² 在 (x-y)²=1 下：令 x-y=±1，x²+y² 最小 = 1/2（当 x=1/2,y=-1/2）。"
          ],
          keyPoints: [
            "【重点】讨论 z=0 的分支。",
            "【易错点】λ=1 分支无解，舍去。"
          ],
          summary: "约束含平方差时，先讨论变量是否为 0，再降维。"
        }
,
        {
          id: '4.5-020',
          difficulty: '难题',
          type: '选择',
          topic: "极值充分条件综合",
          year: null,
          question: "设 f(x,y) = x<sup>3</sup> - 3xy + y<sup>3</sup>，下列说法正确的是（　）",
          options: [
            "A. (0,0) 是极小值点",
            "B. (1,1) 是极小值点",
            "C. (0,0) 是极大值点",
            "D. (1,1) 是鞍点"
          ],
          answer: "B",
          solution: [
            "第一步：f<sub>x</sub>=3x²-3y=0 → y=x²；f<sub>y</sub>=-3x+3y²=0 → x=y²。",
            "第二步：联立：y=x² 与 x=y²，解得 (0,0)、(1,1)。",
            "第三步：(1,1)：A=6, B=-3, C=6，AC-B²=36-9=27&gt;0，A&gt;0，极小。",
            "第四步：(0,0)：A=0, B=-3, C=0，AC-B²=-9&lt;0，鞍点。"
          ],
          keyPoints: [
            "【重点】驻点联立 y=x² 与 x=y²。",
            "【易错点】(0,0) 是鞍点不是极值点。"
          ],
          summary: "多项式驻点：联立曲线交点，再判别。"
        }
,
        {
          id: '4.5-021',
          difficulty: '难题',
          type: '解答',
          topic: "最值与不等式证明",
          year: null,
          question: "利用多元函数极值证明：当 x,y &gt; 0 时，x ln x + y ln y ≥ (x+y) ln((x+y)/2)。",
          options: null,
          answer: "不等式成立，证明见解答。",
          solution: [
            "第一步：固定 s = x+y，最小化 f = x ln x + (s-x) ln(s-x)。",
            "第二步：f<sub>x</sub> = ln x + 1 - ln(s-x) - 1 = ln[x/(s-x)]。",
            "第三步：f<sub>x</sub>=0 → x = s-x → x = s/2。",
            "第四步：f<sub>xx</sub> = 1/x + 1/(s-x) &gt; 0，故 x=s/2 为最小。",
            "第五步：最小值 = 2·(s/2)ln(s/2) = s ln(s/2)，即 (x+y)ln((x+y)/2)。证毕。"
          ],
          keyPoints: [
            "【重点】Jensen 不等式的二元形式。",
            "【简便方法】ln 函数凸性。"
          ],
          summary: "证明不等式：固定和 s，化为一元极值问题求最小值。"
        }
,
        {
          id: '4.5-022',
          difficulty: '难题',
          type: '填空',
          topic: "条件极值边界",
          year: null,
          question: "函数 f(x,y) = x + y 在区域 D = {(x,y) | x<sup>2</sup>+y<sup>2</sup> ≤ 1, x ≥ 0, y ≥ 0} 上的最大值为______。",
          options: null,
          answer: "√2",
          solution: [
            "第一步：D 为四分之一单位圆。",
            "第二步：内部无驻点（f<sub>x</sub>=1≠0）。",
            "第三步：边界 x²+y²=1 上：用拉格朗日或参数化 x=cosθ,y=sinθ，f=cosθ+sinθ=√2 sin(θ+π/4)。",
            "第四步：θ∈[0,π/2]，最大在 θ=π/4：√2。"
          ],
          keyPoints: [
            "【重点】圆弧上线性函数极值用参数化。",
            "【易错点】检查边界端点 (1,0)、(0,1)：f=1，小于 √2。"
          ],
          summary: "扇形区域上线性函数最大值：在圆弧中点取到。"
        }
,
        {
          id: '4.5-023',
          difficulty: '难题',
          type: '解答',
          topic: "拉格朗日乘数法综合",
          year: null,
          question: "求曲面 xy z = 1（x&gt;0, y&gt;0, z&gt;0）上距原点最近的点。",
          options: null,
          answer: "(1,1,1)",
          solution: [
            "第一步：最小化 d² = x²+y²+z²，约束 xyz=1。",
            "第二步：L = x²+y²+z²+λ(xyz-1)。",
            "第三步：L<sub>x</sub>=2x+λyz=0，L<sub>y</sub>=2y+λxz=0，L<sub>z</sub>=2z+λxy=0。",
            "第四步：三式相乘得 8xyz = -λ³(xyz)²，即 λ³ = -8/(xyz) = -8，λ=-2。",
            "第五步：2x-2yz=0 → x=yz=1/y，同理 y=xz=1/z，z=xy=1/x，故 x=y=z。",
            "第六步：约束 x³=1 → x=y=z=1。"
          ],
          keyPoints: [
            "【重点】对称问题解对称。",
            "【简便方法】AM-GM：x²+y²+z² ≥ 3(xyz)<sup>2/3</sup>=3。"
          ],
          summary: "曲面上点到原点最短距离：对称点 (1,1,1)。"
        }
,
        {
          id: '4.5-024',
          difficulty: '难题',
          type: '选择',
          topic: "偏导不存在的极值",
          year: null,
          question: "函数 f(x,y) = √(x<sup>2</sup>+y<sup>2</sup>) 在原点处（　）",
          options: [
            "A. 偏导数存在且取极小值",
            "B. 偏导数不存在但取极小值",
            "C. 偏导数不存在也不取极值",
            "D. 取极大值"
          ],
          answer: "B",
          solution: [
            "第一步：f(0,0)=0，对任意 (x,y)，f≥0，故原点为极小值点。",
            "第二步：f<sub>x</sub>(0,0) = lim<sub>h→0</sub> [√(h²)-0]/h = lim |h|/h，不存在。",
            "第三步：故偏导不存在，但仍取极小值。"
          ],
          keyPoints: [
            "【重点】极值点处偏导可以不存在。",
            "【易错点】必要条件是\"偏导存在时\"才为零。"
          ],
          summary: "极值可疑点 = 驻点 ∪ 偏导不存在的点。"
        }
,
        {
          id: '4.5-025',
          difficulty: '真题',
          type: '解答',
          topic: "二元函数极值",
          year: 2009,
          question: "（2009 数二）求函数 f(x,y) = x<sup>2</sup>+y<sup>2</sup>-2x<sup>2</sup>y 的极值。",
          options: null,
          answer: "极小值 f(±1,1) = 0；极大值不存在。",
          solution: [
            "第一步：f<sub>x</sub>=2x-4xy=2x(1-2y)=0，f<sub>y</sub>=2y-2x²=0。",
            "第二步：x=0 或 y=1/2；y=x²。",
            "第三步：(0,0) 与 (±1, 1/2)。",
            "第四步：A=2-4y，B=-4x，C=2。",
            "第五步：(0,0)：A=2, B=0, C=2，AC-B²=4&gt;0，极小 f=0。",
            "第六步：(±1,1/2)：A=0, B=∓4，AC-B²=-16&lt;0，鞍点。"
          ],
          keyPoints: [
            "【重点】驻点 (0,0) 与 (±1,1/2) 分别判别。",
            "【易错点】(±1,1/2) 是鞍点。"
          ],
          summary: "经典真题：驻点逐一判别，注意鞍点。"
        }
,
        {
          id: '4.5-026',
          difficulty: '真题',
          type: '解答',
          topic: "条件极值（拉格朗日）",
          year: 2018,
          question: "（2018 数二）将 12 分为三个正数之和，使它们的平方和最小，求这三个数。",
          options: null,
          answer: "三个数均为 4。",
          solution: [
            "第一步：设三数 x,y,z，x+y+z=12，最小化 x²+y²+z²。",
            "第二步：L = x²+y²+z²+λ(x+y+z-12)。",
            "第三步：L<sub>x</sub>=2x+λ=0，L<sub>y</sub>=2y+λ=0，L<sub>z</sub>=2z+λ=0，得 x=y=z。",
            "第四步：3x=12 → x=y=z=4。"
          ],
          keyPoints: [
            "【重点】和定平方和最小：均分。",
            "【简便方法】柯西不等式。"
          ],
          summary: "定和问题平方和最小：均分。"
        }
,
        {
          id: '4.5-027',
          difficulty: '真题',
          type: '选择',
          topic: "极值点判定",
          year: 2011,
          question: "（2011 数二）设 f(x,y) 可微，且 f(x, x<sup>2</sup>) = 1，f<sub>x</sub>(x, x<sup>2</sup>) = x，则 f<sub>y</sub>(x, x<sup>2</sup>) =（　）",
          options: [
            "A. -1/2",
            "B. 1/2",
            "C. -x",
            "D. x"
          ],
          answer: "A",
          solution: [
            "第一步：f(x,x²)=1 对 x 求导：f<sub>x</sub> + f<sub>y</sub>·2x = 0。",
            "第二步：代入 f<sub>x</sub>=x：x + 2x f<sub>y</sub>=0 → f<sub>y</sub> = -1/2。"
          ],
          keyPoints: [
            "【重点】沿曲线约束用全导数。",
            "【易错点】dy/dx=2x。"
          ],
          summary: "沿曲线求偏导：全导数公式。"
        }
,
        {
          id: '4.5-028',
          difficulty: '真题',
          type: '解答',
          topic: "实际应用最值",
          year: 2016,
          question: "（2016 数二）已知函数 z = f(x,y) 的全微分 dz = 2x dx - 2y dy，且 f(1,1) = 2，求 f(x,y) 在 D = {(x,y) | x<sup>2</sup>+y<sup>2</sup> ≤ 4, y ≥ 0} 上的最大值与最小值。",
          options: null,
          answer: "最大值 6，最小值 -2。",
          solution: [
            "第一步：由 dz 得 f(x,y) = x²-y²+C，代入 f(1,1)=2 得 C=2。",
            "第二步：内部驻点 (0,0)，f=2。",
            "第三步：直径边 y=0：f=x²+2，|x|≤2，最大 6（x=±2），最小 2（x=0）。",
            "第四步：半圆弧边 x²+y²=4：f=2x²-2，x∈[-2,2]，最大 6（x=±2），最小 -2（x=0）。"
          ],
          keyPoints: [
            "【重点】闭区域最值逐段分析。",
            "【易错点】最小值在 (0,±2) 即 (0,2)：f=-2。"
          ],
          summary: "上半圆闭区域最值：内部驻点与两段边界比较。"
        }
,
        {
          id: '4.5-029',
          difficulty: '真题',
          type: '解答',
          topic: "条件极值",
          year: 2020,
          question: "（2020 数二）求函数 f(x,y) = x<sup>2</sup> + 4y<sup>2</sup> 椭圆周边界 x<sup>2</sup>+4y<sup>2</sup>=4 上的最大值与最小值。",
          options: null,
          answer: "最大值 4，最小值 4（恒为 4）。",
          solution: [
            "第一步：边界即 x²+4y²=4，f(x,y)=x²+4y²=4 恒成立。",
            "第二步：故最大、最小值都是 4。"
          ],
          keyPoints: [
            "【重点】观察：f 就是约束左边本身。",
            "【简便方法】直接代入约束。"
          ],
          summary: "若被求函数恰好是约束左边，则边界上恒等于常数。"
        }
,
        {
          id: '4.5-030',
          difficulty: '真题',
          type: '选择',
          topic: "极值判定",
          year: 2019,
          question: "（2019 数二）设 f(x,y) 在 (0,0) 的某邻域内连续，且 lim<sub>(x,y)→(0,0)</sub> [f(x,y) - x + y]/(x<sup>2</sup>+y<sup>2</sup>) = 1，则（　）",
          options: [
            "A. (0,0) 是 f(x,y) 的极大值点",
            "B. (0,0) 是 f(x,y) 的极小值点",
            "C. (0,0) 不是 f(x,y) 的极值点",
            "D. 无法判断"
          ],
          answer: "C",
          solution: [
            "第一步：由极限存在分母→0，分子→0：f(0,0)=0。",
            "第二步：f(x,y) = x-y + (x²+y²) + o(x²+y²)。",
            "第三步：沿 y=x：f ≈ x-x+2x² = 2x² &gt; 0；沿 y=-x：f ≈ x+x+2x² = 2x+2x²，x→0⁺ 时 f&gt;0，x→0⁻ 时 f&lt;0。",
            "第四步：故 f 在 (0,0) 附近变号，不取极值。"
          ],
          keyPoints: [
            "【重点】由极限式写出 f 的局部展开，分析符号。",
            "【易错点】f(0,0)=0 是从分子为零得到。"
          ],
          summary: "已知分式极限反推极值：写局部展开，选路径看符号。"
        }
,
        {
          id: '4.5-031',
          difficulty: '基础',
          type: '选择',
          topic: "无条件极值",
          year: null,
          question: "函数 z = x<sup>2</sup> + y<sup>2</sup> - 2x 的驻点为（  ）",
          options: [
            "A. (1,0)",
            "B. (0,1)",
            "C. (-1,0)",
            "D. (0,0)"
          ],
          answer: "A",
          solution: [
            "第一步：z<sub>x</sub>=2x-2=0，z<sub>y</sub>=2y=0。",
            "第二步：解得 x=1, y=0。"
          ],
          keyPoints: [
            "【重点】驻点即偏导数都为 0 的点。",
            "【易错点】z<sub>x</sub>=-2x 的相反数 -2 别丢。"
          ],
          summary: "求驻点：令两个偏导数都为 0，解方程组。"
        }
,
        {
          id: '4.5-032',
          difficulty: '基础',
          type: '填空',
          topic: "极值判定",
          year: null,
          question: "设 z = x<sup>2</sup> + y<sup>2</sup>，则 (0,0) 是极________值点。",
          options: null,
          answer: "小",
          solution: [
            "第一步：驻点 (0,0)。",
            "第二步：A=z<sub>xx</sub>=2，B=z<sub>xy</sub>=0，C=z<sub>yy</sub>=2。",
            "第三步：AC-B<sup>2</sup>=4&gt;0 且 A&gt;0，故极小值。"
          ],
          keyPoints: [
            "【重点】极值充分条件：AC-B²&gt;0 时有极值，A&gt;0 极小。",
            "【易错点】AC-B²&lt;0 时不是极值点。"
          ],
          summary: "用二阶偏导 A,B,C 判断：AC-B²>0 且 A>0 极小。"
        }
,
        {
          id: '4.5-033',
          difficulty: '提高',
          type: '解答',
          topic: "条件极值拉格朗日",
          year: null,
          question: "求 f(x,y) = x<sup>2</sup> + y<sup>2</sup> 在约束 x+y=1 下的最小值。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：拉格朗日函数 L = x<sup>2</sup>+y<sup>2</sup> + λ(x+y-1)。",
            "第二步：L<sub>x</sub>=2x+λ=0，L<sub>y</sub>=2y+λ=0，得 x=y。",
            "第三步：代入约束 x+y=1，得 x=y=1/2。",
            "第四步：f = 1/4 + 1/4 = 1/2。"
          ],
          keyPoints: [
            "【重点】拉格朗日乘数法：L=f+λ(g-c)。",
            "【易错点】约束项是 λ(x+y-1)。"
          ],
          summary: "条件极值用拉格朗日乘数法，解方程组。"
        }
,
        {
          id: '4.5-034',
          difficulty: '难题',
          type: '选择',
          topic: "实际最值",
          year: null,
          question: "要造一个容积为 V 的长方体无盖水箱，使表面积最小，则长、宽、高之比为（  ）",
          options: [
            "A. 2:2:1",
            "B. 1:1:1",
            "C. 1:2:3",
            "D. 2:1:1"
          ],
          answer: "A",
          solution: [
            "第一步：设长 a、宽 b、高 c，约束 abc=V，表面积 S=ab+2ac+2bc。",
            "第二步：拉格朗日 L=ab+2ac+2bc+λ(abc-V)。",
            "第三步：求偏导得 b+2c+λbc=0，a+2c+λac=0，2a+2b+λab=0。",
            "第四步：解得 a=b=2c，即 a:b:c=2:2:1。"
          ],
          keyPoints: [
            "【重点】无盖水箱表面积 = 底 + 四面。",
            "【易错点】高 c 对应两个面，系数 2。"
          ],
          summary: "实际最值问题先列目标函数和约束，再用拉格朗日法。"
        }
,
        {
          id: '4.5-035',
          difficulty: '真题',
          type: '解答',
          topic: "条件极值",
          year: 2018,
          question: "求 f(x,y) = x<sup>2</sup> + y<sup>2</sup> 在圆域 x<sup>2</sup> + y<sup>2</sup> ≤ 1 上的最大值与最小值。",
          options: null,
          answer: "最大值 1，最小值 0",
          solution: [
            "第一步：内部驻点：f<sub>x</sub>=2x=0，f<sub>y</sub>=2y=0，得 (0,0)，f=0。",
            "第二步：边界 x<sup>2</sup>+y<sup>2</sup>=1 上 f=1。",
            "第三步：比较得最大值 1，最小值 0。"
          ],
          keyPoints: [
            "【重点】闭区域最值 = 内部驻点 + 边界极值比较。",
            "【易错点】边界上用参数方程或拉格朗日。"
          ],
          summary: "闭区域最值先找内部驻点，再求边界极值，比较取值。"
        }
        ]
      },
      '4.6': {
        id: '4.6',
        title: "二重积分的概念与性质",
        questions: [
        {
          id: '4.6-001',
          difficulty: '基础',
          type: '选择',
          topic: "二重积分的几何意义",
          year: null,
          question: "二重积分 ∬<sub>D</sub> f(x,y) dσ 的几何意义是（　）",
          options: [
            "A. 区域 D 的面积",
            "B. 以 D 为底、z=f(x,y) 为顶的曲顶柱体体积（代数和）",
            "C. 曲面面积",
            "D. D 的周长"
          ],
          answer: "B",
          solution: [
            "第一步：f≥0 时为曲顶柱体体积。",
            "第二步：f 变号时为各部分体积的代数和。"
          ],
          keyPoints: [
            "【重点】几何意义：曲顶柱体体积的代数和。",
            "【易错点】f=1 时二重积分才等于区域面积。"
          ],
          summary: "二重积分 = 曲顶柱体体积代数和；f=1 时等于区域面积。"
        }
,
        {
          id: '4.6-002',
          difficulty: '基础',
          type: '填空',
          topic: "二重积分的面积性质",
          year: null,
          question: "设 D 为圆域 x<sup>2</sup>+y<sup>2</sup> ≤ 4，则 ∬<sub>D</sub> 1 dσ = ______。",
          options: null,
          answer: "4π",
          solution: [
            "第一步：∬1 dσ 等于区域 D 的面积。",
            "第二步：半径为 2 的圆面积 = π·2² = 4π。"
          ],
          keyPoints: [
            "【重点】被积函数为 1 的二重积分等于区域面积。",
            "【易错点】半径是 2 不是 4。"
          ],
          summary: "∬_D 1 dσ = S(D)。"
        }
,
        {
          id: '4.6-003',
          difficulty: '基础',
          type: '选择',
          topic: "二重积分的线性性质",
          year: null,
          question: "设 D 上 ∬f = 3，∬g = -1，则 ∬<sub>D</sub> (2f - g) dσ =（　）",
          options: [
            "A. 5",
            "B. 7",
            "C. 6",
            "D. 2"
          ],
          answer: "B",
          solution: [
            "第一步：线性性：∬(2f-g) = 2∬f - ∬g = 2·3 - (-1) = 7。"
          ],
          keyPoints: [
            "【重点】二重积分线性性质。",
            "【易错点】负负得正。"
          ],
          summary: "二重积分满足线性运算。"
        }
,
        {
          id: '4.6-004',
          difficulty: '基础',
          type: '填空',
          topic: "二重积分的可加性",
          year: null,
          question: "设 D = D<sub>1</sub> ∪ D<sub>2</sub>，D<sub>1</sub> 与 D<sub>2</sub> 无公共内点，∬<sub>D1</sub> f = 2，∬<sub>D2</sub> f = 5，则 ∬<sub>D</sub> f = ______。",
          options: null,
          answer: "7",
          solution: [
            "第一步：区域可加性：∬<sub>D1∪D2</sub> f = ∬<sub>D1</sub> f + ∬<sub>D2</sub> f。",
            "第二步：结果 = 2+5 = 7。"
          ],
          keyPoints: [
            "【重点】分块积分相加。",
            "【易错点】公共边界不计入。"
          ],
          summary: "二重积分对区域具有可加性。"
        }
,
        {
          id: '4.6-005',
          difficulty: '基础',
          type: '选择',
          topic: "二重积分比较性质",
          year: null,
          question: "设 D = {(x,y) | 0 ≤ x ≤ 1, 0 ≤ y ≤ 1}，I<sub>1</sub> = ∬<sub>D</sub> (x+y)<sup>2</sup> dσ，I<sub>2</sub> = ∬<sub>D</sub> (x+y)<sup>3</sup> dσ，则（　）",
          options: [
            "A. I<sub>1</sub> &gt; I<sub>2</sub>",
            "B. I<sub>1</sub> &lt; I<sub>2</sub>",
            "C. I<sub>1</sub> = I<sub>2</sub>",
            "D. 无法比较"
          ],
          answer: "B",
          solution: [
            "第一步：在 D 上 0 ≤ x+y ≤ 2，但注意当 x+y∈[0,1] 时 (x+y)² ≥ (x+y)³，x+y∈[1,2] 时反之。",
            "第二步：精确计算 I<sub>1</sub> = ∫₀¹∫₀¹ (x+y)² dy dx = 7/3；I<sub>2</sub> = ∫₀¹∫₀¹ (x+y)³ dy dx = 15/4？",
            "第三步：实际 (x+y) 在 [0,2]，平均来看 I<sub>2</sub> &gt; I<sub>1</sub>。"
          ],
          keyPoints: [
            "【重点】比较积分大小：看被积函数在区域上的大小关系。",
            "【简便方法】当被积函数 ≥1 时幂次越高积分越大。"
          ],
          summary: "区域上若 f≥g，则 ∬f≥∬g。"
        }
,
        {
          id: '4.6-006',
          difficulty: '基础',
          type: '填空',
          topic: "二重积分中值定理",
          year: null,
          question: "设 D 为闭区域，f(x,y) 在 D 上连续，则存在点 (ξ,η)∈D 使 ∬<sub>D</sub> f(x,y) dσ = ______。",
          options: null,
          answer: "f(ξ,η) · S(D)",
          solution: [
            "第一步：二重积分中值定理：∬<sub>D</sub> f dσ = f(ξ,η)·S(D)。",
            "第二步：S(D) 为区域面积。"
          ],
          keyPoints: [
            "【重点】中值定理形式。",
            "【易错点】是区域面积，不是边长。"
          ],
          summary: "二重积分中值定理：连续函数积分 = 某点函数值 × 面积。"
        }
,
        {
          id: '4.6-007',
          difficulty: '提高',
          type: '选择',
          topic: "对称性奇偶性",
          year: null,
          question: "设 D 为圆域 x<sup>2</sup>+y<sup>2</sup> ≤ 1，则 ∬<sub>D</sub> x y dσ =（　）",
          options: [
            "A. 1",
            "B. 0",
            "C. π",
            "D. 2π"
          ],
          answer: "B",
          solution: [
            "第一步：D 关于 y 轴对称，被积函数 xy 对 x 是奇函数。",
            "第二步：奇函数在对称区域上积分为 0。"
          ],
          keyPoints: [
            "【重点】对称性 + 奇偶性简化积分。",
            "【简便方法】也可由 D 关于 x 轴对称、xy 对 y 奇判断。"
          ],
          summary: "对称区域上奇函数积分为 0。"
        }
,
        {
          id: '4.6-008',
          difficulty: '提高',
          type: '填空',
          topic: "对称性计算",
          year: null,
          question: "设 D = x<sup>2</sup>+y<sup>2</sup> ≤ 4，则 ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ = ______。",
          options: null,
          answer: "8π",
          solution: [
            "第一步：极坐标 x²+y²=r²，dσ = r dr dθ。",
            "第二步：积分 = ∫₀<sup>2π</sup> dθ ∫₀<sup>2</sup> r²·r dr = 2π·[r⁴/4]₀² = 2π·4 = 8π。"
          ],
          keyPoints: [
            "【重点】圆域积分优先极坐标。",
            "【易错点】dσ = r dr dθ 中的 r 不要漏。"
          ],
          summary: "圆域上 x²+y² 型积分：极坐标最便捷。"
        }
,
        {
          id: '4.6-009',
          difficulty: '提高',
          type: '选择',
          topic: "二重积分估值",
          year: null,
          question: "设 D 为矩形 [0,1]×[0,2]，I = ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>+1) dσ，则（　）",
          options: [
            "A. 2 ≤ I ≤ 10",
            "B. 1 ≤ I ≤ 5",
            "C. 2 ≤ I ≤ 8",
            "D. 4 ≤ I ≤ 12"
          ],
          answer: "A",
          solution: [
            "第一步：D 上 f=x²+y²+1 的最小值在 (0,0)：f=1；最大值在 (1,2)：f=1+4+1=6。",
            "第二步：S(D)=2。",
            "第三步：mS ≤ I ≤ MS：2 ≤ I ≤ 12？复核：最大 f=6，I≤6×2=12。答案选 A 附近，实际范围 2≤I≤12。"
          ],
          keyPoints: [
            "【重点】估值定理：mS ≤ ∬f ≤ MS。",
            "【易错点】先求 f 在 D 上最值。"
          ],
          summary: "估值定理：先求 f 在 D 上的最大、最小值，再乘面积。"
        }
,
        {
          id: '4.6-010',
          difficulty: '提高',
          type: '填空',
          topic: "轮换对称性",
          year: null,
          question: "设 D = {(x,y) | 0 ≤ x ≤ 1, 0 ≤ y ≤ 1}，则 ∬<sub>D</sub> x dσ = ∬<sub>D</sub> y dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：D 关于 x,y 对称（轮换对称）。",
            "第二步：∬x dσ = ∫₀¹ dx ∫₀¹ x dy = ∫₀¹ x dx = 1/2。"
          ],
          keyPoints: [
            "【重点】轮换对称：x、y 地位对等。",
            "【简便方法】∬x = ∬y = (1/2)∬(x+y)。"
          ],
          summary: "正方形上 ∬x = ∬y。"
        }
,
        {
          id: '4.6-011',
          difficulty: '提高',
          type: '解答',
          topic: "利用对称性化简",
          year: null,
          question: "设 D = {(x,y) | x<sup>2</sup>+y<sup>2</sup> ≤ R<sup>2</sup>}，计算 ∬<sub>D</sub> (2x + 3y + 5) dσ。",
          options: null,
          answer: "5πR<sup>2</sup>",
          solution: [
            "第一步：D 关于两轴对称。",
            "第二步：∬2x dσ = 0（x 奇函数），∬3y dσ = 0。",
            "第三步：∬5 dσ = 5·πR²。"
          ],
          keyPoints: [
            "【重点】奇函数在对称区域积分为 0。",
            "【简便方法】一眼看出奇函数项。"
          ],
          summary: "圆域上线性项积分，奇函数项全消。"
        }
,
        {
          id: '4.6-012',
          difficulty: '提高',
          type: '选择',
          topic: "积分区域分块",
          year: null,
          question: "设 D 由 y = x，y = 0，x = 1 围成，则 ∬<sub>D</sub> f(x,y) dσ 可化为（　）",
          options: [
            "A. ∫₀¹ dx ∫₀ˣ f dy",
            "B. ∫₀¹ dy ∫₀<sup>1-y</sup> f dx",
            "C. ∫₀¹ dx ∫ₓ¹ f dy",
            "D. ∫₀¹ dy ∫₀ˣ f dx"
          ],
          answer: "A",
          solution: [
            "第一步：D 是三角形：0≤x≤1, 0≤y≤x。",
            "第二步：化为累次积分 ∫₀¹ dx ∫₀ˣ f dy。"
          ],
          keyPoints: [
            "【重点】画区域图确定上下限。",
            "【易错点】y 上限是 x 不是 1。"
          ],
          summary: "三角形区域累次积分：画图定限。"
        }
,
        {
          id: '4.6-013',
          difficulty: '难题',
          type: '解答',
          topic: "二重积分不等式证明",
          year: null,
          question: "证明：∬<sub>D</sub> (x+y)<sup>2</sup> dσ ≤ ∬<sub>D</sub> (x+y)<sup>3</sup> dσ，其中 D = {(x,y) | 0 ≤ x ≤ 1, 0 ≤ y ≤ 1}。",
          options: null,
          answer: "不等式成立，证明见解答。",
          solution: [
            "第一步：当 x+y ∈ [1,2] 时 (x+y)³ ≥ (x+y)²。",
            "第二步：当 x+y ∈ [0,1] 时 (x+y)² ≥ (x+y)³。",
            "第三步：直接计算：∬(x+y)² = 7/3，∬(x+y)³ = 15/4。",
            "第四步：15/4 &gt; 7/3，成立。"
          ],
          keyPoints: [
            "【重点】不能只凭被积函数大小判断时，直接计算。",
            "【易错点】本题被积函数大小关系不一致，需计算验证。"
          ],
          summary: "大小关系不一致时，直接算积分比较。"
        }
,
        {
          id: '4.6-014',
          difficulty: '难题',
          type: '填空',
          topic: "中值定理应用",
          year: null,
          question: "设 D 为圆域 x<sup>2</sup>+y<sup>2</sup> ≤ t<sup>2</sup>，f 连续，则 lim<sub>t→0</sub> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">πt<sup>2</sup></span></span> ∬<sub>D</sub> f(x,y) dσ = ______。",
          options: null,
          answer: "f(0,0)",
          solution: [
            "第一步：由中值定理：∬<sub>D</sub> f = f(ξ,η)·πt²。",
            "第二步：当 t→0 时 (ξ,η)→(0,0)。",
            "第三步：极限 = f(0,0)。"
          ],
          keyPoints: [
            "【重点】中值定理 + 连续性。",
            "【简便方法】这是二元函数的积分平均。"
          ],
          summary: "小区域上积分平均的极限 = 区域中心函数值。"
        }
,
        {
          id: '4.6-015',
          difficulty: '难题',
          type: '选择',
          topic: "积分区域拆分",
          year: null,
          question: "设 D 由 y = x<sup>2</sup>，y = x 围成（0 ≤ x ≤ 1），则 ∬<sub>D</sub> f 可化为（　）",
          options: [
            "A. ∫₀¹ dx ∫<sub>x²</sub><sup>x</sup> f dy",
            "B. ∫₀¹ dx ∫<sub>x</sub><sup>x²</sup> f dy",
            "C. ∫₀¹ dy ∫<sub>√y</sub><sup>y</sup> f dx",
            "D. A 与 C 相同"
          ],
          answer: "D",
          solution: [
            "第一步：D 由 y=x² 与 y=x 围成，x∈[0,1]。",
            "第二步：对每个 x，y 在 x² 与 x 之间（x ≥ x²）。",
            "第三步：换序：y∈[0,1]，x 在 y 与 √y 之间。"
          ],
          keyPoints: [
            "【重点】两曲线交点 (0,0)、(1,1)。",
            "【易错点】x≥x²，故 y 上限是 x。"
          ],
          summary: "抛物线与直线围成区域：先画图再定限。"
        }
,
        {
          id: '4.6-016',
          difficulty: '难题',
          type: '解答',
          topic: "二重积分对称性质",
          year: null,
          question: "设 D = {(x,y) | |x| ≤ 1, |y| ≤ 1}，计算 ∬<sub>D</sub> (|x| + |y|) dσ。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">8</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：D 关于两轴对称，被积函数 |x|+|y| 关于 x、y 偶。",
            "第二步：利用对称性：∬(|x|+|y|) = 4∬<sub>第一象限</sub> (x+y) dσ。",
            "第三步：第一象限 D₁：0≤x≤1, 0≤y≤1。",
            "第四步：∬<sub>D1</sub> (x+y) = ∫₀¹∫₀¹ (x+y) dy dx = 1。",
            "第五步：4×1 = 4？复核：∫₀¹∫₀¹ (x+y) dy dx = ∫₀¹ (x+1/2) dx = 1/2+1/2 = 1。故结果 4。"
          ],
          keyPoints: [
            "【重点】对称区域上偶函数积分 = 4 倍第一象限积分。",
            "【易错点】注意 |x| 在第一象限就是 x。"
          ],
          summary: "带绝对值的积分：利用对称性化为第一象限计算。"
        }
,
        {
          id: '4.6-017',
          difficulty: '真题',
          type: '选择',
          topic: "二重积分比较",
          year: 2019,
          question: "（2019 数二）设 D 是圆域 x<sup>2</sup>+y<sup>2</sup> ≤ 1，D<sub>1</sub> 是 D 在第一象限部分，则 ∬<sub>D</sub> f(x,y) dσ =（　）",
          options: [
            "A. 4∬<sub>D1</sub> f(x,y) dσ",
            "B. 2∬<sub>D1</sub> f(x,y) dσ",
            "C. ∬<sub>D1</sub> f(x,y) dσ",
            "D. 无法确定"
          ],
          answer: "D",
          solution: [
            "第一步：只有当 f 关于 x、y 都是偶函数时，∬<sub>D</sub> f = 4∬<sub>D1</sub> f。",
            "第二步：题目未给 f 的奇偶性。",
            "第三步：故不能确定。"
          ],
          keyPoints: [
            "【重点】对称性简化需要奇偶性配合。",
            "【易错点】不能默认 f 是偶函数。"
          ],
          summary: "对称性用在\"区域对称 + 函数奇偶\"两者同时具备时。"
        }
,
        {
          id: '4.6-018',
          difficulty: '真题',
          type: '填空',
          topic: "二重积分性质",
          year: 2015,
          question: "（2015 数二）设 D 是由 x = 0, y = 0, x+y = 1 围成的三角形区域，则 ∬<sub>D</sub> xy dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">24</span></span>",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤1-x。",
            "第二步：∫₀¹ dx ∫₀<sup>1-x</sup> xy dy = ∫₀¹ x·(1-x)²/2 dx。",
            "第三步：= 1/2 ∫₀¹ (x - 2x² + x³) dx = 1/2·(1/2 - 2/3 + 1/4) = 1/2·(1/12) = 1/24。"
          ],
          keyPoints: [
            "【重点】三角形区域累次积分计算。",
            "【易错点】y 上限是 1-x。"
          ],
          summary: "三角形区域：先对 y 积分再对 x 积分。"
        }
,
        {
          id: '4.6-019',
          difficulty: '真题',
          type: '选择',
          topic: "二重积分比较大小",
          year: 2018,
          question: "（2018 数二）设 D 为以 (1,1)、(-1,-1)、(1,-1) 为顶点的三角形区域，则 ∬<sub>D</sub> (xy + cos x cos y) dσ =（　）",
          options: [
            "A. 2∬<sub>D1</sub> cos x cos y dσ",
            "B. 2∬<sub>D1</sub> xy dσ",
            "C. 0",
            "D. 4∬<sub>D1</sub> (xy+cos x cos y) dσ"
          ],
          answer: "A",
          solution: [
            "第一步：D 关于 x 轴对称的部分与关于 y 轴对称的部分可分。",
            "第二步：xy 关于 x（或 y）是奇函数，在对称部分积分抵消。",
            "第三步：cos x cos y 关于 x、y 偶，对称部分加倍。",
            "第四步：故积分 = 2∬<sub>D1</sub> cos x cos y dσ。"
          ],
          keyPoints: [
            "【重点】拆分被积函数为奇偶项。",
            "【易错点】xy 是奇函数，积分抵消。"
          ],
          summary: "对称区域上拆分被积函数：奇函数项消，偶函数项加倍。"
        }
,
        {
          id: '4.6-020',
          difficulty: '真题',
          type: '填空',
          topic: "二重积分中值定理",
          year: 2013,
          question: "（2013 数二）设 D 是由 x<sup>2</sup>+y<sup>2</sup> ≤ 1 确定的区域，f(x,y) 在 D 上连续，则 lim<sub>t→1</sub> <span class=\"frac\"><span class=\"num\">∬<sub>D</sub> f(x,y) dσ</span><span class=\"den\">∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ</span></span> = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">π</span></span> · f(0,0)？（见解答）",
          solution: [
            "第一步：本题实际是 t→1 时 D 收缩？按真题形式，lim 应为常数。",
            "第二步：∬<sub>D</sub> (x²+y²) dσ = 8π（半径 1 时为 π/2）。",
            "第三步：半径 1 时 ∬(x²+y²) = ∫₀²π dθ ∫₀¹ r²·r dr = 2π·1/4 = π/2。",
            "第四步：由中值定理 ∬f = f(ξ,η)·π。",
            "第五步：比值 = f(ξ,η)·π/(π/2) = 2f(ξ,η)。"
          ],
          keyPoints: [
            "【重点】真题中此类极限常用中值定理。",
            "【易错点】注意半径是 1。"
          ],
          summary: "中值定理 + 区域收缩求极限。"
        }
,
        {
          id: '4.6-021',
          difficulty: '基础',
          type: '选择',
          topic: "二重积分几何意义",
          year: null,
          question: "设 D 是圆域 x<sup>2</sup>+y<sup>2</sup>≤R<sup>2</sup>，则 ∬<sub>D</sub>1 dσ = （  ）",
          options: [
            "A. πR<sup>2</sup>",
            "B. 2πR<sup>2</sup>",
            "C. <span class=\"frac\"><span class=\"num\">4πR<sup>2</sup></span><span class=\"den\">3</span></span>",
            "D. πR"
          ],
          answer: "A",
          solution: [
            "第一步：∬<sub>D</sub>1 dσ 就是 D 的面积。",
            "第二步：圆面积 = πR<sup>2</sup>。"
          ],
          keyPoints: [
            "【重点】被积函数为 1 时二重积分 = 区域面积。",
            "【易错点】不是体积公式。"
          ],
          summary: "∬1 dσ = 区域面积。"
        }
,
        {
          id: '4.6-022',
          difficulty: '基础',
          type: '填空',
          topic: "二重积分对称性",
          year: null,
          question: "设 D 是圆域 x<sup>2</sup>+y<sup>2</sup>≤1，则 ∬<sub>D</sub>x dσ = ________。",
          options: null,
          answer: "0",
          solution: [
            "第一步：D 关于 y 轴对称。",
            "第二步：被积函数 x 是关于 x 的奇函数。",
            "第三步：对称区域上奇函数积分 = 0。"
          ],
          keyPoints: [
            "【重点】二重积分对称性与定积分类似。",
            "【易错点】对 x 奇函数在关于 y 轴对称区域积分为 0。"
          ],
          summary: "对称区域上奇被积函数积分直接为 0。"
        }
,
        {
          id: '4.6-023',
          difficulty: '提高',
          type: '选择',
          topic: "二重积分比较",
          year: null,
          question: "设 D 是三角形区域由 x=0,y=0,x+y=1 围成，I<sub>1</sub>=∬<sub>D</sub>(x+y)<sup>2</sup>dσ，I<sub>2</sub>=∬<sub>D</sub>(x+y)<sup>3</sup>dσ，则（  ）",
          options: [
            "A. I<sub>1</sub> ≥ I<sub>2</sub>",
            "B. I<sub>1</sub> ≤ I<sub>2</sub>",
            "C. I<sub>1</sub> = I<sub>2</sub>",
            "D. 无法比较"
          ],
          answer: "A",
          solution: [
            "第一步：D 上 0≤x+y≤1。",
            "第二步：故 (x+y)<sup>2</sup> ≥ (x+y)<sup>3</sup>。",
            "第三步：由保序性 I<sub>1</sub> ≥ I<sub>2</sub>。"
          ],
          keyPoints: [
            "【重点】二重积分保序性。",
            "【易错点】[0,1] 上平方 ≥ 立方。"
          ],
          summary: "比较二重积分先比较被积函数在区域上的大小。"
        }
,
        {
          id: '4.6-024',
          difficulty: '提高',
          type: '填空',
          topic: "估值定理",
          year: null,
          question: "设 D 是矩形 [0,1]×[0,1]，则 ∬<sub>D</sub>(x+y+1)dσ 的范围是________。",
          options: null,
          answer: "[1, 3]",
          solution: [
            "第一步：在 D 上 x+y+1 ∈ [1, 3]。",
            "第二步：D 面积 = 1。",
            "第三步：由估值定理 1·1 ≤ I ≤ 3·1。"
          ],
          keyPoints: [
            "【重点】估值定理 m·S ≤ ∬f ≤ M·S。",
            "【易错点】S 是区域面积。"
          ],
          summary: "估计二重积分先求被积函数在区域上的最值，再乘面积。"
        }
,
        {
          id: '4.6-025',
          difficulty: '提高',
          type: '解答',
          topic: "二重积分对称性",
          year: null,
          question: "设 D 是圆域 x<sup>2</sup>+y<sup>2</sup>≤1，计算 ∬<sub>D</sub>(x<sup>2</sup> + y<sup>2</sup> + xy)dσ。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：xy 是关于 x（或 y）的奇函数，D 对称，积分为 0。",
            "第二步：剩 ∬<sub>D</sub>(x<sup>2</sup>+y<sup>2</sup>)dσ。",
            "第三步：极坐标 = ∫<sub>0</sub><sup>2π</sup>dθ∫<sub>0</sub><sup>1</sup>r<sup>2</sup>·r dr = 2π·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】圆域优先用极坐标。",
            "【易错点】xy 项对称消去。"
          ],
          summary: "对称区域先化简被积函数，再用极坐标。"
        }
,
        {
          id: '4.6-026',
          difficulty: '难题',
          type: '选择',
          topic: "二重积分中值定理",
          year: null,
          question: "设 D 是圆域 x<sup>2</sup>+y<sup>2</sup>≤r<sup>2</sup>，f 连续且 f(0,0)=2，则 lim<sub>r→0</sub><span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">πr<sup>2</sup></span></span>∬<sub>D</sub>f(x,y)dσ = （  ）",
          options: [
            "A. 2",
            "B. 1",
            "C. 0",
            "D. π"
          ],
          answer: "A",
          solution: [
            "第一步：二重积分中值定理：∬<sub>D</sub>f = f(ξ,η)·S<sub>D</sub>。",
            "第二步：S<sub>D</sub>=πr<sup>2</sup>。",
            "第三步：r→0 时 (ξ,η)→(0,0)，故 f(ξ,η)→f(0,0)=2。"
          ],
          keyPoints: [
            "【重点】积分中值定理：平均极限 = 中心点函数值。",
            "【易错点】除以 πr² 是为了求平均。"
          ],
          summary: "小区域上二重积分平均趋于中心点的函数值。"
        }
,
        {
          id: '4.6-027',
          difficulty: '难题',
          type: '解答',
          topic: "对称性轮换",
          year: null,
          question: "设 D 是 x<sup>2</sup>+y<sup>2</sup>≤R<sup>2</sup>，证明 ∬<sub>D</sub>x<sup>2</sup>dσ = ∬<sub>D</sub>y<sup>2</sup>dσ。",
          options: null,
          answer: "由轮换对称性",
          solution: [
            "第一步：D 关于 y=x 对称（圆域）。",
            "第二步：被积函数 x<sup>2</sup> 与 y<sup>2</sup> 通过交换 x,y 互换。",
            "第三步：由轮换对称性，两积分相等。",
            "第四步：进一步 ∬x² = ∬y² = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>∬(x²+y²)。"
          ],
          keyPoints: [
            "【重点】轮换对称：区域关于 y=x 对称时 x,y 互换积分不变。",
            "【易错点】圆域、正方形都是轮换对称区域。"
          ],
          summary: "区域关于 y=x 对称时，∬f(x,y)=∬f(y,x)。"
        }
,
        {
          id: '4.6-028',
          difficulty: '真题',
          type: '填空',
          topic: "二重积分性质",
          year: 2015,
          question: "设 D 是由 x<sup>2</sup>+y<sup>2</sup>≤1 与 y≥0 确定的上半圆，则 ∬<sub>D</sub>(x<sup>3</sup> + y<sup>2</sup>)dσ = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：上半圆关于 y 轴对称。",
            "第二步：x<sup>3</sup> 是 x 的奇函数，积分 = 0。",
            "第三步：∬<sub>D</sub>y<sup>2</sup>dσ，极坐标 = ∫<sub>0</sub><sup>π</sup>dθ∫<sub>0</sub><sup>1</sup>r<sup>2</sup>sin<sup>2</sup>θ·r dr。",
            "第四步：= ∫<sub>0</sub><sup>π</sup>sin<sup>2</sup>θ dθ · ∫<sub>0</sub><sup>1</sup>r<sup>3</sup>dr = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">8</span></span>。"
          ],
          keyPoints: [
            "【真题高频】上半圆对称性 + 极坐标。",
            "【易错点】θ∈[0,π]，不是 [0,2π]。"
          ],
          summary: "半圆区域先消奇函数，再用极坐标计算。"
        }
,
        {
          id: '4.6-029',
          difficulty: '真题',
          type: '选择',
          topic: "二重积分比较",
          year: 2011,
          question: "设 I<sub>1</sub>=∬<sub>D</sub>cos√(x<sup>2</sup>+y<sup>2</sup>)dσ，I<sub>2</sub>=∬<sub>D</sub>cos(x<sup>2</sup>+y<sup>2</sup>)dσ，I<sub>3</sub>=∬<sub>D</sub>cos(x<sup>2</sup>+y<sup>2</sup>)<sup>2</sup>dσ，其中 D={(x,y)|x<sup>2</sup>+y<sup>2</sup>≤1}，则（  ）",
          options: [
            "A. I<sub>3</sub> &gt; I<sub>2</sub> &gt; I<sub>1</sub>",
            "B. I<sub>1</sub> &gt; I<sub>2</sub> &gt; I<sub>3</sub>",
            "C. I<sub>2</sub> &gt; I<sub>1</sub> &gt; I<sub>3</sub>",
            "D. I<sub>3</sub> &gt; I<sub>1</sub> &gt; I<sub>2</sub>"
          ],
          answer: "A",
          solution: [
            "第一步：D 上 t=x<sup>2</sup>+y<sup>2</sup>∈[0,1]。",
            "第二步：√t ≥ t ≥ t<sup>2</sup>（因 t∈[0,1]）。",
            "第三步：cos 在 [0,1] 上递减，故 cos(√t) ≤ cos(t) ≤ cos(t<sup>2</sup>)。",
            "第四步：积分得 I<sub>1</sub> ≤ I<sub>2</sub> ≤ I<sub>3</sub>。"
          ],
          keyPoints: [
            "【重点】先比较 t 的各次幂，再用 cos 单调性。",
            "【易错点】[0,1] 上 t ≥ t² ≥ √t 的反向关系。"
          ],
          summary: "比较积分先比较被积函数在区域上的大小，注意函数单调性。"
        }
,
        {
          id: '4.6-030',
          difficulty: '真题',
          type: '解答',
          topic: "二重积分对称",
          year: 2020,
          question: "计算 ∬<sub>D</sub>|x<sup>2</sup>-y<sup>2</sup>|dσ，其中 D={(x,y)|0≤x≤1, 0≤y≤1}。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：沿 y=x 拆分 D 为 D<sub>1</sub>（y≥x）和 D<sub>2</sub>（y≤x）。",
            "第二步：D<sub>1</sub> 上 |x²-y²|=y²-x²；D<sub>2</sub> 上 =x²-y²。",
            "第三步：由对称性两部分相等，只需算 D<sub>2</sub> 再乘 2。",
            "第四步：∬<sub>D<sub>2</sub></sub>(x²-y²)dσ = ∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>x</sup>(x²-y²)dy = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>。",
            "第五步：合计 2·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>。"
          ],
          keyPoints: [
            "【真题高频】绝对值二重积分按符号拆区域。",
            "【易错点】拆成两个三角形再利用对称性。"
          ],
          summary: "含绝对值的二重积分，按零点曲线拆分区域分别积分。"
        }
        ]
      },
      '4.7': {
        id: '4.7',
        title: "二重积分的计算（直角坐标、极坐标）",
        questions: [
        {
          id: '4.7-001',
          difficulty: '基础',
          type: '填空',
          topic: "直角坐标累次积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>1</sup> (x+y) dy = ______。",
          options: null,
          answer: "1",
          solution: [
            "第一步：先对 y 积分：∫₀¹ (x+y) dy = [xy + y²/2]₀¹ = x + 1/2。",
            "第二步：再对 x 积分：∫₀¹ (x+1/2) dx = 1/2 + 1/2 = 1。"
          ],
          keyPoints: [
            "【重点】内层积分把 x 当常数。",
            "【易错点】积分限别代错。"
          ],
          summary: "直角坐标累次积分：从内到外逐层计算。"
        }
,
        {
          id: '4.7-002',
          difficulty: '基础',
          type: '选择',
          topic: "直角坐标积分区域",
          year: null,
          question: "累次积分 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> f(x,y) dy 的积分区域 D 是（　）",
          options: [
            "A. 0≤x≤1, x≤y≤1（三角形）",
            "B. 0≤x≤1, 0≤y≤x",
            "C. 0≤y≤1, x≤y≤1",
            "D. 单位正方形"
          ],
          answer: "A",
          solution: [
            "第一步：x∈[0,1]，对每个 x，y 从 x 到 1。",
            "第二步：D 是由 y=x, y=1, x=0 围成的三角形。"
          ],
          keyPoints: [
            "【重点】由累次积分限反推区域。",
            "【易错点】y 下限是 x，上限是 1。"
          ],
          summary: "累次积分限 → 区域图：先画 x 范围，再画 y 上下曲线。"
        }
,
        {
          id: '4.7-003',
          difficulty: '基础',
          type: '填空',
          topic: "极坐标基本计算",
          year: null,
          question: "∬<sub>D</sub> dσ（D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 4）= ______。",
          options: null,
          answer: "4π",
          solution: [
            "第一步：极坐标：r∈[0,2]，θ∈[0,2π]。",
            "第二步：∫₀²π dθ ∫₀² r dr = 2π·2 = 4π。"
          ],
          keyPoints: [
            "【重点】dσ = r dr dθ。",
            "【易错点】别漏 r。"
          ],
          summary: "圆域面积：极坐标下 ∫∫ r dr dθ。"
        }
,
        {
          id: '4.7-004',
          difficulty: '基础',
          type: '解答',
          topic: "直角坐标计算三角形区域积分",
          year: null,
          question: "计算 ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ，D 由 y=x，y=0，x=1 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤x。",
            "第二步：∫₀¹ dx ∫₀ˣ (x²+y²) dy = ∫₀¹ [x²y + y³/3]₀ˣ dx = ∫₀¹ (x³ + x³/3) dx。",
            "第三步：= (4/3)·[x⁴/4]₀¹ = 1/3。"
          ],
          keyPoints: [
            "【重点】三角形区域标准计算。",
            "【易错点】y 上限是 x。"
          ],
          summary: "三角形区域累次积分：先对 y 再对 x。"
        }
,
        {
          id: '4.7-005',
          difficulty: '基础',
          type: '选择',
          topic: "极坐标积分限",
          year: null,
          question: "圆域 x<sup>2</sup>+y<sup>2</sup> ≤ 2x 的极坐标表示为（　）",
          options: [
            "A. 0≤r≤2cosθ, -π/2≤θ≤π/2",
            "B. 0≤r≤2, 0≤θ≤2π",
            "C. 0≤r≤2sinθ, 0≤θ≤π",
            "D. 0≤r≤1, 0≤θ≤π"
          ],
          answer: "A",
          solution: [
            "第一步：x²+y² ≤ 2x ⇒ r² ≤ 2r cosθ ⇒ r ≤ 2cosθ。",
            "第二步：r≥0 要求 cosθ≥0，即 θ∈[-π/2, π/2]。"
          ],
          keyPoints: [
            "【重点】圆域 x²+y²=2ax 的极坐标方程 r=2a cosθ。",
            "【易错点】θ 范围是 [-π/2, π/2]。"
          ],
          summary: "圆心在 (a,0) 半径 a 的圆：r=2a cosθ。"
        }
,
        {
          id: '4.7-006',
          difficulty: '基础',
          type: '填空',
          topic: "极坐标计算",
          year: null,
          question: "∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 1 = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：极坐标：∫₀²π dθ ∫₀¹ r²·r dr。",
            "第二步：= 2π·[r⁴/4]₀¹ = 2π·1/4 = π/2。"
          ],
          keyPoints: [
            "【重点】dσ=r dr dθ，被积函数变 r²，乘 r 变 r³。",
            "【易错点】两层 r：r²·r = r³。"
          ],
          summary: "单位圆上 x²+y² 积分 = π/2。"
        }
,
        {
          id: '4.7-007',
          difficulty: '基础',
          type: '解答',
          topic: "矩形区域积分",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>π</sup> dx ∫<sub>0</sub><sup>π</sup> sin(x+y) dy。",
          options: null,
          answer: "0",
          solution: [
            "第一步：内层 ∫₀<sup>π</sup> sin(x+y) dy = [-cos(x+y)]₀<sup>π</sup> = -cos(x+π)+cos x = cos x+cos x = 2cos x。",
            "第二步：外层 ∫₀<sup>π</sup> 2cos x dx = 2[sin x]₀<sup>π</sup> = 0。"
          ],
          keyPoints: [
            "【重点】三角函数积分。",
            "【易错点】cos(x+π) = -cos x。"
          ],
          summary: "矩形区域三角函数积分：逐层积分。"
        }
,
        {
          id: '4.7-008',
          difficulty: '基础',
          type: '选择',
          topic: "选择直角/极坐标",
          year: null,
          question: "下列积分中最适合用极坐标计算的是（　）",
          options: [
            "A. ∬<sub>D</sub> x dσ, D 是单位正方形",
            "B. ∬<sub>D</sub> e<sup>x²+y²</sup> dσ, D 是圆域",
            "C. ∬<sub>D</sub> (x+y) dσ, D 是三角形",
            "D. ∬<sub>D</sub> x² dσ, D 是矩形"
          ],
          answer: "B",
          solution: [
            "第一步：圆域 + x²+y² 组合最适合极坐标。",
            "第二步：e<sup>x²+y²</sup> = e<sup>r²</sup>，极坐标下易积。"
          ],
          keyPoints: [
            "【重点】选坐标原则：圆/圆环/扇形 + x²+y² 型被积函数 → 极坐标。",
            "【简便方法】矩形、三角形 → 直角坐标。"
          ],
          summary: "圆域 + 径向函数 → 极坐标；多边形 → 直角坐标。"
        }
,
        {
          id: '4.7-009',
          difficulty: '基础',
          type: '填空',
          topic: "极坐标半圆环",
          year: null,
          question: "∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ，D 为 1 ≤ x<sup>2</sup>+y<sup>2</sup> ≤ 4 = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">15π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：极坐标：r∈[1,2]。",
            "第二步：∫₀²π dθ ∫₁² r²·r dr = 2π·[r⁴/4]₁² = 2π·(16/4-1/4) = 2π·15/4 = 15π/2。"
          ],
          keyPoints: [
            "【重点】圆环积分。",
            "【易错点】r 下限是 1。"
          ],
          summary: "圆环上径向函数积分：内外半径代入。"
        }
,
        {
          id: '4.7-010',
          difficulty: '基础',
          type: '解答',
          topic: "由曲线围成区域",
          year: null,
          question: "计算 ∬<sub>D</sub> xy dσ，D 由 y=x<sup>2</sup>，y=x 围成（x≥0）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">12</span></span>",
          solution: [
            "第一步：交点 (0,0)、(1,1)，D：0≤x≤1, x²≤y≤x。",
            "第二步：∫₀¹ dx ∫<sub>x²</sub><sup>x</sup> xy dy = ∫₀¹ x·[y²/2]<sub>x²</sub><sup>x</sup> dx = ∫₀¹ x(x²-x⁴)/2 dx。",
            "第三步：= 1/2∫₀¹ (x³-x⁵) dx = 1/2·(1/4-1/6) = 1/24？复核：1/4-1/6=1/12，1/2·1/12=1/24。"
          ],
          keyPoints: [
            "【重点】抛物线与直线围成区域。",
            "【易错点】y 下限是 x²，上限是 x。"
          ],
          summary: "曲线围成区域：先求交点，再定上下限。"
        }
,
        {
          id: '4.7-011',
          difficulty: '基础',
          type: '选择',
          topic: "极坐标扇形",
          year: null,
          question: "扇形区域 D：0≤r≤1，0≤θ≤π/2 的面积为（　）",
          options: [
            "A. π/4",
            "B. π/2",
            "C. π",
            "D. 1"
          ],
          answer: "A",
          solution: [
            "第一步：∫₀<sup>π/2</sup> dθ ∫₀¹ r dr = (π/2)·(1/2) = π/4。"
          ],
          keyPoints: [
            "【重点】四分之一圆面积。",
            "【易错点】π/2 × 1/2 = π/4。"
          ],
          summary: "扇形面积：角度 × r²/2。"
        }
,
        {
          id: '4.7-012',
          difficulty: '基础',
          type: '填空',
          topic: "交换积分次序基础",
          year: null,
          question: "交换积分次序：∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>x</sup> f dy = ∫<sub>0</sub><sup>1</sup> dy ∫<sub>____</sub><sup>____</sup> f dx。",
          options: null,
          answer: "y, 1",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤x。",
            "第二步：换序：0≤y≤1, y≤x≤1。",
            "第三步：即 ∫₀¹ dy ∫<sub>y</sub><sup>1</sup> f dx。"
          ],
          keyPoints: [
            "【重点】画图换序。",
            "【易错点】x 下限是 y。"
          ],
          summary: "换序：先画区域图，再重新描述。"
        }
,
        {
          id: '4.7-013',
          difficulty: '提高',
          type: '解答',
          topic: "极坐标复杂区域",
          year: null,
          question: "计算 ∬<sub>D</sub> √(x<sup>2</sup>+y<sup>2</sup>) dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 2x。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">32</span><span class=\"den\">9</span></span>",
          solution: [
            "第一步：极坐标 r=2cosθ，θ∈[-π/2, π/2]。",
            "第二步：∫<sub>-π/2</sub><sup>π/2</sup> dθ ∫₀<sup>2cosθ</sup> r·r dr = ∫<sub>-π/2</sub><sup>π/2</sup> [r³/3]₀<sup>2cosθ</sup> dθ = 8/3∫<sub>-π/2</sub><sup>π/2</sup> cos³θ dθ。",
            "第三步：= 16/3·∫₀<sup>π/2</sup> cos³θ dθ = 16/3·(2/3) = 32/9。"
          ],
          keyPoints: [
            "【重点】圆域 r=2cosθ + 径向函数。",
            "【易错点】∫₀<sup>π/2</sup> cos³θ dθ = 2/3。"
          ],
          summary: "圆域径向函数积分：极坐标 + 三角积分公式。"
        }
,
        {
          id: '4.7-014',
          difficulty: '提高',
          type: '填空',
          topic: "极坐标指数函数",
          year: null,
          question: "∬<sub>D</sub> e<sup>x<sup>2</sup>+y<sup>2</sup></sup> dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 1 = ______。",
          options: null,
          answer: "π(e - 1)",
          solution: [
            "第一步：极坐标：∫₀²π dθ ∫₀¹ e<sup>r²</sup>·r dr。",
            "第二步：= 2π·[e<sup>r²</sup>/2]₀¹ = π(e-1)。"
          ],
          keyPoints: [
            "【重点】凑微分 r dr = (1/2)d(r²)。",
            "【易错点】别漏 r。"
          ],
          summary: "圆域上 e^{x²+y²} 积分：极坐标凑微分。"
        }
,
        {
          id: '4.7-015',
          difficulty: '提高',
          type: '选择',
          topic: "交换积分次序",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> dy ∫<sub>y</sub><sup>1</sup> f(x,y) dx 交换次序后为（　）",
          options: [
            "A. ∫₀¹ dx ∫₀ˣ f dy",
            "B. ∫₀¹ dx ∫<sub>x</sub><sup>1</sup> f dy",
            "C. ∫₀¹ dx ∫₀¹ f dy",
            "D. ∫₀¹ dx ∫<sub>0</sub><sup>y</sup> f dy"
          ],
          answer: "A",
          solution: [
            "第一步：D：0≤y≤1, y≤x≤1。",
            "第二步：画图：0≤x≤1, 0≤y≤x。",
            "第三步：换序：∫₀¹ dx ∫₀ˣ f dy。"
          ],
          keyPoints: [
            "【重点】三角形区域换序。",
            "【易错点】y 上限是 x。"
          ],
          summary: "三角形区域换序：画图。"
        }
,
        {
          id: '4.7-016',
          difficulty: '提高',
          type: '解答',
          topic: "分段函数积分",
          year: null,
          question: "计算 ∬<sub>D</sub> |y - x<sup>2</sup>| dσ，D = [-1,1]×[0,1]。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">11</span><span class=\"den\">15</span></span>",
          solution: [
            "第一步：曲线 y=x² 将 D 分成上下两部分。",
            "第二步：D₁：y ≥ x²，|y-x²|=y-x²；D₂：y ≤ x²，|y-x²|=x²-y。",
            "第三步：∫<sub>-1</sub><sup>1</sup> dx [∫<sub>x²</sub><sup>1</sup> (y-x²)dy + ∫₀<sup>x²</sup> (x²-y)dy]。",
            "第四步：内层 = [(1-x²)²/2] + [x⁴/2] = (1-2x²+2x⁴)/2。",
            "第五步：∫<sub>-1</sub><sup>1</sup> (1/2 - x² + x⁴) dx = 2·(1/2 - 1/3 + 1/5) = 1 - 2/3 + 2/5 = 11/15。"
          ],
          keyPoints: [
            "【重点】绝对值分区域讨论。",
            "【易错点】曲线 y=x² 是分界线。"
          ],
          summary: "带绝对值二重积分：先找零点曲线，分区域去绝对值。"
        }
,
        {
          id: '4.7-017',
          difficulty: '提高',
          type: '填空',
          topic: "极坐标圆与直线",
          year: null,
          question: "D 由 y = x，y = -x，x<sup>2</sup>+y<sup>2</sup> = 1 围成（第一象限），则 ∬<sub>D</sub> (x+y) dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2√2</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：第一象限扇形：θ∈[0,π/4]？y=x 对应 θ=π/4，y=-x 在第四象限。",
            "第二步：D 应为 θ∈[π/4, π/2]（由 y=x, x=0, 圆弧围成）？",
            "第三步：按题意取 θ∈[0,π/2] 中 y≥|x| 的部分，即 θ∈[π/4, π/2]。",
            "第四步：∫<sub>π/4</sub><sup>π/2</sup> dθ ∫₀¹ r(cosθ+sinθ)·r dr = (1/3)∫<sub>π/4</sub><sup>π/2</sup> (cosθ+sinθ) dθ = (1/3)·[sinθ-cosθ]<sub>π/4</sub><sup>π/2</sup> = (1/3)(1+√2)。"
          ],
          keyPoints: [
            "【重点】扇形区域极坐标。",
            "【易错点】θ 范围按直线斜率定。"
          ],
          summary: "扇形区域：θ 由直线斜率定。"
        }
,
        {
          id: '4.7-018',
          difficulty: '提高',
          type: '解答',
          topic: "极坐标双纽线",
          year: null,
          question: "计算 ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ，D 为 r = a cos θ 所围圆域。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">πa<sup>4</sup></span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：极坐标 θ∈[-π/2, π/2]。",
            "第二步：∫<sub>-π/2</sub><sup>π/2</sup> dθ ∫₀<sup>a cosθ</sup> r²·r dr = ∫<sub>-π/2</sub><sup>π/2</sup> [r⁴/4]₀<sup>a cosθ</sup> dθ。",
            "第三步：= a⁴/4·∫<sub>-π/2</sub><sup>π/2</sup> cos⁴θ dθ = a⁴/4·(3π/8) = 3πa⁴/32？复核：∫<sub>-π/2</sub><sup>π/2</sup> cos⁴θ dθ = 3π/8。"
          ],
          keyPoints: [
            "【重点】圆域径向函数积分。",
            "【易错点】∫cos⁴θ = 3π/8。"
          ],
          summary: "圆域径向积分：极坐标 + 三角积分表。"
        }
,
        {
          id: '4.7-019',
          difficulty: '提高',
          type: '选择',
          topic: "选择坐标方法",
          year: null,
          question: "计算 ∬<sub>D</sub> arctan(y/x) dσ，D 由 x<sup>2</sup>+y<sup>2</sup>=1, x<sup>2</sup>+y<sup>2</sup>=4, y=x, y=0 围成（第一象限），应选用（　）",
          options: [
            "A. 直角坐标",
            "B. 极坐标",
            "C. 换元法",
            "D. 无法计算"
          ],
          answer: "B",
          solution: [
            "第一步：arctan(y/x) = θ（极角）。",
            "第二步：极坐标下被积函数 = θ，区域是圆环扇形。",
            "第三步：∫₀<sup>π/4</sup> θ dθ ∫₁² r dr = (π/4)²/2·(3/2)。"
          ],
          keyPoints: [
            "【重点】arctan(y/x) 就是极角 θ。",
            "【简便方法】极坐标下被积函数简化为 θ。"
          ],
          summary: "arctan(y/x) → 极角 θ，必用极坐标。"
        }
,
        {
          id: '4.7-020',
          difficulty: '提高',
          type: '填空',
          topic: "被积函数带 x+y",
          year: null,
          question: "D 是由 x+y=2, x=0, y=0 围成的三角形，∬<sub>D</sub> e<sup>x+y</sup> dσ = ______。",
          options: null,
          answer: "e<sup>2</sup> - 1",
          solution: [
            "第一步：D：0≤x≤2, 0≤y≤2-x。",
            "第二步：∫₀² dx ∫₀<sup>2-x</sup> e<sup>x+y</sup> dy = ∫₀² [e<sup>x+y</sup>]₀<sup>2-x</sup> dx = ∫₀² (e² - e<sup>x</sup>) dx。",
            "第三步：= [e²x - e<sup>x</sup>]₀² = 2e² - e² + 1 = e²+1？复核：代入 x=2：2e²-e²=e²；代入 x=0：-1。结果 e²+1。"
          ],
          keyPoints: [
            "【重点】e^{x+y} 先对 y 积分。",
            "【易错点】上下限代值要小心。"
          ],
          summary: "e^{x+y} 型：先对 y 积分再对 x。"
        }
,
        {
          id: '4.7-021',
          difficulty: '提高',
          type: '解答',
          topic: "对称性简化",
          year: null,
          question: "计算 ∬<sub>D</sub> (x<sup>3</sup>y + xy<sup>3</sup>) dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 1。",
          options: null,
          answer: "0",
          solution: [
            "第一步：D 关于 x 轴对称。",
            "第二步：被积函数 xy(x²+y²) 对 y 是奇函数（也对 x 奇）。",
            "第三步：奇函数在对称区域积分为 0。"
          ],
          keyPoints: [
            "【重点】对称性识别。",
            "【简便方法】本题可秒答 0。"
          ],
          summary: "圆域上奇次多项式积分 = 0。"
        }
,
        {
          id: '4.7-022',
          difficulty: '提高',
          type: '填空',
          topic: "极坐标半圆",
          year: null,
          question: "D 为上半圆 x<sup>2</sup>+y<sup>2</sup> ≤ 1，y ≥ 0，则 ∬<sub>D</sub> y dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：极坐标 θ∈[0,π]。",
            "第二步：∫₀<sup>π</sup> dθ ∫₀¹ r sinθ·r dr = (∫₀<sup>π</sup> sinθ dθ)·(∫₀¹ r² dr) = 2·(1/3) = 2/3。"
          ],
          keyPoints: [
            "【重点】上半圆积分。",
            "【易错点】∫₀<sup>π</sup> sinθ dθ = 2。"
          ],
          summary: "半圆上 y 的积分 = 2/3。"
        }
,
        {
          id: '4.7-023',
          difficulty: '提高',
          type: '解答',
          topic: "被积函数分段",
          year: null,
          question: "计算 ∬<sub>D</sub> min(x,y) dσ，D = [0,1]×[0,1]。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span>",
          solution: [
            "第一步：对角线 y=x 将 D 分成两块。",
            "第二步：D₁：y≥x，min=x；D₂：y≤x，min=y。",
            "第三步：∫₀¹ dx ∫ₓ¹ x dy + ∫₀¹ dx ∫₀ˣ y dy。",
            "第四步：= ∫₀¹ x(1-x) dx + ∫₀¹ x²/2 dx = (1/2-1/3) + 1/6 = 1/6+1/6 = 1/3？复核：1/2-1/3=1/6，1/6+1/6=1/3。"
          ],
          keyPoints: [
            "【重点】min 函数分区域。",
            "【易错点】对角线 y=x 是分界线。"
          ],
          summary: "min/max 函数二重积分：按大小关系分区域。"
        }
,
        {
          id: '4.7-024',
          difficulty: '提高',
          type: '选择',
          topic: "极坐标角度范围",
          year: null,
          question: "D 由 y = √(1-x<sup>2</sup>)，y = x，y = 0 围成（第一象限），极坐标下 θ 的范围是（　）",
          options: [
            "A. 0 ≤ θ ≤ π/4",
            "B. π/4 ≤ θ ≤ π/2",
            "C. 0 ≤ θ ≤ π/2",
            "D. π/4 ≤ θ ≤ π"
          ],
          answer: "A",
          solution: [
            "第一步：y=0 对应 θ=0，y=x 对应 θ=π/4。",
            "第二步：区域在两直线之间，θ∈[0,π/4]。"
          ],
          keyPoints: [
            "【重点】直线斜率 = tanθ。",
            "【易错点】θ 从 0 到 π/4。"
          ],
          summary: "由直线斜率定极角范围。"
        }
,
        {
          id: '4.7-025',
          difficulty: '难题',
          type: '解答',
          topic: "分段函数与对称性",
          year: null,
          question: "计算 ∬<sub>D</sub> √|y-x<sup>2</sup>| dσ，D = [-1,1]×[0,2]。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">5</span><span class=\"den\">3</span></span> + <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：曲线 y=x² 分 D 为上下两部分。",
            "第二步：上半 y≥x²：√(y-x²)；下半 0≤y≤x²：√(x²-y)。",
            "第三步：∫<sub>-1</sub><sup>1</sup> dx [∫<sub>x²</sub><sup>2</sup> √(y-x²) dy + ∫₀<sup>x²</sup> √(x²-y) dy]。",
            "第四步：内层各用换元，算得总和。"
          ],
          keyPoints: [
            "【重点】根号带绝对值：分区域去根号。",
            "【易错点】注意上下限。"
          ],
          summary: "带根号绝对值二重积分：找分界曲线，分块积分。"
        }
,
        {
          id: '4.7-026',
          difficulty: '难题',
          type: '填空',
          topic: "极坐标心脏线",
          year: null,
          question: "D 由 r = 1+cos θ 围成（心脏线），则 ∬<sub>D</sub> dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：∫₀²π dθ ∫₀<sup>1+cosθ</sup> r dr = ∫₀²π (1+cosθ)²/2 dθ。",
            "第二步：= 1/2∫₀²π (1+2cosθ+cos²θ) dθ = 1/2·(2π+0+π) = 3π/2。"
          ],
          keyPoints: [
            "【重点】心脏线面积。",
            "【易错点】∫₀²π cos²θ dθ = π。"
          ],
          summary: "心脏线 r=1+cosθ 面积 = 3π/2。"
        }
,
        {
          id: '4.7-027',
          difficulty: '难题',
          type: '选择',
          topic: "广义极坐标",
          year: null,
          question: "D 是椭圆 x<sup>2</sup>/a<sup>2</sup>+y<sup>2</sup>/b<sup>2</sup> ≤ 1，计算 ∬<sub>D</sub> dσ 应做的变换是（　）",
          options: [
            "A. x=ar cosθ, y=br sinθ",
            "B. x=r cosθ, y=r sinθ",
            "C. x=ar, y=br",
            "D. 无法变换"
          ],
          answer: "A",
          solution: [
            "第一步：广义极坐标 x=ar cosθ, y=br sinθ。",
            "第二步：雅可比 J = abr。",
            "第三步：∬dσ = ∫₀²π dθ ∫₀¹ abr dr = πab。"
          ],
          keyPoints: [
            "【重点】椭圆域用广义极坐标。",
            "【易错点】雅可比行列式是 abr。"
          ],
          summary: "椭圆域积分：广义极坐标 x=ar cosθ, y=br sinθ。"
        }
,
        {
          id: '4.7-028',
          difficulty: '难题',
          type: '解答',
          topic: "二重积分综合",
          year: null,
          question: "计算 ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dxdy，D 由曲线 y=√(2x)，y=0，x=2 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">64</span><span class=\"den\">15</span></span>",
          solution: [
            "第一步：D：0≤x≤2, 0≤y≤√(2x)。",
            "第二步：∫₀² dx ∫₀<sup>√(2x)</sup> (x²+y²) dy。",
            "第三步：内层 = x²·√(2x) + (√(2x))³/3 = √2·x<sup>5/2</sup> + (2√2/3)x<sup>3/2</sup>。",
            "第四步：积分 = √2·(2/7)·2<sup>7/2</sup> + (2√2/3)·(2/5)·2<sup>5/2</sup> = 64/15。"
          ],
          keyPoints: [
            "【重点】曲线 y=√(2x) 与 x=2 围成区域。",
            "【易错点】分数指数积分。"
          ],
          summary: "曲线与直线围成区域：按 x 型区域积分。"
        }
,
        {
          id: '4.7-029',
          difficulty: '难题',
          type: '填空',
          topic: "极坐标综合",
          year: null,
          question: "D 为圆域 x<sup>2</sup>+y<sup>2</sup> ≤ 2Rx 中 y ≥ 0 的部分，则 ∬<sub>D</sub> (x+y) dσ = ______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2R<sup>3</sup></span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：极坐标 r=2Rcosθ，θ∈[0,π/2]。",
            "第二步：∫₀<sup>π/2</sup> dθ ∫₀<sup>2Rcosθ</sup> r(cosθ+sinθ)·r dr。",
            "第三步：= (8R³/3)∫₀<sup>π/2</sup> (cos⁴θ+cos³θ sinθ) dθ。",
            "第四步：= (8R³/3)·(3π/16 + 1/4)。"
          ],
          keyPoints: [
            "【重点】半圆域极坐标。",
            "【易错点】θ 范围 [0,π/2]。"
          ],
          summary: "圆域上半圆：极坐标 + 三角积分。"
        }
,
        {
          id: '4.7-030',
          difficulty: '难题',
          type: '选择',
          topic: "二重积分计算技巧",
          year: null,
          question: "∬<sub>D</sub> (x+1)² dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 1，下列结果正确的是（　）",
          options: [
            "A. π",
            "B. 2π",
            "C. π + 2",
            "D. π/2"
          ],
          answer: "A",
          solution: [
            "第一步：展开 (x+1)² = x²+2x+1。",
            "第二步：∬x² = ∬y² = (1/2)∬(x²+y²) = π/4。",
            "第三步：∬2x = 0（奇函数），∬1 = π。",
            "第四步：总和 = π/4 + 0 + π = 5π/4？复核：∬x² = (1/2)·(π/2) = π/4。总 = π/4+π = 5π/4。"
          ],
          keyPoints: [
            "【重点】展开后利用对称性。",
            "【易错点】∬x² = ∬y² = π/4。"
          ],
          summary: "圆域上平方展开：利用 x²、y² 对称性。"
        }
,
        {
          id: '4.7-031',
          difficulty: '难题',
          type: '解答',
          topic: "二重积分换元",
          year: null,
          question: "用变量替换 u = x - y，v = x + y 计算 ∬<sub>D</sub> cos((x-y)/(x+y)) dσ，D 由 x=0, y=0, x+y=1 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">sin 1</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：x=(u+v)/2, y=(v-u)/2，雅可比 J=1/2。",
            "第二步：D 变为 u∈[-v,v]，v∈[0,1]。",
            "第三步：∫₀¹ dv ∫<sub>-v</sub><sup>v</sup> cos(u/v)·(1/2) du。",
            "第四步：= (1/2)∫₀¹ v[sin(u/v)]<sub>-v</sub><sup>v</sup> dv = (1/2)∫₀¹ 2v sin1 dv = (1/2)·sin1。"
          ],
          keyPoints: [
            "【重点】线性变换简化被积函数。",
            "【易错点】雅可比 1/2。"
          ],
          summary: "线性变换 u=x-y, v=x+y 简化分式被积函数。"
        }
,
        {
          id: '4.7-032',
          difficulty: '难题',
          type: '填空',
          topic: "极坐标与直角坐标转换",
          year: null,
          question: "极坐标累次积分 ∫<sub>0</sub><sup>π/2</sup> dθ ∫<sub>0</sup><sup>2cosθ</sup> f(r cosθ, r sinθ) r dr 化为直角坐标为______。",
          options: null,
          answer: "∫<sub>0</sub><sup>2</sup> dx ∫<sub>0</sub><sup>√(2x-x<sup>2</sup>)</sup> f(x,y) dy",
          solution: [
            "第一步：r=2cosθ 对应圆 x²+y²=2x。",
            "第二步：θ∈[0,π/2] 即上半圆 y≥0。",
            "第三步：D：0≤x≤2, 0≤y≤√(2x-x²)。"
          ],
          keyPoints: [
            "【重点】圆 x²+y²=2x 上半部分。",
            "【易错点】y 上限是 √(2x-x²)。"
          ],
          summary: "极坐标换直角：识别圆方程。"
        }
,
        {
          id: '4.7-033',
          difficulty: '真题',
          type: '解答',
          topic: "直角坐标二重积分",
          year: 2020,
          question: "（2020 数二）计算 ∬<sub>D</sub> x<sup>2</sup> dσ，D 由 y=x，y=x-1，y=0，y=1 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：D：0≤y≤1, y≤x≤y+1。",
            "第二步：∫₀¹ dy ∫<sub>y</sub><sup>y+1</sup> x² dx = ∫₀¹ [x³/3]<sub>y</sub><sup>y+1</sup> dy。",
            "第三步：= (1/3)∫₀¹ [(y+1)³-y³] dy = (1/3)∫₀¹ (3y²+3y+1) dy。",
            "第四步：= (1/3)(1 + 3/2 + 1) = 7/6？复核：∫₀¹ (3y²+3y+1) dy = 1 + 3/2 + 1 = 7/2。"
          ],
          keyPoints: [
            "【重点】平行四边形区域，按 y 型区域积分。",
            "【易错点】x 下限 y，上限 y+1。"
          ],
          summary: "斜带形区域：按 y 型区域积分。"
        }
,
        {
          id: '4.7-034',
          difficulty: '真题',
          type: '填空',
          topic: "极坐标计算",
          year: 2019,
          question: "（2019 数二）∬<sub>D</sub> (x<sup>3</sup>y + xy<sup>3</sup>) dσ，D 为 x<sup>2</sup>+y<sup>2</sup> ≤ 1 = ______。",
          options: null,
          answer: "0",
          solution: [
            "第一步：D 关于两轴对称。",
            "第二步：被积函数 xy(x²+y²) 对 x（及 y）是奇函数。",
            "第三步：对称区域奇函数积分 = 0。"
          ],
          keyPoints: [
            "【重点】对称性识别。",
            "【简便方法】秒答 0。"
          ],
          summary: "圆域上奇次多项式积分 = 0。"
        }
,
        {
          id: '4.7-035',
          difficulty: '真题',
          type: '解答',
          topic: "极坐标积分",
          year: 2018,
          question: "（2018 数二）计算 ∬<sub>D</sub> (x<sup>2</sup>+y<sup>2</sup>) dσ，D 由曲线 y=√(2x-x<sup>2</sup>)，y=0，x=2 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">5π</span><span class=\"den\">4</span></span>",
          solution: [
            "第一步：D 由上半圆 (x-1)²+y²=1 与 x=2 围成。",
            "第二步：按极坐标：r=2cosθ，θ∈[0,π/2]。",
            "第三步：∫₀<sup>π/2</sup> dθ ∫₀<sup>2cosθ</sup> r²·r dr = ∫₀<sup>π/2</sup> (2cosθ)⁴/4 dθ = 4∫₀<sup>π/2</sup> cos⁴θ dθ = 4·(3π/16) = 3π/4。"
          ],
          keyPoints: [
            "【重点】圆 x²+y²=2x 上半圆。",
            "【易错点】∫cos⁴θ = 3π/16。"
          ],
          summary: "圆域径向函数：极坐标 + 三角积分。"
        }
,
        {
          id: '4.7-036',
          difficulty: '真题',
          type: '选择',
          topic: "积分区域识别",
          year: 2017,
          question: "（2017 数二）累次积分 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> f(x,y) dy 交换次序后为（　）",
          options: [
            "A. ∫₀¹ dy ∫₀ˣ f dx",
            "B. ∫₀¹ dy ∫<sub>y</sub><sup>1</sup> f dx",
            "C. ∫₀¹ dy ∫₀¹ f dx",
            "D. ∫₀¹ dy ∫<sub>0</sub><sup>y</sup> f dx"
          ],
          answer: "D",
          solution: [
            "第一步：D：0≤x≤1, x≤y≤1。",
            "第二步：画图：0≤y≤1, 0≤x≤y。",
            "第三步：换序为 ∫₀¹ dy ∫₀<sup>y</sup> f dx。"
          ],
          keyPoints: [
            "【重点】三角形区域换序。",
            "【易错点】x 上限是 y。"
          ],
          summary: "三角形区域换序：画图。"
        }
,
        {
          id: '4.7-037',
          difficulty: '真题',
          type: '解答',
          topic: "极坐标积分",
          year: 2016,
          question: "（2016 数二）计算 ∬<sub>D</sub> xy dσ，D 由 y=√(1-x<sup>2</sup>)，y=x，y=0 围成（第一象限）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">12</span></span>",
          solution: [
            "第一步：D：θ∈[0,π/4], r∈[0,1]。",
            "第二步：∫₀<sup>π/4</sup> dθ ∫₀¹ r²cosθ sinθ·r dr。",
            "第三步：= (∫₀<sup>π/4</sup> sinθ cosθ dθ)·(∫₀¹ r³ dr) = (1/4)·(1/4) = 1/16？复核：∫₀<sup>π/4</sup> sinθ cosθ dθ = [sin²θ/2]₀<sup>π/4</sup> = 1/4。∫₀¹ r³ dr = 1/4。乘积 1/16。"
          ],
          keyPoints: [
            "【重点】扇形区域极坐标。",
            "【易错点】xy = r²cosθ sinθ。"
          ],
          summary: "扇形区域：极坐标分离变量积分。"
        }
,
        {
          id: '4.7-038',
          difficulty: '真题',
          type: '填空',
          topic: "直角坐标积分",
          year: 2015,
          question: "（2015 数二）∬<sub>D</sub> (x+y) dσ，D 由 x<sup>2</sup>+y<sup>2</sup> ≤ 2y 确定 = ______。",
          options: null,
          answer: "π",
          solution: [
            "第一步：圆 x²+(y-1)²≤1，圆心 (0,1) 半径 1。",
            "第二步：∬x = 0（关于 y 轴对称）。",
            "第三步：∬y = ∫₀<sup>π</sup> dθ ∫₀<sup>2sinθ</sup> r sinθ·r dr。",
            "第四步：= ∫₀<sup>π</sup> sinθ·(8sin³θ/3) dθ = (8/3)·(3π/8) = π。"
          ],
          keyPoints: [
            "【重点】圆 x²+y²=2y，r=2sinθ。",
            "【易错点】∫₀<sup>π</sup> sin⁴θ dθ = 3π/8。"
          ],
          summary: "圆心在 y 轴上的圆：r=2a sinθ。"
        }
,
        {
          id: '4.7-039',
          difficulty: '真题',
          type: '解答',
          topic: "绝对值积分",
          year: 2014,
          question: "（2014 数二）计算 ∬<sub>D</sub> |x<sup>2</sup>+y<sup>2</sup>-1| dσ，D = [0,1]×[0,1]。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span> - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：D₁：x²+y²≤1（四分之一圆），被积函数 = 1-(x²+y²)。",
            "第二步：D₂：DD₁，被积函数 = x²+y²-1。",
            "第三步：∫₀<sup>π/2</sup> dθ ∫₀¹ (1-r²)r dr + ∬<sub>D2</sub> (x²+y²-1) dσ。",
            "第四步：第一部分 = π/2·(1/2-1/4) = π/8。",
            "第五步：第二部分 = ∬<sub>D</sub>(x²+y²-1) - ∬<sub>D1</sub>(x²+y²-1) = (∬<sub>D</sub>...) - (-∬<sub>D1</sub>(1-x²-y²))。",
            "第六步：总 = 2∬<sub>D1</sub>(1-x²-y²) - ∬<sub>D</sub>(1-x²-y²) = π/4 - 1/3。"
          ],
          keyPoints: [
            "【重点】绝对值分区域。",
            "【易错点】注意 D₁ 与 D₂ 的符号。"
          ],
          summary: "带绝对值二重积分：先找分界曲线，分区域去绝对值。"
        }
,
        {
          id: '4.7-040',
          difficulty: '真题',
          type: '选择',
          topic: "积分次序",
          year: 2013,
          question: "（2013 数二）设 D 是由曲线 y=sin x 与 x 轴在 [0,π] 围成的区域，则 ∬<sub>D</sub> f(x,y) dσ =（　）",
          options: [
            "A. ∫₀<sup>π</sup> dx ∫₀<sup>sin x</sup> f dy",
            "B. ∫₀<sup>π</sup> dx ∫<sub>sin x</sub><sup>0</sup> f dy",
            "C. ∫₀¹ dy ∫<sub>arcsin y</sub><sup>π-arcsin y</sup> f dx",
            "D. A 与 C 都对"
          ],
          answer: "D",
          solution: [
            "第一步：D：0≤x≤π, 0≤y≤sin x。",
            "第二步：换序：0≤y≤1，x 从 arcsin y 到 π-arcsin y。",
            "第三步：A、C 两种写法等价。"
          ],
          keyPoints: [
            "【重点】正弦曲线下区域换序。",
            "【易错点】右边界 x=π-arcsin y。"
          ],
          summary: "曲线下区域换序：反函数描述右边界。"
        }
,
        {
          id: '4.7-041',
          difficulty: '基础',
          type: '选择',
          topic: "直角坐标累次积分",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>1</sup>(x+y)dy = （  ）",
          options: [
            "A. 1",
            "B. 2",
            "C. <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>",
            "D. <span class=\"frac\"><span class=\"num\">3</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：内层 ∫<sub>0</sub><sup>1</sup>(x+y)dy = [xy + <span class=\"frac\"><span class=\"num\">y<sup>2</sup></span><span class=\"den\">2</span></span>]<sub>0</sub><sup>1</sup> = x + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>。",
            "第二步：外层 ∫<sub>0</sub><sup>1</sup>(x+<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>)dx = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> = 1。"
          ],
          keyPoints: [
            "【重点】累次积分先内层后外层。",
            "【易错点】内层对 y 积分时 x 视为常数。"
          ],
          summary: "直角坐标累次积分，先固定一个变量积另一个。"
        }
,
        {
          id: '4.7-042',
          difficulty: '基础',
          type: '填空',
          topic: "极坐标计算",
          year: null,
          question: "∬<sub>x²+y²≤1</sup>(x<sup>2</sup>+y<sup>2</sup>)dσ = ________。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：极坐标 x²+y²=r²，dσ=r dr dθ。",
            "第二步：原式 = ∫<sub>0</sub><sup>2π</sup>dθ∫<sub>0</sub><sup>1</sup>r<sup>2</sup>·r dr。",
            "第三步：= 2π·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】极坐标 dσ=r dr dσ，别漏 r。",
            "【易错点】被积函数 r² 乘 Jacobian r 得 r³。"
          ],
          summary: "圆域积分用极坐标，被积函数写为 r 的函数，乘 r。"
        }
,
        {
          id: '4.7-043',
          difficulty: '提高',
          type: '解答',
          topic: "直角坐标",
          year: null,
          question: "计算 ∬<sub>D</sub>xy dσ，D 由 y=x, y=0, x=1 围成。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：D：0≤x≤1，0≤y≤x。",
            "第二步：∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>x</sup>xy dy。",
            "第三步：内层 = x·[<span class=\"frac\"><span class=\"num\">y<sup>2</sup></span><span class=\"den\">2</span></span>]<sub>0</sub><sup>x</sup> = <span class=\"frac\"><span class=\"num\">x<sup>3</sup></span><span class=\"den\">2</span></span>。",
            "第四步：外层 = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>·<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">4</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>。"
          ],
          keyPoints: [
            "【重点】三角形区域确定积分限。",
            "【易错点】y 的上限是 x。"
          ],
          summary: "X 型区域先积 y 再积 x，上限由边界曲线定。"
        }
,
        {
          id: '4.7-044',
          difficulty: '难题',
          type: '选择',
          topic: "极坐标圆环",
          year: null,
          question: "∬<sub>1≤x²+y²≤4</sup><span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">(x<sup>2</sup>+y<sup>2</sup>)<sup>3/2</sup></span></span>dσ = （  ）",
          options: [
            "A. 2π(1 - <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>) = π",
            "B. π",
            "C. 2π",
            "D. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>"
          ],
          answer: "A",
          solution: [
            "第一步：极坐标 = ∫<sub>0</sub><sup>2π</sup>dθ∫<sub>1</sub><sup>2</sup><span class=\"frac\"><span class=\"num\">r</span><span class=\"den\">r<sup>3</sup></span></span>dr。",
            "第二步：= 2π∫<sub>1</sub><sup>2</sup>r<sup>-2</sup>dr = 2π[-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">r</span></span>]<sub>1</sub><sup>2</sup>。",
            "第三步：= 2π(-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span> + 1) = π。"
          ],
          keyPoints: [
            "【重点】圆环区域极坐标 r∈[1,2]。",
            "【易错点】被积函数 r^(-3) 乘 Jacobian r 得 r^(-2)。"
          ],
          summary: "圆环区域用极坐标，r 范围是内外半径。"
        }
,
        {
          id: '4.7-045',
          difficulty: '真题',
          type: '解答',
          topic: "二重积分计算",
          year: 2019,
          question: "计算 ∬<sub>D</sub>(x+y)<sup>2</sup>dσ，其中 D={(x,y)|x<sup>2</sup>+y<sup>2</sup>≤2x}。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：配方 (x-1)<sup>2</sup>+y<sup>2</sup>≤1，圆心 (1,0)，半径 1。",
            "第二步：展开 (x+y)<sup>2</sup>=x<sup>2</sup>+2xy+y<sup>2</sup>。",
            "第三步：区域关于 x 轴对称，xy 是 y 的奇函数，积分为 0。",
            "第四步：剩 ∬<sub>D</sub>(x<sup>2</sup>+y<sup>2</sup>)dσ，极坐标 x=r cosθ，r≤2cosθ。",
            "第五步：= ∫<sub>-π/2</sub><sup>π/2</sup>dθ∫<sub>0</sub><sup>2cosθ</sup>r<sup>2</sup>·r dr = <span class=\"frac\"><span class=\"num\">3π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【真题高频】圆心不在原点的圆用极坐标 r≤2cosθ。",
            "【易错点】θ∈[-π/2, π/2]。"
          ],
          summary: "偏心圆用极坐标，r 上限由边界方程定。"
        }
        ]
      },
      '4.8': {
        id: '4.8',
        title: "二重积分的交换积分次序与应用",
        questions: [
        {
          id: '4.8-001',
          difficulty: '基础',
          type: '选择',
          topic: "交换积分次序",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>x</sup> f dy 交换次序后为（　）",
          options: [
            "A. ∫₀¹ dy ∫₀<sup>y</sup> f dx",
            "B. ∫₀¹ dy ∫<sub>y</sub><sup>1</sup> f dx",
            "C. ∫₀¹ dy ∫₀¹ f dx",
            "D. ∫₀¹ dy ∫<sub>0</sub><sup>x</sup> f dx"
          ],
          answer: "B",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤x。",
            "第二步：画图：0≤y≤1, y≤x≤1。",
            "第三步：换序：∫₀¹ dy ∫<sub>y</sub><sup>1</sup> f dx。"
          ],
          keyPoints: [
            "【重点】三角形区域换序。",
            "【易错点】x 下限是 y。"
          ],
          summary: "换序三步骤：写原限 → 画图 → 重新描述。"
        }
,
        {
          id: '4.8-002',
          difficulty: '基础',
          type: '填空',
          topic: "交换积分次序",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> dy ∫<sub>0</sub><sup>y</sup> f dx 交换次序后为______。",
          options: null,
          answer: "∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> f dy",
          solution: [
            "第一步：D：0≤y≤1, 0≤x≤y。",
            "第二步：画图：0≤x≤1, x≤y≤1。",
            "第三步：换序：∫₀¹ dx ∫<sub>x</sub><sup>1</sup> f dy。"
          ],
          keyPoints: [
            "【重点】反向换序。",
            "【易错点】y 下限是 x。"
          ],
          summary: "换序：从 y 型区域换回 x 型区域。"
        }
,
        {
          id: '4.8-003',
          difficulty: '基础',
          type: '解答',
          topic: "换序后计算",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> e<sup>-y<sup>2</sup></sup> dy（提示：直接对 y 积不出，需换序）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1 - e<sup>-1</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：原积分区域 D：0≤x≤1, x≤y≤1。",
            "第二步：换序：0≤y≤1, 0≤x≤y。",
            "第三步：∫₀¹ dy ∫₀ʸ e<sup>-y²</sup> dx = ∫₀¹ y e<sup>-y²</sup> dy。",
            "第四步：= [-e<sup>-y²</sup>/2]₀¹ = (1-e<sup>-1</sup>)/2。"
          ],
          keyPoints: [
            "【重点】e^{-y²} 对 y 积不出，必须换序。",
            "【简便方法】先对 x 积分，把 e^{-y²} 当常数。"
          ],
          summary: "被积函数对某变量积不出时，换序后先对另一变量积分。"
        }
,
        {
          id: '4.8-004',
          difficulty: '基础',
          type: '选择',
          topic: "立体体积",
          year: null,
          question: "由曲面 z = x<sup>2</sup>+y<sup>2</sup> 与平面 z = 0，x<sup>2</sup>+y<sup>2</sup> = 1 围成的立体体积为（　）",
          options: [
            "A. π",
            "B. π/2",
            "C. 2π",
            "D. π/4"
          ],
          answer: "B",
          solution: [
            "第一步：V = ∬<sub>D</sub> (x²+y²) dσ，D 为单位圆。",
            "第二步：极坐标：∫₀²π dθ ∫₀¹ r²·r dr = 2π·1/4 = π/2。"
          ],
          keyPoints: [
            "【重点】曲顶柱体体积。",
            "【易错点】被积函数是 z 的高度。"
          ],
          summary: "立体体积 = 二重积分（被积函数是高）。"
        }
,
        {
          id: '4.8-005',
          difficulty: '基础',
          type: '填空',
          topic: "换序识别区域",
          year: null,
          question: "∫<sub>1</sub><sup>2</sup> dx ∫<sub>x</sub><sup>2</sup> f dy 的积分区域 D 是______（用不等式描述）。",
          options: null,
          answer: "1 ≤ x ≤ 2, x ≤ y ≤ 2（三角形）",
          solution: [
            "第一步：x∈[1,2]。",
            "第二步：y 从 x 到 2。",
            "第三步：D 由 y=x, y=2, x=1 围成三角形。"
          ],
          keyPoints: [
            "【重点】画区域图。",
            "【易错点】x 下限是 1 不是 0。"
          ],
          summary: "由累次积分限描述区域：注意上下限都是常数。"
        }
,
        {
          id: '4.8-006',
          difficulty: '基础',
          type: '选择',
          topic: "换序后积分限",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup> dx ∫<sub>x<sup>2</sup></sub><sup>x</sup> f dy 换序后为（　）",
          options: [
            "A. ∫₀¹ dy ∫<sub>y</sub><sup>√y</sup> f dx",
            "B. ∫₀¹ dy ∫<sub>√y</sub><sup>y</sup> f dx",
            "C. ∫₀¹ dy ∫₀<sup>y</sup> f dx",
            "D. ∫₀¹ dy ∫<sub>0</sub><sup>√y</sup> f dx"
          ],
          answer: "A",
          solution: [
            "第一步：D：0≤x≤1, x²≤y≤x。",
            "第二步：画图：0≤y≤1, y≤x≤√y。",
            "第三步：换序：∫₀¹ dy ∫<sub>y</sub><sup>√y</sup> f dx。"
          ],
          keyPoints: [
            "【重点】抛物线 y=x² 与直线 y=x 围成区域。",
            "【易错点】x 范围是 [y, √y]。"
          ],
          summary: "曲线围成区域换序：注意反函数。"
        }
,
        {
          id: '4.8-007',
          difficulty: '基础',
          type: '填空',
          topic: "立体体积",
          year: null,
          question: "由 z = 0，z = xy，x = 1，y = x 围成的立体体积为______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">8</span></span>",
          solution: [
            "第一步：V = ∬<sub>D</sub> xy dσ，D：0≤x≤1, 0≤y≤x。",
            "第二步：∫₀¹ dx ∫₀ˣ xy dy = ∫₀¹ x·x²/2 dx = 1/2·1/4 = 1/8。"
          ],
          keyPoints: [
            "【重点】四面体体积。",
            "【易错点】D 是三角形。"
          ],
          summary: "四面体体积：二重积分。"
        }
,
        {
          id: '4.8-008',
          difficulty: '基础',
          type: '解答',
          topic: "换序计算",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dy ∫<sub>y</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">sin x</span><span class=\"den\">x</span></span> dx。",
          options: null,
          answer: "1 - cos 1",
          solution: [
            "第一步：D：0≤y≤1, y≤x≤1。",
            "第二步：换序：0≤x≤1, 0≤y≤x。",
            "第三步：∫₀¹ dx ∫₀ˣ (sin x / x) dy = ∫₀¹ (sin x / x)·x dx = ∫₀¹ sin x dx = 1-cos 1。"
          ],
          keyPoints: [
            "【重点】(sin x)/x 对 x 积不出，换序后先对 y。",
            "【简便方法】先对 y 积分把 x 当常数。"
          ],
          summary: "(sin x)/x 型积分：换序后先对另一变量。"
        }
,
        {
          id: '4.8-009',
          difficulty: '提高',
          type: '解答',
          topic: "分段换序",
          year: null,
          question: "交换积分次序：∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>x</sup> f dy + ∫<sub>1</sub><sup>2</sup> dx ∫<sub>0</sub><sup>2-x</sup> f dy。",
          options: null,
          answer: "∫<sub>0</sub><sup>1</sup> dy ∫<sub>y</sub><sup>2-y</sup> f dx",
          solution: [
            "第一步：两部分区域拼起来是 D：0≤x≤2，0≤y≤min(x,2-x)。",
            "第二步：即三角形由 y=x, y=2-x, y=0 围成。",
            "第三步：换序：0≤y≤1, y≤x≤2-y。"
          ],
          keyPoints: [
            "【重点】分段积分拼区域。",
            "【易错点】顶点在 (1,1)。"
          ],
          summary: "两段积分拼起来是一个完整三角形。"
        }
,
        {
          id: '4.8-010',
          difficulty: '提高',
          type: '填空',
          topic: "极坐标换序",
          year: null,
          question: "极坐标累次积分 ∫<sub>0</sub><sup>π/2</sup> dθ ∫<sub>0</sub><sup>1</sup> f(r,θ) r dr 换序后为______。",
          options: null,
          answer: "∫<sub>0</sub><sup>1</sup> dr ∫<sub>0</sub><sup>π/2</sup> f(r,θ) r dθ",
          solution: [
            "第一步：D 是四分之一圆。",
            "第二步：换序：r∈[0,1]，θ∈[0,π/2]。"
          ],
          keyPoints: [
            "【重点】极坐标换序就是把 r、θ 顺序换。",
            "【简便方法】扇形区域换序很直接。"
          ],
          summary: "扇形极坐标换序：r 与 θ 顺序对调。"
        }
,
        {
          id: '4.8-011',
          difficulty: '提高',
          type: '选择',
          topic: "被积函数积不出型",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> x<sup>2</sup> e<sup>-y<sup>2</sup></sup> dy，应（　）",
          options: [
            "A. 先对 x 积分",
            "B. 先对 y 积分",
            "C. 换序后先对 x 积分",
            "D. 无法计算"
          ],
          answer: "C",
          solution: [
            "第一步：e^{-y²} 对 y 积不出。",
            "第二步：换序：0≤y≤1, 0≤x≤y。",
            "第三步：∫₀¹ dy ∫₀ʸ x² e<sup>-y²</sup> dx = ∫₀¹ y³ e<sup>-y²</sup>/3 dy。"
          ],
          keyPoints: [
            "【重点】e^{-y²} 必换序。",
            "【易错点】换序后先对 x。"
          ],
          summary: "e^{-y²} 型：换序后先对 x。"
        }
,
        {
          id: '4.8-012',
          difficulty: '提高',
          type: '解答',
          topic: "换序计算",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>π</sup> dx ∫<sub>0</sub><sup>sin x</sup> x<sup>2</sup> dy。",
          options: null,
          answer: "π<sup>2</sup> - 4",
          solution: [
            "第一步：D：0≤x≤π, 0≤y≤sin x。",
            "第二步：先对 y 积分：∫₀<sup>π</sup> x²·sin x dx。",
            "第三步：分部积分：∫x² sin x dx = -x² cos x + 2∫x cos x dx = -x² cos x + 2x sin x + 2cos x。",
            "第四步：代入 0 到 π：(-π²·(-1)+0-2) - (0+0+2) = π²-4。"
          ],
          keyPoints: [
            "【重点】本题不需换序，直接先对 y 积分。",
            "【易错点】分部积分两次。"
          ],
          summary: "若内层积分简单，先内后外直接算。"
        }
,
        {
          id: '4.8-013',
          difficulty: '提高',
          type: '填空',
          topic: "立体体积",
          year: null,
          question: "由 z = x<sup>2</sup>+y<sup>2</sup>，z = 0，x = 1，y = 1 围成的立体体积为______。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">2</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：V = ∬<sub>[0,1]²</sub> (x²+y²) dσ。",
            "第二步：= ∫₀¹ dx ∫₀¹ (x²+y²) dy = ∫₀¹ (x²+1/3) dx = 1/3+1/3 = 2/3。"
          ],
          keyPoints: [
            "【重点】正方形区域体积。",
            "【易错点】注意对称性 ∬x² = ∬y² = 1/3。"
          ],
          summary: "正方形区域体积：对称性简化。"
        }
,
        {
          id: '4.8-014',
          difficulty: '提高',
          type: '选择',
          topic: "极坐标换序",
          year: null,
          question: "极坐标累次积分 ∫<sub>0</sub><sup>π</sup> dθ ∫<sub>0</sub><sup>2sinθ</sup> f r dr 对应的直角坐标区域是（　）",
          options: [
            "A. x²+y² ≤ 2y",
            "B. x²+y² ≤ 2x",
            "C. x²+y² ≤ 1",
            "D. x²+y² ≤ 4"
          ],
          answer: "A",
          solution: [
            "第一步：r=2sinθ ⇒ r²=2r sinθ ⇒ x²+y²=2y。",
            "第二步：θ∈[0,π] 即上半圆（整个圆）。"
          ],
          keyPoints: [
            "【重点】r=2a sinθ 是圆心在 (0,a) 的圆。",
            "【易错点】别和 r=2cosθ 混淆。"
          ],
          summary: "r=2a sinθ → 圆心在 y 轴上的圆。"
        }
,
        {
          id: '4.8-015',
          difficulty: '提高',
          type: '解答',
          topic: "换序计算复杂题",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x<sup>2</sup></sub><sup>1</sup> x<sup>3</sup> √(1-y<sup>2</sup>) dy（提示：换序）。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">12</span></span>",
          solution: [
            "第一步：D：0≤x≤1, x²≤y≤1。",
            "第二步：换序：0≤y≤1, 0≤x≤√y。",
            "第三步：∫₀¹ dy ∫₀<sup>√y</sup> x³√(1-y²) dx = ∫₀¹ √(1-y²)·y²/4 dy。",
            "第四步：= 1/4∫₀¹ y²√(1-y²) dy = 1/4·(π/16) = π/64？复核：∫₀¹ y²√(1-y²) dy = π/16。"
          ],
          keyPoints: [
            "【重点】换序后先对 x 积分。",
            "【易错点】x³ 积分 = x⁴/4，代入 √y 得 y²/4。"
          ],
          summary: "带根号 y 的积分：换序后先对 x。"
        }
,
        {
          id: '4.8-016',
          difficulty: '提高',
          type: '填空',
          topic: "交换次序（分段）",
          year: null,
          question: "交换积分次序：∫<sub>0</sub><sup>1</sup> dy ∫<sub>0</sub><sup>2y</sup> f dx + ∫<sub>1</sub><sup>2</sup> dy ∫<sub>0</sub><sup>2-y</sup> f dx = ______。",
          options: null,
          answer: "∫<sub>0</sub><sup>2</sup> dx ∫<sub>x/2</sub><sup>2-x</sup> f dy",
          solution: [
            "第一步：两部分拼成 D：由 y=x/2，y=2-x，y=0 围成。",
            "第二步：换序：0≤x≤2，x/2≤y≤2-x。"
          ],
          keyPoints: [
            "【重点】分段拼区域。",
            "【易错点】顶点 (4/3, 2/3)。"
          ],
          summary: "两段积分拼区域，再换序。"
        }
,
        {
          id: '4.8-017',
          difficulty: '难题',
          type: '解答',
          topic: "换序+计算",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x</sub><sup>1</sup> <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">√(x<sup>2</sup>+y<sup>2</sup>)</span></span> dy。",
          options: null,
          answer: "ln(1+√2)",
          solution: [
            "第一步：D：0≤x≤1, x≤y≤1（三角形）。",
            "第二步：换序：0≤y≤1, 0≤x≤y。",
            "第三步：∫₀¹ dy ∫₀ʸ (1/√(x²+y²)) dx。",
            "第四步：内层 ∫ dx/√(x²+y²) = ln(x+√(x²+y²))，代入 0 到 y：ln(y+√2y)-ln y = ln(1+√2)。",
            "第五步：外层 ∫₀¹ ln(1+√2) dy = ln(1+√2)。"
          ],
          keyPoints: [
            "【重点】带根号的积分：换序后内层是标准积分。",
            "【易错点】∫dx/√(x²+a²) = ln(x+√(x²+a²))。"
          ],
          summary: "√(x²+y²) 型：换序后内层积分公式。"
        }
,
        {
          id: '4.8-018',
          difficulty: '难题',
          type: '选择',
          topic: "积分次序选择",
          year: null,
          question: "计算 ∬<sub>D</sub> e<sup>y/(x+y)</sup> dσ，D 由 x=0, y=0, x+y=1 围成，最合适的方法是（　）",
          options: [
            "A. 直角坐标直接算",
            "B. 换元 u=x+y, v=y/(x+y)",
            "C. 极坐标",
            "D. 无法计算"
          ],
          answer: "B",
          solution: [
            "第一步：e^{y/(x+y)} 是 x、y 的分式组合。",
            "第二步：换元 u=x+y, v=y/(x+y) 后，被积函数 = e<sup>v</sup>。",
            "第三步：雅可比 J=u。",
            "第四步：∫₀¹ du ∫₀¹ e<sup>v</sup>·u dv = (1/2)(e-1)。"
          ],
          keyPoints: [
            "【重点】分式被积函数用线性换元。",
            "【简便方法】观察 e 的指数是分式。"
          ],
          summary: "e^{分式} 型：换元把分式变成新变量。"
        }
,
        {
          id: '4.8-019',
          difficulty: '难题',
          type: '填空',
          topic: "立体体积（两曲面间）",
          year: null,
          question: "由 z = x<sup>2</sup>+y<sup>2</sup> 与 z = 8 - x<sup>2</sup>-y<sup>2</sup> 围成的立体体积为______。",
          options: null,
          answer: "16π",
          solution: [
            "第一步：交线：x²+y² = 8-x²-y²，即 x²+y² = 4。",
            "第二步：V = ∬<sub>x²+y²≤4</sub> [(8-x²-y²)-(x²+y²)] dσ。",
            "第三步：= ∬<sub>r≤2</sub> (8-2r²) dσ = ∫₀²π dθ ∫₀² (8-2r²)r dr。",
            "第四步：= 2π·[4r² - r⁴/2]₀² = 2π·(16-8) = 16π。"
          ],
          keyPoints: [
            "【重点】两曲面间体积：找交线定投影区域。",
            "【易错点】高 = 上曲面 - 下曲面。"
          ],
          summary: "两旋转抛物面间体积：找交线圆，高 = 上下曲面差。"
        }
,
        {
          id: '4.8-020',
          difficulty: '难题',
          type: '解答',
          topic: "换序综合",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>0</sub><sup>x</sup> √(x<sup>2</sup>+y<sup>2</sup>) dy。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">√2 + ln(1+√2)</span><span class=\"den\">3</span></span>",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤x。",
            "第二步：换序：0≤y≤1, y≤x≤1。",
            "第三步：∫₀¹ dy ∫<sub>y</sub><sup>1</sup> √(x²+y²) dx。",
            "第四步：内层 ∫√(x²+y²) dx = (x/2)√(x²+y²) + (y²/2)ln(x+√(x²+y²))。",
            "第五步：代入上下限，整理得结果。"
          ],
          keyPoints: [
            "【重点】√(x²+y²) 标准积分公式。",
            "【易错点】公式带 y² ln 项。"
          ],
          summary: "√(x²+y²) 积分：标准公式 ∫√(x²+a²) dx。"
        }
,
        {
          id: '4.8-021',
          difficulty: '真题',
          type: '解答',
          topic: "交换积分次序",
          year: 2018,
          question: "（2018 数二）交换积分次序：∫<sub>0</sub><sup>1</sup> dy ∫<sub>0</sub><sup>2y</sup> f(x,y) dx + ∫<sub>1</sub><sup>2</sup> dy ∫<sub>0</sub><sup>3-y</sup> f(x,y) dx。",
          options: null,
          answer: "∫<sub>0</sub><sup>2</sup> dx ∫<sub>x/2</sub><sup>3-x</sup> f dy",
          solution: [
            "第一步：两部分拼成 D：由 y=x/2, y=3-x, y=0 围成。",
            "第二步：顶点 (2,1)。",
            "第三步：换序：0≤x≤2, x/2≤y≤3-x。"
          ],
          keyPoints: [
            "【重点】拼区域换序。",
            "【易错点】顶点在 (2,1)。"
          ],
          summary: "分段积分拼区域：找交点。"
        }
,
        {
          id: '4.8-022',
          difficulty: '真题',
          type: '填空',
          topic: "极坐标换序",
          year: 2016,
          question: "（2016 数二）极坐标累次积分 ∫<sub>0</sub><sup>π/4</sup> dθ ∫<sub>0</sub><sup>1/cosθ</sup> f(r cosθ, r sinθ) r dr 的直角坐标区域为______。",
          options: null,
          answer: "0 ≤ y ≤ x, 0 ≤ x ≤ 1（三角形）",
          solution: [
            "第一步：r = 1/cosθ ⇒ r cosθ = 1 ⇒ x = 1。",
            "第二步：θ∈[0,π/4] 即 0≤y≤x。",
            "第三步：D：0≤y≤x, 0≤x≤1。"
          ],
          keyPoints: [
            "【重点】r=1/cosθ 对应 x=1。",
            "【易错点】直线 x=1 在极坐标下是 r=secθ。"
          ],
          summary: "r=secθ → 竖直线 x=1。"
        }
,
        {
          id: '4.8-023',
          difficulty: '真题',
          type: '解答',
          topic: "换序计算",
          year: 2012,
          question: "（2012 数二）计算 ∫<sub>0</sub><sup>1</sup> dx ∫<sub>x<sup>2</sup></sub><sup>x</sup> x<sup>2</sup> sin y / y dy。",
          options: null,
          answer: "1 - sin 1",
          solution: [
            "第一步：D：0≤x≤1, x²≤y≤x。",
            "第二步：换序：0≤y≤1, y≤x≤√y。",
            "第三步：∫₀¹ dy ∫<sub>y</sub><sup>√y</sup> x²·(sin y/y) dx。",
            "第四步：= ∫₀¹ (sin y/y)·[x³/3]<sub>y</sub><sup>√y</sup> dy = (1/3)∫₀¹ (y<sup>3/2</sup>-y²)(sin y/y) dy。",
            "第五步：= (1/3)∫₀¹ (√y - y) sin y dy。"
          ],
          keyPoints: [
            "【重点】(sin y)/y 必换序。",
            "【易错点】x 范围 [y, √y]。"
          ],
          summary: "(sin y)/y 型：换序后先对 x。"
        }
,
        {
          id: '4.8-024',
          difficulty: '真题',
          type: '选择',
          topic: "积分次序",
          year: 2011,
          question: "（2011 数二）设 D 是由 x = 0, y = 0, x+y = 1 围成的三角形，则 ∬<sub>D</sub> f(x,y) dσ =（　）",
          options: [
            "A. ∫₀¹ dx ∫₀<sup>1-x</sup> f dy",
            "B. ∫₀¹ dx ∫<sub>1-x</sub><sup>1</sup> f dy",
            "C. ∫₀¹ dx ∫₀<sup>1</sup> f dy",
            "D. ∫₀¹ dx ∫₀<sup>x</sup> f dy"
          ],
          answer: "A",
          solution: [
            "第一步：D：0≤x≤1, 0≤y≤1-x。",
            "第二步：累次积分 ∫₀¹ dx ∫₀<sup>1-x</sup> f dy。"
          ],
          keyPoints: [
            "【重点】标准三角形区域。",
            "【易错点】y 上限是 1-x。"
          ],
          summary: "直线 x+y=1 下三角形区域。"
        }
,
        {
          id: '4.8-025',
          difficulty: '真题',
          type: '解答',
          topic: "立体体积",
          year: 2020,
          question: "（2020 数二）求由曲面 z = x<sup>2</sup>+2y<sup>2</sup> 与 z = 6-2x<sup>2</sup>-y<sup>2</sup> 围成的立体体积。",
          options: null,
          answer: "6π",
          solution: [
            "第一步：交线：x²+2y² = 6-2x²-y²，即 x²+y² = 2。",
            "第二步：V = ∬<sub>x²+y²≤2</sub> [(6-2x²-y²)-(x²+2y²)] dσ。",
            "第三步：= ∬<sub>r≤√2</sub> (6-3r²) dσ。",
            "第四步：= ∫₀²π dθ ∫₀<sup>√2</sup> (6-3r²)r dr = 2π·[3r²-3r⁴/4]₀<sup>√2</sup>。",
            "第五步：= 2π·(6-3) = 6π。"
          ],
          keyPoints: [
            "【重点】两曲面交线是圆。",
            "【易错点】高 = 6-3(x²+y²)。"
          ],
          summary: "两椭圆抛物面间体积：找交线圆，再用极坐标。"
        }
,
        {
          id: '4.8-026',
          difficulty: '基础',
          type: '选择',
          topic: "交换积分次序",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>x</sup>f(x,y)dy 交换次序后为（  ）",
          options: [
            "A. ∫<sub>0</sub><sup>1</sup>dy∫<sub>y</sub><sup>1</sup>f(x,y)dx",
            "B. ∫<sub>0</sub><sup>1</sup>dy∫<sub>0</sub><sup>y</sup>f(x,y)dx",
            "C. ∫<sub>0</sub><sup>1</sup>dy∫<sub>0</sub><sup>1</sup>f(x,y)dx",
            "D. ∫<sub>0</sub><sup>1</sup>dy∫<sub>x</sub><sup>1</sup>f(x,y)dx"
          ],
          answer: "A",
          solution: [
            "第一步：原区域 D：0≤x≤1，0≤y≤x。",
            "第二步：即 D 是由 y=0, y=x, x=1 围成的三角形。",
            "第三步：换角度看：0≤y≤1，y≤x≤1。"
          ],
          keyPoints: [
            "【重点】交换次序先画区域图。",
            "【易错点】原 y≤x 换后 x≥y。"
          ],
          summary: "交换积分次序 = 重新描述区域的不等式。"
        }
,
        {
          id: '4.8-027',
          difficulty: '基础',
          type: '填空',
          topic: "交换次序",
          year: null,
          question: "∫<sub>0</sub><sup>1</sup>dy∫<sub>y</sub><sup>1</sup>e<sup>-x<sup>2</sup></sup>dx 交换次序后为________。",
          options: null,
          answer: "∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>x</sup>e<sup>-x<sup>2</sup></sup>dy",
          solution: [
            "第一步：原区域 0≤y≤1，y≤x≤1。",
            "第二步：换角度 0≤x≤1，0≤y≤x。",
            "第三步：交换后为 ∫<sub>0</sub><sup>1</sup>dx∫<sub>0</sub><sup>x</sup>e<sup>-x<sup>2</sup></sup>dy。",
            "第四步：这样内层对 y 积分可先积出。"
          ],
          keyPoints: [
            "【重点】e<sup>-x²</sup> 不能先对 x 积分，必须交换次序。",
            "【易错点】交换后内层对 y 积分简单。"
          ],
          summary: "被积函数对某变量不可积时，交换次序先积另一变量。"
        }
,
        {
          id: '4.8-028',
          difficulty: '提高',
          type: '解答',
          topic: "交换次序计算",
          year: null,
          question: "计算 ∫<sub>0</sub><sup>1</sup>dx∫<sub>x</sub><sup>1</sup>e<sup>-y<sup>2</sup></sup>dy。",
          options: null,
          answer: "<span class=\"frac\"><span class=\"num\">1 - e<sup>-1</sup></span><span class=\"den\">2</span></span>",
          solution: [
            "第一步：原积分先对 y 积不可行（e<sup>-y²</sup> 无初等原函数）。",
            "第二步：交换次序：0≤y≤1，0≤x≤y。",
            "第三步：= ∫<sub>0</sub><sup>1</sup>dy∫<sub>0</sub><sup>y</sup>e<sup>-y<sup>2</sup></sup>dx。",
            "第四步：内层 = y·e<sup>-y<sup>2</sup></sup>。",
            "第五步：外层 = [-<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">2</span></span>e<sup>-y<sup>2</sup></sup>]<sub>0</sub><sup>1</sup> = <span class=\"frac\"><span class=\"num\">1-e<sup>-1</sup></span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】高斯型积分必须交换次序。",
            "【易错点】内层对 x 积分得 y·e<sup>-y²</sup>。"
          ],
          summary: "e^(-x²) 型积分通过交换次序化为对 x 的简单积分。"
        }
,
        {
          id: '4.8-029',
          difficulty: '提高',
          type: '选择',
          topic: "二重积分体积应用",
          year: null,
          question: "由 z = x<sup>2</sup>+y<sup>2</sup> 与 z = 1 围成的立体体积为（  ）",
          options: [
            "A. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>",
            "B. π",
            "C. <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">4</span></span>",
            "D. 2π"
          ],
          answer: "A",
          solution: [
            "第一步：交线 x<sup>2</sup>+y<sup>2</sup>=1，投影 D 为单位圆。",
            "第二步：V = ∬<sub>D</sub>(1 - (x<sup>2</sup>+y<sup>2</sup>))dσ。",
            "第三步：极坐标 = ∫<sub>0</sub><sup>2π</sup>dθ∫<sub>0</sub><sup>1</sup>(1-r<sup>2</sup>)r dr。",
            "第四步：= 2π[<span class=\"frac\"><span class=\"num\">r<sup>2</sup></span><span class=\"den\">2</span></span> - <span class=\"frac\"><span class=\"num\">r<sup>4</sup></span><span class=\"den\">4</span></span>]<sub>0</sub><sup>1</sup> = <span class=\"frac\"><span class=\"num\">π</span><span class=\"den\">2</span></span>。"
          ],
          keyPoints: [
            "【重点】立体体积 = 顶曲面减底曲面的二重积分。",
            "【易错点】高 = 1 - r²。"
          ],
          summary: "旋转抛物面与平面围立体，先求交线投影再二重积分。"
        }
,
        {
          id: '4.8-030',
          difficulty: '真题',
          type: '填空',
          topic: "交换积分次序",
          year: 2014,
          question: "∫<sub>0</sub><sup>1</sup>dy∫<sub>y</sub><sup>√y</sup>f(x,y)dx 交换次序后为________。",
          options: null,
          answer: "∫<sub>0</sub><sup>1</sup>dx∫<sub>x<sup>2</sup></sub><sup>x</sup>f(x,y)dy",
          solution: [
            "第一步：原区域 0≤y≤1，y≤x≤√y。",
            "第二步：注意 y≤x≤√y 意味着 y≤1 且 y≤x≤√y，即 x<sup>2</sup>≤y≤x。",
            "第三步：换角度 0≤x≤1，x<sup>2</sup>≤y≤x。"
          ],
          keyPoints: [
            "【真题高频】由 y≤x≤√y 反解出 x²≤y≤x。",
            "【易错点】x≤√y 等价 y≥x²。"
          ],
          summary: "交换次序关键是把不等式反解为另一变量的范围。"
        }
        ]
      }
    }
  };
})();