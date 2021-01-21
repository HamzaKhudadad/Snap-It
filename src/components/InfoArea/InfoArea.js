import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import infoStyles from "assets/jss/material-kit-react/components/infoStyle.js";
import picStyles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import team1 from "../../assets/img/faces/avatar.jpg";
import GridItem from "../Grid/GridItem";



const useInfoStyles = makeStyles(infoStyles);
const usePicStyles = makeStyles(picStyles);
const useNavPicStyles = makeStyles(styles);

export default function InfoArea(props) {

  const infoClasses = useInfoStyles();
  const picClasses = usePicStyles()
  const navPicClasses = useNavPicStyles()
  const navImageClasses = classNames(navPicClasses.imgRounded, navPicClasses.imgGallery);
  const imageClasses = classNames(
      picClasses.imgRaised,
      picClasses.imgRoundedRaised,
      picClasses.imgFluid
  );
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [infoClasses.iconWrapper]: true,
    [infoClasses[iconColor]]: true,
    [infoClasses.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [infoClasses.icon]: true,
    [infoClasses.iconVertical]: vertical
  });
  return (
      <div style={{display:'flex', flexDirection:'row'}}>
          <GridItem xs={12} sm={12} md={4} className={picClasses.itemGrid}>
            <img src={props.img} alt="..." className={navImageClasses} style={{marginBottom:'5px'}} />
          </GridItem>
        <div className={infoClasses.descriptionWrapper}>
          <h4 className={infoClasses.title}>{title}</h4>
          <h5 className={infoClasses.description}>{description}</h5>
        </div>
      </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};
