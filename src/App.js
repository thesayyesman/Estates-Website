import "./App.css";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Buy } from "./Components/Buy";
import { Sell } from "./Components/Sell";
import { Lease } from "./Components/Lease";
import { Team } from "./Components/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const team = [
    {
      image:
        "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQafbtBN4i4vB5Gk9hhrlALaJqPpzQbh90Fe_6nPXv-HI_D8fwBI-MYHFT7FPRg7fA9LXZOxT--VsRHNp1SuiwxzFSOknGxEm1cns8sp8t9eBe6Hkw0tcoLeuDFLj8ouSdaf_3_9FPkOypWx5igMe3e136NE.jpg?r=2da",
    },
    {
      image:
        "https://thearchitectsdiary.com/wp-content/uploads/2020/06/Property-.jpg",
    },
  ];

  let initProperty;
  if (localStorage.getItem("properties") === null) {
    initProperty = [
      {
        image:
          "https://p4.wallpaperbetter.com/wallpaper/395/204/905/house-mansion-architecture-modern-lights-hd-wallpaper-preview.jpg",
        title: "69, Silicon Valley",
        price: "18,000,000",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HOJrxRzmurvvjDQ5txfBeM_a_rlWmagvVidN8LFIFu3LCTm6BcZIu3EjbNsFbRr7r70&usqp=CAU",
        title: "The Godfather",
        price: "8,700,000",
      },
      {
        image:
          "https://i.pinimg.com/originals/67/73/f4/6773f42e0a7f0800a7cbfcc7d5ce1eb7.jpg",
        title: "The Alpanian Retreat",
        price: "9,500,000",
      },
      {
        image:
          "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        title: "The française Desire",
        price: "15,000,000",
      },
      {
        image:
          "https://static.vecteezy.com/system/resources/previews/023/309/768/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-free-photo.jpg",
        title: "Wellington Gardens",
        price: "8,700,000",
      },
      {
        image:
          "https://hips.hearstapps.com/hmg-prod/images/mansions-turned-hotels-glenmere-1494258691.jpg?crop=1xw:0.8886255924170616xh;center,top&resize=1200:*",
        title: "Sicilian Heaven",
        price: "10,500,000",
      },
      {
        image:
          "https://imageio.forbes.com/blogs-images/candaceevans/files/2018/08/1000-Hollow-Way-Drive-2018-front.jpg?height=443&width=711&fit=boundsa ",
        title: "The Palace",
        price: "19,000,000",
      },
    ];
  } else {
    initProperty = JSON.parse(localStorage.getItem("properties"));
  }

  const addProperty = (image, title, price) => {
    console.log("Property added with", image, title, price);
    const newProperty = {
      image: image,
      title: title,
      price: price,
    };

    setProperties([...properties, newProperty]);
    console.log(newProperty);
  };

  const onDelete = (propertyNumber) => {
    console.log("Deleting...", propertyNumber);
    console.log(properties[propertyNumber]);

    setProperties(
      properties.filter((prope) => {
        return prope !== properties[propertyNumber];
      })
    );
  };

  const [properties, setProperties] = useState(initProperty);
  console.log(typeof properties);

  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
  }, [properties]);

  return (
    <div className="App">
      <Router>
        <Header />
        {/* <b>
        <p align="center">Hello World !</p>
      </b> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/buy"
            element={<Buy properties={properties} onDelete={onDelete} />}
          />
          <Route
            exact
            path="/sell"
            element={<Sell addProperty={addProperty} />}
          />
          <Route exact path="/lease" element={<Lease />} />
          <Route exact path="/team" element={<Team team={team} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// [
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HOJrxRzmurvvjDQ5txfBeM_a_rlWmagvVidN8LFIFu3LCTm6BcZIu3EjbNsFbRr7r70&usqp=CAU",
//     title: "The Godfather",
//     price: "8,700,000",
//   },
//   {
//     image:
//       "https://thearchitectsdiary.com/wp-content/uploads/2020/06/Property-.jpg",
//     title: "69, Silicon Valley",
//     price: "3,200,000",
//   },
//   {
//     image:
//       "https://images.moneycontrol.com/static-mcnews/2021/12/Housing-trends-4-718x435.jpg",
//     title: "3,Marine Drive",
//     price: "4,400,000",
//   },
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XEDOWReXWBjziJ3QGtTkshVXdChKqj0CgA&usqp=CAU",
//     title: "The One",
//     price: "3,400,000",
//   },
//   {
//     image:
//       "https://robbreport.com/wp-content/uploads/2022/07/AS_Godfather-Airbnb-04-Exterior-House-Pool-Credit-Marc-McAndrews.jpg",
//     title: "Course the Golf",
//     price: "6,320,000",
//   },
//   {
//     image:
//       "https://i.pinimg.com/originals/24/e8/f0/24e8f08ba83e34213572acbdb1061bf0.jpg",
//     title: "The Ristorante",
//     price: "5,500,000",
//   },
// ];
