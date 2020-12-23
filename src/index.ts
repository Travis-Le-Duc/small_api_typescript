import { App } from "./app";

const app = new App();
app.appExpress.listen(3000, () => {
	return console.log('server is listning');
});
