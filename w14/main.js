const url =
`https://jsonplaceholder.typicode.com/comments/`

const request = new Request(url)

function renderComments(comments) {
comments.forEach(comment => {
    const commEl = document.createElement('div');
    commEl.textContent = comment.body
    document.body.appendChild(commEl);
});
  
}

async function getComment() {
    try {
      const response = await fetch(request);
      const data = await response.json();
      if (response.status === 200) {
          console.log("Success:", data);
          return data;
      } else {
          console.log("Server Error", data.e);
      } return 'Error';
  
    } catch (error) {
      console.log('Error', error)
    }
  }

async function start() {
   const comments = await getComment();
    renderComments(comments)
}

start();