import { useGetAllServicesQuery } from "@/redux/features/services/servicesAPi";
import { TService } from "@/types/types";
import Spinner from "@/utils/Spinner";
import Service from "./Service";

const Services = () => {
  const { data: services, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex flex-row mt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {services?.data.map((service: TService) => (
            <Service service={service} key={service._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
