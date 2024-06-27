import React from 'react'

const Services = () => {
  return (
    <section id="services" className="pb-12 pt-12 dark:bg-dark lg:pb-[30px] lg:pt-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-black sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There Are A Variety Of Services In Tours and Travels Sector That We Cater To, Few Of Them Are Highlighted Below.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-8 flex flex-wrap">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <SingleCard
              image="/force-urbania-travel-experience-wide-500px.jpg"
              CardTitle="Force Urbania 17 Seater"
              titleHref="/#"
              btnHref="/#"
              CardDescription="We Provide The Best In Class 17 Seater Force Urbania With Professional Drivers, To Make Your Travel A Luxury Experience."
              Button="View Details"
            />
            <SingleCard
              image="/force-urbania-corporate-banner-wide-500px.jpg"
              CardTitle="Car Rental With Drivers"
              titleHref="/#"
              btnHref="/#"
              CardDescription="We Provide All Other Cars On Rental Basis Like Toyota Innova & Swift DZire With Professional Drivers, Depending On Your Budget & Requirements."
              Button="View Details"
            />
            <SingleCard
              image="/force-urbania-tours-travels-wide-500px.jpg"
              CardTitle="Tours & Travels Packages"
              titleHref="/#"
              btnHref="/#"
              CardDescription="We Provide Tours & Travels Packages, Catering To Customers or Groups, Customised As Per Their Budget & Requirements."
              Button="View Details"
            />
            {/* <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Group Travels Packages"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="Airport PickUp & Drop Services"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Corporate Travels Packages"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
              Button="View Details"
            /> */}
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <>
        <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={titleHref ? titleHref : "/#"}
                className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
  
            {/* {Button && (
              <a
                href={btnHref ? btnHref : "#"}
                className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
              >
                {Button}
              </a>
            )} */}
          </div>
        </div>
      </>
    );
  };