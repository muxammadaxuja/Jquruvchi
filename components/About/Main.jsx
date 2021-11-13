import React from "react";
import Link from 'next/link'

function Services() {
  return (
    <div className="mx-16 sm:mx-24 md:mx-28 lg:mx-32 xl:mx-56">
      {/* worker */}
      <div>
        {/* introduction */}
        <div className="py-12">
          <div>
            <p className="py-2 text-sm sm:text-lg text-gray-500 text-center">
              Bizning Jamoa
            </p>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-center font-bold text-[#252525]">
              Bizning jamoa a'zolari
            </h1>
          </div>
          <div></div>
        </div>

        {/* tashkilot azolari */}
        <div className="xl:mx-56 lg:mx-32 pb-10 lg:pb-32 grid grid-cols-1 md:grid-cols-3 text-center text-white font-semibold">
          <div className="flex flex-col text-[#252525] items-center">
            <img
              className="w-64 rounded-full overflow-hidden"
              src="images/akbar.jpg"
              alt=""
            />
            <h4 className="font-semibold py-4">RAHMONQULOV AKBAR</h4>
            <p className="font-mediumtext-sm">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            <p>Tel: +998 99 577-08-08</p>
          </div>
          <div className="items-center text-[#252525] flex flex-col text-center">
            <img
              className="w-64 rounded-full"
              src="images/alisher.jpg"
              alt=""
            />
            <h4 className="font-semibold py-4">MUSURMONQULOV ALISHER</h4>
            <p className="font-medium">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            <p className="">Tel: +998 72 223-28-76</p>
          </div>
          <div className="flex flex-col text-[#252525] items-center text-center">
            <img
              className="w-[17rem] rounded-full"
              src="images/islom.jpg"
              alt=""
            />
            <h4 className="font-semibold py-5">OLIMOV ISLOM</h4>
            <p className="font-medium">
              Lavozimi: "JQuruvchi" Jamiyati Ta`Sischisi
            </p>
            Tel: +998 72 223-28-76
          </div>
        </div>
      </div>

      {/* about us  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-16 space-x-10">
        <div className="space-y-4 lg:space-y-6">
          <h4 className="font-medium text-lg text-yellow-500">Biz Haqimizda</h4>
          <h3 className="font-bold text-2xl text=[#252525]">
            Biz Jizzax shahrida hashamatli Ko'chmas mulkni ko'paytirsh bo'yicha
            yetakchi kampaniyamiz.
          </h3>
          <p className="text-[#252525] font-medium">
            Biz mukammallikka intilamiz, biz mijozlarimizning ehtiyojlarini
            tadqiqotimiz, innovatsiyalarimiz va ishlanmalarimiz markaziga
            qo'yamiz. Biz sizning orzuingizni quramiz.{" "}
          </p>
          <Link href="/projects">
          <button className="px-4 py-2 lg:px-8 lg:py-4 text-white hover:bg-yellow-300 transition-all duration-300 rounded-md bg-yellow-400">
            Proyektlar
          </button>
          </Link>
        </div>
        <div className="space-y-4 py-16 md:py-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-5 space-y-5 py-4 lg:py-0">
            <div>
              <img
                className="max-w-full w-16 lg:w-24"
                src="https://www.hall7projects.com/wp-content/uploads/2019/03/features_icon1.png"
                alt=""
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-[#252525] font-bold text-1xl uppercase pb-2">
                Bizning maqsadimiz
              </h4>
              <p className="text-gray-500 font-normal text-lg">
                Bizning maqsadimiz manfaatdor tomonlarga qiymat beradigan
                ko'chmas mulk bo'yicha diversifikatsiyalangan ishlanmalarni
                yaratishdir.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-5 space-y-5 py-4 lg:py-0">
            <div>
              <img
                className="max-w-full w-16 lg:32"
                src="https://www.hall7projects.com/wp-content/uploads/2019/03/best_icon1-1.png"
                alt=""
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-[#252525] font-bold text-1xl uppercase pb-2">
                Bizning vazifamiz
              </h4>
              <p className="text-gray-500 font-normal text-lg">
                O'zimizni mijozlarimizga ko'chmas mulk sohasidagi eng ishonchli
                mahsulot va xizmatlar bilan ta'minlashga bag'ishlash, turli xil
                ehtiyojlarni qondirish uchun moslashtirilgan va uzoq muddatli
                biznes munosabatlarini rivojlantirishga qaratilgan.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us second */}
      <div className="my-16 space-y-5">
        <h1 className="text-[#252525] text-1xl uppercase font-bold">
          Biz kimmiz va nima qilamiz.
        </h1>
        <p className="font-madium text-gray-500">
          JQuurvchi - Jizzah shahrida joylashgan zamonaviy ko'chmas mulkni
          rivojlantirish bo'yicha etakchi kompaniya. Biz mijozlarimizga miqdoriy
          qiymatni taqdim etadigan juda yuqori sifatli turar-joy va tijorat
          mulklarini taqdim etamiz. Biz mulkimizga sarmoya kiritish oilaviy
          merosning boshlanishi deb o'ylashni yaxshi ko'ramiz.
        </p>
        <img
          className="w-[800px] max-w-full mx-auto py-14"
          src="/images/work/8.jpg"
          alt=""
        />
        <p className="font-madium text-gray-500">
          JQuruvchi ko'chmas mulk madaniyatining markazida mijozlarimizga qiymat
          berish istagi yotadi. Rivojlanish bo'yicha hamkorlarni tanlashdan
          tortib kalitlarni topshirishgacha kompaniya har bir detalning
          benuqsonligiga ishonch hosil qilish uchun va'dasini bajarishga
          intiladi.{" "}
        </p>
        <p className="font-madium text-gray-500">
          Ishlanmalar mumkin bo'lgan eng yuqori standartlarga yetkazilishini
          ta'minlash va bu bizning barcha ishlanmalarimiz uchun umumiy bo'lgan
          hashamat, qulaylik va qiymatni ta'minlash orqali mijozlarning
          umidlarini qondirish. Doimiy g'ayrioddiy bo'lishga intilish Hall7 Real
          Estate kompaniyasini nafaqat sifatli loyihalarni amalga oshirishga
          e'tibor qaratishga emas, balki sarmoyadan barqaror daromad olishni
          ta'minlaydigan sarmoyaviy maslahat xizmatlarini taklif qilishga
          ilhomlantirgan narsadir.{" "}
        </p>
        <p className="font-madium text-gray-500">
          Halollik, majburiyat va sifat biz tomonidan boshqariladigan
          qadriyatlardir, ular bizning tashkilotimizning asosini tashkil qiladi.
        </p>
      </div>
    </div>
  );
}

export default Services;
