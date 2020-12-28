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
      <h2 className={classes.title}>Vision and Mission</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Vision
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Our vision is a future where every business makes a conscious effort to apply an
                  analytical mindset in their decision-making process
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Mission
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  We provide innovative tools and services which enable businesses to effectively
                  collect data, analyze it and use any insights to help them make their decisions
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
