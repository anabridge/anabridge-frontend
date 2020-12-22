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
import Button from '../../CustomButtons/Button.js';

import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function CareerSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Open Position</h2>
          <h3 className={classes.title}>Graphics Designer Intern</h3>
          <h4 className={classes.title}>Roles</h4>
          <h5 className={classes.description}>
            Logo design Flyer Design Business Cards. Icon Design Wireframing
          </h5>
          <h4 className={classes.title}>Requirements</h4>
          <h5 className={classes.description}>
            Poor business processes and poor investment decisions lead to huge losses within
            companies. They experience poor results yet spend a lot of money and resources in the
            process. Employees do not find their work to be meaningful and this makes them less
            productive. Many start to feel that the work they do is not impactful.
          </h5>
          <h4 className={classes.title}>Desirables</h4>
          <h5 className={classes.description}>
            Poor business processes and poor investment decisions lead to huge losses within
            companies. They experience poor results yet spend a lot of money and resources in the
            process. Employees do not find their work to be meaningful and this makes them less
            productive. Many start to feel that the work they do is not impactful.
          </h5>
          <Button
            color="danger"
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd9w8agoK7IkGDPzfjTKOHYQ_PuxH-JdySbXetoXzKVlE8YOA/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            APPLY
          </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
