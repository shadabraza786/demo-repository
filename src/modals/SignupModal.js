import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import SignupModalOne from './NickNameModal'


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
        height: '35px',
        marginLeft: '45px',
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


export default function CustomizedDialogs() {

    const classes = useStyles();
    const requestApiData = new Requests();


    const [open, setOpen] = React.useState(false);
    const [password, setPassowrd] = React.useState("");
    const [cpassword, setCpassword] = React.useState("");
    const [email, setEmail] = React.useState("");
   


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleChangePassword = (e) => {
        setPassowrd(e.target.value)
    }

    const handleChangeConfirmPassword = (e) => {
        setCpassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }


    return (
        <div>
            <Button variant="outlined" color="black" onClick={handleClickOpen} style={{ marginLeft: '20px', background: '#EFEFEF', marginRight: '10px', border: 'none', borderRadius: '0px', textTransform: 'capitalize' }}>
                Sign Up
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <h4 style={{ marginLeft: '-50px', marginBottom: '-10px' }}>Nearly there!</h4>
                </DialogTitle>
                <DialogContent >

                    <form>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <TextField
                                className={classes.textField}
                                label="Email"
                                id="outlined-size-small"
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={handleChangeEmail}
                                value={email}
                                required
                            />
                        </FormControl>


                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <TextField
                                className={classes.textField}
                                label="Password"
                                type="password"
                                id="outlined-size-small"
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={handleChangePassword}
                                value={password}
                                required
                            />
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <TextField
                                className={classes.textField}
                                label="Confirm Password"
                                type="password"
                                id="outlined-size-small"
                                fullWidth
                                variant="outlined"
                                size="small"
                                onChange={handleChangeConfirmPassword}
                                value={cpassword}
                                required
                            />
                        </FormControl>

                        <div className={classes.Bothbuttons}>
                            <Button onClick={handleClose} variant="contained" className={classes.backButton}>
                                Back
                            </Button>

                            <SignupModalOne
                                email={email}
                                password={password}
                                cpassword={cpassword}
                            ></SignupModalOne>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
