export default function (state={},action)
{
    switch(action.type)
    {
        case "USER_LOGGED_IN":
            return {
                ...state.user,
                username :action.payload
            }
            default :
            return  state;
    }
}