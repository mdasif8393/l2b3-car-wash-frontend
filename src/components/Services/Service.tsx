import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Service = (service: any) => {
  console.log(service);
  return (
    <Link to={`/service/${service?.service?._id}`}>
      <Card className=" hover:shadow-2xl relative overflow-hidden bg-no-repeat m-1">
        <CardHeader>
          <CardTitle>{service?.service?.name.slice(0, 20)}</CardTitle>
          <CardDescription>
            {service.service.description.slice(0, 80)} <br />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <small className="text-red-800">
            Take {service?.service?.duration} minutes
          </small>
          <CardContent></CardContent>

          <p className=" text-red-800">
            ${" "}
            <span className="font-semibold text-red-800">
              {service.service.price}
            </span>
          </p>
        </CardContent>

        <CardFooter>
          <Button className="w-2/4">
            <Link to={`/service/${service?.service?._id}`}>Book Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Service;
