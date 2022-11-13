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
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useNavigate , Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { FcGoogle } from 'react-icons/fc';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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
    submitButton: {
       background: '#2BA4C6',
        color: 'white',
    },
    
    googleButton: {
        background: 'white',
        border: '1px solid grey',
        textTransform: 'capitalize'
    },
    facebookButton: {
        background: 'white',
        border: '1px solid grey',
        textTransform: 'capitalize'
    }
}));

const styles = (theme) => ({
    root: {
        marginLeft: '100px',
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
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [email, seEmail] = React.useState("");
    const [password, setPassowrd] = React.useState("");
    const [isHovering, setIsHovering] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [errorMsg, setErrorMsg] = React.useState("");

    const handleChangeEmail = (e) => {
        seEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassowrd(e.target.value)
    }

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsHovering(false);

        const sendData = {
            "email": email,
            "password": password
        }

        requestApiData.loginRequest(sendData).then((res) => {
            if(res.data.status === 200){
                localStorage.setItem('Token', res.data.Token)
                navigate('/mainDashboard');
                window.alert("Login Successfully")
            }if (res.data.status === 400 || !res.data){
                // setErrorMsg("Invalid Username or Password")
                window.alert("Login Successfully")
            }
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border : 'none', borderRadius : '0px', textTransform : 'capitalize', width : '90px' }}>
                Log In
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Log In
                </DialogTitle>
                <DialogContent >
                {errorMsg && <p>{errorMsg}</p>}
               
                    <form onSubmit={handleSubmit}>
                    
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    {/* <p>dddddddd</p> */}
                        </FormControl>
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
                                required
                            // value={password}
                            // type={values.showPassword ? 'text' : 'password'}
                            // endAdornment={
                            //     <InputAdornment position="end">
                            //         <IconButton
                            //             aria-label="toggle password visibility"
                            //             onClick={handleClickShowPassword}
                            //             onMouseDown={handleMouseDownPassword}
                            //             edge="end"
                            //         >
                            //             {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            //         </IconButton>
                            //     </InputAdornment>
                            // }
                            />
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <Button
                                type="submit"
                                variant="contained"
                                // color="#2BA4C6"
                                className={classes.submitButton}
                                fullWidth
                                // email={data.email}
                            >
                                Login
                            </Button>
                            <p style={{textAlign : 'right'}}><a href="#" style={{textDecoration : 'none', color:"#2BA4C6"}}>Forgot password?</a></p>
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <h5 style={{ textAlign: 'center', marginTop: '-5px', marginBottom: '-10px' }}>OR</h5>
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <Button type="submit" variant="contained" className={classes.googleButton} fullWidth>
                               <FcGoogle style={{marginRight: '15px', marginLeft:'-5px', width:'22px', height:'22px'}}></FcGoogle> Continue with Google
                            </Button>
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <Button type="submit" variant="contained" className={classes.facebookButton} fullWidth>
                                <FacebookOutlinedIcon color="primary" style={{marginRight: '15px', marginLeft:'10px'}}></FacebookOutlinedIcon>Continue with Facebook
                            </Button>
                        </FormControl>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <h5 style={{ textAlign: 'center' }}>Not a part of Paigeon yet ? <Link to="/" style={{textDecoration : 'none', color : '#2BA4C6'}}>Sign Up</Link></h5>
                        </FormControl>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
