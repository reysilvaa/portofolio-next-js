interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Booking Sewa Motor Online",
    category: "Projek Mandiri",
    description: "Sistem booking dan manajemen sewa motor online untuk Rosantibike Motorent dengan fitur lengkap dan responsif.",
    image: "/image/projects/rosantibike.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://rosantibikemotorent.com",
    githubLink: "https://github.com/reysilvaa/rosantibike-web"
  },
  {
    id: 2,
    title: "Sistem Kependudukan RW",
    category: "Proyek Akhir Semester 4",
    description: "Aplikasi manajemen data penduduk untuk tingkat RW dengan fitur pencatatan, pelaporan, dan statistik demografis.",
    image: "/image/projects/sikep.png",
    tags: ["Laravel", "MySQL", "Bootstrap", "Charts.js"],
    link: "https://sikep-demo.vercel.app",
    githubLink: "https://github.com/Naufall1/SIKEP"
  },
  {
    id: 3,
    title: "myRosantibike Mobile",
    category: "Proyek Mandiri",
    description: "Aplikasi mobile untuk platform sewa motor Rosantibike dengan fitur booking, tracking, dan notifikasi.",
    image: "/image/projects/mobilerosanti.png",
    tags: ["React Native", "Firebase", "Redux", "Google Maps API"],
    githubLink: "https://github.com/reysilvaa/rosantibike_mobile"
  },
  {
    id: 4,
    title: "SiTatib",
    category: "Proyek Akhir Semester 3",
    description: "Sistem Informasi Tata Tertib untuk institusi pendidikan dengan fitur pelanggaran, sanksi, dan pelaporan.",
    image: "/image/projects/php.png",
    tags: ["PHP", "CodeIgniter", "MySQL", "jQuery"],
    githubLink: "https://github.com/reysilvaa/SiTatibJTI"
  },
  {
    id: 5,
    title: "Web Laundry Management",
    category: "UKL / Tugas Akhir SMK",
    description: "Sistem manajemen usaha laundry dengan fitur pelanggan, transaksi, dan laporan keuangan.",
    image: "/image/projects/node.png",
    tags: ["Node.js", "React", "Express", "MySQL"],
    githubLink: "https://github.com/reysilvaa/NODE_REACT--Laundry--UKK"
  },
  {
    id: 6,
    title: "Odoo ERP Hospital Management",
    category: "Magang (PKL) PT Cendana2000",
    description: "Modul Odoo ERP untuk manajemen rumah sakit dengan fitur pasien, dokter, appointment, dan rawat inap.",
    image: "/image/projects/odoo.png",
    tags: ["Odoo", "Python", "PostgreSQL", "XML"],
    githubLink: "https://github.com/reysilvaa/Odoo14-Hospital"
  },
  {
    id: 7,
    title: "Odoo ERP Rapot Management",
    category: "Magang (PKL) PT Cendana2000",
    description: "Modul Odoo ERP untuk manajemen rapor sekolah dengan fitur nilai, siswa, dan guru.",
    image: "/image/projects/odoo.png",
    tags: ["Odoo", "Python", "PostgreSQL", "XML"],
    githubLink: "https://github.com/reysilvaa/Odoo14-Rapot"
  },
  {
    id: 8,
    title: "Odoo ERP Perpustakaan Management",
    category: "Magang (PKL) PT Cendana2000",
    description: "Modul Odoo ERP untuk manajemen perpustakaan dengan fitur buku, anggota, dan peminjaman.",
    image: "/image/projects/odoo.png",
    tags: ["Odoo", "Python", "PostgreSQL", "XML"],
    githubLink: "https://github.com/reysilvaa/Odoo14-Perpustakaan"
  }
];

export default projects;
