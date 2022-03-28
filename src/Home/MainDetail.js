import React from "react";
import Note from "../Note/Note";
import Detail from "./Detail";
import Journey from "./Journey";
import WorkHistory from "./WorkHistory";
import WorkHistoryProps from "./WorkHistoryProps";

const MainDetail = () => {
	return (
		<div>
			<Detail />
			<br />
			<Journey
				text="My Learning Curve Report"
				subText="The people in my life are everything to me. "
			/>
			<br />
			<WorkHistoryProps />
			<br />
			<Journey
				text="My Best Learnt for the Week"
				subText="This is the most, i got for this Week "
			/>

			<Note />
			<br />
			<br />
		</div>
	);
};

export default MainDetail;
