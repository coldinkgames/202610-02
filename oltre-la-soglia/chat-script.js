// COPIONE DELLA CHAT di Claudio Guerra (Immobile, #202610-02).
// Versione minima: al primo accesso c'è il messaggio di Claudio che riepiloga l'incarico e chiede di scrivere
// «Accettiamo» o «Accetto»; solo quelle parole fanno partire la risposta.
// Il copione vero (messaggio del lettore di valle, registrazione, i giorni alla baita) è ancora da scrivere.
// Formato delle voci: vedi il commento in testa a grafica/blog_claudio/chat-script.js.

window.ChatScript = {
  me: { name: 'Cold Ink', initials: 'CI' },
  start: '2026-12-03 18:30',
  people: {
    claudio: { name: 'Claudio Guerra', short: 'Claudio', color: '#7a5a3a', initials: 'CG', avatar: 'avatar-claudio', photo: '', about: 'Oltre la Soglia', phone: '' }
  },
  chats: [
    {
      id: 'claudio', with: 'claudio',
      presence: { online: false, lastSeen: '2026-12-03 18:27' },
      history: [
        { at: '2026-12-03 18:24', from: 'claudio', text: 'Benvenuti. Sono Claudio, la lettera ve l’ho scritta io.' },
        { at: '18:26', from: 'claudio', text: 'Riepilogo, così siamo sicuri di parlare della stessa cosa. Fra qualche giorno sarò in una baita sul lago, quella dove a giugno sono morti i due proprietari. Voi lavorate da fuori sul materiale che vi mando e cercate le spiegazioni normali prima che io pubblichi qualcosa. Due settimane, 15.000 euro, metà subito e metà alla fine, più le spese per le analisi.' },
        { at: '18:27', from: 'claudio', text: 'Se ci state scrivetemi qui «Accettiamo», o «Accetto» se siete da soli. Da lì cominciamo.' }
      ],
      steps: [],
      fallback: [{ read: true }],
      triggers: [
        { words: ['accettiamo', 'accetto'], reply: [
          { text: 'Grazie. Davvero.' },
          { wait: 4000 },
          { text: 'Fra poco vi giro il messaggio del lettore e la registrazione. Ascoltatela prima che vi dica qualsiasi cosa io, non voglio influenzarvi.' },
          { text: 'Tenete la chat aperta.' }
        ] }
      ]
    }
  ]
};
