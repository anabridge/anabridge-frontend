import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import BusinessIcon from '@material-ui/icons/Business';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import TextField from '@material-ui/core/TextField';
// core components
import Header from 'views/components/Header/Header.js';
import HeaderLinks from 'views/components/Header/HeaderLinks.js';
import Footer from 'views/components/Footer/Footer.js';
import GridContainer from 'views/components/Grid/GridContainer.js';
import GridItem from 'views/components/Grid/GridItem.js';
import Button from 'views/components/CustomButtons/Button.js';
import Card from 'views/components/Card/Card.js';
import CardBody from 'views/components/Card/CardBody.js';
import CardHeader from 'views/components/Card/CardHeader.js';
import CardFooter from 'views/components/Card/CardFooter.js';
import CustomInput from 'views/components/CustomInput/CustomInput.js';

import styles from 'assets/jss/material-kit-react/views/loginPage.js';

import image from 'assets/img/bg7.jpg';

const useStyles = makeStyles(styles);

export default function SignUpPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(function () {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  const products = [
    {
      value: 'None',
      label: 'None',
    },
    {
      value: 'Analytics',
      label: 'Analytics',
    },
    {
      value: 'Crisis Text Line',
      label: 'Crisis Text Line',
    },
  ];

  const [product, setProduct] = React.useState('EUR');

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Anabridge Platform"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>JOIN ANABRIDGE</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="First Name..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Last Name..."
                      id="last"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Work Email..."
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'email',
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="Organisation..."
                      id="organisation"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: 'text',
                        endAdornment: (
                          <InputAdornment position="end">
                            <BusinessIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={5}
                      fullWidth
                      defaultValue="Tell us more about yourself"
                      variant="outlined"
                      className={classes.textFieldPadding}
                    />

                    <TextField
                      id="outlined-select-product-native"
                      select
                      label="Product of Interest"
                      value={product}
                      className={classes.selectWidth}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Your product of interest?"
                      variant="outlined"
                    >
                      {products.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      JOIN
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
