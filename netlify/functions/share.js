exports.handler = async (event) => {
  const path = event.rawUrl || '';
  const idMatch = path.match(/\/share\/(.+)$/);
  const id = idMatch ? idMatch[1] : 'default';

  // 這裡可以根據 id 決定不同的 og:image 等資料
  const imageMap = {
    'default': 'https://playbaba.tw/images/share_1200x630.png',
  };

  const title = '【國會派對：生存之亂】';
  const description = '在黨意與民意之間，你會怎麼選擇？朝小野大的全新國會正式拉開序幕，快來挑戰，你能活到第幾關？';
  const image = imageMap['default'];
  const app_id = '656281544074641'

  const html = `
    <!DOCTYPE html>
    <html lang="zh-Hant">
    <head>
      <meta charset="UTF-8" />
      <meta property="fb:app_id" content="${app_id}" />
      <meta property="og:title" content="${title}" />
      <meta property="og:description" content="${description}" />
      <meta property="og:image" content="${image}" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://playbaba.tw/share/${id}" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta http-equiv="refresh" content="0;url=/" />
      <title>${title}</title>
    </head>
    <body>
      <p>Redirecting...</p>
    </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: html,
  };
};
