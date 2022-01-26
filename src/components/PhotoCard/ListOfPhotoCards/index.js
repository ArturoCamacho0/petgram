import React from "react";
import { PhotoCard } from "../";
import db from "../../../../api/db.json";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {db.photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  );
};
