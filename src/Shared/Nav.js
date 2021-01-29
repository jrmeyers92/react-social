import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles({
	typographyStyles: {
		flexGrow: 1,
	},
	iconButtonStyles: {
		color: "white",
		padding: 5,
	},
});

export default function Nav(props) {
	const classes = useStyles();
	return (
		<div>
			<AppBar position='static' style={{ margin: 0 }}>
				<Toolbar>
					<Typography variant='h6' className={classes.typographyStyles}>
						FaceGram
					</Typography>
					<IconButton className={classes.iconButtonStyles}>
						<AccountCircleIcon />
						<Typography>{props.name}</Typography>
					</IconButton>
					<IconButton className={classes.iconButtonStyles}>
						<Badge badgeContent={3} color='secondary'>
							<MessageIcon />
						</Badge>
					</IconButton>
					<IconButton className={classes.iconButtonStyles}>
						<Badge badgeContent={6} color='secondary'>
							<NotificationsIcon />
						</Badge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}
