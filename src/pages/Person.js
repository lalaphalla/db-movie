import React, { useEffect } from 'react'
import PersonDetail from '../components/PersonDetail'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPersonCredits, fetchPersonDetail } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import KnowFor from '../components/KnowFor';

export default function Person() {
    const dispatch = useDispatch();
    const { id } = useParams();
    let { personDetail,personCredits } = useSelector((state) => state.movieR);
    let { isLoading } = useSelector((state) => state.movieR);
    let { name, biography, birthday, gender, profile_path } = personDetail && personDetail || {}
    
    useEffect(() => {
        dispatch(fetchPersonDetail(id))
        dispatch(fetchPersonCredits(id))        
    }, [])

    return (
        <div>
            {isLoading ? <Loading /> :
                <>
                    <PersonDetail name={name} biography={biography} birthday={birthday} gender={gender} profile_path={profile_path} />
                    <KnowFor personCredits = {personCredits} />
                </>
            }

        </div>
    )
}
