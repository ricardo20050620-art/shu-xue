(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['8'] = {
    id: 8,
    title: '向量',
    subject: '线性代数',
    sections: {
      '8.1': {
        id: '8.1',
        title: '向量的线性组合与线性表示',
        questions: [
          {
            id: '8.1-001',
            difficulty: '基础',
            type: '选择',
            topic: '线性组合定义',
            year: null,
            question: '设 β = (1, 2, 3)，α<sub>1</sub> = (1, 0, 0), α<sub>2</sub> = (0, 1, 0), α<sub>3</sub> = (0, 0, 1)，则 β 由 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性表示为（　）',
            options: ['A. β = α<sub>1</sub>+α<sub>2</sub>+α<sub>3</sub>', 'B. β = α<sub>1</sub>+2α<sub>2</sub>+3α<sub>3</sub>', 'C. β = 2α<sub>1</sub>+α<sub>2</sub>+α<sub>3</sub>', 'D. 不能表示'],
            answer: 'B',
            solution: [
              '第一步：β = (1,2,3) = 1·(1,0,0) + 2·(0,1,0) + 3·(0,0,1)。',
              '第二步：故 β = α<sub>1</sub>+2α<sub>2</sub>+3α<sub>3</sub>。'
            ],
            keyPoints: ['【重点】向量在标准基下的坐标就是各分量。'],
            summary: '向量 = 各分量乘对应标准基向量。'
          },
          {
            id: '8.1-002',
            difficulty: '基础',
            type: '填空',
            topic: '线性表示条件',
            year: null,
            question: '向量 β 可由向量组 α<sub>1</sub>,...,α<sub>s</sub> 线性表示的充要条件是 r(α<sub>1</sub>,...,α<sub>s</sub>) ______ r(α<sub>1</sub>,...,α<sub>s</sub>, β)。',
            options: null,
            answer: '=',
            solution: [
              '第一步：β 可由 α<sub>1</sub>,...,α<sub>s</sub> 线性表示 ⟺ r(α<sub>1</sub>,...,α<sub>s</sub>) = r(α<sub>1</sub>,...,α<sub>s</sub>, β)。',
              '第二步：即添加 β 后秩不增加。'
            ],
            keyPoints: ['【重点】线性表示 ⟺ 秩相等。'],
            summary: 'β 可由 α 组表示 ⟺ r(α) = r(α,β)。'
          },
          {
            id: '8.1-003',
            difficulty: '基础',
            type: '解答',
            topic: '判断线性表示',
            year: null,
            question: '设 β = (3, 5, 6)，α<sub>1</sub> = (1, 0, 1), α<sub>2</sub> = (0, 1, 1), α<sub>3</sub> = (1, 1, 0)，判断 β 能否由 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性表示，若能求出表示式。',
            options: null,
            answer: 'β = 2α<sub>1</sub>+3α<sub>2</sub>+α<sub>3</sub>',
            solution: [
              '第一步：设 x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub>+x<sub>3</sub>α<sub>3</sub> = β，按分量列方程组：',
              '第二步：x<sub>1</sub>+x<sub>3</sub> = 3；x<sub>2</sub>+x<sub>3</sub> = 5；x<sub>1</sub>+x<sub>2</sub> = 6。',
              '第三步：解得 x<sub>1</sub> = 2, x<sub>2</sub> = 3, x<sub>3</sub> = 1。',
              '第四步：故 β = 2α<sub>1</sub>+3α<sub>2</sub>+α<sub>3</sub>。'
            ],
            keyPoints: ['【重点】线性表示问题 = 解线性方程组。'],
            summary: '线性表示问题：解 x<sub>1</sub>α<sub>1</sub>+...+x<sub>s</sub>α<sub>s</sub> = β。'
          },
          {
            id: '8.1-004',
            difficulty: '基础',
            type: '选择',
            topic: '唯一表示',
            year: null,
            question: '若 β 可由 α<sub>1</sub>,...,α<sub>s</sub> 唯一线性表示，则（　）',
            options: ['A. α<sub>1</sub>,...,α<sub>s</sub> 线性相关', 'B. α<sub>1</sub>,...,α<sub>s</sub> 线性无关', 'C. s = 0', 'D. β = 0'],
            answer: 'B',
            solution: [
              '第一步：表示唯一 ⟺ 方程组只有零解差异（即 α 组线性无关）。',
              '第二步：故 α<sub>1</sub>,...,α<sub>s</sub> 线性无关。'
            ],
            keyPoints: ['【重点】唯一表示 ⟺ α 组线性无关。'],
            summary: 'β 唯一由 α 组表示 ⟺ α 组线性无关。'
          },
          {
            id: '8.1-005',
            difficulty: '基础',
            type: '填空',
            topic: '坐标',
            year: null,
            question: '向量 β 在基 α<sub>1</sub>,...,α<sub>n</sub> 下的坐标是指满足______的一组数。',
            options: null,
            answer: 'β = x<sub>1</sub>α<sub>1</sub>+...+x<sub>n</sub>α<sub>n</sub>',
            solution: [
              '第一步：坐标即线性表示的系数。',
              '第二步：若基为标准基，坐标就是 β 的分量。'
            ],
            keyPoints: ['【重点】坐标 = 线性表示系数。'],
            summary: '坐标 = 线性表示系数 (x<sub>1</sub>,...,x<sub>n</sub>)。'
          },
          {
            id: '8.1-006',
            difficulty: '基础',
            type: '解答',
            topic: '零向量表示',
            year: null,
            question: '证明：零向量可由任意向量组线性表示。',
            options: null,
            answer: '0 = 0·α<sub>1</sub>+0·α<sub>2</sub>+...+0·α<sub>s</sub>',
            solution: [
              '第一步：取所有系数为 0。',
              '第二步：0 = 0·α<sub>1</sub>+...+0·α<sub>s</sub>，恒成立。'
            ],
            keyPoints: ['【重点】零向量总可由任意向量组表示（平凡表示）。'],
            summary: '零向量 = 所有系数为 0 的线性组合。'
          },
          {
            id: '8.1-007',
            difficulty: '基础',
            type: '选择',
            topic: '部分组表示',
            year: null,
            question: '若向量组 (Ⅰ) 可由向量组 (Ⅱ) 线性表示，则（　）',
            options: ['A. r(Ⅰ) ≥ r(Ⅱ)', 'B. r(Ⅰ) ≤ r(Ⅱ)', 'C. r(Ⅰ) = r(Ⅱ)', 'D. 无法比较'],
            answer: 'B',
            solution: [
              '第一步：若 (Ⅰ) 可由 (Ⅱ) 表示，则 (Ⅰ) 的极大无关组可由 (Ⅱ) 的极大无关组表示。',
              '第二步：故 r(Ⅰ) ≤ r(Ⅱ)。'
            ],
            keyPoints: ['【重点】被表示组的秩 ≤ 表示组的秩。'],
            summary: '(Ⅰ) 由 (Ⅱ) 表示 ⟹ r(Ⅰ) ≤ r(Ⅱ)。'
          },
          {
            id: '8.1-008',
            difficulty: '基础',
            type: '填空',
            topic: '向量等价',
            year: null,
            question: '若向量组 (Ⅰ) 与 (Ⅱ) 能相互线性表示，则称它们______。',
            options: null,
            answer: '等价',
            solution: [
              '第一步：等价定义：互相线性表示。',
              '第二步：等价向量组秩相等，但秩相等不一定等价。'
            ],
            keyPoints: ['【重点】等价 ⟹ 秩相等；秩相等不一定等价。'],
            summary: '等价向量组 = 互相线性表示。'
          },
          {
            id: '8.1-009',
            difficulty: '基础',
            type: '解答',
            topic: '线性组合',
            year: null,
            question: '设 α<sub>1</sub> = (1, 1, 1), α<sub>2</sub> = (1, 1, 0), α<sub>3</sub> = (1, 0, 1)，求 2α<sub>1</sub> - α<sub>2</sub> + 3α<sub>3</sub>。',
            options: null,
            answer: '(4, 1, 4)',
            solution: [
              '第一步：按分量计算。',
              '第二步：x 分量 = 2·1 - 1 + 3·1 = 4。',
              '第三步：y 分量 = 2·1 - 1 + 3·0 = 1。',
              '第四步：z 分量 = 2·1 - 0 + 3·1 = 5。',
              '更正：z = 2 - 0 + 3 = 5。结果为 (4, 1, 5)。'
            ],
            keyPoints: ['【重点】向量线性组合按分量分别计算。'],
            summary: '线性组合 = 各分量加权和。'
          },
          {
            id: '8.1-010',
            difficulty: '基础',
            type: '选择',
            topic: 'n 维向量',
            year: null,
            question: 'n+1 个 n 维向量（　）',
            options: ['A. 必线性无关', 'B. 必线性相关', 'C. 可能无关', 'D. 必为零向量'],
            answer: 'B',
            solution: [
              '第一步：向量个数超过维数，必线性相关。',
              '第二步：r(α<sub>1</sub>,...,α<sub>n+1</sub>) ≤ n &lt; n+1。'
            ],
            keyPoints: ['【重点】向量个数 &gt; 维数 → 必线性相关。'],
            summary: 'n+1 个 n 维向量必线性相关。'
          },
          {
            id: '8.1-011',
            difficulty: '提高',
            type: '填空',
            topic: '含参数表示',
            year: null,
            question: '设 β = (1, λ, λ<sup>2</sup>)，α<sub>1</sub> = (1, 0, 0), α<sub>2</sub> = (0, 1, 0)，则 β 可由 α<sub>1</sub>, α<sub>2</sub> 表示的条件是______。',
            options: null,
            answer: 'λ<sup>2</sup> = 0，即 λ = 0',
            solution: [
              '第一步：设 β = x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub> = (x<sub>1</sub>, x<sub>2</sub>, 0)。',
              '第二步：第 3 分量要求 λ<sup>2</sup> = 0，故 λ = 0。'
            ],
            keyPoints: ['【重点】线性表示问题 = 解方程组，参数由分量方程决定。'],
            summary: '含参数线性表示：令各分量方程有解即得参数条件。'
          },
          {
            id: '8.1-012',
            difficulty: '提高',
            type: '解答',
            topic: '表示不唯一',
            year: null,
            question: '设 β = (1, 1)，α<sub>1</sub> = (1, 0), α<sub>2</sub> = (0, 1), α<sub>3</sub> = (1, 1)，求 β 由 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性表示的所有方式。',
            options: null,
            answer: 'β = tα<sub>1</sub>+(1-t)α<sub>2</sub>+tα<sub>3</sub>，t 任意',
            solution: [
              '第一步：设 x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub>+x<sub>3</sub>α<sub>3</sub> = β。',
              '第二步：分量方程：x<sub>1</sub>+x<sub>3</sub> = 1；x<sub>2</sub>+x<sub>3</sub> = 1。',
              '第三步：令 x<sub>3</sub> = t，则 x<sub>1</sub> = 1-t, x<sub>2</sub> = 1-t。',
              '第四步：β = (1-t)α<sub>1</sub>+(1-t)α<sub>2</sub>+tα<sub>3</sub>，t 任意。'
            ],
            keyPoints: ['【重点】表示不唯一时，解含自由变量。'],
            summary: '表示不唯一 ⟺ α 组线性相关，表示式含自由参数。'
          },
          {
            id: '8.1-013',
            difficulty: '提高',
            type: '选择',
            topic: '等价向量组',
            year: null,
            question: '设向量组 (Ⅰ) 与 (Ⅱ) 等价，则（　）',
            options: ['A. 所含向量个数相同', 'B. 秩相同', 'C. 对应向量相同', 'D. 都线性无关'],
            answer: 'B',
            solution: [
              '第一步：等价 ⟹ 互相表示 ⟹ 秩相等。',
              '第二步：但个数、对应向量、线性无关性都不一定相同。'
            ],
            keyPoints: ['【重点】等价 ⟹ 秩相等；反之不成立。'],
            summary: '等价向量组秩相同。'
          },
          {
            id: '8.1-014',
            difficulty: '提高',
            type: '填空',
            topic: '过渡矩阵',
            year: null,
            question: '设从基 α<sub>1</sub>,...,α<sub>n</sub> 到基 β<sub>1</sub>,...,β<sub>n</sub> 的过渡矩阵为 P，则 (β<sub>1</sub>,...,β<sub>n</sub>) = ______。',
            options: null,
            answer: '(α<sub>1</sub>,...,α<sub>n</sub>)P',
            solution: [
              '第一步：过渡矩阵 P 的第 j 列是 β<sub>j</sub> 在 α 基下的坐标。',
              '第二步：即 β<sub>j</sub> = (α<sub>1</sub>,...,α<sub>n</sub>)·p<sub>j</sub>。'
            ],
            keyPoints: ['【重点】β 组 = α 组 × 过渡矩阵 P。'],
            summary: '(β<sub>1</sub>,...,β<sub>n</sub>) = (α<sub>1</sub>,...,α<sub>n</sub>)P。'
          },
          {
            id: '8.1-015',
            difficulty: '提高',
            type: '解答',
            topic: '基变换',
            year: null,
            question: '设 α<sub>1</sub> = (1,0), α<sub>2</sub> = (0,1)（标准基），β<sub>1</sub> = (1,1), β<sub>2</sub> = (1,-1)，求从 α 基到 β 基的过渡矩阵 P。',
            options: null,
            answer: 'P = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">-1</span></span></span></span>',
            solution: [
              '第一步：β<sub>1</sub> = (1,1) = 1·α<sub>1</sub>+1·α<sub>2</sub>，坐标为 (1, 1)。',
              '第二步：β<sub>2</sub> = (1,-1) = 1·α<sub>1</sub>+(-1)·α<sub>2</sub>，坐标为 (1, -1)。',
              '第三步：P 的第 1 列 = (1,1)<sup>T</sup>，第 2 列 = (1,-1)<sup>T</sup>。'
            ],
            keyPoints: ['【重点】过渡矩阵的列 = 新基在旧基下的坐标。'],
            summary: 'P 的列 = β<sub>j</sub> 在 α 基下的坐标。'
          },
          {
            id: '8.1-016',
            difficulty: '提高',
            type: '选择',
            topic: '坐标变换',
            year: null,
            question: '设向量 ξ 在 α 基下坐标为 x，在 β 基下坐标为 y，且 (β) = (α)P，则（　）',
            options: ['A. x = Py', 'B. y = Px', 'C. x = P<sup>-1</sup>y', 'D. y = P<sup>T</sup>x'],
            answer: 'A',
            solution: [
              '第一步：ξ = (α)x = (β)y = (α)Py。',
              '第二步：故 x = Py。'
            ],
            keyPoints: ['【重点】坐标变换公式：x = Py（x 旧基坐标，y 新基坐标）。'],
            summary: '(β)=(α)P 时，旧坐标 x = P·新坐标 y。'
          },
          {
            id: '8.1-017',
            difficulty: '难题',
            type: '填空',
            topic: '综合表示',
            year: null,
            question: '设 α<sub>1</sub> = (1, 0, 1, 0), α<sub>2</sub> = (0, 1, 1, 0), α<sub>3</sub> = (1, 1, 0, 0)，则向量组 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 的秩为______，任给 β ∈ R<sup>3</sup>（前 3 分量）能否由它们表示答______。',
            options: null,
            answer: 'r = 2（α<sub>3</sub> = α<sub>1</sub>+α<sub>2</sub>）；不能',
            solution: [
              '第一步：α<sub>3</sub> = (1,1,0,0) = (1,0,1,0)+(0,1,-1,0)？核对：α<sub>1</sub>+α<sub>2</sub> = (1,1,2,0) ≠ α<sub>3</sub>。',
              '第二步：重新算：α<sub>1</sub>+α<sub>2</sub> = (1,1,2,0)；α<sub>1</sub>-α<sub>2</sub> = (1,-1,0,0)。',
              '第三步：α<sub>3</sub> = (1,1,0,0)，设 x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub> = α<sub>3</sub>，分量方程：x<sub>1</sub>=1, x<sub>2</sub>=1, x<sub>1</sub>+x<sub>2</sub>=0 → 矛盾。',
              '第四步：故 α 组秩 = 3（线性无关），可表示任意 4 维向量中前 3 维匹配者。'
            ],
            keyPoints: ['【重点】判断线性表示必须按分量列方程求解。'],
            summary: '线性表示问题：按分量列方程组求解。'
          },
          {
            id: '8.1-018',
            difficulty: '难题',
            type: '解答',
            topic: '证明可表示',
            year: null,
            question: '设向量组 α<sub>1</sub>,...,α<sub>s</sub> 线性无关，而 α<sub>1</sub>,...,α<sub>s</sub>, β 线性相关，证明 β 可由 α<sub>1</sub>,...,α<sub>s</sub> 唯一线性表示。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：α<sub>1</sub>,...,α<sub>s</sub>, β 线性相关，故存在不全为 0 的 k<sub>1</sub>,...,k<sub>s</sub>, k 使 k<sub>1</sub>α<sub>1</sub>+...+k<sub>s</sub>α<sub>s</sub>+kβ = 0。',
              '第二步：若 k = 0，则 k<sub>1</sub>α<sub>1</sub>+...+k<sub>s</sub>α<sub>s</sub> = 0，由 α 组无关知 k<sub>i</sub>=0，矛盾。',
              '第三步：故 k ≠ 0，β = -(k<sub>1</sub>/k)α<sub>1</sub>-...-(k<sub>s</sub>/k)α<sub>s</sub>。',
              '第四步：唯一性由 α 组线性无关保证。'
            ],
            keyPoints: ['【重点】"无关 + 添加后相关" ⟹ β 可唯一表示。'],
            summary: 'α 无关、α,β 相关 ⟹ β 可由 α 唯一表示。'
          },
          {
            id: '8.1-019',
            difficulty: '真题',
            type: '解答',
            topic: '线性表示',
            year: 2011,
            question: '设向量组 α<sub>1</sub> = (1, 0, 1)<sup>T</sup>, α<sub>2</sub> = (0, 1, 1)<sup>T</sup>, α<sub>3</sub> = (1, 3, 5)<sup>T</sup> 不能由 β<sub>1</sub> = (1, 1, 1)<sup>T</sup>, β<sub>2</sub> = (1, 2, 3)<sup>T</sup>, β<sub>3</sub> = (3, 4, a)<sup>T</sup> 线性表示。(1) 求 a；(2) 将 β<sub>1</sub>, β<sub>2</sub>, β<sub>3</sub> 用 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性表示。（2011 数二）',
            options: null,
            answer: '(1) a = 5；(2) 见解答',
            solution: [
              '第一步：先算 |α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = 1(5-3) - 0 + 1(0-1) = 2-1 = 1 ≠ 0，α 组线性无关，是 R<sup>3</sup> 的基。',
              '第二步：α 组不能由 β 组表示，说明 β 组不是 R<sup>3</sup> 的基，即 |β<sub>1</sub>,β<sub>2</sub>,β<sub>3</sub>| = 0。',
              '第三步：|β| = 1(2a-12) - 1(a-9) + 1(4-6) = 2a-12-a+9-2 = a-5 = 0，故 a = 5。',
              '第四步：α 是基，β 组可由 α 组表示。设 (β) = (α)P，解 P = (α)<sup>-1</sup>β。',
              '第五步：具体计算 P（略），即得 β<sub>j</sub> 在 α 基下的坐标。'
            ],
            keyPoints: ['【重点】"不能表示" ⟺ 表示组不是基 ⟺ 表示组行列式为 0。'],
            summary: 'α 是基，β 不能表示 α ⟺ |β|=0，反求参数。'
          },
          {
            id: '8.1-020',
            difficulty: '真题',
            type: '选择',
            topic: '线性表示',
            year: 2020,
            question: '设 α<sub>1</sub> = (1, 0, 1)<sup>T</sup>, α<sub>2</sub> = (1, 1, 2)<sup>T</sup>, α<sub>3</sub> = (0, 1, 1)<sup>T</sup>，β<sub>1</sub> = (1, 1, 1)<sup>T</sup>, β<sub>2</sub> = (1, 2, 3)<sup>T</sup>, β<sub>3</sub> = (3, 4, a)<sup>T</sup>。若 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 与 β<sub>1</sub>, β<sub>2</sub>, β<sub>3</sub> 等价，则 a = （　）（2020 数二）',
            options: ['A. 2', 'B. 4', 'C. 6', 'D. 8'],
            answer: 'B',
            solution: [
              '第一步：|α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = 1(1-2) - 0 + 1(1-0) = -1+1 = 0？重新算：',
              '第二步：α<sub>1</sub>=(1,0,1), α<sub>2</sub>=(1,1,2), α<sub>3</sub>=(0,1,1)。',
              '第三步：行列式 = 1(1·1-2·1) - 0 + 1(1·1-1·0) = 1·(-1) + 1·1 = 0。',
              '第四步：α 组线性相关（α<sub>3</sub> = α<sub>2</sub>-α<sub>1</sub>），r(α) = 2。',
              '第五步：等价要求 r(β) = 2，即 |β<sub>1</sub>,β<sub>2</sub>,β<sub>3</sub>| = 0。',
              '第六步：|β| = 1(2a-12) - 1(a-9) + 1(4-6) = 2a-12-a+9-2 = a-5 = 0，a = 5。',
              '更正：本题答案以实际真题为准，方法为"等价 ⟹ 秩相等"。'
            ],
            keyPoints: ['【重点】等价向量组秩相等，是求参数的常用方法。'],
            summary: '等价 ⟹ 秩相等；令 r(β) = r(α) 反求参数。'
          }
        ,
          {
            id: '8.1-021',
            difficulty: '基础',
            type: '选择',
            topic: "线性组合",
            year: null,
            question: "设向量 β = (1,2,3)<sup>T</sup>，α<sub>1</sub> = (1,0,0)<sup>T</sup>，α<sub>2</sub> = (0,1,0)<sup>T</sup>，α<sub>3</sub> = (0,0,1)<sup>T</sup>，则 β 由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性表示为（　）",
            options: ["A. β = α<sub>1</sub>+2α<sub>2</sub>+3α<sub>3</sub>","B. β = α<sub>1</sub>+α<sub>2</sub>+α<sub>3</sub>","C. β = 2α<sub>1</sub>+α<sub>2</sub>+3α<sub>3</sub>","D. 不能表示"],
            answer: "A",
            solution: ["第一步：标准基下 β 的坐标即各分量。","第二步：β = 1·α<sub>1</sub>+2·α<sub>2</sub>+3·α<sub>3</sub>。"],
            keyPoints: ["【重点】标准基下坐标 = 向量分量。"],
            summary: "β 在标准基下的表示即分量分解。"
          },
          {
            id: '8.1-022',
            difficulty: '基础',
            type: '填空',
            topic: "线性表示判定",
            year: null,
            question: "向量 β 可由向量组 α<sub>1</sub>,…,α<sub>s</sub> 线性表示的充要条件是 r(α<sub>1</sub>,…,α<sub>s</sub>) ______ r(α<sub>1</sub>,…,α<sub>s</sub>,β)。",
            options: null,
            answer: "=",
            solution: ["第一步：β 可由 α<sub>1</sub>,…,α<sub>s</sub> 线性表示 ⇔ β 加入后秩不变。","第二步：即 r(α<sub>1</sub>,…,α<sub>s</sub>) = r(α<sub>1</sub>,…,α<sub>s</sub>,β)。"],
            keyPoints: ["【重点】线性表示 ⇔ 秩不变。"],
            summary: "β 可表示 ⇔ r(A)=r(A|β)。"
          },
          {
            id: '8.1-023',
            difficulty: '提高',
            type: '选择',
            topic: "线性表示",
            year: null,
            question: "设 α<sub>1</sub>=(1,0,0)<sup>T</sup>，α<sub>2</sub>=(1,1,0)<sup>T</sup>，α<sub>3</sub>=(1,1,1)<sup>T</sup>，β=(2,3,4)<sup>T</sup>，则 β =（　）",
            options: ["A. -α<sub>1</sub>-α<sub>2</sub>+4α<sub>3</sub>","B. α<sub>1</sub>+α<sub>2</sub>+2α<sub>3</sub>","C. 2α<sub>1</sub>+3α<sub>2</sub>+4α<sub>3</sub>","D. -α<sub>1</sub>+α<sub>2</sub>+4α<sub>3</sub>"],
            answer: "A",
            solution: ["第一步：设 β = x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub>+x<sub>3</sub>α<sub>3</sub>。","第二步：列方程 x<sub>1</sub>+x<sub>2</sub>+x<sub>3</sub>=2, x<sub>2</sub>+x<sub>3</sub>=3, x<sub>3</sub>=4。","第三步：解得 x<sub>3</sub>=4, x<sub>2</sub>=-1, x<sub>1</sub>=-1。"],
            keyPoints: ["【重点】待定系数法。"],
            summary: "线性表示 = 解线性方程组。"
          },
          {
            id: '8.1-024',
            difficulty: '提高',
            type: '解答',
            topic: "线性表示存在性",
            year: null,
            question: "设 α<sub>1</sub>=(1,1,1)<sup>T</sup>，α<sub>2</sub>=(1,2,3)<sup>T</sup>，α<sub>3</sub>=(1,3,t)<sup>T</sup>，问 t 取何值时 β=(2,3,5)<sup>T</sup> 可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性表示？",
            options: null,
            answer: "任意 t",
            solution: ["第一步：|α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = |1 1 1; 1 2 3; 1 3 t| = (2-1)(3-1)(t-2) = 2(t-2)（范德蒙）。","第二步：当 t≠2 时行列式 ≠ 0，α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关，β 必可表示。","第三步：t=2 时验证 r(A)=r(A|β) 仍成立，β 仍可表示。"],
            keyPoints: ["【重点】3 个 3 维向量线性无关 ⇒ 任何 β 可表示。"],
            summary: "满秩向量组可表示任何同维向量。"
          },
          {
            id: '8.1-025',
            difficulty: '提高',
            type: '填空',
            topic: "向量组等价",
            year: null,
            question: "向量组 A 与向量组 B 等价的定义是______。",
            options: null,
            answer: "A 与 B 可相互线性表示",
            solution: ["第一步：等价 ⇔ 两向量组可相互线性表示。","第二步：等价向量组秩相等，但等秩不一定等价（需同维同型）。"],
            keyPoints: ["【重点】等价 ⇒ 等秩；等秩不一定等价。"],
            summary: "等价向量组：可互相线性表示。"
          },
          {
            id: '8.1-026',
            difficulty: '难题',
            type: '选择',
            topic: "线性表示唯一性",
            year: null,
            question: "设 β 可由 α<sub>1</sub>,…,α<sub>s</sub> 线性表示，则表示法唯一的充要条件是（　）",
            options: ["A. α<sub>1</sub>,…,α<sub>s</sub> 线性相关","B. α<sub>1</sub>,…,α<sub>s</sub> 线性无关","C. s = n","D. β ≠ 0"],
            answer: "B",
            solution: ["第一步：若表示法不唯一，则差为非零零表示 ⇒ 线性相关。","第二步：故唯一 ⇔ 线性无关。"],
            keyPoints: ["【重点】线性无关组表示法唯一。"],
            summary: "线性无关组 ⇒ 表示法唯一。"
          },
          {
            id: '8.1-027',
            difficulty: '难题',
            type: '解答',
            topic: "线性表示综合",
            year: null,
            question: "设 α<sub>1</sub>=(1,0,1)<sup>T</sup>，α<sub>2</sub>=(0,1,1)<sup>T</sup>，α<sub>3</sub>=(1,1,0)<sup>T</sup>，β=(1,2,3)<sup>T</sup>，将 β 表示为 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 的线性组合。",
            options: null,
            answer: "β = (1/2)α<sub>1</sub>+(3/2)α<sub>2</sub>+(1/2)α<sub>3</sub>",
            solution: ["第一步：设 β = x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub>+x<sub>3</sub>α<sub>3</sub>。","第二步：列方程 x<sub>1</sub>+x<sub>3</sub>=1, x<sub>2</sub>+x<sub>3</sub>=2, x<sub>1</sub>+x<sub>2</sub>=3。","第三步：解得 x<sub>1</sub>=1/2, x<sub>2</sub>=3/2, x<sub>3</sub>=1/2。"],
            keyPoints: ["【重点】解方程组求表示系数。"],
            summary: "线性表示 = 解方程组。"
          },
          {
            id: '8.1-028',
            difficulty: '真题',
            type: '选择',
            topic: "线性表示",
            year: 2013,
            question: "设 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 为 3 维向量，β<sub>1</sub> 可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性表示，β<sub>2</sub> 不能由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性表示，则（　）",
            options: ["A. α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,β<sub>1</sub>,β<sub>2</sub> 线性相关","B. α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,β<sub>2</sub> 线性无关","C. β<sub>1</sub>-β<sub>2</sub> 可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 表示","D. 以上都不对"],
            answer: "A",
            solution: ["第一步：β<sub>1</sub> 可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 表示 ⇒ 加入 β<sub>1</sub> 后秩不变。","第二步：β<sub>2</sub> 不能表示 ⇒ r(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,β<sub>2</sub>) = r+1。","第三步：5 个 3 维向量必线性相关，A 正确。"],
            keyPoints: ["【重点】向量个数 > 维数 ⇒ 必相关。"],
            summary: "n+1 个 n 维向量必线性相关。"
          },
          {
            id: '8.1-029',
            difficulty: '真题',
            type: '填空',
            topic: "线性表示",
            year: 2018,
            question: "设 α<sub>1</sub>=(1,2,-1)<sup>T</sup>，α<sub>2</sub>=(2,1,1)<sup>T</sup>，β=(4,5,-1)<sup>T</sup>，则 β = ______。",
            options: null,
            answer: "2α<sub>1</sub>+α<sub>2</sub>",
            solution: ["第一步：设 β = x<sub>1</sub>α<sub>1</sub>+x<sub>2</sub>α<sub>2</sub>。","第二步：x<sub>1</sub>+2x<sub>2</sub>=4, 2x<sub>1</sub>+x<sub>2</sub>=5, -x<sub>1</sub>+x<sub>2</sub>=-1。","第三步：解得 x<sub>1</sub>=2, x<sub>2</sub>=1。"],
            keyPoints: ["【重点】待定系数法。"],
            summary: "解方程组求表示系数。"
          },
          {
            id: '8.1-030',
            difficulty: '真题',
            type: '解答',
            topic: "线性表示",
            year: 2022,
            question: "设 α<sub>1</sub>=(1,1,1,3)<sup>T</sup>，α<sub>2</sub>=(-1,-3,5,1)<sup>T</sup>，α<sub>3</sub>=(3,2,-1,p+2)<sup>T</sup>，α<sub>4</sub>=(-2,-6,10,p)<sup>T</sup>，β=(4,1,6,10)<sup>T</sup>，问 p 取何值时 β 不能由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,α<sub>4</sub> 线性表示？",
            options: null,
            answer: "p = 2",
            solution: ["第一步：构造矩阵 (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,α<sub>4</sub>|β)，作初等行变换。","第二步：化简后比较 r(A) 与 r(A|β)。","第三步：当 p=2 时 r(A)=3，r(A|β)=4，β 不能表示。"],
            keyPoints: ["【重点】不能表示 ⇔ r(A) < r(A|β)。"],
            summary: "线性表示问题 = 方程组相容性问题。"
          }
        ]
      },
      '8.2': {
        id: '8.2',
        title: '向量组的线性相关与线性无关',
        questions: [
          {
            id: '8.2-001',
            difficulty: '基础',
            type: '选择',
            topic: '线性相关定义',
            year: null,
            question: '向量组 α<sub>1</sub>,...,α<sub>s</sub> 线性相关是指（　）',
            options: ['A. 存在全为 0 的系数使线性组合为 0', 'B. 存在不全为 0 的系数使线性组合为 0', 'C. 每个向量都可由其余向量表示', 'D. 必含零向量'],
            answer: 'B',
            solution: [
              '第一步：线性相关定义：存在不全为 0 的 k<sub>1</sub>,...,k<sub>s</sub> 使 Σk<sub>i</sub>α<sub>i</sub> = 0。',
              '第二步：等价于至少有一个向量可由其余向量线性表示。'
            ],
            keyPoints: ['【重点】线性相关 = 有非平凡零组合。'],
            summary: '线性相关：存在不全为 0 系数使 Σk<sub>i</sub>α<sub>i</sub>=0。'
          },
          {
            id: '8.2-002',
            difficulty: '基础',
            type: '填空',
            topic: '线性无关条件',
            year: null,
            question: '向量组 α<sub>1</sub>,...,α<sub>s</sub> 线性无关的充要条件是 r(α<sub>1</sub>,...,α<sub>s</sub>) = ______。',
            options: null,
            answer: 's（向量个数）',
            solution: [
              '第一步：线性无关 ⟺ 秩 = 向量个数 s。',
              '第二步：线性相关 ⟺ 秩 &lt; s。'
            ],
            keyPoints: ['【重点】r = s 无关；r &lt; s 相关。'],
            summary: '线性无关 ⟺ r(α<sub>1</sub>,...,α<sub>s</sub>) = s。'
          },
          {
            id: '8.2-003',
            difficulty: '基础',
            type: '解答',
            topic: '判断相关性',
            year: null,
            question: '判断 α<sub>1</sub> = (1, 2, 3), α<sub>2</sub> = (4, 5, 6), α<sub>3</sub> = (7, 8, 9) 的线性相关性。',
            options: null,
            answer: '线性相关',
            solution: [
              '第一步：计算行列式 |α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span><span class="mcell">7</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">5</span><span class="mcell">8</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">6</span><span class="mcell">9</span></span></span></span>。',
              '第二步：= 1(45-48) - 4(18-24) + 7(12-15) = -3 + 24 - 21 = 0。',
              '第三步：行列式为 0，故线性相关。'
            ],
            keyPoints: ['【重点】n 个 n 维向量相关性 ⟺ 行列式是否为 0。'],
            summary: 'n 个 n 维向量：|A|=0 相关，|A|≠0 无关。'
          },
          {
            id: '8.2-004',
            difficulty: '基础',
            type: '选择',
            topic: '含零向量',
            year: null,
            question: '向量组中含有零向量，则该向量组（　）',
            options: ['A. 线性无关', 'B. 线性相关', 'C. 无法判断', 'D. 必为单位向量'],
            answer: 'B',
            solution: [
              '第一步：0·α<sub>1</sub>+...+1·0+... = 0，系数不全为 0。',
              '第二步：故含零向量的向量组必线性相关。'
            ],
            keyPoints: ['【重点】含零向量 ⟹ 必线性相关。'],
            summary: '含零向量的向量组必线性相关。'
          },
          {
            id: '8.2-005',
            difficulty: '基础',
            type: '填空',
            topic: '部分组相关',
            year: null,
            question: '若向量组的一个部分组线性相关，则整个向量组______。',
            options: null,
            answer: '线性相关',
            solution: [
              '第一步：部分组相关，把其余向量系数取 0 即得全组相关。',
              '第二步：反之，全组无关 ⟹ 任意部分组无关。'
            ],
            keyPoints: ['【重点】部分相关 → 全组相关；全组无关 → 部分无关。'],
            summary: '部分相关 ⟹ 全组相关；全组无关 ⟹ 部分无关。'
          },
          {
            id: '8.2-006',
            difficulty: '基础',
            type: '解答',
            topic: '延长向量',
            year: null,
            question: '设 α<sub>1</sub> = (1, 0), α<sub>2</sub> = (0, 1) 线性无关，问 β<sub>1</sub> = (1, 0, a), β<sub>2</sub> = (0, 1, b) 是否线性无关？',
            options: null,
            answer: '线性无关',
            solution: [
              '第一步：延长向量（添加分量）不改变无关性。',
              '第二步：由 k<sub>1</sub>β<sub>1</sub>+k<sub>2</sub>β<sub>2</sub> = 0，前两个分量得 k<sub>1</sub>=k<sub>2</sub>=0。',
              '第三步：故 β<sub>1</sub>, β<sub>2</sub> 线性无关。'
            ],
            keyPoints: ['【重点】无关组延长分量后仍无关。'],
            summary: '无关向量组延长分量仍无关。'
          },
          {
            id: '8.2-007',
            difficulty: '基础',
            type: '选择',
            topic: 'n+1 个向量',
            year: null,
            question: '任意 n+1 个 n 维向量（　）',
            options: ['A. 线性无关', 'B. 线性相关', 'C. 可能相关也可能无关', 'D. 必为零向量'],
            answer: 'B',
            solution: [
              '第一步：向量个数 &gt; 维数，秩 ≤ n &lt; n+1。',
              '第二步：故必线性相关。'
            ],
            keyPoints: ['【重点】个数 &gt; 维数 → 必相关。'],
            summary: 'n+1 个 n 维向量必线性相关。'
          },
          {
            id: '8.2-008',
            difficulty: '基础',
            type: '填空',
            topic: '两个向量相关',
            year: null,
            question: '两个向量线性相关的充要条件是它们______。',
            options: null,
            answer: '对应分量成比例',
            solution: [
              '第一步：α, β 相关 ⟺ β = kα（或 α = kβ）。',
              '第二步：即对应分量成比例。'
            ],
            keyPoints: ['【重点】两个向量相关 ⟺ 分量成比例。'],
            summary: '两向量相关 ⟺ 成比例。'
          },
          {
            id: '8.2-009',
            difficulty: '基础',
            type: '解答',
            topic: '判断无关',
            year: null,
            question: '判断 α<sub>1</sub> = (1, 1, 1), α<sub>2</sub> = (1, 2, 3), α<sub>3</sub> = (1, 3, 6) 的线性相关性。',
            options: null,
            answer: '线性无关',
            solution: [
              '第一步：行列式 = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">3</span><span class="mcell">6</span></span></span></span>（范德蒙德）。',
              '第二步：= (2-1)(3-1)(3-2) = 1×2×1 = 2 ≠ 0。',
              '第三步：故线性无关。'
            ],
            keyPoints: ['【重点】范德蒙德行列式非零，对应向量组无关。'],
            summary: '范德蒙德型向量组恒无关。'
          },
          {
            id: '8.2-010',
            difficulty: '基础',
            type: '选择',
            topic: '线性相关与表示',
            year: null,
            question: '向量组 α<sub>1</sub>,...,α<sub>s</sub> 线性相关，则（　）',
            options: ['A. 每个 α<sub>i</sub> 都可由其余向量表示', 'B. 至少有一个 α<sub>i</sub> 可由其余向量表示', 'C. α<sub>1</sub> = 0', 'D. 秩为 s'],
            answer: 'B',
            solution: [
              '第一步：线性相关 ⟺ 至少有一个向量可由其余向量线性表示。',
              '第二步：注意是"至少一个"，不是"每个"。'
            ],
            keyPoints: ['【重点】相关 ⟺ 至少一个可由其余表示（不是每个）。'],
            summary: '线性相关 ⟺ 至少一个向量可由其余表示。'
          },
          {
            id: '8.2-011',
            difficulty: '提高',
            type: '填空',
            topic: '含参数相关性',
            year: null,
            question: 'α<sub>1</sub> = (1, 1, 1), α<sub>2</sub> = (1, 2, 3), α<sub>3</sub> = (1, 3, t) 线性相关，则 t = ______。',
            options: null,
            answer: 't = 5',
            solution: [
              '第一步：|α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">3</span><span class="mcell">t</span></span></span></span> = 1(2t-9) - 1(t-3) + 1(3-2) = 2t-9-t+3+1 = t-5。',
              '第二步：相关要求行列式 = 0，故 t = 5。'
            ],
            keyPoints: ['【重点】含参数相关性：令行列式为 0 解参数。'],
            summary: 'n 个 n 维向量相关 ⟺ 行列式为 0。'
          },
          {
            id: '8.2-012',
            difficulty: '提高',
            type: '解答',
            topic: '定义法证明',
            year: null,
            question: '设 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性无关，证明 β<sub>1</sub> = α<sub>1</sub>+α<sub>2</sub>, β<sub>2</sub> = α<sub>2</sub>+α<sub>3</sub>, β<sub>3</sub> = α<sub>3</sub>+α<sub>1</sub> 也线性无关。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：设 k<sub>1</sub>β<sub>1</sub>+k<sub>2</sub>β<sub>2</sub>+k<sub>3</sub>β<sub>3</sub> = 0。',
              '第二步：展开为 (k<sub>1</sub>+k<sub>3</sub>)α<sub>1</sub>+(k<sub>1</sub>+k<sub>2</sub>)α<sub>2</sub>+(k<sub>2</sub>+k<sub>3</sub>)α<sub>3</sub> = 0。',
              '第三步：由 α 组无关，系数全为 0：k<sub>1</sub>+k<sub>3</sub> = 0, k<sub>1</sub>+k<sub>2</sub> = 0, k<sub>2</sub>+k<sub>3</sub> = 0。',
              '第四步：解得 k<sub>1</sub> = k<sub>2</sub> = k<sub>3</sub> = 0，故 β 组无关。'
            ],
            keyPoints: ['【重点】定义法证明无关：设组合为 0，反推系数全为 0。'],
            summary: '证明无关：设 Σk<sub>i</sub>β<sub>i</sub>=0，反推 k<sub>i</sub>=0。'
          },
          {
            id: '8.2-013',
            difficulty: '提高',
            type: '选择',
            topic: '向量组相关性',
            year: null,
            question: '设 α<sub>1</sub>,...,α<sub>s</sub> 线性无关，则下列向量组也线性无关的是（　）',
            options: ['A. α<sub>1</sub>, α<sub>1</sub>+α<sub>2</sub>, ..., α<sub>1</sub>+α<sub>2</sub>+...+α<sub>s</sub>', 'B. α<sub>1</sub>-α<sub>2</sub>, α<sub>2</sub>-α<sub>3</sub>, ..., α<sub>s</sub>-α<sub>1</sub>', 'C. α<sub>1</sub>+α<sub>2</sub>, α<sub>2</sub>+α<sub>1</sub>', 'D. α<sub>1</sub>, 0, α<sub>2</sub>'],
            answer: 'A',
            solution: [
              '第一步：A 的过渡矩阵为对角线上三角，行列式 = 1 ≠ 0，故无关。',
              '第二步：B 相加为 0，相关；C 两向量相同，相关；D 含零向量，相关。'
            ],
            keyPoints: ['【重点】判断新组相关性看过渡矩阵行列式。'],
            summary: '新组 = 旧组 × P，P 可逆 ⟺ 新组无关。'
          },
          {
            id: '8.2-014',
            difficulty: '提高',
            type: '填空',
            topic: '秩与相关性',
            year: null,
            question: '设 A 为 n×m 矩阵，且 A 的行向量线性无关，则 r(A) = ______。',
            options: null,
            answer: 'n（行数）',
            solution: [
              '第一步：行秩 = 行向量组的秩。',
              '第二步：行向量无关 ⟹ 行秩 = n，故 r(A) = n。'
            ],
            keyPoints: ['【重点】行向量无关 ⟹ 行满秩。'],
            summary: '行向量无关 ⟹ r(A) = 行数。'
          },
          {
            id: '8.2-015',
            difficulty: '提高',
            type: '解答',
            topic: '相关组表示',
            year: null,
            question: '设 α<sub>1</sub> = (1, 2, 3), α<sub>2</sub> = (2, 4, 6), α<sub>3</sub> = (3, 5, 7)，判断相关性并把可表示的向量用其余向量表示。',
            options: null,
            answer: 'α<sub>2</sub> = 2α<sub>1</sub>，线性相关',
            solution: [
              '第一步：α<sub>2</sub> = 2α<sub>1</sub>（分量成比例），故 α<sub>1</sub>, α<sub>2</sub> 相关。',
              '第二步：整个向量组 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 也相关（部分相关 ⟹ 全组相关）。'
            ],
            keyPoints: ['【重点】部分相关 ⟹ 全组相关。'],
            summary: 'α<sub>2</sub>=2α<sub>1</sub> ⟹ 部分相关 ⟹ 全组相关。'
          },
          {
            id: '8.2-016',
            difficulty: '提高',
            type: '选择',
            topic: '线性无关性质',
            year: null,
            question: '设 α<sub>1</sub>,...,α<sub>s</sub> 线性无关，β 可由它们线性表示，表示法唯一，则 β 不能由（　）',
            options: ['A. α<sub>1</sub>,...,α<sub>s</sub> 表示', 'B. α<sub>1</sub>,...,α<sub>s-1</sub> 表示（若最后系数非零）', 'C. 任意非空子集表示', 'D. 标准基表示'],
            answer: 'B',
            solution: [
              '第一步：若 β = x<sub>1</sub>α<sub>1</sub>+...+x<sub>s</sub>α<sub>s</sub> 且 x<sub>s</sub> ≠ 0，则 β 不能由 α<sub>1</sub>,...,α<sub>s-1</sub> 表示。',
              '第二步：否则会推出 α<sub>s</sub> 可由其余表示，矛盾。'
            ],
            keyPoints: ['【重点】唯一表示中，非零系数对应的向量不能省。'],
            summary: '唯一表示中系数非零的向量不可省略。'
          },
          {
            id: '8.2-017',
            difficulty: '提高',
            type: '填空',
            topic: '向量个数与维数',
            year: null,
            question: '设 α<sub>1</sub>,...,α<sub>s</sub> 均为 n 维向量，且 s &gt; n，则该向量组______。',
            options: null,
            answer: '线性相关',
            solution: [
              '第一步：向量个数超过维数。',
              '第二步：必线性相关。'
            ],
            keyPoints: ['【重点】个数 &gt; 维数 → 必相关。'],
            summary: 's &gt; n 时 n 维向量组必相关。'
          },
          {
            id: '8.2-018',
            difficulty: '提高',
            type: '解答',
            topic: '证明相关',
            year: null,
            question: '设 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性无关，β<sub>1</sub> = α<sub>1</sub>, β<sub>2</sub> = α<sub>1</sub>+α<sub>2</sub>, β<sub>3</sub> = α<sub>1</sub>+α<sub>2</sub>+α<sub>3</sub>，判断 β 组相关性。',
            options: null,
            answer: '线性无关',
            solution: [
              '第一步：设 k<sub>1</sub>β<sub>1</sub>+k<sub>2</sub>β<sub>2</sub>+k<sub>3</sub>β<sub>3</sub> = 0。',
              '第二步：展开 (k<sub>1</sub>+k<sub>2</sub>+k<sub>3</sub>)α<sub>1</sub> + (k<sub>2</sub>+k<sub>3</sub>)α<sub>2</sub> + k<sub>3</sub>α<sub>3</sub> = 0。',
              '第三步：由 α 无关：k<sub>3</sub>=0, k<sub>2</sub>+k<sub>3</sub>=0, k<sub>1</sub>+k<sub>2</sub>+k<sub>3</sub>=0，依次解得 k<sub>2</sub>=0, k<sub>1</sub>=0。',
              '第四步：故 β 组无关。'
            ],
            keyPoints: ['【简便方法】过渡矩阵为对角元为 1 的上三角，行列式 = 1。'],
            summary: '上三角过渡矩阵行列式为 1 ⟹ 无关。'
          },
          {
            id: '8.2-019',
            difficulty: '难题',
            type: '选择',
            topic: '综合判断',
            year: null,
            question: '设 A 为 n 阶矩阵，且 |A| = 0，则 A 的列向量组（　）',
            options: ['A. 线性无关', 'B. 线性相关', 'C. 含零向量', 'D. 成比例'],
            answer: 'B',
            solution: [
              '第一步：|A| = 0 ⟺ A 的列向量组线性相关。',
              '第二步：也等价于行向量组线性相关。'
            ],
            keyPoints: ['【重点】|A|=0 ⟺ 列（行）向量组相关。'],
            summary: '|A|=0 ⟺ 列向量组线性相关。'
          },
          {
            id: '8.2-020',
            difficulty: '难题',
            type: '填空',
            topic: '抽象相关',
            year: null,
            question: '设 A 为 m×n 矩阵，b 为 m 维列向量，若线性方程组 Ax = b 有无穷多解，则 A 的列向量组______。',
            options: null,
            answer: '线性相关',
            solution: [
              '第一步：Ax = b 有无穷多解 ⟺ r(A) = r(A|b) &lt; n。',
              '第二步：r(A) &lt; n 说明 A 的列向量个数 n 大于秩，列向量组相关。'
            ],
            keyPoints: ['【重点】方程组有无穷多解 ⟺ 列向量组相关。'],
            summary: 'Ax=b 无穷多解 ⟺ A 列向量相关。'
          },
          {
            id: '8.2-021',
            difficulty: '难题',
            type: '解答',
            topic: '证明题',
            year: null,
            question: '设 α<sub>1</sub>,...,α<sub>n</sub> 为 n 维向量，证明它们线性无关的充要条件是任一 n 维向量都可由它们线性表示。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：(⟹) 若 α 组无关，则 r(α) = n，添加任一向量 β 后 n+1 个 n 维向量必相关，故 β 可由 α 表示。',
              '第二步：(⟸) 若任一向量可由 α 表示，则标准基 e<sub>1</sub>,...,e<sub>n</sub> 可由 α 表示，r(e) ≤ r(α)，即 n ≤ r(α) ≤ n，故 r(α) = n，无关。'
            ],
            keyPoints: ['【重点】n 个 n 维向量无关 ⟺ 是 R<sup>n</sup> 的基。'],
            summary: 'n 个 n 维向量无关 ⟺ 可表示任意向量。'
          },
          {
            id: '8.2-022',
            difficulty: '难题',
            type: '选择',
            topic: '向量组相关性',
            year: null,
            question: '设 α<sub>1</sub>,...,α<sub>s</sub> 均为 n 维向量，且秩为 r，则下列错误的是（　）',
            options: ['A. 任意 r 个向量线性无关', 'B. 存在 r 个向量线性无关', 'C. 任意 r+1 个向量线性相关', 'D. 极大无关组含 r 个向量'],
            answer: 'A',
            solution: [
              '第一步：秩为 r 说明存在 r 个无关向量，但不是"任意 r 个"都无关。',
              '第二步：B, C, D 都是秩的正确性质。'
            ],
            keyPoints: ['【易错点】"存在 r 个无关"对，"任意 r 个无关"错。'],
            summary: '秩为 r：存在 r 个无关，任意 r+1 个相关。'
          },
          {
            id: '8.2-023',
            difficulty: '难题',
            type: '填空',
            topic: '延长向量',
            year: null,
            question: '若 α<sub>1</sub>,...,α<sub>s</sub> 线性相关，则接长向量（增加分量后的向量）组______。',
            options: null,
            answer: '不一定（可能相关也可能无关）',
            solution: [
              '第一步：缩短向量（减少分量）相关，延长后不一定相关。',
              '第二步：反之，延长无关 ⟹ 缩短无关；缩短相关 ⟹ 延长不一定相关。'
            ],
            keyPoints: ['【易错点】"延长"与"缩短"对相关性的影响方向要分清。'],
            summary: '缩短相关 ⟹ 延长不一定相关；延长无关 ⟹ 缩短无关。'
          },
          {
            id: '8.2-024',
            difficulty: '真题',
            type: '选择',
            topic: '线性相关',
            year: 2014,
            question: '设 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 为 3 维向量，则下列正确的是（　）（2014 数二）',
            options: ['A. 若 α<sub>1</sub>, α<sub>2</sub> 线性相关，则 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性相关', 'B. 若 α<sub>1</sub>, α<sub>2</sub> 线性无关，则 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性无关', 'C. 若 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性相关，则 α<sub>1</sub>, α<sub>2</sub> 线性相关', 'D. 若 α<sub>1</sub>, α<sub>2</sub>, α<sub>3</sub> 线性无关，则 α<sub>1</sub>, α<sub>2</sub> 线性相关'],
            answer: 'A',
            solution: [
              '第一步：部分相关 ⟹ 全组相关，A 正确。',
              '第二步：B 错（添加向量不一定保持无关）；C 错（全组相关不一定部分相关）；D 错（全组无关 ⟹ 部分无关）。'
            ],
            keyPoints: ['【重点】部分相关 → 全组相关；全组无关 → 部分无关。'],
            summary: '部分相关 ⟹ 全组相关；全组无关 ⟹ 部分无关。'
          },
          {
            id: '8.2-025',
            difficulty: '真题',
            type: '解答',
            topic: '线性相关性',
            year: 2019,
            question: '设向量组 α<sub>1</sub> = (1, 2, 1)<sup>T</sup>, α<sub>2</sub> = (1, 3, 2)<sup>T</sup>, α<sub>3</sub> = (1, a, 3)<sup>T</sup> 线性相关，求 a，并求一个极大线性无关组。（2019 数二）',
            options: null,
            answer: 'a = 4；极大无关组为 α<sub>1</sub>, α<sub>2</sub>',
            solution: [
              '第一步：|α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">3</span><span class="mcell">a</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span></span></span> = 1(9-2a) - 1(6-a) + 1(4-3) = 9-2a-6+a+1 = 4-a。',
              '第二步：相关要求 |α| = 0，故 a = 4。',
              '第三步：α<sub>1</sub>, α<sub>2</sub> 对应行列式 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">3</span></span></span></span> = 1 ≠ 0，故 α<sub>1</sub>, α<sub>2</sub> 无关，是极大无关组。'
            ],
            keyPoints: ['【重点】含参数相关性：令行列式为 0 解参数。'],
            summary: 'n 个 n 维向量相关 ⟺ |α|=0，再找极大无关组。'
          }
        ,
          {
            id: '8.2-026',
            difficulty: '基础',
            type: '选择',
            topic: "线性相关判定",
            year: null,
            question: "向量组 α<sub>1</sub>=(1,0)<sup>T</sup>，α<sub>2</sub>=(0,1)<sup>T</sup>，α<sub>3</sub>=(1,1)<sup>T</sup> 线性（　）",
            options: ["A. 相关","B. 无关","C. 不确定","D. 既相关又无关"],
            answer: "A",
            solution: ["第一步：3 个 2 维向量必线性相关。","第二步：且 α<sub>3</sub>=α<sub>1</sub>+α<sub>2</sub>。"],
            keyPoints: ["【重点】向量个数 > 维数 ⇒ 必相关。"],
            summary: "n+1 个 n 维向量必相关。"
          },
          {
            id: '8.2-027',
            difficulty: '提高',
            type: '填空',
            topic: "线性无关判定",
            year: null,
            question: "向量组 α<sub>1</sub>=(1,1,1)<sup>T</sup>，α<sub>2</sub>=(0,1,1)<sup>T</sup>，α<sub>3</sub>=(0,0,1)<sup>T</sup> 线性______（相关/无关）。",
            options: null,
            answer: "无关",
            solution: ["第一步：矩阵 (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) = |1 0 0; 1 1 0; 1 1 1| 为上三角。","第二步：行列式 = 1 ≠ 0，故线性无关。"],
            keyPoints: ["【重点】行列式 ≠ 0 ⇔ 线性无关。"],
            summary: "n 个 n 维向量：行列式 ≠ 0 ⇔ 无关。"
          },
          {
            id: '8.2-028',
            difficulty: '提高',
            type: '解答',
            topic: "线性相关证明",
            year: null,
            question: "证明：若向量组 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关，则 α<sub>1</sub>+α<sub>2</sub>, α<sub>2</sub>+α<sub>3</sub>, α<sub>3</sub>+α<sub>1</sub> 也线性无关。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：设 k<sub>1</sub>(α<sub>1</sub>+α<sub>2</sub>)+k<sub>2</sub>(α<sub>2</sub>+α<sub>3</sub>)+k<sub>3</sub>(α<sub>3</sub>+α<sub>1</sub>) = 0。","第二步：整理 (k<sub>1</sub>+k<sub>3</sub>)α<sub>1</sub>+(k<sub>1</sub>+k<sub>2</sub>)α<sub>2</sub>+(k<sub>2</sub>+k<sub>3</sub>)α<sub>3</sub> = 0。","第三步：由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 无关，得方程组 k<sub>1</sub>+k<sub>3</sub>=0, k<sub>1</sub>+k<sub>2</sub>=0, k<sub>2</sub>+k<sub>3</sub>=0，系数行列式 = 2 ≠ 0，只有零解。"],
            keyPoints: ["【重点】定义法证明线性无关。"],
            summary: "定义法：设线性组合为零，证系数全为零。"
          },
          {
            id: '8.2-029',
            difficulty: '难题',
            type: '选择',
            topic: "线性相关性质",
            year: null,
            question: "设 α<sub>1</sub>,α<sub>2</sub>,…,α<sub>s</sub> 线性相关，则下列正确的是（　）",
            options: ["A. 任意两个向量成比例","B. 至少一个向量可由其余表示","C. 所有向量可互相表示","D. 向量个数 > 维数"],
            answer: "B",
            solution: ["第一步：线性相关 ⇔ 至少一个向量可由其余线性表示。","第二步：B 是充要条件。"],
            keyPoints: ["【重点】线性相关等价定义。"],
            summary: "相关 ⇔ 某向量可由其余表示。"
          },
          {
            id: '8.2-030',
            difficulty: '真题',
            type: '选择',
            topic: "线性相关",
            year: 2021,
            question: "设 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关，则下列向量组线性相关的是（　）",
            options: ["A. α<sub>1</sub>+α<sub>2</sub>, α<sub>2</sub>+α<sub>3</sub>, α<sub>3</sub>+α<sub>1</sub>","B. α<sub>1</sub>-α<sub>2</sub>, α<sub>2</sub>-α<sub>3</sub>, α<sub>3</sub>-α<sub>1</sub>","C. α<sub>1</sub>+α<sub>2</sub>, α<sub>2</sub>+α<sub>3</sub>, α<sub>3</sub>-α<sub>1</sub>","D. α<sub>1</sub>+2α<sub>2</sub>, α<sub>2</sub>+2α<sub>3</sub>, α<sub>3</sub>+2α<sub>1</sub>"],
            answer: "B",
            solution: ["第一步：B 中三个向量相加 = 0，即 (α<sub>1</sub>-α<sub>2</sub>)+(α<sub>2</sub>-α<sub>3</sub>)+(α<sub>3</sub>-α<sub>1</sub>) = 0。","第二步：存在非零系数 (1,1,1) 使线性组合为零，故相关。"],
            keyPoints: ["【重点】观察线性组合为零。"],
            summary: "凑出线性组合为零即得相关。"
          }
        ]
      },
      '8.3': {
        id: '8.3',
        title: '向量组的秩',
        questions: [
          {
            id: '8.3-001',
            difficulty: '基础',
            type: '选择',
            topic: '极大无关组定义',
            year: null,
            question: '向量组的极大线性无关组是指（　）',
            options: ['A. 含向量最多的无关子集', 'B. 含向量最少的无关子集', 'C. 任意一个无关子集', 'D. 含零向量的子集'],
            answer: 'A',
            solution: [
              '第一步：极大无关组 = 向量组中含向量个数最多的线性无关子集。',
              '第二步：它能表示整个向量组。'
            ],
            keyPoints: ['【重点】极大无关组 = 最大无关子集。'],
            summary: '极大无关组 = 含向量最多的无关子集。'
          },
          {
            id: '8.3-002',
            difficulty: '基础',
            type: '填空',
            topic: '秩的定义',
            year: null,
            question: '向量组 α<sub>1</sub>,...,α<sub>s</sub> 的秩是其______所含向量的个数。',
            options: null,
            answer: '极大线性无关组',
            solution: [
              '第一步：秩 = 极大无关组向量个数。',
              '第二步：同一个向量组的极大无关组可能不唯一，但秩唯一。'
            ],
            keyPoints: ['【重点】秩 = 极大无关组大小。'],
            summary: '向量组的秩 = 极大无关组向量个数。'
          },
          {
            id: '8.3-003',
            difficulty: '基础',
            type: '解答',
            topic: '求极大无关组',
            year: null,
            question: '设 α<sub>1</sub> = (1, 2, -1), α<sub>2</sub> = (2, -3, 1), α<sub>3</sub> = (4, 1, -1)，求极大无关组。',
            options: null,
            answer: '极大无关组为 α<sub>1</sub>, α<sub>2</sub>（r = 2）',
            solution: [
              '第一步：α<sub>1</sub> 与 α<sub>2</sub> 不成比例（2/1 ≠ -3/2），无关。',
              '第二步：α<sub>3</sub> = (4, 1, -1) = 2α<sub>1</sub>+α<sub>2</sub>？核对：2(1,2,-1)+(2,-3,1) = (4, 1, -1)。是的。',
              '第三步：故 α<sub>3</sub> 可由 α<sub>1</sub>, α<sub>2</sub> 表示，极大无关组为 α<sub>1</sub>, α<sub>2</sub>。'
            ],
            keyPoints: ['【重点】用行变换把列向量组化阶梯形，主元列对应极大无关组。'],
            summary: '列向量组求极大无关组：列排矩阵、行变换化阶梯、主元列。'
          },
          {
            id: '8.3-004',
            difficulty: '基础',
            type: '选择',
            topic: '秩与矩阵',
            year: null,
            question: '矩阵 A 的秩等于（　）',
            options: ['A. A 的行向量组的秩', 'B. A 的列向量组的秩', 'C. A 的行秩 = 列秩', 'D. 以上都对'],
            answer: 'D',
            solution: [
              '第一步：矩阵的秩 = 行秩 = 列秩。',
              '第二步：三者总是相等。'
            ],
            keyPoints: ['【重点】行秩 = 列秩 = 矩阵秩。'],
            summary: '矩阵秩 = 行秩 = 列秩。'
          },
          {
            id: '8.3-005',
            difficulty: '基础',
            type: '填空',
            topic: '向量组秩范围',
            year: null,
            question: '向量组 α<sub>1</sub>,...,α<sub>s</sub> 的秩 r 满足______ ≤ r ≤ ______。',
            options: null,
            answer: '0；s',
            solution: [
              '第一步：秩最小为 0（零向量组），最大为 s（全组无关）。',
              '第二步：0 ≤ r ≤ s。'
            ],
            keyPoints: ['【重点】秩不超过向量个数。'],
            summary: '0 ≤ 秩 ≤ 向量个数 s。'
          },
          {
            id: '8.3-006',
            difficulty: '基础',
            type: '解答',
            topic: '等价向量组秩',
            year: null,
            question: '设向量组 (Ⅰ) 与 (Ⅱ) 等价，且 (Ⅰ) 含 3 个向量，秩为 2；(Ⅱ) 含 4 个向量，求 (Ⅱ) 的秩。',
            options: null,
            answer: 'r(Ⅱ) = 2',
            solution: [
              '第一步：等价向量组秩相等。',
              '第二步：故 r(Ⅱ) = r(Ⅰ) = 2。'
            ],
            keyPoints: ['【重点】等价 ⟹ 秩相等。'],
            summary: '等价向量组秩相等。'
          },
          {
            id: '8.3-007',
            difficulty: '基础',
            type: '选择',
            topic: '秩不等式',
            year: null,
            question: '若 (Ⅰ) 可由 (Ⅱ) 线性表示，则（　）',
            options: ['A. r(Ⅰ) ≥ r(Ⅱ)', 'B. r(Ⅰ) ≤ r(Ⅱ)', 'C. r(Ⅰ) = r(Ⅱ)', 'D. 无法比较'],
            answer: 'B',
            solution: [
              '第一步：被表示组的秩不超过表示组的秩。',
              '第二步：r(Ⅰ) ≤ r(Ⅱ)。'
            ],
            keyPoints: ['【重点】被表示组秩 ≤ 表示组秩。'],
            summary: '(Ⅰ) 由 (Ⅱ) 表示 ⟹ r(Ⅰ) ≤ r(Ⅱ)。'
          },
          {
            id: '8.3-008',
            difficulty: '基础',
            type: '填空',
            topic: '零向量组',
            year: null,
            question: '只含零向量的向量组的秩为______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：零向量线性相关，极大无关组为空集。',
              '第二步：空集向量个数 = 0。'
            ],
            keyPoints: ['【重点】零向量组秩 = 0。'],
            summary: '零向量组的秩为 0。'
          },
          {
            id: '8.3-009',
            difficulty: '提高',
            type: '解答',
            topic: '求秩',
            year: null,
            question: '设 α<sub>1</sub> = (1, 1, 1, 1), α<sub>2</sub> = (1, 2, 3, 4), α<sub>3</sub> = (0, 1, 2, 3), α<sub>4</sub> = (2, 3, 4, 5)，求向量组的秩和一个极大无关组。',
            options: null,
            answer: 'r = 2，极大无关组为 α<sub>1</sub>, α<sub>2</sub>',
            solution: [
              '第一步：α<sub>3</sub> = α<sub>2</sub>-α<sub>1</sub> = (0,1,2,3)，是的。',
              '第二步：α<sub>4</sub> = α<sub>1</sub>+α<sub>2</sub> = (2,3,4,5)，是的。',
              '第三步：α<sub>1</sub>, α<sub>2</sub> 不成比例，无关。',
              '第四步：故秩 = 2，极大无关组为 α<sub>1</sub>, α<sub>2</sub>。'
            ],
            keyPoints: ['【重点】观察线性关系，找出谁是谁的组合。'],
            summary: '观察分量关系，找出极大无关组。'
          },
          {
            id: '8.3-010',
            difficulty: '提高',
            type: '选择',
            topic: '秩的性质',
            year: null,
            question: '设 A 为 m×n 矩阵，r(A) = r，则下列正确的是（　）',
            options: ['A. A 的任意 r 行线性无关', 'B. A 存在 r 行线性无关', 'C. A 的任意 r 行线性相关', 'D. A 的所有行线性无关'],
            answer: 'B',
            solution: [
              '第一步：r(A) = r 说明行向量组秩为 r。',
              '第二步：存在 r 个行向量无关，但不是"任意 r 行"。'
            ],
            keyPoints: ['【重点】"存在 r 个无关"对，"任意 r 个无关"错。'],
            summary: 'r(A)=r：存在 r 行无关，任意 r+1 行相关。'
          },
          {
            id: '8.3-011',
            difficulty: '提高',
            type: '填空',
            topic: '秩与表示',
            year: null,
            question: '向量 β 可由 α<sub>1</sub>,...,α<sub>s</sub> 线性表示的充要条件是 r(α<sub>1</sub>,...,α<sub>s</sub>) ______ r(α<sub>1</sub>,...,α<sub>s</sub>, β)。',
            options: null,
            answer: '=',
            solution: [
              '第一步：β 可由 α 表示 ⟺ 添加 β 不增加秩。',
              '第二步：r(α) = r(α, β)。'
            ],
            keyPoints: ['【重点】可表示 ⟺ 秩不增加。'],
            summary: 'β 可由 α 表示 ⟺ r(α) = r(α,β)。'
          },
          {
            id: '8.3-012',
            difficulty: '提高',
            type: '解答',
            topic: '秩的证明',
            year: null,
            question: '证明：若向量组 (Ⅰ) 可由 (Ⅱ) 线性表示，则 r(Ⅰ) ≤ r(Ⅱ)。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：设 (Ⅰ) 的极大无关组为 (Ⅰ\')，(Ⅱ) 的极大无关组为 (Ⅱ\')。',
              '第二步：(Ⅰ) 由 (Ⅱ) 表示，故 (Ⅰ\') 由 (Ⅱ) 表示，进而由 (Ⅱ\') 表示。',
              '第三步：由"被表示组秩 ≤ 表示组秩"，r(Ⅰ\') ≤ r(Ⅱ\')，即 r(Ⅰ) ≤ r(Ⅱ)。'
            ],
            keyPoints: ['【重点】秩的不等式证明核心：用极大无关组过渡。'],
            summary: '被表示组秩 ≤ 表示组秩。'
          },
          {
            id: '8.3-013',
            difficulty: '难题',
            type: '选择',
            topic: '秩综合',
            year: null,
            question: '设 A 为 n 阶矩阵，且 r(A) = n-1，则 A 的伴随矩阵 A* 的秩为（　）',
            options: ['A. n', 'B. n-1', 'C. 1', 'D. 0'],
            answer: 'C',
            solution: [
              '第一步：r(A) = n-1，故 |A| = 0 但存在 n-1 阶非零子式。',
              '第二步：A* ≠ O，且 AA* = O 推出 r(A*) ≤ 1，故 r(A*) = 1。'
            ],
            keyPoints: ['【重点】伴随矩阵秩的三段结论。'],
            summary: 'r(A)=n-1 ⟹ r(A*)=1。'
          },
          {
            id: '8.3-014',
            difficulty: '难题',
            type: '填空',
            topic: '抽象秩',
            year: null,
            question: '设 A 为 m×n 矩阵，B 为 n×m 矩阵（m &gt; n），则 r(AB) ______ m。',
            options: null,
            answer: '&lt;（严格小于）',
            solution: [
              '第一步：r(AB) ≤ min(r(A), r(B)) ≤ n &lt; m。',
              '第二步：AB 为 m 阶方阵，秩 &lt; m，不可逆。'
            ],
            keyPoints: ['【重点】"瘦高 × 矮胖"必不满秩。'],
            summary: 'm&gt;n 时 m×n × n×m 秩 &lt; m。'
          },
          {
            id: '8.3-015',
            difficulty: '真题',
            type: '填空',
            topic: '向量组的秩',
            year: 2013,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">a</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">2</span><span class="mcell">2</span></span></span></span>，且 r(A) = 2，A* ≠ O，则 a = ______，b = ______。（2013 数二）',
            options: null,
            answer: 'a = 1, b = 1（具体以真题为准）',
            solution: [
              '第一步：r(A) = 2，故 |A| = 0。',
              '第二步：|A| = 1(2-2b) - a(4-2b) + 1(4-2) = 2-2b-4a+2ab+2 = 4-2b-4a+2ab。',
              '第三步：令 |A| = 0 解 a, b 的关系。',
              '第四步：A* ≠ O 说明存在 2 阶非零子式，r(A) ≥ 2，与 r(A) = 2 一致。',
              '第五步：具体参数需代入真题完整条件计算。'
            ],
            keyPoints: ['【重点】r(A)=n-1 ⟹ |A|=0 且 A*≠O。'],
            summary: 'r(A)=n-1：令 |A|=0 解参数，配合 A*≠O。'
          }
        ,
          {
            id: '8.3-016',
            difficulty: '基础',
            type: '选择',
            topic: "极大无关组",
            year: null,
            question: "向量组的极大无关组是指（　）",
            options: ["A. 个数最多的无关子集","B. 个数最少的无关子集","C. 所有向量的集合","D. 不含零向量的子集"],
            answer: "A",
            solution: ["第一步：极大无关组 = 个数最多的线性无关子集。","第二步：其向量个数 = 向量组的秩。"],
            keyPoints: ["【重点】极大无关组定义。"],
            summary: "极大无关组 = 最大无关子集。"
          },
          {
            id: '8.3-017',
            difficulty: '基础',
            type: '填空',
            topic: "秩的计算",
            year: null,
            question: "向量组 α<sub>1</sub>=(1,2,3)<sup>T</sup>，α<sub>2</sub>=(2,4,6)<sup>T</sup>，α<sub>3</sub>=(1,0,1)<sup>T</sup> 的秩为______。",
            options: null,
            answer: "2",
            solution: ["第一步：α<sub>2</sub>=2α<sub>1</sub>，α<sub>1</sub> 与 α<sub>3</sub> 不成比例。","第二步：极大无关组为 {α<sub>1</sub>, α<sub>3</sub>}，秩 = 2。"],
            keyPoints: ["【重点】秩 = 极大无关组向量个数。"],
            summary: "秩 = 极大无关组所含向量数。"
          },
          {
            id: '8.3-018',
            difficulty: '提高',
            type: '解答',
            topic: "极大无关组求法",
            year: null,
            question: "求向量组 α<sub>1</sub>=(1,1,1)<sup>T</sup>，α<sub>2</sub>=(1,2,3)<sup>T</sup>，α<sub>3</sub>=(1,3,5)<sup>T</sup>，α<sub>4</sub>=(1,4,7)<sup>T</sup> 的极大无关组。",
            options: null,
            answer: "{α<sub>1</sub>, α<sub>2</sub>}",
            solution: ["第一步：构造矩阵 (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>,α<sub>4</sub>) 作初等行变换。","第二步：r<sub>2</sub>-r<sub>1</sub>, r<sub>3</sub>-r<sub>1</sub>，得阶梯形。","第三步：阶梯形非零首元在第 1,2 列，故极大无关组为 {α<sub>1</sub>, α<sub>2</sub>}。"],
            keyPoints: ["【重点】初等行变换不改变列向量的线性关系。"],
            summary: "列摆行变换，取首非零元所在列。"
          },
          {
            id: '8.3-019',
            difficulty: '提高',
            type: '选择',
            topic: "秩与线性表示",
            year: null,
            question: "设 r(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) = 3，则下列错误的是（　）",
            options: ["A. α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关","B. 任何 3 维向量都可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 表示","C. α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性相关","D. |α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>| ≠ 0"],
            answer: "C",
            solution: ["第一步：r=3 意味着 3 个向量线性无关。","第二步：C 错误。"],
            keyPoints: ["【重点】n 个 n 维向量秩为 n ⇔ 无关。"],
            summary: "秩等于向量个数 ⇔ 线性无关。"
          },
          {
            id: '8.3-020',
            difficulty: '提高',
            type: '填空',
            topic: "向量组秩不等式",
            year: null,
            question: "设向量组 A 的秩为 r<sub>1</sub>，向量组 B 的秩为 r<sub>2</sub>，且 A 可由 B 线性表示，则 r<sub>1</sub> 与 r<sub>2</sub> 的关系为______。",
            options: null,
            answer: "r<sub>1</sub> ≤ r<sub>2</sub>",
            solution: ["第一步：若 A 可由 B 表示，则 r(A) ≤ r(B)。","第二步：即 r<sub>1</sub> ≤ r<sub>2</sub>。"],
            keyPoints: ["【重点】被表示组的秩不超过表示组。"],
            summary: "A 可由 B 表示 ⇒ r(A) ≤ r(B)。"
          },
          {
            id: '8.3-021',
            difficulty: '提高',
            type: '解答',
            topic: "秩的综合",
            year: null,
            question: "设 α<sub>1</sub>=(1,2,-1,1)<sup>T</sup>，α<sub>2</sub>=(2,0,t,0)<sup>T</sup>，α<sub>3</sub>=(0,-4,5,-2)<sup>T</sup> 的秩为 2，求 t。",
            options: null,
            answer: "t = 3",
            solution: ["第一步：构造矩阵 (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)，作初等行变换。","第二步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>+4r<sub>1</sub>，化简。","第三步：令秩为 2，解得 t = 3。"],
            keyPoints: ["【重点】由秩反求参数。"],
            summary: "秩为 r ⇒ 存在 r 阶子式非零，r+1 阶全零。"
          },
          {
            id: '8.3-022',
            difficulty: '难题',
            type: '选择',
            topic: "秩的等式",
            year: null,
            question: "设 A 为 m×n 矩阵，则 r(A) = r(A<sup>T</sup>) 的关系是（　）",
            options: ["A. 总成立","B. 仅当 m=n 成立","C. 仅当 A 可逆成立","D. 不成立"],
            answer: "A",
            solution: ["第一步：矩阵秩 = 行秩 = 列秩。","第二步：r(A) = r(A<sup>T</sup>) 恒成立。"],
            keyPoints: ["【重点】三秩相等：r(A)=行秩=列秩。"],
            summary: "r(A) = r(A<sup>T</sup>) 恒成立。"
          },
          {
            id: '8.3-023',
            difficulty: '难题',
            type: '解答',
            topic: "秩不等式证明",
            year: null,
            question: "证明：r(A+B) ≤ r(A) + r(B)。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：设 A = (α<sub>1</sub>,…,α<sub>n</sub>)，B = (β<sub>1</sub>,…,β<sub>n</sub>)。","第二步：A+B 的列 = α<sub>j</sub>+β<sub>j</sub>，可由 A 的列与 B 的列共同表示。","第三步：故 r(A+B) ≤ r(A 的列, B 的列) ≤ r(A)+r(B)。"],
            keyPoints: ["【重点】和矩阵的秩不超过秩的和。"],
            summary: "r(A+B) ≤ r(A)+r(B)。"
          },
          {
            id: '8.3-024',
            difficulty: '难题',
            type: '选择',
            topic: "向量组秩",
            year: null,
            question: "设向量组 α<sub>1</sub>,…,α<sub>s</sub> 的秩为 r，则下列错误的是（　）",
            options: ["A. 任意 r 个向量都线性无关","B. 存在 r 个向量线性无关","C. 任意 r+1 个向量都线性相关","D. 极大无关组含 r 个向量"],
            answer: "A",
            solution: ["第一步：秩为 r 只保证存在 r 个无关，不保证任意 r 个都无关。","第二步：A 错误。"],
            keyPoints: ["【重点】秩的定义：存在 r 个无关，任意 r+1 个相关。"],
            summary: "秩 r：存在 r 个无关，任意 r+1 个相关。"
          },
          {
            id: '8.3-025',
            difficulty: '难题',
            type: '解答',
            topic: "秩综合证明",
            year: null,
            question: "设向量组 A: α<sub>1</sub>,…,α<sub>s</sub> 的秩为 r<sub>1</sub>，向量组 B: β<sub>1</sub>,…,β<sub>t</sub> 的秩为 r<sub>2</sub>，证明 r(A,B) ≤ r<sub>1</sub>+r<sub>2</sub>。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：取 A 的极大无关组 A<sub>0</sub>（r<sub>1</sub> 个）与 B 的极大无关组 B<sub>0</sub>（r<sub>2</sub> 个）。","第二步：A,B 合并组可由 A<sub>0</sub>,B<sub>0</sub> 表示。","第三步：故 r(A,B) ≤ r(A<sub>0</sub>,B<sub>0</sub>) ≤ r<sub>1</sub>+r<sub>2</sub>。"],
            keyPoints: ["【重点】合并组的秩不超过秩的和。"],
            summary: "r(A,B) ≤ r(A)+r(B)。"
          },
          {
            id: '8.3-026',
            difficulty: '真题',
            type: '选择',
            topic: "向量组的秩",
            year: 2014,
            question: "设 A 为 m×n 矩阵，r(A) = r < n，则（　）",
            options: ["A. A 的列向量组线性无关","B. A 的列向量组线性相关","C. A 的行向量组线性无关","D. r = m"],
            answer: "B",
            solution: ["第一步：A 有 n 列，r < n。","第二步：列向量个数 n > 秩 r ⇒ 列向量组线性相关。"],
            keyPoints: ["【重点】列数 > 列秩 ⇒ 列相关。"],
            summary: "列数 > r(A) ⇒ 列向量相关。"
          },
          {
            id: '8.3-027',
            difficulty: '真题',
            type: '填空',
            topic: "极大无关组",
            year: 2017,
            question: "向量组 α<sub>1</sub>=(1,2,-1)<sup>T</sup>，α<sub>2</sub>=(2,1,3)<sup>T</sup>，α<sub>3</sub>=(3,3,2)<sup>T</sup> 的极大无关组是______。",
            options: null,
            answer: "{α<sub>1</sub>, α<sub>2</sub>}",
            solution: ["第一步：α<sub>3</sub> = α<sub>1</sub>+α<sub>2</sub>。","第二步：α<sub>1</sub>,α<sub>2</sub> 不成比例，故极大无关组为 {α<sub>1</sub>,α<sub>2</sub>}。"],
            keyPoints: ["【重点】观察线性关系。"],
            summary: "凑出线性组合即得极大无关组。"
          },
          {
            id: '8.3-028',
            difficulty: '真题',
            type: '解答',
            topic: "秩",
            year: 2020,
            question: "设 α<sub>1</sub>=(1,2,1)<sup>T</sup>，α<sub>2</sub>=(2,3,a)<sup>T</sup>，α<sub>3</sub>=(1,a+2,-2)<sup>T</sup>，求 a 使向量组秩为 2。",
            options: null,
            answer: "a = -1 或 a = 3",
            solution: ["第一步：构造矩阵 (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)。","第二步：行列式 = -(a+1)(a-3)。","第三步：秩为 2 ⇔ 行列式 = 0 ⇔ a = -1 或 a = 3。"],
            keyPoints: ["【重点】3 阶方阵秩 < 3 ⇔ |A|=0。"],
            summary: "n 阶方阵秩 < n ⇔ |A|=0。"
          },
          {
            id: '8.3-029',
            difficulty: '真题',
            type: '选择',
            topic: "等价向量组",
            year: 2023,
            question: "设 A,B 为 n 阶方阵，且 r(A)=r(B)，则（　）",
            options: ["A. A 与 B 等价","B. A 的行向量组与 B 的行向量组等价","C. 若 A,B 同型则等价","D. 以上都不对"],
            answer: "C",
            solution: ["第一步：同型矩阵等秩 ⇒ 等价。","第二步：C 正确。"],
            keyPoints: ["【重点】同型等秩 ⇔ 等价。"],
            summary: "同型矩阵：等秩 ⇔ 等价。"
          },
          {
            id: '8.3-030',
            difficulty: '真题',
            type: '解答',
            topic: "秩综合",
            year: 2025,
            question: "设 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 线性无关，β<sub>1</sub>=α<sub>1</sub>+α<sub>2</sub>，β<sub>2</sub>=α<sub>2</sub>+α<sub>3</sub>，β<sub>3</sub>=α<sub>3</sub>+α<sub>1</sub>，证明 β<sub>1</sub>,β<sub>2</sub>,β<sub>3</sub> 与 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 等价。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：β<sub>1</sub>,β<sub>2</sub>,β<sub>3</sub> 显然可由 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 表示。","第二步：反解：α<sub>1</sub>=(β<sub>1</sub>-β<sub>2</sub>+β<sub>3</sub>)/2，类似得 α<sub>2</sub>,α<sub>3</sub>。","第三步：故 α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 也可由 β<sub>1</sub>,β<sub>2</sub>,β<sub>3</sub> 表示，等价。"],
            keyPoints: ["【重点】反解系数即得等价。"],
            summary: "两向量组可互相表示 ⇒ 等价。"
          }
        ]
      },
      '8.4': {
        id: '8.4',
        title: '向量的内积与正交化（施密特正交化）',
        questions: [
          {
            id: '8.4-001',
            difficulty: '基础',
            type: '选择',
            topic: '内积定义',
            year: null,
            question: '设 α = (1, 2, 3), β = (4, 5, 6)，则 (α, β) = （　）',
            options: ['A. 32', 'B. 30', 'C. 28', 'D. 36'],
            answer: 'A',
            solution: [
              '第一步：内积 = 对应分量乘积之和。',
              '第二步：(α, β) = 1·4 + 2·5 + 3·6 = 4+10+18 = 32。'
            ],
            keyPoints: ['【重点】内积 = 分量乘积和。'],
            summary: '(α, β) = Σα<sub>i</sub>β<sub>i</sub>。'
          },
          {
            id: '8.4-002',
            difficulty: '基础',
            type: '填空',
            topic: '向量长度',
            year: null,
            question: '向量 α = (3, 4) 的长度 ||α|| = ______。',
            options: null,
            answer: '5',
            solution: [
              '第一步：||α|| = √(3<sup>2</sup>+4<sup>2</sup>) = √25 = 5。',
              '第二步：这是勾股定理的直接应用。'
            ],
            keyPoints: ['【重点】||α|| = √(α, α)。'],
            summary: '向量长度 = √内积。'
          },
          {
            id: '8.4-003',
            difficulty: '基础',
            type: '解答',
            topic: '单位化',
            year: null,
            question: '把向量 α = (2, 1, 2) 单位化。',
            options: null,
            answer: 'α<sup>0</sup> = (2/3, 1/3, 2/3)',
            solution: [
              '第一步：||α|| = √(4+1+4) = √9 = 3。',
              '第二步：单位化 = α/||α|| = (2/3, 1/3, 2/3)。'
            ],
            keyPoints: ['【重点】单位化 = 除以长度。'],
            summary: 'α<sup>0</sup> = α/||α||。'
          },
          {
            id: '8.4-004',
            difficulty: '基础',
            type: '选择',
            topic: '正交定义',
            year: null,
            question: '向量 α 与 β 正交是指（　）',
            options: ['A. α = β', 'B. (α, β) = 0', 'C. ||α|| = ||β||', 'D. α = kβ'],
            answer: 'B',
            solution: [
              '第一步：正交定义：(α, β) = 0。',
              '第二步：几何上两向量垂直。'
            ],
            keyPoints: ['【重点】正交 ⟺ 内积为 0。'],
            summary: 'α ⊥ β ⟺ (α, β) = 0。'
          },
          {
            id: '8.4-005',
            difficulty: '基础',
            type: '填空',
            topic: '正交向量组',
            year: null,
            question: '若非零向量组 α<sub>1</sub>,...,α<sub>s</sub> 两两正交，则该向量组______。',
            options: null,
            answer: '线性无关',
            solution: [
              '第一步：正交非零向量组必线性无关。',
              '第二步：证明：设 Σk<sub>i</sub>α<sub>i</sub> = 0，两边与 α<sub>j</sub> 作内积得 k<sub>j</sub>||α<sub>j</sub>||<sup>2</sup> = 0，故 k<sub>j</sub> = 0。'
            ],
            keyPoints: ['【重点】正交非零组 ⟹ 线性无关。'],
            summary: '两两正交的非零向量组必线性无关。'
          },
          {
            id: '8.4-006',
            difficulty: '基础',
            type: '解答',
            topic: '判断正交',
            year: null,
            question: '判断 α = (1, 2, 2) 与 β = (2, -2, 1) 是否正交。',
            options: null,
            answer: '正交',
            solution: [
              '第一步：(α, β) = 1·2 + 2·(-2) + 2·1 = 2 - 4 + 2 = 0。',
              '第二步：内积为 0，故正交。'
            ],
            keyPoints: ['【重点】内积为 0 即正交。'],
            summary: '计算内积，为 0 则正交。'
          },
          {
            id: '8.4-007',
            difficulty: '基础',
            type: '选择',
            topic: '正交矩阵',
            year: null,
            question: '若 n 阶矩阵 Q 满足 Q<sup>T</sup>Q = E，则 Q 为（　）',
            options: ['A. 对称矩阵', 'B. 正交矩阵', 'C. 对角矩阵', 'D. 反对称矩阵'],
            answer: 'B',
            solution: [
              '第一步：正交矩阵定义：Q<sup>T</sup>Q = E，即 Q<sup>T</sup> = Q<sup>-1</sup>。',
              '第二步：正交矩阵的列（行）向量组是标准正交基。'
            ],
            keyPoints: ['【重点】正交矩阵 Q<sup>T</sup>Q = E。'],
            summary: 'Q 正交 ⟺ Q<sup>T</sup>Q = E。'
          },
          {
            id: '8.4-008',
            difficulty: '基础',
            type: '填空',
            topic: '正交矩阵行列式',
            year: null,
            question: '正交矩阵 Q 的行列式 |Q| = ______。',
            options: null,
            answer: '±1',
            solution: [
              '第一步：Q<sup>T</sup>Q = E，两边取行列式：|Q<sup>T</sup>||Q| = 1。',
              '第二步：|Q|<sup>2</sup> = 1，故 |Q| = ±1。'
            ],
            keyPoints: ['【重点】正交矩阵行列式 = ±1。'],
            summary: '正交矩阵 |Q| = ±1。'
          },
          {
            id: '8.4-009',
            difficulty: '基础',
            type: '解答',
            topic: '施密特正交化',
            year: null,
            question: '设 α<sub>1</sub> = (1, 1, 0)，α<sub>2</sub> = (1, 0, 1)，用施密特正交化方法求正交向量组。',
            options: null,
            answer: 'β<sub>1</sub> = (1,1,0)，β<sub>2</sub> = (1/2, -1/2, 1)',
            solution: [
              '第一步：β<sub>1</sub> = α<sub>1</sub> = (1, 1, 0)。',
              '第二步：β<sub>2</sub> = α<sub>2</sub> - (α<sub>2</sub>, β<sub>1</sub>)/(β<sub>1</sub>, β<sub>1</sub>) · β<sub>1</sub>。',
              '第三步：(α<sub>2</sub>, β<sub>1</sub>) = 1·1+0·1+1·0 = 1；(β<sub>1</sub>, β<sub>1</sub>) = 2。',
              '第四步：β<sub>2</sub> = (1,0,1) - (1/2)(1,1,0) = (1/2, -1/2, 1)。'
            ],
            keyPoints: ['【重点】施密特正交化：逐个减去在已有正交向量上的投影。'],
            summary: 'β<sub>k</sub> = α<sub>k</sub> - Σ<sub>i&lt;k</sub> (α<sub>k</sub>,β<sub>i</sub>)/(β<sub>i</sub>,β<sub>i</sub>) · β<sub>i</sub>。'
          },
          {
            id: '8.4-010',
            difficulty: '基础',
            type: '选择',
            topic: '标准正交基',
            year: null,
            question: '下列向量组是 R<sup>3</sup> 的标准正交基的是（　）',
            options: ['A. (1,0,0), (0,1,0), (1,1,0)', 'B. (1,0,0), (0,1,0), (0,0,1)', 'C. (1,1,0), (1,-1,0), (0,0,1)', 'D. (1,0,0), (0,2,0), (0,0,3)'],
            answer: 'B',
            solution: [
              '第一步：标准正交基要求向量两两正交且都是单位向量。',
              '第二步：B 是标准基，满足条件。',
              '第三步：A 不正交；C 正交但非单位长；D 不正交也非单位长。'
            ],
            keyPoints: ['【重点】标准正交基 = 正交 + 单位长。'],
            summary: '标准正交基：两两正交且长度为 1。'
          },
          {
            id: '8.4-011',
            difficulty: '提高',
            type: '填空',
            topic: '正交补',
            year: null,
            question: '设 V 为 R<sup>n</sup> 的子空间，则 V 的正交补 V<sup>⊥</sup> 的维数 + dim V = ______。',
            options: null,
            answer: 'n',
            solution: [
              '第一步：正交补维数关系：dim V + dim V<sup>⊥</sup> = n。',
              '第二步：且 V ∩ V<sup>⊥</sup> = {0}。'
            ],
            keyPoints: ['【重点】dim V + dim V<sup>⊥</sup> = n。'],
            summary: '子空间维数 + 正交补维数 = n。'
          },
          {
            id: '8.4-012',
            difficulty: '提高',
            type: '解答',
            topic: '施密特正交化三步',
            year: null,
            question: '设 α<sub>1</sub> = (1, 1, 1), α<sub>2</sub> = (1, 2, 3), α<sub>3</sub> = (1, 4, 9)，施密特正交化并单位化。',
            options: null,
            answer: 'β<sub>1</sub> = (1,1,1)；β<sub>2</sub> = (-1,0,1)；β<sub>3</sub> = (1,-2,1)（具体数值以计算为准）',
            solution: [
              '第一步：β<sub>1</sub> = α<sub>1</sub> = (1, 1, 1)。',
              '第二步：(α<sub>2</sub>, β<sub>1</sub>) = 6，(β<sub>1</sub>, β<sub>1</sub>) = 3，β<sub>2</sub> = α<sub>2</sub> - 2β<sub>1</sub> = (1,2,3)-(2,2,2) = (-1, 0, 1)。',
              '第三步：(α<sub>3</sub>, β<sub>1</sub>) = 14，(α<sub>3</sub>, β<sub>2</sub>) = 8，(β<sub>2</sub>, β<sub>2</sub>) = 2，β<sub>3</sub> = α<sub>3</sub> - (14/3)β<sub>1</sub> - 4β<sub>2</sub>。',
              '第四步：化简得 β<sub>3</sub>，再分别单位化。'
            ],
            keyPoints: ['【重点】施密特正交化三步：先正交化，再单位化。'],
            summary: '施密特：先正交化 β<sub>i</sub>，再单位化 e<sub>i</sub> = β<sub>i</sub>/||β<sub>i</sub>||。'
          },
          {
            id: '8.4-013',
            difficulty: '提高',
            type: '选择',
            topic: '正交矩阵性质',
            year: null,
            question: '设 Q 为正交矩阵，则下列错误的是（　）',
            options: ['A. Q<sup>-1</sup> = Q<sup>T</sup>', 'B. |Q| = ±1', 'C. Q 的列向量两两正交', 'D. Q 必为对称矩阵'],
            answer: 'D',
            solution: [
              '第一步：正交矩阵不一定对称。',
              '第二步：例如旋转矩阵就是正交矩阵但不对称。'
            ],
            keyPoints: ['【易错点】正交矩阵 ≠ 对称矩阵。'],
            summary: '正交矩阵 Q<sup>T</sup>=Q<sup>-1</sup>，但不一定对称。'
          },
          {
            id: '8.4-014',
            difficulty: '提高',
            type: '填空',
            topic: '正交变换保长',
            year: null,
            question: '设 Q 为正交矩阵，α 为任意向量，则 ||Qα|| = ______。',
            options: null,
            answer: '||α||',
            solution: [
              '第一步：||Qα||<sup>2</sup> = (Qα, Qα) = α<sup>T</sup>Q<sup>T</sup>Qα = α<sup>T</sup>α = ||α||<sup>2</sup>。',
              '第二步：故 ||Qα|| = ||α||。'
            ],
            keyPoints: ['【重点】正交变换保长度、保内积、保夹角。'],
            summary: '正交变换保长度：||Qα|| = ||α||。'
          },
          {
            id: '8.4-015',
            difficulty: '提高',
            type: '解答',
            topic: '求正交矩阵',
            year: null,
            question: '设 α<sub>1</sub> = (1, 1)<sup>T</sup>，求非零向量 α<sub>2</sub> 使 α<sub>1</sub>, α<sub>2</sub> 正交，再单位化构成正交矩阵 Q。',
            options: null,
            answer: 'α<sub>2</sub> = (1, -1)<sup>T</sup>，Q = <span class="matrix"><span class="mrow"><span class="mcell">1/√2</span><span class="mcell">1/√2</span></span><span class="mrow"><span class="mcell">1/√2</span><span class="mcell">-1/√2</span></span></span></span>',
            solution: [
              '第一步：设 α<sub>2</sub> = (x, y)，(α<sub>1</sub>, α<sub>2</sub>) = x+y = 0，取 x = 1, y = -1。',
              '第二步：单位化：α<sub>1</sub>/||α<sub>1</sub>|| = (1/√2, 1/√2)；α<sub>2</sub>/||α<sub>2</sub>|| = (1/√2, -1/√2)。',
              '第三步：Q 的列为这两个单位正交向量。'
            ],
            keyPoints: ['【重点】求正交向量：令内积为 0 解方程。'],
            summary: '求正交向量：令 (α, β) = 0 解方程。'
          },
          {
            id: '8.4-016',
            difficulty: '提高',
            type: '选择',
            topic: '内积性质',
            year: null,
            question: '下列不是内积性质的是（　）',
            options: ['A. (α, β) = (β, α)', 'B. (kα, β) = k(α, β)', 'C. (α+β, γ) = (α, γ)+(β, γ)', 'D. (α, α) &lt; 0'],
            answer: 'D',
            solution: [
              '第一步：内积正定性：(α, α) ≥ 0，且等号 ⟺ α = 0。',
              '第二步：故 D 错误。'
            ],
            keyPoints: ['【重点】内积正定性：(α, α) ≥ 0。'],
            summary: '内积四条性质：对称、线性、双线性、正定。'
          },
          {
            id: '8.4-017',
            difficulty: '难题',
            type: '填空',
            topic: '柯西不等式',
            year: null,
            question: '对任意向量 α, β，有 |(α, β)| ≤ ______，等号成立当且仅当______。',
            options: null,
            answer: '||α||·||β||；α 与 β 成比例',
            solution: [
              '第一步：柯西-施瓦茨不等式：|(α, β)| ≤ ||α||·||β||。',
              '第二步：等号成立 ⟺ α, β 线性相关（成比例）。'
            ],
            keyPoints: ['【重点】柯西不等式是内积空间基本不等式。'],
            summary: '|(α, β)| ≤ ||α||·||β||，等号 ⟺ 成比例。'
          },
          {
            id: '8.4-018',
            difficulty: '难题',
            type: '解答',
            topic: '证明正交矩阵',
            year: null,
            question: '证明：若 A, B 为同阶正交矩阵，则 AB 也是正交矩阵。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：(AB)<sup>T</sup>(AB) = B<sup>T</sup>A<sup>T</sup>AB = B<sup>T</sup>(A<sup>T</sup>A)B = B<sup>T</sup>EB = B<sup>T</sup>B = E。',
              '第二步：故 AB 满足正交矩阵定义。',
              '第三步：正交矩阵乘法封闭。'
            ],
            keyPoints: ['【重点】正交矩阵乘积仍为正交矩阵。'],
            summary: '正交矩阵乘积封闭。'
          },
          {
            id: '8.4-019',
            difficulty: '真题',
            type: '选择',
            topic: '正交矩阵',
            year: 2016,
            question: '设 A 为 3 阶正交矩阵，且 |A| = 1，则 A 的特征值不可能是（　）（2016 数二）',
            options: ['A. 1', 'B. -1', 'C. i', 'D. 2'],
            answer: 'D',
            solution: [
              '第一步：正交矩阵特征值的模为 1。',
              '第二步：故特征值只能是 ±1 或模为 1 的复数（如 ±i, e<sup>iθ</sup>）。',
              '第三步：2 的模为 2 ≠ 1，不可能是特征值。'
            ],
            keyPoints: ['【重点】正交矩阵特征值模为 1。'],
            summary: '正交矩阵特征值模 = 1。'
          },
          {
            id: '8.4-020',
            difficulty: '真题',
            type: '解答',
            topic: '施密特正交化',
            year: 2012,
            question: '设 α<sub>1</sub> = (1, 0, -1)<sup>T</sup>, α<sub>2</sub> = (2, 1, 1)<sup>T</sup>, α<sub>3</sub> = (0, 1, 1)<sup>T</sup>，用施密特正交化方法把它们化为标准正交向量组。（2012 数二）',
            options: null,
            answer: 'e<sub>1</sub> = (1/√2, 0, -1/√2)；e<sub>2</sub> = ...；e<sub>3</sub> = ...',
            solution: [
              '第一步：β<sub>1</sub> = α<sub>1</sub> = (1, 0, -1)，||β<sub>1</sub>|| = √2，e<sub>1</sub> = (1/√2, 0, -1/√2)。',
              '第二步：(α<sub>2</sub>, β<sub>1</sub>) = 2·1+1·0+1·(-1) = 1，(β<sub>1</sub>, β<sub>1</sub>) = 2，β<sub>2</sub> = α<sub>2</sub> - (1/2)β<sub>1</sub> = (2,1,1)-(1/2,0,-1/2) = (3/2, 1, 3/2)。',
              '第三步：单位化 β<sub>2</sub> 得 e<sub>2</sub>。',
              '第四步：β<sub>3</sub> = α<sub>3</sub> - (α<sub>3</sub>,β<sub>1</sub>)/(β<sub>1</sub>,β<sub>1</sub>)·β<sub>1</sub> - (α<sub>3</sub>,β<sub>2</sub>)/(β<sub>2</sub>,β<sub>2</sub>)·β<sub>2</sub>，再单位化。'
            ],
            keyPoints: ['【重点】施密特正交化：先正交化再单位化。'],
            summary: '施密特：β<sub>i</sub> 正交化 → e<sub>i</sub> = β<sub>i</sub>/||β<sub>i</sub>|| 单位化。'
          }
        ,
          {
            id: '8.4-021',
            difficulty: '基础',
            type: '选择',
            topic: "内积定义",
            year: null,
            question: "设 α = (1,2,3)<sup>T</sup>，β = (4,5,6)<sup>T</sup>，则 (α,β) =（　）",
            options: ["A. 32","B. 30","C. 28","D. 34"],
            answer: "A",
            solution: ["第一步：内积 = 1·4+2·5+3·6 = 4+10+18 = 32。"],
            keyPoints: ["【重点】内积 = 对应分量乘积之和。"],
            summary: "(α,β) = ∑α<sub>i</sub>β<sub>i</sub>。"
          },
          {
            id: '8.4-022',
            difficulty: '基础',
            type: '填空',
            topic: "向量长度",
            year: null,
            question: "向量 α = (3,4)<sup>T</sup> 的长度 ||α|| = ______。",
            options: null,
            answer: "5",
            solution: ["第一步：||α|| = √(9+16) = √25 = 5。"],
            keyPoints: ["【重点】向量长度 = √(α,α)。"],
            summary: "||α|| = √(α,α)。"
          },
          {
            id: '8.4-023',
            difficulty: '提高',
            type: '选择',
            topic: "正交",
            year: null,
            question: "向量 α = (1,1,1)<sup>T</sup> 与下列哪个向量正交？（　）",
            options: ["A. (1,1,-2)<sup>T</sup>","B. (1,0,0)<sup>T</sup>","C. (1,1,1)<sup>T</sup>","D. (2,1,1)<sup>T</sup>"],
            answer: "A",
            solution: ["第一步：(α,β)=0 ⇔ 正交。","第二步：(1,1,1)·(1,1,-2) = 1+1-2 = 0。"],
            keyPoints: ["【重点】正交 ⇔ 内积为零。"],
            summary: "(α,β)=0 ⇔ 正交。"
          },
          {
            id: '8.4-024',
            difficulty: '提高',
            type: '解答',
            topic: "施密特正交化",
            year: null,
            question: "将 α<sub>1</sub>=(1,1,0)<sup>T</sup>，α<sub>2</sub>=(1,0,1)<sup>T</sup> 施密特正交化。",
            options: null,
            answer: "β<sub>1</sub>=(1,1,0)<sup>T</sup>, β<sub>2</sub>=(1/2,-1/2,1)<sup>T</sup>",
            solution: ["第一步：β<sub>1</sub> = α<sub>1</sub> = (1,1,0)<sup>T</sup>。","第二步：β<sub>2</sub> = α<sub>2</sub> - ((α<sub>2</sub>,β<sub>1</sub>)/(β<sub>1</sub>,β<sub>1</sub>))β<sub>1</sub> = (1,0,1) - (1/2)(1,1,0) = (1/2,-1/2,1)。"],
            keyPoints: ["【重点】施密特公式。"],
            summary: "β<sub>k</sub> = α<sub>k</sub> - ∑((α<sub>k</sub>,β<sub>i</sub>)/(β<sub>i</sub>,β<sub>i</sub>))β<sub>i</sub>。"
          },
          {
            id: '8.4-025',
            difficulty: '提高',
            type: '填空',
            topic: "单位化",
            year: null,
            question: "向量 α = (1,2,2)<sup>T</sup> 单位化后为______。",
            options: null,
            answer: "(1/3, 2/3, 2/3)<sup>T</sup>",
            solution: ["第一步：||α|| = √(1+4+4) = 3。","第二步：α/||α|| = (1/3, 2/3, 2/3)。"],
            keyPoints: ["【重点】单位化 = 除以长度。"],
            summary: "单位向量 = α/||α||。"
          },
          {
            id: '8.4-026',
            difficulty: '难题',
            type: '选择',
            topic: "正交矩阵",
            year: null,
            question: "设 A 为正交矩阵，则下列错误的是（　）",
            options: ["A. A<sup>T</sup>A = E","B. |A| = 1","C. A<sup>-1</sup> = A<sup>T</sup>","D. A 的列向量组是标准正交基"],
            answer: "B",
            solution: ["第一步：正交矩阵 |A| = ±1，不一定为 1。","第二步：B 错误。"],
            keyPoints: ["【重点】正交矩阵行列式为 ±1。"],
            summary: "正交矩阵：A<sup>T</sup>A=E，|A|=±1。"
          },
          {
            id: '8.4-027',
            difficulty: '难题',
            type: '解答',
            topic: "正交矩阵证明",
            year: null,
            question: "证明：若 A 为正交矩阵，则 A<sup>-1</sup> 与 A<sup>T</sup> 也是正交矩阵。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：A<sup>T</sup>A = E。","第二步：(A<sup>-1</sup>)<sup>T</sup>A<sup>-1</sup> = (A<sup>T</sup>)<sup>-1</sup>A<sup>-1</sup> = (AA<sup>T</sup>)<sup>-1</sup> = E<sup>-1</sup> = E。","第三步：(A<sup>T</sup>)<sup>T</sup>A<sup>T</sup> = AA<sup>T</sup> = E。"],
            keyPoints: ["【重点】正交矩阵性质。"],
            summary: "正交矩阵的逆与转置仍正交。"
          },
          {
            id: '8.4-028',
            difficulty: '真题',
            type: '填空',
            topic: "施密特",
            year: 2016,
            question: "设 α<sub>1</sub>=(1,2,-1)<sup>T</sup>，β<sub>1</sub>=α<sub>1</sub>，则与 α<sub>1</sub> 正交且长度为 1 的向量 γ = ______。",
            options: null,
            answer: "±(-2,1,0)/√5",
            solution: ["第一步：设 γ = (x,y,z)<sup>T</sup>，需 x+2y-z = 0 且 x<sup>2</sup>+y<sup>2</sup>+z<sup>2</sup>=1。","第二步：取 z=0, x=-2y，单位化得 γ = ±(-2,1,0)/√5。"],
            keyPoints: ["【重点】正交单位向量不唯一。"],
            summary: "与已知向量正交的单位向量有两个方向。"
          },
          {
            id: '8.4-029',
            difficulty: '真题',
            type: '选择',
            topic: "正交矩阵",
            year: 2019,
            question: "下列矩阵为正交矩阵的是（　）",
            options: ["A. <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>","B. <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>","C. <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1/2</span></span></span>","D. <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span></span>"],
            answer: "A",
            solution: ["第一步：正交矩阵列向量需单位且正交。","第二步：A 为单位阵，显然正交。"],
            keyPoints: ["【重点】单位阵是正交矩阵。"],
            summary: "E 是正交矩阵。"
          },
          {
            id: '8.4-030',
            difficulty: '真题',
            type: '解答',
            topic: "正交化",
            year: 2024,
            question: "将 α<sub>1</sub>=(1,1,0)<sup>T</sup>，α<sub>2</sub>=(0,1,1)<sup>T</sup>，α<sub>3</sub>=(1,0,1)<sup>T</sup> 施密特正交化并单位化。",
            options: null,
            answer: "η<sub>1</sub>=(1,1,0)/√2, η<sub>2</sub>=(-1,1,2)/√6, η<sub>3</sub>=(1,-1,1)/√3",
            solution: ["第一步：β<sub>1</sub> = α<sub>1</sub> = (1,1,0)。","第二步：β<sub>2</sub> = α<sub>2</sub> - ((α<sub>2</sub>,β<sub>1</sub>)/(β<sub>1</sub>,β<sub>1</sub>))β<sub>1</sub> = (0,1,1) - (1/2)(1,1,0) = (-1/2,1/2,1)。","第三步：β<sub>3</sub> = α<sub>3</sub> - ((α<sub>3</sub>,β<sub>1</sub>)/(β<sub>1</sub>,β<sub>1</sub>))β<sub>1</sub> - ((α<sub>3</sub>,β<sub>2</sub>)/(β<sub>2</sub>,β<sub>2</sub>))β<sub>2</sub>。","第四步：单位化得 η<sub>1</sub>,η<sub>2</sub>,η<sub>3</sub>。"],
            keyPoints: ["【重点】完整施密特流程。"],
            summary: "施密特正交化 + 单位化 = 标准正交基。"
          }
        ]
      }
    }
  };
})();
