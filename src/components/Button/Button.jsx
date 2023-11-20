import PropTypes from 'prop-types';
import { Button } from './Button.styled.js';

export const LoadMoreButton = ({ getNextPage }) => {
    return( <Button className="Button" type="button" onClick={getNextPage}>Load more</Button>  )
}

LoadMoreButton.propTypes = {
    getNextPage: PropTypes.func.isRequired,
}