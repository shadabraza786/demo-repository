import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
// import { fontSize, fontWeight } from '@mui/system';
// import { grey } from '@material-ui/core/colors';
// import CircleIcon from '../assets/icons/Vector.png'
// import slidernexicon from '../assets/icons/nexticon.png'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    content: {
        background: 'white',
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    AccountHeading: {
        textAlign: 'left',
        fontSize: '18px'
    },
    Photopara: {
        textAlign: 'left',
        fontSize: '16px',
        marginTop: '40px'
    },
    avtarAndchangeButtonDiv: {
        display: 'flex',
        marginTop: '-15px'
    },
    avatar: {
        color: 'black',
        fontWeight: 'bold',
        width: '100px',
        height: '100px',
        marginLeft: '0px',
        marginTop: '5px',
        backgroundColor: '#EFEFEF',
    },
    ChangeButton: {
        background: '#2BA4C6',
        width: '120px',
        height: '50px',
        marginTop: '30px',
        marginLeft: '20px',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        // fontWeight : 'bold'
    },
    profileform: {
        textAlign: 'left',
        marginTop: '20px',

    },
    inputLabelFullName: {
        fontSize: '16px'
    },
    inputLabelEmail: {
        fontSize: '16px'
    },
    inputLabelSelectFiled   : {
        fontSize: '16px',
        marginTop : '-50px'
    },
    inputLabelGender: {
        fontSize: '16px'
    },
    inputLabelRole: {
        fontSize: '16px',
        marginTop : '-50px'
    },
    Inputbox: {
        width: '440px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        marginTop: '5px',
        border: '1px solid #dbd8d8'
    },
    formGroupMain: {
        width: '100%',
        height: '500px',
        // background : 'red',
        marginTop: '50px',
    },
    formGroup: {
        marginTop: '30px'
    },
    formGroupPassword: {
        marginTop: '30px'
    },
    formGroupRole: {
        marginTop: '15px'
    },
    formGroupSelectField: {
        marginTop: '15px'
    },

    inputLabelPassword: {
        fontSize: '16px',
        paddingBottom: '20px'
    },
    InputboxPassword: {
        // backgroundImage : <img src={slidernexicon}></img>,
        marginTop: '5px',
        width: '440px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        border: '1px solid #dbd8d8'
    },
    InputboxRadioMale: {
        marginTop: '5px',
        width: '20px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        backgroud : '#dbd8d8',
        border: '1px solid #dbd8d8'
    },
    InputboxRadioFemale : {
        marginLeft : '70px',
        marginTop: '5px',
        width: '20px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        backgroud : '#dbd8d8',
        border: '1px solid #dbd8d8'
    },
    passwordAndButton: {
        display: 'flex'
    },
    GenderInputDiv: {
        display: 'flex',
        marginTop : '-15px'
    },
    ChangeButtonWithPassword: {
        background: '#2BA4C6',
        width: '120px',
        height: '50px',
        marginTop: '7px',
        marginLeft: '20px',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        // fontWeight : 'bold'
    },
    GenderPara : {
        marginTop : '22px',
        marginLeft : '15px',
        fontSize: '16px',
    },
    SelectItemDiv : {
        width : '100px',
        height : '50px',
        background : '#dbd8d8',
        borderRadious : '20px',
        border : '1px solid black',
        marginBottom : '50px'
    }
    
}))

const ProfileContainer = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h1 className={classes.AccountHeading}>Your Account</h1>
                <p className={classes.Photopara}>Photo</p>
                <div className={classes.avtarAndchangeButtonDiv}>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        RD
                    </Avatar>
                    <button className={classes.ChangeButton}>Change</button>
                </div>

                <form className={classes.profileform}>
                    <div className={classes.formGroupMain}>
                        <div className={classes.formGroup}>
                            <label className={classes.inputLabelFullName}>Full Name</label><br />
                            <input type='text' placeholder='Robert Dura' className={classes.Inputbox}></input>
                        </div>

                        <div className={classes.formGroup}>
                            <label className={classes.inputLabelEmail}>Email</label><br />
                            <input type='text' placeholder='robert@gmail.com' className={classes.Inputbox}></input>
                        </div>



                        <div className={classes.formGroupPassword}>
                            <label className={classes.inputLabelPassword} >Password</label><br />
                            <div className={classes.passwordAndButton}>
                                <input type='password' placeholder='Password' className={classes.InputboxPassword}></input>
                                <button className={classes.ChangeButtonWithPassword}>Change</button>
                            </div>
                        </div>

                        <div className={classes.formGroup}>
                            <label className={classes.inputLabelGender}>Gender</label><br />
                            <div className={classes.GenderInputDiv}>
                                <input type='radio' placeholder='Password' className={classes.InputboxRadioMale}></input>
                                <p className={classes.GenderPara}>Male</p>

                                <input type='radio' placeholder='Password' className={classes.InputboxRadioFemale}></input>
                                <p className={classes.GenderPara}>Female</p>

                                <input type='radio' placeholder='Password' className={classes.InputboxRadioFemale}></input>
                                <p className={classes.GenderPara}>Other</p>
                            </div>
                        </div>

                        <div className={classes.formGroupRole}>
                            <label className={classes.inputLabelRole}>Role</label><br />
                            <div className={classes.GenderInputDiv}>
                                <input type='radio' placeholder='Password' className={classes.InputboxRadioMale}></input>
                                <p className={classes.GenderPara}>Content Creator</p>

                                <input type='radio' placeholder='Password' className={classes.InputboxRadioFemale}></input>
                                <p className={classes.GenderPara}>Business Owner</p>

                                <input type='radio' placeholder='Password' className={classes.InputboxRadioFemale}></input>
                                <p className={classes.GenderPara}>End User</p>
                            </div>
                        </div>

                        <div className={classes.formGroupSelectField}>
                            <label className={classes.inputLabelSelectFiled}>Field of Interest</label><br />
                            <select  className={classes.Inputbox}>
                                <option></option>
                                <option>ddd</option>
                                <option>ddd</option>
                            </select>
                        </div>

                        {/* <div className={classes.formGroupSelectField}>
                            <div className={classes.SelectItemDiv} >
                                <div>
                                        <h1>All</h1>
                                </div>
                            </div>
                           
                        </div> */}

                        {/* <div className={classes.formGroupSelectField}>
                            <label className={classes.inputLabelSelectFiled}>Field of Interest</label><br />
                            
                        </div> */}
                    </div>


                </form>

                {/* <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p> */}
            </main>


        </React.Fragment>
    )
}
export default ProfileContainer;

