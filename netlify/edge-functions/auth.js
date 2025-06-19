export default async (request, context) => {
  const authHeader = request.headers.get("authorization");

  const expectedUsername = "betterTaiwan";
  const expectedPassword = "baba19890604baba";

  // 檢查有無授權資訊
  if (authHeader && authHeader.startsWith("Basic ")) {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
    const [username, password] = credentials.split(":");

    if (username === expectedUsername && password === expectedPassword) {
      return context.next(); // 通過驗證，放行
    }
  }

  // 沒通過驗證
  return new Response("認證失敗", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected Area"',
    },
  });
};
