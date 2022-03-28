import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../Register/AuthProvider";
import { useParams } from "react-router-dom";

const Note = () => {
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
		<div>
			<Container>
				<Wrapper>
					{getData?.note?.map((props) => (
						<Card key={props._id}>
							<Holder>
								<Title>{props.topic}</Title>
								<Icon> 🚀</Icon>
							</Holder>
							<Text>{props.note}</Text>

							<Week>
								<Hold>
									week
									<span>{props.rate}</span>
								</Hold>
							</Week>
						</Card>
					))}
				</Wrapper>
			</Container>
		</div>
	);
};

export default Note;

const Hold = styled.div`
	width: 100%;
	height: 100%;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	margin: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding-top: 10px;

	span {
		font-size: 20px;
		font-weight: bold;
		color: red;
		padding-bottom: 10px;
	}
`;
const Week = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
`;

const Text = styled.div`
	margin-left: 20px;
	margin-right: 10px;
	margin-top: 20px;
	color: #004080;

	@media screen and (max-width: 350px) {
		margin-top: 10px;
		font-size: 15px;
	}
`;

const Icon = styled.div`
	transform: scale(2);
	margin: 20px;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 30px;

	@media screen and (max-width: 350px) {
		font-size: 20px;
	}
`;

const Holder = styled.div`
	display: flex;
	width: 90%;
	margin: 5px 0;
	align-items: center;
`;

const Card = styled.div`
	width: 350px;
	height: 100%;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px;

	@media screen and (max-width: 350px) {
		width: 300px;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 350px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Container = styled.div`
	margin-top: 50px;
	width: 100%;
	height: 100%;
`;
