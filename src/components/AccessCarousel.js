import {makeStyles, Typography} from "@material-ui/core";
import axios from "axios";
import {TrendingCoins} from "../config/api";
import {CryptoState} from "../CryptoContext";
import {useEffect, useState} from "react";
import AliceCarousel from "react-alice-carousel";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    carousel: {
        height: "300px",
        width: "300px",
        display: "flex",
        alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white",
    }
}));

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const AccessCarousel = () => {

    const classes = useStyles();
    const { currency, symbol } = CryptoState();
    const [trending, setTrending] = useState([]);

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    };

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency]);


    const items = trending.map((coin) => {
        return (
            <Link className={classes.carouselItem}
                  to={`/coins/${coin.id}`}
            >
                <img src={coin?.image}
                     alt={coin.name}
                     height="200"
                     style={{marginBottom: 10}}
                />
            </Link>
        )
    })


    return (
        <div className={classes.carousel}>
            <AliceCarousel mouseTracking
                           infinite
                           autoPlayInterval={3000}
                           animationDuration={1500}
                           animationType="fadeout"
                           disableDotsControls
                           disableButtonsControls
                           autoPlay
                           items={items}
            />
        </div>
    )
}

export default AccessCarousel;
