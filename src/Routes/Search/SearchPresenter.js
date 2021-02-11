import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Message from 'Components/Message';
import Poster from 'Components/Poster';
import { Helmet } from 'react-helmet-async';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({ movieResult, tvResult, searchTerm, error, loading, handleSubmit, updateTerm }) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search Movies or TV Show..." value={searchTerm} onChange={updateTerm}></Input>
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResult && movieResult.length > 0 && (
          <Section title="Movie Result">
            {movieResult.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                isMovie={true}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {tvResult && tvResult.length > 0 && (
          <Section title="TV Show Result">
            {tvResult.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                isMovie={false}
                year={show.first_air_date && show.first_air_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResult && movieResult && tvResult.length === 0 && movieResult.length === 0 && <Message text="Noting found" color="#95a5a6" />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchPresenter;
