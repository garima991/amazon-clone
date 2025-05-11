import AmazonLogo from "../assets/amazonLogo.svg";

const footerLinks = [
  {
    title: "Get to Know Us",
    links: [
      "About Amazon",
      "Careers",
      "Press Releases",
      "Amazon Science",
    ],
  },
  {
    title: "Connect with Us",
    links: [
      "Facebook",
      "Twitter",
      "Instagram",
    ],
  },
  {
    title: "Make Money with Us",
    links: [
      "Sell on Amazon",
      "Sell under Amazon Accelerator",
      "Protect and Build Your Brand",
      "Amazon Global Selling",
      "Supply to Amazon",
      "Become an Affiliate",
      "Fulfilment by Amazon",
      "Advertise Your Products",
      "Amazon Pay on Merchants",
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      "Your Account",
      "Returns Centre",
      "Recalls and Product Safety Alerts",
      "100% Purchase Protection",
      "Amazon App Download",
      "Help",
    ],
  },
];

const miniLinks = [
  [
    { title: "AbeBooks", desc: "Books, art & collectibles" },
    { title: "Shopbop", desc: "Designer Fashion Brands" },
  ],
  [
    { title: "Amazon Web Services", desc: "Scalable Cloud Computing Services" },
    { title: "Amazon Business", desc: "Everything For Your Business" },
  ],
  [
    { title: "Audible", desc: "Download Audio Books" },
    { title: "Prime Now", desc: "2-Hour Delivery on Everyday Items" },
  ],
  [
    { title: "IMDb", desc: "Movies, TV & Celebrities" },
    { title: "Amazon Prime Music", desc: "100 million songs, ad-free\nOver 15 million podcast episodes" },
  ],
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#232F3E] text-white mt-12">
      {/* Back to top */}
      <div className="text-center py-3 bg-[#37475A] text-sm cursor-pointer hover:underline">
        Back to top
      </div>
      {/* Main footer links */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <div className="font-bold mb-2">{section.title}</div>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Language/Country and logo */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <img
            src={AmazonLogo}
            alt="Amazon"
            className="h-8"
          />
          <div className="flex items-center gap-2">
            <button className="bg-transparent border border-gray-500 px-3 py-1 rounded text-sm flex items-center gap-1">
              English
            </button>
            <button className="bg-transparent border border-gray-500 px-3 py-1 rounded text-sm flex items-center gap-1">
              <span className=""></span>
              India
            </button>
          </div>
        </div>
      </div>
      {/* Mini links */}
      <div className="px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-gray-300 bg-[#131A22]">
        {miniLinks.map((col, idx) => (
          <div key={idx} className="space-y-2">
            {col.map((item, i) => (
              <div key={i}>
                <div className="font-bold text-white">{item.title}</div>
                <div className="whitespace-pre-line">{item.desc}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-400 pb-8 bg-[#131A22]">
        <div className="space-x-4 mb-1">
          <a href="#" className="hover:underline">Conditions of Use & Sale</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Interest-Based Ads</a>
        </div>
        <div>© 2024-{new Date().getFullYear()} AmazonClone. Built by Garima.</div>
      </div>
    </footer>
  );
} 