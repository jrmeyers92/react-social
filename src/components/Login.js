import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Avatar,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	paperStyle: {
		padding: 20,
		paddingBottom: 50,
		width: 280,
		margin: "80px auto",
	},
});

const Login = (props) => {
	const classes = useStyles();
	const [loginUsername, setLoginUsername] = useState("");

	const avatarStyle = { backgroundColor: "#1bbd7e" };

	const btnstyle = { margin: "8px 0" };

	return (
		<Grid>
			<Paper elevation={10} className={classes.paperStyle}>
				<Grid align='center'>
					<Avatar style={avatarStyle}>
						<LockIcon />
					</Avatar>
				</Grid>
				<form onSubmit={props.setTheUsername(loginUsername)}>
					<TextField
						label='Username'
						placeholder='Enter Username'
						fullWidth
						required
						value={loginUsername}
						onChange={(e) => {
							setLoginUsername(e.target.value);
						}}
					/>
					<TextField
						label='Password'
						type='password'
						placeholder='Enter Password'
						type='password'
						fullWidth
						required
					/>

					<FormControlLabel
						control={<Checkbox name='checkedB' color='primary' />}
						label='Remember me'
					/>
					<Link to='/home'>
						<Button
							type='submit'
							color='primary'
							fullWidth
							variant='contained'
							style={btnstyle}>
							Sign In
						</Button>
					</Link>
				</form>

				<Typography>
					No Authentication. Use fake username and password.
				</Typography>
			</Paper>
		</Grid>
	);
};

export default Login;
