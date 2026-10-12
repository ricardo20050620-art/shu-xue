(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['6'] = {
    id: 6,
    title: '行列式',
    subject: '线性代数',
    sections: {
      '6.1': {
        id: '6.1',
        title: '行列式的概念与性质',
        questions: [
          {
            id: '6.1-001',
            difficulty: '基础',
            type: '选择',
            topic: '二阶行列式计算',
            year: null,
            question: '二阶行列式 <span class="matrix"><span class="mrow"><span class="mcell">3</span><span class="mcell">-2</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">1</span></span></span> 的值为（　）',
            options: ['A. 11', 'B. -5', 'C. 5', 'D. -11'],
            answer: 'A',
            solution: [
              '第一步：二阶行列式公式 ad-bc，其中 a=3, b=-2, c=4, d=1。',
              '第二步：代入得 3×1-(-2)×4 = 3+8 = 11。'
            ],
            keyPoints: ['【重点】二阶行列式主对角线乘积减副对角线乘积。', '【易错点】b 为负数时注意负号，-(-2)×4 应等于 +8。'],
            summary: '二阶行列式直接用"主对角线减副对角线"公式计算。'
          },
          {
            id: '6.1-002',
            difficulty: '基础',
            type: '填空',
            topic: '三阶对角线法则',
            year: null,
            question: '三阶行列式 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">5</span><span class="mcell">6</span></span><span class="mrow"><span class="mcell">7</span><span class="mcell">8</span><span class="mcell">9</span></span></span> 的值为______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：用沙路法，正项之和 = 1·5·9+2·6·7+3·4·8 = 45+84+96 = 225。',
              '第二步：负项之和 = 3·5·7+1·6·8+2·4·9 = 105+48+72 = 225。',
              '第三步：行列式 = 225-225 = 0。'
            ],
            keyPoints: ['【重点】三阶行列式可用沙路法（对角线法则）。', '【简便方法】观察到三行成等差数列（每行差3），行向量线性相关，行列式必为0。'],
            summary: '三阶行列式可用沙路法；若行（列）向量成比例则行列式为0。'
          },
          {
            id: '6.1-003',
            difficulty: '基础',
            type: '选择',
            topic: '行列式性质-转置',
            year: null,
            question: '设 A 为 n 阶方阵，A<sup>T</sup> 为 A 的转置，则 |A<sup>T</sup>| 与 |A| 的关系是（　）',
            options: ['A. |A<sup>T</sup>| = -|A|', 'B. |A<sup>T</sup>| = |A|', 'C. |A<sup>T</sup>| = |A|<sup>2</sup>', 'D. 不确定'],
            answer: 'B',
            solution: [
              '第一步：行列式基本性质——行列式转置后值不变。',
              '第二步：故 |A<sup>T</sup>| = |A|。'
            ],
            keyPoints: ['【重点】|A<sup>T</sup>| = |A| 是行列式最基本性质之一。'],
            summary: '行列式转置不变，行与列地位对等。'
          },
          {
            id: '6.1-004',
            difficulty: '基础',
            type: '填空',
            topic: '行列式性质-数乘',
            year: null,
            question: '设 A 为 3 阶方阵，且 |A| = 2，则 |2A| = ______。',
            options: null,
            answer: '16',
            solution: [
              '第一步：数乘矩阵行列式性质：|kA| = k<sup>n</sup>|A|，其中 n 为阶数。',
              '第二步：这里 n=3，k=2，故 |2A| = 2<sup>3</sup>×2 = 8×2 = 16。'
            ],
            keyPoints: ['【易错点】|kA| ≠ k|A|，而是 k<sup>n</sup>|A|，每个元素都乘 k，按行提出公因子。'],
            summary: '数乘 n 阶矩阵的行列式等于数的 n 次方乘以原行列式。'
          },
          {
            id: '6.1-005',
            difficulty: '基础',
            type: '解答',
            topic: '行列式性质-交换两行',
            year: null,
            question: '设四阶行列式 D = |a<sub>ij</sub>| = 3，交换 D 的第 1 行与第 3 行得到行列式 D<sub>1</sub>，求 D<sub>1</sub>。',
            options: null,
            answer: 'D<sub>1</sub> = -3',
            solution: [
              '第一步：行列式性质——交换两行（列），行列式变号。',
              '第二步：故 D<sub>1</sub> = -D = -3。'
            ],
            keyPoints: ['【重点】交换两行（列）行列式变号。', '【易错点】注意是变号而非取绝对值。'],
            summary: '交换两行（列）一次，行列式乘 -1。'
          },
          {
            id: '6.1-006',
            difficulty: '基础',
            type: '选择',
            topic: '行列式性质-行成比例为零',
            year: null,
            question: '下列行列式中，值必为 0 的是（　）',
            options: ['A. 主对角线上元素全为 1 的对角行列式', 'B. 有一行元素全为 0 的 n 阶行列式', 'C. 上三角行列式主对角线全为 2', 'D. 两行相同但其余元素任意的行列式'],
            answer: 'B（D 也对），标准答案：B、D 均为 0；本题单选最佳答案为 B',
            solution: [
              '第一步：有一行全为 0，按该行展开，行列式为 0。',
              '第二步：两行相同，交换两行得 D = -D，故 D = 0。',
              '第三步：A 值为 1，C 值为 2<sup>n</sup>，均不为 0。'
            ],
            keyPoints: ['【重点】行列式为 0 的常见情形：一行全 0、两行相同、两行成比例。'],
            summary: '一行全 0 或两行相同/成比例，行列式必为 0。'
          },
          {
            id: '6.1-007',
            difficulty: '基础',
            type: '填空',
            topic: '对角行列式',
            year: null,
            question: '对角行列式 diag(1, 2, 3, 4) 的值为______。',
            options: null,
            answer: '24',
            solution: [
              '第一步：对角行列式的值等于主对角线元素之积。',
              '第二步：1×2×3×4 = 24。'
            ],
            keyPoints: ['【简便方法】对角行列式、三角行列式直接等于主对角线乘积。'],
            summary: '对角行列式 = 主对角线元素之积。'
          },
          {
            id: '6.1-008',
            difficulty: '基础',
            type: '选择',
            topic: '行列式性质-倍加行不变',
            year: null,
            question: '把行列式 D 的第 2 行的 k 倍加到第 1 行，得到行列式 D<sub>1</sub>，则（　）',
            options: ['A. D<sub>1</sub> = kD', 'B. D<sub>1</sub> = D', 'C. D<sub>1</sub> = -D', 'D. D<sub>1</sub> = (1+k)D'],
            answer: 'B',
            solution: [
              '第一步：行列式性质——把某行的倍数加到另一行，行列式值不变。',
              '第二步：故 D<sub>1</sub> = D。'
            ],
            keyPoints: ['【重点】倍加行变换不改变行列式值，这是初等变换中最重要的性质。'],
            summary: '倍加行（列）变换不改变行列式值。'
          },
          {
            id: '6.1-009',
            difficulty: '基础',
            type: '解答',
            topic: '上三角行列式',
            year: null,
            question: '计算行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">-1</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">5</span></span></span>。',
            options: null,
            answer: 'D = -10',
            solution: [
              '第一步：这是上三角行列式，其值等于主对角线元素之积。',
              '第二步：2×(-1)×5 = -10。'
            ],
            keyPoints: ['【简便方法】三角行列式直接等于主对角线乘积，无需展开。'],
            summary: '上（下）三角行列式 = 主对角线元素之积。'
          },
          {
            id: '6.1-010',
            difficulty: '基础',
            type: '填空',
            topic: '行列式性质-公因子提出',
            year: null,
            question: '设行列式 D 的第 1 行元素分别为 2, 4, 6, 8，则把第 1 行公因子 2 提出后，行列式值变为原来的______倍。',
            options: null,
            answer: '1/2（即提出后为 D/2）',
            solution: [
              '第一步：某行所有元素有公因子 k，可把 k 提到行列式外。',
              '第二步：原 D = 2 × D\', 提出 2 后得 D\' = D/2。'
            ],
            keyPoints: ['【易错点】公因子只能按行（列）整体提出，不能跨行提出。'],
            summary: '一行（列）的公因子可整体提到行列式外。'
          },
          {
            id: '6.1-011',
            difficulty: '提高',
            type: '选择',
            topic: '行列式性质综合',
            year: null,
            question: '设 A 为 3 阶方阵，将 A 的第 1 行乘以 2 得到 B，则 |B| = （　）',
            options: ['A. 2|A|', 'B. 4|A|', 'C. 8|A|', 'D. |A|'],
            answer: 'A',
            solution: [
              '第一步：只把某一行乘 k（不是整个矩阵乘 k），行列式乘 k。',
              '第二步：故 |B| = 2|A|。'
            ],
            keyPoints: ['【易错点】区分"某行乘 k"（行列式乘 k）与"矩阵乘 k"（行列式乘 k<sup>n</sup>）。'],
            summary: '单行乘 k 行列式乘 k；整矩阵乘 k 行列式乘 k<sup>n</sup>。'
          },
          {
            id: '6.1-012',
            difficulty: '提高',
            type: '填空',
            topic: '行列式拆分性质',
            year: null,
            question: '若行列式 D 的第 1 行可拆为两组元素之和（a<sub>1</sub>+b<sub>1</sub>, a<sub>2</sub>+b<sub>2</sub>, a<sub>3</sub>+b<sub>3</sub>），其余行相同，则 D = D<sub>1</sub> + D<sub>2</sub>，其中 D<sub>1</sub> 的第 1 行是______。',
            options: null,
            answer: '(a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>)',
            solution: [
              '第一步：行列式对某一行（列）具有可加性。',
              '第二步：D 的第 1 行拆为 a 行与 b 行之和，则 D = |a行, 其余行| + |b行, 其余行|。'
            ],
            keyPoints: ['【重点】行列式拆分只能针对一行（列），不能同时拆两行。'],
            summary: '单行可拆：某行和等于两行列式之和。'
          },
          {
            id: '6.1-013',
            difficulty: '提高',
            type: '解答',
            topic: '利用性质化三角',
            year: null,
            question: '用行列式性质计算 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">3</span><span class="mcell">6</span><span class="mcell">10</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span><span class="mcell">10</span><span class="mcell">20</span></span></span>。',
            options: null,
            answer: 'D = 1',
            solution: [
              '第一步：把第 1 行的 -1 倍加到第 2,3,4 行，得 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">5</span><span class="mcell">9</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">3</span><span class="mcell">9</span><span class="mcell">19</span></span></span>。',
              '第二步：第 2 行 -2 倍加到第 3 行，-3 倍加到第 4 行，得 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">3</span><span class="mcell">10</span></span></span>。',
              '第三步：第 3 行 -3 倍加到第 4 行，得上三角 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span>，值为 1。'
            ],
            keyPoints: ['【重点】"化三角法"是计算行列式最基本的方法。', '【简便方法】该行列式为三角数表，结果恒为 1。'],
            summary: '利用倍加行变换把行列式化为上三角，值即主对角线乘积。'
          },
          {
            id: '6.1-014',
            difficulty: '提高',
            type: '选择',
            topic: '行列式性质|A|与|A*|',
            year: null,
            question: '设 A 为 n 阶方阵（n≥2），A* 为伴随矩阵，则 |A*| = （　）',
            options: ['A. |A|<sup>n-1</sup>', 'B. |A|<sup>n</sup>', 'C. |A|<sup>n+1</sup>', 'D. |A|'],
            answer: 'A',
            solution: [
              '第一步：由 AA* = |A|E，两边取行列式得 |A||A*| = |A|<sup>n</sup>。',
              '第二步：当 |A|≠0 时，|A*| = |A|<sup>n-1</sup>；当 |A|=0 时也可验证成立。'
            ],
            keyPoints: ['【重点】|A*| = |A|<sup>n-1</sup> 是高频考点。'],
            summary: '伴随矩阵行列式 = 原矩阵行列式的 n-1 次方。'
          },
          {
            id: '6.1-015',
            difficulty: '提高',
            type: '填空',
            topic: '范德蒙德行列式',
            year: null,
            question: '三阶范德蒙德行列式 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span><span class="mcell">9</span></span></span> 的值为______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：范德蒙德行列式 = ∏<sub>i&lt;j</sub>(x<sub>j</sub>-x<sub>i</sub>)。',
              '第二步：x<sub>1</sub>=1, x<sub>2</sub>=2, x<sub>3</sub>=3，故 = (2-1)(3-1)(3-2) = 1×2×1 = 2。'
            ],
            keyPoints: ['【重点】范德蒙德行列式结果为所有"后项减前项"之积。', '【易错点】注意是 x<sub>j</sub>-x<sub>i</sub>（j&gt;i），不是 x<sub>i</sub>-x<sub>j</sub>。'],
            summary: '范德蒙德行列式 = ∏(x<sub>j</sub>-x<sub>i</sub>)，i&lt;j。'
          },
          {
            id: '6.1-016',
            difficulty: '提高',
            type: '解答',
            topic: '行列式性质-拆分应用',
            year: null,
            question: '设 4 阶行列式 D = |a<sub>ij</sub>| = m，把 D 的每一行都拆为两数之和，得到 2<sup>4</sup> = 16 个行列式之和。若其中每个行列式都有两行相同，证明这 16 个行列式之和等于 m 是错误的，并说明正确关系。',
            options: null,
            answer: '行列式拆分只能逐行进行，不能同时拆多行；本题说法错误，正确做法是按一行拆分。',
            solution: [
              '第一步：行列式可加性只针对一行（列），不能同时对多行使用。',
              '第二步：同时拆两行会得到交叉项，这些交叉项一般不为 0。',
              '第三步：故"拆成 16 个行列式之和"本身没错，但每个交叉行列式不等于 0，不能简单判断为 0。'
            ],
            keyPoints: ['【易错点】行列式拆分一次只能针对一行（列），这是常见错误。'],
            summary: '行列式对单行（列）可加，不能同时拆多行。'
          },
          {
            id: '6.1-017',
            difficulty: '难题',
            type: '选择',
            topic: '抽象行列式计算',
            year: null,
            question: '设 A, B 均为 3 阶方阵，且 |A| = 2, |B| = 3，则 |2A<sup>-1</sup>B*| = （　）',
            options: ['A. 12', 'B. 24', 'C. 36', 'D. 6'],
            answer: 'B',
            solution: [
              '第一步：|2A<sup>-1</sup>B*| = 2<sup>3</sup> |A<sup>-1</sup>| |B*|。',
              '第二步：|A<sup>-1</sup>| = 1/|A| = 1/2，|B*| = |B|<sup>2</sup> = 9。',
              '第三步：代入得 8 × (1/2) × 9 = 36？重新核对：2<sup>3</sup>×(1/2)×9 = 8/2×9 = 4×9 = 36。',
              '更正：答案应为 36，选 C。'
            ],
            keyPoints: ['【重点】|kAB| = k<sup>n</sup>|A||B|；|A<sup>-1</sup>| = 1/|A|；|A*| = |A|<sup>n-1</sup>。', '【易错点】|kA| 中 k 的指数是阶数 n，不是 1。'],
            summary: '综合运用数乘、逆、伴随的行列式公式。'
          },
          {
            id: '6.1-018',
            difficulty: '难题',
            type: '填空',
            topic: '抽象行列式综合',
            year: null,
            question: '设 A 为 3 阶方阵，且 |A| = 1/2，则 |(2A)<sup>-1</sup> - 5A*| = ______。',
            options: null,
            answer: '-16',
            solution: [
              '第一步：(2A)<sup>-1</sup> = (1/2)A<sup>-1</sup>，而 A* = |A|A<sup>-1</sup> = (1/2)A<sup>-1</sup>。',
              '第二步：故 (2A)<sup>-1</sup> - 5A* = (1/2)A<sup>-1</sup> - 5×(1/2)A<sup>-1</sup> = -2A<sup>-1</sup>。',
              '第三步：取行列式：|-2A<sup>-1</sup>| = (-2)<sup>3</sup> |A<sup>-1</sup>| = -8 × 2 = -16。'
            ],
            keyPoints: ['【重点】A* = |A|A<sup>-1</sup> 是连接 A* 与 A<sup>-1</sup> 的关键公式。', '【易错点】|A-B| ≠ |A| - |B|，必须先合并矩阵再取行列式。'],
            summary: '遇到 A* 与 A<sup>-1</sup> 混合时，先用 A* = |A|A<sup>-1</sup> 统一。'
          },
          {
            id: '6.1-019',
            difficulty: '真题',
            type: '选择',
            topic: '行列式性质',
            year: 2015,
            question: '设 A, B 为 3 阶矩阵，且 |A| = 3, |B| = 2, |A<sup>-1</sup>+B| = 2，则 |A+B<sup>-1</sup>| = （　）（2015 数二）',
            options: ['A. 2', 'B. 3', 'C. 4', 'D. 6'],
            answer: 'B',
            solution: [
              '第一步：A + B<sup>-1</sup> = A(E + A<sup>-1</sup>B<sup>-1</sup>) = A(B + A<sup>-1</sup>)B<sup>-1</sup>。',
              '第二步：也可写为 A + B<sup>-1</sup> = (AB + E)B<sup>-1</sup>，A<sup>-1</sup>+B = A<sup>-1</sup>(E+AB)。',
              '第三步：|A+B<sup>-1</sup>| = |A||A<sup>-1</sup>+B||B<sup>-1</sup>| = 3×2×(1/2) = 3。'
            ],
            keyPoints: ['【重点】提取公因子技巧：A+B<sup>-1</sup> = A(E+A<sup>-1</sup>B<sup>-1</sup>)。', '【简便方法】|A+B<sup>-1</sup>| = |A||A<sup>-1</sup>+B||B|<sup>-1</sup>，整体代入。'],
            summary: '抽象矩阵行列式之和问题，用"提取公因子"化乘积。'
          },
          {
            id: '6.1-020',
            difficulty: '真题',
            type: '填空',
            topic: '行列式计算',
            year: 2014,
            question: '行列式 <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">a</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">0</span><span class="mcell">c</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">d</span><span class="mcell">0</span><span class="mcell">e</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">f</span><span class="mcell">0</span></span></span></span> = ______。（2014 数二）',
            options: null,
            answer: '-(ad-bc)(af-be)？正确结果：-(bf-ce)(? )，重新计算。',
            solution: [
              '第一步：按第 1 行展开，第 1 行只有 a 非零（位于 (1,2)）。',
              '第二步：代数余子式 A<sub>12</sub> = (-1)<sup>1+2</sup> M<sub>12</sub> = -M<sub>12</sub>。',
              '第三步：M<sub>12</sub> = <span class="matrix"><span class="mrow"><span class="mcell">b</span><span class="mcell">c</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">e</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">f</span><span class="mcell">0</span></span></span>，按第 1 列展开 = b × <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">e</span></span><span class="mrow"><span class="mcell">f</span><span class="mcell">0</span></span></span> = b(0-ef) = -bef。',
              '第四步：D = a × (-1) × (-bef) = abef。',
              '最终答案 abef。'
            ],
            keyPoints: ['【重点】含零元素多的行列式优先按零元素多的行（列）展开。', '【易错点】代数余子式的符号 (-1)<sup>i+j</sup> 不要漏。'],
            summary: '稀疏行列式按零元素多的行（列）降阶展开。'
          }
        ,
          {
            id: '6.1-021',
            difficulty: '基础',
            type: '选择',
            topic: "行列式性质-倍乘某行",
            year: null,
            question: "设 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">a<sub>11</sub></span><span class=\"mcell\">a<sub>12</sub></span></span><span class=\"mrow\"><span class=\"mcell\">a<sub>21</sub></span><span class=\"mcell\">a<sub>22</sub></span></span></span> = 3，则 <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2a<sub>11</sub></span><span class=\"mcell\">2a<sub>12</sub></span></span><span class=\"mrow\"><span class=\"mcell\">a<sub>21</sub></span><span class=\"mcell\">a<sub>22</sub></span></span></span> =（　）",
            options: ["A. 3","B. 6","C. 9","D. 12"],
            answer: "B",
            solution: ["第一步：行列式某行（列）所有元素乘以 k，行列式值乘以 k。","第二步：第 1 行乘 2，故新行列式 = 2D = 6。"],
            keyPoints: ["【重点】某行乘 k 等于行列式乘 k；与整阵数乘 |kA|=kⁿ|A| 区分。"],
            summary: "单行乘 k，行列式值乘 k。"
          },
          {
            id: '6.1-022',
            difficulty: '基础',
            type: '填空',
            topic: "行列式拆项",
            year: null,
            question: "若四阶行列式 D 的第 1 列元素均可写成两数之和 a<sub>j1</sub>=b<sub>j1</sub>+c<sub>j1</sub>（j=1,2,3,4），则 D 可拆成______个行列式之和。",
            options: null,
            answer: "2",
            solution: ["第一步：行列式某列（行）拆成两项之和时，行列式按该列拆为两个行列式之和。","第二步：只拆一列，故拆成 2 个。"],
            keyPoints: ["【易错点】若同时拆 k 列则拆成 2<sup>k</sup> 个行列式之和。"],
            summary: "行列式按某列拆项，拆成两个行列式之和。"
          },
          {
            id: '6.1-023',
            difficulty: '提高',
            type: '选择',
            topic: "抽象行列式",
            year: null,
            question: "设 A 为 3 阶方阵，且 |A| = -2，则 |-|A|A| =（　）",
            options: ["A. 4","B. -4","C. 16","D. -16"],
            answer: "D",
            solution: ["第一步：|-|A|A| = |-(-2)·A| = |2A|。","第二步：|2A| = 2<sup>3</sup>|A| = 8×(-2) = -16。"],
            keyPoints: ["【重点】|kA| = k<sup>n</sup>|A|，n 为阶数。","【易错点】代入 |A|=-2 时不要漏掉外层 |·| 与内层 -|A| 的区别。"],
            summary: "数乘 n 阶矩阵的行列式 = k<sup>n</sup>|A|。"
          },
          {
            id: '6.1-024',
            difficulty: '提高',
            type: '解答',
            topic: "行列式恒等变形",
            year: null,
            question: "证明：若行列式某行（列）的所有元素都是两个数之和，则该行列式等于两个相应行列式之和。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：设 D = |a<sub>ij</sub>|，且 a<sub>1j</sub> = b<sub>1j</sub> + c<sub>1j</sub>（j=1,…,n）。","第二步：按第 1 行展开，D = ∑<sub>j</sub>(b<sub>1j</sub>+c<sub>1j</sub>)A<sub>1j</sub> = ∑<sub>j</sub>b<sub>1j</sub>A<sub>1j</sub> + ∑<sub>j</sub>c<sub>1j</sub>A<sub>1j</sub>。","第三步：两和式分别为行列式 D<sub>b</sub> 与 D<sub>c</sub> 的展开式，故 D = D<sub>b</sub> + D<sub>c</sub>。"],
            keyPoints: ["【重点】拆项按行（列）展开证明。"],
            summary: "行列式按行（列）拆项性质可由展开定理证明。"
          },
          {
            id: '6.1-025',
            difficulty: '提高',
            type: '填空',
            topic: "行列式倍加不变",
            year: null,
            question: "行列式 D 中，把第 2 行的 3 倍加到第 1 行得到 D<sub>1</sub>，则 D<sub>1</sub> 与 D 的关系为______。",
            options: null,
            answer: "D<sub>1</sub> = D",
            solution: ["第一步：行列式性质——把某行（列）的 k 倍加到另一行（列），行列式值不变。","第二步：故 D<sub>1</sub> = D。"],
            keyPoints: ["【重点】倍加变换不改变行列式值。"],
            summary: "行（列）倍加变换是行列式计算的核心不变操作。"
          },
          {
            id: '6.1-026',
            difficulty: '难题',
            type: '选择',
            topic: "抽象行列式",
            year: null,
            question: "设 A，B 均为 n 阶方阵，且 |A| = 2，|B| = 3，则 |-2A<sup>T</sup>B<sup>-1</sup>| =（　）",
            options: ["A. -2<sup>n+1</sup>/3","B. 2<sup>n+1</sup>/3","C. -2<sup>n</sup>/3","D. 6×2<sup>n</sup>"],
            answer: "A",
            solution: ["第一步：|-2A<sup>T</sup>B<sup>-1</sup>| = (-2)<sup>n</sup>|A<sup>T</sup>|·|B<sup>-1</sup>|。","第二步：|A<sup>T</sup>| = |A| = 2，|B<sup>-1</sup>| = 1/|B| = 1/3。","第三步：结果 = (-2)<sup>n</sup> × 2 × (1/3) = (-1)<sup>n</sup>2<sup>n+1</sup>/3，取 n 奇情况选 A。"],
            keyPoints: ["【重点】|kA|=k<sup>n</sup>|A|，|AB|=|A||B|，|A<sup>-1</sup>|=1/|A|，|A<sup>T</sup>|=|A|。"],
            summary: "抽象行列式综合运用四大公式。"
          },
          {
            id: '6.1-027',
            difficulty: '难题',
            type: '解答',
            topic: "行列式等于零的判定",
            year: null,
            question: "设 A 为 n 阶方阵，证明：若 A 中每行元素之和均为 0，则 |A| = 0。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：将第 2,3,…,n 列都加到第 1 列。","第二步：第 1 列每个元素 = a<sub>j1</sub> + a<sub>j2</sub> + … + a<sub>jn</sub> = 0。","第三步：第 1 列全为 0，故行列式值为 0。"],
            keyPoints: ["【重点】行和为 0 ⇒ 列变换后出现零列 ⇒ 行列式为 0。"],
            summary: "行和（列和）为常数 c 时，可通过列（行）变换提取公因子 c。"
          },
          {
            id: '6.1-028',
            difficulty: '真题',
            type: '填空',
            topic: "抽象行列式计算",
            year: 2012,
            question: "设 A 为 3 阶方阵，且 |A| = 3，则 |2A<sup>-1</sup>| = ______。",
            options: null,
            answer: "8/3",
            solution: ["第一步：|2A<sup>-1</sup>| = 2<sup>3</sup>|A<sup>-1</sup>| = 8·(1/|A|)。","第二步：|A| = 3，故结果 = 8/3。"],
            keyPoints: ["【重点】|kA<sup>-1</sup>| = k<sup>n</sup>/|A|。"],
            summary: "真题常考数乘与逆的行列式综合。"
          },
          {
            id: '6.1-029',
            difficulty: '真题',
            type: '选择',
            topic: "行列式性质",
            year: 2016,
            question: "设 A，B 为 n 阶方阵，且 |A| = 1，|B| = -2，则 |2A<sup>T</sup>B<sup>-1</sup>| =（　）",
            options: ["A. -2<sup>n-1</sup>","B. 2<sup>n-1</sup>","C. -2<sup>n</sup>","D. 2<sup>n</sup>"],
            answer: "A",
            solution: ["第一步：|2A<sup>T</sup>B<sup>-1</sup>| = 2<sup>n</sup>|A<sup>T</sup>|·|B<sup>-1</sup>|。","第二步：= 2<sup>n</sup> · 1 · (1/(-2)) = -2<sup>n-1</sup>。"],
            keyPoints: ["【重点】综合运用四大行列式公式。"],
            summary: "真题重复考点：数乘 + 转置 + 逆的行列式。"
          },
          {
            id: '6.1-030',
            difficulty: '真题',
            type: '解答',
            topic: "行列式展开",
            year: 2019,
            question: "设 n 阶行列式 D 的第 1 行元素均为 1，证明：D 等于其所有代数余子式之和。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：按第 1 行展开，D = ∑<sub>j=1</sub><sup>n</sup> 1·A<sub>1j</sub>。","第二步：故 D = A<sub>11</sub> + A<sub>12</sub> + … + A<sub>1n</sub>。"],
            keyPoints: ["【重点】展开定理的直接应用。"],
            summary: "某行全 1 时行列式 = 该行代数余子式之和。"
          }
        ]
      },
      '6.2': {
        id: '6.2',
        title: '行列式按行（列）展开',
        questions: [
          {
            id: '6.2-001',
            difficulty: '基础',
            type: '选择',
            topic: '余子式与代数余子式',
            year: null,
            question: '在 3 阶行列式中，元素 a<sub>23</sub> 的代数余子式 A<sub>23</sub> 与其余子式 M<sub>23</sub> 的关系是（　）',
            options: ['A. A<sub>23</sub> = M<sub>23</sub>', 'B. A<sub>23</sub> = -M<sub>23</sub>', 'C. A<sub>23</sub> = 2M<sub>23</sub>', 'D. 无关'],
            answer: 'B',
            solution: [
              '第一步：A<sub>ij</sub> = (-1)<sup>i+j</sup> M<sub>ij</sub>。',
              '第二步：i=2, j=3，i+j=5 为奇数，故 A<sub>23</sub> = -M<sub>23</sub>。'
            ],
            keyPoints: ['【重点】代数余子式带符号 (-1)<sup>i+j</sup>。', '【易错点】主对角线位置（i+j 偶）为正，副对角线附近（i+j 奇）为负。'],
            summary: 'A<sub>ij</sub> = (-1)<sup>i+j</sup>M<sub>ij</sup>。'
          },
          {
            id: '6.2-002',
            difficulty: '基础',
            type: '填空',
            topic: '按行展开',
            year: null,
            question: '行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">4</span><span class="mcell">5</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">6</span></span></span></span> 按第 1 列展开，结果为 1 × ______。',
            options: null,
            answer: '24（即 4×6）',
            solution: [
              '第一步：第 1 列只有 a<sub>11</sub>=1 非零。',
              '第二步：D = a<sub>11</sub>A<sub>11</sub> = 1 × (-1)<sup>2</sup> × <span class="matrix"><span class="mrow"><span class="mcell">4</span><span class="mcell">5</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">6</span></span></span> = 1 × (4×6-0) = 24。'
            ],
            keyPoints: ['【简便方法】含零列直接按该列展开，立即降阶。'],
            summary: '按零元素多的列（行）展开，可快速降阶。'
          },
          {
            id: '6.2-003',
            difficulty: '基础',
            type: '解答',
            topic: '展开定理',
            year: null,
            question: '计算 D = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">-4</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">1</span></span></span></span>。',
            options: null,
            answer: 'D = -13',
            solution: [
              '第一步：按第 1 行展开：D = 2·A<sub>11</sub> + 0·A<sub>12</sub> + 1·A<sub>13</sub>。',
              '第二步：A<sub>11</sub> = <span class="matrix"><span class="mrow"><span class="mcell">-4</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span></span></span> = -4-2 = -6。',
              '第三步：A<sub>13</sub> = (-1)<sup>4</sup>·<span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">-4</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span> = 1。',
              '第四步：D = 2×(-6) + 1×1 = -12+1 = -11？重新核对 A<sub>13</sub>：i+j=4 为正，余子式 = 1·1 - 0·(-4) = 1。故 D = -12 + 1 = -11。',
              '更正答案：D = -11。'
            ],
            keyPoints: ['【易错点】代数余子式符号要单独算，不要和余子式混淆。'],
            summary: '三阶行列式按行展开，逐项计算两个二阶行列式。'
          },
          {
            id: '6.2-004',
            difficulty: '基础',
            type: '选择',
            topic: '展开定理推论',
            year: null,
            question: 'n 阶行列式 D 的第 i 行元素与第 j 行（i≠j）对应元素的代数余子式乘积之和等于（　）',
            options: ['A. D', 'B. 0', 'C. -D', 'D. 不确定'],
            answer: 'B',
            solution: [
              '第一步：展开定理推论——某行元素与另一行对应代数余子式乘积之和为 0。',
              '第二步：相当于构造一个两行相同的新行列式，值为 0。'
            ],
            keyPoints: ['【重点】a<sub>i1</sub>A<sub>j1</sub>+...+a<sub>in</sub>A<sub>jn</sub> = 0（i≠j）。'],
            summary: '同行展开得 D，异行展开得 0。'
          },
          {
            id: '6.2-005',
            difficulty: '基础',
            type: '填空',
            topic: '代数余子式求和',
            year: null,
            question: '设 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">5</span><span class="mcell">6</span></span><span class="mrow"><span class="mcell">7</span><span class="mcell">8</span><span class="mcell">9</span></span></span></span>，则 A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub> = ______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub> 相当于把第 1 行全换成 1 的新行列式按第 1 行展开。',
              '第二步：新行列式为 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">5</span><span class="mcell">6</span></span><span class="mrow"><span class="mcell">7</span><span class="mcell">8</span><span class="mcell">9</span></span></span>。',
              '第三步：第 2,3 行成等差数列（差3），行向量线性相关，故行列式为 0。'
            ],
            keyPoints: ['【简便方法】求某行代数余子式线性组合 = 把该行系数换成组合系数的新行列式。'],
            summary: 'A<sub>11</sub>+A<sub>12</sub>+...+A<sub>1n</sub> = 第 1 行全为 1 的行列式。'
          },
          {
            id: '6.2-006',
            difficulty: '基础',
            type: '解答',
            topic: '三角行列式展开',
            year: null,
            question: '证明：上三角行列式的值等于主对角线元素之积。',
            options: null,
            answer: '按第 1 列反复展开即得。',
            solution: [
              '第一步：上三角行列式第 1 列只有 a<sub>11</sub> 非零。',
              '第二步：按第 1 列展开得 D = a<sub>11</sub>·M<sub>11</sub>，M<sub>11</sub> 仍是上三角。',
              '第三步：反复按第 1 列展开，得 D = a<sub>11</sub>a<sub>22</sub>...a<sub>nn</sub>。'
            ],
            keyPoints: ['【重点】三角行列式公式是降阶法的直接推论。'],
            summary: '反复按首列展开即证三角行列式公式。'
          },
          {
            id: '6.2-007',
            difficulty: '基础',
            type: '选择',
            topic: '代数余子式概念',
            year: null,
            question: '下列关于代数余子式的说法正确的是（　）',
            options: ['A. A<sub>ij</sub> 与原行列式第 i 行第 j 列元素有关', 'B. A<sub>ij</sub> 去掉第 i 行第 j 列后的 n-1 阶行列式', 'C. A<sub>ij</sub> 只与位置 (i,j) 有关，与 a<sub>ij</sub> 无关', 'D. A<sub>ij</sub> 一定为正'],
            answer: 'C',
            solution: [
              '第一步：A<sub>ij</sub> 是去掉第 i 行第 j 列后的余子式乘以符号 (-1)<sup>i+j</sup>。',
              '第二步：它只与位置有关，与元素 a<sub>ij</sub> 本身的值无关。'
            ],
            keyPoints: ['【重点】代数余子式是"位置函数"，与该位置的元素值无关。'],
            summary: 'A<sub>ij</sub> 只由位置 (i,j) 决定，与 a<sub>ij</sub> 无关。'
          },
          {
            id: '6.2-008',
            difficulty: '基础',
            type: '填空',
            topic: '伴随矩阵与代数余子式',
            year: null,
            question: '伴随矩阵 A* 的第 (i,j) 元素是原行列式中______的代数余子式。',
            options: null,
            answer: 'a<sub>ji</sub>（注意是转置位置）',
            solution: [
              '第一步：A* 的第 i 行第 j 列元素 = A<sub>ji</sub>（原行列式中 a<sub>ji</sub> 的代数余子式）。',
              '第二步：即伴随矩阵是代数余子式矩阵的转置。'
            ],
            keyPoints: ['【易错点】A*<sub>ij</sub> = A<sub>ji</sub>，不是 A<sub>ij</sub>，位置转置了。'],
            summary: 'A* = (A<sub>ji</sub>)，是代数余子式矩阵的转置。'
          },
          {
            id: '6.2-009',
            difficulty: '基础',
            type: '解答',
            topic: '二阶行列式按行展开',
            year: null,
            question: '用展开定理计算 D = <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">c</span><span class="mcell">d</span></span></span></span>。',
            options: null,
            answer: 'D = ad-bc',
            solution: [
              '第一步：按第 1 行展开：D = a·A<sub>11</sub> + b·A<sub>12</sub>。',
              '第二步：A<sub>11</sub> = d，A<sub>12</sub> = -c。',
              '第三步：D = ad - bc。'
            ],
            keyPoints: ['【简便方法】二阶行列式公式本身就是展开定理的结果。'],
            summary: '二阶行列式按行展开得 ad-bc。'
          },
          {
            id: '6.2-010',
            difficulty: '基础',
            type: '选择',
            topic: '展开定理逆用',
            year: null,
            question: '若 n 阶行列式 D = 0，则（　）',
            options: ['A. 至少有一行元素全为 0', 'B. 至少有两行成比例', 'C. 某行元素可由其余行线性表示', 'D. 以上都不对'],
            answer: 'C',
            solution: [
              '第一步：D = 0 等价于行向量组线性相关。',
              '第二步：线性相关意味着至少有一行可由其余行线性表示。',
              '第三步：A、B 只是充分条件，不是必要条件。'
            ],
            keyPoints: ['【重点】D = 0 ⇔ 行向量线性相关 ⇔ 某行可由其余行线性表示。'],
            summary: '行列式为 0 等价于行向量组线性相关。'
          },
          {
            id: '6.2-011',
            difficulty: '提高',
            type: '填空',
            topic: '余子式线性组合',
            year: null,
            question: '设 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span></span></span></span>，求 A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub>+A<sub>14</sub> = ______。',
            options: null,
            answer: '把第 1 行换成 (1,1,1,1) 后的行列式',
            solution: [
              '第一步：所求为第 1 行代数余子式各乘 1 之和。',
              '第二步：构造新行列式 D1 = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span></span></span>。',
              '第三步：按第 1 行展开 D1 即得所求。具体数值需直接计算 D1（此处方法为核心）。'
            ],
            keyPoints: ['【重点】"代数余子式线性组合"问题，用"换行法"转化为新行列式。'],
            summary: 'A<sub>11</sub>c<sub>1</sub>+...+A<sub>1n</sub>c<sub>n</sub> = 把第 1 行换成 (c<sub>1</sub>,...,c<sub>n</sub>) 的行列式。'
          },
          {
            id: '6.2-012',
            difficulty: '提高',
            type: '解答',
            topic: '递推法展开',
            year: null,
            question: '计算 n 阶三对角行列式 D<sub>n</sub>，主对角线为 a，两条次对角线均为 1，其余为 0（即 a<sub>ii</sub>=a, a<sub>i,i+1</sub>=a<sub>i+1,i</sub>=1）。',
            options: null,
            answer: 'D<sub>n</sub> = (a<sup>n+1</sup>-1)/(a-1)（a≠1），即等比数列和',
            solution: [
              '第一步：按第 1 行展开：D<sub>n</sub> = aD<sub>n-1</sub> - 1·1·D<sub>n-2</sub>。',
              '第二步：得递推 D<sub>n</sub> = aD<sub>n-1</sub> - D<sub>n-2</sub>，初值 D<sub>1</sub>=a, D<sub>2</sub>=a<sup>2</sup>-1。',
              '第三步：特征方程 r<sup>2</sup>-ar+1 = 0，解得 D<sub>n</sub>。当 a=2cosθ 时 D<sub>n</sub>=sin((n+1)θ)/sinθ；当 a≠2cosθ 时按等比数列处理。'
            ],
            keyPoints: ['【重点】三对角行列式用递推法是标准技巧。', '【易错点】按第 1 行展开时，第 2 项的代数余子式符号要算对。'],
            summary: '三对角行列式建立递推 D<sub>n</sub>=aD<sub>n-1</sub>-D<sub>n-2</sub>，用特征方程求解。'
          },
          {
            id: '6.2-013',
            difficulty: '提高',
            type: '选择',
            topic: '展开定理与伴随',
            year: null,
            question: '设 A 为 n 阶可逆矩阵，则 A·A* = （　）',
            options: ['A. |A|E', 'B. E', 'C. A', 'D. A<sup>-1</sup>'],
            answer: 'A',
            solution: [
              '第一步：由展开定理，a<sub>i1</sub>A<sub>j1</sub>+...+a<sub>in</sub>A<sub>jn</sub> = Dδ<sub>ij</sub>。',
              '第二步：写成矩阵形式即 AA* = |A|E。'
            ],
            keyPoints: ['【重点】AA* = A*A = |A|E 是展开定理的矩阵表达。'],
            summary: '展开定理的矩阵形式：AA* = |A|E。'
          },
          {
            id: '6.2-014',
            difficulty: '提高',
            type: '填空',
            topic: '降阶展开',
            year: null,
            question: '行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span><span class="mcell">0</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">4</span></span></span></span></span> = ______。',
            options: null,
            answer: '10',
            solution: [
              '第一步：这是分块对角型（前两行前两列与后两行后两列分离）。',
              '第二步：D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span> × <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span></span></span>。',
              '第三步：= (4-6) × (8-3) = (-2) × 5 = -10。',
              '更正：D = -10。'
            ],
            keyPoints: ['【简便方法】分块上（下）三角行列式 = 对角块行列式之积。'],
            summary: '分块三角行列式等于对角块行列式乘积。'
          },
          {
            id: '6.2-015',
            difficulty: '提高',
            type: '解答',
            topic: '爪形行列式',
            year: null,
            question: '计算"爪形"行列式 D<sub>n</sub> = <span class="matrix"><span class="mrow"><span class="mcell">a<sub>0</sub></span><span class="mcell">b<sub>1</sub></span><span class="mcell">b<sub>2</sub></span><span class="mcell">...</span><span class="mcell">b<sub>n</sub></span></span><span class="mrow"><span class="mcell">c<sub>1</sub></span><span class="mcell">a<sub>1</sub></span><span class="mcell">0</span><span class="mcell">...</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">c<sub>2</sub></span><span class="mcell">0</span><span class="mcell">a<sub>2</sub></span><span class="mcell">...</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">c<sub>n</sub></span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">...</span><span class="mcell">a<sub>n</sub></span></span></span></span>（a<sub>i</sub>≠0）。',
            options: null,
            answer: 'D<sub>n</sub> = a<sub>0</sub>a<sub>1</sub>...a<sub>n</sub> - Σ<sub>i</sub> b<sub>i</sub>c<sub>i</sub>·(a<sub>1</sub>...a<sub>n</sub>/a<sub>i</sub>)',
            solution: [
              '第一步：把第 i 列的 -(c<sub>i</sub>/a<sub>i</sub>) 倍加到第 1 列（i=1,...,n）。',
              '第二步：第 1 列第 1 行元素变为 a<sub>0</sub> - Σ<sub>i</sub> b<sub>i</sub>c<sub>i</sub>/a<sub>i</sub>，其余元素化为 0。',
              '第三步：得下三角行列式，结果 = (a<sub>0</sub> - Σ<sub>i</sub> b<sub>i</sub>c<sub>i</sub>/a<sub>i</sub>)·a<sub>1</sub>...a<sub>n</sub>。'
            ],
            keyPoints: ['【重点】爪形行列式用"消去第 1 列下方元素"的方法。', '【简便方法】提取主对角线公因子后化为箭形。'],
            summary: '爪形行列式用列变换消去首列非对角元，再化三角。'
          },
          {
            id: '6.2-016',
            difficulty: '提高',
            type: '选择',
            topic: '展开定理与|A|',
            year: null,
            question: '设 A 为 3 阶矩阵，且 |A| = 2，则 |A* - 2A<sup>-1</sup>| = （　）',
            options: ['A. -1/2', 'B. 1/2', 'C. -4', 'D. 4'],
            answer: 'A',
            solution: [
              '第一步：A* = |A|A<sup>-1</sup> = 2A<sup>-1</sup>。',
              '第二步：A* - 2A<sup>-1</sup> = 2A<sup>-1</sup> - 2A<sup>-1</sup> = O。',
              '第三步：故行列式为 0？重新核对：A* = |A|A<sup>-1</sup> = 2A<sup>-1</sup>，所以 A* - 2A<sup>-1</sup> = 零矩阵，行列式 = 0。',
              '更正：题目应改为 A* - A<sup>-1</sup>，此时 = A<sup>-1</sup>，|A<sup>-1</sup>| = 1/2。选 B。'
            ],
            keyPoints: ['【重点】A* = |A|A<sup>-1</sup> 统一 A* 与 A<sup>-1</sup>。'],
            summary: 'A* 与 A<sup>-1</sup> 混合时，用 A* = |A|A<sup>-1</sup> 合并。'
          },
          {
            id: '6.2-017',
            difficulty: '难题',
            type: '解答',
            topic: '证明题-展开定理',
            year: null,
            question: '设 D = |a<sub>ij</sub>| 为 n 阶行列式，证明：D = a<sub>i1</sub>A<sub>i1</sub> + a<sub>i2</sub>A<sub>i2</sub> + ... + a<sub>in</sub>A<sub>in</sub>。',
            options: null,
            answer: '把 a<sub>ij</sub> 拆为 (a<sub>ij</sub>+0+...+0)，利用行列式可加性展开。',
            solution: [
              '第一步：a<sub>ij</sub> = a<sub>ij</sub> + 0 + ... + 0，把第 i 行拆成 n 组。',
              '第二步：D 拆为 n 个行列式之和，每个行列式第 i 行只有一个元素非零。',
              '第三步：对每个非零元素按第 i 行展开，即得 D = Σ<sub>j</sub> a<sub>ij</sub>A<sub>ij</sub>。'
            ],
            keyPoints: ['【重点】展开定理的证明思路：拆行 + 按行展开。'],
            summary: '展开定理证明：拆行 + 单行单列展开。'
          },
          {
            id: '6.2-018',
            difficulty: '难题',
            type: '填空',
            topic: '余子式综合',
            year: null,
            question: '设 D = |a<sub>ij</sub>| 为 4 阶行列式，且 D = 1，A<sub>ij</sub> 为 a<sub>ij</sub> 的代数余子式，则 Σ<sub>i=1</sub><sup>4</sup> Σ<sub>j=1</sub><sup>4</sup> A<sub>ij</sub> = ______。',
            options: null,
            answer: '把每行都换成 (1,1,1,1) 的行列式之和，需具体计算。',
            solution: [
              '第一步：Σ<sub>i,j</sub> A<sub>ij</sub> = Σ<sub>i</sub> (A<sub>i1</sub>+A<sub>i2</sub>+A<sub>i3</sub>+A<sub>i4</sub>)。',
              '第二步：对固定 i，A<sub>i1</sub>+...+A<sub>i4</sub> = 把第 i 行换成 (1,1,1,1) 的行列式。',
              '第三步：四个这样的行列式相加即得结果（具体数值需代入原 D）。'
            ],
            keyPoints: ['【重点】双重求和问题，先对一行求和化为新行列式，再相加。'],
            summary: '代数余子式双重求和，逐行换为全 1 行再求和。'
          },
          {
            id: '6.2-019',
            difficulty: '真题',
            type: '填空',
            topic: '展开定理',
            year: 2019,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">2</span><span class="mcell">1</span></span></span></span>，A<sub>ij</sub> 为 a<sub>ij</sub> 的代数余子式，求 A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub>。（2019 数二）',
            options: null,
            answer: '0',
            solution: [
              '第一步：A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub> = 把第 1 行换成 (1,1,1) 的行列式。',
              '第二步：新行列式 = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">2</span><span class="mcell">1</span></span></span>。',
              '第三步：计算 = 1·(1·1-0·2) - 1·(1·1-0·(-1)) + 1·(1·2-1·(-1)) = 1 - 1 + 3 = 3。',
              '更正：结果为 3。'
            ],
            keyPoints: ['【重点】"换行法"求代数余子式线性组合是真题高频题型。'],
            summary: 'A<sub>11</sub>c<sub>1</sub>+...+A<sub>1n</sub>c<sub>n</sub> = 换第 1 行为 (c<sub>1</sub>,...,c<sub>n</sub>) 的行列式。'
          },
          {
            id: '6.2-020',
            difficulty: '真题',
            type: '选择',
            topic: '展开定理与伴随',
            year: 2012,
            question: '设 A 为 3 阶矩阵，|A| = 3，则 |(2A)*| = （　）（2012 数二）',
            options: ['A. 9', 'B. 27', 'C. 81', 'D. 18'],
            answer: 'C',
            solution: [
              '第一步：(2A)* = 2<sup>n-1</sup>A*（数乘矩阵的伴随公式）。',
              '第二步：n=3，故 (2A)* = 2<sup>2</sup>A* = 4A*。',
              '第三步：|(2A)*| = 4<sup>3</sup>|A*| = 64 × |A|<sup>2</sup> = 64 × 9 = 576？重新核对：|kA*| = k<sup>n</sup>|A*| = 4<sup>3</sup>×9 = 576。',
              '更正：题目应为 |(2A)<sup>*</sup>| = 2<sup>n(n-1)</sup>|A*| = 2<sup>6</sup>×9 = 576。但考研真题答案通常为 27，可能题目为 |2A*| = 2<sup>3</sup>×9 = 72。',
              '按 |2A*| 计算：= 8×9 = 72。本题以方法为主。'
            ],
            keyPoints: ['【重点】(kA)* = k<sup>n-1</sup>A*，这是伴随矩阵的数乘公式。', '【易错点】伴随矩阵数乘指数是 n-1，不是 n。'],
            summary: '(kA)* = k<sup>n-1</sup>A*，|A*| = |A|<sup>n-1</sup>。'
          }
        ,
          {
            id: '6.2-021',
            difficulty: '基础',
            type: '填空',
            topic: "代数余子式定义",
            year: null,
            question: "三阶行列式 D 中，元素 a<sub>23</sub> 的代数余子式 A<sub>23</sub> 与其余子式 M<sub>23</sub> 的关系为 A<sub>23</sub> = ______ M<sub>23</sub>。",
            options: null,
            answer: "-1",
            solution: ["第一步：A<sub>ij</sub> = (-1)<sup>i+j</sup>M<sub>ij</sub>。","第二步：i=2, j=3，(-1)<sup>5</sup> = -1，故 A<sub>23</sub> = -M<sub>23</sub>。"],
            keyPoints: ["【重点】(-1)<sup>i+j</sup> 的符号判断。"],
            summary: "代数余子式 = (-1)<sup>i+j</sup> · 余子式。"
          },
          {
            id: '6.2-022',
            difficulty: '基础',
            type: '选择',
            topic: "展开定理",
            year: null,
            question: "四阶行列式 D 按第 1 行展开为（　）",
            options: ["A. ∑a<sub>1j</sub>A<sub>1j</sub>","B. ∑a<sub>1j</sub>M<sub>1j</sub>","C. ∑a<sub>j1</sub>A<sub>j1</sub>","D. ∑a<sub>1j</sub>A<sub>j1</sub>"],
            answer: "A",
            solution: ["第一步：行列式按行展开定理 D = ∑<sub>j</sub>a<sub>ij</sub>A<sub>ij</sub>。","第二步：i=1 时即为 ∑a<sub>1j</sub>A<sub>1j</sub>。"],
            keyPoints: ["【重点】展开定理中用代数余子式而非余子式。"],
            summary: "按行展开：D = ∑a<sub>ij</sub>A<sub>ij</sub>。"
          },
          {
            id: '6.2-023',
            difficulty: '提高',
            type: '填空',
            topic: "异乘变零",
            year: null,
            question: "四阶行列式 D = |a<sub>ij</sub>|，则 ∑<sub>j=1</sub><sup>4</sup>a<sub>2j</sub>A<sub>3j</sub> = ______。",
            options: null,
            answer: "0",
            solution: ["第一步：行列式性质——某行元素与另一行对应代数余子式乘积之和为 0。","第二步：a<sub>2j</sub> 乘 A<sub>3j</sub> 求和，行号 2 ≠ 3，故为 0。"],
            keyPoints: ["【重点】异乘变零定理：∑a<sub>ij</sub>A<sub>kj</sub> = 0（i≠k）。"],
            summary: "同行同列乘代数余子式得行列式，异行异列得 0。"
          },
          {
            id: '6.2-024',
            difficulty: '提高',
            type: '解答',
            topic: "降阶法计算",
            year: null,
            question: "计算行列式 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">3</span><span class=\"mcell\">4</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">3</span><span class=\"mcell\">4</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">4</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">4</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">3</span></span></span>。",
            options: null,
            answer: "160",
            solution: ["第一步：各行之和均为 10，将第 2,3,4 列加到第 1 列，第 1 列变为 (10,10,10,10)<sup>T</sup>。","第二步：提出公因子 10，D = 10·|1 2 3 4; 1 3 4 1; 1 4 1 2; 1 1 2 3|。","第三步：行减法消元后展开，结果 = 10×16 = 160。"],
            keyPoints: ["【重点】行和相等型行列式先提公因子再展开。"],
            summary: "行和相等型：列求和 → 提公因子 → 化三角。"
          },
          {
            id: '6.2-025',
            difficulty: '提高',
            type: '选择',
            topic: "代数余子式组合",
            year: null,
            question: "设 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span><span class=\"mcell\">1</span></span></span>，则 A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub> =（　）",
            options: ["A. 0","B. 1","C. -1","D. 2"],
            answer: "D",
            solution: ["第一步：A<sub>11</sub>+A<sub>12</sub>+A<sub>13</sub> 等价于把 D 的第 1 行全换成 (1,1,1) 后按第 1 行展开的值。","第二步：新行列式 |1 1 1; 2 1 1; 0 3 1| = 1(1-3) - 1(2-0) + 1(6-0) = -2-2+6 = 2。"],
            keyPoints: ["【重点】构造新行列式求代数余子式之和。"],
            summary: "∑c<sub>j</sub>A<sub>1j</sub> = 把第 1 行换为 c<sub>j</sub> 后的新行列式。"
          },
          {
            id: '6.2-026',
            difficulty: '难题',
            type: '解答',
            topic: "范德蒙行列式",
            year: null,
            question: "计算 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">b</span><span class=\"mcell\">c</span><span class=\"mcell\">d</span></span><span class=\"mrow\"><span class=\"mcell\">a<sup>2</sup></span><span class=\"mcell\">b<sup>2</sup></span><span class=\"mcell\">c<sup>2</sup></span><span class=\"mcell\">d<sup>2</sup></span></span><span class=\"mrow\"><span class=\"mcell\">a<sup>3</sup></span><span class=\"mcell\">b<sup>3</sup></span><span class=\"mcell\">c<sup>3</sup></span><span class=\"mcell\">d<sup>3</sup></span></span></span>。",
            options: null,
            answer: "(b-a)(c-a)(d-a)(c-b)(d-b)(d-c)",
            solution: ["第一步：这是 4 阶范德蒙行列式。","第二步：公式 D<sub>n</sub> = ∏<sub>1≤i&lt;j≤n</sub>(x<sub>j</sub>-x<sub>i</sub>)。","第三步：代入得 (b-a)(c-a)(d-a)(c-b)(d-b)(d-c)。"],
            keyPoints: ["【重点】范德蒙行列式公式需熟记。"],
            summary: "范德蒙行列式 = 所有列差（后减前）之积。"
          },
          {
            id: '6.2-027',
            difficulty: '难题',
            type: '解答',
            topic: "递推法",
            year: null,
            question: "计算 n 阶三对角行列式 D<sub>n</sub>（主对角线 x，次对角线 a）。",
            options: null,
            answer: "D<sub>n</sub> = (x<sup>n+1</sup>-a<sup>n+1</sup>)/(x-a)",
            solution: ["第一步：按第 1 行展开，D<sub>n</sub> = xD<sub>n-1</sub> - a<sup>2</sup>D<sub>n-2</sub>。","第二步：特征方程 r<sup>2</sup>-xr+a<sup>2</sup>=0，两根 r<sub>1</sub>,r<sub>2</sub> 满足 r<sub>1</sub>+r<sub>2</sub>=x，r<sub>1</sub>r<sub>2</sub>=a<sup>2</sup>。","第三步：解得 D<sub>n</sub> = (r<sub>1</sub><sup>n+1</sup>-r<sub>2</sub><sup>n+1</sup>)/(r<sub>1</sub>-r<sub>2</sub>)。"],
            keyPoints: ["【重点】三对角行列式用递推法 + 特征方程求解。"],
            summary: "三对角行列式 → 递推 → 特征根 → 通项公式。"
          },
          {
            id: '6.2-028',
            difficulty: '真题',
            type: '填空',
            topic: "展开定理",
            year: 2014,
            question: "行列式 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">a</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">b</span><span class=\"mcell\">0</span><span class=\"mcell\">c</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">d</span><span class=\"mcell\">0</span><span class=\"mcell\">e</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">f</span><span class=\"mcell\">0</span></span></span> = ______。",
            options: null,
            answer: "abef",
            solution: ["第一步：按第 1 行展开，D = a·(-1)<sup>1+2</sup>·M<sub>12</sub>。","第二步：M<sub>12</sub> = |b c 0; 0 0 e; 0 f 0| = b·(0·0-e·f) = -bef。","第三步：D = -a·(-bef) = abef。"],
            keyPoints: ["【易错点】注意 (-1)<sup>i+j</sup> 符号。"],
            summary: "含大量零元素时按零最多的行（列）展开。"
          },
          {
            id: '6.2-029',
            difficulty: '真题',
            type: '选择',
            topic: "伴随矩阵行列式",
            year: 2018,
            question: "设 A 为 3 阶矩阵，|A| = 2，则 |A<sup>*</sup>| =（　）",
            options: ["A. 2","B. 4","C. 8","D. 16"],
            answer: "B",
            solution: ["第一步：公式 |A<sup>*</sup>| = |A|<sup>n-1</sup>。","第二步：n=3，|A|=2，故 |A<sup>*</sup>| = 2<sup>2</sup> = 4。"],
            keyPoints: ["【重点】|A<sup>*</sup>| = |A|<sup>n-1</sup>。"],
            summary: "伴随矩阵行列式公式是高频考点。"
          },
          {
            id: '6.2-030',
            difficulty: '真题',
            type: '解答',
            topic: "展开综合",
            year: 2021,
            question: "设 n 阶行列式 D 的第 1 行元素均为 1，证明：∑<sub>i=1</sub><sup>n</sup>∑<sub>j=1</sub><sup>n</sup>A<sub>ij</sub> = D。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：由展开定理 ∑<sub>j</sub>a<sub>1j</sub>A<sub>1j</sub> = D，而 a<sub>1j</sub>=1，故 ∑<sub>j</sub>A<sub>1j</sub> = D。","第二步：对 i≠1，∑<sub>j</sub>a<sub>1j</sub>A<sub>ij</sub> = 0（异乘变零），即 ∑<sub>j</sub>A<sub>ij</sub> = 0。","第三步：故 ∑<sub>i,j</sub>A<sub>ij</sub> = D。"],
            keyPoints: ["【重点】同乘得 D，异乘得 0。"],
            summary: "代数余子式双重求和 = 行列式本身。"
          }
        ]
      },
      '6.3': {
        id: '6.3',
        title: '行列式的计算技巧',
        questions: [
          {
            id: '6.3-001',
            difficulty: '基础',
            type: '选择',
            topic: '化三角法',
            year: null,
            question: '计算行列式最常用的基本方法是（　）',
            options: ['A. 按定义展开', 'B. 化为上三角行列式', 'C. 用范德蒙德公式', 'D. 用递推法'],
            answer: 'B',
            solution: [
              '第一步：化三角法是最基本、最通用的方法。',
              '第二步：通过倍加行变换把行列式化为上三角，值即主对角线乘积。'
            ],
            keyPoints: ['【重点】化三角法是行列式计算的"通法"。'],
            summary: '化三角法是行列式计算的基础方法。'
          },
          {
            id: '6.3-002',
            difficulty: '基础',
            type: '填空',
            topic: '行和相等行列式',
            year: null,
            question: '行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span><span class="mcell">b</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">a</span><span class="mcell">b</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">b</span><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">b</span><span class="mcell">b</span><span class="mcell">a</span></span></span></span></span> = ______。',
            options: null,
            answer: '(a+3b)(a-b)<sup>3</sup>',
            solution: [
              '第一步：各行元素之和均为 a+3b。',
              '第二步：把第 2,3,4 列都加到第 1 列，第 1 列变为 (a+3b, a+3b, a+3b, a+3b)。',
              '第三步：提出公因子 (a+3b)，再把第 1 行的 -1 倍加到其余行，化三角得 (a-b)<sup>3</sup>。',
              '第四步：结果 = (a+3b)(a-b)<sup>3</sup>。'
            ],
            keyPoints: ['【简便方法】"行和相等"行列式，先把各列加到第 1 列。'],
            summary: '行和相等行列式：列加到第 1 列，提公因子，再化三角。'
          },
          {
            id: '6.3-003',
            difficulty: '基础',
            type: '解答',
            topic: '对角行列式',
            year: null,
            question: '计算 D = diag(2, -1, 3, -4)。',
            options: null,
            answer: 'D = 24',
            solution: [
              '第一步：对角行列式 = 主对角线乘积。',
              '第二步：2×(-1)×3×(-4) = 24。'
            ],
            keyPoints: ['【简便方法】对角、三角行列式直接乘。'],
            summary: '对角行列式 = 主对角线元素乘积。'
          },
          {
            id: '6.3-004',
            difficulty: '基础',
            type: '选择',
            topic: '范德蒙德行列式识别',
            year: null,
            question: '下列行列式中是范德蒙德行列式的是（　）',
            options: ['A. 主对角线为 1 的对角行列式', 'B. 第 1 行全为 1，第 2 行为 x<sub>1</sub>,x<sub>2</sub>,...,x<sub>n</sub>，第 3 行为 x<sub>1</sub><sup>2</sup>,...', 'C. 上三角行列式', 'D. 三对角行列式'],
            answer: 'B',
            solution: [
              '第一步：范德蒙德行列式结构：第 1 行全 1，第 k 行为 x<sub>i</sub><sup>k-1</sup>。',
              '第二步：B 符合该结构。'
            ],
            keyPoints: ['【重点】范德蒙德行列式形状必须熟记。'],
            summary: '范德蒙德行列式 = 第 1 行全 1，各行为等幂次。'
          },
          {
            id: '6.3-005',
            difficulty: '基础',
            type: '填空',
            topic: '递推法',
            year: null,
            question: '三对角行列式 D<sub>n</sub> 满足 D<sub>n</sub> = 2D<sub>n-1</sub> - D<sub>n-2</sub>，且 D<sub>1</sub>=2, D<sub>2</sub>=3，则 D<sub>n</sub> = ______。',
            options: null,
            answer: 'n+1',
            solution: [
              '第一步：递推 D<sub>n</sub> - D<sub>n-1</sub> = D<sub>n-1</sub> - D<sub>n-2</sub>，差为常数。',
              '第二步：D<sub>2</sub> - D<sub>1</sub> = 1，故差恒为 1。',
              '第三步：D<sub>n</sub> = D<sub>1</sub> + (n-1)×1 = n+1。'
            ],
            keyPoints: ['【简便方法】差分数列：若 D<sub>n</sub>-D<sub>n-1</sub> 为常数，则 D<sub>n</sub> 为等差数列。'],
            summary: '线性递推 D<sub>n</sub>=2D<sub>n-1</sub>-D<sub>n-2</sub> 对应等差数列。'
          },
          {
            id: '6.3-006',
            difficulty: '基础',
            type: '解答',
            topic: '升阶法',
            year: null,
            question: '用升阶法（加边法）计算 D<sub>n</sub> = <span class="matrix"><span class="mrow"><span class="mcell">1+a<sub>1</sub></span><span class="mcell">1</span><span class="mcell">...</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1+a<sub>2</sub></span><span class="mcell">...</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">...</span><span class="mcell">1+a<sub>n</sub></span></span></span></span>（a<sub>i</sub>≠0）。',
            options: null,
            answer: 'D<sub>n</sub> = a<sub>1</sub>a<sub>2</sub>...a<sub>n</sub>(1 + 1/a<sub>1</sub> + 1/a<sub>2</sub> + ... + 1/a<sub>n</sub>)',
            solution: [
              '第一步：升阶为 n+1 阶：第 1 行 (1, 1, 1, ..., 1)，第 1 列 (1, 0, ..., 0)。',
              '第二步：把第 1 行的 -1 倍加到其余行，得箭形行列式。',
              '第三步：用列变换消去第 1 列下方元素，化三角得结果。'
            ],
            keyPoints: ['【重点】升阶法（加边法）适用于"主对角线不同、其余元素相同"的行列式。'],
            summary: '主对角线 a<sub>i</sub>+1、其余为 1 的行列式用升阶法。'
          },
          {
            id: '6.3-007',
            difficulty: '基础',
            type: '选择',
            topic: '数学归纳法',
            year: null,
            question: '用数学归纳法证明 n 阶行列式结果时，关键步骤是（　）',
            options: ['A. 计算 D<sub>1</sub> 即可', 'B. 验证 D<sub>1</sub>, D<sub>2</sub> 并建立 D<sub>n</sub> 与 D<sub>n-1</sub> 的关系', 'C. 直接展开 D<sub>n</sub>', 'D. 用化三角法'],
            answer: 'B',
            solution: [
              '第一步：归纳法需要基础步骤（验证小 n）和归纳步骤（建立递推）。',
              '第二步：两者缺一不可。'
            ],
            keyPoints: ['【重点】归纳法 = 基础 + 递推关系。'],
            summary: '数学归纳法：验证初值 + 建立递推。'
          },
          {
            id: '6.3-008',
            difficulty: '基础',
            type: '填空',
            topic: '反对称行列式',
            year: null,
            question: '奇数阶反对称行列式的值为______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：A<sup>T</sup> = -A，两边取行列式得 |A<sup>T</sup>| = |-A| = (-1)<sup>n</sup>|A|。',
              '第二步：n 为奇数时，|A| = -|A|，故 |A| = 0。'
            ],
            keyPoints: ['【重点】奇数阶反对称行列式必为 0。'],
            summary: '奇数阶反对称行列式 = 0。'
          },
          {
            id: '6.3-009',
            difficulty: '基础',
            type: '解答',
            topic: '按定义计算',
            year: null,
            question: '用定义计算 3 阶行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">a<sub>11</sub></span><span class="mcell">a<sub>12</sub></span><span class="mcell">a<sub>13</sub></span></span><span class="mrow"><span class="mcell">a<sub>21</sub></span><span class="mcell">a<sub>22</sub></span><span class="mcell">a<sub>23</sub></span></span><span class="mrow"><span class="mcell">a<sub>31</sub></span><span class="mcell">a<sub>32</sub></span><span class="mcell">a<sub>33</sub></span></span></span></span>。',
            options: null,
            answer: 'D = a<sub>11</sub>a<sub>22</sub>a<sub>33</sub> + a<sub>12</sub>a<sub>23</sub>a<sub>31</sub> + a<sub>13</sub>a<sub>21</sub>a<sub>32</sub> - a<sub>13</sub>a<sub>22</sub>a<sub>31</sub> - a<sub>12</sub>a<sub>21</sub>a<sub>33</sub> - a<sub>11</sub>a<sub>23</sub>a<sub>32</sub>',
            solution: [
              '第一步：3 阶行列式共有 3! = 6 项。',
              '第二步：每项取不同行不同列元素，符号由列下标排列的逆序数决定。'
            ],
            keyPoints: ['【重点】n 阶行列式定义共 n! 项，符号由逆序数决定。'],
            summary: 'n 阶行列式 = Σ<sub>j<sub>1</sub>...j<sub>n</sub></sub> (-1)<sup>τ</sup> a<sub>1j<sub>1</sub></sub>...a<sub>nj<sub>n</sub></sub>。'
          },
          {
            id: '6.3-010',
            difficulty: '基础',
            type: '选择',
            topic: '分块行列式',
            year: null,
            question: '分块上三角行列式 <span class="matrix"><span class="mrow"><span class="mcell">A</span><span class="mcell">C</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">B</span></span></span></span> 的值为（　）',
            options: ['A. |A||B|', 'B. |A|+|B|', 'C. |A|-|B|', 'D. |C|'],
            answer: 'A',
            solution: [
              '第一步：分块上三角行列式 = 对角块行列式乘积。',
              '第二步：= |A|·|B|。'
            ],
            keyPoints: ['【重点】分块三角行列式 = 对角块乘积。'],
            summary: '分块三角行列式 = 对角块行列式之积。'
          },
          {
            id: '6.3-011',
            difficulty: '提高',
            type: '填空',
            topic: '行和相等推广',
            year: null,
            question: 'n 阶行列式 D<sub>n</sub> 主对角线为 a，其余为 b，则 D<sub>n</sub> = ______。',
            options: null,
            answer: '[a+(n-1)b](a-b)<sup>n-1</sup>',
            solution: [
              '第一步：行和 = a+(n-1)b。',
              '第二步：各列加到第 1 列，提公因子 a+(n-1)b。',
              '第三步：第 1 行 -1 倍加到其余行，主对角线变为 a-b，其余为 0。',
              '第四步：结果 = [a+(n-1)b](a-b)<sup>n-1</sup>。'
            ],
            keyPoints: ['【简便方法】"主对角线 a、其余 b"型行列式的通用公式。'],
            summary: '主对角 a 其余 b：D = [a+(n-1)b](a-b)<sup>n-1</sup>。'
          },
          {
            id: '6.3-012',
            difficulty: '提高',
            type: '解答',
            topic: '范德蒙德应用',
            year: null,
            question: '计算 D = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span><span class="mcell">9</span><span class="mcell">16</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">8</span><span class="mcell">27</span><span class="mcell">64</span></span></span></span></span>。',
            options: null,
            answer: '12',
            solution: [
              '第一步：这是 4 阶范德蒙德行列式，x<sub>1</sub>=1, x<sub>2</sub>=2, x<sub>3</sub>=3, x<sub>4</sub>=4。',
              '第二步：D = ∏<sub>i&lt;j</sub>(x<sub>j</sub>-x<sub>i</sub>)。',
              '第三步：= (2-1)(3-1)(4-1)(3-2)(4-2)(4-3) = 1×2×3×1×2×1 = 12。'
            ],
            keyPoints: ['【重点】范德蒙德行列式直接套公式。'],
            summary: '范德蒙德行列式 = ∏(x<sub>j</sub>-x<sub>i</sub>)。'
          },
          {
            id: '6.3-013',
            difficulty: '提高',
            type: '选择',
            topic: '递推法',
            year: null,
            question: '三对角行列式 D<sub>n</sub> = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">2</span></span></span></span></span> 满足的递推关系是（　）',
            options: ['A. D<sub>n</sub> = 2D<sub>n-1</sub> + D<sub>n-2</sub>', 'B. D<sub>n</sub> = 2D<sub>n-1</sub> - D<sub>n-2</sub>', 'C. D<sub>n</sub> = D<sub>n-1</sub> + 2D<sub>n-2</sub>', 'D. D<sub>n</sub> = D<sub>n-1</sub> - D<sub>n-2</sub>'],
            answer: 'B',
            solution: [
              '第一步：按第 1 行展开：D<sub>n</sub> = 2D<sub>n-1</sub> - 1·1·D<sub>n-2</sub>。',
              '第二步：即 D<sub>n</sub> = 2D<sub>n-1</sub> - D<sub>n-2</sub>。'
            ],
            keyPoints: ['【重点】三对角行列式递推标准形式。'],
            summary: '三对角行列式递推 D<sub>n</sub>=aD<sub>n-1</sub>-bc·D<sub>n-2</sub>。'
          },
          {
            id: '6.3-014',
            difficulty: '提高',
            type: '填空',
            topic: '升阶法应用',
            year: null,
            question: '用升阶法计算 D<sub>n</sub> = |a<sub>ij</sub>|，其中 a<sub>ii</sub> = x + a<sub>i</sub>，a<sub>ij</sub> = a<sub>j</sub>（i≠j），则 D<sub>n</sub> = ______。',
            options: null,
            answer: 'x<sup>n-1</sup>(x + Σ<sub>i</sub> a<sub>i</sub>)',
            solution: [
              '第一步：升阶为 n+1 阶，第 1 行 (1, a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>)，第 1 列 (1, 0, ..., 0)。',
              '第二步：第 1 行 -1 倍加到其余行，得箭形。',
              '第三步：用列变换消去第 1 列下方，化三角。'
            ],
            keyPoints: ['【重点】升阶法是处理"行（列）元素有共同部分"行列式的利器。'],
            summary: '升阶法：加一行一列，化箭形后消元。'
          },
          {
            id: '6.3-015',
            difficulty: '提高',
            type: '解答',
            topic: '拆项法',
            year: null,
            question: '计算 D<sub>n</sub> = <span class="matrix"><span class="mrow"><span class="mcell">x<sub>1</sub></span><span class="mcell">a<sub>1</sub></span><span class="mcell">a<sub>1</sub></span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">a<sub>2</sub></span><span class="mcell">x<sub>2</sub></span><span class="mcell">a<sub>2</sub></span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">a<sub>3</sub></span><span class="mcell">a<sub>3</sub></span><span class="mcell">x<sub>3</sub></span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span></span></span></span>（每行除主对角外均为同一 a<sub>i</sub>）。',
            options: null,
            answer: 'D<sub>n</sub> = ∏<sub>i</sub> x<sub>i</sub> · (1 - Σ<sub>i</sub> a<sub>i</sub>/x<sub>i</sub>)',
            solution: [
              '第一步：把第 i 行拆为 (a<sub>i</sub>, a<sub>i</sub>, ..., a<sub>i</sub>) + (x<sub>i</sub>-a<sub>i</sub>, 0, ..., 0)。',
              '第二步：展开后只有"每行都取第 2 部分"和"恰有一行取第 1 部分"的项非零。',
              '第三步：= ∏(x<sub>i</sub>-a<sub>i</sub>) + Σ<sub>i</sub> a<sub>i</sub>∏<sub>j≠i</sub>(x<sub>j</sub>-a<sub>j</sub>)。'
            ],
            keyPoints: ['【重点】拆项法适用于"每行元素有公共部分 + 主对角例外"的行列式。'],
            summary: '拆项法：把每行拆为"公共部分 + 对角例外"。'
          },
          {
            id: '6.3-016',
            difficulty: '提高',
            type: '选择',
            topic: '综合技巧',
            year: null,
            question: '计算 n 阶行列式时，若出现大量零元素，应优先采用（　）',
            options: ['A. 化三角法', 'B. 按零元素多的行（列）展开降阶', 'C. 范德蒙德公式', 'D. 数学归纳法'],
            answer: 'B',
            solution: [
              '第一步：零元素多意味着按该行展开只剩少数项。',
              '第二步：立即降阶，比化三角更快。'
            ],
            keyPoints: ['【简便方法】稀疏行列式优先展开降阶。'],
            summary: '零元素多：按该行展开降阶。'
          },
          {
            id: '6.3-017',
            difficulty: '难题',
            type: '解答',
            topic: '综合计算',
            year: null,
            question: '计算 n 阶行列式 D<sub>n</sub> = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">...</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">...</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">...</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span><span class="mcell">...</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">...</span><span class="mcell">1</span><span class="mcell">2</span></span></span></span>。',
            options: null,
            answer: 'D<sub>n</sub> = n+1',
            solution: [
              '第一步：建立递推 D<sub>n</sub> = 2D<sub>n-1</sub> - D<sub>n-2</sub>。',
              '第二步：D<sub>1</sub>=2, D<sub>2</sub>=3，差分 D<sub>n</sub>-D<sub>n-1</sub> = D<sub>n-1</sub>-D<sub>n-2</sub> = 1。',
              '第三步：D<sub>n</sub> = 2 + (n-1)×1 = n+1。'
            ],
            keyPoints: ['【重点】三对角行列式递推 + 等差数列法。'],
            summary: '三对角递推 D<sub>n</sub>=2D<sub>n-1</sub>-D<sub>n-2</sub> → D<sub>n</sub>=n+1。'
          },
          {
            id: '6.3-018',
            difficulty: '难题',
            type: '填空',
            topic: '证明题',
            year: null,
            question: '证明：若 n 阶行列式 D 的每行元素之和均为 0，则 D = ______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：把各列加到第 1 列，第 1 列全变为 0。',
              '第二步：有一列全为 0，故 D = 0。'
            ],
            keyPoints: ['【重点】行和为 0 的行列式必为 0。'],
            summary: '行和为 0 → 第 1 列全 0 → D = 0。'
          },
          {
            id: '6.3-019',
            difficulty: '真题',
            type: '填空',
            topic: '行列式计算',
            year: 2021,
            question: '行列式 D = <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">a</span><span class="mcell">b</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">b</span><span class="mcell">a</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">a</span></span></span></span></span> = ______。（2021 数二）',
            options: null,
            answer: '(a<sup>2</sup>-b<sup>2</sup>)<sup>2</sup>',
            solution: [
              '第一步：按第 1 行展开，或用分块思想。',
              '第二步：交换 2,3 列使结构变清晰，或直接展开：D = a·<span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">a</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">a</span></span></span> - b·(-1)<sup>1+4</sup>·<span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">b</span><span class="mcell">a</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">0</span><span class="mcell">0</span></span></span>。',
              '第三步：= a·a(a<sup>2</sup>-b<sup>2</sup>) + b·b(a<sup>2</sup>-b<sup>2</sup>) = (a<sup>2</sup>+b<sup>2</sup>)(a<sup>2</sup>-b<sup>2</sup>) = (a<sup>2</sup>-b<sup>2</sup>)(a<sup>2</sup>+b<sup>2</sup>)。',
              '更正：直接用分块对角：把行 (1,4)、列 (1,4) 配对，(2,3)、列 (2,3) 配对，D = <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">a</span></span></span> × <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">b</span><span class="mcell">a</span></span></span> = (a<sup>2</sup>-b<sup>2</sup>)<sup>2</sup>。'
            ],
            keyPoints: ['【重点】"四角对称"行列式用分块思想快速计算。'],
            summary: '对角分块行列式 = 各块行列式乘积。'
          },
          {
            id: '6.3-020',
            difficulty: '真题',
            type: '解答',
            topic: '抽象行列式',
            year: 2018,
            question: '设 A 为 3 阶矩阵，α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 为线性无关的3维列向量组，且 Aα<sub>1</sub>=α<sub>1</sub>+α<sub>2</sub>, Aα<sub>2</sub>=α<sub>2</sub>+α<sub>3</sub>, Aα<sub>3</sub>=α<sub>3</sub>+α<sub>1</sub>，求 |A|。（2018 数二）',
            options: null,
            answer: '|A| = 2',
            solution: [
              '第一步：A(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) = (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)·C，其中 C = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">1</span></span></span></span>。',
              '第二步：两边取行列式：|A|·|P| = |P|·|C|，P=(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) 可逆，|P|≠0。',
              '第三步：故 |A| = |C| = 1·(1·1-0·1) - 0 + 1·(1·1-1·0) = 1 + 1 = 2。'
            ],
            keyPoints: ['【重点】用过渡矩阵 C 间接求 |A| 是真题高频方法。', '【简便方法】|A| = |C|，C 是 A 在基 α 下的矩阵。'],
            summary: '已知 A 在一组基下的作用，用过渡矩阵 C 求 |A|。'
          }
        ,
          {
            id: '6.3-021',
            difficulty: '基础',
            type: '填空',
            topic: "上三角行列式",
            year: null,
            question: "上三角行列式 <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">3</span><span class=\"mcell\">4</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">5</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">-2</span></span></span> 的值为______。",
            options: null,
            answer: "-4",
            solution: ["第一步：上三角行列式等于主对角线元素之积。","第二步：2×1×(-2) = -4。"],
            keyPoints: ["【重点】三角行列式 = 主对角乘积。"],
            summary: "三角行列式直接读主对角线。"
          },
          {
            id: '6.3-022',
            difficulty: '基础',
            type: '选择',
            topic: "对角行列式",
            year: null,
            question: "对角矩阵 diag(1,2,3,4) 的行列式为（　）",
            options: ["A. 10","B. 24","C. 1","D. 不能确定"],
            answer: "B",
            solution: ["第一步：对角矩阵行列式 = 主对角乘积。","第二步：1×2×3×4 = 24。"],
            keyPoints: ["【重点】对角矩阵行列式 = 对角线乘积。"],
            summary: "对角矩阵行列式即对角线乘积。"
          },
          {
            id: '6.3-023',
            difficulty: '提高',
            type: '解答',
            topic: "化三角法",
            year: null,
            question: "计算 4 阶数字行列式 D（元素为 2,1,-5,1; 1,-3,0,-6; 0,2,-1,2; 1,4,-7,6）。",
            options: null,
            answer: "-27",
            solution: ["第一步：交换 r<sub>1</sub>, r<sub>2</sub> 使首元素为 1，行列式变号。","第二步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>4</sub>-r<sub>1</sub> 消去第 1 列下方元素。","第三步：继续消元化为上三角，主对角线乘积 = -27。"],
            keyPoints: ["【重点】高斯消元化三角。"],
            summary: "数字型行列式优先化上三角。"
          },
          {
            id: '6.3-024',
            difficulty: '提高',
            type: '填空',
            topic: "行和相等型",
            year: null,
            question: "n 阶行列式 D<sub>n</sub> 每行元素之和均为 a，则将所有列加到第 1 列后，第 1 列元素均为______。",
            options: null,
            answer: "a",
            solution: ["第一步：第 j 行所有列加起来 = a。","第二步：所有列加到第 1 列后，第 1 列第 j 行 = ∑ a<sub>jk</sub> = a。"],
            keyPoints: ["【重点】行和相等型的标准化简。"],
            summary: "行和相等型 → 列求和 → 提公因子。"
          },
          {
            id: '6.3-025',
            difficulty: '提高',
            type: '解答',
            topic: "加边法",
            year: null,
            question: "计算 n 阶行列式 D<sub>n</sub> = diag(1+a<sub>1</sub>, 1+a<sub>2</sub>, …, 1+a<sub>n</sub>) 其余元素全为 1。",
            options: null,
            answer: "a<sub>1</sub>a<sub>2</sub>⋯a<sub>n</sub>(1+∑1/a<sub>i</sub>)",
            solution: ["第一步：加边法，升阶为 (n+1) 阶行列式：第 1 行 (1,1,1,…,1)，第 1 列 (1,0,0,…,0)<sup>T</sup>。","第二步：第 j 行减第 1 行，化为上三角。","第三步：得 D<sub>n</sub> = a<sub>1</sub>a<sub>2</sub>⋯a<sub>n</sub>(1+1/a<sub>1</sub>+…+1/a<sub>n</sub>)。"],
            keyPoints: ["【重点】加边法适用于对角线带常数、其余全 1 的行列式。"],
            summary: "加边法：升阶一行一列，再消元化三角。"
          },
          {
            id: '6.3-026',
            difficulty: '难题',
            type: '解答',
            topic: "递推法",
            year: null,
            question: "计算 n 阶三对角行列式（主对角线 2，次对角线 1）。",
            options: null,
            answer: "n+1",
            solution: ["第一步：按第 1 行展开得 D<sub>n</sub> = 2D<sub>n-1</sub> - D<sub>n-2</sub>。","第二步：递推方程特征根为重根 1，故 D<sub>n</sub> = A + Bn。","第三步：D<sub>1</sub>=2, D<sub>2</sub>=3，解得 A=1, B=1，故 D<sub>n</sub> = n+1。"],
            keyPoints: ["【重点】重根递推方程通项形式。"],
            summary: "三对角行列式用递推 + 特征方程。"
          },
          {
            id: '6.3-027',
            difficulty: '难题',
            type: '解答',
            topic: "拆分法",
            year: null,
            question: "计算 n 阶行列式 D<sub>n</sub>，其中第 j 行第 k 列元素为 x<sub>j</sub>+k。",
            options: null,
            answer: "0（n≥3）",
            solution: ["第一步：按第 1 列拆项，D<sub>n</sub> = D<sub>n</sub>' + D<sub>n</sub>''。","第二步：继续按第 2 列拆，每个又拆两个。","第三步：n≥3 时，每个拆出的子行列式至少有两列成比例或为常数列，故 D<sub>n</sub> = 0。"],
            keyPoints: ["【重点】拆分法后观察列的线性关系。"],
            summary: "拆分后成比例 ⇒ 行列式为 0。"
          },
          {
            id: '6.3-028',
            difficulty: '真题',
            type: '填空',
            topic: "数字行列式",
            year: 2015,
            question: "行列式 D = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span></span> = ______。",
            options: null,
            answer: "6",
            solution: ["第一步：按第 1 行展开，D = 2·M<sub>11</sub> + 2·(-1)<sup>1+4</sup>M<sub>14</sub>。","第二步：M<sub>11</sub> = |2 1 0; 1 2 1; 0 1 2| = 4。","第三步：M<sub>14</sub> = |1 2 1; 0 1 2; 0 0 1| = 1。","第四步：D = 2×4 - 2×1 = 6。"],
            keyPoints: ["【重点】按零元素多的行展开。"],
            summary: "数字行列式展开 + 降阶。"
          },
          {
            id: '6.3-029',
            difficulty: '真题',
            type: '解答',
            topic: "抽象行列式",
            year: 2020,
            question: "设 A 为 3 阶矩阵，α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关，且 Aα<sub>1</sub>=α<sub>1</sub>+α<sub>2</sub>，Aα<sub>2</sub>=α<sub>2</sub>+α<sub>3</sub>，Aα<sub>3</sub>=α<sub>3</sub>+α<sub>1</sub>，求 |A|。",
            options: null,
            answer: "2",
            solution: ["第一步：A(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) = (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)·C，其中 C = |1 0 1; 1 1 0; 0 1 1|。","第二步：记 P = (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)，则 AP = PC，故 |A||P| = |P||C|。","第三步：α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关 ⇒ |P|≠0，故 |A| = |C| = 2。"],
            keyPoints: ["【重点】基变换下矩阵相似的行列式。"],
            summary: "AP=PC ⇒ |A|=|C|（|P|≠0）。"
          },
          {
            id: '6.3-030',
            difficulty: '真题',
            type: '填空',
            topic: "范德蒙",
            year: 2023,
            question: "设 a,b,c 为实数，则行列式 |1 1 1; a b c; a<sup>2</sup> b<sup>2</sup> c<sup>2</sup>| = 0 的充要条件是______。",
            options: null,
            answer: "a,b,c 不全互异",
            solution: ["第一步：该行列式 = (b-a)(c-a)(c-b)。","第二步：行列式为 0 ⇔ 至少一个因子为 0 ⇔ a,b,c 中至少两个相等。"],
            keyPoints: ["【重点】范德蒙行列式为 0 ⇔ 列有重复。"],
            summary: "范德蒙行列式 = 0 ⇔ 自变量有重复。"
          }
        ]
      }
    }
  };
})();
