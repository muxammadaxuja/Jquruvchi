import { YMaps, Map, Placemark, FullscreenControl, TrafficControl, GeolocationControl } from "react-yandex-maps";
import Link from 'next/link'

function Main() {
  return (
    <div className="mx-16 sm:mx-24 md:mx-28 lg:mx-32 xl:mx-56 pt-0 lg:pt-10">
      <div className='flex justify-start lg:justify-around items-center'>
        <div className="py-12">
          <h1 className="text-3xl text-yellow-400 font-semibold py-2">
            #Jquruvchi
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 space-x-10">
            <div className="space-y-3">
              <p className="text-[#252525] font-medium text-lg">
                Ofis manzili:
              </p>
              <Link href="https://www.google.com/maps/place/Jizzax+viloyati,+O%60zbekiston/@40.2754652,67.1838258,9z/data=!3m1!4b1!4m5!3m4!1s0x38b2ea58f711aca9:0xe18d916c84a0f4df!8m2!3d40.4706415!4d67.5708536">
              <p className="font-normal text-lg text-gray-500 cursor-pointer hover:text-yellow-400">
                Uzbekiston, Jizzax shahar, <br /> Toshkent ko'cha, 1A uy
              </p>
              </Link>
            </div>
            <div className="">
              <p className="text-[#252525] font-medium text-lg">Tel:</p>
              <p className="font-normal text-lg text-yellow-400">
                +998 72 223 28 76{" "}
              </p>
              <p className="text-[#252525] font-medium text-lg">
                Elektron pochta:
              </p>
              <p className="font-normal text-lg text-gray-500">
                j-quruvchi@mail.ru
              </p>
            </div>
          </div>
        </div>
        <YMaps>
          <div className="hidden lg:block space-y-3">
            <h1>Ofisimiz joylashga joy.</h1>
            <Map defaultState={{ center: [40.116400, 67.819461], zoom: 6 }}>
            <Placemark geometry={[40.116400, 67.819461]} /> 
            <FullscreenControl options={{float: "left"}} />
            <TrafficControl options={{float: "right"}} />
            <GeolocationControl options={{float: "right"}} />
            </Map>
          </div>
        </YMaps>
      </div>
      <div className="contact py-10">
        <form className="form w-[600px]">
          <h1 className="font-medium text-xl">Contact Us</h1>

          <label>
            Name <span className="text-red-600">*</span>{" "}
          </label>
          <input placeholder="Name" />

          <label>
            Email <span className="text-red-600">*</span>{" "}
          </label>
          <input placeholder="Email" placeholder="Name" />

          <label>
            Message <span className="text-red-600">*</span>{" "}
          </label>
          <textarea placeholder="Message" placeholder="Name"></textarea>

          <button
            className="px-4 py-2 lg:px-8 lg:py-4 text-white hover:bg-yellow-300 transition-all duration-300 rounded-md bg-yellow-400"
            type="button"
          >
            Jo'natish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
