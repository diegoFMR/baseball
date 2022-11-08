let host = 'https://precious-hoodie-slug.cyclic.app';

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
            UPDATE: `${host}/game/update`,
            FIND_BY_ID: `${host}/game/findById`
        },
        STADIUM: {
            LIST: `${host}/stadium/list`
        }
    }
}

export default util;