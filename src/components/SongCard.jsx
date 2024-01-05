import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard({ cancion }) {
  const buscarOnline = () => {
    const nombreCancion = encodeURIComponent(cancion.name);
    const nombreArtista = encodeURIComponent(cancion.artists[0].name);
    const urlBusqueda = `https://google.com/search?q=${nombreCancion}+${nombreArtista}`;

    window.open(urlBusqueda, "_blank");
  };
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
        <Typography
          style={{
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {cancion.artists[0].name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={buscarOnline} size="sm">
          escuchar online
        </Button>
      </CardFooter>
    </Card>
  );
}
