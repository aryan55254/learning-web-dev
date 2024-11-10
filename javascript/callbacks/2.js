function downloadFile(callback) {
    console.log("Starting file download...");
    setTimeout(() => {
      console.log("File downloaded!");
      callback();
    }, 2000);
  }
  
  function processFile() {
    console.log("Processing the downloaded file...");
  }
  
  downloadFile(processFile);
  