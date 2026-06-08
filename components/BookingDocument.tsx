"use client";

import Image from "next/image";

export interface AddonItem {
  type: string;
  qty: number;
  pricePerNight: number;
}

export interface BookingData {
  docType: "booking" | "quote";
  customerName: string;
  phone: string;
  lineId: string;
  rate: string;
  season: string;
  roomType: string;
  roomPrice: number;
  rooms: number;
  checkIn: string;
  checkOut: string;
  nights: number;
  addons: AddonItem[];
  discount: number;
  includeBreakfast: boolean;
  note: string;
  staffName: string;
}

interface Props {
  data: BookingData;
}

function fmt(n: number) {
  return n.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtDate(d: string) {
  if (!d) return "-";
  const [y, m, dd] = d.split("-");
  const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${dd} ${months[parseInt(m) - 1]} ${parseInt(y) + 543}`;
}

function todayThai() {
  const now = new Date();
  const months = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear() + 543}`;
}

export default function BookingDocument({ data }: Props) {
  const roomTotal = data.roomPrice * data.rooms * data.nights;
  const addonsTotal = data.addons.reduce((s, a) => s + a.pricePerNight * a.qty * data.nights, 0);
  const subtotal = roomTotal + addonsTotal;
  const total = subtotal - (data.discount || 0);
  const deposit = Math.ceil(total * 0.5);

  const docTitle = data.docType === "booking" ? "ใบการจองห้องพัก" : "ใบเสนอราคา";

  return (
    <div id="booking-document" className="bg-white font-sarabun text-gray-900 p-8 max-w-[794px] mx-auto text-sm print:p-6 print:text-xs">

      {/* Header */}
      <div className="flex items-start justify-between mb-6 border-b-2 border-burgundy pb-4">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <Image src="/images/Logo.png" alt="Berich Hotel" fill className="object-contain" />
          </div>
          <div>
            <p className="font-bold text-lg text-burgundy">โรงแรมบีริช</p>
            <p className="text-xs text-gray-500">BERICH HOTEL</p>
            <p className="text-xs text-gray-500 mt-1">เลขที่ 2/4 ถนนมหาดไทยบำรุง</p>
            <p className="text-xs text-gray-500">ต.หนองหลวง อ.เมืองตาก จ.ตาก 63000</p>
            <p className="text-xs text-gray-500">โทร: 082-444-6242</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl text-burgundy">{docTitle}</p>
          <p className="text-xs text-gray-500 mt-1">วันที่: {todayThai()}</p>
          <div className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded ${data.docType === "booking" ? "bg-burgundy text-white" : "bg-amber-100 text-amber-800"}`}>
            {data.docType === "booking" ? "ใบจอง" : "ใบเสนอราคา"}
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-5 bg-gray-50 p-4 rounded">
        <p className="font-semibold mb-2 text-burgundy">ข้อมูลผู้เข้าพัก</p>
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div><span className="text-gray-500">เรียน: </span><span className="font-semibold">{data.customerName || "-"}</span></div>
          <div><span className="text-gray-500">โทร: </span><span>{data.phone || "-"}</span></div>
          <div><span className="text-gray-500">LINE: </span><span>{data.lineId || "-"}</span></div>
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse mb-4 text-xs">
        <thead>
          <tr className="bg-burgundy text-white">
            <th className="border border-burgundy/30 px-3 py-2 text-left">ประเภทห้อง</th>
            <th className="border border-burgundy/30 px-3 py-2 text-center">เช็คอิน</th>
            <th className="border border-burgundy/30 px-3 py-2 text-center">เช็คเอาท์</th>
            <th className="border border-burgundy/30 px-3 py-2 text-center">จำนวนห้อง</th>
            <th className="border border-burgundy/30 px-3 py-2 text-center">จำนวนคืน</th>
            <th className="border border-burgundy/30 px-3 py-2 text-right">ราคา/คืน</th>
            <th className="border border-burgundy/30 px-3 py-2 text-right">รวม</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="border border-gray-200 px-3 py-2">
              <p className="font-semibold">{data.roomType || "-"}</p>
              <p className="text-gray-400">{data.rate} · {data.season} Season</p>
              {data.includeBreakfast && <p className="text-emerald-600">✓ รวมอาหารเช้า</p>}
            </td>
            <td className="border border-gray-200 px-3 py-2 text-center">{fmtDate(data.checkIn)}</td>
            <td className="border border-gray-200 px-3 py-2 text-center">{fmtDate(data.checkOut)}</td>
            <td className="border border-gray-200 px-3 py-2 text-center">{data.rooms}</td>
            <td className="border border-gray-200 px-3 py-2 text-center">{data.nights}</td>
            <td className="border border-gray-200 px-3 py-2 text-right">{fmt(data.roomPrice)}</td>
            <td className="border border-gray-200 px-3 py-2 text-right font-semibold">{fmt(roomTotal)}</td>
          </tr>

          {/* Addons */}
          {data.addons.map((a, i) => (
            <tr key={i} className="bg-gray-50">
              <td className="border border-gray-200 px-3 py-2 pl-6 text-gray-600">+ {a.type}</td>
              <td className="border border-gray-200 px-3 py-2" colSpan={3}></td>
              <td className="border border-gray-200 px-3 py-2 text-center">{data.nights}</td>
              <td className="border border-gray-200 px-3 py-2 text-right">{fmt(a.pricePerNight)} × {a.qty}</td>
              <td className="border border-gray-200 px-3 py-2 text-right">{fmt(a.pricePerNight * a.qty * data.nights)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="flex justify-end mb-6">
        <div className="w-64 text-xs space-y-1">
          <div className="flex justify-between py-1 border-b border-gray-100">
            <span className="text-gray-500">ยอดรวม</span>
            <span>{fmt(subtotal)} บาท</span>
          </div>
          {data.discount > 0 && (
            <div className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-500">ส่วนลด</span>
              <span className="text-red-500">- {fmt(data.discount)} บาท</span>
            </div>
          )}
          <div className="flex justify-between py-2 font-bold text-base border-b-2 border-burgundy">
            <span>ยอดรวมสุทธิ</span>
            <span className="text-burgundy">{fmt(total)} บาท</span>
          </div>
          <div className="flex justify-between py-1 text-amber-700 font-semibold">
            <span>มัดจำ 50%</span>
            <span>{fmt(deposit)} บาท</span>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="border border-gray-200 rounded p-4 mb-5 text-xs">
        <p className="font-semibold text-burgundy mb-2">ช่องทางการชำระเงิน</p>
        <div className="flex items-start gap-6">
          <div>
            <p>ธนาคาร: <span className="font-semibold">กสิกรไทย (KBank)</span></p>
            <p>ชื่อบัญชี: <span className="font-semibold">บริษัท พิมลรัตน์ โฮเทล แอนด์ รีสอร์ท จำกัด</span></p>
            <p>เลขบัญชี: <span className="font-semibold">031-1-45688-1</span></p>
            <p className="mt-2 text-gray-500">หลังโอนกรุณาส่งสลิปมาที่ LINE: @berichhotel</p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="border border-gray-100 bg-gray-50 rounded p-4 mb-6 text-xs text-gray-600">
        <p className="font-semibold text-gray-800 mb-1">เงื่อนไขการจอง</p>
        <ol className="list-decimal list-inside space-y-0.5">
          <li>หลังโอนชำระส่งสลิปยืนยันด้วยนะครับ</li>
          <li>มัดจำ 50% เพื่อยืนยันการจอง</li>
          <li>เลื่อนได้ 1 ครั้ง กรุณาแจ้งล่วงหน้าอย่างน้อย 3 วัน</li>
          <li>ไม่คืนเงินทุกกรณี</li>
          <li>Check-in 14:00 น. / Check-out 12:00 น.</li>
        </ol>
        <p className="mt-2 font-semibold text-burgundy text-center">*** การจองสมบูรณ์เมื่อส่งสลิปยืนยันแล้วเท่านั้น ***</p>
      </div>

      {data.note && (
        <div className="mb-5 text-xs">
          <p className="font-semibold text-gray-700 mb-1">หมายเหตุ</p>
          <p className="text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-100">{data.note}</p>
        </div>
      )}

      {/* Signatures */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 text-xs">
        <div className="text-center">
          <div className="w-40 border-b border-gray-400 mb-1 pb-6"></div>
          <p>ผู้รับการจอง</p>
          <p className="text-gray-500 mt-1">{data.staffName || "____________________"}</p>
        </div>
        <div className="text-center">
          <div className="w-40 border-b border-gray-400 mb-1 pb-6"></div>
          <p>ลูกค้า / ผู้รับบริการ</p>
          <p className="text-gray-500 mt-1">{data.customerName || "____________________"}</p>
        </div>
      </div>

    </div>
  );
}
