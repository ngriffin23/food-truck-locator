/* ** DOCUMENT ELEMENTS ** */
// GENERAL MULTIPLE ELEMENT/CLASS SELECTOR //
const anchors = document.querySelectorAll('a');
const dashBtnArr = document.querySelectorAll('.dash-btn');
const modalArr = document.querySelectorAll('.modal');
const openArr = document.querySelectorAll('.open-this');
const closeIconArr =  document.querySelectorAll('.close-icon');
const updateArr = document.querySelectorAll('.update-close');

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

// function openModal(modalId){
//     openArr.forEach(function(thisModal){
//         console.log(thisModal.id)
//          thisModal.addEventListener('click', function(e){
//             modalId.classList.add('fadeIn');
//             modalId.classList.remove('fadeOut');
//              e.stopPropagation();
//              e.cancelBubble;
//          });
//      });
//  };

//  openArr.forEach(function(thisModalId){
//     thisModalId.addEventListener('click', function(){
//         switch (thisModalId.id) {
//             case 'open-create':  
//                 openModal(modalCreate);
//                 break;
//             case 'open-view':
//                 openModal(modalView);
//                 break;
//             case 'open-settings':
//                 openModal(modalSettings);
//                 break;
//             default:
//                 console.log('waiting...');
//             }        
//      });
//  });


// MODALS - DELETE - OPEN //
openDelete.addEventListener('click', function(e){
    console.log(e)
    modalDelete.classList.add('fadeIn');
    modalDelete.classList.remove('fadeOut');
    modalDelete.style.display = 'initial';
    e.stopPropagation();
});
// MODALS - CREATE -  OPEN //
openCreate.addEventListener('click', function(e){
    console.log(e);
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
    console.log(e)
    modalView.classList.add('slideInUp');
    modalView.classList.remove('slideOutDown');
    modalView.style.display = 'initial';
    e.stopPropagation();
});
// MODALS - EDIT/UPDATE - OPEN //
openUpdate.addEventListener('click', function(e){
    console.log(e)
    modalUpdate.classList.add('slideInUp');
    modalUpdate.classList.remove('slideOutDown');
    modalUpdate.style.display = 'initial';
});

/* ======= ======= ======= ======= ======= ======= ======= */

// MODALS - CLOSE ICON + CANCEL BTN
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
                console.log(e)
                console.log(thisModalId.id)
                closeModal(modalCreate);
                break;
            case 'open-view':
                console.log(e)
                console.log(thisModalId.id)
                closeModal(modalView);
                break;
            case 'open-settings':
                console.log(e)
                console.log(thisModalId.id)
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
 deleteCancel.addEventListener('click', function(){
    modalDelete.classList.add('slideOutDown');
 });
