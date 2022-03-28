import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import SideBar from "./SiderBar";
import { AuthContext } from "../Register/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const { currentUser } = useContext(AuthContext);

	console.log(currentUser);
	const onToggle = () => {
		setToggle(!toggle);
	};

	return (
		<Head>
			<Head1>
				<Container>
					<Wrapper>
						<Logo to="/">
							<Log src="/set05.png" />
						</Logo>

						<Navigation>
							{currentUser ? (
								<ButtonLink to="/report" bg="#2443a7" cl="white">
									Add Report
								</ButtonLink>
							) : null}
							{currentUser ? (
								<ButtonLink to="/note" bg="red" cl="white">
									Best Note
								</ButtonLink>
							) : null}

							{currentUser ? (
								<Button
									onClick={() => {
										localStorage.removeItem("user");
										window.location.reload();
									}}
									bg="white"
									cl="#2443a7"
								>
									Log Out
								</Button>
							) : (
								<ButtonLink to="/signin" bg="white" cl="#2443a7">
									Sign in
								</ButtonLink>
							)}
						</Navigation>

						<Menu onClick={onToggle} />
					</Wrapper>
				</Container>
				{toggle ? <SideBar toggle={toggle} setToggle={setToggle} /> : null}
			</Head1>
		</Head>
	);
};

export default Header;

const Head1 = styled.div`
	/* position: relative; */
`;

const Head = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 11;
`;

const Cart = styled.div`
	display: none;

	@media screen and (max-width: 850px) {
		display: block;
	}
`;

const Menu = styled(BiMenu)`
	display: none;

	@media screen and (max-width: 850px) {
		display: block;
		margin-right: 20px;
		font-size: 60px;
		transition: all 350ms;
		transform: scale(1);

		:hover {
			transform: scale(1.05);
			cursor: pointer;
		}
	}
`;

const ButtonLink = styled(Link)`
	text-decoration: none;
	margin-right: 20px;
	padding: 12px 20px;
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
	}
`;
const Button = styled.div`
	margin-right: 20px;
	padding: 12px 20px;
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
	}
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 20px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			width: 20px;
			height: 20px;
		}

		span {
			font-size: 13px;
			font-weight: bold;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform: scaleX(1);
				transform-origin: left center;
				transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`;

const Nav = styled.div`
	display: flex;
	margin: 0 10px;

	a {
		display: flex;
		align-items: center;

		img {
			width: 25px;
			height: 25px;
			margin: 0 10px;
			transform: scale(1);
			transition: all 350ms;
			margin-top: 5px;
		}

		span {
			position: relative;
			transform: scale(1);
			transition: all 350ms;
			&:after {
				content: "";
				height: 3px;
				background-color: white;
				top: 20px;
				position: absolute;
				left: 0;
				right: 0;

				opacity: 0;
				transition: all 350ms;
				transform: scaleX(1.15);
				transform-origin: center;
			}
		}
		:hover {
			cursor: pointer;

			img {
				transform: scale(1.42);
			}

			span {
				transform: scale(1.05);
				font-weight: bold;
				letter-spacing: 1.15px;
				&:after {
					opacity: 1;
					transform: scale(1.05);
				}
			}
		}
	}
`;

const Navigation = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 850px) {
		display: none;
	}
`;

const Log = styled.img`
	width: 200px;
	height: 60px;
	object-fit: contain;
`;

const Logo = styled(Link)`
	text-decoration: none;
	color: white;
	margin-left: 20px;
	width: 200px;
	/* height: 40px; */
	object-fit: contain;
	transition: all 350ms;
	transform: scale(1);
	font-weight: bold;
	font-style: italic;
	letter-spacing: 0.6px;
	font-size: 20px;

	:hover {
		transform: scale(1.05);
		cursor: pointer;
		color: white;
	}
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 80px;
	justify-content: space-between;
`;

const Container = styled.div`
	color: white;
	background-color: black;
	width: 100%;
	height: 80px;
	z-index: 1;
`;
