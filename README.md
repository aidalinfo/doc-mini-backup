# Mini-Backup Documentation

## 1. Introduction

Mini-Backup est un outil open-source conçu pour simplifier et automatiser les sauvegardes de bases de données MongoDB et MySQL, ainsi que le stockage des sauvegardes sur Amazon S3. Cet outil est idéal pour les développeurs et les administrateurs système qui souhaitent mettre en place une solution de sauvegarde fiable et facile à configurer.

## 2. Installation

Pour installer Mini-Backup, suivez ces étapes :

1. Clonez le repository :
   git clone https://github.com/aidalinfo/mini-backup

2. Accédez au répertoire du projet :
   cd mini-backup

3. Installez les dépendances :
   npm install

## 3. Configuration

La configuration de Mini-Backup se fait principalement via le fichier `config.json`. Voici comment configurer les différents aspects de l'outil :

### 3.1. Configuration générale

Dans le fichier `config.json`, vous pouvez définir les paramètres généraux suivants :

{
  "backupPath": "/chemin/vers/dossier/sauvegardes",
  "retentionDays": 7,
  "s3": {
    ...
  },
  "mongodb": {
    ...
  },
  "mysql": {
    ...
  }
}

- `backupPath` : Le chemin où les sauvegardes seront stockées localement avant d'être envoyées sur S3.
- `retentionDays` : Le nombre de jours pendant lesquels les sauvegardes seront conservées.

### 3.2. Configuration MongoDB

Pour configurer les sauvegardes MongoDB, utilisez la section `mongodb` dans `config.json` :

"mongodb": {
  "uri": "mongodb://user:password@localhost:27017",
  "databases": ["db1", "db2"],
  "options": {
    "gzip": true
  }
}

- `uri` : L'URI de connexion à votre serveur MongoDB.
- `databases` : Un tableau des noms de bases de données à sauvegarder.
- `options` : Des options supplémentaires pour la sauvegarde, comme la compression gzip.

### 3.3. Configuration MySQL

Pour configurer les sauvegardes MySQL, utilisez la section `mysql` dans `config.json` :

"mysql": {
  "host": "localhost",
  "user": "root",
  "password": "password",
  "databases": ["db1", "db2"]
}

- `host` : L'hôte du serveur MySQL.
- `user` : Le nom d'utilisateur pour la connexion.
- `password` : Le mot de passe pour la connexion.
- `databases` : Un tableau des noms de bases de données à sauvegarder.

### 3.4. Configuration S3

Pour configurer le stockage sur Amazon S3, utilisez la section `s3` dans `config.json` :

"s3": {
  "accessKeyId": "VOTRE_ACCESS_KEY_ID",
  "secretAccessKey": "VOTRE_SECRET_ACCESS_KEY",
  "region": "eu-west-3",
  "bucket": "nom-de-votre-bucket"
}

- `accessKeyId` : Votre identifiant de clé d'accès AWS.
- `secretAccessKey` : Votre clé d'accès secrète AWS.
- `region` : La région AWS où se trouve votre bucket S3.
- `bucket` : Le nom de votre bucket S3 où les sauvegardes seront stockées.

## 4. Utilisation

Pour lancer une sauvegarde, exécutez la commande suivante :

node index.js

Cette commande va :
1. Effectuer les sauvegardes MongoDB et MySQL selon la configuration.
2. Compresser les fichiers de sauvegarde.
3. Uploader les sauvegardes sur Amazon S3.
4. Nettoyer les anciennes sauvegardes selon la rétention configurée.

## 5. Exemples

Voici un exemple de configuration complète dans `config.json` :

{
  "backupPath": "/home/user/backups",
  "retentionDays": 7,
  "s3": {
    "accessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "secretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "region": "eu-west-3",
    "bucket": "my-backup-bucket"
  },
  "mongodb": {
    "uri": "mongodb://user:password@localhost:27017",
    "databases": ["project1", "project2"],
    "options": {
      "gzip": true
    }
  },
  "mysql": {
    "host": "localhost",
    "user": "root",
    "password": "mysqlpassword",
    "databases": ["wordpress", "prestashop"]
  }
}

## 6. Dépannage

Si vous rencontrez des problèmes lors de l'utilisation de Mini-Backup, voici quelques étapes de dépannage :

1. Vérifiez que toutes les dépendances sont correctement installées.
2. Assurez-vous que les informations de connexion (MongoDB, MySQL, S3) sont correctes.
3. Vérifiez les permissions du dossier de sauvegarde local.
4. Consultez les logs pour plus d'informations sur les erreurs éventuelles.

## 7. Contribution

Les contributions à Mini-Backup sont les bienvenues ! Si vous souhaitez contribuer, veuillez :

1. Forker le repository
2. Créer une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature)
3. Commiter vos changements (git commit -m 'Add some AmazingFeature')
4. Pousser vers la branche (git push origin feature/AmazingFeature)
5. Ouvrir une Pull Request

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur le repository GitHub.
