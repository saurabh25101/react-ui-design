 import { Link } from "react-router-dom";
import PageHeader from "./aboutpages/components/PageHeader";
 

const Connect = () => {
  
  const formFields = [
    {
      label: "Your firstname",
      id: "firstname",
      type: "text",
      placeholder: "Enter your name",
      delay: 200,
    },
    {
      label: "Your email address",
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      delay: 300,
    },
    {
      label: "Your subject of this message",
      id: "subject",
      type: "text",
      placeholder: "Subject",
      delay: 400,
    },
    {
      label: "Message",
      id: "message",
      type: "textarea",
      placeholder: "Write your message here...",
      delay: 500,
    },
  ];

  
  const contactInfo = [
    {
      title: "Address",
      value: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    { title: "Phone", value: "+1235 2355 98" },
    { title: "Email", value: "info@yoursite.com" },
    {
      title: "Website",
      value: "gettemplates.co",
      link: "https://gettemplates.co",
    },
  ];

  return (
    <>
        <PageHeader title="GET IN TOUCH"/>
 
      <div className="container py-5">
        <div className="row">

         
          <div className="col-md-6">
            <h2 className="mb-4">Get In Touch</h2>

            <form>
              {formFields.map((field, index) => (
                <div
                  key={index}
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay={field.delay}
                >
                  <label htmlFor={field.id} className="form-label">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      className="form-control"
                      rows="5"
                      placeholder={field.placeholder}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      className="form-control"
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              <button type="submit" className="btn btn-success" data-aos="fade-up" data-aos-delay="600">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT CONTACT INFO SECTION */}
          <div className="col-md-6 gx-5 px-5">
            <h2 className="mb-4">Contact Information</h2>

            <ul className="list-unstyled">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="mb-2"
                  data-aos="fade-left"
                  data-aos-delay={200 + index * 100}
                >
                  <strong>{item.title}:</strong>{" "}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success text-decoration-none"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Connect;
