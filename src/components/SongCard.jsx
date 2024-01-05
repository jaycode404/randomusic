import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard({ cancion }) {
  return (
    <Card className="mt-6 w-40 h-auto">
      <CardBody>
        <div
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Typography
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="p"
            color="blue-gray"
            className="mb-2"
          >
            {cancion.name}
          </Typography>
        </div>
        <img
          className="w-15"
          src={cancion.album.images[0].url}
          alt="track_picture"
        />
        <Typography  style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>
          {cancion.artists[0].name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm">buscar online</Button>
      </CardFooter>
    </Card>
  );
}
