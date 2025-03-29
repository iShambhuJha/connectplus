const auth = (req, res, next) => {
    const token = 'xyz';
    const isAuth = token ==='xyz';

    if(isAuth){
        next()
    } else{
        res.status(401).send('unauth user')
    }
}

module.exports = { auth };