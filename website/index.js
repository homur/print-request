const button = document.getElementById("sendRequest");
const url = "http://localhost:3000/sendPrint";

const sendPrintRequest = () => {
  const file = getFile();

  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

const getFile = () => {
  const fileInput = document.getElementById("imageInput");
  const file = fileInput.files[0];

  return file ? file : false;
};

button.onclick = () => {
  sendPrintRequest();
};
