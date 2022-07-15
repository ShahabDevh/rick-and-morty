import React from 'react';
import { useParams } from 'react-router';
import { useQuery, useQueries } from 'react-query';
import axios from 'axios';
import Card from '../../components/characterCard';
import Episode from '../../components/episode';
import InfoCard from '../../components/infoCard';
import LoadingSpinner from '../../components/loadingSpinner';

import { Box, LoaderContainer } from './styles.js';

// api character
const fetchSingleCharacter = async characterId =>
	await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);

function CharacterInfo() {
	const { id } = useParams();

	const {
		data: character,
		status,
		error,
	} = useQuery([`character-${id}`], () => fetchSingleCharacter(id));

	const [episode, location, origin] = useQueries([
		{
			queryKey: [`character-${id}-episodes`],
			queryFn: async () =>
				await axios.get(
					`https://rickandmortyapi.com/api/episode/${character.data.episode
						.map(item => item.split('/')[5])
						.join(',')}`
				),
			enabled: status === 'success',
		},
		{
			queryKey: [`character-${id}-location`],
			queryFn: async () => await axios.get(character.data.location.url),
			enabled: status === 'success',
		},
		{
			queryKey: [`character-${id}-origin`],
			queryFn: async () =>
				character.data.origin.url
					? await axios.get(character.data.origin.url)
					: null,
			enabled: status === 'success',
		},
	]);

	if (status === 'loading') {
		return (
			<LoaderContainer>
				<LoadingSpinner />
			</LoaderContainer>
		);
	}

	if (status === 'error') {
		return <p>{error.message}</p>;
	}

	return (
		<Box>
			<div className="title-wrapper">
				<h1>{character.data.name} Wiki</h1>
				<h2>Detail information</h2>
			</div>

			<div className="flex-box">
				<div className="col col--small">
					<Card data={character.data} />

					{origin.status === 'success' && (
						<InfoCard data={origin.data ? origin.data.data : null} />
					)}
					{location.status === 'success' && <InfoCard data={location.data.data} />}
				</div>
				<div className="col col--large card">
					<h3>List Of Episodes</h3>

					{episode.status === 'success' && (
						<div className="episodes-wrapper">
							{Array.isArray(episode.data.data) ? (
								episode.data.data.map((item, index) => (
									<Episode key={index} data={item} />
								))
							) : (
								<Episode data={episode.data.data} />
							)}
						</div>
					)}
				</div>
			</div>
		</Box>
	);
}

export default CharacterInfo;
