import { Request, Response } from "express";
import todos from "../data/todos.json";

export class TodoController {
	public index(req: Request, res: Response) {
		res.send('hello');
	}

  public todos(req: Request, res: Response) {
		res.status(200).json(todos);
	}

	public todo(req: Request, res: Response) {
		const id = parseInt(req.params.id);
		const todo= todos.find(p => p.id == id);
		res.status(200).json(todo);
 	}
}
