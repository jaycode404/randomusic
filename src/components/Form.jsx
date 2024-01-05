import React, { useState } from "react";
import { Input, Typography } from "@material-tailwind/react";
import Example from "./Button";

export function Form({ searchSongs, form, setForm }) {
  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchSongs(form);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex-col space-y-5 w-[20rem] justify-start"
    >
      <Typography variant="h1" color="blue-gray">
        Cómo te sientes hoy?
      </Typography>
      <Input
        label="Feliz, triste, pensativo..."
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Example titulo="BUSCAR CANCIONES" />
    </form>
  );
}
