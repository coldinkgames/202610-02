(function () {
  function rng(seed) { return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; var t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  var R = rng(1989);
  function pick(a) { return a[Math.floor(R() * a.length)]; }
  function fill(s, p) { return s.replace(/\{p\}/g, p.n).replace(/\{l\}/g, p.l); }

  var places = [
    ['Villa Ortensi', 'Brianza'], ['Colonia Fiorenza', 'Riviera romagnola'], ['Castello di Roccalba', 'Val Trebbia'],
    ['Cascina Malpensata', 'Lomellina'], ['Mulino dei Sette Salti', 'Val Nure'], ['Ospedale psichiatrico di San Vitale', 'Basso Piemonte'],
    ['Borgo di Corte Cenere', 'Polesine'], ['Teatro Arcobaleno', 'Ferrara'], ['Galleria del Bracco', 'Riviera di Levante'],
    ['Villa Sereni', 'Colli Euganei'], ['Chiesa di San Rocco al Lago', "Lago d'Iseo"], ['Forte Montecchio', 'Valtellina'],
    ['Stazione di Ponte Rotto', "Val d'Aveto"], ['Albergo delle Terme Vecchie', 'Salsomaggiore'], ['Collegio Santa Teresa', 'Torino'],
    ['Fornace Rossa', 'Bassa parmense'], ['Villa delle Ortiche', 'Monferrato'], ['Cimitero vecchio di Pietrasecca', 'Abruzzo'],
    ['Palazzo Malvezzi-Orsi', 'Bologna'], ['Seminario di Valfredda', 'Trentino'], ['Manicomio di Colle Ardito', 'Marche'],
    ['Casa del Fattore', 'Langhe'], ['Rocca di Montebruno', 'Appennino ligure'], ['Ex filanda Gallarati', 'Varesotto'],
    ['Ospizio dei Pellegrini', "Valle d'Aosta"], ['Torre della Guardia', 'Cilento'], ['Villaggio minerario di Cave Nere', 'Sulcis'],
    ['Villa Laura', 'Lago Maggiore'], ["Polveriera di Sant'Anna", 'Friuli'], ['Convento delle Clarisse', 'Umbria'],
    ['Casello 42', 'Pianura padana'], ['Ex Sanatorio di Monte Lieto', 'Appennino tosco-emiliano']
  ].map(function (x) { return { n: x[0], l: x[1] }; });

  var titles = [
    ['Primo sopralluogo: {p}', 'Una notte a {p}', '{p}, finalmente', 'Soffiata da un lettore: {p}'],
    ['{p}: il report completo', 'Soffiata confermata: {p}', 'Tre ore dentro {p}', 'Quello che abbiamo misurato a {p}'],
    ['{p}: la registrazione integrale', 'Ritorno a {p}', '{p} — notte di San Giovanni', 'Diretta da {p}: com\u2019\u00e8 andata'],
    ['{p}: rispondo alle critiche', '{p}, i dati grezzi', 'Ancora su {p}', '{p}: questa volta ho le prove']
  ];
  var paraA = [
    ['Ci siamo arrivati alle undici di sera, io e Luca, con una torcia a testa e la compatta che mi ha regalato mia sorella. {p} \u00e8 uno di quei posti di cui in {l} parlano tutti a mezza voce.',
     'Mi hanno scritto in tre, la settimana scorsa, tutti per lo stesso posto: {p}. Non potevo non andarci.',
     'Non so ancora bene cosa sto facendo, ma so che {p} mi chiamava da anni. In {l} lo conoscono tutti.'],
    ['Rilevatore EMF, due registratori, termometro a infrarossi. A {p} siamo entrati in quattro e siamo usciti con molte pi\u00f9 domande di prima.',
     'La soffiata me l\u2019ha mandata un lettore di {l}: luci accese al secondo piano di {p}, dove la corrente non c\u2019\u00e8 dal 1987.',
     'Chi mi segue da tempo sa che {p} era in lista da un pezzo. Questa volta avevamo il permesso del proprietario.'],
    ['Eravamo in diretta in pi\u00f9 di duemila quando a {p} \u00e8 successo quello che avete visto. Qui provo a ricostruire tutto con calma.',
     'Sono tornato a {p} da solo. Volevo capire se quello che avevamo sentito l\u2019anno scorso fosse suggestione.',
     'Molti di voi mi hanno chiesto di {p}. Ci ho passato due notti, sette ore di audio, quattrocento foto.'],
    ['So che il post su {p} far\u00e0 discutere. Lo pubblico lo stesso, con tutti i file originali.',
     'Dopo le polemiche dell\u2019ultimo mese sono andato a {p} con un protocollo pi\u00f9 rigido. Ecco com\u2019\u00e8 andata.',
     'Mi \u00e8 arrivata una soffiata su {p}, in {l}. Il mittente non vuole essere nominato. Ci sono andato.']
  ];
  var paraB = [
    'Al piano terra niente di strano: calcinacci, bottiglie, scritte sui muri. Al primo piano invece la temperatura \u00e8 scesa di colpo, l\u2019abbiamo sentito entrambi prima ancora di guardare il termometro.',
    'Verso l\u2019una abbiamo sentito dei passi sopra di noi. Siamo saliti subito: stanza vuota, polvere intatta sul pavimento. Nessuna impronta tranne le nostre.',
    'Nella foto che vedete c\u2019\u00e8 una sagoma vicino alla finestra. Non l\u2019ho vista mentre scattavo, me ne sono accorto solo a casa.',
    'Il registratore ha catturato una voce, bassa, quasi un sussurro, nel momento in cui chiedevo se ci fosse qualcuno. Riascoltatela con le cuffie.',
    'L\u2019EMF ha segnato picchi ripetuti in un punto preciso del corridoio, sempre lo stesso, in un edificio senza impianto elettrico.'
  ];
  var paraC = [
    'Non dico che sia la prova di qualcosa. Dico che ci torner\u00f2. Se conoscete la storia di questo posto, scrivetemi.',
    'Come sempre: se avete soffiate, la mail \u00e8 sulla pagina Chi sono. Leggo tutto.',
    'Grazie a chi ci ha accompagnato e a chi ci ha aperto il cancello. La caccia continua.',
    'I file originali sono a disposizione di chiunque voglia analizzarli. Non ho nulla da nascondere.'
  ];

  var fans = ['LunaNera_83', 'Marta.G', 'Spettri&Dintorni', 'Davide_RE', 'Fede1990', 'NotteFonda', 'Ale_Mistero', 'Giorgia T.', 'Pino da Lodi', 'ValeriaSogni', 'Roby_Esploratore', 'Sabri'];
  var fanTxt = ['Pelle d\u2019oca. Grazie Claudio, sei il migliore.', 'Ci sono stata da ragazzina, confermo tutto. Quel posto ha qualcosa.', 'Aspettavo questo post da settimane!', 'La foto della finestra mi ha tolto il sonno.', 'Quando organizzi un\u2019uscita con i lettori? Io ci sono.', 'Mio nonno raccontava di quel posto. Bellissimo report.', 'Ascoltato con le cuffie. Si sente benissimo.', 'Il blog pi\u00f9 serio sull\u2019argomento, da anni.'];
  var critics = [['Dott. Marco Liverani', 'fisico'], ['Ing. Paola Restelli', 'acustica'], ['Gruppo Indagini Razionali', 'associazione'], ['S. Bertolini', 'investigatore privato'], ['Elena Casati', 'fotografa'], ['A. Monti', 'geologo']];
  var critTxt = [
    'La "sagoma" \u00e8 un caso da manuale di pareidolia, sommata a una lunga esposizione. Basta aprire gli EXIF.',
    'Il picco EMF coincide con il passaggio della linea a media tensione a 40 metri dall\u2019edificio. \u00c8 sulle mappe pubbliche.',
    'La "voce" \u00e8 rumore del preamplificatore a guadagno massimo. Ho rifatto la prova con lo stesso modello di registratore.',
    'Abbiamo contattato il proprietario: nessuno vi ha autorizzato ad entrare, quella sera.',
    'Il calo di temperatura in una stanza con vetri rotti a novembre non \u00e8 un fenomeno.',
    'Claudio, ti seguivo dal 2012. Ultimamente mi sembra che tu veda quello che vuoi vedere.'
  ];
  var skeptics = ['Ormai \u00e8 tutto montato, peccato.', 'Una volta questo blog era serio.', 'Aspetto i file originali, come promesso tre post fa.', 'Ma il permesso per entrare l\u2019avevi?'];

  var MONTHS = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
  var posts = [];
  for (var y = 2010; y <= 2026; y++) for (var m = 2; m <= 12; m += 2) {
    if (y === 2026 && m > 10) break;
    posts.push({ y: y, m: m, d: 3 + Math.floor(R() * 23) });
  }
  var N = posts.length, prev = 99999;
  posts.forEach(function (p, i) {
    var t = i / (N - 1);
    var era = p.y < 2013 ? 0 : p.y < 2018 ? 1 : p.y < 2023 ? 2 : 3;
    var pl = places[i % places.length];
    var likes = Math.round(42 + 5600 * Math.pow(1 - t, 1.45) + R() * 40);
    if (likes >= prev) likes = prev - 1 - Math.floor(R() * 4);
    prev = likes;
    p.id = 'p' + (i + 1);
    p.idx = i;
    p.era = era;
    p.place = pl.n; p.loc = pl.l;
    p.title = fill(pick(titles[era]), pl);
    p.body = [fill(pick(paraA[era]), pl), pick(paraB), pick(paraC)];
    p.likes = likes;
    var critShare = era === 3 ? 0.7 : era === 2 ? 0.25 : 0.05;
    p.commentCount = Math.round(likes * 0.045 + 5 + (era === 3 ? 60 + R() * 140 : 0));
    var cs = [];
    for (var k = 0; k < 4; k++) {
      if (R() < critShare) {
        if (R() < 0.6) { var c = pick(critics); cs.push({ a: c[0], role: c[1], t: pick(critTxt), critic: true }); }
        else cs.push({ a: pick(fans), t: pick(skeptics) });
      } else cs.push({ a: pick(fans), t: pick(fanTxt) });
    }
    p.comments = cs;
    p.disputed = era === 3 && cs.some(function (c) { return c.critic; });
  });

  var first = posts[0];
  first.title = 'Perch\u00e9 apro questo blog';
  first.place = 'Parma'; first.loc = 'Emilia';
  first.body = [
    'Ho 19 anni, una macchina fotografica compatta e una lista di posti di cui ho sentito parlare fin da bambino. Questo blog serve a tenere traccia di quello che trovo, e a raccogliere le vostre segnalazioni.',
    'Non sono uno scienziato e non pretendo di esserlo. Vado, guardo, registro, racconto. Se c\u2019\u00e8 una spiegazione la cerco, se non c\u2019\u00e8 la scrivo lo stesso.',
    'Se conoscete un posto, scrivetemi. La caccia comincia.'
  ];
  first.comments = [{ a: 'Luca B.', t: 'Io ci sono. Sabato si parte?' }, { a: 'Marta.G', t: 'Bell\u2019idea, ti seguo!' }];

  var latest = [
    { title: 'Ex Sanatorio di Monte Lieto: la voce nel corridoio B', place: 'Ex Sanatorio di Monte Lieto', loc: 'Appennino tosco-emiliano',
      body: ['Sette ore nel padiglione B, da solo, con il protocollo che molti di voi mi avevano chiesto: registratore fisso, telecamera sempre accesa, nessuna domanda ad alta voce dopo le tre.', 'Alle 03:42 il registratore fisso ha catturato una parola. Due sillabe, chiarissime. Il file \u00e8 qui sotto, senza filtri. Ascoltatelo prima di leggere i commenti.', 'So gi\u00e0 cosa diranno. Ma questa volta non c\u2019era nessuno con me, e non c\u2019\u00e8 corrente nell\u2019edificio da trent\u2019anni.'],
      comments: [{ a: 'Ing. Paola Restelli', role: 'acustica', critic: true, t: 'Lo spettrogramma del file mostra una componente costante a 50 Hz e armoniche. In un edificio "senza corrente". Il registratore era collegato a un power bank economico: il rumore viene da l\u00ec.' },
        { a: 'Gruppo Indagini Razionali', role: 'associazione', critic: true, t: 'Il padiglione B \u00e8 stato demolito parzialmente nel 2024. Le foto del post mostrano il padiglione A. Puoi chiarire?' },
        { a: 'Claudio Guerra', author: true, t: 'Il padiglione \u00e8 quello indicato dalla targa all\u2019ingresso. Pubblicher\u00f2 la mappa. Il power bank era spento, lo si vede nel video.' },
        { a: 'NotteFonda', t: 'Io ti credo. Non mollare.' }] },
    { title: 'Rispondo a chi mi d\u00e0 del bugiardo', place: 'Parma', loc: 'Emilia',
      body: ['In sedici anni non ho mai chiesto un euro a nessuno. Non vendo corsi, non vendo gadget, non faccio pubblicit\u00e0. Eppure da mesi leggo che mi invento tutto per i like.', 'Chi mi conosce sa come lavoro. Pubblico i file, accetto le analisi, correggo quando sbaglio. L\u2019ho fatto per Villa Sereni nel 2019 e lo rifar\u00f2.', 'Ma non accetto che un\u2019associazione mi dia del truffatore senza essere mai venuta con me. L\u2019invito \u00e8 aperto: la prossima uscita la facciamo insieme.'],
      comments: [{ a: 'S. Bertolini', role: 'investigatore privato', critic: true, t: 'Nessuno ti ha dato del truffatore. Ti \u00e8 stato chiesto di pubblicare i file originali di Villa Ortensi, con i metadati. Sono passati quattro mesi.' },
        { a: 'Dott. Marco Liverani', role: 'fisico', critic: true, t: 'Accetto l\u2019invito. Con strumentazione calibrata e un protocollo scritto prima, non dopo.' },
        { a: 'Fede1990', t: 'Ti seguo da quando avevo 16 anni. Mi dispiace vedere tutto questo.' }] },
    { title: 'La foto di Villa Ortensi non \u00e8 ritoccata', place: 'Villa Ortensi', loc: 'Brianza',
      body: ['Ho letto le analisi che circolano sul gruppo. Secondo alcuni la figura sulla scala sarebbe stata aggiunta in post-produzione.', 'Non \u00e8 cos\u00ec. Lo scatto \u00e8 un JPEG diretto dalla fotocamera. L\u2019unico intervento \u00e8 un ritaglio, per privacy, perch\u00e9 sul muro c\u2019era un nome scritto a pennarello.', 'Capisco lo scetticismo. Ma il dubbio non \u00e8 una prova.'],
      comments: [{ a: 'Elena Casati', role: 'fotografa', critic: true, t: 'Il file che hai condiviso ha nei metadati "Adobe Photoshop 25.1". Non \u00e8 un JPEG diretto. Il livello di rumore sulla figura \u00e8 diverso dal resto della scena.' },
        { a: 'Claudio Guerra', author: true, t: 'Photoshop l\u2019ho usato per il ritaglio, l\u2019ho scritto. Il rumore dipende dalla compressione.' },
        { a: 'Ale_Mistero', t: 'Una volta questo blog era serio.' }] },
    { title: 'Cascina Malpensata: i dati grezzi', place: 'Cascina Malpensata', loc: 'Lomellina',
      body: ['Come promesso pubblico i dati grezzi della notte in Lomellina: letture EMF ogni 10 secondi, temperatura, audio.', 'Il picco delle 01:15 resta inspiegato. Non c\u2019erano telefoni accesi, non c\u2019erano linee elettriche vicine secondo le mappe che ho consultato.', 'Chi vuole analizzarli \u00e8 il benvenuto. Chiedo solo di farlo in buona fede.'],
      comments: [{ a: 'A. Monti', role: 'geologo', critic: true, t: 'Sotto la cascina passa un metanodotto con protezione catodica. Genera esattamente quel tipo di campo, a intervalli regolari.' },
        { a: 'Gruppo Indagini Razionali', role: 'associazione', critic: true, t: 'Il picco delle 01:15 corrisponde al passaggio del treno merci sulla linea Mortara\u2013Pavia. Orari pubblici.' },
        { a: 'Pino da Lodi', t: 'Grazie per la trasparenza, comunque.' }] },
    { title: 'Torno sul campo', place: 'Teatro Arcobaleno', loc: 'Ferrara',
      body: ['Dopo qualche mese di pausa riprendo le uscite. Grazie a chi mi ha scritto in privato, siete stati tanti.', 'Si riparte dal Teatro Arcobaleno di Ferrara, dove un custode giura di sentire ancora gli applausi la notte del 2 novembre.', 'Questa volta tutto registrato, tutto pubblicato, dall\u2019arrivo all\u2019uscita.'],
      comments: [{ a: 'Marta.G', t: 'Bentornato!' }, { a: 'Dott. Marco Liverani', role: 'fisico', critic: true, t: 'Il teatro ha un impianto di ventilazione ancora attivo sul tetto. Il "suono di applausi" \u00e8 la serranda che sbatte. Lo dico prima, cos\u00ec ci si risparmia un post.' }] }
  ];
  latest.forEach(function (o, k) {
    var p = posts[N - 1 - k];
    p.title = o.title; p.place = o.place; p.loc = o.loc; p.body = o.body; p.comments = o.comments;
    p.disputed = o.comments.some(function (c) { return c.critic; });
  });
  posts[N - 1].d = 14;

  posts.forEach(function (p) {
    p.date = p.d + ' ' + MONTHS[p.m - 1] + ' ' + p.y;
    p.monthLabel = MONTHS[p.m - 1].slice(0, 3) + ' ' + p.y;
    p.excerpt = p.body[0];
  });

  var wave = function (n, s) { var r = rng(s), a = []; for (var i = 0; i < n; i++) a.push(Math.round(14 + r() * 70 * (0.4 + Math.abs(Math.sin(i / 5))))); return a; };

  var emails = [
    { id: 'e1', from: 'Michela Ghedini', addr: 'm.ghedini@posta.it', date: '17 ott 2026, 23:48', subject: 'Colonia Fiorenza, devi venire', unread: true,
      body: 'Ciao Claudio,\n\nti seguo da anni e non ti ho mai scritto. Lavoro come guardiana stagionale vicino alla vecchia colonia Fiorenza. Da tre settimane, ogni notte tra le due e le tre, al terzo piano si accende una luce. L\u2019edificio non ha corrente.\n\nTi allego quello che ho scritto la prima notte e due foto fatte col telefono. Non le ho fatte vedere a nessuno.\n\nMichela',
      att: [{ type: 'text', name: 'testimonianza.txt', size: '3 KB', text: 'Notte del 26 settembre.\n\n02:10 \u2014 luce al terzo piano, finestra centrale. Gialla, ferma, non come una torcia.\n02:14 \u2014 la luce si sposta alla finestra accanto. Nessun rumore.\n02:31 \u2014 si spegne. Resto in macchina fino alle 4.\n\nIl cancello \u00e8 chiuso con la catena. La catena era al suo posto la mattina dopo.' },
        { type: 'photo', name: 'ingresso_nord.jpg', size: '2,1 MB' }, { type: 'photo', name: 'terzo_piano.jpg', size: '1,8 MB' }] },
    { id: 'e2', from: 'nessuno', addr: 'nessuno.3742@mailtemp.net', date: '15 ott 2026, 03:42', subject: '(nessun oggetto)', unread: true,
      body: 'ascoltala fino alla fine.',
      att: [{ type: 'audio', name: 'cantina_0310.wav', size: '8,4 MB', dur: 47, wave: wave(72, 7) }] },
    { id: 'e3', from: 'Dott. Marco Liverani', addr: 'm.liverani@unifis.example', date: '12 ott 2026, 10:05', subject: 'Richiesta di rettifica \u2014 post del 14 ottobre',
      body: 'Gentile sig. Guerra,\n\nle scrivo in privato per correttezza prima di pubblicare la nostra analisi del file audio "corridoio B". In allegato trova la sintesi. Le chiedo di valutare una rettifica nel post.\n\nResto disponibile per l\u2019uscita congiunta di cui abbiamo parlato.\n\nCordiali saluti,\nMarco Liverani',
      att: [{ type: 'text', name: 'analisi_spettrale.txt', size: '6 KB', text: 'ANALISI FILE "corridoio_B_0342.wav"\n\n1. Componente stazionaria a 50 Hz e armoniche (100, 150, 200 Hz) per l\u2019intera durata.\n2. L\u2019evento a 03:42:11 ha banda 300\u20132.800 Hz, compatibile con voce umana MA anche con interferenza di un apparecchio radio.\n3. Il segnale non compare sul secondo registratore posto a 4 m.\n\nConclusione: l\u2019ipotesi pi\u00f9 economica \u00e8 un\u2019interferenza elettrica locale.' }] },
    { id: 'e4', from: 'Rosanna Pedretti', addr: 'rosanna.pedretti@libero.example', date: '9 ott 2026, 18:22', subject: 'Mia nonna ne parlava sempre',
      body: 'Buonasera,\n\nmio figlio mi ha fatto vedere il suo blog. Mia nonna ha lavorato alla Cascina Malpensata negli anni \u201940 e raccontava sempre la stessa storia. L\u2019ho trascritta da una sua lettera. Le mando anche una foto di famiglia del 1974, davanti al portico.\n\nNon so se le serve. Mi sembrava giusto che qualcuno la conservasse.\n\nRosanna',
      att: [{ type: 'text', name: 'lettera_trascritta.txt', size: '2 KB', text: '"...e la sera nessuno passava dal portico grande, perch\u00e9 l\u2019Angiolina diceva che l\u00ec si sentiva contare. Uno, due, tre, fino a dodici, poi si ricominciava. Io non l\u2019ho mai sentito. Ma non ci passavo lo stesso."' },
        { type: 'photo', name: 'portico_1974.jpg', size: '940 KB' }] },
    { id: 'e5', from: 'Gruppo Indagini Razionali', addr: 'segreteria@gir.example', date: '5 ott 2026, 09:30', subject: 'Proposta di indagine congiunta',
      body: 'Gentile sig. Guerra,\n\nraccogliamo il suo invito pubblico. Proponiamo un\u2019uscita congiunta in un sito a sua scelta, con un protocollo concordato e messo per iscritto prima del sopralluogo. In allegato una bozza.\n\nRestiamo in attesa.\n\nLa segreteria GIR',
      att: [{ type: 'text', name: 'protocollo_bozza.txt', size: '4 KB', text: 'BOZZA DI PROTOCOLLO\n\n\u2014 Sito scelto da C., comunicato 48 ore prima.\n\u2014 Due registratori sincronizzati, alimentazione a batteria.\n\u2014 Fotocamere con orario sincronizzato, RAW.\n\u2014 Nessun file viene pubblicato prima dell\u2019analisi congiunta.\n\u2014 Le conclusioni sono pubblicate da entrambe le parti, anche se discordi.' }] },
    { id: 'e6', from: 'Daniele', addr: 'dan.ghost.hunter@posta.example', date: '2 ott 2026, 21:17', subject: 'Sei un ciarlatano',
      body: 'Sedici anni a prendere in giro la gente. Le foto sono finte, gli audio sono finti. Vergognati.', att: [] },
    { id: 'e7', from: 'nessuno', addr: 'nessuno.3742@mailtemp.net', date: '28 set 2026, 02:58', subject: 'non tornare alla cascina',
      body: 'non ci sei andato da solo. riascolta.',
      att: [{ type: 'audio', name: 'voce_02.mp3', size: '1,2 MB', dur: 19, wave: wave(72, 23) }, { type: 'photo', name: 'mappa.jpg', size: '3,3 MB' }] },
    { id: 'e8', from: 'Luca Bergonzi', addr: 'luca.bergonzi@posta.example', date: '20 set 2026, 12:40', subject: 'Re: ci vediamo?',
      body: 'Claudio, ti voglio bene, lo sai. Ma non vengo pi\u00f9. Non dopo Villa Ortensi.\n\nSe vuoi parlarne mi trovi al solito posto. Solo parlarne.\n\nL.', att: [] }
  ];

  window.BlogData = { posts: posts, emails: emails, subscribers: 48312 };
})();
