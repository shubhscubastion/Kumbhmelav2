import Title from "./Title";
import { tentData } from "../data";
const Tents = () => {
  return (
    <section className="section" id="tents">
      <Title title="featured" subTitle="tents" />

      <div className="section-center featured-center">
        {tentData.map((tents) => {
          const { id, image, date, title, para, location, duration, cost } =
            tents;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                  {para}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{duration}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
        })}
      </div>
    </section>
  );
};
export default Tents;
