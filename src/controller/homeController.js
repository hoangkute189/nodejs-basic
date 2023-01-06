import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    // logic
    let data = [];
    connection.query(
    'SELECT * FROM `user` ',
    function(err, results, fields) {
        console.log('>>> Check my sql:')
        // console.log(results);
        data = results.map((row) => {
            return row
        })
        console.log(data)
        return res.render('index.ejs', {dataUser: JSON.stringify(data)})
    });
    
}

module.exports = {
    getHomepage
}