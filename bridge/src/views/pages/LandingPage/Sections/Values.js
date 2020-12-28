import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'views/components/Grid/GridContainer';
import GraphicEq from '@material-ui/icons/GraphicEq';
import GridItem from 'views/components/Grid/GridItem';
import anabridge_icon from 'assets/img/anabridge-icon.png';
import Button from 'views/components/CustomButtons/Button.js';
import Card from 'views/components/Card/Card';
import CardBody from 'views/components/Card/CardBody';
import CardFooter from 'views/components/Card/CardFooter';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle';

import team1 from 'assets/img/faces/profile-placeholder.jpg';
import team2 from 'assets/img/faces/profile-placeholder.jpg';
import team3 from 'assets/img/faces/profile-placeholder.jpg';

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Values</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Transparent
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Openness is in our DNA. We believe that honesty brings out the best in people and
                  encourages a positive learning culture.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Agile
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We look to the future and adapt as our external environment changes because we are
                  always striving to best meet the needs of our stakeholders.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Empowering
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Collaboration is inherent in how we work and we strive to be a driving force that
                  supports and facilitates others who are working to improve data-driven decision
                  making.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Innovative
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We  know  that where there’s a will there’s a way. If an idea fails, it is never
                  the end but a catalyst to keep seeking until we find the solution.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Quality
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We are proud to be  specialists, allowing us to truly nurture our expertise and
                  ensure a rigorous approach to all that we do.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={anabridge_icon} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mindfulness
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Being aware of the environment, recognizing and connecting to the wholeness in
                  ourselves and others to reduce stress, unlock creativity, and boost performance in
                  businesses.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
