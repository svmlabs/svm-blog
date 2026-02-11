// Elements
const newPostBtn = document.getElementById("new-post-btn");
const blogEditorModal = document.getElementById("blog-editor-modal");
const closeBlogBtn = document.getElementById("close-blog-btn");
const saveBlogBtn = document.getElementById("save-blog-btn");
const blogList = document.getElementById("blog-list");
const newBlogTitle = document.getElementById("new-blog-title");
const newBlogContent = document.getElementById("new-blog-content");

// Open modal
newPostBtn.addEventListener("click", () => {
  blogEditorModal.style.display = "flex";
});

// Close modal
closeBlogBtn.addEventListener("click", () => {
  blogEditorModal.style.display = "none";
  newBlogTitle.value = "";
  newBlogContent.value = "";
});

// Save blog
saveBlogBtn.addEventListener("click", () => {
  const title = newBlogTitle.value.trim();
  const content = newBlogContent.value.trim();

  if (!title || !content) {
    alert("Please fill both title and content!");
    return;
  }

  const blogCard = document.createElement("div");
  blogCard.className = "blog-post";
  blogCard.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    <button class="btn-primary read-more">Read More</button>
  `;

  blogList.prepend(blogCard);

  navigator.clipboard.writeText(`# ${title}\n\n${content}`);
  alert("Blog saved & copied to clipboard!");

  newBlogTitle.value = "";
  newBlogContent.value = "";
  blogEditorModal.style.display = "none";
});
