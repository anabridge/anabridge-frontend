import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
// core components
import GridContainer from '../../Grid/GridContainer.js';
import GridItem from '../../Grid/GridItem.js';
import InfoArea from '../../InfoArea/InfoArea.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Products and Services</h2>
          <h5 className={classes.description}>
            We create personalised tools which extract knowledge from data.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Crisis Text Line"
              description="Carry out sentiment analysis on SMS text messages"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Analytics Engine"
              description="Enable analytics on the most complete and recent data."
              icon={DataUsageIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Brand Engine"
              description="Understand your market and your competitors better than 
              ever before, and create lasting connections with your customers."
              icon={BusinessCenterIcon}
              iconColor="danger"
              vertical
            />
          </GridItem> */}
        </GridContainer>
      </div>
    </div>
  );
}
