import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
	const [getData, setGetData] = useState([]);

	const fetchData = async () => {
		const url = "http://localhost:2234/user";
		const url2 = "https://set05report.herokuapp.com/user";
		const res = await axios.get(url2);
		if (res) {
			setGetData(res.data.data);
			console.log(res);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<Container>
				<Wrapper>
					{getData?.map((props) => (
						<Card key={props._id}>
							<Image src={props.avatar} />

							<Name>{props.name}</Name>
							<Text>{props.description}</Text>

							<Button to={`/${props._id}`}>Know more about {props.name}</Button>
						</Card>
					))}
				</Wrapper>
			</Container>
		</div>
	);
};

export default Home;

const Button = styled(Link)`
	text-decoration: none;
	padding: 15px 20px;
	background-color: #004080;
	margin-bottom: 40px;
	border-radius: 3px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	color: white;
	font-weight: bold;

	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
`;

const Text = styled.div`
	margin: 20px;
	padding-bottom: 20px;
	color: #004080;
`;
const Name = styled.div`
	color: #004080;
	font-weight: bold;
	font-size: 20px;
	margin-top: 15px;
	text-transform: uppercase;
`;

const Image = styled.img`
	width: 350px;
	height: 370px;
	object-fit: cover;
`;

const Card = styled.div`
	text-decoration: none;
	overflow: hidden;
	margin: 10px;
	width: 350px;
	height: 100%;
	background-color: white;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
		rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	display: flex;
	flex-direction: column;
	align-items: center;

	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.01);
		cursor: pointer;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
`;

const Container = styled.div`
	padding-top: 100px;
	width: 100%;
	min-height: calc(100vh - 100px);
	height: 100%;
	background-color: lightgray;
`;
