import styled from 'styled-components';

export const Box = styled.div`
	padding: 24px;

	h1,
	h2 {
		text-align: center;
	}

	.card-wrapper {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;

		& > div {
			margin: 0 16px 16px 0;
		}
	}
`;
