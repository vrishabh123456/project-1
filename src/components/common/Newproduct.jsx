import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import React from "react";

function Newproduct({ imageUrl, title, price, description }) {
  return (
    <Card className="shadow-none flex w-full h-full">
      <CardBody className="flex">
        <img
          src={imageUrl}
          alt="card-image"
          className="h-[200px] object-cover"
        />
        <div className="flex flex-col  justify-center">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="gray" className="font-medium">
              <>{title}</>
            </Typography>
          </div>
          <Typography
            variant="small"
            color="black"
            className="font-medium py-2"
          >
            <>{description}</>
          </Typography>
          <Typography color="red" className="font-bold text-xl py-2">
            <>{price}</>
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default Newproduct;
