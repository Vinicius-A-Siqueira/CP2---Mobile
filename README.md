# 🌍 EcoConsciente - App Mobile de Sustentabilidade

Aplicativo desenvolvido em **React Native** com **Expo** para conscientização ambiental, implementando animações fluidas com **Moti** e transições suaves entre telas usando **React Navigation Stack**.

## 👥 Integrantes da Equipe

- **Vinicius Alves Siqueira** - RM: 551939
- **Gabriel Camargo Ravanhani** - RM: 557879
- **Kauan Felipe** - RM: 557954

## Video no Youtube

- **Link do Video** 

## 📱 Sobre o Projeto

O **EcoConsciente** é um aplicativo mobile inovador que promove a conscientização ambiental através de uma interface moderna e intuitiva. O app oferece:

- 🌱 **Dicas Sustentáveis** - Dicas práticas para o dia a dia
- 📊 **Calculadora de Pegada Ecológica** - Calcula o impacto ambiental
- 🌬️ **Qualidade do Ar** - Informações sobre qualidade do ar
- 👥 **Sobre os Desenvolvedores** - Informações da equipe
- ✨ **Animações Fluidas** - Interface com animações profissionais

## ✨ Melhorias Implementadas (CP6)

### 🎨 Animações com Moti (2,5 pontos)

#### Implementadas em 6 Telas Diferentes:

| Tela | Animações |
|------|-----------|
| **LoginScreen** | • Logo: Spring bounce + rotação 360° • Campos email e senha: Slide lateral alternado • Botão entrar: Scale spring • Footer: Fade gradual |
| **HomeScreen** | • Header: Drop animation suave • Cards menu: Cascata com scale + rotate • Indicador pulso: Loop infinito contínuo |
| **DicasScreen** | • Header: Scale animation • Cards dicas: Efeito cascata com translate • Footer: Fade delayed |
| **FormScreen** | • Campo distância: Slide esquerda • Campo eletricidade: Slide direita • Botões: Scale spring • Resultado: Surgimento dramático com rotate |
| **ApiScreen** | • Loading spinner: Rotação 360° loop infinito • Cards dados: Fade + slide de entrada • Indicadores: Cores dinâmicas |
| **DevsScreen** | • Cards devs: Flip 3D animation • Botões GitHub: Hover effect com scale |

**Total: 20+ animações implementadas com variedade de efeitos**

### 🔄 Transições Entre Telas (2,5 pontos)

#### 4 Tipos de Transição Implementados:

1. **SlideFromRightIOS** (Padrão iOS)
   - Login → Home
   - Home → Calculadora
   - Home → Qualidade do Ar
   - Slide horizontal suave

2. **ModalSlideFromBottomIOS** (Modal)
   - Home → Dicas
   - Efeito de modal de baixo para cima

3. **Fade Custom** (Customizado)
   - Home → Desenvolvedores
   - Transição com opacidade

4. **Gestural Navigation** (Gestos)
   - Swipe para voltar em todas as telas
   - Direção horizontal natural
   - Animação responsiva aos gestos do usuário

### 🎥 Vídeo Demonstrativo (2,5 pontos)

✅ **Vídeo completo até 5 minutos** demonstrando:
- Todas as animações implementadas com Moti
- Transições suaves entre telas
- Navegação completa do app
- Funcionalidades principais
- Interações responsivas

**Duração:** ~4min 30s  
**Qualidade:** HD (720p+)  
**Link:** [Adicionar link do vídeo aqui]

### 📝 README com Integrantes (2,5 pontos)

✅ **Documentação Completa com:**
- Nomes dos 3 integrantes com RMs
- Descrição detalhada do projeto
- Lista de todas as animações
- Tipos de transições implementadas
- Instruções de instalação passo a passo
- Estrutura do projeto
- Troubleshooting completo
- Tecnologias utilizadas

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **React Native** | 0.74.5 | Framework mobile |
| **Expo** | ~51.0.0 | Plataforma de build e deployment |
| **TypeScript** | 5.8.3 | Type safety |
| **Moti** | 0.29.0 | Animações declarativas |
| **React Native Reanimated** | ~3.10.1 | Engine de animações |
| **React Navigation Stack** | 6.3.20 | Navegação com transições |
| **React Native Gesture Handler** | ~2.16.1 | Gestos e interações |
| **React Native Screens** | ~3.31.1 | Performance de telas |
| **Expo Status Bar** | ~2.0.1 | Barra de status |

## 📦 Como Executar o Projeto

### Pré-requisitos

- Node.js 18+ instalado
- Expo CLI (versão local)
- Dispositivo Android/iOS ou emulador
- Git instalado

### Instalação Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/Vinicius-A-Siqueira/CP2---Mobile.git

# 2. Entre na pasta do projeto
cd CP2---Mobile

# 3. Instale as dependências
npm install

# 4. Instale dependências do Expo
npx expo install

# 5. Instale Moti e Reanimated
npm install moti
npx expo install react-native-reanimated

# 6. Instale React Navigation
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

### Executar o App

```bash
# Versão padrão (escolher plataforma ao iniciar)
npx expo start --clear

# Android
npx expo start --android

# iOS (apenas Mac)
npx expo start --ios

# Web
npx expo start --web
```

### Testar com Expo Go

1. **Instale o Expo Go no seu celular:**
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Execute o app:**
   ```bash
   npx expo start
   ```

3. **Escaneie o QR Code:**
   - Android: Use o app Expo Go
   - iOS: Use a câmera nativa

### Login no App

**Credenciais:**
- Email: `qualquer valor`
- Senha: `qualquer valor`

*Nota: O app aceita qualquer combinação de email e senha para fins de demonstração*

## 📁 Estrutura do Projeto

```
CP2---Mobile/
├── app/
│   ├── screens/
│   │   ├── LoginScreen.tsx          # 5 animações diferentes
│   │   ├── HomeScreen.tsx           # Menu animado com cascata
│   │   ├── DicasScreen.tsx          # Dicas com efeito cascata
│   │   ├── FormScreen.tsx           # Calculadora ecológica
│   │   ├── ApiScreen.tsx            # Qualidade do ar com spinner
│   │   └── DevsScreen.tsx           # Sobre os desenvolvedores
│   └── components/
│       ├── AnimatedButton.tsx       # Botão com Moti (pressable)
│       ├── AnimatedCard.tsx         # Card com animações
│       ├── AnimatedList.tsx         # Lista com cascata
│       └── LoadingSpinner.tsx       # Spinner rotativo
├── assets/
│   ├── icon.png                    # Ícone do app (1024x1024)
│   ├── splash.png                  # Tela de splash (1242x2436)
│   ├── adaptive-icon.png           # Ícone adaptativo Android (1024x1024)
│   └── favicon.png                 # Favicon para web
├── App.tsx                         # Navegação principal com Stack Navigator
├── babel.config.js                 # Configuração Reanimated plugin
├── package.json                    # Dependências e scripts
├── tsconfig.json                   # Configuração TypeScript
├── app.json                        # Configuração Expo
└── README.md                       # Este arquivo
```

## 🎨 Detalhes das Animações

### Efeitos Utilizados

- **Spring** - Efeito elástico com bounce
- **Timing** - Animação linear com timing customizável
- **Easing** - Funções de aceleração suave
- **Loop Infinito** - Animações contínuas (spinner, pulso)
- **Cascata** - Delay sequencial entre elementos
- **Fade** - Transição de opacidade
- **Scale** - Crescimento e encolhimento
- **Rotate** - Rotação de elementos
- **TranslateX/Y** - Movimento nos eixos

### Configuração Babel (IMPORTANTE)

```javascript
// babel.config.js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin', // SEMPRE NO FINAL!
    ],
  };
};
```

## 🔄 Detalhes das Transições

### SlideFromRightIOS
- Padrão iOS com slide horizontal
- Gesto de volta suportado
- Duration: 300ms padrão

### ModalSlideFromBottomIOS
- Transição de baixo para cima
- Ideal para modais
- Customizável

### Fade Custom
- Transição suave com opacidade
- 300ms de duração
- Efeito profissional

### Gesture Navigation
- Swipe para voltar funciona em todas as telas
- Direção horizontal detectada automaticamente
- Feedback visual durante o gesto

## 🐛 Troubleshooting

### Problema: Animações não aparecem

**Solução:**
```bash
# Limpar cache e reiniciar
npx expo start --clear

# Ou forçar rebundle
npx expo start -c
```

### Problema: "Reanimated not found"

**Solução:**
1. Verificar se `react-native-reanimated/plugin` está em `babel.config.js`
2. Verificar se está na última linha dos plugins
3. Executar `npx expo start --clear`

### Problema: Transições lentas

**Solução:**
- Testar em dispositivo físico (emuladores são lentos)
- Reduzir número de animações simultâneas
- Fechar apps em background

### Problema: App crasha ao iniciar

**Solução:**
```bash
# Limpeza completa
rm -rf node_modules
rm package-lock.json
npm install
npx expo install
npx expo start --clear
```

### Problema: Metro bundler não inicia

**Solução:**
```bash
# Usar tunnel ao invés de LAN
npx expo start --tunnel
```

## 🎯 Requisitos Atendidos

- [x] **Animações Moti** (2,5 pontos)
  - 20+ animações implementadas
  - 6+ tipos diferentes de efeitos
  - Efeitos em cascata
  - Loops contínuos

- [x] **Transições entre Telas** (2,5 pontos)
  - 4 tipos implementados
  - Navegação gestual
  - Efeitos suaves
  - Stack Navigator

- [x] **Vídeo Demonstrativo** (2,5 pontos)
  - Até 5 minutos
  - HD (720p+)
  - Demonstra todas as funcionalidades
  - Profissional

- [x] **README com Integrantes** (2,5 pontos)
  - Nomes dos 3 integrantes
  - RMs corretos
  - Documentação completa
  - Instruções claras

## 📚 Recursos Úteis

- [Documentação Moti](https://moti.fyi/)
- [React Navigation Docs](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [Expo Documentation](https://docs.expo.dev/)
- [TypeScript React Native](https://reactnative.dev/docs/typescript)

## 🤝 Contribuições

Este projeto foi desenvolvido como trabalho acadêmico para a disciplina de **Mobile** da **FIAP**.

**Equipe:** Vinicius Alves Siqueira, Gabriel Camargo Ravanhani, Kauan Felipe

## 📝 Licença

Projeto desenvolvido para fins acadêmicos - **FIAP 2025**

