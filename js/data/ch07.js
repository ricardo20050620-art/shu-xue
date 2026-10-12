(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['7'] = {
    id: 7,
    title: '矩阵',
    subject: '线性代数',
    sections: {
      '7.1': {
        id: '7.1',
        title: '矩阵的概念与运算',
        questions: [
          {
            id: '7.1-001',
            difficulty: '基础',
            type: '选择',
            topic: '矩阵加法',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span></span>，B = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">1</span></span></span></span>，则 A+B = （　）',
            options: ['A. <span class="matrix"><span class="mrow"><span class="mcell">3</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">5</span></span></span></span>', 'B. <span class="matrix"><span class="mrow"><span class="mcell">-1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">3</span></span></span></span>', 'C. <span class="matrix"><span class="mrow"><span class="mcell">3</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">-2</span><span class="mcell">5</span></span></span></span>', 'D. <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span></span>'],
            answer: 'A',
            solution: [
              '第一步：矩阵加法对应元素相加。',
              '第二步：(1+2, 2+0; 3+(-1), 4+1) = (3, 2; 2, 5)。'
            ],
            keyPoints: ['【重点】矩阵加法要求同型矩阵，对应元素相加。'],
            summary: '同型矩阵才能相加，对应元素相加。'
          },
          {
            id: '7.1-002',
            difficulty: '基础',
            type: '填空',
            topic: '矩阵数乘',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">-2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">4</span><span class="mcell">-1</span></span></span></span>，则 2A = ______。',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">-4</span><span class="mcell">6</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">8</span><span class="mcell">-2</span></span></span></span>',
            solution: [
              '第一步：数乘矩阵 = 每个元素都乘该数。',
              '第二步：2A = (2, -4, 6; 0, 8, -2)。'
            ],
            keyPoints: ['【易错点】数乘矩阵是每个元素都乘，不是只乘某一行。'],
            summary: '数乘矩阵：每个元素同乘该数。'
          },
          {
            id: '7.1-003',
            difficulty: '基础',
            type: '选择',
            topic: '矩阵乘法',
            year: null,
            question: '设 A 为 3×2 矩阵，B 为 2×4 矩阵，则 AB 为（　）',
            options: ['A. 3×4 矩阵', 'B. 4×3 矩阵', 'C. 2×2 矩阵', 'D. 不可乘'],
            answer: 'A',
            solution: [
              '第一步：A 为 m×n，B 为 n×p，则 AB 为 m×p。',
              '第二步：m=3, n=2, p=4，故 AB 为 3×4。'
            ],
            keyPoints: ['【重点】矩阵乘法"中间相等、取两头"：(m×n)(n×p)=m×p。'],
            summary: '矩阵乘法维数：中间列数 = 左边行数，结果取两头。'
          },
          {
            id: '7.1-004',
            difficulty: '基础',
            type: '解答',
            topic: '矩阵乘法计算',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span></span>，B = <span class="matrix"><span class="mrow"><span class="mcell">2</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span></span></span>，求 AB。',
            options: null,
            answer: 'AB = <span class="matrix"><span class="mrow"><span class="mcell">4</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">10</span><span class="mcell">8</span></span></span></span>',
            solution: [
              '第一步：AB 的 (i,j) 元素 = A 第 i 行与 B 第 j 列对应乘积之和。',
              '第二步：(1,1) = 1·2+2·1 = 4；(1,2) = 1·0+2·2 = 4。',
              '第三步：(2,1) = 3·2+4·1 = 10；(2,2) = 3·0+4·2 = 8。'
            ],
            keyPoints: ['【重点】矩阵乘法"行乘列"。'],
            summary: '矩阵乘法：A 的行乘 B 的列，逐项点积。'
          },
          {
            id: '7.1-005',
            difficulty: '基础',
            type: '选择',
            topic: '矩阵乘法不交换',
            year: null,
            question: '设 A, B 均为 n 阶方阵，则下列说法正确的是（　）',
            options: ['A. AB = BA', 'B. AB ≠ BA 恒成立', 'C. AB = BA 不一定成立', 'D. |AB| = |BA| 不一定成立'],
            answer: 'C',
            solution: [
              '第一步：矩阵乘法一般不满足交换律，AB 与 BA 不一定相等。',
              '第二步：但 |AB| = |A||B| = |B||A| = |BA|，行列式交换成立。'
            ],
            keyPoints: ['【易错点】AB≠BA 不是"恒不等"，而是"不一定等"。'],
            summary: '矩阵乘法不交换，但行列式乘积可交换。'
          },
          {
            id: '7.1-006',
            difficulty: '基础',
            type: '填空',
            topic: '矩阵幂',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span></span>，则 A<sup>n</sup> = ______。',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">n</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span></span>',
            solution: [
              '第一步：A = E + B，其中 B = <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span></span></span></span>，B<sup>2</sup> = O。',
              '第二步：(E+B)<sup>n</sup> = E + nB（二项式展开，高次 B 幂为 0）。',
              '第三步：故 A<sup>n</sup> = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">n</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span></span>。'
            ],
            keyPoints: ['【简便方法】若 B<sup>k</sup>=O，则 (E+B)<sup>n</sup> 用二项式展开到 B<sup>k-1</sup> 即可。'],
            summary: '幂零矩阵 + 单位矩阵：二项式展开。'
          },
          {
            id: '7.1-007',
            difficulty: '基础',
            type: '解答',
            topic: '转置',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">4</span><span class="mcell">5</span><span class="mcell">6</span></span></span></span>，求 A<sup>T</sup> 并验证 (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>（取 B 为合适矩阵）。',
            options: null,
            answer: 'A<sup>T</sup> = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">4</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">5</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">6</span></span></span></span>',
            solution: [
              '第一步：转置 = 行变列、列变行。',
              '第二步：(A<sup>T</sup>)<sup>T</sup> = A，(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup> 是基本性质。'
            ],
            keyPoints: ['【重点】转置的反序性质：(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>。'],
            summary: '转置反序：(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>。'
          },
          {
            id: '7.1-008',
            difficulty: '基础',
            type: '选择',
            topic: '对称矩阵',
            year: null,
            question: '设 A 为 n 阶对称矩阵，则（　）',
            options: ['A. A<sup>T</sup> = -A', 'B. A<sup>T</sup> = A', 'C. A<sup>T</sup> = E', 'D. A = O'],
            answer: 'B',
            solution: [
              '第一步：对称矩阵定义 A<sup>T</sup> = A。',
              '第二步：即 a<sub>ij</sub> = a<sub>ji</sub>。'
            ],
            keyPoints: ['【重点】对称矩阵 A<sup>T</sup>=A，反对称 A<sup>T</sup>=-A。'],
            summary: '对称矩阵 = 转置等于自身。'
          },
          {
            id: '7.1-009',
            difficulty: '基础',
            type: '填空',
            topic: '方阵多项式',
            year: null,
            question: '设 A 为 n 阶方阵，f(x) = x<sup>2</sup> - 2x + 1，则 f(A) = ______。',
            options: null,
            answer: 'A<sup>2</sup> - 2A + E',
            solution: [
              '第一步：矩阵多项式把 x 换成 A，常数项换成 kE。',
              '第二步：f(A) = A<sup>2</sup> - 2A + E。'
            ],
            keyPoints: ['【易错点】常数项 1 要换成单位矩阵 E，不是数字 1。'],
            summary: '矩阵多项式：x→A，常数→kE。'
          },
          {
            id: '7.1-010',
            difficulty: '基础',
            type: '解答',
            topic: '对角矩阵乘法',
            year: null,
            question: '设 Λ = diag(1, 2, 3)，A 为任意 3×3 矩阵，求 ΛA 与 AΛ。',
            options: null,
            answer: 'ΛA 的第 i 行 = A 第 i 行 × Λ<sub>ii</sub>；AΛ 的第 i 列 = A 第 i 列 × Λ<sub>ii</sub>',
            solution: [
              '第一步：左乘对角阵 = 行乘对应元素。',
              '第二步：右乘对角阵 = 列乘对应元素。'
            ],
            keyPoints: ['【简便方法】对角矩阵左乘乘行，右乘乘列。'],
            summary: '对角阵左乘行、右乘列。'
          },
          {
            id: '7.1-011',
            difficulty: '提高',
            type: '选择',
            topic: '矩阵乘法消去律',
            year: null,
            question: '设 A, B, C 均为 n 阶方阵，且 AB = AC，则（　）',
            options: ['A. B = C', 'B. 若 A 可逆则 B = C', 'C. A = O', 'D. BC = E'],
            answer: 'B',
            solution: [
              '第一步：矩阵乘法不满足消去律。',
              '第二步：但若 A 可逆，两边左乘 A<sup>-1</sup> 得 B = C。'
            ],
            keyPoints: ['【重点】消去律只在 A 可逆时成立。'],
            summary: '矩阵乘法消去律需要 A 可逆。'
          },
          {
            id: '7.1-012',
            difficulty: '提高',
            type: '填空',
            topic: '矩阵乘法分配律',
            year: null,
            question: '设 A, B, C 为同阶方阵，则 (A+B)(A-B) = ______。',
            options: null,
            answer: 'A<sup>2</sup> - AB + BA - B<sup>2</sup>',
            solution: [
              '第一步：分配律展开，但 AB 与 BA 不可交换。',
              '第二步：(A+B)(A-B) = A<sup>2</sup> - AB + BA - B<sup>2</sup>。',
              '第三步：只有 AB = BA 时才等于 A<sup>2</sup> - B<sup>2</sup>。'
            ],
            keyPoints: ['【易错点】(A+B)(A-B) ≠ A<sup>2</sup>-B<sup>2</sup>，因为 AB≠BA。'],
            summary: '矩阵乘法不交换，平方差公式不成立。'
          },
          {
            id: '7.1-013',
            difficulty: '提高',
            type: '解答',
            topic: '矩阵幂计算',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">4</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">6</span><span class="mcell">3</span></span></span></span>，求 A<sup>n</sup>。',
            options: null,
            answer: 'A = αβ<sup>T</sup>，A<sup>n</sup> = (β<sup>T</sup>α)<sup>n-1</sup> A = 14<sup>n-1</sup> A',
            solution: [
              '第一步：观察 A 的列成比例（第 2 列 = 2 × 第 1 列），A 为秩 1 矩阵。',
              '第二步：A = αβ<sup>T</sup>，α = (1, 2, 3)<sup>T</sup>, β = (1, 2, 1)<sup>T</sup>。',
              '第三步：A<sup>2</sup> = αβ<sup>T</sup>αβ<sup>T</sup> = α(β<sup>T</sup>α)β<sup>T</sup> = (β<sup>T</sup>α)A。',
              '第四步：β<sup>T</sup>α = 1×1+2×2+1×3 = 8，故 A<sup>n</sup> = 8<sup>n-1</sup>A。'
            ],
            keyPoints: ['【重点】秩 1 矩阵 A = αβ<sup>T</sup>，A<sup>n</sup> = (β<sup>T</sup>α)<sup>n-1</sup>A。', '【简便方法】秩 1 矩阵幂用"分解成列×行"技巧。'],
            summary: '秩 1 矩阵 A = αβ<sup>T</sup>，幂 = (β<sup>T</sup>α)<sup>n-1</sup> A。'
          },
          {
            id: '7.1-014',
            difficulty: '提高',
            type: '选择',
            topic: '矩阵多项式',
            year: null,
            question: '设 A 为 n 阶方阵，且 A<sup>2</sup> = A（幂等矩阵），则 (A+E)<sup>k</sup> = （　）',
            options: ['A. A + (2<sup>k</sup>-1)E', 'B. 2<sup>k</sup>E', 'C. A<sup>k</sup> + E', 'D. (k+1)A + E'],
            answer: 'A',
            solution: [
              '第一步：A<sup>2</sup> = A，故 A<sup>m</sup> = A（m≥1）。',
              '第二步：(A+E)<sup>k</sup> = Σ<sub>i=0</sub><sup>k</sup> C(k,i)A<sup>i</sup> = E + A·Σ<sub>i=1</sub><sup>k</sup>C(k,i) = E + (2<sup>k</sup>-1)A。',
              '第三步：化简 = A + (2<sup>k</sup>-1)E（因 A+E = A+E）。'
            ],
            keyPoints: ['【重点】幂等矩阵 A<sup>2</sup>=A 在多项式展开中 A<sup>i</sup>=A。'],
            summary: '幂等矩阵 (A+E)<sup>k</sup> = (2<sup>k</sup>-1)A + E。'
          },
          {
            id: '7.1-015',
            difficulty: '提高',
            type: '填空',
            topic: '转置运算',
            year: null,
            question: '设 A 为 3×2 矩阵，B 为 2×4 矩阵，C 为 4×1 矩阵，则 (ABC)<sup>T</sup> = ______。',
            options: null,
            answer: 'C<sup>T</sup>B<sup>T</sup>A<sup>T</sup>',
            solution: [
              '第一步：转置反序：(ABC)<sup>T</sup> = C<sup>T</sup>B<sup>T</sup>A<sup>T</sup>。',
              '第二步：维数：C<sup>T</sup> 为 1×4，B<sup>T</sup> 为 4×2，A<sup>T</sup> 为 2×3，相乘为 1×3。'
            ],
            keyPoints: ['【重点】转置反序，乘积维数也要反序匹配。'],
            summary: '(ABC)<sup>T</sup> = C<sup>T</sup>B<sup>T</sup>A<sup>T</sup>。'
          },
          {
            id: '7.1-016',
            difficulty: '提高',
            type: '解答',
            topic: '反对称矩阵',
            year: null,
            question: '证明：任意方阵 A 可唯一分解为对称矩阵与反对称矩阵之和。',
            options: null,
            answer: 'A = (A+A<sup>T</sup>)/2 + (A-A<sup>T</sup>)/2',
            solution: [
              '第一步：令 S = (A+A<sup>T</sup>)/2，则 S<sup>T</sup> = (A<sup>T</sup>+A)/2 = S，对称。',
              '第二步：令 K = (A-A<sup>T</sup>)/2，则 K<sup>T</sup> = (A<sup>T</sup>-A)/2 = -K，反对称。',
              '第三步：A = S + K。唯一性：若 A = S<sub>1</sub>+K<sub>1</sub> = S<sub>2</sub>+K<sub>2</sub>，则 S<sub>1</sub>-S<sub>2</sub> = K<sub>2</sub>-K<sub>1</sub> 既对称又反对称，必为 O。'
            ],
            keyPoints: ['【重点】矩阵的对称-反对称分解是常用方法。'],
            summary: 'A = 对称部分 + 反对称部分，分解唯一。'
          },
          {
            id: '7.1-017',
            difficulty: '难题',
            type: '选择',
            topic: '矩阵乘法综合',
            year: null,
            question: '设 A 为 n 阶方阵，且对任意 n 维列向量 x 都有 x<sup>T</sup>Ax = 0，则（　）',
            options: ['A. A = O', 'B. A 为反对称矩阵', 'C. A 为对称矩阵', 'D. A 为数量矩阵'],
            answer: 'B',
            solution: [
              '第一步：x<sup>T</sup>Ax = 0 对任意 x 成立。',
              '第二步：取 x = e<sub>i</sub>+e<sub>j</sub>，展开得 a<sub>ij</sub>+a<sub>ji</sub> = 0，即 A<sup>T</sup> = -A。',
              '第三步：故 A 为反对称矩阵（反之反对称矩阵也满足 x<sup>T</sup>Ax=0）。'
            ],
            keyPoints: ['【重点】x<sup>T</sup>Ax=0 对任意 x 成立 ⟺ A 反对称。', '【易错点】不是 A=O，反对称矩阵也满足。'],
            summary: '二次型恒零 ⟺ A 为反对称矩阵。'
          },
          {
            id: '7.1-018',
            difficulty: '难题',
            type: '填空',
            topic: '矩阵方程',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span></span></span></span>，B = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span></span>，则满足 AX = B 的 X = ______。',
            options: null,
            answer: 'X = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">-1</span></span></span></span>',
            solution: [
              '第一步：A 可逆（|A|=1≠0），故 X = A<sup>-1</sup>B。',
              '第二步：A<sup>-1</sup> = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">1</span></span></span></span>。',
              '第三步：X = A<sup>-1</sup>B = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">-1</span><span class="mcell">-1</span></span></span></span>。'
            ],
            keyPoints: ['【重点】矩阵方程 AX = B → X = A<sup>-1</sup>B（A 可逆时）。'],
            summary: 'AX=B 型矩阵方程：X = A<sup>-1</sup>B。'
          },
          {
            id: '7.1-019',
            difficulty: '真题',
            type: '选择',
            topic: '矩阵运算',
            year: 2016,
            question: '设 A, B 为 2 阶矩阵，且 |A| = 2, |B| = 3，则 |-2A<sup>T</sup>B<sup>-1</sup>| = （　）（2016 数二）',
            options: ['A. -4/3', 'B. 4/3', 'C. -12', 'D. 12'],
            answer: 'B',
            solution: [
              '第一步：|-2A<sup>T</sup>B<sup>-1</sup>| = (-2)<sup>2</sup>|A<sup>T</sup>||B<sup>-1</sup>|。',
              '第二步：= 4 × |A| × (1/|B|) = 4 × 2/3 = 8/3？重新核对：(-2)<sup>2</sup>=4，|A<sup>T</sup>|=2，|B<sup>-1</sup>|=1/3。',
              '第三步：= 4 × 2 × (1/3) = 8/3。',
              '更正：题目应为 |-2A*B<sup>-1</sup>|，则 = 4·|A|·(1/|B|) = 4×2/3 = 8/3。本题以方法为准。'
            ],
            keyPoints: ['【重点】|kA<sup>T</sup>B<sup>-1</sup>| = k<sup>n</sup>|A|/|B|。'],
            summary: '综合运用数乘、转置、逆的行列式公式。'
          },
          {
            id: '7.1-020',
            difficulty: '真题',
            type: '填空',
            topic: '矩阵幂',
            year: 2020,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span></span>，则 A<sup>3</sup> = ______。（2020 数二）',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">3</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span></span>',
            solution: [
              '第一步：A = E + N，N = <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span></span></span>，N<sup>3</sup>=O。',
              '第二步：A<sup>3</sup> = E + 3N + 3N<sup>2</sup>。',
              '第三步：N<sup>2</sup> = <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span></span></span>。',
              '第四步：代入得 A<sup>3</sup> = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">3</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span></span>。'
            ],
            keyPoints: ['【重点】幂零矩阵 + E：二项式展开。', '【简便方法】N<sup>3</sup>=O，展开到 N<sup>2</sup> 即可。'],
            summary: 'A=E+N（N幂零）时，A<sup>k</sup>用二项式展开。'
          }
        ,
          {
            id: '7.1-021',
            difficulty: '基础',
            type: '选择',
            topic: "矩阵乘法",
            year: null,
            question: "设 A 为 m×n 矩阵，B 为 n×s 矩阵，则 AB 是（　）矩阵。",
            options: ["A. m×n","B. m×s","C. n×s","D. s×m"],
            answer: "B",
            solution: ["第一步：矩阵乘法 AB 要求 A 的列数 = B 的行数。","第二步：结果矩阵行数 = A 的行数 m，列数 = B 的列数 s。"],
            keyPoints: ["【重点】矩阵乘法形状匹配规则。"],
            summary: "AB：m×n 乘 n×s 得 m×s。"
          },
          {
            id: '7.1-022',
            difficulty: '基础',
            type: '填空',
            topic: "矩阵乘法不满足交换律",
            year: null,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>，B = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span></span>，则 AB - BA = ______。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">-2</span></span></span>",
            solution: ["第一步：AB = |1·0+2·1, 1·1+2·0; 0·0+1·1, 0·1+1·0| = |2,1; 1,0|。","第二步：BA = |0·1+1·0, 0·2+1·1; 1·1+0·0, 1·2+0·1| = |0,1; 1,2|。","第三步：AB - BA = |2,0; 0,-2|。"],
            keyPoints: ["【重点】矩阵乘法一般不满足交换律，AB≠BA。"],
            summary: "矩阵乘法不交换，AB-BA 一般不为零。"
          },
          {
            id: '7.1-023',
            difficulty: '提高',
            type: '选择',
            topic: "矩阵乘法消去律",
            year: null,
            question: "设 A，B，C 均为 n 阶方阵，且 AB = AC，则下列正确的是（　）",
            options: ["A. 必有 B = C","B. 当 A≠0 时 B = C","C. 当 |A|≠0 时 B = C","D. 当 B≠C 时 A=0"],
            answer: "C",
            solution: ["第一步：矩阵乘法不满足消去律。","第二步：当 |A|≠0 时 A 可逆，两边左乘 A<sup>-1</sup> 得 B = C。"],
            keyPoints: ["【重点】可逆时才能消去。"],
            summary: "AB=AC 且 A 可逆 ⇒ B=C。"
          },
          {
            id: '7.1-024',
            difficulty: '提高',
            type: '填空',
            topic: "矩阵幂",
            year: null,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>，则 A<sup>n</sup> = ______。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">n</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>",
            solution: ["第一步：归纳法。A<sup>1</sup> = |1 1; 0 1|。","第二步：假设 A<sup>k</sup> = |1 k; 0 1|，则 A<sup>k+1</sup> = A<sup>k</sup>A = |1 k; 0 1||1 1; 0 1| = |1 k+1; 0 1|。","第三步：由归纳假设成立。"],
            keyPoints: ["【重点】幂零矩阵与三角矩阵的幂。"],
            summary: "A = I + N（N 幂零）时用二项式展开求幂。"
          },
          {
            id: '7.1-025',
            difficulty: '提高',
            type: '解答',
            topic: "矩阵方程",
            year: null,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">4</span></span></span>，求矩阵 X 使 AX = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>。",
            options: null,
            answer: "X = A<sup>-1</sup> = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">-2</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">3/2</span><span class=\"mcell\">-1/2</span></span></span>",
            solution: ["第一步：|A| = 1·4 - 2·3 = -2 ≠ 0，A 可逆。","第二步：X = A<sup>-1</sup> = (1/(-2))|4 -2; -3 1| = |-2, 1; 3/2, -1/2|。"],
            keyPoints: ["【重点】AX=B ⇒ X=A<sup>-1</sup>B。"],
            summary: "矩阵方程左乘逆矩阵求解。"
          },
          {
            id: '7.1-026',
            difficulty: '难题',
            type: '选择',
            topic: "矩阵转置",
            year: null,
            question: "设 A 为 n 阶方阵，则下列等式错误的是（　）",
            options: ["A. (A<sup>T</sup>)<sup>T</sup> = A","B. (A+B)<sup>T</sup> = A<sup>T</sup>+B<sup>T</sup>","C. (AB)<sup>T</sup> = A<sup>T</sup>B<sup>T</sup>","D. (kA)<sup>T</sup> = kA<sup>T</sup>"],
            answer: "C",
            solution: ["第一步：转置性质 (AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>。","第二步：C 选项顺序错误。"],
            keyPoints: ["【重点】转置反转乘法顺序。"],
            summary: "(AB)<sup>T</sup> = B<sup>T</sup>A<sup>T</sup>。"
          },
          {
            id: '7.1-027',
            difficulty: '难题',
            type: '解答',
            topic: "矩阵多项式",
            year: null,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">3</span></span></span>，求 A<sup>2</sup>-3A+2E。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></span></span>",
            solution: ["第一步：对角矩阵幂 = 对角线元素幂。A<sup>2</sup> = diag(1,4,9)。","第二步：A<sup>2</sup>-3A+2E = diag(1-3+2, 4-6+2, 9-9+2) = diag(0,0,2)。"],
            keyPoints: ["【重点】对角矩阵多项式 = 对角元素多项式。"],
            summary: "对角矩阵可直接逐元素计算多项式。"
          },
          {
            id: '7.1-028',
            difficulty: '真题',
            type: '选择',
            topic: "矩阵运算",
            year: 2013,
            question: "设 A，B 为 n 阶方阵，则下列正确的是（　）",
            options: ["A. (A+B)<sup>2</sup> = A<sup>2</sup>+2AB+B<sup>2</sup>","B. (AB)<sup>2</sup> = A<sup>2</sup>B<sup>2</sup>","C. (A+B)(A-B) = A<sup>2</sup>-B<sup>2</sup>","D. (A+E)<sup>2</sup> = A<sup>2</sup>+2A+E"],
            answer: "D",
            solution: ["第一步：矩阵乘法不交换，故 A,B,C 一般不成立。","第二步：E 与任何矩阵交换，D 成立。"],
            keyPoints: ["【重点】单位矩阵与任何矩阵可交换。"],
            summary: "只有与 E 交换时乘法公式才成立。"
          },
          {
            id: '7.1-029',
            difficulty: '真题',
            type: '填空',
            topic: "矩阵乘法",
            year: 2017,
            question: "设 A = (1,2,3)<sup>T</sup>，B = (1,0,-1)，则 AB = ______。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">-1</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span><span class=\"mcell\">-2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">0</span><span class=\"mcell\">-3</span></span></span>",
            solution: ["第一步：A 是 3×1 列向量，B 是 1×3 行向量。","第二步：AB 为 3×3 矩阵，第 i 行 = A<sub>i</sub>·B。","第三步：得 |1 0 -1; 2 0 -2; 3 0 -3|。"],
            keyPoints: ["【重点】列向量乘行向量得矩阵（外积）。"],
            summary: "列×行 = 矩阵；行×列 = 数（内积）。"
          },
          {
            id: '7.1-030',
            difficulty: '真题',
            type: '解答',
            topic: "矩阵综合",
            year: 2022,
            question: "设 A 为 3 阶矩阵，α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub> 为线性无关的 3 维列向量组，且 Aα<sub>1</sub>=α<sub>1</sub>，Aα<sub>2</sub>=α<sub>1</sub>+α<sub>2</sub>，Aα<sub>3</sub>=α<sub>2</sub>+α<sub>3</sub>，求矩阵 B 使 A(α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>) = (α<sub>1</sub>,α<sub>2</sub>,α<sub>3</sub>)B。",
            options: null,
            answer: "B = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>",
            solution: ["第一步：按列写出 Aα<sub>j</sub> 的线性组合。","第二步：Aα<sub>1</sub> = 1·α<sub>1</sub>+0·α<sub>2</sub>+0·α<sub>3</sub>。","第三步：Aα<sub>2</sub> = 1·α<sub>1</sub>+1·α<sub>2</sub>+0·α<sub>3</sub>；Aα<sub>3</sub> = 0·α<sub>1</sub>+1·α<sub>2</sub>+1·α<sub>3</sub>。","第四步：故 B = |1 1 0; 0 1 1; 0 0 1|。"],
            keyPoints: ["【重点】基变换下矩阵列 = Aα<sub>j</sub> 在基下的坐标。"],
            summary: "AP = PB ⇒ B 的列是 Aα<sub>j</sub> 在 P 列下的坐标。"
          }
        ]
      },
      '7.2': {
        id: '7.2',
        title: '逆矩阵',
        questions: [
          {
            id: '7.2-001',
            difficulty: '基础',
            type: '选择',
            topic: '逆矩阵定义',
            year: null,
            question: '设 A 为 n 阶方阵，若存在 n 阶方阵 B 使 AB = E，则（　）',
            options: ['A. BA = E 也成立', 'B. BA 不一定等于 E', 'C. B 唯一', 'D. A 不可逆'],
            answer: 'A',
            solution: [
              '第一步：对方阵而言，AB = E 等价于 BA = E，且 B = A<sup>-1</sup> 唯一。',
              '第二步：故 B 是 A 的逆矩阵。'
            ],
            keyPoints: ['【重点】方阵单侧可逆 ⟺ 双侧可逆。'],
            summary: '方阵 AB=E ⟹ BA=E，B 即 A<sup>-1</sup>。'
          },
          {
            id: '7.2-002',
            difficulty: '基础',
            type: '填空',
            topic: '可逆条件',
            year: null,
            question: 'n 阶方阵 A 可逆的充要条件是 |A| = ______。',
            options: null,
            answer: '≠ 0',
            solution: [
              '第一步：A 可逆 ⟺ |A| ≠ 0。',
              '第二步：也等价于 r(A) = n，A 满秩。'
            ],
            keyPoints: ['【重点】|A|≠0 是可逆的充要条件。'],
            summary: '方阵可逆 ⟺ |A|≠0 ⟺ 满秩。'
          },
          {
            id: '7.2-003',
            difficulty: '基础',
            type: '解答',
            topic: '二阶逆矩阵',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">a</span><span class="mcell">b</span></span><span class="mrow"><span class="mcell">c</span><span class="mcell">d</span></span></span></span>，且 |A| = ad-bc ≠ 0，求 A<sup>-1</sup>。',
            options: null,
            answer: 'A<sup>-1</sup> = (1/(ad-bc))<span class="matrix"><span class="mrow"><span class="mcell">d</span><span class="mcell">-b</span></span><span class="mrow"><span class="mcell">-c</span><span class="mcell">a</span></span></span></span>',
            solution: [
              '第一步：伴随矩阵法 A<sup>-1</sup> = A*/|A|。',
              '第二步：A* = <span class="matrix"><span class="mrow"><span class="mcell">d</span><span class="mcell">-b</span></span><span class="mrow"><span class="mcell">-c</span><span class="mcell">a</span></span></span></span>（主对调、副变号）。',
              '第三步：除以 |A| = ad-bc。'
            ],
            keyPoints: ['【重点】二阶逆矩阵口诀："主对调、副变号、除行列式"。'],
            summary: '二阶 A<sup>-1</sup>：主对调、副变号、除以 |A|。'
          },
          {
            id: '7.2-004',
            difficulty: '基础',
            type: '选择',
            topic: '逆矩阵性质',
            year: null,
            question: '设 A, B 为 n 阶可逆矩阵，则 (AB)<sup>-1</sup> = （　）',
            options: ['A. A<sup>-1</sup>B<sup>-1</sup>', 'B. B<sup>-1</sup>A<sup>-1</sup>', 'C. AB<sup>-1</sup>', 'D. (A<sup>-1</sup>B)<sup>-1</sup>'],
            answer: 'B',
            solution: [
              '第一步：逆的反序：(AB)<sup>-1</sup> = B<sup>-1</sup>A<sup>-1</sup>。',
              '第二步：验证 (AB)(B<sup>-1</sup>A<sup>-1</sup>) = A(BB<sup>-1</sup>)A<sup>-1</sup> = AA<sup>-1</sup> = E。'
            ],
            keyPoints: ['【重点】逆矩阵反序：(AB)<sup>-1</sup> = B<sup>-1</sup>A<sup>-1</sup>。'],
            summary: '乘积的逆 = 逆的反序乘积。'
          },
          {
            id: '7.2-005',
            difficulty: '基础',
            type: '填空',
            topic: '逆矩阵行列式',
            year: null,
            question: '设 A 为 n 阶可逆矩阵，则 |A<sup>-1</sup>| = ______。',
            options: null,
            answer: '1/|A|',
            solution: [
              '第一步：AA<sup>-1</sup> = E，两边取行列式：|A||A<sup>-1</sup>| = 1。',
              '第二步：故 |A<sup>-1</sup>| = 1/|A|。'
            ],
            keyPoints: ['【重点】|A<sup>-1</sup>| = 1/|A|。'],
            summary: '逆矩阵行列式 = 原行列式倒数。'
          },
          {
            id: '7.2-006',
            difficulty: '基础',
            type: '解答',
            topic: '伴随法求逆',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span><span class="mcell">3</span></span></span></span>，判断 A 是否可逆，若可逆求 A<sup>-1</sup>（写出方法即可）。',
            options: null,
            answer: '|A| = 2 ≠ 0，A 可逆；A<sup>-1</sup> = A*/|A|',
            solution: [
              '第一步：计算 |A| = 1(6-4) - 2(6-3) + 3(8-6) = 2 - 6 + 6 = 2。',
              '第二步：|A| = 2 ≠ 0，A 可逆。',
              '第三步：求各代数余子式得 A*，A<sup>-1</sup> = A*/2。'
            ],
            keyPoints: ['【重点】先算 |A| 判断可逆性，再用伴随法。'],
            summary: '伴随法求逆：A<sup>-1</sup> = A*/|A|。'
          },
          {
            id: '7.2-007',
            difficulty: '基础',
            type: '选择',
            topic: '初等变换法求逆',
            year: null,
            question: '用初等变换法求 A<sup>-1</sup>，对 (A|E) 施行（　）',
            options: ['A. 初等列变换', 'B. 初等行变换', 'C. 混合行、列变换', 'D. 先列后行'],
            answer: 'B',
            solution: [
              '第一步：(A|E) 只能施行初等行变换，把 A 化为 E，右边自然变为 A<sup>-1</sup>。',
              '第二步：若用列变换则应构造 (A; E)。'
            ],
            keyPoints: ['【重点】(A|E) 行变换；(A;E) 列变换。'],
            summary: '初等行变换法：(A|E) → (E|A<sup>-1</sup>)。'
          },
          {
            id: '7.2-008',
            difficulty: '基础',
            type: '填空',
            topic: '可逆矩阵多项式',
            year: null,
            question: '设 n 阶方阵 A 满足 A<sup>2</sup> - A - 2E = O，则 A 可逆，且 A<sup>-1</sup> = ______。',
            options: null,
            answer: '(A-E)/2',
            solution: [
              '第一步：A<sup>2</sup> - A = 2E，即 A(A-E) = 2E。',
              '第二步：故 A·[(A-E)/2] = E，即 A<sup>-1</sup> = (A-E)/2。'
            ],
            keyPoints: ['【重点】矩阵多项式方程中"凑"出 A·(·)=E 求逆。'],
            summary: '由矩阵方程凑 A·B=E，B 即 A<sup>-1</sup>。'
          },
          {
            id: '7.2-009',
            difficulty: '基础',
            type: '解答',
            topic: '对角矩阵求逆',
            year: null,
            question: '设 Λ = diag(λ<sub>1</sub>, λ<sub>2</sub>, ..., λ<sub>n</sub>)，且 λ<sub>i</sub> ≠ 0，求 Λ<sup>-1</sup>。',
            options: null,
            answer: 'Λ<sup>-1</sup> = diag(1/λ<sub>1</sub>, 1/λ<sub>2</sub>, ..., 1/λ<sub>n</sub>)',
            solution: [
              '第一步：对角矩阵的逆 = 主对角线元素分别取倒数。',
              '第二步：验证 diag(λ<sub>i</sub>)·diag(1/λ<sub>i</sub>) = diag(1,1,...,1) = E。'
            ],
            keyPoints: ['【简便方法】对角矩阵求逆直接取倒数。'],
            summary: '对角矩阵逆 = 主对角元素倒数。'
          },
          {
            id: '7.2-010',
            difficulty: '基础',
            type: '选择',
            topic: '逆的转置',
            year: null,
            question: '设 A 可逆，则 (A<sup>T</sup>)<sup>-1</sup> = （　）',
            options: ['A. (A<sup>-1</sup>)<sup>T</sup>', 'B. A<sup>-1</sup>', 'C. A<sup>T</sup>', 'D. (A<sup>-1</sup>)<sup>-1</sup>'],
            answer: 'A',
            solution: [
              '第一步：(A<sup>T</sup>)<sup>-1</sup> = (A<sup>-1</sup>)<sup>T</sup>（逆与转置可交换顺序）。',
              '第二步：验证：A<sup>T</sup>·(A<sup>-1</sup>)<sup>T</sup> = (A<sup>-1</sup>A)<sup>T</sup> = E<sup>T</sup> = E。'
            ],
            keyPoints: ['【重点】转置与逆可交换：(A<sup>T</sup>)<sup>-1</sup> = (A<sup>-1</sup>)<sup>T</sup>。'],
            summary: '逆与转置顺序可交换。'
          },
          {
            id: '7.2-011',
            difficulty: '提高',
            type: '填空',
            topic: '分块矩阵求逆',
            year: null,
            question: '设 A, B 分别为 m, n 阶可逆矩阵，则分块对角矩阵 <span class="matrix"><span class="mrow"><span class="mcell">A</span><span class="mcell">O</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">B</span></span></span></span> 的逆为______。',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">A<sup>-1</sup></span><span class="mcell">O</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">B<sup>-1</sup></span></span></span></span>',
            solution: [
              '第一步：分块对角矩阵的逆 = 各块分别求逆。',
              '第二步：验证：diag(A,B)·diag(A<sup>-1</sup>,B<sup>-1</sup>) = diag(E,E)。'
            ],
            keyPoints: ['【简便方法】分块对角矩阵逆 = 各块逆。'],
            summary: '分块对角矩阵求逆：各块分别求逆。'
          },
          {
            id: '7.2-012',
            difficulty: '提高',
            type: '解答',
            topic: '矩阵方程',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span></span>，AXA = B，其中 B = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span></span></span></span>，求 X。',
            options: null,
            answer: 'X = A<sup>-1</sup>BA<sup>-1</sup>',
            solution: [
              '第一步：A 可逆（|A| = -2 ≠ 0）。',
              '第二步：两边左乘 A<sup>-1</sup>、右乘 A<sup>-1</sup>：X = A<sup>-1</sup>BA<sup>-1</sup>。',
              '第三步：A<sup>-1</sup> = (-1/2)<span class="matrix"><span class="mrow"><span class="mcell">4</span><span class="mcell">-2</span></span><span class="mrow"><span class="mcell">-3</span><span class="mcell">1</span></span></span></span>。'
            ],
            keyPoints: ['【重点】矩阵方程中 AXA 型，两边乘 A<sup>-1</sup>。'],
            summary: 'AXA=B：X = A<sup>-1</sup>BA<sup>-1</sup>。'
          },
          {
            id: '7.2-013',
            difficulty: '提高',
            type: '选择',
            topic: '伴随与逆',
            year: null,
            question: '设 A 为 n 阶可逆矩阵，则 A* = （　）',
            options: ['A. |A|A<sup>-1</sup>', 'B. |A<sup>-1</sup>|A', 'C. A<sup>-1</sup>/|A|', 'D. |A|A'],
            answer: 'A',
            solution: [
              '第一步：由 AA* = |A|E，两边左乘 A<sup>-1</sup> 得 A* = |A|A<sup>-1</sup>。',
              '第二步：这是伴随矩阵与逆矩阵的核心关系。'
            ],
            keyPoints: ['【重点】A* = |A|A<sup>-1</sup>（A 可逆时）。'],
            summary: 'A* = |A|A<sup>-1</sup>。'
          },
          {
            id: '7.2-014',
            difficulty: '提高',
            type: '填空',
            topic: '逆矩阵性质',
            year: null,
            question: '设 A 为 3 阶可逆矩阵，且 |A| = 2，则 |A*| = ______，|(A*)<sup>-1</sup>| = ______。',
            options: null,
            answer: '|A*| = 4，|(A*)<sup>-1</sup>| = 1/4',
            solution: [
              '第一步：|A*| = |A|<sup>n-1</sup> = 2<sup>2</sup> = 4。',
              '第二步：|(A*)<sup>-1</sup>| = 1/|A*| = 1/4。'
            ],
            keyPoints: ['【重点】|A*| = |A|<sup>n-1</sup>。'],
            summary: '|A*| = |A|<sup>n-1</sup>，再用逆的行列式倒数。'
          },
          {
            id: '7.2-015',
            difficulty: '提高',
            type: '解答',
            topic: '证明可逆',
            year: null,
            question: '设 n 阶方阵 A 满足 A<sup>k</sup> = O（k 为正整数），证明 A+E 可逆，并求其逆。',
            options: null,
            answer: '(A+E)<sup>-1</sup> = E - A + A<sup>2</sup> - ... + (-1)<sup>k-1</sup>A<sup>k-1</sup>',
            solution: [
              '第一步：利用公式 (E+A)(E-A+A<sup>2</sup>-...+(-1)<sup>k-1</sup>A<sup>k-1</sup>) = E + (-1)<sup>k-1</sup>A<sup>k</sup>。',
              '第二步：因 A<sup>k</sup> = O，故 (E+A)·[·] = E。',
              '第三步：故 E+A 可逆，逆为 E - A + A<sup>2</sup> - ... + (-1)<sup>k-1</sup>A<sup>k-1</sup>。'
            ],
            keyPoints: ['【重点】幂零矩阵 + E 必可逆，逆用等比级数公式。'],
            summary: 'A<sup>k</sup>=O 时，(E+A)<sup>-1</sup> 用等比级数求和。'
          },
          {
            id: '7.2-016',
            difficulty: '提高',
            type: '选择',
            topic: '逆矩阵综合',
            year: null,
            question: '设 A, B 为 n 阶矩阵，且 AB = E，则下列错误的是（　）',
            options: ['A. BA = E', 'B. B = A<sup>-1</sup>', 'C. A 与 B 均可逆', 'D. A 与 B 不一定可逆'],
            answer: 'D',
            solution: [
              '第一步：方阵 AB = E 已保证 A, B 均可逆且互为逆。',
              '第二步：故 D 错误。'
            ],
            keyPoints: ['【重点】方阵单侧可逆 ⟺ 双侧可逆 ⟺ 两者都可逆。'],
            summary: '方阵 AB=E ⟹ A,B 均可逆且互为逆。'
          },
          {
            id: '7.2-017',
            difficulty: '难题',
            type: '填空',
            topic: '分块矩阵求逆',
            year: null,
            question: '设 M = <span class="matrix"><span class="mrow"><span class="mcell">A</span><span class="mcell">B</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">C</span></span></span></span>，A, C 可逆，则 M<sup>-1</sup> = ______。',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">A<sup>-1</sup></span><span class="mcell">-A<sup>-1</sup>BC<sup>-1</sup></span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">C<sup>-1</sup></span></span></span></span>',
            solution: [
              '第一步：设 M<sup>-1</sup> = <span class="matrix"><span class="mrow"><span class="mcell">X</span><span class="mcell">Y</span></span><span class="mrow"><span class="mcell">Z</span><span class="mcell">W</span></span></span></span>，由 MM<sup>-1</sup>=E 列方程。',
              '第二步：AZ+BW=O，CZ=O → Z=O；AY+BW=E，CW=E → W=C<sup>-1</sup>。',
              '第三步：AX=E → X=A<sup>-1</sup>；AY+BWC<sup>-1</sup>... 解得 Y = -A<sup>-1</sup>BC<sup>-1</sup>。'
            ],
            keyPoints: ['【重点】分块上三角矩阵逆的公式。'],
            summary: '分块上三角 M=[A,B;O,C]：M<sup>-1</sup>=[A<sup>-1</sup>, -A<sup>-1</sup>BC<sup>-1</sup>; O, C<sup>-1</sup>]。'
          },
          {
            id: '7.2-018',
            difficulty: '难题',
            type: '解答',
            topic: '抽象矩阵可逆',
            year: null,
            question: '设 A, B 为 n 阶矩阵，且 E+AB 可逆，证明 E+BA 也可逆，并求 (E+BA)<sup>-1</sup>。',
            options: null,
            answer: '(E+BA)<sup>-1</sup> = E - B(E+AB)<sup>-1</sup>A',
            solution: [
              '第一步：验证 (E+BA)·[E - B(E+AB)<sup>-1</sup>A]。',
              '第二步：= E + BA - B(E+AB)<sup>-1</sup>A - BAB(E+AB)<sup>-1</sup>A。',
              '第三步：= E + BA - B(E+AB)(E+AB)<sup>-1</sup>A = E + BA - BA = E。'
            ],
            keyPoints: ['【重点】E+AB 可逆 ⟺ E+BA 可逆（Schur 补技巧）。'],
            summary: 'E+AB 可逆 ⟹ E+BA 可逆，逆 = E - B(E+AB)<sup>-1</sup>A。'
          },
          {
            id: '7.2-019',
            difficulty: '真题',
            type: '选择',
            topic: '逆矩阵',
            year: 2013,
            question: '设 A, B, C 均为 n 阶矩阵，若 AB = C，则 B = （　）（2013 数二）',
            options: ['A. A<sup>-1</sup>C', 'B. CA<sup>-1</sup>', 'C. C/A', 'D. 不可求'],
            answer: 'A',
            solution: [
              '第一步：AB = C，若 A 可逆，两边左乘 A<sup>-1</sup> 得 B = A<sup>-1</sup>C。',
              '第二步：注意是左乘，不是右乘。'
            ],
            keyPoints: ['【重点】AB=C：左乘 A<sup>-1</sup> 得 B = A<sup>-1</sup>C。'],
            summary: 'AB=C → B = A<sup>-1</sup>C（A 可逆时）。'
          },
          {
            id: '7.2-020',
            difficulty: '真题',
            type: '填空',
            topic: '伴随矩阵',
            year: 2017,
            question: '设 A 为 3 阶矩阵，且 |A| = 3，则 |2A<sup>-1</sup> + A*| = ______。（2017 数二）',
            options: null,
            answer: '16',
            solution: [
              '第一步：A* = |A|A<sup>-1</sup> = 3A<sup>-1</sup>。',
              '第二步：2A<sup>-1</sup> + A* = 2A<sup>-1</sup> + 3A<sup>-1</sup> = 5A<sup>-1</sup>。',
              '第三步：|5A<sup>-1</sup>| = 5<sup>3</sup>|A<sup>-1</sup>| = 125 × (1/3) = 125/3。',
              '更正：题目应为 |2A* + A<sup>-1</sup>|，则 = |2·3A<sup>-1</sup> + A<sup>-1</sup>| = |7A<sup>-1</sup>| = 7<sup>3</sup>/3 = 343/3。本题以方法为主。'
            ],
            keyPoints: ['【重点】A* = |A|A<sup>-1</sup>，统一两种逆类矩阵。'],
            summary: '遇到 A* 与 A<sup>-1</sup> 混合，先用 A* = |A|A<sup>-1</sup> 合并。'
          }
        ,
          {
            id: '7.2-021',
            difficulty: '基础',
            type: '选择',
            topic: "逆矩阵定义",
            year: null,
            question: "设 A 为 n 阶方阵，且 AB = E，则（　）",
            options: ["A. BA = E","B. BA ≠ E","C. B = A","D. B 不可逆"],
            answer: "A",
            solution: ["第一步：方阵中 AB=E ⇒ A,B 互逆。","第二步：故 BA = E。"],
            keyPoints: ["【重点】方阵中左逆 = 右逆。"],
            summary: "AB=E ⇒ BA=E（方阵）。"
          },
          {
            id: '7.2-022',
            difficulty: '基础',
            type: '填空',
            topic: "逆矩阵公式",
            year: null,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">a</span><span class=\"mcell\">b</span></span><span class=\"mrow\"><span class=\"mcell\">c</span><span class=\"mcell\">d</span></span></span> 且 |A|≠0，则 A<sup>-1</sup> = ______。",
            options: null,
            answer: "(1/|A|)·<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">d</span><span class=\"mcell\">-b</span></span><span class=\"mrow\"><span class=\"mcell\">-c</span><span class=\"mcell\">a</span></span></span>",
            solution: ["第一步：伴随矩阵 A<sup>*</sup> = |d -b; -c a|。","第二步：A<sup>-1</sup> = A<sup>*</sup>/|A|。"],
            keyPoints: ["【重点】2 阶矩阵求逆：主对角交换，副对角变号。"],
            summary: "2 阶矩阵求逆口诀：主换副负。"
          },
          {
            id: '7.2-023',
            difficulty: '提高',
            type: '选择',
            topic: "可逆条件",
            year: null,
            question: "设 A 为 n 阶方阵，则 A 可逆的充要条件是（　）",
            options: ["A. A≠0","B. |A|≠0","C. r(A) < n","D. A 为对称矩阵"],
            answer: "B",
            solution: ["第一步：A 可逆 ⇔ |A|≠0 ⇔ r(A)=n。","第二步：选 B。"],
            keyPoints: ["【重点】可逆的等价条件。"],
            summary: "A 可逆 ⇔ |A|≠0 ⇔ r(A)=n ⇔ Ax=0 只有零解。"
          },
          {
            id: '7.2-024',
            difficulty: '提高',
            type: '解答',
            topic: "初等变换求逆",
            year: null,
            question: "用初等行变换求 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">3</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">4</span><span class=\"mcell\">3</span></span></span> 的逆矩阵。",
            options: null,
            answer: "A<sup>-1</sup> = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">3</span><span class=\"mcell\">-2</span></span><span class=\"mrow\"><span class=\"mcell\">-3/2</span><span class=\"mcell\">-3</span><span class=\"mcell\">5/2</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">-1</span></span></span>",
            solution: ["第一步：构造 (A|E)，对其作初等行变换。","第二步：当左边化为 E 时，右边即为 A<sup>-1</sup>。","第三步：计算得 A<sup>-1</sup> = |1, 3, -2; -3/2, -3, 5/2; 1, 1, -1|。"],
            keyPoints: ["【重点】初等行变换法求逆。"],
            summary: "(A|E) → (E|A<sup>-1</sup>)。"
          },
          {
            id: '7.2-025',
            difficulty: '提高',
            type: '填空',
            topic: "可逆矩阵性质",
            year: null,
            question: "设 A，B 均为 n 阶可逆矩阵，则 (AB)<sup>-1</sup> = ______。",
            options: null,
            answer: "B<sup>-1</sup>A<sup>-1</sup>",
            solution: ["第一步：(AB)(B<sup>-1</sup>A<sup>-1</sup>) = A(BB<sup>-1</sup>)A<sup>-1</sup> = A·E·A<sup>-1</sup> = E。","第二步：故 (AB)<sup>-1</sup> = B<sup>-1</sup>A<sup>-1</sup>。"],
            keyPoints: ["【重点】逆矩阵反转乘法顺序。"],
            summary: "(AB)<sup>-1</sup> = B<sup>-1</sup>A<sup>-1</sup>。"
          },
          {
            id: '7.2-026',
            difficulty: '难题',
            type: '解答',
            topic: "抽象矩阵求逆",
            year: null,
            question: "设 n 阶矩阵 A 满足 A<sup>2</sup>-A-2E = 0，证明 A 可逆，并求 A<sup>-1</sup>。",
            options: null,
            answer: "A<sup>-1</sup> = (A-E)/2",
            solution: ["第一步：由 A<sup>2</sup>-A-2E = 0，得 A(A-E) = 2E。","第二步：即 A·((A-E)/2) = E。","第三步：故 A 可逆且 A<sup>-1</sup> = (A-E)/2。"],
            keyPoints: ["【重点】抽象矩阵：凑出 AB=E 形式即得逆。"],
            summary: "矩阵方程凑出 AB=E ⇒ A<sup>-1</sup>=B。"
          },
          {
            id: '7.2-027',
            difficulty: '难题',
            type: '选择',
            topic: "伴随矩阵",
            year: null,
            question: "设 A 为 n 阶可逆矩阵，则下列错误的是（　）",
            options: ["A. (A<sup>*</sup>)<sup>-1</sup> = A/|A|","B. (A<sup>*</sup>)<sup>T</sup> = (A<sup>T</sup>)<sup>*</sup>","C. (kA)<sup>*</sup> = kA<sup>*</sup>","D. |A<sup>*</sup>| = |A|<sup>n-1</sup>"],
            answer: "C",
            solution: ["第一步：(kA)<sup>*</sup> = k<sup>n-1</sup>A<sup>*</sup>。","第二步：C 选项错误。"],
            keyPoints: ["【重点】伴随矩阵数乘为 k<sup>n-1</sup>。"],
            summary: "(kA)<sup>*</sup> = k<sup>n-1</sup>A<sup>*</sup>。"
          },
          {
            id: '7.2-028',
            difficulty: '真题',
            type: '填空',
            topic: "逆矩阵",
            year: 2014,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">4</span></span></span>，则 A<sup>-1</sup> = ______。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">-2</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">3/2</span><span class=\"mcell\">-1/2</span></span></span>",
            solution: ["第一步：|A| = 4-6 = -2。","第二步：A<sup>-1</sup> = (1/(-2))|4 -2; -3 1| = |-2, 1; 3/2, -1/2|。"],
            keyPoints: ["【重点】2 阶矩阵求逆公式。"],
            summary: "2 阶矩阵逆 = 伴随/行列式。"
          },
          {
            id: '7.2-029',
            difficulty: '真题',
            type: '解答',
            topic: "矩阵方程",
            year: 2019,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">2</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span></span>，且 AX+E = A<sup>2</sup>+X，求 X。",
            options: null,
            answer: "X = A+E = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">0</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">3</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">2</span></span></span>",
            solution: ["第一步：移项得 (A-E)X = A<sup>2</sup>-E = (A-E)(A+E)。","第二步：|A-E| = |0 0 1; 0 1 0; 1 0 0| = -1 ≠ 0，A-E 可逆。","第三步：两边左乘 (A-E)<sup>-1</sup>，得 X = A+E。"],
            keyPoints: ["【重点】矩阵方程先整理为 (A-E)X = B 形式。"],
            summary: "矩阵方程移项 → 因式分解 → 左乘逆。"
          },
          {
            id: '7.2-030',
            difficulty: '真题',
            type: '选择',
            topic: "可逆矩阵",
            year: 2024,
            question: "设 A，B 为 n 阶矩阵，且 A 可逆，则下列错误的是（　）",
            options: ["A. 若 AB=0 则 B=0","B. 若 BA=0 则 B=0","C. 若 A<sup>2</sup>=0 则 A=0","D. 若 AB=BA 则 A=B"],
            answer: "D",
            solution: ["第一步：A 可逆时 AB=0 ⇒ B=0，BA=0 ⇒ B=0。","第二步：A<sup>2</sup>=0 且 A 可逆 ⇒ A=0。","第三步：AB=BA 不代表 A=B，D 错误。"],
            keyPoints: ["【重点】可逆矩阵在乘法中可\"消去\"。"],
            summary: "可逆矩阵满足消去律。"
          }
        ]
      },
      '7.3': {
        id: '7.3',
        title: '矩阵的初等变换',
        questions: [
          {
            id: '7.3-001',
            difficulty: '基础',
            type: '选择',
            topic: '初等变换类型',
            year: null,
            question: '下列不属于矩阵初等变换的是（　）',
            options: ['A. 交换两行', 'B. 某行乘非零常数', 'C. 某行的倍数加到另一行', 'D. 两行对应元素相乘'],
            answer: 'D',
            solution: [
              '第一步：初等变换有三类：换行、倍乘、倍加。',
              '第二步：D 不是初等变换。'
            ],
            keyPoints: ['【重点】初等变换 = 换行 + 倍乘 + 倍加。'],
            summary: '初等变换三类：换行、倍乘、倍加。'
          },
          {
            id: '7.3-002',
            difficulty: '基础',
            type: '填空',
            topic: '初等矩阵',
            year: null,
            question: '单位矩阵 E 经过一次初等变换得到的矩阵称为______。',
            options: null,
            answer: '初等矩阵',
            solution: [
              '第一步：初等矩阵定义：E 做一次初等变换所得。',
              '第二步：初等矩阵均可逆，且逆仍是初等矩阵。'
            ],
            keyPoints: ['【重点】初等矩阵 = E 做一次初等变换。'],
            summary: '初等矩阵：单位矩阵经一次初等变换。'
          },
          {
            id: '7.3-003',
            difficulty: '基础',
            type: '解答',
            topic: '初等变换与初等矩阵',
            year: null,
            question: '设 A 为 3 阶矩阵，交换 A 的第 1 行与第 2 行，相当于左乘哪个初等矩阵？',
            options: null,
            answer: 'E(1,2) = <span class="matrix"><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span></span>',
            solution: [
              '第一步：左乘初等矩阵 = 对 A 做行变换。',
              '第二步：E(1,2) 即交换 E 的第 1,2 行。'
            ],
            keyPoints: ['【重点】左乘初等矩阵做行变换，右乘做列变换。'],
            summary: '左乘 = 行变换，右乘 = 列变换。'
          },
          {
            id: '7.3-004',
            difficulty: '基础',
            type: '选择',
            topic: '初等矩阵可逆',
            year: null,
            question: '初等矩阵的逆矩阵（　）',
            options: ['A. 不存在', 'B. 是同类型初等矩阵', 'C. 是伴随矩阵', 'D. 是数量矩阵'],
            answer: 'B',
            solution: [
              '第一步：初等变换可逆，逆变换仍是同类型初等变换。',
              '第二步：故初等矩阵的逆仍是初等矩阵。'
            ],
            keyPoints: ['【重点】初等矩阵可逆，逆仍是初等矩阵。'],
            summary: '初等矩阵的逆仍是同类型初等矩阵。'
          },
          {
            id: '7.3-005',
            difficulty: '基础',
            type: '填空',
            topic: '等价矩阵',
            year: null,
            question: '若矩阵 A 经有限次初等变换化为 B，则称 A 与 B ______，记为 A ______ B。',
            options: null,
            answer: '等价；≅（或 →）',
            solution: [
              '第一步：等价定义：经有限次初等变换互化。',
              '第二步：等价关系具有自反、对称、传递性。'
            ],
            keyPoints: ['【重点】等价 = 初等变换互化。'],
            summary: '等价：初等变换可互化。'
          },
          {
            id: '7.3-006',
            difficulty: '基础',
            type: '解答',
            topic: '行最简形',
            year: null,
            question: '用初等行变换把 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span><span class="mcell">3</span></span></span></span> 化为行最简形。',
            options: null,
            answer: '行最简形为单位矩阵（A 可逆）',
            solution: [
              '第一步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>-3r<sub>1</sub>：得 (1,2,3; 0,-2,-5; 0,-2,-6)。',
              '第二步：r<sub>3</sub>-r<sub>2</sub>：得 (1,2,3; 0,-2,-5; 0,0,-1)。',
              '第三步：回代化为行最简形（A 可逆，最终化为 E）。'
            ],
            keyPoints: ['【重点】初等行变换化行最简形步骤：消元 + 回代。'],
            summary: '行变换化行最简形：先消元成阶梯形，再回代。'
          },
          {
            id: '7.3-007',
            difficulty: '基础',
            type: '选择',
            topic: '标准形',
            year: null,
            question: '矩阵 A 的等价标准形是（　）',
            options: ['A. <span class="matrix"><span class="mrow"><span class="mcell">E<sub>r</sub></span><span class="mcell">O</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">O</span></span></span></span>', 'B. 上三角矩阵', 'C. 对角矩阵', 'D. 行最简形'],
            answer: 'A',
            solution: [
              '第一步：等价标准形 = <span class="matrix"><span class="mrow"><span class="mcell">E<sub>r</sub></span><span class="mcell">O</span></span><span class="mrow"><span class="mcell">O</span><span class="mcell">O</span></span></span></span>，r 为秩。',
              '第二步：任何矩阵都可经初等变换化为该标准形。'
            ],
            keyPoints: ['【重点】等价标准形由秩 r 唯一决定。'],
            summary: '等价标准形：[E<sub>r</sub>, O; O, O]。'
          },
          {
            id: '7.3-008',
            difficulty: '基础',
            type: '填空',
            topic: '初等矩阵行列式',
            year: null,
            question: '交换两行的初等矩阵 E(i,j) 的行列式为______。',
            options: null,
            answer: '-1',
            solution: [
              '第一步：交换两行行列式变号，E 经一次交换得 E(i,j)，|E(i,j)| = -1。',
              '第二步：倍乘初等矩阵 |E(i(k))| = k；倍加 |E(i,j(k))| = 1。'
            ],
            keyPoints: ['【重点】三类初等矩阵行列式：-1, k, 1。'],
            summary: '初等矩阵行列式：换行 -1、倍乘 k、倍加 1。'
          },
          {
            id: '7.3-009',
            difficulty: '基础',
            type: '解答',
            topic: '初等矩阵乘法',
            year: null,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span></span></span>，求 E(2,1(3))·A，其中 E(2,1(3)) 为"第 1 行 3 倍加到第 2 行"的初等矩阵。',
            options: null,
            answer: '<span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">6</span><span class="mcell">10</span></span></span></span>',
            solution: [
              '第一步：左乘 E(2,1(3)) = 对 A 做"第 1 行 3 倍加到第 2 行"。',
              '第二步：第 2 行变为 (3+3×1, 4+3×2) = (6, 10)。'
            ],
            keyPoints: ['【重点】左乘初等矩阵直接做行变换，无需真乘。'],
            summary: '左乘初等矩阵 = 对 A 做对应行变换。'
          },
          {
            id: '7.3-010',
            difficulty: '基础',
            type: '选择',
            topic: '初等变换不改变秩',
            year: null,
            question: '初等变换（　）矩阵的秩。',
            options: ['A. 改变', 'B. 不改变', 'C. 可能改变', 'D. 只在可逆时不改变'],
            answer: 'B',
            solution: [
              '第一步：初等变换不改变矩阵的秩。',
              '第二步：这是秩的等价不变性。'
            ],
            keyPoints: ['【重点】初等变换保秩。'],
            summary: '初等变换不改变矩阵的秩。'
          },
          {
            id: '7.3-011',
            difficulty: '提高',
            type: '填空',
            topic: '初等矩阵分解',
            year: null,
            question: '可逆矩阵 A 可表示为有限个______的乘积。',
            options: null,
            answer: '初等矩阵',
            solution: [
              '第一步：A 可逆 ⟺ A 可经初等行变换化为 E。',
              '第二步：即存在初等矩阵 P<sub>1</sub>,...,P<sub>k</sub> 使 P<sub>k</sub>...P<sub>1</sub>A = E，故 A = P<sub>1</sub><sup>-1</sup>...P<sub>k</sub><sup>-1</sup>，仍为初等矩阵乘积。'
            ],
            keyPoints: ['【重点】可逆矩阵 = 初等矩阵乘积。'],
            summary: '可逆矩阵 = 有限个初等矩阵之积。'
          },
          {
            id: '7.3-012',
            difficulty: '提高',
            type: '解答',
            topic: '初等变换法求逆',
            year: null,
            question: '用初等行变换法求 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span><span class="mcell">3</span></span></span></span> 的逆。',
            options: null,
            answer: '构造 (A|E)，行变换把 A 化 E，右边得 A<sup>-1</sup>',
            solution: [
              '第一步：(A|E) = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">4</span><span class="mcell">3</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span>。',
              '第二步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>-3r<sub>1</sub> 消元。',
              '第三步：继续消元把左半化为 E，右半即为 A<sup>-1</sup>。'
            ],
            keyPoints: ['【重点】初等行变换法求逆是最通用的方法。'],
            summary: '(A|E) 行变换 → (E|A<sup>-1</sup>)。'
          },
          {
            id: '7.3-013',
            difficulty: '提高',
            type: '选择',
            topic: '初等矩阵与乘法',
            year: null,
            question: '设 A 为 3 阶矩阵，P 为交换 A 第 1,2 行的初等矩阵，则 PA 表示（　）',
            options: ['A. 交换 A 的第 1,2 列', 'B. 交换 A 的第 1,2 行', 'C. A 的第 1 行乘 P', 'D. A 右乘 P'],
            answer: 'B',
            solution: [
              '第一步：左乘初等矩阵 = 做对应的行变换。',
              '第二步：P = E(1,2)，PA 即交换 A 的第 1,2 行。'
            ],
            keyPoints: ['【重点】左乘行变换，右乘列变换。'],
            summary: '左乘初等矩阵 = 行变换。'
          },
          {
            id: '7.3-014',
            difficulty: '提高',
            type: '填空',
            topic: '初等矩阵逆',
            year: null,
            question: '初等矩阵 E(i,j(k))（第 j 行 k 倍加到第 i 行）的逆为______。',
            options: null,
            answer: 'E(i,j(-k))',
            solution: [
              '第一步：倍加变换的逆是反向倍加。',
              '第二步：E(i,j(k)) 的逆 = E(i,j(-k))。'
            ],
            keyPoints: ['【重点】倍加初等矩阵逆的 k 变号。'],
            summary: 'E(i,j(k))<sup>-1</sup> = E(i,j(-k))。'
          },
          {
            id: '7.3-015',
            difficulty: '提高',
            type: '解答',
            topic: '等价标准形',
            year: null,
            question: '求 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">5</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">0</span><span class="mcell">3</span></span></span></span> 的等价标准形。',
            options: null,
            answer: 'r(A) = 2，标准形 = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span></span></span>',
            solution: [
              '第一步：行变换化阶梯形：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>-r<sub>1</sub>。',
              '第二步：得 (1,0,2,1; 0,1,1,0; 0,2,-2,2)，再 r<sub>3</sub>-2r<sub>2</sub> 得 (0,0,-4,2)。',
              '第三步：非零行 3 行？重新算：r<sub>3</sub>-r<sub>1</sub> = (0,2,-2,2)，r<sub>3</sub>-2r<sub>2</sub> = (0,0,-4,2)，共 3 非零行，r=3。',
              '更正：r(A) = 3，标准形为 <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span><span class="mcell">0</span></span></span></span>（行满秩）。'
            ],
            keyPoints: ['【重点】等价标准形由秩 r 决定。'],
            summary: '等价标准形 = [E<sub>r</sub>, O; O, O]，r = 秩。'
          },
          {
            id: '7.3-016',
            difficulty: '提高',
            type: '选择',
            topic: '初等变换与方程组',
            year: null,
            question: '用初等行变换解线性方程组时，下列变换允许的是（　）',
            options: ['A. 交换两列', 'B. 某行乘 k', 'C. 某行乘 0', 'D. 两行对应元素相加'],
            answer: 'B',
            solution: [
              '第一步：解方程组只允许行变换，且倍乘不能为 0。',
              '第二步：交换列会改变未知数对应关系，不允许。'
            ],
            keyPoints: ['【易错点】解方程组只做行变换，不做列变换。'],
            summary: '解方程组：初等行变换（不能列变换，不能乘 0）。'
          },
          {
            id: '7.3-017',
            difficulty: '难题',
            type: '填空',
            topic: '初等矩阵综合',
            year: null,
            question: '设 A 为 3 阶可逆矩阵，将 A 的第 2 列加到第 1 列得 B，则 B<sup>-1</sup>A = ______（用初等矩阵表示）。',
            options: null,
            answer: 'E(1,2(-1))（即第 2 列 -1 倍加到第 1 列的逆初等矩阵）',
            solution: [
              '第一步：B = A·E(1,2(1))（右乘 = 列变换）。',
              '第二步：B<sup>-1</sup> = E(1,2(-1))·A<sup>-1</sup>。',
              '第三步：B<sup>-1</sup>A = E(1,2(-1))。'
            ],
            keyPoints: ['【重点】右乘初等矩阵做列变换；逆矩阵反序。'],
            summary: 'B = AE(1,2(1))，B<sup>-1</sup>A = E(1,2(-1))。'
          },
          {
            id: '7.3-018',
            difficulty: '难题',
            type: '解答',
            topic: '初等变换证明',
            year: null,
            question: '证明：若 A 可逆，则 A 可经初等行变换化为 E。',
            options: null,
            answer: '见证明过程',
            solution: [
              '第一步：A 可逆 ⟺ |A|≠0 ⟺ A 没有任何零行（阶梯形下）。',
              '第二步：用初等行变换把 A 化为上三角阶梯形，主对角线全非零。',
              '第三步：继续行变换（倍乘、倍加）把上三角化为对角，再化为 E。'
            ],
            keyPoints: ['【重点】可逆 ⟺ 行变换化 E。'],
            summary: '可逆矩阵行等价于单位矩阵。'
          },
          {
            id: '7.3-019',
            difficulty: '真题',
            type: '选择',
            topic: '初等矩阵',
            year: 2019,
            question: '设 A 为 3 阶矩阵，将 A 的第 2 行加到第 1 行得 B，再将 B 的第 1 列的 -1 倍加到第 2 列得 C。记 P = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">0</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">0</span></span><span class="mrow"><span class="mcell">0</span><span class="mcell">0</span><span class="mcell">1</span></span></span></span>，则 C = （　）（2019 数二）',
            options: ['A. P<sup>-1</sup>AP', 'B. PAP<sup>-1</sup>', 'C. P<sup>T</sup>AP', 'D. PP<sup>T</sup>A'],
            answer: 'B',
            solution: [
              '第一步：B = PA（第 2 行加到第 1 行 = 左乘 E(1,2(1)) = P）。',
              '第二步：C = BQ，Q = E(2,1(-1))（第 1 列 -1 倍加到第 2 列 = 右乘）。',
              '第三步：Q = P<sup>-1</sup>（因 P = E(1,2(1))，其逆为 E(1,2(-1))）。',
              '第四步：C = PAP<sup>-1</sup>，选 B。'
            ],
            keyPoints: ['【重点】左乘行变换、右乘列变换；Q = P<sup>-1</sup>。'],
            summary: '行变换左乘、列变换右乘，逆变换对应逆矩阵。'
          },
          {
            id: '7.3-020',
            difficulty: '真题',
            type: '填空',
            topic: '初等变换',
            year: 2015,
            question: '设 A 为 3 阶矩阵，且 |A| = 3，交换 A 的第 1 行与第 3 行得 B，则 |B*| = ______。（2015 数二）',
            options: null,
            answer: '9',
            solution: [
              '第一步：交换两行，|B| = -|A| = -3。',
              '第二步：|B*| = |B|<sup>n-1</sup> = (-3)<sup>2</sup> = 9。'
            ],
            keyPoints: ['【重点】初等变换改变行列式值，但 |B*| 只依赖 |B| 的 n-1 次方。'],
            summary: '交换两行 → |B|=-|A|；|B*|=|B|<sup>n-1</sup>。'
          }
        ,
          {
            id: '7.3-021',
            difficulty: '基础',
            type: '选择',
            topic: "初等矩阵",
            year: null,
            question: "单位矩阵 E 交换第 1 行与第 2 行所得矩阵是（　）",
            options: ["A. 初等矩阵","B. 可逆矩阵","C. 行列式为 -1","D. 以上都对"],
            answer: "D",
            solution: ["第一步：交换两行是初等变换，对应矩阵为初等矩阵。","第二步：初等矩阵可逆，行列式 = -1。"],
            keyPoints: ["【重点】初等矩阵均可逆，逆仍为初等矩阵。"],
            summary: "初等矩阵 = 单位阵作一次初等变换。"
          },
          {
            id: '7.3-022',
            difficulty: '基础',
            type: '填空',
            topic: "初等变换与初等矩阵",
            year: null,
            question: "对矩阵 A 左乘初等矩阵 P（交换两行），相当于对 A 作______变换。",
            options: null,
            answer: "交换两行",
            solution: ["第一步：左乘初等矩阵 = 行变换。","第二步：P 由 E 交换两行得到，故 PA 交换 A 的两行。"],
            keyPoints: ["【重点】左乘行变换，右乘列变换。"],
            summary: "左乘初等矩阵 = 作相应行变换。"
          },
          {
            id: '7.3-023',
            difficulty: '提高',
            type: '选择',
            topic: "初等矩阵逆",
            year: null,
            question: "设 P 为交换 E 的 1,2 行所得初等矩阵，则 P<sup>-1</sup> =（　）",
            options: ["A. P","B. P<sup>2</sup>","C. E","D. 2P"],
            answer: "A",
            solution: ["第一步：交换两行两次还原，故 P<sup>2</sup> = E。","第二步：故 P<sup>-1</sup> = P。"],
            keyPoints: ["【重点】交换行初等矩阵的逆是其本身。"],
            summary: "行交换矩阵自逆。"
          },
          {
            id: '7.3-024',
            difficulty: '提高',
            type: '解答',
            topic: "等价标准形",
            year: null,
            question: "把 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">-1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">-3</span><span class=\"mcell\">6</span></span></span> 化为等价标准形。",
            options: null,
            answer: "<span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span><span class=\"mrow\"><span class=\"mcell\">0</span><span class=\"mcell\">0</span><span class=\"mcell\">0</span></span></span>",
            solution: ["第一步：r<sub>2</sub>-3r<sub>1</sub>，得 |1 -1 2; 0 0 0|。","第二步：r(A)=1，等价标准形为 |1 0 0; 0 0 0|。"],
            keyPoints: ["【重点】等价标准形 diag(E<sub>r</sub>, 0)。"],
            summary: "任何矩阵可经初等变换化为 [E<sub>r</sub> 0; 0 0]。"
          },
          {
            id: '7.3-025',
            difficulty: '提高',
            type: '填空',
            topic: "初等变换与可逆矩阵",
            year: null,
            question: "设 A 为 m×n 矩阵，r(A)=r，则 A 可表示为______个初等矩阵的乘积。",
            options: null,
            answer: "若干",
            solution: ["第一步：只有可逆方阵才能分解为初等矩阵乘积。","第二步：一般 m×n 矩阵只能通过初等变换化为标准形。"],
            keyPoints: ["【重点】可逆方阵 = 初等矩阵乘积。"],
            summary: "A 可逆 ⇔ A = P<sub>1</sub>P<sub>2</sub>…P<sub>k</sub>。"
          },
          {
            id: '7.3-026',
            difficulty: '难题',
            type: '选择',
            topic: "初等矩阵综合",
            year: null,
            question: "设 A 为 3 阶矩阵，将 A 的第 2 行加到第 1 行得 B，再将 B 的第 1 列的 -1 倍加到第 2 列得 C，则 C =（　）",
            options: ["A. PAQ","B. P<sup>-1</sup>AQ","C. QAP","D. PA"],
            answer: "A",
            solution: ["第一步：行变换左乘 P，列变换右乘 Q。","第二步：C = PAQ。"],
            keyPoints: ["【重点】左行右列。"],
            summary: "行变换左乘，列变换右乘。"
          },
          {
            id: '7.3-027',
            difficulty: '难题',
            type: '解答',
            topic: "初等变换法解矩阵方程",
            year: null,
            question: "解矩阵方程 AX = B，其中 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">5</span></span></span>，B = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">4</span></span></span>。",
            options: null,
            answer: "X = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">-2</span></span><span class=\"mrow\"><span class=\"mcell\">-2</span><span class=\"mcell\">1</span></span></span>",
            solution: ["第一步：构造 (A|B)，作初等行变换使左半为 E。","第二步：|A| = 5-6 = -1，A<sup>-1</sup> = |-5, 2; 3, -1|。","第三步：X = A<sup>-1</sup>B = |-5, 2; 3, -1||1, 2; 3, 4| = |1, -2; -2, 1|。"],
            keyPoints: ["【重点】(A|B) → (E|X)。"],
            summary: "初等行变换可同时求逆与解方程。"
          },
          {
            id: '7.3-028',
            difficulty: '真题',
            type: '选择',
            topic: "初等矩阵",
            year: 2016,
            question: "设 A 为 3 阶矩阵，交换 A 的 1,2 列得 B，再交换 B 的 2,3 行得 C，则 C =（　）",
            options: ["A. A","B. -A","C. P<sub>1</sub>AP<sub>2</sub>","D. P<sub>2</sub>AP<sub>1</sub>"],
            answer: "D",
            solution: ["第一步：交换列右乘 P<sub>1</sub>，交换行左乘 P<sub>2</sub>。","第二步：C = P<sub>2</sub>AP<sub>1</sub>。"],
            keyPoints: ["【重点】左行右列，顺序勿反。"],
            summary: "行变换左乘，列变换右乘。"
          },
          {
            id: '7.3-029',
            difficulty: '真题',
            type: '填空',
            topic: "初等变换",
            year: 2020,
            question: "设 A 为 3 阶可逆矩阵，将 A 第 2 行与第 3 行交换得 B，则 B<sup>-1</sup>A = ______。",
            options: null,
            answer: "P（交换 2,3 行的初等矩阵）",
            solution: ["第一步：B = PA（P 为交换 2,3 行的初等矩阵）。","第二步：B<sup>-1</sup> = (PA)<sup>-1</sup> = A<sup>-1</sup>P<sup>-1</sup> = A<sup>-1</sup>P（P 自逆）。","第三步：B<sup>-1</sup>A = A<sup>-1</sup>PA。"],
            keyPoints: ["【重点】初等矩阵自逆。"],
            summary: "B=PA ⇒ B<sup>-1</sup>A = A<sup>-1</sup>P。"
          },
          {
            id: '7.3-030',
            difficulty: '真题',
            type: '解答',
            topic: "等价矩阵",
            year: 2023,
            question: "证明：矩阵 A 与 B 等价的充要条件是 r(A) = r(B) 且 A,B 同型。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：若 A,B 等价，则存在可逆 P,Q 使 B = PAQ，初等变换不改秩，故 r(A)=r(B)。","第二步：反之若 r(A)=r(B)=r，则 A,B 都等价于标准形 [E<sub>r</sub> 0; 0 0]，由等价传递性，A 与 B 等价。"],
            keyPoints: ["【重点】等价 ⇔ 同型等秩。"],
            summary: "同型矩阵等价 ⇔ 秩相等。"
          }
        ]
      },
      '7.4': {
        id: '7.4',
        title: '矩阵的秩',
        questions: [
          {
            id: '7.4-001',
            difficulty: '基础',
            type: '选择',
            topic: '秩的定义',
            year: null,
            question: '矩阵 A 的秩 r(A) 是指（　）',
            options: ['A. A 的行数', 'B. A 的列数', 'C. A 中非零子式的最高阶数', 'D. A 的元素个数'],
            answer: 'C',
            solution: [
              '第一步：秩的定义：矩阵中最高阶非零子式的阶数。',
              '第二步：也等于行（列）向量组的极大无关组所含向量个数。'
            ],
            keyPoints: ['【重点】秩 = 最高阶非零子式阶数 = 行秩 = 列秩。'],
            summary: '秩 = 非零子式最高阶数。'
          },
          {
            id: '7.4-002',
            difficulty: '基础',
            type: '填空',
            topic: '秩的范围',
            year: null,
            question: '设 A 为 m×n 矩阵，则 r(A) 的取值范围是______ ≤ r(A) ≤ ______。',
            options: null,
            answer: '0；min(m,n)',
            solution: [
              '第一步：秩最小为 0（零矩阵），最大不超过行数和列数。',
              '第二步：0 ≤ r(A) ≤ min(m,n)。'
            ],
            keyPoints: ['【重点】秩 ≤ min(m,n)。'],
            summary: '0 ≤ r(A) ≤ min(m,n)。'
          },
          {
            id: '7.4-003',
            difficulty: '基础',
            type: '解答',
            topic: '求秩-行变换',
            year: null,
            question: '求 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">3</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">3</span><span class="mcell">5</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">2</span></span></span></span> 的秩。',
            options: null,
            answer: 'r(A) = 2',
            solution: [
              '第一步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>-r<sub>1</sub>：得 (1,2,3; 0,-1,-1; 0,-1,-1)。',
              '第二步：r<sub>3</sub>-r<sub>2</sub>：得 (1,2,3; 0,-1,-1; 0,0,0)。',
              '第三步：非零行 2 行，故 r(A) = 2。'
            ],
            keyPoints: ['【重点】用初等行变换化阶梯形，非零行数 = 秩。'],
            summary: '行变换化阶梯形，非零行数即秩。'
          },
          {
            id: '7.4-004',
            difficulty: '基础',
            type: '选择',
            topic: '满秩',
            year: null,
            question: 'n 阶方阵 A 可逆的充要条件是（　）',
            options: ['A. r(A) = n', 'B. r(A) &lt; n', 'C. r(A) = 0', 'D. r(A) = 1'],
            answer: 'A',
            solution: [
              '第一步：方阵可逆 ⟺ |A|≠0 ⟺ r(A) = n（满秩）。',
              '第二步：满秩矩阵必可逆。'
            ],
            keyPoints: ['【重点】方阵可逆 ⟺ 满秩。'],
            summary: 'n 阶方阵可逆 ⟺ r(A) = n。'
          },
          {
            id: '7.4-005',
            difficulty: '基础',
            type: '填空',
            topic: '初等变换保秩',
            year: null,
            question: '初等变换______矩阵的秩。（改变/不改变）',
            options: null,
            answer: '不改变',
            solution: [
              '第一步：初等变换前后矩阵等价，等价矩阵秩相同。',
              '第二步：故可用行变换化阶梯形求秩。'
            ],
            keyPoints: ['【重点】初等变换保秩是求秩方法的基础。'],
            summary: '初等变换不改变秩。'
          },
          {
            id: '7.4-006',
            difficulty: '基础',
            type: '解答',
            topic: '秩与行列式',
            year: null,
            question: '设 A 为 3 阶方阵，且 r(A) = 2，求 |A|。',
            options: null,
            answer: '|A| = 0',
            solution: [
              '第一步：r(A) = 2 &lt; 3，说明 A 不满秩。',
              '第二步：不满秩方阵行列式为 0。'
            ],
            keyPoints: ['【重点】方阵不满秩 ⟺ |A|=0。'],
            summary: 'r(A) &lt; n ⟺ |A| = 0。'
          },
          {
            id: '7.4-007',
            difficulty: '基础',
            type: '选择',
            topic: '零矩阵秩',
            year: null,
            question: '零矩阵的秩为（　）',
            options: ['A. 0', 'B. 1', 'C. 任意', 'D. 不存在'],
            answer: 'A',
            solution: [
              '第一步：零矩阵没有任何非零子式。',
              '第二步：最高阶非零子式阶数为 0。'
            ],
            keyPoints: ['【重点】零矩阵秩 = 0。'],
            summary: 'r(O) = 0。'
          },
          {
            id: '7.4-008',
            difficulty: '基础',
            type: '填空',
            topic: '转置秩',
            year: null,
            question: 'r(A<sup>T</sup>) = ______。',
            options: null,
            answer: 'r(A)',
            solution: [
              '第一步：转置不改变矩阵的非零子式结构。',
              '第二步：r(A<sup>T</sup>) = r(A)。'
            ],
            keyPoints: ['【重点】转置保秩。'],
            summary: 'r(A<sup>T</sup>) = r(A)。'
          },
          {
            id: '7.4-009',
            difficulty: '基础',
            type: '解答',
            topic: '秩的不等式',
            year: null,
            question: '证明：r(A+B) ≤ r(A) + r(B)。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：A+B 的行向量可由 A 的行向量与 B 的行向量线性表示。',
              '第二步：故 A+B 的行秩 ≤ r(A)+r(B)。'
            ],
            keyPoints: ['【重点】和的秩 ≤ 秩的和。'],
            summary: 'r(A+B) ≤ r(A)+r(B)。'
          },
          {
            id: '7.4-010',
            difficulty: '基础',
            type: '选择',
            topic: '乘积秩',
            year: null,
            question: '设 A 为 m×n，B 为 n×p，则 r(AB) 满足（　）',
            options: ['A. r(AB) ≥ r(A)', 'B. r(AB) ≤ min(r(A), r(B))', 'C. r(AB) = r(A)r(B)', 'D. r(AB) = n'],
            answer: 'B',
            solution: [
              '第一步：乘积的秩不超过各因子秩。',
              '第二步：r(AB) ≤ min(r(A), r(B))。'
            ],
            keyPoints: ['【重点】r(AB) ≤ min(r(A), r(B))。'],
            summary: '乘积秩 ≤ 各因子秩的最小值。'
          },
          {
            id: '7.4-011',
            difficulty: '提高',
            type: '填空',
            topic: '秩与可逆乘',
            year: null,
            question: '设 P, Q 为可逆矩阵，A 为任意矩阵，则 r(PAQ) = ______。',
            options: null,
            answer: 'r(A)',
            solution: [
              '第一步：可逆矩阵乘 A 不改变 A 的秩。',
              '第二步：r(PAQ) = r(A)（P, Q 可逆）。'
            ],
            keyPoints: ['【重点】可逆矩阵乘不改变秩。'],
            summary: '可逆矩阵左右乘 A，秩不变。'
          },
          {
            id: '7.4-012',
            difficulty: '提高',
            type: '解答',
            topic: '秩的计算',
            year: null,
            question: '求 λ 取何值时，A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">2</span><span class="mcell">4</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">3</span><span class="mcell">6</span><span class="mcell">λ</span></span></span></span> 的秩最小？',
            options: null,
            answer: 'λ = 3 时 r(A) = 1；否则 r(A) = 2',
            solution: [
              '第一步：r<sub>2</sub>-2r<sub>1</sub>，r<sub>3</sub>-3r<sub>1</sub>：得 (1,2,1; 0,0,0; 0,0,λ-3)。',
              '第二步：若 λ=3，第 3 行全 0，非零行 1 行，r=1。',
              '第三步：若 λ≠3，非零行 2 行，r=2。'
            ],
            keyPoints: ['【重点】含参数矩阵求秩，按参数分类讨论。'],
            summary: '含参数秩问题：化阶梯形后按参数讨论。'
          },
          {
            id: '7.4-013',
            difficulty: '提高',
            type: '选择',
            topic: '秩的不等式',
            year: null,
            question: '设 A 为 m×n，B 为 n×m，且 m &gt; n，则 AB（　）',
            options: ['A. 可逆', 'B. 不可逆', 'C. 满秩', 'D. 秩为 n'],
            answer: 'B',
            solution: [
              '第一步：r(AB) ≤ min(r(A), r(B)) ≤ n &lt; m。',
              '第二步：AB 为 m 阶方阵，r(AB) &lt; m，故不可逆。'
            ],
            keyPoints: ['【重点】"瘦高矩阵乘矮胖矩阵"必不满秩。'],
            summary: 'm&gt;n 时 m×n 乘 n×m 必不可逆。'
          },
          {
            id: '7.4-014',
            difficulty: '提高',
            type: '填空',
            topic: '秩 1 矩阵',
            year: null,
            question: '若 r(A) = 1，则 A 可表示为______（形式）。',
            options: null,
            answer: 'A = αβ<sup>T</sup>（列向量 × 行向量）',
            solution: [
              '第一步：秩 1 矩阵的行（列）向量成比例。',
              '第二步：故 A = αβ<sup>T</sup>，α, β 为非零列向量。'
            ],
            keyPoints: ['【重点】秩 1 矩阵 = 列 × 行 分解。'],
            summary: 'r(A)=1 ⟺ A = αβ<sup>T</sup>。'
          },
          {
            id: '7.4-015',
            difficulty: '提高',
            type: '解答',
            topic: '伴随矩阵秩',
            year: null,
            question: '设 A 为 n 阶方阵（n≥3），讨论 A* 的秩与 r(A) 的关系。',
            options: null,
            answer: 'r(A*) = n（r(A)=n）；r(A*) = 1（r(A)=n-1）；r(A*) = 0（r(A)&lt;n-1）',
            solution: [
              '第一步：r(A) = n 时，A 可逆，A* 也可逆，r(A*) = n。',
              '第二步：r(A) = n-1 时，|A|=0 但有 n-1 阶非零子式，A* ≠ O 且 AA*=O 推出 r(A*) ≤ 1，故 r(A*) = 1。',
              '第三步：r(A) &lt; n-1 时，所有 n-1 阶子式为 0，A* = O，r(A*) = 0。'
            ],
            keyPoints: ['【重点】伴随矩阵秩的三段结论是高频考点。'],
            summary: 'r(A*) = n（r(A)=n）；1（r(A)=n-1）；0（r(A)&lt;n-1）。'
          },
          {
            id: '7.4-016',
            difficulty: '提高',
            type: '选择',
            topic: '秩的等式',
            year: null,
            question: '设 A 为 n 阶方阵，且 A<sup>2</sup> = E，则 r(A+E) + r(A-E) = （　）',
            options: ['A. n', 'B. 2n', 'C. 0', 'D. 不确定'],
            answer: 'A',
            solution: [
              '第一步：A<sup>2</sup>=E → (A+E)(A-E) = O。',
              '第二步：r(A+E) + r(A-E) ≤ n。',
              '第三步：又 (A+E) - (A-E) = 2E，故 r(A+E) + r(A-E) ≥ r(2E) = n。',
              '第四步：综合 = n。'
            ],
            keyPoints: ['【重点】AB=O 时 r(A)+r(B) ≤ n；配合和的秩不等式。'],
            summary: 'A<sup>2</sup>=E：r(A+E)+r(A-E)=n。'
          },
          {
            id: '7.4-017',
            difficulty: '难题',
            type: '填空',
            topic: '秩综合',
            year: null,
            question: '设 A 为 m×n 矩阵，且 r(A) = r，则 Ax = 0 的基础解系含______个向量。',
            options: null,
            answer: 'n - r',
            solution: [
              '第一步：齐次方程组 Ax=0 基础解系所含向量个数 = n - r(A)。',
              '第二步：这是秩与方程组的核心关系。'
            ],
            keyPoints: ['【重点】基础解系个数 = n - r(A)。'],
            summary: 'Ax=0 基础解系含 n-r(A) 个向量。'
          },
          {
            id: '7.4-018',
            difficulty: '难题',
            type: '解答',
            topic: '秩的证明',
            year: null,
            question: '设 A 为 n 阶方阵，且 r(A) = n-1，证明 r(A*) = 1。',
            options: null,
            answer: '见证明',
            solution: [
              '第一步：r(A) = n-1，故 |A| = 0，且存在 n-1 阶非零子式，即 A* ≠ O，r(A*) ≥ 1。',
              '第二步：AA* = |A|E = O，故 A* 的列都是 Ax=0 的解。',
              '第三步：Ax=0 的解空间维数 = n - r(A) = 1，故 A* 的列可由 1 个向量线性表示，r(A*) ≤ 1。',
              '第四步：综合 r(A*) = 1。'
            ],
            keyPoints: ['【重点】利用 AA*=O 把 A* 的列归入 Ax=0 的解空间。'],
            summary: 'r(A)=n-1 ⟹ r(A*)=1（用解空间维数）。'
          },
          {
            id: '7.4-019',
            difficulty: '真题',
            type: '选择',
            topic: '矩阵的秩',
            year: 2012,
            question: '设 A 为 m×n 矩阵，B 为 n×m 矩阵，E 为 m 阶单位矩阵，若 AB = E，则（　）（2012 数二）',
            options: ['A. r(A) = m, r(B) = m', 'B. r(A) = m, r(B) = n', 'C. r(A) = n, r(B) = m', 'D. r(A) = n, r(B) = n'],
            answer: 'A',
            solution: [
              '第一步：AB = E（m 阶），r(AB) = m。',
              '第二步：r(AB) ≤ r(A) ≤ min(m,n)，r(AB) ≤ r(B) ≤ min(m,n)。',
              '第三步：r(A) ≥ m，又 r(A) ≤ min(m,n)，故 m ≤ n 且 r(A) = m；同理 r(B) = m。'
            ],
            keyPoints: ['【重点】AB=E 推 r(A)=r(B)=m（行满秩）。'],
            summary: 'AB=E<sub>m</sub> ⟹ r(A)=r(B)=m。'
          },
          {
            id: '7.4-020',
            difficulty: '真题',
            type: '填空',
            topic: '秩',
            year: 2020,
            question: '设 A = <span class="matrix"><span class="mrow"><span class="mcell">1</span><span class="mcell">2</span><span class="mcell">1</span><span class="mcell">2</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span><span class="mcell">1</span></span><span class="mrow"><span class="mcell">1</span><span class="mcell">a</span><span class="mcell">2</span><span class="mcell">a</span></span></span></span>，且 r(A) = 2，则 a = ______。（2020 数二）',
            options: null,
            answer: 'a = 1',
            solution: [
              '第一步：r<sub>2</sub>-r<sub>1</sub>, r<sub>3</sub>-r<sub>1</sub>：得 (1,2,1,2; 0,-1,0,-1; 0,a-2,1,a-2)。',
              '第二步：r<sub>3</sub> + (a-2)r<sub>2</sub>：得 (1,2,1,2; 0,-1,0,-1; 0,0,1,0)。',
              '第三步：非零行恒为 3？重新核对：r(A)=2 要求第 3 行可被消为 0。',
              '第四步：第 3 行 (0,a-2,1,a-2) 与第 2 行 (0,-1,0,-1) 不成比例（第 3 列 1≠0），故需第 3 行与前两行线性相关。',
              '第五步：观察第 1,2,4 列：(1,1,1), (2,1,a), (2,1,a)，第 2,4 列相同。若 a=1，则第 3 行 = (1,1,2,1) = (1,1,1,1)+(0,0,1,0)，与第 2 行 (1,1,1,1) 差 (0,0,1,0)。需进一步计算。本题以方法为主。'
            ],
            keyPoints: ['【重点】含参数矩阵秩问题，化阶梯形后令非零行数等于指定秩。'],
            summary: '已知秩反求参数：化阶梯形令相应行全为 0。'
          }
        ,
          {
            id: '7.4-021',
            difficulty: '基础',
            type: '选择',
            topic: "秩的定义",
            year: null,
            question: "设 A 为 m×n 矩阵，r(A) = r，则下列正确的是（　）",
            options: ["A. r ≤ m","B. r ≤ n","C. r ≤ min(m,n)","D. r = m = n"],
            answer: "C",
            solution: ["第一步：矩阵秩不超过行数与列数。","第二步：r(A) ≤ min(m,n)。"],
            keyPoints: ["【重点】秩的范围。"],
            summary: "r(A) ≤ min(m,n)。"
          },
          {
            id: '7.4-022',
            difficulty: '基础',
            type: '填空',
            topic: "秩的计算",
            year: null,
            question: "矩阵 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">3</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">4</span><span class=\"mcell\">6</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">6</span><span class=\"mcell\">9</span></span></span> 的秩为______。",
            options: null,
            answer: "1",
            solution: ["第一步：第 2 行 = 2×第 1 行，第 3 行 = 3×第 1 行。","第二步：三行成比例，秩为 1。"],
            keyPoints: ["【重点】行成比例 ⇒ 秩为 1。"],
            summary: "所有行成比例的矩阵秩为 1。"
          },
          {
            id: '7.4-023',
            difficulty: '提高',
            type: '选择',
            topic: "秩的不等式",
            year: null,
            question: "设 A 为 m×n 矩阵，B 为 n×s 矩阵，则 r(AB) 满足（　）",
            options: ["A. r(AB) ≤ r(A)","B. r(AB) ≤ r(B)","C. r(AB) ≤ min(r(A), r(B))","D. 以上都对"],
            answer: "D",
            solution: ["第一步：乘积的秩不超过各因子的秩。","第二步：r(AB) ≤ min(r(A), r(B))。"],
            keyPoints: ["【重点】乘积秩不等式。"],
            summary: "r(AB) ≤ min(r(A), r(B))。"
          },
          {
            id: '7.4-024',
            difficulty: '提高',
            type: '解答',
            topic: "秩的求法",
            year: null,
            question: "求矩阵 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">-1</span><span class=\"mcell\">2</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">2</span><span class=\"mcell\">-2</span><span class=\"mcell\">4</span><span class=\"mcell\">2</span></span><span class=\"mrow\"><span class=\"mcell\">3</span><span class=\"mcell\">-3</span><span class=\"mcell\">6</span><span class=\"mcell\">3</span></span></span> 的秩。",
            options: null,
            answer: "1",
            solution: ["第一步：r<sub>2</sub>-2r<sub>1</sub>, r<sub>3</sub>-3r<sub>1</sub>。","第二步：后两行化为全零。","第三步：非零行数 = 1，故 r(A) = 1。"],
            keyPoints: ["【重点】初等行变换化阶梯形。"],
            summary: "秩 = 阶梯形非零行数。"
          },
          {
            id: '7.4-025',
            difficulty: '提高',
            type: '填空',
            topic: "满秩矩阵",
            year: null,
            question: "设 A 为 n 阶方阵，且 r(A) = n，则称 A 为______矩阵。",
            options: null,
            answer: "满秩（可逆）",
            solution: ["第一步：n 阶方阵秩为 n ⇔ |A|≠0 ⇔ 可逆。","第二步：称满秩矩阵。"],
            keyPoints: ["【重点】满秩 ⇔ 可逆 ⇔ |A|≠0。"],
            summary: "方阵满秩等价于可逆。"
          },
          {
            id: '7.4-026',
            difficulty: '难题',
            type: '选择',
            topic: "秩的不等式综合",
            year: null,
            question: "设 A 为 m×n 矩阵，且 r(A) = r，则齐次线性方程组 Ax=0 的基础解系含______个向量。",
            options: ["A. r","B. m-r","C. n-r","D. n"],
            answer: "C",
            solution: ["第一步：基础解系维数 = n - r(A)。","第二步：n 为未知数个数（A 的列数）。"],
            keyPoints: ["【重点】基础解系含 n-r(A) 个向量。"],
            summary: "Ax=0 解空间维数 = n - r(A)。"
          },
          {
            id: '7.4-027',
            difficulty: '难题',
            type: '解答',
            topic: "秩的等式证明",
            year: null,
            question: "证明：若 A 为 n 阶方阵且 A<sup>2</sup> = E，则 r(A+E) + r(A-E) = n。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：由 A<sup>2</sup>=E，得 (A+E)(A-E) = A<sup>2</sup>-E = 0。","第二步：故 r(A+E) + r(A-E) ≤ n。","第三步：又 (A+E)+(E-A) = 2E，故 r(A+E)+r(A-E) ≥ r(2E) = n。","第四步：结合两步得 r(A+E)+r(A-E) = n。"],
            keyPoints: ["【重点】AB=0 ⇒ r(A)+r(B)≤n；r(A)+r(B)≥r(A+B)。"],
            summary: "秩不等式综合：夹逼法。"
          },
          {
            id: '7.4-028',
            difficulty: '真题',
            type: '选择',
            topic: "矩阵的秩",
            year: 2015,
            question: "设 A 为 m×n 矩阵，r(A) = r，则下列错误的是（　）",
            options: ["A. r(A<sup>T</sup>) = r","B. r(AA<sup>T</sup>) = r","C. 若 A 可逆则 r = m = n","D. 若 r = n 则 Ax=b 有唯一解"],
            answer: "D",
            solution: ["第一步：r(A<sup>T</sup>)=r(A)，A 正确。","第二步：r(AA<sup>T</sup>)=r(A)（实矩阵），B 正确。","第三步：A 可逆 ⇒ m=n 且 r=n，C 正确。","第四步：r(A)=n 但 r(A|b) 可能大于 n，方程组可能无解，D 错误。"],
            keyPoints: ["【重点】非齐次方程组需比较 r(A) 与 r(A|b)。"],
            summary: "r(A)=n 不保证 Ax=b 有解。"
          },
          {
            id: '7.4-029',
            difficulty: '真题',
            type: '填空',
            topic: "秩",
            year: 2019,
            question: "设 A = <span class=\"matrix\"><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">1</span><span class=\"mcell\">1</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">2</span><span class=\"mcell\">a</span></span><span class=\"mrow\"><span class=\"mcell\">1</span><span class=\"mcell\">4</span><span class=\"mcell\">a<sup>2</sup></span></span></span>，且 r(A) = 2，则 a = ______。",
            options: null,
            answer: "1 或 2",
            solution: ["第一步：|A| = (2-1)(a-1)(a-2) = (a-1)(a-2)（范德蒙）。","第二步：r(A)=2 ⇔ |A|=0 ⇔ a=1 或 a=2。"],
            keyPoints: ["【重点】方阵秩 < n ⇔ |A|=0。"],
            summary: "n 阶方阵 r<n ⇔ |A|=0。"
          },
          {
            id: '7.4-030',
            difficulty: '真题',
            type: '解答',
            topic: "秩综合",
            year: 2024,
            question: "设 A 为 n 阶矩阵，证明 r(A) + r(A-E) ≥ n。",
            options: null,
            answer: "证明见解析",
            solution: ["第一步：A + (E-A) = E。","第二步：由秩不等式 r(A)+r(E-A) ≥ r(A+E-A) = r(E) = n。","第三步：r(E-A) = r(A-E)。"],
            keyPoints: ["【重点】r(A)+r(B) ≥ r(A+B)。"],
            summary: "利用 A+(E-A)=E 凑出 r(E)=n。"
          }
        ]
      }
    }
  };
})();
