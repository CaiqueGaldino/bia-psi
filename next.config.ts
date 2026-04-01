import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* GitHub Pages Configuration */
  output: 'export', // Gera arquivos estáticos para GitHub Pages
  reactCompiler: true,
  
  // Desabilitar otimização de imagens (GitHub Pages não suporta)
  images: {
    unoptimized: true,
  },

  // Se o repositório é um subfolder (ex: github.com/user/repo)
  // descomente a linha abaixo e substitua 'repo' pelo nome do repositório:
  basePath: '/bia-psi',
};

export default nextConfig;
