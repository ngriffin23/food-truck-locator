$(function() {
    /* ** FUNCTIONS  ** */
    // HTML TEMPLATE
    function getPostTemplate(post){
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
        <button class="button edit-btn post-btn" id="open-update">
        <span class="icon">
         <i class="fas fa-edit"></i>
        </span>
        </button>
        <button class="button post-btn" id="open-delete" >
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
        
        // ADD EVENT LISTENERS TO UPDATE & DELETE ICONS //
        // MODALS - EDIT/UPDATE - OPEN //
        const openUpdate = document.getElementById('open-update');
        const modalUpdate = document.getElementById('modal-update');
        openUpdate.addEventListener('click', function(){
            modalUpdate.classList.add('slideInUp');
            modalUpdate.classList.remove('slideOutDown');
            modalUpdate.style.display = 'initial';
            console.log('heck')
        });

       // MODALS - DELETE - OPEN //
        const openDelete = document.getElementById('open-delete');
        const modalDelete = document.getElementById('modal-delete');
        openDelete.addEventListener('click', function(e){
            modalDelete.classList.add('fadeIn');
            modalDelete.classList.remove('fadeOut');
            modalDelete.style.display = 'initial';
            e.stopPropagation();
        });
    };
    
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
        $('#modal-view').addClass('slideInUp');
        $('#modal-create').slideDown();
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
    });
    $("#open-update").on('click', function(event){
        console.log('oh heck')
        $.ajax({
            url: '/api/v1/updatePost/:id',
            method: 'GET',
            contentType: 'application/json',
            success: function(res) {
                console.log('hi');
             },
         });
    });
});