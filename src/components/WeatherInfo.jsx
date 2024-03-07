import React from "react";
import { WbSunny, Cloud, CloudOff, BeachAccess } from "@mui/icons-material";
import "../assets/styles.css";

const WeatherInfo = ({ weather }) => {
  const { main, weather: weatherDetails } = weather;
  const temperature = Math.floor(main.temp);
  const description = weatherDetails[0].description;
  const weatherIcon = weatherDetails[0].icon;
  const isSunny =
    description.toLowerCase().includes("clear") ||
    description.toLowerCase().includes("sunny");
  const isCloudy = description.toLowerCase().includes("cloud");
  const isRainy = description.toLowerCase().includes("rain");
  const isSuitableForTender = temperature > 15 && !isRainy;
  const tenderAdvice = isSuitableForTender
    ? "¡Podes secar la ropa afuera reina 👑!"
    : "Espera, mejor seca la ropa adentro que esta rari 😥";

  return (
    <div className='container'>
      <p className='text'>Temperatura: {temperature}°C</p>
      <p className='text'>Descripción: {description}</p>
      <div className='icon-container'>
        {isSunny && <WbSunny fontSize='large' />}
        {isCloudy && <Cloud fontSize='large' />}
        {isRainy && <CloudOff fontSize='large' />}
        {!isSuitableForTender && <BeachAccess fontSize='large' />}
      </div>
      <p className='text'>{tenderAdvice}</p>
    </div>
  );
};

export default WeatherInfo;
