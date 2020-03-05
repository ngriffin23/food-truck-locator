/* ** DOCUMENT ELEMENTS ** */
// GENERAL MULTIPLE ELEMENT/CLASS SELECTOR //
const anchors = document.querySelectorAll('a');
const dashBtnArr = document.querySelectorAll('.dash-btn');
const modalArr = document.querySelectorAll('.modal');
const openArr = document.querySelectorAll('.open-this');
const closeIconArr =  document.querySelectorAll('.close-icon');
const updateArr = document.querySelectorAll('.update-close');
const deleteArr = document.querySelectorAll('.delete-btn');
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
const openDelete = document.getElementById('open-delete');
// MODALS //
const modalCreate = document.getElementById('modal-create');
const modalView = document.getElementById('modal-view');
const modalUpdate = document.getElementById('modal-update');
const modalSettings = document.getElementById('modal-settings');
const modalDelete = document.getElementById('modal-delete');
// const modalDelete = document.getElementById('modal-delete');
// CLOSE/CANCEL BUTTONS
const closeIcon = document.querySelector('.close-icon');
const cancelBtn = document.getElementById('cancel-btn');
const deleteCancel = document.getElementById('delete-cancel');
const yesDelete = document.getElementById('yes-delete');
const confirmUpdate = document.getElementById('confirm-update')
/* ======= ======= ======= ======= ======= ======= ======= */

/* ** EVENT LISTENERS  ** */
// MENU - OPEN //
menuOpen.addEventListener('click', function(e) {
    dashMenu.classList.add('slideInLeft');
    dashMenu.classList.remove('slideOutLeft');
    dashMenu.style.display = 'flex';
    e.stopImmediatePropagation();
});
// MENU - CLOSE //
menuClose.addEventListener('click', function(e) {
    dashMenu.classList.add('slideOutLeft');
    e.stopImmediatePropagation();
});
findFoodTruck.addEventListener('click', function(e){
    dashMenu.classList.add('slideOutLeft');
    e.stopImmediatePropagation();
});

/* ======= ======= ======= ======= ======= ======= ======= */

// MODALS - CREATE -  OPEN //
openCreate.addEventListener('click', function(e){
    modalCreate.classList.add('slideInUp');
    modalCreate.classList.remove('slideOutDown');
    modalCreate.style.display = 'initial';
    e.stopPropagation();
});
// MODALS - SETTINGS - OPEN //
openSettings.addEventListener('click', function(e){
    modalSettings.classList.add('slideInUp');
    modalSettings.classList.remove('slideOutDown');
    modalSettings.style.display = 'initial';
    e.stopPropagation();
});
// MODALS - VIEW POSTS - OPEN //
openView.addEventListener('click', function(e){
    modalView.classList.add('slideInUp');
    modalView.classList.remove('slideOutDown');
    modalView.style.display = 'initial';
    e.stopPropagation();
});

// MODALS - EDIT/UPDATE - OPEN //
// function activateOpenUpdate () {
//       if(openUpdate){
//         openUpdate.addEventListener('click', function(){
//         console.log(hello);
//         modalUpdate.classList.add('slideInUp');
//         modalUpdate.classList.remove('slideOutDown');
//         modalUpdate.style.display = 'initial';
//     });
// } else {
//     console.log('update button non-existent');
//     }
// } ;

// MODALS - DELETE - OPEN //
// openDelete.addEventListener('click', function(e){
//     modalDelete.classList.add('fadeIn');
//     modalDelete.classList.remove('fadeOut');
//     modalDelete.style.display = 'initial';
//     e.stopPropagation();
// });

/* ======= ======= ======= ======= ======= ======= ======= */

// MODALS - DASH LINKS - CLOSE ICON + CANCEL BTN
function closeModal(modalId){
   closeIconArr.forEach(function(thisModal){
        thisModal.addEventListener('click', function(e){
            modalId.classList.add('slideOutDown');
        });
    });
};
dashBtnArr.forEach(function(thisModalId){
    thisModalId.addEventListener('click', function(e){
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
            default:
                console.log('waiting...');
            }        
     });
 });
 // Handler for Update View
 updateArr.forEach(function(thisModal){
     thisModal.addEventListener('click', function(e){
         modalUpdate.classList.add('slideOutDown');
     });
 });
 // CLOSE DELETE POST WARNING
 deleteArr.forEach(function(thisModal){
    thisModal.addEventListener('click', function(e){
        modalDelete.classList.add('fadeOut');
        modalDelete.style.display = "none";
    });
});

deleteCancel.addEventListener('click', function(){
    modalDelete.classList.add('fadeOut');
    modalDelete.style.display = "none";
 });
 
 yesDelete.addEventListener('click', function(){
    if(modalDelete.classList.contains('slideOutDown')){
        modalDelete.classList.remove('slideOutDown');
        modalDelete.classList.add('fadeOut');
        modalDelete.style.display = "none";
    }else{
    modalDelete.classList.add('fadeOut');
    modalDelete.style.display = "none";
 }});

 confirmUpdate.addEventListener('click', function(){
    if(modalUpdate.classList.contains('slideOutDown')){
        modalUpdate.classList.remove('slideOutDown');
        modalUpdate.classList.add('slideOutDown');
       // modalUpdate.style.display = "none";
    }else{
    modalUpdate.classList.add('slideOutDown');
    modalUpdate.style.display = "none";
 }});