export interface RoomSpec {
  label: string;
  value: string;
}

export interface RoomInclude {
  icon: string; // phosphor icon name, used as `ph-${icon}`
  label: string;
}

export interface PriceTier {
  duration: string; // "1 jam", "3 jam", "6 jam", "8 jam"
  hours: number;
  price: number; // raw IDR number, no formatting
}

export interface TieredAddon {
  name: string;
  type: "tiered"; // price depends on the selected room duration
  pricing: PriceTier[];
}

export interface FlatAddon {
  name: string;
  type: "flat"; // fixed price regardless of duration
  price: number;
  unit: string; // e.g. "per booking", "per sesi"
}

export type RoomAddon = TieredAddon | FlatAddon;

export interface RoomFAQ {
  q: string;
  a: string;
}

export interface RoomPortfolioItem {
  image: string;
  title: string;
}

export interface Room {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  useCase: string;
  heroImage: string;
  gallery: string[];
  specs: RoomSpec[];
  includes: RoomInclude[];
  floorplanImage: string;
  pricing: PriceTier[];
  overtimeNote: string;
  addons: RoomAddon[];
  nextAvailable: string;
  faqs: RoomFAQ[];
  portfolio: RoomPortfolioItem[];
}

// Shared by both rooms — same creative-service catalog, same rates.
const colorGradingFoto: TieredAddon = {
  name: "Color grading foto",
  type: "tiered",
  pricing: [
    { duration: "1 jam", hours: 1, price: 1000000 },
    { duration: "3 jam", hours: 3, price: 1750000 },
    { duration: "6 jam", hours: 6, price: 2500000 },
    { duration: "8 jam", hours: 8, price: 3500000 },
  ],
};

const colorGradingVideo: TieredAddon = {
  name: "Color grading video",
  type: "tiered",
  pricing: [
    { duration: "1 jam", hours: 1, price: 1000000 },
    { duration: "3 jam", hours: 3, price: 1750000 },
    { duration: "6 jam", hours: 6, price: 2500000 },
    { duration: "8 jam", hours: 8, price: 3500000 },
  ],
};

const makeUpArtist: FlatAddon = {
  name: "Make-up artist",
  type: "flat",
  price: 500000,
  unit: "per booking",
};

const fashionStylist: FlatAddon = {
  name: "Fashion stylist",
  type: "flat",
  price: 750000,
  unit: "per booking",
};

export const rooms: Room[] = [
  {
    slug: "studio-01",
    name: "Studio 01 — White Cyclorama",
    shortName: "Studio 01",
    tagline: "Kontrol cahaya penuh untuk editorial dan katalog komersial",
    description:
      "Dinding infinity putih tanpa sudut membuat subjek bisa difoto dari hampir semua sisi tanpa bayangan latar yang mengganggu. Ruang ini dirancang untuk produksi yang butuh latar bersih dan cahaya yang sepenuhnya bisa dikendalikan, siang atau malam.",
    useCase:
      "Cocok untuk katalog e-commerce, campaign fashion, video produk, dan editorial yang butuh latar netral agar warna produk tetap akurat.",
    heroImage: "/assets/image/ROOM/RMR-ONE.jpg",
    gallery: [
      "/assets/image/ROOM/RMR-TWO.jpg",
      "/assets/image/ROOM/RMR-TRE.jpg",
      "/assets/image/ROOM/RMR-FOUR.jpg",
      "/assets/image/ROOM/RMR-FIVE.jpg",
      "/assets/image/ROOM/RMR-SIX.jpg",
    ],
    specs: [
      { label: "Ukuran ruang", value: "8 × 6 m" },
      { label: "Tinggi plafon", value: "4.2 m" },
      { label: "Daya listrik", value: "5.500 VA, isolasi tersendiri" },
      { label: "Kapasitas kru", value: "15 orang" },
      { label: "Lantai", value: "Vinyl abu netral" },
      { label: "Akses", value: "Lantai dasar, tanpa tangga" },
    ],
    includes: [
      {
        icon: "lightbulb-filament",
        label: "3× strobe 600W + trigger nirkabel",
      },
      { icon: "users-three", label: "Asisten on-set standby" },
      { icon: "armchair", label: "Ruang rias privat, high-CRI" },
      { icon: "wifi", label: "Wi-Fi kecepatan tinggi" },
    ],
    // TODO: belum ada file asli — ganti setelah floorplan tersedia
    floorplanImage: "/assets/image/ROOM/FLG-RMR-ONE.jpg",
    pricing: [
      { duration: "1 jam", hours: 1, price: 400000 },
      { duration: "3 jam", hours: 3, price: 850000 },
      { duration: "6 jam", hours: 6, price: 1150000 },
      { duration: "8 jam", hours: 8, price: 1700000 },
    ],
    overtimeNote: "Overtime dihitung per jam mengikuti tarif 1 jam berlaku.",
    addons: [colorGradingFoto, colorGradingVideo, makeUpArtist, fashionStylist],
    nextAvailable: "Selasa, 8 Sep 2026",
    faqs: [
      {
        q: "Apakah warna latar bisa diganti selain putih?",
        a: "Cyclorama utama berwarna putih, tapi kami sediakan background portable warna lain sebagai opsi tambahan — sampaikan saat booking.",
      },
      {
        q: "Berapa lama waktu setup sebelum sesi dimulai?",
        a: "Lighting dasar sudah menyala saat Anda tiba. Setup tambahan (misal ganti modifier) masuk dalam durasi sewa.",
      },
      {
        q: "Bolehkah membawa properti/product besar?",
        a: "Boleh, ruang punya akses lantai dasar tanpa tangga sehingga memudahkan bongkar-muat properti besar.",
      },
    ],
    // TODO: belum ada file asli — ganti setelah foto portofolio tersedia
    portfolio: [
      {
        image: "/assets/image/EXP-ONE.jpg",
        title: "Koleksi Autumn/Winter 2026",
      },
      { image: "/assets/image/EXP-TWO.jpg", title: "Lumière Hydrating Series" },
      {
        image: "/assets/image/EXP-TRE.jpg",
        title: "Katalog Produk — Ruma Living",
      },
    ],
  },
  {
    slug: "studio-02",
    name: "Studio 02 — Daylight & Raw Mood",
    shortName: "Studio 02",
    tagline: "Cahaya alami lembut sepanjang hari dengan nuansa tekstur mentah",
    description:
      "Jendela utara berukuran besar menghadirkan cahaya alami yang konsisten tanpa sinar matahari langsung, dipadukan dengan dinding semen bertekstur dan lantai kayu hangat — cocok untuk hasil yang terasa autentik dan tidak terlalu 'studio'.",
    useCase:
      "Cocok untuk editorial personal, potret natural, konten lifestyle, dan produksi yang ingin nuansa hangat serta tekstur mentah, bukan latar bersih.",
    heroImage: "/assets/image/ROOM/RMR-SEVEN.jpg",
    gallery: [
      "/assets/image/ROOM/RMR-EIGHT.jpg",
      "/assets/image/ROOM/RMR-NINE.jpg",
      "/assets/image/ROOM/RMR-TEN.jpg",
      "/assets/image/ROOM/RMR-ELEVEN.jpg",
      "/assets/image/ROOM/RMR-TWELVE.jpg",
    ],
    specs: [
      { label: "Ukuran ruang", value: "6 × 5 m" },
      { label: "Tinggi plafon", value: "3.8 m" },
      { label: "Daya listrik", value: "3.500 VA" },
      { label: "Kapasitas kru", value: "8 orang" },
      { label: "Lantai", value: "Kayu solid" },
      { label: "Akses", value: "Lantai dasar, tanpa tangga" },
    ],
    includes: [
      { icon: "sun", label: "Jendela utara, cahaya alami sepanjang hari" },
      {
        icon: "lightbulb-filament",
        label: "2× strobe pelengkap untuk fill light",
      },
      { icon: "users-three", label: "Asisten on-set standby" },
      { icon: "wifi", label: "Wi-Fi kecepatan tinggi" },
    ],
    // TODO: belum ada file asli — ganti setelah floorplan tersedia
    floorplanImage: "/assets/image/ROOM/FLG-RMR-SEVEN.jpg",
    pricing: [
      { duration: "1 jam", hours: 1, price: 350000 },
      { duration: "3 jam", hours: 3, price: 750000 },
      { duration: "6 jam", hours: 6, price: 1000000 },
      { duration: "8 jam", hours: 8, price: 1500000 },
    ],
    overtimeNote: "Overtime dihitung per jam mengikuti tarif 1 jam berlaku.",
    // Studio 02 memang cuma 3 addon (nggak ada video grading) — sesuai data kamu saat ini
    addons: [colorGradingFoto, makeUpArtist, fashionStylist],
    nextAvailable: "Rabu, 9 Sep 2026",
    faqs: [
      {
        q: "Apakah cahaya alaminya konsisten sepanjang hari?",
        a: "Jendela menghadap utara sehingga tidak terkena sinar matahari langsung, hasilnya cahaya lembut dan relatif konsisten dari pagi sampai sore.",
      },
      {
        q: "Bagaimana kalau butuh cahaya buatan tambahan di malam hari?",
        a: "Dua strobe pelengkap sudah tersedia sebagai fill light untuk sesi setelah matahari terbenam.",
      },
      {
        q: "Apakah dinding tekstur bisa ditutup jadi polos?",
        a: "Tersedia panel putih portable sebagai opsi jika Anda butuh latar lebih netral di sebagian frame.",
      },
    ],
    // TODO: belum ada file asli — ganti setelah foto portofolio tersedia
    portfolio: [
      { image: "/assets/image/EXP-FOUR.jpg", title: "The Craftsman Editorial" },
      {
        image: "/assets/image/EXP-FIVE.jpg",
        title: "Weekend Ritual — Personal Project",
      },
      {
        image: "/assets/image/EXP-SIX.jpg",
        title: "Natural Light Portrait Series",
      },
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}

export function getOtherRooms(slug: string): Room[] {
  return rooms.filter((r) => r.slug !== slug);
}
