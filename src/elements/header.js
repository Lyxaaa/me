import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import me from '../assets/me.jpg';
import bg from '../assets/bg.png';
import linkedin from '../assets/linkedin.png';

import Button from 'react-bootstrap/Button';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="profile-header">
                <div className="bg-darken"></div>
                <img className='bg-img' src={bg}></img>
                <div className='header-container'>
                    <div className='info-container'>
                        <div className='profile-image-container'>
                            <img className='profile-image' src={me}></img>
                        </div>
                        <div className='profile-info-container'>
                            <h2 className='white-text header'>{this.props.me.header}</h2>
                            <h5 className='white-text subtext'>{this.props.me.subtext}</h5>
                        </div>
                    </div>
                    <div className='contact-info'>
                        <ContactInfo placement="top" name="CONTACT" me={this.props.me} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;



function ContactInfo({ name, me, ...props }) {
    return (
        <Row xs={2} md={2} className="">
            <ContactLine icon='mail' text={me.email} />
            <Col key='linkedin'>
                <a href={me.linkedin} target="_blank">
                    <img src={linkedin} className='contact-btn' />
                </a>
            </Col>
        </Row>
    );
}

function ContactLine({ icon, text }) {
    return (

        <Col key={icon}>
            <a href={text}>
                <Button variant="primary" className="contact-btn">
                    <span class="material-symbols-outlined">
                        {icon}
                    </span>
                </Button>
            </a>
        </Col>
    )
}
