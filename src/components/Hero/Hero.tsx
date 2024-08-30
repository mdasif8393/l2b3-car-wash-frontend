import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Bangladesh’s #1 FOR PREMIUM & Reliable Car Wash Service
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From Now on, We make your car wash easy, time saving. Just Book a
            slot and enjoy net & clean Car Wash Service for your premium car
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <Link to="/services">
            <Button text="Book Now" />
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="https://media.istockphoto.com/id/1287044692/photo/worker-washing-red-car-with-sponge-on-a-car-wash.jpg?s=612x612&w=0&k=20&c=_6WO9k1qkDub5CAEQgnORMduUoQJkU6w3jjVQTdTdwQ="
                    className=" transition duration-300 ease-in-out hover:scale-110"
                    alt="Louvre"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://c1.wallpaperflare.com/preview/41/63/655/cleaning-steam-smoke-pressure.jpg"
                  alt="mockup"
                />
              </CarouselItem>

              <CarouselItem>
                <img
                  src="https://c0.wallpaperflare.com/preview/805/514/429/car-wash-car-shampoo-shampoo-car-cleaning.jpg"
                  alt="mockup"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
