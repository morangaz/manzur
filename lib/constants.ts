// Shared constants — all URLs and Hebrew content referenced across components

export const WHATSAPP_URL = "https://wa.me/972504646536?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%2F%D7%AA%20%D7%91%D7%A2%D7%A8%D7%9B%D7%AA%20DIY";
export const WAZE_URL = "https://waze.com/ul?q=החרושת+2+רעננה&navigate=yes";
export const INSTAGRAM_URL = "https://www.instagram.com/alumni_fence/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61589011094917";
export const EMAIL_URL = "mailto:info@manzur.co.il";
export const WHATSAPP_NUMBER = "972504646536";

export const MODELS = [
  {
    id: "classic",
    name: "קלאסי",
    sub: "פסי אלומיניום אנכיים בצבעים ומרווחים שונים",
    desc: "פסי אלומיניום אנכיים בצבעים שונים ובמרווחים שונים — אווירה של הגדר הקלאסית.",
    privacy: "פרטיות בינונית",
    img: "/images/fence-classic.png",
    badge: null,
  },
  {
    id: "rural",
    name: "כפרי",
    sub: "פרופילי אלומיניום 1.2 מ״מ ברוחב שונה",
    desc: "פרופילי אלומיניום 1.2 מ״מ ברוחב שונה במגוון צבעים — מראה חם וכפרי שמשתלב בסביבה ירוקה.",
    privacy: "פרטיות גבוהה",
    img: "/images/fence-rural.webp",
    badge: null,
  },
  {
    id: "hitech-modern",
    name: "היי-טק מודרני",
    sub: "פסי אלומיניום משופעים לכיסוי מלא",
    desc: "פסי אלומיניום משופעים לכיסוי מלא — מראה מודרני, מתכתי ונועז.",
    privacy: "פרטיות מלאה",
    img: "/images/fence-hitech-slope.png",
    badge: "חדש",
  },
  {
    id: "laser",
    name: "חיתוכי לייזר",
    sub: "פאנלים בחיתוכי לייזר גיאומטריים",
    desc: "פאנלים עם חיתוכי לייזר גיאומטריים — אופציה לתאורה משולבת ומראה אדריכלי ייחודי.",
    privacy: "פרטיות משתנה",
    img: "/images/fence-laser.webp",
    badge: null,
  },
];

export const GALLERY_IMGS = [
  { url: "/images/gallery-1.png", label: "פרויקט ברעננה · גדר עירוני" },
  { url: "/images/gallery-2.png", label: "פרויקט בגדרה · גדר הייטק משופע" },
  { url: "/images/gallery-3.png", label: "פרויקט בגדרה · גדר קלאסי" },
  { url: "/images/gallery-4.png", label: "פרויקט במעלה אדומים · גדר קלאסי" },
  { url: "/images/gallery-5.png", label: "פרויקט ברעננה · שער הייטק משופע" },
  { url: "/images/gallery-6.png", label: "פרויקט ברעננה · מסתור אלומיניום" },
  { url: "/images/gallery-7.png", label: "פרויקט בגדרה · פרגולת אלומיניום" },
  { url: "/images/gallery-8.png", label: "פרויקט בגדרה · גדר הייטק" },
  { url: "/images/gallery-9.png", label: "פרגולה ופתח כניסה · עבודה מיוחדת" },
  { url: "/images/gallery-10.png", label: "פרויקט ברעננה · גדר הייטק" },
  { url: "/images/gallery-11.png", label: "פרויקט בגדרה · גדר ושער" },
  { url: "/images/gallery-12.png", label: "פרויקט ברעננה · גדר קלאסי" },
  { url: "/images/gallery-13.png", label: "פרויקט בגדרה · גדר עירוני" },
  { url: "/images/gallery-14.png", label: "פרגולה וכיסוי · עבודה מיוחדת" },
  { url: "/images/gallery-15.png", label: "פרויקט ברעננה · גדר ופרגולה" },
];

export const TESTIMONIALS = [
  { name: "אריק", city: "מעלה אדומים", model: "גדר ורד", text: "קיבלנו ערכה מסודרת, הכול היה חתוך למידה. בוואטסאפ עזרו לנו להבין את החיבור האחרון. ממליץ בחום." },
  { name: "משה", city: "גדרה", model: "גדר עינת", text: "חשבנו שיהיה מסובך, אבל הכול היה ברור מהרגע הראשון. הגדר יצאה מדהימה ואנחנו גאים שעשינו לבד." },
  { name: "נדב", city: "גדרה", model: "גדר הייטק", text: "שירות מצוין, מחיר הוגן, ותוצאה שכל השכנים שואלים עליה. תודה מנצור!" },
];

export const STEPS = [
  { n: "01", title: "בוחרים דגם", text: "בחרו קלאסי, עירוני, כפרי או הייטק לפי הסגנון שמתאים לבית שלכם." },
  { n: "02", title: "מזינים מידות", text: "כתבו אורך, גובה ומרווח רצוי. לא בטוחים? נעזור לכם לבדוק." },
  { n: "03", title: "מקבלים אישור", text: "נציג או מתקין מוסמך עובר איתכם על הפרטים ומוודא שהכול מדויק." },
  { n: "04", title: "אוספים ומרכיבים", text: "אנחנו מכינים ערכה חתוכה למידה, מוכנה להרכבה, עם אפשרות להדרכה." },
];

export const KIT_ITEMS = [
  { title: "פרופילים חתוכים למידה", desc: "כל החלקים מגיעים מוכנים לפי המידות שאושרו." },
  { title: "מחברים וברגים", desc: "מחברים מתאימים להרכבה נקייה וחזקה." },
  { title: "הדרכה במפעל", desc: "הדרכה אישית במפעל לפני איסוף הערכה." },
  { title: "תמיכה בוואטסאפ", desc: "נתקעתם? שלחו תמונה ונחזור עם הכוונה." },
  { title: "השכרת כלים", desc: "אין לכם כלי עבודה? בדקו איתנו אפשרות להשכרה." },
  { title: "מתקין לפי צורך", desc: "מעדיפים שלא להרכיב לבד? יש אפשרות למתקין." },
];
