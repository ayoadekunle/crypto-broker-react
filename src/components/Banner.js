import {Container, makeStyles, Typography} from "@material-ui/core";
import BannerCarousel from "./BannerCarousel";

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner.jpeg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    title: {
        fontWeight: "bold",
        marginBottom: 15,
        fontFamily: "Montserrat",
    },
    description: {
        color: "darkgrey",
        textTransform: "capitalize",
        fontFamily: "Montserrat",
    },
}));

const Banner = () => {

    const classes = useStyles()

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography className={classes.title} variant="h2">
                        Crypto Hunter
                    </Typography>
                    <Typography className={classes.description} variant="subtitle2">
                        Get all the info regarding your favorite Crypto Currency
                    </Typography>
                </div>
                <BannerCarousel/>
            </Container>
        </div>
    )

}

export default Banner
