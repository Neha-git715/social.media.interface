
document.addEventListener('DOMContentLoaded', () => {
    loadUserPosts(); 
});

function loadUserPosts() {
   
    const posts = [
        { content: 'Just had a great meal at a local restaurant!', author: 'neha_user_29', timestamp: 'August 3, 2024', image: 'place.jpg' },
        { content: 'Excited for the new semester to start!', author: 'neha_user_29', timestamp: 'August 2, 2024', image: 'sem.jpg' }
    ];

    const userPostsSection = document.getElementById('user-posts');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.author}</h4>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <small>${post.timestamp}</small>
        `;
        userPostsSection.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadPosts(); 
});

function loadPosts() {

    const posts = [
        { content: 'Exploring new tech trends this summer!', author: 'tech_lover', timestamp: 'August 3, 2024', image: 'tech.jpg' },
        { content: 'Just finished reading a great book!', author: 'bookworm', timestamp: 'August 2, 2024', image: 'book.jpg' },
        { content: 'Check out my recent travel photos!', author: 'travel_bug', timestamp: 'August 1, 2024', image: 'travel.jpg' }
    ];

    const newsFeedSection = document.getElementById('news-feed');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>${post.author}</h4>
            <p>${post.content}</p>
            ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
            <small>${post.timestamp}</small>
        `;
        newsFeedSection.appendChild(postElement);
    });
}


function createPost() {
    const textarea = document.querySelector('#post-creation textarea');
    const content = textarea.value.trim();

    if (content) {
        const newsFeedSection = document.getElementById('news-feed');

        
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h4>Current User</h4>
            <p>${content}</p>
            <small>Just now</small>
        `;

        newsFeedSection.insertBefore(postElement, newsFeedSection.firstChild);

        textarea.value = '';
    } else {
        alert('Please write something before posting.');
    }
}
