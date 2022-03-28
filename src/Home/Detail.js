import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Register/AuthProvider";
import axios from "axios";

const Detail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	const [getUser, setGetUser] = useState("");

	const fetchData = async () => {
		const url = "http://localhost:2234/user";
		const url2 = "https://set05report.herokuapp.com/user";
		const res = await axios.get(`${url2}/${id}`);
		if (res) {
			setGetUser(res.data.data);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Container>
				<Wrapper>
					<ImageHold>
						<Image src={getUser?.avatar} />
						<Text>Hi People, I'm</Text>
						<Title>{getUser?.name}</Title>
					</ImageHold>
				</Wrapper>
			</Container>
		</div>
	);
};

export default Detail;

const Title = styled.div`
	text-align: center;
	font-weight: bold;
	font-size: 60px;
	position: absolute;
	margin-top: 90px;
	transform: scale(1);
	transition: all 350ms;
	z-index: 10;

	:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
`;
const Text = styled.div`
	position: absolute;
`;

const Image = styled.img`
	width: 100%;
	height: 500px;
	object-fit: cover;
	/* position: relative; */
`;

const ImageHold = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	object-fit: cover;
	position: relative;
	z-index: -10;
	color: white;
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Container = styled.div`
	margin-top: 80px;
`;
