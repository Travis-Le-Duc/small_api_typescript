import express from "express";
import { Routes } from "./config/routes";

export class App {
	public appExpress: express.Application;

	constructor() {
		this.appExpress = express();
		this.config();
	}

	private config(): void {
		this.appExpress.use(express.json());

		const routes = new Routes();
		routes.routes(this.appExpress);
	}
}
