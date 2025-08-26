// main.js
import { Octokit } from "@octokit/rest";

// Генерация случайного факта про котов
function getRandomCatFact() {
  const facts = [
    "Коты спят в среднем 70% своей жизни.",
    "У котов есть более 20 мышц, управляющих ушами.",
    "Коты могут прыгать на высоту в 6 раз выше своего роста.",
    "Первый кот в космосе был отправлен во Франции в 1963 году.",
    "Кошки потеют только через лапы."
  ];
  return facts[Math.floor(Math.random() * facts.length)];
}

// Генерация уникального имени файла
function generateUniqueName() {
  const timestamp = Date.now();
  return `cat_fact_${timestamp}.txt`;
}

// Основная функция
async function pushRandomCatFact(repoOwner, repoName, token) {
  const octokit = new Octokit({ auth: token });

  const fact = getRandomCatFact();
  const fileName = generateUniqueName();

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: repoOwner,
      repo: repoName,
      path: fileName,
      message: `Add random cat fact: ${fact}`,
      content: Buffer.from(fact).toString("base64"),
    });

    console.log(`✅ Загружен факт: "${fact}" → файл: ${fileName}`);
  } catch (err) {
    console.error("❌ Ошибка при пуше факта:", err);
  }
}

// 👉 Укажи свои данные
const repoOwner = "hhermesa";          // твой GitHub username
const repoName = "randomCatFacts";     // твой репозиторий
const token = "YOUR_GITHUB_TOKEN";     // твой GitHub token

pushRandomCatFact(repoOwner, repoName, token);
