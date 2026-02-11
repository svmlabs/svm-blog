document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  const newPostBtn = document.getElementById("new-post-btn");

  // Load blog posts dynamically
  fetchArticles();

  function fetchArticles() {
    // For demo, we load sample-post.md
    fetch('articles/sample-post.md')
      .then(res => res.text())
      .then(data => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.innerHTML = `<pre>${data}</pre>`;
        if(blogList) blogList.appendChild(postDiv);
      });
  }

  // Simple new post editor
  if(newPostBtn){
    newPostBtn.addEventListener('click', ()=>{
      const title = prompt("Enter blog title:");
      const content = prompt("Enter blog content (Markdown supported):");
      alert("Copy the following to a new file in /articles/ folder and push to GitHub:\n\n# "+title+"\n\n"+content);
    });
  }
});
// Blog Editor Modal
const newPostBtn = document.getElementById('new-post-btn');
const blogModal = document.getElementById('blog-editor-modal');
const closeModalBtn = document.getElementById('close-blog-btn');
const saveBlogBtn = document.getElementById('save-blog-btn');

if(newPostBtn) {
  newPostBtn.addEventListener('click', () => {
    blogModal.style.display = 'flex';
  });
}

if(closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    blogModal.style.display = 'none';
  });
}

if(saveBlogBtn) {
  saveBlogBtn.addEventListener('click', () => {
    const title = document.getElementById('new-blog-title').value.trim();
    const content = document.getElementById('new-blog-content').value.trim();

    if(!title || !content){
      alert("Title and Content cannot be empty!");
      return;
    }

    const markdown = `# ${title}\n\n${content}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(markdown).then(()=>{
      alert("Blog Markdown copied! Paste into a new file in /articles/ folder and push to GitHub.");
      // Clear inputs
      document.getElementById('new-blog-title').value = '';
      document.getElementById('new-blog-content').value = '';
      blogModal.style.display = 'none';
    });
  });
}
