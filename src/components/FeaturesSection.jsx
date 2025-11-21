  
  
 function FeaturesSection() {

  const Feature=[
  
{
   icon: "ti-ruler-pencil",
      title: "Pixel Perfect",
      text: "   Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
      delay: 400,
},
{
   icon: " ti-search",
      title: " Fully Responsive",
      text: "    Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident.",
      delay: 600,
},
{
   icon: " ti-paint-bucket",
      title: "  Web",
      text: "   Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. ",
      delay:800,
},

{
   icon: " ti-paint-bucket",
      title: " Digi",
      text: "     Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. ",
      delay: 1000,
}


  ]
   return (
    <div className="text-center mt-5 container-fluid pt-5 pb-5 p-5">
    <h1 data-aos="fade-up" data-aos-delay="200">Aesthetic Features</h1>
    <p data-aos="fade-up" data-aos-delay="300">
      Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus
      alias autem provident. Odit ab aliquam dolor eius.
    </p>

    <div className="row g-0 p-5">
      {Feature.map((item , index )=>( 
        
      <div className="col-12 col-md-6 col-lg-3" key={index} data-aos="fade-up"
  data-aos-delay={item.delay}>
        <div className="feature-center text-center p-4 text-black d-flex flex-column w-100">
          <div className="text-center">
            <span
              className="d-inline-flex align-items-center justify-content-center rounded-circle border border-2 border-gray mb-3 p-4">
              <i className={`fs-2 text-success ${item.icon}`}></i>
            </span>
            <h5>{item.title}</h5>
          </div>
          <p className="mb-0 d-flex align-items-center justify-content-center flex-grow-1 text-black-50 mb-5">
        {item.text}  </p>
        </div>
      </div>
))}
   
 
    </div>
  </div>

   )
 }
 
 export default FeaturesSection
 