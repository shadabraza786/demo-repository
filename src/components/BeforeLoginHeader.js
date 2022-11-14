import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SignupModal from '../modals/SignupModal';
import LoginModal from '../modals/LoginModal'
import { makeStyles, alpha, withStyles } from '@material-ui/core/styles';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import PaigeonLogo from '../assets/Images/paigeonlogo.jpeg'
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { MdLocalFireDepartment, MdRecommend, MdKeyboardArrowUp } from 'react-icons/md';
import RecommendedIcon from '../assets/Images/recommended.jfif';
import LiveVideos from '../assets/Images/livestream.jfif';
import settingicon from '../assets/icons/settingicon.png'



const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: '0px 0px 0px #aaaaaa',
    borderBottom: '1px solid #EFEFEF'
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
    background: '#FBFBFB',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    borderRight: 'none',
    background: '#FBFBFB',
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
    fontSize: '20px',
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
    width: '510px',
    marginRight: '20px',
    border: '1.5px solid #EFEFEF',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      // width: 'auto',
    },
  },
  searchIcon: {
    marginLeft : '280px', 
    paddingTop : '5px', 
    marginTop : '5px'
  },
  MainLogo: {
    width: '130px',
    height: '35px',
    marginRight: '20px',
    marginLeft: '20px'
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
    paddingTop: '5px'
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
  DrwaerItemsWithTour: {
    display: 'flex',
    // background : '#c3eaf5', 
    // width: '220px',
    height: '40px',
    marginLeft: '20px',
    paddingTop: '5px'
  },
  RecommdedIcon : {
    marginLeft : '25px',
    width : '20px',
    height : '25px',
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
settingIcon : {
  marginLeft : '26px',
  width : '15px',
  height : '20px',
  marginRight: '17px',
  paddingTop: '5px'
},
}));

const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
    marginLeft: '30px',
    marginRight: '-20px'
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


function BeforeLoginHeader() {

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);

  // const handleDrawerOpen = () => {
  //   setOpen(!open);
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

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
          <img src={PaigeonLogo} className={classes.MainLogo} />
          
          <AntTabs value={value} onChange={handleChange} aria-label="ant example" >
            <AntTab label="Library" />
            <AntTab label="Market" />
            <AntTab label="Create" />
            <AntTab label="Meet" />
          </AntTabs>

          <div className={classes.search}>

            <InputBase
              // placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIcon className={classes.searchIcon} />
          </div>

          <IconButton aria-label="show 1 new notifications" color="inherit">
            <Badge badgeContent={0} >
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <LoginModal></LoginModal>
          <SignupModal></SignupModal>

          <div className={classes.growIcons} />
          <div className={classes.sectionDesktop}></div>

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
        <ul className={classes.DrawerMain}>
          <div className={classes.DrwaerItemsActive}>
            <VideoLibraryOutlinedIcon className={classes.DrawerIcons} />
            <li> Video Library</li>
          </div>

          <div className={classes.DrwaerItemsAll}>
            <MdLocalFireDepartment size="1.5em" className={classes.DrawerIcons} />
            <li> Trending Videos</li>
          </div>

          <div className={classes.DrwaerItemsAll}>
          <img src={RecommendedIcon} className={classes.RecommdedIcon}></img>
            <li> Recommended</li>
          </div>

          <div className={classes.DrwaerItemsAll} style={{ marginBottom: '10px' }}>
          <img src={LiveVideos} className={classes.LiveVideosIcon}></img>
            <li> Live Videos</li>
          </div>

        </ul>
        <ul className={classes.DrawerMain} style={{ marginTop: '-10px' }}>
          <div className={classes.DrwaerItemsAll}>
            <img src={RecommendedIcon} className={classes.RecommdedIcon}></img>
            <li> My Videos</li>
          </div>

          <div className={classes.DrwaerItemsAll}>
          <img src={RecommendedIcon} className={classes.RecommdedIcon}></img>
            <li> Watch History</li>
          </div>

          <div className={classes.DrwaerItemsAll} style={{ marginBottom: '10px' }}>
          <img src={RecommendedIcon} className={classes.RecommdedIcon}></img>
            <li> Liked Videos</li>
          </div>
        </ul>

        <ul className={classes.DrawerMain} style={{ marginTop: '-10px', borderBottom: 'none' }}>
          <div className={classes.DrwaerItemsAll}>
          <img src={settingicon} className={classes.settingIcon}></img>
            <li style={{marginTop : '-3px'}}> Settings</li>
          </div>

          <div className={classes.DrwaerItemsAll}>
            <img src={RecommendedIcon} className={classes.RecommdedIcon}></img>
            <li> Take a Tour</li>
            <MdKeyboardArrowUp size="1.5em" className={classes.DrawerIcons} style={{ marginTop: '8px' }}></MdKeyboardArrowUp>
          </div>

          <div className={classes.DrwaerItemsWithTour}>
            <li> Video Library</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Video Market</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Video Create</li>
          </div>


          <div className={classes.DrwaerItemsWithTour}>
            <li> Video Meet</li>
          </div>
        </ul>

      </Drawer>
    </div>
  );
}

export default BeforeLoginHeader;