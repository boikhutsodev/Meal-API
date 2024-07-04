import axios from "axios";
import { useEffect, useState } from "react";

function MealMain() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealbd.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meal);
      })
      .catch((err) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <section className="card"></section>
    </>
  );
}

export default MealMain;
