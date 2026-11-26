# Berich Hotel website — notes for Claude

เว็บไซต์ทางการของ Berich Hotel (โรงแรมใจกลางเมืองตาก) → https://www.berichhotel.com

> ⚠️ repo นี้เป็น **public** ห้ามใส่ข้อมูลลับ (รหัสผ่าน, token, เลขบัญชีโฆษณา, ตัวเลขงบ/สัญญา) ลงในไฟล์ใดๆ

## Tech & deploy
- Next.js 14 (App Router) + Tailwind, หน้าเดียว (`app/page.tsx`) ประกอบจาก `components/*`
- ข้อความหลายภาษา: `data/locales/{th,en,zh}.json` ผ่าน `contexts/LanguageContext.tsx`
- `npm run build` = `next build && next-sitemap` (สร้าง sitemap + robots.txt)
- **Deploy อัตโนมัติบน Vercel เมื่อ push เข้า `main`** → ทำงานใน branch แยกเสมอ ให้เจ้าของดู Preview ก่อน แล้วค่อยรวมเข้า `main` เมื่อได้รับอนุญาต
- ระบบจองห้อง: `https://live.ipms247.com/booking/book-rooms-berichhotel` (ลิงก์ออกไปภายนอก)

## Tracking (ของโรงแรมเอง)
- GA4: `G-C2HQGGX33G` และแท็ก Google Ads: `GTM-WRF5RCF5` — โหลดใน `app/layout.tsx`
- `components/ConversionTracking.tsx` ส่ง GA4 event เมื่อคลิกลิงก์ติดต่อ (ส่งเฉพาะ GA4 ของโรงแรมด้วย `send_to`):
  - `click_call` (tel:), `click_line` (lin.ee / line.me), `click_facebook` (facebook.com / m.me), `click_email` (mailto:), `click_booking` (ipms247)
  - ปุ่ม "เช็คราคา & จอง" ใน `BookingWidget.tsx` เรียก `trackContact("click_booking", …)` เอง (ใช้ `window.open`)
- ลิงก์ติดต่อใหม่ต้องเป็น `<a href>` ธรรมดา จึงจะถูกนับอัตโนมัติ
- GA4 เชื่อมกับ Google Ads แล้ว; event `click_call` / `click_line` / `click_facebook` / `click_booking` จะตั้งเป็น Key events แล้วนำเข้าเป็น Conversion ใน Google Ads

## งานค้าง: วันที่ 6 ธ.ค. 2026 (สิ้นสุดสัญญาเอเจนซีเดิม)
- branch **`claude/replace-itopplus-contact`** (เตรียมไว้แล้ว ยังไม่ merge):
  - ลบแท็ก GTM ของเอเจนซีเดิม `GTM-K8VNMMV` ออกจาก `app/layout.tsx` (แท็กนี้ฉีดปุ่มลอย "Powered by Autodigi")
  - เพิ่ม `components/FloatingContact.tsx` = ปุ่มลอย โทร / LINE / Messenger ของโรงแรม (ข้อความ 3 ภาษา) และลบ `FloatingLine.tsx` / `FloatingCall.tsx` ที่ไม่ได้ใช้
- เมื่อเจ้าของแจ้งว่า "หมดสัญญาแล้ว": rebase/merge branch นี้กับ `main` ล่าสุด → build ผ่าน → รวมเข้า `main`
- ให้เจ้าของทดสอบลิงก์ Messenger `https://m.me/Berichhotel` บนมือถือ (เดาจากชื่อเพจ ยังไม่ได้ยืนยัน)
- **ห้ามลบ `GTM-K8VNMMV` ก่อนวันที่ 6 ธ.ค.** (ปุ่มติดต่อบนเว็บจะหายไปก่อนมีปุ่มใหม่)

## Google Ads (บัญชีใหม่ของโรงแรม — จัดการใน Google Ads ไม่ใช่ในโค้ด)
- แคมเปญ Search เดียว "Search-ที่พักตาก": Search network เท่านั้น, ประเทศไทย, ปิด AI Max / การปรับแต่งข้อความ / Final URL expansion, เสนอราคาแบบเพิ่มจำนวนคลิก (มีเพดาน CPC)
- คีย์เวิร์ดแบบวลี (ที่พัก/โรงแรม + ตาก/จังหวัดตาก/อำเภอเมือง/ในเมือง) + ชื่อโรงแรม ("berich hotel", "บีริช ตาก" ฯลฯ) และมีคำหลักเชิงลบสำหรับอำเภออื่น/โรงแรมคู่แข่ง/รีสอร์ท/รายเดือน
- ไซต์ลิงก์ใช้ anchor ในหน้าเดียว: `/#rooms`, `/#gallery`, `/#nearby`, `/#contact` — ถ้าเปลี่ยน id ของ section ต้องแจ้งให้แก้ไซต์ลิงก์ด้วย
- Google ห้ามใส่เบอร์โทรในข้อความโฆษณา (ใช้ Call asset แทน)
- แผนถัดไป: เมื่อมี Conversion สะสม 2–3 สัปดาห์ เปลี่ยนเป็น "เพิ่มจำนวน Conversion สูงสุด"; ตรวจรายงานคำค้นหา (Search terms) ทุก 2–3 วันในสัปดาห์แรกเพื่อเพิ่มคำหลักเชิงลบ

## แผน SEO (ยังไม่เริ่ม)
ปัญหา: เว็บไม่ติดอันดับผลค้นหาปกติของ "ที่พักตาก" (ไม่เจอใน 7 หน้าแรก) — พื้นฐานเทคนิคดีแล้ว (SSR, index:true, sitemap, robots, Hotel schema, มี meta ยืนยัน Search Console)
1. ปรับ `<title>` และ H1 (`components/Hero.tsx` ตอนนี้ H1 = "Berich Hotel") ให้มี "โรงแรมตาก / ที่พักตาก" อย่างเป็นธรรมชาติ
2. แยกหน้าใหม่: ห้องพักและราคา, หน้าแต่ละห้อง (`data/rooms.json`), หน้าแนะนำที่พัก/ที่เที่ยวเมืองตาก (`data/attractions.json`) + เพิ่มใน sitemap และลิงก์ภายใน
3. ความเร็วมือถือ: `public/video/hero.mp4` ขนาด ~6 MB (ผู้ใช้ ~92% มาจากมือถือ)
4. แก้ Schema ใน `app/layout.tsx` ให้ตรงจริง: `numberOfRooms` ตอนนี้ = "5" (น่าจะเป็นจำนวนแบบห้อง ต้องถามจำนวนห้องจริงจากเจ้าของ)
5. งานที่เจ้าของทำเอง: Google Search Console (ดูหน้าที่ index + ส่ง sitemap), Google Business Profile (รูป/รีวิว), ลิงก์จาก Facebook / TripAdvisor / Wongnai
