import IconDesign from "@/public/img/course-design.svg";
import IconCoding from "@/public/img/course-coding.svg";
import IconImprovement from "@/public/img/course-improvement.svg";
import IconIndustries from "@/public/img/course-industries.svg";
import Image from "next/image";

export const categoryClass = [
  {
    name: "Kelas Design",
    icon: IconDesign,
    desc: "UI/UX Graphic Design",
  },
  {
    name: "Kelas Koding",
    icon: IconCoding,
    desc: "Bikin Website & Aplikasi",
  },
  {
    name: "Perdalam Softskills",
    icon: IconImprovement,
    desc: "Improve your business",
  },
  {
    name: "Kelas Industries",
    icon: IconIndustries,
    desc: "Alur belajar terbaik",
  },
];

export const listSoftware = [
  {
    name: "Javascript",
    desc: "Back-End & Front-End Dev",
    image: "/icon/javascript.svg",
  },
  {
    name: "React JS",
    desc: "Front-End Dev",
    image: "/icon/react-js.svg",
  },
  {
    name: "Tailwind",
    desc: "Front-End Dev",
    image: "/icon/tailwind.svg",
  },
  {
    name: "Bootstrap",
    desc: "Front-End Dev",
    image: "/icon/bootstrap.svg",
  },
  {
    name: "GIT",
    desc: "Utilities Dev",
    image: "/icon/git.svg",
  },
  {
    name: "Firebase",
    desc: "Back-End Dev",
    image: "/icon/firebase.svg",
  },
];

export const listSoftwareSecond = [
  {
    name: "After Effects",
    desc: "Motion Graphic",
    image: "/icon/after-effects.svg",
  },
  {
    name: "Wordpress",
    desc: "CMS Dev",
    image: "/icon/wordpress.svg",
  },
  {
    name: "Python",
    desc: "Data Science",
    image: "/icon/python.svg",
  },
  {
    name: "Autocad",
    desc: "Drawing Construction",
    image: "/icon/autocad.svg",
  },
  {
    name: "Android Studio",
    desc: "App Mobile Development",
    image: "/icon/android-studio.svg",
  },
  {
    name: "Codeigniter",
    desc: "Back-End Dev",
    image: "/icon/codeigniter.svg",
  },
];

export const faqQuest = [
  {
    question: "Apakah seorang pemula bisa ikut belajar?",
    answer: (
      <p className="leading-relaxed">
        Level-Up menyediakan kelas online UI/UX Design, Web Development,
        Freelancer, Data Science yang bisa dipelajari secara gratis, sangat
        dianjurkan untuk pemula atau Anda yang ingin switch career. Setelah
        menyelesaikan kelas gratis, BuildWithAngga menyarankan Anda mengikuti
        kelas Premium dalam membangun portfolio yang digunakan sebagai modal
        bekerja.
      </p>
    ),
  },
  {
    question: "Apakah ini berlangganan?",
    answer: (
      <p className="leading-relaxed">
        Tidak, disini sistemnya sekali pembayaran untuk 1 kelasnya. Kelas bisa
        kamu akses selamanya.
        <br />
        <b>*Akses selamanya</b> tergantung kebijakan kami kedepannya. Misal
        nantinya kebijakan berubah, kami pastikan paling tidak setiap peserta
        minimal mendapat akses 1 tahun.
      </p>
    ),
  },
  {
    question: "Bagaimana cara belajarnya ?",
    answer: (
      <p className="leading-relaxed">
        Setelah anda melakukan pembayaran, nanti akan ada pemberitahuan di
        email. Lalu anda login menggunakan ID dan Password yang telah dibuat.
        Materi ada di kolom Enrolled Courses
      </p>
    ),
  },
  {
    question: "Kapan saya bisa memulai kursus ini ?",
    answer: (
      <p className="leading-relaxed">
        Setelah melakukan pembayaran, tunggu 5-10 menit. Nanti akan ada
        notification di email anda
      </p>
    ),
  },
  {
    question: "Bagaimana caranya saya membeli produk ini ?",
    answer: (
      <p className="leading-relaxed">
        Anda klik “Daftar Sekarang” lalu ikuti alur Checkout nya. Ingat !
        nominal harus sesuai dengan kolom “Total” agar sistem membaca secara
        otomatis. Lakukan pembayaran maksimal 1×24 Jam
      </p>
    ),
  },
  {
    question: "Apakah kelas ini mendapatkan Sertifikat ?",
    answer: (
      <p className="leading-relaxed">
        Iya ! di kelas ini anda akan mendapatkan sertifikat. Nanti akan
        disediakan di Dashboard Kelas masing-masing
      </p>
    ),
  },
];

export const goalsTarget = [
  "UX Designer",
  "UI Designer",
  "Front-End Developer",
  "Back-End Developer",
  "Mobile App Developer",
  "Full-Stack Developer",
  "Lifetime Learner",
  "Data Scientist",
  "Project Manager",
  "Logo Designer",
  "Drafter",
  "Graphic Designer",
  "Motion Graphic",
  "3D Modelling",
  "Video Editor",
  "Engineer",
];
