import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'views/components/Header/Header';
import Footer from 'views/components/Footer/Footer.js';
import GridContainer from 'views/components/Grid/GridContainer.js';
import GridItem from 'views/components/Grid/GridItem.js';
import Button from 'views/components/CustomButtons/Button.js';
import HeaderLinks from 'views/components/Header/HeaderLinks.js';
import Parallax from 'views/components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection';
import TeamSection from './Sections/TeamSection';
import WorkSection from './Sections/WorkSection';
import CareerSection from './Sections/CareerSection';
import Values from './Sections/Values';
import VisionAndMission from './Sections/VisionAndMission';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Anabridge"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax filter image={require('assets/img/landing-bg.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>From Data to Insights.</h1>
              <h4>
                Anabridge is an international organisation that empowers businesses to easily make
                data-driven decisions.
              </h4>
              <br />
              <Button
                color="facebook"
                size="lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSSVH9icETjpE8JwujVm_JE2nAPfDJGJNH54gr83xUj3ws8g/viewform?usp=sf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <i className="fas fa-play" /> */}
                Apply for open position
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <CareerSection /> */}
          <ProductSection />
          <VisionAndMission />
          <Values />

          {/* <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
