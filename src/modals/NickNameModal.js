import React from 'react';
import clsx from 'clsx';
import Requests from "./Request"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';
import SignupModalTwo from './GenderSelctionModal'
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
        width: '60px',
        height : '35px',
        marginLeft: '45px',
        marginBottom: '25px',
        boxShadow : 'none',
        // display : 'inline-block'
        hoverEffect : 'none',
        textTransform : 'capitalize'
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
    Pera : {
        marginLeft : '60px'
    },
    Heading : {
        fontSize : '12px',
        textAlign : 'center',
        margin : '15px'
    },
    ContinueButton : {
        borderRadious : '5px',
        border : 'none',
        background : '#2BA4C6',
        marginLeft : '20px',
        color : 'white',
        textTransform : 'capitalize'
    },
    Bothbuttons: {
        display: 'flex',
        marginTop: '25px'
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
        width: '300px',
        padding: theme.spacing(2),
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
    const [nickName, setNickName] = React.useState("");


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeNickName = (e) => {
        setNickName(e.target.value)
        
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
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
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border : 'none', borderRadius : '0px', textTransform : 'capitalize', width : '90px' }}>
                Continue
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" >
                    <h4 style={{ marginLeft: '-65px', marginBottom: '-10px' }}>Welcome Aboard</h4>
                </DialogTitle>
                <DialogContent >

                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>

                    <p className={classes.Pera}>robertDura@gmail.com</p>
                    <div className={classes.Heading}>
                    <h2>Great to Have You! <br></br>What we may Call you?</h2>
                    </div>
                    

                    <form >
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <TextField
                                className={classes.textField}
                                label="Nick name"
                                id="outlined-size-small"
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={handleChangeNickName}
                                value={nickName}
                                required
                            />
                        </FormControl>

                        <div className={classes.Bothbuttons}>
                            <Button  onClick={handleClose} variant="contained" className={classes.backButton}>
                                Skip
                            </Button>

                            <SignupModalTwo
                                email={props.email}
                                password={props.password}
                                cpassword = {props.cpassword}
                                nickname={nickName}
                            ></SignupModalTwo>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
