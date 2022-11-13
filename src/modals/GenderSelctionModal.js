import React from 'react';
import Requests from "./Request"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import SelectFieldModal from './SelectFieldModal';
import { withStyles, makeStyles } from '@material-ui/core/styles';


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
        marginLeft: '35px',
        marginBottom: '25px',
        boxShadow: 'none',
        // display : 'inline-block'
        hoverEffect: 'none',
        textTransform: 'capitalize'
    },
    continueButton: {
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
    nextButton: {
        background: '#2BA4C6',
        color: 'white',
        border: 'none',
        marginLeft: '20px'
    },
    Bothbuttons: {
        display: 'flex',
        marginTop: '25px',
        marginBottom: '15px',
        marginLeft: '20px'
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
    InputBox: {
        // paddingTop : '50px',
        marginBottom: '20px',
        fontWeight: 'bold'

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
        fontWeight : 'bold',
        paddingTop : '60px',
        width: '300px',
        height : '237px',
        // padding : '10px',
        padding: theme.spacing(5),
    },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {

    const classes = useStyles();
    const requestApiData = new Requests();

    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassowrd] = React.useState("");
    const [cpassword, setCpassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [gender, setGender] = React.useState("O");



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmitNickname = () => {
        setOpen(false);
        setOpen(true);
    }

    const handleChangeMale = (e) => {
        setGender("M")
    }

    const handleChangeFemale = (e) => {
        setGender("F")
    }

    const handleChangeOther = (e) => {
        setGender("O")
    }

    const handleChangePassword = (e) => {
        setPassowrd(e.target.value)
    }

    const handleChangeConfirmPassword = (e) => {
        setCpassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border: 'none', borderRadius: '0px', textTransform: 'capitalize', width: '90px' }}>
                Next
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" >
                    <h4 style={{ marginLeft: '-15px', marginBottom: '-10px' }}>I'am a</h4>
                </DialogTitle>
                <DialogContent >
                    <input
                        onChange={handleChangeMale}
                        className={classes.InputBox} type="radio" value="Male" name="gender" /> Male<br /><br />
                    <input
                        onChange={handleChangeFemale}
                        className={classes.InputBox} type="radio" value="Female" name="gender" /> Female<br /><br />
                    <input
                        onChange={handleChangeOther}
                        className={classes.InputBox} type="radio" value="Other" name="gender" /> Other<br />
                </DialogContent>

                <div className={classes.Bothbuttons}>
                    <Button onClick={handleClose} variant="contained" className={classes.backButton}>
                        Previous
                    </Button>

                    <SelectFieldModal
                        gender={gender}
                        nickName={props.nickname}
                        email={props.email}
                        password={props.password}
                        cpassword={props.cpassword}
                    ></SelectFieldModal>
                </div>
            </Dialog>
        </div>
    );
}
