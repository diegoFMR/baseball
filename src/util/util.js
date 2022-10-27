let host = 'https://master.d17zgtsvqhwk0b.amplifyapp.com:4200';

const util = {
    API: {
        USER: {
            FIND_USER: `${host}/user/findUser`,
            
        },
        TEAM: {
            LIST: `${host}/team/list`
        },
        GAME: {
            DELETE: `${host}/game/delete`,
            CREATE: `${host}/game/create`,
            UPDATE: `${host}/game/update`
        },
        STADIUM: {
            LIST: `${host}/stadium/list`
        }
    }
}

export default util;