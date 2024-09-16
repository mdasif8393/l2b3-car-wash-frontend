import { useGetSingleServiceQuery } from "@/redux/features/services/servicesAPi";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { data: service } = useGetSingleServiceQuery(serviceId);
  console.log(service);
  return (
    <div>
      <h1>Service details: {serviceId}</h1>
    </div>
  );
};

export default ServiceDetails;
