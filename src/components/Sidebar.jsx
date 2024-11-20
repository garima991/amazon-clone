// import "./Sidebar.css";
import profileIcon from "../assets/profile.svg";
import { Link , NavLink} from "react-router-dom";
import chevron from "../assets/chevron.svg";
import cross from "../assets/cross.svg";

const Sidebar = ({ open, onClose }) => {
  console.log("Sidebar");
  return (
    open ? (
      <div className="w-full h-full flex absolute top-0 left-0 z-[5] bg-transparent">
        <div className="w-full max-w-[100dvw] h-full absolute top-0 left-0 z-[7] bg-[#000000b0]"></div>
        <div className="text-lg absolute top-0 left-0 z-[9] w-[360px] h-full bg-[white] flex flex-col overflow-y-auto">
          <button className="min-h-min px-8 py-2 bg-[#222F3E] font-bold text-[19px] leading-[25px] flex gap-2 text-white">
            <img src = {profileIcon} alt="" />
            Hello, <NavLink to="/sign-in">sign in</NavLink>
          </button>
          {sidebarData.map((data) => (
            <ContentContainer data={data} />
          ))}
        </div>
        <button className="close h-10 w-10 aspect-square border border-white rounded-md text-white absolute left-[368px] top-2 z-10 bg-[#00000020] cursor-pointer" onClick={onClose}><img src={cross} alt="" /></button>
      </div>
    )
      :
      <></>
  )
};
export default Sidebar;

function ContentContainer({ data }) {
  console.log(data);
  return (
    <div className="content-flex flex-col px-8 py-2 border-[0.5px] border-solid border-gray-400">
      <div className="text-[18px] leading-6 font-bold text-[#111] py-2">{data?.title}</div>
      <ul className="content-list">
        {data?.items?.map((item, itemIndex) => (
          <li key={itemIndex} >
            <Link to="/" className="text-[14px] leading-4 text-[#111] font-medium cursor-pointer py-3.5 flex items-center justify-between">
              {item?.title} {item?.open ? <img src={chevron} alt="chevron icon" /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


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