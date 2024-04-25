import {
    getDownloadURL,
    ref,
    storage,
    uploadBytesResumable,
  } from "./firebase.js";
  
  

document.getElementById('upload-btn').addEventListener('click', function (event) {
    // Prevent the default button behavior, which may be closing the modal
    event.preventDefault();
  
    // Trigger click on the hidden file input
    document.getElementById('file-input').click();
  });

  document.getElementById('file-input').addEventListener('change', function () {
    // Access the selected file(s) using this.files
    var selectedFiles = this.files;
  
    // Display the file name
    var fileNameDisplay = document.getElementById('file-name');
    if (selectedFiles.length > 0) {
      fileNameDisplay.textContent = 'Selected File: ' + selectedFiles[0].name;
    } else {
      fileNameDisplay.textContent = 'No file selected';
    }
  });
  

  async function addpost() {
    event.preventDefault();
    var fileinput = document.getElementById("file-input");
    var imageURL;
  
    if (fileinput.files[0]) {
      imageURL = await imageUpload(fileinput.files[0]);
    } else {
      imageURL ="https://firebasestorage.googleapis.com/v0/b/just-share-bb959.appspot.com/o/images%2F1.PNG?alt=media&token=9a6989ac-568d-4242-a099-55d8f790ffbf";
    }
    

    
  }
  
  window.addpost = addpost;






  function imageUpload(file) {
    return new Promise(function (resolve, reject) {
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
  
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, "images/" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
  
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
  
            // ...
  
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  }
  window.imageUpload = imageUpload;
  