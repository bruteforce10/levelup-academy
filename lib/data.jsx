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
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/javascript.svg"
      />
    ),
  },
  {
    name: "React JS",
    desc: "Front-End Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/react-js.svg"
      />
    ),
  },
  {
    name: "Tailwind",
    desc: "Front-End Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/tailwind.svg"
      />
    ),
  },
  {
    name: "Bootstrap",
    desc: "Front-End Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/bootstrap.svg"
      />
    ),
  },
  {
    name: "GIT",
    desc: "Utilities Dev",
    img: <Image width={72} height={72} alt="programming" src="/icon/git.svg" />,
  },
  {
    name: "Firebase",
    desc: "Back-End Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/firebase.svg"
      />
    ),
  },
];

export const listSoftwareSecond = [
  {
    name: "After Effects",
    desc: "Motion Graphic",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/after-effects.svg"
      />
    ),
  },
  {
    name: "Wordpress",
    desc: "CMS Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/wordpress.svg"
      />
    ),
  },
  {
    name: "Python",
    desc: "Data Science",
    img: (
      <Image width={72} height={72} alt="programming" src="/icon/python.svg" />
    ),
  },
  {
    name: "Autocad",
    desc: "Drawing Construction",
    img: (
      <Image width={72} height={72} alt="programming" src="/icon/autocad.svg" />
    ),
  },
  {
    name: "Android Studio",
    desc: "App Mobile Development",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/android-studio.svg"
      />
    ),
  },
  {
    name: "Codeigniter",
    desc: "Back-End Dev",
    img: (
      <Image
        width={72}
        height={72}
        alt="programming"
        src="/icon/codeigniter.svg"
      />
    ),
  },
];

export const faq = [
  {
    question: "Apakah seorang pemula bisa ikut belajar?",
    answer:
      "Level-Up menyediakan kelas online UI/UX Design, Web Development, Freelancer, Data Science yang bisa dipelajari secara gratis, sangat dianjurkan untuk pemula atau Anda yang ingin switch career. Setelah menyelesaikan kelas gratis, BuildWithAngga menyarankan Anda mengikuti kelas Premium dalam membangun portfolio yang digunakan sebagai modal bekerja.",
  },
];
