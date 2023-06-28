import { Button, Container, Spinner, Center } from '@chakra-ui/react';
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../../services/axios';

export const TodoDetails = () => {
    const [todo, setTodo] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const isMounted = useRef(false);
    const {todoId} = useParams();
    
    useEffect(()=> {
        if(isMounted.current) return;
        fetchTodo();
        isMounted.current = true;
      },[])

    const fetchTodo = () => {
        setLoading(true);
        axiosInstance.get(`/todo/${todoId}`).then((res) => {
            setTodo(res.data);
        }).catch((error) => {
            setLoading(false)
        })
    };

    if(loading) {
        return (
            <Container mt={6}>
                <Center mt={6}>
                    <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="green.200"
                    color="green.500"
                    size="xl"
                    />
                </Center>
            </Container>
        );
    }
    
    return (
        <>
            <Container mt={6}>
                <Button colorScheme="gray" onClick={() => navigate('/',{replace: true})}
                >Back
                </Button>
            </Container>
        </>
    )
}
