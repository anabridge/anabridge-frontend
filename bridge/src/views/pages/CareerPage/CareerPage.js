import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'views/components/Header/Header.js';
import Footer from 'views/components/Footer/Footer.js';
import Button from 'views/components/CustomButtons/Button.js';
import GridContainer from 'views/components/Grid/GridContainer.js';
import GridItem from 'views/components/Grid/GridItem.js';
import HeaderLinks from 'views/components/Header/HeaderLinks.js';
import NavPills from 'views/components/NavPills/NavPills.js';
import Parallax from 'views/components/Parallax/Parallax.js';

import profile from 'assets/img/faces/profile-placeholder.jpg';

import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';

import styles from 'assets/jss/material-kit-react/views/profilePage.js';

const useStyles = makeStyles(styles);

export default function CareerPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Anabridge"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    {/* <h2 className={classes.title}>Open Position</h2> */}
                    <h2 className={classes.title}>Graphics Designer Intern</h2>
                    <br></br>
                    <h4 className={classes.title}>Roles</h4>
                    <h5 className={classes.description}>
                      Logo design Flyer Design Business Cards. Icon Design Wireframing
                    </h5>
                    <h4 className={classes.title}>Requirements</h4>
                    <h5 className={classes.description}>
                      Skilled in using Graphics tools like Adobe tools, Sketch, Figma, Inkscape,
                      Gimp Experience in social media advertising Ability to produce high quality
                      work within the internship period Effective Communication with the team.
                    </h5>
                    <h4 className={classes.title}>Desirables</h4>
                    <h5 className={classes.description}>
                      Profile with existing works for reputable clients Graphics Design
                      certifications. Any previous works to show
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
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Studio',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={studio1} className={navImageClasses} />
                            <img alt="..." src={studio2} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={studio5} className={navImageClasses} />
                            <img alt="..." src={studio4} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Work',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work1} className={navImageClasses} />
                            <img alt="..." src={work2} className={navImageClasses} />
                            <img alt="..." src={work3} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work4} className={navImageClasses} />
                            <img alt="..." src={work5} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: 'Favorite',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work4} className={navImageClasses} />
                            <img alt="..." src={studio3} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work2} className={navImageClasses} />
                            <img alt="..." src={work1} className={navImageClasses} />
                            <img alt="..." src={studio1} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
