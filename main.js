
// SIDEMENU
let closeMenu = document.getElementById("closeMenu");
let menu = document.querySelector('.sidemenu');
let menuItems = document.querySelectorAll("button.sidemenu-item > p");
let menuItemsA = document.querySelectorAll("a.sidemenu-item > p");
let expandIcon = document.querySelectorAll(".expand-icon");
let subSection = document.querySelectorAll(".subsection-text");
let largura = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

function closeM(){
  if (menu.getAttribute('aria-expanded') === "true") {
    menu.setAttribute('aria-expanded', "false");
    menu.style.width = "64px";
    menu.style.transition = "width 300ms ease-out";

    menuItems.forEach(item => {
      item.setAttribute('hidden', '');
    });
    menuItemsA.forEach(item => {
      item.setAttribute('hidden', '');
    });
    expandIcon.forEach(item => {
      item.style.display = "none";
    });
    subSection.forEach(item => {
      item.originalHTML = item.innerHTML;
      item.innerHTML = "---";
      item.style.textAlign = "center"
    });
  } else {
    // menu.style.width = "256px";
    menu.setAttribute('aria-expanded', "true");
    menu.removeAttribute ('style')
    menu.style.transition = "width 300ms ease-out";

    menuItems.forEach(item => {
      item.removeAttribute('hidden');
    });
    menuItemsA.forEach(item => {
      item.removeAttribute('hidden');
    });
    expandIcon.forEach(item => {
      item.style.display = "block";
    });
    subSection.forEach(item => {
      item.style.display = "block";
      item.innerHTML = item.originalHTML;
      item.style.textAlign = ""
    });
  }
}




function closeMI(){
  let menuItem = document.getElementById("23");
  let mExpand = document.getElementById("mexpand");

  if(menuItem.getAttribute('aria-expanded') === "false"){
    menuItem.setAttribute('aria-expanded', "true");
    mExpand.removeAttribute('hidden');
  } else{
    mExpand.setAttribute('hidden','')
    menuItem.setAttribute('aria-expanded', "false");
  }
 
}

let notAside = document.getElementById('notif-aside');
let btnNotif = document.getElementById('btnNotif');

function closeNoti(){
  if (notAside.style.display = 'none' || notAside.style.display === ''){
    notAside.style.right = "0"
    notAside.style.display = 'flex'
  }
}
function cnot(){
  let cnot = document.getElementById('cloNotf');
  if (notAside.style.display = 'flex'){
    notAside.style.right = "-280px"
    notAside.style.display = 'none'
  }
}


// Switch Theme Using Class
var changeTheme = document.getElementById('ctheme');
var icontheme = document.getElementById('iconCtheme');
const $body = document.querySelector('body');

changeTheme.addEventListener('click', switchTheme)

function switchTheme(){
  document.body.classList.toggle('dark-theme');

  if($body.classList.contains('dark-theme')){
    icontheme.textContent = "light_mode"
  } else{
    icontheme.textContent = "dark_mode"
  }
}

// Switch Theme change files
// function switchTheme(){

// }