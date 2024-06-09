
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPages from "./pages/JobsPages";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage,{jobLoader} from "./pages/JobPage";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPages/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
  // return (
  //   <>
  //     <Navbar />
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs />

  //   </>
  // );
};

export default App;
