import { serviceText } from "../data";
import ServiceText from "./ServiceText";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceText.map((service) => {
          return (
            <ServiceText
              key={service.id} // Unique key for each service
              title={service.title} // Pass title
              iclassname={service.iclassName} // Pass icon class name
              para={service.para} // Pass paragraph text
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;