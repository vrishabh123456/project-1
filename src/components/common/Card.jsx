import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Card1({
  imageUrl,
  category,
  title,
  price,
  oldPrice,
  days,
  hours,
  minutes,
  seconds,
}) {
  return (
    <Card className="w-full max-w-[48rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {category}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          ${price} <span className="line-through">${oldPrice}</span>
        </Typography>
        <a href="#" className="inline-block">
          <div className="flex gap-4 ">
            <Button className="gap-2 bg-blue-500">
              {days}
              <p className="">Days</p>
            </Button>
            <Button className="gap-2 bg-blue-500">
              {hours}
              <p className="">Hours</p>
            </Button>
            <Button className="gap-2 bg-blue-500">
              {minutes}
              <p className="">Mins</p>
            </Button>
            <Button className="gap-2 bg-blue-500">
              {seconds}
              <p className="">Sec</p>
            </Button>
          </div>
        </a>
      </CardBody>
    </Card>
  );
}
