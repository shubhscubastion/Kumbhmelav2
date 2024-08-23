import { pageLinks, socialLinks } from "../data";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">

          {
            socialLinks.map((sociallink)=>{
              return (
                <>
                  <li id={sociallink.id}>
                    <a
                      href={sociallink.href}
                      target= "_blank"
                      className="nav-icon"
                      rel="noreferrer"
                    >
                      <i className={sociallink.iclassName}></i>
                    </a>
                  </li>
                </>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}
