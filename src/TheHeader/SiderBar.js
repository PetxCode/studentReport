import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../Register/AuthProvider";

const SideBar = ({ toggle, setToggle }) => {
	const { currentUser } = useContext(AuthContext);

	return (
		<div>
			<Container>
				<Wrapper>
					{currentUser ? (
						<Button
							onClick={() => {
								setToggle(false);
								localStorage.removeItem("user");
							}}
						>
							LogOut
						</Button>
					) : (
						<ButtonLink
							to="/signin"
							onClick={() => {
								setToggle(false);
							}}
						>
							Sign In
						</ButtonLink>
					)}

					<Line />
					<ButtonLink
						to="/report"
						onClick={() => {
							setToggle(false);
						}}
					>
						Add Report
					</ButtonLink>
					<ButtonLink
						to="/note"
						onClick={() => {
							setToggle(false);
						}}
					>
						Add Your Best Note
					</ButtonLink>
				</Wrapper>
			</Container>
		</div>
	);
};

export default SideBar;

const ButtonLink = styled(Link)`
	color: white;
	text-decoration: none;
	margin-right: 20px;
	padding: 16px 60px;
	background-color: ${({ bg }) => bg};
	color: ${({ cl }) => cl};
	border-radius: 2px;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 15px;
	text-align: center;

	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.05);
		cursor: pointer;
		color: white;
		background-color: #004080;
	}
`;

const Line = styled.div`
	margin: 20px 0;
	width: 100%;
	border-bottom: 0.1px solid;
	/* border-color: white; */
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Button = styled.div`
	width: 80%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
	color: black;
	font-weight: bold;
	margin: 20px 0;
	border-radius: 3px;

	transition: all 350ms;
	transform: scale(1);

	:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
`;
const Nav = styled.div`
	width: 300px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
	transition: all 350ms;
	transform: scale(1);
	font-size: 20px;
	border-radius: 3px;

	img {
		width: 25px;
		height: 25px;
		object-fit: contain;
		margin-right: 10px;
	}

	:hover {
		transform: scale(1.02);
		cursor: pointer;
		background-color: #fbc91b;

		color: black;
	}
`;

const Wrapper = styled.div`
	padding-top: 50px;
	display: flex;
	flex-direction: column;
	padding: 0 20px;
	align-items: center;
`;

const Container = styled.div`
	display: none;

	@media screen and (max-width: 850px) {
		width: 100%;
		height: 95vh;
		background-color: black;
		color: white;
		display: block;
	}
`;
