import React from "react";
import styled from "styled-components";

const Journey = ({ text, subText }) => {
	return (
		<Container>
			<Wrapper>
				<Dot />
				<Holder>
					<Title>{text}</Title>
					<Text>{subText}</Text>
				</Holder>
				<Dot />
			</Wrapper>
		</Container>
	);
};

export default Journey;

const Text = styled.div`
	font-weight: 500;

	@media screen and (max-width: 760px) {
		text-align: center;
		font-size: 13px;
		margin-top: 10px;
	}

	@media screen and (max-width: 350px) {
		margin-top: 0px;
	}
`;

const Holder = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 38px;
	margin: 20px;
	text-align: center;
	line-height: 1;

	@media screen and (max-width: 760px) {
		text-align: center;
		font-size: 28px;
		line-height: 1.2;
	}

	@media screen and (max-width: 350px) {
		font-size: 20px;
	}
`;

const Dot = styled.div`
	border: 1px solid black;
	width: 200px;

	@media screen and (max-width: 350px) {
		width: 100px;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	color: black;
	font-weight: bold;
	width: 100%;
	min-height: 150px;
	height: 100%;
`;
