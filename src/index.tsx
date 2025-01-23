import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from "react-router-dom";


import NewsScreen from './screens/NewsScreen';
import NewScreen from './screens/NewScreen';
import PreventionScreen from './screens/PreventionScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import ContactsScreen from './screens/ContactsScreen';
import HomeScreen from './screens/HomeScreen';
import ReadScreen from './screens/ReadScreen';
import ReadsScreen from './screens/ReadsScreen';
import PdfScreen from './screens/PdfScreen';

import Loader from './components/Loader';

import AboutScreen from './screens/AboutScreen';

import Vacancies from './screens/Vacancies';
import Patient from './screens/Patient';
import ListPDF from './screens/ListPDF';

import StructureScreen from './screens/StructureScreen';
import ReviewsScreen from './screens/ReviewsScreen';

import WorkerScreen from "./screens/WorkerScreen";
import Personnel from "./screens/Personnel";
import Blank from "./screens/Blank";

import InfoScreen from "./screens/InfoScreen";
import GeneratePage from "./screens/GeneratePage";
import AddInfo from "./Admin/AddInfo";
import AddVacancy from "./Admin/AddVacancy";
import Addservices from "./Admin/Addservices";
import Admin from "./Admin/Admin";
import Createcontent from "./Admin/Createcontent";
import EditorPDF from "./Admin/EditorPDF";
import NotFound from "./Admin/NotFound";
import Personal from "./Admin/Personal";
import AntiTerrorMaterial from "./screens/AntiTerrorMaterial";
import AntiTerrorVideo from "./screens/AntiTerrorVideo";




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

function Grade() {
  useEffect(() => {
    window.open('https://anketa.rosminzdrav.ru/staticmojustank/1067#reviews');
    window.history.back();
  }, []);
  return null
}

function PDF() {
  useEffect(() => {
    var win = window.location.pathname
    window.open(win, '_blank');
    window.history.back();


  }, []);
  return <PdfScreen />
};
function Redirect() {
  return redirect("/")
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "news",
        element: <ReadsScreen />,
      },
      {
        path: "prevention",
        element: <ReadsScreen />,
      },
      {
        path: "attendance/:IDattendance",
        element: <AttendanceScreen />,
      },

      {
        path: "contact",
        element: <ContactsScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
      {
        path: "",
        element: <HomeScreen />,
      },
      {
        path: "readnews/:ID",
        element: <ReadScreen />,
      },
      {
        path: "readprevention/:ID",
        element: <ReadScreen />,
      },
      {
        path: "extraordinary",
        element: <ListPDF />,
      },
      {
        path: "vacancies",
        element: <Vacancies />,
      },
      {
        path: "specialists",
        element: <ListPDF />,
      },

      {
        path: "working-mode",
        element: <InfoScreen />,
      },
      {
        path: "terms",
        element: <InfoScreen />,
      },
      {
        path: "obligations",
        element: <ListPDF />,
      },
      {
        path: "admission",
        element: <InfoScreen />,
      },
      {
        path: "regulations",
        element: <InfoScreen />,
      },
      {
        path: "licenses",
        element: <ListPDF />,
      },
      {
        path: "documents",
        element: <ListPDF />,
      },

      {
        path: "correction-plan",
        element: <ListPDF />,
      },
      {
        path: "anticorruption",
        element: <ListPDF />,
      },
      //
      // {
      //   path: "specialists/report",
      //   element: <Download />,
      // },
      {
        path: "patient",
        element: <Patient />,
      },
      {
        path: "structure/polyclinic",
        element: <StructureScreen />,
      },
      {
        path: "structure/separation",
        element: <StructureScreen />,
      },
      {
        path: "structure/polyclinic/:branch",
        element: <Personnel />,
      },
      {
        path: "structure/separation/:branch",
        element: <Personnel />,
      },
      {
        path: "structure/administration/:branch",
        element: <Personnel />,
      },
      {
        path: "structure/polyclinic/:branch/:IDperson",
        element: <Blank />,
      },
      {
        path: "structure/separation/:branch/:IDperson",
        element: <Blank />,
      },
      {
        path: "structure/administration/:branch/:IDperson",
        element: <Blank />,
      },
      {
        path: "reviews",
        element: <ReviewsScreen />,
      },
      {
        path: "grade",
        element: <Grade />,
      },
      {
        path: "guarantees",
        element: <ListPDF />,
      },
      {
        path: "worker",
        element: <WorkerScreen />,
      },
      {
        path: "page/:IDpage",
        element: <GeneratePage />,
      },
      {
        path: "antiterror/material",
        element: <AntiTerrorMaterial />,
      },
      {
        path: "antiterror/video",
        element: <AntiTerrorVideo />,
      },

    ],
  },
  {
    path: "Pdf/:IDpdf",
    element: <PdfScreen />,
  },
  {
    path: "/Super",
    element: <Admin />,
    children: [
      {
        path: "createnews",
        element: <Createcontent />,
      },
      {
        path: "editorpdf",
        element: <EditorPDF />,
      },
      {
        path: "separation",
        element: <Personal />,
      },
      {
        path: "services",
        element: <Addservices />,
      },
      {
        path: "info",
        element: <AddInfo />,
      },
      {
        path: "vacancy",
        element: <AddVacancy />,
      },


    ]
  },
  // {
  //   path: "*",
  //   element:  <NotFound />,
  // },


  // {
  //   path: "*",
  //   element:  <NotFound />,
  // },

]);

root.render(

  <RouterProvider
    router={router}
    fallbackElement={<Loader />}
  />


);
