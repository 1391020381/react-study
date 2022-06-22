import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
    // history:require("history").createBrowserHistory()
    history:require("history").createHashHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/maizuo').default);
// app.model(require('./models/aaa').default);
// app.model(require('./models/bbb').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
