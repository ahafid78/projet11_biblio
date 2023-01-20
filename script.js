// LISTE DES UTILISATEURS
const users = [
    { nom: "Omar", email: "omar@gmail.com", password: "test" },
    { nom: "Djaafer", email: "djaafer@gmail.com", password: "test1" },
    { nom: "Said", email: "said@gmail.com", password: "test2" },
  ];
  
  // function pour login
  function Login() {
    // Récupérer les données des inputs LOGIN
    var userEmail = document.getElementById("loginEmail").value;
    var userPassword = document.getElementById("loginPassword").value;
  
    // On check si le lien entre les inputs et la function marche
    console.log(userEmail, userPassword);
  
    // On récupére une div pour afficher si il y'as une erreur dans le login
    var errorDiv = document.getElementById("error");
  
    // On récupére la div qui regroupe le button login et register dans la nav
    var navBtns = document.getElementById("btn-container");
  
    //  On loop sur la liste des users
    for (var i = 0; i < users.length; i++) {
      // on check si l'email & le mot de passe écrit par le user existe dans la liste de users
  
      if (userEmail === users[i].email && userPassword === users[i].password) {
        // Si l'email et le pwd éxistent on affiche le nom du user à la place des buttons login et register
        navBtns.innerHTML = `<h3>Bienvenue ${users[i].nom}</h3>`;
        break;
      } else {
        // Si l'email et le pwd n'éxistent pas on affiche une erreur dans la div avec l'id error
        errorDiv.innerHTML = '<p class="text-danger">Email or pwd not found</p>';
      }
    }
  }
  
  var books = [
    {
      title: "L'étranger",
      author: "Albert Camus",
      date_publication: "10/05/1946",
      genre: ["Roman", "Philosophie"],
      stars: 5,
      price: 700,
      image: "https://m.media-amazon.com/images/I/8130inT26AL.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      date_publication: "10/05/1947",
      genre: ["Aventure", "Romance", "Action", "Policier"],
      stars: 4,
      price: 800,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1504611957l/9577857._SX318_.jpg",
    },
    {
      title: "Cousine K",
      author: "Yasmina Khedra",
      date_publication: "10/05/2010",
      genre: ["Aventure", "Romance", "Policier"],
      stars: 3,
      price: 1000,
      image: "https://m.media-amazon.com/images/I/71b7rrzSHkL.jpg",
    },
  ];
  
  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
    var ciblehtml = document.getElementById("all-books");
  
    var book = books[i];
  
    ciblehtml.innerHTML += `
        <div>
            <img src=${book.image} width='200px' height="80%" alt="">
            <h1>${book.title}</h1>
            <h5>${book.author}</h5>
            <div class='d-flex justify-content-between'>
                <h6>${book.date_publication}</h6>
                <h6>${book.stars} étoiles</h6>
            </div>
            <h3>${book.price}.00 DA</h3>
            <button>Commander</button>
        </div>
      `;
  }