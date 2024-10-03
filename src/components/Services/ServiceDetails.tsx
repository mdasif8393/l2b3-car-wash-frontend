import { useGetSingleServiceQuery } from "@/redux/features/services/servicesAPi";

import { useGetAvailableSlotsQuery } from "@/redux/features/slot/slotApi";
import moment from "moment";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const ServiceDetails = () => {
  let query: any = {};
  const { serviceId } = useParams();

  if (serviceId) {
    query = {
      ...query,
      serviceId: serviceId,
    };
  }

  const [selected, setSelected] = useState<Date>();
  const formateDate = moment(selected).format().toString().split("T")[0];

  if (formateDate) {
    query = {
      ...query,
      date: formateDate,
    };
  }

  const { data: service } = useGetSingleServiceQuery(serviceId);

  const { data: slots } = useGetAvailableSlotsQuery(query);

  const { register, handleSubmit, reset } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log({
      service: serviceId,
      ...data,
      manufacturingYear: Number(data.manufacturingYear),
    });
  };
  return (
    <div className="my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-1 px-6">
      <div className="basis-1/4">
        {/* <img
          className="object-contain max-w-lg"
          src={data?.data?.image}
          alt=""
        /> */}
      </div>
      <Card className="basis-2/4">
        <CardHeader>
          <CardTitle>{service?.data?.name}</CardTitle>
          <CardDescription>{service?.data?.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Category: {service?.data?.category}</p>
        </CardContent>
        <CardContent>
          <p>
            Price:{" "}
            <span className="text-gray-900 font-semibold">
              TK {service?.data?.price}
            </span>
          </p>
        </CardContent>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
            {/* for time slot */}
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a time slot for booking
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("slot", { required: true })}
            >
              {/* <option value="female">female</option> */}

              {slots &&
                slots?.data?.map((slot: any) => (
                  <option
                    value={slot?._id}
                    disabled={slot?.isBooked === "booked"}
                  >{`${slot?.startTime} - ${slot?.endTime}`}</option>
                ))}

              {/* <option value="female">female</option> */}
            </select>
            {/* for vehicle type */}
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a time vehicle type
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vehicleType")}
            >
              <option value="car">Car</option>
              <option value="sedan">Sedan</option>
              <option value="wagon">Wagon</option>
              <option value="van">Van</option>
              <option value="caravan">Caravan</option>
            </select>

            {/* vehicle brand */}
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a time vehicle brand
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vehicleBrand")}
            >
              <option value="toyota">Toyota</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
            </select>

            {/* vehicle model */}
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a time vehicle model
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vehicleModel")}
            >
              <option value="camry">Camry</option>
              <option value="fortuner">Fortuner</option>
              <option value="prius">Prius</option>
              <option value="highlander">Highlander</option>
              <option value="sienna">Sienna</option>
            </select>

            {/* vehicle manufacturing year */}
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a vehicle manufacturing year
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("manufacturingYear")}
            >
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              vehicle registration plate
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("registrationPlate", { required: true })}
            />

            <br />
            <Button type="submit">Book {service?.data?.name}</Button>
          </form>
        </CardContent>
      </Card>
      <div className="basis-1/4">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={{ before: new Date() }}
          footer={
            selected
              ? `Selected slots of: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
