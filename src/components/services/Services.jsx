import Card from "./Card";
import { Budget, OnBoard, Online, Api } from "../../assets";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Element name="services">
      <section id="services" className="mt-24 lg:-mt-24 py-20 bg-gray-200">
        <div className="w-full lg:w-[85%] mx-auto text-center lg:text-left">
          <div className="mb-10">
            <h2 className="text-3xl w-[60%] mx-auto lg:ms-0">
              Why choose Easybank?
            </h2>
            <p className="text-gray-400 w-[70%] mx-auto lg:ms-0 mt-2">
              {" "}
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-nowrap md:flex-row md:flex-wrap md:justify-center gap-5">
            <Card
              title={"Online Banking"}
              desc={
                "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
              }
              icon={Online}
            />
            <Card
              title={"Simple Budgeting"}
              desc={
                "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
              }
              icon={Budget}
            />
            <Card
              title={"Fast Onboarding"}
              desc={
                " We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
              }
              icon={OnBoard}
            />
            <Card
              title={"  Open API"}
              desc={
                "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
              }
              icon={Api}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Services;
