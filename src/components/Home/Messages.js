import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { MessagesContext } from "./MessagesContext";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
		cursor: "pointer",
	},
	inline: {
		display: "inline",
	},
}));

export default function Messages() {
	const messages = useContext(MessagesContext);
	const classes = useStyles();

	if (messages) {
		return messages.map((message) => {
			let messageLength = message.messages.length - 1;
			console.log(messageLength);
			return (
				<div className={classes.root}>
					<List className={classes.root}>
						<ListItem alignItems='flex-start'>
							<ListItemText
								primary={message.GroupName}
								secondary={
									<React.Fragment>
										{message.messages[messageLength].message}
									</React.Fragment>
								}></ListItemText>
						</ListItem>
					</List>
					<Divider component='li' variant='middle' />
				</div>
			);
		});
	}

	// <List className={classes.root}>
	// 	<ListItem alignItems='flex-start'>
	// 		<ListItemText
	// 			primary='Summer BBQ'
	// secondary={
	// 	<React.Fragment>
	// 		<Typography
	// 			component='span'
	// 			variant='body2'
	// 			className={classes.inline}
	// 			color='textPrimary'>
	// 			to Scott, Alex, Jennifer
	// 		</Typography>
	// 		{" — Wish I could come, but I'm out of town this…"}
	// 	</React.Fragment>
	// }
	// 		/>
	// 	</ListItem>
	// <Divider component='li' />
	// 	<ListItem alignItems='flex-start'>
	// 		<ListItemText
	// 			primary='Work Group'
	// 			secondary={
	// 				<React.Fragment>
	// 					<Typography
	// 						component='span'
	// 						variant='body2'
	// 						className={classes.inline}
	// 						color='textPrimary'>
	// 						to Work Chat
	// 					</Typography>
	// 					{" — The dealine is this Thursday but I'm running behind…"}
	// 				</React.Fragment>
	// 			}
	// 		/>
	// 	</ListItem>
	// </List>
}
