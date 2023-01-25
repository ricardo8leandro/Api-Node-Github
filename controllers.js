const { generateOptions } = require('./utils');
const https = require('https');

const getUsers= async function (req, res) {
    const since = req.query.since;
    const per_page = req.query.per_page;

    const options = generateOptions(`/users?since=${since}&per_page=${per_page}`)

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
        console.log(apiResponse);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

const getUser= async function (req, res) {
    const user = req.params.user;
    const options = generateOptions('/users/' + user)


    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}


const getUserRepo= async function (req, res) {
    const user = req.params.user;
    const options = generateOptions('/users/' + user + '/repos') 

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })
}

module.exports = { getUser, getUsers, getUserRepo }