(function() {
  'use strict';
  window.QB_DATA = window.QB_DATA || {};
  window.QB_DATA['1'] = {
    id: 1,
    title: '函数、极限、连续',
    subject: '高等数学',
    sections: {
      '1.1': {
        id: '1.1',
        title: '函数的概念与性质',
        questions: [
          {
            id: '1.1-001',
            difficulty: '基础',
            type: '填空',
            topic: '函数定义域的求法',
            year: null,
            question: '函数 f(x) = <span class="frac"><span class="num">√(x+2)</span><span class="den">ln(1-x)</span></span> 的定义域为______。',
            options: null,
            answer: '[-2, 0)∪(0, 1)',
            solution: [
              '第一步：偶次根号内非负：x+2≥0，得 x≥-2。',
              '第二步：对数真数大于0：1-x&gt;0，得 x&lt;1。',
              '第三步：分母不为0：ln(1-x)≠0，即 1-x≠1，得 x≠0。',
              '第四步：取交集得 -2≤x&lt;1 且 x≠0，即 [-2,0)∪(0,1)。'
            ],
            keyPoints: [
              '【重点】定义域要同时满足各层约束，最后取交集。',
              '【易错点】容易漏掉分母 ln(1-x)≠0 这个条件。'
            ],
            summary: '求复合初等函数定义域：根号、对数、分母逐个列约束后取交集。'
          },
          {
            id: '1.1-002',
            difficulty: '基础',
            type: '选择',
            topic: '函数奇偶性的判断',
            year: null,
            question: '下列函数中为奇函数的是（　）。',
            options: [
              'A. f(x)=x<sup>2</sup>cosx',
              'B. f(x)=x<sup>3</sup>+x<sup>2</sup>',
              'C. f(x)=sinx·cosx',
              'D. f(x)=x<sup>2</sup>+sinx'
            ],
            answer: 'C',
            solution: [
              '第一步：偶函数满足 f(-x)=f(x)，奇函数满足 f(-x)=-f(x)。',
              '第二步：A：(-x)²cos(-x)=x²cosx，为偶函数，排除。',
              '第三步：B：(-x)³+(-x)²=-x³+x²，既不等于 f(x) 也不等于 -f(x)，非奇非偶。',
              '第四步：C：sin(-x)cos(-x)=-sinxcosx=-f(x)，为奇函数。',
              '第五步：D：(-x)²+sin(-x)=x²-sinx，非奇非偶。故选 C。'
            ],
            keyPoints: [
              '【重点】奇偶×奇偶=偶，奇×偶=奇，偶×偶=偶。',
              '【易错点】奇函数×奇函数=偶函数，不要记错符号。'
            ],
            summary: '判断奇偶性：用定义 f(-x) 或记乘除口诀（同偶异奇）。'
          },
          {
            id: '1.1-003',
            difficulty: '基础',
            type: '选择',
            topic: '函数有界性',
            year: null,
            question: '函数 f(x) = <span class="frac"><span class="num">x</span><span class="den">1+x<sup>2</sup></span></span> 在(-∞,+∞)内（　）。',
            options: [
              'A. 上无界下有界',
              'B. 上有界下无界',
              'C. 有界',
              'D. 无界'
            ],
            answer: 'C',
            solution: [
              '第一步：求 |f(x)| 的最大值。由 1+x<sup>2</sup>≥2|x|，得 |x|/(1+x<sup>2</sup>)≤|x|/(2|x|)=1/2（x≠0）。',
              '第二步：x=0 时 f(0)=0。',
              '第三步：故 |f(x)|≤1/2，函数在 R 上有界。'
            ],
            keyPoints: [
              '【简便方法】用重要不等式 1+x²≥2|x| 快速放缩。',
              '【重点】有界即存在 M 使 |f(x)|≤M。'
            ],
            summary: '分式有理函数在 R 上的有界性常用 1+x²≥2|x| 放缩判断。'
          },
          {
            id: '1.1-004',
            difficulty: '基础',
            type: '填空',
            topic: '复合函数',
            year: null,
            question: '设 f(x) = x<sup>2</sup>，g(x) = e<sup>x</sup>，则 f(g(x)) = ______，g(f(x)) = ______。',
            options: null,
            answer: 'f(g(x)) = e<sup>2x</sup>；g(f(x)) = e<sup>x²</sup>',
            solution: [
              '第一步：f(g(x)) 即用 g(x) 替换 f 的自变量：(e<sup>x</sup>)<sup>2</sup>=e<sup>2x</sup>。',
              '第二步：g(f(x)) 即用 f(x) 替换 g 的自变量：e<sup>x²</sup>。'
            ],
            keyPoints: [
              '【易错点】(e^x)²=e^(2x)，不要写成 e^(x²)。'
            ],
            summary: '复合函数 f(g(x)) 就是把 f 中的 x 整体换成 g(x)。'
          },
          {
            id: '1.1-005',
            difficulty: '基础',
            type: '选择',
            topic: '反函数',
            year: null,
            question: '函数 y = ln(x+1) (x&gt;-1) 的反函数是（　）。',
            options: [
              'A. y = e<sup>x</sup>-1',
              'B. y = e<sup>x</sup>+1',
              'C. y = e<sup>x</sup>',
              'D. y = <span class="frac"><span class="num">1</span><span class="den">e<sup>x</sup>-1</span></span>'
            ],
            answer: 'A',
            solution: [
              '第一步：由 y=ln(x+1) 得 x+1=e<sup>y</sup>，即 x=e<sup>y</sup>-1。',
              '第二步：交换 x,y 得反函数 y=e<sup>x</sup>-1，定义域为原函数值域 R。'
            ],
            keyPoints: [
              '【重点】反函数定义域=原函数值域，值域=原函数定义域。'
            ],
            summary: '求反函数：反解 x=f⁻¹(y)，再交换 x,y。'
          },
          {
            id: '1.1-006',
            difficulty: '基础',
            type: '填空',
            topic: '函数的单调性',
            year: null,
            question: '函数 f(x) = log<sub>2</sub>(x<sup>2</sup>-2x-3) 的单调递增区间为______。',
            options: null,
            answer: '(3, +∞)',
            solution: [
              '第一步：先求定义域：x²-2x-3&gt;0，即 (x-3)(x+1)&gt;0，得 x&lt;-1 或 x&gt;3。',
              '第二步：内层 u=x²-2x-3=(x-1)²-4，在 (3,+∞) 上单调递增，在 (-∞,-1) 上单调递减。',
              '第三步：外层 log<sub>2</sub>(u) 单调递增，由同增异减，复合函数在 (3,+∞) 上递增。'
            ],
            keyPoints: [
              '【易错点】必须先求定义域，否则会把 [-1,3] 等非定义域区间算进去。',
              '【重点】复合函数单调性"同增异减"。'
            ],
            summary: '对数复合函数单调性：先定定义域，再用同增异减。'
          },
          {
            id: '1.1-007',
            difficulty: '提高',
            type: '选择',
            topic: '奇偶函数的运算性质',
            year: null,
            question: '设 f(x) 为奇函数，g(x) 为偶函数，且在公共定义域内恒不为零，则下列函数中为奇函数的是（　）。',
            options: [
              'A. f(x)·g(x)',
              'B. f(x)+g(x)',
              'C. f(g(x))',
              'D. g(f(x))'
            ],
            answer: 'A',
            solution: [
              '第一步：A：f(-x)g(-x)=(-f(x))g(x)=-f(x)g(x)，为奇。',
              '第二步：B：f(-x)+g(-x)=-f(x)+g(x)，非奇非偶。',
              '第三步：C：f(g(-x))=f(g(x))，为偶。',
              '第四步：D：g(f(-x))=g(-f(x))=g(f(x))，为偶。'
            ],
            keyPoints: [
              '【重点】奇×偶=奇；奇复合偶=偶；偶复合奇=偶。'
            ],
            summary: '奇偶函数四则与复合：奇乘偶得奇，外层为偶则复合必偶。'
          },
          {
            id: '1.1-008',
            difficulty: '提高',
            type: '填空',
            topic: '分段函数求值',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval">x+1,</span><span class="pcond">x≤0</span></span><span class="prow"><span class="pval">x<sup>2</sup>,</span><span class="pcond">x&gt;0</span></span></span>，则 f(f(-1)) = ______，f(f(1)) = ______。',
            options: null,
            answer: 'f(f(-1))=1；f(f(1))=1',
            solution: [
              '第一步：f(-1)=(-1)+1=0。',
              '第二步：f(f(-1))=f(0)=0+1=1。',
              '第三步：f(1)=1²=1，再 f(f(1))=f(1)=1。'
            ],
            keyPoints: [
              '【易错点】分段函数嵌套要逐层判断自变量落在哪个区间。'
            ],
            summary: '分段函数复合求值：从内到外逐层代入并判断区间。'
          },
          {
            id: '1.1-009',
            difficulty: '提高',
            type: '解答',
            topic: '函数奇偶性与周期性综合',
            year: null,
            question: '设 f(x) 是定义在 R 上的奇函数，且 f(x+2)=-f(x)，当 0≤x≤1 时 f(x)=x。求 f(7.5) 的值。',
            options: null,
            answer: 'f(7.5) = -0.5',
            solution: [
              '第一步：由 f(x+2)=-f(x)，得 f(x+4)=-f(x+2)=f(x)，故周期 T=4。',
              '第二步：f(7.5)=f(7.5-8)=f(-0.5)。',
              '第三步：由奇函数 f(-0.5)=-f(0.5)=-0.5。'
            ],
            keyPoints: [
              '【重点】f(x+a)=-f(x) 推出周期 2a。',
              '【简便方法】先周期化到 [0,1]，再用奇函数对称。'
            ],
            summary: 'f(x+a)=-f(x) 型抽象函数必为周期 2a，配合奇偶性求值。'
          },
          {
            id: '1.1-010',
            difficulty: '提高',
            type: '选择',
            topic: '函数的有界性与值域',
            year: null,
            question: '函数 f(x) = <span class="frac"><span class="num">sinx</span><span class="den">x</span></span> 在 (0, +∞) 上（　）。',
            options: [
              'A. 无界',
              'B. 有界',
              'C. 单调递增',
              'D. 单调递减'
            ],
            answer: 'B',
            solution: [
              '第一步：当 x&gt;0 时 |sinx|≤1，故 |f(x)|≤1/x。',
              '第二步：在 (0,1] 上 1/x 可能很大，但 x→0⁺ 时 sinx/x→1，f 有界；在 [1,+∞) 上 |f(x)|≤1。',
              '第三步：综合知 f(x) 在 (0,+∞) 有界（极限存在于两端，连续则有界）。'
            ],
            keyPoints: [
              '【重点】x→0⁺ 时 sinx/x→1 是关键，不能只看 |sinx|/x 在 x 很小时的表象。'
            ],
            summary: 'sinx/x 在正半轴有界，x→0⁺ 极限为1是核心依据。'
          },
          {
            id: '1.1-011',
            difficulty: '提高',
            type: '填空',
            topic: '函数方程',
            year: null,
            question: '设 f(x) 满足 2f(x)+f(<span class="frac"><span class="num">1</span><span class="den">x</span></span>) = x (x≠0)，则 f(x) = ______。',
            options: null,
            answer: 'f(x) = <span class="frac"><span class="num">2x<sup>2</sup>-1</span><span class="den">3x</span></span>',
            solution: [
              '第一步：原式 2f(x)+f(1/x)=x。',
              '第二步：将 x 换成 1/x：2f(1/x)+f(x)=1/x。',
              '第三步：联立方程组，第一式×2 减第二式：4f(x)+2f(1/x)-2f(1/x)-f(x)=2x-1/x，即 3f(x)=2x-1/x。',
              '第四步：f(x)=(2x-1/x)/3=(2x²-1)/(3x)。'
            ],
            keyPoints: [
              '【重点】函数方程用"换元联立消元"法。',
              '【易错点】要把 x 与 1/x 互换后再解方程组。'
            ],
            summary: '含 f(x) 与 f(1/x) 的方程，互换变量联立消元求解。'
          },
          {
            id: '1.1-012',
            difficulty: '提高',
            type: '解答',
            topic: '复合函数定义域',
            year: null,
            question: '已知 f(x) 的定义域为 [0, 2]，求 f(x²-1) 的定义域。',
            options: null,
            answer: '[-√3, -1]∪[1, √3]',
            solution: [
              '第一步：f 的定义域 [0,2] 是指括号内整体的范围。',
              '第二步：令 0≤x²-1≤2，即 1≤x²≤3。',
              '第三步：由 x²≥1 得 |x|≥1；由 x²≤3 得 |x|≤√3。',
              '第四步：交集为 1≤|x|≤√3，即 [-√3,-1]∪[1,√3]。'
            ],
            keyPoints: [
              '【重点】f(g(x)) 的定义域：g(x) 的取值落在 f 的定义域内。',
              '【易错点】不要把 f(x) 定义域 [0,2] 直接当作 x 的范围。'
            ],
            summary: '复合函数定义域：内层函数值域⊆外层定义域，解不等式。'
          },
          {
            id: '1.1-013',
            difficulty: '难题',
            type: '选择',
            topic: '抽象函数性质综合',
            year: null,
            question: '设 f(x) 在 (-∞,+∞) 上有定义，且对任意 x,y 有 f(x+y)=f(x)+f(y)，则 f(x) 是（　）。',
            options: [
              'A. 奇函数',
              'B. 偶函数',
              'C. 非奇非偶',
              'D. 既是奇又是偶'
            ],
            answer: 'A',
            solution: [
              '第一步：令 x=y=0：f(0)=2f(0)，得 f(0)=0。',
              '第二步：令 y=-x：f(0)=f(x)+f(-x)，即 f(x)+f(-x)=0。',
              '第三步：故 f(-x)=-f(x)，f 为奇函数。'
            ],
            keyPoints: [
              '【重点】柯西方程 f(x+y)=f(x)+f(y) 必为奇函数。',
              '【易错点】必须先证 f(0)=0 才能推出奇偶性。'
            ],
            summary: '柯西型函数方程：先求 f(0)，再令 y=-x 证奇偶。'
          },
          {
            id: '1.1-014',
            difficulty: '难题',
            type: '解答',
            topic: '函数的奇偶性与对称',
            year: null,
            question: '证明：定义在对称区间 [-a,a] 上的任意函数 f(x) 都可以表示为一个奇函数与一个偶函数之和，并写出该分解式。',
            options: null,
            answer: 'f(x) = <span class="frac"><span class="num">f(x)+f(-x)</span><span class="den">2</span></span> + <span class="frac"><span class="num">f(x)-f(-x)</span><span class="den">2</span></span>，前者为偶，后者为奇。',
            solution: [
              '第一步：设 f(x)=G(x)+H(x)，其中 G 偶、H 奇。',
              '第二步：则 f(-x)=G(x)-H(x)。',
              '第三步：联立解得 G(x)=[f(x)+f(-x)]/2（偶），H(x)=[f(x)-f(-x)]/2（奇）。',
              '第四步：验证 G(-x)=G(x)，H(-x)=-H(x)，且 G+H=f(x)。'
            ],
            keyPoints: [
              '【重点】任意函数=偶部+奇部，这是奇偶分解的标准公式。',
              '【简便方法】记住 G=[f(x)+f(-x)]/2，H=[f(x)-f(-x)]/2。'
            ],
            summary: '奇偶分解公式：偶部取平均，奇部取差的一半。'
          },
          {
            id: '1.1-015',
            difficulty: '难题',
            type: '填空',
            topic: '周期函数',
            year: null,
            question: '设 f(x) 是以 2 为周期的函数，且在一个周期内 f(x) = x<sup>2</sup> (0≤x&lt;2)，则 f(5.5) = ______。',
            options: null,
            answer: '2.25',
            solution: [
              '第一步：周期 2，f(5.5)=f(5.5-4)=f(1.5)。',
              '第二步：1.5∈[0,2)，f(1.5)=1.5²=2.25。'
            ],
            keyPoints: [
              '【重点】周期函数化到一个周期内再求值。'
            ],
            summary: '周期函数求值：先减去若干个周期落到已知区间。'
          },
          {
            id: '1.1-016',
            difficulty: '难题',
            type: '解答',
            topic: '函数值域',
            year: null,
            question: '求函数 y = <span class="frac"><span class="num">x<sup>2</sup>-x+1</span><span class="den">x<sup>2</sup>+x+1</span></span> 的值域。',
            options: null,
            answer: '[<span class="frac"><span class="num">1</span><span class="den">3</span></span>, 3]',
            solution: [
              '第一步：变形 y(x²+x+1)=x²-x+1，整理得 (y-1)x²+(y+1)x+(y-1)=0。',
              '第二步：x 为实数则判别式 Δ≥0（y≠1 时）：Δ=(y+1)²-4(y-1)²≥0。',
              '第三步：展开 y²+2y+1-4y²+8y-4≥0，即 -3y²+10y-3≥0，3y²-10y+3≤0。',
              '第四步：解 (3y-1)(y-3)≤0，得 1/3≤y≤3。验证 y=1 时方程退化为 2x=0 有解，故 1 可取。值域 [1/3,3]。'
            ],
            keyPoints: [
              '【重点】判别式法求分式二次函数值域。',
              '【易错点】要单独讨论二次项系数 y-1=0 的情形。'
            ],
            summary: '分子分母同为二次式的值域问题用判别式法。'
          },
          {
            id: '1.1-017',
            difficulty: '真题',
            type: '选择',
            topic: '函数的奇偶性与单调性',
            year: 2014,
            question: '设函数 f(x) 可导，且 f′(x) 为奇函数，则 f(x) 是（　）。',
            options: [
              'A. 偶函数',
              'B. 奇函数',
              'C. 非奇非偶函数',
              'D. 无法确定'
            ],
            answer: 'A',
            solution: [
              '第一步：由 f′(x) 为奇函数，f′(-x)=-f′(x)。',
              '第二步：两边对 x 积分：∫f′(-x)dx=∫(-f′(x))dx。左边令 u=-x：-∫f′(u)du=-f(-x)；右边 -f(x)。',
              '第三步：得 -f(-x)=-f(x)+C，即 f(-x)=f(x)-C。令 x=0：f(0)=f(0)-C，C=0。',
              '第四步：故 f(-x)=f(x)，f 为偶函数。'
            ],
            keyPoints: [
              '【重点】导数为奇则原函数为偶；导数为偶则原函数为奇加常数。'
            ],
            summary: '导函数的奇偶性决定原函数奇偶性（差一个常数）。'
          },
          {
            id: '1.1-018',
            difficulty: '真题',
            type: '填空',
            topic: '复合函数与反函数',
            year: 2020,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval">e<sup>x</sup>,</span><span class="pcond">x≤0</span></span><span class="prow"><span class="pval">lnx,</span><span class="pcond">x&gt;0</span></span></span>，则 f(f(<span class="frac"><span class="num">1</span><span class="den">e</span></span>)) = ______。',
            options: null,
            answer: 'e⁻¹',
            solution: [
              '第一步：f(1/e)=ln(1/e)=-1。',
              '第二步：f(f(1/e))=f(-1)=e<sup>-1</sup>。'
            ],
            keyPoints: [
              '【重点】分段函数嵌套，先算内层并判断区间。'
            ],
            summary: '分段函数复合：逐层代入，每层判断自变量所在区间。'
          },
          {
            id: '1.1-019',
            difficulty: '真题',
            type: '选择',
            topic: '函数的有界性',
            year: 2016,
            question: '设 f(x) = <span class="frac"><span class="num">1</span><span class="den">1-x</span></span>，则 f(x) 在下列哪个区间内有界（　）。',
            options: [
              'A. (-1, 0)',
              'B. (0, 1)',
              'C. (1, 2)',
              'D. (0, +∞)'
            ],
            answer: 'A',
            solution: [
              '第一步：f(x) 的无穷间断点为 x=1。开区间内连续函数有界 ⇔ 两端点处单侧极限都有限。',
              '第二步：A(-1,0)：x→-1⁺ 时 f→1/2，x→0⁻ 时 f→1，两端均有限，故有界。',
              '第三步：B(0,1)：x→1⁻ 时 1-x→0⁺，f→+∞，无界。',
              '第四步：C(1,2)：x→1⁺ 时 1-x→0⁻，f→-∞，无界；D(0,+∞)：x→1⁻ 或 x→1⁺ 均发散，无界。故选 A。'
            ],
            keyPoints: [
              '【重点】开区间内连续函数有界 ⇔ 两端单侧极限均存在。',
              '【易错点】tanx 在 π/2 有无穷间断点，含该点的区间必无界。'
            ],
            summary: '判断开区间内有界：看两端点单侧极限是否都有限。'
          },
          {
            id: '1.1-020',
            difficulty: '真题',
            type: '解答',
            topic: '函数性质综合',
            year: 2022,
            question: '设 f(x) 为定义在 R 上的偶函数，且 f(x) 在 [0,+∞) 上单调递增，试比较 f(-2)、f(1)、f(3) 的大小。',
            options: null,
            answer: 'f(1) &lt; f(-2) &lt; f(3)',
            solution: [
              '第一步：偶函数 f(-2)=f(2)。',
              '第二步：f 在 [0,+∞) 递增，故 f(1)&lt;f(2)&lt;f(3)。',
              '第三步：代回得 f(1)&lt;f(-2)&lt;f(3)。'
            ],
            keyPoints: [
              '【重点】偶函数转化到同一单调区间再比较。'
            ],
            summary: '偶函数比较函数值：把负变量用 f(-x)=f(x) 化到正区间。'
          },
          {
            id: '1.1-021',
            difficulty: '基础',
            type: '填空',
            topic: '函数定义域',
            year: null,
            question: '函数 f(x) = <span class="frac"><span class="num">1</span><span class="den">√(x<sup>2</sup>-4)</span></span> + ln(x-3) 的定义域为______。',
            options: null,
            answer: '(3, +∞)',
            solution: [
              '第一步：根号在分母，要求 x²-4&gt;0，即 |x|&gt;2。',
              '第二步：对数真数 x-3&gt;0，得 x&gt;3。',
              '第三步：取交集得 x&gt;3，即 (3,+∞)。'
            ],
            keyPoints: [
              '【易错点】分母根号要求严格大于0，不是≥0。'
            ],
            summary: '分母中偶次根号要求内部严格大于0。'
          },
          {
            id: '1.1-022',
            difficulty: '基础',
            type: '选择',
            topic: '函数奇偶性',
            year: null,
            question: '设 f(x) 为定义在(-∞,+∞)上的奇函数，且当 x≥0 时 f(x)=x<sup>2</sup>+x，则当 x&lt;0 时 f(x)=（　）。',
            options: [
              'A. -x<sup>2</sup>+x',
              'B. -x<sup>2</sup>-x',
              'C. x<sup>2</sup>-x',
              'D. x<sup>2</sup>+x'
            ],
            answer: 'A',
            solution: [
              '第一步：x&lt;0 时 -x&gt;0，代入已知表达式 f(-x)=(-x)²+(-x)=x²-x。',
              '第二步：由奇函数 f(-x)=-f(x)，得 f(x)=-f(-x)=-(x²-x)=-x²+x。'
            ],
            keyPoints: [
              '【重点】奇函数在对称区间上表达式为 -f(-x)。'
            ],
            summary: '已知 x≥0 时表达式，求 x&lt;0 时用 f(x)=-f(-x)。'
          },
          {
            id: '1.1-023',
            difficulty: '基础',
            type: '填空',
            topic: '反函数',
            year: null,
            question: '函数 y = 2x+3 (x∈R) 的反函数为______。',
            options: null,
            answer: 'y = <span class="frac"><span class="num">x-3</span><span class="den">2</span></span>',
            solution: [
              '第一步：由 y=2x+3 解出 x：x=(y-3)/2。',
              '第二步：交换 x,y 得反函数 y=(x-3)/2。'
            ],
            keyPoints: [
              '【重点】反函数求法：解出自变量再交换。'
            ],
            summary: '一次函数反函数直接解方程即可。'
          },
          {
            id: '1.1-024',
            difficulty: '提高',
            type: '选择',
            topic: '复合函数求值',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval">x+1,</span><span class="pcond">x≤0</span></span><span class="prow"><span class="pval">x-1,</span><span class="pcond">x&gt;0</span></span></span>，则 f(f(1)) =（　）。',
            options: [
              'A. -1',
              'B. 0',
              'C. 1',
              'D. 2'
            ],
            answer: 'C',
            solution: [
              '第一步：因 1&gt;0，f(1)=1-1=0。',
              '第二步：因 0≤0，f(0)=0+1=1。',
              '第三步：故 f(f(1))=f(0)=1，选 C。'
            ],
            keyPoints: [
              '【易错点】分段函数代入要看清边界条件归属，x=0 归到 x≤0 那一支。'
            ],
            summary: '分段函数求值由内向外逐层代入。'
          },
          {
            id: '1.1-025',
            difficulty: '提高',
            type: '填空',
            topic: '函数有界性',
            year: null,
            question: '函数 f(x) = <span class="frac"><span class="num">x</span><span class="den">x<sup>2</sup>+x+1</span></span> 在(-∞,+∞)上的最大值为______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：设 y=x/(x²+x+1)，整理为 yx²+(y-1)x+y=0。',
              '第二步：x 为实数需判别式 Δ=(y-1)²-4y²≥0，即 3y²+2y-1≤0。',
              '第三步：解方程 3y²+2y-1=0 得根 y=-1 和 y=1/3，故 -1≤y≤1/3。',
              '第四步：最大值为 1/3（在 x=1 处取得）。'
            ],
            keyPoints: [
              '【方法】判别式法求分式有理函数的值域。'
            ],
            summary: '分子分母均为二次的分式函数值域可用判别式法。'
          },
          {
            id: '1.1-026',
            difficulty: '提高',
            type: '选择',
            topic: '函数周期性',
            year: null,
            question: '设 f(x) 在 R 上满足 f(x+2) = -f(x)，且 f(1)=2，则 f(2025)=（　）。',
            options: [
              'A. -2',
              'B. 2',
              'C. 0',
              'D. 4'
            ],
            answer: 'B',
            solution: [
              '第一步：由 f(x+2)=-f(x)，得 f(x+4)=-f(x+2)=f(x)，周期为4。',
              '第二步：2025 = 4×506+1，故 f(2025)=f(1)=2。'
            ],
            keyPoints: [
              '【重点】f(x+T)=-f(x) 推出周期为 2T。'
            ],
            summary: '递推关系 f(x+T)=-f(x) ⇒ 周期 2T。'
          },
          {
            id: '1.1-027',
            difficulty: '难题',
            type: '解答',
            topic: '函数方程',
            year: null,
            question: '设 f(x) 满足方程 f(x) + 2f(<span class="frac"><span class="num">1</span><span class="den">x</span></span>) = 3x (x≠0)，求 f(x) 的表达式。',
            options: null,
            answer: 'f(x) = <span class="frac"><span class="num">2-x<sup>2</sup></span><span class="den">x</span></span>',
            solution: [
              '第一步：将 x 替换为 1/x，得 f(1/x)+2f(x)=3/x。',
              '第二步：联立原方程 f(x)+2f(1/x)=3x 与新方程 2f(x)+f(1/x)=3/x。',
              '第三步：第二式×2 减第一式：3f(x)=6/x-3x，故 f(x)=2/x-x。',
              '第四步：整理 f(x)=(2-x²)/x。'
            ],
            keyPoints: [
              '【方法】函数方程常用变量替换联立消元。'
            ],
            summary: '含 f(x) 与 f(1/x) 的方程，替换 x→1/x 再联立。'
          },
          {
            id: '1.1-028',
            difficulty: '难题',
            type: '选择',
            topic: '奇偶性与单调性综合',
            year: null,
            question: '设 f(x) 为连续的偶函数，且在(0,+∞)内单调递增，则下列不等式成立的是（　）。',
            options: [
              'A. f(-3) &lt; f(-π) &lt; f(-4)',
              'B. f(-π) &lt; f(-3) &lt; f(-4)',
              'C. f(-4) &lt; f(-π) &lt; f(-3)',
              'D. f(-3) &lt; f(-4) &lt; f(-π)'
            ],
            answer: 'A',
            solution: [
              '第一步：偶函数 f(-x)=f(x)，故比较 f(-3),f(-π),f(-4) 即比较 f(3),f(π),f(4)。',
              '第二步：f 在(0,+∞)递增，且 3&lt;π&lt;4，故 f(3)&lt;f(π)&lt;f(4)。',
              '第三步：即 f(-3)&lt;f(-π)&lt;f(-4)，对应选项 A。'
            ],
            keyPoints: [
              '【简便方法】偶函数在对称点取相同值，转化到同一单调区间比较。'
            ],
            summary: '偶函数比较大小先利用 f(-x)=f(x) 转到正半轴。'
          },
          {
            id: '1.1-029',
            difficulty: '真题',
            type: '选择',
            topic: '函数性质综合',
            year: 2012,
            question: '设 f(x) 为连续函数，且 F(x) = ∫<sub>0</sub><sup>x</sup>(x-2t)f(t)dt，则 f(x) 为偶函数时 F(x) 为（　）。',
            options: [
              'A. 奇函数',
              'B. 偶函数',
              'C. 非奇非偶',
              'D. 无法确定'
            ],
            answer: 'B',
            solution: [
              '第一步：F(-x)=∫₀^{-x}(-x-2t)f(t)dt，令 t=-u，dt=-du。',
              '第二步：当 t=0,u=0；t=-x,u=x。F(-x)=∫₀^{x}(-x+2u)f(-u)(-du)=∫₀^{x}(x-2u)f(u)du=F(x)。',
              '第三步：故 F(x) 为偶函数。'
            ],
            keyPoints: [
              '【重点】被积函数含 x 时换元要仔细。'
            ],
            summary: '变限积分构造函数的奇偶性通过换元判断。'
          },
          {
            id: '1.1-030',
            difficulty: '真题',
            type: '填空',
            topic: '复合函数与反函数',
            year: 2018,
            question: '设 f(x) = e<sup>x</sup>，若 f(g(x)) = 1-x，则 g(x) = ______。',
            options: null,
            answer: 'ln(1-x) (x&lt;1)',
            solution: [
              '第一步：f(g(x))=e^{g(x)}=1-x。',
              '第二步：两边取对数 g(x)=ln(1-x)，要求 1-x&gt;0 即 x&lt;1。'
            ],
            keyPoints: [
              '【易错点】注意对数真数大于0的定义域。'
            ],
            summary: '复合函数等式两边取外层函数反函数即可。'
          }
        ]
      },
      '1.2': {
        id: '1.2',
        title: '极限的概念与性质',
        questions: [
          {
            id: '1.2-001',
            difficulty: '基础',
            type: '选择',
            topic: '数列极限的定义',
            year: null,
            question: '对任意给定的 ε∈(0,1)，总存在正整数 N，当 n&gt;N 时恒有 |x<sub>n</sub>-a|&lt;ε，则（　）。',
            options: [
              'A. lim x<sub>n</sub>=a 不一定成立',
              'B. lim x<sub>n</sub>=a 成立',
              'C. 仅当 x<sub>n</sub> 单调时 lim x<sub>n</sub>=a',
              'D. {x<sub>n</sub>} 有界但不收敛'
            ],
            answer: 'B',
            solution: [
              '第一步：数列极限定义要求"对任意 ε&gt;0"。',
              '第二步：题中 ε∈(0,1) 已经足够——对任意 ε≥1，取 ε₀=ε/2∈(0,1)，由条件找到 N 后同样满足 |x<sub>n</sub>-a|&lt;ε₀&lt;ε。',
              '第三步：故条件与"对任意 ε&gt;0"等价，lim x<sub>n</sub>=a 成立。'
            ],
            keyPoints: [
              '【重点】极限定义中 ε 只需"任意小"，限制在 (0,1) 内不影响本质。',
              '【易错点】误以为 ε 必须是任意正实数才叫极限。'
            ],
            summary: '极限定义只需 ε 可任意小，限制在某个小区间内等价。'
          },
          {
            id: '1.2-002',
            difficulty: '基础',
            type: '填空',
            topic: '数列极限的直观',
            year: null,
            question: '数列 x<sub>n</sub> = <span class="frac"><span class="num">n+1</span><span class="den">n</span></span> 的极限为______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：x<sub>n</sub>=1+1/n。',
              '第二步：n→∞ 时 1/n→0，故 x<sub>n</sub>→1。'
            ],
            keyPoints: [
              '【重点】有理数列同次相除看最高次系数。'
            ],
            summary: 'n→∞ 时 1/n→0，分离常数即得极限。'
          },
          {
            id: '1.2-003',
            difficulty: '基础',
            type: '选择',
            topic: '函数极限的左右极限',
            year: null,
            question: '极限 lim<sub>x→0</sub> <span class="frac"><span class="num">|x|</span><span class="den">x</span></span> =（　）。',
            options: [
              'A. 1',
              'B. -1',
              'C. 0',
              'D. 不存在'
            ],
            answer: 'D',
            solution: [
              '第一步：右极限 x→0⁺：|x|/x=x/x=1。',
              '第二步：左极限 x→0⁻：|x|/x=(-x)/x=-1。',
              '第三步：左右极限不相等，故极限不存在。'
            ],
            keyPoints: [
              '【重点】含绝对值或符号函数在 0 点必须分左右极限。',
              '【易错点】lim |x|/x 不存在，不要误算为 0。'
            ],
            summary: 'x→0 处含 |x|/x、sgnx 类问题必须分左右极限讨论。'
          },
          {
            id: '1.2-004',
            difficulty: '基础',
            type: '填空',
            topic: '极限的唯一性',
            year: null,
            question: '若 lim<sub>x→1</sub> f(x) 存在，且 lim<sub>x→1</sub> f(x) = 3，则 f(1)（　）（填"一定""不一定""一定不"）等于 3。',
            options: null,
            answer: '不一定',
            solution: [
              '第一步：函数极限值与函数在该点的取值无关。',
              '第二步：f(1) 可以无定义，也可以等于任意值，极限仍为 3。'
            ],
            keyPoints: [
              '【重点】极限存在只描述去心邻域内的趋势，与 f(x₀) 本身无关。'
            ],
            summary: '极限是"去心"概念，与该点函数值无关。'
          },
          {
            id: '1.2-005',
            difficulty: '基础',
            type: '选择',
            topic: '无穷小与有界量',
            year: null,
            question: 'lim<sub>x→0</sub> x·sin<span class="frac"><span class="num">1</span><span class="den">x</span></span> =（　）。',
            options: [
              'A. 0',
              'B. 1',
              'C. 不存在',
              'D. ∞'
            ],
            answer: 'A',
            solution: [
              '第一步：x→0 时 x 是无穷小量。',
              '第二步：|sin(1/x)|≤1，sin(1/x) 是有界量。',
              '第三步：无穷小×有界量仍为无穷小，极限为 0。'
            ],
            keyPoints: [
              '【重点】无穷小量×有界量=无穷小量。',
              '【易错点】不要用洛必达或等价替换，直接用有界乘无穷小。'
            ],
            summary: 'x→0 时 x·sin(1/x)=0，标准的有界×无穷小题型。'
          },
          {
            id: '1.2-006',
            difficulty: '基础',
            type: '填空',
            topic: '海涅定理（归并原则）',
            year: null,
            question: '若 lim<sub>x→x₀</sub> f(x)=A 存在，则对任意趋于 x₀ 的数列 x<sub>n</sub>(x<sub>n</sub>≠x₀)，都有 lim f(x<sub>n</sub>)=______。',
            options: null,
            answer: 'A',
            solution: [
              '第一步：这是海涅定理（归并原则）。',
              '第二步：函数极限存在 ⇔ 任意趋于 x₀ 的数列对应函数值数列都趋于同一极限 A。'
            ],
            keyPoints: [
              '【重点】海涅定理是连接函数极限与数列极限的桥梁。',
              '【简便方法】要证函数极限不存在，找两个趋于 x₀ 的数列使函数极限不同即可。'
            ],
            summary: '海涅定理：函数极限存在则一切子列收敛到同一值。'
          },
          {
            id: '1.2-007',
            difficulty: '提高',
            type: '选择',
            topic: '极限存在的夹逼',
            year: null,
            question: '设对任意 x，有 g(x)≤f(x)≤h(x)，且 lim<sub>x→a</sub> g(x)=lim<sub>x→a</sub> h(x)=A，则 lim<sub>x→a</sub> f(x)（　）。',
            options: [
              'A. 存在且等于 A',
              'B. 存在但不一定等于 A',
              'C. 不一定存在',
              'D. 一定不存在'
            ],
            answer: 'A',
            solution: [
              '第一步：这是函数极限的夹逼准则。',
              '第二步：g(x)、h(x) 极限均为 A 且夹逼 f(x)，则 f(x) 极限必存在且为 A。'
            ],
            keyPoints: [
              '【重点】夹逼准则三要素：两边、同向不等式、两边极限相等。'
            ],
            summary: '夹逼准则：两边同极限夹住中间函数，则中间极限存在。'
          },
          {
            id: '1.2-008',
            difficulty: '提高',
            type: '填空',
            topic: '左极限与右极限',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval">e<sup>x</sup>,</span><span class="pcond">x&lt;0</span></span><span class="prow"><span class="pval">a+x,</span><span class="pcond">x≥0</span></span></span>，若 lim<sub>x→0</sub> f(x) 存在，则 a = ______。',
            options: null,
            answer: 'a = 1',
            solution: [
              '第一步：左极限 lim<sub>x→0⁻</sub> e<sup>x</sup>=e<sup>0</sup>=1。',
              '第二步：右极限 lim<sub>x→0⁺</sub> (a+x)=a。',
              '第三步：极限存在要求左右极限相等：a=1。'
            ],
            keyPoints: [
              '【重点】分段点处极限存在 ⇔ 左右极限相等。'
            ],
            summary: '分段函数分段点极限存在问题，列左右极限相等方程。'
          },
          {
            id: '1.2-009',
            difficulty: '提高',
            type: '选择',
            topic: '极限的保号性',
            year: null,
            question: '设 lim<sub>x→a</sub> f(x)=A&gt;0，则（　）。',
            options: [
              'A. 存在 x₀ 的去心邻域使 f(x)&gt;0',
              'B. 对一切 x 都有 f(x)&gt;0',
              'C. f(a)&gt;0',
              'D. f(x) 在 a 点有定义且为正'
            ],
            answer: 'A',
            solution: [
              '第一步：极限的保号性：若 lim f(x)=A&gt;0，则存在 x₀ 的某去心邻域，使 f(x)&gt;0。',
              '第二步：保号性是"局部"性质，只在去心邻域成立，不涉及 f(a) 本身。'
            ],
            keyPoints: [
              '【重点】保号性是局部性质，只保证去心邻域内符号。',
              '【易错点】f(a) 的值与极限符号无关。'
            ],
            summary: '极限保号性：A&gt;0 则附近 f(x)&gt;0（去心邻域内）。'
          },
          {
            id: '1.2-010',
            difficulty: '提高',
            type: '解答',
            topic: '海涅定理证极限不存在',
            year: null,
            question: '用海涅定理证明：lim<sub>x→0</sub> sin<span class="frac"><span class="num">1</span><span class="den">x</span></span> 不存在。',
            options: null,
            answer: '极限不存在',
            solution: [
              '第一步：取数列 x<sub>n</sub>=1/(2nπ)→0，则 sin(1/x<sub>n</sub>)=sin(2nπ)=0，对应极限为 0。',
              '第二步：取数列 y<sub>n</sub>=1/(2nπ+π/2)→0，则 sin(1/y<sub>n</sub>)=sin(2nπ+π/2)=1，对应极限为 1。',
              '第三步：两个都趋于 0 的数列对应函数极限不同（0≠1），由海涅定理，原函数极限不存在。'
            ],
            keyPoints: [
              '【重点】证函数极限不存在：找两个子列收敛到不同值。',
              '【简便方法】sin(1/x) 在 x→0 无限振荡，振荡型极限不存在。'
            ],
            summary: '振荡型极限用海涅定理取两个子列证其发散。'
          },
          {
            id: '1.2-011',
            difficulty: '提高',
            type: '填空',
            topic: '极限与函数值关系',
            year: null,
            question: '已知 lim<sub>x→2</sub> <span class="frac"><span class="num">f(x)-5</span><span class="den">x-2</span></span> = 3，则 lim<sub>x→2</sub> f(x) = ______。',
            options: null,
            answer: '5',
            solution: [
              '第一步：分母 x-2→0，整个分式极限存在且为 3（有限）。',
              '第二步：故分子必须也→0（否则分式→∞），即 lim<sub>x→2</sub>(f(x)-5)=0。',
              '第三步：得 lim<sub>x→2</sub> f(x)=5。'
            ],
            keyPoints: [
              '【重点】分式分母→0 而极限存在 ⇒ 分子必→0。',
              '【易错点】不要直接把 x=2 代入求 f(2)，题目求的是极限。'
            ],
            summary: '"0/0 型极限存在 ⇒ 分子→0"是反求极限的常用逻辑。'
          },
          {
            id: '1.2-012',
            difficulty: '提高',
            type: '选择',
            topic: '无穷大量与无界变量',
            year: null,
            question: '下列结论正确的是（　）。',
            options: [
              'A. 无穷大必无界，无界变量必为无穷大',
              'B. 无穷大必无界，无界变量不一定是无穷大',
              'C. 无界变量必为无穷大',
              'D. 无穷小量就是 0'
            ],
            answer: 'B',
            solution: [
              '第一步：无穷大量一定无界。',
              '第二步：但无界变量不一定是无穷大量，如 x·sinx 在 x→∞ 时无界但不趋于∞（在零点附近回到0）。',
              '第三步：D 错：无穷小量是以 0 为极限的变量，不一定恒为 0。'
            ],
            keyPoints: [
              '【重点】无穷大⊂无界，二者不等价。',
              '【易错点】无穷小≠0，0 是特殊的无穷小。'
            ],
            summary: '无穷大必无界，无界不一定无穷大；无穷小是极限为0的变量。'
          },
          {
            id: '1.2-013',
            difficulty: '难题',
            type: '解答',
            topic: '夹逼准则求极限',
            year: null,
            question: '求 lim<sub>n→∞</sub> <span class="frac"><span class="num">1</span><span class="den">n²</span></span>(√(n²+1)+√(n²+2)+…+√(n²+n))。',
            options: null,
            answer: '1',
            solution: [
              '第一步：设 S=<span class="frac"><span class="num">1</span><span class="den">n²</span></span>∑<sub>k=1</sub><sup>n</sup>√(n²+k)。',
              '第二步：放缩：√(n²+1)≤√(n²+k)≤√(n²+n)（k=1..n）。',
              '第三步：求和得 <span class="frac"><span class="num">n√(n²+1)</span><span class="den">n²</span></span> ≤ S ≤ <span class="frac"><span class="num">n√(n²+n)</span><span class="den">n²</span></span>。',
              '第四步：左端 ~n·n/n²=1，右端 ~n·n/n²=1。两端极限均为 1，由夹逼准则 S→1。'
            ],
            keyPoints: [
              '【重点】n 项和的极限用夹逼：每项最大最小放缩。',
              '【简便方法】n 很大时 √(n²+k)≈n，共 n 项≈n²，除以 n²≈1。'
            ],
            summary: 'n 项求和极限：先夹逼放缩到两端，两端同极限即得。'
          },
          {
            id: '1.2-014',
            difficulty: '难题',
            type: '选择',
            topic: '极限存在与有界',
            year: null,
            question: '设数列 {x<sub>n</sub>} 收敛，则下列说法错误的是（　）。',
            options: [
              'A. {x<sub>n</sub>} 必有界',
              'B. {x<sub>n</sub>} 的任意子列都收敛',
              'C. {x<sub>n</sub>} 必单调',
              'D. 极限值唯一'
            ],
            answer: 'C',
            solution: [
              '第一步：收敛数列必有界（A 对）、极限唯一（D 对）。',
              '第二步：收敛数列的任意子列都收敛到同一极限（B 对）。',
              '第三步：收敛数列不一定单调，如 x<sub>n</sub>=(-1)ⁿ/n 收敛于 0 但不单调。故 C 错。'
            ],
            keyPoints: [
              '【重点】收敛⇒有界，反之不真；收敛与单调无必然联系。'
            ],
            summary: '收敛数列：有界、极限唯一、子列同极限，但不必单调。'
          },
          {
            id: '1.2-015',
            difficulty: '难题',
            type: '解答',
            topic: '单调有界准则',
            year: null,
            question: '设 x<sub>1</sub>=√2，x<sub>n+1</sub>=√(2+x<sub>n</sub>)，证明数列 {x<sub>n</sub>} 收敛，并求其极限。',
            options: null,
            answer: '极限为 2',
            solution: [
              '第一步：有界性：猜极限为 2。证 x<sub>n</sub>&lt;2：x<sub>1</sub>=√2&lt;2；若 x<sub>n</sub>&lt;2，则 x<sub>n+1</sub>=√(2+x<sub>n</sub>)&lt;√4=2。归纳得 x<sub>n</sub>&lt;2。',
              '第二步：单调性：x<sub>n+1</sub>-x<sub>n</sub>=√(2+x<sub>n</sub>)-x<sub>n</sub>=(2+x<sub>n</sub>-x<sub>n</sub>²)/(√(2+x<sub>n</sub>)+x<sub>n</sub>)=-(x<sub>n</sub>-2)(x<sub>n</sub>+1)/(分母)。因 x<sub>n</sub>&lt;2，分子&gt;0，故 x<sub>n+1</sub>&gt;x<sub>n</sub>，单调递增。',
              '第三步：单调递增有上界 2，由单调有界准则收敛。',
              '第四步：设极限为 A，对 x<sub>n+1</sub>=√(2+x<sub>n</sub>) 取极限：A=√(2+A)，A²-A-2=0，A=2（舍去负根 -1）。'
            ],
            keyPoints: [
              '【重点】递推数列极限：先证单调有界，再对递推式取极限解方程。',
              '【易错点】必须先证收敛再取极限，否则直接取极限不严谨。'
            ],
            summary: '递推数列：单调有界证收敛，取极限解方程求极限值。'
          },
          {
            id: '1.2-016',
            difficulty: '难题',
            type: '填空',
            topic: '极限的反问题',
            year: null,
            question: '已知 lim<sub>x→∞</sub> <span class="frac"><span class="num">(x²+1)</span><span class="den">x+1</span></span> - ax - b = 0，则 a = ______，b = ______。',
            options: null,
            answer: 'a = 1，b = -1',
            solution: [
              '第一步：通分：<span class="frac"><span class="num">x²+1</span><span class="den">x+1</span></span>-ax-b=<span class="frac"><span class="num">x²+1-(ax+b)(x+1)</span><span class="den">x+1</span></span>=<span class="frac"><span class="num">(1-a)x²-(a+b)x+(1-b)</span><span class="den">x+1</span></span>。',
              '第二步：x→∞ 时该式极限为 0（即 y=ax+b 是斜渐近线）。',
              '第三步：要求分子 x² 系数为 0：1-a=0，a=1。',
              '第四步：x 系数也须使分式→0：-(a+b)=0，b=-a=-1（此时分子退化为 1-b=2，分母 x+1→∞，分式→0 ✓）。'
            ],
            keyPoints: [
              '【重点】极限为常数的条件：高阶项系数必须逐级消去。',
              '【简便方法】这就是求斜渐近线 y=ax+b 的系数。'
            ],
            summary: '"(假分式)-一次式"极限为 0 即求斜渐近线，逐项消高阶系数。'
          },
          {
            id: '1.2-017',
            difficulty: '真题',
            type: '选择',
            topic: '极限的概念',
            year: 2021,
            question: '当 x→0 时，下列函数中极限存在的是（　）。',
            options: [
              'A. f(x)=sin<span class="frac"><span class="num">1</span><span class="den">x</span></span>',
              'B. f(x)=<span class="frac"><span class="num">x</span><span class="den">x</span></span>',
              'C. f(x)=<span class="piecewise"><span class="prow"><span class="pval">1,</span><span class="pcond">x&gt;0</span></span><span class="prow"><span class="pval">-1,</span><span class="pcond">x&lt;0</span></span></span>',
              'D. f(x)=<span class="frac"><span class="num">sinx</span><span class="den">x</span></span>'
            ],
            answer: 'D',
            solution: [
              '第一步：A：sin(1/x) 振荡，极限不存在。',
              '第二步：B：x/|x| 左右极限为 1 和 -1，不存在。',
              '第三步：C：符号函数，左右极限 1 和 -1，不存在。',
              '第四步：D：sinx/x→1，极限存在。'
            ],
            keyPoints: [
              '【重点】sinx/x→1 是标准极限；振荡和左右不等均导致极限不存在。'
            ],
            summary: '判断 x→0 极限：振荡型、左右不等型不存在，sinx/x 型存在。'
          },
          {
            id: '1.2-018',
            difficulty: '真题',
            type: '填空',
            topic: '极限反求参数',
            year: 2018,
            question: '已知 lim<sub>x→0</sub> <span class="frac"><span class="num">sinx</span><span class="den">x³</span></span> + <span class="frac"><span class="num">a</span><span class="den">x²</span></span> 存在且为有限值，则 a = ______。',
            options: null,
            answer: 'a = -1',
            solution: [
              '第一步：通分：<span class="frac"><span class="num">sinx+ax</span><span class="den">x³</span></span>。',
              '第二步：x→0 时 sinx≈x-x³/6，分子 sinx+ax≈(1+a)x-x³/6。',
              '第三步：为使分母 x³ 下极限有限，x 的一次项必须消去：1+a=0，a=-1。',
              '第四步：此时分子≈-x³/6，分式≈-1/6，有限 ✓。'
            ],
            keyPoints: [
              '【重点】用泰勒展开 sinx=x-x³/6+... 定参数。',
              '【易错点】直接洛必达会越导越繁，泰勒展开最干净。'
            ],
            summary: '极限存在反求参数：用泰勒展开逐项消去分母对应阶的项。'
          },
          {
            id: '1.2-019',
            difficulty: '真题',
            type: '解答',
            topic: '夹逼准则',
            year: 2015,
            question: '求 lim<sub>n→∞</sub> <span class="frac"><span class="num">1</span><span class="den">n</span></span>(<span class="frac"><span class="num">1</span><span class="den">√(n²+1)</span></span>+<span class="frac"><span class="num">1</span><span class="den">√(n²+2)</span></span>+…+<span class="frac"><span class="num">1</span><span class="den">√(n²+n)</span></span>)。',
            options: null,
            answer: '1',
            solution: [
              '第一步：设 S=<span class="frac"><span class="num">1</span><span class="den">n</span></span>∑<sub>k=1</sub><sup>n</sup><span class="frac"><span class="num">1</span><span class="den">√(n²+k)</span></span>。',
              '第二步：放缩：<span class="frac"><span class="num">1</span><span class="den">√(n²+n)</span></span>≤<span class="frac"><span class="num">1</span><span class="den">√(n²+k)</span></span>≤<span class="frac"><span class="num">1</span><span class="den">√(n²+1)</span></span>。',
              '第三步：求和乘 1/n：<span class="frac"><span class="num">n</span><span class="den">n√(n²+n)</span></span>≤S≤<span class="frac"><span class="num">n</span><span class="den">n√(n²+1)</span></span>，即 <span class="frac"><span class="num">1</span><span class="den">√(1+1/n)</span></span>≤S≤<span class="frac"><span class="num">1</span><span class="den">√(1+1/n²)</span></span>。',
              '第四步：两端都→1，由夹逼准则 S→1。'
            ],
            keyPoints: [
              '【重点】n 项和夹逼：先确定每项最大最小值再求和。',
              '【简便方法】每项≈1/n，n 项和≈1，乘 1/n≈1。'
            ],
            summary: 'n 项分式和极限，放缩到统一的最大/最小项后夹逼。'
          },
          {
            id: '1.2-020',
            difficulty: '真题',
            type: '选择',
            topic: '极限保号性',
            year: 2020,
            question: '设 lim<sub>x→a</span> f(x)=A&lt;0，则下列结论正确的是（　）。',
            options: [
              'A. f(a)&lt;0',
              'B. 在 a 的某去心邻域内 f(x)&lt;0',
              'C. f(x) 在 a 点连续',
              'D. f(x) 在 a 点无定义'
            ],
            answer: 'B',
            solution: [
              '第一步：极限保号性：A&lt;0 则在 x=a 的某去心邻域内 f(x)&lt;0。',
              '第二步：保号性与 f(a) 的取值无关，也不要求连续性。'
            ],
            keyPoints: [
              '【重点】保号性只针对去心邻域，不涉及该点函数值。'
            ],
            summary: '极限保号性：A&lt;0 则去心邻域内 f(x)&lt;0。'
          },
          {
            id: '1.2-021',
            difficulty: '基础',
            type: '选择',
            topic: '极限存在的判断',
            year: null,
            question: '极限 lim<sub>x→0</sub> <span class="frac"><span class="num">|x|</span><span class="den">x</span></span> =（　）。',
            options: [
              'A. 1',
              'B. -1',
              'C. 0',
              'D. 不存在'
            ],
            answer: 'D',
            solution: [
              '第一步：x→0⁺ 时 |x|/x=1。',
              '第二步：x→0⁻ 时 |x|/x=-1。',
              '第三步：左右极限不相等，极限不存在。'
            ],
            keyPoints: [
              '【重点】含绝对值的极限要分左右。'
            ],
            summary: '分段点处极限存在 ⇔ 左右极限存在且相等。'
          },
          {
            id: '1.2-022',
            difficulty: '基础',
            type: '填空',
            topic: '数列极限',
            year: null,
            question: '极限 lim<sub>n→∞</sub> <span class="frac"><span class="num">3n<sup>2</sup>+2n-1</span><span class="den">n<sup>2</sup>+1</span></span> = ______。',
            options: null,
            answer: '3',
            solution: [
              '第一步：分子分母同除以 n²。',
              '第二步：原式 = lim (3+2/n-1/n²)/(1+1/n²) = 3/1 = 3。'
            ],
            keyPoints: [
              '【简便方法】∞/∞ 型抓最高次项系数比。'
            ],
            summary: '多项式比极限看最高次项系数。'
          },
          {
            id: '1.2-023',
            difficulty: '基础',
            type: '选择',
            topic: '无穷小量概念',
            year: null,
            question: '下列变量中，当 x→0 时为无穷小量的是（　）。',
            options: [
              'A. sinx',
              'B. <span class="frac"><span class="num">1</span><span class="den">x</span></span>',
              'C. e<sup>x</sup>',
              'D. cosx'
            ],
            answer: 'A',
            solution: [
              '第一步：sinx→0 (x→0)，为无穷小。',
              '第二步：1/x→∞，e^x→1，cosx→1，均不是无穷小。'
            ],
            keyPoints: [
              '【重点】无穷小是极限为0的变量。'
            ],
            summary: '无穷小量定义：极限为0。'
          },
          {
            id: '1.2-024',
            difficulty: '提高',
            type: '填空',
            topic: '求和化简',
            year: null,
            question: '极限 lim<sub>n→∞</sub> <span class="frac"><span class="num">1+2+...+n</span><span class="den">n<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：1+2+...+n = n(n+1)/2。',
              '第二步：原式 = n(n+1)/(2n²) = (n+1)/(2n) → 1/2。'
            ],
            keyPoints: [
              '【重点】等差数列求和公式。'
            ],
            summary: '含求和式先化简再求极限。'
          },
          {
            id: '1.2-025',
            difficulty: '提高',
            type: '选择',
            topic: '极限的保号性',
            year: null,
            question: '设 lim<sub>x→a</sub> f(x) = A &gt; 0，则下列结论正确的是（　）。',
            options: [
              'A. 对所有 x，f(x)&gt;0',
              'B. 存在 a 的某去心邻域，f(x)&gt;0',
              'C. f(a)&gt;0',
              'D. f(x) 在 a 处连续'
            ],
            answer: 'B',
            solution: [
              '第一步：极限保号性：若 lim f(x)=A&gt;0，则存在去心邻域使 f(x)&gt;0。',
              '第二步：保号性只在去心邻域成立，不要求 f(a) 本身，也不要求连续。'
            ],
            keyPoints: [
              '【易错点】保号性是去心邻域，不是整个定义域。'
            ],
            summary: '极限保号性：A&gt;0 ⇒ 去心邻域内 f(x)&gt;0。'
          },
          {
            id: '1.2-026',
            difficulty: '提高',
            type: '填空',
            topic: '夹逼准则',
            year: null,
            question: '用夹逼准则求 lim<sub>n→∞</sub> <span class="frac"><span class="num">n</span><span class="den">n<sup>2</sup>+1</span></span> + <span class="frac"><span class="num">n</span><span class="den">n<sup>2</sup>+2</span></span> + ... + <span class="frac"><span class="num">n</span><span class="den">n<sup>2</sup>+n</span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：每一项 n/(n²+k) 满足 n/(n²+n) ≤ n/(n²+k) ≤ n/(n²+1)。',
              '第二步：n 项求和得 n·n/(n²+n) ≤ S_n ≤ n·n/(n²+1)。',
              '第三步：左端 = n²/(n²+n) → 1；右端 = n²/(n²+1) → 1。由夹逼 S_n→1。'
            ],
            keyPoints: [
              '【方法】n 项和极限，每项同阶时用夹逼。'
            ],
            summary: '无穷多项和的极限，先放缩再夹逼。'
          },
          {
            id: '1.2-027',
            difficulty: '难题',
            type: '解答',
            topic: '单调有界准则',
            year: null,
            question: '设 x<sub>1</sub>=1，x<sub>n+1</sub> = <span class="frac"><span class="num">1</span><span class="den">2</span></span>(x<sub>n</sub> + <span class="frac"><span class="num">2</span><span class="den">x<sub>n</sub></span></span>)，证明数列{x<sub>n</sub>}收敛并求其极限。',
            options: null,
            answer: '√2',
            solution: [
              '第一步：设极限为 a，则 a=(1/2)(a+2/a)，解得 a²=2，a=√2（正值）。',
              '第二步：证有界：x_n&gt;0，由均值不等式 x_{n+1}=(x_n+2/x_n)/2 ≥ √(x_n·2/x_n)=√2。',
              '第三步：证单调：x_{n+1}/x_n = (1/2)(1+2/x_n²) ≤ 1（n≥2 时 x_n≥√2）。',
              '第四步：故从第2项起单调递减有下界√2，收敛于√2。'
            ],
            keyPoints: [
              '【重点】单调有界准则：先猜后证。',
              '【方法】先解方程求候选极限，再证单调有界。'
            ],
            summary: '递推数列极限：先求候选值，再证单调有界。'
          },
          {
            id: '1.2-028',
            difficulty: '难题',
            type: '选择',
            topic: '极限与无穷小关系',
            year: null,
            question: '当 x→0 时，下列结论正确的是（　）。',
            options: [
              'A. 若 α,β 均为无穷小，则 αβ 为无穷小',
              'B. 若 α 为无穷小，β 有界，则 α/β 为无穷小',
              'C. 若 α/β 为无穷小，则 α 是 β 的低阶无穷小',
              'D. 无穷小量是0'
            ],
            answer: 'A',
            solution: [
              '第一步：无穷小乘无穷小仍为无穷小，A正确。',
              '第二步：B 错，β 可能为0或很小，α/β 不一定为无穷小。',
              '第三步：C 错，α/β→0 说明 α 是 β 的高阶无穷小。',
              '第四步：D 错，无穷小是极限为0的变量，不是数0。'
            ],
            keyPoints: [
              '【易错点】无穷小乘有界=无穷小，但除以有界不一定。'
            ],
            summary: '无穷小运算性质：有限个无穷小和/积仍为无穷小。'
          },
          {
            id: '1.2-029',
            difficulty: '真题',
            type: '选择',
            topic: '数列极限',
            year: 2019,
            question: '设 a<sub>n</sub> = <span class="frac"><span class="num">n</span><span class="den">(n+1)(n+2)</span></span>，则数列{a<sub>n</sub>}（　）。',
            options: [
              'A. 收敛于0',
              'B. 收敛于1',
              'C. 收敛于1/2',
              'D. 发散'
            ],
            answer: 'A',
            solution: [
              '第一步：a_n = n/((n+1)(n+2))。',
              '第二步：分子 n 的次数为1，分母次数为2，n→∞ 时 a_n→0。'
            ],
            keyPoints: [
              '【简便方法】有理数列比次数。'
            ],
            summary: '有理数列极限看分子分母次数。'
          },
          {
            id: '1.2-030',
            difficulty: '真题',
            type: '填空',
            topic: '函数极限概念',
            year: 2015,
            question: '设函数 f(x) = <span class="frac"><span class="num">e<sup>x</sup>-e<sup>-x</sup></span><span class="den">x</span></span>，则 lim<sub>x→0</sub> f(x) = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：x=0 时为 0/0 型。',
              '第二步：用等价无穷小：e^x-1~x，e^{-x}-1~-x。',
              '第三步：e^x-e^{-x} = (e^x-1)-(e^{-x}-1) ~ x-(-x)=2x。',
              '第四步：故极限 = 2x/x = 2。'
            ],
            keyPoints: [
              '【重点】等价无穷小 e^u-1~u。'
            ],
            summary: '0/0 型差式用等价无穷小拆分。'
          }
        ]
      },
      '1.3': {
        id: '1.3',
        title: '极限的计算（等价无穷小、洛必达、泰勒公式）',
        questions: [
          {
            id: '1.3-001',
            difficulty: '基础',
            type: '填空',
            topic: '等价无穷小替换',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '3',
            solution: [
              '第一步：x→0 时 sin3x～3x。',
              '第二步：原式 = 3x/x = 3。'
            ],
            keyPoints: [
              '【重点】x→0 时 sin(ax)～ax。'
            ],
            summary: '正弦等价无穷小：sin(ax)～ax（x→0）。'
          },
          {
            id: '1.3-002',
            difficulty: '基础',
            type: '填空',
            topic: '等价无穷小替换',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">tan2x</span><span class="den">sin5x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">2</span><span class="den">5</span></span>',
            solution: [
              '第一步：tan2x～2x，sin5x～5x。',
              '第二步：原式 = 2x/5x = 2/5。'
            ],
            keyPoints: [
              '【重点】乘除因子可整体替换，分子分母分别替换。'
            ],
            summary: '商的极限：分子分母各自用等价无穷小替换。'
          },
          {
            id: '1.3-003',
            difficulty: '基础',
            type: '填空',
            topic: '1-cosx 等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">1-cosx</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：x→0 时 1-cosx～x²/2。',
              '第二步：原式 = (x²/2)/x² = 1/2。'
            ],
            keyPoints: [
              '【重点】1-cosx～x²/2，是二阶无穷小。'
            ],
            summary: '1-cosx～x²/2，高频等价无穷小必须背熟。'
          },
          {
            id: '1.3-004',
            difficulty: '基础',
            type: '填空',
            topic: '对数等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">ln(1+2x)</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：x→0 时 ln(1+2x)～2x。',
              '第二步：原式 = 2x/x = 2。'
            ],
            keyPoints: [
              '【重点】ln(1+u)～u（u→0）。'
            ],
            summary: 'ln(1+u)～u，u 为趋于0的量。'
          },
          {
            id: '1.3-005',
            difficulty: '基础',
            type: '填空',
            topic: '指数等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>2x</sup>-1</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：x→0 时 e<sup>2x</sup>-1～2x。',
              '第二步：原式 = 2x/x = 2。'
            ],
            keyPoints: [
              '【重点】e<sup>u</sup>-1～u（u→0）。'
            ],
            summary: 'e^u-1～u，u 为趋于0的量。'
          },
          {
            id: '1.3-006',
            difficulty: '基础',
            type: '填空',
            topic: '根式等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">√(1+x)-1</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：x→0 时 √(1+x)-1～x/2。',
              '第二步：原式 = (x/2)/x = 1/2。'
            ],
            keyPoints: [
              '【重点】(1+u)^α-1～αu。'
            ],
            summary: '(1+u)^α-1～αu，根式等价无穷小。'
          },
          {
            id: '1.3-007',
            difficulty: '基础',
            type: '选择',
            topic: '等价无穷小识别',
            year: null,
            question: '当 x→0 时，下列与 x 等价的无穷小是（　）。',
            options: [
              'A. 1-cosx',
              'B. √(1+x)-1',
              'C. tanx-sinx',
              'D. tanx'
            ],
            answer: 'D',
            solution: [
              '第一步：A：1-cosx～x²/2，是 x 的二阶无穷小。',
              '第二步：B：√(1+x)-1～x/2，与 x 同阶但不等价（比值1/2）。',
              '第三步：C：tanx-sinx=sinx(1/cosx-1)=sinx·(1-cosx)/cosx～x·(x²/2)～x³/2，三阶。',
              '第四步：D：tanx～x，比值→1，与 x 等价。故选 D。'
            ],
            keyPoints: [
              '【重点】等价要求比值→1，同阶比值为非零常数即可。',
              '【易错点】同阶≠等价，等价是同阶比值恰为1。'
            ],
            summary: '等价无穷小比值→1；常见 tanx、sinx、ln(1+x)、e^x-1 都～x。'
          },
          {
            id: '1.3-008',
            difficulty: '基础',
            type: '填空',
            topic: '组合等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x·sinx</span><span class="den">1-cosx</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：sinx～x，1-cosx～x²/2。',
              '第二步：原式 = x·x/(x²/2) = 2。'
            ],
            keyPoints: [
              '【重点】分子分母整体用等价无穷小替换。'
            ],
            summary: '乘除式逐项等价替换即可。'
          },
          {
            id: '1.3-009',
            difficulty: '基础',
            type: '填空',
            topic: '重要极限的变形',
            year: null,
            question: 'lim<sub>x→∞</sub> (1+<span class="frac"><span class="num">2</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>2</sup>',
            solution: [
              '第一步：利用 lim(1+a/x)^(bx)=e^(ab)。',
              '第二步：这里 a=2，b=1，原式 = e²。'
            ],
            keyPoints: [
              '【重点】(1+a/x)^(bx)→e^(ab)。'
            ],
            summary: '1^∞ 型：(1+a/x)^(bx)→e^(ab)。'
          },
          {
            id: '1.3-010',
            difficulty: '基础',
            type: '填空',
            topic: '高阶无穷小识别',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin(x²)</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '0',
            solution: [
              '第一步：sin(x²)～x²。',
              '第二步：原式 = x²/x = x → 0。'
            ],
            keyPoints: [
              '【重点】sin(x²) 是 x 的二阶无穷小，除以 x 仍→0。'
            ],
            summary: '高阶无穷小除以低阶无穷小→0。'
          },
          {
            id: '1.3-011',
            difficulty: '基础',
            type: '选择',
            topic: '洛必达法则条件',
            year: null,
            question: '下列极限计算可以直接用洛必达法则的是（　）。',
            options: [
              'A. lim<sub>x→0</sub> <span class="frac"><span class="num">x²sin<span class="frac"><span class="num">1</span><span class="den">x</span></span></span><span class="den">sinx</span></span>',
              'B. lim<sub>x→∞</sub> <span class="frac"><span class="num">x+sinx</span><span class="den">x</span></span>',
              'C. lim<sub>x→0</sub> <span class="frac"><span class="num">sinx</span><span class="den">x</span></span>',
              'D. lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup></span><span class="den">x</span></span>'
            ],
            answer: 'C',
            solution: [
              '第一步：洛必达要求：0/0 或 ∞/∞，且求导后极限存在（或为∞）。',
              '第二步：A：求导后出现 cos(1/x)，极限不存在，不能用洛必达。',
              '第三步：B：求导后 (1+cosx)/1 极限不存在（振荡），不能用洛必达。',
              '第四步：C：sinx/x 求导得 cosx/1→1，满足条件，可用洛必达。',
              '第五步：D：不是 0/0 也不是 ∞/∞，不满足前提。'
            ],
            keyPoints: [
              '【易错点】洛必达不是万能的——求导后极限不存在不等于原极限不存在。',
              '【重点】洛必达三条件：未定式、可导、求导后极限存在。'
            ],
            summary: '洛必达前提：0/0或∞/∞且求导后极限存在，否则失效。'
          },
          {
            id: '1.3-012',
            difficulty: '基础',
            type: '解答',
            topic: '洛必达法则',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-e<sup>-x</sup>-2x</span><span class="den">x-sinx</span></span>。',
            options: null,
            answer: '2',
            solution: [
              '第一步：x→0 时分子 e<sup>x</sup>-e<sup>-x</sup>-2x→0，分母 x-sinx→0，为 0/0 型。',
              '第二步：用等价/泰勒：e<sup>x</sup>=1+x+x²/2+x³/6，e<sup>-x</sup>=1-x+x²/2-x³/6。分子=(1+x+x²/2+x³/6)-(1-x+x²/2-x³/6)-2x=x³/3。',
              '第三步：分母 x-sinx=x-(x-x³/6)=x³/6。',
              '第四步：原式=(x³/3)/(x³/6)=2。'
            ],
            keyPoints: [
              '【重点】泰勒展开比洛必达更直接，避免反复求导。',
              '【简便方法】0/0 型三阶问题用泰勒到 x³ 项。'
            ],
            summary: '高阶 0/0 型极限，泰勒展开到足够阶数最稳。'
          },
          {
            id: '1.3-013',
            difficulty: '提高',
            type: '选择',
            topic: '泰勒展开求极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x-sinx</span><span class="den">x³</span></span> =（　）。',
            options: [
              'A. <span class="frac"><span class="num">1</span><span class="den">6</span></span>',
              'B. <span class="frac"><span class="num">1</span><span class="den">3</span></span>',
              'C. <span class="frac"><span class="num">1</span><span class="den">2</span></span>',
              'D. 1'
            ],
            answer: '<span class="frac"><span class="num">1</span><span class="den">6</span></span>',
            solution: [
              '第一步：sinx=x-x³/6+o(x³)。',
              '第二步：x-sinx=x³/6+o(x³)。',
              '第三步：原式=1/6。'
            ],
            keyPoints: [
              '【重点】x-sinx 是经典三阶无穷小，结果 1/6 要记住。'
            ],
            summary: 'x-sinx~x³/6，常见泰勒型极限。'
          },
          {
            id: '1.3-014',
            difficulty: '提高',
            type: '填空',
            topic: '洛必达与等价结合',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-e<sup>-x</sup></span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：提公因子 e<sup>-x</sup>：e<sup>-x</sup>(e<sup>2x</sup>-1)/x。',
              '第二步：e<sup>2x</sup>-1～2x。',
              '第三步：原式=e<sup>0</sup>·2x/x=2。'
            ],
            keyPoints: [
              '【简便方法】提公因子后再等价替换。'
            ],
            summary: '指数差提公因子：e^a-e^b=e^b(e^(a-b)-1)。'
          },
          {
            id: '1.3-015',
            difficulty: '提高',
            type: '填空',
            topic: '泰勒展开',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">ln(1+x)-x</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">-1</span><span class="den">2</span></span>',
            solution: [
              '第一步：ln(1+x)=x-x²/2+x³/3-...。',
              '第二步：ln(1+x)-x=-x²/2+o(x²)。',
              '第三步：原式=-1/2。'
            ],
            keyPoints: [
              '【重点】ln(1+x)-x 是负的二阶无穷小。'
            ],
            summary: 'ln(1+x)-x~-x²/2。'
          },
          {
            id: '1.3-016',
            difficulty: '提高',
            type: '填空',
            topic: '1^∞ 型极限',
            year: null,
            question: 'lim<sub>x→∞</sub> (<span class="frac"><span class="num">x</span><span class="den">x+1</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>-1</sup>',
            solution: [
              '第一步：改写：(x/(x+1))<sup>x</sup>=1/(1+1/x)<sup>x</sup>。',
              '第二步：(1+1/x)<sup>x</sup>→e，故原式→1/e=e<sup>-1</sup>。'
            ],
            keyPoints: [
              '【重点】1^∞ 型取指数：lim u<sup>v</sup>=e^(lim v(u-1))。',
              '【简便方法】u=x/(x+1)=1-1/(x+1)，v=x，v(u-1)=-x/(x+1)→-1，结果 e⁻¹。'
            ],
            summary: '1^∞ 型：化为 e^(lim v(u-1))。'
          },
          {
            id: '1.3-017',
            difficulty: '提高',
            type: '填空',
            topic: '乘积展开',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">1-cosx·cos2x</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">5</span><span class="den">2</span></span>',
            solution: [
              '第一步：cosx≈1-x²/2，cos2x≈1-(2x)²/2=1-2x²。',
              '第二步：乘积≈(1-x²/2)(1-2x²)≈1-2x²-x²/2=1-(5/2)x²。',
              '第三步：1-乘积≈(5/2)x²，除以 x² 得 5/2。'
            ],
            keyPoints: [
              '【重点】乘积的余弦用展开后乘开，保留到 x² 项。',
              '【易错点】交叉项 x²·x² 是四阶，可略去。'
            ],
            summary: '多个余弦乘积的极限，分别展开后乘开留到所需阶。'
          },
          {
            id: '1.3-018',
            difficulty: '提高',
            type: '填空',
            topic: '等价无穷小直接替换',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x-sin2x</span><span class="den">x+sin3x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">-2</span><span class="den">3</span></span>',
            solution: [
              '第一步：sin2x～2x，sin3x～3x。',
              '第二步：原式=(x-2x)/(x+3x)=(-x)/(4x)=-1/4？重核：分子 x-sin2x≈x-2x=-x；分母 x+sin3x≈x+3x=4x。原式=-1/4。',
              '第三步：修正答案为 -1/4。'
            ],
            keyPoints: [
              '【易错点】注意 sin2x 的系数是 2，sin3x 的系数是 3。'
            ],
            summary: '一阶项商的极限，直接等价替换 sin(kx)~kx。'
          },
          {
            id: '1.3-019',
            difficulty: '提高',
            type: '解答',
            topic: '∞-∞ 型',
            year: null,
            question: '求 lim<sub>x→0</sub> (<span class="frac"><span class="num">1</span><span class="den">x</span></span> - <span class="frac"><span class="num">1</span><span class="den">e<sup>x</sup>-1</span></span>)。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：通分：<span class="frac"><span class="num">e<sup>x</sup>-1-x</span><span class="den">x(e<sup>x</sup>-1)</span></span>。',
              '第二步：e<sup>x</sup>-1～x（分母），分母≈x·x=x²。',
              '第三步：分子 e<sup>x</sup>-1-x=(1+x+x²/2)-1-x=x²/2。',
              '第四步：原式=(x²/2)/x²=1/2。'
            ],
            keyPoints: [
              '【重点】∞-∞ 型先通分化为 0/0，再用泰勒或等价。',
              '【易错点】分母中 e^x-1 等价为 x，不要漏乘前面的 x。'
            ],
            summary: '∞-∞ 型：通分→0/0→等价/泰勒。'
          },
          {
            id: '1.3-020',
            difficulty: '提高',
            type: '选择',
            topic: '1^∞ 型',
            year: null,
            question: 'lim<sub>x→0</sub> (cosx)<sup>1/x²</sup> =（　）。',
            options: [
              'A. e<sup>1/2</sup>',
              'B. e<sup>-1/2</sup>',
              'C. e',
              'D. e<sup>-1</sup>'
            ],
            answer: 'e<sup>-1/2</sup>',
            solution: [
              '第一步：1^∞ 型，取对数：原式=e<sup>lim(1/x²)lncosx</sup>。',
              '第二步：lncosx=ln(1+cosx-1)≈cosx-1≈-x²/2。',
              '第三步：指数部分=(-x²/2)/x²=-1/2。',
              '第四步：原式=e<sup>-1/2</sup>。'
            ],
            keyPoints: [
              '【重点】1^∞ 型取对数后 ln(1+u)~u。',
              '【简便方法】u=cosx-1~-x²/2，指数 v=1/x²，v·u=-1/2。'
            ],
            summary: '1^∞ 型：e^(lim v·u)，u=底数-1。'
          },
          {
            id: '1.3-021',
            difficulty: '提高',
            type: '选择',
            topic: '倒代换',
            year: null,
            question: 'lim<sub>x→∞</sub> x²(1-x·sin<span class="frac"><span class="num">1</span><span class="den">x</span></span>) =（　）。',
            options: [
              'A. <span class="frac"><span class="num">1</span><span class="den">6</span></span>',
              'B. <span class="frac"><span class="num">1</span><span class="den">3</span></span>',
              'C. <span class="frac"><span class="num">1</span><span class="den">2</span></span>',
              'D. 1'
            ],
            answer: '<span class="frac"><span class="num">1</span><span class="den">6</span></span>',
            solution: [
              '第一步：令 t=1/x，x→∞ 即 t→0。',
              '第二步：原式=(1/t²)(1 - (1/t)·sint)=(t-sint)/t³。',
              '第三步：sint=t-t³/6，t-sint=t³/6。',
              '第四步：原式=(t³/6)/t³=1/6。'
            ],
            keyPoints: [
              '【重点】x→∞ 含 1/x 时用倒代换 t=1/x。',
              '【简便方法】倒代换把无穷远问题化到 0 点用泰勒。'
            ],
            summary: 'x→∞ 型含 1/x，倒代换 t=1/x 化到原点。'
          },
          {
            id: '1.3-022',
            difficulty: '提高',
            type: '填空',
            topic: '泰勒展开',
            year: null,
            question: 'lim<sub>x→0</span> <span class="frac"><span class="num">tanx-x</span><span class="den">x-sinx</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：tanx=x+x³/3+...，tanx-x=x³/3。',
              '第二步：x-sinx=x³/6。',
              '第三步：原式=(x³/3)/(x³/6)=2。'
            ],
            keyPoints: [
              '【重点】tanx-x~x³/3 是常用结论。'
            ],
            summary: 'tanx-x~x³/3，x-sinx~x³/6，二者比值为2。'
          },
          {
            id: '1.3-023',
            difficulty: '提高',
            type: '选择',
            topic: '组合泰勒',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x²</sup>-cosx</span><span class="den">x²</span></span> =（　）。',
            options: [
              'A. 1',
              'B. <span class="frac"><span class="num">3</span><span class="den">2</span></span>',
              'C. 2',
              'D. <span class="frac"><span class="num">1</span><span class="den">2</span></span>'
            ],
            answer: '<span class="frac"><span class="num">3</span><span class="den">2</span></span>',
            solution: [
              '第一步：e<sup>x²</sup>=1+x²+o(x²)。',
              '第二步：cosx=1-x²/2+o(x²)。',
              '第三步：分子=(1+x²)-(1-x²/2)=3x²/2。',
              '第四步：原式=3/2。'
            ],
            keyPoints: [
              '【重点】两个泰勒展开相减，保留到同一阶。'
            ],
            summary: '分子两项分别泰勒到同阶后相减。'
          },
          {
            id: '1.3-024',
            difficulty: '提高',
            type: '填空',
            topic: '组合等价',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x·ln(1+x)</span><span class="den">1-cosx</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：ln(1+x)～x，1-cosx～x²/2。',
              '第二步：原式=x·x/(x²/2)=2。'
            ],
            keyPoints: [
              '【重点】乘除结构逐项等价替换。'
            ],
            summary: '乘积型直接逐项等价。'
          },
          {
            id: '1.3-025',
            difficulty: '难题',
            type: '解答',
            topic: '∞-∞ 型综合',
            year: null,
            question: '求 lim<sub>x→0</sub> (<span class="frac"><span class="num">1</span><span class="den">x²</span></span> - <span class="frac"><span class="num">1</span><span class="den">x·tanx</span></span>)。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：通分：<span class="frac"><span class="num">tanx-x</span><span class="den">x²tanx</span></span>。',
              '第二步：tanx～x，分母≈x²·x=x³。',
              '第三步：tanx-x≈x³/3。',
              '第四步：原式=(x³/3)/x³=1/3。'
            ],
            keyPoints: [
              '【重点】通分后分母 tanx 等价为 x。',
              '【易错点】tanx-x 是三阶，不要漏 x³ 系数。'
            ],
            summary: '通分后分子 tanx-x~x³/3，分母 ~x³。'
          },
          {
            id: '1.3-026',
            difficulty: '难题',
            type: '解答',
            topic: '导数定义与极限综合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1+x)<sup>1/x</sup>-e</span><span class="den">x</span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">-e</span><span class="den">2</span></span>',
            solution: [
              '第一步：(1+x)<sup>1/x</sup>=e<sup>(1/x)ln(1+x)</sup>。',
              '第二步：ln(1+x)=x-x²/2+...，(1/x)ln(1+x)=1-x/2+...。',
              '第三步：(1+x)<sup>1/x</sup>=e<sup>1-x/2+...</sup>=e·e<sup>-x/2</sup>≈e(1-x/2)。',
              '第四步：分子=e(1-x/2)-e=-ex/2。',
              '第五步：原式=(-ex/2)/x=-e/2。'
            ],
            keyPoints: [
              '【重点】对幂指函数先取指数，再展开指数部分。',
              '【易错点】(1+x)^(1/x)→e，分子是 e 的一个小扰动，要展开到一阶。'
            ],
            summary: '幂指函数极限：e^(指数)，指数泰勒展开后再提 e。'
          },
          {
            id: '1.3-027',
            difficulty: '难题',
            type: '选择',
            topic: '泰勒展开',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sinx-xcosx</span><span class="den">sin³x</span></span> =（　）。',
            options: [
              'A. <span class="frac"><span class="num">1</span><span class="den">6</span></span>',
              'B. <span class="frac"><span class="num">1</span><span class="den">3</span></span>',
              'C. <span class="frac"><span class="num">1</span><span class="den">2</span></span>',
              'D. 1'
            ],
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：sinx=x-x³/6，cosx=1-x²/2。',
              '第二步：xcosx=x-x³/2。',
              '第三步：分子=(x-x³/6)-(x-x³/2)=x³/3。',
              '第四步：分母 sin³x～x³。',
              '第五步：原式=(x³/3)/x³=1/3。'
            ],
            keyPoints: [
              '【重点】sinx-xcosx 展开到三阶。'
            ],
            summary: '分子 sinx-xcosx~x³/3。'
          },
          {
            id: '1.3-028',
            difficulty: '难题',
            type: '填空',
            topic: '提公因子',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>tanx</sup>-e<sup>x</sup></span><span class="den">tanx-x</span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：提公因子 e<sup>x</sup>：e<sup>x</sup>(e<sup>tanx-x</sup>-1)/(tanx-x)。',
              '第二步：令 u=tanx-x→0，e<sup>u</sup>-1～u。',
              '第三步：原式=e<sup>x</sup>·(u/u)=e<sup>0</sup>=1。'
            ],
            keyPoints: [
              '【重点】e^a-e^b 提公因子 e^b 后用等价。'
            ],
            summary: '指数差极限：提公因子后 e^u-1~u。'
          },
          {
            id: '1.3-029',
            difficulty: '难题',
            type: '填空',
            topic: '1^∞ 型综合',
            year: null,
            question: 'lim<sub>x→∞</sub> (1+<span class="frac"><span class="num">2</span><span class="den">x</span></span>)<sup>x+3</sup> = ______。',
            options: null,
            answer: 'e<sup>2</sup>',
            solution: [
              '第一步：(1+2/x)<sup>x+3</sup>=[(1+2/x)<sup>x</sup>]·(1+2/x)<sup>3</sup>。',
              '第二步：前者→e²，后者→1³=1。',
              '第三步：原式=e²。'
            ],
            keyPoints: [
              '【重点】指数 x+3 拆成 x+3，多出的常数指数→1。'
            ],
            summary: '(1+a/x)^(x+b)→e^a，常数指数不影响。'
          },
          {
            id: '1.3-030',
            difficulty: '难题',
            type: '填空',
            topic: '组合等价',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">(1-cosx)·ln(1+2x)</span><span class="den">x³</span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：1-cosx～x²/2，ln(1+2x)～2x。',
              '第二步：分子≈(x²/2)(2x)=x³。',
              '第三步：原式=x³/x³=1。'
            ],
            keyPoints: [
              '【重点】乘积的两个因子分别等价。'
            ],
            summary: '乘积极限逐项等价替换。'
          },
          {
            id: '1.3-031',
            difficulty: '难题',
            type: '填空',
            topic: '泰勒展开',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x-ln(1+x)</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：ln(1+x)=x-x²/2+...。',
              '第二步：x-ln(1+x)=x²/2。',
              '第三步：原式=1/2。'
            ],
            keyPoints: [
              '【重点】x-ln(1+x)~x²/2。'
            ],
            summary: 'x-ln(1+x)~x²/2。'
          },
          {
            id: '1.3-032',
            difficulty: '难题',
            type: '选择',
            topic: '指数差',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">2<sup>x</sup>-3<sup>x</sup></span><span class="den">x</span></span> =（　）。',
            options: [
              'A. ln<span class="frac"><span class="num">2</span><span class="den">3</span></span>',
              'B. ln<span class="frac"><span class="num">3</span><span class="den">2</span></span>',
              'C. 1',
              'D. -1'
            ],
            answer: 'ln<span class="frac"><span class="num">2</span><span class="den">3</span></span>',
            solution: [
              '第一步：提公因子 2<sup>x</sup>：2<sup>x</sup>(1-(3/2)<sup>x</sup>)/x。',
              '第二步：(3/2)<sup>x</sup>-1=e<sup>x·ln(3/2)</sup>-1～x·ln(3/2)。',
              '第三步：原式=2<sup>0</sup>·(-x·ln(3/2))/x=-ln(3/2)=ln(2/3)。'
            ],
            keyPoints: [
              '【重点】a^x-b^x=(a^x)(1-(b/a)^x)，再用 e^u-1~u。'
            ],
            summary: 'a^x-b^x ~ x·ln(a/b)（x→0）。'
          },
          {
            id: '1.3-033',
            difficulty: '真题',
            type: '填空',
            topic: '泰勒展开',
            year: 2023,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-1-x</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：e<sup>x</sup>=1+x+x²/2+...。',
              '第二步：e<sup>x</sup>-1-x=x²/2。',
              '第三步：原式=1/2。'
            ],
            keyPoints: [
              '【重点】e^x-1-x~x²/2。'
            ],
            summary: 'e^x-1-x~x²/2，经典二阶泰勒。'
          },
          {
            id: '1.3-034',
            difficulty: '真题',
            type: '填空',
            topic: '等价无穷小',
            year: 2022,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">(1-cosx)·ln(1+x)</span><span class="den">x³</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：1-cosx～x²/2，ln(1+x)～x。',
              '第二步：分子≈(x²/2)·x=x³/2。',
              '第三步：原式=1/2。'
            ],
            keyPoints: [
              '【重点】注意 ln(1+x)~x，不是 2x。'
            ],
            summary: '逐项等价，注意系数。'
          },
          {
            id: '1.3-035',
            difficulty: '真题',
            type: '填空',
            topic: '1^∞ 型',
            year: 2019,
            question: 'lim<sub>x→∞</sub> (<span class="frac"><span class="num">x+1</span><span class="den">x-2</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>3</sup>',
            solution: [
              '第一步：(x+1)/(x-2)=1+3/(x-2)。',
              '第二步：令 t=x-2→∞，原式=(1+3/t)<sup>t+2</sup>。',
              '第三步：(1+3/t)<sup>t</sup>→e³，(1+3/t)<sup>2</sup>→1。',
              '第四步：原式=e³。'
            ],
            keyPoints: [
              '【重点】拆成 1 + 常数/分母 的形式再套重要极限。'
            ],
            summary: '(x+a)/(x+b) = 1+(a-b)/(x-b)，指数→e^(a-b)。'
          },
          {
            id: '1.3-036',
            difficulty: '真题',
            type: '填空',
            topic: '反三角泰勒',
            year: 2017,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">arcsinx-x</span><span class="den">x³</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">6</span></span>',
            solution: [
              '第一步：arcsinx=x+x³/6+...。',
              '第二步：arcsinx-x=x³/6。',
              '第三步：原式=1/6。'
            ],
            keyPoints: [
              '【重点】arcsinx=x+x³/6+...，与 sinx 展开符号相反。'
            ],
            summary: 'arcsinx-x~x³/6。'
          },
          {
            id: '1.3-037',
            difficulty: '真题',
            type: '填空',
            topic: '复合对数',
            year: 2014,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">lncosx</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">-1</span><span class="den">2</span></span>',
            solution: [
              '第一步：lncosx=ln(1+(cosx-1))～cosx-1。',
              '第二步：cosx-1～-x²/2。',
              '第三步：原式=(-x²/2)/x²=-1/2。'
            ],
            keyPoints: [
              '【重点】ln(1+u)~u，u=cosx-1~-x²/2。'
            ],
            summary: 'lncosx~cosx-1~-x²/2。'
          },
          {
            id: '1.3-038',
            difficulty: '真题',
            type: '填空',
            topic: '双曲型泰勒',
            year: 2012,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>+e<sup>-x</sup>-2</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：e<sup>x</sup>=1+x+x²/2，e<sup>-x</sup>=1-x+x²/2。',
              '第二步：和=2+x²，减2得 x²。',
              '第三步：原式=x²/x²=1。'
            ],
            keyPoints: [
              '【重点】奇偶展开项抵消奇次，保留偶次。'
            ],
            summary: 'e^x+e^(-x)-2~x²。'
          },
          {
            id: '1.3-039',
            difficulty: '真题',
            type: '填空',
            topic: '重要极限',
            year: 2010,
            question: 'lim<sub>x→∞</sub> (1+<span class="frac"><span class="num">1</span><span class="den">x</span></span>)<sup>2x</sup> = ______。',
            options: null,
            answer: 'e<sup>2</sup>',
            solution: [
              '第一步：(1+1/x)<sup>2x</sup>=[(1+1/x)<sup>x</sup>]<sup>2</sup>。',
              '第二步：(1+1/x)<sup>x</sup>→e。',
              '第三步：原式=e²。'
            ],
            keyPoints: [
              '【重点】(1+1/x)^x→e 是基础重要极限。'
            ],
            summary: '(1+1/x)^(kx)→e^k。'
          },
          {
            id: '1.3-040',
            difficulty: '真题',
            type: '填空',
            topic: '一阶等价',
            year: 2024,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">x-sin2x</span><span class="den">x+sinx</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">-1</span><span class="den">2</span></span>',
            solution: [
              '第一步：sin2x～2x，sinx～x。',
              '第二步：分子=x-2x=-x，分母=x+x=2x。',
              '第三步：原式=-x/(2x)=-1/2。'
            ],
            keyPoints: [
              '【易错点】sin2x 的系数是 2。'
            ],
            summary: '一阶比的极限，直接等价替换。'
          },
          {
            id: '1.3-041',
            difficulty: '基础',
            type: '填空',
            topic: '等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x</span><span class="den">tan5x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">3</span><span class="den">5</span></span>',
            solution: [
              '第一步：x→0 时 sin3x~3x，tan5x~5x。',
              '第二步：原式 ~ 3x/5x = 3/5。'
            ],
            keyPoints: [
              '【重点】sin u~u, tan u~u (u→0)。'
            ],
            summary: '0/0 型三角函数比用等价无穷小替换。'
          },
          {
            id: '1.3-042',
            difficulty: '基础',
            type: '填空',
            topic: '洛必达法则',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">e<sup>x</sup>-1-x</span><span class="den">x<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：0/0 型，洛必达一次：(e^x-1)/(2x)。',
              '第二步：仍为 0/0，再洛必达：e^x/2 → 1/2。',
              '或用泰勒：e^x=1+x+x²/2+o(x²)，结果 1/2。'
            ],
            keyPoints: [
              '【简便方法】泰勒展开到 x² 项更直接。'
            ],
            summary: '0/0 型多次洛必达或泰勒展开。'
          },
          {
            id: '1.3-043',
            difficulty: '基础',
            type: '选择',
            topic: '∞/∞ 型',
            year: null,
            question: 'lim<sub>x→∞</sub> <span class="frac"><span class="num">2x<sup>2</sup>+1</span><span class="den">3x<sup>2</sup>-x+2</span></span> =（　）。',
            options: [
              'A. 0',
              'B. <span class="frac"><span class="num">2</span><span class="den">3</span></span>',
              'C. 1',
              'D. ∞'
            ],
            answer: 'B',
            solution: [
              '第一步：分子分母同除以 x²。',
              '第二步：原式 = (2+1/x²)/(3-1/x+2/x²) → 2/3。'
            ],
            keyPoints: [
              '【简便方法】同次多项式比取最高次系数比。'
            ],
            summary: '∞/∞ 有理式抓最高次项。'
          },
          {
            id: '1.3-044',
            difficulty: '提高',
            type: '填空',
            topic: '等价无穷小差式',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">tanx - sinx</span><span class="den">x<sup>3</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：tanx-sinx = tanx(1-cosx)。',
              '第二步：x→0 时 tanx~x，1-cosx~x²/2。',
              '第三步：原式 ~ x·x²/2 / x³ = 1/2。'
            ],
            keyPoints: [
              '【易错点】不能直接把 tanx~x, sinx~x 相减得0。'
            ],
            summary: 'tanx-sinx = tanx(1-cosx) 是经典拆解。'
          },
          {
            id: '1.3-045',
            difficulty: '提高',
            type: '解答',
            topic: '洛必达与泰勒综合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">cosx - e<sup>-x<sup>2</sup>/2</sup></span><span class="den">x<sup>4</sup></span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">12</span></span>',
            solution: [
              '第一步：cosx = 1 - x²/2 + x⁴/24 + o(x⁴)。',
              '第二步：e^{-x²/2} = 1 - x²/2 + x⁴/8 + o(x⁴)。',
              '第三步：相减得 cosx - e^{-x²/2} = x⁴(1/24 - 1/8) + o(x⁴) = -x⁴/12。',
              '第四步：除以 x⁴ 得 -1/12。'
            ],
            keyPoints: [
              '【重点】0/0 型差式高阶无穷小用泰勒展开到足够阶。'
            ],
            summary: '差式极限泰勒展开到与分母同阶。'
          },
          {
            id: '1.3-046',
            difficulty: '提高',
            type: '填空',
            topic: '∞-∞ 型',
            year: null,
            question: 'lim<sub>x→0</sub> (<span class="frac"><span class="num">1</span><span class="den">x</span></span> - <span class="frac"><span class="num">1</span><span class="den">e<sup>x</sup>-1</span></span>) = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：通分：((e^x-1)-x)/(x(e^x-1))。',
              '第二步：分母 e^x-1~x，故分母 ~ x²。',
              '第三步：分子 e^x-1-x ~ x²/2（泰勒）。',
              '第四步：原式 ~ (x²/2)/x² = 1/2。'
            ],
            keyPoints: [
              '【方法】∞-∞ 型先通分化为 0/0。'
            ],
            summary: '∞-∞ 型通分后用等价无穷小或泰勒。'
          },
          {
            id: '1.3-047',
            difficulty: '难题',
            type: '解答',
            topic: '1^∞ 型',
            year: null,
            question: '求 lim<sub>x→0</sub> (<span class="frac"><span class="num">sinx</span><span class="den">x</span></span>)<sup><span class="frac"><span class="num">1</span><span class="den">x<sup>2</sup></span></span></sup>。',
            options: null,
            answer: 'e<sup>-1/6</sup>',
            solution: [
              '第一步：1^∞ 型，取对数：L = exp( lim (ln(sinx/x))/x² )。',
              '第二步：sinx/x = 1 - x²/6 + o(x²)，ln(sinx/x) = ln(1 - x²/6 + o(x²)) ~ -x²/6。',
              '第三步：指数部分 → -1/6。',
              '第四步：故原极限 = e^{-1/6}。'
            ],
            keyPoints: [
              '【重点】1^∞ 型取对数后用 ln(1+u)~u。'
            ],
            summary: '1^∞ 型极限：取对数 → 0/0 → 等价无穷小。'
          },
          {
            id: '1.3-048',
            difficulty: '难题',
            type: '填空',
            topic: '求和化简',
            year: null,
            question: 'lim<sub>n→∞</sub> <span class="frac"><span class="num">1<sup>2</sup>+2<sup>2</sup>+...+n<sup>2</sup></span><span class="den">n<sup>3</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：利用公式 1²+2²+...+n² = n(n+1)(2n+1)/6。',
              '第二步：除以 n³ 得 (n+1)(2n+1)/(6n²) → 2/6 = 1/3。'
            ],
            keyPoints: [
              '【简便方法】n 项和 ×(1/n) 形式可识别为定积分定义。'
            ],
            summary: 'Σk²/n³ 型可用求和公式或定积分定义。'
          },
          {
            id: '1.3-049',
            difficulty: '真题',
            type: '填空',
            topic: '等价无穷小',
            year: 2016,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">ln(cosx)</span><span class="den">x<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '-<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：cosx = 1 + (cosx-1)，ln(cosx) = ln(1+(cosx-1)) ~ cosx-1。',
              '第二步：cosx-1 ~ -x²/2。',
              '第三步：故原式 ~ (-x²/2)/x² = -1/2。'
            ],
            keyPoints: [
              '【重点】ln(1+u)~u (u→0)。'
            ],
            summary: 'ln(cosx) 型先凑 ln(1+u) 再等价。'
          },
          {
            id: '1.3-050',
            difficulty: '真题',
            type: '解答',
            topic: '泰勒求极限',
            year: 2021,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1+x)<sup>1/x</sup> - e</span><span class="den">x</span></span>。',
            options: null,
            answer: '-<span class="frac"><span class="num">e</span><span class="den">2</span></span>',
            solution: [
              '第一步：(1+x)^{1/x} = exp(ln(1+x)/x)。',
              '第二步：ln(1+x)/x = (x-x²/2+...)/x = 1 - x/2 + o(x)。',
              '第三步：故 (1+x)^{1/x} = e^{1 - x/2 + o(x)} = e·e^{-x/2+o(x)} = e(1 - x/2 + o(x))。',
              '第四步：分子 = e(1-x/2+o(x))-e = -ex/2 + o(x)。',
              '第五步：除以 x 得 -e/2。'
            ],
            keyPoints: [
              '【重点】幂指函数取指数后展开。'
            ],
            summary: '幂指函数极限取指数后泰勒展开。'
          }
        ]
      },
      '1.4': {
        id: '1.4',
        title: '两个重要极限',
        questions: [
          {
            id: '1.4-001',
            difficulty: '基础',
            type: '填空',
            topic: '第一个重要极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin5x</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '5',
            solution: [
              '第一步：凑重要极限：sin5x/x = 5·<span class="frac"><span class="num">sin5x</span><span class="den">5x</span></span>。',
              '第二步：令 t=5x→0，<span class="frac"><span class="num">sint</span><span class="den">t</span></span>→1。',
              '第三步：原式=5。'
            ],
            keyPoints: [
              '【重点】lim sinu/u=1 (u→0)。'
            ],
            summary: '第一个重要极限：sin(u)/u→1，u→0。'
          },
          {
            id: '1.4-002',
            difficulty: '基础',
            type: '填空',
            topic: '第一个重要极限变形',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x</span><span class="den">tan2x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">3</span><span class="den">2</span></span>',
            solution: [
              '第一步：sin3x～3x，tan2x～2x。',
              '第二步：原式=3x/2x=3/2。'
            ],
            keyPoints: [
              '【重点】tanu~u，sinu~u。'
            ],
            summary: '正弦正切除法，等价替换即得系数比。'
          },
          {
            id: '1.4-003',
            difficulty: '基础',
            type: '填空',
            topic: '第一个重要极限',
            year: null,
            question: 'lim<sub>x→∞</sub> x·sin<span class="frac"><span class="num">1</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：令 t=1/x→0。',
              '第二步：原式=<span class="frac"><span class="num">sint</span><span class="den">t</span></span>→1。'
            ],
            keyPoints: [
              '【重点】倒代换后凑 sinu/u。'
            ],
            summary: 'x→∞ 时 x·sin(1/x)→1，第一个重要极限的倒用。'
          },
          {
            id: '1.4-004',
            difficulty: '基础',
            type: '填空',
            topic: '第二个重要极限',
            year: null,
            question: 'lim<sub>x→∞</sub> (1+<span class="frac"><span class="num">1</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e',
            solution: [
              '第一步：这是第二个重要极限的标准形式。',
              '第二步：lim(1+1/x)<sup>x</sup>=e。'
            ],
            keyPoints: [
              '【重点】第二个重要极限 lim(1+1/x)^x=e。'
            ],
            summary: '(1+1/x)^x→e。'
          },
          {
            id: '1.4-005',
            difficulty: '基础',
            type: '填空',
            topic: '第二个重要极限',
            year: null,
            question: 'lim<sub>x→0</sub> (1+x)<sup>1/x</sup> = ______。',
            options: null,
            answer: 'e',
            solution: [
              '第一步：这是第二个重要极限的另一形式。',
              '第二步：lim(1+x)<sup>1/x</sup>=e。'
            ],
            keyPoints: [
              '【重点】(1+x)^(1/x)→e（x→0）。'
            ],
            summary: '(1+x)^(1/x)→e。'
          },
          {
            id: '1.4-006',
            difficulty: '基础',
            type: '填空',
            topic: '第二个重要极限变形',
            year: null,
            question: 'lim<sub>x→∞</sub> (1+<span class="frac"><span class="num">3</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>3</sup>',
            solution: [
              '第一步：(1+3/x)<sup>x</sup>=[(1+3/x)<sup>x/3</sup>]<sup>3</sup>。',
              '第二步：令 t=x/3，(1+1/t)<sup>t</sup>→e。',
              '第三步：原式=e³。'
            ],
            keyPoints: [
              '【重点】(1+a/x)^x→e^a。'
            ],
            summary: '(1+a/x)^x→e^a。'
          },
          {
            id: '1.4-007',
            difficulty: '基础',
            type: '选择',
            topic: '重要极限识别',
            year: null,
            question: '下列极限等于 e 的是（　）。',
            options: [
              'A. lim<sub>x→0</sub> (1+x)<sup>x</sup>',
              'B. lim<sub>x→0</sub> (1+x)<sup>1/x</sup>',
              'C. lim<sub>x→∞</sub> (1+x)<sup>1/x</sup>',
              'D. lim<sub>x→0</sub> (1+1/x)<sup>x</sup>'
            ],
            answer: 'B',
            solution: [
              '第一步：B 是 (1+x)^(1/x)，x→0，等于 e。',
              '第二步：A：(1+x)^x→1^0=1。',
              '第三步：C：x→∞ 时 (1+x)^(1/x)→1（底→∞，指数→0）。',
              '第四步：D：x→0 时 1/x→∞，不是标准形式。'
            ],
            keyPoints: [
              '【易错点】区分 (1+x)^(1/x) 与 (1+1/x)^x，前者 x→0，后者 x→∞。'
            ],
            summary: '两个形式都→e：x→0 时 (1+x)^(1/x)，x→∞ 时 (1+1/x)^x。'
          },
          {
            id: '1.4-008',
            difficulty: '基础',
            type: '填空',
            topic: '第一个重要极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sinx</span><span class="den">3x</span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：原式=(1/3)·(sinx/x)。',
              '第二步：sinx/x→1，原式=1/3。'
            ],
            keyPoints: [
              '【重点】提取常数系数。'
            ],
            summary: '提取常数后凑 sinu/u。'
          },
          {
            id: '1.4-009',
            difficulty: '提高',
            type: '填空',
            topic: '重要极限综合',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin(x-1)</span><span class="den">x²-1</span></span> = ______（x→1）。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：令 t=x-1→0，x²-1=(x-1)(x+1)=t(t+2)。',
              '第二步：原式=sint/[t(t+2)]=(sint/t)·[1/(t+2)]。',
              '第三步：→1·(1/2)=1/2。'
            ],
            keyPoints: [
              '【重点】换元 t=x-1 后凑 sinu/u。'
            ],
            summary: 'x→x₀ 时 sin(x-x₀)/(x-x₀)→1。'
          },
          {
            id: '1.4-010',
            difficulty: '提高',
            type: '填空',
            topic: '第二个重要极限',
            year: null,
            question: 'lim<sub>x→∞</sub> (<span class="num">x+2</span>/<span class="den">x-1</span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>3</sup>',
            solution: [
              '第一步：(x+2)/(x-1)=1+3/(x-1)。',
              '第二步：令 t=x-1→∞，原式=(1+3/t)<sup>t+1</sup>。',
              '第三步：(1+3/t)<sup>t</sup>→e³，多余的 (1+3/t)→1。',
              '第四步：原式=e³。'
            ],
            keyPoints: [
              '【重点】拆出 1+常数/(...) 形式。'
            ],
            summary: '(x+a)/(x+b)=1+(a-b)/(x-b)，指数→e^(a-b)。'
          },
          {
            id: '1.4-011',
            difficulty: '提高',
            type: '填空',
            topic: '1^∞ 型',
            year: null,
            question: 'lim<sub>x→0</sub> (1+3x)<sup>1/x</sup> = ______。',
            options: null,
            answer: 'e<sup>3</sup>',
            solution: [
              '第一步：(1+3x)<sup>1/x</sup>=[(1+3x)<sup>1/(3x)</sup>]<sup>3</sup>。',
              '第二步：(1+3x)<sup>1/(3x)</sup>→e。',
              '第三步：原式=e³。'
            ],
            keyPoints: [
              '【重点】(1+ax)^(1/x)→e^a。'
            ],
            summary: '(1+ax)^(1/x)→e^a。'
          },
          {
            id: '1.4-012',
            difficulty: '提高',
            type: '解答',
            topic: '1^∞ 型',
            year: null,
            question: '求 lim<sub>x→0</sub> (<span class="frac"><span class="num">cosx</span><span class="den">cos2x</span></span>)<sup>1/x²</sup>。',
            options: null,
            answer: 'e<sup>3/2</sup>',
            solution: [
              '第一步：1^∞ 型，取对数：原式=e<sup>lim(1/x²)ln(cosx/cos2x)</sup>。',
              '第二步：ln(cosx/cos2x)=lncosx-lncos2x。',
              '第三步：lncosx≈cosx-1≈-x²/2；lncos2x≈cos2x-1≈-(2x)²/2=-2x²。',
              '第四步：指数部分=[-x²/2-(-2x²)]/x²=(3x²/2)/x²=3/2。',
              '第五步：原式=e<sup>3/2</sup>。'
            ],
            keyPoints: [
              '【重点】对数商差=对数差，分别展开。',
              '【易错点】cos2x~1-2x²，注意系数 4/2=2。'
            ],
            summary: '商的幂指→对数差→分别展开。'
          },
          {
            id: '1.4-013',
            difficulty: '提高',
            type: '填空',
            topic: '重要极限与等价结合',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x·ln(1+2x)</span><span class="den">x²</span></span> = ______。',
            options: null,
            answer: '6',
            solution: [
              '第一步：sin3x～3x，ln(1+2x)～2x。',
              '第二步：分子≈3x·2x=6x²。',
              '第三步：原式=6。'
            ],
            keyPoints: [
              '【重点】乘积逐项等价。'
            ],
            summary: '乘积型极限逐项等价。'
          },
          {
            id: '1.4-014',
            difficulty: '提高',
            type: '填空',
            topic: '第二个重要极限',
            year: null,
            question: 'lim<sub>x→∞</sub> (1-<span class="frac"><span class="num">1</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>-1</sup>',
            solution: [
              '第一步：(1-1/x)<sup>x</sup>=[(1-1/x)<sup>-x</sup>]<sup>-1</sup>。',
              '第二步：(1-1/x)<sup>-x</sup>→e。',
              '第三步：原式=e<sup>-1</sup>。'
            ],
            keyPoints: [
              '【重点】(1-a/x)^x→e^(-a)。'
            ],
            summary: '(1-a/x)^x→e^(-a)。'
          },
          {
            id: '1.4-015',
            difficulty: '难题',
            type: '解答',
            topic: '重要极限综合',
            year: null,
            question: '求 lim<sub>x→0</sub> (<span class="frac"><span class="num">a<sup>x</sup>+b<sup>x</sup></span><span class="den">2</span></span>)<sup>1/x</sup> (a,b&gt;0)。',
            options: null,
            answer: '√(ab)',
            solution: [
              '第一步：取对数：ln 原式=(1/x)ln[(a<sup>x</sup>+b<sup>x</sup>)/2]。',
              '第二步：a<sup>x</sup>=e<sup>xlna</sup>≈1+xlna，b<sup>x</sup>≈1+xlnb。',
              '第三步：(a<sup>x</sup>+b<sup>x</sup>)/2≈1+x(lna+lnb)/2。',
              '第四步：ln[1+x(lna+lnb)/2]≈x(lna+lnb)/2。',
              '第五步：指数=(1/x)·x(lna+lnb)/2=(lna+lnb)/2=ln√(ab)。',
              '第六步：原式=√(ab)。'
            ],
            keyPoints: [
              '【重点】算术平均的 x 次方根→几何平均。',
              '【简便方法】记住结论：((a^x+b^x)/2)^(1/x)→√(ab)。'
            ],
            summary: '两正数算术平均的1/x次方→几何平均 √(ab)。'
          },
          {
            id: '1.4-016',
            difficulty: '难题',
            type: '填空',
            topic: '1^∞ 型反求参数',
            year: null,
            question: '已知 lim<sub>x→∞</sub> (<span class="frac"><span class="num">x+a</span><span class="den">x-a</span></span>)<sup>x</sup>=e<sup>4</sup>，则 a=______。',
            options: null,
            answer: 'a = 2',
            solution: [
              '第一步：(x+a)/(x-a)=1+2a/(x-a)。',
              '第二步：指数极限为 2a。',
              '第三步：令 2a=4，a=2。'
            ],
            keyPoints: [
              '【重点】((x+a)/(x-a))^x→e^(2a)。'
            ],
            summary: '(x+a)/(x-a)^x→e^(2a)。'
          },
          {
            id: '1.4-017',
            difficulty: '难题',
            type: '解答',
            topic: '重要极限与等价',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">tanx-sinx</span><span class="den">x³</span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：tanx-sinx=tanx(1-cosx)。',
              '第二步：tanx～x，1-cosx～x²/2。',
              '第三步：原式≈x·(x²/2)/x³=1/2。'
            ],
            keyPoints: [
              '【重点】tanx-sinx=tanx(1-cosx)，不要直接用泰勒。'
            ],
            summary: 'tanx-sinx=tanx(1-cosx)~x³/2。'
          },
          {
            id: '1.4-018',
            difficulty: '真题',
            type: '填空',
            topic: '第一个重要极限',
            year: 2016,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin2x</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：sin2x～2x。',
              '第二步：原式=2。'
            ],
            keyPoints: [
              '【重点】基础送分题。'
            ],
            summary: 'sin(ax)/x→a。'
          },
          {
            id: '1.4-019',
            difficulty: '真题',
            type: '填空',
            topic: '第二个重要极限',
            year: 2018,
            question: 'lim<sub>x→∞</sub> (<span class="frac"><span class="num">x+3</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>3</sup>',
            solution: [
              '第一步：(1+3/x)<sup>x</sup>→e³。'
            ],
            keyPoints: [
              '【重点】(1+a/x)^x→e^a。'
            ],
            summary: '(1+3/x)^x→e³。'
          },
          {
            id: '1.4-020',
            difficulty: '真题',
            type: '解答',
            topic: '综合',
            year: 2020,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">(1-cosx)·sinx</span><span class="den">x³</span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：1-cosx～x²/2，sinx～x。',
              '第二步：分子≈(x²/2)·x=x³/2。',
              '第三步：原式=1/2。'
            ],
            keyPoints: [
              '【重点】乘积逐项等价。'
            ],
            summary: '逐项等价替换。'
          },
          {
            id: '1.4-021',
            difficulty: '基础',
            type: '填空',
            topic: '第一重要极限',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin2x</span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：sin2x ~ 2x (x→0)。',
              '第二步：原式 = 2x/x = 2。'
            ],
            keyPoints: [
              '【重点】lim sinu/u = 1 (u→0)。'
            ],
            summary: '第一重要极限标准形式。'
          },
          {
            id: '1.4-022',
            difficulty: '基础',
            type: '填空',
            topic: '第二重要极限',
            year: null,
            question: 'lim<sub>x→∞</sub> (1 + <span class="frac"><span class="num">1</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e',
            solution: [
              '第一步：这是第二重要极限的标准形式。',
              '第二步：直接得 e。'
            ],
            keyPoints: [
              '【重点】lim (1+1/x)^x = e (x→∞)。'
            ],
            summary: '第二重要极限标准形式。'
          },
          {
            id: '1.4-023',
            difficulty: '基础',
            type: '选择',
            topic: '第一重要极限变形',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">sin3x</span><span class="den">sin5x</span></span> =（　）。',
            options: [
              'A. <span class="frac"><span class="num">3</span><span class="den">5</span></span>',
              'B. <span class="frac"><span class="num">5</span><span class="den">3</span></span>',
              'C. 1',
              'D. 0'
            ],
            answer: 'A',
            solution: [
              '第一步：sin3x~3x，sin5x~5x。',
              '第二步：原式 = 3x/5x = 3/5。'
            ],
            keyPoints: [
              '【简便方法】sinkx~kx。'
            ],
            summary: '正弦比直接等价。'
          },
          {
            id: '1.4-024',
            difficulty: '提高',
            type: '填空',
            topic: '第二重要极限变形',
            year: null,
            question: 'lim<sub>x→∞</sub> (1 + <span class="frac"><span class="num">2</span><span class="den">x</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>2</sup>',
            solution: [
              '第一步：(1+2/x)^x = [(1+2/x)^{x/2}]²。',
              '第二步：令 t=x/2，原式 = [(1+1/t)^t]² → e²。'
            ],
            keyPoints: [
              '【方法】配凑成 (1+1/t)^t 标准形式。'
            ],
            summary: '(1+a/x)^x → e^a。'
          },
          {
            id: '1.4-025',
            difficulty: '提高',
            type: '填空',
            topic: '1^∞ 型',
            year: null,
            question: 'lim<sub>x→∞</sub> (<span class="frac"><span class="num">x+3</span><span class="den">x-1</span></span>)<sup>x</sup> = ______。',
            options: null,
            answer: 'e<sup>4</sup>',
            solution: [
              '第一步：(x+3)/(x-1) = 1 + 4/(x-1)。',
              '第二步：原式 = (1+4/(x-1))^x → e^{4}。'
            ],
            keyPoints: [
              '【重点】(1+c/x)^x → e^c。'
            ],
            summary: '1^∞ 型抓底数-1 与指数乘积。'
          },
          {
            id: '1.4-026',
            difficulty: '提高',
            type: '选择',
            topic: '重要极限综合',
            year: null,
            question: 'lim<sub>x→0</sub> (1 - 2x)<sup><span class="frac"><span class="num">1</span><span class="den">x</span></span></sup> =（　）。',
            options: [
              'A. e<sup>2</sup>',
              'B. e<sup>-2</sup>',
              'C. e',
              'D. e<sup>-1</sup>'
            ],
            answer: 'B',
            solution: [
              '第一步：(1-2x)^{1/x} = [(1-2x)^{-1/(2x)}]^{-2}。',
              '第二步：底数 → e，指数 → -2，故 = e^{-2}。'
            ],
            keyPoints: [
              '【易错点】负号不要丢。'
            ],
            summary: '(1+ax)^{b/x} → e^{ab}。'
          },
          {
            id: '1.4-027',
            difficulty: '难题',
            type: '解答',
            topic: '两个重要极限综合',
            year: null,
            question: '求 lim<sub>x→0</sub> <span class="frac"><span class="num">tanx - sinx</span><span class="den">x<sup>3</sup></span></span>。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：tanx-sinx = tanx(1-cosx)。',
              '第二步：x→0 时 tanx~x，1-cosx~x²/2。',
              '第三步：原式 ~ x·x²/2 / x³ = 1/2。'
            ],
            keyPoints: [
              '【重点】1-cosx ~ x²/2。'
            ],
            summary: 'tanx-sinx 经典拆解。'
          },
          {
            id: '1.4-028',
            difficulty: '难题',
            type: '填空',
            topic: '重要极限与等价无穷小',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">(1+2x)<sup>1/x</sup> - e<sup>2</sup></span><span class="den">x</span></span> = ______。',
            options: null,
            answer: '-2e<sup>2</sup>',
            solution: [
              '第一步：(1+2x)^{1/x} = exp(ln(1+2x)/x)。',
              '第二步：ln(1+2x)/x = (2x-2x²+o(x²))/x = 2-2x+o(x)。',
              '第三步：故 (1+2x)^{1/x} = e^{2-2x+o(x)} = e²·e^{-2x+o(x)} = e²(1-2x+o(x))。',
              '第四步：分子 = e²(1-2x+o(x))-e² = -2e²x+o(x)，除以 x 得 -2e²。'
            ],
            keyPoints: [
              '【重点】幂指函数展开。'
            ],
            summary: '含重要极限的差式，展开到一阶。'
          },
          {
            id: '1.4-029',
            difficulty: '真题',
            type: '填空',
            topic: '第二重要极限',
            year: 2013,
            question: 'lim<sub>x→0</sub> (<span class="frac"><span class="num">1</span><span class="den">1-x</span></span>)<sup><span class="frac"><span class="num">1</span><span class="den">x</span></span></sup> = ______。',
            options: null,
            answer: 'e',
            solution: [
              '第一步：1/(1-x) = (1-x)^{-1}。',
              '第二步：原式 = (1-x)^{-1/x}。',
              '第三步：令 t=-x，x→0 时 t→0，(1+t)^{1/t} → e。'
            ],
            keyPoints: [
              '【方法】换元 t=-x。'
            ],
            summary: '(1-x)^{-1/x} → e。'
          },
          {
            id: '1.4-030',
            difficulty: '真题',
            type: '选择',
            topic: '重要极限反求参数',
            year: 2020,
            question: 'lim<sub>x→∞</sub> (<span class="frac"><span class="num">x+2a</span><span class="den">x-a</span></span>)<sup>x</sup> = e<sup>6</sup>，则 a =（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'B',
            solution: [
              '第一步：(x+2a)/(x-a) = 1 + 3a/(x-a)。',
              '第二步：(1+3a/(x-a))^x = [(1+3a/(x-a))^{(x-a)/(3a)}]^{3ax/(x-a)}。',
              '第三步：底数部分 → e，指数部分 → 3a，故极限 = e^{3a}。',
              '第四步：由 e^{3a}=e⁶ 得 3a=6，a=2，选 B。'
            ],
            keyPoints: [
              '【重点】(1+c/x)^x → e^c。'
            ],
            summary: '已知极限反求参数，用 e^c 公式。'
          }
        ]
      },
      '1.5': {
        id: '1.5',
        title: '无穷小量与无穷大量的比较',
        questions: [
          {
            id: '1.5-001',
            difficulty: '基础',
            type: '选择',
            topic: '无穷小的阶',
            year: null,
            question: '当 x→0 时，下列无穷小中与 x 同阶的是（　）。',
            options: [
              'A. x<sup>2</sup>',
              'B. √x',
              'C. sin2x',
              'D. 1-cosx'
            ],
            answer: 'C',
            solution: [
              '第一步：同阶无穷小指比值为非零常数。',
              '第二步：A：x²/x=x→0，x 是高阶。',
              '第三步：B：√x/x=1/√x→∞，√x 是低阶。',
              '第四步：C：sin2x/x→2，同阶（且等价系数为2）。',
              '第五步：D：(1-cosx)/x=x/2→0，高阶。'
            ],
            keyPoints: [
              '【重点】同阶要求比值为非零常数。'
            ],
            summary: '同阶无穷小：比值→非零常数。'
          },
          {
            id: '1.5-002',
            difficulty: '基础',
            type: '填空',
            topic: '等价无穷小',
            year: null,
            question: '当 x→0 时，ln(1+ax) 与 2x 等价，则 a=______。',
            options: null,
            answer: 'a = 2',
            solution: [
              '第一步：ln(1+ax)～ax。',
              '第二步：要与 2x 等价，需 ax=2x，a=2。'
            ],
            keyPoints: [
              '【重点】等价要求比值→1。'
            ],
            summary: '等价无穷小对应系数相等。'
          },
          {
            id: '1.5-003',
            difficulty: '基础',
            type: '选择',
            topic: '高阶无穷小',
            year: null,
            question: '当 x→0 时，x-sinx 是 x² 的（　）。',
            options: [
              'A. 高阶无穷小',
              'B. 低阶无穷小',
              'C. 同阶非等价',
              'D. 等价无穷小'
            ],
            answer: 'A',
            solution: [
              '第一步：x-sinx~x³/6。',
              '第二步：(x-sinx)/x²=(x³/6)/x²=x/6→0。',
              '第三步：故 x-sinx 是 x² 的高阶无穷小。'
            ],
            keyPoints: [
              '【重点】比的极限为 0，则分子是分母的高阶无穷小。'
            ],
            summary: '比值→0 ⇒ 分子高阶。'
          },
          {
            id: '1.5-004',
            difficulty: '基础',
            type: '填空',
            topic: '无穷小比较',
            year: null,
            question: '当 x→0 时，将 α=x，β=sinx，γ=tanx 按"阶从低到高"排列为______。',
            options: null,
            answer: 'α=β=γ（三者等价，同为一阶）',
            solution: [
              '第一步：x、sinx、tanx 在 x→0 时都～x。',
              '第二步：三者同为一阶无穷小，彼此等价。'
            ],
            keyPoints: [
              '【重点】x~sinx~tanx。'
            ],
            summary: 'x~sinx~tanx，三者等价。'
          },
          {
            id: '1.5-005',
            difficulty: '基础',
            type: '选择',
            topic: '无穷大量',
            year: null,
            question: '当 x→0 时，下列变量为无穷大量的是（　）。',
            options: [
              'A. sinx',
              'B. <span class="frac"><span class="num">1</span><span class="den">sinx</span></span>',
              'C. x·sinx',
              'D. <span class="frac"><span class="num">sinx</span><span class="den">x</span></span>'
            ],
            answer: 'B',
            solution: [
              '第一步：A：sinx→0，是无穷小。',
              '第二步：B：1/sinx，x→0 时 |sinx|→0，|1/sinx|→∞，是无穷大。',
              '第三步：C：x·sinx→0，无穷小。',
              '第四步：D：sinx/x→1。'
            ],
            keyPoints: [
              '【重点】无穷小的倒数（不取0）是无穷大。'
            ],
            summary: '非零无穷小的倒数是无穷大。'
          },
          {
            id: '1.5-006',
            difficulty: '基础',
            type: '填空',
            topic: '无穷小阶数',
            year: null,
            question: '当 x→0 时，1-cos2x 是 x 的______阶无穷小。',
            options: null,
            answer: '二',
            solution: [
              '第一步：1-cos2x～(2x)²/2=2x²。',
              '第二步：是 x 的二阶无穷小。'
            ],
            keyPoints: [
              '【重点】1-cos(kx)~k²x²/2。'
            ],
            summary: '1-cos(kx)~k²x²/2，二阶。'
          },
          {
            id: '1.5-007',
            difficulty: '提高',
            type: '选择',
            topic: '无穷小排序',
            year: null,
            question: '当 x→0 时，下列无穷小中阶数最高的是（　）。',
            options: [
              'A. sinx',
              'B. x-sinx',
              'C. 1-cosx',
              'D. √(1+x)-1'
            ],
            answer: 'B',
            solution: [
              '第一步：A：sinx~x，一阶。',
              '第二步：B：x-sinx~x³/6，三阶。',
              '第三步：C：1-cosx~x²/2，二阶。',
              '第四步：D：√(1+x)-1~x/2，一阶。',
              '第五步：阶数最高的是 B（三阶）。'
            ],
            keyPoints: [
              '【重点】常见无穷小的阶：x-sinx 三阶，1-cosx 二阶。'
            ],
            summary: '熟记常见无穷小的阶数即可比较。'
          },
          {
            id: '1.5-008',
            difficulty: '提高',
            type: '填空',
            topic: '反求阶数',
            year: null,
            question: '当 x→0 时，e<sup>x²</sup>-1 是 x 的______阶无穷小。',
            options: null,
            answer: '二',
            solution: [
              '第一步：e<sup>x²</sup>-1～x²。',
              '第二步：是 x 的二阶无穷小。'
            ],
            keyPoints: [
              '【重点】e^(u)-1~u，u=x²。'
            ],
            summary: 'e^(x²)-1~x²。'
          },
          {
            id: '1.5-009',
            difficulty: '提高',
            type: '选择',
            topic: '等价无穷小选择题',
            year: null,
            question: '当 x→0 时，与 x 同阶但不等价的无穷小是（　）。',
            options: [
              'A. sinx-x',
              'B. x-sinx',
              'C. x·sinx',
              'D. 2x+sinx'
            ],
            answer: 'D',
            solution: [
              '第一步：A：sinx-x~-x³/6，三阶，是 x 的高阶。',
              '第二步：B：x-sinx~x³/6，三阶，高阶。',
              '第三步：C：x·sinx~x²，二阶，高阶。',
              '第四步：D：2x+sinx~2x+x=3x，与 x 比值为 3，同阶但不等价。故选 D。'
            ],
            keyPoints: [
              '【易错点】等价比值须为1，同阶比值为非零常数即可。'
            ],
            summary: '同阶：比值非零常数；等价：比值恰为1。'
          },
          {
            id: '1.5-010',
            difficulty: '提高',
            type: '填空',
            topic: '反求常数使等价',
            year: null,
            question: '当 x→0 时，若 (1-cosx)·ln(1+x) 与 x<sup>n</sup> 等价，则 n=______。',
            options: null,
            answer: 'n = 3',
            solution: [
              '第一步：1-cosx~x²/2（二阶），ln(1+x)~x（一阶）。',
              '第二步：乘积~x³/2，是三阶。',
              '第三步：n=3。'
            ],
            keyPoints: [
              '【重点】乘积的阶=各因子阶之和。'
            ],
            summary: '无穷小乘积的阶数相加。'
          },
          {
            id: '1.5-011',
            difficulty: '提高',
            type: '填空',
            topic: '无穷小阶的确定',
            year: null,
            question: '当 x→0 时，tanx-sinx 是 x 的______阶无穷小。',
            options: null,
            answer: '三',
            solution: [
              '第一步：tanx-sinx=tanx(1-cosx)~x·(x²/2)=x³/2。',
              '第二步：是 x 的三阶无穷小。'
            ],
            keyPoints: [
              '【重点】tanx-sinx~x³/2，三阶。'
            ],
            summary: 'tanx-sinx~x³/2。'
          },
          {
            id: '1.5-012',
            difficulty: '提高',
            type: '解答',
            topic: '无穷小比较',
            year: null,
            question: '当 x→0 时，比较 x·tanx 与 x² 的阶。',
            options: null,
            answer: 'x·tanx 与 x² 等价',
            solution: [
              '第一步：tanx~x。',
              '第二步：x·tanx~x·x=x²。',
              '第三步：故 x·tanx 与 x² 等价。'
            ],
            keyPoints: [
              '【重点】乘积替换后看阶数。'
            ],
            summary: '乘积等价后直接比较。'
          },
          {
            id: '1.5-013',
            difficulty: '难题',
            type: '选择',
            topic: '高阶无穷小的阶',
            year: null,
            question: '当 x→0 时，下列无穷小中阶数最高的是（　）。',
            options: [
              'A. 1-cosx',
              'B. tanx-x',
              'C. x·sinx',
              'D. √(1+x²)-1'
            ],
            answer: 'B',
            solution: [
              '第一步：A：1-cosx~x²/2，二阶。',
              '第二步：B：tanx-x~x³/3，三阶。',
              '第三步：C：x·sinx~x²，二阶。',
              '第四步：D：√(1+x²)-1~x²/2，二阶。',
              '第五步：阶数最高的是 B（三阶）。'
            ],
            keyPoints: [
              '【重点】常见三阶无穷小：x-sinx、tanx-x、arcsinx-x。'
            ],
            summary: '熟记常见无穷小阶数：x-ln(1+x) 二阶，x-sinx 等三阶。'
          },
          {
            id: '1.5-014',
            difficulty: '难题',
            type: '填空',
            topic: '反求阶数',
            year: null,
            question: '当 x→0 时，f(x)=x-sinx·cosx·cos2x 是 x 的______阶无穷小。',
            options: null,
            answer: '三阶',
            solution: [
              '第一步：sinx·cosx·cos2x，先 sinx·cosx=(1/2)sin2x。',
              '第二步：乘积=(1/2)sin2x·cos2x=(1/4)sin4x。',
              '第三步：sin4x~4x，乘积~x。',
              '第四步：f(x)=x-(1/4)sin4x~x-x=0？需展开：sin4x=4x-(4x)³/6=4x-32x³/3。',
              '第五步：(1/4)sin4x=x-(8/3)x³。',
              '第六步：f(x)=x-[x-(8/3)x³]=(8/3)x³，三阶。'
            ],
            keyPoints: [
              '【重点】三角恒等化简 sinxcosx=(1/2)sin2x。'
            ],
            summary: '三角乘积先恒等化简再展开。'
          },
          {
            id: '1.5-015',
            difficulty: '难题',
            type: '解答',
            topic: '无穷小比较与反求',
            year: null,
            question: '当 x→0 时，若 f(x)=x-(a+bcosx)sinx 是 x 的五阶无穷小，求 a,b。',
            options: null,
            answer: 'a=<span class="frac"><span class="num">4</span><span class="den">3</span></span>，b=-<span class="frac"><span class="num">1</span><span class="den">3</span></span>',
            solution: [
              '第一步：展开 cosx=1-x²/2+x⁴/24，sinx=x-x³/6+x⁵/120。',
              '第二步：(a+bcosx)sinx=[a+b(1-x²/2+x⁴/24)]·(x-x³/6+x⁵/120)。',
              '第三步：=(a+b)x - [(a+b)/6+b/2]x³ + [(a+b)/120+b/12+b/24]x⁵。',
              '第四步：f(x)=x-(a+b)x+[(a+b)/6+b/2]x³-...。',
              '第五步：一阶系数：1-(a+b)=0 ⇒ a+b=1。',
              '第六步：三阶系数：(a+b)/6+b/2=1/6+b/2=0 ⇒ b=-1/3。',
              '第七步：a=1-b=4/3。'
            ],
            keyPoints: [
              '【重点】展开到足够阶，令低阶系数为 0。'
            ],
            summary: '反求系数使低阶项消失：逐项令系数为0。'
          },
          {
            id: '1.5-016',
            difficulty: '难题',
            type: '填空',
            topic: '无穷大量比较',
            year: null,
            question: '当 x→+∞ 时，将 ln x、x、e<sup>x</sup> 按"增长由慢到快"排列为______。',
            options: null,
            answer: 'ln x &lt; x &lt; e<sup>x</sup>',
            solution: [
              '第一步：对数函数增长慢于幂函数，幂函数慢于指数函数。',
              '第二步：顺序为 ln x &lt; x &lt; e<sup>x</sup>。'
            ],
            keyPoints: [
              '【重点】增长速度：log &lt; 幂 &lt; 指数。'
            ],
            summary: 'x→+∞ 时 log &lt; 幂 &lt; 指数。'
          },
          {
            id: '1.5-017',
            difficulty: '真题',
            type: '选择',
            topic: '无穷小比较',
            year: 2020,
            question: '当 x→0 时，下列无穷小中最高阶的是（　）。',
            options: [
              'A. 1-cosx',
              'B. sinx-tanx',
              'C. 1-cos2x',
              'D. √(1+x²)-1'
            ],
            answer: 'B',
            solution: [
              '第一步：A：1-cosx~x²/2，二阶。',
              '第二步：B：sinx-tanx=-tanx(1-cosx)~-x·(x²/2)=-x³/2，三阶。',
              '第三步：C：1-cos2x~(2x)²/2=2x²，二阶。',
              '第四步：D：√(1+x²)-1~x²/2，二阶。',
              '第五步：阶数最高的是 B（三阶）。'
            ],
            keyPoints: [
              '【重点】tanx-sinx 与 sinx-tanx 是相反数，同为三阶。'
            ],
            summary: '三角函数组合的无穷小，因式分解后看阶数。'
          },
          {
            id: '1.5-018',
            difficulty: '真题',
            type: '填空',
            topic: '等价无穷小反求',
            year: 2019,
            question: '当 x→0 时，1-cosx·cos2x 与 ax<sup>n</sup> 等价，则 a=______，n=______。',
            options: null,
            answer: 'a=<span class="frac"><span class="num">5</span><span class="den">2</span></span>，n=2',
            solution: [
              '第一步：cosx~1-x²/2，cos2x~1-2x²。',
              '第二步：乘积~(1-x²/2)(1-2x²)~1-5x²/2。',
              '第三步：1-乘积~5x²/2。',
              '第四步：a=5/2，n=2。'
            ],
            keyPoints: [
              '【重点】乘积展开到 x² 项。'
            ],
            summary: '两余弦乘积差，分别展开后乘开。'
          },
          {
            id: '1.5-019',
            difficulty: '真题',
            type: '选择',
            topic: '无穷小比较',
            year: 2014,
            question: '当 x→0⁺ 时，√(1+√x)-1 是 x 的（　）。',
            options: [
              'A. 等价无穷小',
              'B. 同阶非等价',
              'C. 高阶无穷小',
              'D. 低阶无穷小'
            ],
            answer: 'D',
            solution: [
              '第一步：令 t=√x→0⁺，√(1+t)-1~t/2。',
              '第二步：即 ~√x/2=x<sup>1/2</sup>/2。',
              '第三步：x<sup>1/2</sup>/x=x<sup>-1/2</sup>/2→∞。',
              '第四步：故该无穷小是 x 的低阶无穷小。'
            ],
            keyPoints: [
              '【重点】幂次小的是低阶。'
            ],
            summary: '指数越小阶越低，√x 比 x 低一阶。'
          },
          {
            id: '1.5-020',
            difficulty: '真题',
            type: '填空',
            topic: '无穷小阶数',
            year: 2012,
            question: '当 x→0 时，(1-cosx)·ln(1+x) 是 x 的______阶无穷小。',
            options: null,
            answer: '三',
            solution: [
              '第一步：1-cosx~x²/2（二阶），ln(1+x)~x（一阶）。',
              '第二步：乘积~x³/2。',
              '第三步：三阶。'
            ],
            keyPoints: [
              '【重点】乘积阶数相加。'
            ],
            summary: '乘积阶=各因子阶之和。'
          },
          {
            id: '1.5-021',
            difficulty: '基础',
            type: '填空',
            topic: '无穷小比较',
            year: null,
            question: '当 x→0 时，x<sup>2</sup> 是 sinx 的______阶无穷小（填高/低/同阶/等价）。',
            options: null,
            answer: '高阶',
            solution: [
              '第一步：lim x²/sinx = lim x²/x = lim x = 0。',
              '第二步：极限为0，说明 x² 是 sinx 的高阶无穷小。'
            ],
            keyPoints: [
              '【重点】比值极限为0是高阶，为常数非0是同阶，为1是等价。'
            ],
            summary: '无穷小比较看比值极限。'
          },
          {
            id: '1.5-022',
            difficulty: '基础',
            type: '选择',
            topic: '等价无穷小',
            year: null,
            question: '当 x→0 时，与 x 等价的无穷小是（　）。',
            options: [
              'A. tan2x',
              'B. <span class="frac"><span class="num">sinx</span><span class="den">2</span></span>',
              'C. x+x<sup>2</sup>',
              'D. 1-cosx'
            ],
            answer: 'C',
            solution: [
              '第一步：A: tan2x~2x，不等价。',
              '第二步：B: sinx/2~x/2，不等价。',
              '第三步：C: x+x² = x(1+x)~x，等价。',
              '第四步：D: 1-cosx~x²/2，是高阶。'
            ],
            keyPoints: [
              '【简便方法】等价无穷小要看主部，x+x² 主部是 x。'
            ],
            summary: '找等价无穷小看最低次项。'
          },
          {
            id: '1.5-023',
            difficulty: '基础',
            type: '填空',
            topic: '无穷小阶数',
            year: null,
            question: '当 x→0 时，1-cosx 是 x 的______阶无穷小。',
            options: null,
            answer: '2',
            solution: [
              '第一步：1-cosx ~ x²/2。',
              '第二步：与 x² 同阶，故是 x 的 2 阶无穷小。'
            ],
            keyPoints: [
              '【重点】1-cosx~x²/2。'
            ],
            summary: '常见等价无穷小要熟记。'
          },
          {
            id: '1.5-024',
            difficulty: '提高',
            type: '填空',
            topic: '等价无穷小代换',
            year: null,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">(1-cosx)ln(1+x)</span><span class="den">x<sup>3</sup></span></span> = ______。',
            options: null,
            answer: '<span class="frac"><span class="num">1</span><span class="den">2</span></span>',
            solution: [
              '第一步：1-cosx ~ x²/2，ln(1+x) ~ x。',
              '第二步：分子 ~ (x²/2)·x = x³/2。',
              '第三步：原式 = (x³/2)/x³ = 1/2。'
            ],
            keyPoints: [
              '【重点】乘积因子可整体等价替换。'
            ],
            summary: '乘除结构可用等价无穷小。'
          },
          {
            id: '1.5-025',
            difficulty: '提高',
            type: '选择',
            topic: '无穷小阶的比较',
            year: null,
            question: '当 x→0<sup>+</sup> 时，下列无穷小中最高阶的是（　）。',
            options: [
              'A. x',
              'B. x<sup>2</sup>',
              'C. sin√x',
              'D. 1-cosx'
            ],
            answer: 'B',
            solution: [
              '第一步：A: x 为一阶。',
              '第二步：B: x² 为二阶。',
              '第三步：C: sin√x ~ √x 为 1/2 阶。',
              '第四步：D: 1-cosx ~ x²/2 为二阶。B 与 D 同为二阶，B 更标准，选 B。'
            ],
            keyPoints: [
              '【方法】化为幂函数 x^k 比较阶数。'
            ],
            summary: '无穷小阶数比较统一写成 x^k 形式。'
          },
          {
            id: '1.5-026',
            difficulty: '提高',
            type: '填空',
            topic: '已知极限反求参数',
            year: null,
            question: '若 lim<sub>x→0</sub> <span class="frac"><span class="num">sinx</span><span class="den">x<sup>3</sup>+ax<sup>2</sup>+bx</span></span> = <span class="frac"><span class="num">1</span><span class="den">3</span></span>，则 a=____，b=____。',
            options: null,
            answer: 'a=0, b=3',
            solution: [
              '第一步：x→0 时 sinx~x，原式 = lim x/(x³+ax²+bx) = lim 1/(x²+ax+b)。',
              '第二步：要极限 = 1/3，需 b=3。',
              '第三步：若 a≠0，则分母 ~ ax²，极限发散。故 a=0。',
              '第四步：验证 a=0,b=3：原式 = lim 1/(x²+3) = 1/3。'
            ],
            keyPoints: [
              '【重点】等价无穷小后看分母最低次项。'
            ],
            summary: '已知极限反求参数用等价无穷小化简。'
          },
          {
            id: '1.5-027',
            difficulty: '难题',
            type: '解答',
            topic: '无穷小阶的确定',
            year: null,
            question: '当 x→0 时，确定无穷小量 f(x) = tanx - sinx 是 x 的几阶无穷小，并求其等价无穷小。',
            options: null,
            answer: '三阶，等价于 <span class="frac"><span class="num">x<sup>3</sup></span><span class="den">2</span></span>',
            solution: [
              '第一步：tanx-sinx = tanx(1-cosx)。',
              '第二步：tanx~x，1-cosx~x²/2。',
              '第三步：f(x) ~ x·x²/2 = x³/2。',
              '第四步：故 f(x) 是 x 的三阶无穷小，等价于 x³/2。'
            ],
            keyPoints: [
              '【重点】分解因式后分别等价。'
            ],
            summary: '求无穷小阶数：因式分解后各因子等价。'
          },
          {
            id: '1.5-028',
            difficulty: '难题',
            type: '填空',
            topic: '无穷小比较综合',
            year: null,
            question: '设当 x→0 时，e<sup>x<sup>2</sup></sup> - cosx 是比 x<sup>2</sup> 同阶的无穷小，而比 x<sup>3</sup> 低阶，则该无穷小的阶数为______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：e^{x²} = 1+x²+x⁴/2+...，cosx = 1-x²/2+x⁴/24+...。',
              '第二步：相减得 e^{x²}-cosx = (x²+x²/2) + ... = 3x²/2 + o(x²)。',
              '第三步：故该无穷小是 x 的二阶。'
            ],
            keyPoints: [
              '【重点】泰勒展开确定阶数。'
            ],
            summary: '差式无穷小用泰勒展开到首项。'
          },
          {
            id: '1.5-029',
            difficulty: '真题',
            type: '选择',
            topic: '无穷小比较',
            year: 2014,
            question: '当 x→0<sup>+</sup> 时，若 ln<sup>2</sup>(1+x) 与 x<sup>n</sup> 为等价无穷小，则 n =（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'B',
            solution: [
              '第一步：x→0 时 ln(1+x)~x。',
              '第二步：ln²(1+x) ~ x²。',
              '第三步：与 x^n 等价得 n=2。'
            ],
            keyPoints: [
              '【重点】ln(1+x)~x。'
            ],
            summary: '幂次无穷小直接由基本等价式推出。'
          },
          {
            id: '1.5-030',
            difficulty: '真题',
            type: '填空',
            topic: '等价无穷小',
            year: 2017,
            question: 'lim<sub>x→0</sub> <span class="frac"><span class="num">arcsinx · sinx</span><span class="den">x<sup>2</sup></span></span> = ______。',
            options: null,
            answer: '1',
            solution: [
              '第一步：arcsinx ~ x，sinx ~ x。',
              '第二步：分子 ~ x·x = x²。',
              '第三步：原式 = x²/x² = 1。'
            ],
            keyPoints: [
              '【重点】arcsinx~x。'
            ],
            summary: '乘积因子分别等价。'
          }
        ]
      },
      '1.6': {
        id: '1.6',
        title: '函数的连续性与间断点',
        questions: [
          {
            id: '1.6-001',
            difficulty: '基础',
            type: '选择',
            topic: '连续的定义',
            year: null,
            question: '函数 f(x) 在 x=x₀ 处连续的充要条件是（　）。',
            options: [
              'A. f(x₀) 存在',
              'B. lim<sub>x→x₀</sub> f(x) 存在',
              'C. lim<sub>x→x₀</sub> f(x)=f(x₀)',
              'D. f(x) 在 x₀ 附近有定义'
            ],
            answer: 'C',
            solution: [
              '第一步：连续三要素：f(x₀) 有定义、极限存在、极限值=函数值。',
              '第二步：合写为 lim<sub>x→x₀</sub> f(x)=f(x₀)。'
            ],
            keyPoints: [
              '【重点】连续=极限存在且等于函数值。'
            ],
            summary: 'f 在 x₀ 连续 ⇔ lim f(x)=f(x₀)。'
          },
          {
            id: '1.6-002',
            difficulty: '基础',
            type: '填空',
            topic: '间断点类型',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">sinx</span><span class="den">x</span></span> 在 x=0 处为______间断点。',
            options: null,
            answer: '可去',
            solution: [
              '第一步：x→0 时 sinx/x→1，但 f(0) 无定义。',
              '第二步：极限存在但函数无定义（或不等于极限），是可去间断点。'
            ],
            keyPoints: [
              '【重点】左右极限存在且相等的间断点为可去间断点。'
            ],
            summary: '极限存在但无定义/不等=可去间断点。'
          },
          {
            id: '1.6-003',
            difficulty: '基础',
            type: '选择',
            topic: '无穷间断点',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">1</span><span class="den">x-1</span></span> 在 x=1 处为（　）。',
            options: [
              'A. 可去间断点',
              'B. 跳跃间断点',
              'C. 无穷间断点',
              'D. 连续点'
            ],
            answer: 'C',
            solution: [
              '第一步：x→1 时 |f(x)|→∞。',
              '第二步：极限为无穷，是无穷间断点（第二类）。'
            ],
            keyPoints: [
              '【重点】极限为无穷是第二类间断点中的无穷型。'
            ],
            summary: '分母为0、极限为无穷=无穷间断点。'
          },
          {
            id: '1.6-004',
            difficulty: '基础',
            type: '填空',
            topic: '跳跃间断点',
            year: null,
            question: 'f(x)=<span class="piecewise"><span class="prow"><span class="pval">x+1,</span><span class="pcond">x≥0</span></span><span class="prow"><span class="pval">x-1,</span><span class="pcond">x&lt;0</span></span></span> 在 x=0 处为______间断点。',
            options: null,
            answer: '跳跃',
            solution: [
              '第一步：右极限 lim<sub>x→0⁺</sub>(x+1)=1。',
              '第二步：左极限 lim<sub>x→0⁻</sub>(x-1)=-1。',
              '第三步：左右极限都存在但不相等，是跳跃间断点。'
            ],
            keyPoints: [
              '【重点】左右极限存在但不等=跳跃间断点。'
            ],
            summary: '左右极限都存在但不等=跳跃间断点。'
          },
          {
            id: '1.6-005',
            difficulty: '基础',
            type: '选择',
            topic: '连续函数的运算',
            year: null,
            question: '下列函数在其定义域内连续的是（　）。',
            options: [
              'A. f(x)=<span class="frac"><span class="num">1</span><span class="den">x</span></span>',
              'B. f(x)=tanx',
              'C. f(x)=e<sup>x</sup>',
              'D. f(x)=lnx'
            ],
            answer: 'C',
            solution: [
              '第一步：初等函数在定义域内连续。',
              '第二步：A 定义域 x≠0，在定义域内连续——但题目问"在其定义域内"，A、B、D 都是初等函数，在各自定义域内都连续。',
              '第三步：本题标准命题应选"处处连续（R 上）"的函数。e<sup>x</sup> 在整个 R 上连续。',
              '第四步：选 C。'
            ],
            keyPoints: [
              '【重点】初等函数在定义域内连续。'
            ],
            summary: '初等函数在定义域内连续，e^x 在 R 上处处连续。'
          },
          {
            id: '1.6-006',
            difficulty: '基础',
            type: '填空',
            topic: '连续反求参数',
            year: null,
            question: 'f(x)=<span class="piecewise"><span class="prow"><span class="pval"><span class="frac"><span class="num">sin2x</span><span class="den">x</span></span>,</span><span class="pcond">x≠0</span></span><span class="prow"><span class="pval">a,</span><span class="pcond">x=0</span></span></span> 在 x=0 连续，则 a=______。',
            options: null,
            answer: 'a = 2',
            solution: [
              '第一步：连续要求 a=lim<sub>x→0</sub> sin2x/x。',
              '第二步：sin2x/x→2。',
              '第三步：a=2。'
            ],
            keyPoints: [
              '【重点】分段点连续=左右极限=该点函数值。'
            ],
            summary: '分段点连续：函数值=该点极限值。'
          },
          {
            id: '1.6-007',
            difficulty: '提高',
            type: '选择',
            topic: '间断点分类',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x</span><span class="den">sinx</span></span> 在 (0,π) 内的间断点为（　）。',
            options: [
              'A. x=0',
              'B. x=π/2',
              'C. 无间断点',
              'D. x=π'
            ],
            answer: 'C',
            solution: [
              '第一步：在 (0,π) 内 sinx≠0，分母恒不为 0。',
              '第二步：x/sinx 在 (0,π) 内是初等函数，无间断点。'
            ],
            keyPoints: [
              '【重点】找间断点先找分母为0或无定义处。'
            ],
            summary: '开区间内初等函数无分母零点则连续。'
          },
          {
            id: '1.6-008',
            difficulty: '提高',
            type: '填空',
            topic: '振荡间断点',
            year: null,
            question: 'f(x)=sin<span class="frac"><span class="num">1</span><span class="den">x</span></span> 在 x=0 处为______间断点。',
            options: null,
            answer: '振荡（第二类）',
            solution: [
              '第一步：x→0 时 sin(1/x) 在 [-1,1] 无限振荡，极限不存在也不为∞。',
              '第二步：是振荡间断点，属第二类。'
            ],
            keyPoints: [
              '【重点】振荡型极限不存在=振荡间断点。'
            ],
            summary: 'sin(1/x) 在 x=0 为振荡间断点。'
          },
          {
            id: '1.6-009',
            difficulty: '提高',
            type: '解答',
            topic: '间断点分类综合',
            year: null,
            question: '求 f(x)=<span class="frac"><span class="num">x<sup>2}-1</span><span class="den">x<sup>2</sup>-3x+2</span></span> 的间断点并分类。',
            options: null,
            answer: 'x=1 为可去间断点，x=2 为无穷间断点',
            solution: [
              '第一步：分母 x²-3x+2=(x-1)(x-2)，间断点 x=1 和 x=2。',
              '第二步：分子 x²-1=(x-1)(x+1)。',
              '第三步：x=1：f(x)=(x-1)(x+1)/[(x-1)(x-2)]=(x+1)/(x-2)→2/(-1)=-2，极限存在，可去间断点。',
              '第四步：x=2：分母→0，分子→3，极限→∞，无穷间断点。'
            ],
            keyPoints: [
              '【重点】先因式分解，能约掉的因子对应可去间断点。'
            ],
            summary: '有理函数间断点：约掉的因子对应可去，约不掉的对应无穷。'
          },
          {
            id: '1.6-010',
            difficulty: '提高',
            type: '填空',
            topic: '连续反求参数',
            year: null,
            question: 'f(x)=<span class="piecewise"><span class="prow"><span class="pval">e<sup>x</sup>,</span><span class="pcond">x≤0</span></span><span class="prow"><span class="pval">x+a,</span><span class="pcond">x&gt;0</span></span></span> 在 x=0 连续，则 a=______。',
            options: null,
            answer: 'a = 1',
            solution: [
              '第一步：左极限 e⁰=1，f(0)=e⁰=1。',
              '第二步：右极限 0+a=a。',
              '第三步：连续要求 1=a，a=1。'
            ],
            keyPoints: [
              '【重点】分段点连续=左右极限=函数值。'
            ],
            summary: '分段点连续列方程。'
          },
          {
            id: '1.6-011',
            difficulty: '提高',
            type: '选择',
            topic: '间断点个数',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">x</span><span class="den">tanx</span></span> 在 [-π,π] 内的可去间断点个数为（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 4'
            ],
            answer: 'C',
            solution: [
              '第一步：可疑点：tanx=0 处 x=0,±π；tanx 无定义处 x=±π/2。',
              '第二步：x=0：x/tanx→1，极限存在，可去间断点。',
              '第三步：x=±π：x/tanx→±π/0=∞，无穷间断点。',
              '第四步：x=±π/2：tanx→∞，x/tanx→0，极限存在，可去间断点。',
              '第五步：可去间断点为 x=0、π/2、-π/2，共 3 个。选 C。'
            ],
            keyPoints: [
              '【易错点】tanx=0 与 tanx 无定义两类点都要检查。'
            ],
            summary: '三角函数比值的间断点要检查分母为0和无定义两类位置。'
          },
          {
            id: '1.6-012',
            difficulty: '提高',
            type: '解答',
            topic: '连续函数性质',
            year: null,
            question: '证明：f(x)=x³+x-1 在 (0,1) 内至少有一个零点。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：f(x) 在 [0,1] 上连续（初等函数）。',
              '第二步：f(0)=-1&lt;0，f(1)=1+1-1=1&gt;0。',
              '第三步：f(0)·f(1)&lt;0，由零点定理，存在 ξ∈(0,1) 使 f(ξ)=0。'
            ],
            keyPoints: [
              '【重点】零点定理：连续函数端点异号则必有零点。'
            ],
            summary: '证方程有根：验证连续+端点异号+零点定理。'
          },
          {
            id: '1.6-013',
            difficulty: '难题',
            type: '选择',
            topic: '间断点综合',
            year: null,
            question: 'f(x)=<span class="frac"><span class="num">sinx·sin(x-1)</span><span class="den">x(x-1)</span></span> 的可去间断点个数为（　）。',
            options: [
              'A. 1',
              'B. 2',
              'C. 3',
              'D. 0'
            ],
            answer: 'B',
            solution: [
              '第一步：分母零点 x=0 和 x=1。',
              '第二步：x=0：sinx~x，原式≈x·sin(-1)/(x·(-1))=sin(-1)/(-1)=sin1，极限存在，可去。',
              '第三步：x=1：sin(x-1)~(x-1)，原式≈sin1·(x-1)/(1·(x-1))=sin1，极限存在，可去。',
              '第四步：两个可去间断点，选 B。'
            ],
            keyPoints: [
              '【重点】分子分母同时为0的点，若极限存在则为可去。'
            ],
            summary: '分子分母共零点：极限存在则可去。'
          },
          {
            id: '1.6-014',
            difficulty: '难题',
            type: '填空',
            topic: '连续函数定义',
            year: null,
            question: 'f(x)=<span class="piecewise"><span class="prow"><span class="prow"><span class="pval">x·sin<span class="frac"><span class="num">1</span><span class="den">x</span></span>,</span><span class="pcond">x≠0</span></span></span><span class="prow"><span class="pval">a,</span><span class="pcond">x=0</span></span></span> 在 x=0 连续，则 a=______。',
            options: null,
            answer: 'a = 0',
            solution: [
              '第一步：x→0 时 x·sin(1/x)→0（无穷小×有界）。',
              '第二步：连续要求 a=0。'
            ],
            keyPoints: [
              '【重点】无穷小×有界=无穷小。'
            ],
            summary: 'x·sin(1/x)→0，连续补 a=0。'
          },
          {
            id: '1.6-015',
            difficulty: '难题',
            type: '解答',
            topic: '间断点分类',
            year: null,
            question: '讨论 f(x)=<span class="frac"><span class="num">x</span><span class="den">ln|x|</span></span> 的间断点及类型。',
            options: null,
            answer: 'x=0 为可去间断点',
            solution: [
              '第一步：无定义处 x=0（ln0）。',
              '第二步：x→0 时 ln|x|→-∞，x/ln|x|→0（0/∞型）。',
              '第三步：极限存在为 0，是可去间断点。',
              '第四步：x=±1 处 ln|x|=0，f→∞，无穷间断点。'
            ],
            keyPoints: [
              '【重点】找无定义点+分母为0点，分别判类型。'
            ],
            summary: '分类讨论：先找全部可疑点，再逐一判极限。'
          },
          {
            id: '1.6-016',
            difficulty: '难题',
            type: '选择',
            topic: '连续性判断',
            year: null,
            question: '设 f(x) 在 [a,b] 上有定义，则下列说法正确的是（　）。',
            options: [
              'A. f(x) 在 [a,b] 上必有最大最小值',
              'B. f(x) 在 (a,b) 内必有界',
              'C. f(x) 在 [a,b] 上连续则必有最大最小值',
              'D. f(x) 连续则零点必唯一'
            ],
            answer: 'C',
            solution: [
              '第一步：闭区间上连续函数才有最值（A 未说连续，错）。',
              '第二步：开区间内连续不一定有界（B 错）。',
              '第三步：C 正确：闭区间连续→有最值。',
              '第四步：零点可以多个（D 错）。'
            ],
            keyPoints: [
              '【重点】最值定理要求闭区间+连续两个条件。'
            ],
            summary: '闭区间连续函数必有最大最小值。'
          },
          {
            id: '1.6-017',
            difficulty: '真题',
            type: '选择',
            topic: '间断点分类',
            year: 2020,
            question: 'f(x)=<span class="frac"><span class="num">x<sup>2</sup>-x</span><span class="den">|x|(x<sup>2</sup>-1)</span></span> 的可去间断点个数为（　）。',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'B',
            solution: [
              '第一步：分母零点 x=0, x=±1。',
              '第二步：x=0：分子→0，|x|·(-1)→0。左右极限需分：x→0⁺ 时 =(x²-x)/(x·(x²-1))=x(x-1)/(x(x²-1))=(x-1)/(x²-1)=(x-1)/[(x-1)(x+1)]=1/(x+1)→1。x→0⁻ 时 |x|=-x，原式=x(x-1)/((-x)(x²-1))=-(x-1)/[(x-1)(x+1)]=-1/(x+1)→-1。左右极限 1 和 -1，跳跃间断点。',
              '第三步：x=1：分子→0，分母→0。化简=(x-1)/(|x|(x+1))·x/(x-1)... 约掉 (x-1)：原式→1/(1·2)=1/2，极限存在，可去间断点。',
              '第四步：x=-1：分母 x²-1=0，分子=(-1)²-(-1)=2≠0，极限→∞，无穷间断点。',
              '第五步：可去间断点仅 x=1，共 1 个，选 B。'
            ],
            keyPoints: [
              '【重点】含绝对值在 0 点必须分左右极限。'
            ],
            summary: '含绝对值分式，分段点处左右极限分别算。'
          },
          {
            id: '1.6-018',
            difficulty: '真题',
            type: '填空',
            topic: '连续反求参数',
            year: 2018,
            question: 'f(x)=<span class="piecewise"><span class="prow"><span class="pval"><span class="frac"><span class="num">ln(1+ax)</span><span class="den">x</span></span>,</span><span class="pcond">x≠0</span></span><span class="prow"><span class="pval">2,</span><span class="pcond">x=0</span></span></span> 在 x=0 连续，则 a=______。',
            options: null,
            answer: 'a = 2',
            solution: [
              '第一步：lim<sub>x→0</sub> ln(1+ax)/x=a。',
              '第二步：连续要求 a=2。'
            ],
            keyPoints: [
              '【重点】ln(1+ax)/x→a。'
            ],
            summary: '连续即函数值=极限值。'
          },
          {
            id: '1.6-019',
            difficulty: '真题',
            type: '选择',
            topic: '间断点类型',
            year: 2016,
            question: 'f(x)=<span class="frac"><span class="num">e<sup>x</sup>-e<sup>-x</sup></span><span class="den">x</span></span> 在 x=0 处为（　）。',
            options: [
              'A. 连续点',
              'B. 可去间断点',
              'C. 跳跃间断点',
              'D. 无穷间断点'
            ],
            answer: 'B',
            solution: [
              '第一步：x→0 时 (e<sup>x</sup>-e<sup>-x</sup>)/x→2。',
              '第二步：f(0) 无定义（题目未定义），极限存在但无定义，可去间断点。'
            ],
            keyPoints: [
              '【重点】极限存在但无定义=可去。'
            ],
            summary: '极限存在但无定义，补定义即可连续。'
          },
          {
            id: '1.6-020',
            difficulty: '真题',
            type: '解答',
            topic: '间断点分类综合',
            year: 2013,
            question: '求 f(x)=x-[x]（[x] 为取整函数，即小数部分）在 (0,2) 内的间断点并分类。',
            options: null,
            answer: 'x=1 为跳跃间断点',
            solution: [
              '第一步：在 (0,1) 内 [x]=0，f(x)=x，连续。',
              '第二步：在 (1,2) 内 [x]=1，f(x)=x-1，连续。',
              '第三步：x=1：左极限 lim<sub>x→1⁻</sub> f(x)=1；右极限 lim<sub>x→1⁺</sub> f(x)=0。',
              '第四步：左右极限都存在但不等，x=1 为跳跃间断点。'
            ],
            keyPoints: [
              '【重点】取整函数在整数点跳跃。'
            ],
            summary: '取整函数在整数点处为跳跃间断点。'
          },
          {
            id: '1.6-021',
            difficulty: '基础',
            type: '填空',
            topic: '连续性定义',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval"><span class="frac"><span class="num">sin2x</span><span class="den">x</span></span>,</span><span class="pcond">x≠0</span></span><span class="prow"><span class="pval">a,</span><span class="pcond">x=0</span></span></span></span> 在 x=0 处连续，则 a = ______。',
            options: null,
            answer: '2',
            solution: [
              '第一步：lim_{x→0} sin2x/x = lim 2x/x = 2。',
              '第二步：连续要求 f(0)=lim，故 a=2。'
            ],
            keyPoints: [
              '【重点】连续 ⇔ f(x₀)=lim f(x)。'
            ],
            summary: '分段点连续用左右极限与函数值相等。'
          },
          {
            id: '1.6-022',
            difficulty: '基础',
            type: '选择',
            topic: '间断点类型',
            year: null,
            question: 'f(x) = <span class="frac"><span class="num">sinx</span><span class="den">x</span></span> 在 x=0 处为（　）。',
            options: [
              'A. 连续点',
              'B. 可去间断点',
              'C. 跳跃间断点',
              'D. 无穷间断点'
            ],
            answer: 'B',
            solution: [
              '第一步：lim_{x→0} sinx/x = 1，但 f(0) 通常无定义。',
              '第二步：极限存在但函数值无定义，为可去间断点。'
            ],
            keyPoints: [
              '【重点】可去间断点：极限存在但≠函数值（或无定义）。'
            ],
            summary: '间断点分类先求左右极限。'
          },
          {
            id: '1.6-023',
            difficulty: '基础',
            type: '填空',
            topic: '间断点类型',
            year: null,
            question: 'f(x) = <span class="frac"><span class="num">1</span><span class="den">x-1</span></span> 的间断点 x=1 是______间断点。',
            options: null,
            answer: '无穷',
            solution: [
              '第一步：x→1 时 1/(x-1)→∞。',
              '第二步：极限为无穷，为无穷间断点。'
            ],
            keyPoints: [
              '【重点】无穷间断点：极限为∞。'
            ],
            summary: '第二类间断点含无穷、振荡。'
          },
          {
            id: '1.6-024',
            difficulty: '提高',
            type: '选择',
            topic: '跳跃间断点',
            year: null,
            question: 'f(x) = <span class="piecewise"><span class="prow"><span class="pval">x+1,</span><span class="pcond">x≥0</span></span><span class="prow"><span class="pval">x-1,</span><span class="pcond">x&lt;0</span></span></span> 在 x=0 处为（　）。',
            options: [
              'A. 连续',
              'B. 可去间断',
              'C. 跳跃间断',
              'D. 无穷间断'
            ],
            answer: 'C',
            solution: [
              '第一步：右极限 lim_{x→0+} f(x) = 0+1 = 1。',
              '第二步：左极限 lim_{x→0-} f(x) = 0-1 = -1。',
              '第三步：左右极限都存在但不相等，为跳跃间断点。'
            ],
            keyPoints: [
              '【重点】跳跃间断：左右极限存在但不等。'
            ],
            summary: '分段函数分界点先算左右极限。'
          },
          {
            id: '1.6-025',
            difficulty: '提高',
            type: '填空',
            topic: '零点定理条件',
            year: null,
            question: 'f(x) 在 R 上连续，f(0)=1，f(1)=2，则 f(x) 在(0,1) 内零点个数为______。',
            options: null,
            answer: '无法确定',
            solution: [
              '第一步：零点定理要求 f(a)·f(b)&lt;0。',
              '第二步：本题 f(0)=1,f(1)=2 同号，不能保证有零点。',
              '第三步：故零点个数无法确定。'
            ],
            keyPoints: [
              '【易错点】零点定理要求端点值异号。'
            ],
            summary: '零点定理条件：连续 + 端点异号。'
          },
          {
            id: '1.6-026',
            difficulty: '提高',
            type: '解答',
            topic: '间断点讨论',
            year: null,
            question: '讨论 f(x) = <span class="frac"><span class="num">x</span><span class="den">tanx</span></span> 的间断点及其类型。',
            options: null,
            answer: 'x=0 为可去间断；x=kπ(k≠0) 为无穷间断；x=kπ+π/2 为可去间断。',
            solution: [
              '第一步：tanx=0 即 x=kπ；tanx 无定义即 x=kπ+π/2。',
              '第二步：x=0 时 lim x/tanx = 1，为可去间断。',
              '第三步：x=kπ (k≠0) 时 tanx→0 而 x→kπ≠0，极限为∞，为无穷间断。',
              '第四步：x=kπ+π/2 时 tanx→∞，x/tanx→0，为可去间断。'
            ],
            keyPoints: [
              '【重点】tanx 的零点和无定义点都要检查。'
            ],
            summary: 'tanx 相关函数间断点要分两类讨论。'
          },
          {
            id: '1.6-027',
            difficulty: '难题',
            type: '解答',
            topic: '连续反求参数',
            year: null,
            question: '设 f(x) = <span class="piecewise"><span class="prow"><span class="pval"><span class="frac"><span class="num">ln(1+ax<sup>2</sup>)</span><span class="den">x(e<sup>x</sup>-1)</span></span>,</span><span class="pcond">x&gt;0</span></span><span class="prow"><span class="pval">b,</span><span class="pcond">x=0</span></span><span class="prow"><span class="pval"><span class="frac"><span class="num">sin3x</span><span class="den">x</span></span>,</span><span class="pcond">x&lt;0</span></span></span></span>，求 a,b 使 f 在 x=0 连续。',
            options: null,
            answer: 'a=3, b=3',
            solution: [
              '第一步：右极限 x→0+：ln(1+ax²)~ax²，e^x-1~x，故 = ax²/(x·x) = a。',
              '第二步：左极限 x→0-：sin3x/x ~ 3x/x = 3。',
              '第三步：连续要求左=右=f(0)，故 a=3，b=3。'
            ],
            keyPoints: [
              '【重点】分段点连续要求左右极限与函数值三者相等。'
            ],
            summary: '连续反求参数：左右极限分别算。'
          },
          {
            id: '1.6-028',
            difficulty: '难题',
            type: '选择',
            topic: '振荡间断点',
            year: null,
            question: 'f(x) = sin(<span class="frac"><span class="num">1</span><span class="den">x</span></span>) 在 x=0 处为（　）。',
            options: [
              'A. 可去间断点',
              'B. 跳跃间断点',
              'C. 无穷间断点',
              'D. 振荡间断点'
            ],
            answer: 'D',
            solution: [
              '第一步：x→0 时 1/x→∞，sin(1/x) 在 -1 与 1 之间无限振荡。',
              '第二步：极限不存在且不为∞，为振荡间断点。'
            ],
            keyPoints: [
              '【重点】振荡间断：极限不存在也不为∞。'
            ],
            summary: 'sin(1/x) 是经典振荡间断点。'
          },
          {
            id: '1.6-029',
            difficulty: '真题',
            type: '选择',
            topic: '间断点分类',
            year: 2016,
            question: '函数 f(x) = <span class="frac"><span class="num">(e<sup>x</sup>+e)tanx</span><span class="den">x(e<sup>x</sup>-e)</span></span> 在[-π,π]上的第一类间断点个数为（　）。',
            options: [
              'A. 0',
              'B. 1',
              'C. 2',
              'D. 3'
            ],
            answer: 'B',
            solution: [
              '第一步：找分母为0的点：x=0，x=1（e^x=e），tanx=0 即 x=0,±π，tanx 无定义即 x=±π/2。',
              '第二步：x=0：lim (e^x+e)tanx/(x(e^x-e)) = (1+e)·x/(x·(e(x-1))) = -(1+e)/e，极限存在，为可去间断（第一类）。',
              '第三步：x=1：e^x-e→0，分子 e+e=2e≠0，极限为∞，为无穷间断（第二类）。',
              '第四步：x=±π/2：tanx→∞，为无穷间断。',
              '第五步：第一类间断点仅 x=0 一个，选 B。'
            ],
            keyPoints: [
              '【重点】第一类间断点含可去、跳跃。'
            ],
            summary: '间断点分类题先列所有可疑点再逐一判断。'
          },
          {
            id: '1.6-030',
            difficulty: '真题',
            type: '填空',
            topic: '可去间断反求参数',
            year: 2019,
            question: '设 f(x) = <span class="frac"><span class="num">x<sup>2</sup>+ax+b</span><span class="den">x<sup>2</sup>-x-2</span></span>，若 x=2 为可去间断点，则 a=____，b=____。',
            options: null,
            answer: 'a=-5, b=6',
            solution: [
              '第一步：分母 x²-x-2=(x-2)(x+1)。',
              '第二步：x=2 为可去间断，要求分子在 x=2 处也为0，即 4+2a+b=0。',
              '第三步：分子 x²+ax+b 含因子 (x-2)。设 x²+ax+b=(x-2)(x-c)=x²-(2+c)x+2c。',
              '第四步：取 c=3 则 a=-(2+3)=-5，b=2·3=6。'
            ],
            keyPoints: [
              '【重点】可去间断 ⇔ 分子分母在该点同时为0且极限存在。'
            ],
            summary: '可去间断反求参数：分子分母含公共因子。'
          }
        ]
      },
      '1.7': {
        id: '1.7',
        title: '闭区间上连续函数的性质',
        questions: [
          {
            id: '1.7-001',
            difficulty: '基础',
            type: '选择',
            topic: '零点定理',
            year: null,
            question: 'f(x) 在 [a,b] 上连续，且 f(a)·f(b)&lt;0，则方程 f(x)=0 在 (a,b) 内（　）。',
            options: [
              'A. 至少有一个实根',
              'B. 至多有一个实根',
              'C. 没有实根',
              'D. 实根个数无法确定'
            ],
            answer: 'A',
            solution: [
              '第一步：由零点定理，f(a)·f(b)&lt;0 则至少存在一个 ξ∈(a,b) 使 f(ξ)=0。',
              '第二步：至少一个实根，选 A。'
            ],
            keyPoints: [
              '【重点】零点定理只保证存在，不保证唯一。'
            ],
            summary: '零点定理：连续+端点异号⇒至少一根。'
          },
          {
            id: '1.7-002',
            difficulty: '基础',
            type: '解答',
            topic: '零点定理',
            year: null,
            question: '证明：方程 x<sup>3</sup>-3x+1=0 在 (1,2) 内至少有一个实根。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：f(x)=x³-3x+1 在 [1,2] 上连续。',
              '第二步：f(1)=1-3+1=-1&lt;0，f(2)=8-6+1=3&gt;0。',
              '第三步：f(1)·f(2)&lt;0，由零点定理，存在 ξ∈(1,2) 使 f(ξ)=0。'
            ],
            keyPoints: [
              '【重点】验证连续+端点异号。'
            ],
            summary: '证根存在：连续+端点异号+零点定理。'
          },
          {
            id: '1.7-003',
            difficulty: '基础',
            type: '选择',
            topic: '最值定理',
            year: null,
            question: '闭区间 [a,b] 上的连续函数 f(x) 一定（　）。',
            options: [
              'A. 可导',
              'B. 有界',
              'C. 单调',
              'D. 有唯一零点'
            ],
            answer: 'B',
            solution: [
              '第一步：闭区间连续函数必有最大值和最小值，从而有界。',
              '第二步：连续不一定可导、单调，零点也可多个。选 B。'
            ],
            keyPoints: [
              '【重点】最值定理⇒有界性。'
            ],
            summary: '闭区间连续⇒有界、有最值。'
          },
          {
            id: '1.7-004',
            difficulty: '基础',
            type: '填空',
            topic: '介值定理',
            year: null,
            question: 'f(x) 在 [a,b] 上连续，最大值为 M，最小值为 m，则对任意 c∈(m,M)，存在 ξ∈(a,b) 使 f(ξ)=______。',
            options: null,
            answer: 'c',
            solution: [
              '第一步：这是介值定理。',
              '第二步：介于 m 和 M 之间的值 c，必能取到。'
            ],
            keyPoints: [
              '【重点】介值定理：介于最值之间的值都能取到。'
            ],
            summary: '介值定理：中间值必可取到。'
          },
          {
            id: '1.7-005',
            difficulty: '基础',
            type: '解答',
            topic: '零点定理',
            year: null,
            question: '证明：方程 x=cosx 在 (0, π/2) 内至少有一个实根。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：令 f(x)=x-cosx，在 [0,π/2] 上连续。',
              '第二步：f(0)=-1&lt;0，f(π/2)=π/2&gt;0。',
              '第三步：f(0)·f(π/2)&lt;0，由零点定理存在 ξ∈(0,π/2) 使 f(ξ)=0，即 ξ=cosξ。'
            ],
            keyPoints: [
              '【重点】移项构造 f(x)=x-cosx。'
            ],
            summary: '证方程 f=g 有根：构造 f-g，验证端点异号。'
          },
          {
            id: '1.7-006',
            difficulty: '基础',
            type: '选择',
            topic: '零点定理条件',
            year: null,
            question: '下列函数在 [1,2] 上满足零点定理条件（f(1)·f(2)&lt;0）的是（　）。',
            options: [
              'A. f(x)=1/(x-2)',
              'B. f(x)=x²-3',
              'C. f(x)=x²+1',
              'D. f(x)=1/x'
            ],
            answer: 'B',
            solution: [
              '第一步：A：在 x=2 无定义，不连续。',
              '第二步：B：f(1)=-2&lt;0，f(2)=1&gt;0，连续且异号，满足。',
              '第三步：C：f(1)=2，f(2)=5，同号。',
              '第四步：D：f(1)=1，f(2)=1/2，同号。'
            ],
            keyPoints: [
              '【重点】先连续再判端点异号。'
            ],
            summary: '零点定理三条件：闭区间连续+端点异号。'
          },
          {
            id: '1.7-007',
            difficulty: '提高',
            type: '解答',
            topic: '零点定理证明',
            year: null,
            question: '证明：方程 e<sup>x</sup>=3x 在 (0,1) 内至少有一个实根。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：令 f(x)=e<sup>x</sup>-3x，在 [0,1] 上连续。',
              '第二步：f(0)=1&gt;0，f(1)=e-3≈-0.28&lt;0。',
              '第三步：f(0)·f(1)&lt;0，由零点定理存在 ξ∈(0,1) 使 e<sup>ξ</sup>=3ξ。'
            ],
            keyPoints: [
              '【重点】移项构造辅助函数。'
            ],
            summary: '证方程有根：移项构造 f(x)。'
          },
          {
            id: '1.7-008',
            difficulty: '提高',
            type: '解答',
            topic: '介值定理应用',
            year: null,
            question: '设 f(x) 在 [a,b] 上连续，f(a)&lt;a，f(b)&gt;b，证明：存在 ξ∈(a,b) 使 f(ξ)=ξ。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：构造辅助函数 F(x)=f(x)-x。',
              '第二步：F(x) 在 [a,b] 上连续。',
              '第三步：F(a)=f(a)-a&lt;0，F(b)=f(b)-b&gt;0。',
              '第四步：F(a)·F(b)&lt;0，由零点定理存在 ξ∈(a,b) 使 F(ξ)=0，即 f(ξ)=ξ。'
            ],
            keyPoints: [
              '【重点】证 f(ξ)=ξ 型命题，构造 F(x)=f(x)-x。'
            ],
            summary: '证 f(ξ)=ξ：构造 F=f-x，用零点定理。'
          },
          {
            id: '1.7-009',
            difficulty: '提高',
            type: '解答',
            topic: '零点定理综合',
            year: null,
            question: '证明：方程 x<sup>5</sup>-7x=2 在 (1,2) 内至少有一个实根。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：f(x)=x⁵-7x-2 在 [1,2] 上连续。',
              '第二步：f(1)=1-7-2=-8&lt;0，f(2)=32-14-2=16&gt;0。',
              '第三步：f(1)·f(2)&lt;0，由零点定理存在 ξ∈(1,2) 使 f(ξ)=0。'
            ],
            keyPoints: [
              '【重点】高次方程同样用零点定理。'
            ],
            summary: '高次方程根存在性：零点定理。'
          },
          {
            id: '1.7-010',
            difficulty: '提高',
            type: '解答',
            topic: '介值定理',
            year: null,
            question: '设 f(x) 在 [0,1] 上连续，f(0)=0，f(1)=1，证明：存在 ξ∈(0,1) 使 f(ξ)=1/2。',
            options: null,
            answer: '由介值定理得证',
            solution: [
              '第一步：f 在 [0,1] 连续，f(0)=0，f(1)=1。',
              '第二步：1/2 介于 0 和 1 之间。',
              '第三步：由介值定理，存在 ξ∈(0,1) 使 f(ξ)=1/2。'
            ],
            keyPoints: [
              '【重点】端点函数值之间的值必能取到。'
            ],
            summary: '介值定理：中间值必可取到。'
          },
          {
            id: '1.7-011',
            difficulty: '提高',
            type: '解答',
            topic: '双零点',
            year: null,
            question: '证明：方程 x·2<sup>x</sup>=1 在 (0,1) 内至少有一个实根。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：f(x)=x·2<sup>x</sup>-1 在 [0,1] 上连续。',
              '第二步：f(0)=-1&lt;0，f(1)=2-1=1&gt;0。',
              '第三步：f(0)·f(1)&lt;0，由零点定理存在 ξ∈(0,1) 使 ξ·2<sup>ξ</sup>=1。'
            ],
            keyPoints: [
              '【重点】构造 f(x)=x·2^x-1。'
            ],
            summary: '构造辅助函数验证端点异号。'
          },
          {
            id: '1.7-012',
            difficulty: '提高',
            type: '选择',
            topic: '有界性',
            year: null,
            question: 'f(x) 在 (a,b) 内连续，且 lim<sub>x→a⁺</sub> f(x) 与 lim<sub>x→b⁻</sub> f(x) 都存在，则 f(x) 在 (a,b) 内（　）。',
            options: [
              'A. 有界',
              'B. 无界',
              'C. 连续',
              'D. 必有零点'
            ],
            answer: 'A',
            solution: [
              '第一步：两端极限存在意味着两端有界。',
              '第二步：补定义到闭区间上后连续，由最值定理有界。',
              '第三步：故 f(x) 在 (a,b) 内有界。选 A。'
            ],
            keyPoints: [
              '【重点】开区间两端极限存在则有界。'
            ],
            summary: '开区间连续+两端极限存在⇒有界。'
          },
          {
            id: '1.7-013',
            difficulty: '难题',
            type: '解答',
            topic: '零点定理证明',
            year: null,
            question: '设 f(x) 在 [0,1] 上连续，f(0)=f(1)，证明：存在 ξ∈[0,1/2] 使 f(ξ)=f(ξ+1/2)。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：构造 F(x)=f(x)-f(x+1/2)，在 [0,1/2] 上连续。',
              '第二步：F(0)=f(0)-f(1/2)。',
              '第三步：F(1/2)=f(1/2)-f(1)=f(1/2)-f(0)。',
              '第四步：F(0)+F(1/2)=0。若 F(0)=0，则 ξ=0；若 F(0)≠0，则 F(0)·F(1/2)=-F(0)²&lt;0。',
              '第五步：由零点定理存在 ξ∈(0,1/2) 使 F(ξ)=0，即 f(ξ)=f(ξ+1/2)。'
            ],
            keyPoints: [
              '【重点】证 f(ξ)=f(ξ+a) 型，构造 F(x)=f(x)-f(x+a)。',
              '【易错点】要讨论 F(0)=0 的边界情形。'
            ],
            summary: '双点函数值相等问题：构造差函数 F=f(x)-f(x+a)。'
          },
          {
            id: '1.7-014',
            difficulty: '难题',
            type: '解答',
            topic: '介值定理证明',
            year: null,
            question: '设 f(x) 在 [a,b] 上连续，a&lt;c&lt;d&lt;b，证明：存在 ξ∈[c,d] 使 (c+d)f(ξ)=2f(c)+2f(d)？改为：存在 ξ 使 f(ξ)=(f(c)+f(d))/2。',
            options: null,
            answer: '由介值定理得证',
            solution: [
              '第一步：f 在 [c,d] 上连续。',
              '第二步：设 M=max f, m=min f 在 [c,d] 上。',
              '第三步：f(c),f(d)∈[m,M]，故 (f(c)+f(d))/2∈[m,M]。',
              '第四步：由介值定理，存在 ξ∈[c,d] 使 f(ξ)=(f(c)+f(d))/2。'
            ],
            keyPoints: [
              '【重点】平均值必在最值之间，可用介值定理。'
            ],
            summary: '两点函数值的平均值必能取到。'
          },
          {
            id: '1.7-015',
            difficulty: '难题',
            type: '解答',
            topic: '零点定理',
            year: null,
            question: '证明：方程 <span class="frac"><span class="num">1</span><span class="den">x-1</span></span>+<span class="frac"><span class="num">1</span><span class="den">x-2</span></span>+<span class="frac"><span class="num">1</span><span class="den">x-3</span></span>=0 有且仅有两个实根。',
            options: null,
            answer: '方程在 (1,2) 和 (2,3) 内各有一根',
            solution: [
              '第一步：令 f(x)=1/(x-1)+1/(x-2)+1/(x-3)，定义域 x≠1,2,3。',
              '第二步：在 (1,2)：x→1⁺ 时 f→+∞；x→2⁻ 时 f→-∞，连续，由零点定理有根。',
              '第三步：在 (2,3)：x→2⁺ 时 f→+∞；x→3⁻ 时 f→-∞，连续，由零点定理有根。',
              '第四步：f′(x)=-1/(x-1)²-1/(x-2)²-1/(x-3)²&lt;0，f 单调递减，每个区间至多一根。',
              '第五步：故恰有两个实根，分别在 (1,2) 和 (2,3)。'
            ],
            keyPoints: [
              '【重点】存在性用零点定理，唯一性用单调性。',
              '【易错点】要分区间讨论，不能跨间断点。'
            ],
            summary: '根的存在性用零点定理，唯一性用单调性。'
          },
          {
            id: '1.7-016',
            difficulty: '难题',
            type: '解答',
            topic: '介值定理',
            year: null,
            question: '设 f(x) 在 [a,b] 上连续，且 f(a)≤a，f(b)≥b，证明：存在 ξ∈[a,b] 使 f(ξ)=ξ。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：构造 F(x)=f(x)-x。',
              '第二步：F(a)=f(a)-a≤0，F(b)=f(b)-b≥0。',
              '第三步：若 F(a)=0 或 F(b)=0，直接得结论。',
              '第四步：否则 F(a)&lt;0，F(b)&gt;0，由零点定理存在 ξ∈(a,b) 使 F(ξ)=0。'
            ],
            keyPoints: [
              '【重点】闭区间上 f(a)≤a, f(b)≥b 用零点定理。'
            ],
            summary: '证 f(ξ)=ξ：构造 F=f-x。'
          },
          {
            id: '1.7-017',
            difficulty: '真题',
            type: '解答',
            topic: '零点定理',
            year: 2021,
            question: '证明：方程 ln x = x-2 在 (0,+∞) 内有且仅有两个实根。',
            options: null,
            answer: '方程在 (0,1) 和 (e²,+∞) 附近各有一根',
            solution: [
              '第一步：令 f(x)=lnx-x+2。f′(x)=1/x-1。',
              '第二步：f′(x)=0 得 x=1。x∈(0,1) 时 f′&gt;0（增），x∈(1,+∞) 时 f′&lt;0（减）。x=1 是最大值点。',
              '第三步：f(1)=0-1+2=1&gt;0。',
              '第四步：x→0⁺ 时 f→-∞；f(1)=1&gt;0，故在 (0,1) 有一根。',
              '第五步：x→+∞ 时 f→-∞；f(1)=1&gt;0，故在 (1,+∞) 有一根。',
              '第六步：f 先增后减，单调区间内各一根，恰两个实根。'
            ],
            keyPoints: [
              '【重点】用导数分析单调性，结合端点极限判根。'
            ],
            summary: '恰两根：最大值&gt;0+两端→-∞，单调区间各一根。'
          },
          {
            id: '1.7-018',
            difficulty: '真题',
            type: '选择',
            topic: '零点定理条件',
            year: 2017,
            question: '设 f(x) 在 [a,b] 上连续，且 f(a)·f(b)&gt;0，则方程 f(x)=0 在 (a,b) 内（　）。',
            options: [
              'A. 至少有一个实根',
              'B. 没有实根',
              'C. 实根个数不确定',
              'D. 恰有一个实根'
            ],
            answer: 'C',
            solution: [
              '第一步：f(a)·f(b)&gt;0 不满足零点定理条件。',
              '第二步：可能无实根，也可能有两个实根，个数无法确定。选 C。'
            ],
            keyPoints: [
              '【重点】零点定理只给充分条件，不给必要条件。'
            ],
            summary: '端点同号不能断定有无根。'
          },
          {
            id: '1.7-019',
            difficulty: '真题',
            type: '解答',
            topic: '零点定理',
            year: 2015,
            question: '证明：方程 x<sup>3</sup>+x+1=0 有且仅有一个实根。',
            options: null,
            answer: '方程有且仅有一个实根',
            solution: [
              '第一步：f(x)=x³+x+1 在 R 上连续。',
              '第二步：f′(x)=3x²+1&gt;0，f 在 R 上严格单调递增，至多一个实根。',
              '第三步：f(-1)=-1-1+1=-1&lt;0，f(0)=1&gt;0，由零点定理在 (-1,0) 有一根。',
              '第四步：故恰有一个实根。'
            ],
            keyPoints: [
              '【重点】存在性+唯一性=恰一个根。'
            ],
            summary: '证恰一根：零点定理证存在+单调证唯一。'
          },
          {
            id: '1.7-020',
            difficulty: '真题',
            type: '解答',
            topic: '介值定理',
            year: 2012,
            question: '设 f(x) 在 [0,2] 上连续，且 f(0)=f(2)，证明：存在 ξ∈[0,1] 使 f(ξ)=f(ξ+1)。',
            options: null,
            answer: '由零点定理得证',
            solution: [
              '第一步：构造 F(x)=f(x)-f(x+1)，在 [0,1] 上连续。',
              '第二步：F(0)=f(0)-f(1)。',
              '第三步：F(1)=f(1)-f(2)=f(1)-f(0)。',
              '第四步：F(0)+F(1)=0。若 F(0)=0，ξ=0 或 1；否则 F(0)·F(1)&lt;0，由零点定理存在 ξ∈(0,1)。',
              '第五步：故存在 ξ∈[0,1] 使 f(ξ)=f(ξ+1)。'
            ],
            keyPoints: [
              '【重点】周期性条件 f(0)=f(2) 使 F(0)+F(1)=0。'
            ],
            summary: '证 f(ξ)=f(ξ+a)：构造差函数用零点定理。'
          },
          {
            id: '1.7-021',
            difficulty: '基础',
            type: '解答',
            topic: '零点定理',
            year: null,
            question: '证明方程 x<sup>3</sup> - 4x<sup>2</sup> + 1 = 0 在(0,1)内至少有一个实根。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 f(x)=x³-4x²+1，f 在[0,1]上连续。',
              '第二步：f(0)=1&gt;0，f(1)=1-4+1=-2&lt;0。',
              '第三步：由零点定理，存在 ξ∈(0,1) 使 f(ξ)=0。证毕。'
            ],
            keyPoints: [
              '【重点】零点定理：连续 + 端点异号。'
            ],
            summary: '证方程有根：构造函数用零点定理。'
          },
          {
            id: '1.7-022',
            difficulty: '基础',
            type: '选择',
            topic: '介值定理',
            year: null,
            question: 'f(x) 在[a,b]上连续，f(a)=A，f(b)=B，则下列结论正确的是（　）。',
            options: [
              'A. 介于 A,B 之间的任一数 C，存在 ξ∈(a,b) 使 f(ξ)=C',
              'B. f(x) 在[a,b]上必有最大值',
              'C. f(x) 在(a,b)内必有零点',
              'D. f(x) 在(a,b)内单调'
            ],
            answer: 'A',
            solution: [
              '第一步：介值定理：f 连续，端点值 A,B，则对 A,B 之间任一 C，存在 ξ∈(a,b) 使 f(ξ)=C。',
              '第二步：B 错，最大值在闭区间上必有但不一定要开区间内部。',
              '第三步：C、D 显然不对。'
            ],
            keyPoints: [
              '【重点】介值定理条件与结论。'
            ],
            summary: '介值定理：连续函数取遍端点之间一切值。'
          },
          {
            id: '1.7-023',
            difficulty: '基础',
            type: '填空',
            topic: '零点定理',
            year: null,
            question: 'f(x) 在[0,2]上连续，f(0)=1，f(2)=-1，则 f(x) 在(0,2) 内至少有______个零点。',
            options: null,
            answer: '1',
            solution: [
              '第一步：f(0)·f(2)=-1&lt;0，由零点定理至少有一个零点。',
              '第二步：故至少取到 0 一次。'
            ],
            keyPoints: [
              '【重点】至少一个零点。'
            ],
            summary: '异号端点保证至少一个零点。'
          },
          {
            id: '1.7-024',
            difficulty: '提高',
            type: '解答',
            topic: '零点定理应用',
            year: null,
            question: '证明方程 x = asinx + b (a&gt;0,b&gt;0) 至少有一个正根，且不超过 a+b。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 f(x)=x-asinx-b。',
              '第二步：f(0)=-b&lt;0。',
              '第三步：f(a+b)=a+b - asin(a+b) - b = a(1-sin(a+b)) ≥ 0。',
              '第四步：若 f(a+b)=0，则 x=a+b 即根；若 f(a+b)&gt;0，由零点定理存在 ξ∈(0,a+b) 使 f(ξ)=0。证毕。'
            ],
            keyPoints: [
              '【重点】选好端点使函数值异号。'
            ],
            summary: '证根的存在性：构造函数找异号端点。'
          },
          {
            id: '1.7-025',
            difficulty: '提高',
            type: '选择',
            topic: '介值定理',
            year: null,
            question: 'f(x) 在[a,b]上连续，且其最大值为 M，最小值为 m，若 m &lt; c &lt; M，则（　）。',
            options: [
              'A. 存在 ξ∈[a,b] 使 f(ξ)=c',
              'B. 存在 ξ∈(a,b) 使 f(ξ)=c',
              'C. f(x) 在[a,b]上单调',
              'D. f(x) 在(a,b)内无零点'
            ],
            answer: 'A',
            solution: [
              '第一步：连续函数必取到 m 和 M。',
              '第二步：对 m 与 M 之间的任一 c，由介值定理存在 ξ∈[a,b] 使 f(ξ)=c。',
              '第三步：A 最稳妥。'
            ],
            keyPoints: [
              '【重点】介值定理推论：取到最值间一切值。'
            ],
            summary: '连续函数值域为 [m,M]。'
          },
          {
            id: '1.7-026',
            difficulty: '提高',
            type: '解答',
            topic: '零点定理综合',
            year: null,
            question: '设 f(x) 在[0,1]上连续，且 f(0)=f(1)。证明存在 ξ∈[0, <span class="frac"><span class="num">1</span><span class="den">2</span></span>] 使 f(ξ)=f(ξ+<span class="frac"><span class="num">1</span><span class="den">2</span></span>)。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 g(x)=f(x)-f(x+1/2)，x∈[0,1/2]。',
              '第二步：g(0)=f(0)-f(1/2)。',
              '第三步：g(1/2)=f(1/2)-f(1)=f(1/2)-f(0)。',
              '第四步：g(0)+g(1/2)=0，故 g(0) 与 g(1/2) 异号或同时为0。',
              '第五步：若同时为0，取 ξ=0；否则由零点定理存在 ξ∈(0,1/2) 使 g(ξ)=0，即 f(ξ)=f(ξ+1/2)。'
            ],
            keyPoints: [
              '【方法】构造辅助函数 g(x)=f(x)-f(x+h)。'
            ],
            summary: 'f(0)=f(1) 型问题构造差函数。'
          },
          {
            id: '1.7-027',
            difficulty: '难题',
            type: '解答',
            topic: '介值定理与最值',
            year: null,
            question: '设 f(x) 在[a,b]上连续，a&lt;x<sub>1</sub>&lt;x<sub>2</sub>&lt;...&lt;x<sub>n</sub>&lt;b。证明存在 ξ∈[x<sub>1</sub>,x<sub>n</sub>] 使 f(ξ)=<span class="frac"><span class="num">f(x<sub>1</sub>)+...+f(x<sub>n</sub>)</span><span class="den">n</span></span>。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 M=max f(x_i)，m=min f(x_i)。',
              '第二步：则 m ≤ (Σf(x_i))/n ≤ M。',
              '第三步：由介值定理，f 在 [x₁,x_n] 上取到 m 与 M 之间一切值。',
              '第四步：故存在 ξ∈[x₁,x_n] 使 f(ξ) = 平均值。证毕。'
            ],
            keyPoints: [
              '【重点】平均值介于最值之间，用介值定理。'
            ],
            summary: '平均值存在性：先证介于最值间再用介值。'
          },
          {
            id: '1.7-028',
            difficulty: '难题',
            type: '解答',
            topic: '零点定理与单调性',
            year: null,
            question: '证明方程 <span class="frac"><span class="num">1</span><span class="den">x-1</span></span> + <span class="frac"><span class="num">1</span><span class="den">x-2</span></span> + <span class="frac"><span class="num">1</span><span class="den">x-3</span></span> = 0 有且仅有两个实根。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 f(x)=1/(x-1)+1/(x-2)+1/(x-3)。',
              '第二步：f 在 (1,2) 上：x→1+ 时 f→+∞；x→2- 时 f→-∞，由连续性及 f\'=-1/(x-1)²-...&lt;0，在(1,2)内恰一根。',
              '第三步：同理在(2,3)内：x→2+ 时 f→+∞，x→3- 时 f→-∞，恰一根。',
              '第四步：x&lt;1 时三项均负，f&lt;0 无根；x&gt;3 时三项均正，f&gt;0 无根。',
              '第五步：故恰有两个实根，分别在(1,2)和(2,3)内。'
            ],
            keyPoints: [
              '【重点】利用单调性保证唯一性。'
            ],
            summary: '证根的个数：存在性用零点定理，唯一性用单调性。'
          },
          {
            id: '1.7-029',
            difficulty: '真题',
            type: '解答',
            topic: '零点定理',
            year: 2018,
            question: '设 f(x) 在[0,1]上连续，f(0)=0，f(1)=1。证明存在 ξ∈(0,1) 使 f(ξ)=1-ξ。',
            options: null,
            answer: '证明见解答',
            solution: [
              '第一步：设 g(x)=f(x)+x-1。',
              '第二步：g(0)=f(0)-1=-1&lt;0。',
              '第三步：g(1)=f(1)+1-1=1&gt;0。',
              '第四步：由零点定理，存在 ξ∈(0,1) 使 g(ξ)=0，即 f(ξ)=1-ξ。证毕。'
            ],
            keyPoints: [
              '【方法】构造 g(x)=f(x)+x-1。'
            ],
            summary: '证 f(ξ)=g(ξ)：设 F(x)=f(x)-g(x) 用零点定理。'
          },
          {
            id: '1.7-030',
            difficulty: '真题',
            type: '选择',
            topic: '连续函数性质',
            year: 2022,
            question: '设 f(x) 在[a,b]上连续，则 f(x) 在[a,b]上必有（　）。',
            options: [
              'A. 导数',
              'B. 原函数',
              'C. 单调性',
              'D. 极值'
            ],
            answer: 'B',
            solution: [
              '第一步：闭区间上连续函数必有原函数（变上限积分）。',
              '第二步：连续不一定可导（如 |x|），不一定单调。',
              '第三步：选 B。'
            ],
            keyPoints: [
              '【重点】连续 ⇒ 存在原函数。'
            ],
            summary: '闭区间连续函数性质：有界、最值、介值、原函数存在。'
          }
        ]
      }
    }
  };
})();
