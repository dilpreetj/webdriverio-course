import BlogPage from '../pages/blog-page';

describe("Blog", () => {
  it("Get the list of all Recent Posts & assert the length of each list item > 1 & assert the total count = 4", async () => {
    await BlogPage.open();

    // Get the Recent Post List Elements
    const recentPostsList = await BlogPage.listRecentPosts;

    // Loop through the list and assert the text length is greater than 10
    for (const item of recentPostsList) {
      const text = await item.getText();
      await expect(text.length).toBeGreaterThan(10);
    }

    // Assert the total length of the list is 4
    await expect(recentPostsList).toHaveLength(4);
  });
});
