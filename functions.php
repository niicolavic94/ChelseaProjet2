<?php
// functions.php

// Fonction de nettoyage de données
function sanitize($data) {
    return htmlentities(strip_tags(stripslashes(trim($data))));
}

// Fonction pour tester les données du formulaire d'inscription
function dataTestInscription() {
    if (empty($_POST["username"]) || empty($_POST["email"]) || empty($_POST["password"]) || empty($_POST["confirm_password"])) {
        return ["username" => '', "email" => '', "password" => '', "erreur" => 'Veuillez remplir tous les champs !'];
    }
    
    $username = sanitize($_POST['username']);
    $email = sanitize($_POST["email"]);
    $password = sanitize($_POST["password"]);
    $confirm_password = sanitize($_POST["confirm_password"]);

    // Validation de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ["username" => '', "email" => '', "password" => '', "erreur" => 'Email pas au bon format !'];
    }

    // Validation du nom d'utilisateur (3-20 caractères, lettres, chiffres, underscores)
    if (!preg_match('/^[a-zA-Z0-9_]{3,20}$/', $username)) {
        return ["username" => '', "email" => '', "password" => '', "erreur" => 'Le nom d\'utilisateur doit contenir entre 3 et 20 caractères, sans espaces ni caractères spéciaux !'];
    }

    // Validation des mots de passe
    if ($password !== $confirm_password) {
        return ["username" => '', "email" => '', "password" => '', "erreur" => 'Les mots de passe ne correspondent pas !'];
    }

    // Validation du mot de passe (au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial)
    if (!preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/', $password)) {
        return ["username" => '', "email" => '', "password" => '', "erreur" => 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial !'];
    }

    $password = password_hash($password, PASSWORD_BCRYPT);
    return ["username" => $username, "email" => $email, "password" => $password, "erreur" => ''];
}

// Fonction pour tester les données du formulaire de connexion
function dataTestConnexion() {
    if (empty($_POST["loginCo"]) || empty($_POST["passwordCo"])) {
        return ["loginCo" => '', "passwordCo" => '', "erreur" => 'Veuillez remplir le Nom d\'utilisateur ET le Mot de Passe !'];
    }
    $loginCo = sanitize($_POST["loginCo"]);
    $passwordCo = sanitize($_POST["passwordCo"]);
    return ["loginCo" => $loginCo, "passwordCo" => $passwordCo, "erreur" => ''];
}

// Fonction pour envoyer les données en insertion à la BDD
function addUser ($username, $email, $password) {
    $bdd = Database::getInstance();
    try {
        $req = $bdd->prepare('INSERT INTO utilisateurs (username, email, password) VALUES (?, ?, ?)');
        $req->execute([$username, $email, $password]);
        return "L'utilisateur avec le nom d'utilisateur : $username , a été enregistré avec succès !";
    } catch (Exception $error) {
        error_log($error->getMessage()); // Log the error
        return "Erreur lors de l'inscription. Veuillez réessayer.";
    }
}

// Fonction pour récupérer tous les utilisateurs en BDD
function readUsers() {
    $bdd = Database::getInstance();
    try {
        $req = $bdd->prepare('SELECT username, email, password FROM utilisateurs');
        $req->execute();
        return $req->fetchAll();
    } catch (Exception $error) {
        error_log($error->getMessage()); // Log the error
        return [];
    }
}

// Fonction pour récupérer un utilisateur en BDD selon un login précis
function readUserByLogin($username) {
    $bdd = Database::getInstance();
    try {
        $req = $bdd->prepare('SELECT username, email, password FROM utilisateurs WHERE username = ?');
        $req->execute([$username]);
        return $req->fetchAll();
    } catch (Exception $error) {
        error_log($error->getMessage()); // Log the error
        return [];
    }
}
?>