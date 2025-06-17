// import "./Sidebar.css";
import profileIcon from "../assets/profile.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import chevron from "../assets/chevron.svg";
import cross from "../assets/cross.svg";
import { useAuth, logout } from "../firebase/auth";

const Sidebar = ({ open, onClose }) => {
  const { isLoggedIn, name } = useAuth();

  return (
    open ? (
      <div className="w-full h-full flex absolute top-0 left-0 z-[5] bg-transparent">
        <div 
          className="w-full max-w-[100dvw] h-full absolute top-0 left-0 z-[7] bg-[#000000b0]"
          onClick={onClose}
        ></div>
        <div className="text-lg absolute top-0 left-0 z-[9] w-[85%] sm:w-[360px] h-full bg-[white] flex flex-col overflow-y-auto">
          <button className="min-h-min px-4 sm:px-8 py-2 bg-[#222F3E] font-bold text-base sm:text-[19px] leading-[25px] flex gap-2 text-white">
            <img src={profileIcon} alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
            Hello, <NavLink to="/sign-in" className="hover:underline">{isLoggedIn ? name : "Sign In"}</NavLink>
          </button>
          {sidebarData.map((data) => (
            <ContentContainer data={data} isLoggedIn={isLoggedIn} key={data.title} />
          ))}
        </div>
        <button 
          className="close h-8 w-8 sm:h-10 sm:w-10 aspect-square border border-white rounded-md text-white absolute left-[calc(85%+8px)] sm:left-[368px] top-2 z-10 bg-[#00000020] cursor-pointer hover:bg-[#00000040] transition-colors duration-200" 
          onClick={onClose}
        >
          <img src={cross} alt="" className="w-4 h-4 sm:w-auto sm:h-auto" />
        </button>
      </div>
    ) : null
  );
};

export default Sidebar;

function ContentContainer({ data, isLoggedIn }) {
  const navigate = useNavigate();
  
  const handleItemClick = (item) => {
    if (item.title === "Sign Out") {
      logout();
      navigate("/sign-in");
    }
    if (isLoggedIn && item.title === "Your Account") {
      navigate("/account");
    }
    if (item.title === "Sign In") {
      navigate("/sign-in");
    }
  };

  return (
    <div className="content-flex flex-col px-4 sm:px-8 py-2 border-[0.5px] border-solid border-gray-400">
      <div className="text-base sm:text-[18px] leading-6 font-bold text-[#111] py-2">{data?.title}</div>
      <ul className="content-list">
        {data?.items?.map((item, itemIndex) => (
          <li key={itemIndex}>
            <button 
              onClick={() => handleItemClick(item)}
              className="w-full text-left text-sm sm:text-[14px] leading-4 text-[#111] font-medium cursor-pointer py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
            >
              {item?.title} {item?.open ? <img src={chevron} alt="chevron icon" className="w-4 h-4 sm:w-auto sm:h-auto" /> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const sidebarData = [
  {
    title: "Trending",
    items: [
      {
        title: "Best Sellers",
        open: true,
      },
      {
        title: "New Releases",
        open: false,
      },
      {
        title: "Movers & Shakers",
        open: true,
      },
    ],
  },
  {
    title: "Digital Content & Devices",
    items: [
      {
        title: "Amazon miniTV-FREE entertainment",
        open: false,
      },
      {
        title: "Echo & Alexa",
        open: true,
      },
      {
        title: "Fire TV",
        open: true,
      },
      {
        title: "Kindle E-Readers & eBooks",
        open: true,
      },
      {
        title: "Amazon Prime Video",
        open: true,
      },
      {
        title: "Amazon Prime Music",
        open: true,
      },
      
    ],
  },
  {
    title: "Shop by Category",
    items: [
      {
        title: "Mobiles, Computers",
        open: true,
      },
      {
        title: "TV, Appliances, Electronics",
        open: true,
      },
      {
        title: "Men's Fashion",
        open: false,
      },
      
      {
        title: "Women's Fashion",
        open: true,
      },
    ],
  },

  {
    title: "Programs & Features",
    items:[
      {
        title: "Amazon Pay",
        open: false,
      },
      {
        title: "Amazon Launchpad",
        open: false,
      },
      {
        title: "Amazon Pay",
        open: false,
      },
      {
        title: "Amazon Launchpad",
        open: false,
      },
      {
        title: "Amazon Business",
        open: false,
      }
    ]
  },
  {
    title: "Help & Settings",
    items: [
      {
        title: "Your Account",
        open: false,
      },
      {
        title: "Customer Services",
        open: false,
      },
      {
        title: "Sign Out",
        open: false,
      }
    ]
  }
];