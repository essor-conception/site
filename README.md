# Essor Conception

Site vitrine – Prévention Incendie, Formation & Conseil (Région Occitanie).

- **En ligne :** [www.essor-conception.com](https://www.essor-conception.com)
- HTML/CSS statique, pas de build.

## Déploiement sur GitHub Pages

```bash
npm install
npm run deploy
```

Puis dans le dépôt GitHub : **Settings → Pages** → Source **Deploy from a branch** → branche **gh-pages** → dossier **/ (root)**.

## Domaine personnalisé (www.essor-conception.com)

Dans le dépôt GitHub : **Settings → Pages** → section **Custom domain** → saisir **www.essor-conception.com** → Save. Cocher **Enforce HTTPS** une fois le DNS propagé.

Chez le registrar du nom **essor-conception.com** (OVH, Gandi, etc.), ajouter un enregistrement **CNAME** : nom **www** → valeur **essor-conception.github.io** (ou le compte/organisation GitHub indiqué par Pages).
