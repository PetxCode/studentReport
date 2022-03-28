import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Register/AuthProvider";
import WorkHistoryProps from "./WorkHistoryProps";

const WorkHistory = () => {
	const [getData, setGetData] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const { id } = useParams();

	const fetchData = async () => {
		const url = "http://localhost:2234/user";
		const res = await axios.get(`${url}/${id}`);
		setGetData(res.data.data);
	};
	useEffect(() => {
		fetchData();
		console.log(getData);
	}, []);
	return (
		<div>
			<WorkHistoryProps
				img="/assets/google.webp"
				title="Month"
				position="Course"
				year="Rate yourself"
				location="Topic"
				text1="Duke presented unprecedented scale and diversity of opportunity. My four years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview."
				text2="I'm grateful for these three years away from home. IMSA was where I learned how to articulate my ideas (as head of the school newspaper), competed thrice in state championships (as tennis captain), fell in love with learning, facilitated service events for the local community, designed a leadership development program for underclassmen, and discovered a passion for the arts. And importantly, it was at IMSA where I felt like I could finally be my weird self."
			/>

			{/* {getData?.map((props) => (
				<div key={props?._id}></div>
			))} */}

			{/* 
			<WorkHistoryProps
				img="/assets/pix2.webp"
				title="University of Ibadan"
				position="CEO"
				year="Class of 2011"
				location="Aurora, IL"
				text1="Duke presented unprecedented scale and diversity of opportunity. My four years of phenomenal professors across the disciplines pushed me to expand, challenge, and adjust my worldview."
			/> */}
		</div>
	);
};

export default WorkHistory;
