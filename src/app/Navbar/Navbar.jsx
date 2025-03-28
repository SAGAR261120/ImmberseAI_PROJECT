"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname === "/") setActive("Home");
    else if (pathname === "/company") setActive("Company");
    else if (pathname === "/features") setActive("Features");
    else setActive("");
  }, [pathname]);

  return (
    <nav className="navbar navbar-expand-lg px-4">
      <div className="gradient-half-circle"></div>

      <Link href="/" className="navbar-brand text-white">
        ImmverseAI
      </Link>

      <button
        className="navbar-toggler gradient-bg"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-5">
          <li className="nav-item">
            <Link
              href="/Home"
              className={`nav-link ${active === "Home" ? "active" : "text-white"}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/company"
              className={`nav-link ${active === "Company" ? "active" : "text-white"}`}
            >
              Company
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/features"
              className={`nav-link ${active === "Features" ? "active" : "text-white"}`}
            >
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/SignUp"
              className="btn gradient-bg mt-1 text-white px-3 sign-up-btn"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
