import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const SingleRoutine = ({routines}) => {

    const { id } = useParams();

    const navigate = useNavigate();

    return (
      <div>
          <button type="button" class="btn btn-primary"onClick={() => navigate(`/routines`)}>Go back</button>
          <h1>Welcome to the single routine page!</h1>
      </div>
    );
  }

export default SingleRoutine