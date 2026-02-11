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
