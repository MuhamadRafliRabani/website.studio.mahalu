export interface Category {
  key: string;
  label: string;
  icon: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // "12 Sep 2026"
  readTime: string; // "5 menit baca"
  cover: string;
  alt: string;
  featured?: boolean;
  content: BlogSection[];
}

// TODO(Bani): ganti seluruh data di bawah dengan artikel asli sebelum deploy.
export const categories: Category[] = [
  { key: "all", label: "Semua", icon: "squares-four" },
  { key: "tips", label: "Tips Produksi", icon: "lightbulb" },
  { key: "behind-the-scenes", label: "Behind the Scenes", icon: "camera" },
  { key: "studio-update", label: "Update Studio", icon: "megaphone" },
  { key: "klien", label: "Cerita Klien", icon: "users-three" },
];

export const posts: Post[] = [
  {
    slug: "cara-memilih-studio-foto-yang-tepat",
    title: "Cara Memilih Studio Foto yang Tepat untuk Campaign Anda",
    excerpt:
      "Sebelum booking, ada beberapa hal teknis dan non-teknis yang sering terlewat — dari karakter cahaya sampai kesiapan add-on kreatif. Berikut panduan singkatnya.",
    category: "tips",
    author: "Tim Mahalu Studio",
    date: "2 Sep 2026",
    readTime: "6 menit baca",
    cover: "/assets/image/BLOG/BLG-ZERO.jpg",
    alt: "Suasana pemilihan studio foto untuk campaign",
    featured: true,
    content: [
      {
        paragraphs: [
          "Memilih studio foto sering dianggap sesederhana membandingkan harga per jam. Padahal, ada beberapa faktor teknis yang jauh lebih menentukan hasil akhir campaign Anda — dan baru terasa dampaknya setelah hari produksi berjalan.",
        ],
      },
      {
        heading: "1. Kenali karakter cahaya, bukan cuma ukuran ruangan",
        paragraphs: [
          "Ruang dengan cyclorama putih dan lighting artifisial penuh (seperti Studio 01) memberi Anda kontrol total atas hasil akhir — cocok untuk katalog e-commerce yang butuh warna produk konsisten.",
          "Sebaliknya, ruang dengan cahaya alami (seperti Studio 02) menghasilkan nuansa yang lebih organik dan sulit ditiru lighting artifisial, tapi hasilnya bergantung pada waktu dan cuaca hari itu.",
        ],
      },
      {
        heading: "2. Cek apakah add-on kreatif yang Anda butuhkan tersedia",
        paragraphs: [
          "Tidak semua studio menyediakan MUA, stylist, atau color grading sebagai layanan tambahan. Kalau tim Anda tidak membawa kru kreatif sendiri, pastikan studio yang dipilih punya add-on tersebut — dan tanyakan apakah tarifnya flat per booking atau menyesuaikan durasi sewa.",
        ],
      },
      {
        heading: "3. Hitung total waktu, bukan cuma waktu shooting",
        paragraphs: [
          "Durasi sewa idealnya mencakup waktu setup, ganti wardrobe, dan review hasil — bukan cuma waktu kamera menyala. Studio dengan asisten on-set standby biasanya membantu mempercepat proses ini karena setup lighting sudah menyala saat Anda tiba.",
        ],
      },
    ],
  },
  {
    slug: "di-balik-layar-produksi-katalog-produk",
    title: "Di Balik Layar: Produksi Katalog Produk Skala Besar di Studio 01",
    excerpt:
      "Bagaimana tim kami menata white cyclorama dan lighting untuk katalog produk lebih dari 200 item dalam satu hari produksi.",
    category: "behind-the-scenes",
    author: "Nama Lead Photographer",
    date: "28 Agu 2026",
    readTime: "4 menit baca",
    cover: "/assets/image/BLOG/BLG-ONE.png",
    alt: "Proses produksi katalog produk di Studio 01",
    content: [
      {
        paragraphs: [
          "Salah satu klien kami datang dengan target yang cukup menantang: memotret lebih dari 200 item produk dalam satu hari, dengan hasil yang konsisten untuk seluruh katalog e-commerce mereka.",
        ],
      },
      {
        heading: "Setup lighting yang tidak berubah sepanjang hari",
        paragraphs: [
          "Kunci dari produksi skala besar seperti ini adalah konsistensi. Tim kami mengunci posisi tiga strobe 600W dan sudut cyclorama sejak awal, sehingga tidak ada penyesuaian ulang di tengah sesi yang bisa mengubah tone warna antar produk.",
        ],
      },
      {
        heading: "Sistem antrian produk mempercepat alur kerja",
        paragraphs: [
          "Tim produksi klien menyiapkan produk dalam batch berdasarkan kategori warna, sementara asisten on-set kami membantu pergantian properti di antara pengambilan gambar — memangkas waktu jeda hingga separuh dibanding produksi tanpa sistem antrian.",
        ],
      },
      {
        paragraphs: [
          "Hasilnya, seluruh 200+ produk selesai dipotret dalam durasi 8 jam, termasuk waktu review kualitas gambar sebelum tim beranjak dari lokasi.",
        ],
      },
    ],
  },
  {
    slug: "perbedaan-studio-01-dan-studio-02",
    title: "Studio 01 vs Studio 02: Mana yang Cocok untuk Konsep Anda?",
    excerpt:
      "White cyclorama dengan kontrol cahaya penuh, atau nuansa raw dan hangat dengan cahaya alami? Kenali perbedaan karakter kedua ruang ini.",
    category: "tips",
    author: "Tim Mahalu Studio",
    date: "20 Agu 2026",
    readTime: "5 menit baca",
    cover: "/assets/image/BLOG/BLG-TWO.jpg",
    alt: "Perbandingan suasana Studio 01 dan Studio 02",
    content: [
      {
        paragraphs: [
          'Pertanyaan paling sering yang masuk ke WhatsApp kami: "Enaknya pakai Studio 01 atau Studio 02, ya?" Jawabannya selalu tergantung konsep — berikut panduan singkat memilihnya.',
        ],
      },
      {
        heading: "Pilih Studio 01 kalau Anda butuh...",
        paragraphs: [
          "Latar bersih yang konsisten untuk katalog produk atau e-commerce, kontrol cahaya penuh tanpa bergantung cuaca atau jam operasional, dan kapasitas kru lebih besar untuk produksi komersial skala besar.",
        ],
      },
      {
        heading: "Pilih Studio 02 kalau Anda butuh...",
        paragraphs: [
          "Nuansa hangat dan organik yang sulit ditiru lighting artifisial, konsep editorial personal atau lifestyle yang ingin terasa less-produced, dan tekstur visual dari dinding semen serta lantai kayu sebagai bagian dari komposisi.",
        ],
      },
      {
        paragraphs: [
          "Kalau masih ragu, kami sarankan datang survei singkat sebelum booking — lihat langsung karakter cahaya di jam yang sama dengan rencana sesi Anda.",
        ],
      },
    ],
  },
  {
    slug: "color-grading-add-on-yang-sering-ditanyakan",
    title: "Color Grading sebagai Add-on: Yang Sering Ditanyakan Klien",
    excerpt:
      "Kapan sebaiknya menambahkan color grading, dan bagaimana tarifnya menyesuaikan durasi sewa ruangan? Kami rangkum pertanyaan yang paling sering masuk.",
    category: "tips",
    author: "Nama Videographer",
    date: "14 Agu 2026",
    readTime: "3 menit baca",
    cover: "/assets/image/BLOG/BLG-TRE.webp",
    alt: "Proses color grading video di studio",
    content: [
      {
        paragraphs: [
          'Color grading sering dianggap langkah opsional yang bisa dilewatkan untuk menghemat biaya. Padahal, untuk sebagian jenis konten, ini yang membedakan hasil terlihat "profesional" atau "amatir".',
        ],
      },
      {
        heading: "Kapan sebaiknya menambahkan color grading?",
        paragraphs: [
          "Kalau konten Anda akan digunakan di banyak platform (iklan, media sosial, website) dan butuh konsistensi warna brand, color grading membantu memastikan tone yang sama di semua channel.",
        ],
      },
      {
        heading: "Kenapa tarifnya mengikuti durasi sewa ruangan?",
        paragraphs: [
          "Semakin lama sesi produksi, semakin banyak materi mentah yang dihasilkan — jumlah foto atau menit video yang perlu di-grading otomatis lebih banyak. Karena itu tarif add-on ini kami buat mengikuti tier durasi, bukan flat, supaya proporsional dengan volume kerja aktual.",
        ],
      },
    ],
  },
  {
    slug: "cerita-klien-campaign-fashion-lokal",
    title:
      "Cerita Klien: Campaign Fashion Lokal yang Diproduksi dalam Satu Hari",
    excerpt:
      "Bagaimana sebuah brand fashion lokal memanfaatkan Studio 01 dan add-on stylist untuk menyelesaikan seluruh campaign musim mereka hanya dalam satu sesi.",
    category: "klien",
    author: "Tim Mahalu Studio",
    date: "5 Agu 2026",
    readTime: "7 menit baca",
    cover: "/assets/image/BLOG/BLG-FOUR.jpg",
    alt: "Sesi campaign fashion lokal di Mahalu Studio",
    content: [
      {
        paragraphs: [
          "Sebuah brand fashion lokal datang dengan target ambisius: menyelesaikan seluruh campaign koleksi musiman mereka — sekitar 15 look berbeda — hanya dalam satu hari sesi di Studio 01.",
        ],
      },
      {
        heading: "Kenapa satu hari cukup?",
        paragraphs: [
          "Tim mereka datang dengan moodboard yang sudah matang, sehingga tidak ada waktu terbuang untuk diskusi konsep di lokasi. Add-on fashion stylist dari kami membantu mempercepat pergantian wardrobe antar-look tanpa mengganggu alur pencahayaan yang sudah di-setup.",
        ],
      },
      {
        heading: "Hasil dan pelajaran dari sesi ini",
        paragraphs: [
          "Dengan kombinasi persiapan matang dari tim klien dan efisiensi setup Studio 01, seluruh 15 look selesai dipotret dalam waktu 8 jam — termasuk waktu istirahat dan review hasil di sela sesi.",
          "Pelajaran utamanya: durasi produksi bisa jauh lebih efisien kalau moodboard dan urutan look sudah direncanakan sebelum hari-H, bukan diputuskan di lokasi.",
        ],
      },
    ],
  },
  {
    slug: "jam-operasional-baru-mahalu-studio",
    title: "Update: Penyesuaian Jam Operasional Mahalu Studio",
    excerpt:
      "Mulai bulan ini kami memperluas jam operasional untuk mengakomodasi lebih banyak jadwal produksi malam hari. Simak detail lengkapnya.",
    category: "studio-update",
    author: "Studio Manager",
    date: "30 Jul 2026",
    readTime: "2 menit baca",
    cover: "/assets/image/BLOG/BLG-FIVE.jpg",
    alt: "Suasana studio pada malam hari",
    content: [
      {
        paragraphs: [
          "Berdasarkan permintaan yang terus meningkat untuk sesi produksi malam hari, kami memutuskan memperluas jam operasional Mahalu Studio mulai bulan ini.",
        ],
      },
      {
        heading: "Apa yang berubah?",
        paragraphs: [
          "Jam operasional kini berlaku setiap hari, 08.00–22.00 WIB — lebih panjang dari sebelumnya. Ini terutama membantu tim produksi yang butuh sesi setelah jam kerja kantor biasa, atau produksi yang memang menargetkan suasana malam.",
        ],
      },
      {
        paragraphs: [
          "Kebijakan booking dan tarif tidak berubah — perpanjangan jam ini murni untuk memberi fleksibilitas jadwal lebih besar kepada Anda.",
        ],
      },
    ],
  },
  {
    slug: "tips-menyiapkan-moodboard-sebelum-sesi",
    title: "5 Tips Menyiapkan Moodboard Sebelum Sesi Foto",
    excerpt:
      "Moodboard yang jelas mempercepat komunikasi dengan tim kreatif kami di hari-H. Berikut cara menyusunnya supaya efektif.",
    category: "tips",
    author: "Nama Fashion Stylist",
    date: "22 Jul 2026",
    readTime: "4 menit baca",
    cover: "/assets/image/BLOG/BLG-SIX.jpg",
    alt: "Contoh moodboard produksi foto",
    content: [
      {
        paragraphs: [
          "Moodboard yang jelas adalah cara tercepat memastikan seluruh tim — fotografer, MUA, stylist, dan klien — punya bayangan hasil akhir yang sama sebelum kamera menyala.",
        ],
      },
      {
        heading: "1. Batasi 8-12 referensi visual",
        paragraphs: [
          "Terlalu banyak referensi justru membingungkan. Pilih gambar yang benar-benar mewakili mood, bukan sekadar koleksi foto bagus.",
        ],
      },
      {
        heading: "2. Pisahkan referensi pose, warna, dan lighting",
        paragraphs: [
          "Mengelompokkan referensi berdasarkan elemen spesifik membantu tim kreatif fokus pada bagian yang relevan dengan peran masing-masing.",
        ],
      },
      {
        heading: "3. Sertakan referensi yang ingin dihindari",
        paragraphs: [
          "Menyebutkan apa yang TIDAK diinginkan sering kali sama pentingnya dengan referensi yang diinginkan, terutama untuk komunikasi dengan MUA dan stylist.",
        ],
      },
      {
        heading: "4. Kirim moodboard minimal H-2",
        paragraphs: [
          "Ini memberi waktu tim kreatif kami menyiapkan kebutuhan teknis — misalnya palet warna lighting atau referensi styling — sebelum hari produksi.",
        ],
      },
      {
        heading: "5. Diskusikan durasi realistis berdasarkan moodboard",
        paragraphs: [
          "Jumlah look dan kompleksitas setup di moodboard menentukan berapa jam sewa yang sebaiknya dipesan — jangan ragu konsultasikan ini saat booking.",
        ],
      },
    ],
  },
  {
    slug: "di-balik-layar-cover-album-musik",
    title: "Di Balik Layar: Produksi Cover Album Musik di Studio 02",
    excerpt:
      "Memanfaatkan cahaya alami Studio 02 untuk menghasilkan nuansa raw dan intim pada sesi pemotretan cover album seorang musisi indie.",
    category: "behind-the-scenes",
    author: "Nama Photographer",
    date: "10 Jul 2026",
    readTime: "5 menit baca",
    cover: "/assets/image/BLOG/BLG-SEVEN.jpg",
    alt: "Sesi pemotretan cover album musik di Studio 02",
    content: [
      {
        paragraphs: [
          'Seorang musisi indie datang dengan brief yang sederhana namun spesifik: cover album yang terasa personal dan tidak terlalu "studio" — dan Studio 02 jadi pilihan yang tepat untuk kebutuhan ini.',
        ],
      },
      {
        heading: "Memanfaatkan waktu golden hour dari jendela utara",
        paragraphs: [
          "Meski jendela utara memberi cahaya konsisten sepanjang hari, tim kami tetap menjadwalkan sesi di sore hari untuk mendapatkan kualitas cahaya paling lembut — menghasilkan bayangan halus yang memperkuat mood intim yang diinginkan.",
        ],
      },
      {
        paragraphs: [
          "Dua strobe pelengkap yang tersedia di Studio 02 hanya digunakan sebagai fill light minimal, sengaja tidak mendominasi supaya karakter cahaya alami tetap terasa dominan di hasil akhir.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function getCategoryLabel(key: string): string {
  return categories.find((c) => c.key === key)?.label ?? key;
}

export function getCategoryIcon(key: string): string {
  return categories.find((c) => c.key === key)?.icon ?? "tag";
}
