# 圖片上傳與插入編輯器

這個專案提供了一個簡單的圖片上傳與插入到 `contenteditable` 編輯器中的範例。使用者可以從伺服器上已經存在的圖片中選擇，或是上傳新的圖片並將其插入到編輯器中游標所在的位置。

## 功能

- 在 `contenteditable` 編輯區域插入圖片。
- 從伺服器已存在的圖片中選擇並插入。
- 上傳新的圖片並插入。

## 文件結構

- `index.html`: 主 HTML 文件，包含編輯器和上傳、選擇圖片的功能。
- `upload.php`: 處理圖片上傳的 PHP 腳本，會使用時間戳記重新命名上傳的檔案。
- `getImagesData.php`: 獲取伺服器上已存在圖片資料的 PHP 腳本。

## 安裝與使用

1. 確保您的伺服器支援 PHP 並且有權限寫入 `uploads` 目錄。
2. 將所有文件上傳到您的伺服器。
3. 在伺服器的根目錄或適當的子目錄下創建一個 `uploads` 目錄，並設置寫入權限。

### 使用步驟

1. 打開 `index.html` 文件。
2. 點擊「選擇圖片」按鈕可以從伺服器已存在的圖片中選擇並插入到編輯區域。
3. 點擊「上傳圖片」按鈕可以選擇並上傳新的圖片，上傳成功後會自動插入到編輯區域。

## 注意事項

- 確保伺服器上的 `uploads` 目錄有正確的寫入權限。
- 檔案上傳限制可以根據需要在 PHP 配置中調整（如 `php.ini` 文件中的 `upload_max_filesize` 和 `post_max_size` 參數）。

## 相關腳本

- `upload.php`：處理上傳的圖片，使用時間戳記重新命名檔案。
- `getImagesData.php`：獲取伺服器上 `uploads` 目錄中已存在的圖片資料並返回 JSON 格式；這支檔案應該要根據實際需要從圖片的資料表中取出圖片資料來放。

## 支援

- 請按下星星或 fork 讓老師知道有來看過
- [線上測試](https://sagedaben.com/iSpan/php/img_select_01/)

