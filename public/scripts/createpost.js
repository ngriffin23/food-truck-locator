$(function() {
    let postIdClick;
    // FN - NEW POST - HTML TEMPLATE //
    function getPostTemplate(post){
        return `
        <div class="tile card post-card" id="post-${post._id}">
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
        <div class="post-footer-container is-centered">
        <button class="button edit-btn post-btn" id="open-update">
        <span class="icon">
         <i data-id=${post._id}  class="fas fa-edit"></i>
        </span>
        </button>
        <button class="button post-btn" id="open-delete" >
        <span class="icon">
        <i data-id=${post._id} class="fas fa-trash-alt"></i>
        </span>
        </button>
        </div>
        </footer> 
        </div>
        </div>
          `
    }
    // FN - RENDER POST TEMPLATE
    function renderPostTemplate(post){
        let newPost = getPostTemplate(post);
        let postContainer = document.getElementById('post-container');
        postContainer.insertAdjacentHTML('afterbegin', newPost);
        //  EVENT LISTENER - EDIT/UPDATE  //
        const openUpdate = document.getElementById('open-update');
        const modalUpdate = document.getElementById('modal-update');
        openUpdate.addEventListener('click', function(event){
            modalUpdate.classList.add('slideInUp', 'modal-background');
            modalUpdate.classList.remove('slideOutDown');
            modalUpdate.style.display = 'initial';
            postIdClick = event.target.dataset.id;
     });
       // EVENT LISTENER - DELETE  //
        const openDelete = document.getElementById('open-delete');
        const modalDelete = document.getElementById('modal-delete');
        openDelete.addEventListener('click', function(event){
            modalDelete.classList.add('fadeIn');
            modalDelete.classList.remove('fadeOut');
            modalDelete.style.display = 'initial';
            postIdClick = event.target.dataset.id;
        });
    };
    // FN - RENDER ALL POSTS //
    function renderAllPosts(posts){
        posts.forEach(post => renderPostTemplate(post));
    }
    // AJAX - READ/VIEW POSTS //
    $(document).ready( function (){
        $.ajax({
            url: '/api/v1/posts',
            contentType: 'application/json',
            success: function(res) {
              renderAllPosts(res);
            }
        })
    });
    // AJAX - CREATE POST //
    $('#newPost').on('submit', function(event){
       
        $('#modal-create').addClass('slideOutDown');
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
                alert('yay you created a post!');
            }
        })
    });
    // AJAX - UPDATE //
    $('#confirm-update').on('click', function(event) {
        let updatePostTitle = $('#update-post-title');
        let updatePostDate =  $('#update-post-date');
        let updatePostTruck = $('#update-post-truck');
        let updatePostMeal =  $('#update-post-meal');
        let updatePostBody = $('#update-post-body');
        const data ={
         postTitle : updatePostTitle.val(),
         date: updatePostDate.val(),
         foodTruckName: updatePostTruck.val(),
         meal : updatePostMeal.val(),
         body : updatePostBody.val()
        }
        $.ajax({
            url: `/api/v1/posts/${postIdClick}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(res) {
                alert('yay you updated a post!');
            }
        });
      }
    ) 
    // AJAX - DELETE //
    $('#yes-delete').on('click', function(event) {
        $.ajax({
            url: `/api/v1/posts/${postIdClick}`,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(res) {
                $('div').remove(`#post-${postIdClick}`);
                alert(`Post ${postIdClick} DESTROYED.`);
            },
        });
      }
    ) 
});
