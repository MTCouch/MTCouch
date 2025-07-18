var pg= require('pg');

var connectPG = function(){
    return pg.createConnection({
        host: 'dpg-d1sqkcp5pdvs73cs4eh0-a',
        database: 'test_vwmf',
        user: 'test_vwmf_user',
        password: 'YScHCKYoQdCJmYpMHgvWG3yqPMryc6IY',
        port: '5432'
    })
}

module.exports = function(){
    return connectPG
}