# **Test Technique - DevOps**

### **Objectif**

**Configurer l'infrastructure pour le déploiement d’une API déjà en place**

### **Étape 1: Configuration de l'Infrastructure**

- Mettez en place l'infrastructure nécessaire pour le déploiement. Vous pouvez utiliser des services cloud gratuits de votre choix.

### **Étape 2: Pipeline CI/CD avec GitHub Actions**

- Configurez un pipeline de déploiement continu (CI/CD) en utilisant GitHub Actions.
- Automatisez les étapes suivantes dans le pipeline :
    - Installation des dépendances Node.js.
    - Déploiement sur le serveur de développement après chaque modification du code source.
    - Faire en sorte que l’application redémarre automatiquement en cas de problème

### **Étape 3: Gestion des Secrets et de la Sécurité**

- Gérez les secrets de l'application en utilisant des variables d'environnement pour stocker les informations sensibles de manière sécurisée.=

### **Étape 4: Tests Unitaires pour le Déploiement**

- Écrivez des tests unitaires pour valider le bon fonctionnement de l'application lors de son déploiement. Cela devrait inclure, mais ne pas se limiter à :
    1. **Tests de Connexion à la Base de Données :** Assurez-vous que l'application peut établir une connexion à MongoDB une fois déployée.
    2. **Tests de Disponibilité :** S'assurer que l'application est accessible et répond aux requêtes une fois déployée. Cela pourrait être un simple test de ping ou une vérification que l'URL principale renvoie un code de statut 200.
- Intégrez ces tests dans votre pipeline CI/CD. C'est-à-dire que lorsque GitHub Actions déploie votre application, il devrait également exécuter ces tests pour s'assurer que le déploiement a été réussi.

**ETAPES BONUS**

### **Surveillance et Gestion des Erreurs**

- Configurez la gestion des erreurs en utilisant Sentry pour capturer et gérer les erreurs de l'application.
- Trouvez un moyen de monitoring et de visualisation des métriques. Le but étant de pouvoir facilement repérer qui s’est connecté suite à une intrusion par exemple.

### **Mise à l’échelle automatique**

- Mettez en place une mise à l'échelle automatique de l'application Node.js en fonction de la charge. Vous pouvez utiliser Docker ou non. Un test de charge sera lancé pour vérifier le déclenchement de l’autoscaling.

### PS :

L’usage de méthodes de génération de code automatique est autorisé voire même fortement recommandée afin de gagner du temps






