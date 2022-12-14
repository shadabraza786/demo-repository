import React, { useEffect } from 'react';
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
import { grey } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import RequestsGetQuetionData from './Request'



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
    selectField: {
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
    nextButton: {
        background: '#2BA4C6',
        color: 'white',
        width: '100px',
    },
    submitButton: {
        marginLeft: '20px',
        height: '37px',
        background: '#2BA4C6',
        color: 'white',
        width: '100px',
        borderRadious: 'none'
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
    // console.log("==========props", props.email)
    // const emaildata = useContext(Email)



    console.log("=====propsdata", props)

    // debugger
    const classes = useStyles();
    const requestQuetionsApiData = new RequestsGetQuetionData();
    // console.log("=====>", requestQuetionsApiData.gestQuetionsDetails())
    const requestApiData = new Requests();

    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState("");


    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const [password, setPassowrd] = React.useState(props.password);
    const [cpassword, setCpassword] = React.useState(props.cpassword);
    const [email, setEmail] = React.useState(props.email);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [nickName, setNickName] = React.useState(props.nickName);
    const [gender, setGender] = React.useState(props.gender);
    const [data, setData] = React.useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
        window.alert("Signup Successfully")

        const sendData = {
            "email": email,
            "password": password,
            "password2": cpassword,
            "nick_name": nickName,
            "interest": "",
            "gender": gender,
            "first_name": "",
            "last_name": ""
        }

        console.log("=====sendData", sendData)

        requestApiData.signUpRequest(sendData).then(res => {

        })

    }
    const handleClose = () => {
        setOpen(false);
    };

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

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const getQuetionDetails = () => {
        requestQuetionsApiData.gestQuetionsDetails().then((res) => {
            console.log("======res>", res.data.data.questions[0].question)
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setOpen(false);
    //     window.alert("Signup Successfully")

    //     const sendData = {
    //         "username": username,
    //         "password": password,
    //         "password2": cpassword,
    //         "email": email,
    //         "first_name": firstName,
    //         "last_name": lastName,
    //     }

    //     requestApiData.signUpRequest(sendData).then(res => {

    //     })

    // }

    useEffect(() => {
        getQuetionDetails();
      }, [])

    return (
        <div>
            <Button variant="outlined" onClick={handleSubmit} style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border: 'none', borderRadius: '0px', textTransform: 'capitalize', width: '90px' }}>
                Next
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" >
                    <h4 style={{ marginLeft: '-65px', marginBottom: '-10px' }}>Security Question</h4>
                </DialogTitle>
                <DialogContent >

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Question1</InputLabel>
                        <Select
                            native
                            className={classes.selectField}
                            value={state.age}
                            onChange={handleChange}
                            label="Question1"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <TextField
                            className={classes.textField}
                            label="Answer1"
                            id="outlined-size-small"
                            fullWidth
                            variant="outlined"
                            size="small"
                            // onChange={handleChangeEmail}
                            // value={email}
                            required
                        />
                    </FormControl>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-age-native-simple">Question2</InputLabel>
                        <Select
                            native
                            className={classes.selectField}
                            value={state.age}
                            onChange={handleChange}
                            label="Question2"
                            inputProps={{
                                name: 'age',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            {console.log("===data===",data )}
                            {/* {data.map((user, index) =>{
                                
                                <option key={index} value={user.id}>{user.question}</option>
                                
                            })} */}
                        </Select>
                    </FormControl>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <TextField
                            className={classes.textField}
                            label="Answer2"
                            id="outlined-size-small"
                            fullWidth
                            variant="outlined"
                            size="small"
                            // onChange={handleChangeEmail}
                            // value={email}
                            required
                        />
                    </FormControl>


                    <div className={classes.Bothbuttons}>
                        <Button onClick={handleClose} variant="contained" className={classes.backButton}>
                            Skip
                        </Button>

                        <Button variant="outlined" style={{ marginLeft: '20px', background: '#2BA4C6', color: 'white', border: 'none', borderRadius: '0px', textTransform: 'capitalize', width: '90px', height: '35px' }}>
                            Done
                        </Button>


                    </div>


                    {/* <Email.Consumer>
                        {(emaildata) => {
                            return (
                                <h1>ddddddddd{emaildata}</h1>
                            )
                        }}
                    </Email.Consumer> */}
                    {/* <select>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                </select>

                <select>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                </select>

                

                <select>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                </select>

                <select>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                    <option>a</option>
                </select> */}

                </DialogContent>
            </Dialog>
        </div>
    );
}
