import {
    AppBar,
    Container,
    createTheme,
    makeStyles,
    MenuItem,
    MuiThemeProvider,
    Select,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import {CryptoState} from "../CryptoContext";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: 'gold',
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
    select: {
        width: 100,
        height: 40,
        marginRight: 15,
    },
}))


const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const{ currency, setCurrency } = CryptoState()

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    })

    return (
        <MuiThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate("/")}
                                    className={classes.title}
                                    variant="h6"
                        >
                            Crypto Hunter
                        </Typography>
                        <Select variant='outlined'
                                className={classes.select}
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={'USD'}>USD</MenuItem>
                            <MenuItem value={'INR'}>INR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </MuiThemeProvider>
    )
}

export default Header
