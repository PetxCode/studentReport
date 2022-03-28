import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Register/AuthProvider";

const MakeReport = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);

	// const { _id } = currentUser;
	// console.log(_id);

	const [avatar, setAvatar] = useState("");
	const [image, setImage] = useState(
		"https://firebasestorage.googleapis.com/v0/b/codelab-admission.appspot.com/o/social%2Fsimple.png?alt=media&token=99f4b576-37f6-4ba3-8716-686effea539f"
	);

	const [month, setMonth] = useState("");
	const [rate, setRate] = useState("");
	const [week, setWeek] = useState("");
	const [topic, setTopic] = useState("");
	const [course, setCourse] = useState("");
	const [note, setNote] = useState("");
	const [codeSample, setCodeSample] = useState("");

	const makeReport = async (e) => {
		e.preventDefault();
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const report = {
			topic,
			course,
			rate,
			month,
			week,
			codeSample,
			note,
		};
		const url = "https://set05report.herokuapp.com/user/report";
		await axios.post(`${url}/${currentUser._id}`, report, config);

		navigate("/");
		// window.location.reload();
	};

	return (
		<div>
			<Container>
				<Wrapper>
					<Card onSubmit={makeReport} type="application/json">
						<Title>What have you Learnt, this Week?</Title>

						{/* <Image src={image} alt="Logo" />
						<ImageLabel htmlFor="image">Upload Image</ImageLabel>
						<ImageInput id="image" type="file" onChange={uploadImage} /> */}

						{/* <Label> {errors.name && errors.name.message}</Label>
						<Input
							placeholder="Enter your Month"
							value={month}
							onChange={(e) => {
								setMonth(e.target.value);
							}}
						/> */}

						<Select
							value={month}
							onChange={(e) => {
								setMonth(e.target.value);
							}}
						>
							<Option value="0">Enter Learning Month</Option>
							<Option value="January">January</Option>
							<Option value="February">February</Option>
							<Option value="March">March</Option>
							<Option value="April">April</Option>
							<Option value="May">May</Option>
							<Option value="June">June</Option>
							<Option value="July">July</Option>
							<Option value="August">August</Option>
							<Option value="September">September</Option>
							<Option value="October">October</Option>
							<Option value="November">November</Option>
							<Option value="December">December</Option>
						</Select>

						<Select
							value={week}
							onChange={(e) => {
								setWeek(e.target.value);
							}}
						>
							<Option value="0">Enter Study Week</Option>
							<Option value="1">1</Option>
							<Option value="2">2</Option>
							<Option value="3">3</Option>
							<Option value="4">4</Option>
						</Select>

						<Label></Label>
						<Input
							placeholder="Enter Course"
							value={course}
							onChange={(e) => {
								setCourse(e.target.value);
							}}
						/>

						<Label></Label>
						<Input
							placeholder="Enter Course Topic"
							value={topic}
							onChange={(e) => {
								setTopic(e.target.value);
							}}
						/>

						<Label> </Label>

						<Select
							value={rate}
							onChange={(e) => {
								setRate(e.target.value);
							}}
						>
							<Option value="0">Rate yourself</Option>
							<Option value="1">1</Option>
							<Option value="2">2</Option>
							<Option value="3">3</Option>
							<Option value="4">4</Option>
							<Option value="5">5</Option>
						</Select>

						<Label> </Label>
						<Area
							type="text"
							placeholder="Enter brief note about what you've learnt..."
							value={note}
							onChange={(e) => {
								setNote(e.target.value);
							}}
						/>
						<Area
							type="text"
							placeholder="Enter Code Sample..."
							value={codeSample}
							onChange={(e) => {
								setCodeSample(e.target.value);
							}}
						/>

						<Button type="submit">Submit Report</Button>
					</Card>
				</Wrapper>
			</Container>
		</div>
	);
};

export default MakeReport;

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
	/* background: ${({ bg }) => bg}; */
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	background: #f8003f;
	border-radius: 3px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	border: 0;
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
`;

const Container = styled.div`
	padding-top: 100px;
	width: 100%;
	height: 100%;
	min-height: calc(100vh - 100px);
	background-color: lightgray;
`;
