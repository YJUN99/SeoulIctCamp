let modal = document.getElementById('modal');
let modalText = document.getElementById("modal-text");
let modalImage = document.getElementById("modal-image");
let modalCommentSection = document.getElementById("modal-comment-section");
let detailViewButtons = document.querySelectorAll('.detail-view');

detailViewButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Get post content
        let postContent = this.previousElementSibling.innerText;
        modalText.innerText = postContent;

        // Get post image
        let postImageSrc = this.parentElement.parentElement.querySelector('.post-main-image').src;
        modalImage.src = postImageSrc;

        // Get comments
        let comments = this.parentElement.parentElement.querySelectorAll('.comment');
        modalCommentSection.innerHTML = '';
        comments.forEach(comment => {
            modalCommentSection.innerHTML += `<p>${comment.innerHTML}</p>`
        });
        
        // Show modal
        modal.style.display = "block";
    });
});

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
