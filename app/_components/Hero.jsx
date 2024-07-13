import { MapPinned, MoveDown, Phone } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="bg-slate-100">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://www.thespruce.com/thmb/fe3q3p-B6-S3SGow1P8Y0zAihaQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/organizational-hacks-to-stay-on-top-of-laundry-4122399-01-d3d76a6fc9c64cba829a1a3c16dbb839.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <p className="text-gray-600 font-bold md:text-6xl sm:text-3xl">
                BubbleBliss Laundry
              </p>
              <p className="mt-4 md:text-5xl sm:text-2xl text-gray-600">
                A Better Place to do Your Laundry
              </p>
              <div className="mt-8 flex flex-row gap-5 items-center">
                <a
                  href="https://maps.app.goo.gl/zu7VrLJpkYcRt47G7"
                  className="flex flex-row gap-2 items-center rounded bg-indigo-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  <MapPinned /> Location
                </a>
                {/* <div className=" flex flex-row gap-1 items-center">
                  <Phone color="#000000" />
                  <p className="text-lg font-medium text-gray-800">Call Us</p>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="items-center">
            {" "}
            <MoveDown color="#000000" />
          </div>{" "} */}
        </div>
      </section>
    </div>
  );
}

export default Hero;
