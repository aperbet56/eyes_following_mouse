// Récupération des différents éléments
const container = document.querySelector(".container");
const balls = document.querySelectorAll(".ball");

// Ecoute de l'événement mousemove sur le container
container.addEventListener("mousemove", (e) => {
  // Création de deux constantes x et y et on utilise les méthodes clientX et ClientY associées à l'objet d'évenement e pour donner à x et y une valeur en %
  const x = `${(e.clientX * 100) / window.innerWidth}%`;
  const y = `${(e.clientY * 100) / window.innerHeight}%`;

  // Attribution d'une position pour chaque balls (pupille) en fonction de x et y
  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = `translate(-${x}, -${y})`;
  }
});
