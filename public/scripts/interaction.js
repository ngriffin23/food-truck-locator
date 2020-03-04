/* ** DOCUMENT ELEMENTS ** */
// MENU OPEN/CLOSE
const menuOpen = document.querySelector('.dash-menu-open');
const menuClose = document.querySelector('.dash-menu-close');
const dashMenu = document.getElementById('dash-menu');
const findFoodTruck = document.getElementById('find-food-truck');
// MODAL ELEMENTS
const openCreate = document.getElementById('open-create');
const openView = document.getElementById('open-view');
const openUpdate = document.getElementById('open-update');
const openSettings = document.getElementById('open-settings');
const openDelete = document.getElementById('delete-btn');
// MODALS
const modalCreate = document.getElementById('modal-create');
const modalView = document.getElementById('modal-view');
const modalUpdate = document.getElementById('modal-update');
const modalSettings = document.getElementById('modal-settings');
const modalDelete = document.getElementById('modal-delete');
// CLOSE/CANCEL BUTTONS
const closeIcon = document.querySelector('.close-icon');
const cancelBtn = document.getElementById('cancel-btn');
const deleteCancel = document.getElementById('delete-cancel');

/* ** FUNCTIONS ** */


/* ** EVENT LISTENERS  ** */



// OPEN MENU
menuOpen.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideInLeft');
    dashMenu.classList.remove('slideOutLeft');
    dashMenu.style.display = 'flex';
});
// CLOSE MENU
menuClose.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideOutLeft');
});
findFoodTruck.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideOutLeft');
});

// MODALS - DELETE - OPEN
openDelete.addEventListener('click', function(e){
    e.stopPropagation();
    modalDelete.classList.add('fadeIn');
    modalDelete.classList.remove('fadeOut');
    modalDelete.style.display = 'initial';
});

// MODALS - CREATE -  OPEN
openCreate.addEventListener('click', function(e){
    modalCreate.classList.add('slideInUp');
    modalCreate.classList.remove('slideOutDown');
    modalCreate.style.display = 'initial';
    e.stopPropagation();
});

// MODALS - EDIT/UPDATE - OPEN
openUpdate.addEventListener('click', function(){
    modalUpdate.classList.add('slideInUp');
    modalUpdate.classList.remove('slideOutDown');
    modalUpdate.style.display = 'initial';
});

// MODALS - SETTINGS - OPEN
openSettings.addEventListener('click', function(){
    modalSettings.classList.add('slideInUp');
    modalSettings.classList.remove('slideOutDown');
    modalSettings.style.display = 'initial';
});

// MODAL-CLOSE
// How do I get modal ID on a click event listener?
// How can I track which link I clicked on

function closeModal(modalId){
    document.querySelectorAll('.close-icon').forEach(function(thisModal){
        thisModal.addEventListener('click', function(){
            modalId.classList.add('slideOutDown');
            modalId.classList.remove('slideInUp');
        
        });
    });
};

/*function chooseModal(modalId){
    switch (modalId) {
        case modalCreate:  
            closeModal(modalCreate);
             break;
        case modalUpdate:
            closeModal(modalUpdate);
            break;
        default:
          console.log('waiting...');
      }
}*/


closeIcon.addEventListener('click', function(){
    modalCreate.classList.add('slideOutDown');
    modalCreate.classList.remove('slideInUp');
});
cancelBtn.addEventListener('click', function(){
    modalCreate.classList.add('slideOutDown');
    modalCreate.classList.remove('slideInUp');
});