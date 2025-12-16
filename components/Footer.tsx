import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              GYP Travels
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating personalized travel experiences across Sri Lanka with
              comfort, care, and local expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/tours" className="hover:text-white transition">Tours</Link></li>
              <li><Link href="/destinations" className="hover:text-white transition">Destinations</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>Email: info@gyptravels.com</li>
              <li>Phone: +94 72 785 1045</li>
              <li>WhatsApp Available</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GYP Travels. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
