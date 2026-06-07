"use client";

import ScrollReveal from "@/components/ScrollReveal";

const GOOGLE_REVIEW_URL = "https://www.google.com/maps/place/Berich+Hotel/@16.8835391,99.1199705,1806m/data=!4m8!3m7!1s0x30ddd9e80cc7ea51:0x3b0a358403f695ad!8m2!3d16.883534!4d99.1225454!9m1!1b1";

const reviews = [
  {
    name: "Natthaseth Kitkunee",
    badge: "Local Guide",
    rating: 5,
    text: "ที่พักโคตรดี ราคาถูกมาก สำหรับในราคานี้ ห้องกว้างใหญ่ เตียงใหญ่นอนสบาย ห้องน้ำสะอาด ไม่มีกลิ่น พนักงานบริการดี ให้คำแนะนำดี พูดจาน่ารัก อาหารเช้าอร่อย แนะนำเลย 👍👍",
    lang: "th",
  },
  {
    name: "ภูวนัย แสวงบุญ",
    badge: "",
    rating: 5,
    text: "ห้องพักกว้าง เตียงใหญ่นอนสบาย ห้องน้ำสะอาด กว้าง อยู่ในตัวเมืองตาก มีอาหารเช้าห้องอาหารตกแต่งสวยงาม แนะนำครับ มาพักอีกแน่นอน",
    lang: "th",
  },
  {
    name: "Jessica",
    badge: "",
    rating: 5,
    text: "I was really impressed with the service of the staffs and the vibes of the hotel. Both single and double bed rooms are pretty big, comfortable and very clean. The location is quite central so it is very easy to find from the main road.",
    lang: "en",
  },
  {
    name: "ภารดี รุ่งรังษี",
    badge: "",
    rating: 5,
    text: "พักตากครั้งแรก มาเข้าพักจริง คือดีม๊ากกกกก สะอาดมากกก ห้องกว้างมากก เตียงอย่างกว้าง พัก 2 คน แต่เตียงนอนได้ 4 คนสบายๆ เดินทางรอบหน้า ขอเลือกพักที่นี้แน่นอน 10000/10 และพนักงานบริการดูแลดีมาก",
    lang: "th",
  },
  {
    name: "MoowI KL.",
    badge: "",
    rating: 5,
    text: "ประทับใจการให้บริการของน้องๆพนักงานมาก น้ำเสียงน่ารัก ให้บริการด้วยท่าทางนอบน้อม จริงใจ ยิ้มสวย ห้องพักกว้างมากทั้งเตียงนอนก็กว้าง นุ่ม สะอาด ถ้าต้องไปแวะพักที่ตากอีก จะเลือกโรงแรมนี้ซ้ำแน่นอน",
    lang: "th",
  },
  {
    name: "Apiwich Vijitpokin",
    badge: "Local Guide",
    rating: 5,
    text: "เดินทางจากเชียงใหม่กลับกรุงเทพ แวะนอนที่ตากก่อน เลยมานอนที่ Berich hotel เลือกเป็นห้อง 3 เตียง ห้องกว้างนอนสบาย โรงแรมอยู่ใจกลางเมือง มีที่จอดรถ อาหารเช้าเป็นคูปองให้เลือก มีข้าวต้ม ข้าวกระเพราไก่ ไข่ดาวไส้กรอก เหมาะสำหรับนอนพักกลางทางครับ",
    lang: "th",
  },
  {
    name: "ดั้นด้น ไป",
    badge: "Local Guide",
    rating: 5,
    text: "ห้องพักและห้องน้ำกว้างมากกก น้ำไหลแรง wifi ดี ใกล้สวนสาธารณะ อาหารเช้าดีมีบริการ พนักงานพูดจาบริการดีมาก",
    lang: "th",
  },
  {
    name: "B Mass",
    badge: "Local Guide",
    rating: 5,
    text: "1. นอนสบายมาก เตียงกว้างมาก นุ่ม\n2. ในห้องมีพื้นที่สำหรับทำงาน\n3. ห้องน้ำสะอาด\n4. เดินไปถนนคนเดินริมปิงได้ ฟีลต่างประเทศ",
    lang: "th",
  },
  {
    name: "Hnin Yee Htwe",
    badge: "Local Guide",
    rating: 5,
    text: "The room is so clean & spacious. It's very pleasant to stay here. The staffs are very friendly & easy to communicate.",
    lang: "en",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  const colors = ["bg-burgundy", "bg-amber-500", "bg-emerald-600", "bg-blue-600", "bg-purple-600"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white font-montserrat font-bold text-sm shrink-0`}>
      {initial}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-sarabun text-burgundy text-xs tracking-[0.4em] uppercase mb-3">Guest Reviews</p>
            <h2 className="font-sarabun text-4xl md:text-5xl text-gray-900 mb-4">เสียงจากผู้เข้าพักจริง</h2>
            <div className="w-16 h-px bg-gold mx-auto mb-6" />

            {/* Google Score */}
            <div className="inline-flex items-center gap-4 bg-cream border border-gray-200 px-8 py-4 shadow-luxury">
              <div className="text-center">
                <p className="font-montserrat text-5xl font-bold text-gray-900 leading-none">4.4</p>
                <StarRating count={4} />
                <p className="font-sarabun text-xs text-gray-400 mt-1">854 รีวิว</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-montserrat text-sm font-semibold text-gray-700">Google Reviews</span>
                </div>
                <p className="font-sarabun text-xs text-gray-500">รีวิวจากผู้เข้าพักจริงบน Google</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 100}>
              <div className="bg-white border border-gray-100 shadow-luxury hover:shadow-luxury-hover hover:border-gold/30 transition-all duration-300 p-6 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <Avatar name={r.name} />
                  <div className="flex-1 min-w-0">
                    <p className="font-sarabun font-semibold text-gray-900 text-sm truncate">{r.name}</p>
                    {r.badge && (
                      <span className="font-sarabun text-[10px] text-burgundy bg-burgundy/5 px-2 py-0.5 rounded-full">{r.badge}</span>
                    )}
                  </div>
                  {/* Google Icon */}
                  <svg className="w-5 h-5 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars */}
                <StarRating count={r.rating} />

                {/* Text */}
                <p className="font-sarabun text-gray-600 text-sm leading-relaxed mt-3 flex-1 whitespace-pre-line">
                  "{r.text}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-burgundy hover:text-burgundy font-sarabun text-sm px-8 py-3 transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              ดูรีวิวทั้งหมด 854 รีวิวบน Google
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
