import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { MessagesContext } from "./MessagesContext";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: "inline",
	},
}));

export default function Messages() {
	const messages = useContext(MessagesContext);

	const classes = useStyles();
	console.log(messages);

	if (messages) {
		return messages.map((message) => {
			// let messageLength = message.messages.length;
			return (
				<List className={classes.root}>
					<ListItem alignItems='flex-start'>
						<ListItemText
							secondary={
								<React.Fragment>
									<Typography
										component='span'
										variant='body2'
										className={classes.inline}
										color='textPrimary'>
										{`${message.GroupName} -- `}
									</Typography>
									{message.messages[0].message}
								</React.Fragment>
							}></ListItemText>
					</ListItem>
				</List>
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
	// 	<Divider component='li' />
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
