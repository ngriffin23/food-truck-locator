const postForm = document.getElementById('newPost')

// Add New City Post
postForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('post-title');
    const date = document.getElementById('post-date');
    const truck = document.getElementById('post-truck');
    const meal = document.getElementById('post-meal');
    const body = document.getElementById('post-body');
    let formIsValid = false;
  
    // Select Error Messages
    const titleFeedback = document.querySelector('.title-feedback');
    const dateFeedback = document.querySelector('.date-feedback');
    const truckFeedback = document.querySelector('.truck-feedback');
    const mealFeedback = document.querySelector('.meal-feedback');
    const bodyFeedback = document.querySelector('.body-feedback');
  
    // Reset Validation Classes & Errors
    title.classList.remove('is-invalid');
    date.classList.remove('is-invalid');
    truck.classList.remove('is-invalid');
    meal.classList.remove('is-invalid');
    body.classList.remove('is-invalid');
    titleFeedback && titleFeedback.remove();
    dateFeedback && dateFeedback.remove();
    truckFeedback && truckFeedback.remove();
    mealFeedback && mealFeedback.remove();
    bodyFeedback && bodyFeedback.remove();
  
    if (!title.value) {
      formIsValid = false;
      title.classList.add('is-invalid');
      title.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback title-feedback">Post Title is required</div>');
    } else {
      formIsValid = true;
      title.classList.add('is-valid');
    }
    
    if (!date.value) {
      formIsValid = false;
      date.classList.add('is-invalid');
      date.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback date-feedback">Date is required</div>');
    } else {
      formIsValid = true;
      date.classList.add('is-valid');
    }
    
    if (!truck.value) {
      formIsValid = false;
      truck.classList.add('is-invalid');
      truck.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback truck-feedback">Food Truck Name is required</div>');
    } else {
      formIsValid = true;
      truck.classList.add('is-valid');
    }
    
    if (!meal.value) {
      formIsValid = false;
      meal.classList.add('is-invalid');
      meal.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback meal-feedback">Meal is required</div>');
    } else {
      formIsValid = true;
      meal.classList.add('is-valid');
    }
    
    if (!body.value) {
      formIsValid = false;
      body.classList.add('is-invalid');
      body.parentNode.insertAdjacentHTML('beforeend', '<div class="invalid-feedback body-feedback">Content is required</div>');
    } else {
      formIsValid = true;
      body.classList.add('is-valid');
    }
  });