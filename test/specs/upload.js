const path = require('path');

describe('Upload Tests', () => {
  it('Simple upload test', async () => {
    // Open url
    await browser.url('https://the-internet.herokuapp.com/upload');

    // store test file path
    const filePath = path.join(__dirname, '../data/logotitle.png');

    // upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // set file path value in the input field
    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click(); // click the submit button

    // assertion
    await expect($('h3')).toHaveText('File Uploaded!');
  });

  it('Upload on a hidden input field', async () => {
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