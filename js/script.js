const search = document.querySelector('.search'); //puxando da classe input\\
const btn = document.querySelector('.btn'); //Botão de pesquisa\\

btn.addEventListener('click', () =>{
  const url = 'https://www.linkedin.com/company/ywc-brasil/about/' + search.value;
  window.open(url, '_self');
})
search.addEventListener('keypress', function(e){
  if(e.key === "Enter") {

    const url = 'https://www.linkedin.com/company/ywc-brasil/about/' + search.value;
    search.click();
    window.open(url, '_self');
  }
})