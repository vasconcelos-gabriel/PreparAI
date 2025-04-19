# PreparaAi: Plataforma de Preparação para Entrevistas de Emprego

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>
</div>

## 🤖 Introdução

A **PreparaAi** é uma plataforma inovadora que utiliza assistentes de voz baseados em IA para ajudar na preparação para entrevistas de emprego. Com um design moderno e uma interface intuitiva, a plataforma oferece uma experiência imersiva e eficiente, permitindo que os usuários pratiquem suas habilidades de entrevista com feedback instantâneo e personalizado.


## ⚙️ Tecnologias Utilizadas

- Next.js  
- Firebase  
- Tailwind CSS  
- Vapi AI  
- shadcn/ui  
- Google Gemini  
- Zod  

## 🔋 Funcionalidades

👉 **Autenticação**: Criação de conta e login usando email e senha com Firebase.  
👉 **Criar Entrevistas**: Gere entrevistas de emprego com ajuda dos assistentes de voz da Vapi e do Google Gemini.  
👉 **Feedback da IA**: Realize a entrevista com o assistente de voz e receba um retorno imediato com base na sua conversa.  
👉 **Interface Moderna**: Layout bonito, intuitivo e fácil de usar.  
👉 **Página de Entrevista**: Entrevistas com IA em tempo real, com transcrição e feedback detalhado.  
👉 **Painel de Controle**: Gerencie e acompanhe todas as entrevistas de forma organizada.  
👉 **Design Responsivo**: Compatível com diferentes tamanhos de tela, funcionando bem em qualquer dispositivo.  

E muito mais, incluindo arquitetura de código bem estruturada e componentes reutilizáveis.

## 🤸 Clonando & Rodando o Projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina.

### **Pré-requisitos**

Certifique-se de que você tem os seguintes itens instalados:

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

### **Clonar o Repositório**

```bash
git clone https://github.com/vasconcelos-gabriel/PreparAI.git
cd PreparAI
```

**Instalação**

Instale as dependências do projeto usando o npm:

```bash
npm install
```

**Configurar Variáveis de Ambiente**

Crie um novo arquivo chamado `.env.local` na raiz do seu projeto e adicione o seguinte conteúdo:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Substitua os valores de exemplo com suas credenciais reais do **[Firebase](https://firebase.google.com/)** e **[Vapi](https://vapi.ai/)**.

**Executando o Projeto**

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o projeto.
