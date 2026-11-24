/**
 * ============================================================================
 * L'ÉLIXIR PARFUMS — HAUTE PARFUMERIE JAVASCRIPT ENGINE
 * 42 ta eng sara mashhur atirlar katalogi, brendlar va iforlar bo'yicha saralash
 * ============================================================================
 */

// 1. Kengaytirilgan 42 ta mashhur atirlar ma'lumotlar bazasi
const perfumesData = [
  // --- TOM FORD ---
  {
    id: 1,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Lost Cherry",
    category: ["Niche", "Ayollar", "Unisex"],
    gender: "Ayollar / Unisex",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.9,
    reviews: 295,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Ehtirosli, jozibador shleyf",
    season: "Kuz, Qish, Romantik",
    topNotes: "Yetuk qora gilos, Gilos likyori, Achchiq bodom",
    heartNotes: "Gilos siropi, Turk atirguli, Sambak yasemini",
    baseNotes: "Peru balzami, Qovurilgan tonka, Sandal, Vanil",
    description: "Yetuk qora gilosning shirali va maftunkor ifori. Achchiq bodom va likyor notalari bilan boyitilgan, ehtirosli va unutilmas kompozitsiya.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },
  {
    id: 2,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Tobacco Vanille",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.9,
    reviews: 310,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Boy, tutunli va shirin",
    season: "Kuz, Qish, Oqshom",
    topNotes: "Tamaki bargi, Sharqona achchiq ziravorlar",
    heartNotes: "Madagaskar vanili, Kakao, Tonka loviyasi",
    baseNotes: "Quritilgan mevalar, Yog'och qatronlari",
    description: "London aristokratlar klubining boy muhiti. Premium tamaki barglari, mayin Madagaskar vanili va quritilgan mevalar iforining hashamati.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },
  {
    id: 3,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Bitter Peach",
    category: ["Niche", "Unisex", "Ayollar"],
    gender: "Unisex",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.8,
    reviews: 180,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Maftunkor, mevali shleyf",
    season: "Barcha fasllar, Bahor",
    topNotes: "Peshana shaftolisi, Qizil apelsin, Kardamon",
    heartNotes: "Rom, Konyak, Davana, Yasemin",
    baseNotes: "Indoneziya pachulisi, Vanil, Sandal, Tonka",
    description: "Quyoshda pishgan sharbatli shaftolining konyak va sharqona ziravorlar bilan birlashgan provokatsion va shirin ifori.",
    volumes: { "10ml": 52000, "50ml": 135000, "100ml": 230000 },
    selectedVolume: "50ml"
  },
  {
    id: 4,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Oud Wood",
    category: ["Niche", "Unisex", "Erkaklar"],
    gender: "Unisex / Erkaklar",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 5.0,
    reviews: 240,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Aristokratik, olijanob",
    season: "Kuz, Qish, Biznes",
    topNotes: "Kardamon, Qora murch, Pushti daraxt",
    heartNotes: "Qimmatbaho Ud daraxti, Sandal, Vetiver",
    baseNotes: "Tonka loviyasi, Vanil, Amber",
    description: "Ibodatxonalarda tutatiladigan qadimiy ud daraxti va nozik sharqona ziravorlarning eng nafis va qadrli talqini.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 215000 },
    selectedVolume: "50ml"
  },
  {
    id: 5,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Ombre Leather",
    category: ["Niche", "Erkaklar", "Unisex"],
    gender: "Erkaklar / Unisex",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Charm",
    rating: 4.9,
    reviews: 260,
    image: "",
    longevity: "14 - 16 soat",
    sillage: "Qat'iy, jiddiy va boy",
    season: "Kuz, Qish, Bahor",
    topNotes: "Kardamon ziravori",
    heartNotes: "Qora charm, Sambak yasemini",
    baseNotes: "Amber, Pachuli, Oq yo'sun",
    description: "G'arbiy cho'llarning cheksiz kengliklari va qimmatbaho charm jaket nafasi. Kuchli xarakter egalari uchun mukammal erkaklar ifori.",
    volumes: { "10ml": 45000, "50ml": 120000, "100ml": 200000 },
    selectedVolume: "50ml"
  },
  {
    id: 6,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Fucking Fabulous",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.8,
    reviews: 190,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Noodatiy, qimmatbaho",
    season: "Barcha fasllar, Kechki",
    topNotes: "Muskat shalfeyi, Provans lavandasi",
    heartNotes: "Achchiq bodom, Charm, Vanil, Iris ildizi",
    baseNotes: "Tonka loviyasi, Qimmatbaho oq daraxt, Amber",
    description: "Nomi o'ziga munosib g'ayritabiiy kompozitsiya. Achchiq bodom va mayin zamsh charmining vanil bilan hashamatli to'qnashuvi.",
    volumes: { "10ml": 55000, "50ml": 140000, "100ml": 240000 },
    selectedVolume: "50ml"
  },
  {
    id: 7,
    brand: "Tom Ford",
    brandGroup: "Tom Ford",
    name: "Black Orchid",
    category: ["Niche", "Ayollar", "Unisex"],
    gender: "Ayollar / Unisex",
    scentGroup: "Sharqona",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.8,
    reviews: 275,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Quyuq, sirli va maftunkor",
    season: "Kuz, Qish, Maxsus kechalar",
    topNotes: "Qora truffel, Ylang-ylang, Qora smorodina, Bergamot",
    heartNotes: "Qora orxideya, Ziravorlar, Meva notalari",
    baseNotes: "Pachuli, Sandal daraxti, Qora shokolad, Tutatqi",
    description: "Sirli va gipnotik afsona. Qora orxideyaning qimmatbaho truffel va qora shokolad bilan to'yingan hashamati.",
    volumes: { "10ml": 46000, "50ml": 120000, "100ml": 195000 },
    selectedVolume: "50ml"
  },

  // --- MAISON FRANCIS KURKDJIAN ---
  {
    id: 8,
    brand: "Maison Francis Kurkdjian",
    brandGroup: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 5.0,
    reviews: 420,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Juda kuchli, afsonaviy shleyf",
    season: "Barcha fasllar, Tantanalar",
    topNotes: "Eron za'faroni, Oq yasemin",
    heartNotes: "Ambergris, Amberwood",
    baseNotes: "Virgin kedr qatroni, Qoraqarag'ay balzami",
    description: "Dunyoning eng taniqli nish atiri. Za'faron va shirin mineral amber uyg'unligi har bir harakatda o'ziga rom etuvchi hashamatli shleyf qoldiradi.",
    volumes: { "10ml": 45000, "50ml": 120000, "100ml": 195000 },
    selectedVolume: "50ml"
  },
  {
    id: 9,
    brand: "Maison Francis Kurkdjian",
    brandGroup: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540 Extrait",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 5.0,
    reviews: 310,
    image: "",
    longevity: "18 - 24 soat",
    sillage: "Maksimal kuchli shleyf",
    season: "Kuz, Qish, Tantanalar",
    topNotes: "Qizil za'faron, Marokash achchiq bodomi",
    heartNotes: "Misr yasemini, Kedr yog'ochi",
    baseNotes: "Ambergris, Mushk, Yog'och qatronlari",
    description: "Klassik Baccarat Rouge 540 ning yanada to'yingan va kuchaytirilgan Extrait versiyasi. Achchiq bodom notasi bilan yanada chuqur va maftunkor.",
    volumes: { "10ml": 55000, "50ml": 140000, "100ml": 240000 },
    selectedVolume: "50ml"
  },
  {
    id: 10,
    brand: "Maison Francis Kurkdjian",
    brandGroup: "Maison Francis Kurkdjian",
    name: "Grand Soir",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.9,
    reviews: 185,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Iliq, oltin va hashamatli",
    season: "Kuz, Qish, Oqshom",
    topNotes: "Ispan labdanumi",
    heartNotes: "Siam benzoini, Braziliya tonkasi",
    baseNotes: "Qahrabo (Amber), Madagaskar vanili",
    description: "Parij oqshomlarining nuri va iliqligi. Mayin vanil, qahrabo va benzoin qatronlarining eng mukammal amber uyg'unligi.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },
  {
    id: 11,
    brand: "Maison Francis Kurkdjian",
    brandGroup: "Maison Francis Kurkdjian",
    name: "Gentle Fluidity Gold",
    category: ["Niche", "Unisex", "Ayollar"],
    gender: "Unisex / Ayollar",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.9,
    reviews: 170,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Mayin, ipakdek shleyf",
    season: "Barcha fasllar",
    topNotes: "Koriandr mevalari, Muskat yong'og'i",
    heartNotes: "Mayin vanil, Qahrabo",
    baseNotes: "Oq mushk, Qimmatbaho yog'ochlar",
    description: "Ipakdek mayin vanil va muskatning havodek yengil, ammo juda turg'un va jozibali sadosi. Har qanday vaziyatga mos elita ifor.",
    volumes: { "10ml": 46000, "50ml": 120000, "100ml": 200000 },
    selectedVolume: "50ml"
  },

  // --- CREED ---
  {
    id: 12,
    brand: "Creed",
    brandGroup: "Creed",
    name: "Aventus",
    category: ["Niche", "Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.9,
    reviews: 380,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Sezilarli va aristokratik",
    season: "Barcha fasllar, Biznes",
    topNotes: "Ananas, Italiya bergamoti, Qora smorodina, Olma",
    heartNotes: "Qayin daraxti, Marokash pachulisi, Yasemin, Atirgul",
    baseNotes: "Mushk, Eman yo'suni, Kulrang amber, Vanil",
    description: "G'oliblar va yetakchilar ramzi. Yangi kesilgan ananas, qora smorodina va tutunli qayin daraxti birlashgan beqiyos aristokratik ifor.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },
  {
    id: 13,
    brand: "Creed",
    brandGroup: "Creed",
    name: "Silver Mountain Water",
    category: ["Niche", "Unisex", "Erkaklar"],
    gender: "Unisex / Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.8,
    reviews: 220,
    image: "",
    longevity: "10 - 14 soat",
    sillage: "Muzdek toza, tetiklantiruvchi",
    season: "Bahor, Yoz",
    topNotes: "Bergamot, Mandarin",
    heartNotes: "Yashil choy, Qora smorodina kurtaklari",
    baseNotes: "Mushk, Petitgreyn, Sandal daraxti, Galbanum",
    description: "Shveysariya Alp tog'larining muzdek toza buloq suvlari nafasi. Yashil choy va qora smorodinaning eng tetiklantiruvchi uyg'unligi.",
    volumes: { "10ml": 46000, "50ml": 120000, "100ml": 200000 },
    selectedVolume: "50ml"
  },
  {
    id: 14,
    brand: "Creed",
    brandGroup: "Creed",
    name: "Aventus For Her",
    category: ["Niche", "Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.8,
    reviews: 190,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Kuchli, nafis va jozibador",
    season: "Barcha fasllar",
    topNotes: "Yashil olma, Pushti qalampir, Bergamot, Limon",
    heartNotes: "Turk atirguli, Sandal daraxti, Styrax, Mushk",
    baseNotes: "Shaftoli, Qora smorodina, Lilak, Amber",
    description: "Kuchli, o'ziga ishongan va nafis ayollar uchun afsonaviy Aventusning ayollar talqini. Mevali va gulli aristokratik simfoniya.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },
  {
    id: 15,
    brand: "Creed",
    brandGroup: "Creed",
    name: "Green Irish Tweed",
    category: ["Niche", "Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 4.8,
    reviews: 165,
    image: "",
    longevity: "10 - 14 soat",
    sillage: "Klassik, toza va tabiat nafasi",
    season: "Bahor, Yoz, Kuz",
    topNotes: "Limonli verbena, Florentsiya irisi",
    heartNotes: "Binafsha barglari",
    baseNotes: "Kulrang amber, Sandal daraxti",
    description: "Irlandiya yashil dalalari va toza shabada nafasi. Hollivud yulduzlari va qirollik oilalari sevimli klassik ifori.",
    volumes: { "10ml": 45000, "50ml": 118000, "100ml": 195000 },
    selectedVolume: "50ml"
  },

  // --- CHRISTIAN DIOR ---
  {
    id: 16,
    brand: "Christian Dior",
    brandGroup: "Christian Dior",
    name: "Sauvage Elixir",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.9,
    reviews: 350,
    image: "",
    longevity: "16 - 20 soat",
    sillage: "O'ta kuchli, yovvoyi shleyf",
    season: "Kuz, Qish, Kechki",
    topNotes: "Seylon dolchini, Muskat yong'og'i, Kardamon, Greypfrut",
    heartNotes: "Provans lavandasi, Yovvoyi gullar",
    baseNotes: "Qizilmiya, Sandal daraxti, Amber, Gaiti vetiveri",
    description: "Yovvoyi tabiatning cheksiz qudrati. Boy sharqona ziravorlar, lavanda va qadimiy yog'ochlar uyg'unlashgan eng kuchli erkaklar ifori.",
    volumes: { "10ml": 44000, "50ml": 115000, "100ml": 190000 },
    selectedVolume: "50ml"
  },
  {
    id: 17,
    brand: "Christian Dior",
    brandGroup: "Christian Dior",
    name: "Sauvage Eau de Parfum",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.8,
    reviews: 410,
    image: "",
    longevity: "12 - 15 soat",
    sillage: "Yorqin, shiddatli",
    season: "Barcha fasllar, Kunduzgi",
    topNotes: "Kalabriya bergamoti, Qalampir",
    heartNotes: "Sichuan qalampiri, Lavanda, Pushti murch, Geran",
    baseNotes: "Ambroksan molekulasi, Kedr, Labdanum",
    description: "Dunyodagi eng ko'p sotilgan erkaklar ifori. Moviy osmon ostidagi tog' havosi va yangi bergamotning jozibador ambroksan bilan qudrati.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },
  {
    id: 18,
    brand: "Christian Dior",
    brandGroup: "Christian Dior",
    name: "Fahrenheit",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 4.8,
    reviews: 210,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Tutunli, benuqson erkaklar xarakteri",
    season: "Kuz, Qish",
    topNotes: "Muskat yong'og'i guli, Kedr, Lavanda, Mandarin",
    heartNotes: "Binafsha barglari, Sandal, Yasemin, Kedr",
    baseNotes: "Teri, Vetiver, Mushk, Amber, Pachuli",
    description: "Afsunli binafsha barglari va charm notalarining tutunli uyg'unligi. Erkaklik va betakror jasorat timsoli.",
    volumes: { "10ml": 42000, "50ml": 110000, "100ml": 180000 },
    selectedVolume: "50ml"
  },
  {
    id: 19,
    brand: "Christian Dior",
    brandGroup: "Christian Dior",
    name: "Miss Dior Blooming Bouquet",
    category: ["Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.9,
    reviews: 280,
    image: "",
    longevity: "10 - 12 soat",
    sillage: "Mayin, gulli guldasta",
    season: "Bahor, Yoz",
    topNotes: "Sitsiliya mandarini",
    heartNotes: "Pushti pion, Damashq atirguli, O'rik, Shaftoli",
    baseNotes: "Oq mushk",
    description: "Minglab nozik gullardan to'qilgan bahoriy guldasta nafasi. Mayin pushti pion va atirgulning beqiyos ayollik ifori.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },

  // --- CHANEL ---
  {
    id: 20,
    brand: "Chanel",
    brandGroup: "Chanel",
    name: "Bleu de Chanel",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.9,
    reviews: 430,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Toza, nufuzli shleyf",
    season: "Barcha fasllar, Ofis",
    topNotes: "Greypfrut, Limon, Yalpiz, Pushti qalampir",
    heartNotes: "Zanjabil, Muskat yong'og'i, Yasemin, Iso E Super",
    baseNotes: "Tutatqi (Ladan), Vetiver, Kedr, Sandal, Pachuli",
    description: "Klassik frantsuz nafosati va erkinlik ruhi. Tetiklantiruvchi limon, yalpiz va qora qalampirning tutunli kedr bilan mukammal mutanosibligi.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },
  {
    id: 21,
    brand: "Chanel",
    brandGroup: "Chanel",
    name: "Coco Mademoiselle",
    category: ["Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 5.0,
    reviews: 390,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Olijanob, maftunkor",
    season: "Barcha fasllar, Tantanalar",
    topNotes: "Apelsin, Mandarin, Bergamot, Apelsin guli",
    heartNotes: "Turk atirguli, Yasemin, Mimoza, Ylang-ylang",
    baseNotes: "Pachuli, Oq mushk, Vanil, Vetiver, Tonka",
    description: "Parij ayolining yorqin timsoli. Jonli sitruslar, mayin atirgul va olijanob pachulining unutilmas shleyfi.",
    volumes: { "10ml": 42000, "50ml": 110000, "100ml": 185000 },
    selectedVolume: "50ml"
  },
  {
    id: 22,
    brand: "Chanel",
    brandGroup: "Chanel",
    name: "Chance Eau Tendre",
    category: ["Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.8,
    reviews: 240,
    image: "",
    longevity: "10 - 14 soat",
    sillage: "Yengil, quvnoq va nafis",
    season: "Bahor, Yoz",
    topNotes: "Ayva, Greypfrut",
    heartNotes: "Giasint, Yasemin",
    baseNotes: "Mushk, Iris, Virgin kedri, Amber",
    description: "Ayva va greypfrutning gulli aktsentlar bilan nozik raqsi. Har bir kunga quvonch va ayollik bag'ishlovchi mashhur ifor.",
    volumes: { "10ml": 42000, "50ml": 110000, "100ml": 180000 },
    selectedVolume: "50ml"
  },
  {
    id: 23,
    brand: "Chanel",
    brandGroup: "Chanel",
    name: "Allure Homme Sport",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.9,
    reviews: 290,
    image: "",
    longevity: "12 - 15 soat",
    sillage: "Energetik, dengiz nafasi",
    season: "Bahor, Yoz, Sport",
    topNotes: "Apelsin, Dengiz notalari, Aldegidlar, Mandarin",
    heartNotes: "Qalampir, Neroli, Kedr",
    baseNotes: "Tonka loviyasi, Vanil, Oq mushk, Amber, Vetiver",
    description: "Dengiz to'lqinlari va shamol shabadasi. Energetik sitruslar va mayin vanilning sportcha va nafis uyg'unligi.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },

  // --- KILIAN ---
  {
    id: 24,
    brand: "Kilian",
    brandGroup: "Kilian",
    name: "Angels' Share",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 5.0,
    reviews: 320,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Iliq, shirin va hashamatli",
    season: "Qish, Kuz, Bayram",
    topNotes: "Eski elita konyak essensiyasi",
    heartNotes: "Seylon dolchini, Eman daraxti, Tonka loviyasi",
    baseNotes: "Praline shokoladi, Madagaskar vanili, Sandal daraxti",
    description: "Eman bochkalarida dam olgan oliy navli konyakning iliq va shirin ifori. Dolchin, tonka loviyasi va praline notalari bilan sovuq kunlarga ideal hamroh.",
    volumes: { "10ml": 52000, "50ml": 135000, "100ml": 230000 },
    selectedVolume: "50ml"
  },
  {
    id: 25,
    brand: "Kilian",
    brandGroup: "Kilian",
    name: "Black Phantom",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.9,
    reviews: 210,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Quyuq, qahvali va shokoladli",
    season: "Kuz, Qish, Kechki",
    topNotes: "Eski qora rom, Qora qahva",
    heartNotes: "Qora shokolad, Karamel, Shakarqamish",
    baseNotes: "Bodom, Sandal daraxti, Gelitrop",
    description: "Qaroqchilar kemasidagi boy kofe, quyuq rom va shokolad sadosi. Memento Mori falsafasining eng mazali va sirli talqini.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },
  {
    id: 26,
    brand: "Kilian",
    brandGroup: "Kilian",
    name: "Good Girl Gone Bad",
    category: ["Niche", "Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.9,
    reviews: 260,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "O'ziga rom etuvchi oq gullar",
    season: "Bahor, Yoz, Tantanalar",
    topNotes: "Osmanthus, Yasemin, May atirguli",
    heartNotes: "Hindiston tuberozasi, Narssis",
    baseNotes: "Amber, Virgin kedri",
    description: "Beg'uborlikdan ehtirosga o'tish lahzasi. Mayin osmanthus va tuberoza oq gullarining maftunkor shleyfi.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },

  // --- LOUIS VUITTON ---
  {
    id: 27,
    brand: "Louis Vuitton",
    brandGroup: "Louis Vuitton",
    name: "Imagination",
    category: ["Niche", "Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 5.0,
    reviews: 340,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Yorqin, shaffof va zamonaviy",
    season: "Bahor, Yoz, Kunduzgi",
    topNotes: "Sitron, Kalabriya bergamoti, Sitsiliya apelsini",
    heartNotes: "Nigeriya zanjabili, Seylon dolchini, Neroli",
    baseNotes: "Xitoy qora choyi, Ambroksan, Guayak daraxti",
    description: "Cheksiz xayolot va sayohat nafasi. Sitron, Kalabriya bergamoti va qora choy notalarining g'aroyib ambroksan bilan uyg'unligi.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },
  {
    id: 28,
    brand: "Louis Vuitton",
    brandGroup: "Louis Vuitton",
    name: "Ombre Nomade",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 5.0,
    reviews: 290,
    image: "",
    longevity: "18 - 24 soat",
    sillage: "Qudratli, sharqona tutun",
    season: "Kuz, Qish, Kechki",
    topNotes: "Qimmatbaho Ud daraxti, Malina",
    heartNotes: "Tutatqi (Ladan), Atirgul, Shafran",
    baseNotes: "Benzoin, Qayin smolasi, Amberwood",
    description: "Sharq sahrolarining cheksiz kuchi va hashamati. Tabiiy ud yog'ochining pishgan malina va tutatqi bilan aql bovar qilmas uyg'unligi.",
    volumes: { "10ml": 55000, "50ml": 140000, "100ml": 240000 },
    selectedVolume: "50ml"
  },
  {
    id: 29,
    brand: "Louis Vuitton",
    brandGroup: "Louis Vuitton",
    name: "Afternoon Swim",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.8,
    reviews: 180,
    image: "",
    longevity: "10 - 14 soat",
    sillage: "Okean nafasi, porloq sitrus",
    season: "Yoz, Issiq kunlar",
    topNotes: "Sitsiliya apelsini, Mandarin",
    heartNotes: "Kalabriya bergamoti, Zanjabil",
    baseNotes: "Ambroksan, Oq mushk",
    description: "Issiq yoz kunida moviy okean to'lqinlariga sho'ng'ish hissi. Dunyodagi eng toza va shirali apelsin va mandarin sadosi.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },

  // --- XERJOFF ---
  {
    id: 30,
    brand: "Xerjoff",
    brandGroup: "Xerjoff",
    name: "Erba Pura",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.9,
    reviews: 310,
    image: "",
    longevity: "16 - 20 soat",
    sillage: "Cheksiz kuchli va uzoq saqlanuvchi",
    season: "Barcha fasllar, Yoz, Oqshom",
    topNotes: "Sitsiliya apelsini, Kalabriya bergamoti, Limon",
    heartNotes: "O'rta yer dengizi mevalari savati",
    baseNotes: "Oq mushk, Madagaskar vanili, Amber",
    description: "O'rta yer dengizi mevalarining yorqin portlashi. Shirin sitruslar, qimmatbaho oq mushk va mayin vanilning hayratlanarli darajada uzoq saqlanuvchi shleyfi.",
    volumes: { "10ml": 46000, "50ml": 120000, "100ml": 200000 },
    selectedVolume: "50ml"
  },
  {
    id: 31,
    brand: "Xerjoff",
    brandGroup: "Xerjoff",
    name: "Naxos 1861",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 5.0,
    reviews: 245,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Asalli, boy va jozibali",
    season: "Kuz, Qish, Bahor",
    topNotes: "Bergamot, Limon, Provans lavandasi",
    heartNotes: "Asal, Dolchin, Keshmeran, Yasemin",
    baseNotes: "Tamaki barglari, Tonka loviyasi, Vanil",
    description: "Sitsiliya quyoshi ostida yetilgan tamaki va xushbo'y asal nafasi. Lavanda va sitruslar bilan birlashgan benuqson italyancha hashamat.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 215000 },
    selectedVolume: "50ml"
  },

  // --- BVLGARI ---
  {
    id: 32,
    brand: "Bvlgari",
    brandGroup: "Bvlgari",
    name: "Le Gemme Tygar",
    category: ["Niche", "Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.9,
    reviews: 215,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Sezilarli, toza va olijanob",
    season: "Bahor, Yoz, Kuz",
    topNotes: "Yorqin quyoshli greypfrut",
    heartNotes: "Zanjabil, Achchiq ziravorlar",
    baseNotes: "Ambroksan molekulasi, Qimmatbaho yog'ochlar",
    description: "Yo'lbars ko'zi qimmatbaho toshining kuchi va ulug'vorligi. Yangi porloq greypfrut va toza ambroksanning eng maqtovli erkaklar kompozitsiyasi.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 215000 },
    selectedVolume: "50ml"
  },
  {
    id: 33,
    brand: "Bvlgari",
    brandGroup: "Bvlgari",
    name: "Aqva Pour Homme",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.7,
    reviews: 195,
    image: "",
    longevity: "10 - 13 soat",
    sillage: "Moviy dengiz to'lqini",
    season: "Yoz, Issiq kunlar",
    topNotes: "Mandarin, Apelsin, Petitgreyn",
    heartNotes: "Dengiz o'tlari (Posidoniya), Santolin, Lavanda",
    baseNotes: "Virgin kedri, Yog'och notalari, Pachuli, Amber",
    description: "O'rta yer dengizi tubidagi sirli suvo'tlar va yangi mandarin nafasi. Haqiqiy toza dengiz energetikasi.",
    volumes: { "10ml": 38000, "50ml": 98000, "100ml": 165000 },
    selectedVolume: "50ml"
  },

  // --- YVES SAINT LAURENT ---
  {
    id: 34,
    brand: "Yves Saint Laurent",
    brandGroup: "Yves Saint Laurent",
    name: "Libre Intense",
    category: ["Ayollar"],
    gender: "Ayollar",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.9,
    reviews: 290,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Ayollik, erkin va nafis",
    season: "Barcha fasllar, Tantanalar",
    topNotes: "Fransuz lavandasi, Mandarin, Bergamot",
    heartNotes: "Tunis apelsin guli, Sambak yasemini, Cho'l orxideyasi",
    baseNotes: "Madagaskar vanili, Tonka, Ambergris, Vetiver",
    description: "Ozod va o'ziga ishongan ayollar madhiyasi. Fransuz lavandasining tetikligi va marokash apelsin gulining qizg'in shirinligi orxideya bilan uyg'unlashgan.",
    volumes: { "10ml": 42000, "50ml": 110000, "100ml": 180000 },
    selectedVolume: "50ml"
  },
  {
    id: 35,
    brand: "Yves Saint Laurent",
    brandGroup: "Yves Saint Laurent",
    name: "Black Opium",
    category: ["Ayollar"],
    gender: "Ayollar",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.9,
    reviews: 340,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Ehtirosli, qahvali va shirin",
    season: "Kuz, Qish, Oqshom",
    topNotes: "Nok, Pushti qalampir, Apelsin guli",
    heartNotes: "Qora qahva, Yasemin, Achchiq bodom, Qizilmiya",
    baseNotes: "Vanil, Pachuli, Keshmeran, Kedr",
    description: "Adrenalin va ehtiros uyg'otuvchi qora qahva nafasi. Shirin nok, oq gullar va qimmatbaho vanilning sehrli kechki ifori.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },
  {
    id: 36,
    brand: "Yves Saint Laurent",
    brandGroup: "Yves Saint Laurent",
    name: "Y Eau de Parfum",
    category: ["Erkaklar"],
    gender: "Erkaklar",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 4.8,
    reviews: 260,
    image: "",
    longevity: "12 - 15 soat",
    sillage: "Tetik, baquvvat shleyf",
    season: "Barcha fasllar",
    topNotes: "Olma, Zanjabil, Bergamot",
    heartNotes: "Shalfey, Archa mevalari, Geran",
    baseNotes: "Amberwood, Tonka loviyasi, Kedr, Vetiver, Olibanum",
    description: "O'z orzulari tomon dadil intiluvchi yosh va faol erkaklar ifori. Shirin olma va zanjabilning tutunli archa bilan baquvvat mutanosibligi.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },

  // --- EX NIHILO ---
  {
    id: 37,
    brand: "Ex Nihilo",
    brandGroup: "Ex Nihilo",
    name: "Fleur Narcotique",
    category: ["Niche", "Ayollar", "Unisex"],
    gender: "Ayollar / Unisex",
    scentGroup: "Gulli",
    scentTag: "🌸 Gulli & Mayin",
    rating: 4.9,
    reviews: 320,
    image: "",
    longevity: "12 - 16 soat",
    sillage: "Mayin, gulli va maftunkor",
    season: "Bahor, Yoz, Kunduzgi",
    topNotes: "Litchi, Italiya bergamoti, Shaftoli",
    heartNotes: "Pion guli, Apelsin guli, Yasemin, Petaliya",
    baseNotes: "Mushk, Eman yo'suni, Yog'och notalari",
    description: "Parij nafosati va sehrli gul ifori. Shirin litchi va shaftolining mayin pion hamda apelsin guli bilan uyg'unlashgan eng sevimli giti.",
    volumes: { "10ml": 46000, "50ml": 120000, "100ml": 200000 },
    selectedVolume: "50ml"
  },
  {
    id: 38,
    brand: "Ex Nihilo",
    brandGroup: "Ex Nihilo",
    name: "Blue Talisman",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sitrus",
    scentTag: "🍋 Tetik & Sitrusli",
    rating: 5.0,
    reviews: 190,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Futuristik, yorqin shleyf",
    season: "Barcha fasllar",
    topNotes: "Bergamot, Zanjabil, Mandarin, Nok",
    heartNotes: "Apelsin guli, Georgywood molekulasi",
    baseNotes: "Akigalawood, Ambroksan, Mushk",
    description: "Ex Nihilo uyining 10 yilligiga bag'ishlangan tilsim ifor. Zanjabil va bergamotning qimmatbaho Akigalawood bilan mukammal zamonaviy sadosi.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },

  // --- BOSHQA MASHHUR NISH ATIRLAR ---
  {
    id: 39,
    brand: "Marc-Antoine Barrois",
    brandGroup: "Boshqa",
    name: "Ganymede",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Sharqona",
    scentTag: "⚜️ Sharqona & Amber",
    rating: 4.9,
    reviews: 260,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Kosmik, mineral va jozibador",
    season: "Barcha fasllar",
    topNotes: "Italiya mandarini, Safran (za'faron)",
    heartNotes: "Boqiylik guli (Immortelle), Xitoy binafshasi",
    baseNotes: "Akigalawood, Mineral notalar, Mayin zamsh",
    description: "Kosmik va futuristik ifor. Yangi mandarin, qimmatbaho mineral notalar, zamsh va boqiylik guli birlashgan XXI asrning eng shov-shuvli bestselleri.",
    volumes: { "10ml": 50000, "50ml": 130000, "100ml": 220000 },
    selectedVolume: "50ml"
  },
  {
    id: 40,
    brand: "Nasomatto",
    brandGroup: "Boshqa",
    name: "Black Afgano",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 4.8,
    reviews: 215,
    image: "",
    longevity: "18 - 24 soat",
    sillage: "Gipnotik, quyuq va sirli",
    season: "Kuz, Qish, Tun",
    topNotes: "Yashil o'tlar, Nasha akkordlari",
    heartNotes: "Qatronlar, Yog'och notalari, Arab qahvasi, Tamaki",
    baseNotes: "Tutatqi, Qimmatbaho Ud (agardaraxti)",
    description: "Sirli, quyuq va gipnotik ifor. Qora qatron, tutatqi, nasha akkordlari va qahva bilan to'yingan beqiyos sharqona qudrat.",
    volumes: { "10ml": 48000, "50ml": 125000, "100ml": 210000 },
    selectedVolume: "50ml"
  },
  {
    id: 41,
    brand: "Essential Parfums",
    brandGroup: "Boshqa",
    name: "Bois Impérial",
    category: ["Niche", "Unisex"],
    gender: "Unisex",
    scentGroup: "Yogoch",
    scentTag: "🪵 Yog'ochli & Tutunli",
    rating: 5.0,
    reviews: 310,
    image: "",
    longevity: "14 - 18 soat",
    sillage: "Toza, tebranuvchi va yangi",
    season: "Barcha fasllar, Har kungi",
    topNotes: "Yangi tayyorlangan rayhon, Nepal timur qalampiri",
    heartNotes: "Gaiti vetiveri, Petaliya guli, Georgywood",
    baseNotes: "Akigalawood molekulasi, Indoneziya pachulisi, Ambroksan",
    description: "Kventin Bish tomonidan yaratilgan yog'ochli bestseller. Yangi uzilgan rayhon, timur qalampiri va Akigalawood molekulasining sehrli sadosi.",
    volumes: { "10ml": 40000, "50ml": 105000, "100ml": 175000 },
    selectedVolume: "50ml"
  },
  {
    id: 42,
    brand: "Tiziana Terenzi",
    brandGroup: "Boshqa",
    name: "Kirke",
    category: ["Niche", "Ayollar", "Unisex"],
    gender: "Ayollar / Unisex",
    scentGroup: "Shirin",
    scentTag: "🍇 Shirin & Mevali",
    rating: 4.8,
    reviews: 285,
    image: "",
    longevity: "16 - 20 soat",
    sillage: "Shirin mevali va o'ta uzoq shleyf",
    season: "Bahor, Yoz, Kuz",
    topNotes: "Marakuya, Shaftoli, Malina, Shirin nok, Qora smorodina",
    heartNotes: "Vodiy marvaridi (Landish)",
    baseNotes: "Oq mushk, Sandal, Vanil, Pachuli, Gelitrop",
    description: "Sehrgar ma'buda Kirke sharafiga atalgan ekzotik mevali shleyf. Marakuya, shaftoli, malina va mayin mushkning beqiyos uyg'unligi.",
    volumes: { "10ml": 45000, "50ml": 115000, "100ml": 190000 },
    selectedVolume: "50ml"
  }
];

// 2. Global holat (State management)
let currentCategory = "Hammasi";
let currentBrand = "Hammasi";
let currentScent = "Hammasi";
let currentSearch = "";
let currentSort = "popular";
let currentGlobalVolume = "50ml";

// Savat va Wishlist (LocalStorage orqali saqlanadi)
let cart = JSON.parse(localStorage.getItem("lelixir_cart")) || [];
let wishlist = new Set(JSON.parse(localStorage.getItem("lelixir_wishlist")) || []);

// Detal oynasi holati
let activeDetailPerfume = null;
let activeDetailVolume = "50ml";
let activeDetailQty = 1;

// 3. Mahsulotlarni ekranga chizish (Render)


// ============================================================================
// HAUTE PARFUMERIE LUXURY VECTOR ENGINE (Barcha 42 ta atir uchun maxsus shisha san'ati)
// ============================================================================
const perfumeThemes = {
  // Tom Ford (Iconic architectural flacons with gold/noir accents)
  1: { bottle: 'tf', fluid: '#7b1123', fluidGrad: ['#a81934', '#4a0714'], cap: 'gold', glow: '#c70039', accent: '#fdf1c5', labelBg: '#18070b' }, // Lost Cherry
  2: { bottle: 'tf', fluid: '#9e5d16', fluidGrad: ['#c97d26', '#5e340a'], cap: 'gold', glow: '#df8f2d', accent: '#fdf1c5', labelBg: '#1c1005' }, // Tobacco Vanille
  3: { bottle: 'tf', fluid: '#d9652a', fluidGrad: ['#f08b4f', '#913c10'], cap: 'gold', glow: '#f39c12', accent: '#fef5e7', labelBg: '#1f0e06' }, // Bitter Peach
  4: { bottle: 'tf', fluid: '#2b231c', fluidGrad: ['#473a2f', '#19130e'], cap: 'gold', glow: '#8d6e63', accent: '#dfb443', labelBg: '#141210' }, // Oud Wood
  5: { bottle: 'tf', fluid: '#1a1816', fluidGrad: ['#2e2a27', '#0e0d0c'], cap: 'black', glow: '#78909c', accent: '#ffffff', labelBg: '#121212' }, // Ombre Leather
  6: { bottle: 'tf', fluid: '#181818', fluidGrad: ['#2e2e2e', '#0c0c0c'], cap: 'black', glow: '#b0bec5', accent: '#ffffff', labelBg: '#141414' }, // Fucking Fabulous
  7: { bottle: 'tf', fluid: '#140f1a', fluidGrad: ['#2d1e38', '#0a070e'], cap: 'gold', glow: '#8e44ad', accent: '#dfb443', labelBg: '#120b17' }, // Black Orchid

  // Maison Francis Kurkdjian (Crystal cube flacons with gold & ruby finishes)
  8: { bottle: 'mfk', fluid: '#c49746', fluidGrad: ['#e2b865', '#8a621e'], cap: 'gold', glow: '#e74c3c', accent: '#d4af37', labelBg: '#fffbf0', labelText: '#991b1b' }, // Baccarat Rouge 540
  9: { bottle: 'mfk', fluid: '#991b1b', fluidGrad: ['#b91c1c', '#631010'], cap: 'gold', glow: '#ef4444', accent: '#dfb443', labelBg: '#7f1d1d', isExtrait: true }, // Baccarat Rouge 540 Extrait
  10: { bottle: 'mfk', fluid: '#b45309', fluidGrad: ['#d97706', '#78350f'], cap: 'gold', glow: '#f59e0b', accent: '#fef3c7', labelBg: '#fffbeb', labelText: '#78350f' }, // Grand Soir
  11: { bottle: 'mfk', fluid: '#d97706', fluidGrad: ['#f59e0b', '#92400e'], cap: 'gold', glow: '#fbbf24', accent: '#dfb443', labelBg: '#fffdf5', labelText: '#854d0e' }, // Gentle Fluidity Gold

  // Creed (Imperial crest bottles with silver, white and forest finishes)
  12: { bottle: 'creed', fluid: '#94a3b8', fluidGrad: ['#cbd5e1', '#64748b'], cap: 'silver', glow: '#94a3b8', accent: '#e2e8f0', band: '#1e293b' }, // Aventus
  13: { bottle: 'creed', fluid: '#f1f5f9', fluidGrad: ['#ffffff', '#e2e8f0'], cap: 'silver', glow: '#38bdf8', accent: '#f8fafc', band: '#e2e8f0' }, // Silver Mountain Water
  14: { bottle: 'creed', fluid: '#fdf2f8', fluidGrad: ['#fce7f3', '#fbcfe8'], cap: 'gold', glow: '#f472b6', accent: '#fbcfe8', band: '#be185d' }, // Aventus For Her
  15: { bottle: 'creed', fluid: '#14532d', fluidGrad: ['#166534', '#052e16'], cap: 'black', glow: '#22c55e', accent: '#4ade80', band: '#0f172a' }, // Green Irish Tweed

  // Dior (Sauvage ribbed cylinder & Fahrenheit sunset)
  16: { bottle: 'dior_sauvage', fluid: '#090d16', fluidGrad: ['#111827', '#030712'], cap: 'dior_cap', glow: '#3b82f6', accent: '#60a5fa' }, // Sauvage Elixir
  17: { bottle: 'dior_sauvage', fluid: '#0e1726', fluidGrad: ['#1e293b', '#080d16'], cap: 'dior_cap', glow: '#2563eb', accent: '#93c5fd' }, // Sauvage EDP
  18: { bottle: 'dior_fahrenheit', fluid: '#dc2626', fluidGrad: ['#f59e0b', '#dc2626', '#450a0a'], cap: 'black', glow: '#f97316', accent: '#fdba74' }, // Fahrenheit
  19: { bottle: 'dior_miss', fluid: '#fdf2f8', fluidGrad: ['#fce7f3', '#f472b6'], cap: 'silver_bow', glow: '#ec4899', accent: '#f43f5e' }, // Miss Dior

  // Chanel (Iconic French beveled flacons)
  20: { bottle: 'chanel', fluid: '#0c1729', fluidGrad: ['#172554', '#070f1a'], cap: 'chanel_cap', glow: '#1d4ed8', accent: '#d4af37' }, // Bleu de Chanel
  21: { bottle: 'chanel', fluid: '#ffe4e6', fluidGrad: ['#fecdd3', '#fda4af'], cap: 'chanel_frosted', glow: '#fb7185', accent: '#dfb443' }, // Coco Mademoiselle
  22: { bottle: 'chanel_round', fluid: '#fdf2f8', fluidGrad: ['#fce7f3', '#fbcfe8'], cap: 'chanel_round_cap', glow: '#f472b6', accent: '#dfb443' }, // Chance Eau Tendre
  23: { bottle: 'chanel_sport', fluid: '#cbd5e1', fluidGrad: ['#e2e8f0', '#94a3b8'], cap: 'black_rubber', glow: '#dc2626', accent: '#ffffff' }, // Allure Homme Sport

  // Kilian (Crystal cocktail tumbler decanters with metallic shields)
  24: { bottle: 'kilian', fluid: '#b45309', fluidGrad: ['#d97706', '#78350f'], cap: 'glass_tumbler', glow: '#f59e0b', accent: '#dfb443', labelBg: '#1f160b' }, // Angels' Share
  25: { bottle: 'kilian', fluid: '#18120c', fluidGrad: ['#2b1e15', '#0f0a07'], cap: 'black_lacquer', glow: '#dfb443', accent: '#d4af37', labelBg: '#140f0a' }, // Black Phantom
  26: { bottle: 'kilian', fluid: '#fffbeb', fluidGrad: ['#fef3c7', '#fde68a'], cap: 'gold_serpent', glow: '#fcd34d', accent: '#dfb443', labelBg: '#fffdf5' }, // Good Girl Gone Bad

  // Louis Vuitton (Sleek modern apothecary cylinders)
  27: { bottle: 'lv', fluid: '#e0f2fe', fluidGrad: ['#bae6fd', '#7dd3fc'], cap: 'lv_cap', glow: '#38bdf8', accent: '#0284c7' }, // Imagination
  28: { bottle: 'lv', fluid: '#451a03', fluidGrad: ['#78350f', '#290e02'], cap: 'lv_cap', glow: '#b45309', accent: '#d97706' }, // Ombre Nomade
  29: { bottle: 'lv', fluid: '#0284c7', fluidGrad: ['#38bdf8', '#0369a1'], cap: 'lv_cap', glow: '#0ea5e9', accent: '#bae6fd' }, // Afternoon Swim

  // Xerjoff (Majestic royal flacons with Italian crown)
  30: { bottle: 'xerjoff', fluid: '#0d9488', fluidGrad: ['#14b8a6', '#0f766e'], cap: 'xerjoff_crown', glow: '#2dd4bf', accent: '#dfb443' }, // Erba Pura
  31: { bottle: 'xerjoff', fluid: '#b45309', fluidGrad: ['#f59e0b', '#78350f'], cap: 'xerjoff_crown', glow: '#fbbf24', accent: '#dfb443' }, // Naxos 1861

  // Bvlgari (Gemstone & marine flacons)
  32: { bottle: 'bvlgari', fluid: '#18181b', fluidGrad: ['#27272a', '#09090b'], cap: 'gem_cap', glow: '#d97706', accent: '#f59e0b' }, // Le Gemme Tygar
  33: { bottle: 'bvlgari_round', fluid: '#0f766e', fluidGrad: ['#14b8a6', '#042f2e'], cap: 'chrome_cap', glow: '#06b6d4', accent: '#67e8f9' }, // Aqva Pour Homme

  // Yves Saint Laurent (Couture & rock-and-roll glam)
  34: { bottle: 'ysl', fluid: '#b45309', fluidGrad: ['#d97706', '#78350f'], cap: 'ysl_gold', glow: '#f59e0b', accent: '#dfb443' }, // Libre Intense
  35: { bottle: 'ysl_opium', fluid: '#18181b', fluidGrad: ['#27272a', '#09090b'], cap: 'black_cap', glow: '#ec4899', accent: '#f43f5e' }, // Black Opium
  36: { bottle: 'ysl', fluid: '#0f172a', fluidGrad: ['#1e293b', '#020617'], cap: 'ysl_black', glow: '#3b82f6', accent: '#60a5fa' }, // Y EDP

  // Ex Nihilo (Parisian faceted crystal flacons)
  37: { bottle: 'exnihilo', fluid: '#fff1f2', fluidGrad: ['#ffe4e6', '#fecdd3'], cap: 'exnihilo_cap', glow: '#fb7185', accent: '#dfb443' }, // Fleur Narcotique
  38: { bottle: 'exnihilo', fluid: '#1e3a8a', fluidGrad: ['#2563eb', '#172554'], cap: 'exnihilo_cap', glow: '#3b82f6', accent: '#dfb443' }, // Blue Talisman

  // Niche Masters
  39: { bottle: 'mab', fluid: '#292524', fluidGrad: ['#44403c', '#1c1917'], cap: 'brass_plate', glow: '#ca8a04', accent: '#eab308' }, // Ganymede
  40: { bottle: 'nasomatto', fluid: '#09090b', fluidGrad: ['#18181b', '#000000'], cap: 'raw_wood', glow: '#52525b', accent: '#a1a1aa' }, // Black Afgano
  41: { bottle: 'minimal', fluid: '#d97706', fluidGrad: ['#f59e0b', '#78350f'], cap: 'eco_black', glow: '#fbbf24', accent: '#dfb443' }, // Bois Impérial
  42: { bottle: 'terenzi', fluid: '#d97706', fluidGrad: ['#fbbf24', '#92400e'], cap: 'terenzi_cap', glow: '#f59e0b', accent: '#dfb443' }  // Kirke
};

function getPerfumeBottleSvg(item) {
  if (!item) return "";
  const id = item.id || 1;
  const t = perfumeThemes[id] || {
    bottle: 'tf', fluid: '#b45309', fluidGrad: ['#d97706', '#78350f'], cap: 'gold', glow: '#dfb443', accent: '#dfb443', labelBg: '#111116'
  };

  const safeBrand = (item.brand || "L'ÉLIXIR").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeName = (item.name || "HAUTE PARFUM").replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const shortName = safeName.length > 20 ? safeName.substring(0, 18) + '...' : safeName;

  const fluidColor1 = t.fluidGrad[0] || t.fluid;
  const fluidColor2 = t.fluidGrad[1] || t.fluid;

  // Qopqoq shakli (Cap HTML)
  let capHtml = '';
  if (t.cap === 'silver' || t.cap === 'chrome_cap') {
    capHtml = `
      <rect x="168" y="70" width="64" height="48" rx="6" fill="url(#silverGrad_${id})" stroke="#ffffff" stroke-width="1.2"/>
      <rect x="182" y="58" width="36" height="14" rx="3" fill="#cbd5e1"/>
      <rect x="186" y="118" width="28" height="16" fill="#475569"/>
    `;
  } else if (t.cap === 'black' || t.cap === 'black_rubber' || t.cap === 'black_lacquer' || t.cap === 'eco_black') {
    capHtml = `
      <rect x="168" y="70" width="64" height="48" rx="6" fill="#18181b" stroke="#3f3f46" stroke-width="1.5"/>
      <rect x="182" y="58" width="36" height="14" rx="3" fill="#27272a"/>
      <rect x="186" y="118" width="28" height="16" fill="#09090b"/>
    `;
  } else if (t.cap === 'raw_wood') {
    // Nasomatto yog'och qopqog'i
    capHtml = `
      <rect x="142" y="50" width="116" height="98" rx="4" fill="#2d1e18" stroke="#1c120c" stroke-width="2"/>
      <line x1="146" y1="75" x2="254" y2="75" stroke="#3d2a22" stroke-width="2" opacity="0.6"/>
      <line x1="146" y1="105" x2="254" y2="105" stroke="#1f140e" stroke-width="2.5" opacity="0.7"/>
      <rect x="186" y="148" width="28" height="14" fill="#09090b"/>
    `;
  } else if (t.cap === 'xerjoff_crown') {
    // Xerjoff qirollik toji
    capHtml = `
      <path d="M172,118 L162,82 L200,48 L238,82 L228,118 Z" fill="url(#goldCap_${id})" stroke="#fae8ab" stroke-width="1.5"/>
      <circle cx="200" cy="46" r="6" fill="url(#goldGrad_${id})"/>
      <rect x="186" y="118" width="28" height="16" fill="#80620f"/>
    `;
  } else if (t.cap === 'dior_cap') {
    // Dior Sauvage qovurg'ali qopqog'i
    capHtml = `
      <rect x="166" y="68" width="68" height="52" rx="7" fill="#111827" stroke="#374151" stroke-width="1.5"/>
      <line x1="178" y1="74" x2="178" y2="114" stroke="#4b5563" stroke-width="1.2"/>
      <line x1="190" y1="74" x2="190" y2="114" stroke="#4b5563" stroke-width="1.2"/>
      <line x1="202" y1="74" x2="202" y2="114" stroke="#4b5563" stroke-width="1.2"/>
      <line x1="214" y1="74" x2="214" y2="114" stroke="#4b5563" stroke-width="1.2"/>
      <rect x="174" y="116" width="52" height="6" fill="url(#silverGrad_${id})"/>
      <rect x="186" y="120" width="28" height="16" fill="#030712"/>
    `;
  } else {
    // Standart oltin qopqoq
    capHtml = `
      <rect x="168" y="70" width="64" height="48" rx="6" fill="url(#goldCap_${id})" stroke="#fae8ab" stroke-width="1.5"/>
      <rect x="182" y="58" width="36" height="14" rx="3" fill="url(#goldGrad_${id})"/>
      <rect x="186" y="118" width="28" height="16" fill="#80620f"/>
    `;
  }

  // Shisha tanasi (Bottle Body)
  let bodyHtml = '';
  const labelBorder = t.accent || '#dfb443';
  if (t.bottle === 'creed') {
    bodyHtml = `
      <path d="M120,200 C120,150 145,138 180,136 L220,136 C255,138 280,150 280,200 L280,362 C280,374 270,380 260,380 L140,380 C130,380 120,374 120,362 Z" fill="url(#glassBody_${id})" stroke="${labelBorder}" stroke-width="2"/>
      <path d="M126,204 C126,160 148,150 180,148 L220,148 C252,150 274,160 274,204 L274,358 C274,368 266,374 256,374 L144,374 C134,374 126,368 126,358 Z" fill="url(#fluidGrad_${id})" opacity="0.45"/>
    `;
  } else if (t.bottle === 'dior_sauvage') {
    bodyHtml = `
      <rect x="125" y="136" width="150" height="242" rx="24" fill="url(#glassBody_${id})" stroke="${labelBorder}" stroke-width="2"/>
      <rect x="131" y="160" width="138" height="210" rx="18" fill="url(#fluidGrad_${id})" opacity="0.55"/>
      <rect x="135" y="365" width="130" height="8" rx="3" fill="#1e293b" opacity="0.7"/>
    `;
  } else if (t.bottle === 'nasomatto') {
    bodyHtml = `
      <rect x="134" y="160" width="132" height="215" rx="10" fill="url(#glassBody_${id})" stroke="${labelBorder}" stroke-width="2"/>
      <rect x="140" y="180" width="120" height="188" rx="7" fill="url(#fluidGrad_${id})" opacity="0.75"/>
    `;
  } else if (t.bottle === 'xerjoff') {
    bodyHtml = `
      <path d="M130,195 C130,145 150,136 182,135 L218,135 C250,136 270,145 270,195 L276,358 C276,370 266,378 254,378 L146,378 C134,378 124,370 124,358 Z" fill="url(#glassBody_${id})" stroke="${labelBorder}" stroke-width="2"/>
      <path d="M135,198 C135,152 153,144 182,143 L218,143 C247,144 265,152 265,198 L270,354 C270,364 262,372 250,372 L150,372 C138,372 130,364 130,354 Z" fill="url(#fluidGrad_${id})" opacity="0.5"/>
    `;
  } else {
    // Tom Ford, MFK, Kilian, Chanel va boshqa hashamatli to'g'ri burchakli shishalar
    const strokeW = t.isExtrait ? "2.5" : "2";
    bodyHtml = `
      <rect x="115" y="136" width="170" height="240" rx="18" fill="url(#glassBody_${id})" stroke="${labelBorder}" stroke-width="${strokeW}"/>
      <rect x="122" y="165" width="156" height="204" rx="12" fill="url(#fluidGrad_${id})" opacity="0.45"/>
    `;
  }

  // Etiketka uslubi
  const labelBg = t.labelBg || '#111116';
  const labelTextColor = t.labelText || '#ffffff';

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="100%" height="100%">
    <defs>
      <radialGradient id="bgGlow_${id}" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stop-color="#1e1814"/>
        <stop offset="55%" stop-color="#121118"/>
        <stop offset="100%" stop-color="#08080c"/>
      </radialGradient>
      <linearGradient id="goldGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fdf1c5"/>
        <stop offset="45%" stop-color="#dfb443"/>
        <stop offset="100%" stop-color="#997c1e"/>
      </linearGradient>
      <linearGradient id="silverGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#cbd5e1"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
      <linearGradient id="goldCap_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8a6912"/>
        <stop offset="35%" stop-color="#fae8ab"/>
        <stop offset="65%" stop-color="#e5bd47"/>
        <stop offset="100%" stop-color="#73540a"/>
      </linearGradient>
      <linearGradient id="fluidGrad_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${fluidColor1}"/>
        <stop offset="100%" stop-color="${fluidColor2}"/>
      </linearGradient>
      <linearGradient id="glassBody_${id}" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.22)"/>
        <stop offset="20%" stop-color="rgba(255,255,255,0.06)"/>
        <stop offset="80%" stop-color="rgba(255,255,255,0.04)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.24)"/>
      </linearGradient>
    </defs>

    <!-- Orqa fon va yorqin aura -->
    <rect width="400" height="480" fill="url(#bgGlow_${id})"/>
    <circle cx="200" cy="245" r="145" fill="${t.glow}" opacity="0.22" filter="blur(40px)"/>
    
    <!-- Shisha ostidagi soya -->
    <ellipse cx="200" cy="384" rx="90" ry="14" fill="#000000" opacity="0.75" filter="blur(8px)"/>

    <!-- Qopqoq -->
    ${capHtml}

    <!-- Shisha tanasi va suyuqligi -->
    ${bodyHtml}
    
    <!-- Shisha jilolari -->
    <line x1="126" y1="148" x2="126" y2="362" stroke="rgba(255,255,255,0.35)" stroke-width="2.5"/>
    <line x1="274" y1="148" x2="274" y2="362" stroke="rgba(255,255,255,0.18)" stroke-width="1.8"/>

    <!-- Hashamatli Etiketka -->
    <rect x="135" y="202" width="130" height="122" rx="8" fill="${labelBg}" stroke="${labelBorder}" stroke-width="1.6"/>
    <rect x="140" y="207" width="120" height="112" rx="6" fill="none" stroke="${labelBorder}" stroke-width="0.8" opacity="0.45"/>
    
    <text x="200" y="228" text-anchor="middle" fill="${labelBorder}" font-family="'Cinzel', Georgia, serif" font-size="10.5" font-weight="700" letter-spacing="2">⚜️ L'ÉLIXIR</text>
    <line x1="155" y1="236" x2="245" y2="236" stroke="${labelBorder}" stroke-width="0.8" opacity="0.6"/>
    <text x="200" y="258" text-anchor="middle" fill="${labelTextColor}" font-family="'Playfair Display', Georgia, serif" font-size="12" font-weight="700">${shortName}</text>
    <text x="200" y="278" text-anchor="middle" fill="${labelBorder}" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="600" letter-spacing="1.2">${safeBrand.toUpperCase()}</text>
    <text x="200" y="300" text-anchor="middle" fill="#9ca3af" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="500" letter-spacing="1.5">EXTRAIT DE PARFUM (30%)</text>
    
    <!-- Yaltiroq nur nurlari -->
    <circle cx="200" cy="390" r="50" fill="${t.glow}" opacity="0.3" filter="blur(12px)"/>
  </svg>`;

  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Universal rasm yetkazib berish funksiyasi
function getPerfumeImage(item) {
  if (!item) return "";
  const id = item.id || 1;
  // 1. Foydalanuvchi o'zi yuklagan rasm (localStorage)
  const customImg = localStorage.getItem("custom_perfume_img_" + id);
  if (customImg && customImg.trim() !== "") {
    return customImg;
  }
  // 2. Agar item.image haqiqiy tashqi rasm bo'lsa (blob yoki unsplash bo'lmagan)
  if (item.image && typeof item.image === "string" && item.image.trim() !== "" && !item.image.startsWith("blob:") && !item.image.includes("unsplash.com")) {
    return item.image;
  }
  // 3. Standart hashamatli vektor shisha san'ati (Har bir atir uchun individual)
  return getPerfumeBottleSvg(item);
}

// Zaxira funksiya (Eski chaqiruvlar bilan to'liq mos kelishi uchun)
function getPerfumeFallbackSvg(brand, name) {
  const p = perfumesData.find(item => item.name === name || item.brand === brand);
  return getPerfumeBottleSvg(p || { id: 1, brand: brand, name: name });
}

// Rasm yuklanmaganda xatolikni ushlab, hashamatli SVG ga almashtirish
function handleImgError(imgElement, productId) {
  if (!imgElement || imgElement.dataset.hasFallback === "true") return;
  imgElement.dataset.hasFallback = "true";
  const p = perfumesData.find(item => item.id === productId) || { id: productId };
  imgElement.src = getPerfumeBottleSvg(p);
}

// Foydalanuvchi tomonidan yangi rasm yuklash
function handleUserImageUpload(event) {
  const file = event.target.files[0];
  if (!file || !activeDetailPerfume) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    localStorage.setItem("custom_perfume_img_" + activeDetailPerfume.id, dataUrl);
    
    // Detal oynasini yangilash
    const detailImg = document.getElementById("detail-img");
    if (detailImg) detailImg.src = dataUrl;

    // Asosiy katalog va savatni qayta chizish
    renderProducts();
    updateCartUI();
    showToast("✨ " + activeDetailPerfume.name + " uchun rasm muvaffaqiyatli saqlandi!");
  };
  reader.readAsDataURL(file);
}

// Standart hashamatli shisha rasmiga qaytarish
function resetPerfumeImage() {
  if (!activeDetailPerfume) return;
  localStorage.removeItem("custom_perfume_img_" + activeDetailPerfume.id);

  const defaultImg = getPerfumeBottleSvg(activeDetailPerfume);
  const detailImg = document.getElementById("detail-img");
  if (detailImg) detailImg.src = defaultImg;

  renderProducts();
  updateCartUI();
  showToast("↺ " + activeDetailPerfume.name + " standart hashamatli shishasiga qaytarildi!");
}


// Hero Showcase — Saytga kirishdagi shiroyli rasm boshqaruvi
const heroShowcaseList = [
  {
    id: 9,
    name: "Baccarat Rouge 540 Extrait",
    brand: "Maison Francis Kurkdjian",
    price: "130 000 so'm (50 ml)",
    badge: "🔥 Bestseller N1",
    rating: "5.0",
    image: getPerfumeBottleSvg({ id: 9, brand: "Maison Francis Kurkdjian", name: "Baccarat Rouge 540 Extrait" }),
    thumb: getPerfumeBottleSvg({ id: 9, brand: "Maison Francis Kurkdjian", name: "Baccarat Rouge 540 Extrait" })
  },
  {
    id: 1,
    name: "Lost Cherry",
    brand: "Tom Ford",
    price: "130 000 so'm (50 ml)",
    badge: "🍒 Eng jozibador",
    rating: "4.9",
    image: getPerfumeBottleSvg({ id: 1, brand: "Tom Ford", name: "Lost Cherry" }),
    thumb: getPerfumeBottleSvg({ id: 1, brand: "Tom Ford", name: "Lost Cherry" })
  },
  {
    id: 12,
    name: "Aventus",
    brand: "Creed",
    price: "135 000 so'm (50 ml)",
    badge: "👑 Qirollik ifori",
    rating: "5.0",
    image: getPerfumeBottleSvg({ id: 12, brand: "Creed", name: "Aventus" }),
    thumb: getPerfumeBottleSvg({ id: 12, brand: "Creed", name: "Aventus" })
  }
];

let currentHeroIndex = 0;
let heroAutoTimer = null;

function switchHeroShowcase(index, btnElement) {
  if (index < 0 || index >= heroShowcaseList.length) return;
  currentHeroIndex = index;
  const item = heroShowcaseList[index];

  const mainImg = document.getElementById("hero-main-img");
  const floatingBadge = document.querySelector(".floating-perfume-badge");
  const allThumbs = document.querySelectorAll(".showcase-thumb");

  if (allThumbs) {
    allThumbs.forEach((btn, idx) => {
      btn.classList.toggle("active", idx === index);
    });
  }

  if (mainImg) {
    mainImg.style.opacity = "0.2";
    mainImg.style.transform = "scale(0.95)";
    setTimeout(() => {
      mainImg.src = item.image;
      mainImg.alt = item.name;
      mainImg.style.opacity = "1";
      mainImg.style.transform = "scale(1)";
    }, 180);
  }

  if (floatingBadge) {
    floatingBadge.onclick = () => openDetailModal(item.id);
    const subtitle = floatingBadge.querySelector(".fpb-subtitle");
    const title = floatingBadge.querySelector(".fpb-title");
    const price = floatingBadge.querySelector(".fpb-price");
    const thumbImg = floatingBadge.querySelector(".fpb-thumb img");

    if (subtitle) subtitle.textContent = item.badge;
    if (title) title.textContent = item.name;
    if (price) price.textContent = item.price;
    if (thumbImg) thumbImg.src = item.thumb;
  }
}

function smoothScrollToCatalog(e) {
  if (e) e.preventDefault();
  const catalog = document.getElementById("product-list");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function initHeroShowcase() {
  // Dastlabki birinchi hashamatli atirni darhol ko'rsatish
  switchHeroShowcase(0);

  // Har 7 soniyada avtomatik almashtirish
  if (heroAutoTimer) clearInterval(heroAutoTimer);
  heroAutoTimer = setInterval(() => {
    const nextIdx = (currentHeroIndex + 1) % heroShowcaseList.length;
    const thumbs = document.querySelectorAll(".showcase-thumb");
    const targetThumb = thumbs && thumbs[nextIdx] ? thumbs[nextIdx] : null;
    switchHeroShowcase(nextIdx, targetThumb);
  }, 7000);

  // Hover paytida to'xtatish
  const card = document.querySelector(".hero-showcase-card");
  if (card) {
    card.addEventListener("mouseenter", () => {
      if (heroAutoTimer) clearInterval(heroAutoTimer);
    });
    card.addEventListener("mouseleave", () => {
      initHeroShowcase();
    });
  }
}

function renderProducts() {
  const container = document.getElementById("product-list");
  const noResults = document.getElementById("no-results");
  const displayedCount = document.getElementById("displayed-count");
  const countAll = document.getElementById("count-all");
  const activeFilterIndicator = document.getElementById("active-filter-indicator");

  if (!container) return;

  // Umumiy soni
  if (countAll) countAll.textContent = perfumesData.length;

  // Filtratsiya
  let filtered = perfumesData.filter(item => {
    // 1. Kategoriya filtri
    let matchesCat = false;
    if (currentCategory === "Hammasi") {
      matchesCat = true;
    } else if (currentCategory === "Wishlist") {
      matchesCat = wishlist.has(item.id);
    } else {
      matchesCat = item.category.includes(currentCategory);
    }
    if (!matchesCat) return false;

    // 2. Brend filtri
    if (currentBrand !== "Hammasi") {
      if (currentBrand === "Boshqa") {
        if (item.brandGroup !== "Boshqa") return false;
      } else {
        if (item.brandGroup !== currentBrand) return false;
      }
    }

    // 3. Ifor xarakteri filtri
    if (currentScent !== "Hammasi") {
      if (item.scentGroup !== currentScent) return false;
    }

    // 4. Qidiruv filtri
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase().trim();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBrand = item.brand.toLowerCase().includes(q);
      const matchNotes = (item.topNotes + " " + item.heartNotes + " " + item.baseNotes).toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchTag = item.scentTag.toLowerCase().includes(q);
      return matchName || matchBrand || matchNotes || matchDesc || matchTag;
    }

    return true;
  });

  // Saralash (Sort)
  filtered.sort((a, b) => {
    const priceA = a.volumes[a.selectedVolume || currentGlobalVolume] || a.volumes["50ml"];
    const priceB = b.volumes[b.selectedVolume || currentGlobalVolume] || b.volumes["50ml"];

    if (currentSort === "price-asc") return priceA - priceB;
    if (currentSort === "price-desc") return priceB - priceA;
    if (currentSort === "name-asc") return a.name.localeCompare(b.name);
    if (currentSort === "brand-asc") return a.brand.localeCompare(b.brand);
    if (currentSort === "rating-desc") return b.rating - a.rating;
    return b.reviews - a.reviews; // Default 'popular'
  });

  // Statistikani yangilash
  if (displayedCount) displayedCount.textContent = filtered.length;

  if (activeFilterIndicator) {
    let indicators = [];
    if (currentCategory !== "Hammasi") indicators.push(currentCategory);
    if (currentBrand !== "Hammasi") indicators.push(currentBrand);
    if (currentScent !== "Hammasi") indicators.push(currentScent);
    if (currentSearch) indicators.push(`"${currentSearch}"`);

    if (indicators.length > 0) {
      activeFilterIndicator.style.display = "inline-block";
      activeFilterIndicator.textContent = indicators.join(" • ");
    } else {
      activeFilterIndicator.style.display = "none";
    }
  }

  // Bo'sh natija
  if (filtered.length === 0) {
    container.innerHTML = "";
    if (noResults) noResults.style.display = "block";
    return;
  } else {
    if (noResults) noResults.style.display = "none";
  }

  // HTML generatsiya
  container.innerHTML = filtered.map(item => {
    const isLiked = wishlist.has(item.id);
    const activeVol = item.selectedVolume || currentGlobalVolume;
    const currentPrice = item.volumes[activeVol] || item.volumes["50ml"];

    return `
      <article class="perfume-card" onclick="openDetailModal(${item.id})">
        <!-- Media / Rasm qismi (o'z joyida, to'liq ko'rinishda) -->
        <div class="card-media">
          <span class="badge-brand">${escapeHtml(item.brand)}</span>
          <span class="badge-gender">${escapeHtml(item.gender)}</span>
          <button 
            type="button" 
            class="card-like-btn ${isLiked ? 'liked' : ''}" 
            onclick="toggleLike(${item.id}, event)" 
            title="${isLiked ? 'Sevimlilardan o\'chirish' : 'Sevimlilarga qo\'shish'}"
          >
            ${isLiked ? '❤️' : '🤍'}
          </button>
          <img src="${getPerfumeImage(item)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="handleImgError(this, ${item.id})">
        </div>

        <!-- Kartochka ma'lumotlari -->
        <div class="card-details">
          <div class="card-top-meta">
            <span class="card-brand-label">${escapeHtml(item.brand)}</span>
            <div class="card-rating">
              <span>★</span>
              <span>${item.rating}</span>
            </div>
          </div>

          <h3 class="card-name">${escapeHtml(item.name)}</h3>
          <span class="card-scent-tag">${item.scentTag}</span>
          <p class="card-notes-preview"><strong>Notalar:</strong> ${escapeHtml(item.topNotes)}, ${escapeHtml(item.heartNotes)}</p>

          <!-- Hajm tanlash (10ml, 50ml, 100ml) -->
          <div class="card-volume-selector" onclick="event.stopPropagation()">
            <div class="volume-pills-label">Hajm tanlang:</div>
            <div class="volume-pills">
              <button 
                type="button" 
                class="vol-pill ${activeVol === '10ml' ? 'active' : ''}" 
                onclick="changeCardVolume(${item.id}, '10ml', event)"
              >10 ml</button>
              <button 
                type="button" 
                class="vol-pill ${activeVol === '50ml' ? 'active' : ''}" 
                onclick="changeCardVolume(${item.id}, '50ml', event)"
              >50 ml</button>
              <button 
                type="button" 
                class="vol-pill ${activeVol === '100ml' ? 'active' : ''}" 
                onclick="changeCardVolume(${item.id}, '100ml', event)"
              >100 ml</button>
            </div>
          </div>

          <!-- Pastki qator: Narx va Savat -->
          <div class="card-footer" onclick="event.stopPropagation()">
            <div class="price-column">
              <span class="price-label">Narxi (${activeVol}):</span>
              <strong class="current-price">${formatPrice(currentPrice)}</strong>
            </div>

            <div class="card-action-btns">
              <button 
                type="button" 
                class="quick-view-btn" 
                onclick="openDetailModal(${item.id})" 
                title="To'liq ma'lumot olish"
              >👁️</button>
              <button 
                type="button" 
                class="add-cart-card-btn" 
                onclick="addToCart(${item.id}, '${activeVol}')"
              >
                <span>+ Savatga</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 4. Kartochkada hajm o'zgartirish (10ml / 50ml / 100ml)
function changeCardVolume(productId, volume, event) {
  if (event) event.stopPropagation();
  const perfume = perfumesData.find(p => p.id === productId);
  if (perfume) {
    perfume.selectedVolume = volume;
    renderProducts();
  }
}

// 5. Sevimlilar (Like / Wishlist) boshqaruvi
function toggleLike(productId, event) {
  if (event) event.stopPropagation();
  
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    showToast("Sevimlilardan olib tashlandi");
  } else {
    wishlist.add(productId);
    showToast("❤️ Sevimlilarga qo'shildi!");
  }

  saveWishlist();
  updateWishlistBadges();
  renderProducts();

  // Agar detal modali ochiq bo'lsa, uni ham yangilash
  if (activeDetailPerfume && activeDetailPerfume.id === productId) {
    updateDetailLikeButton();
  }
}

function updateWishlistBadges() {
  const count = wishlist.size;
  const navBadge = document.getElementById("wishlist-count");
  const tabBadge = document.getElementById("tab-wishlist-count");

  if (navBadge) navBadge.textContent = count;
  if (tabBadge) tabBadge.textContent = count;
}

function saveWishlist() {
  localStorage.setItem("lelixir_wishlist", JSON.stringify(Array.from(wishlist)));
}

// 6. To'liq ma'lumot modali (Product Detail Modal)
function openDetailModal(productId) {
  const perfume = perfumesData.find(p => p.id === productId);
  if (!perfume) return;

  activeDetailPerfume = perfume;
  activeDetailVolume = perfume.selectedVolume || currentGlobalVolume || "50ml";
  activeDetailQty = 1;

  // DOM elementlarini to'ldirish
  document.getElementById("detail-brand").textContent = perfume.brand;
  document.getElementById("detail-title").textContent = perfume.name;
  document.getElementById("detail-gender-badge").textContent = perfume.gender;
  document.getElementById("detail-conc-badge").textContent = "30% Fransuz moyi (Extrait)";
  document.getElementById("detail-rating-text").textContent = perfume.rating;
  const detailImgEl = document.getElementById("detail-img");
  if (detailImgEl) {
    detailImgEl.src = getPerfumeImage(perfume);
    detailImgEl.alt = perfume.name;
    detailImgEl.onerror = function() {
      this.src = getPerfumeBottleSvg(perfume);
    };
  }
  document.getElementById("detail-longevity").textContent = perfume.longevity;
  document.getElementById("detail-sillage").textContent = perfume.sillage;
  document.getElementById("detail-season").textContent = perfume.season;
  document.getElementById("detail-desc").textContent = perfume.description;

  // Notalar
  document.getElementById("detail-top-notes").textContent = perfume.topNotes;
  document.getElementById("detail-heart-notes").textContent = perfume.heartNotes;
  document.getElementById("detail-base-notes").textContent = perfume.baseNotes;

  // Soni
  document.getElementById("detail-qty-val").textContent = activeDetailQty;

  // Hajm tugmalari va narxlarni yaratish
  renderDetailVolumePills();
  updateDetailPrice();
  updateDetailLikeButton();

  // Modalni ko'rsatish
  const modal = document.getElementById("detail-modal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function renderDetailVolumePills() {
  const pillsContainer = document.getElementById("detail-volume-pills");
  if (!pillsContainer || !activeDetailPerfume) return;

  const volumes = [
    { key: "10ml", label: "10 ml", badge: "Sayohat/Sinov" },
    { key: "50ml", label: "50 ml", badge: "Eng ommabop" },
    { key: "100ml", label: "100 ml", badge: "To'liq hajm" }
  ];

  pillsContainer.innerHTML = volumes.map(v => {
    const price = activeDetailPerfume.volumes[v.key];
    const isActive = activeDetailVolume === v.key;
    return `
      <div 
        class="modal-vol-pill ${isActive ? 'active' : ''}" 
        onclick="selectDetailVolume('${v.key}')"
      >
        <span class="vol-name">${v.label}</span>
        <span class="vol-price">${formatPrice(price)}</span>
        <span class="vol-badge">${v.badge}</span>
      </div>
    `;
  }).join("");
}

function selectDetailVolume(volKey) {
  activeDetailVolume = volKey;
  if (activeDetailPerfume) {
    activeDetailPerfume.selectedVolume = volKey;
  }
  renderDetailVolumePills();
  updateDetailPrice();
}

function updateDetailPrice() {
  if (!activeDetailPerfume) return;
  const unitPrice = activeDetailPerfume.volumes[activeDetailVolume];
  const totalPrice = unitPrice * activeDetailQty;
  
  const priceEl = document.getElementById("detail-current-price");
  if (priceEl) {
    priceEl.textContent = formatPrice(totalPrice);
  }
}

function adjustDetailQty(delta) {
  activeDetailQty += delta;
  if (activeDetailQty < 1) activeDetailQty = 1;
  if (activeDetailQty > 20) activeDetailQty = 20;

  document.getElementById("detail-qty-val").textContent = activeDetailQty;
  updateDetailPrice();
}

function updateDetailLikeButton() {
  const likeBtn = document.getElementById("detail-like-btn");
  if (!likeBtn || !activeDetailPerfume) return;

  const isLiked = wishlist.has(activeDetailPerfume.id);
  likeBtn.className = `modal-like-btn ${isLiked ? 'liked' : ''}`;
  likeBtn.innerHTML = `<span class="modal-like-heart">${isLiked ? '❤️' : '🤍'}</span>`;
}

function toggleDetailLike() {
  if (activeDetailPerfume) {
    toggleLike(activeDetailPerfume.id);
  }
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

function closeDetailOutside(event) {
  if (event.target.id === "detail-modal") {
    closeDetailModal();
  }
}

function addCurrentDetailToCart() {
  if (!activeDetailPerfume) return;
  addToCart(activeDetailPerfume.id, activeDetailVolume, activeDetailQty);
  closeDetailModal();
}

function orderCurrentViaTelegram() {
  if (!activeDetailPerfume) return;
  const unitPrice = activeDetailPerfume.volumes[activeDetailVolume];
  const total = unitPrice * activeDetailQty;

  const msg = encodeURIComponent(
    `⚜️ L'ÉLIXIR PARFUMS BUYURTMA:\n\n` +
    `• Atir: ${activeDetailPerfume.brand} — ${activeDetailPerfume.name}\n` +
    `• Hajm: ${activeDetailVolume}\n` +
    `• Soni: ${activeDetailQty} dona\n` +
    `• Narxi: ${formatPrice(total)}\n\n` +
    `Buyurtmani rasmiylashtirishni istayman!`
  );

  window.open(`https://t.me/lelixir_parfums?text=${msg}`, "_blank");
}

// 7. Savat boshqaruvi (Cart logic)
function addToCart(productId, volume = "50ml", quantity = 1) {
  const perfume = perfumesData.find(p => p.id === productId);
  if (!perfume) return;

  const price = perfume.volumes[volume] || perfume.volumes["50ml"];
  const cartItemId = `${productId}-${volume}`;

  const existingItem = cart.find(item => item.cartItemId === cartItemId);

  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cart.push({
      cartItemId: cartItemId,
      productId: perfume.id,
      name: perfume.name,
      brand: perfume.brand,
      volume: volume,
      price: price,
      qty: quantity,
      image: perfume.image
    });
  }

  saveCart();
  updateCartUI();
  
  // Savat nishoni animatsiyasi
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }

  showToast(`✓ ${perfume.name} (${volume}) savatga qo'shildi!`);
}

function changeCartQty(cartItemId, delta) {
  const item = cart.find(i => i.cartItemId === cartItemId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.cartItemId !== cartItemId);
    showToast("Mahsulot savatdan olib tashlandi");
  }

  saveCart();
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.cartItemId !== cartItemId);
  saveCart();
  updateCartUI();
  showToast("Mahsulot savatdan o'chirildi");
}

function saveCart() {
  localStorage.setItem("lelixir_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartCountNav = document.getElementById("cart-count");
  const cartItemsBadge = document.getElementById("cart-items-total-badge");
  const subtotalEl = document.getElementById("cart-subtotal");
  const shippingFeeEl = document.getElementById("cart-shipping-fee");
  const grandTotalEl = document.getElementById("cart-grand-total");
  const checkoutSection = document.getElementById("checkout-section");
  const progressText = document.getElementById("shipping-progress-text");
  const progressBar = document.getElementById("shipping-progress-bar");

  let totalQty = 0;
  let subtotal = 0;

  cart.forEach(item => {
    totalQty += item.qty;
    subtotal += item.price * item.qty;
  });

  if (cartCountNav) cartCountNav.textContent = totalQty;
  if (cartItemsBadge) cartItemsBadge.textContent = `${totalQty} ta mahsulot`;

  // Bepul yetkazib berish chegarasi: 150 000 so'm (Tamam.uz standarti)
  const freeShippingThreshold = 150000;
  const standardShippingFee = 30000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingFee = (subtotal === 0 || isFreeShipping) ? 0 : standardShippingFee;
  const grandTotal = subtotal + shippingFee;

  // Yetkazib berish progressi
  if (progressBar && progressText) {
    if (subtotal >= freeShippingThreshold) {
      progressBar.style.width = "100%";
      progressText.innerHTML = "🎉 Tabriklaymiz! Sizga <strong>BEPUL YETKAZIB BERISH</strong> taqdim etiladi!";
    } else {
      const needed = freeShippingThreshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
      progressBar.style.width = `${pct}%`;
      progressText.innerHTML = `Yana <strong>${formatPrice(needed)}</strong> xarid qiling va bepul yetkazib berishga ega bo'ling!`;
    }
  }

  // Narxlar matni
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingFeeEl) {
    shippingFeeEl.textContent = isFreeShipping ? "BEPUL (0 so'm)" : formatPrice(shippingFee);
    shippingFeeEl.style.color = isFreeShipping ? "var(--accent-green)" : "inherit";
  }
  if (grandTotalEl) grandTotalEl.textContent = formatPrice(grandTotal);

  // Ro'yxatni chizish
  if (!cartItemsDiv) return;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <div class="empty-cart-view">
        <div class="empty-cart-icon">🛍️</div>
        <h4>Savatingiz hozircha bo'sh</h4>
        <p>Hashamatli atirlarimizdan tanlang va savatga qo'shing!</p>
      </div>
    `;
    if (checkoutSection) checkoutSection.style.display = "none";
  } else {
    if (checkoutSection) checkoutSection.style.display = "block";

    cartItemsDiv.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-media">
          <img src="${getPerfumeImage(item)}" alt="${escapeHtml(item.name)}" loading="lazy" onerror="handleImgError(this, ${item.id})">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${escapeHtml(item.name)}</h4>
          <span class="cart-item-vol-tag">${item.volume} • ${escapeHtml(item.brand)}</span>
          <div class="cart-item-price">${formatPrice(item.price)}</div>
        </div>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeCartQty('${item.cartItemId}', -1)">-</button>
          <span class="cart-qty-val">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty('${item.cartItemId}', 1)">+</button>
          <button class="cart-remove-btn" onclick="removeCartItem('${item.cartItemId}')" title="O'chirish">✕</button>
        </div>
      </div>
    `).join("");
  }
}

function openCart() {
  updateCartUI();
  const modal = document.getElementById("cart-modal");
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const modal = document.getElementById("cart-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

function closeCartOutside(event) {
  if (event.target.id === "cart-modal") {
    closeCart();
  }
}

// 8. To'lov va buyurtmani rasmiylashtirish
function processPayment(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast("Savatingiz bo'sh!");
    return;
  }

  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const method = document.getElementById("payment-method").value;
  const grandTotal = document.getElementById("cart-grand-total").textContent;

  // Chek HTML
  const receiptDiv = document.getElementById("order-receipt");
  if (receiptDiv) {
    const itemsList = cart.map(i => `• ${i.name} (${i.volume}) x ${i.qty} = ${formatPrice(i.price * i.qty)}`).join("<br>");
    receiptDiv.innerHTML = `
      <strong>Mijoz:</strong> ${escapeHtml(name)}<br>
      <strong>Telefon:</strong> ${escapeHtml(phone)}<br>
      <strong>Manzil:</strong> ${escapeHtml(city)}<br>
      <strong>To'lov turi:</strong> ${escapeHtml(method)}<br>
      <hr style="margin: 8px 0; border: none; border-top: 1px dashed var(--border-card);">
      <strong>Mahsulotlar:</strong><br>${itemsList}<br>
      <hr style="margin: 8px 0; border: none; border-top: 1px dashed var(--border-card);">
      <strong style="color: var(--gold-primary); font-size: 15px;">Jami: ${grandTotal}</strong>
    `;
  }

  // Savatni tozalash
  cart = [];
  saveCart();
  updateCartUI();
  closeCart();

  // Muvaffaqiyat modali
  const successModal = document.getElementById("success-modal");
  if (successModal) successModal.classList.add("open");
}

function sendCartOrderToTelegram() {
  if (cart.length === 0) {
    showToast("Savatingiz bo'sh!");
    return;
  }

  const name = document.getElementById("customer-name").value || "Ko'rsatilmagan";
  const phone = document.getElementById("customer-phone").value || "Ko'rsatilmagan";
  const city = document.getElementById("customer-city").value || "Ko'rsatilmagan";
  const method = document.getElementById("payment-method").value;
  const grandTotal = document.getElementById("cart-grand-total").textContent;

  let orderDetails = cart.map((i, idx) => `${idx + 1}. ${i.brand} - ${i.name} [${i.volume}] x ${i.qty} dona (${formatPrice(i.price * i.qty)})`).join("\n");

  const msg = encodeURIComponent(
    `⚜️ YANGI BUYURTMA (L'ÉLIXIR PARFUMS):\n\n` +
    `👤 Mijoz: ${name}\n` +
    `📞 Tel: ${phone}\n` +
    `📍 Manzil: ${city}\n` +
    `💳 To'lov: ${method}\n\n` +
    `📦 Mahsulotlar:\n${orderDetails}\n\n` +
    `💰 Jami to'lov: ${grandTotal}\n\n` +
    `Iltimos, buyurtmani tasdiqlang!`
  );

  window.open(`https://t.me/lelixir_parfums?text=${msg}`, "_blank");
}

function closeSuccessModal() {
  const successModal = document.getElementById("success-modal");
  if (successModal) successModal.classList.remove("open");
  document.body.style.overflow = "auto";
}

function closeSuccessOutside(event) {
  if (event.target.id === "success-modal") {
    closeSuccessModal();
  }
}

// 9. Filtr va Qidiruv boshqaruvi
function filterCategory(category, buttonElement) {
  currentCategory = category;

  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => t.classList.remove("active"));
  if (buttonElement) buttonElement.classList.add("active");

  renderProducts();
}

function filterByBrand(brand, buttonElement) {
  currentBrand = brand;

  const chips = document.querySelectorAll(".brand-chip");
  chips.forEach(c => {
    c.classList.remove("active");
    if (!buttonElement) {
      const txt = c.textContent.trim().toLowerCase();
      if (txt === brand.toLowerCase() || (brand === "Hammasi" && txt === "barchasi")) {
        c.classList.add("active");
      }
    }
  });
  if (buttonElement) buttonElement.classList.add("active");

  renderProducts();

  // Agar hero yoki footerdan chaqirilsa, katalogga silliq scroll qilish
  if (!buttonElement) {
    const list = document.getElementById("product-list");
    if (list) list.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function filterByScent(scent, buttonElement) {
  currentScent = scent;

  const chips = document.querySelectorAll(".scent-chip");
  chips.forEach(c => c.classList.remove("active"));
  if (buttonElement) buttonElement.classList.add("active");

  renderProducts();
}

function filterByWishlist(buttonElement) {
  currentCategory = "Wishlist";
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => t.classList.remove("active"));
  
  const wishlistTab = document.querySelector(".filter-tab.wishlist-tab");
  if (wishlistTab) wishlistTab.classList.add("active");

  renderProducts();
}

function handleSearch(query) {
  currentSearch = query;

  const deskInput = document.getElementById("global-search-input");
  const mobInput = document.getElementById("mobile-search-input");
  const clearBtn = document.getElementById("clear-search-btn");

  if (deskInput && deskInput.value !== query) deskInput.value = query;
  if (mobInput && mobInput.value !== query) mobInput.value = query;

  if (clearBtn) {
    clearBtn.style.display = query ? "block" : "none";
  }

  renderProducts();
}

function clearSearch() {
  handleSearch("");
}

function handleSort(sortValue) {
  currentSort = sortValue;
  renderProducts();
}

function handleGlobalVolumeChange(volume) {
  currentGlobalVolume = volume;
  perfumesData.forEach(p => p.selectedVolume = volume);
  renderProducts();
  showToast(`Barcha atirlar ${volume} hajmiga o'tkazildi`);
}

function resetFilters() {
  currentCategory = "Hammasi";
  currentBrand = "Hammasi";
  currentScent = "Hammasi";
  currentSearch = "";
  clearSearch();

  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(t => t.classList.remove("active"));
  const firstTab = document.querySelector(".filter-tab[data-cat='Hammasi']");
  if (firstTab) firstTab.classList.add("active");

  const brandChips = document.querySelectorAll(".brand-chip");
  brandChips.forEach(c => c.classList.remove("active"));
  if (brandChips[0]) brandChips[0].classList.add("active");

  const scentChips = document.querySelectorAll(".scent-chip");
  scentChips.forEach(c => c.classList.remove("active"));
  if (scentChips[0]) scentChips[0].classList.add("active");

  renderProducts();
}

// 10. Rejim (Dark / Light)
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  const themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {
    if (isDark) {
      themeBtn.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-text">Oq rejim</span>`;
    } else {
      themeBtn.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-text">Qora rejim</span>`;
    }
  }

  localStorage.setItem("lelixir_theme", isDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("lelixir_theme");
  const themeBtn = document.getElementById("theme-toggle");

  if (saved === "light") {
    document.body.classList.remove("dark-mode");
    if (themeBtn) {
      themeBtn.innerHTML = `<span class="theme-icon">🌙</span><span class="theme-text">Qora rejim</span>`;
    }
  } else {
    document.body.classList.add("dark-mode");
    if (themeBtn) {
      themeBtn.innerHTML = `<span class="theme-icon">☀️</span><span class="theme-text">Oq rejim</span>`;
    }
  }
}

// 11. Toast bildirishnomasi
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// 12. Yordamchi funksiyalar
function formatPrice(number) {
  if (isNaN(number)) return "0 so'm";
  return number.toLocaleString("uz-UZ") + " so'm";
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Klaviatura orqali modalni yopish (Escape tugmasi)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailModal();
    closeCart();
    closeSuccessModal();
  }
});

// 13. Dastlabki ishga tushirish (Initialization)
document.addEventListener("DOMContentLoaded", () => {
  initHeroShowcase();
  initTheme();
  updateWishlistBadges();
  updateCartUI();
  renderProducts();
});
