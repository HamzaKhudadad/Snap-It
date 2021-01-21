import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../../Components/typography';
import titleStyles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import event from "assets/img/event.png"
const useStyles = makeStyles(titleStyles);
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;
  const titleClasses = useStyles();

  const images = [
    {
      url:'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Event',
      width: '40%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1610419923009-f0a50c304f10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBvcnRhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Portrait',
      width: '20%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFtaWx5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Family',
      width: '40%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      title: 'Graduation',
      width: '38%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Real Estate',
      width: '38%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

      title: 'Fashion',
      width: '24%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Product',
      width: '40%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      title: 'Weddings',
      width: '20%',
    },
    {
      url:
          'https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=400&q=80',
      title: 'Interior',
      width: '40%',
    },
  ];

  return (
      <Container className={titleClasses.section} component="section">
        <h2 className={titleClasses.title}> Some Wonders from our specialists</h2>
        <div className={classes.images}>
          {images.map((image) => (
              <ButtonBase
                  key={image.title}
                  className={classes.imageWrapper}
                  style={{
                    width: image.width,
                  }}
              >
                <div
                    className={classes.imageSrc}
                    style={{
                      backgroundImage: `url(${image.url})`,
                    }}
                />
                <div className={classes.imageBackdrop} />
                <div className={classes.imageButton}>
                  <Typography
                      component="h3"
                      variant="h6"
                      color="inherit"
                      className={classes.imageTitle}
                  >
                    {image.title}
                    <div className={classes.imageMarked} />
                  </Typography>
                </div>
              </ButtonBase>
          ))}
        </div>
      </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);