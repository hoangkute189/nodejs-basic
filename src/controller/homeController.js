import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
    // logic

    // let data = [];
    // Gọi query cũ
    // connection.query(
    //     'SELECT * FROM `user` ',
    //     function (err, results, fields) {
    //         console.log('>>> Check my sql:')
    //         // console.log(results);
    //         data = results.map((row) => {
    //             return row
    //         })
    //         console.log(data)
    //         return res.render('index.ejs', { dataUser: data, test: "Hoang dep giai!" }) // render view và truyền data cách nhau bởi dấu , cho view ( JSON.stringify(..) để chuyển string)
    //     });

    // Viết gọn hơn
    const [rows, fields] = await pool.execute('SELECT * FROM `user` '); // Trả về 1 mảng có 2 ptu, dùng rows và fields để hứng

    // Cách viết khác 
    // const data = await pool.execute('SELECT * FROM `user` '); // Khi lấy data thì gọi data[0]
    // const [data] = await pool.execute('SELECT * FROM `user` '); // Khi lấy data thì gọi data

    return res.render('index.ejs', { dataUser: rows, test: "Hoang dep giai!" }) // render view và truyền data cách nhau bởi dấu , cho view ( JSON.stringify(..) để chuyển string)

}

// Tạo router điều hướng trang
let getDetailPage = async (req, res) => {

    let userId = req.params.id; // Lấy param id từ đường link url

    let [user] = await pool.execute('SELECT * FROM `user` WHERE id = ? ', [userId]);
    console.log("Request Params ", user)

    return res.send(JSON.stringify(user))
}

let createNewUser = async (req, res) => {
    console.log('Check request: ', req.body)
    let { firstName, lastName, email, address } = req.body // req.body trả về object

    await pool.execute('INSERT INTO user(firstName,lastName,email,address) VALUES (?, ?, ?, ?) ',
        [firstName, lastName, email, address])

    return res.redirect('/'); // redirect là 1 API của express trở về trang router mong muốn
}

module.exports = {
    getHomepage, getDetailPage, createNewUser
}