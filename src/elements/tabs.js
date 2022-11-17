
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("TABSSSSS")
    console.log(this.props.tabs);
    return (
      <Accordion defaultActiveKey="0" flush>
        {this.props.tabs?.map((tab, idx) => (
          <Accordion.Item eventKey={idx} key={tab.key}>
            <OverlayTrigger
              key='right'
              placement='right'
              overlay={
                <Tooltip id={`tooltip-right-${tab.title}`}>
                  Expand me!
                </Tooltip>
              }
            >
              <Accordion.Header>{tab.title}</Accordion.Header>
            </OverlayTrigger>
            <Accordion.Body>

              <span>
                {tab.description.map((item, idt) => {
                  if (item.type == "text") {
                    return <span className="nowrap" key={idt}>{item.content}</span>
                  } else if (item.type == "href") {
                    return <a href={item.url} target="_blank" className="nowrap" key={idt}>{item.content}</a>
                  }

                })}
              </span>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}

export default Tabs;