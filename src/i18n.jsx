// Les langues dyal site: français (fr) w l3rbiya (ar).
// Kol ktaba f site katji mn hna: t('cle') katrje3 l'ktaba b l'logha li khtar l'client.
import { createContext, useContext, useEffect } from 'react'
import { useStorage } from './data'

const TEXTES = {
  fr: {
    // navbar
    navHome: 'HOME', navAcheter: 'ACHETER', navLocation: 'LOCATION', navAgences: 'AGENCE IMMOBILIERE',
    seConnecter: 'se connecter', votreCompte: 'votre compte', monCompte: 'Mon compte',
    // hero
    heroTitre1: 'Trouvez la propriété', heroTitre2: 'de vos rêves', heroScript: 'au Maroc.',
    heroTexte1: 'Que vous souhaitiez acheter ou louer,', heroTexte2: 'découvrez les meilleures offres sur notre plateforme',
    heroBouton: 'naviguer maintenant',
    // villes populaires
    villesTitre: 'Villes', villesScript: 'populaires',
    // recherche
    tous: 'Tous', acheter: 'Acheter', louer: 'Louer', ville: 'Ville', toutesVilles: 'Toutes les villes',
    typeBien: 'Type de bien', tousTypes: 'Tous les types de bien',
    trier: 'Trier par prix', prixCroissant: 'Prix croissant', prixDecroissant: 'Prix décroissant',
    aucune: 'Aucune annonce trouvée.',
    // carte
    ch: 'ch', dh: 'DH', parMois: ' / mois',
    // pourquoi dari
    pourquoi: 'Pourquoi choisir', pourquoiScript: 'dari ?',
    av1Titre: 'Des annonces vérifiées', av1Texte: "Chaque bien est contrôlé par nos agences partenaires avant d'être publié.",
    av2Titre: 'Partout au Maroc', av2Texte: 'De Tanger à Agadir, trouvez un bien dans la ville et le quartier qui vous conviennent.',
    av3Titre: 'Un contact direct', av3Texte: "Appelez ou écrivez à l'agence en un clic, sans intermédiaire.",
    // bloc agences
    ctaTitre: 'Vous êtes une agence immobilière ?',
    ctaTexte: "Rejoignez dari et présentez vos biens à des milliers d'acheteurs et de locataires partout au Maroc.",
    devenirPartenaire: 'Devenir partenaire', nousContacter: 'Nous contacter',
    // pages annonces
    titreAcheter: 'Acheter un bien', titreLouer: 'Louer un bien',
    // page détail
    introuvable: 'Annonce introuvable', retourAccueil: "Retour à l'accueil", accueil: 'Accueil', sep: '›', virgule: ',',
    question: "Comment voulez-vous contacter l'annonceur ?", appel: 'Appel', envoyer: 'Envoyer', photo: 'Photo',
    chambres: 'Chambres', sdb: 'Salles de bain', description: 'Description', caracteristiques: 'Caractéristiques',
    annonceur: 'Annonceur', nom: 'Nom :', type: 'Type :', villeDeux: 'Ville :', telephone: 'Téléphone :',
    agenceImmo: 'Agence immobilière', fermer: 'Fermer',
    // page agences
    agTitre: 'Nos agences', agScript: 'partenaires',
    agTexte: 'Des professionnels de confiance partout au Maroc pour vous accompagner dans votre projet.',
    toutes: 'Toutes', tel: 'Tél.', a: 'à', voirAnnonces: 'Voir les annonces',
    // login + compte
    loginTexte: 'Achetez ou louez en toute confiance avec nos agences partenaires.',
    bienvenue: 'Bienvenue', loginSous: 'Connectez-vous pour accéder à votre compte.',
    nomComplet: 'Nom complet', nomExemple: 'Ex : Adam El Amrani', email: 'Email', motDePasse: 'Mot de passe',
    boutonConnecter: 'Se connecter', deconnexion: 'Déconnexion',
    // footer
    footerTexte: 'Votre plateforme pour acheter ou louer un bien immobilier au Maroc.',
    contact: 'Contact', adresse: 'Nador, Maroc', copyright: '© 2026 dari — Immobilier au Maroc', langue: 'Langue',
  },
  ar: {
    navHome: 'الرئيسية', navAcheter: 'شراء', navLocation: 'كراء', navAgences: 'الوكالات العقارية',
    seConnecter: 'تسجيل الدخول', votreCompte: 'حسابك', monCompte: 'حسابي',
    heroTitre1: 'اعثر على العقار', heroTitre2: 'الذي تحلم به', heroScript: 'في المغرب.',
    heroTexte1: 'سواء كنت تريد الشراء أو الكراء،', heroTexte2: 'اكتشف أفضل العروض على منصتنا',
    heroBouton: 'تصفح الآن',
    villesTitre: 'المدن', villesScript: 'الأكثر طلبا',
    tous: 'الكل', acheter: 'شراء', louer: 'كراء', ville: 'المدينة', toutesVilles: 'كل المدن',
    typeBien: 'نوع العقار', tousTypes: 'كل أنواع العقارات',
    trier: 'ترتيب حسب الثمن', prixCroissant: 'الثمن: من الأرخص', prixDecroissant: 'الثمن: من الأغلى',
    aucune: 'لا توجد إعلانات.',
    ch: 'غرف', dh: 'درهم', parMois: ' / شهريا',
    pourquoi: 'لماذا تختار', pourquoiScript: 'dari؟',
    av1Titre: 'إعلانات موثوقة', av1Texte: 'كل عقار تتحقق منه وكالاتنا الشريكة قبل نشره.',
    av2Titre: 'في كل أنحاء المغرب', av2Texte: 'من طنجة إلى أكادير، اعثر على عقار في المدينة والحي الذي يناسبك.',
    av3Titre: 'تواصل مباشر', av3Texte: 'اتصل بالوكالة أو راسلها بنقرة واحدة، بدون وسيط.',
    ctaTitre: 'هل أنت وكالة عقارية؟',
    ctaTexte: 'انضم إلى dari واعرض عقاراتك على آلاف المشترين والمكترين في جميع أنحاء المغرب.',
    devenirPartenaire: 'كن شريكا', nousContacter: 'تواصل معنا',
    titreAcheter: 'شراء عقار', titreLouer: 'كراء عقار',
    introuvable: 'الإعلان غير موجود', retourAccueil: 'العودة إلى الرئيسية', accueil: 'الرئيسية', sep: '‹', virgule: '،',
    question: 'كيف تريد التواصل مع المعلن؟', appel: 'اتصال', envoyer: 'إرسال', photo: 'صورة',
    chambres: 'غرف', sdb: 'حمامات', description: 'الوصف', caracteristiques: 'المميزات',
    annonceur: 'المعلن', nom: 'الاسم:', type: 'النوع:', villeDeux: 'المدينة:', telephone: 'الهاتف:',
    agenceImmo: 'وكالة عقارية', fermer: 'إغلاق',
    agTitre: 'وكالاتنا', agScript: 'الشريكة',
    agTexte: 'مهنيون موثوقون في جميع أنحاء المغرب لمرافقتك في مشروعك.',
    toutes: 'الكل', tel: 'الهاتف:', a: 'في', voirAnnonces: 'عرض الإعلانات',
    loginTexte: 'اشترِ أو اكترِ بكل ثقة مع وكالاتنا الشريكة.',
    bienvenue: 'مرحبا', loginSous: 'سجّل الدخول للوصول إلى حسابك.',
    nomComplet: 'الاسم الكامل', nomExemple: 'مثال: آدم العمراني', email: 'البريد الإلكتروني', motDePasse: 'كلمة السر',
    boutonConnecter: 'تسجيل الدخول', deconnexion: 'تسجيل الخروج',
    footerTexte: 'منصتك لشراء أو كراء عقار في المغرب.',
    contact: 'اتصل بنا', adresse: 'الناظور، المغرب', copyright: '© 2026 dari — العقار في المغرب', langue: 'اللغة',
  },
}

// Les mots li jayin mn les données (mdon, catégories, mmayzat, l7wma) b l3rbiya
const MOTS_AR = {
  Casablanca: 'الدار البيضاء', Marrakech: 'مراكش', Rabat: 'الرباط', 'Fès': 'فاس', Tanger: 'طنجة',
  Chefchaouen: 'شفشاون', Agadir: 'أكادير', 'Kénitra': 'القنيطرة', Nador: 'الناظور',
  appartements: 'شقق', villas: 'فيلات', maisons: 'منازل', terrains: 'أراضي',
  Ascenseur: 'مصعد', Balcon: 'شرفة', 'Cuisine équipée': 'مطبخ مجهز', Parking: 'موقف سيارات', 'Sécurisé': 'محروس',
  'Ensoleillé': 'مشمس', Piscine: 'مسبح', Jardin: 'حديقة', Garage: 'مرآب', Climatisation: 'تكييف', Terrasse: 'سطح',
  Chauffage: 'تدفئة', Calme: 'هادئ', Patio: 'فناء', Fontaine: 'نافورة', 'Décor traditionnel': 'ديكور تقليدي',
  'Titré': 'محفظ', 'Terrain plat': 'أرض مستوية', 'Accès route': 'طريق معبدة', 'Eau et électricité': 'الماء والكهرباء',
  'Vue montagne': 'إطلالة على الجبل', 'Rénovée': 'مجددة', 'Cheminée': 'مدفأة', 'Meublé': 'مفروش', 'Meublée': 'مفروشة',
  Internet: 'إنترنت', 'Vue mer': 'إطلالة على البحر',
  'Maârif': 'المعاريف', Palmeraie: 'النخيل', Souissi: 'السويسي', 'Médina': 'المدينة القديمة', Malabata: 'مالاباطا',
  Centre: 'وسط المدينة', Gauthier: 'غوتيي', Founty: 'فونتي', 'Bir Rami': 'بئر الرامي', Marchica: 'مارتشيكا',
}

// L'3onwan w l'wasf dyal kol annonce b l3rbiya (b l'id dyalha)
const ANNONCES_AR = {
  1: { titre: 'شقة عصرية', description: 'شقة جميلة ومضيئة في الطابق الثالث من إقامة حديثة، قريبة من المتاجر والمدارس. صالون واسع، مطبخ مجهز وشرفة كبيرة.' },
  2: { titre: 'فيلا بمسبح', description: 'فيلا راقية في قلب النخيل، محاطة بحديقة كبيرة مع مسبح خاص. مثالية للعائلة أو لمشروع دار ضيافة.' },
  3: { titre: 'منزل عائلي', description: 'منزل عائلي في حي هادئ وأخضر، قريب من المدارس. صالون كبير، مطبخ مفتوح وحديقة خاصة.' },
  4: { titre: 'رياض في المدينة القديمة', description: 'رياض تقليدي مرمم بفناء وسطي ونافورة وزليج أصلي. سطح بإطلالة على المدينة القديمة.' },
  5: { titre: 'أرض صالحة للبناء', description: 'أرض مستوية ومحفظة، جاهزة للبناء، في منطقة في طور التطور قريبة من الكورنيش.' },
  6: { titre: 'منزل تقليدي', description: 'منزل نموذجي بجدران زرقاء، مجدد بذوق. سطح بإطلالة على جبال الريف.' },
  7: { titre: 'ستوديو مفروش', description: 'ستوديو مفروش بالكامل في وسط المدينة، مثالي لطالب أو موظف شاب. قريب من الترامواي.' },
  8: { titre: 'فيلا بإطلالة على البحر', description: 'فيلا عصرية بإطلالة رائعة على المحيط، على بعد دقائق من الشاطئ. سطح كبير ومسبح.' },
  9: { titre: 'منزل بحديقة', description: 'منزل واسع بحديقة جميلة، في حي سكني هادئ. مثالي للعائلة.' },
  10: { titre: 'رياض ساحر', description: 'رياض ساحر بفناء ومسبح صغير وسطح، على بعد خطوات من ساحة جامع الفنا.' },
  11: { titre: 'فيلا بإطلالة على البحيرة', description: 'فيلا عصرية أمام بحيرة مارتشيكا، بسطح كبير وحديقة ووصول سريع إلى الكورنيش.' },
  12: { titre: 'شقة في وسط المدينة', description: 'شقة مفروشة في قلب الناظور، قريبة من الشارع الرئيسي والمتاجر. مثالية لزوجين أو لطالب.' },
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useStorage('dari-lang', 'fr') // l'logha katb9a mkhbiya mlli ydir refresh

  // l3rbiya katktab mn limen l liser (rtl)
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  const ar = lang === 'ar'
  return {
    lang,
    setLang,
    t: (cle) => TEXTES[lang][cle] ?? TEXTES.fr[cle], // ila ma l9inahach b l3rbiya, nrj3o l'français
    mot: (m) => (ar && MOTS_AR[m]) || m, // mdina, catégorie, mmayza...
    titre: (p) => (ar && ANNONCES_AR[p.id]?.titre) || p.titre,
    description: (p) => (ar && ANNONCES_AR[p.id]?.description) || p.description,
    // "1 annonce / 2 annonces" — l3rbiya 3ndha jam3 mkhtalef 3la 7sab l3adad
    nbAnnonces: (n) => ar
      ? (n === 1 ? 'إعلان واحد' : n === 2 ? 'إعلانان' : n <= 10 ? `${n} إعلانات` : `${n} إعلان`)
      : `${n} annonce${n > 1 ? 's' : ''}`,
  }
}
