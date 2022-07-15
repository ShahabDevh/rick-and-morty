import React, { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import CharacterCard from '../../components/characterCard';
import LoadingSpinner from '../../components/loadingSpinner';

import { Box } from './styles';

const firstPageUrl = 'https://rickandmortyapi.com/api/character/?page=1';

function Characters() {
	const [ref, inView] = useInView({ threshold: 0 });

	const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useInfiniteQuery(
			'characters',
			({ pageParam = firstPageUrl }) => axios.get(pageParam),
			{
				getNextPageParam: lastPage => lastPage.data.info.next,
			}
		);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	if (status === 'error') {
		return <p>{error.message}</p>;
	}

	return (
		<Box>
			<h1>Ricky And Morty Wiki</h1>
			<h2>List of Characters</h2>

			<div className="card-wrapper">
				{status === 'loading' ? (
					<LoadingSpinner />
				) : (
					data.pages.map((item, index) => (
						<React.Fragment key={index}>
							{item.data.results.map(item => (
								<CharacterCard key={item.id} data={item} hasButton />
							))}
						</React.Fragment>
					))
				)}
			</div>
			{hasNextPage && isFetchingNextPage && (
				<div style={{ textAlign: 'center', padding: '24px' }}>
					<LoadingSpinner />
				</div>
			)}
			{hasNextPage && <div ref={ref} />}
		</Box>
	);
}

export default Characters;
