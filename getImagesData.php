<?php
// 定義要讀取的資料夾
$directory = 'uploads/';
$images = [];

// 檢查資料夾是否存在
if (is_dir($directory)) {
  // 開啟資料夾
  if ($dir_handle = opendir($directory)) {
    // 讀取資料夾內的每一個檔案
    while (($file = readdir($dir_handle)) !== false) {
      // 檢查是否為圖片檔（根據副檔名過濾）
      if (preg_match("/\.(jpg|jpeg|png|gif)$/i", $file)) {
        // 將圖片路徑加入陣列
        $images[] = $file;
      }
    }
    // 關閉資料夾
    closedir($dir_handle);
  } else {
    echo json_encode(["error" => "無法開啟資料夾。"]);
    exit;
  }
} else {
  echo json_encode(["error" => "資料夾不存在。"]);
  exit;
}

// 設定 HTTP 標頭為 JSON 格式
header('Content-Type: application/json');

// 回傳圖片列表的 JSON
echo json_encode($images);
?>
