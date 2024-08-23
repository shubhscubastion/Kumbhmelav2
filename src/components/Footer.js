import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="section footer">
        <ul className="footer-links">

          {
            pageLinks.map((links)=>{
              const {id, href,text}=links
              return (
                <li key={id}>
                  <a href={href} className="footer-link">
                    {text}
                  </a>
                </li>
              );
            })
          }
        </ul>
        <ul className="footer-icons">

        {
          socialLinks.map((link)=>{
            const{id,href,iclassName}=link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={iclassName}></i>
                </a>
              </li>
            );
          })
        }  
        </ul>
        <p className="copyright">
          copyright &copy; Shubh Sarpal
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
}
export default Footer