import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CloseIcon from '@material-ui/icons/Close';
import { fontWeight } from '@mui/system';
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
    inputLabelAnswerOne: {
        fontSize: '16px'
    },
    inputLabelSelectFiled: {
        fontSize: '16px',
        marginTop: '-50px'
    },
    inputLabelGender: {
        fontSize: '16px'
    },
    inputLabelRole: {
        fontSize: '16px',
        marginTop: '-50px'
    },
    Inputbox: {
        width: '440px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        marginTop: '5px',
        paddingRight: '50px',
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
    formGroupSecurity: {
        marginTop: '30px',
        display: 'flex'
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
        backgroud: '#dbd8d8',
        border: '1px solid #dbd8d8'
    },
    InputboxRadioFemale: {
        marginLeft: '70px',
        marginTop: '5px',
        width: '20px',
        height: '55px',
        padding: '15px',
        // color : 'white',
        fontSize: '14px',
        backgroud: '#dbd8d8',
        border: '1px solid #dbd8d8'
    },
    passwordAndButton: {
        display: 'flex'
    },
    GenderInputDiv: {
        display: 'flex',
        marginTop: '-15px'
    },
    CancleButton: {
        background: '#dbd8d8',
        width: '120px',
        height: '50px',
        marginTop: '7px',
        marginLeft: '20px',
        border: 'none',
        color: 'black',
        fontSize: '18px',
        fontWeight : 'bold'
    },
    ChangeButtonWithPassword: {
        background: '#2BA4C6',
        width: '120px',
        height: '50px',
        marginTop: '7px',
        marginLeft: '20px',
        border: 'none',
        color: 'White',
        fontSize: '18px',
        // fontWeight : 'bold'
    },
    GenderPara: {
        marginTop: '22px',
        marginLeft: '15px',
        fontSize: '16px',
    },
    SelectItemDivAll: {
        display: 'flex',
        width: '90px',
        height: '40px',
        background: '#dbd8d8',
        borderRadius: '25px',
        // marginBottom : '50px'
    },
    SelectItems: {
        display: 'flex',
        marginTop: '20px'
    },
    SelectItemDivRecent: {
        display: 'flex',
        width: '125px',
        height: '40px',
        background: '#dbd8d8',
        borderRadius: '25px',
        marginLeft: '10px'
        // marginBottom : '50px'
    },
    SelectItemDivEducation: {
        display: 'flex',
        width: '150px',
        height: '40px',
        background: '#dbd8d8',
        borderRadius: '25px',
        marginLeft: '10px'
        // marginBottom : '50px'
    },
    selctItemHeading: {
        marginTop: '10px',
        marginLeft: '15px',
        paddingTop: '0px',
        fontSize: '18px',
        // fontWeight : 'bold'
    },
    SelectItemIcon: {
        marginTop: '10px',
        marginLeft: '15px',
        // marginBottom : '10px'
    },
    formGroupAnswer: {
        marginLeft: '50px'
    },
    formGroupUpdateButton: {
        marginTop: '50px',
        marginLeft : '800px',
        paddingBottom : '50px'
    },

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
                            <select className={classes.Inputbox}>
                                <option></option>
                            </select>
                        </div>

                        <div className={classes.formGroupSelectField}>
                            <div className={classes.SelectItems}>
                                <div className={classes.SelectItemDivAll}>
                                    <p className={classes.selctItemHeading}>All</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Recent</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Music</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Travel</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Food</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>News</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivEducation}>
                                    <p className={classes.selctItemHeading}>Education</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Wildlife</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>
                            </div>

                            <div className={classes.SelectItems}>
                                <div className={classes.SelectItemDivEducation} style={{ marginLeft: '-2px' }}>
                                    <p className={classes.selctItemHeading}>Education</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>

                                <div className={classes.SelectItemDivRecent}>
                                    <p className={classes.selctItemHeading}>Wildlife</p>
                                    <CloseIcon className={classes.SelectItemIcon} />
                                </div>
                            </div>

                            <div className={classes.formGroup}>
                                <label className={classes.inputLabelEmail}>Recovery Email Address*</label><br />
                                <input type='text' className={classes.Inputbox}></input>
                            </div>

                            <div className={classes.formGroup}>
                                <label className={classes.inputLabelEmail}>Contact Number*</label><br />
                                <input type='text' className={classes.Inputbox}></input>
                            </div>

                            <hr style={{ marginTop: '50px', marginBottom: '30px', color: '#dbd8d8' }}></hr>

                            <h3>Security Information</h3>

                            <div className={classes.formGroupSecurity}>
                                <div>
                                    <label className={classes.inputLabelEmail}>Question 1*</label><br />
                                    <select className={classes.Inputbox}>
                                        <option>Which city you were born in?</option>
                                    </select>
                                </div>

                                <div className={classes.formGroupAnswer}>
                                    <label className={classes.inputLabelAnswerOne}>Answer 1*</label><br />
                                    <input type='text' placeholder="Australia" className={classes.Inputbox}></input>
                                </div>
                            </div>

                            <div className={classes.formGroupSecurity}>
                                <div>
                                    <label className={classes.inputLabelEmail}>Question 2*</label><br />
                                    <select className={classes.Inputbox}>
                                        <option></option>
                                    </select>
                                </div>

                                <div className={classes.formGroupAnswer}>
                                    <label className={classes.inputLabelAnswerOne}>Answer 2*</label><br />
                                    <input type='text' className={classes.Inputbox}></input>
                                </div>
                            </div>

                            <div className={classes.formGroupUpdateButton}>
                               
                                <div className={classes.passwordAndButton}>
                                    <button className={classes.CancleButton}>Cancel</button>
                                    <button className={classes.ChangeButtonWithPassword}>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </React.Fragment>
    )
}
export default ProfileContainer;

