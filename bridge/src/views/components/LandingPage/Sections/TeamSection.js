import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Button from "../../CustomButtons/Button.js";
import Card from "../../Card/Card.js";
import CardBody from "../../Card/CardBody.js";
import CardFooter from "../../Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/profile-placeholder.jpg";
import team2 from "assets/img/faces/profile-placeholder.jpg";
import team3 from "assets/img/faces/profile-placeholder.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Emma Onen
                <br />
                <small className={classes.smallTitle}>
                  Full Stack Engineer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The passion to solve pressing challenges through technology
                  makes me do what I do every single day. What excites me about
                  IoT is the fact that it makes things digitally “SPEAK” to each
                  other. With this ability, we can therefore automate anything.
                  My greatest intention is to learn more about LoRa technology
                  and improve my knowledge on embedded systems.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Martin Bbaale
                <br />
                <small className={classes.smallTitle}>Head of Strategy</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Martin is a research scientist and computer engineer who is
                  fascinated by the fact that technology can be applied in many
                  human fields to constantly change how we do things. Martin is
                  inspired by youth, he is helping to shape a future that
                  embraces their talents.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Sedrick Otolo
                <br />
                <small className={classes.smallTitle}>
                  Full Stack Engineer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  My main motivation about IoT is because it’s the greatest
                  driving force that keeps me moving in the field of IT due to
                  the many things I can do to change the world around me. It
                  gives me joy and defines my personality. Open up tech company
                  and embrace many lives out here who have talents and gifts
                  into IT but they can’t show up because of poverty and diseases
                  at times. Making people grow up in their dreams and fulfill
                  their purposes in life through motivations and inspirations
                  backed up with knowing their worth to the environment.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jeremiah Okello
                <br />
                <small className={classes.smallTitle}>
                  Full Stack Engineer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The passion to solve pressing challenges through technology
                  makes me do what I do every single day.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ritah Ringtho
                <br />
                <small className={classes.smallTitle}>
                  Client Success Manager
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  She is passionate about business.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Francis Musasizi
                <br />
                <small className={classes.smallTitle}>
                  Full Stack Engineer
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The motivation he has for IoT is it's one of those driving
                  technologies that branch in all technical solutions,it can be
                  widely used in different areas of Tech,It can also help in
                  prototyping AI algorithms
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
