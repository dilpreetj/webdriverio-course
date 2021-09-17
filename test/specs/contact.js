import ContactPage from '../pages/contact-page';
import * as faker from 'faker';

describe("Contact", () => {
  it("Fill all the input fields, submit form and assert success message", async () => {
    await ContactPage.open();

    // Fill out the input fields & click submit
    // await ContactPage.submitForm('Test Name', 'test@mail.com', '123456789', 'This is a test message');
    await ContactPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.paragraphs(2));

    // Assert the success message
    const successAlert = ContactPage.alertSuccess;
    await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
  });
});
