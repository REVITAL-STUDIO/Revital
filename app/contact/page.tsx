"use client"
import "./contact.css"
import { IonIcon } from '@ionic/react';
import { mailOutline, logoInstagram, logoLinkedin } from 'ionicons/icons';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Contact = () => {

    return (
        <div>
        <section className="revital ">
      <div className="info">
        <p className="product">
          Your brand, product, idea is worth chasing. Believing in the
          opportunity in creating a household name that presents timeless
          designs and well organized planning, propelling a new meaning forward.
          <br /><br />
          <span className="connect">Connect with US.</span>
        </p>
        <div className="contact">
          <ul>
            <li>
            <a href="mailto:studio@rvtl.org">
                <IonIcon icon={mailOutline} />
                </a>
            </li>
            <li>
            <a href="https://instagram.com/rvtl.studio?igshid=NTc4MTIwNjQ2YQ==">
                <IonIcon icon={logoInstagram} />
              </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/company/revital-studio/">
                <IonIcon icon={logoLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
    )
}

export default Contact;