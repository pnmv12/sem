export default function handler(req, res) {
    const { email, password } = req.body;
    if(email == process.env.LOGIN && password == process.env.PASSWORD) {
        res.status(200).json({ success: true });
    }else{
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
}
