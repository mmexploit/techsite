"use client";

import { Button } from "@mantine/core";

export const ServiceCard = ({ title, svg, size }: any) => {
  return (
    <div className="shadow-xl p-5 md:w-[29dvw] cursor-pointer mb-2 rounded flex flex-col justify-between">
      <img src={svg} alt="Web Development" width={size} className="mx-auto" />
      <h1 className="text-center font-semibold text-lg">{title} </h1>
      <p className="text-center m-2 text-slate-600">
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <Button fullWidth variant="outline" className="text-center">
        More
      </Button>
    </div>
  );
};
