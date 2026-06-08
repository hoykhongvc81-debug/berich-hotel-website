"use client";

import { useState, useMemo, useRef } from "react";
import { differenceInDays } from "date-fns";
import { PRICE_TABLE, ROOM_TYPES, ADDON_TYPES, RateType, SeasonType, RoomKey } from "@/lib/priceTable";
import BookingDocument, { BookingData, AddonItem } from "@/components/BookingDocument";

const inputCls = "w-full border border-gray-300 px-3 py-2 text-sm font-sarabun focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy bg-white";
const labelCls = "block font-sarabun text-xs text-gray-600 mb-1 font-medium";
const selectCls = inputCls;

export default function BookingForm() {
  const docRef = useRef<HTMLDivElement>(null);

  const [docType, setDocType] = useState<"booking" | "quote">("booking");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [lineId, setLineId] = useState("");
  const [rate, setRate] = useState<RateType>("Direct");
  const [season, setSeason] = useState<SeasonType>("Low");
  const [roomType, setRoomType] = useState<RoomKey>("Deluxe King size");
  const [rooms, setRooms] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [addons, setAddons] = useState<AddonItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [includeBreakfast, setIncludeBreakfast] = useState(true);
  const [note, setNote] = useState("");
  const [staffName, setStaffName] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [saving, setSaving] = useState(false);

  // Auto-calc
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const n = differenceInDays(new Date(checkOut), new Date(checkIn));
    return n > 0 ? n : 0;
  }, [checkIn, checkOut]);

  const roomPrice = useMemo(() => PRICE_TABLE[rate][season][roomType], [rate, season, roomType]);

  const roomTotal = roomPrice * rooms * nights;
  const addonsTotal = addons.reduce((s, a) => s + a.pricePerNight * a.qty * nights, 0);
  const subtotal = roomTotal + addonsTotal;
  const total = subtotal - (discount || 0);
  const deposit = Math.ceil(total * 0.5);

  const bookingData: BookingData = {
    docType, customerName, phone, lineId,
    rate, season, roomType, roomPrice, rooms,
    checkIn, checkOut, nights,
    addons, discount, includeBreakfast, note, staffName,
  };

  // Addon handlers
  const addAddon = () => setAddons(prev => [...prev, { type: ADDON_TYPES[0], qty: 1, pricePerNight: PRICE_TABLE[rate][season][ADDON_TYPES[0]] }]);
  const removeAddon = (i: number) => setAddons(prev => prev.filter((_, idx) => idx !== i));
  const updateAddon = (i: number, field: keyof AddonItem, value: string | number) => {
    setAddons(prev => prev.map((a, idx) => {
      if (idx !== i) return a;
      if (field === "type") {
        const key = value as RoomKey;
        return { ...a, type: key, pricePerNight: PRICE_TABLE[rate][season][key] };
      }
      return { ...a, [field]: value };
    }));
  };

  // Print
  const handlePrint = () => {
    setShowPreview(true);
    setTimeout(() => window.print(), 300);
  };

  // Save as image
  const handleSaveImage = async () => {
    setSaving(true);
    setShowPreview(true);
    await new Promise(r => setTimeout(r, 300));
    try {
      const html2canvas = (await import("html2canvas")).default;
      const el = document.getElementById("booking-document");
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const link = document.createElement("a");
      link.download = `ใบจอง-${customerName || "ลูกค้า"}-${checkIn || "วันที่"}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } finally {
      setSaving(false);
    }
  };

  const handleClear = () => {
    if (!confirm("ล้างฟอร์มทั้งหมด?")) return;
    setDocType("booking"); setCustomerName(""); setPhone(""); setLineId("");
    setRate("Direct"); setSeason("Low"); setRoomType("Deluxe King size");
    setRooms(1); setCheckIn(""); setCheckOut(""); setAddons([]);
    setDiscount(0); setIncludeBreakfast(true); setNote(""); setStaffName("");
    setShowPreview(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Bar */}
      <div className="bg-burgundy text-white px-6 py-4 flex items-center justify-between no-print">
        <div className="flex items-center gap-3">
          <span className="font-montserrat font-bold text-lg tracking-widest">BERICH</span>
          <span className="font-sarabun text-white/60 text-sm">ระบบออกใบจอง</span>
        </div>
        <div className="flex gap-2">
          <button onClick={handleClear} className="font-sarabun text-xs border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors">
            ล้างฟอร์ม
          </button>
          <button onClick={() => setShowPreview(!showPreview)} className="font-sarabun text-xs bg-white/10 border border-white/30 px-4 py-2 hover:bg-white/20 transition-colors">
            {showPreview ? "ซ่อน Preview" : "แสดง Preview"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 no-print">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* ===== FORM ===== */}
          <div className="space-y-5">

            {/* Doc Type Toggle */}
            <div className="bg-white border border-gray-200 p-5 shadow-sm">
              <p className={labelCls}>ประเภทเอกสาร</p>
              <div className="flex gap-0">
                {(["booking", "quote"] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setDocType(t)}
                    className={`flex-1 py-3 text-sm font-sarabun font-semibold transition-colors border ${
                      docType === t
                        ? "bg-burgundy text-white border-burgundy"
                        : "bg-white text-gray-600 border-gray-300 hover:border-burgundy"
                    }`}
                  >
                    {t === "booking" ? "📋 ใบจองห้องพัก" : "💰 ใบเสนอราคา"}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer */}
            <div className="bg-white border border-gray-200 p-5 shadow-sm">
              <p className="font-sarabun font-semibold text-gray-800 mb-4 text-sm border-b pb-2">ข้อมูลผู้เข้าพัก</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className={labelCls}>ชื่อลูกค้า *</label>
                  <input className={inputCls} value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="ชื่อ-นามสกุล" />
                </div>
                <div>
                  <label className={labelCls}>เบอร์โทร *</label>
                  <input className={inputCls} value={phone} onChange={e => setPhone(e.target.value)} placeholder="08x-xxx-xxxx" />
                </div>
                <div>
                  <label className={labelCls}>LINE ID (ไม่บังคับ)</label>
                  <input className={inputCls} value={lineId} onChange={e => setLineId(e.target.value)} placeholder="@line_id" />
                </div>
              </div>
            </div>

            {/* Room & Rate */}
            <div className="bg-white border border-gray-200 p-5 shadow-sm">
              <p className="font-sarabun font-semibold text-gray-800 mb-4 text-sm border-b pb-2">ข้อมูลการจอง</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Rate</label>
                  <select className={selectCls} value={rate} onChange={e => setRate(e.target.value as RateType)}>
                    <option value="Direct">Direct</option>
                    <option value="Sale">Sale</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Season</label>
                  <select className={selectCls} value={season} onChange={e => setSeason(e.target.value as SeasonType)}>
                    <option value="Low">Low Season (ก.พ.–ต.ค.)</option>
                    <option value="High">High Season (พ.ย.–ม.ค.)</option>
                    <option value="Peak">Peak (วันหยุด/เทศกาล)</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>ประเภทห้อง</label>
                  <select className={selectCls} value={roomType} onChange={e => setRoomType(e.target.value as RoomKey)}>
                    {ROOM_TYPES.map(r => (
                      <option key={r} value={r}>{r} — {PRICE_TABLE[rate][season][r].toLocaleString()} บาท/คืน</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>ราคาต่อคืน (บาท)</label>
                  <input className={`${inputCls} bg-gray-50 text-burgundy font-bold`} value={roomPrice.toLocaleString()} readOnly />
                </div>
                <div>
                  <label className={labelCls}>จำนวนห้อง</label>
                  <input className={inputCls} type="number" min={1} max={20} value={rooms} onChange={e => setRooms(parseInt(e.target.value) || 1)} />
                </div>
                <div>
                  <label className={labelCls}>Check-in</label>
                  <input className={inputCls} type="date" value={checkIn} onChange={e => { setCheckIn(e.target.value); if (checkOut && e.target.value >= checkOut) setCheckOut(""); }} />
                </div>
                <div>
                  <label className={labelCls}>Check-out</label>
                  <input className={inputCls} type="date" value={checkOut} min={checkIn || undefined} onChange={e => setCheckOut(e.target.value)} />
                </div>
                <div>
                  <label className={labelCls}>จำนวนคืน</label>
                  <input className={`${inputCls} bg-gray-50 font-bold text-burgundy`} value={nights > 0 ? `${nights} คืน` : "-"} readOnly />
                </div>
                <div className="flex items-end pb-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" checked={includeBreakfast} onChange={e => setIncludeBreakfast(e.target.checked)} className="w-4 h-4 accent-burgundy" />
                    <span className="font-sarabun text-sm text-gray-700">รวมอาหารเช้า</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Addons */}
            <div className="bg-white border border-gray-200 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <p className="font-sarabun font-semibold text-gray-800 text-sm">รายการเพิ่มเติม</p>
                <button onClick={addAddon} className="font-sarabun text-xs text-burgundy border border-burgundy px-3 py-1.5 hover:bg-burgundy hover:text-white transition-colors">
                  + เพิ่มรายการ
                </button>
              </div>
              {addons.length === 0 && <p className="font-sarabun text-xs text-gray-400 text-center py-3">ยังไม่มีรายการเพิ่มเติม</p>}
              {addons.map((a, i) => (
                <div key={i} className="flex gap-2 mb-2 items-end">
                  <div className="flex-1">
                    <label className={labelCls}>รายการ</label>
                    <select className={selectCls} value={a.type} onChange={e => updateAddon(i, "type", e.target.value)}>
                      {ADDON_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="w-20">
                    <label className={labelCls}>จำนวน</label>
                    <input className={inputCls} type="number" min={1} value={a.qty} onChange={e => updateAddon(i, "qty", parseInt(e.target.value) || 1)} />
                  </div>
                  <div className="w-28">
                    <label className={labelCls}>ราคา/คืน</label>
                    <input className={`${inputCls} bg-gray-50`} value={a.pricePerNight.toLocaleString()} readOnly />
                  </div>
                  <button onClick={() => removeAddon(i)} className="mb-0.5 w-8 h-9 flex items-center justify-center text-red-400 hover:text-red-600 border border-gray-200 hover:border-red-300 transition-colors">
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Summary & Staff */}
            <div className="bg-white border border-gray-200 p-5 shadow-sm">
              <p className="font-sarabun font-semibold text-gray-800 mb-4 text-sm border-b pb-2">สรุปและข้อมูลเพิ่มเติม</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>ส่วนลด (บาท)</label>
                  <input className={inputCls} type="number" min={0} value={discount || ""} onChange={e => setDiscount(parseInt(e.target.value) || 0)} placeholder="0" />
                </div>
                <div>
                  <label className={labelCls}>ผู้รับการจอง</label>
                  <input className={inputCls} value={staffName} onChange={e => setStaffName(e.target.value)} placeholder="ชื่อพนักงาน" />
                </div>
                <div className="col-span-2">
                  <label className={labelCls}>หมายเหตุ (ไม่บังคับ)</label>
                  <textarea className={`${inputCls} resize-none`} rows={2} value={note} onChange={e => setNote(e.target.value)} placeholder="หมายเหตุเพิ่มเติม..." />
                </div>
              </div>

              {/* Totals */}
              <div className="bg-gray-50 border border-gray-100 p-4 space-y-2">
                <div className="flex justify-between font-sarabun text-sm text-gray-600">
                  <span>ค่าห้อง ({rooms} ห้อง × {nights} คืน)</span>
                  <span>{roomTotal.toLocaleString()} บาท</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between font-sarabun text-sm text-gray-600">
                    <span>รายการเพิ่มเติม</span>
                    <span>{addonsTotal.toLocaleString()} บาท</span>
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between font-sarabun text-sm text-red-500">
                    <span>ส่วนลด</span>
                    <span>- {discount.toLocaleString()} บาท</span>
                  </div>
                )}
                <div className="flex justify-between font-sarabun font-bold text-lg pt-2 border-t border-gray-200 text-burgundy">
                  <span>ยอดรวมสุทธิ</span>
                  <span>{total.toLocaleString()} บาท</span>
                </div>
                <div className="flex justify-between font-sarabun text-sm text-amber-700 font-semibold">
                  <span>มัดจำ 50%</span>
                  <span>{deposit.toLocaleString()} บาท</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 bg-burgundy text-white font-sarabun font-semibold py-3 text-sm hover:bg-burgundy/90 transition-colors flex items-center justify-center gap-2"
              >
                🖨️ พิมพ์ / PDF
              </button>
              <button
                onClick={handleSaveImage}
                disabled={saving}
                className="flex-1 bg-amber-600 text-white font-sarabun font-semibold py-3 text-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {saving ? "⏳ กำลังบันทึก..." : "🖼️ บันทึกเป็นรูป"}
              </button>
            </div>

          </div>

          {/* ===== PREVIEW ===== */}
          {showPreview && (
            <div className="border border-gray-200 shadow-sm bg-white overflow-auto max-h-[calc(100vh-120px)] sticky top-6">
              <div className="bg-gray-100 px-4 py-2 text-xs font-sarabun text-gray-500 border-b flex items-center justify-between">
                <span>Preview ใบเอกสาร</span>
                <button onClick={() => setShowPreview(false)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <div className="p-2 scale-[0.85] origin-top-left" style={{ width: "117%" }}>
                <BookingDocument data={bookingData} />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Print-only document */}
      <div className="print-only">
        <BookingDocument data={bookingData} />
      </div>
    </div>
  );
}
