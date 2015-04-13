'use strict';

module.exports = [

    function utils() {
        function getAuthorsInfo(users_list, author_ids ) {
            var result = [];

            for(var i = 0; i < author_ids.length; i++)
            {
                for(var j = 0; j < users_list.length; j++)
                {
                    if(users_list[j].id === author_ids[i])
                    {
                        result.push(users_list[j]);
                        break;
                    }
                }
            }

            return result;
        }

        function getStateInfo(states_list, state_id) {
            var result = "err";

            for(var i = 0; i < states_list.length; i++) {
                if(states_list[i].id === state_id) {
                    result = states_list[i];
                    break;
                }
            }

            return result;
        }

        return {
            getAuthorsInfo : getAuthorsInfo,
            getStateInfo   : getStateInfo,
        };
    }
];
