import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-center text-4xl font-semibold underline mt-8 text-red-500 drop-shadow-md">
      {title}
    </h2>
  );
};

export default Title;
