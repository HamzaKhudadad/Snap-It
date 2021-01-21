import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import PanToolIcon from '@material-ui/icons/PanTool';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Fingerprint from "@material-ui/icons/Fingerprint";
import BackupIcon from '@material-ui/icons/Backup';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import HighQualityIcon from '@material-ui/icons/HighQuality';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FeatureArea from "components/FeatureArea/FeatureArea";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function Features() {
  const classes = useStyles();
  return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>we have got you covered</h2>
            <h5 className={classes.description}>
              We've thought of everything so that you don't have to
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Easy"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={PanToolIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Affordable"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={MoneyOffIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Top talent"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={CameraAltIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Free backup"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={BackupIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Fast turnaround"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={AvTimerIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <FeatureArea
                  title="Quality"
                  description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                  icon={HighQualityIcon}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}
