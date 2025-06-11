exports.handler = async (event) => {
  const path = event.rawUrl || '';
  const idMatch = path.match(/\/share\/([^\/?#]+)/); // 更嚴謹的 path 擷取
  const id = idMatch ? idMatch[1] : 'default';

  // 可擴充：根據 id 回傳不同圖
  const imageMap = {
    'default': 'https://playbaba.tw/images/share_1200x630.png',
  };

  const title = '【國會派對：生存之亂】';
  const description = '在黨意與民意之間，你會怎麼選擇？朝小野大的全新國會正式拉開序幕，快來挑戰，你能活到第幾關？';
  const image = imageMap[id] || imageMap['default'];
  const app_id = '656281544074641';

  const html = `<!DOCTYPE html>
<html lang="zh-Hant" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="UTF-8" />
  <meta property="fb:app_id" content="${app_id}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://playbaba.tw/share/${id}" />
  <meta name="twitter:card" content="summary_large_image" />
  <title>${title}</title>
</head>
<body>
  <p>Redirecting...</p>
  <script>
    window.location.replace("/");
  </script>
</body>
</html>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      // 強制不快取，避免 Facebook 看舊內容
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
    body: html,
  };
};
