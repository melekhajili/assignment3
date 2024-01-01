import React, { useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';
import useOnScreen from '../hooks/useOnScreen';
import Card from './Card';

function CardsPage() {
    const { data, loading, error, page, setPage } = useFetch('http://localhost:8000/flashs', 1, 10);
    const [ref, isIntersecting] = useOnScreen({ threshold: 0.1 });

    useEffect(() => {
        console.log(data)
    }, [data])
    useEffect(() => {
        if(isIntersecting) setPage(page + 1) 
    }, [isIntersecting])

    return (
        <div>
            {data.map((card, i) => {
                if (i == (data.length - 1)) return <div ref={ref} key={i}><Card item={card} /></div>
                return <Card key={i} item={card} />
            })}
            {loading && <div className='loading'>Loading...</div>}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default CardsPage;