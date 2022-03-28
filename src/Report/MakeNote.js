import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Register/AuthProvider";

const MakeNote = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const { id } = useParams();

	const { _id } = currentUser;
	console.log(_id);

	const [avatar, setAvatar] = useState("");
	const [image, setImage] = useState(
		"https://firebasestorage.googleapis.com/v0/b/codelab-admission.appspot.com/o/social%2Fsimple.png?alt=media&token=99f4b576-37f6-4ba3-8716-686effea539f"
	);

	const [rate, setRate] = useState("");
	const [topic, setTopic] = useState("");
	const [note, setNote] = useState("");

	const makeNote = async (e) => {
		e.preventDefault();
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const noteMaker = {
			topic,
			rate,
			note,
		};

		const url2 =
			"https://set05report.herokuapp.com/user/note/62405bbeeea3543f3119ebb0";
		const uri = `https://set05report.herokuapp.com/user/note/${currentUser._id}`;
		const url = "http://localhost:2234/user/note/";

		await axios.post(uri, noteMaker, config);

		console.log("Note gotten");
		// navigate("/");

		// window.location.reload();
	};

	const makeReport = async (e) => {
		e.preventDefault();
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const report = {
			topic,
			rate,
			note,
		};
		const url = "https://set05report.herokuapp.com/user/note";
		await axios.post(`${url}/${currentUser._id}`, report, config);

		navigate("/");
		// window.location.reload();
	};

	return (
		<div>
			<Container>
				<Wrapper>
					<Card onSubmit={makeReport} type="application/json">
						<Title>Best Learnt, for this Week?</Title>

						<Label></Label>
						<Input
							placeholder="Enter Course Topic"
							value={topic}
							onChange={(e) => {
								setTopic(e.target.value);
							}}
						/>

						<Label>
							<Select
								value={rate}
								onChange={(e) => {
									setRate(e.target.value);
								}}
							>
								<Option value="Just There">Rate your Learning</Option>
								<Option value="Very Clear">Very Clear</Option>
								<Option value="Well Understood">Well Understood</Option>
								<Option value="Excellent">Excellent</Option>
								<Option value="Best Ever">Best Ever</Option>
							</Select>
						</Label>
						<Area
							type="text"
							placeholder="Enter brief a note about how you feel about your learning this week..."
							value={note}
							onChange={(e) => {
								setNote(e.target.value);
							}}
						/>

						<Button type="submit">Submit Note</Button>
					</Card>
				</Wrapper>
			</Container>
		</div>
	);
};

export default MakeNote;

const Option = styled.option`
	font-family: Poppins;
`;

const Select = styled.select`
	width: 315px;
	height: 40px;
	border-radius: 3px;
	padding: 0 10px;
	border: 1px solid grey;
	outline: none;
	font-size: 15px;
	font-family: Poppins;
	/* font-weight: bold; */
	margin: 10px;
`;

const Click = styled.div`
	margin-top: 30px;
`;

const Span = styled(Link)`
	text-decoration: none;
	color: red;
	font-weight: bold;
`;

const Area = styled.textarea`
	resize: none;
	height: 200px;
	width: 300px;
	padding: 7px;
	border: 1px solid gray;
	border-radius: 3px;
	outline: none;
	margin: 10px 0;
	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
`;

const ImageInput = styled.input`
	display: none;
`;
const ImageLabel = styled.label`
	text-align: center;
	background: #004080;
	padding: 15px 40px;
	color: white;
	border-radius: 5px;
	margin-bottom: 20px;
	transition: all 350ms;
	transform: scale(1);

	:hover {
		cursor: pointer;
		transform: scale(0.97);
	}
	@media screen and (max-width: 5000px) {
		padding: 15px 20px;
	}
`;

const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	object-fit: cover;
	background: white;
	margin: 20px 0;
	border: 1px solid lightgrey;
`;

const Label = styled.label`
	font-size: 12px;
	color: red;
	font-weight: bold;
`;
const Button = styled.button`
	margin-top: 20px;
	color: white;
	padding: 15px 30px;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	background: #004080;
	border-radius: 3px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	border: 0;
	font-family: Poppins;
	:hover {
		cursor: pointer;
		transform: scale(0.97);
	}
`;

const Input = styled.input`
	margin: 10px 0;
	padding-left: 10px;
	height: 35px;
	width: 300px;
	border: 1px solid gray;
	border-radius: 3px;
	outline: none;
	::placeholder {
		font-family: Poppins;
		font-size: 16px;
	}
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 20px;
	margin-bottom: 30px;
	color: red;
`;
const Card = styled.form`
	width: 500px;
	min-height: 300px;
	background: white;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding-top: 50px;
	flex-direction: column;
	padding-bottom: 30px;
	margin-bottom: 30px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 100px);
	justify-content: center;
	display: flex;
	align-items: center;
	/* margin-bottom: 40px; */
`;

const Container = styled.div`
	padding-top: 100px;
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 100px);
	background-color: lightgray;
	/* margin-bottom: 40px; */
`;
