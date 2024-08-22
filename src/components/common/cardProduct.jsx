import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function EcommerceCard({
  imageUrl,
  title,
  price,
  description,
  buttonText,
}) {
  return (
    <Card className="shadow-none">
      <CardHeader shadow={false} floated={false} className="h-48 shadow-none">
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <div color="gray" className="font-medium">
            {title}
          </div>
        </div>
        <div variant="small" color="black" className="font-medium">
          {description}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <div color="red" className="font-bold text-xl">
          {price}
        </div>
      </CardFooter>
    </Card>
  );
}
