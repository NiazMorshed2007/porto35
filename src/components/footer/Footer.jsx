import React from "react";
import FooterList from "./FooterList";
import { GrFacebookOption } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  const arr = [
    {
      head: "CUSTOMER SERVICE",
      lists: [
        "Help & FAQs",
        "Order Tracking",
        "Shipping & Delivery",
        "Orders History",
        "Advanced Search",
        "Login",
      ],
    },
    {
      head: "About Us",
      lists: [
        "about us",
        "careers",
        "our stores",
        "corporate sales",
        "careers",
      ],
    },
    {
      head: "more information",
      lists: [
        "affiliates",
        "refer a friend",
        "student beans offers",
        "gift vouchers",
      ],
    },
  ];

  return (
    <div className="footer">
      <div className="footer-1">
        {arr.map((e, i) => (
          <FooterList head={e.head} lists={e.lists} key={i} />
        ))}
        <div>
          <h4>Social media</h4>
          <div className="icons">
            <i className="insta">
              <FiInstagram />
            </i>
            <i className="twitter">
              <SiTwitter />
            </i>
            <i className="fb">
              <GrFacebookOption />
            </i>
          </div>
          <p>Payment methods</p>
          <img
            src="https://www.portotheme.com/wordpress/porto/shop35/wp-content/uploads/sites/178/2020/07/payment.png"
            alt=""
          />
        </div>
      </div>
      <div className="footer-2">
        <p>Porto eCommerce. © 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
