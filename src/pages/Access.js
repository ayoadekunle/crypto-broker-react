import {Button, Card, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import AccessCarousel from "../components/AccessCarousel";
import {useState} from "react";

const Access = () => {

    const useStyles = makeStyles((theme) => ({
        container: {
            minHeight: `calc(100vh - 70px)`, display: "inline-flex",
        }, carouselContainer: {
            width: "50vw", display: "flex", alignItems: "center", justifyContent: "center",
        }, cardContainer: {
            width: "50vw", display: "flex", alignItems: "center", justifyContent: "center",
        }, card: {
            width: "70%",
            maxWidth: "450px",
            padding: "20px",
            borderRadius: "5px",
            backgroundColor: "#dcdcdd",
            color: "black",
            textAlign: "center",
        }, textField: {
            width: "100%",
            color: "black",
            borderColor: "black",
            '& label.Mui-focused': {
                color: "#eebc1d",
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: "#eebc1d",
                },
            },
        }, submitButton: {
            backgroundColor: "#14161a", height: "50px", width: "80%", color: "white", "&:hover": {
                backgroundColor: "#3a3b3f",
            }
        }, changeCardButton: {
            backgroundColor: "#eebc1d", height: "50px", width: "80%", border: "none", "&:hover": {
                backgroundColor: "#d1a61a",
            }
        }, hr: {
            margin: "10px 0",
        }
    }));

    const classes = useStyles();

    const SignUpCard = (<Card className={classes.card}>
            <Typography variant="h4" style={{margin: "10px 0"}}>Create an account</Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="First Name"
                        type="text"
                        placeholder="John"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Last Name"
                        type="text"
                        placeholder="Doe"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        placeholder="name@example.com"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Password"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Confirm Password"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" className={classes.submitButton}>
                        Create Account
                    </Button>
                </Grid>
            </Grid>
            <hr className={classes.hr}/>
            <Button variant="outlined" className={classes.changeCardButton}
                    onClick={() => setAccessCard(0)}>
                Log in to existing account
            </Button>
        </Card>)

    const SignInCard = (
        <Card className={classes.card}>
            <Typography variant="h4" style={{margin: "10px 0"}}>Sign in to your account</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Email"
                        type="email"
                        placeholder="name@example.com"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        className={classes.textField}
                        label="Password"
                        type="password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" className={classes.submitButton}>
                        Log in
                    </Button>
                </Grid>
            </Grid>
            <hr className={classes.hr}/>
            <Button variant="outlined" className={classes.changeCardButton}
                    onClick={() => setAccessCard(1)}>
                Create an Account
            </Button>
        </Card>
    )

    const [accessCard, setAccessCard] = useState(0);

    return (<div className={classes.container}>
            <div className={classes.carouselContainer}>
                <AccessCarousel/>
            </div>
            <div className={classes.cardContainer}>
                { accessCard === 0 ? SignInCard : SignUpCard }
            </div>
        </div>)
};

export default Access;
