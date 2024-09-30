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
  CardFooter,
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

  console.log(slots);

  const filteredSlot = slots?.data.filter(
    (slot: any) => slot.service._id === serviceId
  );

  // console.log(filteredSlot);

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    // console.log("time slots", data);
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
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select a time slot for booking
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("gender")}
            >
              {/* <option value="female">female</option> */}

              {filteredSlot &&
                filteredSlot.map((slot: any) => (
                  <option
                    value={slot?._id}
                    disabled={slot?.isBooked === "booked"}
                  >{`${slot?.startTime} - ${slot?.endTime}`}</option>
                ))}

              {/* <option value="female">female</option> */}
            </select>
            <br />
            <Button type="submit">Book {service?.data?.name}</Button>
          </form>

          {/* <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form> */}
        </CardContent>
        <CardFooter>
          <Button
          // disabled={
          //   cartProduct && cartProduct?.quantity >= cartProduct?.stockQuantity
          // }
          // onClick={() => {
          //   dispatch(addToCart(data?.data));
          //   toast.success("product is added to cart");
          // }}
          >
            add to cart
          </Button>
        </CardFooter>
      </Card>
      <div className="basis-1/4">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={
            selected
              ? `Selected: ${selected.toLocaleDateString()}`
              : "Pick a day."
          }
        />
      </div>
    </div>
  );
};

export default ServiceDetails;
