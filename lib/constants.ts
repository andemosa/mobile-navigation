const navigationFn = () => [
  { title: "Home", url: "/home" },
  {
    title: "Products",
    children: [
      {
        title: "Men",
        url: "/products/men",
      },
      {
        title: "Women",
        url: "/products/women",
      },
      {
        title: "Electronics",
        children: [
          {
            title: "Phones",
            url: "/products/electronics/phones",
          },
          {
            title: "Laptops",
            url: "/products/electronics/laptops",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    children: [
      {
        title: "Same Day Delivery",
        url: "/services/same-day-delivery",
      },
      {
        title: "Customized Services",
        url: "/services/customized-services",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const navigation = navigationFn();

export type NavigationType = ReturnType<typeof navigationFn>;

