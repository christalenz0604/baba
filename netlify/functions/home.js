exports.handler = async (event) => {
  const html = `<!DOCTYPE html>
<html lang="zh-Hant" prefix="og: https://ogp.me/ns#">
<head>
  <meta charset="UTF-8" />
  <meta property="fb:app_id" content="656281544074641" />
  <meta property="og:title" content="【國會派對：生存之亂】" />
  <meta property="og:description" content="在黨意與民意之間，你會怎麼選擇？朝小野大的全新國會正式拉開序幕，快來挑戰，你能活到第幾關？" />
  <meta property="og:image" content="https://playbaba.tw/images/share_1200x630.png" />
  <meta property="og:url" content="https://playbaba.tw/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <script>
    window.location.replace("/");
  </script>
  <title>國會派對</title>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>`;
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache',
    },
    body: html,
  };
};
