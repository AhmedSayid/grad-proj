import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assest/css/bootstrap.min.css"
import "./App.css"
//////////////////////////////////////////
import Home from './pages/Home';
import Dog from "./pages/pets/dog";
import Cat from './pages/pets/cat';
import Bird from './pages/pets/bird'; 
import Fish from './pages/pets/fish';
//////////////////////////////////////////
import Vets from './pages/sidbar/Vet';
import Shop from './pages/sidbar/Shop';
//////////////////////////////////////////
import Dogaccessories from './pages/sidbar/dog/accessories'
import Dogbeds from './pages/sidbar/dog/Beds';
import DogFlea from './pages/sidbar/dog/flea & ticks';
import Dogfood from './pages/sidbar/dog/Food';
import DogGrooming from './pages/sidbar/dog/grooming';
import DogPharmacy from './pages/sidbar/dog/Pharmacy & vitamins';
import DogToys from './pages/sidbar/dog/toys';
import DogTreats from './pages/sidbar/dog/treats & biscuits';
import DogWet from './pages/sidbar/dog/wet food';
//////////////////////////////////////////
import Cataccessories from './pages/sidbar/cat/accessories'
import Catbeds from './pages/sidbar/cat/Beds';
import CatFlea from './pages/sidbar/cat/flea & ticks';
import Catfood from './pages/sidbar/cat/Food';
import CatGrooming from './pages/sidbar/cat/grooming';
import CatPharmacy from './pages/sidbar/cat/Pharmacy & vitamins';
import CatToys from './pages/sidbar/cat/toys';
import CatTreats from './pages/sidbar/cat/treats & biscuits';
import CatWet from './pages/sidbar/cat/wet food';
//////////////////////////////////////////
import FishAccessories from './pages/sidbar/fish/accessories';
import Fishfood from './pages/sidbar/fish/Food';
//////////////////////////////////////////
import BirdAccessories from './pages/sidbar/bird/accessories';
import Birdfood from './pages/sidbar/bird/Food';
import BirdPharmacy from './pages/sidbar/bird/Pharmacy & vitamins';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // pets products
  {
    path: "/dogs-products",
    element: <Dog />,
  },
  {
    path: "/cats-products",
    element: <Cat />,
  },
    {
    path: "/fish-products",
    element: <Fish />,
  },
    {
    path: "/bird-products",
    element: <Bird />,
  },


  // side bar dog
  {
    path: "/dog-accessories",
    element: <Dogaccessories />,
  },
  {
    path: "/dog-beds",
    element: <Dogbeds />,
  },
    {
    path: "/dog-flea",
    element: <DogFlea />,
  },
    {
    path: "/dog-food",
    element: <Dogfood />,
  },
  {
    path: "/dog-grooming",
    element: <DogGrooming />,
  },
  {
    path: "/dog-pharmacy",
    element: <DogPharmacy />,
  },
    {
    path: "/dog-toys",
    element: <DogToys />,
  },
    {
    path: "/dog-treats",
    element: <DogTreats />,
  },
  {
    path: "/dog-wetFood",
    element: <DogWet />,
  },

    // side bar cat
    {
      path: "/cat-accessories",
      element: <Cataccessories />,
    },
    {
      path: "/cat-beds",
      element: <Catbeds />,
    },
      {
      path: "/cat-flea",
      element: <CatFlea />,
    },
      {
      path: "/cat-food",
      element: <Catfood />,
    },
    {
      path: "/cat-grooming",
      element: <CatGrooming />,
    },
    {
      path: "/cat-pharmacy",
      element: <CatPharmacy />,
    },
      {
      path: "/cat-toys",
      element: <CatToys />,
    },
      {
      path: "/cat-treats",
      element: <CatTreats />,
    },
    {
      path: "/cat-wetFood",
      element: <CatWet />,
    },
    // side bar fish
    {
      path: "/fish-accessories",
      element: <FishAccessories />,
    },
    {
      path: "/fish-food",
      element: <Fishfood />,
    },

    // side bar bird
    {
      path: "/bird-accessories",
      element: <BirdAccessories />,
    },
    {
      path: "/bird-food",
      element: <Birdfood />,
    },
      {
      path: "/bird-pharmacy",
      element: <BirdPharmacy />,
    },
  // side bar place
  {
    path: "/vets",
    element: <Vets />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

