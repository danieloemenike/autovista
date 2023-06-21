// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1, 
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the future of driving with the Tesla Malibu. This electric luxury sedan combines cutting-edge technology, sleek design, and impressive performance",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 150000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Unleash your inner thrill-seeker with the Toyota Aventador. This powerful sports car boasts a striking appearance, exhilarating speed, and unmatched performance.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 60000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Enjoy the perfect blend of luxury and versatility with the BMW X3. This premium SUV offers spaciousness, advanced features, and a smooth driving experience, making it ideal for both urban adventures and long trips.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Embrace the excitement of the Nissan Mercielago. This stylish and sporty coupe delivers a thrilling ride, precise handling, and head-turning looks",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 200000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Get behind the wheel of the Ferrari Camry and experience pure luxury and performance. This iconic sports car offers unmatched speed, elegance, and a legendary driving experience.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 80000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Indulge in the luxurious comfort of the Mercedes Benz XC90. This premium SUV combines sophistication, safety features, and a spacious interior, ensuring a smooth and refined journey.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 40000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Experience the perfect combination of style and agility with the Audi Fiesta. This compact and sporty hatchback offers dynamic performance, advanced technology, and a comfortable ride. ",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 300000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "  Immerse yourself in opulence and prestige with the Rolls Royce Colorado. This luxury sedan exudes elegance, craftsmanship, and unparalleled comfort, making every journey a memorable one.",
  },
];

export default carData;
