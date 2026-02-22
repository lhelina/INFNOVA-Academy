const Footer = () => (
  <footer className="bg-dark text-gray-400 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-white text-xl font-bold mb-4 ">INFNOVA Academy</h2>
        <p className="max-w-xs leading-relaxed">
          Empowering learners worldwide with cutting-edge technology courses.
          Start your journey to success with expert-led training.
        </p>
      </div>
      <div>
        <h3 className="text-white font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>About Us</li>
          <li>Courses</li>
          <li>Instructors</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold mb-4">Support</h3>
        <ul className="space-y-2 text-sm">
          <li>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
      © 2026 INFNOVA Technologies. All rights reserved.
    </div>
  </footer>
);

export default Footer;
