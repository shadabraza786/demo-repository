import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoImg from '../assets/Images/Group.png';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { MdLocalFireDepartment , MdRecommend } from 'react-icons/md';
import VideoImgplane from '../assets/Images/Maskgroup.jpg';
import videoTrangleBlue from '../assets/Images/bluetrangle.PNG'
import recommendedIcon from '../assets/Images/recommended.jfif'
import livestreaming from '../assets/Images/livestream.jfif'
import livestreamingBlue from '../assets/Images/livestreaming.png'
import slidernexicon from '../assets/icons/nexticon.png'



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey", marginTop: '-36px', height: '140px', paddingTop: '55px', opacity: '0.50' }}
            onClick={onClick}
        />
    );
}

// function SampleNextArrowChiproot(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={className}
//             style={{ ...style, display: "block", background: "black", color : 'white', height: '19px', borderRadius : '50%' }}
//             onClick={onClick}
//         />
//     );
// }


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
    cardroot: {
        maxWidth: 250,

        marginBottom: '-5px',
        display: 'inline-block',
        margin: '10px',
        boxShadow: '0px 0px 0px #aaaaaa'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        width: '40px',
        height: '40px',
        marginLeft: '0px',
        marginTop : '5px',
        backgroundColor: grey[500],
    },
    chiproot: {
        paddingBottom : '15px',
        borderBottom : '1px solid #EFEFEF',
        marginLeft: '220px',
        marginTop: '-15px',
        marginBottom: '-10px',
        // display: 'flex',
        justifyContent: 'center',

        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    ChipColorMain: {
        width : '50%',
        background: '#2BA4C6',
        color: 'White',
        paddingTop: '7px'
    },
    ChipColorAll: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '15px',
    },
    ChipColorOne: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '25px',
    },
    ChipColorTwo: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '35px',
    },
    ChipColorThree: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '45px',
    },
    ChipColorFour: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '55px',
    },
    ChipColorFive: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '65px',
    },
    ChipColorSix: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '75px',
    },
    ChipColorSix: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '85px',
    },
    ChipColorSeven: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '95px',
    },
    ChipColorEight: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '105px',
    },
    ChipColorNine: {
        background: '#EFEFEF',
        paddingTop: '7px',
        width: '10px',
        marginLeft: '105px',
        // marginRight : '100px'
    },
    cardContent: {
        fontWeight: 'bolder'
    },
    MuiTypographyDisplayBlock: {
        fontSize: '60px',
        color: 'black',
        fontWeight: 'bold'
    },
    CarHeaderMain: {
        marginTop : '-8px',
        // background: 'green',
        display: 'flex',
        width: '250px',
        height: '50px'
    },
    cardHeaderLeft: {
        marginLeft: '-15px',
        // background: 'yellow',
        width: '25%',
        height: '50px'
    },
    cardHeaderRight: {
        marginRight: -'10px',
        marginLeft : '-10px',
        // background: 'red',
        width: '80%',
        height: '50px'
    },
    CardTitle : {
        textAlign : 'left',
        marginTop : '2px'
    },
    CardParagraph : {
        color : 'grey',
        textAlign : 'left',
        marginTop : '-18px',
        fontSize : '12px'
    },
    RecommdedVideos : {
        width : '20px',
        height : '20px',
    },
    livestreamingIcon : {
        width : '25px',
        height : '25px',
        marginLeft:  '8px',
        marginTop : '-4px',
        marginRight : '6px'
    },
    LivestreamLogo : {
        width : '25px',
        height : '25px',
        marginTop : '40px',
        marginLeft : '-30px'
    },
    CardContainer : {
        background: 'white', 
        width: '100%', 
        height: '100%', 
        marginTop: '30px'
    },
    CardMain : {
        width: '83%', 
        marginLeft: '220px', 
        background: 'white', 
        height: '100%', 
        marginRight: '-20px' 
    },
    cardHeadingDiv : {
        display : 'flex',
        marginTop : '40px',
        marginBottom : '-15px'
    },
    CardIcon : {
        marginLeft : '10px'
    },
    cardHeading : {
        marginTop : '-2px',
        marginLeft : '10px'
    }
}));


const CardComponenet = () => {

    const classes = useStyles();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
    };

    const settingsChiproot = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 9,
        nextArrow: <img src={slidernexicon} />
    };
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <div className={classes.chiproot}>
                    <Slider {...settingsChiproot} style={{ marginRight: '20px' }}>
                        <Chip label="All" className={classes.ChipColorMain} />
                        <Chip label="Recent" className={classes.ChipColorAll} />
                        <Chip label="Music" className={classes.ChipColorOne} />
                        <Chip label="Travel" className={classes.ChipColorTwo} />
                        <Chip label="Food" className={classes.ChipColorThree} />
                        <Chip label="News" className={classes.ChipColorFour} />
                        <Chip label="Education" className={classes.ChipColorFive} />
                        <Chip label="Wildlife" className={classes.ChipColorSix} />
                        <Chip label="Pottery" className={classes.ChipColorSeven} />
                        <Chip label="Science" className={classes.ChipColorEight} />
                        <Chip label="Entertainment" className={classes.ChipColorNine} />
                    </Slider>
                </div>


                <div className={classes.CardContainer} >
                    <div className={classes.CardMain}>

                        <div className={classes.cardHeadingDiv}>
                            <MdLocalFireDepartment size="1.2em" className={classes.CardIcon}> 
                             </MdLocalFireDepartment>
                             <h3 className={classes.cardHeading}>Trending Videos  <a href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#2BA4C6' }}>See more</a></h3>
                        </div>
                   
                        

                        <Slider {...settings} style={{ marginRight: '20px' }}>
                            
                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views <br/>3rd October 2022</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views <br/>3rd October 2022</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views <br/>3rd October 2022</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>


                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>
                        </Slider>

                        <div className={classes.cardHeadingDiv}>
                        <img src={recommendedIcon} className={classes.livestreamingIcon}></img >
                             <h3 className={classes.cardHeading}>Recommended <a href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#2BA4C6' }}>See more</a></h3>
                        </div>

                        {/* <h3 style={{ marginLeft: '-790px', marginBottom: '0px' , marginTop: '35px'}}><img className={classes.RecommdedVideos} src={recommendedIcon}></img>&nbsp;&nbsp;Recommended Videos <a href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#2BA4C6' }}>See more</a> </h3> */}

                        <Slider {...settings} style={{ marginRight: '20px' }}>
                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImg}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>


                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>
                        </Slider>

                        <div className={classes.cardHeadingDiv}>
                        <img src={livestreaming} className={classes.livestreamingIcon}></img >
                             <h3 className={classes.cardHeading}>Live Videos  <a href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#2BA4C6' }}>See more</a></h3>
                        </div>
                        

                        {/* <h3 style={{ marginLeft: '-870px', marginBottom: '0px' }}> <img src={livestreaming} className={classes.livestreamingIcon}></img >Live Videos <a href="#" style={{ fontSize: '12px', textDecoration: 'none', color: '#2BA4C6' }}>See more</a> </h3> */}

                        <Slider {...settings} style={{ marginRight: '20px' }}>
                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={videoTrangleBlue}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                        
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                            
                                        </div>
                                        <img src={livestreamingBlue} className={classes.LivestreamLogo}></img>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                        <img src={livestreamingBlue} className={classes.LivestreamLogo}></img>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                        <img src={livestreamingBlue} className={classes.LivestreamLogo}></img>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views </p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>

                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                    
                                </CardContent>
                            </Card>


                            <Card className={classes.cardroot}>
                                <CardMedia
                                    className={classes.media}
                                    image={VideoImgplane}
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <div className={classes.CarHeaderMain}>
                                        <div className={classes.cardHeaderLeft}>
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                               
                                            </Avatar>
                                        </div>
                                        <div className={classes.cardHeaderRight}>
                                            <h4 className={classes.CardTitle}>Lorem ipsum dolor sit,<br/> amet consectetur ipsum  </h4>
                                            <p className={classes.CardParagraph}>Patrick Resse | 200 views</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Slider>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}
export default CardComponenet;