//액션 type 선언
const SET = 'auth/SET' as const;
const REMOVE = 'auth/REMOVE' as const;

//액션 생성 함수 선언
export const set = (input: AuthState) => ({ type: SET, newAuth: input });
export const remove = () => ({ type: REMOVE });

//리듀서 type 지정
type AuthAction =
    | ReturnType<typeof set>
    | ReturnType<typeof remove>;

type LoginType = 'facebook' | 'kakao' | 'phone' | undefined;

type AuthState = {
    id: string | undefined;
    pw: string | undefined;
    loginType: LoginType;
}

const initialState: AuthState = {
    id: undefined,
    pw: undefined,
    loginType: undefined
};

//리듀서
function auth(state: AuthState = initialState, action: AuthAction): AuthState {
    switch (action.type) {
        case SET:
            return action.newAuth;
        case REMOVE:
            return initialState;
        default:
            return state;
    }
}

export default auth;