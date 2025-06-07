# Template React + TypeScript + Vite + Material-UI (Tema ClickUp)

Este é um template inicial para projetos React utilizando TypeScript, Vite para build e Material-UI para componentes de UI, com um tema customizado baseado no Design System do ClickUp.

## Visão Geral

O objetivo deste template é fornecer uma base sólida e organizada para iniciar rapidamente o desenvolvimento de aplicações React com a identidade visual inspirada no ClickUp.

- **React:** Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **Vite:** Ferramenta de build moderna e rápida para desenvolvimento web.
- **Material-UI (MUI):** Biblioteca de componentes React populares.
- **Tema Customizado:** Um tema MUI configurado em `src/styles/theme.ts` com as cores e tipografia principais do ClickUp (conforme coletado em `clickup_design_tokens.md`).

## Como Usar

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação

1.  Descompacte o arquivo `react-clickup-template.zip`.
2.  Navegue até o diretório do projeto no seu terminal:
    ```bash
    cd react-clickup-template
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    # yarn install
    ```

### Rodando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento com Hot Module Replacement (HMR):

```bash
npm run dev
# ou
# yarn dev
```

Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).

### Build para Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
# ou
# yarn build
```

Os arquivos estarão na pasta `dist/`.

## Customização

Este template foi projetado para ser facilmente customizável.

### Tema (Material-UI)

- O arquivo principal de configuração do tema é `src/styles/theme.ts`.
- Você pode modificar as cores, tipografia, espaçamentos e sobrescrever estilos de componentes MUI neste arquivo.
- Consulte o arquivo `clickup_design_tokens.md` (anexado) para ver os tokens de design que foram usados como base.
- **Adicionando Cores:** Adicione novas cores ao objeto `clickupColors` e referencie-as na seção `palette`.
- **Ajustando Tipografia:** Modifique as configurações em `typography` para alterar fontes, pesos ou tamanhos padrão.
- **Sobrescrevendo Componentes:** Utilize a chave `components` dentro de `createTheme` para aplicar estilos padrão a componentes específicos do MUI.

### Estrutura do Projeto

- **Componentes:** Crie seus componentes reutilizáveis dentro de `src/components/`.
- **Páginas:** Adicione novas páginas/rotas em `src/pages/`.
- **Layouts:** Crie layouts gerais (como cabeçalho, rodapé, sidebar) em `src/layouts/`.
- **Estilos Globais:** Modifique ou adicione estilos globais em `src/index.css` ou crie arquivos CSS/SCSS adicionais conforme necessário.
- Consulte o arquivo `template_structure_plan.md` (anexado) para a visão geral da estrutura planejada.

## Referências

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Material-UI](https://mui.com/material-ui/getting-started/)
- [ClickUp Brand Assets](https://clickup.com/brand) (Fonte para os tokens de design)

