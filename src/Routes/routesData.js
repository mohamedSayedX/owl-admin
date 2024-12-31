import {
  BannerImage,
  BIcon,
  BlogIcon,
  CogIcon,
  TeamIcon,
  TestimonialsIcon,
  UsersIcon,
} from "../assets/SvgComponents";
import Add_Security_SolutionsPage from "../pages/Add_Security_SolutionsPage/Add_Security_SolutionsPage";
import AddBannerPage from "../pages/AddBannerPage/AddBannerPage";
import AddBrandPage from "../pages/AddBrandPage/AddBrandPage";
import AddFeatures_HomePage from "../pages/AddFeatures_HomePage/AddFeatures_HomePage";
import AddServiceSecurityPage from "../pages/AddServiceSecurityPage/AddServiceSecurityPage";
import AddTestiPage from "../pages/AddTestiPage/AddTestiPage";
import BannersPage from "../pages/BannersPage/BannersPage";
import BrandsPage from "../pages/BrandsPage/BrandsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OurSecurityExpertsPage from "../pages/OurSecurityExpertsPage/OurSecurityExpertsPage";
import TestimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
import HomePage from "./../pages/HomePage/HomaPage";
import AddSecurityExpertPage from "./../pages/AddSecurityExpertPage/AddSecurityExpertPage";

import {HomeOutlined} from "@ant-design/icons";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import AddBlogPage from "../pages/AddBlogPage/AddBlogPage";
import UsersListPage from "../pages/UsersListPage/UsersListPage";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
    name: "Home",
    icon: <HomeOutlined />,
    isList: false,
  },
  {
    path: "/login",
    component: <LoginPage />,
    name: "Login",
    isList: false,
    hidden: true,
  },

  {
    path: "/banners",
    component: <BannersPage />,
    name: "Banners",
    icon: <BannerImage width='20' />,
    isList: false,
  },
  {
    path: "/banners/add",
    component: <AddBannerPage />,
    name: "AddBannerPage",
    icon: <BannerImage width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/securty-solution/add",
    component: <Add_Security_SolutionsPage />,
    name: "Add Security Solutions",
    icon: <BannerImage width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/services-security/add",
    component: <AddServiceSecurityPage />,
    name: "Add Service Security",
    icon: <BannerImage width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/services-security/:id",
    component: <ServiceDetails />,
    name: "Srvice Details",
    icon: <BannerImage width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/features/add",
    component: <AddFeatures_HomePage />,
    name: "Add Features",
    icon: <BannerImage width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/testimonials",
    component: <TestimonialsPage />,
    name: "Testimonials",
    icon: <TestimonialsIcon width='20' />,
    isList: false,
  },
  {
    path: "/testimonials/add",
    component: <AddTestiPage />,
    name: "Add Testimonials",
    icon: <TestimonialsIcon width='20' />,
    isList: false,
    hidden: true,
  },
  {
    path: "/brands",
    component: <BrandsPage />,
    name: "Brands",
    icon: <BIcon width='20' />,
    isList: false,
  },
  {
    path: "/brands/add",
    component: <AddBrandPage />,
    name: "Add Brands",
    icon: <TestimonialsIcon width='20' />,
    isList: false,
    hidden: true,
  },
  // {
  //   path: "/security-experts/add",
  //   component: <AddSecurityExpertPage />,
  //   name: "Add Security Expert",
  //   icon: <TeamIcon width='20' />,
  //   isList: false,
  // },
  // {
  //   path: "/security-experts",
  //   component: <OurSecurityExpertsPage />,
  //   name: "Our Security Experts",
  //   icon: <TeamIcon width='20' />,
  //   isList: false,
  //   hidden: true,
  // },
  // {
  //   path: "/blogs",
  //   component: <BlogsPage />,
  //   name: "Blogs",
  //   icon: <BlogIcon width={20} />,
  //   isList: false,
  // },
  {
    path: "/blogs/add",
    component: <AddBlogPage />,
    name: "Blogs",
    icon: <BlogIcon width={20} />,
    isList: false,
    hidden: true,
  },
  {
    path: "users",
    component: <UsersListPage />,
    name: "Users",
    icon: <UsersIcon width={20} />,
    isList: false,
  },
  {
    path: "/settings",
    component: <SettingsPage />,
    name: "Settings",
    icon: <CogIcon width={20} />,
    isList: false,
  },
];
