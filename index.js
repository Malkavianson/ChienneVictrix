import express from 'express';
import path from 'path';
import s from './public/js/social.js';
import c from './public/js/contact.js';
const social = s.social;
const contact = c.contact;
const PORT = process.env.PORT || 3069;
const app = express();
const __dirname = path.resolve(path.dirname(''));



app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
	res.render ('index', {social, contact});
});

app.listen(PORT, () => {console.clear(); console.log(`Chienne online in http://localhost:${PORT}`)});