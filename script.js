// Seleccionar las tarjetas de los juegos
document.getElementById('conecta4').querySelector('button').addEventListener('click', function() {
    window.location.href = 'conecta4.html'; // Página del juego Conecta 4
  });
  
  document.getElementById('gato').querySelector('button').addEventListener('click', function() {
    window.location.href = 'gato.html'; // Página del juego Gato
  });
  
  document.getElementById('serpientes').querySelector('button').addEventListener('click', function() {
    window.location.href = 'serpientes.html'; // Página del juego Serpientes y Escaleras
  });
  
  document.getElementById('preguntas').querySelector('button').addEventListener('click', function() {
    window.location.href = 'preguntas.html'; // Página del juego Preguntas y Retos
  });
  
  document.getElementById('piedra-papel').querySelector('button').addEventListener('click', function() {
    window.location.href = 'piedra-papel.html'; // Página del juego Piedra, Papel o Tijera
  });
  
  document.getElementById('buscaminas').querySelector('button').addEventListener('click', function() {
    window.location.href = 'buscaminas.html'; // Página del juego Buscaminas
  });
  
  document.getElementById('tetrix').querySelector('button').addEventListener('click', function() {
    window.location.href = 'tetrix.html'; // Página del juego Damas
  });
  
  document.getElementById('ahorcado').querySelector('button').addEventListener('click', function() {
    window.location.href = 'ahorcado.html'; // Página del juego Ahorcado
  });
  
  document.getElementById('memoria').querySelector('button').addEventListener('click', function() {
    window.location.href = 'memoria.html'; // Página del juego Memoria
  });
  
  document.getElementById('topo').querySelector('button').addEventListener('click', function() {
    window.location.href = 'topo.html'; // Página del juego Sudoku
  });
  
  // Funcionalidad de búsqueda
  const searchInput = document.getElementById('search');
  const gameCards = document.querySelectorAll('.game-card');
  const noResults = document.getElementById('no-results');
  
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    let hasResults = false;
  
    gameCards.forEach(card => {
      const gameTitle = card.querySelector('h2').textContent.toLowerCase();
      if (gameTitle.includes(query)) {
        card.style.display = ''; // Mostrar tarjeta
        hasResults = true;
      } else {
        card.style.display = 'none'; // Ocultar tarjeta
      }
    });
  
    noResults.style.display = hasResults ? 'none' : 'block'; // Mostrar mensaje si no hay resultados
  });
  

  