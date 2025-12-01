const footerData = {
  Product: [
    "Features",
    "Integrations",
    "Pricing & Plans",
    "Changelog",
    "Our method",
    "User policy",
  ],
  Company: [
    "About us",
    "Diversity & Inclusion",
    "Blog",
    "Careers",
    "Financial statements",
  ],
  Resources: ["Community", "Terms of service", "Report a vulnerability"],
  "Content Library": [
    "Templates",
    "Tutorials",
    "Knowledge base",
    "Learn",
    "Cookie manager",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 opacity-80 relative text-white px-8 py-12 text-left font-[nacelle] mb-1">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-5">
        {Object.entries(footerData).map(([section, links]) => (
          <div key={section}>
            <h3 className="font-semibold mb-4">{section}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li
                  key={link}
                  className="text-sm hover:underline cursor-pointer text-gray-400"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-6">
        <span>© Diaa Elkhouly</span>
        <span className="hover:underline cursor-pointer">Terms</span>
      </div>
      <div className=" relative">
      </div>
    </footer>
  );
}
