# 📋 Guia Deploy GitHub Pages

## Pré-requisitos
1. Repositório SSH/HTTPS configurado
2. GitHub Pages habilitado nas settings do repositório

## Opção 1: Deploy Manual

### Passo 1: Build local
```bash
npm run build
```
Isso gera a pasta `out/` com arquivos estáticos.

### Passo 2: Copiar para gh-pages
```bash
npm install -g gh-pages
gh-pages -d out
```

### Passo 3: Verificar GitHub Settings
1. Vai em Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / folder: `/ (root)`

---

## Opção 2: Deploy Automático com GitHub Actions (RECOMENDADO)

### Passo 1: Criar o workflow
Arquivo já criado em `.github/workflows/deploy.yml`

### Passo 2: Push para GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Passo 3: Verificar Actions
1. Vai em GitHub → Actions
2. Vê se o workflow executou
3. Se tudo OK, site estará em: `https://seu-usuario.github.io/seu-repositorio`

---

## ⚙️ Configurações Importantes

### Se seu repositório é `beatrizsilvestrelira.github.io`:
- ✅ Já está configurado (deploy na raiz)
- Próximo: Ir direto para deploy

### Se seu repositório tem outro nome (ex: `bia-psi`):
1. Abra `next.config.ts`
2. Descomente e modifique:
```typescript
basePath: '/bia-psi',
```
3. Salve e faça push

---

## 🚀 Testando Localmente

```bash
npm run build
npm run start
```
Acesse `http://localhost:3000` - deve funcionar igual ao dev

---

## 🔍 Troubleshooting

### Imagens não carregam
- ✅ Já fixado com `unoptimized: true` no next.config.ts

### CSS não funciona
- ✅ Causado por basePath incorreto
- Verifique se `basePath: '/seu-repo'` está definido

### Caminhos internos quebrados
- ✅ Use `next/link` (já está sendo usado)
- Não use `<a href="/path">` direto

---

## 📊 Depois do Deploy

1. Submeter sitemap em Google Search Console
2. Validar que robots.txt está acessível
3. Testar todas as páginas no live
