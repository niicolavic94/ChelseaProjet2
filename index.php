<?php
/*CHELSEA*/
include_once 'database.php';
include_once 'functions.php';
// J'active la session
session_start();

try {
    $pdo = Database::getInstance(); // Use the singleton pattern for the database connection
    echo "Connexion réussie !";
} catch (PDOException $e) {
    error_log("Erreur de connexion : " . $e->getMessage()); // Log the error instead of displaying it
}

if (isset($_SESSION['user'])) {
    header('Location: dashboard.php');
    exit();
}

if (isset($_SESSION['message'])) {
    echo "<p>" . $_SESSION['message'] . "</p>";
    unset($_SESSION['message']);
}

$message = "";
$successMessage = ""; 
$messageCo = "";

function emailExists($email) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
    $stmt->execute(['email' => $email]);
    return $stmt->fetch();
}

if (isset($_POST["inscription"])) {
    $tab = dataTestInscription();
    if ($tab['erreur'] != '') {
        $message = $tab['erreur'];
    } else {
        if (emailExists($tab['email'])) {
            $message = "Cette adresse e-mail est déjà utilisée. Veuillez en choisir une autre !";
        } else {
            if (empty(readUserByLogin($tab['username']))) {
                $result = addUser ($tab['username'], $tab['email'], $tab['password']);
                if ($result) {
                    $successMessage = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
                } else {
                    $message = "Une erreur est survenue lors de l'inscription. Veuillez réessayer.";
                }
            } else {
                $message = "Ce nom d'utilisateur existe déjà. Veuillez en choisir un autre !";
            }
        }
    }
}

if (isset($_POST['connexion'])) {
    $tab = dataTestConnexion();
    if ($tab['erreur'] != '') {
        $messageCo = $tab['erreur'];
    } else {
        $data = readUserByLogin($tab['loginCo']);
        if (empty($data)) {
            $messageCo = "Nom d'utilisateur ou mot de passe incorrect !";
        } else {
            if (password_verify($tab['passwordCo'], $data[0]['password'])) {
                session_regenerate_id(true); // Regenerate session ID
                $_SESSION['user'] = $data[0]['username'];
                header("Location: dashboard.php");
                exit();
            } else {
                $messageCo = "Nom d'utilisateur ou mot de passe incorrect !";
            }
        }
    }
}

$listUser    = readUsers();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Histoire du Chelsea Fran Club.">
    <meta name="keywords" content="Chelsea, FC, football, histoire, communauté">
    <meta name="author" content="Chelsea Fran Club">
    <title>Inscription - Chelsea Fran Club</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="style/style.css">
    <STYLE>
        
.toggle-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.toggle {
    display: none;
}

.toggle-label {
    cursor: pointer;
    width: 60px;
    height: 30px;
    background-color: #ccc;
    border-radius: 15px;
    position: relative;
    transition: background-color 0.3s;
}

.toggle-label:before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: white;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: transform 0.3s;
}

.toggle:checked + .toggle-label {
    background-color: #007bff;
}

.toggle:checked + .toggle-label:before {
    transform: translateX(30px);
}

.form-container {
    display: none; /* Masquer par défaut */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 300px; /* Ajustez la largeur selon vos besoins */
    margin: 0 auto; /* Centre le formulaire horizontalement */
    margin-bottom: 30px;
}

.form-container.active {
    display: block; /* Afficher le formulaire actif */
}

#toggleText {
    margin-left: 10px;
    font-size: 16px;
}

.message, .messageCo {
    color: white;
    font-size: 15px;
    text-align: center; /* Centre le texte */
    margin: 10px 0; /* Ajoute un peu d'espace autour du message */
    font-weight: bold; /* Optionnel : rend le texte en gras */
    width: 100%; /* Assurez-vous que le message prend toute la largeur du conteneur */
    display: block; /* Assurez-vous que le message est un bloc pour centrer correctement */
}
    </STYLE>
   
</head>
<body>
    <header>
        <div class="logo">
            <a href="accueil.html">
                <img src="../images CLUB/Logos/LOGO_DU_SITE-removebg-preview - Copie.png" alt="Logo Chelsea Fran Club">
            </a>
        </div>
        <h1>Chelsea Fran Club</h1>    
        <div class="auth-buttons">
            <?php if (isset($_SESSION['user'])): ?>
                <a href="dashboard.php">Mon Compte (<?php echo htmlspecialchars($_SESSION['user']); ?>)</a>
            <?php else: ?>
                <a href="index.php">S'inscrire/ Se connecter</a>
            <?php endif; ?>
        </div>
    </header>
    
    <nav>
        <ul>
            <li><a href="accueilv2.html">Accueil</a></li>
            <li><a href="actu2.html">Actualités</a></li>
            <li><a href="match.html">Match</a></li>
            <li>
                <a href="#">Club</a>
                <ul class="dropdown">
                    <li><a href="histoire.html">Notre Histoire</a></li>
                    <li><a href="statistiques.html">Statistiques</a></li>
                    <li><a href="effectif.html">Effectif</a></li>
                    <li><a href="classement.html">Saison 24/25</a></li>
                </ul>
            </li>
            <li><a href="compte.html">Compte</a></li>
        </ul>
    </nav>

    <main>
        <h2 id="formTitle">Inscription</h2>
        <div class="toggle-container">
            <input type="checkbox" id="toggle" class="toggle">
            <label for="toggle" class="toggle-label"></label>
            <span id="toggleText">S'inscrire</span>
        </div>

        <div class="form-container active" id="registrationFormContainer">
            <form id="registrationForm" method="POST" action="">
                <input type="text" name="username" placeholder="Nom d'utilisateur" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Mot de passe" required>
                <input type="password" name="confirm_password" placeholder="Confirmer le mot de passe" required>
                <button type="submit" name="inscription">S'inscrire</button>
                <div class="message"><?php echo $message; ?></div>
                <div class="message" style="color: green;"><?php echo $successMessage; ?></div> <!-- Ajoutez cette ligne -->
                <p style="margin-top: 30px; font-size: 16px; color:black;">
                    Déjà inscrit ? <a href="connexion.html" style="color:whitesmoke; text-decoration: none; font-size: 15px;">Connecte toi ici</a>
                </p>
            </form>
        </div>

        <div class="form-container" id="loginFormContainer">
            <form id="loginForm" method="POST" action="">
                <input type="text" name="loginCo" placeholder="Nom d'utilisateur" required>
                <input type="password" name="passwordCo" placeholder="Mot de passe" required>
                <button type="submit" name="connexion">Se connecter</button>
                <div class="message"><?php echo $messageCo; ?></div>
                <p style="margin-top: 30px; font-size: 16px; color:black;">
                    Pas encore inscrit ? <a href="inscription.html" style="color:whitesmoke; text-decoration: none; font-size: 15px;">Inscris toi ici</a>
                </p>
            </form>   
        </div>
    </main>
    
    <footer>
        <div class="footer-links">
            <a href="mentionslegales.html">Mentions légales</a>
            <a href="faq.html">Foire à questions</a>
        </div>
    </footer>

    <script>
        const toggle = document.getElementById('toggle');
        const registrationFormContainer = document.getElementById('registrationFormContainer');
        const loginFormContainer = document.getElementById('loginFormContainer');
        const toggleText = document.getElementById('toggleText');
        const formTitle = document.getElementById('formTitle');

        registrationFormContainer.classList.add('active');

        toggle.addEventListener('change', function() {
            if (toggle.checked) {
                registrationFormContainer.classList.remove('active');
                loginFormContainer.classList.add('active');
                toggleText.textContent = "Se connecter";
                formTitle.textContent = "Connexion";
            } else {
                registrationFormContainer.classList.add('active');
                loginFormContainer.classList.remove('active');
                toggleText.textContent = "S'inscrire";
                formTitle.textContent = "Inscription";
            }
        });
    </script>
</body>
</html>