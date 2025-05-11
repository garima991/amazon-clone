import Footer from '../components/Footer';
import { useAuth } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

function Account() {
  const { name, email, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  // Card data for the main grid
  const mainCards = [
    {
      title: "Your Orders",
      desc: "Track, return, or buy things again",
      icon: "https://m.media-amazon.com/images/G/01/x-locale/cs/ya/images/Box._CB485927553_.png",
    },
    {
      title: "Login & security",
      desc: "Edit login, name, and mobile number",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png",
    },
    {
      title: "Prime",
      desc: "View benefits and payment settings",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png",
    },
    {
      title: "Your Addresses",
      desc: "Edit addresses for orders and gifts",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png",
    },
    {
      title: "Your business account",
      desc: "Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.",
      icon: "https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg",
    },
    {
      title: "Payment options",
      desc: "Edit or add payment methods",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png",
    },
    {
      title: "Amazon Pay balance",
      desc: "Add money to your balance",
      icon: "https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png",
    },
  ];

  // Lower section cards
  const lowerSections = [
    {
      title: "Digital content and devices",
      links: [
        "Apps and more",
        "Content Library",
        "Devices",
        "Digital gifts you've received",
      ],
    },
    {
      title: "Email alerts, messages, and ads",
      links: [
        "Advertising preferences",
        "Communication preferences",
        "SMS alert preferences",
        "Message Centre",
        "Alexa shopping notifications",
      ],
    },
    {
      title: "More ways to pay",
      links: [
        "Default Purchase Settings",
        "Amazon Pay",
        "Coupons",
      ],
    },
    {
      title: "Ordering and shopping preferences",
      links: [
        "Leave packaging feedback",
        "Lists",
        "Manage saved IDs",
        "Your Shopping preferences",
        "Your Content",
        "Language settings",
        "Recalls and Product Safety Alerts",
      ],
    },
    {
      title: "Other accounts",
      links: [
        "Account Linking",
        "Seller account",
        "Amazon Web Services",
      ],
    },
    {
      title: "Shopping programs and rentals",
      links: [
        "Manage Your Amazon Family",
        "Subscribe & Save",
        "Shop the Kids' Store by age",
      ],
    },
    {
      title: "Subscriptions",
      links: [
        "Email",
        "Memberships & Subscriptions",
      ],
    },
    {
      title: "Manage your data",
      links: [
        "Request your data",
        "Manage apps and services with data access",
        "Close Your Amazon Account",
        "Privacy Notice",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Account</h1>
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainCards.map((card, idx) => (
            <div
              key={idx}
              className="flex items-start p-5 bg-white outline outline-1 outline-gray-300 rounded-lg hover:bg-[#EEEEEE] transition"
            >
              <img src={card.icon} alt="" className="w-12 h-12 mr-4 object-contain" />
              <div>
                <div className="font-normal text-lg">{card.title}</div>
                <div className="text-gray-600 text-sm">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <hr />
        {/* Lower section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {lowerSections.map((section, idx) => (
            <div key={idx} className="bg-white outline outline-1 outline-gray-300 rounded-lg p-6 mb-4">
              <div className="font-bold text-lg mb-2">{section.title}</div>
              <ul className="space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-blue-700 hover:underline text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Account;
