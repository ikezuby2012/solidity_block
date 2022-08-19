import React from "react";

function Articles({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
  btn_description,
}) {
  return (
    <section className="flex flex-col justify-center items-center shadow rounded-lg h-[210px] mb-4 md:w-[400px] md:h-[275px]">
      <article className="text-center md:text-left md:mr-[80px]">
        <h1 className="text-xl font-bold md:leading-7 md:mb-4 md:text-3xl">
          {heading1} <br className="hidden md:block" /> {heading2}
        </h1>
        <p className="text-sm md:text-xl leading-4 md:leading-[23.44px] mt-2 ">
          {paragraph1} <br /> {paragraph2} <br /> {paragraph3}
        </p>

        <button className="bg-[#008BFF] text-white text-md text-center border-2 border-[#008BFF] rounded-md w-[171px] h-[46px] mt-4 md:text-xl">
          {btn_description}
        </button>
      </article>
    </section>
  );
}

export default Articles;
