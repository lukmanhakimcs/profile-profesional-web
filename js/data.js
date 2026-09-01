/**
 * Data Konfigurasi Portfolio - Muhammad Lukman Hakim
 * Disesuaikan dengan desain Figma
 */

const profileData = {
    personal: {
        name: "Muhammad Lukman Hakim",
        nickname: "Lukman",
        title: "Mahasiswa D3 Sistem Informasi | IT Enthusiast",
        status: "Tersedia untuk Bekerja",
        statusDesc: "Saat ini terbuka untuk proyek dan peluang baru di bidang TI dan Sistem Informasi.",
        location: "Kota Probolinggo",
        fullLocation: "Kota Probolinggo, Jawa Timur, Indonesia",
        email: "luk.hakim2004@gmail.com",
        whatsapp: "6281233275519",
        whatsappFormatted: "081233275519",
        whatsappDisplay: "+62 812-3327-5519",
        github: "https://github.com/lukmanhakimcs",
        bioShort: "Mahasiswa D3 Sistem Informasi | IT Enthusiast",
        bioAbout: "Saya adalah seorang mahasiswa Sistem Informasi yang penuh semangat, berdedikasi pada pengembangan teknologi dan pemecahan masalah melalui pendekatan sistematis. Memiliki ketertarikan mendalam pada analisis data, rekayasa perangkat lunak, dan bagaimana teknologi dapat mengoptimalkan proses bisnis. Selalu antusias untuk belajar hal baru dan berkontribusi dalam proyek-proyek inovatif."
    },

    contactInfo: [
        { icon: "email", label: "Email", value: "luk.hakim2004@gmail.com" },
        { icon: "phone", label: "Telepon", value: "081233275519" },
        { icon: "location", label: "Lokasi", value: "Kota Probolinggo" }
    ],

    experience: [
        {
            title: "Magang IT",
            company: "Probolinggo Media ID",
            period: "2026 - Present",
            description: "Membantu pengembangan sistem informasi perusahaan, troubleshooting infrastruktur IT harian, dan merancang solusi teknis yang efisien."
        }
    ],

    education: [
        {
            degree: "D3 Sistem Informasi",
            institution: "Universitas Dinamika STIKOM Surabaya",
            period: "2024 - Sekarang",
            description: "Sedang aktif",
            isMajor: true
        },
        {
            degree: "Sekolah Menengah Atas",
            institution: "SMA Negeri 2 Kota Probolinggo",
            period: "2021 - 2024",
            description: "",
            isMajor: false
        },
        {
            degree: "Sekolah Menengah Pertama",
            institution: "SMP Negeri 9 Kota Probolinggo",
            period: "2018 - 2021",
            description: "",
            isMajor: false
        },
        {
            degree: "Sekolah Dasar",
            institution: "SDN Sukabumi 1 Kota Probolinggo",
            period: "2012 - 2018",
            description: "",
            isMajor: false
        }
    ],

    technicalSkills: [
        { name: "Pengembangan Web", percent: 85 },
        { name: "Manajemen Basis Data", percent: 55 },
        { name: "Jaringan", percent: 70 },
        { name: "Microsoft Office", percent: 70 }
    ],

    softSkills: [
        "Pemecahan Masalah",
        "Kerja Tim",
        "Komunikasi",
        "Manajemen Waktu"
    ],

    projects: [
        {
            id: "sistem-inventaris",
            title: "Sistem Manajemen Inventaris",
            image: "assets/images/project_pos.png",
            summary: "Sistem berbasis web untuk melacak stok barang secara real-time dengan integrasi basis data yang efisien.",
            tech: ["PHP", "MySQL"]
        },
        {
            id: "portfolio-responsive",
            title: "Portofolio Personal Responsif",
            image: "assets/images/project_food_app.png",
            summary: "Desain antarmuka modern menggunakan Tailwind CSS yang dioptimalkan untuk berbagai perangkat mobile dan desktop.",
            tech: ["HTML", "CSS", "JS"]
        }
    ]
};
