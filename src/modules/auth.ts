//액션 type 선언
const SET = 'auth/SET' as const;
const REMOVE = 'auth/REMOVE' as const;
const FACEBOOK = 'auth/FACEBOOK' as const;

//액션 생성 함수 선언
export const set = (input: AuthState) => ({ type: SET, newAuth: input });
export const remove = () => ({ type: REMOVE });
export const facebook = () => ({ type: FACEBOOK });
//리듀서 type 지정
type AuthAction =
    | ReturnType<typeof set>
    | ReturnType<typeof remove>
    | ReturnType<typeof facebook>;

type LoginType = 'facebook' | 'kakao' | 'email' | undefined;

export type AuthState = {
    email: string | undefined;
    pw: string | undefined;
    phoneNumber: string;
    loginType: LoginType;
}

const initialState: AuthState = {
    email: undefined,
    pw: undefined,
    phoneNumber: '',
    loginType: undefined
};

//리듀서
function auth(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case SET:
            return action.newAuth;
        case REMOVE:
            return initialState;
        case FACEBOOK:
            return state;
        default:
            return state;
    }
}

export default auth;