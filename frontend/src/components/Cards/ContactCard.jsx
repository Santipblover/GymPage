import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactCard.css";

function ContactCard() {
  return (
    <div className="contact-card">
      <h2 className="contact-card__title">Contactanos acá</h2>
      <p className="contact-card__description">
        Consultanos aquí para más info de nuestros planes y cualquier duda que surja
      </p>
      <a
        href="https://wa.me/541112345678?text=Hola%2C%20quiero%20hacer%20una%20consulta%20sobre%20el%20gimnasio"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card__whatsapp-button"
      >
        <FaWhatsapp size={24} />
        Enviar WhatsApp
      </a>
    </div>
  );
}

export default ContactCard;
