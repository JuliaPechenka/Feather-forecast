import axios from 'axios';

module.exports = {
    getSomething: function(param) {
        var encodedURI = window.encodeURI('url' + param);

        return axios.get(encodedURI)
            .then(function(response){
                return response.data;
            })
    },
};