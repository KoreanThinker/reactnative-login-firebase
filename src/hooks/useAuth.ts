import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { set, remove, AuthState } from '../modules/auth';
import { useCallback } from 'react';

export default function useCounter() {
    const authData = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const setAuth = useCallback((input: AuthState) => dispatch(set(input)), [dispatch]);
    const removeAuth = useCallback(() => dispatch(remove()), [dispatch]);

    return {
        authData,
        setAuth,
        removeAuth
    };
}
