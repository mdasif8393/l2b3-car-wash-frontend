import { Link } from "react-router-dom";

const FeaturedServices = () => {
  return (
    <div className="my-8 mt-24 mb-24">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-8">
        Features Products
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://carboy.com.bd/static/images/denting_painting/car%20denting%20painting.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Repair Dent
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center offers professional tire denting repair services to
              restore the shape and performance of your tires. Our skilled
              technicians carefully assess and fix dents to ensure your tires
              maintain proper balance and safety. Count on us to enhance your
              driving experience by keeping your tires in top condition.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://www.expondo.co.uk/inspirations/wp-content/uploads/2021/08/car-painting.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Paint & Polish
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center provides premium tire painting services to give
              your vehicle a unique and stylish look. Using durable,
              high-quality paint, we customize your tires to match your personal
              style. Whether you want a sleek black finish or vibrant colors,
              our expert technicians ensure a flawless, long-lasting result.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://t3.ftcdn.net/jpg/05/81/43/18/360_F_581431869_tfNgrdx11WdyUtayqpA9aZlzcy6Fh0Gb.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Ac Servicing
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center offers comprehensive AC servicing to keep your
              vehicle’s air conditioning system running efficiently. We inspect,
              clean, and recharge your AC, ensuring optimal cooling and comfort.
              Our experienced technicians address any issues promptly, so you
              can enjoy a refreshing drive, no matter how hot it gets outside.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://static.wixstatic.com/media/11062b_42151c8a025e489ca2d30f6bd1f4bf09~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_42151c8a025e489ca2d30f6bd1f4bf09~mv2.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Car Wash
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center offers premium car wash services to keep your
              vehicle looking spotless. We use eco-friendly products and expert
              techniques for a thorough clean, including exterior washing,
              waxing, and interior detailing. Trust us to give your car a fresh,
              polished appearance every time you visit.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52"
              src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/06/22123028/car-oil-change-Cover-20220622.jpg"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Engine Oil Change
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center offers professional engine oil change services,
              using top-quality oils and filters to ensure your vehicle’s
              performance and longevity. Our skilled technicians also conduct a
              complimentary inspection to keep your car in peak condition.
              Experience fast, reliable service that keeps your engine running
              smoothly.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-2xl">
          <a href="#">
            <img
              className="p-2 rounded-t-lg h-52 w-full"
              src="https://di-uploads-pod10.dealerinspire.com/landroverparamusspanish/uploads/2020/04/tire-change.png"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Tire Rotation
            </h5>
            <p className="text-sm tracking-tight text-gray-900 dark:text-white mt-2">
              Our car center provides expert tire rotation services to extend
              the life of your tires and ensure even wear. Regular tire
              rotations improve handling, enhance safety, and promote better
              fuel efficiency. Trust our skilled technicians to keep your tires
              in optimal condition, ensuring a smoother and safer ride.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link to="/services" className="inline-flex">
            <span className="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              See All Services
            </span>
            <span className="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              <svg
                className="h-3 w-3 svg-inline--fa fa-chevron-right fa-w-8 fa-9x"
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
