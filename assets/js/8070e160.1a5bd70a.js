"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[3822],{14143:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"quickstart","title":"Quickstart Guide","description":"Prerequisites","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/eliza/docs/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/eliza/tree/main/docs/docs/quickstart.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\ude80 Introduction","permalink":"/eliza/docs/intro"},"next":{"title":"Character Files","permalink":"/eliza/docs/core/characterfile"}}');var r=s(74848),l=s(28453);const t={sidebar_position:2},o="Quickstart Guide",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Choose Your Model",id:"choose-your-model",level:2},{value:"Create Your First Agent",id:"create-your-first-agent",level:2},{value:"Platform Integration",id:"platform-integration",level:2},{value:"Discord Bot Setup",id:"discord-bot-setup",level:3},{value:"Twitter Integration",id:"twitter-integration",level:3},{value:"Telegram Bot",id:"telegram-bot",level:3},{value:"Optional: GPU Acceleration",id:"optional-gpu-acceleration",level:2},{value:"Basic Usage Examples",id:"basic-usage-examples",level:2},{value:"Chat with Your Agent",id:"chat-with-your-agent",level:3},{value:"Run Multiple Agents",id:"run-multiple-agents",level:3},{value:"Common Issues &amp; Solutions",id:"common-issues--solutions",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quickstart-guide",children:"Quickstart Guide"})}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before getting started with Eliza, ensure you have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Node.js 22+"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n",(0,r.jsx)(n.li,{children:"Git for version control"}),"\n",(0,r.jsx)(n.li,{children:"A code editor (VS Code recommended)"}),"\n",(0,r.jsx)(n.li,{children:"CUDA Toolkit (optional, for GPU acceleration)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Clone and Install"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Clone the repository\ngit clone https://github.com/ai16z/eliza.git\ncd eliza\n\n# Install dependencies\npnpm install\n\n# Install optional Sharp package if needed\npnpm install --include=optional sharp\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Configure Environment"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Copy example environment file\ncp .env.example .env\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Edit ",(0,r.jsx)(n.code,{children:".env"})," and add your values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Required environment variables\nDISCORD_APPLICATION_ID=  # For Discord integration\nDISCORD_API_TOKEN=      # Bot token\nOPENAI_API_KEY=        # OpenAI API key (starting with sk-*)\nELEVENLABS_XI_API_KEY= # API key from elevenlabs (for voice)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"choose-your-model",children:"Choose Your Model"}),"\n",(0,r.jsx)(n.p,{children:"Eliza supports multiple AI models:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Llama"}),": Set ",(0,r.jsx)(n.code,{children:"XAI_MODEL=meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Grok"}),": Set ",(0,r.jsx)(n.code,{children:"XAI_MODEL=grok-beta"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OpenAI"}),": Set ",(0,r.jsx)(n.code,{children:"XAI_MODEL=gpt-4o-mini"})," or ",(0,r.jsx)(n.code,{children:"gpt-4o"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For local inference:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"XAI_MODEL"})," to your chosen model"]}),"\n",(0,r.jsxs)(n.li,{children:["Leave ",(0,r.jsx)(n.code,{children:"X_SERVER_URL"})," and ",(0,r.jsx)(n.code,{children:"XAI_API_KEY"})," blank"]}),"\n",(0,r.jsx)(n.li,{children:"The system will automatically download the model from Hugging Face"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"create-your-first-agent",children:"Create Your First Agent"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Edit the Character File"}),"\nCheck out ",(0,r.jsx)(n.code,{children:"src/core/defaultCharacter.ts"})," to customize your agent's personality and behavior."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can also load custom characters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'pnpm start --characters="path/to/your/character.json"\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Start the Agent"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm start\n"})}),"\n",(0,r.jsx)(n.h2,{id:"platform-integration",children:"Platform Integration"}),"\n",(0,r.jsx)(n.h3,{id:"discord-bot-setup",children:"Discord Bot Setup"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a new application at ",(0,r.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"})]}),"\n",(0,r.jsx)(n.li,{children:"Create a bot and get your token"}),"\n",(0,r.jsx)(n.li,{children:"Add bot to your server using OAuth2 URL generator"}),"\n",(0,r.jsxs)(n.li,{children:["Set ",(0,r.jsx)(n.code,{children:"DISCORD_API_TOKEN"})," and ",(0,r.jsx)(n.code,{children:"DISCORD_APPLICATION_ID"})," in your ",(0,r.jsx)(n.code,{children:".env"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"twitter-integration",children:"Twitter Integration"}),"\n",(0,r.jsxs)(n.p,{children:["Add to your ",(0,r.jsx)(n.code,{children:".env"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"TWITTER_USERNAME=  # Account username\nTWITTER_PASSWORD=  # Account password\nTWITTER_EMAIL=    # Account email\nTWITTER_COOKIES=  # Account cookies\n"})}),"\n",(0,r.jsx)(n.h3,{id:"telegram-bot",children:"Telegram Bot"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create a bot"}),"\n",(0,r.jsxs)(n.li,{children:["Add your bot token to ",(0,r.jsx)(n.code,{children:".env"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"TELEGRAM_BOT_TOKEN=your_token_here\n"})}),"\n",(0,r.jsx)(n.h2,{id:"optional-gpu-acceleration",children:"Optional: GPU Acceleration"}),"\n",(0,r.jsx)(n.p,{children:"If you have an NVIDIA GPU:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Install CUDA support\nnpx --no node-llama-cpp source download --gpu cuda\n\n# Ensure CUDA Toolkit, cuDNN, and cuBLAS are installed\n"})}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage-examples",children:"Basic Usage Examples"}),"\n",(0,r.jsx)(n.h3,{id:"chat-with-your-agent",children:"Chat with Your Agent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Start chat interface\npnpm run shell\n"})}),"\n",(0,r.jsx)(n.h3,{id:"run-multiple-agents",children:"Run Multiple Agents"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'pnpm start --characters="agent1.json,agent2.json"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"common-issues--solutions",children:"Common Issues & Solutions"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Node.js Version"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ensure Node.js 22+ is installed"}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"node -v"})," to check version"]}),"\n",(0,r.jsxs)(n.li,{children:["Consider using ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," to manage Node versions"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Sharp Installation"}),"\nIf you see Sharp-related errors:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install --include=optional sharp\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"CUDA Setup"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify CUDA Toolkit installation"}),"\n",(0,r.jsx)(n.li,{children:"Check GPU compatibility"}),"\n",(0,r.jsx)(n.li,{children:"Ensure proper environment variables are set"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"Once you have your agent running, explore:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud83e\udd16 ",(0,r.jsx)(n.a,{href:"/eliza/docs/core/agents",children:"Understand Agents"})]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83d\udcdd ",(0,r.jsx)(n.a,{href:"/eliza/docs/core/characterfile",children:"Create Custom Characters"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u26a1 ",(0,r.jsx)(n.a,{href:"/eliza/docs/core/actions",children:"Add Custom Actions"})]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83d\udd27 ",(0,r.jsx)(n.a,{href:"/eliza/docs/guides/configuration",children:"Advanced Configuration"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed API documentation, troubleshooting, and advanced features, check out our ",(0,r.jsx)(n.a,{href:"https://ai16z.github.io/eliza/",children:"full documentation"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Join our ",(0,r.jsx)(n.a,{href:"https://discord.gg/ai16z",children:"Discord community"})," for support and updates!"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(96540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);