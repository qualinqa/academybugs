const fs = require('fs');
const path = require('path');

const resultsDir = path.resolve(__dirname, '../allure-results');
const reportDir = path.resolve(__dirname, '../allure-report');

// Копирование истории из предыдущего отчета в allure-results
const historyDir = path.join(reportDir, 'history');
const resultsHistoryDir = path.join(resultsDir, 'history');

if (fs.existsSync(historyDir)) {
  console.log('Копирование истории в allure-results...');
  if (!fs.existsSync(resultsHistoryDir)) {
    fs.mkdirSync(resultsHistoryDir, { recursive: true });
  }
  fs.readdirSync(historyDir).forEach((file) => {
    fs.copyFileSync(path.join(historyDir, file), path.join(resultsHistoryDir, file));
  });
}

// Генерация отчета с новой историей
console.log('Генерация Allure отчета...');
const { execSync } = require('child_process');
execSync(`npx allure generate ${resultsDir} --clean -o ${reportDir}`, { stdio: 'inherit' });

// Копирование истории обратно в allure-report
if (fs.existsSync(resultsHistoryDir)) {
  console.log('Копирование истории обратно в allure-report...');
  fs.readdirSync(resultsHistoryDir).forEach((file) => {
    fs.copyFileSync(path.join(resultsHistoryDir, file), path.join(historyDir, file));
  });
}

console.log('Allure отчет с историей успешно создан!');
