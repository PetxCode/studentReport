import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Register/AuthProvider";

const WorkHistoryProps = () => {
	const [getData, setGetData] = useState([]);
	const { currentUser } = useContext(AuthContext);
	const { id } = useParams();

	const fetchData = async () => {
		const url = "http://localhost:2234/user";
		const url2 = "https://set05report.herokuapp.com/user";
		const res = await axios.get(`${url2}/${id}`);
		setGetData(res.data.data);
	};
	useEffect(() => {
		fetchData();
		console.log(getData);
	}, []);
	return (
		<Div>
			{getData?.report?.map((props) => (
				<Container key={props._id}>
					<Wrapper>
						<Week>
							<div>week</div>
							<p>{props.week}</p>
						</Week>
						<Content>
							<Title>{props?.month}</Title>
							<Company>
								<span>Course: </span>
								{/* <br /> */}
								{props?.course}
							</Company>

							<Location>
								<span> Course Topic: </span>
								{/* <br /> */}
								{props?.topic}
							</Location>

							<Position>
								<span>This is what, i can rate myself: </span>
								{props?.rate}/5
							</Position>
							<SubText>
								<span>Brief description of what i learnt: </span>

								{props?.note}
								<br />
							</SubText>
							<SubTextCode>
								<span>Here a simple code sample for my learning: </span>
								{/* <br /> */}
								{props?.codeSample}
							</SubTextCode>
							<br />
						</Content>
					</Wrapper>
				</Container>
			))}
		</Div>
	);
};

export default WorkHistoryProps;

const Week = styled.div`
	width: 200px;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	margin-right: 30px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		font-weight: bold;
		font-size: 20px;
		margin: 0;
	}

	p {
		font-weight: bold;
		font-size: 70px;
		color: red;
		margin: 0;
	}

	@media screen and (max-width: 760px) {
		width: 90%;
		height: 300px;
		margin: 30px 0;
		object-fit: cover;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		div {
			font-weight: bold;
			font-size: 20px;
			margin: 0;
		}

		p {
			font-weight: bold;
			font-size: 150px;
			color: red;
			margin: 0;
		}
	}
`;

const SubText = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin-bottom: 32px;

	span {
		font-size: 17px;
		color: #004080;
		font-weight: bold;
		margin-bottom: 10px;
		line-height: 1.2;
	}

	@media screen and (max-width: 760px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
	}
`;

const SubTextCode = styled.div`
	width: 600px;
	font-style: italic;
	font-weight: 500;
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	span {
		font-size: 17px;
		color: #004080;
		font-weight: bold;
		margin-bottom: 10px;
		line-height: 1.2;

		font-style: normal;
	}

	@media screen and (max-width: 460px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 14px;
	}
`;

const Location = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	font-weight: bold;
	font-size: 20px;
	color: #004080;

	span {
		font-size: 13px;
		color: #004080;
		font-weight: bold;
	}

	@media screen and (max-width: 760px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
const Position = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin-bottom: 35px;
	font-weight: bold;
	color: red;
	font-size: 20px;

	span {
		font-size: 13px;
		color: #004080;
		font-weight: bold;
	}

	@media screen and (max-width: 760px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Company = styled.div`
	width: 600px;
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
	font-weight: bold;
	color: #004080;
	font-size: 20px;

	span {
		font-size: 13px;
		color: #004080;
		font-weight: bold;
	}

	@media screen and (max-width: 760px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Title = styled.div`
	font-size: 38px;
	margin-bottom: 20px;
	color: #3377cc;

	font-weight: bold;

	:hover {
		cursor: pointer;
		color: #0080e5;
	}
`;

const Content = styled.div`
	@media screen and (max-width: 760px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Image = styled.img`
	width: 200px;
	height: 120px;
	object-fit: cover;
	border-radius: 10px;
	margin-right: 30px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

	@media screen and (max-width: 760px) {
		width: 90%;
		height: 300px;
		margin: 30px 0;
		object-fit: cover;
		border-radius: 10px;
	}
`;

const Div = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 760px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 760px) {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	color: black;

	@media screen and (max-width: 760px) {
		margin: 0;
	}
`;
