$(function() {
    /* ** FUNCTIONS  ** */
    // HTML TEMPLATE
    function getPostTemplate(post){
        // console.log(post);
        return `
        <div class="tile card post-card">
        <div class="card-content post-style">
        <!-- POST TITLE -->
        <p class="title is-4 post-title">${post.postTitle}</p>
        <!-- POST DATE -->
        <p class="subtitle is-6 post-date"> ${post.date}</p>
        <!-- POST TRUCK -->
        <p class="subtitle is-6">      
        <span class="icon is-small">
        <i class="fas fa-map-marker-alt"></i>
        </span> 
        <span class="post-meal">${post.foodTruckName}</span>
        </p>
        <!-- POST MEAL -->
        <p class="subtitle is-6">
        <span class="icon is-small">
        <i class="fas fa-utensils"></i>
        </span>		
        <span class="post-meal">${post.meal} </span>
        </p>
        <!-- POST Details -->
        <p class="post-body"> ${post.body}</p>
        <footer class="card-footer post-footer">
        <div class="post-footer-container">
        <button class="button edit-btn post-btn open-this" id="open-update">
        <span class="icon">
         <i class="fas fa-edit"></i>
        </span>
        </button>
        <button class="button post-btn open-this" id="open-delete" >
        <span class="icon">
        <i class="fas fa-trash-alt"></i>
        </span>
        </button>
        </div>
        </footer> 
        </div>
        </div>
          `
    }

    // RENDER POST TEMPLATE
    function renderPostTemplate(post){
        let newPost = getPostTemplate(post);
        let postContainer = document.getElementById('post-container');
        postContainer.insertAdjacentHTML('afterbegin', newPost);
    }

    // RENDER ALL POSTS
    function renderAllPosts(posts){
        posts.forEach(post => renderPostTemplate(post));
    }

    /* ** AJAX  ** */
    $(document).ready( function (){
        $.ajax({
            url: '/api/v1/posts',
            contentType: 'application/json',
            success: function(res) {
              renderAllPosts(res);
            }
        })
    });
    // ON SUBMIT, CREATE NEW POST
    $('#newPost').on('submit', function(event){
        $('#modal-create').toggleClass('slideOutDown');
        event.preventDefault();
        let newPostTitle = $('#post-title');
        let newDate = $('#post-date');
        let newTruck = $('#post-truck');
        let newMeal = $('#post-meal');
        let newBody = $('#post-body');

        $.ajax({
            url: '/api/v1/posts',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                postTitle: newPostTitle.val(),
                date: newDate.val(),
                foodTruckName: newTruck.val(),
                meal: newMeal.val(),
                body: newBody.val(),
            }),
            success: function(res) {
               renderPostTemplate(res);
                newPostTitle.val('');
                newDate.val('');
                newTruck.val('');
                newMeal.val('');
                newBody.val('');
            }
        })
    })
});