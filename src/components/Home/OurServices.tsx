import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const OurServices = () => {
  return (
    <Carousel className="mt-20 w-fit grid sm:grid-cols-1">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 hover:shadow-2xl">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2024/04/01/Carwash-cabf439dbe62543aa286043e68c491d8.jpg?jadewits_media_id=17950"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center ">
              Car Wash
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"></div>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://media.istockphoto.com/id/1325588832/photo/pouring-motor-oil-for-motor-vehicles-from-a-gray-bottle-into-the-engine.jpg?s=612x612&w=0&k=20&c=8El-cOoOpGSDz-dOjozJn5ijlFOuE1WGQA1hsZvyyMk="
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
              Engine Oil Change
            </h3>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://allmakescollision.ca/wp-content/uploads/2022/04/heveAdeZhFtnsUOwTf1tUf08fFeRMxMTRuX3IqlD.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
              Tire Rotation
            </h3>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://www.shutterstock.com/image-photo/photo-car-dent-repair-before-600nw-2270526711.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
              Repair Dent
            </h3>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://cfx-wp-images.imgix.net/2021/12/Car-Paint-Protection.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=530410d30204e99a6f42864be8b0206e"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
              Paint & Polish
            </h3>
          </article>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
            <img
              src="https://www.shutterstock.com/image-photo/repairman-holding-monitor-tool-check-600nw-2279387293.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-fit w-fit object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white text-center">
              Ac Servicing
            </h3>
          </article>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default OurServices;
