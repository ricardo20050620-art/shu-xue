# 题目数据格式规范 (DATA SPEC)

所有章节数据文件必须严格遵循此格式。

## 文件结构

每个章节一个 JS 文件，命名为 `chXX.js`（XX为两位数字，如 ch01.js）。

文件内容模板：

```javascript
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
          // 题目对象数组，按 基础→提高→难题→真题 顺序排列
        ]
      }
    }
  };
})();
```

## 题目对象格式

```javascript
{
  id: '1.1-001',           // 编号：章节号.小节号-三位序号
  difficulty: '基础',        // 基础 | 提高 | 难题 | 真题
  type: '选择',             // 选择 | 填空 | 解答
  topic: '函数的定义域求法',  // 具体考点
  year: null,               // 真题年份(数字)，非真题为 null
  question: '题目正文HTML',  // 支持数学标记HTML
  options: null,            // 选择题选项数组 ['A. ...','B. ...','C. ...','D. ...']，非选择为 null
  answer: '最终答案HTML',    // 简洁的最终答案
  solution: [               // 分步骤解题思路，数组每元素为一个步骤
    '第一步：...',
    '第二步：...'
  ],
  keyPoints: [              // 重点/易错点/简便方法提示
    '【重点】...',
    '【易错点】...',
    '【简便方法】...'
  ],
  summary: '一句话方法总结'   // 归纳本题方法的适用场景
}
```

## 难度分布要求

每小节内按此顺序和比例排列：
- 基础题：约30%（直接套用公式和基本概念）
- 提高题：约30%（需要技巧和多知识点结合）
- 难题：约20%（综合性强、技巧性高）
- 历年真题：约20%（2010-2025年真题，标注年份）

## 题型要求

每个小节必须覆盖：选择题、填空题、解答题（计算/证明/应用）。
重点小节可加入综合题（跨小节知识点融合）。

## 数学标记 HTML 规范

所有数学内容使用以下 HTML 标记，网站 CSS 会自动渲染：

### 上下标
- 上标：`x<sup>2</sup>` → x²
- 下标：`x<sub>0</sub>` → x₀
- 组合：`x<sub>n</sub><sup>2</sup>`

### 分数
```html
<span class="frac"><span class="num">分子</span><span class="den">分母</span></span>
```
例：1/2 → `<span class="frac"><span class="num">1</span><span class="den">2</span></span>`

### 根号
- 平方根：`√(x+1)` 或 `<span class="sqrt">x+1</span>`
- n次根：`ⁿ√(x)`

### 常用符号（直接使用 Unicode）
- 积分：∫  定积分：∫<sub>a</sub><sup>b</sup>
- 求和：∑<sub>i=1</sub><sup>n</sup>
- 极限：lim<sub>x→0</sub>
- 无穷：∞  趋近：→  不等于：≠
- 偏导：∂  德尔塔：Δ  艾普西隆：ε
- 属于：∈  任意：∀  存在：∃
- 矩阵括号：[ ]  行列式：| |

### 矩阵
```html
<span class="matrix">
  <span class="mrow"><span class="mcell">1</span><span class="mcell">2</span></span>
  <span class="mrow"><span class="mcell">3</span><span class="mcell">4</span></span>
</span>
```

### 分段函数
```html
<span class="piecewise">
  <span class="prow"><span class="pval">x,</span><span class="pcond">x≥0</span></span>
  <span class="prow"><span class="pval">-x,</span><span class="pcond">x&lt;0</span></span>
</span>
```

### 注意
- HTML 中 `<` 必须写为 `&lt;`，`>` 写为 `&gt;`（在题目正文中）
- 不要使用 LaTeX 语法（如 $x^2$），全部使用上述 HTML 标记
- 简单分数如 1/2 可直接写，但复杂分数必须用 .frac 类

## 题目编号规则
- 格式：`章节号.小节号-三位序号`
- 例：第1章第3节第15题 → `1.3-015`
- 每小节从 001 开始连续编号

## 质量要求
- 所有题目必须有正确答案和完整解题过程
- 解题思路必须点明核心方法和易错点
- 题目参考张宇1000题、李永乐660题、汤家凤1800题、李林880题等高频题型，合理改编不雷同
- 严格不超纲（不含三重积分、曲线曲面积分、无穷级数、概率论）
- 真题必须是2010-2025年考研数学二的真实真题
