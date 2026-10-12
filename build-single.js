// 单文件构建脚本：将所有CSS/JS/数据内联到 index-single.html
// 用法: node build-single.js
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const indexPath = path.join(BASE, 'index.html');
const cssPath = path.join(BASE, 'css', 'style.css');
const appJsPath = path.join(BASE, 'js', 'app.js');
const viewsJsPath = path.join(BASE, 'js', 'views.js');
const dataDir = path.join(BASE, 'js', 'data');
const outputPath = path.join(BASE, 'index-single.html');

console.log('开始构建单文件版本...');

// 读取 index.html
let html = fs.readFileSync(indexPath, 'utf8');

// 读取并内联 CSS
const css = fs.readFileSync(cssPath, 'utf8');
html = html.replace(
  /<link rel="stylesheet" href="css\/style\.css">/,
  `<style>\n${css}\n</style>`
);
console.log('  CSS 已内联');

// 读取并内联 app.js
const appJs = fs.readFileSync(appJsPath, 'utf8');
html = html.replace(
  /<script src="js\/app\.js"><\/script>/,
  `<script>\n${appJs}\n</script>`
);
console.log('  app.js 已内联');

// 读取并内联 views.js
const viewsJs = fs.readFileSync(viewsJsPath, 'utf8');
html = html.replace(
  /<script src="js\/views\.js"><\/script>/,
  `<script>\n${viewsJs}\n</script>`
);
console.log('  views.js 已内联');

// 读取并内联所有数据文件
const dataFiles = fs.readdirSync(dataDir)
  .filter(f => f.match(/^ch\d{2}\.js$/))
  .sort();

let dataInline = '';
let totalQuestions = 0;
dataFiles.forEach(f => {
  const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
  dataInline += `\n<!-- ${f} -->\n<script>\n${content}\n</script>\n`;
  // 统计题数
  const matches = content.match(/id:\s*['"]\d+\.\d+-\d+['"]/g);
  if (matches) totalQuestions += matches.length;
});

// 替换数据文件引用块
html = html.replace(
  /<!-- ========== 数据文件.*?-->[\s\S]*?(?=<!-- ========== 应用逻辑)/,
  `<!-- ========== 数据文件（内联） ========== -->\n${dataInline}\n`
);
console.log(`  ${dataFiles.length} 个数据文件已内联（约 ${totalQuestions} 题）`);

// 移除字体CDN引用（单文件版本不依赖外部资源）
// 保留字体link，因为它是可选增强，失败不影响使用

// 写入输出
fs.writeFileSync(outputPath, html, 'utf8');
const sizeKB = Math.round(fs.statSync(outputPath).size / 1024);
console.log(`\n构建完成: index-single.html (${sizeKB} KB, 约 ${totalQuestions} 题)`);
