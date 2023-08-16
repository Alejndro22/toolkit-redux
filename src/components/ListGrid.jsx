import PropTypes from 'prop-types';

export const ListGrid = ({ results }) => {
  return (
    <ul>
      {results.map(({ url, name }) => (
        <li key={url}>{name}</li>
      ))}
    </ul>
  );
};

ListGrid.propTypes = {
  results: PropTypes.array.isRequired,
};
