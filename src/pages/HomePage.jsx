import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import about from "../assets/about.jpg";
import iluni from "../assets/iluni.jpg";
import { IoGitNetworkOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { GiInspiration } from "react-icons/gi";

const HomePage = () => {
  return (
    <div>
      {/* Section One: Overview */}
      <section className="flex flex-col items-center justify-center h-screen px-4 space-y-8 text-center bg-blue-950">
        <h1 className="text-4xl font-bold text-white">
          Menghubungkan Alumni, Menginspirasi Generasi
        </h1>
        <p className="max-w-xl text-white">
          ILUNI SMAN 2 Cibinong merupakan wadah resmi bagi seluruh alumni SMAN 2
          Cibinong untuk berkumpul, berkolaborasi, dan berbagi pengalaman serta
          inspirasi. Kami hadir sebagai organisasi yang senantiasa mendukung
          kontribusi para alumni untuk almamater tercinta
        </p>
        <div className="flex flex-col items-center mt-6 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center w-64 h-48 p-4 bg-white border rounded-lg shadow-lg">
            {/* Icon Container with Border */}
            <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
              <CiShare1 className="text-3xl text-blue-950" />
            </div>
            <h2 className="text-lg font-semibold">Modern</h2>
            <p className="text-center text-gray-600">
              Selalu bergerak maju dengan semangat kekinian
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center w-64 h-48 p-4 bg-white border rounded-lg shadow-lg">
            <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
              <LuBrain className="text-3xl text-blue-950" />
            </div>
            <h2 className="text-lg font-semibold">Inovatif</h2>
            <p className="text-center text-gray-600">
              Kreativitas tanpa batas untuk masa depan yang lebih baik
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center w-64 h-48 p-4 bg-white border rounded-lg shadow-lg">
            <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
              <FaRegStar className="text-3xl text-blue-950" />
            </div>
            <h2 className="text-lg font-semibold">Unggul</h2>
            <p className="text-center text-gray-600">
              Menjadi yang terdepan dengan kualitas dan prestasi
            </p>
          </div>
        </div>
      </section>

      {/* Section Two: Overview About */}
      <div className="w-full bg-white">
        <section className="flex flex-col items-center justify-center h-screen px-4 py-12 mx-auto space-y-8 text-center md:space-x-8 md:flex-row md:space-y-0 md:text-left max-w-screen-2xl">
          <div className="md:w-1/2 mr-9">
            <img
              src={about}
              alt="Overview About"
              className="object-cover w-full h-auto max-w-sm mx-auto rounded-lg md:max-w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="pb-2 mb-3 text-3xl font-bold border-b-2 border-white text-blue-950">
              ILUNI SMAN 2 Cibinong
            </h1>
            <p className="text-black">
              SMA Negeri 2 Cibinong resmi berdiri berdasarkan Surat Keputusan
              Departemen Pendidikan dan Kebudayaan No. 0260/0/1994 tanggal 5
              Oktober 1994. Peresmiannya baru dilaksanakan di Bogor pada tanggal
              24 Desember 1994 oleh Bapak Drs. H.S Yusupadi yang pada saat itu
              menjabat sebagai Kepala Kantor Wilayah Pendidikan dan Kebudayaan
              Propinsi Jawa Barat. Dalam proses pembentukannya SMA Negeri 2
              Cibinong untuk pertama kalinya memiliki formasi siswa kelas I
              sebanyak 3 kelas yang tadinya merupakan Kelas Jauh SMAN 1 Cibinong
              yang terletak di Jl. Mayor Oking. Kedua sekolah tersebut secara
              bersamaan dipimpin oleh Bapak Drs. Irlan Sumadi (1993-1995) begitu
              juga para pendidik dan staf Tata Usahanya merupakan pembauran dari
              dua lembaga tersebut. <br></br>Pada tahun 1994 jumlah guru yang
              diangkat sebanyak 19 orang dan TU-nya 1 orang. Sarana yang
              dimiliki pada saat itu terdiri dari Ruang Perkantoran, Ruang Guru,
              Ruang perpustakaan dan tiga ruang kelas. Angkatan Pertama Lulusan
              alumni pada tahun 1996, dan organisasi ILUNI dibentuk pertama
              kalinya pada tahun 2010. Dengan semangat kebersamaan, kami
              berkomitmen untuk membangun hubungan yang kuat diantara seluruh
              alumni serta mendukung peningkatan kualitas pendidikan di SMAN 2
              Cibinong.
            </p>
            <button className="px-4 py-2 mt-4 text-white rounded-lg bg-blue-950">
              Read More
            </button>
          </div>
        </section>
      </div>

      {/* Section Three */}
      <div className="w-full bg-blue-950">
        <section className="flex flex-col justify-center px-4 py-8 mx-auto space-y-6 md:h-screen md:space-y-8 max-w-screen-2xl">
          <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8">
            {/* Text and Image Container */}
            <div className="p-6 space-y-4 md:w-1/2">
              <h1 className="text-2xl font-bold text-blue-100 md:text-3xl">
                Bersama Alumni, Mari Berkontribusi Lebih
              </h1>
              <p className="text-white">
                Bergabunglah bersama kami dan jadilah bagian dari perubahan,
                baik bagi diri sendiri, alumni lainnya, maupun untuk sekolah
                yang telah menjadi fondasi kesuksesan kita.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={iluni}
                alt="Our Services"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Features Grid with Section One Card Style */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg">
              {/* Icon Container with Border */}
              <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
                <IoGitNetworkOutline className="text-3xl text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold">Jaringan Luas</h3>
              <p className="text-center text-gray-700">
                Kami memberikan Anda kesempatan untuk terhubung dengan jaringan
                alumni yang luas dari berbagai angkatan
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg">
              <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
                <IoIosPeople className="text-3xl text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold">Kolaborasi</h3>
              <p className="text-center text-gray-700">
                Anda dapat terus menjalin silaturahmi dengan sesama alumni
                sekaligus berkolaborasi antar angkatan
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg">
              <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
                <AiOutlineLike className="text-3xl text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold">Kontribusi Lebih</h3>
              <p className="text-center text-gray-700">
                Anda dapat berkontribusi kembali kepada sekolah dan generasi
                penerus yang lebih baik bagi masa depan
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center p-4 bg-white border rounded-lg shadow-lg">
              <div className="flex items-center justify-center p-2 mb-4 bg-white border-2 rounded-full border-blue-950">
                <GiInspiration className="text-3xl text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold">Wadah Inspirasi</h3>
              <p className="text-center text-gray-700">
                Iluni adalah tempat untuk menyuarakan ide dan gagasan, serta
                saling menginspirasi satu sama lain
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section Four: Program */}
      <section className="flex flex-col items-center justify-center py-8 px-4 space-y-8 text-center">
        <h1 className="text-4xl font-bold text-blue-950">
          Program dan Kegiatan
        </h1>
        <p className="max-w-xl text-black">
          Kami memiliki berbagai program dan kegiatan yang dirancang untuk
          mempererat hubungan antar alumni sekaligus memberikan kontribusi
          positif bagi sekolah dan masyarakat
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto justify-items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center space-y-2 text-center flex-grow">
            <img
              src="https://www.iluni-sman2cibinong.com/wp-content/uploads/2024/10/galeri-iluni-smavo-3-1024x576-600x600.jpeg"
              alt="Pemilihan Pengurus ILUNI masa kerja 2024-2029"
              className="w-full rounded-lg max-w-[360px] max-h-[360px]"
            />
            <p className="text-gray-600 text-xs">
              Pemilihan Pengurus ILUNI masa kerja 2024-2029
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center space-y-2 text-center flex-grow">
            <img
              src="https://www.iluni-sman2cibinong.com/wp-content/uploads/2024/10/galeri-iluni-smavo-2-1024x576-600x600.jpeg"
              alt="Pengukuhan Pengurus ILUNI masa kerja 2024-2029"
              className="w-full rounded-lg max-w-[360px] max-h-[360px]"
            />
            <p className="text-gray-600 text-xs">
              Pengukuhan Pengurus ILUNI masa kerja 2024-2029
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center space-y-2 text-center flex-grow">
            <img
              src="https://www.iluni-sman2cibinong.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-21-at-09.20.19-1024x576-600x600.jpeg"
              alt="Rapat Kerja ILUNI Untuk Reuni Akbar 2024"
              className="w-full rounded-lg max-w-[360px] max-h-[360px]"
            />
            <p className="text-gray-600 text-xs">
              Rapat Kerja ILUNI Untuk Reuni Akbar 2024
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center space-y-2 text-center flex-grow">
            <img
              src="https://www.iluni-sman2cibinong.com/wp-content/uploads/2024/10/galeri-iluni-smavo-12-575x1024-600x600.jpeg"
              alt="Gallery Item 4"
              className="w-full rounded-lg max-w-[360px] max-h-[360px]"
            />
            <p className="text-gray-600 text-xs">
              Pemberian kenang-kenangan dari ILUNI kepada para guru SMAN 2
              Cibinong
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center space-y-2 text-center flex-grow">
            <img
              src="https://www.iluni-sman2cibinong.com/wp-content/uploads/2024/10/galeri-iluni-smavo-17-577x1024-600x600.jpeg"
              alt="Gallery Item 5"
              className="w-full rounded-lg max-w-[360px] max-h-[360px]"
            />
            <p className="text-gray-600 text-xs">
              Peresmian official logo oleh ketua ILUNI masa kerja 2024-2029
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
