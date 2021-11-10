import { Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import './Header.css';

export const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Row className="header-root" id="header">
      <Col span={4} className="header-image">
        <img
          src="https://apiv3.apifootball.com/badges/logo_leagues/302_la-liga.png"
          alt="logo"
        />
      </Col>
      <Col span={12}>
        <h1 onClick={() => history.push('/home')}>Football Stats</h1>
      </Col>
    </Row>
  );
};
