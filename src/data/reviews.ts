/**
 * Customer reviews shown on the landing page.
 *
 * HOW TO ADD A REVIEW: append one object to the array below. Nothing else needs to change;
 * the Reviews section renders every entry in order (newest first if you put it at the top).
 *
 * `placeholder: true` marks demonstration content written before launch. Set it to `false`
 * (or remove it) for a real customer quote, and the "sample" label disappears.
 */
export interface Review {
  id: string;
  name: { en: string; ar: string };
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  city: { en: string; ar: string };
  quote: { en: string; ar: string };
  /** 1–5 */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Which part of the product the review is mainly about; shown as a small tag. */
  topic: "bbs" | "boq" | "mep" | "architecture" | "workflow";
  placeholder?: boolean;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: { en: "Eng. Khalid Al-Harbi", ar: "م. خالد الحربي" },
    role: { en: "Estimation Manager", ar: "مدير التقديرات" },
    company: { en: "A general contractor, Riyadh", ar: "مقاول عام، الرياض" },
    city: { en: "Riyadh", ar: "الرياض" },
    quote: {
      en: "The bar bending schedule came out in the exact sheet layout our consultant signs off. What convinced the team was the Basis column: every weight can be traced back to the drawing.",
      ar: "خرج جدول تفريد الحديد بنفس تنسيق الورقة التي يعتمدها استشارينا. ما أقنع الفريق هو عمود الأساس: كل وزن يمكن تتبعه إلى الرسم.",
    },
    rating: 5,
    topic: "bbs",
    placeholder: true,
  },
  {
    id: "r2",
    name: { en: "Sara Al-Qahtani", ar: "سارة القحطاني" },
    role: { en: "Senior Quantity Surveyor", ar: "مساحة كميات أولى" },
    company: { en: "An engineering consultancy, Jeddah", ar: "استشاري هندسي، جدة" },
    city: { en: "Jeddah", ar: "جدة" },
    quote: {
      en: "It asks before it assumes. When a beam depth was missing on the section sheet it stopped and asked us, instead of guessing. That is how we work, so the output is something we can actually check.",
      ar: "يسأل قبل أن يفترض. عندما كان عمق الكمرة ناقصًا في لوحة القطاعات توقف وسألنا بدل التخمين. هكذا نعمل نحن، لذلك المخرجات شيء يمكننا تدقيقه فعلًا.",
    },
    rating: 5,
    topic: "workflow",
    placeholder: true,
  },
  {
    id: "r3",
    name: { en: "Eng. Faisal Al-Dossari", ar: "م. فيصل الدوسري" },
    role: { en: "Project Manager", ar: "مدير مشروع" },
    company: { en: "A villa developer, Dammam", ar: "مطور فلل، الدمام" },
    city: { en: "Dammam", ar: "الدمام" },
    quote: {
      en: "We used the cutting schedule to order steel for a compound of villas. The optimised patterns and the offcut list changed how we buy 12-metre bars.",
      ar: "استخدمنا جدول القص لطلب الحديد لمجمع فلل. أنماط القص المحسّنة وقائمة البواقي غيّرت طريقة شرائنا لقضبان 12 مترًا.",
    },
    rating: 4,
    topic: "bbs",
    placeholder: true,
  },
  {
    id: "r4",
    name: { en: "Mohammed Al-Shehri", ar: "محمد الشهري" },
    role: { en: "MEP Engineer", ar: "مهندس ميكانيكا وكهرباء" },
    company: { en: "An MEP subcontractor, Riyadh", ar: "مقاول باطن ميكانيكا وكهرباء، الرياض" },
    city: { en: "Riyadh", ar: "الرياض" },
    quote: {
      en: "Pipes by system and size, fittings counted from the network, wires per circuit. The warnings sheet told us exactly which legend symbols it could not map, so nothing was silently dropped.",
      ar: "المواسير حسب النظام والمقاس، والقطع محسوبة من الشبكة، والأسلاك لكل دائرة. ورقة التنبيهات أخبرتنا بالضبط أي رموز في المفتاح لم يستطع ربطها، فلم يُسقط شيء بصمت.",
    },
    rating: 5,
    topic: "mep",
    placeholder: true,
  },
  {
    id: "r5",
    name: { en: "Noura Al-Otaibi", ar: "نورة العتيبي" },
    role: { en: "Cost Control Lead", ar: "قائدة ضبط التكاليف" },
    company: { en: "A real-estate developer, Riyadh", ar: "مطور عقاري، الرياض" },
    city: { en: "Riyadh", ar: "الرياض" },
    quote: {
      en: "The Specified BOQ format is the one our client already reads. Rates stay empty for our commercial team, which is exactly the separation we wanted.",
      ar: "تنسيق جدول الكميات المحدد هو نفسه الذي يقرؤه عميلنا أصلًا. تبقى الأسعار فارغة لفريقنا التجاري، وهذا بالضبط الفصل الذي أردناه.",
    },
    rating: 5,
    topic: "boq",
    placeholder: true,
  },
  {
    id: "r6",
    name: { en: "Eng. Abdullah Al-Ghamdi", ar: "م. عبدالله الغامدي" },
    role: { en: "Site Engineer", ar: "مهندس موقع" },
    company: { en: "A contractor, Makkah", ar: "مقاول، مكة المكرمة" },
    city: { en: "Makkah", ar: "مكة المكرمة" },
    quote: {
      en: "After a revision we just said 'regenerate', got v2, and the old file stayed available for the team that had it. No more three versions of the same spreadsheet on WhatsApp.",
      ar: "بعد التعديل قلنا فقط «أعد التوليد»، فحصلنا على الإصدار الثاني وبقي الملف القديم متاحًا للفريق الذي يملكه. لا مزيد من ثلاث نسخ لنفس الجدول على واتساب.",
    },
    rating: 4,
    topic: "workflow",
    placeholder: true,
  },
];
