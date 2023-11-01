import React from 'react';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";

export const App = () => {
  async function getLuckyNumber() {
    const response = await fetch(`${import.meta.env.VITE_SIMPLE_REST_URL}lucky/number`);
    return await response.json();
  }

  React.useEffect(() => {
    getLuckyNumber().then(
        (luckyNumber) => {
          console.log(luckyNumber);
        }
    );
  }, [])

  return (
      <Admin dataProvider={dataProvider}></Admin>
  )
}
