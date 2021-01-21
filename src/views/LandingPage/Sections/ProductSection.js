import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import clsx from 'clsx';

import InfoArea from "components/InfoArea/InfoArea.js";
import Step1 from "../../../assets/img/step1.jpg"
import Step2 from "../../../assets/img/step2.jpg"
import Step3 from "../../../assets/img/step3.jpg"
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useHeadStyles = makeStyles(styles);
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["", "", ""];
}

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});


function getStepContent(step) {
  switch (step) {
    case 0:
      return(
          <InfoArea
              title="We'll match you to the best photographer every time"
              description="You let us know when, where and why, and we'll take care of the rest. Snappr will recommend the best-matched photographers in realtime."
              img={Step1}
              iconColor="info"
              vertical
          />)

    case 1:
      return (
          <InfoArea
              title="All you need to do is turn up"
              description="Your Snappr photographer will bring their professional-grade equipment to your location at your chosen time, and you can relax in the hands of an experienced creative."
              img={Step2}
              iconColor="success"
              horizontal
          />)
    case 2:
      return (
         <InfoArea
            title="Edited photos ready to share and use in record time!"
            description="Within 48 hours of your shoot, your edited photos will be delivered via the Snappr app, with one-click sharing or downloading."
            img={Step3}
            iconColor="danger"
            vertical
            />
      )
    default:
      return 'Unknown step';
  }
}



export default function VerticalLinearStepper() {
  const headClasses = useHeadStyles();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <LoyaltyIcon />,
      2: <CameraEnhanceIcon />,
      3: <PhotoLibraryIcon />,
    };

    return (

        <div
            className={clsx(classes.root, {
              [classes.active]: active,
              [classes.completed]: completed,
            })}

        >
          {icons[String(props.icon)]}
        </div>

    );
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
      <div className={headClasses.section}>
        <GridContainer justify="center" style={{marginBottom:'20px'}} >
           <GridItem xs={12} sm={12} md={8}>
           <h2 className={headClasses.title}>Let{"'"}s talk work</h2>
             <h5 className={headClasses.description}>
               This is the paragraph where you can write more details about your
               product. Keep you user engaged by providing meaningful information.
               Remember that by this time, the user is curious, otherwise he wouldn
               {"'"}t scroll to get here. Add a button if you want the user to see
               more.
             </h5>
           </GridItem>
         </GridContainer>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                          color="secondary"
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? null
                      : <Button
                          color="secondary"
                          onClick={handleNext}
                          className={classes.button}
                      >
                         Next
                      </Button>}
                    </div>
                  </div>
                </StepContent>
              </Step>
          ))}
        </Stepper>
      </div>
  );
}




// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// // @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import Step1 from "../../../assets/img/step1.jpg"
// import Step2 from "../../../assets/img/step2.jpg"
// import Step3 from "../../../assets/img/step3.jpg"
// // core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";
//
// import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
//
// const useStyles = makeStyles(styles);
//
// export default function ProductSection() {
//   const classes = useStyles();
//   return (
//     <div className={classes.section}>
//       <GridContainer justify="center" style={{marginBottom:'20px'}} >
//         <GridItem xs={12} sm={12} md={8}>
//           <h2 className={classes.title}>Let{"'"}s talk product</h2>
//           <h5 className={classes.description}>
//             This is the paragraph where you can write more details about your
//             product. Keep you user engaged by providing meaningful information.
//             Remember that by this time, the user is curious, otherwise he wouldn
//             {"'"}t scroll to get here. Add a button if you want the user to see
//             more.
//           </h5>
//         </GridItem>
//       </GridContainer>
//       <div>
//         <GridContainer>
//           <Stepper alternativeLabel connector={<ColorlibConnector />}>
//             {steps.map((label) => (
//                 <Step key={label}>
//                   <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
//                 </Step>
//             ))}
//           </Stepper>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="We'll match you to the best photographer every time"
//               description="You let us know when, where and why, and we'll take care of the rest. Snappr will recommend the best-matched photographers in realtime."
//               img={Step1}
//               iconColor="info"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="All you need to do is turn up"
//               description="Your Snappr photographer will bring their professional-grade equipment to your location at your chosen time, and you can relax in the hands of an experienced creative."
//               img={Step2}
//               iconColor="success"
//               vertical
//             />
//           </GridItem>
//           <GridItem xs={12} sm={12} md={4}>
//             <InfoArea
//               title="Edited photos ready to share and use in record time!"
//               description="Within 48 hours of your shoot, your edited photos will be delivered via the Snappr app, with one-click sharing or downloading."
//               img={Step3}
//               iconColor="danger"
//               vertical
//             />
//           </GridItem>
//         </GridContainer>
//       </div>
//     </div>
//   );
// }
