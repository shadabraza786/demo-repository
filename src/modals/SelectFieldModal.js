import React, { useState } from 'react';
import Requests from "./Request"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import SequerityModalQuation from './SecurityQuationModal'
import travelImage from '../assets/Images/travel.jpg'
import foodImage from '../assets/Images/food.PNG'
import WildlifeImg from '../assets/Images/Wildlife.PNG'
import ArchitechtureImg from '../assets/Images/architechture.PNG'
import technologyImg from '../assets/Images/technology.PNG'
import AutomobilesImg from '../assets/Images/automobiles.PNG'
import SpaceImg from '../assets/Images/space.PNG'
import PaintingImg from '../assets/Images/painting.PNG'
import ScienceImg from '../assets/Images/science.PNG'
import PhotographyImg from '../assets/Images/photography.PNG'
import CarsImage from '../assets/Images/cars.PNG'
import SpaceNormalImg from '../assets/Images/spacenormal.PNG'
import Painting2Imge from '../assets/Images/painting2.PNG'
import Science2Img from '../assets/Images/science2.PNG'
import photography2 from '../assets/Images/photography2.PNG'
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import CiCircleCheck from 'react-icons/ci'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';




const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '32ch',
    },
    formRoot: {
        marginLeft: '10px',
    },
    inputField: {
        width: '250px',
        height: '40px',
        marginTop: '5px',
        marginBottom: '15px'
    },
    backButton: {
        // background: '#EFEFEF',
        borderRadius: '0px',
        color: 'black',
        width: '80px',
        height: '35px',
        marginLeft: '185px',
        marginBottom: '25px',
        boxShadow: 'none',
        // display : 'inline-block'
        hoverEffect: 'none',
        textTransform: 'capitalize'
    },
    nextButton: {
        background: '#2BA4C6',
        color: 'white',
        width: '100px',
    },
    avatar: {
        width: '50px',
        color: 'black',
        height: '50px',
        marginLeft: '110px',
        backgroundColor: grey[300],
    },
    Pera: {
        marginLeft: '60px'
    },
    Heading: {
        fontSize: '12px',
        textAlign: 'center',
        margin: '15px'
    },
    ContinueButton: {
        borderRadious: '5px',
        border: 'none',
        background: '#2BA4C6',
        marginLeft: '20px',
        color: 'white',
        textTransform: 'capitalize'
    },
    Bothbuttons: {
        display: 'flex',
        marginTop: '25px'
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto auto auto',
        backgroundr: '#2196F3',
    },
    gridItem: {

        margin: '10px',
        background: 'rgba(255, 255, 255, 0.8)',
        // border: '1px solid rgba(0, 0, 0, 0.8)',
        // padding: '20px',
        fontSize: '30px',
        textAlign: 'center'
    },
    SelectFieldImage: {
        marginTop: '10px',
        // justifyContent : 'left',
        width: '80px',
        height: '50px',
    }
}));

const styles = (theme) => ({
    root: {
        marginLeft: '120px',
        marginTop: '20px',
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    SelectIcon : {
        marginBottom : '-30px'
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        width: '600px',
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {

    const classes = useStyles();
    const requestApiData = new Requests();

    const [open, setOpen] = useState(false);
    const [selectImage, setSelectImage] = useState([]);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClickImg = (type) => {
        if (selectImage.includes(type)) {
            const removeType = selectImage.filter((item) => item != type)
            setSelectImage(removeType)
        } else {
            setSelectImage([...selectImage, type])
        }
        // console.log("========>")
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setOpen(false);
    //     window.alert("Signup Successfully")

    //     const sendData = {
    //         "email": email,
    //         "password": password,
    //         "password2": cpassword,
    //         "nick_name" : nickName,
    //         "interest" : "",
    //         "gender" : gender
    //     }

    //     console.log("=====sendData", sendData)

    //     requestApiData.signUpRequest(sendData).then(res => {

    //     })

    // }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border: 'none', borderRadius: '0px', textTransform: 'capitalize', width: '90px' }}>
                Next
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" >
                    <h4 style={{ marginLeft: '-4px', marginBottom: '-10px', marginTop: '-5px' }}>Please select your field of interest</h4>
                </DialogTitle>
                <DialogContent >

                    <div className={classes.gridContainer}>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(travelImage) ? '1px solid blue' : null }} id="1" onClick={() => handleClickImg(travelImage)}>
                            <img src={travelImage} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon className={classes.SelectIcon} style={{
                                    
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(travelImage) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(foodImage) ? '1px solid blue' : null }} id="2" onClick={() => handleClickImg(foodImage)}>
                            <img src={foodImage} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(foodImage) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(WildlifeImg) ? '1px solid blue' : null }} id="3" onClick={() => handleClickImg(WildlifeImg)}>
                            <img src={WildlifeImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(WildlifeImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(ArchitechtureImg) ? '1px solid blue' : null }} id="4" onClick={() => handleClickImg(ArchitechtureImg)}>
                            <img src={ArchitechtureImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(ArchitechtureImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(technologyImg) ? '1px solid blue' : null }} id="5" onClick={() => handleClickImg(technologyImg)}>
                            <img src={technologyImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(technologyImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(AutomobilesImg) ? '1px solid blue' : null }} id="6" onClick={() => handleClickImg(AutomobilesImg)}>
                            <img src={AutomobilesImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(AutomobilesImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(SpaceImg) ? '1px solid blue' : null }} id="7" onClick={() => handleClickImg(SpaceImg)}>
                            <img src={SpaceImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(SpaceImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(PaintingImg) ? '1px solid blue' : null }} id="8" onClick={() => handleClickImg(PaintingImg)}>
                            <img src={PaintingImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(PaintingImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(ScienceImg) ? '1px solid blue' : null }} id="9" onClick={() => handleClickImg(ScienceImg)}>
                            <img src={ScienceImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(ScienceImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(ScienceImg) ? '1px solid blue' : null }} id="10" onClick={() => handleClickImg(ScienceImg)}>
                            <img src={PhotographyImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(PhotographyImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(CarsImage) ? '1px solid blue' : null }} id="11" onClick={() => handleClickImg(CarsImage)}>
                            <img src={CarsImage} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(CarsImage) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(SpaceNormalImg) ? '1px solid blue' : null }} id="12" onClick={() => handleClickImg(SpaceNormalImg)}>
                            <img src={SpaceNormalImg} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(SpaceNormalImg) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(Painting2Imge) ? '1px solid blue' : null }} id="13" onClick={() => handleClickImg(Painting2Imge)}>
                            <img src={Painting2Imge} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(Painting2Imge) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(Science2Img) ? '1px solid blue' : null }} id="14" onClick={() => handleClickImg(Science2Img)}>
                            <img src={Science2Img} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(Science2Img) ? 'block' : 'none'
                            }} />
                        </div>
                        <div className={classes.gridItem} style={{ border: selectImage.includes(photography2) ? '1px solid blue' : null }} id="15" onClick={() => handleClickImg(photography2)}>
                            <img src={photography2} className={classes.SelectFieldImage}></img>
                            <CheckCircleIcon style={{
                                // maxHeight: '14px', marginLeft: '-21px', color: 'white', marginBottom: '35px',
                                display: selectImage.includes(photography2) ? 'block' : 'none'
                            }} />
                        </div>

                    </div>

                    <div className={classes.Bothbuttons}>
                        <Button onClick={handleClose} variant="contained" className={classes.backButton}>
                            Previous
                        </Button>

                        <SequerityModalQuation
                            gender={props.gender}
                            nickName={props.nickName}
                            email={props.email}
                            password={props.password}
                            cpassword={props.cpassword}
                            SequerityQuestions={props.question}
                            SelectImage={props.selectImage}
                        ></SequerityModalQuation>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
