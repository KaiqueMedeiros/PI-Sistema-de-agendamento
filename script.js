
function init(){
  const user = localStorage.getItem('loggedUser');

  if(user){
    userName.innerText = user;
    welcomeText.innerText = 'Olá, ' + user;

    authBtn.innerText = 'Sair';
    authBtn.onclick = logout;
  } else {
    userName.innerText = 'Visitante';
    authBtn.innerText = 'Entrar';
    authBtn.onclick = loginFake;
  }
}

function loginFake(){
  const name = prompt('Digite seu nome:');
  if(name){
    localStorage.setItem('loggedUser', name);
    init();
  }
}

function logout(){
  localStorage.removeItem('loggedUser');
  location.reload();
}

init();
// navegação simples
const sections = {
  home: document.querySelector('.experiences').parentElement,
  services: null,
  favorites: null,
  agenda: null
};



function hideAll(){
  sections.home.style.display='none';
  sections.services.classList.add('hidden');
  sections.favorites.classList.add('hidden');
  sections.agenda.classList.add('hidden');
}

function goHome(){
  hideAll();
  sections.home.style.display='block';
}

function goServices(){
  hideAll();
  sections.services.classList.remove('hidden');
}

function goFavorites(){
  hideAll();
  sections.favorites.classList.remove('hidden');
}

function goAgenda(){
  hideAll();
  sections.agenda.classList.remove('hidden');
}

// eventos nos cards
window.addEventListener('DOMContentLoaded',()=>{
  createSections();

  const cards = document.querySelectorAll('.top-card');
  cards[0].onclick = goServices;
  cards[1].onclick = goFavorites;
  cards[2].onclick = goAgenda;
});
