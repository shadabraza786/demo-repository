import React, { useEffect } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, alpha, withStyles } from '@material-ui/core/styles';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import PaigeonLogo from '../../assets/Images/paigeonlogo.jpeg'
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/MoreVert';
import {rootlink} from "../../constant/configs/linkConfig";
import { useNavigate } from 'react-router-dom';
// import getDetailsRequests from "/modals/Request";
// import Requests from "../modals/Request";
import { MdLocalFireDepartment, MdRecommend, MdKeyboardArrowUp } from 'react-icons/md';
import RecommendedIcon from '../../assets/Images/recommended.jfif';
import LiveVideos from '../../assets/Images/livestream.jfif';
import settingicon from '../../assets/icons/settingicon.png'
import ProfileContainer from '../../components/ProfileContainer'


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 0px 0px #aaaaaa',
    borderBottom : '1px solid #EFEFEF'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    color: '#2BA4C6'
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    background : '#FBFBFB',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight : 'none',
    background : '#FBFBFB',
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    // flexGrow: 1
    marginLeft: '-20px',
    color: '#2BA4C6'
  },
  tabs: {
    minWidth: '10px',
    textTransform: "capitalize"
    // marginLeft : '20px'
  },
  tabsMin: {
    marginLeft: '20px'
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginLeft: '80px',
    width: '600px',
    marginRight : '20px',
    border: '1.5px solid #EFEFEF',
    border: '1.5px solid black',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      // width: 'auto',
    },
  },
  searchIcon: {
    marginLeft : '350px', 
    paddingTop : '5px', 
    marginTop : '5px'
  },
  MainLogo : {
    width : '130px',
    height : '35px',
    marginRight : '20px',
    marginLeft : '20px'
  },
  growIcons: {
    flexGrow: 0.8,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  profilePic : {
    width : '40px',
    height : '40px',
    marginRight : '5px',
    borderRadius : '50%'
  },
  DrawerMain: {
    listStyleType: "none",
    fontSize: '14px',
    // fontWeight: 'bold', 
    lineHeight: '2.5em',
    borderBottom: '1px solid #EFEFEF',

  },
  DrwaerItemsActive: {
    display: 'flex',
    background: '#c3eaf5',
    width: '220px',
    height: '40px',
    marginLeft: '-40px',
    paddingLeft : '50px',
    paddingTop: '5px',
    fontWeight : 'bold'
  },
  DrawerIcons: {
    marginTop: '5px',
    marginRight: '15px',
    marginLeft: '25px'
  },
  DrwaerItemsAll: {
    display: 'flex',
    // background : '#c3eaf5', 
    width: '220px',
    height: '40px',
    marginLeft: '-40px',
    paddingTop: '5px'
  },
  RecommdedIcon : {
    marginLeft : '25px',
    width : '20px',
    height : '25px',
    marginRight: '15px',
    paddingTop: '5px'
},
settingIcon : {
  marginLeft : '26px',
  width : '15px',
  height : '20px',
  marginRight: '15px',
  paddingTop: '5px'
},
LiveVideosIcon : {
  marginLeft : '25px',
    width : '20px',
    height : '30px',
    marginRight: '15px',
    paddingTop: '7px'
},
DrwaerItemsWithTour: {
  display: 'flex',
  // background : '#c3eaf5', 
  // width: '220px',
  height: '40px',
  marginLeft: '10px',
  paddingTop: '5px'
},
}));

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
    marginLeft: '30px',
    marginRight : '-20px'
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    height: '63px',
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


function Profile() {

  const classes = useStyles();
  const getUrlLink = rootlink;
  const baseUrl = getUrlLink.replace("0/", "0");

  const navigate = useNavigate();
//   const requestApiData = new Requests();
//   const getDetailsRequest = new getDetailsRequests()
  
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleDrawerOpen = () => {
  //   setOpen(!open);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

//   const handleMenuLogout = () => {
//     navigate('/');
//     window.alert("Are you sure you want to logout")
//     requestApiData.getlogoutRequest().then(res => {
//     })
//   }

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

//   const getUserDetails = () => {
//     getDetailsRequest.getDetailsUserRequest().then(res => {
//       // const result = json.parse(res.data)
//       const result = res.data
//       console.log(result.user_detail.email)
//       setData(result)
//     })
//   }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      style={{ marginTop: '35px' }}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      {/* <MenuItem>{data.username}</MenuItem> */}
      <MenuItem>{data.user_detail?.email}</MenuItem>
      <Divider></Divider>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuLogout}>Logout</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

//   useEffect(() => {
//     getUserDetails();
//   }, [])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={classes.appBar}
        fooJon={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={true}>
        <img src={PaigeonLogo} className={classes.MainLogo}/>
          
          <AntTabs value={value} onChange={handleChange} aria-label="ant example" >
            <AntTab label="Library" />
            <AntTab label="Market" />
            <AntTab label="Create" />
            <AntTab label="Meet" />
          </AntTabs>

          {/* <Tabs
            className={classes.tabsMin}
          >
            <Tab label="Inbox" value="/inbox/:id" to="/inbox/1" component={Link} />
            <Tab label="Drafts" value="/drafts" to="/drafts" component={Link} />
            <Tab label="Trash" value="/trash" to="/trash" component={Link} />
            <Tab className={classes.tabs} label="Library" value="/inbox/:id" to="/inbox/1" />
            <Tab className={classes.tabs} label="Market" value="/drafts" to="/drafts" />
            <Tab className={classes.tabs} label="Create" value="/trash" to="/trash" />
            <Tab className={classes.tabs} label="Meet" value="/trash" to="/trash" />
          </Tabs> */}

          <div className={classes.search}>
            
            <InputBase
              // placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
              <SearchIcon  className={classes.searchIcon}/>
          </div>

          <div className={classes.growIcons} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton aria-label="show 1 new notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              
              <img src={`${baseUrl}${data.profile?.[0].image}`} className={classes.profilePic} />
            </IconButton> */}
          </div>
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
          


        </Toolbar>
      </AppBar>
      {/* <Divider></Divider> */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })
        }}
        open={open}
      >


        <div className={classes.toolbar}></div>


        <ul className={classes.DrawerMain} style={{ marginTop: '10px', borderBottom: 'none' }}>
          <div className={classes.DrwaerItemsAll}>
          <img src={settingicon} className={classes.settingIcon}></img>
          <li style={{marginTop : '-3px', fontWeight : 'bold'}}> Settings</li>
          </div>

          <div className={classes.DrwaerItemsActive}>
            <li> Your Account</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Link 2</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Link 3</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Link 4</li>
          </div>
        </ul>

      </Drawer>
      <ProfileContainer/>
       {/* {renderMobileMenu}
      {renderMenu} */}
    </div>
  );
}

export default Profile;