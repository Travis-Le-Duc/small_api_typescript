import { TodoController } from "../controller/todoController";

export class Routes {
  public todoController: TodoController = new TodoController();

	public routes(app): void {
		app.route("/").get(this.todoController.index);

		app.route("/todos").get(this.todoController.todos);

		app.route("/todos/:id").get(this.todoController.todo);
	}
}
