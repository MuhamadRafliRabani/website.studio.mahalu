export interface PortfolioWork {
  studio: "Studio 01" | "Studio 02";
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const works: PortfolioWork[] = [
  {
    studio: "Studio 01",
    category: "Fashion Campaign",
    title: "Koleksi Autumn/Winter 2026",
    description:
      "Campaign lookbook untuk lini pakaian musim gugur — memanfaatkan cyclorama putih Studio 01 supaya warna kain tetap akurat di setiap frame.",
    image: "/assets/image/EXP-ONE.jpg",
    imageAlt:
      "Model mengenakan koleksi busana Autumn/Winter 2026 di latar putih bersih",
  },
  {
    studio: "Studio 01",
    category: "Beauty & Skincare",
    title: "Lumière Hydrating Series",
    description:
      "Produksi katalog skincare dengan pencahayaan close-up untuk menonjolkan tekstur produk dan kulit model secara detail.",
    image: "/assets/image/EXP-TWO.jpg",
    imageAlt:
      "Foto produk skincare Lumière Hydrating Series dengan pencahayaan detail",
  },
  {
    studio: "Studio 01",
    category: "Product Catalog",
    title: "Katalog Produk — Ruma Living",
    description:
      "Sesi foto katalog e-commerce untuk lini furnitur rumah, dipotret dengan latar netral agar konsisten di seluruh halaman produk toko online.",
    image: "/assets/image/EXP-TRE.jpg",
    imageAlt: "Foto katalog produk furnitur Ruma Living dengan latar netral",
  },
  {
    studio: "Studio 01",
    category: "Commercial Video",
    title: "TVC Kopi Nusantara",
    description:
      "Produksi iklan televisi untuk merek kopi lokal, memanfaatkan daya listrik tinggi Studio 01 untuk setup lighting multi-kamera.",
    image: "/assets/image/EXP-SEVEN.jpg",
    imageAlt:
      "Behind the scenes produksi iklan televisi Kopi Nusantara di studio",
  },
  {
    studio: "Studio 01",
    category: "E-commerce",
    title: "Lookbook Sepatu Lokal — Rana Footwear",
    description:
      "Sesi lookbook untuk brand sepatu lokal, kombinasi foto produk close-up dan on-model shot dalam satu hari produksi.",
    image: "/assets/image/EXP-EIGHT.jpg",
    imageAlt: "Lookbook produk sepatu Rana Footwear dipotret di Studio 01",
  },
  {
    studio: "Studio 02",
    category: "Editorial",
    title: "The Craftsman Editorial",
    description:
      "Seri editorial personal yang mengangkat tema kerajinan tangan, memanfaatkan cahaya jendela utara Studio 02 untuk nuansa hangat dan autentik.",
    image: "/assets/image/EXP-FOUR.jpg",
    imageAlt:
      "Editorial The Craftsman dipotret dengan cahaya alami di Studio 02",
  },
  {
    studio: "Studio 02",
    category: "Personal Project",
    title: "Weekend Ritual",
    description:
      "Proyek personal fotografer yang mendokumentasikan rutinitas akhir pekan dengan gaya candid dan tekstur mentah dinding semen Studio 02.",
    image: "/assets/image/EXP-FIVE.jpg",
    imageAlt: "Foto personal project Weekend Ritual dengan nuansa candid",
  },
  {
    studio: "Studio 02",
    category: "Portrait",
    title: "Natural Light Portrait Series",
    description:
      "Seri potret natural dengan memanfaatkan cahaya jendela utara yang konsisten sepanjang hari, tanpa lighting artifisial tambahan.",
    image: "/assets/image/EXP-SIX.jpg",
    imageAlt: "Potret natural memanfaatkan cahaya jendela di Studio 02",
  },
  {
    studio: "Studio 02",
    category: "Lifestyle",
    title: "Slow Living, Depok",
    description:
      "Konten lifestyle bertema hidup tenang di kota, dipotret dengan palet warna hangat yang selaras dengan lantai kayu dan dinding tekstur studio.",
    image: "/assets/image/EXP-NINE.jpg",
    imageAlt: "Konten lifestyle Slow Living dipotret di Studio 02",
  },
  {
    studio: "Studio 02",
    category: "Music & Band",
    title: "Album Cover — Senja Kolektif",
    description:
      "Sesi foto cover album untuk grup musik indie, menonjolkan mood raw dan intim yang jadi ciri khas Studio 02.",
    image: "/assets/image/EXP-TEN.jpg",
    imageAlt: "Foto cover album band Senja Kolektif dipotret di Studio 02",
  },
];
