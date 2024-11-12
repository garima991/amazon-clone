import "./Sidebar.css";
import profileIcon from "../../assets/profile.svg";
import { Link } from "react-router-dom";
import chevron from "../../assets/chevron-right.svg";
import cross from "../../assets/cross.svg";

const Sidebar = ({ open, onClose }) => {
  console.log("Sidebar");
  return (
    open ? (
      <div className="parent-sidebar">
        <div className="popup-background"></div>
        <div className="sidebar">
          <button className="signin-btn">
            <img src={profileIcon} alt="" />
            Hello, sign in
          </button>
          {sidebarData.map((data) => (
            <ContentContainer data={data} />
          ))}
        </div>
        <button className="close-btn" onClick={onClose}><img src={cross} alt="" /></button>
      </div>
    )
      :
      <></>
  )
};
export default Sidebar;

function ContentContainer({ data }) {
  console.log(data);
  console.log(data);
  return (
    <div className="content-container">
      <div className="container-title">{data?.title}</div>
      <ul className="content-list">
        {data?.items?.map((item, itemIndex) => (
          <li key={itemIndex} className="content">
            <Link to="/">
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