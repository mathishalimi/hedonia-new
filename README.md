# Hedonia - Le Jeu à Boire Ultime 🍻

Application de jeu à boire sociale avec plusieurs modes de jeu et fonctionnalités interactives.

## Technologies Utilisées

- React + TypeScript
- Vite
- TailwindCSS
- Socket.IO
- Express
- Stripe
- Supabase

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/hedonia.git

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build
```

## Structure du Projet

```
├── src/
│   ├── components/     # Composants React
│   ├── pages/         # Pages de l'application
│   ├── services/      # Services (API, Socket, etc.)
│   ├── store/         # State management
│   ├── types/         # Types TypeScript
│   └── utils/         # Utilitaires
├── server/           # Backend Express
└── public/           # Assets statiques
```

## Configuration

Créez un fichier `.env` avec les variables suivantes :

```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=ws://localhost:3000
VITE_STRIPE_PUBLIC_KEY=votre_clé_stripe
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_supabase
```

## Fonctionnalités

- 🎲 Mode Classique
- 🌶️ Mode Coquin (Premium)
- 🧩 Mode Énigmes
- 📚 Mode Culture G
- ⚔️ Mode Duel
- 💬 Chat en temps réel
- 🎮 Mini-jeux
- 💳 Paiements Stripe
- 🔒 Contenu Premium

## Déploiement

- Frontend : Netlify
- Backend : Heroku
- Base de données : Supabase

## Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## License

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.