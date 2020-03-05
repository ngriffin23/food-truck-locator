$(function() {
    // console.log('running!')
    // GET/READ SEED.JS POSTS ARRAY
    $(document).ready( function (){
       // console.log('post submitted');
        $.ajax({
            url: '/api/v1/posts',
            contentType: 'application/json',
            success: function(res) {
                //console.log(res);
                const postContent = $('#posts-container');
                // postContent.html('');
                 res.forEach(function(posts){
                    postContent.append(
                     `
                    <div class="tile card post-card">
                    <div class="card-content post-style">
                    <!-- POST TITLE -->
                    <p class="title is-4 post-title">${posts.postTitle}</p>
                    <!-- POST DATE -->
                    <p class="subtitle is-6 post-date"> ${posts.date}</p>
                    <!-- POST TRUCK -->
                    <p class="subtitle is-6">      
                    <span class="icon is-small">
                    <i class="fas fa-map-marker-alt"></i>
                    </span> 
                    <span class="post-meal">${posts.foodTruckName}</span>
                    </p>
                    <!-- POST MEAL -->
                    <p class="subtitle is-6">
                    <span class="icon is-small">
                    <i class="fas fa-utensils"></i>
                    </span>		
                    <span class="post-meal">${posts.meal} </span>
                    </p>
                    <!-- POST Details -->
                    <p class="post-body"> ${posts.body}</p>
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
                     )
                })
            },
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
       
       // console.log('new post yay')
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
                console.log(res);
                newPostTitle.val('');
                newDate.val('');
                newTruck.val('');
                newMeal.val('');
                newBody.val('');
            }
        })
     })
});