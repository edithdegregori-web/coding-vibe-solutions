// Chat de Coding IA en las páginas del blog. Misma configuración que index.html.
import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://proyecto-01-n8n.jzndzk.easypanel.host/webhook/6c87a8bb-ae1b-4e6f-8f42-e6c92847946d/chat',
  webhookConfig: { method: 'POST', headers: {} },
  target: '#n8n-chat',
  mode: 'window',
  showWindowCloseButton: true,
  chatInputKey: 'chatInput',
  chatSessionKey: 'sessionId',
  enableStreaming: true,
  metadata: {},
  showWelcomeScreen: false,
  defaultLanguage: 'en',
  initialMessages: [
    '¡Hola! 👋',
    'Soy Coding IA, el asistente virtual de Coding Vibe Solutions. ¿En qué te puedo ayudar?'
  ],
  i18n: {
    en: {
      title: 'Coding IA',
      subtitle: 'Asistente virtual de Coding Vibe Solutions · Atendemos 24/7',
      footer: '',
      getStarted: 'Nueva conversación',
      inputPlaceholder: 'Escribí tu consulta...',
    },
  },
});
