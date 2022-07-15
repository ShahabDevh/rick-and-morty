import styled from 'styled-components';

export const EpisodeContainer = styled.div`
	padding-bottom: 12px;
	border-radius: 4px;

	&:not(:last-child) {
		border-bottom: 1px solid #e5e5e5;
	}

	h4 {
		margin: 8px 0 12px;
	}

	.blue-chips {
		display: inline-block;
		padding: 0 10px;
		background: #1e87f0;
		color: #fff;
		border-radius: 2px;
		margin-right: 8px;
		text-transform: uppercase;
		font-size: 12px;
	}

	& > span:not(.blue-chips) {
		color: #999;
	}
`;
