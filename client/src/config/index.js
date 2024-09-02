export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const passwordResetFormControls = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Current Password",
    name: "currentPassword",
    type: "password",
    placeholder: "Enter your current password",
    required: true,
  },
  {
    label: "New Password",
    name: "newPassword",
    type: "password",
    placeholder: "Enter your new password",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm new password",
    required: true,
  }
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "claybottle", label: "Clay bottle" },
      { id: "clayglass", label: "Clay glass" },
      { id: "clayutensils", label: "Clay utensils" },
      { id: "clayjug", label: "Clay jug" },
      { id: "waterpot", label: "Water pot" },
      { id: "tableplanter", label: "Table top planter" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sachii", label: "Terracotta by Sachii" },
      { id: "mitticool", label: "Mitticool" },
      { id: "indus", label: "Indus Valley" },
      { id: "maestros", label: "Craft Maestros" },
      { id: "craftindia", label: "Clay Craft India" },
      { id: "kumhargram", label: "Kumhargram" },
      { id: "ethnicindian", label: "The Indian Ethnic Co." },
      { id: "zishta", label: "Zishta" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "claybottle",
    label: "Bottle",
    path: "/shop/listing",
  },
  {
    id: "clayglass",
    label: "Glass",
    path: "/shop/listing",
  },
  {
    id: "clayutensils",
    label: "Utensils",
    path: "/shop/listing",
  },
  {
    id: "clayjug",
    label: "Jug",
    path: "/shop/listing",
  },
  {
    id: "waterpot",
    label: "Pot",
    path: "/shop/listing",
  },
  {
    id: "tableplanter",
    label: "Planter",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  claybottle: "Clay bottle",
  clayglass: "Clay glass",
  clayutensils: "Clay utensils",
  clayjug: "Clay jug",
  waterpot: "Water pot",
  tableplanter: "Table top planter"
};

export const brandOptionsMap = {
  sachii: "Terracotta by Sachii",
  mitticool: "Mitticool",
  indus: "Indus Valley",
  maestros: "Craft Maestros",
  craftindia: "Clay Craft India",
  kumhargram: "Kumhargram",
  ethnicindian: "The Indian Ethnic Co.",
  zishta: "Zishta"
};

export const filterOptions = {
  category: [
    { id: "claybottle", label: "Clay bottle" },
    { id: "clayglass", label: "Clay glass" },
    { id: "clayutensils", label: "Clay utensils" },
    { id: "clayjug", label: "Clay jug" },
    { id: "waterpot", label: "Water pot" },
    { id: "tableplanter", label: "Table top planter" },
  ],
  brand: [
    { id: "sachii", label: "Terracotta by Sachii" },
    { id: "mitticool", label: "Mitticool" },
    { id: "indus", label: "Indus Valley" },
    { id: "maestros", label: "Craft Maestros" },
    { id: "craftindia", label: "Clay Craft India" },
    { id: "kumhargram", label: "Kumhargram" },
    { id: "ethnicindian", label: "The Indian Ethnic Co." },
    { id: "zishta", label: "Zishta" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
