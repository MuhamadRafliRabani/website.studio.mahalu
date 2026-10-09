export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Freelance";
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

export interface CultureValue {
  icon: string;
  title: string;
  desc: string;
}

export const benefits: Benefit[] = [
  {
    icon: "clock-afternoon",
    title: "Jadwal Fleksibel",
    desc: "Shift disusun mengikuti jadwal booking studio, bukan jam kantor kaku 9-to-5.",
  },
  {
    icon: "sparkle",
    title: "Lingkungan Kreatif",
    desc: "Terlibat langsung di produksi klien nyata — fashion, produk, sampai musik.",
  },
  {
    icon: "graduation-cap",
    title: "Belajar dari Praktik",
    desc: "Kesempatan magang jadi asisten on-set untuk fotografer dan videografer berpengalaman.",
  },
  {
    icon: "coffee",
    title: "Fasilitas Studio",
    desc: "Akses ruang istirahat, wifi kencang, dan kopi selama jam kerja.",
  },
];

export const cultureValues: CultureValue[] = [
  {
    icon: "handshake",
    title: "Kolaboratif",
    desc: "Setiap sesi produksi adalah kerja tim — dari asisten on-set sampai kru klien.",
  },
  {
    icon: "target",
    title: "Detail-Oriented",
    desc: "Konsistensi kecil (lighting, jadwal, komunikasi) yang bikin klien percaya dan balik lagi.",
  },
  {
    icon: "plant",
    title: "Terus Berkembang",
    desc: "Studio ini masih tumbuh — kamu akan ikut membentuk cara kerja kami ke depan, bukan sekadar mengikuti SOP lama.",
  },
];

export const jobs: JobOpening[] = [
  {
    slug: "studio-assistant",
    title: "Studio Assistant (On-Set)",
    department: "Operasional",
    type: "Full-time",
    location: "Cilodong, Depok — on-site",
    summary:
      "Membantu persiapan dan berjalannya sesi produksi di Studio 01 & 02, mulai dari setup lighting sampai memastikan sesi klien berjalan lancar.",
    responsibilities: [
      "Menyiapkan lighting dan ruangan sebelum sesi klien dimulai",
      "Membantu mengatur posisi c-stand, modifier, dan background selama sesi",
      "Menjadi kontak lapangan klien selama produksi berlangsung",
      "Merapikan dan mengecek kondisi peralatan setelah sesi selesai",
    ],
    requirements: [
      "Familiar dengan peralatan studio dasar (strobe, trigger, modifier)",
      "Komunikatif dan sigap merespons kebutuhan klien di lokasi",
      "Bersedia bekerja dengan shift menyesuaikan jadwal booking, termasuk akhir pekan",
    ],
  },
  {
    slug: "studio-coordinator",
    title: "Studio Coordinator / Admin",
    department: "Operasional",
    type: "Full-time",
    location: "Cilodong, Depok — on-site",
    summary:
      "Mengelola jadwal booking, komunikasi klien via WhatsApp, dan memastikan operasional harian studio berjalan rapi.",
    responsibilities: [
      "Merespons dan mengonfirmasi booking masuk via WhatsApp",
      "Mengelola kalender jadwal Studio 01 & 02 agar tidak bentrok",
      "Koordinasi dengan tim add-on kreatif (MUA, stylist) sesuai kebutuhan booking",
      "Mencatat pembayaran DP dan pelunasan tiap sesi",
    ],
    requirements: [
      "Terorganisir dan teliti dalam mengelola banyak percakapan/jadwal sekaligus",
      "Pengalaman customer service atau admin operasional jadi nilai tambah",
      "Nyaman menggunakan tools digital (spreadsheet, WhatsApp Business)",
    ],
  },
  {
    slug: "freelance-mua",
    title: "Make-Up Artist (Freelance)",
    department: "Kreatif",
    type: "Freelance",
    location: "Cilodong, Depok — per booking",
    summary:
      "Bergabung ke daftar MUA rekanan kami yang ditawarkan sebagai add-on jasa kreatif kepada klien produksi.",
    responsibilities: [
      "Menyediakan jasa make-up sesuai brief konsep klien",
      "Datang tepat waktu sesuai jadwal sesi yang dikonfirmasi",
      "Membawa peralatan make-up sendiri yang higienis dan lengkap",
    ],
    requirements: [
      "Punya portofolio make-up untuk fotografi/video (bukan cuma sehari-hari)",
      "Fleksibel dengan jadwal panggilan mendadak (H-2 hingga H-3)",
      "Terbuka untuk kolaborasi rutin, bukan hanya sekali proyek",
    ],
  },
  {
    slug: "freelance-stylist",
    title: "Fashion Stylist (Freelance)",
    department: "Kreatif",
    type: "Freelance",
    location: "Cilodong, Depok — per booking",
    summary:
      "Bergabung ke daftar stylist rekanan kami untuk mendukung sesi fashion campaign dan editorial klien.",
    responsibilities: [
      "Membantu styling wardrobe sesuai moodboard klien",
      "Mengatur pergantian outfit antar-look secara efisien selama sesi",
      "Berkoordinasi dengan MUA dan fotografer untuk konsistensi visual",
    ],
    requirements: [
      "Pengalaman styling untuk campaign fashion atau editorial",
      "Mampu bekerja cepat tanpa mengorbankan detail",
      "Fleksibel dengan jadwal panggilan sesuai booking klien",
    ],
  },
];
