import angela from "../../public/assets/images/avatar-angela-gray.webp";
import anna from "../../public/assets/images/avatar-anna-kim.webp";
import jacob from "../../public/assets/images/avatar-jacob-thompson.webp";
import kimberly from "../../public/assets/images/avatar-kimberly-smith.webp";
import mark from "../../public/assets/images/avatar-mark-webber.webp";
import nathan from "../../public/assets/images/avatar-nathan-peterson.webp";
import rizky from "../../public/assets/images/avatar-rizky-hasanuddin.webp";

const obj = [
	{
		id: 1,
		name: "Mark Webber",
		avatar: mark,
		type: "reacted to your recent post ",
		post: "My first tournament today!",
		time: "1m ago",
		status: "unread",
	},
	{
		id: 2,
		name: "Angela Gray",
		avatar: angela,
		type: "followed you",
		time: "5m ago",
		status: "unread",
	},
	{
		id: 3,
		name: "Jacob Thompson",
		avatar: jacob,
		type: "has joined your group",
		group: "Chess Club",
		time: "1 day ago",
		status: "unread",
	},
	{
		id: 4,
		name: "Rizky Hasanuddin",
		avatar: rizky,
		type: "sent you a private message",
		time: "5m ago",
		status: "read",
		message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
  I'm already having lots of fun and improving my game.`,
	},
	{
		id: 5,
		name: "Kimberly Smith",
		avatar: kimberly,
		type: "commented on your picture",
		time: "1 week ago",
		status: "read",
		image: "./",
	},
	{
		id: 6,
		name: "Nathan Peterson",
		avatar: nathan,
		type: "reacted to your recent post ",
		post: "5 end-game strategies to increase your win rate",
		time: "2 weeks ago",
		status: "read",
	},
	{
		id: 7,
		name: "Anna Kim",
		avatar: anna,
		type: "left the group ",
		group: "Chess Club",
		time: "2 weeks ago",
		status: "read",
	},
];

export default obj;
