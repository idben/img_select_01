const btnSelector = document.querySelector(".btn-selector");
const btnUpload = document.querySelector(".btn-upload");
const imgContainer = document.querySelector(".modal-body");
const fileInput = document.querySelector("#fileInput");
const editor = document.querySelector(".editor");

const imgSelector = new bootstrap.Modal('#imgModal', {
  backdrop: "static"
});

imgContainer.addEventListener("click", e => {
  if (e.target instanceof HTMLImageElement) {
    const path = e.target.getAttribute("src");
    const img = document.createElement('img');
    img.src = path;
    // 將圖片插入到游標所在位置
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(img);
    }else{
      editor.append(img);
    }
    imgSelector.hide();
  }
});

btnSelector.addEventListener("click", async () => {
  try {
    const response = await fetch("./getImagesData.php");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const imgDatas = await response.json();
    imgContainer.innerHTML = "";
    imgDatas.forEach(img => {
      const tmp = `<img src="./uploads/${img}">`;
      imgContainer.innerHTML += tmp;
    })
    imgSelector.show();
  } catch (err) {
    console.error("Fetch error: ", err);
  }
  imgSelector.show();
});

btnUpload.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", async () => {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("./upload.php", {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result.success) {
        const img = document.createElement('img');
        img.src = `./uploads/${result.filename}`;
        // 將圖片插入到游標所在位置
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          range.deleteContents();
          range.insertNode(img);
        }else{
          editor.append(img);
        }
      } else {
        console.error("Upload error: ", result.message);
      }
    } catch (err) {
      console.error("Upload error: ", err);
    }
  }
});