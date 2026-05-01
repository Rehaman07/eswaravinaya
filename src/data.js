import breakfastImg from "../02.jpg";
import mealsImg from "../meals-optimized.jpg";
import snacksImg from "../05.jpg";
import sweetsImg from "../03.jpg";

export const mapLink = "https://maps.app.goo.gl/5rXA2vWtoVb3f6Bf6";
export const phoneNumber = "+91998969618";
export const displayPhone = "+91 99896 9618";

export const signatureDishes = [
  {
    name: "Ghee Karam Dosa",
    description: "Crisp golden dosa finished with house karam podi, ghee and fresh chutneys.",
    price: "₹89",
    tag: "🔥 Popular",
    image: breakfastImg,
  },
  {
    name: "South Indian Veg Meals",
    description: "Rice, dal, sambar, rasam, curry, curd and pickle served on a banana leaf.",
    price: "₹139",
    tag: "⭐ Best Seller",
    image: mealsImg,
  },
  {
    name: "Puri With Chutney",
    description: "Soft, fluffy puris paired with signature chutneys and homestyle curry.",
    price: "₹79",
    tag: "🔥 Popular",
    image: snacksImg,
  },
  {
    name: "Mini Tiffin Platter",
    description: "A satisfying plate of idli, vada, dosa, sambar and rotating chutney specials.",
    price: "₹119",
    tag: "⭐ Best Seller",
    image: breakfastImg,
  },
];

export const menuCategories = {
  Tiffins: [
    ["Idli Sambar", "Soft steamed idlis with hot sambar", "₹49"],
    ["Masala Dosa", "Crisp dosa with spiced potato masala", "₹79"],
    ["Ghee Karam Dosa", "Saffron ghee, karam podi and chutneys", "₹89"],
    ["Vada Plate", "Crisp vadas with sambar and coconut chutney", "₹59"],
  ],
  Meals: [
    ["Veg Full Meals", "Rice, dal, sambar, rasam, curry and curd", "₹139"],
    ["Special Meals", "Premium banana leaf meal with sweets", "₹179"],
    ["Curd Rice", "Tempered curd rice with pickle", "₹69"],
    ["Lemon Rice", "Zesty rice with peanuts and curry leaves", "₹69"],
  ],
  Snacks: [
    ["Puri Plate", "Fluffy puris with chutney and curry", "₹79"],
    ["Punugulu", "Crisp evening bites with chutney", "₹49"],
    ["Mirchi Bajji", "Hot chilli fritters with onion and lemon", "₹59"],
    ["Filter Coffee", "Strong South Indian decoction coffee", "₹29"],
  ],
  Sweets: [
    ["Sweet Pongal", "Rice, jaggery, ghee and cashews", "₹69"],
    ["Kesari Bath", "Warm semolina sweet with saffron notes", "₹59"],
    ["Payasam", "Traditional milk dessert with cardamom", "₹79"],
    ["Festival Sweet Box", "Assorted daily sweets for takeaway", "₹199"],
  ],
};

export const testimonials = [
  {
    name: "Lakshmi Priya",
    review: "The dosa is crisp, the chutneys are fresh, and the service feels genuinely warm.",
  },
  {
    name: "Ramesh Kumar",
    review: "Best breakfast stop in the area. The veg meals are clean, filling and consistent.",
  },
  {
    name: "Meenakshi Iyer",
    review: "A premium feel without losing the traditional taste. Their sambar is excellent.",
  },
];
