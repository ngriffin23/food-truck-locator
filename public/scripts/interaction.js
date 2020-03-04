/* ** DOCUMENT ELEMENTS ** */
// GENERAL MULTIPLE ELEMENT/CLASS SELECTOR //
const anchors = document.querySelectorAll('a');
const dashBtnArr = document.querySelectorAll('.dash-btn');
const modalArr = document.querySelectorAll('.modal'); 
const closeIconArr =  document.querySelectorAll('.close-icon');
// MENU OPEN/CLOSE //
const menuOpen = document.querySelector('.dash-menu-open');
const menuClose = document.querySelector('.dash-menu-close');
const dashMenu = document.getElementById('dash-menu');
const findFoodTruck = document.getElementById('find-food-truck');
// MODAL ELEMENTS //
const openCreate = document.getElementById('open-create');
const openView = document.getElementById('open-view');
const openUpdate = document.getElementById('open-update');
const openSettings = document.getElementById('open-settings');
const openDelete = document.getElementById('delete-btn');
// MODALS //
const modalCreate = document.getElementById('modal-create');
const modalView = document.getElementById('modal-view');
const modalUpdate = document.getElementById('modal-update');
const modalSettings = document.getElementById('modal-settings');
const modalDelete = document.getElementById('modal-delete');
// CLOSE/CANCEL BUTTONS
const closeIcon = document.querySelector('.close-icon');
const cancelBtn = document.getElementById('cancel-btn');
const deleteCancel = document.getElementById('delete-cancel');

/* ======= ======= ======= ======= ======= ======= ======= */

/* ** EVENT LISTENERS  ** */
// MENU - OPEN //
menuOpen.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideInLeft');
    dashMenu.classList.remove('slideOutLeft');
    dashMenu.style.display = 'flex';
});
// MENU - CLOSE //
menuClose.addEventListener('click', function(e) {
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideOutLeft');
});
findFoodTruck.addEventListener('click', function(e){
    e.stopImmediatePropagation();
    dashMenu.classList.add('slideOutLeft');
});

/* ======= ======= ======= ======= ======= ======= ======= */

// MODALS - DELETE - OPEN //
openDelete.addEventListener('click', function(e){
    e.stopPropagation();
    modalDelete.classList.add('fadeIn');
    modalDelete.classList.remove('fadeOut');
    modalDelete.style.display = 'initial';
});
// MODALS - CREATE -  OPEN //
openCreate.addEventListener('click', function(e){
    modalCreate.classList.add('slideInUp');
    modalCreate.classList.remove('slideOutDown');
    modalCreate.style.display = 'initial';
    e.stopPropagation();
});
// MODALS - SETTINGS - OPEN //
openSettings.addEventListener('click', function(){
    modalSettings.classList.add('slideInUp');
    modalSettings.classList.remove('slideOutDown');
    modalSettings.style.display = 'initial';
});
// MODALS - VIEW POSTS - OPEN //
openView.addEventListener('click', function(){
    modalView.classList.add('slideInUp');
    modalView.classList.remove('slideOutDown');
    modalView.style.display = 'initial';
});
// MODALS - EDIT/UPDATE - OPEN //
/*openUpdate.addEventListener('click', function(){
    modalUpdate.classList.add('slideInUp');
    modalUpdate.classList.remove('slideOutDown');
    modalUpdate.style.display = 'initial';
});*/

/* ======= ======= ======= ======= ======= ======= ======= */

// MODALS - CLOSE ICON + CANCEL BTN
function closeModal(modalId){
   closeIconArr.forEach(function(thisModal){
        thisModal.addEventListener('click', function(e){
            modalId.classList.add('slideOutDown');
            e.stopPropagation();
            e.cancelBubble;
        });
    });
};
dashBtnArr.forEach(function(thisModalId){
    thisModalId.addEventListener('click', function(){
        switch (thisModalId.id) {
            case 'open-create':  
                closeModal(modalCreate);
                break;
            case 'open-view':
                closeModal(modalView);
                break;
            case 'open-settings':
                closeModal(modalSettings);
                break;
            case 'open-delete':
                closeModal(modalDelete);
                break;
            default:
                console.log('waiting...');
            }        
     });
 });