import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles({
	typographyStyles: {
		flexGrow: 1,
	},
	iconButtonStyles: {
		color: "white",
		padding: 5,
	},
});

export default function Nav() {
	const classes = useStyles();
	return (
		<div>
			<AppBar>
				<Toolbar>
					<Typography variant='h6' className={classes.typographyStyles}>
						FaceGram
					</Typography>
					<IconButton className={classes.iconButtonStyles}>
						<AccountCircleIcon />
					</IconButton>
					<IconButton className={classes.iconButtonStyles}>
						<MessageIcon />
					</IconButton>
					<IconButton className={classes.iconButtonStyles}>
						<NotificationsIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
