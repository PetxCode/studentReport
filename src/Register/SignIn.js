import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const schemaModel = yup.object().shape({
		email: yup.string().email().required("This field has to be filled"),
		password: yup.string().required("This field has to be filled"),
		confirm: yup.string().oneOf([yup.ref("password"), null]),
	});

	//

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schemaModel),
	});

	const onSubmit = handleSubmit(async (data) => {
		// console.log(data);
		const { email, password } = data;

		const res = await axios.post(
			"https://set05report.herokuapp.com/user/signin",
			{
				email,
				password,
			}
		);

		localStorage.setItem("user", JSON.stringify(res.data.data));
		reset();

		navigate("/");
		window.location.reload();
	});

	useEffect(() => {}, []);

	return (
		<div>
			<Container>
				<Wrapper>
					<Card onSubmit={onSubmit}>
						<Title>Sign into your Account here</Title>

						<Label> {errors.email && errors.email.message}</Label>
						<Input placeholder="Enter your email" {...register("email")} />

						<Label> {errors.password && errors.password.message}</Label>
						<Input
							type="password"
							placeholder="Enter your password"
							{...register("password")}
						/>

						<Button type="submit">Sign In</Button>

						<Click>
							Don't have an account yet,{" "}
							<Span to="/register">Register Here</Span>
						</Click>
					</Card>
				</Wrapper>
			</Container>
		</div>
	);
};

export default SignIn;

const Click = styled.div`
	margin-top: 30px;
`;

const Span = styled(Link)`
	text-decoration: none;
	color: red;
	font-weight: bold;
`;

const Label = styled.label`
	font-size: 12px;
	color: red;
	font-weight: bold;
`;
const Button = styled.button`
	color: white;
	padding: 15px 30px;
	background: #004080;
	font-size: 20px;
	transition: all 350ms;
	transform: scale(1);
	border-radius: 3px;
	margin-top: 20px;
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
	margin-bottom: 40px;
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
