const path = require('path');

describe("Upload", () => {
  it("Upload file and assert success message", async () => {
    await browser.url("/cart");

    await browser.execute(
      "document.querySelector('#upfile_1').removeAttribute('class')"
    );

    const inputFile = await $("#upfile_1");
    const uploadBtn = await $("#upload_1");

    const remoteFilePath = await browser.uploadFile("logo.png");
    await inputFile.setValue(remoteFilePath);
    await uploadBtn.click();

    const successMessage = await $("#wfu_messageblock_header_1_label_1");
    await expect(successMessage).toHaveTextContaining("uploaded successfully");
  });

  it.only('Simple upload test', async () => {
    // Open url
    await browser.url('https://the-internet.herokuapp.com/upload');

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // use browser.uploadFile to upload the test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // set file path value in the input field
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click(); // click the submit button

    // assertion
    await expect($('h3')).toHaveText('File Uploaded!');
  });

  it.only('Upload on a hidden input field', async () => {
    // Open url
    await browser.url('/cart/');

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // remove hidden class
    await browser.execute("document.querySelector('#upfile_1').className = ''");

    // set file path value in the input field
    await $('#upfile_1').setValue(remoteFilePath);
    await $('#upload_1').click(); // click the upload button

    // assertion
    await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
  });
});
