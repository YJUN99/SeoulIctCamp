let likeCount = 0;
let dislikeCount = 0;
let commentCount = 0;

document.querySelector(".like-button").addEventListener("click", function() {
    likeCount++;
    document.querySelector(".like-count").textContent = likeCount;
});

document.querySelector(".dislike-button").addEventListener("click", function() {
    dislikeCount++;
    document.querySelector(".dislike-count").textContent = dislikeCount;
});
