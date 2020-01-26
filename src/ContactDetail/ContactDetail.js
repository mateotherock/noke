import React from 'react';
import './ContactDetail.css';
import phone from '../assets/phone.svg';
import email from '../assets/mail.svg';
import birthday from '../assets/calendar.svg';
import address from '../assets/address.svg';

function ContactDetail(props) {
    const { Name, Title, Phone, Street, City, State, Zipcode, Email, Birthday, Picture } = props.contactToDisplay;
    return (
        Object.entries(props.contactToDisplay).length > 0 ?
        <div className="contact-split">
            <div className="contact-picture-container">
                <img className="contact-picture" src={Picture} alt="Contact Headshot"></img>
            </div>
            <div className="contact-info">
                <div className="contact-line-name">{Name}</div>
                <div className="contact-line-title">{Title}</div>
                <div className="contact-line">
                    <img className="contact-icon" src={phone} alt="Phone"></img>
                    <div className="contact-detail-phone">{Phone}</div>
                </div>
                <div className="contact-line">
                    <img className="contact-icon" src={email} alt="Email"></img>
                    <div className="contact-detail-email">{Email}</div>
                </div>
                <div className="contact-line">
                    <img className="contact-icon" src={birthday} alt="Birthday"></img>
                    <div className="contact-detail-birthday">{Birthday}</div>
                </div>
                <div className="contact-line">
                    <img className="contact-icon" src={address} alt="Address"></img>
                    <div className="contact-detail-address">
                        {Street}
                        <br></br>
                        {City}, {State}
                        <br></br>
                        {Zipcode}
                    </div>
                </div>
            </div>
        </div>
        :
        null
    )
}

export default ContactDetail;