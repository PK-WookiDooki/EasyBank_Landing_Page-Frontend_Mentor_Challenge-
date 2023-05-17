// import React from "react";

import ArticleCard from "./ArticleCard";
import { Currency, Restaurant, Plane, Confetti } from "../../assets";
import { Element } from "react-scroll";

const Articles = () => {
  return (
    <Element name="blogs">
      <section className="bg-LGray py-20" id="blogs">
        <div className="w-full lg:w-[85%] mx-auto">
          <h2 className="text-3xl text-center lg:text-left">Latest Articles</h2>
          <div className="flex flex-col gap-5 lg:flex-row md:flex-row md:flex-wrap lg:flex-nowrap items-stretch mt-7 md:justify-center">
            <ArticleCard
              img={Currency}
              author={"By Claire Robinson"}
              title={"Receive money in any currency with no fees"}
              desc={
                "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
              }
            />
            <ArticleCard
              img={Restaurant}
              author={"By Wilson Hutton"}
              title={"Treat yourself without worrying about money"}
              desc={
                "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
              }
            />
            <ArticleCard
              img={Plane}
              author={"By Wilson Hutton"}
              title={"Take your Easybank card wherever you go"}
              desc={
                "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
              }
            />
            <ArticleCard
              img={Confetti}
              author={"By Claire Robinson"}
              title={"Our invite-only Beta accounts are now live!"}
              desc={
                "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
              }
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Articles;
