import 'dotenv/config';
import app from './app.js';


app.listen(app.get('PORT'), () => {
    console.log('Server on port:',app.get('PORT') )
});