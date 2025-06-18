src/data/characters.ts 設定人物角色、問題系列
src/data/characters.ts 設定問題系列
目前上線的是 git branch gh-pages
請點選 https://playbaba.tw 開始遊戲

## 自動化測試結果寫入 Google Sheet

在 Colab 執行 Selenium 測試時，可使用 `scripts/selenium_to_gsheet.py`。此腳本會將測試產生的角色、回答組合、結果文字與圖片檔名寫入指定的 Google Sheet。

1. 於 Colab 上傳 Google Service Account 的 `service_account.json` 憑證檔。
2. 在 `scripts/selenium_to_gsheet.py` 內填入 `SPREADSHEET_ID` 及網址、元素選擇器等設定。
3. 安裝必要套件：
   ```python
   !pip install selenium gspread oauth2client
   ```
4. 執行腳本即可將資料寫入工作表。
5. 腳本會針對每個角色遍歷所有 `3^10` 組答案，將結果文字與圖片檔名逐行寫入 Google Sheet。

