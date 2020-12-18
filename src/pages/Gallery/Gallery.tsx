import React from 'react';
import { useParams } from 'react-router-dom';
import { useCriteria } from '../../utils/useCriteria';

function Gallery() {
  const { criteria } = useParams<{ criteria: string }>();
  const { data, isLoading, isError } = useCriteria(Boolean(criteria), criteria);

  return (
    <div style={{ overflow: 'auto', width: '90%' }}>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Gallery;
