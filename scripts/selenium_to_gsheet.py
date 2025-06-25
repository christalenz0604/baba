import time
from itertools import product
from selenium import webdriver
from selenium.webdriver.common.by import By
import gspread


def setup_gsheet(creds_path: str, spreadsheet_id: str):
    """Authenticate and return the first worksheet."""
    gc = gspread.service_account(filename=creds_path)
    sh = gc.open_by_key(spreadsheet_id)
    worksheet = sh.sheet1
    worksheet.clear()
    worksheet.append_row(['角色', '回答組合', '結果文字', '圖片檔名'])
    return worksheet


def run_test(driver: webdriver.Chrome, worksheet):
    characters = driver.find_elements(By.CSS_SELECTOR, '.character')
    for i, char in enumerate(characters):
        char.click()
        time.sleep(1)
        for combo in product(range(3), repeat=10):
            for q, ans_idx in enumerate(combo):
                choices = driver.find_elements(By.CSS_SELECTOR, f'.question{q+1} .option')
                choices[ans_idx].click()
                time.sleep(0.3)
            time.sleep(1)
            text = driver.find_element(By.CSS_SELECTOR, '.result-text').text
            img = driver.find_element(By.CSS_SELECTOR, '.result-image').get_attribute('src')
            img_filename = img.split('/')[-1]
            worksheet.append_row([f'角色{i+1}', ''.join(str(a + 1) for a in combo), text, img_filename])
            driver.back()
            time.sleep(1)
            char.click()
            time.sleep(1)
        driver.back()
        time.sleep(1)


def main():
    # Colab 可使用掛載的 credentials 與 spreadsheet id
    CREDS_PATH = 'service_account.json'  # 在 Colab 上傳金鑰檔
    SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'

    worksheet = setup_gsheet(CREDS_PATH, SPREADSHEET_ID)

    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get('https://example.com')  # 換成實際網址
    time.sleep(2)

    run_test(driver, worksheet)
    driver.quit()


if __name__ == '__main__':
    main()
